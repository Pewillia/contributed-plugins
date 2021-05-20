/*! Plugin swiper: 0.1.4 - "329f90f6c21d08bd7ddf311368c945ee950817dd" - 2021-05-20T19:21:06.278Z */(()=>{var e={204:()=>{},607:(e,t)=>{"use strict";var i=function(){function e(){this.layerNb=0,this.layerNames=[],this.closureFunc=function(e){for(var t=[],i=1;i<arguments.length;i++)t[i-1]=arguments[i];var r=Array.prototype.slice.call(arguments,1);return function(){var t=r.slice();return t.push.apply(t,arguments),e.apply(this,t)}}}return e.prototype.init=function(t){var i=this;this.mapApi=t,this.config=this._RV.getConfig("plugins").swiper,this.config.language=this._RV.getCurrentLang(),this.layerNb=0,this.layerNames=[],this.mapApi.layersObj.layerAdded.subscribe((function(e){i.config.layers.find((function(t){t.id===e.id&&(i.layerNb++,i.layerNames.push(e.name))}))})),this._button=this.mapApi.mapI.addPluginButton(e.prototype.translations[this._RV.getCurrentLang()].menu,this.onMenuItemClick()),this._button.isActive=this.config.open=!0,window.RAMP.GAPI.esriLoadApiClasses([["esri/dijit/LayerSwipe","layerSwipe"]]).then((function(e){var t=setInterval((function(){i.mapApi.mapDiv.find("rv-shell").find(".rv-esri-map").prepend('<div id="rv-swiper-div"></div>'),i.layerNb===i.config.layers.length&&(i.setSwiper(e,i.config),clearInterval(t))}),500)}))},e.prototype.destroy=function(){this.swipeWidget.destroy()},e.prototype.onMenuItemClick=function(){var e=this;return function(){e._button.isActive=!e._button.isActive,e.mapApi.mapDiv.find("#rv-swiper-div ")[0].style.display=e._button.isActive?"block":"none",e._button.isActive?e.swipeWidget.enable():e.swipeWidget.disable()}},e.prototype.setSwiper=function(t,i){for(var r=[],n=i.layers.length;n--;)r.push(this.mapApi.esriMap.getLayer(i.layers[n].id));this.mapApi.mapDiv.find("#rv-swiper-div ")[0];try{var s=new t.layerSwipe({type:i.type,map:this.mapApi.esriMap,layers:r,top:document.body.scrollHeight/2,left:this.getWidth()/2},"rv-swiper-div");this.swipeWidget=s;var o=this;s.on("load",(function(){var t=o.mapApi.mapDiv.find("#rv-swiper-div ."+s.type)[0];t.tabIndex=-3,t.addEventListener("keydown",o.closureFunc((function(e,t,r,n){if("vertical"===i.type){var s=parseInt(t.style.left),p=parseInt(o.mapApi.mapDiv.find("#rv-swiper-div").width())-10;37===n.keyCode&&s>=0?s=s>r?s-=r:0:39===n.keyCode&&s<=p&&(s=s<=p-r?s+=r:p),t.style.left=String(s+"px")}else if("horizontal"===i.type){s=parseInt(t.style.top);var a=parseInt(o.mapApi.mapDiv.find("#rv-swiper-div").height())-10;38===n.keyCode&&s>=0?s=s>r?s-=r:0:40===n.keyCode&&s<=a&&(s=s<=a-r?s+=r:a),t.style.top=String(s+"px")}e.swipe()}),s,t,i.keyboardOffset)),t.title=e.prototype.translations[o.config.language].tooltipp,t.title+="\r\n- "+o.layerNames.join(",\r\n- ")})),s.startup()}catch(e){console.log("try catch error is ",e),this.swipeWidget.destroy()}},e.prototype.getWidth=function(){return Math.max(document.body.scrollWidth,document.documentElement.scrollWidth,document.body.offsetWidth,document.documentElement.offsetWidth,document.documentElement.clientWidth)},e}();i.prototype.translations={"en-CA":{tooltipp:"Drag to see underlying layer",menu:"Swiper"},"fr-CA":{tooltipp:"Faites glisser pour voir les couches sous-jacentes",menu:"Glisseur"}},window.swiper=i}},t={};function i(r){if(t[r])return t[r].exports;var n=t[r]={exports:{}};return e[r](n,n.exports,i),n.exports}i.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return i.d(t,{a:t}),t},i.d=(e,t)=>{for(var r in t)i.o(t,r)&&!i.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";i(607),i(204)})()})();