!function(modules){function __webpack_require__(moduleId){if(installedModules[moduleId])return installedModules[moduleId].exports;var module=installedModules[moduleId]={i:moduleId,l:!1,exports:{}};return modules[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.l=!0,module.exports}var installedModules={};__webpack_require__.m=modules,__webpack_require__.c=installedModules,__webpack_require__.d=function(exports,name,getter){__webpack_require__.o(exports,name)||Object.defineProperty(exports,name,{configurable:!1,enumerable:!0,get:getter})},__webpack_require__.n=function(module){var getter=module&&module.__esModule?function(){return module.default}:function(){return module};return __webpack_require__.d(getter,"a",getter),getter},__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property)},__webpack_require__.p="/",__webpack_require__(__webpack_require__.s=549)}({13:function(module,exports){require("./angular"),module.exports=angular},14:function(module,exports,__webpack_require__){var root=__webpack_require__(2),Symbol=root.Symbol;module.exports=Symbol},19:function(module,exports,__webpack_require__){"use strict";function pug_merge(a,b){if(1===arguments.length){for(var attrs=a[0],i=1;i<a.length;i++)attrs=pug_merge(attrs,a[i]);return attrs}for(var key in b)if("class"===key){var valA=a[key]||[];a[key]=(Array.isArray(valA)?valA:[valA]).concat(b[key]||[])}else if("style"===key){var valA=pug_style(a[key]),valB=pug_style(b[key]);a[key]=valA+valB}else a[key]=b[key];return a}function pug_classes_array(val,escaping){for(var className,classString="",padding="",escapeEnabled=Array.isArray(escaping),i=0;i<val.length;i++)(className=pug_classes(val[i]))&&(escapeEnabled&&escaping[i]&&(className=pug_escape(className)),classString=classString+padding+className,padding=" ");return classString}function pug_classes_object(val){var classString="",padding="";for(var key in val)key&&val[key]&&pug_has_own_property.call(val,key)&&(classString=classString+padding+key,padding=" ");return classString}function pug_classes(val,escaping){return Array.isArray(val)?pug_classes_array(val,escaping):val&&"object"==typeof val?pug_classes_object(val):val||""}function pug_style(val){if(!val)return"";if("object"==typeof val){var out="";for(var style in val)pug_has_own_property.call(val,style)&&(out=out+style+":"+val[style]+";");return out}return val+="",";"!==val[val.length-1]?val+";":val}function pug_attr(key,val,escaped,terse){return!1!==val&&null!=val&&(val||"class"!==key&&"style"!==key)?!0===val?" "+(terse?key:key+'="'+key+'"'):("function"==typeof val.toJSON&&(val=val.toJSON()),"string"==typeof val||(val=JSON.stringify(val),escaped||-1===val.indexOf('"'))?(escaped&&(val=pug_escape(val))," "+key+'="'+val+'"'):" "+key+"='"+val.replace(/'/g,"&#39;")+"'"):""}function pug_attrs(obj,terse){var attrs="";for(var key in obj)if(pug_has_own_property.call(obj,key)){var val=obj[key];if("class"===key){val=pug_classes(val),attrs=pug_attr(key,val,!1,terse)+attrs;continue}"style"===key&&(val=pug_style(val)),attrs+=pug_attr(key,val,!1,terse)}return attrs}function pug_escape(_html){var html=""+_html,regexResult=pug_match_html.exec(html);if(!regexResult)return _html;var i,lastIndex,escape,result="";for(i=regexResult.index,lastIndex=0;i<html.length;i++){switch(html.charCodeAt(i)){case 34:escape="&quot;";break;case 38:escape="&amp;";break;case 60:escape="&lt;";break;case 62:escape="&gt;";break;default:continue}lastIndex!==i&&(result+=html.substring(lastIndex,i)),lastIndex=i+1,result+=escape}return lastIndex!==i?result+html.substring(lastIndex,i):result}function pug_rethrow(err,filename,lineno,str){if(!(err instanceof Error))throw err;if(!("undefined"==typeof window&&filename||str))throw err.message+=" on line "+lineno,err;try{str=str||__webpack_require__(53).readFileSync(filename,"utf8")}catch(ex){pug_rethrow(err,null,lineno)}var context=3,lines=str.split("\n"),start=Math.max(lineno-context,0),end=Math.min(lines.length,lineno+context),context=lines.slice(start,end).map(function(line,i){var curr=i+start+1;return(curr==lineno?"  > ":"    ")+curr+"| "+line}).join("\n");throw err.path=filename,err.message=(filename||"Pug")+":"+lineno+"\n"+context+"\n\n"+err.message,err}var pug_has_own_property=Object.prototype.hasOwnProperty;exports.merge=pug_merge,exports.classes=pug_classes,exports.style=pug_style,exports.attr=pug_attr,exports.attrs=pug_attrs;var pug_match_html=/["&<>]/;exports.escape=pug_escape,exports.rethrow=pug_rethrow},2:function(module,exports,__webpack_require__){var freeGlobal=__webpack_require__(26),freeSelf="object"==typeof self&&self&&self.Object===Object&&self,root=freeGlobal||freeSelf||Function("return this")();module.exports=root},26:function(module,exports,__webpack_require__){(function(global){var freeGlobal="object"==typeof global&&global&&global.Object===Object&&global;module.exports=freeGlobal}).call(exports,__webpack_require__(38))},38:function(module,exports){var g;g=function(){return this}();try{g=g||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(g=window)}module.exports=g},4:function(module,exports){function isObjectLike(value){return null!=value&&"object"==typeof value}module.exports=isObjectLike},457:function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}Object.defineProperty(exports,"__esModule",{value:!0}),__webpack_require__(458);var _isBoolean=__webpack_require__(97),_isBoolean2=_interopRequireDefault(_isBoolean),_angular=__webpack_require__(13),_angular2=_interopRequireDefault(_angular),_template=__webpack_require__(459),_template2=_interopRequireDefault(_template),App=_angular2.default.module("QtNgUi.Checkbox",[]),Controller=["$scope",function($scope){$scope.checked=!1}],Checkbox=["$rootScope",function($rootScope){return{restrict:"EA",transclude:!0,replace:!0,controller:Controller,template:_template2.default,require:["^checkbox","^?ngModel"],scope:{model:"=?ngModel",ngChecked:"=?ngChecked",ngDisabled:"=?ngDisabled",ngChange:"&"},link:function($scope,$element,$attrs,ctrls){var CheckboxCtrl=ctrls[0];$scope.attrId=$attrs.id,$scope.attrName=($attrs.ngModel||"checkbox-"+(Date.now()+Math.round(100*Math.random()))).replace(/\[([\w\W]+?)\]/g,"[]"),$scope.attrValue=!$attrs.hasOwnProperty("value")||$attrs.value,$scope.attrNgTrueValue=$attrs.hasOwnProperty("ngTrueValue")?$attrs.ngTrueValue:$scope.attrValue,$scope.attrNgFalseValue=!!$attrs.hasOwnProperty("ngFalseValue")&&$attrs.ngFalseValue,$scope.attrNgChecked=$attrs.ngChecked,$scope.disabled=$attrs.hasOwnProperty("disabled"),$scope.checked=(0,_isBoolean2.default)($scope.model)?$scope.model:$attrs.hasOwnProperty("checked"),$scope.stopPropagation=$attrs.hasOwnProperty("stopPropagation"),$scope.preventDefault=$attrs.hasOwnProperty("preventDefault"),$scope.toggle=function(isChecked){isChecked=_angular2.default.isDefined(isChecked)?!!isChecked:!$scope.checked,$scope.checked=isChecked},$element.removeAttr("id").on("click",function(event){if($scope.stopPropagation&&event.stopPropagation(),$scope.preventDefault&&event.preventDefault(),$scope.disabled)return event.stopPropagation(),event.preventDefault(),!1;$scope.toggle();var isChecked=$scope.checked;$rootScope.$apply(function(){$scope.model=isChecked?$scope.attrNgTrueValue:$scope.attrNgFalseValue}),CheckboxCtrl.toggle(isChecked,!0,!0),$rootScope.$digest()}),$scope.$watch("ngChecked",function(isChecked){_angular2.default.isDefined(isChecked)&&($element.attr("checked",isChecked),$scope.toggle(!!isChecked),CheckboxCtrl.toggle(isChecked),$scope.model=$scope.checked?$scope.attrNgTrueValue:$scope.attrNgFalseValue)}),$scope.$watch("ngDisabled",function(isDisabled){"boolean"==typeof isDisabled&&($scope.disabled=isDisabled)}),$scope.$watch("model",function(value){var isChecked=$scope.checked=!0===value||value==$scope.attrNgTrueValue;!0!==$scope.attrNgTrueValue&&!0===value?$scope.model=$scope.attrNgTrueValue:!1!==$scope.attrNgFalseValue&&!1===value&&($scope.model=$scope.attrNgFalseValue),$element.attr("checked",isChecked),$scope.toggle(isChecked),CheckboxCtrl.toggle(isChecked,!1)}),_angular2.default.isUndefined($scope.model)&&($scope.model=$scope.checked?$scope.attrNgTrueValue:$scope.attrNgFalseValue)}}}],Origin=function(){return{restrict:"A",require:"^checkbox",scope:!1,link:function($scope,$element,$attrs,ctrl){ctrl.select=function(isChecked){var trigger=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],force=arguments.length>2&&void 0!==arguments[2]&&arguments[2];isChecked=!!isChecked,(force||isChecked!==$element.prop("checked"))&&($element.prop("checked",isChecked).attr("checked",isChecked),trigger&&$element.triggerHandler("change"))},ctrl.toggle=function(isChecked,trigger,force){ctrl.select(isChecked,trigger,force)},$element.on("change",function(){$scope.toggle(!!$element.prop("checked")),$scope.ngChange&&$scope.ngChange()})}}};App.directive("checkbox",Checkbox),App.directive("checkboxOrigin",Origin),exports.default=App.name},458:function(module,exports){},459:function(module,exports,__webpack_require__){function template(locals){var pug_html="";return pug_html+='<div class="checkbox checkbox-replace" ng-class="{ disabled: disabled }"><input checkbox-origin ng-class="{ disabled: disabled }" ng-model="ngModel" ng-attr-id="{{ attrId }}" ng-attr-name="{{ attrName }}" ng-attr-value="{{ attrValue }}" ng-disabled="disabled" type="checkbox"><div class="checkbox-icon"></div><div class="checkbox-inner" ng-transclude></div></div>'}__webpack_require__(19);module.exports=template},5:function(module,exports,__webpack_require__){function baseGetTag(value){return null==value?void 0===value?undefinedTag:nullTag:symToStringTag&&symToStringTag in Object(value)?getRawTag(value):objectToString(value)}var Symbol=__webpack_require__(14),getRawTag=__webpack_require__(57),objectToString=__webpack_require__(58),nullTag="[object Null]",undefinedTag="[object Undefined]",symToStringTag=Symbol?Symbol.toStringTag:void 0;module.exports=baseGetTag},53:function(module,exports){},549:function(module,exports,__webpack_require__){module.exports=__webpack_require__(457)},57:function(module,exports,__webpack_require__){function getRawTag(value){var isOwn=hasOwnProperty.call(value,symToStringTag),tag=value[symToStringTag];try{value[symToStringTag]=void 0;var unmasked=!0}catch(e){}var result=nativeObjectToString.call(value);return unmasked&&(isOwn?value[symToStringTag]=tag:delete value[symToStringTag]),result}var Symbol=__webpack_require__(14),objectProto=Object.prototype,hasOwnProperty=objectProto.hasOwnProperty,nativeObjectToString=objectProto.toString,symToStringTag=Symbol?Symbol.toStringTag:void 0;module.exports=getRawTag},58:function(module,exports){function objectToString(value){return nativeObjectToString.call(value)}var objectProto=Object.prototype,nativeObjectToString=objectProto.toString;module.exports=objectToString},97:function(module,exports,__webpack_require__){function isBoolean(value){return!0===value||!1===value||isObjectLike(value)&&baseGetTag(value)==boolTag}var baseGetTag=__webpack_require__(5),isObjectLike=__webpack_require__(4),boolTag="[object Boolean]";module.exports=isBoolean}});