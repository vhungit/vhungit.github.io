System.register("chunks:///_virtual/bundle.js", ['./cjs-loader.mjs'], function (exports, module) {
  'use strict';

  var loader;
  return {
    setters: [function (module) {
      loader = module.default;
    }],
    execute: function () {
      exports('default', void 0);

      var _cjsExports;

      loader.define(module.meta.url, function (exports$1, _require, module, __filename, __dirname) {
        var require = loader.createRequireWithReqMap({}, _require);

        (function () {
          /*! For license information please see bundle.js.LICENSE.txt */
          (function () {
            var t = {
              156: function _(t, n, e) {
                var r;

                function i(t) {
                  return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                    return typeof t;
                  } : function (t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                  })(t);
                }

                function u(t, n) {
                  if (!(t instanceof n)) throw new TypeError("Cannot call a class as a function");
                }

                function o(t, n) {
                  for (var e = 0; e < n.length; e++) {
                    var r = n[e];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
                  }
                }

                function a(t, n) {
                  return (a = Object.setPrototypeOf || function (t, n) {
                    return t.__proto__ = n, t;
                  })(t, n);
                }

                function c(t, n) {
                  return !n || "object" !== i(n) && "function" != typeof n ? function (t) {
                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t;
                  }(t) : n;
                }

                function f(t) {
                  return (f = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
                    return t.__proto__ || Object.getPrototypeOf(t);
                  })(t);
                }

                Object.defineProperty(n, "__esModule", {
                  value: !0
                }), n["default"] = void 0;

                var s = function (t) {
                  !function (t, n) {
                    if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(n && n.prototype, {
                      constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                      }
                    }), n && a(t, n);
                  }(i, t);

                  var n,
                      e,
                      r = function (t) {
                    function n() {
                      if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                      if (Reflect.construct.sham) return !1;
                      if ("function" == typeof Proxy) return !0;

                      try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
                      } catch (t) {
                        return !1;
                      }
                    }

                    return function () {
                      var e,
                          r = f(t);

                      if (n()) {
                        var i = f(this).constructor;
                        e = Reflect.construct(r, arguments, i);
                      } else e = r.apply(this, arguments);

                      return c(this, e);
                    };
                  }(i);

                  function i() {
                    return u(this, i), r.apply(this, arguments);
                  }

                  return n = i, e = [{
                    key: "openWeb",
                    value: function value() {
                      for (var t = arguments.length, n = new Array(t), e = 0; e < t; e++) {
                        n[e] = arguments[e];
                      }

                      return this.dispatchFunction.apply(this, ["openWeb"].concat(n));
                    }
                  }, {
                    key: "dismiss",
                    value: function value() {
                      for (var t = arguments.length, n = new Array(t), e = 0; e < t; e++) {
                        n[e] = arguments[e];
                      }

                      return this.dispatchFunction.apply(this, ["dismiss"].concat(n));
                    }
                  }, {
                    key: "dismissAll",
                    value: function value() {
                      for (var t = arguments.length, n = new Array(t), e = 0; e < t; e++) {
                        n[e] = arguments[e];
                      }

                      return this.dispatchFunction.apply(this, ["dismissAll"].concat(n));
                    }
                  }, {
                    key: "goBack",
                    value: function value() {
                      for (var t = arguments.length, n = new Array(t), e = 0; e < t; e++) {
                        n[e] = arguments[e];
                      }

                      return this.dispatchFunction.apply(this, ["goBack"].concat(n));
                    }
                  }, {
                    key: "goHome",
                    value: function value() {
                      for (var t = arguments.length, n = new Array(t), e = 0; e < t; e++) {
                        n[e] = arguments[e];
                      }

                      return this.dispatchFunction.apply(this, ["goHome"].concat(n));
                    }
                  }, {
                    key: "copyToClipboard",
                    value: function value() {
                      for (var t = arguments.length, n = new Array(t), e = 0; e < t; e++) {
                        n[e] = arguments[e];
                      }

                      return this.dispatchFunction.apply(this, ["copyToClipboard"].concat(n));
                    }
                  }, {
                    key: "openDialer",
                    value: function value() {
                      for (var t = arguments.length, n = new Array(t), e = 0; e < t; e++) {
                        n[e] = arguments[e];
                      }

                      return this.dispatchFunction.apply(this, ["openDialer"].concat(n));
                    }
                  }, {
                    key: "getBase64FromUrl",
                    value: function value() {
                      for (var t = arguments.length, n = new Array(t), e = 0; e < t; e++) {
                        n[e] = arguments[e];
                      }

                      return this.dispatchFunction.apply(this, ["getBase64FromUrl"].concat(n));
                    }
                  }, {
                    key: "setBrightnessLevel",
                    value: function value() {
                      for (var t = arguments.length, n = new Array(t), e = 0; e < t; e++) {
                        n[e] = arguments[e];
                      }

                      return this.dispatchFunction.apply(this, ["setBrightnessLevel"].concat(n));
                    }
                  }, {
                    key: "getBrightnessLevel",
                    value: function value() {
                      for (var t = arguments.length, n = new Array(t), e = 0; e < t; e++) {
                        n[e] = arguments[e];
                      }

                      return this.dispatchFunction.apply(this, ["getBrightnessLevel"].concat(n));
                    }
                  }, {
                    key: "getSystemBrightnessLevel",
                    value: function value() {
                      for (var t = arguments.length, n = new Array(t), e = 0; e < t; e++) {
                        n[e] = arguments[e];
                      }

                      return this.dispatchFunction.apply(this, ["getSystemBrightnessLevel"].concat(n));
                    }
                  }, {
                    key: "sendSMS",
                    value: function value() {
                      for (var t = arguments.length, n = new Array(t), e = 0; e < t; e++) {
                        n[e] = arguments[e];
                      }

                      return this.dispatchFunction.apply(this, ["sendSMS"].concat(n));
                    }
                  }, {
                    key: "getScreenShot",
                    value: function value() {
                      for (var t = arguments.length, n = new Array(t), e = 0; e < t; e++) {
                        n[e] = arguments[e];
                      }

                      return this.dispatchFunction.apply(this, ["getScreenShot"].concat(n));
                    }
                  }, {
                    key: "enableScreenshots",
                    value: function value() {
                      for (var t = arguments.length, n = new Array(t), e = 0; e < t; e++) {
                        n[e] = arguments[e];
                      }

                      return this.dispatchFunction.apply(this, ["enableScreenshots"].concat(n));
                    }
                  }, {
                    key: "getImage",
                    value: function value() {
                      for (var t = arguments.length, n = new Array(t), e = 0; e < t; e++) {
                        n[e] = arguments[e];
                      }

                      return this.dispatchFunction.apply(this, ["getImage"].concat(n));
                    }
                  }, {
                    key: "saveImage",
                    value: function value() {
                      for (var t = arguments.length, n = new Array(t), e = 0; e < t; e++) {
                        n[e] = arguments[e];
                      }

                      return this.dispatchFunction.apply(this, ["saveImage"].concat(n));
                    }
                  }, {
                    key: "getImageSize",
                    value: function value() {
                      for (var t = arguments.length, n = new Array(t), e = 0; e < t; e++) {
                        n[e] = arguments[e];
                      }

                      return this.dispatchFunction.apply(this, ["getImageSize"].concat(n));
                    }
                  }, {
                    key: "getImageRotateFromUri",
                    value: function value() {
                      for (var t = arguments.length, n = new Array(t), e = 0; e < t; e++) {
                        n[e] = arguments[e];
                      }

                      return this.dispatchFunction.apply(this, ["getImageRotateFromUri"].concat(n));
                    }
                  }, {
                    key: "openURL",
                    value: function value() {
                      for (var t = arguments.length, n = new Array(t), e = 0; e < t; e++) {
                        n[e] = arguments[e];
                      }

                      return this.dispatchFunction.apply(this, ["openURL"].concat(n));
                    }
                  }, {
                    key: "playYouTube",
                    value: function value() {
                      for (var t = arguments.length, n = new Array(t), e = 0; e < t; e++) {
                        n[e] = arguments[e];
                      }

                      return this.dispatchFunction.apply(this, ["playYouTube"].concat(n));
                    }
                  }, {
                    key: "shareFacebook",
                    value: function value() {
                      for (var t = arguments.length, n = new Array(t), e = 0; e < t; e++) {
                        n[e] = arguments[e];
                      }

                      return this.dispatchFunction.apply(this, ["shareFacebook"].concat(n));
                    }
                  }, {
                    key: "throwJSException",
                    value: function value() {
                      for (var t = arguments.length, n = new Array(t), e = 0; e < t; e++) {
                        n[e] = arguments[e];
                      }

                      return this.dispatchFunction.apply(this, ["throwJSException"].concat(n));
                    }
                  }, {
                    key: "share",
                    value: function value() {
                      for (var t = arguments.length, n = new Array(t), e = 0; e < t; e++) {
                        n[e] = arguments[e];
                      }

                      return this.dispatchFunction.apply(this, ["share"].concat(n));
                    }
                  }, {
                    key: "isHighPerformanceDevice",
                    value: function value() {
                      for (var t = arguments.length, n = new Array(t), e = 0; e < t; e++) {
                        n[e] = arguments[e];
                      }

                      return this.dispatchFunction.apply(this, ["isHighPerformanceDevice"].concat(n));
                    }
                  }, {
                    key: "registerShakeSensitivity",
                    value: function value() {
                      for (var t = arguments.length, n = new Array(t), e = 0; e < t; e++) {
                        n[e] = arguments[e];
                      }

                      return this.dispatchFunction.apply(this, ["registerShakeSensitivity"].concat(n));
                    }
                  }, {
                    key: "unregisterShakeSensitivity",
                    value: function value() {
                      for (var t = arguments.length, n = new Array(t), e = 0; e < t; e++) {
                        n[e] = arguments[e];
                      }

                      return this.dispatchFunction.apply(this, ["unregisterShakeSensitivity"].concat(n));
                    }
                  }, {
                    key: "saveCalendarEvent",
                    value: function value() {
                      for (var t = arguments.length, n = new Array(t), e = 0; e < t; e++) {
                        n[e] = arguments[e];
                      }

                      return this.dispatchFunction.apply(this, ["saveCalendarEvent"].concat(n));
                    }
                  }, {
                    key: "activeKeepAwake",
                    value: function value() {
                      for (var t = arguments.length, n = new Array(t), e = 0; e < t; e++) {
                        n[e] = arguments[e];
                      }

                      return this.dispatchFunction.apply(this, ["activeKeepAwake"].concat(n));
                    }
                  }, {
                    key: "getItem",
                    value: function value() {
                      for (var t = arguments.length, n = new Array(t), e = 0; e < t; e++) {
                        n[e] = arguments[e];
                      }

                      return this.dispatchFunction.apply(this, ["getItem"].concat(n));
                    }
                  }, {
                    key: "setItem",
                    value: function value() {
                      for (var t = arguments.length, n = new Array(t), e = 0; e < t; e++) {
                        n[e] = arguments[e];
                      }

                      return this.dispatchFunction.apply(this, ["setItem"].concat(n));
                    }
                  }, {
                    key: "removeItem",
                    value: function value() {
                      for (var t = arguments.length, n = new Array(t), e = 0; e < t; e++) {
                        n[e] = arguments[e];
                      }

                      return this.dispatchFunction.apply(this, ["removeItem"].concat(n));
                    }
                  }, {
                    key: "showToast",
                    value: function value() {
                      for (var t = arguments.length, n = new Array(t), e = 0; e < t; e++) {
                        n[e] = arguments[e];
                      }

                      return this.dispatchFunction.apply(this, ["showToast"].concat(n));
                    }
                  }, {
                    key: "hideToast",
                    value: function value() {
                      for (var t = arguments.length, n = new Array(t), e = 0; e < t; e++) {
                        n[e] = arguments[e];
                      }

                      return this.dispatchFunction.apply(this, ["hideToast"].concat(n));
                    }
                  }, {
                    key: "showLoading",
                    value: function value() {
                      for (var t = arguments.length, n = new Array(t), e = 0; e < t; e++) {
                        n[e] = arguments[e];
                      }

                      return this.dispatchFunction.apply(this, ["showLoading"].concat(n));
                    }
                  }, {
                    key: "hideLoading",
                    value: function value() {
                      for (var t = arguments.length, n = new Array(t), e = 0; e < t; e++) {
                        n[e] = arguments[e];
                      }

                      return this.dispatchFunction.apply(this, ["hideLoading"].concat(n));
                    }
                  }, {
                    key: "showAlert",
                    value: function value() {
                      for (var t = arguments.length, n = new Array(t), e = 0; e < t; e++) {
                        n[e] = arguments[e];
                      }

                      return this.dispatchFunction.apply(this, ["showAlert"].concat(n));
                    }
                  }, {
                    key: "showAction",
                    value: function value() {
                      for (var t = arguments.length, n = new Array(t), e = 0; e < t; e++) {
                        n[e] = arguments[e];
                      }

                      return this.dispatchFunction.apply(this, ["showAction"].concat(n));
                    }
                  }, {
                    key: "showPicker",
                    value: function value() {
                      for (var t = arguments.length, n = new Array(t), e = 0; e < t; e++) {
                        n[e] = arguments[e];
                      }

                      return this.dispatchFunction.apply(this, ["showPicker"].concat(n));
                    }
                  }, {
                    key: "getContacts",
                    value: function value() {
                      for (var t = arguments.length, n = new Array(t), e = 0; e < t; e++) {
                        n[e] = arguments[e];
                      }

                      return this.dispatchFunction.apply(this, ["getContacts"].concat(n));
                    }
                  }, {
                    key: "saveContact",
                    value: function value() {
                      for (var t = arguments.length, n = new Array(t), e = 0; e < t; e++) {
                        n[e] = arguments[e];
                      }

                      return this.dispatchFunction.apply(this, ["saveContact"].concat(n));
                    }
                  }, {
                    key: "requestUserInfo",
                    value: function value() {
                      for (var t = arguments.length, n = new Array(t), e = 0; e < t; e++) {
                        n[e] = arguments[e];
                      }

                      return this.dispatchFunction.apply(this, ["requestUserInfo"].concat(n));
                    }
                  }, {
                    key: "getUserUUID",
                    value: function value() {
                      for (var t = arguments.length, n = new Array(t), e = 0; e < t; e++) {
                        n[e] = arguments[e];
                      }

                      return this.dispatchFunction.apply(this, ["getUserUUID"].concat(n));
                    }
                  }, {
                    key: "listen",
                    value: function value() {
                      for (var t = arguments.length, n = new Array(t), e = 0; e < t; e++) {
                        n[e] = arguments[e];
                      }

                      return this.dispatchFunction.apply(this, ["listen"].concat(n));
                    }
                  }, {
                    key: "scanQRCode",
                    value: function value() {
                      for (var t = arguments.length, n = new Array(t), e = 0; e < t; e++) {
                        n[e] = arguments[e];
                      }

                      return this.dispatchFunction.apply(this, ["scanQRCode"].concat(n));
                    }
                  }, {
                    key: "startFeature",
                    value: function value() {
                      for (var t = arguments.length, n = new Array(t), e = 0; e < t; e++) {
                        n[e] = arguments[e];
                      }

                      return this.dispatchFunction.apply(this, ["startFeature"].concat(n));
                    }
                  }, {
                    key: "requestLocation",
                    value: function value() {
                      for (var t = arguments.length, n = new Array(t), e = 0; e < t; e++) {
                        n[e] = arguments[e];
                      }

                      return this.dispatchFunction.apply(this, ["requestLocation"].concat(n));
                    }
                  }, {
                    key: "getLocation",
                    value: function value() {
                      for (var t = arguments.length, n = new Array(t), e = 0; e < t; e++) {
                        n[e] = arguments[e];
                      }

                      return this.dispatchFunction.apply(this, ["getLocation"].concat(n));
                    }
                  }], e && o(n, e), i;
                }(((r = e(352)) && r.__esModule ? r : {
                  "default": r
                })["default"]);

                n["default"] = s, function (t, n, e) {
                  n in t ? Object.defineProperty(t, n, {
                    value: 2,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                  }) : t[n] = 2;
                }(s, "apiVersion");
              },
              801: function _(t, n, e) {
                Object.defineProperty(n, "__esModule", {
                  value: !0
                }), n["default"] = void 0;
                var r = u(e(51)),
                    i = u(e(245));

                function u(t) {
                  return t && t.__esModule ? t : {
                    "default": t
                  };
                }

                function o(t, n) {
                  var e = Object.keys(t);

                  if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    n && (r = r.filter(function (n) {
                      return Object.getOwnPropertyDescriptor(t, n).enumerable;
                    })), e.push.apply(e, r);
                  }

                  return e;
                }

                function a(t) {
                  for (var n = 1; n < arguments.length; n++) {
                    var e = null != arguments[n] ? arguments[n] : {};
                    n % 2 ? o(Object(e), !0).forEach(function (n) {
                      s(t, n, e[n]);
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e)) : o(Object(e)).forEach(function (n) {
                      Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(e, n));
                    });
                  }

                  return t;
                }

                function c(t) {
                  return (c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                    return typeof t;
                  } : function (t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                  })(t);
                }

                function f(t, n) {
                  for (var e = 0; e < n.length; e++) {
                    var r = n[e];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
                  }
                }

                function s(t, n, e) {
                  return n in t ? Object.defineProperty(t, n, {
                    value: e,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                  }) : t[n] = e, t;
                }

                var l = function () {
                  function t(n) {
                    !function (t, n) {
                      if (!(t instanceof n)) throw new TypeError("Cannot call a class as a function");
                    }(this, t), this.callbacks = {}, this.updateProps(n);
                  }

                  var n, e, u;
                  return n = t, u = [{
                    key: "dispatchFunction",
                    value: function value() {
                      var n = t.instance;
                      if (n) return n.dispatch.apply(n, arguments);
                      console.error("ApiBase haven't initialized yet!");
                    }
                  }, {
                    key: "throwJSException",
                    value: function value() {
                      for (var t = arguments.length, n = new Array(t), e = 0; e < t; e++) {
                        n[e] = arguments[e];
                      }

                      return this.dispatchFunction.apply(this, ["throwJSException"].concat(n));
                    }
                  }], (e = [{
                    key: "updateProps",
                    value: function value(t) {
                      var n = t || {},
                          e = n.serviceId,
                          r = void 0 === e ? "" : e,
                          i = n.accessToken,
                          u = void 0 === i ? "" : i,
                          o = n.hostId,
                          a = void 0 === o ? "" : o;

                      if (a && (a.split("#") > 1 || !this.miniApp)) {
                        var c = (null == t ? void 0 : t.appId) || a.split("#")[0];
                        this.miniApp = {
                          serviceId: r,
                          accessToken: u,
                          hostId: a,
                          appId: c
                        };
                      }

                      this.props = t;
                    }
                  }, {
                    key: "verifyResponse",
                    value: function value(t) {
                      return !!t.miniApp;
                    }
                  }, {
                    key: "response",
                    value: function value(t) {
                      try {
                        var n = JSON.parse(t);

                        if (n && this.verifyResponse(n)) {
                          var e = n.uuid,
                              r = n.result,
                              i = n.func,
                              u = this.callbacks[e];

                          if (u) {
                            var o = u.props.callback;

                            try {
                              if ("object" === c(r)) o(r);else o(JSON.parse(r || "") || r);
                            } catch (t) {
                              o(r);
                            }

                            0 != i.indexOf("observer") && 0 != i.indexOf("listen") && 0 != i.indexOf("subscribe") && u.remove(e);
                          }
                        }
                      } catch (t) {}
                    }
                  }, {
                    key: "removeCallback",
                    value: function value(n) {
                      t.dispatchFunction("removeCallback", n), this.callbacks && delete this.callbacks[n];
                    }
                  }, {
                    key: "dispatch",
                    value: function value() {
                      var t = null,
                          n = Array.from(arguments),
                          e = n[0];

                      if (n.shift(), n.length > 0) {
                        var u = n[n.length - 1];
                        "function" == typeof u && (t = u, n.pop());
                      }

                      var o = this.getUniqueId(),
                          c = null;

                      if (t) {
                        var f = this.removeCallback.bind(this);
                        c = new i["default"]({
                          callback: t,
                          uuid: o,
                          remove: f
                        }), this.callbacks[o] = c;
                      }

                      var s = r["default"].apiVersion,
                          l = {
                        func: e,
                        args: n,
                        uuid: o,
                        platform: this.platform,
                        apiVersion: s,
                        miniApp: a({}, this.miniApp)
                      };
                      return this.request(l, c), c;
                    }
                  }, {
                    key: "request",
                    value: function value(t, n) {}
                  }, {
                    key: "getUniqueId",
                    value: function value() {
                      return Math.random().toString(36).substring(2) + Date.now().toString(36);
                    }
                  }, {
                    key: "throwJSException",
                    value: function value() {
                      for (var n = arguments.length, e = new Array(n), r = 0; r < n; r++) {
                        e[r] = arguments[r];
                      }

                      return t.dispatchFunction.apply(t, ["throwJSException"].concat(e));
                    }
                  }]) && f(n.prototype, e), u && f(n, u), t;
                }();

                n["default"] = l, s(l, "callbacks", {}), s(l, "initialized", !1), s(l, "accessToken", ""), s(l, "serviceId", ""), s(l, "hostId", ""), s(l, "platform", "web"), s(l, "instance", null), s(l, "props", {});
              },
              245: function _(t, n) {
                function e(t, n) {
                  for (var e = 0; e < n.length; e++) {
                    var r = n[e];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
                  }
                }

                Object.defineProperty(n, "__esModule", {
                  value: !0
                }), n["default"] = void 0;

                var r = function () {
                  function t(n) {
                    !function (t, n) {
                      if (!(t instanceof n)) throw new TypeError("Cannot call a class as a function");
                    }(this, t), this.props = n;
                  }

                  var n, r;
                  return n = t, (r = [{
                    key: "remove",
                    value: function value() {
                      this.props.remove && this.props.remove(this.props.uuid);
                    }
                  }]) && e(n.prototype, r), t;
                }();

                n["default"] = r;
              },
              352: function _(t, n, e) {
                var r;
                Object.defineProperty(n, "__esModule", {
                  value: !0
                }), n["default"] = void 0;
                var i = ((r = e(608)) && r.__esModule ? r : {
                  "default": r
                })["default"];
                n["default"] = i;
              },
              608: function _(t, n, e) {
                Object.defineProperty(n, "__esModule", {
                  value: !0
                }), n["default"] = void 0;
                var r,
                    i = (r = e(801)) && r.__esModule ? r : {
                  "default": r
                };

                function u(t) {
                  return (u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                    return typeof t;
                  } : function (t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                  })(t);
                }

                function o(t, n) {
                  for (var e = 0; e < n.length; e++) {
                    var r = n[e];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
                  }
                }

                function a(t, n) {
                  return (a = Object.setPrototypeOf || function (t, n) {
                    return t.__proto__ = n, t;
                  })(t, n);
                }

                function c(t, n) {
                  return !n || "object" !== u(n) && "function" != typeof n ? function (t) {
                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t;
                  }(t) : n;
                }

                function f(t) {
                  return (f = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
                    return t.__proto__ || Object.getPrototypeOf(t);
                  })(t);
                }

                var s = function (t) {
                  !function (t, n) {
                    if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(n && n.prototype, {
                      constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                      }
                    }), n && a(t, n);
                  }(s, t);

                  var n,
                      e,
                      r,
                      u = function (t) {
                    function n() {
                      if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                      if (Reflect.construct.sham) return !1;
                      if ("function" == typeof Proxy) return !0;

                      try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
                      } catch (t) {
                        return !1;
                      }
                    }

                    return function () {
                      var e,
                          r = f(t);

                      if (n()) {
                        var i = f(this).constructor;
                        e = Reflect.construct(r, arguments, i);
                      } else e = r.apply(this, arguments);

                      return c(this, e);
                    };
                  }(s);

                  function s(t) {
                    var n;
                    return function (t, n) {
                      if (!(t instanceof n)) throw new TypeError("Cannot call a class as a function");
                    }(this, s), (n = u.call(this, t)).platform = "web", window.addEventListener("message", function (t) {
                      n.response(t.data);
                    }), n;
                  }

                  return n = s, r = [{
                    key: "init",
                    value: function value(t) {
                      var n = t.client ? t.client.web : t || {};
                      return i["default"].instance ? i["default"].instance.updateProps(n) : i["default"].instance = new s(n), i["default"].instance;
                    }
                  }], (e = [{
                    key: "request",
                    value: function value(t, n) {
                      var e = JSON.stringify(t),
                          r = window.ReactNativeWebView;
                      r && r.postMessage(e);
                    }
                  }]) && o(n.prototype, e), r && o(n, r), s;
                }(i["default"]);

                n["default"] = s;
              },
              197: function _(t, n, e) {
                var r;

                function i(t) {
                  return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                    return typeof t;
                  } : function (t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                  })(t);
                }

                function u(t, n) {
                  if (!(t instanceof n)) throw new TypeError("Cannot call a class as a function");
                }

                function o(t, n) {
                  for (var e = 0; e < n.length; e++) {
                    var r = n[e];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
                  }
                }

                function a(t, n) {
                  return (a = Object.setPrototypeOf || function (t, n) {
                    return t.__proto__ = n, t;
                  })(t, n);
                }

                function c(t, n) {
                  return !n || "object" !== i(n) && "function" != typeof n ? function (t) {
                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t;
                  }(t) : n;
                }

                function f(t) {
                  return (f = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
                    return t.__proto__ || Object.getPrototypeOf(t);
                  })(t);
                }

                n.Z = void 0;

                var s = function (t) {
                  !function (t, n) {
                    if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(n && n.prototype, {
                      constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                      }
                    }), n && a(t, n);
                  }(i, t);

                  var n,
                      e,
                      r = function (t) {
                    function n() {
                      if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                      if (Reflect.construct.sham) return !1;
                      if ("function" == typeof Proxy) return !0;

                      try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
                      } catch (t) {
                        return !1;
                      }
                    }

                    return function () {
                      var e,
                          r = f(t);

                      if (n()) {
                        var i = f(this).constructor;
                        e = Reflect.construct(r, arguments, i);
                      } else e = r.apply(this, arguments);

                      return c(this, e);
                    };
                  }(i);

                  function i() {
                    return u(this, i), r.apply(this, arguments);
                  }

                  return n = i, e = [{
                    key: "navigate",
                    value: function value() {
                      for (var t = arguments.length, n = new Array(t), e = 0; e < t; e++) {
                        n[e] = arguments[e];
                      }

                      return this.dispatchFunction.apply(this, ["navigate"].concat(n));
                    }
                  }, {
                    key: "startApp",
                    value: function value() {
                      for (var t = arguments.length, n = new Array(t), e = 0; e < t; e++) {
                        n[e] = arguments[e];
                      }

                      return this.dispatchFunction.apply(this, ["startApp"].concat(n));
                    }
                  }, {
                    key: "startMiniApp",
                    value: function value() {
                      for (var t = arguments.length, n = new Array(t), e = 0; e < t; e++) {
                        n[e] = arguments[e];
                      }

                      return this.dispatchFunction.apply(this, ["startMiniApp"].concat(n));
                    }
                  }, {
                    key: "startService",
                    value: function value() {
                      for (var t = arguments.length, n = new Array(t), e = 0; e < t; e++) {
                        n[e] = arguments[e];
                      }

                      return this.dispatchFunction.apply(this, ["startService"].concat(n));
                    }
                  }, {
                    key: "startServiceId",
                    value: function value() {
                      for (var t = arguments.length, n = new Array(t), e = 0; e < t; e++) {
                        n[e] = arguments[e];
                      }

                      return this.dispatchFunction.apply(this, ["startServiceId"].concat(n));
                    }
                  }, {
                    key: "startFeature",
                    value: function value() {
                      for (var t = arguments.length, n = new Array(t), e = 0; e < t; e++) {
                        n[e] = arguments[e];
                      }

                      return this.dispatchFunction.apply(this, ["startFeature"].concat(n));
                    }
                  }, {
                    key: "startFeatureCode",
                    value: function value() {
                      for (var t = arguments.length, n = new Array(t), e = 0; e < t; e++) {
                        n[e] = arguments[e];
                      }

                      return this.dispatchFunction.apply(this, ["startFeatureCode"].concat(n));
                    }
                  }, {
                    key: "navigateTab",
                    value: function value() {
                      for (var t = arguments.length, n = new Array(t), e = 0; e < t; e++) {
                        n[e] = arguments[e];
                      }

                      return this.dispatchFunction.apply(this, ["navigateTab"].concat(n));
                    }
                  }, {
                    key: "getIpAddress",
                    value: function value() {
                      for (var t = arguments.length, n = new Array(t), e = 0; e < t; e++) {
                        n[e] = arguments[e];
                      }

                      return this.dispatchFunction.apply(this, ["getIpAddress"].concat(n));
                    }
                  }, {
                    key: "openURLWithPackageId",
                    value: function value() {
                      for (var t = arguments.length, n = new Array(t), e = 0; e < t; e++) {
                        n[e] = arguments[e];
                      }

                      return this.dispatchFunction.apply(this, ["openURLWithPackageId"].concat(n));
                    }
                  }, {
                    key: "requestATTPermision",
                    value: function value() {
                      for (var t = arguments.length, n = new Array(t), e = 0; e < t; e++) {
                        n[e] = arguments[e];
                      }

                      return this.dispatchFunction.apply(this, ["requestATTPermision"].concat(n));
                    }
                  }, {
                    key: "trackEvent",
                    value: function value() {
                      for (var t = arguments.length, n = new Array(t), e = 0; e < t; e++) {
                        n[e] = arguments[e];
                      }

                      return this.dispatchFunction.apply(this, ["trackEvent"].concat(n));
                    }
                  }, {
                    key: "trackPurchase",
                    value: function value() {
                      for (var t = arguments.length, n = new Array(t), e = 0; e < t; e++) {
                        n[e] = arguments[e];
                      }

                      return this.dispatchFunction.apply(this, ["trackPurchase"].concat(n));
                    }
                  }, {
                    key: "uploadImage",
                    value: function value() {
                      for (var t = arguments.length, n = new Array(t), e = 0; e < t; e++) {
                        n[e] = arguments[e];
                      }

                      return this.dispatchFunction.apply(this, ["uploadImage"].concat(n));
                    }
                  }, {
                    key: "setBadgeFeature",
                    value: function value() {
                      for (var t = arguments.length, n = new Array(t), e = 0; e < t; e++) {
                        n[e] = arguments[e];
                      }

                      return this.dispatchFunction.apply(this, ["setBadgeFeature"].concat(n));
                    }
                  }, {
                    key: "getDeviceInfo",
                    value: function value() {
                      for (var t = arguments.length, n = new Array(t), e = 0; e < t; e++) {
                        n[e] = arguments[e];
                      }

                      return this.dispatchFunction.apply(this, ["getDeviceInfo"].concat(n));
                    }
                  }, {
                    key: "openDeviceSetting",
                    value: function value() {
                      for (var t = arguments.length, n = new Array(t), e = 0; e < t; e++) {
                        n[e] = arguments[e];
                      }

                      return this.dispatchFunction.apply(this, ["openDeviceSetting"].concat(n));
                    }
                  }, {
                    key: "sendExtraMessage",
                    value: function value() {
                      for (var t = arguments.length, n = new Array(t), e = 0; e < t; e++) {
                        n[e] = arguments[e];
                      }

                      return this.dispatchFunction.apply(this, ["sendExtraMessage"].concat(n));
                    }
                  }, {
                    key: "requestLogout",
                    value: function value() {
                      for (var t = arguments.length, n = new Array(t), e = 0; e < t; e++) {
                        n[e] = arguments[e];
                      }

                      return this.dispatchFunction.apply(this, ["requestLogout"].concat(n));
                    }
                  }, {
                    key: "setBackgroundTimeout",
                    value: function value() {
                      for (var t = arguments.length, n = new Array(t), e = 0; e < t; e++) {
                        n[e] = arguments[e];
                      }

                      return this.dispatchFunction.apply(this, ["setBackgroundTimeout"].concat(n));
                    }
                  }, {
                    key: "sendMessage",
                    value: function value() {
                      for (var t = arguments.length, n = new Array(t), e = 0; e < t; e++) {
                        n[e] = arguments[e];
                      }

                      return this.dispatchFunction.apply(this, ["sendMessage"].concat(n));
                    }
                  }, {
                    key: "getMessage",
                    value: function value() {
                      for (var t = arguments.length, n = new Array(t), e = 0; e < t; e++) {
                        n[e] = arguments[e];
                      }

                      return this.dispatchFunction.apply(this, ["getMessage"].concat(n));
                    }
                  }, {
                    key: "sendConfirmMessage",
                    value: function value() {
                      for (var t = arguments.length, n = new Array(t), e = 0; e < t; e++) {
                        n[e] = arguments[e];
                      }

                      return this.dispatchFunction.apply(this, ["sendConfirmMessage"].concat(n));
                    }
                  }, {
                    key: "sendProxyMessage",
                    value: function value() {
                      for (var t = arguments.length, n = new Array(t), e = 0; e < t; e++) {
                        n[e] = arguments[e];
                      }

                      return this.dispatchFunction.apply(this, ["sendProxyMessage"].concat(n));
                    }
                  }, {
                    key: "sendCloudMessage",
                    value: function value() {
                      for (var t = arguments.length, n = new Array(t), e = 0; e < t; e++) {
                        n[e] = arguments[e];
                      }

                      return this.dispatchFunction.apply(this, ["sendCloudMessage"].concat(n));
                    }
                  }, {
                    key: "getCloudMessage",
                    value: function value() {
                      for (var t = arguments.length, n = new Array(t), e = 0; e < t; e++) {
                        n[e] = arguments[e];
                      }

                      return this.dispatchFunction.apply(this, ["getCloudMessage"].concat(n));
                    }
                  }, {
                    key: "requestPayment",
                    value: function value() {
                      for (var t = arguments.length, n = new Array(t), e = 0; e < t; e++) {
                        n[e] = arguments[e];
                      }

                      return this.dispatchFunction.apply(this, ["requestPayment"].concat(n));
                    }
                  }, {
                    key: "requestPaymentSdk",
                    value: function value() {
                      for (var t = arguments.length, n = new Array(t), e = 0; e < t; e++) {
                        n[e] = arguments[e];
                      }

                      return this.dispatchFunction.apply(this, ["requestPaymentSdk"].concat(n));
                    }
                  }, {
                    key: "addItemToCart",
                    value: function value() {
                      for (var t = arguments.length, n = new Array(t), e = 0; e < t; e++) {
                        n[e] = arguments[e];
                      }

                      return this.dispatchFunction.apply(this, ["addItemToCart"].concat(n));
                    }
                  }, {
                    key: "gotoCart",
                    value: function value() {
                      for (var t = arguments.length, n = new Array(t), e = 0; e < t; e++) {
                        n[e] = arguments[e];
                      }

                      return this.dispatchFunction.apply(this, ["gotoCart"].concat(n));
                    }
                  }, {
                    key: "clearCart",
                    value: function value() {
                      for (var t = arguments.length, n = new Array(t), e = 0; e < t; e++) {
                        n[e] = arguments[e];
                      }

                      return this.dispatchFunction.apply(this, ["clearCart"].concat(n));
                    }
                  }, {
                    key: "getSources",
                    value: function value() {
                      for (var t = arguments.length, n = new Array(t), e = 0; e < t; e++) {
                        n[e] = arguments[e];
                      }

                      return this.dispatchFunction.apply(this, ["getSources"].concat(n));
                    }
                  }, {
                    key: "getContactInfo",
                    value: function value() {
                      for (var t = arguments.length, n = new Array(t), e = 0; e < t; e++) {
                        n[e] = arguments[e];
                      }

                      return this.dispatchFunction.apply(this, ["getContactInfo"].concat(n));
                    }
                  }, {
                    key: "getContact",
                    value: function value() {
                      for (var t = arguments.length, n = new Array(t), e = 0; e < t; e++) {
                        n[e] = arguments[e];
                      }

                      return this.dispatchFunction.apply(this, ["getContact"].concat(n));
                    }
                  }, {
                    key: "queryContact",
                    value: function value() {
                      for (var t = arguments.length, n = new Array(t), e = 0; e < t; e++) {
                        n[e] = arguments[e];
                      }

                      return this.dispatchFunction.apply(this, ["queryContact"].concat(n));
                    }
                  }, {
                    key: "mapContacts",
                    value: function value() {
                      for (var t = arguments.length, n = new Array(t), e = 0; e < t; e++) {
                        n[e] = arguments[e];
                      }

                      return this.dispatchFunction.apply(this, ["mapContacts"].concat(n));
                    }
                  }, {
                    key: "syncContacts",
                    value: function value() {
                      for (var t = arguments.length, n = new Array(t), e = 0; e < t; e++) {
                        n[e] = arguments[e];
                      }

                      return this.dispatchFunction.apply(this, ["syncContacts"].concat(n));
                    }
                  }, {
                    key: "syncContactAfter1Day",
                    value: function value() {
                      for (var t = arguments.length, n = new Array(t), e = 0; e < t; e++) {
                        n[e] = arguments[e];
                      }

                      return this.dispatchFunction.apply(this, ["syncContactAfter1Day"].concat(n));
                    }
                  }, {
                    key: "syncContactAfter1Minute",
                    value: function value() {
                      for (var t = arguments.length, n = new Array(t), e = 0; e < t; e++) {
                        n[e] = arguments[e];
                      }

                      return this.dispatchFunction.apply(this, ["syncContactAfter1Minute"].concat(n));
                    }
                  }, {
                    key: "getContactAvatar",
                    value: function value() {
                      for (var t = arguments.length, n = new Array(t), e = 0; e < t; e++) {
                        n[e] = arguments[e];
                      }

                      return this.dispatchFunction.apply(this, ["getContactAvatar"].concat(n));
                    }
                  }, {
                    key: "getProfile",
                    value: function value() {
                      for (var t = arguments.length, n = new Array(t), e = 0; e < t; e++) {
                        n[e] = arguments[e];
                      }

                      return this.dispatchFunction.apply(this, ["getProfile"].concat(n));
                    }
                  }, {
                    key: "setProfile",
                    value: function value() {
                      for (var t = arguments.length, n = new Array(t), e = 0; e < t; e++) {
                        n[e] = arguments[e];
                      }

                      return this.dispatchFunction.apply(this, ["setProfile"].concat(n));
                    }
                  }, {
                    key: "observerProfile",
                    value: function value() {
                      for (var t = arguments.length, n = new Array(t), e = 0; e < t; e++) {
                        n[e] = arguments[e];
                      }

                      return this.dispatchFunction.apply(this, ["observerProfile"].concat(n));
                    }
                  }, {
                    key: "setUserProfileExtraOnServer",
                    value: function value() {
                      for (var t = arguments.length, n = new Array(t), e = 0; e < t; e++) {
                        n[e] = arguments[e];
                      }

                      return this.dispatchFunction.apply(this, ["setUserProfileExtraOnServer"].concat(n));
                    }
                  }, {
                    key: "getPassengerInfo",
                    value: function value() {
                      for (var t = arguments.length, n = new Array(t), e = 0; e < t; e++) {
                        n[e] = arguments[e];
                      }

                      return this.dispatchFunction.apply(this, ["getPassengerInfo"].concat(n));
                    }
                  }, {
                    key: "setPassengerInfo",
                    value: function value() {
                      for (var t = arguments.length, n = new Array(t), e = 0; e < t; e++) {
                        n[e] = arguments[e];
                      }

                      return this.dispatchFunction.apply(this, ["setPassengerInfo"].concat(n));
                    }
                  }, {
                    key: "realmQuery",
                    value: function value() {
                      for (var t = arguments.length, n = new Array(t), e = 0; e < t; e++) {
                        n[e] = arguments[e];
                      }

                      return this.dispatchFunction.apply(this, ["realmQuery"].concat(n));
                    }
                  }, {
                    key: "realmSave",
                    value: function value() {
                      for (var t = arguments.length, n = new Array(t), e = 0; e < t; e++) {
                        n[e] = arguments[e];
                      }

                      return this.dispatchFunction.apply(this, ["realmSave"].concat(n));
                    }
                  }, {
                    key: "realmDelete",
                    value: function value() {
                      for (var t = arguments.length, n = new Array(t), e = 0; e < t; e++) {
                        n[e] = arguments[e];
                      }

                      return this.dispatchFunction.apply(this, ["realmDelete"].concat(n));
                    }
                  }, {
                    key: "requestPermission",
                    value: function value() {
                      for (var t = arguments.length, n = new Array(t), e = 0; e < t; e++) {
                        n[e] = arguments[e];
                      }

                      return this.dispatchFunction.apply(this, ["requestPermission"].concat(n));
                    }
                  }, {
                    key: "checkPermission",
                    value: function value() {
                      for (var t = arguments.length, n = new Array(t), e = 0; e < t; e++) {
                        n[e] = arguments[e];
                      }

                      return this.dispatchFunction.apply(this, ["checkPermission"].concat(n));
                    }
                  }, {
                    key: "requestLocationWithOptions",
                    value: function value() {
                      for (var t = arguments.length, n = new Array(t), e = 0; e < t; e++) {
                        n[e] = arguments[e];
                      }

                      return this.dispatchFunction.apply(this, ["requestLocationWithOptions"].concat(n));
                    }
                  }, {
                    key: "getConfig",
                    value: function value() {
                      for (var t = arguments.length, n = new Array(t), e = 0; e < t; e++) {
                        n[e] = arguments[e];
                      }

                      return this.dispatchFunction.apply(this, ["getConfig"].concat(n));
                    }
                  }, {
                    key: "requestSync",
                    value: function value() {
                      for (var t = arguments.length, n = new Array(t), e = 0; e < t; e++) {
                        n[e] = arguments[e];
                      }

                      return this.dispatchFunction.apply(this, ["requestSync"].concat(n));
                    }
                  }, {
                    key: "getTransactionWithServiceIds",
                    value: function value() {
                      for (var t = arguments.length, n = new Array(t), e = 0; e < t; e++) {
                        n[e] = arguments[e];
                      }

                      return this.dispatchFunction.apply(this, ["getTransactionWithServiceIds"].concat(n));
                    }
                  }, {
                    key: "getTransactionInfo",
                    value: function value() {
                      for (var t = arguments.length, n = new Array(t), e = 0; e < t; e++) {
                        n[e] = arguments[e];
                      }

                      return this.dispatchFunction.apply(this, ["getTransactionInfo"].concat(n));
                    }
                  }, {
                    key: "getTransactionStatusCode",
                    value: function value() {
                      for (var t = arguments.length, n = new Array(t), e = 0; e < t; e++) {
                        n[e] = arguments[e];
                      }

                      return this.dispatchFunction.apply(this, ["getTransactionStatusCode"].concat(n));
                    }
                  }, {
                    key: "getStatusInfo",
                    value: function value() {
                      for (var t = arguments.length, n = new Array(t), e = 0; e < t; e++) {
                        n[e] = arguments[e];
                      }

                      return this.dispatchFunction.apply(this, ["getStatusInfo"].concat(n));
                    }
                  }, {
                    key: "getAllTransactionStatusInfo",
                    value: function value() {
                      for (var t = arguments.length, n = new Array(t), e = 0; e < t; e++) {
                        n[e] = arguments[e];
                      }

                      return this.dispatchFunction.apply(this, ["getAllTransactionStatusInfo"].concat(n));
                    }
                  }, {
                    key: "getAllTransactionStatusCode",
                    value: function value() {
                      for (var t = arguments.length, n = new Array(t), e = 0; e < t; e++) {
                        n[e] = arguments[e];
                      }

                      return this.dispatchFunction.apply(this, ["getAllTransactionStatusCode"].concat(n));
                    }
                  }, {
                    key: "getMoneySourceName",
                    value: function value() {
                      for (var t = arguments.length, n = new Array(t), e = 0; e < t; e++) {
                        n[e] = arguments[e];
                      }

                      return this.dispatchFunction.apply(this, ["getMoneySourceName"].concat(n));
                    }
                  }, {
                    key: "getFeatureById",
                    value: function value() {
                      for (var t = arguments.length, n = new Array(t), e = 0; e < t; e++) {
                        n[e] = arguments[e];
                      }

                      return this.dispatchFunction.apply(this, ["getFeatureById"].concat(n));
                    }
                  }, {
                    key: "startTranHisDetail",
                    value: function value() {
                      for (var t = arguments.length, n = new Array(t), e = 0; e < t; e++) {
                        n[e] = arguments[e];
                      }

                      return this.dispatchFunction.apply(this, ["startTranHisDetail"].concat(n));
                    }
                  }, {
                    key: "updateItemServer",
                    value: function value() {
                      for (var t = arguments.length, n = new Array(t), e = 0; e < t; e++) {
                        n[e] = arguments[e];
                      }

                      return this.dispatchFunction.apply(this, ["updateItemServer"].concat(n));
                    }
                  }, {
                    key: "updateItemLocal",
                    value: function value() {
                      for (var t = arguments.length, n = new Array(t), e = 0; e < t; e++) {
                        n[e] = arguments[e];
                      }

                      return this.dispatchFunction.apply(this, ["updateItemLocal"].concat(n));
                    }
                  }, {
                    key: "getItemsServer",
                    value: function value() {
                      for (var t = arguments.length, n = new Array(t), e = 0; e < t; e++) {
                        n[e] = arguments[e];
                      }

                      return this.dispatchFunction.apply(this, ["getItemsServer"].concat(n));
                    }
                  }, {
                    key: "getItemsLocal",
                    value: function value() {
                      for (var t = arguments.length, n = new Array(t), e = 0; e < t; e++) {
                        n[e] = arguments[e];
                      }

                      return this.dispatchFunction.apply(this, ["getItemsLocal"].concat(n));
                    }
                  }, {
                    key: "getItemLocal",
                    value: function value() {
                      for (var t = arguments.length, n = new Array(t), e = 0; e < t; e++) {
                        n[e] = arguments[e];
                      }

                      return this.dispatchFunction.apply(this, ["getItemLocal"].concat(n));
                    }
                  }, {
                    key: "sendThanksMessage",
                    value: function value() {
                      for (var t = arguments.length, n = new Array(t), e = 0; e < t; e++) {
                        n[e] = arguments[e];
                      }

                      return this.dispatchFunction.apply(this, ["sendThanksMessage"].concat(n));
                    }
                  }, {
                    key: "clickNotification",
                    value: function value() {
                      for (var t = arguments.length, n = new Array(t), e = 0; e < t; e++) {
                        n[e] = arguments[e];
                      }

                      return this.dispatchFunction.apply(this, ["clickNotification"].concat(n));
                    }
                  }, {
                    key: "showPopupNotification",
                    value: function value() {
                      for (var t = arguments.length, n = new Array(t), e = 0; e < t; e++) {
                        n[e] = arguments[e];
                      }

                      return this.dispatchFunction.apply(this, ["showPopupNotification"].concat(n));
                    }
                  }, {
                    key: "getVouchersCount",
                    value: function value() {
                      for (var t = arguments.length, n = new Array(t), e = 0; e < t; e++) {
                        n[e] = arguments[e];
                      }

                      return this.dispatchFunction.apply(this, ["getVouchersCount"].concat(n));
                    }
                  }, {
                    key: "getVouchers",
                    value: function value() {
                      for (var t = arguments.length, n = new Array(t), e = 0; e < t; e++) {
                        n[e] = arguments[e];
                      }

                      return this.dispatchFunction.apply(this, ["getVouchers"].concat(n));
                    }
                  }, {
                    key: "get",
                    value: function value() {
                      for (var t = arguments.length, n = new Array(t), e = 0; e < t; e++) {
                        n[e] = arguments[e];
                      }

                      return this.dispatchFunction.apply(this, ["get"].concat(n));
                    }
                  }, {
                    key: "getVoucherBackend",
                    value: function value() {
                      for (var t = arguments.length, n = new Array(t), e = 0; e < t; e++) {
                        n[e] = arguments[e];
                      }

                      return this.dispatchFunction.apply(this, ["getVoucherBackend"].concat(n));
                    }
                  }, {
                    key: "getSteps",
                    value: function value() {
                      for (var t = arguments.length, n = new Array(t), e = 0; e < t; e++) {
                        n[e] = arguments[e];
                      }

                      return this.dispatchFunction.apply(this, ["getSteps"].concat(n));
                    }
                  }, {
                    key: "getAvatarEndPoint",
                    value: function value() {
                      for (var t = arguments.length, n = new Array(t), e = 0; e < t; e++) {
                        n[e] = arguments[e];
                      }

                      return this.dispatchFunction.apply(this, ["getAvatarEndPoint"].concat(n));
                    }
                  }, {
                    key: "getResourceEndpoint",
                    value: function value() {
                      for (var t = arguments.length, n = new Array(t), e = 0; e < t; e++) {
                        n[e] = arguments[e];
                      }

                      return this.dispatchFunction.apply(this, ["getResourceEndpoint"].concat(n));
                    }
                  }, {
                    key: "observer",
                    value: function value() {
                      for (var t = arguments.length, n = new Array(t), e = 0; e < t; e++) {
                        n[e] = arguments[e];
                      }

                      return this.dispatchFunction.apply(this, ["observer"].concat(n));
                    }
                  }, {
                    key: "getDataObserver",
                    value: function value() {
                      for (var t = arguments.length, n = new Array(t), e = 0; e < t; e++) {
                        n[e] = arguments[e];
                      }

                      return this.dispatchFunction.apply(this, ["getDataObserver"].concat(n));
                    }
                  }, {
                    key: "setDataObserver",
                    value: function value() {
                      for (var t = arguments.length, n = new Array(t), e = 0; e < t; e++) {
                        n[e] = arguments[e];
                      }

                      return this.dispatchFunction.apply(this, ["setDataObserver"].concat(n));
                    }
                  }, {
                    key: "requestLoan",
                    value: function value() {
                      for (var t = arguments.length, n = new Array(t), e = 0; e < t; e++) {
                        n[e] = arguments[e];
                      }

                      return this.dispatchFunction.apply(this, ["requestLoan"].concat(n));
                    }
                  }, {
                    key: "countTrace",
                    value: function value() {
                      for (var t = arguments.length, n = new Array(t), e = 0; e < t; e++) {
                        n[e] = arguments[e];
                      }

                      return this.dispatchFunction.apply(this, ["countTrace"].concat(n));
                    }
                  }, {
                    key: "startTrace",
                    value: function value() {
                      for (var t = arguments.length, n = new Array(t), e = 0; e < t; e++) {
                        n[e] = arguments[e];
                      }

                      return this.dispatchFunction.apply(this, ["startTrace"].concat(n));
                    }
                  }, {
                    key: "stopTrace",
                    value: function value() {
                      for (var t = arguments.length, n = new Array(t), e = 0; e < t; e++) {
                        n[e] = arguments[e];
                      }

                      return this.dispatchFunction.apply(this, ["stopTrace"].concat(n));
                    }
                  }, {
                    key: "errorTrace",
                    value: function value() {
                      for (var t = arguments.length, n = new Array(t), e = 0; e < t; e++) {
                        n[e] = arguments[e];
                      }

                      return this.dispatchFunction.apply(this, ["errorTrace"].concat(n));
                    }
                  }, {
                    key: "requestGameAction",
                    value: function value() {
                      for (var t = arguments.length, n = new Array(t), e = 0; e < t; e++) {
                        n[e] = arguments[e];
                      }

                      return this.dispatchFunction.apply(this, ["requestGameAction"].concat(n));
                    }
                  }, {
                    key: "chatGRPCConnect",
                    value: function value() {
                      for (var t = arguments.length, n = new Array(t), e = 0; e < t; e++) {
                        n[e] = arguments[e];
                      }

                      return this.dispatchFunction.apply(this, ["chatGRPCConnect"].concat(n));
                    }
                  }, {
                    key: "chatSendMessageGRPC",
                    value: function value() {
                      for (var t = arguments.length, n = new Array(t), e = 0; e < t; e++) {
                        n[e] = arguments[e];
                      }

                      return this.dispatchFunction.apply(this, ["chatSendMessageGRPC"].concat(n));
                    }
                  }, {
                    key: "getBadgeTicket",
                    value: function value() {
                      for (var t = arguments.length, n = new Array(t), e = 0; e < t; e++) {
                        n[e] = arguments[e];
                      }

                      return this.dispatchFunction.apply(this, ["getBadgeTicket"].concat(n));
                    }
                  }, {
                    key: "chatCrmGRPCConnect",
                    value: function value() {
                      for (var t = arguments.length, n = new Array(t), e = 0; e < t; e++) {
                        n[e] = arguments[e];
                      }

                      return this.dispatchFunction.apply(this, ["chatCrmGRPCConnect"].concat(n));
                    }
                  }, {
                    key: "chatCrmSendMessageGRPC",
                    value: function value() {
                      for (var t = arguments.length, n = new Array(t), e = 0; e < t; e++) {
                        n[e] = arguments[e];
                      }

                      return this.dispatchFunction.apply(this, ["chatCrmSendMessageGRPC"].concat(n));
                    }
                  }, {
                    key: "chatCrmGetConnectionStatus",
                    value: function value() {
                      for (var t = arguments.length, n = new Array(t), e = 0; e < t; e++) {
                        n[e] = arguments[e];
                      }

                      return this.dispatchFunction.apply(this, ["chatCrmGetConnectionStatus"].concat(n));
                    }
                  }, {
                    key: "chatCrmGRPCDisconnect",
                    value: function value() {
                      for (var t = arguments.length, n = new Array(t), e = 0; e < t; e++) {
                        n[e] = arguments[e];
                      }

                      return this.dispatchFunction.apply(this, ["chatCrmGRPCDisconnect"].concat(n));
                    }
                  }, {
                    key: "getBillCount",
                    value: function value() {
                      for (var t = arguments.length, n = new Array(t), e = 0; e < t; e++) {
                        n[e] = arguments[e];
                      }

                      return this.dispatchFunction.apply(this, ["getBillCount"].concat(n));
                    }
                  }, {
                    key: "getFolderVoucherCount",
                    value: function value() {
                      for (var t = arguments.length, n = new Array(t), e = 0; e < t; e++) {
                        n[e] = arguments[e];
                      }

                      return this.dispatchFunction.apply(this, ["getFolderVoucherCount"].concat(n));
                    }
                  }, {
                    key: "getChatCount",
                    value: function value() {
                      for (var t = arguments.length, n = new Array(t), e = 0; e < t; e++) {
                        n[e] = arguments[e];
                      }

                      return this.dispatchFunction.apply(this, ["getChatCount"].concat(n));
                    }
                  }, {
                    key: "getMobileVoucherCount",
                    value: function value() {
                      for (var t = arguments.length, n = new Array(t), e = 0; e < t; e++) {
                        n[e] = arguments[e];
                      }

                      return this.dispatchFunction.apply(this, ["getMobileVoucherCount"].concat(n));
                    }
                  }, {
                    key: "getListFriendMoMo",
                    value: function value() {
                      for (var t = arguments.length, n = new Array(t), e = 0; e < t; e++) {
                        n[e] = arguments[e];
                      }

                      return this.dispatchFunction.apply(this, ["getListFriendMoMo"].concat(n));
                    }
                  }, {
                    key: "getRelationShipStatus",
                    value: function value() {
                      for (var t = arguments.length, n = new Array(t), e = 0; e < t; e++) {
                        n[e] = arguments[e];
                      }

                      return this.dispatchFunction.apply(this, ["getRelationShipStatus"].concat(n));
                    }
                  }, {
                    key: "acceptFriendRequest",
                    value: function value() {
                      for (var t = arguments.length, n = new Array(t), e = 0; e < t; e++) {
                        n[e] = arguments[e];
                      }

                      return this.dispatchFunction.apply(this, ["acceptFriendRequest"].concat(n));
                    }
                  }, {
                    key: "sendFriendRequest",
                    value: function value() {
                      for (var t = arguments.length, n = new Array(t), e = 0; e < t; e++) {
                        n[e] = arguments[e];
                      }

                      return this.dispatchFunction.apply(this, ["sendFriendRequest"].concat(n));
                    }
                  }, {
                    key: "blockUser",
                    value: function value() {
                      for (var t = arguments.length, n = new Array(t), e = 0; e < t; e++) {
                        n[e] = arguments[e];
                      }

                      return this.dispatchFunction.apply(this, ["blockUser"].concat(n));
                    }
                  }, {
                    key: "unBlockUser",
                    value: function value() {
                      for (var t = arguments.length, n = new Array(t), e = 0; e < t; e++) {
                        n[e] = arguments[e];
                      }

                      return this.dispatchFunction.apply(this, ["unBlockUser"].concat(n));
                    }
                  }, {
                    key: "getFacebookFriendList",
                    value: function value() {
                      for (var t = arguments.length, n = new Array(t), e = 0; e < t; e++) {
                        n[e] = arguments[e];
                      }

                      return this.dispatchFunction.apply(this, ["getFacebookFriendList"].concat(n));
                    }
                  }, {
                    key: "pickSingleDocument",
                    value: function value() {
                      for (var t = arguments.length, n = new Array(t), e = 0; e < t; e++) {
                        n[e] = arguments[e];
                      }

                      return this.dispatchFunction.apply(this, ["pickSingleDocument"].concat(n));
                    }
                  }, {
                    key: "uploadDocuments",
                    value: function value() {
                      for (var t = arguments.length, n = new Array(t), e = 0; e < t; e++) {
                        n[e] = arguments[e];
                      }

                      return this.dispatchFunction.apply(this, ["uploadDocuments"].concat(n));
                    }
                  }, {
                    key: "observerUploadDocuments",
                    value: function value() {
                      for (var t = arguments.length, n = new Array(t), e = 0; e < t; e++) {
                        n[e] = arguments[e];
                      }

                      return this.dispatchFunction.apply(this, ["observerUploadDocuments"].concat(n));
                    }
                  }, {
                    key: "cancelUpload",
                    value: function value() {
                      for (var t = arguments.length, n = new Array(t), e = 0; e < t; e++) {
                        n[e] = arguments[e];
                      }

                      return this.dispatchFunction.apply(this, ["cancelUpload"].concat(n));
                    }
                  }, {
                    key: "downloadMediaFile",
                    value: function value() {
                      for (var t = arguments.length, n = new Array(t), e = 0; e < t; e++) {
                        n[e] = arguments[e];
                      }

                      return this.dispatchFunction.apply(this, ["downloadMediaFile"].concat(n));
                    }
                  }, {
                    key: "playSound",
                    value: function value() {
                      for (var t = arguments.length, n = new Array(t), e = 0; e < t; e++) {
                        n[e] = arguments[e];
                      }

                      return this.dispatchFunction.apply(this, ["playSound"].concat(n));
                    }
                  }, {
                    key: "pauseSound",
                    value: function value() {
                      for (var t = arguments.length, n = new Array(t), e = 0; e < t; e++) {
                        n[e] = arguments[e];
                      }

                      return this.dispatchFunction.apply(this, ["pauseSound"].concat(n));
                    }
                  }, {
                    key: "resumeSound",
                    value: function value() {
                      for (var t = arguments.length, n = new Array(t), e = 0; e < t; e++) {
                        n[e] = arguments[e];
                      }

                      return this.dispatchFunction.apply(this, ["resumeSound"].concat(n));
                    }
                  }, {
                    key: "stopSound",
                    value: function value() {
                      for (var t = arguments.length, n = new Array(t), e = 0; e < t; e++) {
                        n[e] = arguments[e];
                      }

                      return this.dispatchFunction.apply(this, ["stopSound"].concat(n));
                    }
                  }, {
                    key: "startCaptureSideDocument",
                    value: function value() {
                      for (var t = arguments.length, n = new Array(t), e = 0; e < t; e++) {
                        n[e] = arguments[e];
                      }

                      return this.dispatchFunction.apply(this, ["startCaptureSideDocument"].concat(n));
                    }
                  }, {
                    key: "startCaptureFace",
                    value: function value() {
                      for (var t = arguments.length, n = new Array(t), e = 0; e < t; e++) {
                        n[e] = arguments[e];
                      }

                      return this.dispatchFunction.apply(this, ["startCaptureFace"].concat(n));
                    }
                  }, {
                    key: "faceMatching",
                    value: function value() {
                      for (var t = arguments.length, n = new Array(t), e = 0; e < t; e++) {
                        n[e] = arguments[e];
                      }

                      return this.dispatchFunction.apply(this, ["faceMatching"].concat(n));
                    }
                  }, {
                    key: "addFace",
                    value: function value() {
                      for (var t = arguments.length, n = new Array(t), e = 0; e < t; e++) {
                        n[e] = arguments[e];
                      }

                      return this.dispatchFunction.apply(this, ["addFace"].concat(n));
                    }
                  }, {
                    key: "fetchNetworkInfo",
                    value: function value() {
                      for (var t = arguments.length, n = new Array(t), e = 0; e < t; e++) {
                        n[e] = arguments[e];
                      }

                      return this.dispatchFunction.apply(this, ["fetchNetworkInfo"].concat(n));
                    }
                  }, {
                    key: "useNetInfo",
                    value: function value() {
                      for (var t = arguments.length, n = new Array(t), e = 0; e < t; e++) {
                        n[e] = arguments[e];
                      }

                      return this.dispatchFunction.apply(this, ["useNetInfo"].concat(n));
                    }
                  }, {
                    key: "connectMqttBroker",
                    value: function value() {
                      for (var t = arguments.length, n = new Array(t), e = 0; e < t; e++) {
                        n[e] = arguments[e];
                      }

                      return this.dispatchFunction.apply(this, ["connectMqttBroker"].concat(n));
                    }
                  }, {
                    key: "disconnectMqttBroker",
                    value: function value() {
                      for (var t = arguments.length, n = new Array(t), e = 0; e < t; e++) {
                        n[e] = arguments[e];
                      }

                      return this.dispatchFunction.apply(this, ["disconnectMqttBroker"].concat(n));
                    }
                  }, {
                    key: "subscribeMqttTopic",
                    value: function value() {
                      for (var t = arguments.length, n = new Array(t), e = 0; e < t; e++) {
                        n[e] = arguments[e];
                      }

                      return this.dispatchFunction.apply(this, ["subscribeMqttTopic"].concat(n));
                    }
                  }, {
                    key: "unsubscribeMqttTopic",
                    value: function value() {
                      for (var t = arguments.length, n = new Array(t), e = 0; e < t; e++) {
                        n[e] = arguments[e];
                      }

                      return this.dispatchFunction.apply(this, ["unsubscribeMqttTopic"].concat(n));
                    }
                  }, {
                    key: "getFullListFriendMoMo",
                    value: function value() {
                      for (var t = arguments.length, n = new Array(t), e = 0; e < t; e++) {
                        n[e] = arguments[e];
                      }

                      return this.dispatchFunction.apply(this, ["getFullListFriendMoMo"].concat(n));
                    }
                  }, {
                    key: "friendQuery",
                    value: function value() {
                      for (var t = arguments.length, n = new Array(t), e = 0; e < t; e++) {
                        n[e] = arguments[e];
                      }

                      return this.dispatchFunction.apply(this, ["friendQuery"].concat(n));
                    }
                  }, {
                    key: "setFastLogin",
                    value: function value() {
                      for (var t = arguments.length, n = new Array(t), e = 0; e < t; e++) {
                        n[e] = arguments[e];
                      }

                      return this.dispatchFunction.apply(this, ["setFastLogin"].concat(n));
                    }
                  }, {
                    key: "showToolkit",
                    value: function value() {
                      for (var t = arguments.length, n = new Array(t), e = 0; e < t; e++) {
                        n[e] = arguments[e];
                      }

                      return this.dispatchFunction.apply(this, ["showToolkit"].concat(n));
                    }
                  }, {
                    key: "sendUploadMessage",
                    value: function value() {
                      for (var t = arguments.length, n = new Array(t), e = 0; e < t; e++) {
                        n[e] = arguments[e];
                      }

                      return this.dispatchFunction.apply(this, ["sendUploadMessage"].concat(n));
                    }
                  }], e && o(n, e), i;
                }(((r = e(156)) && r.__esModule ? r : {
                  "default": r
                })["default"]);

                n.Z = s;
              },
              426: function _(t, n, e) {
                (n = e(645)(!1)).push([t.id, "body\r\n{\r\n    margin: 0;\r\n    /* background: url('./assets/images/bodyBackground.png'); */\r\n    background-size: 100% 100%;\r\n    background-repeat: no-repeat;\r\n}", ""]), t.exports = n;
              },
              645: function _(t) {
                t.exports = function (t) {
                  var n = [];
                  return n.toString = function () {
                    return this.map(function (n) {
                      var e = function (t, n) {
                        var e,
                            r,
                            i,
                            u = t[1] || "",
                            o = t[3];
                        if (!o) return u;

                        if (n && "function" == typeof btoa) {
                          var a = (e = o, r = btoa(unescape(encodeURIComponent(JSON.stringify(e)))), i = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r), "/*# ".concat(i, " */")),
                              c = o.sources.map(function (t) {
                            return "/*# sourceURL=".concat(o.sourceRoot || "").concat(t, " */");
                          });
                          return [u].concat(c).concat([a]).join("\n");
                        }

                        return [u].join("\n");
                      }(n, t);

                      return n[2] ? "@media ".concat(n[2], " {").concat(e, "}") : e;
                    }).join("");
                  }, n.i = function (t, e, r) {
                    "string" == typeof t && (t = [[null, t, ""]]);
                    var i = {};
                    if (r) for (var u = 0; u < this.length; u++) {
                      var o = this[u][0];
                      null != o && (i[o] = !0);
                    }

                    for (var a = 0; a < t.length; a++) {
                      var c = [].concat(t[a]);
                      r && i[c[0]] || (e && (c[2] ? c[2] = "".concat(e, " and ").concat(c[2]) : c[2] = e), n.push(c));
                    }
                  }, n;
                };
              },
              486: function _(t, n, e) {
                var r;
                t = e.nmd(t), function () {
                  var i,
                      u = "Expected a function",
                      o = "__lodash_hash_undefined__",
                      a = "__lodash_placeholder__",
                      c = 32,
                      f = 128,
                      s = 1 / 0,
                      l = 9007199254740991,
                      h = NaN,
                      p = 4294967295,
                      v = [["ary", f], ["bind", 1], ["bindKey", 2], ["curry", 8], ["curryRight", 16], ["flip", 512], ["partial", c], ["partialRight", 64], ["rearg", 256]],
                      y = "[object Arguments]",
                      g = "[object Array]",
                      d = "[object Boolean]",
                      _ = "[object Date]",
                      w = "[object Error]",
                      b = "[object Function]",
                      m = "[object GeneratorFunction]",
                      k = "[object Map]",
                      A = "[object Number]",
                      F = "[object Object]",
                      S = "[object Promise]",
                      C = "[object RegExp]",
                      x = "[object Set]",
                      j = "[object String]",
                      O = "[object Symbol]",
                      I = "[object WeakMap]",
                      P = "[object ArrayBuffer]",
                      R = "[object DataView]",
                      E = "[object Float32Array]",
                      M = "[object Float64Array]",
                      T = "[object Int8Array]",
                      L = "[object Int16Array]",
                      D = "[object Int32Array]",
                      U = "[object Uint8Array]",
                      B = "[object Uint8ClampedArray]",
                      q = "[object Uint16Array]",
                      z = "[object Uint32Array]",
                      W = /\b__p \+= '';/g,
                      N = /\b(__p \+=) '' \+/g,
                      $ = /(__e\(.*?\)|\b__t\)) \+\n'';/g,
                      G = /&(?:amp|lt|gt|quot|#39);/g,
                      V = /[&<>"']/g,
                      Z = RegExp(G.source),
                      J = RegExp(V.source),
                      K = /<%-([\s\S]+?)%>/g,
                      H = /<%([\s\S]+?)%>/g,
                      Q = /<%=([\s\S]+?)%>/g,
                      Y = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
                      X = /^\w*$/,
                      tt = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
                      nt = /[\\^$.*+?()[\]{}|]/g,
                      et = RegExp(nt.source),
                      rt = /^\s+/,
                      it = /\s/,
                      ut = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,
                      ot = /\{\n\/\* \[wrapped with (.+)\] \*/,
                      at = /,? & /,
                      ct = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,
                      ft = /[()=,{}\[\]\/\s]/,
                      st = /\\(\\)?/g,
                      lt = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
                      ht = /\w*$/,
                      pt = /^[-+]0x[0-9a-f]+$/i,
                      vt = /^0b[01]+$/i,
                      yt = /^\[object .+?Constructor\]$/,
                      gt = /^0o[0-7]+$/i,
                      dt = /^(?:0|[1-9]\d*)$/,
                      _t = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
                      wt = /($^)/,
                      bt = /['\n\r\u2028\u2029\\]/g,
                      mt = "\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff",
                      kt = "a-z\\xdf-\\xf6\\xf8-\\xff",
                      At = "A-Z\\xc0-\\xd6\\xd8-\\xde",
                      Ft = "\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",
                      St = "[" + Ft + "]",
                      Ct = "[" + mt + "]",
                      xt = "\\d+",
                      jt = "[" + kt + "]",
                      Ot = "[^\\ud800-\\udfff" + Ft + xt + "\\u2700-\\u27bf" + kt + At + "]",
                      It = "\\ud83c[\\udffb-\\udfff]",
                      Pt = "[^\\ud800-\\udfff]",
                      Rt = "(?:\\ud83c[\\udde6-\\uddff]){2}",
                      Et = "[\\ud800-\\udbff][\\udc00-\\udfff]",
                      Mt = "[" + At + "]",
                      Tt = "(?:" + jt + "|" + Ot + ")",
                      Lt = "(?:" + Mt + "|" + Ot + ")",
                      Dt = "(?:['’](?:d|ll|m|re|s|t|ve))?",
                      Ut = "(?:['’](?:D|LL|M|RE|S|T|VE))?",
                      Bt = "(?:" + Ct + "|" + It + ")?",
                      qt = "[\\ufe0e\\ufe0f]?",
                      zt = qt + Bt + "(?:\\u200d(?:" + [Pt, Rt, Et].join("|") + ")" + qt + Bt + ")*",
                      Wt = "(?:" + ["[\\u2700-\\u27bf]", Rt, Et].join("|") + ")" + zt,
                      Nt = "(?:" + [Pt + Ct + "?", Ct, Rt, Et, "[\\ud800-\\udfff]"].join("|") + ")",
                      $t = RegExp("['’]", "g"),
                      Gt = RegExp(Ct, "g"),
                      Vt = RegExp(It + "(?=" + It + ")|" + Nt + zt, "g"),
                      Zt = RegExp([Mt + "?" + jt + "+" + Dt + "(?=" + [St, Mt, "$"].join("|") + ")", Lt + "+" + Ut + "(?=" + [St, Mt + Tt, "$"].join("|") + ")", Mt + "?" + Tt + "+" + Dt, Mt + "+" + Ut, "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", xt, Wt].join("|"), "g"),
                      Jt = RegExp("[\\u200d\\ud800-\\udfff" + mt + "\\ufe0e\\ufe0f]"),
                      Kt = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,
                      Ht = ["Array", "Buffer", "DataView", "Date", "Error", "Float32Array", "Float64Array", "Function", "Int8Array", "Int16Array", "Int32Array", "Map", "Math", "Object", "Promise", "RegExp", "Set", "String", "Symbol", "TypeError", "Uint8Array", "Uint8ClampedArray", "Uint16Array", "Uint32Array", "WeakMap", "_", "clearTimeout", "isFinite", "parseInt", "setTimeout"],
                      Qt = -1,
                      Yt = {};
                  Yt[E] = Yt[M] = Yt[T] = Yt[L] = Yt[D] = Yt[U] = Yt[B] = Yt[q] = Yt[z] = !0, Yt[y] = Yt[g] = Yt[P] = Yt[d] = Yt[R] = Yt[_] = Yt[w] = Yt[b] = Yt[k] = Yt[A] = Yt[F] = Yt[C] = Yt[x] = Yt[j] = Yt[I] = !1;
                  var Xt = {};
                  Xt[y] = Xt[g] = Xt[P] = Xt[R] = Xt[d] = Xt[_] = Xt[E] = Xt[M] = Xt[T] = Xt[L] = Xt[D] = Xt[k] = Xt[A] = Xt[F] = Xt[C] = Xt[x] = Xt[j] = Xt[O] = Xt[U] = Xt[B] = Xt[q] = Xt[z] = !0, Xt[w] = Xt[b] = Xt[I] = !1;

                  var tn = {
                    "\\": "\\",
                    "'": "'",
                    "\n": "n",
                    "\r": "r",
                    "\u2028": "u2028",
                    "\u2029": "u2029"
                  },
                      nn = parseFloat,
                      en = parseInt,
                      rn = "object" == typeof e.g && e.g && e.g.Object === Object && e.g,
                      un = "object" == typeof self && self && self.Object === Object && self,
                      on = rn || un || Function("return this")(),
                      an = n && !n.nodeType && n,
                      cn = an && t && !t.nodeType && t,
                      fn = cn && cn.exports === an,
                      sn = fn && rn.process,
                      ln = function () {
                    try {
                      return cn && cn.require && cn.require("util").types || sn && sn.binding && sn.binding("util");
                    } catch (t) {}
                  }(),
                      hn = ln && ln.isArrayBuffer,
                      pn = ln && ln.isDate,
                      vn = ln && ln.isMap,
                      yn = ln && ln.isRegExp,
                      gn = ln && ln.isSet,
                      dn = ln && ln.isTypedArray;

                  function _n(t, n, e) {
                    switch (e.length) {
                      case 0:
                        return t.call(n);

                      case 1:
                        return t.call(n, e[0]);

                      case 2:
                        return t.call(n, e[0], e[1]);

                      case 3:
                        return t.call(n, e[0], e[1], e[2]);
                    }

                    return t.apply(n, e);
                  }

                  function wn(t, n, e, r) {
                    for (var i = -1, u = null == t ? 0 : t.length; ++i < u;) {
                      var o = t[i];
                      n(r, o, e(o), t);
                    }

                    return r;
                  }

                  function bn(t, n) {
                    for (var e = -1, r = null == t ? 0 : t.length; ++e < r && !1 !== n(t[e], e, t);) {}

                    return t;
                  }

                  function mn(t, n) {
                    for (var e = null == t ? 0 : t.length; e-- && !1 !== n(t[e], e, t);) {}

                    return t;
                  }

                  function kn(t, n) {
                    for (var e = -1, r = null == t ? 0 : t.length; ++e < r;) {
                      if (!n(t[e], e, t)) return !1;
                    }

                    return !0;
                  }

                  function An(t, n) {
                    for (var e = -1, r = null == t ? 0 : t.length, i = 0, u = []; ++e < r;) {
                      var o = t[e];
                      n(o, e, t) && (u[i++] = o);
                    }

                    return u;
                  }

                  function Fn(t, n) {
                    return !(null == t || !t.length) && Mn(t, n, 0) > -1;
                  }

                  function Sn(t, n, e) {
                    for (var r = -1, i = null == t ? 0 : t.length; ++r < i;) {
                      if (e(n, t[r])) return !0;
                    }

                    return !1;
                  }

                  function Cn(t, n) {
                    for (var e = -1, r = null == t ? 0 : t.length, i = Array(r); ++e < r;) {
                      i[e] = n(t[e], e, t);
                    }

                    return i;
                  }

                  function xn(t, n) {
                    for (var e = -1, r = n.length, i = t.length; ++e < r;) {
                      t[i + e] = n[e];
                    }

                    return t;
                  }

                  function jn(t, n, e, r) {
                    var i = -1,
                        u = null == t ? 0 : t.length;

                    for (r && u && (e = t[++i]); ++i < u;) {
                      e = n(e, t[i], i, t);
                    }

                    return e;
                  }

                  function On(t, n, e, r) {
                    var i = null == t ? 0 : t.length;

                    for (r && i && (e = t[--i]); i--;) {
                      e = n(e, t[i], i, t);
                    }

                    return e;
                  }

                  function In(t, n) {
                    for (var e = -1, r = null == t ? 0 : t.length; ++e < r;) {
                      if (n(t[e], e, t)) return !0;
                    }

                    return !1;
                  }

                  var Pn = Un("length");

                  function Rn(t, n, e) {
                    var r;
                    return e(t, function (t, e, i) {
                      if (n(t, e, i)) return r = e, !1;
                    }), r;
                  }

                  function En(t, n, e, r) {
                    for (var i = t.length, u = e + (r ? 1 : -1); r ? u-- : ++u < i;) {
                      if (n(t[u], u, t)) return u;
                    }

                    return -1;
                  }

                  function Mn(t, n, e) {
                    return n == n ? function (t, n, e) {
                      for (var r = e - 1, i = t.length; ++r < i;) {
                        if (t[r] === n) return r;
                      }

                      return -1;
                    }(t, n, e) : En(t, Ln, e);
                  }

                  function Tn(t, n, e, r) {
                    for (var i = e - 1, u = t.length; ++i < u;) {
                      if (r(t[i], n)) return i;
                    }

                    return -1;
                  }

                  function Ln(t) {
                    return t != t;
                  }

                  function Dn(t, n) {
                    var e = null == t ? 0 : t.length;
                    return e ? zn(t, n) / e : h;
                  }

                  function Un(t) {
                    return function (n) {
                      return null == n ? i : n[t];
                    };
                  }

                  function Bn(t) {
                    return function (n) {
                      return null == t ? i : t[n];
                    };
                  }

                  function qn(t, n, e, r, i) {
                    return i(t, function (t, i, u) {
                      e = r ? (r = !1, t) : n(e, t, i, u);
                    }), e;
                  }

                  function zn(t, n) {
                    for (var e, r = -1, u = t.length; ++r < u;) {
                      var o = n(t[r]);
                      o !== i && (e = e === i ? o : e + o);
                    }

                    return e;
                  }

                  function Wn(t, n) {
                    for (var e = -1, r = Array(t); ++e < t;) {
                      r[e] = n(e);
                    }

                    return r;
                  }

                  function Nn(t) {
                    return t ? t.slice(0, ae(t) + 1).replace(rt, "") : t;
                  }

                  function $n(t) {
                    return function (n) {
                      return t(n);
                    };
                  }

                  function Gn(t, n) {
                    return Cn(n, function (n) {
                      return t[n];
                    });
                  }

                  function Vn(t, n) {
                    return t.has(n);
                  }

                  function Zn(t, n) {
                    for (var e = -1, r = t.length; ++e < r && Mn(n, t[e], 0) > -1;) {}

                    return e;
                  }

                  function Jn(t, n) {
                    for (var e = t.length; e-- && Mn(n, t[e], 0) > -1;) {}

                    return e;
                  }

                  function Kn(t, n) {
                    for (var e = t.length, r = 0; e--;) {
                      t[e] === n && ++r;
                    }

                    return r;
                  }

                  var Hn = Bn({
                    À: "A",
                    Á: "A",
                    Â: "A",
                    Ã: "A",
                    Ä: "A",
                    Å: "A",
                    à: "a",
                    á: "a",
                    â: "a",
                    ã: "a",
                    ä: "a",
                    å: "a",
                    Ç: "C",
                    ç: "c",
                    Ð: "D",
                    ð: "d",
                    È: "E",
                    É: "E",
                    Ê: "E",
                    Ë: "E",
                    è: "e",
                    é: "e",
                    ê: "e",
                    ë: "e",
                    Ì: "I",
                    Í: "I",
                    Î: "I",
                    Ï: "I",
                    ì: "i",
                    í: "i",
                    î: "i",
                    ï: "i",
                    Ñ: "N",
                    ñ: "n",
                    Ò: "O",
                    Ó: "O",
                    Ô: "O",
                    Õ: "O",
                    Ö: "O",
                    Ø: "O",
                    ò: "o",
                    ó: "o",
                    ô: "o",
                    õ: "o",
                    ö: "o",
                    ø: "o",
                    Ù: "U",
                    Ú: "U",
                    Û: "U",
                    Ü: "U",
                    ù: "u",
                    ú: "u",
                    û: "u",
                    ü: "u",
                    Ý: "Y",
                    ý: "y",
                    ÿ: "y",
                    Æ: "Ae",
                    æ: "ae",
                    Þ: "Th",
                    þ: "th",
                    ß: "ss",
                    Ā: "A",
                    Ă: "A",
                    Ą: "A",
                    ā: "a",
                    ă: "a",
                    ą: "a",
                    Ć: "C",
                    Ĉ: "C",
                    Ċ: "C",
                    Č: "C",
                    ć: "c",
                    ĉ: "c",
                    ċ: "c",
                    č: "c",
                    Ď: "D",
                    Đ: "D",
                    ď: "d",
                    đ: "d",
                    Ē: "E",
                    Ĕ: "E",
                    Ė: "E",
                    Ę: "E",
                    Ě: "E",
                    ē: "e",
                    ĕ: "e",
                    ė: "e",
                    ę: "e",
                    ě: "e",
                    Ĝ: "G",
                    Ğ: "G",
                    Ġ: "G",
                    Ģ: "G",
                    ĝ: "g",
                    ğ: "g",
                    ġ: "g",
                    ģ: "g",
                    Ĥ: "H",
                    Ħ: "H",
                    ĥ: "h",
                    ħ: "h",
                    Ĩ: "I",
                    Ī: "I",
                    Ĭ: "I",
                    Į: "I",
                    İ: "I",
                    ĩ: "i",
                    ī: "i",
                    ĭ: "i",
                    į: "i",
                    ı: "i",
                    Ĵ: "J",
                    ĵ: "j",
                    Ķ: "K",
                    ķ: "k",
                    ĸ: "k",
                    Ĺ: "L",
                    Ļ: "L",
                    Ľ: "L",
                    Ŀ: "L",
                    Ł: "L",
                    ĺ: "l",
                    ļ: "l",
                    ľ: "l",
                    ŀ: "l",
                    ł: "l",
                    Ń: "N",
                    Ņ: "N",
                    Ň: "N",
                    Ŋ: "N",
                    ń: "n",
                    ņ: "n",
                    ň: "n",
                    ŋ: "n",
                    Ō: "O",
                    Ŏ: "O",
                    Ő: "O",
                    ō: "o",
                    ŏ: "o",
                    ő: "o",
                    Ŕ: "R",
                    Ŗ: "R",
                    Ř: "R",
                    ŕ: "r",
                    ŗ: "r",
                    ř: "r",
                    Ś: "S",
                    Ŝ: "S",
                    Ş: "S",
                    Š: "S",
                    ś: "s",
                    ŝ: "s",
                    ş: "s",
                    š: "s",
                    Ţ: "T",
                    Ť: "T",
                    Ŧ: "T",
                    ţ: "t",
                    ť: "t",
                    ŧ: "t",
                    Ũ: "U",
                    Ū: "U",
                    Ŭ: "U",
                    Ů: "U",
                    Ű: "U",
                    Ų: "U",
                    ũ: "u",
                    ū: "u",
                    ŭ: "u",
                    ů: "u",
                    ű: "u",
                    ų: "u",
                    Ŵ: "W",
                    ŵ: "w",
                    Ŷ: "Y",
                    ŷ: "y",
                    Ÿ: "Y",
                    Ź: "Z",
                    Ż: "Z",
                    Ž: "Z",
                    ź: "z",
                    ż: "z",
                    ž: "z",
                    Ĳ: "IJ",
                    ĳ: "ij",
                    Œ: "Oe",
                    œ: "oe",
                    ŉ: "'n",
                    ſ: "s"
                  }),
                      Qn = Bn({
                    "&": "&amp;",
                    "<": "&lt;",
                    ">": "&gt;",
                    '"': "&quot;",
                    "'": "&#39;"
                  });

                  function Yn(t) {
                    return "\\" + tn[t];
                  }

                  function Xn(t) {
                    return Jt.test(t);
                  }

                  function te(t) {
                    var n = -1,
                        e = Array(t.size);
                    return t.forEach(function (t, r) {
                      e[++n] = [r, t];
                    }), e;
                  }

                  function ne(t, n) {
                    return function (e) {
                      return t(n(e));
                    };
                  }

                  function ee(t, n) {
                    for (var e = -1, r = t.length, i = 0, u = []; ++e < r;) {
                      var o = t[e];
                      o !== n && o !== a || (t[e] = a, u[i++] = e);
                    }

                    return u;
                  }

                  function re(t) {
                    var n = -1,
                        e = Array(t.size);
                    return t.forEach(function (t) {
                      e[++n] = t;
                    }), e;
                  }

                  function ie(t) {
                    var n = -1,
                        e = Array(t.size);
                    return t.forEach(function (t) {
                      e[++n] = [t, t];
                    }), e;
                  }

                  function ue(t) {
                    return Xn(t) ? function (t) {
                      for (var n = Vt.lastIndex = 0; Vt.test(t);) {
                        ++n;
                      }

                      return n;
                    }(t) : Pn(t);
                  }

                  function oe(t) {
                    return Xn(t) ? function (t) {
                      return t.match(Vt) || [];
                    }(t) : function (t) {
                      return t.split("");
                    }(t);
                  }

                  function ae(t) {
                    for (var n = t.length; n-- && it.test(t.charAt(n));) {}

                    return n;
                  }

                  var ce = Bn({
                    "&amp;": "&",
                    "&lt;": "<",
                    "&gt;": ">",
                    "&quot;": '"',
                    "&#39;": "'"
                  }),
                      fe = function t(n) {
                    var e,
                        r = (n = null == n ? on : fe.defaults(on.Object(), n, fe.pick(on, Ht))).Array,
                        it = n.Date,
                        mt = n.Error,
                        kt = n.Function,
                        At = n.Math,
                        Ft = n.Object,
                        St = n.RegExp,
                        Ct = n.String,
                        xt = n.TypeError,
                        jt = r.prototype,
                        Ot = kt.prototype,
                        It = Ft.prototype,
                        Pt = n["__core-js_shared__"],
                        Rt = Ot.toString,
                        Et = It.hasOwnProperty,
                        Mt = 0,
                        Tt = (e = /[^.]+$/.exec(Pt && Pt.keys && Pt.keys.IE_PROTO || "")) ? "Symbol(src)_1." + e : "",
                        Lt = It.toString,
                        Dt = Rt.call(Ft),
                        Ut = on._,
                        Bt = St("^" + Rt.call(Et).replace(nt, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
                        qt = fn ? n.Buffer : i,
                        zt = n.Symbol,
                        Wt = n.Uint8Array,
                        Nt = qt ? qt.allocUnsafe : i,
                        Vt = ne(Ft.getPrototypeOf, Ft),
                        Jt = Ft.create,
                        tn = It.propertyIsEnumerable,
                        rn = jt.splice,
                        un = zt ? zt.isConcatSpreadable : i,
                        an = zt ? zt.iterator : i,
                        cn = zt ? zt.toStringTag : i,
                        sn = function () {
                      try {
                        var t = fu(Ft, "defineProperty");
                        return t({}, "", {}), t;
                      } catch (t) {}
                    }(),
                        ln = n.clearTimeout !== on.clearTimeout && n.clearTimeout,
                        Pn = it && it.now !== on.Date.now && it.now,
                        Bn = n.setTimeout !== on.setTimeout && n.setTimeout,
                        se = At.ceil,
                        le = At.floor,
                        he = Ft.getOwnPropertySymbols,
                        pe = qt ? qt.isBuffer : i,
                        ve = n.isFinite,
                        ye = jt.join,
                        ge = ne(Ft.keys, Ft),
                        de = At.max,
                        _e = At.min,
                        we = it.now,
                        be = n.parseInt,
                        me = At.random,
                        ke = jt.reverse,
                        Ae = fu(n, "DataView"),
                        Fe = fu(n, "Map"),
                        Se = fu(n, "Promise"),
                        Ce = fu(n, "Set"),
                        xe = fu(n, "WeakMap"),
                        je = fu(Ft, "create"),
                        Oe = xe && new xe(),
                        Ie = {},
                        Pe = Uu(Ae),
                        Re = Uu(Fe),
                        Ee = Uu(Se),
                        Me = Uu(Ce),
                        Te = Uu(xe),
                        Le = zt ? zt.prototype : i,
                        De = Le ? Le.valueOf : i,
                        Ue = Le ? Le.toString : i;

                    function Be(t) {
                      if (ea(t) && !Go(t) && !(t instanceof Ne)) {
                        if (t instanceof We) return t;
                        if (Et.call(t, "__wrapped__")) return Bu(t);
                      }

                      return new We(t);
                    }

                    var qe = function () {
                      function t() {}

                      return function (n) {
                        if (!na(n)) return {};
                        if (Jt) return Jt(n);
                        t.prototype = n;
                        var e = new t();
                        return t.prototype = i, e;
                      };
                    }();

                    function ze() {}

                    function We(t, n) {
                      this.__wrapped__ = t, this.__actions__ = [], this.__chain__ = !!n, this.__index__ = 0, this.__values__ = i;
                    }

                    function Ne(t) {
                      this.__wrapped__ = t, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = p, this.__views__ = [];
                    }

                    function $e(t) {
                      var n = -1,
                          e = null == t ? 0 : t.length;

                      for (this.clear(); ++n < e;) {
                        var r = t[n];
                        this.set(r[0], r[1]);
                      }
                    }

                    function Ge(t) {
                      var n = -1,
                          e = null == t ? 0 : t.length;

                      for (this.clear(); ++n < e;) {
                        var r = t[n];
                        this.set(r[0], r[1]);
                      }
                    }

                    function Ve(t) {
                      var n = -1,
                          e = null == t ? 0 : t.length;

                      for (this.clear(); ++n < e;) {
                        var r = t[n];
                        this.set(r[0], r[1]);
                      }
                    }

                    function Ze(t) {
                      var n = -1,
                          e = null == t ? 0 : t.length;

                      for (this.__data__ = new Ve(); ++n < e;) {
                        this.add(t[n]);
                      }
                    }

                    function Je(t) {
                      var n = this.__data__ = new Ge(t);
                      this.size = n.size;
                    }

                    function Ke(t, n) {
                      var e = Go(t),
                          r = !e && $o(t),
                          i = !e && !r && Ko(t),
                          u = !e && !r && !i && sa(t),
                          o = e || r || i || u,
                          a = o ? Wn(t.length, Ct) : [],
                          c = a.length;

                      for (var f in t) {
                        !n && !Et.call(t, f) || o && ("length" == f || i && ("offset" == f || "parent" == f) || u && ("buffer" == f || "byteLength" == f || "byteOffset" == f) || gu(f, c)) || a.push(f);
                      }

                      return a;
                    }

                    function He(t) {
                      var n = t.length;
                      return n ? t[Vr(0, n - 1)] : i;
                    }

                    function Qe(t, n) {
                      return Eu(xi(t), or(n, 0, t.length));
                    }

                    function Ye(t) {
                      return Eu(xi(t));
                    }

                    function Xe(t, n, e) {
                      (e !== i && !zo(t[n], e) || e === i && !(n in t)) && ir(t, n, e);
                    }

                    function tr(t, n, e) {
                      var r = t[n];
                      Et.call(t, n) && zo(r, e) && (e !== i || n in t) || ir(t, n, e);
                    }

                    function nr(t, n) {
                      for (var e = t.length; e--;) {
                        if (zo(t[e][0], n)) return e;
                      }

                      return -1;
                    }

                    function er(t, n, e, r) {
                      return lr(t, function (t, i, u) {
                        n(r, t, e(t), u);
                      }), r;
                    }

                    function rr(t, n) {
                      return t && ji(n, Ra(n), t);
                    }

                    function ir(t, n, e) {
                      "__proto__" == n && sn ? sn(t, n, {
                        configurable: !0,
                        enumerable: !0,
                        value: e,
                        writable: !0
                      }) : t[n] = e;
                    }

                    function ur(t, n) {
                      for (var e = -1, u = n.length, o = r(u), a = null == t; ++e < u;) {
                        o[e] = a ? i : xa(t, n[e]);
                      }

                      return o;
                    }

                    function or(t, n, e) {
                      return t == t && (e !== i && (t = t <= e ? t : e), n !== i && (t = t >= n ? t : n)), t;
                    }

                    function ar(t, n, e, r, u, o) {
                      var a,
                          c = 1 & n,
                          f = 2 & n,
                          s = 4 & n;
                      if (e && (a = u ? e(t, r, u, o) : e(t)), a !== i) return a;
                      if (!na(t)) return t;
                      var l = Go(t);

                      if (l) {
                        if (a = function (t) {
                          var n = t.length,
                              e = new t.constructor(n);
                          return n && "string" == typeof t[0] && Et.call(t, "index") && (e.index = t.index, e.input = t.input), e;
                        }(t), !c) return xi(t, a);
                      } else {
                        var h = hu(t),
                            p = h == b || h == m;
                        if (Ko(t)) return mi(t, c);

                        if (h == F || h == y || p && !u) {
                          if (a = f || p ? {} : vu(t), !c) return f ? function (t, n) {
                            return ji(t, lu(t), n);
                          }(t, function (t, n) {
                            return t && ji(n, Ea(n), t);
                          }(a, t)) : function (t, n) {
                            return ji(t, su(t), n);
                          }(t, rr(a, t));
                        } else {
                          if (!Xt[h]) return u ? t : {};

                          a = function (t, n, e) {
                            var r,
                                i = t.constructor;

                            switch (n) {
                              case P:
                                return ki(t);

                              case d:
                              case _:
                                return new i(+t);

                              case R:
                                return function (t, n) {
                                  var e = n ? ki(t.buffer) : t.buffer;
                                  return new t.constructor(e, t.byteOffset, t.byteLength);
                                }(t, e);

                              case E:
                              case M:
                              case T:
                              case L:
                              case D:
                              case U:
                              case B:
                              case q:
                              case z:
                                return Ai(t, e);

                              case k:
                                return new i();

                              case A:
                              case j:
                                return new i(t);

                              case C:
                                return function (t) {
                                  var n = new t.constructor(t.source, ht.exec(t));
                                  return n.lastIndex = t.lastIndex, n;
                                }(t);

                              case x:
                                return new i();

                              case O:
                                return r = t, De ? Ft(De.call(r)) : {};
                            }
                          }(t, h, c);
                        }
                      }

                      o || (o = new Je());
                      var v = o.get(t);
                      if (v) return v;
                      o.set(t, a), aa(t) ? t.forEach(function (r) {
                        a.add(ar(r, n, e, r, t, o));
                      }) : ra(t) && t.forEach(function (r, i) {
                        a.set(i, ar(r, n, e, i, t, o));
                      });
                      var g = l ? i : (s ? f ? eu : nu : f ? Ea : Ra)(t);
                      return bn(g || t, function (r, i) {
                        g && (r = t[i = r]), tr(a, i, ar(r, n, e, i, t, o));
                      }), a;
                    }

                    function cr(t, n, e) {
                      var r = e.length;
                      if (null == t) return !r;

                      for (t = Ft(t); r--;) {
                        var u = e[r],
                            o = n[u],
                            a = t[u];
                        if (a === i && !(u in t) || !o(a)) return !1;
                      }

                      return !0;
                    }

                    function fr(t, n, e) {
                      if ("function" != typeof t) throw new xt(u);
                      return Ou(function () {
                        t.apply(i, e);
                      }, n);
                    }

                    function sr(t, n, e, r) {
                      var i = -1,
                          u = Fn,
                          o = !0,
                          a = t.length,
                          c = [],
                          f = n.length;
                      if (!a) return c;
                      e && (n = Cn(n, $n(e))), r ? (u = Sn, o = !1) : n.length >= 200 && (u = Vn, o = !1, n = new Ze(n));

                      t: for (; ++i < a;) {
                        var s = t[i],
                            l = null == e ? s : e(s);

                        if (s = r || 0 !== s ? s : 0, o && l == l) {
                          for (var h = f; h--;) {
                            if (n[h] === l) continue t;
                          }

                          c.push(s);
                        } else u(n, l, r) || c.push(s);
                      }

                      return c;
                    }

                    Be.templateSettings = {
                      escape: K,
                      evaluate: H,
                      interpolate: Q,
                      variable: "",
                      imports: {
                        _: Be
                      }
                    }, Be.prototype = ze.prototype, Be.prototype.constructor = Be, We.prototype = qe(ze.prototype), We.prototype.constructor = We, Ne.prototype = qe(ze.prototype), Ne.prototype.constructor = Ne, $e.prototype.clear = function () {
                      this.__data__ = je ? je(null) : {}, this.size = 0;
                    }, $e.prototype["delete"] = function (t) {
                      var n = this.has(t) && delete this.__data__[t];
                      return this.size -= n ? 1 : 0, n;
                    }, $e.prototype.get = function (t) {
                      var n = this.__data__;

                      if (je) {
                        var e = n[t];
                        return e === o ? i : e;
                      }

                      return Et.call(n, t) ? n[t] : i;
                    }, $e.prototype.has = function (t) {
                      var n = this.__data__;
                      return je ? n[t] !== i : Et.call(n, t);
                    }, $e.prototype.set = function (t, n) {
                      var e = this.__data__;
                      return this.size += this.has(t) ? 0 : 1, e[t] = je && n === i ? o : n, this;
                    }, Ge.prototype.clear = function () {
                      this.__data__ = [], this.size = 0;
                    }, Ge.prototype["delete"] = function (t) {
                      var n = this.__data__,
                          e = nr(n, t);
                      return !(e < 0 || (e == n.length - 1 ? n.pop() : rn.call(n, e, 1), --this.size, 0));
                    }, Ge.prototype.get = function (t) {
                      var n = this.__data__,
                          e = nr(n, t);
                      return e < 0 ? i : n[e][1];
                    }, Ge.prototype.has = function (t) {
                      return nr(this.__data__, t) > -1;
                    }, Ge.prototype.set = function (t, n) {
                      var e = this.__data__,
                          r = nr(e, t);
                      return r < 0 ? (++this.size, e.push([t, n])) : e[r][1] = n, this;
                    }, Ve.prototype.clear = function () {
                      this.size = 0, this.__data__ = {
                        hash: new $e(),
                        map: new (Fe || Ge)(),
                        string: new $e()
                      };
                    }, Ve.prototype["delete"] = function (t) {
                      var n = au(this, t)["delete"](t);
                      return this.size -= n ? 1 : 0, n;
                    }, Ve.prototype.get = function (t) {
                      return au(this, t).get(t);
                    }, Ve.prototype.has = function (t) {
                      return au(this, t).has(t);
                    }, Ve.prototype.set = function (t, n) {
                      var e = au(this, t),
                          r = e.size;
                      return e.set(t, n), this.size += e.size == r ? 0 : 1, this;
                    }, Ze.prototype.add = Ze.prototype.push = function (t) {
                      return this.__data__.set(t, o), this;
                    }, Ze.prototype.has = function (t) {
                      return this.__data__.has(t);
                    }, Je.prototype.clear = function () {
                      this.__data__ = new Ge(), this.size = 0;
                    }, Je.prototype["delete"] = function (t) {
                      var n = this.__data__,
                          e = n["delete"](t);
                      return this.size = n.size, e;
                    }, Je.prototype.get = function (t) {
                      return this.__data__.get(t);
                    }, Je.prototype.has = function (t) {
                      return this.__data__.has(t);
                    }, Je.prototype.set = function (t, n) {
                      var e = this.__data__;

                      if (e instanceof Ge) {
                        var r = e.__data__;
                        if (!Fe || r.length < 199) return r.push([t, n]), this.size = ++e.size, this;
                        e = this.__data__ = new Ve(r);
                      }

                      return e.set(t, n), this.size = e.size, this;
                    };
                    var lr = Pi(wr),
                        hr = Pi(br, !0);

                    function pr(t, n) {
                      var e = !0;
                      return lr(t, function (t, r, i) {
                        return e = !!n(t, r, i);
                      }), e;
                    }

                    function vr(t, n, e) {
                      for (var r = -1, u = t.length; ++r < u;) {
                        var o = t[r],
                            a = n(o);
                        if (null != a && (c === i ? a == a && !fa(a) : e(a, c))) var c = a,
                            f = o;
                      }

                      return f;
                    }

                    function yr(t, n) {
                      var e = [];
                      return lr(t, function (t, r, i) {
                        n(t, r, i) && e.push(t);
                      }), e;
                    }

                    function gr(t, n, e, r, i) {
                      var u = -1,
                          o = t.length;

                      for (e || (e = yu), i || (i = []); ++u < o;) {
                        var a = t[u];
                        n > 0 && e(a) ? n > 1 ? gr(a, n - 1, e, r, i) : xn(i, a) : r || (i[i.length] = a);
                      }

                      return i;
                    }

                    var dr = Ri(),
                        _r = Ri(!0);

                    function wr(t, n) {
                      return t && dr(t, n, Ra);
                    }

                    function br(t, n) {
                      return t && _r(t, n, Ra);
                    }

                    function mr(t, n) {
                      return An(n, function (n) {
                        return Yo(t[n]);
                      });
                    }

                    function kr(t, n) {
                      for (var e = 0, r = (n = di(n, t)).length; null != t && e < r;) {
                        t = t[Du(n[e++])];
                      }

                      return e && e == r ? t : i;
                    }

                    function Ar(t, n, e) {
                      var r = n(t);
                      return Go(t) ? r : xn(r, e(t));
                    }

                    function Fr(t) {
                      return null == t ? t === i ? "[object Undefined]" : "[object Null]" : cn && cn in Ft(t) ? function (t) {
                        var n = Et.call(t, cn),
                            e = t[cn];

                        try {
                          t[cn] = i;
                          var r = !0;
                        } catch (t) {}

                        var u = Lt.call(t);
                        return r && (n ? t[cn] = e : delete t[cn]), u;
                      }(t) : function (t) {
                        return Lt.call(t);
                      }(t);
                    }

                    function Sr(t, n) {
                      return t > n;
                    }

                    function Cr(t, n) {
                      return null != t && Et.call(t, n);
                    }

                    function xr(t, n) {
                      return null != t && n in Ft(t);
                    }

                    function jr(t, n, e) {
                      for (var u = e ? Sn : Fn, o = t[0].length, a = t.length, c = a, f = r(a), s = 1 / 0, l = []; c--;) {
                        var h = t[c];
                        c && n && (h = Cn(h, $n(n))), s = _e(h.length, s), f[c] = !e && (n || o >= 120 && h.length >= 120) ? new Ze(c && h) : i;
                      }

                      h = t[0];
                      var p = -1,
                          v = f[0];

                      t: for (; ++p < o && l.length < s;) {
                        var y = h[p],
                            g = n ? n(y) : y;

                        if (y = e || 0 !== y ? y : 0, !(v ? Vn(v, g) : u(l, g, e))) {
                          for (c = a; --c;) {
                            var d = f[c];
                            if (!(d ? Vn(d, g) : u(t[c], g, e))) continue t;
                          }

                          v && v.push(g), l.push(y);
                        }
                      }

                      return l;
                    }

                    function Or(t, n, e) {
                      var r = null == (t = Su(t, n = di(n, t))) ? t : t[Du(Hu(n))];
                      return null == r ? i : _n(r, t, e);
                    }

                    function Ir(t) {
                      return ea(t) && Fr(t) == y;
                    }

                    function Pr(t, n, e, r, u) {
                      return t === n || (null == t || null == n || !ea(t) && !ea(n) ? t != t && n != n : function (t, n, e, r, u, o) {
                        var a = Go(t),
                            c = Go(n),
                            f = a ? g : hu(t),
                            s = c ? g : hu(n),
                            l = (f = f == y ? F : f) == F,
                            h = (s = s == y ? F : s) == F,
                            p = f == s;

                        if (p && Ko(t)) {
                          if (!Ko(n)) return !1;
                          a = !0, l = !1;
                        }

                        if (p && !l) return o || (o = new Je()), a || sa(t) ? Xi(t, n, e, r, u, o) : function (t, n, e, r, i, u, o) {
                          switch (e) {
                            case R:
                              if (t.byteLength != n.byteLength || t.byteOffset != n.byteOffset) return !1;
                              t = t.buffer, n = n.buffer;

                            case P:
                              return !(t.byteLength != n.byteLength || !u(new Wt(t), new Wt(n)));

                            case d:
                            case _:
                            case A:
                              return zo(+t, +n);

                            case w:
                              return t.name == n.name && t.message == n.message;

                            case C:
                            case j:
                              return t == n + "";

                            case k:
                              var a = te;

                            case x:
                              var c = 1 & r;
                              if (a || (a = re), t.size != n.size && !c) return !1;
                              var f = o.get(t);
                              if (f) return f == n;
                              r |= 2, o.set(t, n);
                              var s = Xi(a(t), a(n), r, i, u, o);
                              return o["delete"](t), s;

                            case O:
                              if (De) return De.call(t) == De.call(n);
                          }

                          return !1;
                        }(t, n, f, e, r, u, o);

                        if (!(1 & e)) {
                          var v = l && Et.call(t, "__wrapped__"),
                              b = h && Et.call(n, "__wrapped__");

                          if (v || b) {
                            var m = v ? t.value() : t,
                                S = b ? n.value() : n;
                            return o || (o = new Je()), u(m, S, e, r, o);
                          }
                        }

                        return !!p && (o || (o = new Je()), function (t, n, e, r, u, o) {
                          var a = 1 & e,
                              c = nu(t),
                              f = c.length;
                          if (f != nu(n).length && !a) return !1;

                          for (var s = f; s--;) {
                            var l = c[s];
                            if (!(a ? l in n : Et.call(n, l))) return !1;
                          }

                          var h = o.get(t),
                              p = o.get(n);
                          if (h && p) return h == n && p == t;
                          var v = !0;
                          o.set(t, n), o.set(n, t);

                          for (var y = a; ++s < f;) {
                            var g = t[l = c[s]],
                                d = n[l];
                            if (r) var _ = a ? r(d, g, l, n, t, o) : r(g, d, l, t, n, o);

                            if (!(_ === i ? g === d || u(g, d, e, r, o) : _)) {
                              v = !1;
                              break;
                            }

                            y || (y = "constructor" == l);
                          }

                          if (v && !y) {
                            var w = t.constructor,
                                b = n.constructor;
                            w == b || !("constructor" in t) || !("constructor" in n) || "function" == typeof w && w instanceof w && "function" == typeof b && b instanceof b || (v = !1);
                          }

                          return o["delete"](t), o["delete"](n), v;
                        }(t, n, e, r, u, o));
                      }(t, n, e, r, Pr, u));
                    }

                    function Rr(t, n, e, r) {
                      var u = e.length,
                          o = u,
                          a = !r;
                      if (null == t) return !o;

                      for (t = Ft(t); u--;) {
                        var c = e[u];
                        if (a && c[2] ? c[1] !== t[c[0]] : !(c[0] in t)) return !1;
                      }

                      for (; ++u < o;) {
                        var f = (c = e[u])[0],
                            s = t[f],
                            l = c[1];

                        if (a && c[2]) {
                          if (s === i && !(f in t)) return !1;
                        } else {
                          var h = new Je();
                          if (r) var p = r(s, l, f, t, n, h);
                          if (!(p === i ? Pr(l, s, 3, r, h) : p)) return !1;
                        }
                      }

                      return !0;
                    }

                    function Er(t) {
                      return !(!na(t) || (n = t, Tt && Tt in n)) && (Yo(t) ? Bt : yt).test(Uu(t));
                      var n;
                    }

                    function Mr(t) {
                      return "function" == typeof t ? t : null == t ? ic : "object" == typeof t ? Go(t) ? Br(t[0], t[1]) : Ur(t) : pc(t);
                    }

                    function Tr(t) {
                      if (!mu(t)) return ge(t);
                      var n = [];

                      for (var e in Ft(t)) {
                        Et.call(t, e) && "constructor" != e && n.push(e);
                      }

                      return n;
                    }

                    function Lr(t, n) {
                      return t < n;
                    }

                    function Dr(t, n) {
                      var e = -1,
                          i = Zo(t) ? r(t.length) : [];
                      return lr(t, function (t, r, u) {
                        i[++e] = n(t, r, u);
                      }), i;
                    }

                    function Ur(t) {
                      var n = cu(t);
                      return 1 == n.length && n[0][2] ? Au(n[0][0], n[0][1]) : function (e) {
                        return e === t || Rr(e, t, n);
                      };
                    }

                    function Br(t, n) {
                      return _u(t) && ku(n) ? Au(Du(t), n) : function (e) {
                        var r = xa(e, t);
                        return r === i && r === n ? ja(e, t) : Pr(n, r, 3);
                      };
                    }

                    function qr(t, n, e, r, u) {
                      t !== n && dr(n, function (o, a) {
                        if (u || (u = new Je()), na(o)) !function (t, n, e, r, u, o, a) {
                          var c = xu(t, e),
                              f = xu(n, e),
                              s = a.get(f);
                          if (s) Xe(t, e, s);else {
                            var l = o ? o(c, f, e + "", t, n, a) : i,
                                h = l === i;

                            if (h) {
                              var p = Go(f),
                                  v = !p && Ko(f),
                                  y = !p && !v && sa(f);
                              l = f, p || v || y ? Go(c) ? l = c : Jo(c) ? l = xi(c) : v ? (h = !1, l = mi(f, !0)) : y ? (h = !1, l = Ai(f, !0)) : l = [] : ua(f) || $o(f) ? (l = c, $o(c) ? l = _a(c) : na(c) && !Yo(c) || (l = vu(f))) : h = !1;
                            }

                            h && (a.set(f, l), u(l, f, r, o, a), a["delete"](f)), Xe(t, e, l);
                          }
                        }(t, n, a, e, qr, r, u);else {
                          var c = r ? r(xu(t, a), o, a + "", t, n, u) : i;
                          c === i && (c = o), Xe(t, a, c);
                        }
                      }, Ea);
                    }

                    function zr(t, n) {
                      var e = t.length;
                      if (e) return gu(n += n < 0 ? e : 0, e) ? t[n] : i;
                    }

                    function Wr(t, n, e) {
                      n = n.length ? Cn(n, function (t) {
                        return Go(t) ? function (n) {
                          return kr(n, 1 === t.length ? t[0] : t);
                        } : t;
                      }) : [ic];
                      var r = -1;
                      return n = Cn(n, $n(ou())), function (t, n) {
                        var r = t.length;

                        for (t.sort(function (t, n) {
                          return function (t, n, e) {
                            for (var r = -1, i = t.criteria, u = n.criteria, o = i.length, a = e.length; ++r < o;) {
                              var c = Fi(i[r], u[r]);
                              if (c) return r >= a ? c : c * ("desc" == e[r] ? -1 : 1);
                            }

                            return t.index - n.index;
                          }(t, n, e);
                        }); r--;) {
                          t[r] = t[r].value;
                        }

                        return t;
                      }(Dr(t, function (t, e, i) {
                        return {
                          criteria: Cn(n, function (n) {
                            return n(t);
                          }),
                          index: ++r,
                          value: t
                        };
                      }));
                    }

                    function Nr(t, n, e) {
                      for (var r = -1, i = n.length, u = {}; ++r < i;) {
                        var o = n[r],
                            a = kr(t, o);
                        e(a, o) && Qr(u, di(o, t), a);
                      }

                      return u;
                    }

                    function $r(t, n, e, r) {
                      var i = r ? Tn : Mn,
                          u = -1,
                          o = n.length,
                          a = t;

                      for (t === n && (n = xi(n)), e && (a = Cn(t, $n(e))); ++u < o;) {
                        for (var c = 0, f = n[u], s = e ? e(f) : f; (c = i(a, s, c, r)) > -1;) {
                          a !== t && rn.call(a, c, 1), rn.call(t, c, 1);
                        }
                      }

                      return t;
                    }

                    function Gr(t, n) {
                      for (var e = t ? n.length : 0, r = e - 1; e--;) {
                        var i = n[e];

                        if (e == r || i !== u) {
                          var u = i;
                          gu(i) ? rn.call(t, i, 1) : fi(t, i);
                        }
                      }

                      return t;
                    }

                    function Vr(t, n) {
                      return t + le(me() * (n - t + 1));
                    }

                    function Zr(t, n) {
                      var e = "";
                      if (!t || n < 1 || n > l) return e;

                      do {
                        n % 2 && (e += t), (n = le(n / 2)) && (t += t);
                      } while (n);

                      return e;
                    }

                    function Jr(t, n) {
                      return Iu(Fu(t, n, ic), t + "");
                    }

                    function Kr(t) {
                      return He(za(t));
                    }

                    function Hr(t, n) {
                      var e = za(t);
                      return Eu(e, or(n, 0, e.length));
                    }

                    function Qr(t, n, e, r) {
                      if (!na(t)) return t;

                      for (var u = -1, o = (n = di(n, t)).length, a = o - 1, c = t; null != c && ++u < o;) {
                        var f = Du(n[u]),
                            s = e;
                        if ("__proto__" === f || "constructor" === f || "prototype" === f) return t;

                        if (u != a) {
                          var l = c[f];
                          (s = r ? r(l, f, c) : i) === i && (s = na(l) ? l : gu(n[u + 1]) ? [] : {});
                        }

                        tr(c, f, s), c = c[f];
                      }

                      return t;
                    }

                    var Yr = Oe ? function (t, n) {
                      return Oe.set(t, n), t;
                    } : ic,
                        Xr = sn ? function (t, n) {
                      return sn(t, "toString", {
                        configurable: !0,
                        enumerable: !1,
                        value: nc(n),
                        writable: !0
                      });
                    } : ic;

                    function ti(t) {
                      return Eu(za(t));
                    }

                    function ni(t, n, e) {
                      var i = -1,
                          u = t.length;
                      n < 0 && (n = -n > u ? 0 : u + n), (e = e > u ? u : e) < 0 && (e += u), u = n > e ? 0 : e - n >>> 0, n >>>= 0;

                      for (var o = r(u); ++i < u;) {
                        o[i] = t[i + n];
                      }

                      return o;
                    }

                    function ei(t, n) {
                      var e;
                      return lr(t, function (t, r, i) {
                        return !(e = n(t, r, i));
                      }), !!e;
                    }

                    function ri(t, n, e) {
                      var r = 0,
                          i = null == t ? r : t.length;

                      if ("number" == typeof n && n == n && i <= 2147483647) {
                        for (; r < i;) {
                          var u = r + i >>> 1,
                              o = t[u];
                          null !== o && !fa(o) && (e ? o <= n : o < n) ? r = u + 1 : i = u;
                        }

                        return i;
                      }

                      return ii(t, n, ic, e);
                    }

                    function ii(t, n, e, r) {
                      var u = 0,
                          o = null == t ? 0 : t.length;
                      if (0 === o) return 0;

                      for (var a = (n = e(n)) != n, c = null === n, f = fa(n), s = n === i; u < o;) {
                        var l = le((u + o) / 2),
                            h = e(t[l]),
                            p = h !== i,
                            v = null === h,
                            y = h == h,
                            g = fa(h);
                        if (a) var d = r || y;else d = s ? y && (r || p) : c ? y && p && (r || !v) : f ? y && p && !v && (r || !g) : !v && !g && (r ? h <= n : h < n);
                        d ? u = l + 1 : o = l;
                      }

                      return _e(o, 4294967294);
                    }

                    function ui(t, n) {
                      for (var e = -1, r = t.length, i = 0, u = []; ++e < r;) {
                        var o = t[e],
                            a = n ? n(o) : o;

                        if (!e || !zo(a, c)) {
                          var c = a;
                          u[i++] = 0 === o ? 0 : o;
                        }
                      }

                      return u;
                    }

                    function oi(t) {
                      return "number" == typeof t ? t : fa(t) ? h : +t;
                    }

                    function ai(t) {
                      if ("string" == typeof t) return t;
                      if (Go(t)) return Cn(t, ai) + "";
                      if (fa(t)) return Ue ? Ue.call(t) : "";
                      var n = t + "";
                      return "0" == n && 1 / t == -1 / 0 ? "-0" : n;
                    }

                    function ci(t, n, e) {
                      var r = -1,
                          i = Fn,
                          u = t.length,
                          o = !0,
                          a = [],
                          c = a;
                      if (e) o = !1, i = Sn;else if (u >= 200) {
                        var f = n ? null : Zi(t);
                        if (f) return re(f);
                        o = !1, i = Vn, c = new Ze();
                      } else c = n ? [] : a;

                      t: for (; ++r < u;) {
                        var s = t[r],
                            l = n ? n(s) : s;

                        if (s = e || 0 !== s ? s : 0, o && l == l) {
                          for (var h = c.length; h--;) {
                            if (c[h] === l) continue t;
                          }

                          n && c.push(l), a.push(s);
                        } else i(c, l, e) || (c !== a && c.push(l), a.push(s));
                      }

                      return a;
                    }

                    function fi(t, n) {
                      return null == (t = Su(t, n = di(n, t))) || delete t[Du(Hu(n))];
                    }

                    function si(t, n, e, r) {
                      return Qr(t, n, e(kr(t, n)), r);
                    }

                    function li(t, n, e, r) {
                      for (var i = t.length, u = r ? i : -1; (r ? u-- : ++u < i) && n(t[u], u, t);) {}

                      return e ? ni(t, r ? 0 : u, r ? u + 1 : i) : ni(t, r ? u + 1 : 0, r ? i : u);
                    }

                    function hi(t, n) {
                      var e = t;
                      return e instanceof Ne && (e = e.value()), jn(n, function (t, n) {
                        return n.func.apply(n.thisArg, xn([t], n.args));
                      }, e);
                    }

                    function pi(t, n, e) {
                      var i = t.length;
                      if (i < 2) return i ? ci(t[0]) : [];

                      for (var u = -1, o = r(i); ++u < i;) {
                        for (var a = t[u], c = -1; ++c < i;) {
                          c != u && (o[u] = sr(o[u] || a, t[c], n, e));
                        }
                      }

                      return ci(gr(o, 1), n, e);
                    }

                    function vi(t, n, e) {
                      for (var r = -1, u = t.length, o = n.length, a = {}; ++r < u;) {
                        var c = r < o ? n[r] : i;
                        e(a, t[r], c);
                      }

                      return a;
                    }

                    function yi(t) {
                      return Jo(t) ? t : [];
                    }

                    function gi(t) {
                      return "function" == typeof t ? t : ic;
                    }

                    function di(t, n) {
                      return Go(t) ? t : _u(t, n) ? [t] : Lu(wa(t));
                    }

                    var _i = Jr;

                    function wi(t, n, e) {
                      var r = t.length;
                      return e = e === i ? r : e, !n && e >= r ? t : ni(t, n, e);
                    }

                    var bi = ln || function (t) {
                      return on.clearTimeout(t);
                    };

                    function mi(t, n) {
                      if (n) return t.slice();
                      var e = t.length,
                          r = Nt ? Nt(e) : new t.constructor(e);
                      return t.copy(r), r;
                    }

                    function ki(t) {
                      var n = new t.constructor(t.byteLength);
                      return new Wt(n).set(new Wt(t)), n;
                    }

                    function Ai(t, n) {
                      var e = n ? ki(t.buffer) : t.buffer;
                      return new t.constructor(e, t.byteOffset, t.length);
                    }

                    function Fi(t, n) {
                      if (t !== n) {
                        var e = t !== i,
                            r = null === t,
                            u = t == t,
                            o = fa(t),
                            a = n !== i,
                            c = null === n,
                            f = n == n,
                            s = fa(n);
                        if (!c && !s && !o && t > n || o && a && f && !c && !s || r && a && f || !e && f || !u) return 1;
                        if (!r && !o && !s && t < n || s && e && u && !r && !o || c && e && u || !a && u || !f) return -1;
                      }

                      return 0;
                    }

                    function Si(t, n, e, i) {
                      for (var u = -1, o = t.length, a = e.length, c = -1, f = n.length, s = de(o - a, 0), l = r(f + s), h = !i; ++c < f;) {
                        l[c] = n[c];
                      }

                      for (; ++u < a;) {
                        (h || u < o) && (l[e[u]] = t[u]);
                      }

                      for (; s--;) {
                        l[c++] = t[u++];
                      }

                      return l;
                    }

                    function Ci(t, n, e, i) {
                      for (var u = -1, o = t.length, a = -1, c = e.length, f = -1, s = n.length, l = de(o - c, 0), h = r(l + s), p = !i; ++u < l;) {
                        h[u] = t[u];
                      }

                      for (var v = u; ++f < s;) {
                        h[v + f] = n[f];
                      }

                      for (; ++a < c;) {
                        (p || u < o) && (h[v + e[a]] = t[u++]);
                      }

                      return h;
                    }

                    function xi(t, n) {
                      var e = -1,
                          i = t.length;

                      for (n || (n = r(i)); ++e < i;) {
                        n[e] = t[e];
                      }

                      return n;
                    }

                    function ji(t, n, e, r) {
                      var u = !e;
                      e || (e = {});

                      for (var o = -1, a = n.length; ++o < a;) {
                        var c = n[o],
                            f = r ? r(e[c], t[c], c, e, t) : i;
                        f === i && (f = t[c]), u ? ir(e, c, f) : tr(e, c, f);
                      }

                      return e;
                    }

                    function Oi(t, n) {
                      return function (e, r) {
                        var i = Go(e) ? wn : er,
                            u = n ? n() : {};
                        return i(e, t, ou(r, 2), u);
                      };
                    }

                    function Ii(t) {
                      return Jr(function (n, e) {
                        var r = -1,
                            u = e.length,
                            o = u > 1 ? e[u - 1] : i,
                            a = u > 2 ? e[2] : i;

                        for (o = t.length > 3 && "function" == typeof o ? (u--, o) : i, a && du(e[0], e[1], a) && (o = u < 3 ? i : o, u = 1), n = Ft(n); ++r < u;) {
                          var c = e[r];
                          c && t(n, c, r, o);
                        }

                        return n;
                      });
                    }

                    function Pi(t, n) {
                      return function (e, r) {
                        if (null == e) return e;
                        if (!Zo(e)) return t(e, r);

                        for (var i = e.length, u = n ? i : -1, o = Ft(e); (n ? u-- : ++u < i) && !1 !== r(o[u], u, o);) {}

                        return e;
                      };
                    }

                    function Ri(t) {
                      return function (n, e, r) {
                        for (var i = -1, u = Ft(n), o = r(n), a = o.length; a--;) {
                          var c = o[t ? a : ++i];
                          if (!1 === e(u[c], c, u)) break;
                        }

                        return n;
                      };
                    }

                    function Ei(t) {
                      return function (n) {
                        var e = Xn(n = wa(n)) ? oe(n) : i,
                            r = e ? e[0] : n.charAt(0),
                            u = e ? wi(e, 1).join("") : n.slice(1);
                        return r[t]() + u;
                      };
                    }

                    function Mi(t) {
                      return function (n) {
                        return jn(Ya($a(n).replace($t, "")), t, "");
                      };
                    }

                    function Ti(t) {
                      return function () {
                        var n = arguments;

                        switch (n.length) {
                          case 0:
                            return new t();

                          case 1:
                            return new t(n[0]);

                          case 2:
                            return new t(n[0], n[1]);

                          case 3:
                            return new t(n[0], n[1], n[2]);

                          case 4:
                            return new t(n[0], n[1], n[2], n[3]);

                          case 5:
                            return new t(n[0], n[1], n[2], n[3], n[4]);

                          case 6:
                            return new t(n[0], n[1], n[2], n[3], n[4], n[5]);

                          case 7:
                            return new t(n[0], n[1], n[2], n[3], n[4], n[5], n[6]);
                        }

                        var e = qe(t.prototype),
                            r = t.apply(e, n);
                        return na(r) ? r : e;
                      };
                    }

                    function Li(t) {
                      return function (n, e, r) {
                        var u = Ft(n);

                        if (!Zo(n)) {
                          var o = ou(e, 3);
                          n = Ra(n), e = function e(t) {
                            return o(u[t], t, u);
                          };
                        }

                        var a = t(n, e, r);
                        return a > -1 ? u[o ? n[a] : a] : i;
                      };
                    }

                    function Di(t) {
                      return tu(function (n) {
                        var e = n.length,
                            r = e,
                            o = We.prototype.thru;

                        for (t && n.reverse(); r--;) {
                          var a = n[r];
                          if ("function" != typeof a) throw new xt(u);
                          if (o && !c && "wrapper" == iu(a)) var c = new We([], !0);
                        }

                        for (r = c ? r : e; ++r < e;) {
                          var f = iu(a = n[r]),
                              s = "wrapper" == f ? ru(a) : i;
                          c = s && wu(s[0]) && 424 == s[1] && !s[4].length && 1 == s[9] ? c[iu(s[0])].apply(c, s[3]) : 1 == a.length && wu(a) ? c[f]() : c.thru(a);
                        }

                        return function () {
                          var t = arguments,
                              r = t[0];
                          if (c && 1 == t.length && Go(r)) return c.plant(r).value();

                          for (var i = 0, u = e ? n[i].apply(this, t) : r; ++i < e;) {
                            u = n[i].call(this, u);
                          }

                          return u;
                        };
                      });
                    }

                    function Ui(t, n, e, u, o, a, c, s, l, h) {
                      var p = n & f,
                          v = 1 & n,
                          y = 2 & n,
                          g = 24 & n,
                          d = 512 & n,
                          _ = y ? i : Ti(t);

                      return function i() {
                        for (var f = arguments.length, w = r(f), b = f; b--;) {
                          w[b] = arguments[b];
                        }

                        if (g) var m = uu(i),
                            k = Kn(w, m);

                        if (u && (w = Si(w, u, o, g)), a && (w = Ci(w, a, c, g)), f -= k, g && f < h) {
                          var A = ee(w, m);
                          return Gi(t, n, Ui, i.placeholder, e, w, A, s, l, h - f);
                        }

                        var F = v ? e : this,
                            S = y ? F[t] : t;
                        return f = w.length, s ? w = Cu(w, s) : d && f > 1 && w.reverse(), p && l < f && (w.length = l), this && this !== on && this instanceof i && (S = _ || Ti(S)), S.apply(F, w);
                      };
                    }

                    function Bi(t, n) {
                      return function (e, r) {
                        return function (t, n, e, r) {
                          return wr(t, function (t, i, u) {
                            n(r, e(t), i, u);
                          }), r;
                        }(e, t, n(r), {});
                      };
                    }

                    function qi(t, n) {
                      return function (e, r) {
                        var u;
                        if (e === i && r === i) return n;

                        if (e !== i && (u = e), r !== i) {
                          if (u === i) return r;
                          "string" == typeof e || "string" == typeof r ? (e = ai(e), r = ai(r)) : (e = oi(e), r = oi(r)), u = t(e, r);
                        }

                        return u;
                      };
                    }

                    function zi(t) {
                      return tu(function (n) {
                        return n = Cn(n, $n(ou())), Jr(function (e) {
                          var r = this;
                          return t(n, function (t) {
                            return _n(t, r, e);
                          });
                        });
                      });
                    }

                    function Wi(t, n) {
                      var e = (n = n === i ? " " : ai(n)).length;
                      if (e < 2) return e ? Zr(n, t) : n;
                      var r = Zr(n, se(t / ue(n)));
                      return Xn(n) ? wi(oe(r), 0, t).join("") : r.slice(0, t);
                    }

                    function Ni(t) {
                      return function (n, e, u) {
                        return u && "number" != typeof u && du(n, e, u) && (e = u = i), n = va(n), e === i ? (e = n, n = 0) : e = va(e), function (t, n, e, i) {
                          for (var u = -1, o = de(se((n - t) / (e || 1)), 0), a = r(o); o--;) {
                            a[i ? o : ++u] = t, t += e;
                          }

                          return a;
                        }(n, e, u = u === i ? n < e ? 1 : -1 : va(u), t);
                      };
                    }

                    function $i(t) {
                      return function (n, e) {
                        return "string" == typeof n && "string" == typeof e || (n = da(n), e = da(e)), t(n, e);
                      };
                    }

                    function Gi(t, n, e, r, u, o, a, f, s, l) {
                      var h = 8 & n;
                      n |= h ? c : 64, 4 & (n &= ~(h ? 64 : c)) || (n &= -4);
                      var p = [t, n, u, h ? o : i, h ? a : i, h ? i : o, h ? i : a, f, s, l],
                          v = e.apply(i, p);
                      return wu(t) && ju(v, p), v.placeholder = r, Pu(v, t, n);
                    }

                    function Vi(t) {
                      var n = At[t];
                      return function (t, e) {
                        if (t = da(t), (e = null == e ? 0 : _e(ya(e), 292)) && ve(t)) {
                          var r = (wa(t) + "e").split("e");
                          return +((r = (wa(n(r[0] + "e" + (+r[1] + e))) + "e").split("e"))[0] + "e" + (+r[1] - e));
                        }

                        return n(t);
                      };
                    }

                    var Zi = Ce && 1 / re(new Ce([, -0]))[1] == s ? function (t) {
                      return new Ce(t);
                    } : fc;

                    function Ji(t) {
                      return function (n) {
                        var e = hu(n);
                        return e == k ? te(n) : e == x ? ie(n) : function (t, n) {
                          return Cn(n, function (n) {
                            return [n, t[n]];
                          });
                        }(n, t(n));
                      };
                    }

                    function Ki(t, n, e, o, s, l, h, p) {
                      var v = 2 & n;
                      if (!v && "function" != typeof t) throw new xt(u);
                      var y = o ? o.length : 0;

                      if (y || (n &= -97, o = s = i), h = h === i ? h : de(ya(h), 0), p = p === i ? p : ya(p), y -= s ? s.length : 0, 64 & n) {
                        var g = o,
                            d = s;
                        o = s = i;
                      }

                      var _ = v ? i : ru(t),
                          w = [t, n, e, o, s, g, d, l, h, p];

                      if (_ && function (t, n) {
                        var e = t[1],
                            r = n[1],
                            i = e | r,
                            u = i < 131,
                            o = r == f && 8 == e || r == f && 256 == e && t[7].length <= n[8] || 384 == r && n[7].length <= n[8] && 8 == e;
                        if (!u && !o) return t;
                        1 & r && (t[2] = n[2], i |= 1 & e ? 0 : 4);
                        var c = n[3];

                        if (c) {
                          var s = t[3];
                          t[3] = s ? Si(s, c, n[4]) : c, t[4] = s ? ee(t[3], a) : n[4];
                        }

                        (c = n[5]) && (s = t[5], t[5] = s ? Ci(s, c, n[6]) : c, t[6] = s ? ee(t[5], a) : n[6]), (c = n[7]) && (t[7] = c), r & f && (t[8] = null == t[8] ? n[8] : _e(t[8], n[8])), null == t[9] && (t[9] = n[9]), t[0] = n[0], t[1] = i;
                      }(w, _), t = w[0], n = w[1], e = w[2], o = w[3], s = w[4], !(p = w[9] = w[9] === i ? v ? 0 : t.length : de(w[9] - y, 0)) && 24 & n && (n &= -25), n && 1 != n) b = 8 == n || 16 == n ? function (t, n, e) {
                        var u = Ti(t);
                        return function o() {
                          for (var a = arguments.length, c = r(a), f = a, s = uu(o); f--;) {
                            c[f] = arguments[f];
                          }

                          var l = a < 3 && c[0] !== s && c[a - 1] !== s ? [] : ee(c, s);
                          return (a -= l.length) < e ? Gi(t, n, Ui, o.placeholder, i, c, l, i, i, e - a) : _n(this && this !== on && this instanceof o ? u : t, this, c);
                        };
                      }(t, n, p) : n != c && 33 != n || s.length ? Ui.apply(i, w) : function (t, n, e, i) {
                        var u = 1 & n,
                            o = Ti(t);
                        return function n() {
                          for (var a = -1, c = arguments.length, f = -1, s = i.length, l = r(s + c), h = this && this !== on && this instanceof n ? o : t; ++f < s;) {
                            l[f] = i[f];
                          }

                          for (; c--;) {
                            l[f++] = arguments[++a];
                          }

                          return _n(h, u ? e : this, l);
                        };
                      }(t, n, e, o);else var b = function (t, n, e) {
                        var r = 1 & n,
                            i = Ti(t);
                        return function n() {
                          return (this && this !== on && this instanceof n ? i : t).apply(r ? e : this, arguments);
                        };
                      }(t, n, e);
                      return Pu((_ ? Yr : ju)(b, w), t, n);
                    }

                    function Hi(t, n, e, r) {
                      return t === i || zo(t, It[e]) && !Et.call(r, e) ? n : t;
                    }

                    function Qi(t, n, e, r, u, o) {
                      return na(t) && na(n) && (o.set(n, t), qr(t, n, i, Qi, o), o["delete"](n)), t;
                    }

                    function Yi(t) {
                      return ua(t) ? i : t;
                    }

                    function Xi(t, n, e, r, u, o) {
                      var a = 1 & e,
                          c = t.length,
                          f = n.length;
                      if (c != f && !(a && f > c)) return !1;
                      var s = o.get(t),
                          l = o.get(n);
                      if (s && l) return s == n && l == t;
                      var h = -1,
                          p = !0,
                          v = 2 & e ? new Ze() : i;

                      for (o.set(t, n), o.set(n, t); ++h < c;) {
                        var y = t[h],
                            g = n[h];
                        if (r) var d = a ? r(g, y, h, n, t, o) : r(y, g, h, t, n, o);

                        if (d !== i) {
                          if (d) continue;
                          p = !1;
                          break;
                        }

                        if (v) {
                          if (!In(n, function (t, n) {
                            if (!Vn(v, n) && (y === t || u(y, t, e, r, o))) return v.push(n);
                          })) {
                            p = !1;
                            break;
                          }
                        } else if (y !== g && !u(y, g, e, r, o)) {
                          p = !1;
                          break;
                        }
                      }

                      return o["delete"](t), o["delete"](n), p;
                    }

                    function tu(t) {
                      return Iu(Fu(t, i, Gu), t + "");
                    }

                    function nu(t) {
                      return Ar(t, Ra, su);
                    }

                    function eu(t) {
                      return Ar(t, Ea, lu);
                    }

                    var ru = Oe ? function (t) {
                      return Oe.get(t);
                    } : fc;

                    function iu(t) {
                      for (var n = t.name + "", e = Ie[n], r = Et.call(Ie, n) ? e.length : 0; r--;) {
                        var i = e[r],
                            u = i.func;
                        if (null == u || u == t) return i.name;
                      }

                      return n;
                    }

                    function uu(t) {
                      return (Et.call(Be, "placeholder") ? Be : t).placeholder;
                    }

                    function ou() {
                      var t = Be.iteratee || uc;
                      return t = t === uc ? Mr : t, arguments.length ? t(arguments[0], arguments[1]) : t;
                    }

                    function au(t, n) {
                      var e,
                          r,
                          i = t.__data__;
                      return ("string" == (r = typeof (e = n)) || "number" == r || "symbol" == r || "boolean" == r ? "__proto__" !== e : null === e) ? i["string" == typeof n ? "string" : "hash"] : i.map;
                    }

                    function cu(t) {
                      for (var n = Ra(t), e = n.length; e--;) {
                        var r = n[e],
                            i = t[r];
                        n[e] = [r, i, ku(i)];
                      }

                      return n;
                    }

                    function fu(t, n) {
                      var e = function (t, n) {
                        return null == t ? i : t[n];
                      }(t, n);

                      return Er(e) ? e : i;
                    }

                    var su = he ? function (t) {
                      return null == t ? [] : (t = Ft(t), An(he(t), function (n) {
                        return tn.call(t, n);
                      }));
                    } : gc,
                        lu = he ? function (t) {
                      for (var n = []; t;) {
                        xn(n, su(t)), t = Vt(t);
                      }

                      return n;
                    } : gc,
                        hu = Fr;

                    function pu(t, n, e) {
                      for (var r = -1, i = (n = di(n, t)).length, u = !1; ++r < i;) {
                        var o = Du(n[r]);
                        if (!(u = null != t && e(t, o))) break;
                        t = t[o];
                      }

                      return u || ++r != i ? u : !!(i = null == t ? 0 : t.length) && ta(i) && gu(o, i) && (Go(t) || $o(t));
                    }

                    function vu(t) {
                      return "function" != typeof t.constructor || mu(t) ? {} : qe(Vt(t));
                    }

                    function yu(t) {
                      return Go(t) || $o(t) || !!(un && t && t[un]);
                    }

                    function gu(t, n) {
                      var e = typeof t;
                      return !!(n = null == n ? l : n) && ("number" == e || "symbol" != e && dt.test(t)) && t > -1 && t % 1 == 0 && t < n;
                    }

                    function du(t, n, e) {
                      if (!na(e)) return !1;
                      var r = typeof n;
                      return !!("number" == r ? Zo(e) && gu(n, e.length) : "string" == r && n in e) && zo(e[n], t);
                    }

                    function _u(t, n) {
                      if (Go(t)) return !1;
                      var e = typeof t;
                      return !("number" != e && "symbol" != e && "boolean" != e && null != t && !fa(t)) || X.test(t) || !Y.test(t) || null != n && t in Ft(n);
                    }

                    function wu(t) {
                      var n = iu(t),
                          e = Be[n];
                      if ("function" != typeof e || !(n in Ne.prototype)) return !1;
                      if (t === e) return !0;
                      var r = ru(e);
                      return !!r && t === r[0];
                    }

                    (Ae && hu(new Ae(new ArrayBuffer(1))) != R || Fe && hu(new Fe()) != k || Se && hu(Se.resolve()) != S || Ce && hu(new Ce()) != x || xe && hu(new xe()) != I) && (hu = function hu(t) {
                      var n = Fr(t),
                          e = n == F ? t.constructor : i,
                          r = e ? Uu(e) : "";
                      if (r) switch (r) {
                        case Pe:
                          return R;

                        case Re:
                          return k;

                        case Ee:
                          return S;

                        case Me:
                          return x;

                        case Te:
                          return I;
                      }
                      return n;
                    });
                    var bu = Pt ? Yo : dc;

                    function mu(t) {
                      var n = t && t.constructor;
                      return t === ("function" == typeof n && n.prototype || It);
                    }

                    function ku(t) {
                      return t == t && !na(t);
                    }

                    function Au(t, n) {
                      return function (e) {
                        return null != e && e[t] === n && (n !== i || t in Ft(e));
                      };
                    }

                    function Fu(t, n, e) {
                      return n = de(n === i ? t.length - 1 : n, 0), function () {
                        for (var i = arguments, u = -1, o = de(i.length - n, 0), a = r(o); ++u < o;) {
                          a[u] = i[n + u];
                        }

                        u = -1;

                        for (var c = r(n + 1); ++u < n;) {
                          c[u] = i[u];
                        }

                        return c[n] = e(a), _n(t, this, c);
                      };
                    }

                    function Su(t, n) {
                      return n.length < 2 ? t : kr(t, ni(n, 0, -1));
                    }

                    function Cu(t, n) {
                      for (var e = t.length, r = _e(n.length, e), u = xi(t); r--;) {
                        var o = n[r];
                        t[r] = gu(o, e) ? u[o] : i;
                      }

                      return t;
                    }

                    function xu(t, n) {
                      if (("constructor" !== n || "function" != typeof t[n]) && "__proto__" != n) return t[n];
                    }

                    var ju = Ru(Yr),
                        Ou = Bn || function (t, n) {
                      return on.setTimeout(t, n);
                    },
                        Iu = Ru(Xr);

                    function Pu(t, n, e) {
                      var r = n + "";
                      return Iu(t, function (t, n) {
                        var e = n.length;
                        if (!e) return t;
                        var r = e - 1;
                        return n[r] = (e > 1 ? "& " : "") + n[r], n = n.join(e > 2 ? ", " : " "), t.replace(ut, "{\n/* [wrapped with " + n + "] */\n");
                      }(r, function (t, n) {
                        return bn(v, function (e) {
                          var r = "_." + e[0];
                          n & e[1] && !Fn(t, r) && t.push(r);
                        }), t.sort();
                      }(function (t) {
                        var n = t.match(ot);
                        return n ? n[1].split(at) : [];
                      }(r), e)));
                    }

                    function Ru(t) {
                      var n = 0,
                          e = 0;
                      return function () {
                        var r = we(),
                            u = 16 - (r - e);

                        if (e = r, u > 0) {
                          if (++n >= 800) return arguments[0];
                        } else n = 0;

                        return t.apply(i, arguments);
                      };
                    }

                    function Eu(t, n) {
                      var e = -1,
                          r = t.length,
                          u = r - 1;

                      for (n = n === i ? r : n; ++e < n;) {
                        var o = Vr(e, u),
                            a = t[o];
                        t[o] = t[e], t[e] = a;
                      }

                      return t.length = n, t;
                    }

                    var Mu,
                        Tu,
                        Lu = (Mu = To(function (t) {
                      var n = [];
                      return 46 === t.charCodeAt(0) && n.push(""), t.replace(tt, function (t, e, r, i) {
                        n.push(r ? i.replace(st, "$1") : e || t);
                      }), n;
                    }, function (t) {
                      return 500 === Tu.size && Tu.clear(), t;
                    }), Tu = Mu.cache, Mu);

                    function Du(t) {
                      if ("string" == typeof t || fa(t)) return t;
                      var n = t + "";
                      return "0" == n && 1 / t == -1 / 0 ? "-0" : n;
                    }

                    function Uu(t) {
                      if (null != t) {
                        try {
                          return Rt.call(t);
                        } catch (t) {}

                        try {
                          return t + "";
                        } catch (t) {}
                      }

                      return "";
                    }

                    function Bu(t) {
                      if (t instanceof Ne) return t.clone();
                      var n = new We(t.__wrapped__, t.__chain__);
                      return n.__actions__ = xi(t.__actions__), n.__index__ = t.__index__, n.__values__ = t.__values__, n;
                    }

                    var qu = Jr(function (t, n) {
                      return Jo(t) ? sr(t, gr(n, 1, Jo, !0)) : [];
                    }),
                        zu = Jr(function (t, n) {
                      var e = Hu(n);
                      return Jo(e) && (e = i), Jo(t) ? sr(t, gr(n, 1, Jo, !0), ou(e, 2)) : [];
                    }),
                        Wu = Jr(function (t, n) {
                      var e = Hu(n);
                      return Jo(e) && (e = i), Jo(t) ? sr(t, gr(n, 1, Jo, !0), i, e) : [];
                    });

                    function Nu(t, n, e) {
                      var r = null == t ? 0 : t.length;
                      if (!r) return -1;
                      var i = null == e ? 0 : ya(e);
                      return i < 0 && (i = de(r + i, 0)), En(t, ou(n, 3), i);
                    }

                    function $u(t, n, e) {
                      var r = null == t ? 0 : t.length;
                      if (!r) return -1;
                      var u = r - 1;
                      return e !== i && (u = ya(e), u = e < 0 ? de(r + u, 0) : _e(u, r - 1)), En(t, ou(n, 3), u, !0);
                    }

                    function Gu(t) {
                      return null != t && t.length ? gr(t, 1) : [];
                    }

                    function Vu(t) {
                      return t && t.length ? t[0] : i;
                    }

                    var Zu = Jr(function (t) {
                      var n = Cn(t, yi);
                      return n.length && n[0] === t[0] ? jr(n) : [];
                    }),
                        Ju = Jr(function (t) {
                      var n = Hu(t),
                          e = Cn(t, yi);
                      return n === Hu(e) ? n = i : e.pop(), e.length && e[0] === t[0] ? jr(e, ou(n, 2)) : [];
                    }),
                        Ku = Jr(function (t) {
                      var n = Hu(t),
                          e = Cn(t, yi);
                      return (n = "function" == typeof n ? n : i) && e.pop(), e.length && e[0] === t[0] ? jr(e, i, n) : [];
                    });

                    function Hu(t) {
                      var n = null == t ? 0 : t.length;
                      return n ? t[n - 1] : i;
                    }

                    var Qu = Jr(Yu);

                    function Yu(t, n) {
                      return t && t.length && n && n.length ? $r(t, n) : t;
                    }

                    var Xu = tu(function (t, n) {
                      var e = null == t ? 0 : t.length,
                          r = ur(t, n);
                      return Gr(t, Cn(n, function (t) {
                        return gu(t, e) ? +t : t;
                      }).sort(Fi)), r;
                    });

                    function to(t) {
                      return null == t ? t : ke.call(t);
                    }

                    var no = Jr(function (t) {
                      return ci(gr(t, 1, Jo, !0));
                    }),
                        eo = Jr(function (t) {
                      var n = Hu(t);
                      return Jo(n) && (n = i), ci(gr(t, 1, Jo, !0), ou(n, 2));
                    }),
                        ro = Jr(function (t) {
                      var n = Hu(t);
                      return n = "function" == typeof n ? n : i, ci(gr(t, 1, Jo, !0), i, n);
                    });

                    function io(t) {
                      if (!t || !t.length) return [];
                      var n = 0;
                      return t = An(t, function (t) {
                        if (Jo(t)) return n = de(t.length, n), !0;
                      }), Wn(n, function (n) {
                        return Cn(t, Un(n));
                      });
                    }

                    function uo(t, n) {
                      if (!t || !t.length) return [];
                      var e = io(t);
                      return null == n ? e : Cn(e, function (t) {
                        return _n(n, i, t);
                      });
                    }

                    var oo = Jr(function (t, n) {
                      return Jo(t) ? sr(t, n) : [];
                    }),
                        ao = Jr(function (t) {
                      return pi(An(t, Jo));
                    }),
                        co = Jr(function (t) {
                      var n = Hu(t);
                      return Jo(n) && (n = i), pi(An(t, Jo), ou(n, 2));
                    }),
                        fo = Jr(function (t) {
                      var n = Hu(t);
                      return n = "function" == typeof n ? n : i, pi(An(t, Jo), i, n);
                    }),
                        so = Jr(io),
                        lo = Jr(function (t) {
                      var n = t.length,
                          e = n > 1 ? t[n - 1] : i;
                      return e = "function" == typeof e ? (t.pop(), e) : i, uo(t, e);
                    });

                    function ho(t) {
                      var n = Be(t);
                      return n.__chain__ = !0, n;
                    }

                    function po(t, n) {
                      return n(t);
                    }

                    var vo = tu(function (t) {
                      var n = t.length,
                          e = n ? t[0] : 0,
                          r = this.__wrapped__,
                          u = function u(n) {
                        return ur(n, t);
                      };

                      return !(n > 1 || this.__actions__.length) && r instanceof Ne && gu(e) ? ((r = r.slice(e, +e + (n ? 1 : 0))).__actions__.push({
                        func: po,
                        args: [u],
                        thisArg: i
                      }), new We(r, this.__chain__).thru(function (t) {
                        return n && !t.length && t.push(i), t;
                      })) : this.thru(u);
                    }),
                        yo = Oi(function (t, n, e) {
                      Et.call(t, e) ? ++t[e] : ir(t, e, 1);
                    }),
                        go = Li(Nu),
                        _o = Li($u);

                    function wo(t, n) {
                      return (Go(t) ? bn : lr)(t, ou(n, 3));
                    }

                    function bo(t, n) {
                      return (Go(t) ? mn : hr)(t, ou(n, 3));
                    }

                    var mo = Oi(function (t, n, e) {
                      Et.call(t, e) ? t[e].push(n) : ir(t, e, [n]);
                    }),
                        ko = Jr(function (t, n, e) {
                      var i = -1,
                          u = "function" == typeof n,
                          o = Zo(t) ? r(t.length) : [];
                      return lr(t, function (t) {
                        o[++i] = u ? _n(n, t, e) : Or(t, n, e);
                      }), o;
                    }),
                        Ao = Oi(function (t, n, e) {
                      ir(t, e, n);
                    });

                    function Fo(t, n) {
                      return (Go(t) ? Cn : Dr)(t, ou(n, 3));
                    }

                    var So = Oi(function (t, n, e) {
                      t[e ? 0 : 1].push(n);
                    }, function () {
                      return [[], []];
                    }),
                        Co = Jr(function (t, n) {
                      if (null == t) return [];
                      var e = n.length;
                      return e > 1 && du(t, n[0], n[1]) ? n = [] : e > 2 && du(n[0], n[1], n[2]) && (n = [n[0]]), Wr(t, gr(n, 1), []);
                    }),
                        xo = Pn || function () {
                      return on.Date.now();
                    };

                    function jo(t, n, e) {
                      return n = e ? i : n, n = t && null == n ? t.length : n, Ki(t, f, i, i, i, i, n);
                    }

                    function Oo(t, n) {
                      var e;
                      if ("function" != typeof n) throw new xt(u);
                      return t = ya(t), function () {
                        return --t > 0 && (e = n.apply(this, arguments)), t <= 1 && (n = i), e;
                      };
                    }

                    var Io = Jr(function (t, n, e) {
                      var r = 1;

                      if (e.length) {
                        var i = ee(e, uu(Io));
                        r |= c;
                      }

                      return Ki(t, r, n, e, i);
                    }),
                        Po = Jr(function (t, n, e) {
                      var r = 3;

                      if (e.length) {
                        var i = ee(e, uu(Po));
                        r |= c;
                      }

                      return Ki(n, r, t, e, i);
                    });

                    function Ro(t, n, e) {
                      var r,
                          o,
                          a,
                          c,
                          f,
                          s,
                          l = 0,
                          h = !1,
                          p = !1,
                          v = !0;
                      if ("function" != typeof t) throw new xt(u);

                      function y(n) {
                        var e = r,
                            u = o;
                        return r = o = i, l = n, c = t.apply(u, e);
                      }

                      function g(t) {
                        return l = t, f = Ou(_, n), h ? y(t) : c;
                      }

                      function d(t) {
                        var e = t - s;
                        return s === i || e >= n || e < 0 || p && t - l >= a;
                      }

                      function _() {
                        var t = xo();
                        if (d(t)) return w(t);
                        f = Ou(_, function (t) {
                          var e = n - (t - s);
                          return p ? _e(e, a - (t - l)) : e;
                        }(t));
                      }

                      function w(t) {
                        return f = i, v && r ? y(t) : (r = o = i, c);
                      }

                      function b() {
                        var t = xo(),
                            e = d(t);

                        if (r = arguments, o = this, s = t, e) {
                          if (f === i) return g(s);
                          if (p) return bi(f), f = Ou(_, n), y(s);
                        }

                        return f === i && (f = Ou(_, n)), c;
                      }

                      return n = da(n) || 0, na(e) && (h = !!e.leading, a = (p = "maxWait" in e) ? de(da(e.maxWait) || 0, n) : a, v = "trailing" in e ? !!e.trailing : v), b.cancel = function () {
                        f !== i && bi(f), l = 0, r = s = o = f = i;
                      }, b.flush = function () {
                        return f === i ? c : w(xo());
                      }, b;
                    }

                    var Eo = Jr(function (t, n) {
                      return fr(t, 1, n);
                    }),
                        Mo = Jr(function (t, n, e) {
                      return fr(t, da(n) || 0, e);
                    });

                    function To(t, n) {
                      if ("function" != typeof t || null != n && "function" != typeof n) throw new xt(u);

                      var e = function e() {
                        var r = arguments,
                            i = n ? n.apply(this, r) : r[0],
                            u = e.cache;
                        if (u.has(i)) return u.get(i);
                        var o = t.apply(this, r);
                        return e.cache = u.set(i, o) || u, o;
                      };

                      return e.cache = new (To.Cache || Ve)(), e;
                    }

                    function Lo(t) {
                      if ("function" != typeof t) throw new xt(u);
                      return function () {
                        var n = arguments;

                        switch (n.length) {
                          case 0:
                            return !t.call(this);

                          case 1:
                            return !t.call(this, n[0]);

                          case 2:
                            return !t.call(this, n[0], n[1]);

                          case 3:
                            return !t.call(this, n[0], n[1], n[2]);
                        }

                        return !t.apply(this, n);
                      };
                    }

                    To.Cache = Ve;

                    var Do = _i(function (t, n) {
                      var e = (n = 1 == n.length && Go(n[0]) ? Cn(n[0], $n(ou())) : Cn(gr(n, 1), $n(ou()))).length;
                      return Jr(function (r) {
                        for (var i = -1, u = _e(r.length, e); ++i < u;) {
                          r[i] = n[i].call(this, r[i]);
                        }

                        return _n(t, this, r);
                      });
                    }),
                        Uo = Jr(function (t, n) {
                      var e = ee(n, uu(Uo));
                      return Ki(t, c, i, n, e);
                    }),
                        Bo = Jr(function (t, n) {
                      var e = ee(n, uu(Bo));
                      return Ki(t, 64, i, n, e);
                    }),
                        qo = tu(function (t, n) {
                      return Ki(t, 256, i, i, i, n);
                    });

                    function zo(t, n) {
                      return t === n || t != t && n != n;
                    }

                    var Wo = $i(Sr),
                        No = $i(function (t, n) {
                      return t >= n;
                    }),
                        $o = Ir(function () {
                      return arguments;
                    }()) ? Ir : function (t) {
                      return ea(t) && Et.call(t, "callee") && !tn.call(t, "callee");
                    },
                        Go = r.isArray,
                        Vo = hn ? $n(hn) : function (t) {
                      return ea(t) && Fr(t) == P;
                    };

                    function Zo(t) {
                      return null != t && ta(t.length) && !Yo(t);
                    }

                    function Jo(t) {
                      return ea(t) && Zo(t);
                    }

                    var Ko = pe || dc,
                        Ho = pn ? $n(pn) : function (t) {
                      return ea(t) && Fr(t) == _;
                    };

                    function Qo(t) {
                      if (!ea(t)) return !1;
                      var n = Fr(t);
                      return n == w || "[object DOMException]" == n || "string" == typeof t.message && "string" == typeof t.name && !ua(t);
                    }

                    function Yo(t) {
                      if (!na(t)) return !1;
                      var n = Fr(t);
                      return n == b || n == m || "[object AsyncFunction]" == n || "[object Proxy]" == n;
                    }

                    function Xo(t) {
                      return "number" == typeof t && t == ya(t);
                    }

                    function ta(t) {
                      return "number" == typeof t && t > -1 && t % 1 == 0 && t <= l;
                    }

                    function na(t) {
                      var n = typeof t;
                      return null != t && ("object" == n || "function" == n);
                    }

                    function ea(t) {
                      return null != t && "object" == typeof t;
                    }

                    var ra = vn ? $n(vn) : function (t) {
                      return ea(t) && hu(t) == k;
                    };

                    function ia(t) {
                      return "number" == typeof t || ea(t) && Fr(t) == A;
                    }

                    function ua(t) {
                      if (!ea(t) || Fr(t) != F) return !1;
                      var n = Vt(t);
                      if (null === n) return !0;
                      var e = Et.call(n, "constructor") && n.constructor;
                      return "function" == typeof e && e instanceof e && Rt.call(e) == Dt;
                    }

                    var oa = yn ? $n(yn) : function (t) {
                      return ea(t) && Fr(t) == C;
                    },
                        aa = gn ? $n(gn) : function (t) {
                      return ea(t) && hu(t) == x;
                    };

                    function ca(t) {
                      return "string" == typeof t || !Go(t) && ea(t) && Fr(t) == j;
                    }

                    function fa(t) {
                      return "symbol" == typeof t || ea(t) && Fr(t) == O;
                    }

                    var sa = dn ? $n(dn) : function (t) {
                      return ea(t) && ta(t.length) && !!Yt[Fr(t)];
                    },
                        la = $i(Lr),
                        ha = $i(function (t, n) {
                      return t <= n;
                    });

                    function pa(t) {
                      if (!t) return [];
                      if (Zo(t)) return ca(t) ? oe(t) : xi(t);
                      if (an && t[an]) return function (t) {
                        for (var n, e = []; !(n = t.next()).done;) {
                          e.push(n.value);
                        }

                        return e;
                      }(t[an]());
                      var n = hu(t);
                      return (n == k ? te : n == x ? re : za)(t);
                    }

                    function va(t) {
                      return t ? (t = da(t)) === s || t === -1 / 0 ? 17976931348623157e292 * (t < 0 ? -1 : 1) : t == t ? t : 0 : 0 === t ? t : 0;
                    }

                    function ya(t) {
                      var n = va(t),
                          e = n % 1;
                      return n == n ? e ? n - e : n : 0;
                    }

                    function ga(t) {
                      return t ? or(ya(t), 0, p) : 0;
                    }

                    function da(t) {
                      if ("number" == typeof t) return t;
                      if (fa(t)) return h;

                      if (na(t)) {
                        var n = "function" == typeof t.valueOf ? t.valueOf() : t;
                        t = na(n) ? n + "" : n;
                      }

                      if ("string" != typeof t) return 0 === t ? t : +t;
                      t = Nn(t);
                      var e = vt.test(t);
                      return e || gt.test(t) ? en(t.slice(2), e ? 2 : 8) : pt.test(t) ? h : +t;
                    }

                    function _a(t) {
                      return ji(t, Ea(t));
                    }

                    function wa(t) {
                      return null == t ? "" : ai(t);
                    }

                    var ba = Ii(function (t, n) {
                      if (mu(n) || Zo(n)) ji(n, Ra(n), t);else for (var e in n) {
                        Et.call(n, e) && tr(t, e, n[e]);
                      }
                    }),
                        ma = Ii(function (t, n) {
                      ji(n, Ea(n), t);
                    }),
                        ka = Ii(function (t, n, e, r) {
                      ji(n, Ea(n), t, r);
                    }),
                        Aa = Ii(function (t, n, e, r) {
                      ji(n, Ra(n), t, r);
                    }),
                        Fa = tu(ur),
                        Sa = Jr(function (t, n) {
                      t = Ft(t);
                      var e = -1,
                          r = n.length,
                          u = r > 2 ? n[2] : i;

                      for (u && du(n[0], n[1], u) && (r = 1); ++e < r;) {
                        for (var o = n[e], a = Ea(o), c = -1, f = a.length; ++c < f;) {
                          var s = a[c],
                              l = t[s];
                          (l === i || zo(l, It[s]) && !Et.call(t, s)) && (t[s] = o[s]);
                        }
                      }

                      return t;
                    }),
                        Ca = Jr(function (t) {
                      return t.push(i, Qi), _n(Ta, i, t);
                    });

                    function xa(t, n, e) {
                      var r = null == t ? i : kr(t, n);
                      return r === i ? e : r;
                    }

                    function ja(t, n) {
                      return null != t && pu(t, n, xr);
                    }

                    var Oa = Bi(function (t, n, e) {
                      null != n && "function" != typeof n.toString && (n = Lt.call(n)), t[n] = e;
                    }, nc(ic)),
                        Ia = Bi(function (t, n, e) {
                      null != n && "function" != typeof n.toString && (n = Lt.call(n)), Et.call(t, n) ? t[n].push(e) : t[n] = [e];
                    }, ou),
                        Pa = Jr(Or);

                    function Ra(t) {
                      return Zo(t) ? Ke(t) : Tr(t);
                    }

                    function Ea(t) {
                      return Zo(t) ? Ke(t, !0) : function (t) {
                        if (!na(t)) return function (t) {
                          var n = [];
                          if (null != t) for (var e in Ft(t)) {
                            n.push(e);
                          }
                          return n;
                        }(t);
                        var n = mu(t),
                            e = [];

                        for (var r in t) {
                          ("constructor" != r || !n && Et.call(t, r)) && e.push(r);
                        }

                        return e;
                      }(t);
                    }

                    var Ma = Ii(function (t, n, e) {
                      qr(t, n, e);
                    }),
                        Ta = Ii(function (t, n, e, r) {
                      qr(t, n, e, r);
                    }),
                        La = tu(function (t, n) {
                      var e = {};
                      if (null == t) return e;
                      var r = !1;
                      n = Cn(n, function (n) {
                        return n = di(n, t), r || (r = n.length > 1), n;
                      }), ji(t, eu(t), e), r && (e = ar(e, 7, Yi));

                      for (var i = n.length; i--;) {
                        fi(e, n[i]);
                      }

                      return e;
                    }),
                        Da = tu(function (t, n) {
                      return null == t ? {} : function (t, n) {
                        return Nr(t, n, function (n, e) {
                          return ja(t, e);
                        });
                      }(t, n);
                    });

                    function Ua(t, n) {
                      if (null == t) return {};
                      var e = Cn(eu(t), function (t) {
                        return [t];
                      });
                      return n = ou(n), Nr(t, e, function (t, e) {
                        return n(t, e[0]);
                      });
                    }

                    var Ba = Ji(Ra),
                        qa = Ji(Ea);

                    function za(t) {
                      return null == t ? [] : Gn(t, Ra(t));
                    }

                    var Wa = Mi(function (t, n, e) {
                      return n = n.toLowerCase(), t + (e ? Na(n) : n);
                    });

                    function Na(t) {
                      return Qa(wa(t).toLowerCase());
                    }

                    function $a(t) {
                      return (t = wa(t)) && t.replace(_t, Hn).replace(Gt, "");
                    }

                    var Ga = Mi(function (t, n, e) {
                      return t + (e ? "-" : "") + n.toLowerCase();
                    }),
                        Va = Mi(function (t, n, e) {
                      return t + (e ? " " : "") + n.toLowerCase();
                    }),
                        Za = Ei("toLowerCase"),
                        Ja = Mi(function (t, n, e) {
                      return t + (e ? "_" : "") + n.toLowerCase();
                    }),
                        Ka = Mi(function (t, n, e) {
                      return t + (e ? " " : "") + Qa(n);
                    }),
                        Ha = Mi(function (t, n, e) {
                      return t + (e ? " " : "") + n.toUpperCase();
                    }),
                        Qa = Ei("toUpperCase");

                    function Ya(t, n, e) {
                      return t = wa(t), (n = e ? i : n) === i ? function (t) {
                        return Kt.test(t);
                      }(t) ? function (t) {
                        return t.match(Zt) || [];
                      }(t) : function (t) {
                        return t.match(ct) || [];
                      }(t) : t.match(n) || [];
                    }

                    var Xa = Jr(function (t, n) {
                      try {
                        return _n(t, i, n);
                      } catch (t) {
                        return Qo(t) ? t : new mt(t);
                      }
                    }),
                        tc = tu(function (t, n) {
                      return bn(n, function (n) {
                        n = Du(n), ir(t, n, Io(t[n], t));
                      }), t;
                    });

                    function nc(t) {
                      return function () {
                        return t;
                      };
                    }

                    var ec = Di(),
                        rc = Di(!0);

                    function ic(t) {
                      return t;
                    }

                    function uc(t) {
                      return Mr("function" == typeof t ? t : ar(t, 1));
                    }

                    var oc = Jr(function (t, n) {
                      return function (e) {
                        return Or(e, t, n);
                      };
                    }),
                        ac = Jr(function (t, n) {
                      return function (e) {
                        return Or(t, e, n);
                      };
                    });

                    function cc(t, n, e) {
                      var r = Ra(n),
                          i = mr(n, r);
                      null != e || na(n) && (i.length || !r.length) || (e = n, n = t, t = this, i = mr(n, Ra(n)));
                      var u = !(na(e) && "chain" in e && !e.chain),
                          o = Yo(t);
                      return bn(i, function (e) {
                        var r = n[e];
                        t[e] = r, o && (t.prototype[e] = function () {
                          var n = this.__chain__;

                          if (u || n) {
                            var e = t(this.__wrapped__),
                                i = e.__actions__ = xi(this.__actions__);
                            return i.push({
                              func: r,
                              args: arguments,
                              thisArg: t
                            }), e.__chain__ = n, e;
                          }

                          return r.apply(t, xn([this.value()], arguments));
                        });
                      }), t;
                    }

                    function fc() {}

                    var sc = zi(Cn),
                        lc = zi(kn),
                        hc = zi(In);

                    function pc(t) {
                      return _u(t) ? Un(Du(t)) : function (t) {
                        return function (n) {
                          return kr(n, t);
                        };
                      }(t);
                    }

                    var vc = Ni(),
                        yc = Ni(!0);

                    function gc() {
                      return [];
                    }

                    function dc() {
                      return !1;
                    }

                    var _c,
                        wc = qi(function (t, n) {
                      return t + n;
                    }, 0),
                        bc = Vi("ceil"),
                        mc = qi(function (t, n) {
                      return t / n;
                    }, 1),
                        kc = Vi("floor"),
                        Ac = qi(function (t, n) {
                      return t * n;
                    }, 1),
                        Fc = Vi("round"),
                        Sc = qi(function (t, n) {
                      return t - n;
                    }, 0);

                    return Be.after = function (t, n) {
                      if ("function" != typeof n) throw new xt(u);
                      return t = ya(t), function () {
                        if (--t < 1) return n.apply(this, arguments);
                      };
                    }, Be.ary = jo, Be.assign = ba, Be.assignIn = ma, Be.assignInWith = ka, Be.assignWith = Aa, Be.at = Fa, Be.before = Oo, Be.bind = Io, Be.bindAll = tc, Be.bindKey = Po, Be.castArray = function () {
                      if (!arguments.length) return [];
                      var t = arguments[0];
                      return Go(t) ? t : [t];
                    }, Be.chain = ho, Be.chunk = function (t, n, e) {
                      n = (e ? du(t, n, e) : n === i) ? 1 : de(ya(n), 0);
                      var u = null == t ? 0 : t.length;
                      if (!u || n < 1) return [];

                      for (var o = 0, a = 0, c = r(se(u / n)); o < u;) {
                        c[a++] = ni(t, o, o += n);
                      }

                      return c;
                    }, Be.compact = function (t) {
                      for (var n = -1, e = null == t ? 0 : t.length, r = 0, i = []; ++n < e;) {
                        var u = t[n];
                        u && (i[r++] = u);
                      }

                      return i;
                    }, Be.concat = function () {
                      var t = arguments.length;
                      if (!t) return [];

                      for (var n = r(t - 1), e = arguments[0], i = t; i--;) {
                        n[i - 1] = arguments[i];
                      }

                      return xn(Go(e) ? xi(e) : [e], gr(n, 1));
                    }, Be.cond = function (t) {
                      var n = null == t ? 0 : t.length,
                          e = ou();
                      return t = n ? Cn(t, function (t) {
                        if ("function" != typeof t[1]) throw new xt(u);
                        return [e(t[0]), t[1]];
                      }) : [], Jr(function (e) {
                        for (var r = -1; ++r < n;) {
                          var i = t[r];
                          if (_n(i[0], this, e)) return _n(i[1], this, e);
                        }
                      });
                    }, Be.conforms = function (t) {
                      return function (t) {
                        var n = Ra(t);
                        return function (e) {
                          return cr(e, t, n);
                        };
                      }(ar(t, 1));
                    }, Be.constant = nc, Be.countBy = yo, Be.create = function (t, n) {
                      var e = qe(t);
                      return null == n ? e : rr(e, n);
                    }, Be.curry = function t(n, e, r) {
                      var u = Ki(n, 8, i, i, i, i, i, e = r ? i : e);
                      return u.placeholder = t.placeholder, u;
                    }, Be.curryRight = function t(n, e, r) {
                      var u = Ki(n, 16, i, i, i, i, i, e = r ? i : e);
                      return u.placeholder = t.placeholder, u;
                    }, Be.debounce = Ro, Be.defaults = Sa, Be.defaultsDeep = Ca, Be.defer = Eo, Be.delay = Mo, Be.difference = qu, Be.differenceBy = zu, Be.differenceWith = Wu, Be.drop = function (t, n, e) {
                      var r = null == t ? 0 : t.length;
                      return r ? ni(t, (n = e || n === i ? 1 : ya(n)) < 0 ? 0 : n, r) : [];
                    }, Be.dropRight = function (t, n, e) {
                      var r = null == t ? 0 : t.length;
                      return r ? ni(t, 0, (n = r - (n = e || n === i ? 1 : ya(n))) < 0 ? 0 : n) : [];
                    }, Be.dropRightWhile = function (t, n) {
                      return t && t.length ? li(t, ou(n, 3), !0, !0) : [];
                    }, Be.dropWhile = function (t, n) {
                      return t && t.length ? li(t, ou(n, 3), !0) : [];
                    }, Be.fill = function (t, n, e, r) {
                      var u = null == t ? 0 : t.length;
                      return u ? (e && "number" != typeof e && du(t, n, e) && (e = 0, r = u), function (t, n, e, r) {
                        var u = t.length;

                        for ((e = ya(e)) < 0 && (e = -e > u ? 0 : u + e), (r = r === i || r > u ? u : ya(r)) < 0 && (r += u), r = e > r ? 0 : ga(r); e < r;) {
                          t[e++] = n;
                        }

                        return t;
                      }(t, n, e, r)) : [];
                    }, Be.filter = function (t, n) {
                      return (Go(t) ? An : yr)(t, ou(n, 3));
                    }, Be.flatMap = function (t, n) {
                      return gr(Fo(t, n), 1);
                    }, Be.flatMapDeep = function (t, n) {
                      return gr(Fo(t, n), s);
                    }, Be.flatMapDepth = function (t, n, e) {
                      return e = e === i ? 1 : ya(e), gr(Fo(t, n), e);
                    }, Be.flatten = Gu, Be.flattenDeep = function (t) {
                      return null != t && t.length ? gr(t, s) : [];
                    }, Be.flattenDepth = function (t, n) {
                      return null != t && t.length ? gr(t, n = n === i ? 1 : ya(n)) : [];
                    }, Be.flip = function (t) {
                      return Ki(t, 512);
                    }, Be.flow = ec, Be.flowRight = rc, Be.fromPairs = function (t) {
                      for (var n = -1, e = null == t ? 0 : t.length, r = {}; ++n < e;) {
                        var i = t[n];
                        r[i[0]] = i[1];
                      }

                      return r;
                    }, Be.functions = function (t) {
                      return null == t ? [] : mr(t, Ra(t));
                    }, Be.functionsIn = function (t) {
                      return null == t ? [] : mr(t, Ea(t));
                    }, Be.groupBy = mo, Be.initial = function (t) {
                      return null != t && t.length ? ni(t, 0, -1) : [];
                    }, Be.intersection = Zu, Be.intersectionBy = Ju, Be.intersectionWith = Ku, Be.invert = Oa, Be.invertBy = Ia, Be.invokeMap = ko, Be.iteratee = uc, Be.keyBy = Ao, Be.keys = Ra, Be.keysIn = Ea, Be.map = Fo, Be.mapKeys = function (t, n) {
                      var e = {};
                      return n = ou(n, 3), wr(t, function (t, r, i) {
                        ir(e, n(t, r, i), t);
                      }), e;
                    }, Be.mapValues = function (t, n) {
                      var e = {};
                      return n = ou(n, 3), wr(t, function (t, r, i) {
                        ir(e, r, n(t, r, i));
                      }), e;
                    }, Be.matches = function (t) {
                      return Ur(ar(t, 1));
                    }, Be.matchesProperty = function (t, n) {
                      return Br(t, ar(n, 1));
                    }, Be.memoize = To, Be.merge = Ma, Be.mergeWith = Ta, Be.method = oc, Be.methodOf = ac, Be.mixin = cc, Be.negate = Lo, Be.nthArg = function (t) {
                      return t = ya(t), Jr(function (n) {
                        return zr(n, t);
                      });
                    }, Be.omit = La, Be.omitBy = function (t, n) {
                      return Ua(t, Lo(ou(n)));
                    }, Be.once = function (t) {
                      return Oo(2, t);
                    }, Be.orderBy = function (t, n, e, r) {
                      return null == t ? [] : (Go(n) || (n = null == n ? [] : [n]), Go(e = r ? i : e) || (e = null == e ? [] : [e]), Wr(t, n, e));
                    }, Be.over = sc, Be.overArgs = Do, Be.overEvery = lc, Be.overSome = hc, Be.partial = Uo, Be.partialRight = Bo, Be.partition = So, Be.pick = Da, Be.pickBy = Ua, Be.property = pc, Be.propertyOf = function (t) {
                      return function (n) {
                        return null == t ? i : kr(t, n);
                      };
                    }, Be.pull = Qu, Be.pullAll = Yu, Be.pullAllBy = function (t, n, e) {
                      return t && t.length && n && n.length ? $r(t, n, ou(e, 2)) : t;
                    }, Be.pullAllWith = function (t, n, e) {
                      return t && t.length && n && n.length ? $r(t, n, i, e) : t;
                    }, Be.pullAt = Xu, Be.range = vc, Be.rangeRight = yc, Be.rearg = qo, Be.reject = function (t, n) {
                      return (Go(t) ? An : yr)(t, Lo(ou(n, 3)));
                    }, Be.remove = function (t, n) {
                      var e = [];
                      if (!t || !t.length) return e;
                      var r = -1,
                          i = [],
                          u = t.length;

                      for (n = ou(n, 3); ++r < u;) {
                        var o = t[r];
                        n(o, r, t) && (e.push(o), i.push(r));
                      }

                      return Gr(t, i), e;
                    }, Be.rest = function (t, n) {
                      if ("function" != typeof t) throw new xt(u);
                      return Jr(t, n = n === i ? n : ya(n));
                    }, Be.reverse = to, Be.sampleSize = function (t, n, e) {
                      return n = (e ? du(t, n, e) : n === i) ? 1 : ya(n), (Go(t) ? Qe : Hr)(t, n);
                    }, Be.set = function (t, n, e) {
                      return null == t ? t : Qr(t, n, e);
                    }, Be.setWith = function (t, n, e, r) {
                      return r = "function" == typeof r ? r : i, null == t ? t : Qr(t, n, e, r);
                    }, Be.shuffle = function (t) {
                      return (Go(t) ? Ye : ti)(t);
                    }, Be.slice = function (t, n, e) {
                      var r = null == t ? 0 : t.length;
                      return r ? (e && "number" != typeof e && du(t, n, e) ? (n = 0, e = r) : (n = null == n ? 0 : ya(n), e = e === i ? r : ya(e)), ni(t, n, e)) : [];
                    }, Be.sortBy = Co, Be.sortedUniq = function (t) {
                      return t && t.length ? ui(t) : [];
                    }, Be.sortedUniqBy = function (t, n) {
                      return t && t.length ? ui(t, ou(n, 2)) : [];
                    }, Be.split = function (t, n, e) {
                      return e && "number" != typeof e && du(t, n, e) && (n = e = i), (e = e === i ? p : e >>> 0) ? (t = wa(t)) && ("string" == typeof n || null != n && !oa(n)) && !(n = ai(n)) && Xn(t) ? wi(oe(t), 0, e) : t.split(n, e) : [];
                    }, Be.spread = function (t, n) {
                      if ("function" != typeof t) throw new xt(u);
                      return n = null == n ? 0 : de(ya(n), 0), Jr(function (e) {
                        var r = e[n],
                            i = wi(e, 0, n);
                        return r && xn(i, r), _n(t, this, i);
                      });
                    }, Be.tail = function (t) {
                      var n = null == t ? 0 : t.length;
                      return n ? ni(t, 1, n) : [];
                    }, Be.take = function (t, n, e) {
                      return t && t.length ? ni(t, 0, (n = e || n === i ? 1 : ya(n)) < 0 ? 0 : n) : [];
                    }, Be.takeRight = function (t, n, e) {
                      var r = null == t ? 0 : t.length;
                      return r ? ni(t, (n = r - (n = e || n === i ? 1 : ya(n))) < 0 ? 0 : n, r) : [];
                    }, Be.takeRightWhile = function (t, n) {
                      return t && t.length ? li(t, ou(n, 3), !1, !0) : [];
                    }, Be.takeWhile = function (t, n) {
                      return t && t.length ? li(t, ou(n, 3)) : [];
                    }, Be.tap = function (t, n) {
                      return n(t), t;
                    }, Be.throttle = function (t, n, e) {
                      var r = !0,
                          i = !0;
                      if ("function" != typeof t) throw new xt(u);
                      return na(e) && (r = "leading" in e ? !!e.leading : r, i = "trailing" in e ? !!e.trailing : i), Ro(t, n, {
                        leading: r,
                        maxWait: n,
                        trailing: i
                      });
                    }, Be.thru = po, Be.toArray = pa, Be.toPairs = Ba, Be.toPairsIn = qa, Be.toPath = function (t) {
                      return Go(t) ? Cn(t, Du) : fa(t) ? [t] : xi(Lu(wa(t)));
                    }, Be.toPlainObject = _a, Be.transform = function (t, n, e) {
                      var r = Go(t),
                          i = r || Ko(t) || sa(t);

                      if (n = ou(n, 4), null == e) {
                        var u = t && t.constructor;
                        e = i ? r ? new u() : [] : na(t) && Yo(u) ? qe(Vt(t)) : {};
                      }

                      return (i ? bn : wr)(t, function (t, r, i) {
                        return n(e, t, r, i);
                      }), e;
                    }, Be.unary = function (t) {
                      return jo(t, 1);
                    }, Be.union = no, Be.unionBy = eo, Be.unionWith = ro, Be.uniq = function (t) {
                      return t && t.length ? ci(t) : [];
                    }, Be.uniqBy = function (t, n) {
                      return t && t.length ? ci(t, ou(n, 2)) : [];
                    }, Be.uniqWith = function (t, n) {
                      return n = "function" == typeof n ? n : i, t && t.length ? ci(t, i, n) : [];
                    }, Be.unset = function (t, n) {
                      return null == t || fi(t, n);
                    }, Be.unzip = io, Be.unzipWith = uo, Be.update = function (t, n, e) {
                      return null == t ? t : si(t, n, gi(e));
                    }, Be.updateWith = function (t, n, e, r) {
                      return r = "function" == typeof r ? r : i, null == t ? t : si(t, n, gi(e), r);
                    }, Be.values = za, Be.valuesIn = function (t) {
                      return null == t ? [] : Gn(t, Ea(t));
                    }, Be.without = oo, Be.words = Ya, Be.wrap = function (t, n) {
                      return Uo(gi(n), t);
                    }, Be.xor = ao, Be.xorBy = co, Be.xorWith = fo, Be.zip = so, Be.zipObject = function (t, n) {
                      return vi(t || [], n || [], tr);
                    }, Be.zipObjectDeep = function (t, n) {
                      return vi(t || [], n || [], Qr);
                    }, Be.zipWith = lo, Be.entries = Ba, Be.entriesIn = qa, Be.extend = ma, Be.extendWith = ka, cc(Be, Be), Be.add = wc, Be.attempt = Xa, Be.camelCase = Wa, Be.capitalize = Na, Be.ceil = bc, Be.clamp = function (t, n, e) {
                      return e === i && (e = n, n = i), e !== i && (e = (e = da(e)) == e ? e : 0), n !== i && (n = (n = da(n)) == n ? n : 0), or(da(t), n, e);
                    }, Be.clone = function (t) {
                      return ar(t, 4);
                    }, Be.cloneDeep = function (t) {
                      return ar(t, 5);
                    }, Be.cloneDeepWith = function (t, n) {
                      return ar(t, 5, n = "function" == typeof n ? n : i);
                    }, Be.cloneWith = function (t, n) {
                      return ar(t, 4, n = "function" == typeof n ? n : i);
                    }, Be.conformsTo = function (t, n) {
                      return null == n || cr(t, n, Ra(n));
                    }, Be.deburr = $a, Be.defaultTo = function (t, n) {
                      return null == t || t != t ? n : t;
                    }, Be.divide = mc, Be.endsWith = function (t, n, e) {
                      t = wa(t), n = ai(n);
                      var r = t.length,
                          u = e = e === i ? r : or(ya(e), 0, r);
                      return (e -= n.length) >= 0 && t.slice(e, u) == n;
                    }, Be.eq = zo, Be.escape = function (t) {
                      return (t = wa(t)) && J.test(t) ? t.replace(V, Qn) : t;
                    }, Be.escapeRegExp = function (t) {
                      return (t = wa(t)) && et.test(t) ? t.replace(nt, "\\$&") : t;
                    }, Be.every = function (t, n, e) {
                      var r = Go(t) ? kn : pr;
                      return e && du(t, n, e) && (n = i), r(t, ou(n, 3));
                    }, Be.find = go, Be.findIndex = Nu, Be.findKey = function (t, n) {
                      return Rn(t, ou(n, 3), wr);
                    }, Be.findLast = _o, Be.findLastIndex = $u, Be.findLastKey = function (t, n) {
                      return Rn(t, ou(n, 3), br);
                    }, Be.floor = kc, Be.forEach = wo, Be.forEachRight = bo, Be.forIn = function (t, n) {
                      return null == t ? t : dr(t, ou(n, 3), Ea);
                    }, Be.forInRight = function (t, n) {
                      return null == t ? t : _r(t, ou(n, 3), Ea);
                    }, Be.forOwn = function (t, n) {
                      return t && wr(t, ou(n, 3));
                    }, Be.forOwnRight = function (t, n) {
                      return t && br(t, ou(n, 3));
                    }, Be.get = xa, Be.gt = Wo, Be.gte = No, Be.has = function (t, n) {
                      return null != t && pu(t, n, Cr);
                    }, Be.hasIn = ja, Be.head = Vu, Be.identity = ic, Be.includes = function (t, n, e, r) {
                      t = Zo(t) ? t : za(t), e = e && !r ? ya(e) : 0;
                      var i = t.length;
                      return e < 0 && (e = de(i + e, 0)), ca(t) ? e <= i && t.indexOf(n, e) > -1 : !!i && Mn(t, n, e) > -1;
                    }, Be.indexOf = function (t, n, e) {
                      var r = null == t ? 0 : t.length;
                      if (!r) return -1;
                      var i = null == e ? 0 : ya(e);
                      return i < 0 && (i = de(r + i, 0)), Mn(t, n, i);
                    }, Be.inRange = function (t, n, e) {
                      return n = va(n), e === i ? (e = n, n = 0) : e = va(e), function (t, n, e) {
                        return t >= _e(n, e) && t < de(n, e);
                      }(t = da(t), n, e);
                    }, Be.invoke = Pa, Be.isArguments = $o, Be.isArray = Go, Be.isArrayBuffer = Vo, Be.isArrayLike = Zo, Be.isArrayLikeObject = Jo, Be.isBoolean = function (t) {
                      return !0 === t || !1 === t || ea(t) && Fr(t) == d;
                    }, Be.isBuffer = Ko, Be.isDate = Ho, Be.isElement = function (t) {
                      return ea(t) && 1 === t.nodeType && !ua(t);
                    }, Be.isEmpty = function (t) {
                      if (null == t) return !0;
                      if (Zo(t) && (Go(t) || "string" == typeof t || "function" == typeof t.splice || Ko(t) || sa(t) || $o(t))) return !t.length;
                      var n = hu(t);
                      if (n == k || n == x) return !t.size;
                      if (mu(t)) return !Tr(t).length;

                      for (var e in t) {
                        if (Et.call(t, e)) return !1;
                      }

                      return !0;
                    }, Be.isEqual = function (t, n) {
                      return Pr(t, n);
                    }, Be.isEqualWith = function (t, n, e) {
                      var r = (e = "function" == typeof e ? e : i) ? e(t, n) : i;
                      return r === i ? Pr(t, n, i, e) : !!r;
                    }, Be.isError = Qo, Be.isFinite = function (t) {
                      return "number" == typeof t && ve(t);
                    }, Be.isFunction = Yo, Be.isInteger = Xo, Be.isLength = ta, Be.isMap = ra, Be.isMatch = function (t, n) {
                      return t === n || Rr(t, n, cu(n));
                    }, Be.isMatchWith = function (t, n, e) {
                      return e = "function" == typeof e ? e : i, Rr(t, n, cu(n), e);
                    }, Be.isNaN = function (t) {
                      return ia(t) && t != +t;
                    }, Be.isNative = function (t) {
                      if (bu(t)) throw new mt("Unsupported core-js use. Try https://npms.io/search?q=ponyfill.");
                      return Er(t);
                    }, Be.isNil = function (t) {
                      return null == t;
                    }, Be.isNull = function (t) {
                      return null === t;
                    }, Be.isNumber = ia, Be.isObject = na, Be.isObjectLike = ea, Be.isPlainObject = ua, Be.isRegExp = oa, Be.isSafeInteger = function (t) {
                      return Xo(t) && t >= -9007199254740991 && t <= l;
                    }, Be.isSet = aa, Be.isString = ca, Be.isSymbol = fa, Be.isTypedArray = sa, Be.isUndefined = function (t) {
                      return t === i;
                    }, Be.isWeakMap = function (t) {
                      return ea(t) && hu(t) == I;
                    }, Be.isWeakSet = function (t) {
                      return ea(t) && "[object WeakSet]" == Fr(t);
                    }, Be.join = function (t, n) {
                      return null == t ? "" : ye.call(t, n);
                    }, Be.kebabCase = Ga, Be.last = Hu, Be.lastIndexOf = function (t, n, e) {
                      var r = null == t ? 0 : t.length;
                      if (!r) return -1;
                      var u = r;
                      return e !== i && (u = (u = ya(e)) < 0 ? de(r + u, 0) : _e(u, r - 1)), n == n ? function (t, n, e) {
                        for (var r = e + 1; r--;) {
                          if (t[r] === n) return r;
                        }

                        return r;
                      }(t, n, u) : En(t, Ln, u, !0);
                    }, Be.lowerCase = Va, Be.lowerFirst = Za, Be.lt = la, Be.lte = ha, Be.max = function (t) {
                      return t && t.length ? vr(t, ic, Sr) : i;
                    }, Be.maxBy = function (t, n) {
                      return t && t.length ? vr(t, ou(n, 2), Sr) : i;
                    }, Be.mean = function (t) {
                      return Dn(t, ic);
                    }, Be.meanBy = function (t, n) {
                      return Dn(t, ou(n, 2));
                    }, Be.min = function (t) {
                      return t && t.length ? vr(t, ic, Lr) : i;
                    }, Be.minBy = function (t, n) {
                      return t && t.length ? vr(t, ou(n, 2), Lr) : i;
                    }, Be.stubArray = gc, Be.stubFalse = dc, Be.stubObject = function () {
                      return {};
                    }, Be.stubString = function () {
                      return "";
                    }, Be.stubTrue = function () {
                      return !0;
                    }, Be.multiply = Ac, Be.nth = function (t, n) {
                      return t && t.length ? zr(t, ya(n)) : i;
                    }, Be.noConflict = function () {
                      return on._ === this && (on._ = Ut), this;
                    }, Be.noop = fc, Be.now = xo, Be.pad = function (t, n, e) {
                      t = wa(t);
                      var r = (n = ya(n)) ? ue(t) : 0;
                      if (!n || r >= n) return t;
                      var i = (n - r) / 2;
                      return Wi(le(i), e) + t + Wi(se(i), e);
                    }, Be.padEnd = function (t, n, e) {
                      t = wa(t);
                      var r = (n = ya(n)) ? ue(t) : 0;
                      return n && r < n ? t + Wi(n - r, e) : t;
                    }, Be.padStart = function (t, n, e) {
                      t = wa(t);
                      var r = (n = ya(n)) ? ue(t) : 0;
                      return n && r < n ? Wi(n - r, e) + t : t;
                    }, Be.parseInt = function (t, n, e) {
                      return e || null == n ? n = 0 : n && (n = +n), be(wa(t).replace(rt, ""), n || 0);
                    }, Be.random = function (t, n, e) {
                      if (e && "boolean" != typeof e && du(t, n, e) && (n = e = i), e === i && ("boolean" == typeof n ? (e = n, n = i) : "boolean" == typeof t && (e = t, t = i)), t === i && n === i ? (t = 0, n = 1) : (t = va(t), n === i ? (n = t, t = 0) : n = va(n)), t > n) {
                        var r = t;
                        t = n, n = r;
                      }

                      if (e || t % 1 || n % 1) {
                        var u = me();
                        return _e(t + u * (n - t + nn("1e-" + ((u + "").length - 1))), n);
                      }

                      return Vr(t, n);
                    }, Be.reduce = function (t, n, e) {
                      var r = Go(t) ? jn : qn,
                          i = arguments.length < 3;
                      return r(t, ou(n, 4), e, i, lr);
                    }, Be.reduceRight = function (t, n, e) {
                      var r = Go(t) ? On : qn,
                          i = arguments.length < 3;
                      return r(t, ou(n, 4), e, i, hr);
                    }, Be.repeat = function (t, n, e) {
                      return n = (e ? du(t, n, e) : n === i) ? 1 : ya(n), Zr(wa(t), n);
                    }, Be.replace = function () {
                      var t = arguments,
                          n = wa(t[0]);
                      return t.length < 3 ? n : n.replace(t[1], t[2]);
                    }, Be.result = function (t, n, e) {
                      var r = -1,
                          u = (n = di(n, t)).length;

                      for (u || (u = 1, t = i); ++r < u;) {
                        var o = null == t ? i : t[Du(n[r])];
                        o === i && (r = u, o = e), t = Yo(o) ? o.call(t) : o;
                      }

                      return t;
                    }, Be.round = Fc, Be.runInContext = t, Be.sample = function (t) {
                      return (Go(t) ? He : Kr)(t);
                    }, Be.size = function (t) {
                      if (null == t) return 0;
                      if (Zo(t)) return ca(t) ? ue(t) : t.length;
                      var n = hu(t);
                      return n == k || n == x ? t.size : Tr(t).length;
                    }, Be.snakeCase = Ja, Be.some = function (t, n, e) {
                      var r = Go(t) ? In : ei;
                      return e && du(t, n, e) && (n = i), r(t, ou(n, 3));
                    }, Be.sortedIndex = function (t, n) {
                      return ri(t, n);
                    }, Be.sortedIndexBy = function (t, n, e) {
                      return ii(t, n, ou(e, 2));
                    }, Be.sortedIndexOf = function (t, n) {
                      var e = null == t ? 0 : t.length;

                      if (e) {
                        var r = ri(t, n);
                        if (r < e && zo(t[r], n)) return r;
                      }

                      return -1;
                    }, Be.sortedLastIndex = function (t, n) {
                      return ri(t, n, !0);
                    }, Be.sortedLastIndexBy = function (t, n, e) {
                      return ii(t, n, ou(e, 2), !0);
                    }, Be.sortedLastIndexOf = function (t, n) {
                      if (null != t && t.length) {
                        var e = ri(t, n, !0) - 1;
                        if (zo(t[e], n)) return e;
                      }

                      return -1;
                    }, Be.startCase = Ka, Be.startsWith = function (t, n, e) {
                      return t = wa(t), e = null == e ? 0 : or(ya(e), 0, t.length), n = ai(n), t.slice(e, e + n.length) == n;
                    }, Be.subtract = Sc, Be.sum = function (t) {
                      return t && t.length ? zn(t, ic) : 0;
                    }, Be.sumBy = function (t, n) {
                      return t && t.length ? zn(t, ou(n, 2)) : 0;
                    }, Be.template = function (t, n, e) {
                      var r = Be.templateSettings;
                      e && du(t, n, e) && (n = i), t = wa(t), n = ka({}, n, r, Hi);
                      var u,
                          o,
                          a = ka({}, n.imports, r.imports, Hi),
                          c = Ra(a),
                          f = Gn(a, c),
                          s = 0,
                          l = n.interpolate || wt,
                          h = "__p += '",
                          p = St((n.escape || wt).source + "|" + l.source + "|" + (l === Q ? lt : wt).source + "|" + (n.evaluate || wt).source + "|$", "g"),
                          v = "//# sourceURL=" + (Et.call(n, "sourceURL") ? (n.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++Qt + "]") + "\n";
                      t.replace(p, function (n, e, r, i, a, c) {
                        return r || (r = i), h += t.slice(s, c).replace(bt, Yn), e && (u = !0, h += "' +\n__e(" + e + ") +\n'"), a && (o = !0, h += "';\n" + a + ";\n__p += '"), r && (h += "' +\n((__t = (" + r + ")) == null ? '' : __t) +\n'"), s = c + n.length, n;
                      }), h += "';\n";
                      var y = Et.call(n, "variable") && n.variable;

                      if (y) {
                        if (ft.test(y)) throw new mt("Invalid `variable` option passed into `_.template`");
                      } else h = "with (obj) {\n" + h + "\n}\n";

                      h = (o ? h.replace(W, "") : h).replace(N, "$1").replace($, "$1;"), h = "function(" + (y || "obj") + ") {\n" + (y ? "" : "obj || (obj = {});\n") + "var __t, __p = ''" + (u ? ", __e = _.escape" : "") + (o ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n" : ";\n") + h + "return __p\n}";
                      var g = Xa(function () {
                        return kt(c, v + "return " + h).apply(i, f);
                      });
                      if (g.source = h, Qo(g)) throw g;
                      return g;
                    }, Be.times = function (t, n) {
                      if ((t = ya(t)) < 1 || t > l) return [];

                      var e = p,
                          r = _e(t, p);

                      n = ou(n), t -= p;

                      for (var i = Wn(r, n); ++e < t;) {
                        n(e);
                      }

                      return i;
                    }, Be.toFinite = va, Be.toInteger = ya, Be.toLength = ga, Be.toLower = function (t) {
                      return wa(t).toLowerCase();
                    }, Be.toNumber = da, Be.toSafeInteger = function (t) {
                      return t ? or(ya(t), -9007199254740991, l) : 0 === t ? t : 0;
                    }, Be.toString = wa, Be.toUpper = function (t) {
                      return wa(t).toUpperCase();
                    }, Be.trim = function (t, n, e) {
                      if ((t = wa(t)) && (e || n === i)) return Nn(t);
                      if (!t || !(n = ai(n))) return t;
                      var r = oe(t),
                          u = oe(n);
                      return wi(r, Zn(r, u), Jn(r, u) + 1).join("");
                    }, Be.trimEnd = function (t, n, e) {
                      if ((t = wa(t)) && (e || n === i)) return t.slice(0, ae(t) + 1);
                      if (!t || !(n = ai(n))) return t;
                      var r = oe(t);
                      return wi(r, 0, Jn(r, oe(n)) + 1).join("");
                    }, Be.trimStart = function (t, n, e) {
                      if ((t = wa(t)) && (e || n === i)) return t.replace(rt, "");
                      if (!t || !(n = ai(n))) return t;
                      var r = oe(t);
                      return wi(r, Zn(r, oe(n))).join("");
                    }, Be.truncate = function (t, n) {
                      var e = 30,
                          r = "...";

                      if (na(n)) {
                        var u = "separator" in n ? n.separator : u;
                        e = "length" in n ? ya(n.length) : e, r = "omission" in n ? ai(n.omission) : r;
                      }

                      var o = (t = wa(t)).length;

                      if (Xn(t)) {
                        var a = oe(t);
                        o = a.length;
                      }

                      if (e >= o) return t;
                      var c = e - ue(r);
                      if (c < 1) return r;
                      var f = a ? wi(a, 0, c).join("") : t.slice(0, c);
                      if (u === i) return f + r;

                      if (a && (c += f.length - c), oa(u)) {
                        if (t.slice(c).search(u)) {
                          var s,
                              l = f;

                          for (u.global || (u = St(u.source, wa(ht.exec(u)) + "g")), u.lastIndex = 0; s = u.exec(l);) {
                            var h = s.index;
                          }

                          f = f.slice(0, h === i ? c : h);
                        }
                      } else if (t.indexOf(ai(u), c) != c) {
                        var p = f.lastIndexOf(u);
                        p > -1 && (f = f.slice(0, p));
                      }

                      return f + r;
                    }, Be.unescape = function (t) {
                      return (t = wa(t)) && Z.test(t) ? t.replace(G, ce) : t;
                    }, Be.uniqueId = function (t) {
                      var n = ++Mt;
                      return wa(t) + n;
                    }, Be.upperCase = Ha, Be.upperFirst = Qa, Be.each = wo, Be.eachRight = bo, Be.first = Vu, cc(Be, (_c = {}, wr(Be, function (t, n) {
                      Et.call(Be.prototype, n) || (_c[n] = t);
                    }), _c), {
                      chain: !1
                    }), Be.VERSION = "4.17.21", bn(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function (t) {
                      Be[t].placeholder = Be;
                    }), bn(["drop", "take"], function (t, n) {
                      Ne.prototype[t] = function (e) {
                        e = e === i ? 1 : de(ya(e), 0);
                        var r = this.__filtered__ && !n ? new Ne(this) : this.clone();
                        return r.__filtered__ ? r.__takeCount__ = _e(e, r.__takeCount__) : r.__views__.push({
                          size: _e(e, p),
                          type: t + (r.__dir__ < 0 ? "Right" : "")
                        }), r;
                      }, Ne.prototype[t + "Right"] = function (n) {
                        return this.reverse()[t](n).reverse();
                      };
                    }), bn(["filter", "map", "takeWhile"], function (t, n) {
                      var e = n + 1,
                          r = 1 == e || 3 == e;

                      Ne.prototype[t] = function (t) {
                        var n = this.clone();
                        return n.__iteratees__.push({
                          iteratee: ou(t, 3),
                          type: e
                        }), n.__filtered__ = n.__filtered__ || r, n;
                      };
                    }), bn(["head", "last"], function (t, n) {
                      var e = "take" + (n ? "Right" : "");

                      Ne.prototype[t] = function () {
                        return this[e](1).value()[0];
                      };
                    }), bn(["initial", "tail"], function (t, n) {
                      var e = "drop" + (n ? "" : "Right");

                      Ne.prototype[t] = function () {
                        return this.__filtered__ ? new Ne(this) : this[e](1);
                      };
                    }), Ne.prototype.compact = function () {
                      return this.filter(ic);
                    }, Ne.prototype.find = function (t) {
                      return this.filter(t).head();
                    }, Ne.prototype.findLast = function (t) {
                      return this.reverse().find(t);
                    }, Ne.prototype.invokeMap = Jr(function (t, n) {
                      return "function" == typeof t ? new Ne(this) : this.map(function (e) {
                        return Or(e, t, n);
                      });
                    }), Ne.prototype.reject = function (t) {
                      return this.filter(Lo(ou(t)));
                    }, Ne.prototype.slice = function (t, n) {
                      t = ya(t);
                      var e = this;
                      return e.__filtered__ && (t > 0 || n < 0) ? new Ne(e) : (t < 0 ? e = e.takeRight(-t) : t && (e = e.drop(t)), n !== i && (e = (n = ya(n)) < 0 ? e.dropRight(-n) : e.take(n - t)), e);
                    }, Ne.prototype.takeRightWhile = function (t) {
                      return this.reverse().takeWhile(t).reverse();
                    }, Ne.prototype.toArray = function () {
                      return this.take(p);
                    }, wr(Ne.prototype, function (t, n) {
                      var e = /^(?:filter|find|map|reject)|While$/.test(n),
                          r = /^(?:head|last)$/.test(n),
                          u = Be[r ? "take" + ("last" == n ? "Right" : "") : n],
                          o = r || /^find/.test(n);
                      u && (Be.prototype[n] = function () {
                        var n = this.__wrapped__,
                            a = r ? [1] : arguments,
                            c = n instanceof Ne,
                            f = a[0],
                            s = c || Go(n),
                            l = function l(t) {
                          var n = u.apply(Be, xn([t], a));
                          return r && h ? n[0] : n;
                        };

                        s && e && "function" == typeof f && 1 != f.length && (c = s = !1);
                        var h = this.__chain__,
                            p = !!this.__actions__.length,
                            v = o && !h,
                            y = c && !p;

                        if (!o && s) {
                          n = y ? n : new Ne(this);
                          var g = t.apply(n, a);
                          return g.__actions__.push({
                            func: po,
                            args: [l],
                            thisArg: i
                          }), new We(g, h);
                        }

                        return v && y ? t.apply(this, a) : (g = this.thru(l), v ? r ? g.value()[0] : g.value() : g);
                      });
                    }), bn(["pop", "push", "shift", "sort", "splice", "unshift"], function (t) {
                      var n = jt[t],
                          e = /^(?:push|sort|unshift)$/.test(t) ? "tap" : "thru",
                          r = /^(?:pop|shift)$/.test(t);

                      Be.prototype[t] = function () {
                        var t = arguments;

                        if (r && !this.__chain__) {
                          var i = this.value();
                          return n.apply(Go(i) ? i : [], t);
                        }

                        return this[e](function (e) {
                          return n.apply(Go(e) ? e : [], t);
                        });
                      };
                    }), wr(Ne.prototype, function (t, n) {
                      var e = Be[n];

                      if (e) {
                        var r = e.name + "";
                        Et.call(Ie, r) || (Ie[r] = []), Ie[r].push({
                          name: n,
                          func: e
                        });
                      }
                    }), Ie[Ui(i, 2).name] = [{
                      name: "wrapper",
                      func: i
                    }], Ne.prototype.clone = function () {
                      var t = new Ne(this.__wrapped__);
                      return t.__actions__ = xi(this.__actions__), t.__dir__ = this.__dir__, t.__filtered__ = this.__filtered__, t.__iteratees__ = xi(this.__iteratees__), t.__takeCount__ = this.__takeCount__, t.__views__ = xi(this.__views__), t;
                    }, Ne.prototype.reverse = function () {
                      if (this.__filtered__) {
                        var t = new Ne(this);
                        t.__dir__ = -1, t.__filtered__ = !0;
                      } else (t = this.clone()).__dir__ *= -1;

                      return t;
                    }, Ne.prototype.value = function () {
                      var t = this.__wrapped__.value(),
                          n = this.__dir__,
                          e = Go(t),
                          r = n < 0,
                          i = e ? t.length : 0,
                          u = function (t, n, e) {
                        for (var r = -1, i = e.length; ++r < i;) {
                          var u = e[r],
                              o = u.size;

                          switch (u.type) {
                            case "drop":
                              t += o;
                              break;

                            case "dropRight":
                              n -= o;
                              break;

                            case "take":
                              n = _e(n, t + o);
                              break;

                            case "takeRight":
                              t = de(t, n - o);
                          }
                        }

                        return {
                          start: t,
                          end: n
                        };
                      }(0, i, this.__views__),
                          o = u.start,
                          a = u.end,
                          c = a - o,
                          f = r ? a : o - 1,
                          s = this.__iteratees__,
                          l = s.length,
                          h = 0,
                          p = _e(c, this.__takeCount__);

                      if (!e || !r && i == c && p == c) return hi(t, this.__actions__);
                      var v = [];

                      t: for (; c-- && h < p;) {
                        for (var y = -1, g = t[f += n]; ++y < l;) {
                          var d = s[y],
                              _ = d.iteratee,
                              w = d.type,
                              b = _(g);

                          if (2 == w) g = b;else if (!b) {
                            if (1 == w) continue t;
                            break t;
                          }
                        }

                        v[h++] = g;
                      }

                      return v;
                    }, Be.prototype.at = vo, Be.prototype.chain = function () {
                      return ho(this);
                    }, Be.prototype.commit = function () {
                      return new We(this.value(), this.__chain__);
                    }, Be.prototype.next = function () {
                      this.__values__ === i && (this.__values__ = pa(this.value()));
                      var t = this.__index__ >= this.__values__.length;
                      return {
                        done: t,
                        value: t ? i : this.__values__[this.__index__++]
                      };
                    }, Be.prototype.plant = function (t) {
                      for (var n, e = this; e instanceof ze;) {
                        var r = Bu(e);
                        r.__index__ = 0, r.__values__ = i, n ? u.__wrapped__ = r : n = r;
                        var u = r;
                        e = e.__wrapped__;
                      }

                      return u.__wrapped__ = t, n;
                    }, Be.prototype.reverse = function () {
                      var t = this.__wrapped__;

                      if (t instanceof Ne) {
                        var n = t;
                        return this.__actions__.length && (n = new Ne(this)), (n = n.reverse()).__actions__.push({
                          func: po,
                          args: [to],
                          thisArg: i
                        }), new We(n, this.__chain__);
                      }

                      return this.thru(to);
                    }, Be.prototype.toJSON = Be.prototype.valueOf = Be.prototype.value = function () {
                      return hi(this.__wrapped__, this.__actions__);
                    }, Be.prototype.first = Be.prototype.head, an && (Be.prototype[an] = function () {
                      return this;
                    }), Be;
                  }();

                  on._ = fe, (r = function () {
                    return fe;
                  }.call(n, e, n, t)) === i || (t.exports = r);
                }.call(this);
              },
              654: function _(t, n, e) {
                var r = e(379),
                    i = e(426);
                "string" == typeof (i = i.__esModule ? i["default"] : i) && (i = [[t.id, i, ""]]);
                r(i, {
                  insert: "head",
                  singleton: !1
                }), t.exports = i.locals || {};
              },
              379: function _(t, n, e) {
                var r,
                    i = function () {
                  var t = {};
                  return function (n) {
                    if (void 0 === t[n]) {
                      var e = document.querySelector(n);
                      if (window.HTMLIFrameElement && e instanceof window.HTMLIFrameElement) try {
                        e = e.contentDocument.head;
                      } catch (t) {
                        e = null;
                      }
                      t[n] = e;
                    }

                    return t[n];
                  };
                }(),
                    u = [];

                function o(t) {
                  for (var n = -1, e = 0; e < u.length; e++) {
                    if (u[e].identifier === t) {
                      n = e;
                      break;
                    }
                  }

                  return n;
                }

                function a(t, n) {
                  for (var e = {}, r = [], i = 0; i < t.length; i++) {
                    var a = t[i],
                        c = n.base ? a[0] + n.base : a[0],
                        f = e[c] || 0,
                        s = "".concat(c, " ").concat(f);
                    e[c] = f + 1;
                    var l = o(s),
                        h = {
                      css: a[1],
                      media: a[2],
                      sourceMap: a[3]
                    };
                    -1 !== l ? (u[l].references++, u[l].updater(h)) : u.push({
                      identifier: s,
                      updater: y(h, n),
                      references: 1
                    }), r.push(s);
                  }

                  return r;
                }

                function c(t) {
                  var n = document.createElement("style"),
                      r = t.attributes || {};

                  if (void 0 === r.nonce) {
                    var u = e.nc;
                    u && (r.nonce = u);
                  }

                  if (Object.keys(r).forEach(function (t) {
                    n.setAttribute(t, r[t]);
                  }), "function" == typeof t.insert) t.insert(n);else {
                    var o = i(t.insert || "head");
                    if (!o) throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
                    o.appendChild(n);
                  }
                  return n;
                }

                var f,
                    s = (f = [], function (t, n) {
                  return f[t] = n, f.filter(Boolean).join("\n");
                });

                function l(t, n, e, r) {
                  var i = e ? "" : r.media ? "@media ".concat(r.media, " {").concat(r.css, "}") : r.css;
                  if (t.styleSheet) t.styleSheet.cssText = s(n, i);else {
                    var u = document.createTextNode(i),
                        o = t.childNodes;
                    o[n] && t.removeChild(o[n]), o.length ? t.insertBefore(u, o[n]) : t.appendChild(u);
                  }
                }

                function h(t, n, e) {
                  var r = e.css,
                      i = e.media,
                      u = e.sourceMap;
                  if (i ? t.setAttribute("media", i) : t.removeAttribute("media"), u && "undefined" != typeof btoa && (r += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(u)))), " */")), t.styleSheet) t.styleSheet.cssText = r;else {
                    for (; t.firstChild;) {
                      t.removeChild(t.firstChild);
                    }

                    t.appendChild(document.createTextNode(r));
                  }
                }

                var p = null,
                    v = 0;

                function y(t, n) {
                  var e, r, i;

                  if (n.singleton) {
                    var u = v++;
                    e = p || (p = c(n)), r = l.bind(null, e, u, !1), i = l.bind(null, e, u, !0);
                  } else e = c(n), r = h.bind(null, e, n), i = function i() {
                    !function (t) {
                      if (null === t.parentNode) return !1;
                      t.parentNode.removeChild(t);
                    }(e);
                  };

                  return r(t), function (n) {
                    if (n) {
                      if (n.css === t.css && n.media === t.media && n.sourceMap === t.sourceMap) return;
                      r(t = n);
                    } else i();
                  };
                }

                t.exports = function (t, n) {
                  (n = n || {}).singleton || "boolean" == typeof n.singleton || (n.singleton = (void 0 === r && (r = Boolean(window && document && document.all && !window.atob)), r));
                  var e = a(t = t || [], n);
                  return function (t) {
                    if (t = t || [], "[object Array]" === Object.prototype.toString.call(t)) {
                      for (var r = 0; r < e.length; r++) {
                        var i = o(e[r]);
                        u[i].references--;
                      }

                      for (var c = a(t, n), f = 0; f < e.length; f++) {
                        var s = o(e[f]);
                        0 === u[s].references && (u[s].updater(), u.splice(s, 1));
                      }

                      e = c;
                    }
                  };
                };
              },
              138: function _(t, n, e) {
                e.d(n, {
                  Z: function Z() {
                    return u;
                  }
                }), e(486), e(654);
                var r = e(197);
                console.warn("Production mode, console cleared"), console.log = function () {};

                var i = /*#__PURE__*/function () {
                  function i() {}

                  var _proto = i.prototype;

                  _proto.MainGameClosure = function MainGameClosure() {
                    r.Z.init({
                      appId: "vn.momo.web.momojump",
                      name: "vn.momo.web.momojump",
                      displayName: "Momo Jump",
                      client: {
                        web: {
                          hostId: "vn.momo.web.momojump",
                          accessToken: "U2FsdGVkX1/zU8zvdnuylO4ChQgLK9FDQ0uYTxLswidYy5PsrfjZDMFfWmqJfoMGwwLVZ2ffRHDpkpI1MOCkq4Dro61iyAzVZK/AFKdmItA="
                        }
                      },
                      configuration_version: 1
                    }), window.addEventListener("getUserProfile", function () {
                      r.Z.getProfile(function (t) {
                        var n = new CustomEvent("userProfileRes", {
                          detail: t
                        });
                        window.dispatchEvent(n);
                      });
                    }), window.addEventListener("getAvatarEndPoint", function (t) {
                      var n = t.detail;
                      r.Z.getContactAvatar(n, function (t) {
                        var n = new CustomEvent("AvatarEndPointRes", {
                          detail: t
                        });
                        window.dispatchEvent(n);
                      });
                    }), window.addEventListener("ExitGame", function () {
                      console.log("exit game"), r.Z.dismiss();
                    }), window.addEventListener("message", function (t) {
                      if (console.log(">>>" + t), t && t.data && "backPress" == t.data) {
                        var _t2 = new CustomEvent("BackKeyPressed", {});

                        window.dispatchEvent(_t2);
                      }
                    });
                  };

                  _proto.OnReady = function OnReady() {
                    this.MainGameClosure();
                  };

                  return i;
                }();

                window.Index = i, window.MaxApi = r.Z;
                var u = i;
              },
              51: function _(t) {
                t.exports = JSON.parse('{"name":"@momo-platform/api","apiVersion":78}');
              }
            },
                n = {};

            function e(r) {
              var i = n[r];
              if (void 0 !== i) return i.exports;
              var u = n[r] = {
                id: r,
                loaded: !1,
                exports: {}
              };
              return t[r].call(u.exports, u, u.exports, e), u.loaded = !0, u.exports;
            }

            e.n = function (t) {
              var n = t && t.__esModule ? function () {
                return t["default"];
              } : function () {
                return t;
              };
              return e.d(n, {
                a: n
              }), n;
            }, e.d = function (t, n) {
              for (var r in n) {
                e.o(n, r) && !e.o(t, r) && Object.defineProperty(t, r, {
                  enumerable: !0,
                  get: n[r]
                });
              }
            }, e.g = function () {
              if ("object" == typeof globalThis) return globalThis;

              try {
                return this || new Function("return this")();
              } catch (t) {
                if ("object" == typeof window) return window;
              }
            }(), e.o = function (t, n) {
              return Object.prototype.hasOwnProperty.call(t, n);
            }, e.nmd = function (t) {
              return t.paths = [], t.children || (t.children = []), t;
            }, new (e(138).Z)().OnReady(), window.addEventListener("resize", function (t) {
              document.getElementById("canvasContainer");
            }, !1);
          })();
        })();

        _cjsExports = exports('default', module.exports);
      });

      var __cjsMetaURL = exports('__cjsMetaURL', module.meta.url);
    }
  };
});

System.register("chunks:///_virtual/shaking.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './MaxApiUtils.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _defineProperty, cclegacy, _decorator, Label, Button, Component, MaxApiUtils;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _defineProperty = module.defineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Label = module.Label;
      Button = module.Button;
      Component = module.Component;
    }, function (module) {
      MaxApiUtils = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _temp;

      cclegacy._RF.push({}, "16defT7GaFCZLDEIsnoHFao", "shaking", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var Shaking = exports('Shaking', (_dec = ccclass('Shaking'), _dec2 = property(Label), _dec3 = property(Button), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Shaking, _Component);

        function Shaking() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_assertThisInitialized(_this), "counterLable", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "btnReset", _descriptor2, _assertThisInitialized(_this));

          _defineProperty(_assertThisInitialized(_this), "counter", 0);

          return _this;
        }

        var _proto = Shaking.prototype;

        _proto.start = function start() {
          if (window.OnHideLoading) {
            window.OnHideLoading();
          }

          this.btnReset.node.on("click", this.onResetClick, this);
          setTimeout(this.init, 3000);
        };

        _proto.init = function init() {
          MaxApiUtils.RegisterShaking(this.onShaking.bind(this));
        };

        _proto.onShaking = function onShaking() {
          this.counter++;
          this.counterLable.string = this.counter.toString();
        };

        _proto.onResetClick = function onResetClick() {
          this.counter = 0;
        };

        return Shaking;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "counterLable", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "btnReset", [_dec3], {
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

System.register("chunks:///_virtual/GameMgr.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './ProtobufDefine.ts', './NetworkBrigde.ts'], function (exports) {
  'use strict';

  var _inheritsLoose, _defineProperty, _assertThisInitialized, cclegacy, _decorator, Component, CMD, NetworkBrigde;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _defineProperty = module.defineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Component = module.Component;
    }, function (module) {
      CMD = module.CMD;
    }, function (module) {
      NetworkBrigde = module.NetworkBrigde;
    }],
    execute: function () {
      var _dec, _class, _temp;

      cclegacy._RF.push({}, "23526LZJ8FFNLKcD+3Pr7aj", "GameMgr", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var State;

      (function (State) {
        State[State["None"] = 0] = "None";
        State[State["Init"] = 1] = "Init";
        State[State["Connecting"] = 2] = "Connecting";
        State[State["Idle"] = 3] = "Idle";
      })(State || (State = {}));

      var GameMgr = exports('GameMgr', (_dec = ccclass('GameMgr'), _dec(_class = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(GameMgr, _Component);

        function GameMgr() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _defineProperty(_assertThisInitialized(_this), "state", State.None);

          _defineProperty(_assertThisInitialized(_this), "networkBrigde", new NetworkBrigde());

          return _this;
        }

        var _proto = GameMgr.prototype;

        _proto.onLoad = function onLoad() {};

        _proto.start = function start() {
          this.SetState(State.Init);
        };

        _proto.onDestroy = function onDestroy() {
          this.networkBrigde.disconnect();
        };

        _proto.SetState = function SetState(state) {
          console.log("[GameMgr] state: " + State[this.state] + " => " + State[state]);
          this.state = state;

          switch (state) {
            case State.Init:
              this.InitNetwork();
              this.SetState(State.Connecting);
              break;

            case State.Connecting:
              break;

            case State.Idle:
              this.networkBrigde.ping();
              break;
          }
        };

        _proto.InitNetwork = function InitNetwork() {
          var _this2 = this;

          this.networkBrigde.connect();

          this.networkBrigde.onOpen = function () {
            _this2.SetState(State.Idle);
          };

          this.networkBrigde.onMessage = this.OnMessage.bind(this);
        };

        _proto.OnMessage = function OnMessage(cmd, data) {
          switch (cmd) {
            case CMD.CMD_PING:
              break;
          }
        };

        return GameMgr;
      }(Component), _temp)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ProtobufDefine.ts", ['cc'], function (exports) {
  'use strict';

  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      exports({
        CMD: void 0,
        ERROR: void 0,
        USER_STATUS: void 0
      });

      cclegacy._RF.push({}, "2654dcT1zVI3bQeONaz1Nbv", "ProtobufDefine", undefined);
      /** CMD enum. */


      var CMD;
      /** ERROR enum. */

      (function (CMD) {
        CMD[CMD["CMD_UNKNOW"] = 0] = "CMD_UNKNOW";
        CMD[CMD["CMD_LOGIN"] = 100] = "CMD_LOGIN";
        CMD[CMD["CMD_RENAME"] = 101] = "CMD_RENAME";
        CMD[CMD["CMD_PING"] = 102] = "CMD_PING";
        CMD[CMD["CMD_CHAT"] = 201] = "CMD_CHAT";
        CMD[CMD["CMD_NEW_GAME"] = 300] = "CMD_NEW_GAME";
        CMD[CMD["CMD_JOIN_GAME"] = 301] = "CMD_JOIN_GAME";
        CMD[CMD["CMD_MOVE"] = 302] = "CMD_MOVE";
      })(CMD || (CMD = exports('CMD', {})));

      var ERROR;
      /** USER_STATUS enum. */

      (function (ERROR) {
        ERROR[ERROR["ERROR_NONE"] = 0] = "ERROR_NONE";
        ERROR[ERROR["ERROR_INVALID_ID"] = 1] = "ERROR_INVALID_ID";
        ERROR[ERROR["ERROR_ROOM_IS_FULL"] = 2] = "ERROR_ROOM_IS_FULL";
        ERROR[ERROR["ERROR_ROOM_INVALID_ID"] = 3] = "ERROR_ROOM_INVALID_ID";
        ERROR[ERROR["ERROR_POSITION_INVALID"] = 4] = "ERROR_POSITION_INVALID";
        ERROR[ERROR["ERROR_UNSUPPORTED_CMD"] = 127] = "ERROR_UNSUPPORTED_CMD";
      })(ERROR || (ERROR = exports('ERROR', {})));

      var USER_STATUS;

      (function (USER_STATUS) {
        USER_STATUS[USER_STATUS["USER_STATUS_DISCONNECTED"] = 0] = "USER_STATUS_DISCONNECTED";
        USER_STATUS[USER_STATUS["USER_STATUS_CONNECTED"] = 1] = "USER_STATUS_CONNECTED";
      })(USER_STATUS || (USER_STATUS = exports('USER_STATUS', {})));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/NetworkDefine.ts", ['cc'], function (exports) {
  'use strict';

  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      exports({
        NetworkCMD: void 0,
        NetworkDefine: void 0
      });

      cclegacy._RF.push({}, "2af94HN97RHnL27I4ClZS71", "NetworkDefine", undefined);

      var NetworkDefine;

      (function (NetworkDefine) {
        NetworkDefine["URL"] = "wss://s.dev.mservice.io/tigers-game-gomoku-service/gomoku";
      })(NetworkDefine || (NetworkDefine = exports('NetworkDefine', {})));

      var NetworkCMD;

      (function (NetworkCMD) {
        NetworkCMD["Ping"] = "PING";
      })(NetworkCMD || (NetworkCMD = exports('NetworkCMD', {})));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Input.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './Define.ts'], function (exports) {
  'use strict';

  var _defineProperty, _inheritsLoose, _createClass, _assertThisInitialized, cclegacy, _decorator, Node, Component, TouchState;

  return {
    setters: [function (module) {
      _defineProperty = module.defineProperty;
      _inheritsLoose = module.inheritsLoose;
      _createClass = module.createClass;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Component = module.Component;
    }, function (module) {
      TouchState = module.TouchState;
    }],
    execute: function () {
      var _dec, _class, _class2, _temp;

      cclegacy._RF.push({}, "47b09oXRZdCr7sUwkusXwAq", "Input", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
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
        }]);

        return Input;
      }(Component), _defineProperty(_class2, "instance", null), _temp)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Define.ts", ['cc'], function (exports) {
  'use strict';

  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      exports('TouchState', void 0);

      cclegacy._RF.push({}, "59cdciLEKNF6JfhKVhOZ2pu", "Define", undefined);

      var TouchState;

      (function (TouchState) {
        TouchState[TouchState["None"] = 0] = "None";
        TouchState[TouchState["Down"] = 1] = "Down";
        TouchState[TouchState["Press"] = 2] = "Press";
        TouchState[TouchState["Up"] = 3] = "Up";
      })(TouchState || (TouchState = exports('TouchState', {})));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/CameraFollow.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _defineProperty, cclegacy, _decorator, Node, Vec3, Component;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _defineProperty = module.defineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Vec3 = module.Vec3;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor, _temp;

      cclegacy._RF.push({}, "5a02dY0DwhDo4SDHqcWY/Ha", "CameraFollow", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var CameraFollow = exports('CameraFollow', (_dec = ccclass('CameraFollow'), _dec2 = property(Node), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(CameraFollow, _Component);

        function CameraFollow() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_assertThisInitialized(_this), "target", _descriptor, _assertThisInitialized(_this));

          _defineProperty(_assertThisInitialized(_this), "offset", new Vec3());

          return _this;
        }

        var _proto = CameraFollow.prototype;

        _proto.start = function start() {
          this.offset = this.node.position.clone().subtract(this.target.position);
        };

        _proto.update = function update(dt) {
          // this.node.position = this.target.position.clone().add(this.offset);
          var targetPosition = this.target.position.clone().add(this.offset);
          Vec3.lerp(targetPosition, this.node.position, targetPosition, dt * 10);
          this.node.position = targetPosition;
        };

        return CameraFollow;
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

System.register("chunks:///_virtual/Player.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './Input.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _defineProperty, cclegacy, _decorator, Animation, Vec3, math, Component, Input;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _defineProperty = module.defineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Animation = module.Animation;
      Vec3 = module.Vec3;
      math = module.math;
      Component = module.Component;
    }, function (module) {
      Input = module.Input;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor, _temp;

      cclegacy._RF.push({}, "66444v1AmdGj7lSyQFegk+m", "Player", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var State;

      (function (State) {
        State[State["None"] = 0] = "None";
        State[State["Init"] = 1] = "Init";
        State[State["Idle"] = 2] = "Idle";
        State[State["Walk"] = 3] = "Walk";
        State[State["Run"] = 4] = "Run";
        State[State["Win"] = 5] = "Win";
        State[State["Lose"] = 6] = "Lose";
      })(State || (State = {}));

      var Player = exports('Player', (_dec = ccclass('Player'), _dec2 = property(Animation), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Player, _Component);

        function Player() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_assertThisInitialized(_this), "animation", _descriptor, _assertThisInitialized(_this));

          _defineProperty(_assertThisInitialized(_this), "speed", 10);

          _defineProperty(_assertThisInitialized(_this), "direction", new Vec3(0, 0, -1));

          _defineProperty(_assertThisInitialized(_this), "state", State.None);

          _defineProperty(_assertThisInitialized(_this), "position", new Vec3());

          return _this;
        }

        var _proto = Player.prototype;

        _proto.start = function start() {
          this.SetState(State.Init);
        };

        _proto.update = function update(dt) {
          switch (this.state) {
            case State.Init:
              break;

            case State.Idle:
              if (Input.IsTouchDown) {
                this.SetState(State.Run);
              }

              break;

            case State.Run:
              this.node.getPosition(this.position);
              this.position.add(this.direction.normalize().multiplyScalar(this.speed * dt));
              this.node.position = this.position;

              if (Input.IsTouchUp) {
                this.SetState(State.Idle);
              }

              break;
          }
        };

        _proto.SetState = function SetState(state) {
          if (this.state != state) {
            // console.log(`[Player] state: ${State[this.state]} => ${State[state]}`);
            this.state = state;

            switch (state) {
              case State.Init:
                this.SetState(State.Idle);
                break;

              case State.Idle:
                this.PlayAnimIdle();
                break;

              case State.Run:
                this.animation.play("Running");
                break;

              case State.Walk:
                break;
            }
          }
        };

        _proto.PlayAnimIdle = function PlayAnimIdle() {
          this.animation.play("Idle" + math.randomRangeInt(0, 5));
        };

        return Player;
      }(Component), _temp), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "animation", [_dec2], {
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

System.register("chunks:///_virtual/NetworkBrigde.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './NetworkDefine.ts', './Protobuf.ts', './ProtobufDefine.ts'], function (exports) {
  'use strict';

  var _createClass, _defineProperty, _asyncToGenerator, cclegacy, _decorator, NetworkDefine, Protobuf, CMD;

  return {
    setters: [function (module) {
      _createClass = module.createClass;
      _defineProperty = module.defineProperty;
      _asyncToGenerator = module.asyncToGenerator;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
    }, function (module) {
      NetworkDefine = module.NetworkDefine;
    }, function (module) {
      Protobuf = module.Protobuf;
    }, function (module) {
      CMD = module.CMD;
    }],
    execute: function () {
      var _dec, _class, _temp;

      cclegacy._RF.push({}, "7977cTNaeRKkqxQx8E3V1id", "NetworkBrigde", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var NetworkBrigde = exports('NetworkBrigde', (_dec = ccclass('NetworkBrigde'), _dec(_class = (_temp = /*#__PURE__*/function () {
        function NetworkBrigde() {
          _defineProperty(this, "ws", null);

          _defineProperty(this, "isConnected", false);

          _defineProperty(this, "payloadCounter", 0);

          _defineProperty(this, "onOpen", null);

          _defineProperty(this, "onMessage", null);

          _defineProperty(this, "onError", null);

          _defineProperty(this, "onClose", null);
        }

        var _proto = NetworkBrigde.prototype;

        _proto.connect = function connect() {
          if (this.ws == null) {
            this.ws = new WebSocket(NetworkDefine.URL);
            this.ws.onopen = this.onopen.bind(this);
            this.ws.onmessage = this.onmessage.bind(this);
            this.ws.onerror = this.onerror.bind(this);
            this.ws.onclose = this.onclose.bind(this);
          }
        };

        _proto.disconnect = function disconnect() {
          if (this.isConnected) {
            this.ws.close();
            this.ws = null;
          }
        };

        _proto.onopen = function onopen(event) {
          this.isConnected = true;

          if (this.onOpen) {
            this.onOpen();
          }

          console.log("ws is connected!");
        };

        _proto.onmessage = function onmessage(event) {
          var _this = this;

          this.decodeMsgData(event.data).then(function (msg) {
            if (_this.onMessage) {
              _this.onMessage(msg.cmd, msg.data);
            }
          });
        };

        _proto.onerror = function onerror(event) {
          if (this.onError) {
            this.onError();
          }
        };

        _proto.onclose = function onclose(event) {
          if (this.onClose) {
            this.onClose();
          }
        };

        _proto.send = function send(data) {
          if (this.isConnected) {
            this.ws.send(data);
          }
        };

        _proto.decodeMsgData = /*#__PURE__*/function () {
          var _decodeMsgData = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(blob) {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    return _context.abrupt("return", new Promise(function (resolve, reject) {
                      blob.arrayBuffer().then(function (data) {
                        var type = Protobuf.get("MessageWrapper");
                        var wrapper = type.decode(new Uint8Array(data));
                        type = Protobuf.get("ResMessage");
                        var msg = type.decode(new Uint8Array(wrapper.msg));

                        switch (msg.cmd) {
                          case CMD.CMD_PING:
                            type = Protobuf.get("ResPing");
                            var pingMsg = type.decode(new Uint8Array(msg.body));
                            console.log("Ping time: " + (Date.now() - pingMsg.sendAt));
                            break;
                        }

                        resolve(msg);
                      });
                    }));

                  case 1:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee);
          }));

          function decodeMsgData(_x) {
            return _decodeMsgData.apply(this, arguments);
          }

          return decodeMsgData;
        }();

        _proto.sendCmd = function sendCmd(cmd, body) {
          var type = Protobuf.get("ReqMessage");
          var request = type.create({
            timestamp: Date.now(),
            cmd: cmd,
            body: body
          });
          var reqBinary = type.encode(request).finish();
          type = Protobuf.get("MessageWrapper");
          var wrapper = type.create({
            uid: "",
            connector: "",
            worker: "",
            msg: reqBinary
          });
          var bytebuf = type.encode(wrapper).finish();
          this.send(bytebuf);
          console.log("NetworkBrigde Send => " + CMD[cmd]);
        };

        _proto.ping = function ping() {
          var type = Protobuf.get("ReqPing");
          var msg = type.create({
            id: this.payloadCounter++,
            sendAt: Date.now()
          });
          var bytebuf = type.encode(msg).finish();
          this.sendCmd(CMD.CMD_PING, bytebuf);
        };

        _createClass(NetworkBrigde, [{
          key: "isReady",
          get: function get() {
            return this.ws.readyState === WebSocket.OPEN;
          }
        }, {
          key: "isHttps",
          get: function get() {
            return window.location.href.indexOf("https://") != -1;
          }
        }]);

        return NetworkBrigde;
      }(), _temp)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Protobuf.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './index.js', './index.mjs_cjs=&original=.js'], function (exports) {
  'use strict';

  var _defineProperty, _applyDecoratedDescriptor, _inheritsLoose, _createClass, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, JsonAsset, Component, _cjsExports;

  return {
    setters: [function (module) {
      _defineProperty = module.defineProperty;
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _createClass = module.createClass;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      JsonAsset = module.JsonAsset;
      Component = module.Component;
    }, function (module) {
      _cjsExports = module.default;
    }, null],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor, _class3, _temp;

      cclegacy._RF.push({}, "9cfd1yEbilLMoe6JljDN9/R", "Protobuf", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var Protobuf = exports('Protobuf', (_dec = ccclass('Protobuf'), _dec2 = property(JsonAsset), _dec(_class = (_class2 = (_temp = _class3 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Protobuf, _Component);

        function Protobuf() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_assertThisInitialized(_this), "protobufApi", _descriptor, _assertThisInitialized(_this));

          _defineProperty(_assertThisInitialized(_this), "root", null);

          return _this;
        }

        var _proto = Protobuf.prototype;

        _proto.onLoad = function onLoad() {
          Protobuf.instance = this;
          this.root = _cjsExports.Root.fromJSON(this.protobufApi.json);
        };

        Protobuf.get = function get(name) {
          return Protobuf.instance.root.lookupType(name);
        };

        _createClass(Protobuf, null, [{
          key: "Root",
          get: function get() {
            return Protobuf.instance.root;
          }
        }]);

        return Protobuf;
      }(Component), _defineProperty(_class3, "instance", null), _temp), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "protobufApi", [_dec2], {
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

System.register("chunks:///_virtual/MaxApiUtils.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  'use strict';

  var _defineProperty, cclegacy;

  return {
    setters: [function (module) {
      _defineProperty = module.defineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "e05e6inMlxKIInWCe0B8rXo", "MaxApiUtils", undefined);

      var MaxApiUtils = exports('default', /*#__PURE__*/function () {
        function MaxApiUtils() {}

        MaxApiUtils.registerScreenShot = function registerScreenShot(callback) {
          if (window.MaxApi) {
            window.MaxApi.listen("onScreenShot", function () {
              callback();
            });
          } else {
            callback(null);
          }
        };

        MaxApiUtils.RegisterNoti = function RegisterNoti(callback) {
          if (window.MaxApi) {
            window.MaxApi.observer('DIS_RECEIVE_NOTI', function (res) {
              console.log("[DIS_RECEIVE_NOTI] " + res);
              callback(res);
            });
          } else {
            callback(null);
          }
        };

        MaxApiUtils.RegisterShaking = function RegisterShaking(callback) {
          if (window.MaxApi && !this.isListeningShaking) {
            window.MaxApi.registerShakeSensitivity();
            window.MaxApi.listen("onShaker", function (response) {
              callback();
            });
            this.isListeningShaking = true;
          }
        };

        MaxApiUtils.UnRegisterShaking = function UnRegisterShaking() {
          if (window.MaxApi && this.isListeningShaking) {
            window.MaxApi.unregisterShakeSensitivity();
            this.isListeningShaking = false;
          }
        };

        MaxApiUtils.GetProfile = function GetProfile() {
          return new Promise(function (resolve, reject) {
            if (window.MaxApi) {
              window.MaxApi.getProfile(function (res) {
                resolve(res);
              });
            } else {
              resolve();
            }
          });
        };

        MaxApiUtils.UploadImage = function UploadImage(base64) {
          return new Promise(function (resolve, reject) {
            var props = {
              path: 'base64-upload',
              files: base64,
              options: {
                loading: true
              }
            };

            if (window.MaxApi) {
              window.MaxApi.uploadImage(props, function (_ref) {
                var status = _ref.status,
                    response = _ref.response;
                var url = response.url;

                if (url && url.length > 0 && url.indexOf('http') >= 0) {
                  resolve(url);
                } else {
                  resolve(response);
                }
              });
            } else {
              resolve(null);
            }
          });
        };

        MaxApiUtils.GetDeviceInfo = function GetDeviceInfo() {
          return new Promise(function (resolve, reject) {
            if (window.MaxApi) {
              window.MaxApi.getDeviceInfo(function (res) {
                resolve(res);
              });
            } else {
              resolve(null);
            }
          });
        };

        MaxApiUtils.CheckHighPerformanceDevice = function CheckHighPerformanceDevice() {
          return new Promise(function (resolve, reject) {
            if (window.MaxApi) {
              window.MaxApi.isHighPerformanceDevice(function (res) {
                resolve(res);
              });
            } else {
              resolve(true);
            }
          });
        };

        MaxApiUtils.closeGame = function closeGame() {
          if (window.MaxApi) {
            window.MaxApi.dismiss();
          }
        };

        MaxApiUtils.copyToClipboard = function copyToClipboard(copyText, toastMsg) {
          if (window.MaxApi) {
            window.MaxApi.copyToClipboard(copyText, toastMsg);
          }
        };

        MaxApiUtils.openWeb = function openWeb(url) {
          window.MaxApi.openWeb({
            url: url
          });
        } //start screen by feature code.
        ;

        MaxApiUtils.startFeatureCode = function startFeatureCode(featureCode, params, callback) {
          if (!window.MaxApi) {
            callback(true);
          } else {
            window.MaxApi.startFeatureCode(featureCode, params, callback);
          }
        };

        MaxApiUtils.checkPermission = function checkPermission(permissionName) {
          return new Promise(function (resolve) {
            if (!window.MaxApi) {
              resolve('granted');
            } else {
              window.MaxApi.checkPermission(permissionName, function (result) {
                resolve(result);
              });
            }
          });
        };

        MaxApiUtils.requestPermission = function requestPermission(permissionName) {
          return new Promise(function (resolve) {
            if (!window.MaxApi) {
              resolve('granted');
            } else {
              window.MaxApi.requestPermission(permissionName, function (result) {
                resolve(result);
              });
            }
          });
        };

        MaxApiUtils.getContacts = function getContacts() {
          return new Promise(function (resolve) {
            if (!window.MaxApi) {
              resolve([]);
            } else {
              var paramsContact = {
                allowNonMomo: false,
                autoFocus: true,
                isAllowMerchant: false,
                showPopupNonMomo: false,
                allowAgency: false,
                allowMultipleSelection: true
              };
              window.MaxApi.getContacts({
                paramsContact: paramsContact,
                title: "MegaLuckyWheel"
              }, function (contacts) {
                resolve(contacts);
              });
            }
          });
        };

        MaxApiUtils.getAvatarEndPoint = function getAvatarEndPoint() {
          var _this = this;

          return new Promise(function (resolve) {
            if (!window.MaxApi) {
              resolve("");
            } else {
              if (_this.avatarEndpoint.length > 0) {
                resolve(_this.avatarEndpoint);
              }

              window.MaxApi.getAvatarEndPoint(function (response) {
                _this.avatarEndpoint = response;
                resolve(response);
              });
            }
          });
        };

        MaxApiUtils.getContact = function getContact() {
          return new Promise(function (resolve) {
            if (!window.MaxApi) {
              resolve([]);
            } else {
              window.MaxApi.getContact({}, function (contacts) {
                resolve(contacts);
              });
            }
          });
        };

        MaxApiUtils.goBack = function goBack() {
          return new Promise(function (resolve) {
            if (!window.MaxApi) {
              resolve('denied');
            } else {
              window.MaxApi.goBack(function (result) {
                resolve(result);
              });
            }
          });
        };

        MaxApiUtils.getScreenShot = function getScreenShot(callback) {
          if (!window.MaxApi) {
            callback("");
          } else {
            window.MaxApi.getScreenShot(callback);
          }
        };

        MaxApiUtils.saveImage = function saveImage(data) {
          return new Promise(function (resolve) {
            if (window.MaxApi) {
              window.MaxApi.requestPermission('storage', function (status) {
                if (status === 'granted') {
                  window.MaxApi.saveImage(data, function (result) {
                    if (result) {
                      window.MaxApi.showToast({
                        duration: 5000,
                        title: 'Lưu hình ảnh thành công'
                      });
                      resolve(true);
                    } else {
                      window.MaxApi.showToast({
                        duration: 5000,
                        title: 'Lưu hình ảnh không thành công'
                      });
                      resolve(false);
                    }
                  });
                } else {
                  window.MaxApi.showToast({
                    duration: 5000,
                    title: 'Lưu hình ảnh không thành công'
                  });
                  resolve(false);
                }
              });
            } else {
              resolve(false);
            }
          });
        };

        MaxApiUtils.shareFacebook = function shareFacebook(params, callback) {
          if (!window.MaxApi) {
            callback("");
          } else {
            window.MaxApi.shareFacebook(params, callback);
          }
        };

        MaxApiUtils.facebookMsg = function facebookMsg(link) {
          var _url = "fb-messenger://share/?link=" + link;

          if (window.MaxApi) {
            window.MaxApi.openURL(_url);
          }
        };

        MaxApiUtils.moreMenu = function moreMenu(title, subject, message, url) {
          return new Promise(function (resolve) {
            if (!window.MaxApi) {
              resolve(false);
            } else {
              var shareOptions = {
                title: title,
                message: message,
                url: url,
                subject: subject
              };
              window.MaxApi.share(shareOptions, function (result) {
                resolve(result);
              });
            }
          });
        };

        MaxApiUtils.copyLink = function copyLink(link) {
          if (window.MaxApi) {
            window.MaxApi.copyToClipboard(link, 'Đã sao chép');
          }
        };

        MaxApiUtils.trackEvent = function trackEvent(params) {
          if (window.MaxApi) {
            window.MaxApi.trackEvent('momo_jump', params);
          }
        };

        MaxApiUtils.showToast = function showToast(title, time) {
          if (time === void 0) {
            time = 3000;
          }

          if (window.MaxApi) {
            window.MaxApi.showToast({
              duration: time,
              title: title
            });
          }
        };

        return MaxApiUtils;
      }());

      _defineProperty(MaxApiUtils, "isListeningShaking", false);

      _defineProperty(MaxApiUtils, "avatarEndpoint", "");

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/main", ['./MaxApiUtils.ts', './shaking.ts', './NetworkDefine.ts', './Protobuf.ts', './ProtobufDefine.ts', './NetworkBrigde.ts', './GameMgr.ts', './Define.ts', './Input.ts', './CameraFollow.ts', './Player.ts', './bundle.mjs_cjs=&original=.js'], function () {
  'use strict';

  return {
    setters: [null, null, null, null, null, null, null, null, null, null, null, null],
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
//# sourceMappingURL=index.js.map