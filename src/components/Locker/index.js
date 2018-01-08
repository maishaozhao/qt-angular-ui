import './stylesheet.scss'

import defaults from 'lodash/defaults'
import angular from 'angular'
import Spinner from '../Spinner'
import { config as Config, FlashController } from '../../controllers/FlashController'
import Template from './template.pug'

const App = angular.module('QtNgUi.Locker', [
  Spinner
])

class Service {
  constructor () {
    this.defaultSettings = defaults({ content: '努力加载中' }, Config)
  }

  configure (options) {
    this.defaultSettings = defaults({}, options, this.defaultSettings)
  }

  $get ($rootScope, $compile) {
    'ngInject'

    let $newScope = $rootScope.$new()
    $newScope.lockerOptions = this.defaultSettings

    let $component = $compile('<locker locker-options = "lockerOptions"></locker>')($newScope)
    let $scope = $component.children().scope()

    angular.element(document.body).append($component)

    const show = function (options, callback) {
      $scope.show(options, callback)
    }

    const hide = function (options, callback) {
      $scope.hide(options, callback)
    }

    return { show, hide }
  }
}

const Component = ($timeout) => ({
  restrict: 'E',
  replace: true,
  template: Template,
  controller: FlashController,
  controllerAs: '$ctrl',
  scope: {
    options: '=?lockerOptions'
  },
  link ($scope, $element, $attr, ctrl) {
    let settings = defaults({}, $scope.options, Config)
    ctrl.configure($scope, $element, settings)

    $scope.content = settings.content
    $scope.show = ctrl.show.bind(ctrl, $scope, $element)
    $scope.hide = ctrl.hide.bind(ctrl, $scope, $element)
    $scope.dismiss = ctrl.dismiss.bind(ctrl, $scope, $element)
  }
})

App.provider('$locker', Service)
App.directive('locker', Component)

export default App.name
