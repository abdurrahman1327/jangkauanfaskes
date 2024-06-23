// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define("dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/Evented dijit/_WidgetBase ./utils".split(" "),function(h,f,e,k,l,g){return h([l,k],{nls:null,map:null,layerInfosObj:null,setLayerInfosObj:function(a){this.layerInfosObj=a},setTimeSlider:function(a){this.timeSlider=a},processTimeDisableLayer:function(){var a=0,b;a=0;for(b=this.map.layerIds.length;a<b;a++){var c=this.map.layerIds[a];c=this.map.getLayer(c);this._processTimeUpdate(c)}a=0;for(b=this.map.graphicsLayerIds.length;a<b;a++)c=
this.map.graphicsLayerIds[a],c=this.map.getLayer(c),this._processTimeUpdate(c)},_processTimeUpdate:function(a){var b=g.isLayerEnabledTime(a,this.layerInfosObj);a.setUseMapTime&&(!0!==b?a.setUseMapTime(!1):a.setUseMapTime(!0))},processerDisableLayers:function(a){a&&a.disabledLayers&&e.map(a.disabledLayers,f.hitch(this,function(b){!0!==b.isTimeEnabled&&(b=this.layerInfosObj.getLayerInfoById(b.layerId))&&b.layerObject&&b.layerObject.setUseMapTime&&b.layerObject.setUseMapTime(!1)}))},hasVisibleTemporalLayer:function(){var a=
0,b;a=0;for(b=this.map.layerIds.length;a<b;a++){var c=this.map.layerIds[a];c=this.map.getLayer(c);if(this._isTimeTemporalLayer(c,!0))return!0}a=0;for(b=this.map.graphicsLayerIds.length;a<b;a++)if(c=this.map.graphicsLayerIds[a],c=this.map.getLayer(c),this._isTimeTemporalLayer(c,!0))return!0;return!1},_isTimeTemporalLayer:function(a,b){if(!a)return!1;var c=a&&a.timeInfo&&a.useMapTime;!0===b&&(c=c&&a.visible);if(c)if("esri.layers.KMLLayer"===a.declaredClass){if(a=a.getLayers(),e.some(a,function(d){return d.timeInfo&&
d.timeInfo.timeExtent?!0:!1}))return!0}else{if(a.timeInfo&&a.timeInfo.timeExtent)return!0}else return!1},_getVisibleTemporalLayerNames:function(){var a=0,b,c=[];a=0;for(b=this.map.layerIds.length;a<b;a++){var d=this.map.layerIds[a];d=this.map.getLayer(d);this._isTimeTemporalLayer(d,!0)&&c.push(d.id)}a=0;for(b=this.map.graphicsLayerIds.length;a<b;a++)d=this.map.graphicsLayerIds[a],d=this.map.getLayer(d),this._isTimeTemporalLayer(d,!0)&&c.push(d.id);return e.map(c,f.hitch(this,function(m){return this.layerInfosObj.getLayerInfoById(m).title||
""}))},_onLayerInfosIsShowInMapChanged:function(a){e.some(a,f.hitch(this,function(b){for(var c=null;!c;)c=this.map.getLayer(b.id),b=b.parentLayerInfo;return this.layerProcesser._isTimeTemporalLayer(c)}))&&this.layerProcesser._onTimeTemportalLayerChanged(this)},_onLayerInfosChanged:function(a,b,c){"added"===b?(a=this.map.getLayer(c.id),this.layerProcesser._isTimeTemporalLayer(a,!0)&&this.layerProcesser._onTimeTemportalLayerChanged(this)):"removed"===b&&this.layerProcesser._onTimeTemportalLayerChanged(this)},
_onTimeTemportalLayerChanged:function(a){"closed"!==a.state&&(a.layerProcesser.hasVisibleTemporalLayer()?a.timeSlider?a.updateLayerLabel():a.showTimeSlider():a.timeSlider&&a.closeTimeSlider())},hasLiveDataLayer:function(){var a=0,b;a=0;for(b=this.map.layerIds.length;a<b;a++){var c=this.map.layerIds[a];c=this.map.getLayer(c);if(g.hasLiveData(c))return!0}a=0;for(b=this.map.graphicsLayerIds.length;a<b;a++)if(c=this.map.graphicsLayerIds[a],c=this.map.getLayer(c),g.hasLiveData(c))return!0;return!1}})});