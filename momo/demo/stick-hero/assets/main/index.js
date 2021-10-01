System.register("chunks:///_virtual/Data.ts",["./_rollupPluginModLoBabelHelpers.js","cc"],(function(t){"use strict";var e,n,r,s,c,a,i;return{setters:[function(t){e=t.defineProperty,n=t.inheritsLoose,r=t.assertThisInitialized,s=t.createClass},function(t){c=t.cclegacy,a=t._decorator,i=t.Component}],execute:function(){var o,u,l;c._RF.push({},"08e20PI/sFKZonsuU5zhE4M","Data",void 0);var p=a.ccclass;a.property,t("Data",p("Data")((l=u=function(t){function c(){for(var n,s=arguments.length,c=new Array(s),a=0;a<s;a++)c[a]=arguments[a];return n=t.call.apply(t,[this].concat(c))||this,e(r(n),"Score",0),e(r(n),"Best",0),n}n(c,t);var a=c.prototype;return a.start=function(){c.instance=this},a.SetSocre=function(t){this.Score=t},a.SetBest=function(t){this.Best=t},s(c,null,[{key:"Instance",get:function(){return this.instance}}]),c}(i),e(u,"instance",null),o=l))||o);c._RF.pop()}}}));

System.register("chunks:///_virtual/UIManager.ts",["./_rollupPluginModLoBabelHelpers.js","cc","./GameMgr.ts","./AudioMgr.ts"],(function(e){"use strict";var t,n,i,r,o,a,u,c,s,l,p,S,f,m,d;return{setters:[function(e){t=e.defineProperty,n=e.applyDecoratedDescriptor,i=e.inheritsLoose,r=e.initializerDefineProperty,o=e.assertThisInitialized,a=e.createClass},function(e){u=e.cclegacy,c=e._decorator,s=e.Node,l=e.Label,p=e.SpriteFrame,S=e.Sprite,f=e.Component},function(e){m=e.GameMgr},function(e){d=e.AudioMgr}],execute:function(){var N,g,h,F,v,b,y,B,G,M,_,O,z,I,w,P,T,U,A,C,D;u._RF.push({},"141bceeaZFCPp6Gc0osJvzN","UIManager",void 0);var L=c.ccclass,R=c.property;e("UIManager",(N=L("UIManager"),g=R(s),h=R(s),F=R(s),v=R(l),b=R(l),y=R(s),B=R(p),G=R(p),N((D=C=function(e){function t(){for(var t,n=arguments.length,i=new Array(n),a=0;a<n;a++)i[a]=arguments[a];return t=e.call.apply(e,[this].concat(i))||this,r(o(t),"i_mainMenu",O,o(t)),r(o(t),"i_gameOver",z,o(t)),r(o(t),"i_inGame",I,o(t)),r(o(t),"Score",w,o(t)),r(o(t),"Best",P,o(t)),r(o(t),"SoundBTN",T,o(t)),r(o(t),"OnSoundSprite",U,o(t)),r(o(t),"OffSoundSprite",A,o(t)),t}i(t,e);var n=t.prototype;return n.start=function(){t.instance=this,this.UpdateSoundButtonStatus()},n.SetScore=function(){this.Score.string=localStorage.getItem("score"),this.Best.string=localStorage.getItem("best")},n.GoMainMenu=function(){this.i_mainMenu.active=!0,this.i_inGame.active=!1,this.i_gameOver.active=!1,this.UpdateSoundButtonStatus()},n.GoInGame=function(){this.i_mainMenu.active=!1,this.i_inGame.active=!0,this.i_gameOver.active=!1},n.GoGameOver=function(){this.i_mainMenu.active=!1,this.i_inGame.active=!1,this.i_gameOver.active=!0,this.SetScore()},n.onPlayButtonPressed=function(){this.GoInGame(),m.GameStart()},n.onSoundButtonPressed=function(){d.instance.ActiveSound=!d.instance.ActiveSound,this.UpdateSoundButtonStatus()},n.onReplayButtonPressed=function(){this.GoInGame(),m.GameStart()},n.onHomeButtonPressed=function(){this.GoMainMenu(),m.MainMenu()},n.UpdateSoundButtonStatus=function(){d.instance.ActiveSound?(this.SoundBTN.getComponent(S).spriteFrame=this.OnSoundSprite,console.log("ONNNNNNNNNNNNNNNNNNNNNNNNNNN"),this.SoundBTN.active=!1,this.SoundBTN.active=!0):(this.SoundBTN.getComponent(S).spriteFrame=this.OffSoundSprite,console.log("OFFFFFFFFFFFFFFFFFFFFFFFFFFFFFf"),this.SoundBTN.active=!1,this.SoundBTN.active=!0)},a(t,null,[{key:"Instance",get:function(){return this.instance}}]),t}(f),t(C,"instance",null),O=n((_=D).prototype,"i_mainMenu",[g],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),z=n(_.prototype,"i_gameOver",[h],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),I=n(_.prototype,"i_inGame",[F],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),w=n(_.prototype,"Score",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),P=n(_.prototype,"Best",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),T=n(_.prototype,"SoundBTN",[y],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),U=n(_.prototype,"OnSoundSprite",[B],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),A=n(_.prototype,"OffSoundSprite",[G],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),M=_))||M));u._RF.pop()}}}));

System.register("chunks:///_virtual/CharacterMgr.ts",["./_rollupPluginModLoBabelHelpers.js","cc","./BridgeMgr.ts","./ColumnMgr.ts"],(function(t){"use strict";var e,i,o,n,r,a,s,h,c,l,u,p,C;return{setters:[function(t){e=t.defineProperty,i=t.applyDecoratedDescriptor,o=t.inheritsLoose,n=t.initializerDefineProperty,r=t.assertThisInitialized,a=t.createClass},function(t){s=t.cclegacy,h=t._decorator,c=t.Node,l=t.UITransform,u=t.Component},function(t){p=t.BridgeMgr},function(t){C=t.ColumnMgr}],execute:function(){var g,f,d,v,M,y,F;s._RF.push({},"2ac315hkgJAX5kqgHz/oXpO","CharacterMgr",void 0);var N=h.ccclass,S=h.property;t("CharacterMgr",(g=N("CharacterMgr"),f=S(c),g((F=y=function(t){function i(){for(var i,o=arguments.length,a=new Array(o),s=0;s<o;s++)a[s]=arguments[s];return i=t.call.apply(t,[this].concat(a))||this,n(r(i),"CharNode",M,r(i)),e(r(i),"StillLife",!0),e(r(i),"MoveFlag",!1),i}o(i,t);var s=i.prototype;return s.start=function(){i.instance=this},s.SetCharPos=function(t){var e=t.getComponent(l).width,i=t.getComponent(l).height;this.CharNode.setPosition(t.position.x+e-40,t.position.y+i),this.ResetChar()},s.StartMoveChar=function(){this.MoveFlag=this.StillLife},s.StopMoveChar=function(){this.MoveFlag=!1},s.KillChar=function(){this.StillLife=!1,this.MoveFlag=!1},s.ResetChar=function(){this.MoveFlag=!1,this.StillLife=!0},s.CheckCharState=function(){var t=p.instance.GetCurBridgeLength(),e=C.instance.GetNexCul(),i=C.instance.GetCurColWidth();this.CharNode.position.x-i+40>t&&this.CharNode.position.x<e.position.x&&1==this.MoveFlag&&(this.MoveFlag=!1),this.CharNode.position.x>=e.position.x&&(this.MoveFlag=!1)},s.update=function(t){this.MoveFlag&&this.CharNode.setPosition(this.CharNode.position.x+5,this.CharNode.position.y),this.CheckCharState()},a(i,null,[{key:"Instace",get:function(){return this.instance}}]),i}(u),e(y,"instance",null),M=i((v=F).prototype,"CharNode",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),d=v))||d));s._RF.pop()}}}));

System.register("chunks:///_virtual/ColumnBehavior.ts",["./_rollupPluginModLoBabelHelpers.js","cc"],(function(t){"use strict";var n,e,r,o,i,u;return{setters:[function(t){n=t.defineProperty,e=t.inheritsLoose,r=t.createClass},function(t){o=t.cclegacy,i=t._decorator,u=t.Component}],execute:function(){var c,s,a;o._RF.push({},"40745FrfwpKEq+CzVoWAdel","ColumnBehavior",void 0);var l=i.ccclass;i.property,t("ColumnBehavior",l("ColumBehavior")((a=s=function(t){function n(){return t.apply(this,arguments)||this}e(n,t);var o=n.prototype;return o.start=function(){n.instance=this},o.update=function(){},r(n,null,[{key:"Instance",get:function(){return this.instance}}]),n}(u),n(s,"instance",null),c=a))||c);o._RF.pop()}}}));

System.register("chunks:///_virtual/test.ts",["./_rollupPluginModLoBabelHelpers.js","cc"],(function(t){"use strict";var e,r,n,s;return{setters:[function(t){e=t.inheritsLoose},function(t){r=t.cclegacy,n=t._decorator,s=t.Component}],execute:function(){var o;r._RF.push({},"59f23+pmiBM6KNaxef9ib08","test",void 0);var c=n.ccclass;n.property,t("Test",c("Test")(o=function(t){function r(){return t.apply(this,arguments)||this}return e(r,t),r.prototype.start=function(){},r}(s))||o);r._RF.pop()}}}));

System.register("chunks:///_virtual/GameMgr.ts",["./_rollupPluginModLoBabelHelpers.js","cc","./UIManager.ts"],(function(t){"use strict";var e,n,a,r,i,c,o;return{setters:[function(t){e=t.defineProperty,n=t.inheritsLoose,a=t.createClass},function(t){r=t.cclegacy,i=t._decorator,c=t.Component},function(t){o=t.UIManager}],execute:function(){var s,u,M;t("GameState",void 0),r._RF.push({},"74d39a3az1NFpMdr2RpHIZQ","GameMgr",void 0);var m,p=i.ccclass;i.property;!function(t){t[t.MAIN_MENU=0]="MAIN_MENU",t[t.ACTION_PHASE=1]="ACTION_PHASE",t[t.GAME_OVER=2]="GAME_OVER"}(m||(m=t("GameState",{})));t("GameMgr",p("GameMgr")((M=u=function(t){function e(){return t.apply(this,arguments)||this}n(e,t),e.GameStart=function(){e.gameState=m.ACTION_PHASE,o.instance.GoInGame()},e.GameOver=function(){e.gameState=m.GAME_OVER,o.instance.GoGameOver()},e.MainMenu=function(){e.gameState=m.MAIN_MENU,o.instance.GoMainMenu()};var r=e.prototype;return r.start=function(){e.instace=this},r.update=function(t){},a(e,null,[{key:"Instace",get:function(){return this.instace}}]),e}(c),e(u,"gameState",m.MAIN_MENU),e(u,"instace",null),s=M))||s);r._RF.pop()}}}));

System.register("chunks:///_virtual/BirdgeBehaivior.ts",["./_rollupPluginModLoBabelHelpers.js","cc"],(function(e){"use strict";var t,i,r,o,n,s;return{setters:[function(e){t=e.inheritsLoose,i=e.defineProperty,r=e.assertThisInitialized},function(e){o=e.cclegacy,n=e._decorator,s=e.Component}],execute:function(){var c;o._RF.push({},"c1f1fjs40lPgJR4eOIXSaeV","BirdgeBehaivior",void 0);var a=n.ccclass;n.property,e("BirdgeBehaivior",a("BirdgeBehaivior")(c=function(e){function o(){for(var t,o=arguments.length,n=new Array(o),s=0;s<o;s++)n[s]=arguments[s];return t=e.call.apply(e,[this].concat(n))||this,i(r(t),"expectPos",0),i(r(t),"passed",!1),i(r(t),"movementSpeed",20),t}t(o,e);var n=o.prototype;return n.setBridgeTargetPosition=function(e){this.expectPos=e,this.passed=!1},n.move=function(e){this.expectPos-=e},n.start=function(){},n.update=function(e){},o}(s))||c);o._RF.pop()}}}));

System.register("chunks:///_virtual/ColumnMgr.ts",["./_rollupPluginModLoBabelHelpers.js","cc","./GameMgr.ts","./AudioMgr.ts","./BridgeMgr.ts","./CharacterMgr.ts"],(function(n){"use strict";var t,i,e,o,r,l,s,u,h,c,a,m,C,d,g,f,p,w,b;return{setters:[function(n){t=n.defineProperty,i=n.applyDecoratedDescriptor,e=n.inheritsLoose,o=n.initializerDefineProperty,r=n.assertThisInitialized,l=n.createClass},function(n){s=n.cclegacy,u=n._decorator,h=n.Node,c=n.Prefab,a=n.UITransform,m=n.view,C=n.instantiate,d=n.Component},function(n){g=n.GameMgr,f=n.GameState},function(n){p=n.AudioMgr},function(n){w=n.BridgeMgr},function(n){b=n.CharacterMgr}],execute:function(){var y,P,v,M,S,x,R,A,G,N,k,W,D;s._RF.push({},"ca344/xUDRPQpd642OxYkGM","ColumnMgr",void 0);var I=u.ccclass,_=u.property;n("ColumnMgr",(y=I("ColumnMgr"),P=_(h),v=_(c),M=_(Number),S=_(Number),y((D=W=function(n){function i(){for(var i,e=arguments.length,l=new Array(e),s=0;s<e;s++)l[s]=arguments[s];return i=n.call.apply(n,[this].concat(l))||this,o(r(i),"Columns",A,r(i)),o(r(i),"columPrefab",G,r(i)),o(r(i),"maxColumnWidth",N,r(i)),o(r(i),"minColumnWidth",k,r(i)),t(r(i),"curColum",0),i}e(i,n);var s=i.prototype;return s.RandInRange=function(n,t){return Math.floor(Math.random()*(t-n)+n)},s.SetNewColumnPostion=function(n){var t=n.getComponent(a).width,i=0;if(0==this.Columns.children.length)i=0;else{var e=m._designResolutionSize.width-t,o=this.Columns.children[this.Columns.children.length-1].getComponent(a).width;i=this.Columns.children[this.Columns.children.length-1].position.x+this.RandInRange(o,e)}n.setPosition(i,0)},s.SpawnColumn=function(){var n=C(this.columPrefab);return n.getComponent(a).width=this.RandInRange(this.maxColumnWidth,this.minColumnWidth),console.log("WIDTH: ",n.getComponent(a).width),this.SetNewColumnPostion(n),this.Columns.addChild(n),n},s.CheckColumnPosition=function(){var n=null,t=0;if((n=this.Columns.children.length>=2?this.Columns.children[this.Columns.children.length-2]:this.Columns.children[this.Columns.children.length-1]).position.x>0){t=n.position.x;for(var i=0;i<this.Columns.children.length;i++)this.Columns.children[i].setPosition(this.Columns.children[i].position.x-t,this.Columns.children[i].position.y)}return b.instance.SetCharPos(this.Columns.children[this.curColum]),t},s.SpawnNextChild=function(){var n=this.SpawnColumn();w.instance.SpawnBridge(n);var t=this.CheckColumnPosition();w.instance.CheckBridgePosition(t)},s.CheckColumnFeature=function(){for(;this.Columns.children.length<2;)this.SpawnNextChild();this.curColum>=this.Columns.children.length-1&&this.SpawnNextChild()},s.DestroyAllColumns=function(){this.Columns.destroyAllChildren(),w.instance.DestroyAllBridge()},s.ResetColums=function(){this.DestroyAllColumns(),this.curColum=0},s.GetCurColWidth=function(){return this.Columns.children[this.curColum].getComponent(a).width},s.GetNexCul=function(){return this.Columns.children[this.curColum+1]},s.onScore=function(){var n=this.Columns.children[this.curColum+1].position.x,t=this.Columns.children[this.curColum+1].getComponent(a).width,i=this.GetCurColWidth()+w.instance.GetCurBridgeLength();i<n||i>n+t?(this.ResetColums(),g.GameOver(),p.instance.PlayFallAudio()):(console.log("onScore"),this.curColum+=1,p.instance.PlayScore())},s.start=function(){i.instance=this,this.curColum=0},s.onEnable=function(){},s.update=function(){switch(g.gameState){case f.ACTION_PHASE:this.CheckColumnFeature();break;case f.GAME_OVER:this.ResetColums()}},l(i,null,[{key:"Instance",get:function(){return this.instance}}]),i}(d),t(W,"instance",null),A=i((R=D).prototype,"Columns",[P],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),G=i(R.prototype,"columPrefab",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),N=i(R.prototype,"maxColumnWidth",[M],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 200}}),k=i(R.prototype,"minColumnWidth",[S],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 80}}),x=R))||x));s._RF.pop()}}}));

System.register("chunks:///_virtual/AudioMgr.ts",["./_rollupPluginModLoBabelHelpers.js","cc"],(function(i){"use strict";var t,e,r,n,o,u,l,c,a,s;return{setters:[function(i){t=i.defineProperty,e=i.applyDecoratedDescriptor,r=i.inheritsLoose,n=i.initializerDefineProperty,o=i.assertThisInitialized,u=i.createClass},function(i){l=i.cclegacy,c=i._decorator,a=i.AudioSource,s=i.Component}],execute:function(){var d,p,y,f,A,h,g,b,v,S,w,P,m;l._RF.push({},"df81dNeohxM36pEent9I1jR","AudioMgr",void 0);var z=c.ccclass,F=c.property;i("AudioMgr",(d=z("AudioMgr"),p=F(a),y=F(a),f=F(a),A=F(a),d((m=P=function(i){function e(){for(var e,r=arguments.length,u=new Array(r),l=0;l<r;l++)u[l]=arguments[l];return e=i.call.apply(i,[this].concat(u))||this,n(o(e),"FallAudio",b,o(e)),n(o(e),"ScoreAudio",v,o(e)),n(o(e),"VictoryAudio",S,o(e)),n(o(e),"GrowBridge",w,o(e)),t(o(e),"ActiveSound",!0),e}r(e,i);var l=e.prototype;return l.start=function(){e.instance=this},l.PlayFallAudio=function(){this.ActiveSound&&this.FallAudio.play()},l.PlayScore=function(){this.ActiveSound&&this.ScoreAudio.play()},l.PlayVictory=function(){this.ActiveSound&&this.VictoryAudio.play()},l.PlayGrowBridge=function(){this.ActiveSound&&this.GrowBridge.play()},u(e,null,[{key:"Instace",get:function(){return this.instance}}]),e}(s),t(P,"instance",null),b=e((g=m).prototype,"FallAudio",[p],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),v=e(g.prototype,"ScoreAudio",[y],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),S=e(g.prototype,"VictoryAudio",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),w=e(g.prototype,"GrowBridge",[A],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),h=g))||h));l._RF.pop()}}}));

System.register("chunks:///_virtual/PlayRegionBehavior.ts",["./_rollupPluginModLoBabelHelpers.js","cc","./AudioMgr.ts","./BridgeMgr.ts","./ColumnMgr.ts","./CharacterMgr.ts"],(function(e){"use strict";var t,r,n,i,o,a,c,s,l,u,g,d,h,p;return{setters:[function(e){t=e.applyDecoratedDescriptor,r=e.inheritsLoose,n=e.initializerDefineProperty,i=e.assertThisInitialized,o=e.defineProperty},function(e){a=e.cclegacy,c=e._decorator,s=e.Node,l=e.Label,u=e.Component},function(e){g=e.AudioMgr},function(e){d=e.BridgeMgr},function(e){h=e.ColumnMgr},function(e){p=e.CharacterMgr}],execute:function(){var B,A,f,y,S,C,v;a._RF.push({},"ebf21zv47pKTaH8Kduagq44","PlayRegionBehavior",void 0);var m=c.ccclass,P=c.property;e("PlayRegionBehavior",(B=m("PlayRegionBehavior"),A=P(s),f=P(l),B((C=t((S=function(e){function t(){for(var t,r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return t=e.call.apply(e,[this].concat(a))||this,n(i(t),"PlayRegion",C,i(t)),n(i(t),"Score",v,i(t)),o(i(t),"increaseBridge",!1),t}r(t,e);var a=t.prototype;return a.start=function(){this.PlayRegion.on(s.EventType.TOUCH_START,this.StartIncreaseBridge,this),this.PlayRegion.on(s.EventType.TOUCH_END,this.StopIncreaseBridge,this)},a.CheckBridgeStatus=function(){return 0==d.instance.GetCurBridge().rotation.z&&(console.log("CheckBridgeStatus: ",d.instance.GetCurBridge().rotation.z),!0)},a.StartIncreaseBridge=function(){if(console.log("StartIncreaseBridge"),console.log("CheckBridgeStatus_ZZZZZZZZZZZZZz: ",d.instance.GetCurBridge().angle),0!=d.instance.GetCurBridge().angle)return this.increaseBridge=!1,void console.log("AAAAAAAAAAAAAAAAAAAAAAAa");this.increaseBridge=!0},a.CallOnScore=function(){h.instance.onScore()},a.TryMove=function(){p.instance.StartMoveChar(),this.scheduleOnce(this.CallOnScore,1)},a.StopIncreaseBridge=function(){console.log("StopIncreaseBridge"),this.increaseBridge=!1,d.instance.RotateCurBridge(),this.scheduleOnce(this.TryMove,.5)},a.update=function(e){this.increaseBridge&&(d.instance.IncreaseCurBridgeHeight(),g.instance.PlayGrowBridge()),this.Score.string=h.instance.curColum.toString(),localStorage.setItem("score",h.instance.curColum.toString());var t=+localStorage.getItem("best");h.instance.curColum>t&&(localStorage.setItem("best",h.instance.curColum.toString()),this.schedule(g.instance.PlayVictory(),.1))},t}(u)).prototype,"PlayRegion",[A],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),v=t(S.prototype,"Score",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),y=S))||y));a._RF.pop()}}}));

System.register("chunks:///_virtual/BridgeMgr.ts",["./_rollupPluginModLoBabelHelpers.js","cc","./ColumnMgr.ts"],(function(e){"use strict";var t,i,r,n,o,s,a,g,u,c,d,l,h,p;return{setters:[function(e){t=e.defineProperty,i=e.applyDecoratedDescriptor,r=e.inheritsLoose,n=e.initializerDefineProperty,o=e.assertThisInitialized,s=e.createClass},function(e){a=e.cclegacy,g=e._decorator,u=e.Node,c=e.Prefab,d=e.UITransform,l=e.instantiate,h=e.Component},function(e){p=e.ColumnMgr}],execute:function(){var B,f,C,b,m,y,P,v,S,w,z,M,G;a._RF.push({},"ec164zL6oRFzqNKxrkzknOM","BridgeMgr",void 0);var N=g.ccclass,k=g.property;e("BridgeMgr",(B=N("BridgeMgr"),f=k(u),C=k(c),b=k(Number),m=k(Number),B((G=M=function(e){function i(){for(var i,r=arguments.length,s=new Array(r),a=0;a<r;a++)s[a]=arguments[a];return i=e.call.apply(e,[this].concat(s))||this,n(o(i),"Bridges",v,o(i)),n(o(i),"BridgePrefab",S,o(i)),n(o(i),"increaseSpeed",w,o(i)),n(o(i),"rotateSpeed",z,o(i)),t(o(i),"increaseBridge",!1),t(o(i),"rotateBridge",!1),i}r(i,e);var a=i.prototype;return a.SetNewBridgePostion=function(e,t){var i=t.position.x+t.getComponent(d).width,r=t.getComponent(d).height;e.setPosition(i,r),e.getComponent(d).height=0},a.SpawnBridge=function(e){var t=l(this.BridgePrefab);this.SetNewBridgePostion(t,e),this.Bridges.addChild(t),this.rotateBridge=!1},a.CheckBridgePosition=function(e){for(var t=0;t<this.Bridges.children.length;t++)this.Bridges.children[t].setPosition(this.Bridges.children[t].position.x-e,this.Bridges.children[t].position.y)},a.GetCurBridge=function(){return this.Bridges.children[p.instance.curColum]},a.IncreaseCurBridgeHeight=function(){this.GetCurBridge().getComponent(d).height+=this.increaseSpeed},a.RotateCurBridge=function(){this.rotateBridge=!0,console.log("RotateCurBridge")},a.DestroyAllBridge=function(){this.Bridges.destroyAllChildren()},a.GetCurBridgeLength=function(){return this.GetCurBridge().getComponent(d).height},a.start=function(){i.instance=this},a.onEnable=function(){},a.update=function(e){if(1==this.rotateBridge){var t=this.GetCurBridge(),i=t.angle;i-=this.rotateSpeed,t.angle=i}1==this.rotateBridge&&this.GetCurBridge().angle<=-90&&(this.rotateBridge=!1)},s(i,null,[{key:"Instance",get:function(){return this.instance}}]),i}(h),t(M,"instance",null),v=i((P=G).prototype,"Bridges",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),S=i(P.prototype,"BridgePrefab",[C],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),w=i(P.prototype,"increaseSpeed",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 10}}),z=i(P.prototype,"rotateSpeed",[m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 10}}),y=P))||y));a._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./Data.ts","./GameMgr.ts","./AudioMgr.ts","./UIManager.ts","./BridgeMgr.ts","./ColumnMgr.ts","./CharacterMgr.ts","./ColumnBehavior.ts","./test.ts","./BirdgeBehaivior.ts","./PlayRegionBehavior.ts"],(function(){"use strict";return{setters:[null,null,null,null,null,null,null,null,null,null,null],execute:function(){}}}));

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