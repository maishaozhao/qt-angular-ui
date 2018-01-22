!function(modules){function __webpack_require__(moduleId){if(installedModules[moduleId])return installedModules[moduleId].exports;var module=installedModules[moduleId]={i:moduleId,l:!1,exports:{}};return modules[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.l=!0,module.exports}var installedModules={};__webpack_require__.m=modules,__webpack_require__.c=installedModules,__webpack_require__.d=function(exports,name,getter){__webpack_require__.o(exports,name)||Object.defineProperty(exports,name,{configurable:!1,enumerable:!0,get:getter})},__webpack_require__.n=function(module){var getter=module&&module.__esModule?function(){return module.default}:function(){return module};return __webpack_require__.d(getter,"a",getter),getter},__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property)},__webpack_require__.p="/",__webpack_require__(__webpack_require__.s=556)}({113:function(module,exports,__webpack_require__){function baseKeys(object){if(!isPrototype(object))return nativeKeys(object);var result=[];for(var key in Object(object))hasOwnProperty.call(object,key)&&"constructor"!=key&&result.push(key);return result}var isPrototype=__webpack_require__(36),nativeKeys=__webpack_require__(114),objectProto=Object.prototype,hasOwnProperty=objectProto.hasOwnProperty;module.exports=baseKeys},114:function(module,exports,__webpack_require__){var overArg=__webpack_require__(63),nativeKeys=overArg(Object.keys,Object);module.exports=nativeKeys},115:function(module,exports){function arrayEach(array,iteratee){for(var index=-1,length=null==array?0:array.length;++index<length&&!1!==iteratee(array[index],index,array););return array}module.exports=arrayEach},116:function(module,exports,__webpack_require__){function baseForOwn(object,iteratee){return object&&baseFor(object,iteratee,keys)}var baseFor=__webpack_require__(77),keys=__webpack_require__(47);module.exports=baseForOwn},117:function(module,exports,__webpack_require__){function createBaseEach(eachFunc,fromRight){return function(collection,iteratee){if(null==collection)return collection;if(!isArrayLike(collection))return eachFunc(collection,iteratee);for(var length=collection.length,index=fromRight?length:-1,iterable=Object(collection);(fromRight?index--:++index<length)&&!1!==iteratee(iterable[index],index,iterable););return collection}}var isArrayLike=__webpack_require__(12);module.exports=createBaseEach},118:function(module,exports,__webpack_require__){function castFunction(value){return"function"==typeof value?value:identity}var identity=__webpack_require__(17);module.exports=castFunction},12:function(module,exports,__webpack_require__){function isArrayLike(value){return null!=value&&isLength(value.length)&&!isFunction(value)}var isFunction=__webpack_require__(8),isLength=__webpack_require__(25);module.exports=isArrayLike},13:function(module,exports){require("./angular"),module.exports=angular},14:function(module,exports,__webpack_require__){var root=__webpack_require__(2),Symbol=root.Symbol;module.exports=Symbol},17:function(module,exports){function identity(value){return value}module.exports=identity},19:function(module,exports,__webpack_require__){"use strict";function pug_merge(a,b){if(1===arguments.length){for(var attrs=a[0],i=1;i<a.length;i++)attrs=pug_merge(attrs,a[i]);return attrs}for(var key in b)if("class"===key){var valA=a[key]||[];a[key]=(Array.isArray(valA)?valA:[valA]).concat(b[key]||[])}else if("style"===key){var valA=pug_style(a[key]),valB=pug_style(b[key]);a[key]=valA+valB}else a[key]=b[key];return a}function pug_classes_array(val,escaping){for(var className,classString="",padding="",escapeEnabled=Array.isArray(escaping),i=0;i<val.length;i++)(className=pug_classes(val[i]))&&(escapeEnabled&&escaping[i]&&(className=pug_escape(className)),classString=classString+padding+className,padding=" ");return classString}function pug_classes_object(val){var classString="",padding="";for(var key in val)key&&val[key]&&pug_has_own_property.call(val,key)&&(classString=classString+padding+key,padding=" ");return classString}function pug_classes(val,escaping){return Array.isArray(val)?pug_classes_array(val,escaping):val&&"object"==typeof val?pug_classes_object(val):val||""}function pug_style(val){if(!val)return"";if("object"==typeof val){var out="";for(var style in val)pug_has_own_property.call(val,style)&&(out=out+style+":"+val[style]+";");return out}return val+="",";"!==val[val.length-1]?val+";":val}function pug_attr(key,val,escaped,terse){return!1!==val&&null!=val&&(val||"class"!==key&&"style"!==key)?!0===val?" "+(terse?key:key+'="'+key+'"'):("function"==typeof val.toJSON&&(val=val.toJSON()),"string"==typeof val||(val=JSON.stringify(val),escaped||-1===val.indexOf('"'))?(escaped&&(val=pug_escape(val))," "+key+'="'+val+'"'):" "+key+"='"+val.replace(/'/g,"&#39;")+"'"):""}function pug_attrs(obj,terse){var attrs="";for(var key in obj)if(pug_has_own_property.call(obj,key)){var val=obj[key];if("class"===key){val=pug_classes(val),attrs=pug_attr(key,val,!1,terse)+attrs;continue}"style"===key&&(val=pug_style(val)),attrs+=pug_attr(key,val,!1,terse)}return attrs}function pug_escape(_html){var html=""+_html,regexResult=pug_match_html.exec(html);if(!regexResult)return _html;var i,lastIndex,escape,result="";for(i=regexResult.index,lastIndex=0;i<html.length;i++){switch(html.charCodeAt(i)){case 34:escape="&quot;";break;case 38:escape="&amp;";break;case 60:escape="&lt;";break;case 62:escape="&gt;";break;default:continue}lastIndex!==i&&(result+=html.substring(lastIndex,i)),lastIndex=i+1,result+=escape}return lastIndex!==i?result+html.substring(lastIndex,i):result}function pug_rethrow(err,filename,lineno,str){if(!(err instanceof Error))throw err;if(!("undefined"==typeof window&&filename||str))throw err.message+=" on line "+lineno,err;try{str=str||__webpack_require__(53).readFileSync(filename,"utf8")}catch(ex){pug_rethrow(err,null,lineno)}var context=3,lines=str.split("\n"),start=Math.max(lineno-context,0),end=Math.min(lines.length,lineno+context),context=lines.slice(start,end).map(function(line,i){var curr=i+start+1;return(curr==lineno?"  > ":"    ")+curr+"| "+line}).join("\n");throw err.path=filename,err.message=(filename||"Pug")+":"+lineno+"\n"+context+"\n\n"+err.message,err}var pug_has_own_property=Object.prototype.hasOwnProperty;exports.merge=pug_merge,exports.classes=pug_classes,exports.style=pug_style,exports.attr=pug_attr,exports.attrs=pug_attrs;var pug_match_html=/["&<>]/;exports.escape=pug_escape,exports.rethrow=pug_rethrow},2:function(module,exports,__webpack_require__){var freeGlobal=__webpack_require__(26),freeSelf="object"==typeof self&&self&&self.Object===Object&&self,root=freeGlobal||freeSelf||Function("return this")();module.exports=root},21:function(module,exports){module.exports=function(module){return module.webpackPolyfill||(module.deprecate=function(){},module.paths=[],module.children||(module.children=[]),Object.defineProperty(module,"loaded",{enumerable:!0,get:function(){return module.l}}),Object.defineProperty(module,"id",{enumerable:!0,get:function(){return module.i}}),module.webpackPolyfill=1),module}},23:function(module,exports){function isIndex(value,length){return!!(length=null==length?MAX_SAFE_INTEGER:length)&&("number"==typeof value||reIsUint.test(value))&&value>-1&&value%1==0&&value<length}var MAX_SAFE_INTEGER=9007199254740991,reIsUint=/^(?:0|[1-9]\d*)$/;module.exports=isIndex},25:function(module,exports){function isLength(value){return"number"==typeof value&&value>-1&&value%1==0&&value<=MAX_SAFE_INTEGER}var MAX_SAFE_INTEGER=9007199254740991;module.exports=isLength},26:function(module,exports,__webpack_require__){(function(global){var freeGlobal="object"==typeof global&&global&&global.Object===Object&&global;module.exports=freeGlobal}).call(exports,__webpack_require__(38))},3:function(module,exports){var isArray=Array.isArray;module.exports=isArray},36:function(module,exports){function isPrototype(value){var Ctor=value&&value.constructor;return value===("function"==typeof Ctor&&Ctor.prototype||objectProto)}var objectProto=Object.prototype;module.exports=isPrototype},38:function(module,exports){var g;g=function(){return this}();try{g=g||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(g=window)}module.exports=g},39:function(module,exports,__webpack_require__){var baseIsArguments=__webpack_require__(68),isObjectLike=__webpack_require__(4),objectProto=Object.prototype,hasOwnProperty=objectProto.hasOwnProperty,propertyIsEnumerable=objectProto.propertyIsEnumerable,isArguments=baseIsArguments(function(){return arguments}())?baseIsArguments:function(value){return isObjectLike(value)&&hasOwnProperty.call(value,"callee")&&!propertyIsEnumerable.call(value,"callee")};module.exports=isArguments},4:function(module,exports){function isObjectLike(value){return null!=value&&"object"==typeof value}module.exports=isObjectLike},40:function(module,exports,__webpack_require__){(function(module){var root=__webpack_require__(2),stubFalse=__webpack_require__(69),freeExports="object"==typeof exports&&exports&&!exports.nodeType&&exports,freeModule=freeExports&&"object"==typeof module&&module&&!module.nodeType&&module,moduleExports=freeModule&&freeModule.exports===freeExports,Buffer=moduleExports?root.Buffer:void 0,nativeIsBuffer=Buffer?Buffer.isBuffer:void 0,isBuffer=nativeIsBuffer||stubFalse;module.exports=isBuffer}).call(exports,__webpack_require__(21)(module))},41:function(module,exports,__webpack_require__){var baseIsTypedArray=__webpack_require__(70),baseUnary=__webpack_require__(71),nodeUtil=__webpack_require__(72),nodeIsTypedArray=nodeUtil&&nodeUtil.isTypedArray,isTypedArray=nodeIsTypedArray?baseUnary(nodeIsTypedArray):baseIsTypedArray;module.exports=isTypedArray},46:function(module,exports,__webpack_require__){function arrayLikeKeys(value,inherited){var isArr=isArray(value),isArg=!isArr&&isArguments(value),isBuff=!isArr&&!isArg&&isBuffer(value),isType=!isArr&&!isArg&&!isBuff&&isTypedArray(value),skipIndexes=isArr||isArg||isBuff||isType,result=skipIndexes?baseTimes(value.length,String):[],length=result.length;for(var key in value)!inherited&&!hasOwnProperty.call(value,key)||skipIndexes&&("length"==key||isBuff&&("offset"==key||"parent"==key)||isType&&("buffer"==key||"byteLength"==key||"byteOffset"==key)||isIndex(key,length))||result.push(key);return result}var baseTimes=__webpack_require__(67),isArguments=__webpack_require__(39),isArray=__webpack_require__(3),isBuffer=__webpack_require__(40),isIndex=__webpack_require__(23),isTypedArray=__webpack_require__(41),objectProto=Object.prototype,hasOwnProperty=objectProto.hasOwnProperty;module.exports=arrayLikeKeys},47:function(module,exports,__webpack_require__){function keys(object){return isArrayLike(object)?arrayLikeKeys(object):baseKeys(object)}var arrayLikeKeys=__webpack_require__(46),baseKeys=__webpack_require__(113),isArrayLike=__webpack_require__(12);module.exports=keys},479:function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}Object.defineProperty(exports,"__esModule",{value:!0}),__webpack_require__(480);var _angular=__webpack_require__(13),_angular2=_interopRequireDefault(_angular),_forEach=__webpack_require__(64),_forEach2=_interopRequireDefault(_forEach),_isBoolean=__webpack_require__(97),_isBoolean2=_interopRequireDefault(_isBoolean),_template=__webpack_require__(481),_template2=_interopRequireDefault(_template),App=_angular2.default.module("QtNgUi.Switch",[]),Transclude=function(){return{restrict:"EA",require:"^switch",link:function($scope,$element,$attrs,ctrl){var transcludeName=$attrs.switchTransclude;ctrl.transclude[transcludeName]=function(content){$element.html(content)}}}},Origin=function(){return{restrict:"A",require:"^switch",scope:!1,link:function($scope,$element,$attrs,ctrl){ctrl.select=function(isChecked){var trigger=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],force=arguments.length>2&&void 0!==arguments[2]&&arguments[2];isChecked=!!isChecked,(force||isChecked!==$element.prop("checked"))&&($element.prop("checked",isChecked).attr("checked",isChecked),trigger&&$element.triggerHandler("change"))},ctrl.toggle=function(isChecked,trigger,force){ctrl.select(isChecked,trigger,force)},$element.on("change",function(){$scope.toggle(!!$element.prop("checked")),$scope.ngChange&&$scope.ngChange()})}}},Controller=["$scope",function($scope){$scope.checked=!1,this.transclude=function(name,content){this.transclude[name](content)}}],Component=["$rootScope",function($rootScope){return{restrict:"E",transclude:!0,replace:!0,controller:Controller,template:_template2.default,require:["^switch","^?ngModel"],scope:{model:"=?ngModel",ngDisabled:"=?ngDisabled",ngChange:"&"},link:function($scope,$element,$attrs,ctrls,$transclude){var SwitchCtrl=ctrls[0];$scope.attrId=$attrs.id,$scope.attrName=($attrs.ngModel||"switch-"+(Date.now()+Math.round(100*Math.random()))).replace(/\[([\w\W]+?)\]/g,"[]"),$scope.attrType=$attrs.hasOwnProperty("type")?$attrs.ngType:"checkbox",$scope.attrValue=!$attrs.hasOwnProperty("value")||$attrs.value,$scope.attrNgTrueValue=$attrs.hasOwnProperty("ngTrueValue")?$attrs.ngTrueValue:$scope.attrValue,$scope.attrNgFalseValue=!!$attrs.hasOwnProperty("ngFalseValue")&&$attrs.ngFalseValue,$scope.attrNgChecked=$attrs.ngChecked,$scope.disabled=$attrs.hasOwnProperty("disabled"),$scope.checked=(0,_isBoolean2.default)($scope.ngModel)?$scope.ngModel:$attrs.hasOwnProperty("checked"),$scope.stopPropagation=$attrs.hasOwnProperty("stopPropagation"),$scope.preventDefault=$attrs.hasOwnProperty("preventDefault"),$scope.toggle=function(isChecked){isChecked=_angular2.default.isDefined(isChecked)?!!isChecked:!$scope.checked,$scope.checked=isChecked},$element.removeAttr("id").on("click",function(event){if($scope.stopPropagation&&event.stopPropagation(),$scope.preventDefault&&event.preventDefault(),$scope.disabled)return event.stopPropagation(),event.preventDefault(),!1;$scope.toggle();var isChecked=$scope.checked;$rootScope.$apply(function(){$scope.model=isChecked?$scope.attrNgTrueValue:$scope.attrNgFalseValue}),SwitchCtrl.toggle(isChecked,!0,!0),$rootScope.$digest()}),$scope.$watch("ngDisabled",function(isDisabled){"boolean"==typeof isDisabled&&($scope.disabled=isDisabled)}),$scope.$watch("model",function(value){var isChecked=$scope.checked=!0===value||value==$scope.attrNgTrueValue;!0!==$scope.attrNgTrueValue&&!0===value?$scope.model=$scope.attrNgTrueValue:!1!==$scope.attrNgFalseValue&&!1===value&&($scope.model=$scope.attrNgFalseValue),$element.attr("checked",isChecked),$scope.toggle(isChecked),SwitchCtrl.toggle(isChecked,!1)}),(0,_forEach2.default)($transclude(),function(element){var name=element.tagName.toLowerCase().replace(/-[a-z]/g,function($1){return $1.replace("-","").toUpperCase()});SwitchCtrl.transclude(name,element.innerHTML)}),_angular2.default.isUndefined($scope.model)&&($scope.model=$scope.checked?$scope.attrNgTrueValue:$scope.attrNgFalseValue)}}}];App.directive("switchTransclude",Transclude),App.directive("switchOrigin",Origin),App.directive("switch",Component),exports.default=App.name},480:function(module,exports){},481:function(module,exports,__webpack_require__){function template(locals){var pug_html="";return pug_html+='<div class="switch" ng-class="{ disabled: disabled }"><input switch-origin ng-model="model" ng-attr-type="{{ attrType }}" ng-attr-id="{{ attrId }}" ng-attr-name="{{ attrName }}" ng-attr-value="{{ attrValue }}" ng-disabled="disabled"><div class="switch-switcher"></div><div class="switch-inner"><div class="switch-on"><div class="inner"><span class="content" switch-transclude="on">ON</span></div></div><div class="switch-off"><div class="inner"><span class="content" switch-transclude="off">OFF</span></div></div></div></div>'}__webpack_require__(19);module.exports=template},5:function(module,exports,__webpack_require__){function baseGetTag(value){return null==value?void 0===value?undefinedTag:nullTag:symToStringTag&&symToStringTag in Object(value)?getRawTag(value):objectToString(value)}var Symbol=__webpack_require__(14),getRawTag=__webpack_require__(57),objectToString=__webpack_require__(58),nullTag="[object Null]",undefinedTag="[object Undefined]",symToStringTag=Symbol?Symbol.toStringTag:void 0;module.exports=baseGetTag},53:function(module,exports){},556:function(module,exports,__webpack_require__){module.exports=__webpack_require__(479)},57:function(module,exports,__webpack_require__){function getRawTag(value){var isOwn=hasOwnProperty.call(value,symToStringTag),tag=value[symToStringTag];try{value[symToStringTag]=void 0;var unmasked=!0}catch(e){}var result=nativeObjectToString.call(value);return unmasked&&(isOwn?value[symToStringTag]=tag:delete value[symToStringTag]),result}var Symbol=__webpack_require__(14),objectProto=Object.prototype,hasOwnProperty=objectProto.hasOwnProperty,nativeObjectToString=objectProto.toString,symToStringTag=Symbol?Symbol.toStringTag:void 0;module.exports=getRawTag},58:function(module,exports){function objectToString(value){return nativeObjectToString.call(value)}var objectProto=Object.prototype,nativeObjectToString=objectProto.toString;module.exports=objectToString},6:function(module,exports){function isObject(value){var type=typeof value;return null!=value&&("object"==type||"function"==type)}module.exports=isObject},63:function(module,exports){function overArg(func,transform){return function(arg){return func(transform(arg))}}module.exports=overArg},64:function(module,exports,__webpack_require__){function forEach(collection,iteratee){return(isArray(collection)?arrayEach:baseEach)(collection,castFunction(iteratee))}var arrayEach=__webpack_require__(115),baseEach=__webpack_require__(99),castFunction=__webpack_require__(118),isArray=__webpack_require__(3);module.exports=forEach},67:function(module,exports){function baseTimes(n,iteratee){for(var index=-1,result=Array(n);++index<n;)result[index]=iteratee(index);return result}module.exports=baseTimes},68:function(module,exports,__webpack_require__){function baseIsArguments(value){return isObjectLike(value)&&baseGetTag(value)==argsTag}var baseGetTag=__webpack_require__(5),isObjectLike=__webpack_require__(4),argsTag="[object Arguments]";module.exports=baseIsArguments},69:function(module,exports){function stubFalse(){return!1}module.exports=stubFalse},70:function(module,exports,__webpack_require__){function baseIsTypedArray(value){return isObjectLike(value)&&isLength(value.length)&&!!typedArrayTags[baseGetTag(value)]}var baseGetTag=__webpack_require__(5),isLength=__webpack_require__(25),isObjectLike=__webpack_require__(4),typedArrayTags={};typedArrayTags["[object Float32Array]"]=typedArrayTags["[object Float64Array]"]=typedArrayTags["[object Int8Array]"]=typedArrayTags["[object Int16Array]"]=typedArrayTags["[object Int32Array]"]=typedArrayTags["[object Uint8Array]"]=typedArrayTags["[object Uint8ClampedArray]"]=typedArrayTags["[object Uint16Array]"]=typedArrayTags["[object Uint32Array]"]=!0,typedArrayTags["[object Arguments]"]=typedArrayTags["[object Array]"]=typedArrayTags["[object ArrayBuffer]"]=typedArrayTags["[object Boolean]"]=typedArrayTags["[object DataView]"]=typedArrayTags["[object Date]"]=typedArrayTags["[object Error]"]=typedArrayTags["[object Function]"]=typedArrayTags["[object Map]"]=typedArrayTags["[object Number]"]=typedArrayTags["[object Object]"]=typedArrayTags["[object RegExp]"]=typedArrayTags["[object Set]"]=typedArrayTags["[object String]"]=typedArrayTags["[object WeakMap]"]=!1,module.exports=baseIsTypedArray},71:function(module,exports){function baseUnary(func){return function(value){return func(value)}}module.exports=baseUnary},72:function(module,exports,__webpack_require__){(function(module){var freeGlobal=__webpack_require__(26),freeExports="object"==typeof exports&&exports&&!exports.nodeType&&exports,freeModule=freeExports&&"object"==typeof module&&module&&!module.nodeType&&module,moduleExports=freeModule&&freeModule.exports===freeExports,freeProcess=moduleExports&&freeGlobal.process,nodeUtil=function(){try{return freeProcess&&freeProcess.binding&&freeProcess.binding("util")}catch(e){}}();module.exports=nodeUtil}).call(exports,__webpack_require__(21)(module))},77:function(module,exports,__webpack_require__){var createBaseFor=__webpack_require__(83),baseFor=createBaseFor();module.exports=baseFor},8:function(module,exports,__webpack_require__){function isFunction(value){if(!isObject(value))return!1;var tag=baseGetTag(value);return tag==funcTag||tag==genTag||tag==asyncTag||tag==proxyTag}var baseGetTag=__webpack_require__(5),isObject=__webpack_require__(6),asyncTag="[object AsyncFunction]",funcTag="[object Function]",genTag="[object GeneratorFunction]",proxyTag="[object Proxy]";module.exports=isFunction},83:function(module,exports){function createBaseFor(fromRight){return function(object,iteratee,keysFunc){for(var index=-1,iterable=Object(object),props=keysFunc(object),length=props.length;length--;){var key=props[fromRight?length:++index];if(!1===iteratee(iterable[key],key,iterable))break}return object}}module.exports=createBaseFor},97:function(module,exports,__webpack_require__){function isBoolean(value){return!0===value||!1===value||isObjectLike(value)&&baseGetTag(value)==boolTag}var baseGetTag=__webpack_require__(5),isObjectLike=__webpack_require__(4),boolTag="[object Boolean]";module.exports=isBoolean},99:function(module,exports,__webpack_require__){var baseForOwn=__webpack_require__(116),createBaseEach=__webpack_require__(117),baseEach=createBaseEach(baseForOwn);module.exports=baseEach}});