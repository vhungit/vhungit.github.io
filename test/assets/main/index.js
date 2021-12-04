System.register("chunks:///_virtual/GameMgr.ts",["./_rollupPluginModLoBabelHelpers.js","cc"],(function(t){"use strict";var r,e,n,o,a,i,c;return{setters:[function(t){r=t.inheritsLoose,e=t.defineProperty,n=t.assertThisInitialized},function(t){o=t.cclegacy,a=t._decorator,i=t.Quat,c=t.Component}],execute:function(){var s;o._RF.push({},"ba7b0kbqfJLdYQzftkpTGSQ","GameMgr",void 0);var u=a.ccclass;a.property,t("GameMgr",u("GameMgr")(s=function(t){function o(){for(var r,o=arguments.length,a=new Array(o),c=0;c<o;c++)a[c]=arguments[c];return r=t.call.apply(t,[this].concat(a))||this,e(n(r),"rotation",new i),r}r(o,t);var a=o.prototype;return a.start=function(){this.rotation=this.node.rotation},a.update=function(t){},o}(c))||s);o._RF.pop()}}}));

System.register("chunks:///_virtual/Input.ts",["./_rollupPluginModLoBabelHelpers.js","cc"],(function(t){"use strict";var n,e,o,s,i,c,a,u,h;return{setters:[function(t){n=t.defineProperty,e=t.inheritsLoose,o=t.createClass,s=t.assertThisInitialized},function(t){i=t.cclegacy,c=t._decorator,a=t.Node,u=t.Vec2,h=t.Component}],execute:function(){var r,p,l;i._RF.push({},"e1c6c5BxUBFlrIibwgDLx5h","Input",void 0);var T,d=c.ccclass;c.property;!function(t){t[t.None=0]="None",t[t.Down=1]="Down",t[t.Press=2]="Press",t[t.Up=3]="Up"}(T||(T={}));t("Input",d("Input")((l=p=function(t){function i(){for(var e,o=arguments.length,i=new Array(o),c=0;c<o;c++)i[c]=arguments[c];return e=t.call.apply(t,[this].concat(i))||this,n(s(e),"state",T.None),n(s(e),"isTouchDown",!1),n(s(e),"delta",new u),e}e(i,t);var c=i.prototype;return c.onLoad=function(){i.instance=this,this.node.on(a.EventType.TOUCH_START,this.onTouchBegan,this),this.node.on(a.EventType.TOUCH_MOVE,this.onTouchMove,this),this.node.on(a.EventType.TOUCH_END,this.onTouchEnded,this),this.node.on(a.EventType.TOUCH_CANCEL,this.onTouchCancelled,this)},c.lateUpdate=function(){this.state==T.Down?this.state=T.Press:this.state==T.Up&&(this.state=T.None)},c.onTouchBegan=function(t){t.getTouches();this.isTouchDown=!0,this.state=T.Down,this.StopPropagation(t)},c.onTouchEnded=function(t){t.getTouches();this.isTouchDown=!1,this.state=T.Up,this.StopPropagation(t)},c.onTouchCancelled=function(t){this.isTouchDown=!1,this.state=T.Up,this.StopPropagation(t)},c.onTouchMove=function(t){var n=t.getTouches();this.isTouchDown=!0,this.state=T.Press,this.delta=n[0].getDelta(),this.StopPropagation(t)},c.StopPropagation=function(t){},o(i,null,[{key:"Instance",get:function(){return i.instance}},{key:"State",get:function(){return i.instance.state}},{key:"IsTouchDown",get:function(){return i.instance.state==T.Down}},{key:"IsTouchUp",get:function(){return i.instance.state==T.Up}},{key:"Delta",get:function(){return i.instance.delta}}]),i}(h),n(p,"instance",null),r=l))||r);i._RF.pop()}}}));

System.register("chunks:///_virtual/Rotation.ts",["./_rollupPluginModLoBabelHelpers.js","cc"],(function(e){"use strict";var t,r,i,n,o,a,l,c,u,s;return{setters:[function(e){t=e.applyDecoratedDescriptor,r=e.inheritsLoose,i=e.initializerDefineProperty,n=e.assertThisInitialized,o=e.defineProperty},function(e){a=e.cclegacy,l=e._decorator,c=e.CCFloat,u=e.Vec3,s=e.Component}],execute:function(){var p,d,f,h,y,g,b;a._RF.push({},"eddd4lxbtdOHrEJO75AcVdI","Rotation",void 0);var v=l.ccclass,m=l.property;e("Rotation",(p=v("Rotation"),d=m(c),f=m(u),p((g=t((y=function(e){function t(){for(var t,r=arguments.length,a=new Array(r),l=0;l<r;l++)a[l]=arguments[l];return t=e.call.apply(e,[this].concat(a))||this,i(n(t),"speed",g,n(t)),i(n(t),"direction",b,n(t)),o(n(t),"eulerAngle",new u),t}r(t,e);var a=t.prototype;return a.start=function(){},a.update=function(e){this.eulerAngle.add(this.direction.normalize().multiplyScalar(this.speed*e)),this.node.eulerAngles=this.eulerAngle},t}(s)).prototype,"speed",[d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 100}}),b=t(y.prototype,"direction",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return new u(0,0,1)}}),h=y))||h));a._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./GameMgr.ts","./Input.ts","./Rotation.ts"],(function(){"use strict";return{setters:[null,null,null],execute:function(){}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});