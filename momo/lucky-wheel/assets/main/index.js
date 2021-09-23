System.register("chunks:///_virtual/Utils.ts",["cc"],(function(t){"use strict";var n,o,e,i;return{setters:[function(t){n=t.cclegacy,o=t.Quat,e=t.Vec3,i=t.math}],execute:function(){n._RF.push({},"10e5ec48SRIkIMCKunjzFih","Utils",void 0);t("Utils",function(){function t(){}return t.RotationAroundNode=function(t,n,r,u){var c=new o,s=new e,a=new e,f=t.position,d=i.toRadian(u);return o.fromAxisAngle(c,r,d),e.subtract(s,f,n),e.transformQuat(a,s,c),t.position=e.add(a,n,a),o.rotateAround(c,t.rotation,r,d),c},t}());n._RF.pop()}}}));

System.register("chunks:///_virtual/InGame.ts",["cc","./_rollupPluginModLoBabelHelpers.js","./GameMgr.ts","./PopupReward.ts"],(function(e){"use strict";var n,t,r,i,o,a,p,u,c,s,l,f;return{setters:[function(e){n=e.cclegacy,t=e._decorator,r=e.Button,i=e.Component},function(e){o=e.defineProperty,a=e.applyDecoratedDescriptor,p=e.inheritsLoose,u=e.createClass,c=e.initializerDefineProperty,s=e.assertThisInitialized},function(e){l=e.GameMgr},function(e){f=e.PopupReward}],execute:function(){var d,h,w,y,b,m,S,R,g;n._RF.push({},"1fc086WF7FN75GOkupyxm7x","InGame",void 0);var v=t.ccclass,G=t.property;e("InGame",(d=v("InGame"),h=G(r),w=G(f),d((g=R=function(e){function n(){for(var n,t=arguments.length,r=new Array(t),i=0;i<t;i++)r[i]=arguments[i];return n=e.call.apply(e,[this].concat(r))||this,c(s(n),"btnSpine",m,s(n)),c(s(n),"popupReward",S,s(n)),n}p(n,e);var t=n.prototype;return t.start=function(){n.instance=this},t.OnSpineClick=function(){l.Instance.OnSpine()},t.SetActiveSpineButton=function(e){this.btnSpine.interactable=e},t.ShowPopupReward=function(e){this.popupReward.SetReward(e),this.popupReward.Show()},u(n,null,[{key:"Instance",get:function(){return this.instance}}]),n}(i),o(R,"instance",null),m=a((b=g).prototype,"btnSpine",[h],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),S=a(b.prototype,"popupReward",[w],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),y=b))||y));n._RF.pop()}}}));

System.register("chunks:///_virtual/PopupReward.ts",["cc","./_rollupPluginModLoBabelHelpers.js"],(function(e){"use strict";var t,n,i,r,o,a,c,u,s,p,l;return{setters:[function(e){t=e.cclegacy,n=e._decorator,i=e.Sprite,r=e.Node,o=e.Vec3,a=e.tween,c=e.Component},function(e){u=e.applyDecoratedDescriptor,s=e.inheritsLoose,p=e.initializerDefineProperty,l=e.assertThisInitialized}],execute:function(){var f,h,d,v,w,b,y;t._RF.push({},"6100bSbIIxLGYaAGhznRQ18","PopupReward",void 0);var R=n.ccclass,g=n.property;e("PopupReward",(f=R("PopupReward"),h=g(i),d=g(r),f((b=u((w=function(e){function t(){for(var t,n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return t=e.call.apply(e,[this].concat(i))||this,p(l(t),"icon",b,l(t)),p(l(t),"container",y,l(t)),t}s(t,e);var n=t.prototype;return n.start=function(){this.node.active=!1},n.SetReward=function(e){this.icon.spriteFrame=e},n.Show=function(){var e=this;this.node.active=!0,this.container.setScale(o.ZERO),a(this.container).to(.5,{scale:new o(1,1,1)},{easing:"bounceInOut"}).start(),setTimeout((function(){e.node.active=!1}),3e3)},t}(c)).prototype,"icon",[h],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),y=u(w.prototype,"container",[d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),v=w))||v));t._RF.pop()}}}));

System.register("chunks:///_virtual/item.ts",["cc","./_rollupPluginModLoBabelHelpers.js"],(function(t){"use strict";var e,r,i,n,o,c,a,s;return{setters:[function(t){e=t.cclegacy,r=t._decorator,i=t.Sprite,n=t.Component},function(t){o=t.applyDecoratedDescriptor,c=t.inheritsLoose,a=t.initializerDefineProperty,s=t.assertThisInitialized}],execute:function(){var u,l,p,f,y;e._RF.push({},"7900f35j5RFtrx7aJZc1T/P","item",void 0);var h=r.ccclass,m=r.property;t("Item",(u=h("Item"),l=m(i),u((y=o((f=function(t){function e(){for(var e,r=arguments.length,i=new Array(r),n=0;n<r;n++)i[n]=arguments[n];return e=t.call.apply(t,[this].concat(i))||this,a(s(e),"icon",y,s(e)),e}c(e,t);var r=e.prototype;return r.start=function(){},r.GetIcon=function(){return this.icon.spriteFrame},e}(n)).prototype,"icon",[l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),p=f))||p));e._RF.pop()}}}));

System.register("chunks:///_virtual/itemMgr.ts",["cc","./Utils.ts","./_rollupPluginModLoBabelHelpers.js","./define.ts","./item.ts"],(function(t){"use strict";var e,i,r,n,o,s,a,u,c,f,l,p,m,h;return{setters:[function(t){e=t.cclegacy,i=t._decorator,r=t.Prefab,n=t.instantiate,o=t.Vec3,s=t.Component},function(t){a=t.Utils},function(t){u=t.applyDecoratedDescriptor,c=t.inheritsLoose,f=t.initializerDefineProperty,l=t.assertThisInitialized,p=t.defineProperty},function(t){m=t.define},function(t){h=t.Item}],execute:function(){var d,b,g,v,y,I,P;e._RF.push({},"892e0qrIb9Gx49xwmLSPXt/","itemMgr",void 0);var R=i.ccclass,M=i.property;t("ItemMgr",(d=R("ItemMgr"),b=M(r),g=M(Number),d((I=u((y=function(t){function e(){for(var e,i=arguments.length,r=new Array(i),n=0;n<i;n++)r[n]=arguments[n];return e=t.call.apply(t,[this].concat(r))||this,f(l(e),"itemPrefabs",I,l(e)),f(l(e),"radius",P,l(e)),p(l(e),"items",[]),e}c(e,t);var i=e.prototype;return i.start=function(){this.init()},i.init=function(){for(var t=0;t<m.NUMBER_SLOT;t++)this.createItem(t)},i.createItem=function(t){var e=n(this.itemPrefabs[t]);e.parent=this.node,this.items.push(e.getComponent(h));var i=360/m.NUMBER_SLOT,r=(t+1)*i-.5*i;e.setRotationFromEuler(new o(0,0,-r));var s=new o(0,this.radius,0);e.setPosition(s),a.RotationAroundNode(e,this.node.position,o.FORWARD,r)},i.GetItem=function(t){return this.items[t].GetIcon()},e}(s)).prototype,"itemPrefabs",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),P=u(y.prototype,"radius",[g],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 200}}),v=y))||v));e._RF.pop()}}}));

System.register("chunks:///_virtual/GameMgr.ts",["cc","./_rollupPluginModLoBabelHelpers.js","./wheel.ts","./InGame.ts"],(function(t){"use strict";var e,n,i,r,a,c,s,o,u,l,p;return{setters:[function(t){e=t.cclegacy,n=t._decorator,i=t.Component},function(t){r=t.defineProperty,a=t.applyDecoratedDescriptor,c=t.inheritsLoose,s=t.createClass,o=t.initializerDefineProperty,u=t.assertThisInitialized},function(t){l=t.Wheel},function(t){p=t.InGame}],execute:function(){var h,f,I,S,w,d,g;e._RF.push({},"b7472axsNtOc6fjgxtXsqcK","GameMgr",void 0);var m,v=n.ccclass,y=n.property;!function(t){t[t.INIT=0]="INIT",t[t.TUTORIAL=1]="TUTORIAL",t[t.PLAYING=2]="PLAYING"}(m||(m={}));t("GameMgr",(h=v("GameMgr"),f=y(l),h((g=d=function(t){function e(){for(var e,n=arguments.length,i=new Array(n),a=0;a<n;a++)i[a]=arguments[a];return e=t.call.apply(t,[this].concat(i))||this,o(u(e),"wheel",w,u(e)),r(u(e),"state",void 0),e}c(e,t);var n=e.prototype;return n.start=function(){e.instance=this,this.SetState(m.INIT)},n.update=function(t){switch(this.state){case m.INIT:}},n.SetState=function(t){switch(this.state=t,t){case m.INIT:this.wheel.Init()}},n.OnSpine=function(){this.wheel.OnSpine()},n.OnSpineStart=function(){p.instance.SetActiveSpineButton(!1)},n.OnSpineFinish=function(){var t=this;setTimeout((function(){p.instance.SetActiveSpineButton(!0),t.OnReward()}),500)},n.OnReward=function(){p.Instance.ShowPopupReward(this.wheel.GetCurrentItem())},s(e,null,[{key:"Instance",get:function(){return this.instance}}]),e}(i),r(d,"instance",null),w=a((S=g).prototype,"wheel",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),I=S))||I));e._RF.pop()}}}));

System.register("chunks:///_virtual/wheel.ts",["cc","./_rollupPluginModLoBabelHelpers.js","./define.ts","./itemMgr.ts","./GameMgr.ts"],(function(t){"use strict";var e,n,a,i,r,s,o,c,l,u,g,h,S,I;return{setters:[function(t){e=t.cclegacy,n=t._decorator,a=t.tween,i=t.math,r=t.Vec3,s=t.Component},function(t){o=t.applyDecoratedDescriptor,c=t.inheritsLoose,l=t.initializerDefineProperty,u=t.assertThisInitialized,g=t.defineProperty},function(t){h=t.define},function(t){S=t.ItemMgr},function(t){I=t.GameMgr}],execute:function(){var f,p,m,T,R;e._RF.push({},"bc1aeiKzJFLcoC3yKfp6KmH","wheel",void 0);var d,N=n.ccclass,P=n.property;!function(t){t[t.IDLE=0]="IDLE",t[t.START=1]="START",t[t.SPINING=2]="SPINING",t[t.STOP=3]="STOP",t[t.FINISH=4]="FINISH"}(d||(d={}));t("Wheel",(f=N("Wheel"),p=P(S),f((R=o((T=function(t){function e(){for(var e,n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return e=t.call.apply(t,[this].concat(a))||this,l(u(e),"itemMgr",R,u(e)),g(u(e),"state",d.IDLE),g(u(e),"target",-1),g(u(e),"angle",0),g(u(e),"targetAngle",0),g(u(e),"angleValue",0),e}c(e,t);var n=e.prototype;return n.start=function(){this.SetState(d.IDLE)},n.update=function(t){switch(this.state){case d.IDLE:case d.START:break;case d.SPINING:this.Roatate(t);break;case d.STOP:}},n.SetState=function(t){var e=this;switch(this.state=t,t){case d.IDLE:break;case d.START:this.CaculatetFinishAngle(),a({angle:this.angle}).to(i.randomRangeInt(10,20),{angle:this.targetAngle},{onUpdate:function(t,n){e.angle=t.angle},easing:"quartOut"}).call((function(){e.SetState(d.STOP)})).start(),I.Instance.OnSpineStart(),this.SetState(d.SPINING);break;case d.SPINING:break;case d.STOP:I.Instance.OnSpineFinish();break;case d.FINISH:}},n.Init=function(){this.SetState(d.IDLE)},n.OnSpine=function(){this.CheckResult(),this.SetState(d.START)},n.CheckResult=function(){this.target=i.randomRangeInt(0,h.NUMBER_SLOT),console.log("Target index: "+this.target)},n.Roatate=function(t){this.node.setRotationFromEuler(new r(0,0,-this.angle))},n.CaculatetFinishAngle=function(){var t=this.angle/360,e=360/h.NUMBER_SLOT,n=360-(e*(this.target+1)-i.randomRange(.5,.5)*e),a=360*(Math.floor(t)-t)+360*i.randomRangeInt(5,10);this.targetAngle=this.angle+n+a},n.GetCurrentItem=function(){return this.itemMgr.GetItem(this.target)},e}(s)).prototype,"itemMgr",[p],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),m=T))||m));e._RF.pop()}}}));

System.register("chunks:///_virtual/define.ts",["cc","./_rollupPluginModLoBabelHelpers.js"],(function(e){"use strict";var c,t,n;return{setters:[function(e){c=e.cclegacy,t=e._decorator},function(e){n=e.defineProperty}],execute:function(){c._RF.push({},"d0ac71YsqJMyZhRJeN3Hvkz","define",void 0);t.ccclass,t.property;var r=e("define",(function(){}));n(r,"NUMBER_SLOT",8),n(r,"MAX_SPEED",5),c._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./Utils.ts","./define.ts","./item.ts","./itemMgr.ts","./wheel.ts","./GameMgr.ts","./PopupReward.ts","./InGame.ts"],(function(){"use strict";return{setters:[null,null,null,null,null,null,null,null],execute:function(){}}}));

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