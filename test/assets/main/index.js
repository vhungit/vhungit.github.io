System.register("chunks:///_virtual/Utils.ts", ['cc'], function (exports) {
  'use strict';

  var cclegacy, Quat, Vec3, math;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      Quat = module.Quat;
      Vec3 = module.Vec3;
      math = module.math;
    }],
    execute: function () {
      cclegacy._RF.push({}, "10e5ec48SRIkIMCKunjzFih", "Utils", undefined);

      var Utils = exports('Utils', /*#__PURE__*/function () {
        function Utils() {}

        Utils.RotationAroundNode = function RotationAroundNode(self, wpos, axis, angle) {
          var _quat = new Quat();

          var v1 = new Vec3();
          var v2 = new Vec3();
          var pos2 = self.worldPosition;
          var rad = math.toRadian(angle); // Calculate the quaternion based on the axis of rotation and 
          // the arc of rotation

          Quat.fromAxisAngle(_quat, axis, rad); // Subtract, the vector between the target point and the camera point

          Vec3.subtract(v1, pos2, wpos); // Rotate the vector dir according to the calculated quaternion, and then
          // calculate the rotated distance

          Vec3.transformQuat(v2, v1, _quat);
          self.worldPosition = Vec3.add(v2, wpos, v2); // Rotate the quaternion around the specified axis in world space 
          // according to the axis and radian 

          Quat.rotateAround(_quat, self.worldRotation, axis, rad);
          return _quat;
        };

        return Utils;
      }());

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/bodyPart.ts", ['cc', './_rollupPluginModLoBabelHelpers.js'], function (exports) {
  'use strict';

  var cclegacy, _decorator, Node, Component, _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized;

  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Component = module.Component;
    }, function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor, _temp;

      cclegacy._RF.push({}, "69d49i6+EBPVqqp3f0EO0BL", "bodyPart", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var BodyPart = exports('BodyPart', (_dec = ccclass('BodyPart'), _dec2 = property(Node), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(BodyPart, _Component);

        function BodyPart() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_assertThisInitialized(_this), "bone", _descriptor, _assertThisInitialized(_this));

          return _this;
        }

        var _proto = BodyPart.prototype;

        _proto.start = function start() {};

        return BodyPart;
      }(Component), _temp), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "bone", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/body.ts", ['cc', './_rollupPluginModLoBabelHelpers.js'], function (exports) {
  'use strict';

  var cclegacy, _decorator, Node, Component, _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized;

  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Component = module.Component;
    }, function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _temp;

      cclegacy._RF.push({}, "8f5dcPLKbtEqbkxevbRct7V", "body", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var Body = exports('Body', (_dec = ccclass('Body'), _dec2 = property(Node), _dec3 = property(Node), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Body, _Component);

        function Body() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_assertThisInitialized(_this), "boneTop", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "boneBack", _descriptor2, _assertThisInitialized(_this));

          return _this;
        }

        var _proto = Body.prototype;

        _proto.start = function start() {};

        return Body;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "boneTop", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "boneBack", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/character.ts", ['cc', './_rollupPluginModLoBabelHelpers.js', './bodyPart.ts', './body.ts'], function (exports) {
  'use strict';

  var cclegacy, _decorator, Vec3, Component, _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _defineProperty, BodyPart, Body;

  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Vec3 = module.Vec3;
      Component = module.Component;
    }, function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _defineProperty = module.defineProperty;
    }, function (module) {
      BodyPart = module.BodyPart;
    }, function (module) {
      Body = module.Body;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _temp;

      cclegacy._RF.push({}, "9fe02FY1lJFmqhoENEht2sb", "character", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var Character = exports('Character', (_dec = ccclass('Character'), _dec2 = property(Body), _dec3 = property(BodyPart), _dec4 = property(BodyPart), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Character, _Component);

        function Character() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_assertThisInitialized(_this), "body", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "top", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "back", _descriptor3, _assertThisInitialized(_this));

          _defineProperty(_assertThisInitialized(_this), "temp", new Vec3());

          return _this;
        }

        var _proto = Character.prototype;

        _proto.start = function start() {
          this.updateBonePos(this.body.boneTop, this.top);
          this.updateBonePos(this.body.boneBack, this.back);
        };

        _proto.updateBonePos = function updateBonePos(bone, part) {
          part.node.worldPosition = this.body.node.worldPosition;
          Vec3.subtract(this.temp, bone.worldPosition, part.bone.worldPosition);
          Vec3.add(this.temp, this.body.node.worldPosition, this.temp);
          part.node.worldPosition = this.temp;
        };

        return Character;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "body", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "top", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "back", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/GameMgr.ts", ['cc', './_rollupPluginModLoBabelHelpers.js'], function (exports) {
  'use strict';

  var cclegacy, _decorator, game, Quat, Component, _inheritsLoose, _defineProperty, _assertThisInitialized;

  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      game = module.game;
      Quat = module.Quat;
      Component = module.Component;
    }, function (module) {
      _inheritsLoose = module.inheritsLoose;
      _defineProperty = module.defineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }],
    execute: function () {
      var _dec, _class, _temp;

      cclegacy._RF.push({}, "ba7b0kbqfJLdYQzftkpTGSQ", "GameMgr", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      game.config.showFPS = true;
      var GameMgr = exports('GameMgr', (_dec = ccclass('GameMgr'), _dec(_class = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(GameMgr, _Component);

        function GameMgr() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _defineProperty(_assertThisInitialized(_this), "rotation", new Quat());

          return _this;
        }

        var _proto = GameMgr.prototype;

        _proto.start = function start() {
          this.rotation = this.node.rotation;
        };

        _proto.update = function update(dt) {};

        return GameMgr;
      }(Component), _temp)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/CameraCtrl.ts", ['cc', './_rollupPluginModLoBabelHelpers.js'], function (exports) {
  'use strict';

  var cclegacy, _decorator, Node, Quat, Vec3, math, Component, _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _defineProperty;

  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Quat = module.Quat;
      Vec3 = module.Vec3;
      math = module.math;
      Component = module.Component;
    }, function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _defineProperty = module.defineProperty;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor, _temp;

      cclegacy._RF.push({}, "cde180h0PZNpp22lh0ZnyJ1", "CameraCtrl", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      /**
       * Predefined variables
       * Name = CameraCtrl
       * DateTime = Tue Dec 07 2021 17:24:33 GMT+0700 (Indochina Time)
       * Author = hungkaka
       * FileBasename = CameraCtrl.ts
       * FileBasenameNoExtension = CameraCtrl
       * URL = db://assets/Src/CameraCtrl.ts
       * ManualUrl = https://docs.cocos.com/creator/3.3/manual/en/
       *
       */

      var CameraCtrl = exports('CameraCtrl', (_dec = ccclass('CameraCtrl'), _dec2 = property(Node), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(CameraCtrl, _Component);

        function CameraCtrl() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_assertThisInitialized(_this), "target", _descriptor, _assertThisInitialized(_this));

          _defineProperty(_assertThisInitialized(_this), "angle", 10);

          _defineProperty(_assertThisInitialized(_this), "_quat", new Quat());

          _defineProperty(_assertThisInitialized(_this), "v1", new Vec3());

          _defineProperty(_assertThisInitialized(_this), "v2", new Vec3());

          return _this;
        }

        var _proto = CameraCtrl.prototype;

        _proto.start = function start() {// [3]
        };

        _proto.update = function update(deltaTime) {
          var rad = math.toRadian(this.angle * deltaTime); // Calculate the quaternion based on the axis of rotation and 
          // the arc of rotation

          Quat.fromAxisAngle(this._quat, Vec3.UP, rad); // Subtract, the vector between the target point and the camera point

          Vec3.subtract(this.v1, this.node.worldPosition, this.target.worldPosition); // Rotate the vector dir according to the calculated quaternion, and then
          // calculate the rotated distance

          Vec3.transformQuat(this.v2, this.v1, this._quat);
          this.node.worldPosition = Vec3.add(this.v2, this.target.worldPosition, this.v2); // Rotate the quaternion around the specified axis in world space 
          // according to the axis and radian 

          Quat.rotateAround(this._quat, this.node.worldRotation, Vec3.UP, rad);
          this.node.lookAt(this.target.position);
        };

        return CameraCtrl;
      }(Component), _temp), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "target", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Input.ts", ['cc', './_rollupPluginModLoBabelHelpers.js'], function (exports) {
  'use strict';

  var cclegacy, _decorator, Node, Vec2, Component, _defineProperty, _inheritsLoose, _createClass, _assertThisInitialized;

  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Vec2 = module.Vec2;
      Component = module.Component;
    }, function (module) {
      _defineProperty = module.defineProperty;
      _inheritsLoose = module.inheritsLoose;
      _createClass = module.createClass;
      _assertThisInitialized = module.assertThisInitialized;
    }],
    execute: function () {
      var _dec, _class, _class2, _temp;

      cclegacy._RF.push({}, "e1c6c5BxUBFlrIibwgDLx5h", "Input", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var TouchState;

      (function (TouchState) {
        TouchState[TouchState["None"] = 0] = "None";
        TouchState[TouchState["Down"] = 1] = "Down";
        TouchState[TouchState["Press"] = 2] = "Press";
        TouchState[TouchState["Up"] = 3] = "Up";
      })(TouchState || (TouchState = {}));

      var Input = exports('Input', (_dec = ccclass('Input'), _dec(_class = (_temp = _class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Input, _Component);

        function Input() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _defineProperty(_assertThisInitialized(_this), "state", TouchState.None);

          _defineProperty(_assertThisInitialized(_this), "isTouchDown", false);

          _defineProperty(_assertThisInitialized(_this), "delta", new Vec2());

          return _this;
        }

        var _proto = Input.prototype;

        _proto.onLoad = function onLoad() {
          Input.instance = this;
          this.node.on(Node.EventType.TOUCH_START, this.onTouchBegan, this);
          this.node.on(Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
          this.node.on(Node.EventType.TOUCH_END, this.onTouchEnded, this);
          this.node.on(Node.EventType.TOUCH_CANCEL, this.onTouchCancelled, this);
        };

        _proto.lateUpdate = function lateUpdate() {
          if (this.state == TouchState.Down) {
            this.state = TouchState.Press;
          } else if (this.state == TouchState.Up) {
            this.state = TouchState.None;
          }
        };

        _proto.onTouchBegan = function onTouchBegan(event) {
          var touches = event.getTouches();
          this.isTouchDown = true;
          this.state = TouchState.Down;
          this.StopPropagation(event);
        };

        _proto.onTouchEnded = function onTouchEnded(event) {
          var touches = event.getTouches();
          this.isTouchDown = false;
          this.state = TouchState.Up;
          this.StopPropagation(event);
        };

        _proto.onTouchCancelled = function onTouchCancelled(event) {
          this.isTouchDown = false;
          this.state = TouchState.Up;
          this.StopPropagation(event);
        };

        _proto.onTouchMove = function onTouchMove(event) {
          var touches = event.getTouches();
          this.isTouchDown = true;
          this.state = TouchState.Press;
          this.delta = touches[0].getDelta();
          this.StopPropagation(event);
        };

        _proto.StopPropagation = function StopPropagation(event) {//event.propagationImmediateStopped = true;
        };

        _createClass(Input, null, [{
          key: "Instance",
          get: function get() {
            return Input.instance;
          }
        }, {
          key: "State",
          get: function get() {
            return Input.instance.state;
          }
        }, {
          key: "IsTouchDown",
          get: function get() {
            return Input.instance.state == TouchState.Down;
          }
        }, {
          key: "IsTouchUp",
          get: function get() {
            return Input.instance.state == TouchState.Up;
          }
        }, {
          key: "Delta",
          get: function get() {
            return Input.instance.delta;
          }
        }]);

        return Input;
      }(Component), _defineProperty(_class2, "instance", null), _temp)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Rotation.ts", ['cc', './_rollupPluginModLoBabelHelpers.js'], function (exports) {
  'use strict';

  var cclegacy, _decorator, CCFloat, Vec3, Component, _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _defineProperty;

  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      CCFloat = module.CCFloat;
      Vec3 = module.Vec3;
      Component = module.Component;
    }, function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _defineProperty = module.defineProperty;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _temp;

      cclegacy._RF.push({}, "eddd4lxbtdOHrEJO75AcVdI", "Rotation", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      /**
       * Author = vhung.it
       *
       */

      var Rotation = exports('Rotation', (_dec = ccclass('Rotation'), _dec2 = property(CCFloat), _dec3 = property(Vec3), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Rotation, _Component);

        function Rotation() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_assertThisInitialized(_this), "speed", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "direction", _descriptor2, _assertThisInitialized(_this));

          _defineProperty(_assertThisInitialized(_this), "eulerAngle", new Vec3());

          return _this;
        }

        var _proto = Rotation.prototype;

        _proto.start = function start() {};

        _proto.update = function update(dt) {
          this.eulerAngle.add(this.direction.normalize().multiplyScalar(this.speed * dt));
          this.node.eulerAngles = this.eulerAngle;
        };

        return Rotation;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "speed", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 100;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "direction", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Vec3(0, 0, 1);
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/main", ['./Utils.ts', './bodyPart.ts', './body.ts', './character.ts', './GameMgr.ts', './CameraCtrl.ts', './Input.ts', './Rotation.ts'], function () {
  'use strict';

  return {
    setters: [null, null, null, null, null, null, null, null],
    execute: function () {}
  };
});

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