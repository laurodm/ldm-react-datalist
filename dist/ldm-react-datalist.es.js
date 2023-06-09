import At, { useState as Je, createContext as xa, useEffect as Ln } from "react";
var tt = {}, ka = {
  get exports() {
    return tt;
  },
  set exports(e) {
    tt = e;
  }
}, Xe = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Fn;
function Ea() {
  if (Fn)
    return Xe;
  Fn = 1;
  var e = At, t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, a = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function s(f, l, u) {
    var c, d = {}, b = null, k = null;
    u !== void 0 && (b = "" + u), l.key !== void 0 && (b = "" + l.key), l.ref !== void 0 && (k = l.ref);
    for (c in l)
      r.call(l, c) && !i.hasOwnProperty(c) && (d[c] = l[c]);
    if (f && f.defaultProps)
      for (c in l = f.defaultProps, l)
        d[c] === void 0 && (d[c] = l[c]);
    return { $$typeof: t, type: f, key: b, ref: k, props: d, _owner: a.current };
  }
  return Xe.Fragment = n, Xe.jsx = s, Xe.jsxs = s, Xe;
}
var Ke = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var $n;
function Oa() {
  return $n || ($n = 1, process.env.NODE_ENV !== "production" && function() {
    var e = At, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), a = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), f = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), c = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), b = Symbol.for("react.lazy"), k = Symbol.for("react.offscreen"), _ = Symbol.iterator, S = "@@iterator";
    function y(o) {
      if (o === null || typeof o != "object")
        return null;
      var m = _ && o[_] || o[S];
      return typeof m == "function" ? m : null;
    }
    var P = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function x(o) {
      {
        for (var m = arguments.length, g = new Array(m > 1 ? m - 1 : 0), T = 1; T < m; T++)
          g[T - 1] = arguments[T];
        A("error", o, g);
      }
    }
    function A(o, m, g) {
      {
        var T = P.ReactDebugCurrentFrame, U = T.getStackAddendum();
        U !== "" && (m += "%s", g = g.concat([U]));
        var G = g.map(function(z) {
          return String(z);
        });
        G.unshift("Warning: " + m), Function.prototype.apply.call(console[o], console, G);
      }
    }
    var C = !1, v = !1, ee = !1, ie = !1, me = !1, ne;
    ne = Symbol.for("react.module.reference");
    function B(o) {
      return !!(typeof o == "string" || typeof o == "function" || o === r || o === i || me || o === a || o === u || o === c || ie || o === k || C || v || ee || typeof o == "object" && o !== null && (o.$$typeof === b || o.$$typeof === d || o.$$typeof === s || o.$$typeof === f || o.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      o.$$typeof === ne || o.getModuleId !== void 0));
    }
    function re(o, m, g) {
      var T = o.displayName;
      if (T)
        return T;
      var U = m.displayName || m.name || "";
      return U !== "" ? g + "(" + U + ")" : g;
    }
    function Ee(o) {
      return o.displayName || "Context";
    }
    function fe(o) {
      if (o == null)
        return null;
      if (typeof o.tag == "number" && x("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof o == "function")
        return o.displayName || o.name || null;
      if (typeof o == "string")
        return o;
      switch (o) {
        case r:
          return "Fragment";
        case n:
          return "Portal";
        case i:
          return "Profiler";
        case a:
          return "StrictMode";
        case u:
          return "Suspense";
        case c:
          return "SuspenseList";
      }
      if (typeof o == "object")
        switch (o.$$typeof) {
          case f:
            var m = o;
            return Ee(m) + ".Consumer";
          case s:
            var g = o;
            return Ee(g._context) + ".Provider";
          case l:
            return re(o, o.render, "ForwardRef");
          case d:
            var T = o.displayName || null;
            return T !== null ? T : fe(o.type) || "Memo";
          case b: {
            var U = o, G = U._payload, z = U._init;
            try {
              return fe(z(G));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var se = Object.assign, ge = 0, le, pe, Re, Fe, p, E, M;
    function j() {
    }
    j.__reactDisabledLog = !0;
    function R() {
      {
        if (ge === 0) {
          le = console.log, pe = console.info, Re = console.warn, Fe = console.error, p = console.group, E = console.groupCollapsed, M = console.groupEnd;
          var o = {
            configurable: !0,
            enumerable: !0,
            value: j,
            writable: !0
          };
          Object.defineProperties(console, {
            info: o,
            log: o,
            warn: o,
            error: o,
            group: o,
            groupCollapsed: o,
            groupEnd: o
          });
        }
        ge++;
      }
    }
    function Y() {
      {
        if (ge--, ge === 0) {
          var o = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: se({}, o, {
              value: le
            }),
            info: se({}, o, {
              value: pe
            }),
            warn: se({}, o, {
              value: Re
            }),
            error: se({}, o, {
              value: Fe
            }),
            group: se({}, o, {
              value: p
            }),
            groupCollapsed: se({}, o, {
              value: E
            }),
            groupEnd: se({}, o, {
              value: M
            })
          });
        }
        ge < 0 && x("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var I = P.ReactCurrentDispatcher, N;
    function L(o, m, g) {
      {
        if (N === void 0)
          try {
            throw Error();
          } catch (U) {
            var T = U.stack.trim().match(/\n( *(at )?)/);
            N = T && T[1] || "";
          }
        return `
` + N + o;
      }
    }
    var W = !1, F;
    {
      var ae = typeof WeakMap == "function" ? WeakMap : Map;
      F = new ae();
    }
    function h(o, m) {
      if (!o || W)
        return "";
      {
        var g = F.get(o);
        if (g !== void 0)
          return g;
      }
      var T;
      W = !0;
      var U = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var G;
      G = I.current, I.current = null, R();
      try {
        if (m) {
          var z = function() {
            throw Error();
          };
          if (Object.defineProperty(z.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(z, []);
            } catch (ye) {
              T = ye;
            }
            Reflect.construct(o, [], z);
          } else {
            try {
              z.call();
            } catch (ye) {
              T = ye;
            }
            o.call(z.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (ye) {
            T = ye;
          }
          o();
        }
      } catch (ye) {
        if (ye && T && typeof ye.stack == "string") {
          for (var $ = ye.stack.split(`
`), oe = T.stack.split(`
`), Z = $.length - 1, Q = oe.length - 1; Z >= 1 && Q >= 0 && $[Z] !== oe[Q]; )
            Q--;
          for (; Z >= 1 && Q >= 0; Z--, Q--)
            if ($[Z] !== oe[Q]) {
              if (Z !== 1 || Q !== 1)
                do
                  if (Z--, Q--, Q < 0 || $[Z] !== oe[Q]) {
                    var de = `
` + $[Z].replace(" at new ", " at ");
                    return o.displayName && de.includes("<anonymous>") && (de = de.replace("<anonymous>", o.displayName)), typeof o == "function" && F.set(o, de), de;
                  }
                while (Z >= 1 && Q >= 0);
              break;
            }
        }
      } finally {
        W = !1, I.current = G, Y(), Error.prepareStackTrace = U;
      }
      var ze = o ? o.displayName || o.name : "", Mn = ze ? L(ze) : "";
      return typeof o == "function" && F.set(o, Mn), Mn;
    }
    function ue(o, m, g) {
      return h(o, !1);
    }
    function $e(o) {
      var m = o.prototype;
      return !!(m && m.isReactComponent);
    }
    function Ie(o, m, g) {
      if (o == null)
        return "";
      if (typeof o == "function")
        return h(o, $e(o));
      if (typeof o == "string")
        return L(o);
      switch (o) {
        case u:
          return L("Suspense");
        case c:
          return L("SuspenseList");
      }
      if (typeof o == "object")
        switch (o.$$typeof) {
          case l:
            return ue(o.render);
          case d:
            return Ie(o.type, m, g);
          case b: {
            var T = o, U = T._payload, G = T._init;
            try {
              return Ie(G(U), m, g);
            } catch {
            }
          }
        }
      return "";
    }
    var ct = Object.prototype.hasOwnProperty, On = {}, Pn = P.ReactDebugCurrentFrame;
    function ut(o) {
      if (o) {
        var m = o._owner, g = Ie(o.type, o._source, m ? m.type : null);
        Pn.setExtraStackFrame(g);
      } else
        Pn.setExtraStackFrame(null);
    }
    function ta(o, m, g, T, U) {
      {
        var G = Function.call.bind(ct);
        for (var z in o)
          if (G(o, z)) {
            var $ = void 0;
            try {
              if (typeof o[z] != "function") {
                var oe = Error((T || "React class") + ": " + g + " type `" + z + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof o[z] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw oe.name = "Invariant Violation", oe;
              }
              $ = o[z](m, z, T, g, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Z) {
              $ = Z;
            }
            $ && !($ instanceof Error) && (ut(U), x("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", T || "React class", g, z, typeof $), ut(null)), $ instanceof Error && !($.message in On) && (On[$.message] = !0, ut(U), x("Failed %s type: %s", g, $.message), ut(null));
          }
      }
    }
    var na = Array.isArray;
    function Nt(o) {
      return na(o);
    }
    function ra(o) {
      {
        var m = typeof Symbol == "function" && Symbol.toStringTag, g = m && o[Symbol.toStringTag] || o.constructor.name || "Object";
        return g;
      }
    }
    function aa(o) {
      try {
        return Sn(o), !1;
      } catch {
        return !0;
      }
    }
    function Sn(o) {
      return "" + o;
    }
    function Tn(o) {
      if (aa(o))
        return x("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", ra(o)), Sn(o);
    }
    var Ge = P.ReactCurrentOwner, ia = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, An, _n, jt;
    jt = {};
    function oa(o) {
      if (ct.call(o, "ref")) {
        var m = Object.getOwnPropertyDescriptor(o, "ref").get;
        if (m && m.isReactWarning)
          return !1;
      }
      return o.ref !== void 0;
    }
    function sa(o) {
      if (ct.call(o, "key")) {
        var m = Object.getOwnPropertyDescriptor(o, "key").get;
        if (m && m.isReactWarning)
          return !1;
      }
      return o.key !== void 0;
    }
    function fa(o, m) {
      if (typeof o.ref == "string" && Ge.current && m && Ge.current.stateNode !== m) {
        var g = fe(Ge.current.type);
        jt[g] || (x('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', fe(Ge.current.type), o.ref), jt[g] = !0);
      }
    }
    function la(o, m) {
      {
        var g = function() {
          An || (An = !0, x("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", m));
        };
        g.isReactWarning = !0, Object.defineProperty(o, "key", {
          get: g,
          configurable: !0
        });
      }
    }
    function ca(o, m) {
      {
        var g = function() {
          _n || (_n = !0, x("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", m));
        };
        g.isReactWarning = !0, Object.defineProperty(o, "ref", {
          get: g,
          configurable: !0
        });
      }
    }
    var ua = function(o, m, g, T, U, G, z) {
      var $ = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: o,
        key: m,
        ref: g,
        props: z,
        // Record the component responsible for creating this element.
        _owner: G
      };
      return $._store = {}, Object.defineProperty($._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty($, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: T
      }), Object.defineProperty($, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: U
      }), Object.freeze && (Object.freeze($.props), Object.freeze($)), $;
    };
    function da(o, m, g, T, U) {
      {
        var G, z = {}, $ = null, oe = null;
        g !== void 0 && (Tn(g), $ = "" + g), sa(m) && (Tn(m.key), $ = "" + m.key), oa(m) && (oe = m.ref, fa(m, U));
        for (G in m)
          ct.call(m, G) && !ia.hasOwnProperty(G) && (z[G] = m[G]);
        if (o && o.defaultProps) {
          var Z = o.defaultProps;
          for (G in Z)
            z[G] === void 0 && (z[G] = Z[G]);
        }
        if ($ || oe) {
          var Q = typeof o == "function" ? o.displayName || o.name || "Unknown" : o;
          $ && la(z, Q), oe && ca(z, Q);
        }
        return ua(o, $, oe, U, T, Ge.current, z);
      }
    }
    var Dt = P.ReactCurrentOwner, Cn = P.ReactDebugCurrentFrame;
    function Ye(o) {
      if (o) {
        var m = o._owner, g = Ie(o.type, o._source, m ? m.type : null);
        Cn.setExtraStackFrame(g);
      } else
        Cn.setExtraStackFrame(null);
    }
    var Mt;
    Mt = !1;
    function Lt(o) {
      return typeof o == "object" && o !== null && o.$$typeof === t;
    }
    function Rn() {
      {
        if (Dt.current) {
          var o = fe(Dt.current.type);
          if (o)
            return `

Check the render method of \`` + o + "`.";
        }
        return "";
      }
    }
    function ma(o) {
      {
        if (o !== void 0) {
          var m = o.fileName.replace(/^.*[\\\/]/, ""), g = o.lineNumber;
          return `

Check your code at ` + m + ":" + g + ".";
        }
        return "";
      }
    }
    var In = {};
    function va(o) {
      {
        var m = Rn();
        if (!m) {
          var g = typeof o == "string" ? o : o.displayName || o.name;
          g && (m = `

Check the top-level render call using <` + g + ">.");
        }
        return m;
      }
    }
    function Nn(o, m) {
      {
        if (!o._store || o._store.validated || o.key != null)
          return;
        o._store.validated = !0;
        var g = va(m);
        if (In[g])
          return;
        In[g] = !0;
        var T = "";
        o && o._owner && o._owner !== Dt.current && (T = " It was passed a child from " + fe(o._owner.type) + "."), Ye(o), x('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', g, T), Ye(null);
      }
    }
    function jn(o, m) {
      {
        if (typeof o != "object")
          return;
        if (Nt(o))
          for (var g = 0; g < o.length; g++) {
            var T = o[g];
            Lt(T) && Nn(T, m);
          }
        else if (Lt(o))
          o._store && (o._store.validated = !0);
        else if (o) {
          var U = y(o);
          if (typeof U == "function" && U !== o.entries)
            for (var G = U.call(o), z; !(z = G.next()).done; )
              Lt(z.value) && Nn(z.value, m);
        }
      }
    }
    function pa(o) {
      {
        var m = o.type;
        if (m == null || typeof m == "string")
          return;
        var g;
        if (typeof m == "function")
          g = m.propTypes;
        else if (typeof m == "object" && (m.$$typeof === l || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        m.$$typeof === d))
          g = m.propTypes;
        else
          return;
        if (g) {
          var T = fe(m);
          ta(g, o.props, "prop", T, o);
        } else if (m.PropTypes !== void 0 && !Mt) {
          Mt = !0;
          var U = fe(m);
          x("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", U || "Unknown");
        }
        typeof m.getDefaultProps == "function" && !m.getDefaultProps.isReactClassApproved && x("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ba(o) {
      {
        for (var m = Object.keys(o.props), g = 0; g < m.length; g++) {
          var T = m[g];
          if (T !== "children" && T !== "key") {
            Ye(o), x("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", T), Ye(null);
            break;
          }
        }
        o.ref !== null && (Ye(o), x("Invalid attribute `ref` supplied to `React.Fragment`."), Ye(null));
      }
    }
    function Dn(o, m, g, T, U, G) {
      {
        var z = B(o);
        if (!z) {
          var $ = "";
          (o === void 0 || typeof o == "object" && o !== null && Object.keys(o).length === 0) && ($ += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var oe = ma(U);
          oe ? $ += oe : $ += Rn();
          var Z;
          o === null ? Z = "null" : Nt(o) ? Z = "array" : o !== void 0 && o.$$typeof === t ? (Z = "<" + (fe(o.type) || "Unknown") + " />", $ = " Did you accidentally export a JSX literal instead of a component?") : Z = typeof o, x("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Z, $);
        }
        var Q = da(o, m, g, U, G);
        if (Q == null)
          return Q;
        if (z) {
          var de = m.children;
          if (de !== void 0)
            if (T)
              if (Nt(de)) {
                for (var ze = 0; ze < de.length; ze++)
                  jn(de[ze], o);
                Object.freeze && Object.freeze(de);
              } else
                x("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              jn(de, o);
        }
        return o === r ? ba(Q) : pa(Q), Q;
      }
    }
    function ga(o, m, g) {
      return Dn(o, m, g, !0);
    }
    function ya(o, m, g) {
      return Dn(o, m, g, !1);
    }
    var ha = ya, wa = ga;
    Ke.Fragment = r, Ke.jsx = ha, Ke.jsxs = wa;
  }()), Ke;
}
(function(e) {
  process.env.NODE_ENV === "production" ? e.exports = Ea() : e.exports = Oa();
})(ka);
const Pe = tt.Fragment, H = tt.jsx, De = tt.jsxs;
function Yn(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function w(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Yn(Object(n), !0).forEach(function(r) {
      te(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Yn(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function Et(e) {
  return Et = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Et(e);
}
function Pa(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function zn(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function Sa(e, t, n) {
  return t && zn(e.prototype, t), n && zn(e, n), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
function te(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function cn(e, t) {
  return Aa(e) || Ca(e, t) || Er(e, t) || Ia();
}
function st(e) {
  return Ta(e) || _a(e) || Er(e) || Ra();
}
function Ta(e) {
  if (Array.isArray(e))
    return Xt(e);
}
function Aa(e) {
  if (Array.isArray(e))
    return e;
}
function _a(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null)
    return Array.from(e);
}
function Ca(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var r = [], a = !0, i = !1, s, f;
    try {
      for (n = n.call(e); !(a = (s = n.next()).done) && (r.push(s.value), !(t && r.length === t)); a = !0)
        ;
    } catch (l) {
      i = !0, f = l;
    } finally {
      try {
        !a && n.return != null && n.return();
      } finally {
        if (i)
          throw f;
      }
    }
    return r;
  }
}
function Er(e, t) {
  if (e) {
    if (typeof e == "string")
      return Xt(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set")
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return Xt(e, t);
  }
}
function Xt(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++)
    r[n] = e[n];
  return r;
}
function Ra() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Ia() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var Wn = function() {
}, un = {}, Or = {}, Pr = null, Sr = {
  mark: Wn,
  measure: Wn
};
try {
  typeof window < "u" && (un = window), typeof document < "u" && (Or = document), typeof MutationObserver < "u" && (Pr = MutationObserver), typeof performance < "u" && (Sr = performance);
} catch {
}
var Na = un.navigator || {}, Un = Na.userAgent, Hn = Un === void 0 ? "" : Un, Ae = un, K = Or, Vn = Pr, dt = Sr;
Ae.document;
var ke = !!K.documentElement && !!K.head && typeof K.addEventListener == "function" && typeof K.createElement == "function", Tr = ~Hn.indexOf("MSIE") || ~Hn.indexOf("Trident/"), mt, vt, pt, bt, gt, he = "___FONT_AWESOME___", Kt = 16, Ar = "fa", _r = "svg-inline--fa", Me = "data-fa-i2svg", Jt = "data-fa-pseudo-element", ja = "data-fa-pseudo-element-pending", dn = "data-prefix", mn = "data-icon", qn = "fontawesome-i2svg", Da = "async", Ma = ["HTML", "HEAD", "STYLE", "SCRIPT"], Cr = function() {
  try {
    return process.env.NODE_ENV === "production";
  } catch {
    return !1;
  }
}(), X = "classic", J = "sharp", vn = [X, J];
function ft(e) {
  return new Proxy(e, {
    get: function(n, r) {
      return r in n ? n[r] : n[X];
    }
  });
}
var nt = ft((mt = {}, te(mt, X, {
  fa: "solid",
  fas: "solid",
  "fa-solid": "solid",
  far: "regular",
  "fa-regular": "regular",
  fal: "light",
  "fa-light": "light",
  fat: "thin",
  "fa-thin": "thin",
  fad: "duotone",
  "fa-duotone": "duotone",
  fab: "brands",
  "fa-brands": "brands",
  fak: "kit",
  "fa-kit": "kit"
}), te(mt, J, {
  fa: "solid",
  fass: "solid",
  "fa-solid": "solid",
  fasr: "regular",
  "fa-regular": "regular",
  fasl: "light",
  "fa-light": "light"
}), mt)), rt = ft((vt = {}, te(vt, X, {
  solid: "fas",
  regular: "far",
  light: "fal",
  thin: "fat",
  duotone: "fad",
  brands: "fab",
  kit: "fak"
}), te(vt, J, {
  solid: "fass",
  regular: "fasr",
  light: "fasl"
}), vt)), at = ft((pt = {}, te(pt, X, {
  fab: "fa-brands",
  fad: "fa-duotone",
  fak: "fa-kit",
  fal: "fa-light",
  far: "fa-regular",
  fas: "fa-solid",
  fat: "fa-thin"
}), te(pt, J, {
  fass: "fa-solid",
  fasr: "fa-regular",
  fasl: "fa-light"
}), pt)), La = ft((bt = {}, te(bt, X, {
  "fa-brands": "fab",
  "fa-duotone": "fad",
  "fa-kit": "fak",
  "fa-light": "fal",
  "fa-regular": "far",
  "fa-solid": "fas",
  "fa-thin": "fat"
}), te(bt, J, {
  "fa-solid": "fass",
  "fa-regular": "fasr",
  "fa-light": "fasl"
}), bt)), Fa = /fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/, Rr = "fa-layers-text", $a = /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i, Ya = ft((gt = {}, te(gt, X, {
  900: "fas",
  400: "far",
  normal: "far",
  300: "fal",
  100: "fat"
}), te(gt, J, {
  900: "fass",
  400: "fasr",
  300: "fasl"
}), gt)), Ir = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], za = Ir.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), Wa = ["class", "data-prefix", "data-icon", "data-fa-transform", "data-fa-mask"], Ne = {
  GROUP: "duotone-group",
  SWAP_OPACITY: "swap-opacity",
  PRIMARY: "primary",
  SECONDARY: "secondary"
}, it = /* @__PURE__ */ new Set();
Object.keys(rt[X]).map(it.add.bind(it));
Object.keys(rt[J]).map(it.add.bind(it));
var Ua = [].concat(vn, st(it), ["2xs", "xs", "sm", "lg", "xl", "2xl", "beat", "border", "fade", "beat-fade", "bounce", "flip-both", "flip-horizontal", "flip-vertical", "flip", "fw", "inverse", "layers-counter", "layers-text", "layers", "li", "pull-left", "pull-right", "pulse", "rotate-180", "rotate-270", "rotate-90", "rotate-by", "shake", "spin-pulse", "spin-reverse", "spin", "stack-1x", "stack-2x", "stack", "ul", Ne.GROUP, Ne.SWAP_OPACITY, Ne.PRIMARY, Ne.SECONDARY]).concat(Ir.map(function(e) {
  return "".concat(e, "x");
})).concat(za.map(function(e) {
  return "w-".concat(e);
})), Qe = Ae.FontAwesomeConfig || {};
function Ha(e) {
  var t = K.querySelector("script[" + e + "]");
  if (t)
    return t.getAttribute(e);
}
function Va(e) {
  return e === "" ? !0 : e === "false" ? !1 : e === "true" ? !0 : e;
}
if (K && typeof K.querySelector == "function") {
  var qa = [["data-family-prefix", "familyPrefix"], ["data-css-prefix", "cssPrefix"], ["data-family-default", "familyDefault"], ["data-style-default", "styleDefault"], ["data-replacement-class", "replacementClass"], ["data-auto-replace-svg", "autoReplaceSvg"], ["data-auto-add-css", "autoAddCss"], ["data-auto-a11y", "autoA11y"], ["data-search-pseudo-elements", "searchPseudoElements"], ["data-observe-mutations", "observeMutations"], ["data-mutate-approach", "mutateApproach"], ["data-keep-original-source", "keepOriginalSource"], ["data-measure-performance", "measurePerformance"], ["data-show-missing-icons", "showMissingIcons"]];
  qa.forEach(function(e) {
    var t = cn(e, 2), n = t[0], r = t[1], a = Va(Ha(n));
    a != null && (Qe[r] = a);
  });
}
var Nr = {
  styleDefault: "solid",
  familyDefault: "classic",
  cssPrefix: Ar,
  replacementClass: _r,
  autoReplaceSvg: !0,
  autoAddCss: !0,
  autoA11y: !0,
  searchPseudoElements: !1,
  observeMutations: !0,
  mutateApproach: "async",
  keepOriginalSource: !0,
  measurePerformance: !1,
  showMissingIcons: !0
};
Qe.familyPrefix && (Qe.cssPrefix = Qe.familyPrefix);
var qe = w(w({}, Nr), Qe);
qe.autoReplaceSvg || (qe.observeMutations = !1);
var O = {};
Object.keys(Nr).forEach(function(e) {
  Object.defineProperty(O, e, {
    enumerable: !0,
    set: function(n) {
      qe[e] = n, et.forEach(function(r) {
        return r(O);
      });
    },
    get: function() {
      return qe[e];
    }
  });
});
Object.defineProperty(O, "familyPrefix", {
  enumerable: !0,
  set: function(t) {
    qe.cssPrefix = t, et.forEach(function(n) {
      return n(O);
    });
  },
  get: function() {
    return qe.cssPrefix;
  }
});
Ae.FontAwesomeConfig = O;
var et = [];
function Ba(e) {
  return et.push(e), function() {
    et.splice(et.indexOf(e), 1);
  };
}
var Oe = Kt, be = {
  size: 16,
  x: 0,
  y: 0,
  rotate: 0,
  flipX: !1,
  flipY: !1
};
function Ga(e) {
  if (!(!e || !ke)) {
    var t = K.createElement("style");
    t.setAttribute("type", "text/css"), t.innerHTML = e;
    for (var n = K.head.childNodes, r = null, a = n.length - 1; a > -1; a--) {
      var i = n[a], s = (i.tagName || "").toUpperCase();
      ["STYLE", "LINK"].indexOf(s) > -1 && (r = i);
    }
    return K.head.insertBefore(t, r), e;
  }
}
var Xa = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
function ot() {
  for (var e = 12, t = ""; e-- > 0; )
    t += Xa[Math.random() * 62 | 0];
  return t;
}
function Be(e) {
  for (var t = [], n = (e || []).length >>> 0; n--; )
    t[n] = e[n];
  return t;
}
function pn(e) {
  return e.classList ? Be(e.classList) : (e.getAttribute("class") || "").split(" ").filter(function(t) {
    return t;
  });
}
function jr(e) {
  return "".concat(e).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function Ka(e) {
  return Object.keys(e || {}).reduce(function(t, n) {
    return t + "".concat(n, '="').concat(jr(e[n]), '" ');
  }, "").trim();
}
function _t(e) {
  return Object.keys(e || {}).reduce(function(t, n) {
    return t + "".concat(n, ": ").concat(e[n].trim(), ";");
  }, "");
}
function bn(e) {
  return e.size !== be.size || e.x !== be.x || e.y !== be.y || e.rotate !== be.rotate || e.flipX || e.flipY;
}
function Ja(e) {
  var t = e.transform, n = e.containerWidth, r = e.iconWidth, a = {
    transform: "translate(".concat(n / 2, " 256)")
  }, i = "translate(".concat(t.x * 32, ", ").concat(t.y * 32, ") "), s = "scale(".concat(t.size / 16 * (t.flipX ? -1 : 1), ", ").concat(t.size / 16 * (t.flipY ? -1 : 1), ") "), f = "rotate(".concat(t.rotate, " 0 0)"), l = {
    transform: "".concat(i, " ").concat(s, " ").concat(f)
  }, u = {
    transform: "translate(".concat(r / 2 * -1, " -256)")
  };
  return {
    outer: a,
    inner: l,
    path: u
  };
}
function Za(e) {
  var t = e.transform, n = e.width, r = n === void 0 ? Kt : n, a = e.height, i = a === void 0 ? Kt : a, s = e.startCentered, f = s === void 0 ? !1 : s, l = "";
  return f && Tr ? l += "translate(".concat(t.x / Oe - r / 2, "em, ").concat(t.y / Oe - i / 2, "em) ") : f ? l += "translate(calc(-50% + ".concat(t.x / Oe, "em), calc(-50% + ").concat(t.y / Oe, "em)) ") : l += "translate(".concat(t.x / Oe, "em, ").concat(t.y / Oe, "em) "), l += "scale(".concat(t.size / Oe * (t.flipX ? -1 : 1), ", ").concat(t.size / Oe * (t.flipY ? -1 : 1), ") "), l += "rotate(".concat(t.rotate, "deg) "), l;
}
var Qa = `:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;
function Dr() {
  var e = Ar, t = _r, n = O.cssPrefix, r = O.replacementClass, a = Qa;
  if (n !== e || r !== t) {
    var i = new RegExp("\\.".concat(e, "\\-"), "g"), s = new RegExp("\\--".concat(e, "\\-"), "g"), f = new RegExp("\\.".concat(t), "g");
    a = a.replace(i, ".".concat(n, "-")).replace(s, "--".concat(n, "-")).replace(f, ".".concat(r));
  }
  return a;
}
var Bn = !1;
function Ft() {
  O.autoAddCss && !Bn && (Ga(Dr()), Bn = !0);
}
var ei = {
  mixout: function() {
    return {
      dom: {
        css: Dr,
        insertCss: Ft
      }
    };
  },
  hooks: function() {
    return {
      beforeDOMElementCreation: function() {
        Ft();
      },
      beforeI2svg: function() {
        Ft();
      }
    };
  }
}, we = Ae || {};
we[he] || (we[he] = {});
we[he].styles || (we[he].styles = {});
we[he].hooks || (we[he].hooks = {});
we[he].shims || (we[he].shims = []);
var ve = we[he], Mr = [], ti = function e() {
  K.removeEventListener("DOMContentLoaded", e), Ot = 1, Mr.map(function(t) {
    return t();
  });
}, Ot = !1;
ke && (Ot = (K.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(K.readyState), Ot || K.addEventListener("DOMContentLoaded", ti));
function ni(e) {
  ke && (Ot ? setTimeout(e, 0) : Mr.push(e));
}
function lt(e) {
  var t = e.tag, n = e.attributes, r = n === void 0 ? {} : n, a = e.children, i = a === void 0 ? [] : a;
  return typeof e == "string" ? jr(e) : "<".concat(t, " ").concat(Ka(r), ">").concat(i.map(lt).join(""), "</").concat(t, ">");
}
function Gn(e, t, n) {
  if (e && e[t] && e[t][n])
    return {
      prefix: t,
      iconName: n,
      icon: e[t][n]
    };
}
var ri = function(t, n) {
  return function(r, a, i, s) {
    return t.call(n, r, a, i, s);
  };
}, $t = function(t, n, r, a) {
  var i = Object.keys(t), s = i.length, f = a !== void 0 ? ri(n, a) : n, l, u, c;
  for (r === void 0 ? (l = 1, c = t[i[0]]) : (l = 0, c = r); l < s; l++)
    u = i[l], c = f(c, t[u], u, t);
  return c;
};
function ai(e) {
  for (var t = [], n = 0, r = e.length; n < r; ) {
    var a = e.charCodeAt(n++);
    if (a >= 55296 && a <= 56319 && n < r) {
      var i = e.charCodeAt(n++);
      (i & 64512) == 56320 ? t.push(((a & 1023) << 10) + (i & 1023) + 65536) : (t.push(a), n--);
    } else
      t.push(a);
  }
  return t;
}
function Zt(e) {
  var t = ai(e);
  return t.length === 1 ? t[0].toString(16) : null;
}
function ii(e, t) {
  var n = e.length, r = e.charCodeAt(t), a;
  return r >= 55296 && r <= 56319 && n > t + 1 && (a = e.charCodeAt(t + 1), a >= 56320 && a <= 57343) ? (r - 55296) * 1024 + a - 56320 + 65536 : r;
}
function Xn(e) {
  return Object.keys(e).reduce(function(t, n) {
    var r = e[n], a = !!r.icon;
    return a ? t[r.iconName] = r.icon : t[n] = r, t;
  }, {});
}
function Qt(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, r = n.skipHooks, a = r === void 0 ? !1 : r, i = Xn(t);
  typeof ve.hooks.addPack == "function" && !a ? ve.hooks.addPack(e, Xn(t)) : ve.styles[e] = w(w({}, ve.styles[e] || {}), i), e === "fas" && Qt("fa", t);
}
var yt, ht, wt, We = ve.styles, oi = ve.shims, si = (yt = {}, te(yt, X, Object.values(at[X])), te(yt, J, Object.values(at[J])), yt), gn = null, Lr = {}, Fr = {}, $r = {}, Yr = {}, zr = {}, fi = (ht = {}, te(ht, X, Object.keys(nt[X])), te(ht, J, Object.keys(nt[J])), ht);
function li(e) {
  return ~Ua.indexOf(e);
}
function ci(e, t) {
  var n = t.split("-"), r = n[0], a = n.slice(1).join("-");
  return r === e && a !== "" && !li(a) ? a : null;
}
var Wr = function() {
  var t = function(i) {
    return $t(We, function(s, f, l) {
      return s[l] = $t(f, i, {}), s;
    }, {});
  };
  Lr = t(function(a, i, s) {
    if (i[3] && (a[i[3]] = s), i[2]) {
      var f = i[2].filter(function(l) {
        return typeof l == "number";
      });
      f.forEach(function(l) {
        a[l.toString(16)] = s;
      });
    }
    return a;
  }), Fr = t(function(a, i, s) {
    if (a[s] = s, i[2]) {
      var f = i[2].filter(function(l) {
        return typeof l == "string";
      });
      f.forEach(function(l) {
        a[l] = s;
      });
    }
    return a;
  }), zr = t(function(a, i, s) {
    var f = i[2];
    return a[s] = s, f.forEach(function(l) {
      a[l] = s;
    }), a;
  });
  var n = "far" in We || O.autoFetchSvg, r = $t(oi, function(a, i) {
    var s = i[0], f = i[1], l = i[2];
    return f === "far" && !n && (f = "fas"), typeof s == "string" && (a.names[s] = {
      prefix: f,
      iconName: l
    }), typeof s == "number" && (a.unicodes[s.toString(16)] = {
      prefix: f,
      iconName: l
    }), a;
  }, {
    names: {},
    unicodes: {}
  });
  $r = r.names, Yr = r.unicodes, gn = Ct(O.styleDefault, {
    family: O.familyDefault
  });
};
Ba(function(e) {
  gn = Ct(e.styleDefault, {
    family: O.familyDefault
  });
});
Wr();
function yn(e, t) {
  return (Lr[e] || {})[t];
}
function ui(e, t) {
  return (Fr[e] || {})[t];
}
function je(e, t) {
  return (zr[e] || {})[t];
}
function Ur(e) {
  return $r[e] || {
    prefix: null,
    iconName: null
  };
}
function di(e) {
  var t = Yr[e], n = yn("fas", e);
  return t || (n ? {
    prefix: "fas",
    iconName: n
  } : null) || {
    prefix: null,
    iconName: null
  };
}
function _e() {
  return gn;
}
var hn = function() {
  return {
    prefix: null,
    iconName: null,
    rest: []
  };
};
function Ct(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = t.family, r = n === void 0 ? X : n, a = nt[r][e], i = rt[r][e] || rt[r][a], s = e in ve.styles ? e : null;
  return i || s || null;
}
var Kn = (wt = {}, te(wt, X, Object.keys(at[X])), te(wt, J, Object.keys(at[J])), wt);
function Rt(e) {
  var t, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = n.skipLookups, a = r === void 0 ? !1 : r, i = (t = {}, te(t, X, "".concat(O.cssPrefix, "-").concat(X)), te(t, J, "".concat(O.cssPrefix, "-").concat(J)), t), s = null, f = X;
  (e.includes(i[X]) || e.some(function(u) {
    return Kn[X].includes(u);
  })) && (f = X), (e.includes(i[J]) || e.some(function(u) {
    return Kn[J].includes(u);
  })) && (f = J);
  var l = e.reduce(function(u, c) {
    var d = ci(O.cssPrefix, c);
    if (We[c] ? (c = si[f].includes(c) ? La[f][c] : c, s = c, u.prefix = c) : fi[f].indexOf(c) > -1 ? (s = c, u.prefix = Ct(c, {
      family: f
    })) : d ? u.iconName = d : c !== O.replacementClass && c !== i[X] && c !== i[J] && u.rest.push(c), !a && u.prefix && u.iconName) {
      var b = s === "fa" ? Ur(u.iconName) : {}, k = je(u.prefix, u.iconName);
      b.prefix && (s = null), u.iconName = b.iconName || k || u.iconName, u.prefix = b.prefix || u.prefix, u.prefix === "far" && !We.far && We.fas && !O.autoFetchSvg && (u.prefix = "fas");
    }
    return u;
  }, hn());
  return (e.includes("fa-brands") || e.includes("fab")) && (l.prefix = "fab"), (e.includes("fa-duotone") || e.includes("fad")) && (l.prefix = "fad"), !l.prefix && f === J && (We.fass || O.autoFetchSvg) && (l.prefix = "fass", l.iconName = je(l.prefix, l.iconName) || l.iconName), (l.prefix === "fa" || s === "fa") && (l.prefix = _e() || "fas"), l;
}
var mi = /* @__PURE__ */ function() {
  function e() {
    Pa(this, e), this.definitions = {};
  }
  return Sa(e, [{
    key: "add",
    value: function() {
      for (var n = this, r = arguments.length, a = new Array(r), i = 0; i < r; i++)
        a[i] = arguments[i];
      var s = a.reduce(this._pullDefinitions, {});
      Object.keys(s).forEach(function(f) {
        n.definitions[f] = w(w({}, n.definitions[f] || {}), s[f]), Qt(f, s[f]);
        var l = at[X][f];
        l && Qt(l, s[f]), Wr();
      });
    }
  }, {
    key: "reset",
    value: function() {
      this.definitions = {};
    }
  }, {
    key: "_pullDefinitions",
    value: function(n, r) {
      var a = r.prefix && r.iconName && r.icon ? {
        0: r
      } : r;
      return Object.keys(a).map(function(i) {
        var s = a[i], f = s.prefix, l = s.iconName, u = s.icon, c = u[2];
        n[f] || (n[f] = {}), c.length > 0 && c.forEach(function(d) {
          typeof d == "string" && (n[f][d] = u);
        }), n[f][l] = u;
      }), n;
    }
  }]), e;
}(), Jn = [], Ue = {}, Ve = {}, vi = Object.keys(Ve);
function pi(e, t) {
  var n = t.mixoutsTo;
  return Jn = e, Ue = {}, Object.keys(Ve).forEach(function(r) {
    vi.indexOf(r) === -1 && delete Ve[r];
  }), Jn.forEach(function(r) {
    var a = r.mixout ? r.mixout() : {};
    if (Object.keys(a).forEach(function(s) {
      typeof a[s] == "function" && (n[s] = a[s]), Et(a[s]) === "object" && Object.keys(a[s]).forEach(function(f) {
        n[s] || (n[s] = {}), n[s][f] = a[s][f];
      });
    }), r.hooks) {
      var i = r.hooks();
      Object.keys(i).forEach(function(s) {
        Ue[s] || (Ue[s] = []), Ue[s].push(i[s]);
      });
    }
    r.provides && r.provides(Ve);
  }), n;
}
function en(e, t) {
  for (var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), a = 2; a < n; a++)
    r[a - 2] = arguments[a];
  var i = Ue[e] || [];
  return i.forEach(function(s) {
    t = s.apply(null, [t].concat(r));
  }), t;
}
function Le(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
    n[r - 1] = arguments[r];
  var a = Ue[e] || [];
  a.forEach(function(i) {
    i.apply(null, n);
  });
}
function xe() {
  var e = arguments[0], t = Array.prototype.slice.call(arguments, 1);
  return Ve[e] ? Ve[e].apply(null, t) : void 0;
}
function tn(e) {
  e.prefix === "fa" && (e.prefix = "fas");
  var t = e.iconName, n = e.prefix || _e();
  if (t)
    return t = je(n, t) || t, Gn(Hr.definitions, n, t) || Gn(ve.styles, n, t);
}
var Hr = new mi(), bi = function() {
  O.autoReplaceSvg = !1, O.observeMutations = !1, Le("noAuto");
}, gi = {
  i2svg: function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return ke ? (Le("beforeI2svg", t), xe("pseudoElements2svg", t), xe("i2svg", t)) : Promise.reject("Operation requires a DOM of some kind.");
  },
  watch: function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = t.autoReplaceSvgRoot;
    O.autoReplaceSvg === !1 && (O.autoReplaceSvg = !0), O.observeMutations = !0, ni(function() {
      hi({
        autoReplaceSvgRoot: n
      }), Le("watch", t);
    });
  }
}, yi = {
  icon: function(t) {
    if (t === null)
      return null;
    if (Et(t) === "object" && t.prefix && t.iconName)
      return {
        prefix: t.prefix,
        iconName: je(t.prefix, t.iconName) || t.iconName
      };
    if (Array.isArray(t) && t.length === 2) {
      var n = t[1].indexOf("fa-") === 0 ? t[1].slice(3) : t[1], r = Ct(t[0]);
      return {
        prefix: r,
        iconName: je(r, n) || n
      };
    }
    if (typeof t == "string" && (t.indexOf("".concat(O.cssPrefix, "-")) > -1 || t.match(Fa))) {
      var a = Rt(t.split(" "), {
        skipLookups: !0
      });
      return {
        prefix: a.prefix || _e(),
        iconName: je(a.prefix, a.iconName) || a.iconName
      };
    }
    if (typeof t == "string") {
      var i = _e();
      return {
        prefix: i,
        iconName: je(i, t) || t
      };
    }
  }
}, ce = {
  noAuto: bi,
  config: O,
  dom: gi,
  parse: yi,
  library: Hr,
  findIconDefinition: tn,
  toHtml: lt
}, hi = function() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = t.autoReplaceSvgRoot, r = n === void 0 ? K : n;
  (Object.keys(ve.styles).length > 0 || O.autoFetchSvg) && ke && O.autoReplaceSvg && ce.dom.i2svg({
    node: r
  });
};
function It(e, t) {
  return Object.defineProperty(e, "abstract", {
    get: t
  }), Object.defineProperty(e, "html", {
    get: function() {
      return e.abstract.map(function(r) {
        return lt(r);
      });
    }
  }), Object.defineProperty(e, "node", {
    get: function() {
      if (ke) {
        var r = K.createElement("div");
        return r.innerHTML = e.html, r.children;
      }
    }
  }), e;
}
function wi(e) {
  var t = e.children, n = e.main, r = e.mask, a = e.attributes, i = e.styles, s = e.transform;
  if (bn(s) && n.found && !r.found) {
    var f = n.width, l = n.height, u = {
      x: f / l / 2,
      y: 0.5
    };
    a.style = _t(w(w({}, i), {}, {
      "transform-origin": "".concat(u.x + s.x / 16, "em ").concat(u.y + s.y / 16, "em")
    }));
  }
  return [{
    tag: "svg",
    attributes: a,
    children: t
  }];
}
function xi(e) {
  var t = e.prefix, n = e.iconName, r = e.children, a = e.attributes, i = e.symbol, s = i === !0 ? "".concat(t, "-").concat(O.cssPrefix, "-").concat(n) : i;
  return [{
    tag: "svg",
    attributes: {
      style: "display: none;"
    },
    children: [{
      tag: "symbol",
      attributes: w(w({}, a), {}, {
        id: s
      }),
      children: r
    }]
  }];
}
function wn(e) {
  var t = e.icons, n = t.main, r = t.mask, a = e.prefix, i = e.iconName, s = e.transform, f = e.symbol, l = e.title, u = e.maskId, c = e.titleId, d = e.extra, b = e.watchable, k = b === void 0 ? !1 : b, _ = r.found ? r : n, S = _.width, y = _.height, P = a === "fak", x = [O.replacementClass, i ? "".concat(O.cssPrefix, "-").concat(i) : ""].filter(function(ne) {
    return d.classes.indexOf(ne) === -1;
  }).filter(function(ne) {
    return ne !== "" || !!ne;
  }).concat(d.classes).join(" "), A = {
    children: [],
    attributes: w(w({}, d.attributes), {}, {
      "data-prefix": a,
      "data-icon": i,
      class: x,
      role: d.attributes.role || "img",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 ".concat(S, " ").concat(y)
    })
  }, C = P && !~d.classes.indexOf("fa-fw") ? {
    width: "".concat(S / y * 16 * 0.0625, "em")
  } : {};
  k && (A.attributes[Me] = ""), l && (A.children.push({
    tag: "title",
    attributes: {
      id: A.attributes["aria-labelledby"] || "title-".concat(c || ot())
    },
    children: [l]
  }), delete A.attributes.title);
  var v = w(w({}, A), {}, {
    prefix: a,
    iconName: i,
    main: n,
    mask: r,
    maskId: u,
    transform: s,
    symbol: f,
    styles: w(w({}, C), d.styles)
  }), ee = r.found && n.found ? xe("generateAbstractMask", v) || {
    children: [],
    attributes: {}
  } : xe("generateAbstractIcon", v) || {
    children: [],
    attributes: {}
  }, ie = ee.children, me = ee.attributes;
  return v.children = ie, v.attributes = me, f ? xi(v) : wi(v);
}
function Zn(e) {
  var t = e.content, n = e.width, r = e.height, a = e.transform, i = e.title, s = e.extra, f = e.watchable, l = f === void 0 ? !1 : f, u = w(w(w({}, s.attributes), i ? {
    title: i
  } : {}), {}, {
    class: s.classes.join(" ")
  });
  l && (u[Me] = "");
  var c = w({}, s.styles);
  bn(a) && (c.transform = Za({
    transform: a,
    startCentered: !0,
    width: n,
    height: r
  }), c["-webkit-transform"] = c.transform);
  var d = _t(c);
  d.length > 0 && (u.style = d);
  var b = [];
  return b.push({
    tag: "span",
    attributes: u,
    children: [t]
  }), i && b.push({
    tag: "span",
    attributes: {
      class: "sr-only"
    },
    children: [i]
  }), b;
}
function ki(e) {
  var t = e.content, n = e.title, r = e.extra, a = w(w(w({}, r.attributes), n ? {
    title: n
  } : {}), {}, {
    class: r.classes.join(" ")
  }), i = _t(r.styles);
  i.length > 0 && (a.style = i);
  var s = [];
  return s.push({
    tag: "span",
    attributes: a,
    children: [t]
  }), n && s.push({
    tag: "span",
    attributes: {
      class: "sr-only"
    },
    children: [n]
  }), s;
}
var Yt = ve.styles;
function nn(e) {
  var t = e[0], n = e[1], r = e.slice(4), a = cn(r, 1), i = a[0], s = null;
  return Array.isArray(i) ? s = {
    tag: "g",
    attributes: {
      class: "".concat(O.cssPrefix, "-").concat(Ne.GROUP)
    },
    children: [{
      tag: "path",
      attributes: {
        class: "".concat(O.cssPrefix, "-").concat(Ne.SECONDARY),
        fill: "currentColor",
        d: i[0]
      }
    }, {
      tag: "path",
      attributes: {
        class: "".concat(O.cssPrefix, "-").concat(Ne.PRIMARY),
        fill: "currentColor",
        d: i[1]
      }
    }]
  } : s = {
    tag: "path",
    attributes: {
      fill: "currentColor",
      d: i
    }
  }, {
    found: !0,
    width: t,
    height: n,
    icon: s
  };
}
var Ei = {
  found: !1,
  width: 512,
  height: 512
};
function Oi(e, t) {
  !Cr && !O.showMissingIcons && e && console.error('Icon with name "'.concat(e, '" and prefix "').concat(t, '" is missing.'));
}
function rn(e, t) {
  var n = t;
  return t === "fa" && O.styleDefault !== null && (t = _e()), new Promise(function(r, a) {
    if (xe("missingIconAbstract"), n === "fa") {
      var i = Ur(e) || {};
      e = i.iconName || e, t = i.prefix || t;
    }
    if (e && t && Yt[t] && Yt[t][e]) {
      var s = Yt[t][e];
      return r(nn(s));
    }
    Oi(e, t), r(w(w({}, Ei), {}, {
      icon: O.showMissingIcons && e ? xe("missingIconAbstract") || {} : {}
    }));
  });
}
var Qn = function() {
}, an = O.measurePerformance && dt && dt.mark && dt.measure ? dt : {
  mark: Qn,
  measure: Qn
}, Ze = 'FA "6.4.0"', Pi = function(t) {
  return an.mark("".concat(Ze, " ").concat(t, " begins")), function() {
    return Vr(t);
  };
}, Vr = function(t) {
  an.mark("".concat(Ze, " ").concat(t, " ends")), an.measure("".concat(Ze, " ").concat(t), "".concat(Ze, " ").concat(t, " begins"), "".concat(Ze, " ").concat(t, " ends"));
}, xn = {
  begin: Pi,
  end: Vr
}, xt = function() {
};
function er(e) {
  var t = e.getAttribute ? e.getAttribute(Me) : null;
  return typeof t == "string";
}
function Si(e) {
  var t = e.getAttribute ? e.getAttribute(dn) : null, n = e.getAttribute ? e.getAttribute(mn) : null;
  return t && n;
}
function Ti(e) {
  return e && e.classList && e.classList.contains && e.classList.contains(O.replacementClass);
}
function Ai() {
  if (O.autoReplaceSvg === !0)
    return kt.replace;
  var e = kt[O.autoReplaceSvg];
  return e || kt.replace;
}
function _i(e) {
  return K.createElementNS("http://www.w3.org/2000/svg", e);
}
function Ci(e) {
  return K.createElement(e);
}
function qr(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = t.ceFn, r = n === void 0 ? e.tag === "svg" ? _i : Ci : n;
  if (typeof e == "string")
    return K.createTextNode(e);
  var a = r(e.tag);
  Object.keys(e.attributes || []).forEach(function(s) {
    a.setAttribute(s, e.attributes[s]);
  });
  var i = e.children || [];
  return i.forEach(function(s) {
    a.appendChild(qr(s, {
      ceFn: r
    }));
  }), a;
}
function Ri(e) {
  var t = " ".concat(e.outerHTML, " ");
  return t = "".concat(t, "Font Awesome fontawesome.com "), t;
}
var kt = {
  replace: function(t) {
    var n = t[0];
    if (n.parentNode)
      if (t[1].forEach(function(a) {
        n.parentNode.insertBefore(qr(a), n);
      }), n.getAttribute(Me) === null && O.keepOriginalSource) {
        var r = K.createComment(Ri(n));
        n.parentNode.replaceChild(r, n);
      } else
        n.remove();
  },
  nest: function(t) {
    var n = t[0], r = t[1];
    if (~pn(n).indexOf(O.replacementClass))
      return kt.replace(t);
    var a = new RegExp("".concat(O.cssPrefix, "-.*"));
    if (delete r[0].attributes.id, r[0].attributes.class) {
      var i = r[0].attributes.class.split(" ").reduce(function(f, l) {
        return l === O.replacementClass || l.match(a) ? f.toSvg.push(l) : f.toNode.push(l), f;
      }, {
        toNode: [],
        toSvg: []
      });
      r[0].attributes.class = i.toSvg.join(" "), i.toNode.length === 0 ? n.removeAttribute("class") : n.setAttribute("class", i.toNode.join(" "));
    }
    var s = r.map(function(f) {
      return lt(f);
    }).join(`
`);
    n.setAttribute(Me, ""), n.innerHTML = s;
  }
};
function tr(e) {
  e();
}
function Br(e, t) {
  var n = typeof t == "function" ? t : xt;
  if (e.length === 0)
    n();
  else {
    var r = tr;
    O.mutateApproach === Da && (r = Ae.requestAnimationFrame || tr), r(function() {
      var a = Ai(), i = xn.begin("mutate");
      e.map(a), i(), n();
    });
  }
}
var kn = !1;
function Gr() {
  kn = !0;
}
function on() {
  kn = !1;
}
var Pt = null;
function nr(e) {
  if (Vn && O.observeMutations) {
    var t = e.treeCallback, n = t === void 0 ? xt : t, r = e.nodeCallback, a = r === void 0 ? xt : r, i = e.pseudoElementsCallback, s = i === void 0 ? xt : i, f = e.observeMutationsRoot, l = f === void 0 ? K : f;
    Pt = new Vn(function(u) {
      if (!kn) {
        var c = _e();
        Be(u).forEach(function(d) {
          if (d.type === "childList" && d.addedNodes.length > 0 && !er(d.addedNodes[0]) && (O.searchPseudoElements && s(d.target), n(d.target)), d.type === "attributes" && d.target.parentNode && O.searchPseudoElements && s(d.target.parentNode), d.type === "attributes" && er(d.target) && ~Wa.indexOf(d.attributeName))
            if (d.attributeName === "class" && Si(d.target)) {
              var b = Rt(pn(d.target)), k = b.prefix, _ = b.iconName;
              d.target.setAttribute(dn, k || c), _ && d.target.setAttribute(mn, _);
            } else
              Ti(d.target) && a(d.target);
        });
      }
    }), ke && Pt.observe(l, {
      childList: !0,
      attributes: !0,
      characterData: !0,
      subtree: !0
    });
  }
}
function Ii() {
  Pt && Pt.disconnect();
}
function Ni(e) {
  var t = e.getAttribute("style"), n = [];
  return t && (n = t.split(";").reduce(function(r, a) {
    var i = a.split(":"), s = i[0], f = i.slice(1);
    return s && f.length > 0 && (r[s] = f.join(":").trim()), r;
  }, {})), n;
}
function ji(e) {
  var t = e.getAttribute("data-prefix"), n = e.getAttribute("data-icon"), r = e.innerText !== void 0 ? e.innerText.trim() : "", a = Rt(pn(e));
  return a.prefix || (a.prefix = _e()), t && n && (a.prefix = t, a.iconName = n), a.iconName && a.prefix || (a.prefix && r.length > 0 && (a.iconName = ui(a.prefix, e.innerText) || yn(a.prefix, Zt(e.innerText))), !a.iconName && O.autoFetchSvg && e.firstChild && e.firstChild.nodeType === Node.TEXT_NODE && (a.iconName = e.firstChild.data)), a;
}
function Di(e) {
  var t = Be(e.attributes).reduce(function(a, i) {
    return a.name !== "class" && a.name !== "style" && (a[i.name] = i.value), a;
  }, {}), n = e.getAttribute("title"), r = e.getAttribute("data-fa-title-id");
  return O.autoA11y && (n ? t["aria-labelledby"] = "".concat(O.replacementClass, "-title-").concat(r || ot()) : (t["aria-hidden"] = "true", t.focusable = "false")), t;
}
function Mi() {
  return {
    iconName: null,
    title: null,
    titleId: null,
    prefix: null,
    transform: be,
    symbol: !1,
    mask: {
      iconName: null,
      prefix: null,
      rest: []
    },
    maskId: null,
    extra: {
      classes: [],
      styles: {},
      attributes: {}
    }
  };
}
function rr(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
    styleParser: !0
  }, n = ji(e), r = n.iconName, a = n.prefix, i = n.rest, s = Di(e), f = en("parseNodeAttributes", {}, e), l = t.styleParser ? Ni(e) : [];
  return w({
    iconName: r,
    title: e.getAttribute("title"),
    titleId: e.getAttribute("data-fa-title-id"),
    prefix: a,
    transform: be,
    mask: {
      iconName: null,
      prefix: null,
      rest: []
    },
    maskId: null,
    symbol: !1,
    extra: {
      classes: i,
      styles: l,
      attributes: s
    }
  }, f);
}
var Li = ve.styles;
function Xr(e) {
  var t = O.autoReplaceSvg === "nest" ? rr(e, {
    styleParser: !1
  }) : rr(e);
  return ~t.extra.classes.indexOf(Rr) ? xe("generateLayersText", e, t) : xe("generateSvgReplacementMutation", e, t);
}
var Ce = /* @__PURE__ */ new Set();
vn.map(function(e) {
  Ce.add("fa-".concat(e));
});
Object.keys(nt[X]).map(Ce.add.bind(Ce));
Object.keys(nt[J]).map(Ce.add.bind(Ce));
Ce = st(Ce);
function ar(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  if (!ke)
    return Promise.resolve();
  var n = K.documentElement.classList, r = function(d) {
    return n.add("".concat(qn, "-").concat(d));
  }, a = function(d) {
    return n.remove("".concat(qn, "-").concat(d));
  }, i = O.autoFetchSvg ? Ce : vn.map(function(c) {
    return "fa-".concat(c);
  }).concat(Object.keys(Li));
  i.includes("fa") || i.push("fa");
  var s = [".".concat(Rr, ":not([").concat(Me, "])")].concat(i.map(function(c) {
    return ".".concat(c, ":not([").concat(Me, "])");
  })).join(", ");
  if (s.length === 0)
    return Promise.resolve();
  var f = [];
  try {
    f = Be(e.querySelectorAll(s));
  } catch {
  }
  if (f.length > 0)
    r("pending"), a("complete");
  else
    return Promise.resolve();
  var l = xn.begin("onTree"), u = f.reduce(function(c, d) {
    try {
      var b = Xr(d);
      b && c.push(b);
    } catch (k) {
      Cr || k.name === "MissingIcon" && console.error(k);
    }
    return c;
  }, []);
  return new Promise(function(c, d) {
    Promise.all(u).then(function(b) {
      Br(b, function() {
        r("active"), r("complete"), a("pending"), typeof t == "function" && t(), l(), c();
      });
    }).catch(function(b) {
      l(), d(b);
    });
  });
}
function Fi(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  Xr(e).then(function(n) {
    n && Br([n], t);
  });
}
function $i(e) {
  return function(t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = (t || {}).icon ? t : tn(t || {}), a = n.mask;
    return a && (a = (a || {}).icon ? a : tn(a || {})), e(r, w(w({}, n), {}, {
      mask: a
    }));
  };
}
var Yi = function(t) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = n.transform, a = r === void 0 ? be : r, i = n.symbol, s = i === void 0 ? !1 : i, f = n.mask, l = f === void 0 ? null : f, u = n.maskId, c = u === void 0 ? null : u, d = n.title, b = d === void 0 ? null : d, k = n.titleId, _ = k === void 0 ? null : k, S = n.classes, y = S === void 0 ? [] : S, P = n.attributes, x = P === void 0 ? {} : P, A = n.styles, C = A === void 0 ? {} : A;
  if (t) {
    var v = t.prefix, ee = t.iconName, ie = t.icon;
    return It(w({
      type: "icon"
    }, t), function() {
      return Le("beforeDOMElementCreation", {
        iconDefinition: t,
        params: n
      }), O.autoA11y && (b ? x["aria-labelledby"] = "".concat(O.replacementClass, "-title-").concat(_ || ot()) : (x["aria-hidden"] = "true", x.focusable = "false")), wn({
        icons: {
          main: nn(ie),
          mask: l ? nn(l.icon) : {
            found: !1,
            width: null,
            height: null,
            icon: {}
          }
        },
        prefix: v,
        iconName: ee,
        transform: w(w({}, be), a),
        symbol: s,
        title: b,
        maskId: c,
        titleId: _,
        extra: {
          attributes: x,
          styles: C,
          classes: y
        }
      });
    });
  }
}, zi = {
  mixout: function() {
    return {
      icon: $i(Yi)
    };
  },
  hooks: function() {
    return {
      mutationObserverCallbacks: function(n) {
        return n.treeCallback = ar, n.nodeCallback = Fi, n;
      }
    };
  },
  provides: function(t) {
    t.i2svg = function(n) {
      var r = n.node, a = r === void 0 ? K : r, i = n.callback, s = i === void 0 ? function() {
      } : i;
      return ar(a, s);
    }, t.generateSvgReplacementMutation = function(n, r) {
      var a = r.iconName, i = r.title, s = r.titleId, f = r.prefix, l = r.transform, u = r.symbol, c = r.mask, d = r.maskId, b = r.extra;
      return new Promise(function(k, _) {
        Promise.all([rn(a, f), c.iconName ? rn(c.iconName, c.prefix) : Promise.resolve({
          found: !1,
          width: 512,
          height: 512,
          icon: {}
        })]).then(function(S) {
          var y = cn(S, 2), P = y[0], x = y[1];
          k([n, wn({
            icons: {
              main: P,
              mask: x
            },
            prefix: f,
            iconName: a,
            transform: l,
            symbol: u,
            maskId: d,
            title: i,
            titleId: s,
            extra: b,
            watchable: !0
          })]);
        }).catch(_);
      });
    }, t.generateAbstractIcon = function(n) {
      var r = n.children, a = n.attributes, i = n.main, s = n.transform, f = n.styles, l = _t(f);
      l.length > 0 && (a.style = l);
      var u;
      return bn(s) && (u = xe("generateAbstractTransformGrouping", {
        main: i,
        transform: s,
        containerWidth: i.width,
        iconWidth: i.width
      })), r.push(u || i.icon), {
        children: r,
        attributes: a
      };
    };
  }
}, Wi = {
  mixout: function() {
    return {
      layer: function(n) {
        var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, a = r.classes, i = a === void 0 ? [] : a;
        return It({
          type: "layer"
        }, function() {
          Le("beforeDOMElementCreation", {
            assembler: n,
            params: r
          });
          var s = [];
          return n(function(f) {
            Array.isArray(f) ? f.map(function(l) {
              s = s.concat(l.abstract);
            }) : s = s.concat(f.abstract);
          }), [{
            tag: "span",
            attributes: {
              class: ["".concat(O.cssPrefix, "-layers")].concat(st(i)).join(" ")
            },
            children: s
          }];
        });
      }
    };
  }
}, Ui = {
  mixout: function() {
    return {
      counter: function(n) {
        var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, a = r.title, i = a === void 0 ? null : a, s = r.classes, f = s === void 0 ? [] : s, l = r.attributes, u = l === void 0 ? {} : l, c = r.styles, d = c === void 0 ? {} : c;
        return It({
          type: "counter",
          content: n
        }, function() {
          return Le("beforeDOMElementCreation", {
            content: n,
            params: r
          }), ki({
            content: n.toString(),
            title: i,
            extra: {
              attributes: u,
              styles: d,
              classes: ["".concat(O.cssPrefix, "-layers-counter")].concat(st(f))
            }
          });
        });
      }
    };
  }
}, Hi = {
  mixout: function() {
    return {
      text: function(n) {
        var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, a = r.transform, i = a === void 0 ? be : a, s = r.title, f = s === void 0 ? null : s, l = r.classes, u = l === void 0 ? [] : l, c = r.attributes, d = c === void 0 ? {} : c, b = r.styles, k = b === void 0 ? {} : b;
        return It({
          type: "text",
          content: n
        }, function() {
          return Le("beforeDOMElementCreation", {
            content: n,
            params: r
          }), Zn({
            content: n,
            transform: w(w({}, be), i),
            title: f,
            extra: {
              attributes: d,
              styles: k,
              classes: ["".concat(O.cssPrefix, "-layers-text")].concat(st(u))
            }
          });
        });
      }
    };
  },
  provides: function(t) {
    t.generateLayersText = function(n, r) {
      var a = r.title, i = r.transform, s = r.extra, f = null, l = null;
      if (Tr) {
        var u = parseInt(getComputedStyle(n).fontSize, 10), c = n.getBoundingClientRect();
        f = c.width / u, l = c.height / u;
      }
      return O.autoA11y && !a && (s.attributes["aria-hidden"] = "true"), Promise.resolve([n, Zn({
        content: n.innerHTML,
        width: f,
        height: l,
        transform: i,
        title: a,
        extra: s,
        watchable: !0
      })]);
    };
  }
}, Vi = new RegExp('"', "ug"), ir = [1105920, 1112319];
function qi(e) {
  var t = e.replace(Vi, ""), n = ii(t, 0), r = n >= ir[0] && n <= ir[1], a = t.length === 2 ? t[0] === t[1] : !1;
  return {
    value: Zt(a ? t[0] : t),
    isSecondary: r || a
  };
}
function or(e, t) {
  var n = "".concat(ja).concat(t.replace(":", "-"));
  return new Promise(function(r, a) {
    if (e.getAttribute(n) !== null)
      return r();
    var i = Be(e.children), s = i.filter(function(ie) {
      return ie.getAttribute(Jt) === t;
    })[0], f = Ae.getComputedStyle(e, t), l = f.getPropertyValue("font-family").match($a), u = f.getPropertyValue("font-weight"), c = f.getPropertyValue("content");
    if (s && !l)
      return e.removeChild(s), r();
    if (l && c !== "none" && c !== "") {
      var d = f.getPropertyValue("content"), b = ~["Sharp"].indexOf(l[2]) ? J : X, k = ~["Solid", "Regular", "Light", "Thin", "Duotone", "Brands", "Kit"].indexOf(l[2]) ? rt[b][l[2].toLowerCase()] : Ya[b][u], _ = qi(d), S = _.value, y = _.isSecondary, P = l[0].startsWith("FontAwesome"), x = yn(k, S), A = x;
      if (P) {
        var C = di(S);
        C.iconName && C.prefix && (x = C.iconName, k = C.prefix);
      }
      if (x && !y && (!s || s.getAttribute(dn) !== k || s.getAttribute(mn) !== A)) {
        e.setAttribute(n, A), s && e.removeChild(s);
        var v = Mi(), ee = v.extra;
        ee.attributes[Jt] = t, rn(x, k).then(function(ie) {
          var me = wn(w(w({}, v), {}, {
            icons: {
              main: ie,
              mask: hn()
            },
            prefix: k,
            iconName: A,
            extra: ee,
            watchable: !0
          })), ne = K.createElement("svg");
          t === "::before" ? e.insertBefore(ne, e.firstChild) : e.appendChild(ne), ne.outerHTML = me.map(function(B) {
            return lt(B);
          }).join(`
`), e.removeAttribute(n), r();
        }).catch(a);
      } else
        r();
    } else
      r();
  });
}
function Bi(e) {
  return Promise.all([or(e, "::before"), or(e, "::after")]);
}
function Gi(e) {
  return e.parentNode !== document.head && !~Ma.indexOf(e.tagName.toUpperCase()) && !e.getAttribute(Jt) && (!e.parentNode || e.parentNode.tagName !== "svg");
}
function sr(e) {
  if (ke)
    return new Promise(function(t, n) {
      var r = Be(e.querySelectorAll("*")).filter(Gi).map(Bi), a = xn.begin("searchPseudoElements");
      Gr(), Promise.all(r).then(function() {
        a(), on(), t();
      }).catch(function() {
        a(), on(), n();
      });
    });
}
var Xi = {
  hooks: function() {
    return {
      mutationObserverCallbacks: function(n) {
        return n.pseudoElementsCallback = sr, n;
      }
    };
  },
  provides: function(t) {
    t.pseudoElements2svg = function(n) {
      var r = n.node, a = r === void 0 ? K : r;
      O.searchPseudoElements && sr(a);
    };
  }
}, fr = !1, Ki = {
  mixout: function() {
    return {
      dom: {
        unwatch: function() {
          Gr(), fr = !0;
        }
      }
    };
  },
  hooks: function() {
    return {
      bootstrap: function() {
        nr(en("mutationObserverCallbacks", {}));
      },
      noAuto: function() {
        Ii();
      },
      watch: function(n) {
        var r = n.observeMutationsRoot;
        fr ? on() : nr(en("mutationObserverCallbacks", {
          observeMutationsRoot: r
        }));
      }
    };
  }
}, lr = function(t) {
  var n = {
    size: 16,
    x: 0,
    y: 0,
    flipX: !1,
    flipY: !1,
    rotate: 0
  };
  return t.toLowerCase().split(" ").reduce(function(r, a) {
    var i = a.toLowerCase().split("-"), s = i[0], f = i.slice(1).join("-");
    if (s && f === "h")
      return r.flipX = !0, r;
    if (s && f === "v")
      return r.flipY = !0, r;
    if (f = parseFloat(f), isNaN(f))
      return r;
    switch (s) {
      case "grow":
        r.size = r.size + f;
        break;
      case "shrink":
        r.size = r.size - f;
        break;
      case "left":
        r.x = r.x - f;
        break;
      case "right":
        r.x = r.x + f;
        break;
      case "up":
        r.y = r.y - f;
        break;
      case "down":
        r.y = r.y + f;
        break;
      case "rotate":
        r.rotate = r.rotate + f;
        break;
    }
    return r;
  }, n);
}, Ji = {
  mixout: function() {
    return {
      parse: {
        transform: function(n) {
          return lr(n);
        }
      }
    };
  },
  hooks: function() {
    return {
      parseNodeAttributes: function(n, r) {
        var a = r.getAttribute("data-fa-transform");
        return a && (n.transform = lr(a)), n;
      }
    };
  },
  provides: function(t) {
    t.generateAbstractTransformGrouping = function(n) {
      var r = n.main, a = n.transform, i = n.containerWidth, s = n.iconWidth, f = {
        transform: "translate(".concat(i / 2, " 256)")
      }, l = "translate(".concat(a.x * 32, ", ").concat(a.y * 32, ") "), u = "scale(".concat(a.size / 16 * (a.flipX ? -1 : 1), ", ").concat(a.size / 16 * (a.flipY ? -1 : 1), ") "), c = "rotate(".concat(a.rotate, " 0 0)"), d = {
        transform: "".concat(l, " ").concat(u, " ").concat(c)
      }, b = {
        transform: "translate(".concat(s / 2 * -1, " -256)")
      }, k = {
        outer: f,
        inner: d,
        path: b
      };
      return {
        tag: "g",
        attributes: w({}, k.outer),
        children: [{
          tag: "g",
          attributes: w({}, k.inner),
          children: [{
            tag: r.icon.tag,
            children: r.icon.children,
            attributes: w(w({}, r.icon.attributes), k.path)
          }]
        }]
      };
    };
  }
}, zt = {
  x: 0,
  y: 0,
  width: "100%",
  height: "100%"
};
function cr(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  return e.attributes && (e.attributes.fill || t) && (e.attributes.fill = "black"), e;
}
function Zi(e) {
  return e.tag === "g" ? e.children : [e];
}
var Qi = {
  hooks: function() {
    return {
      parseNodeAttributes: function(n, r) {
        var a = r.getAttribute("data-fa-mask"), i = a ? Rt(a.split(" ").map(function(s) {
          return s.trim();
        })) : hn();
        return i.prefix || (i.prefix = _e()), n.mask = i, n.maskId = r.getAttribute("data-fa-mask-id"), n;
      }
    };
  },
  provides: function(t) {
    t.generateAbstractMask = function(n) {
      var r = n.children, a = n.attributes, i = n.main, s = n.mask, f = n.maskId, l = n.transform, u = i.width, c = i.icon, d = s.width, b = s.icon, k = Ja({
        transform: l,
        containerWidth: d,
        iconWidth: u
      }), _ = {
        tag: "rect",
        attributes: w(w({}, zt), {}, {
          fill: "white"
        })
      }, S = c.children ? {
        children: c.children.map(cr)
      } : {}, y = {
        tag: "g",
        attributes: w({}, k.inner),
        children: [cr(w({
          tag: c.tag,
          attributes: w(w({}, c.attributes), k.path)
        }, S))]
      }, P = {
        tag: "g",
        attributes: w({}, k.outer),
        children: [y]
      }, x = "mask-".concat(f || ot()), A = "clip-".concat(f || ot()), C = {
        tag: "mask",
        attributes: w(w({}, zt), {}, {
          id: x,
          maskUnits: "userSpaceOnUse",
          maskContentUnits: "userSpaceOnUse"
        }),
        children: [_, P]
      }, v = {
        tag: "defs",
        children: [{
          tag: "clipPath",
          attributes: {
            id: A
          },
          children: Zi(b)
        }, C]
      };
      return r.push(v, {
        tag: "rect",
        attributes: w({
          fill: "currentColor",
          "clip-path": "url(#".concat(A, ")"),
          mask: "url(#".concat(x, ")")
        }, zt)
      }), {
        children: r,
        attributes: a
      };
    };
  }
}, eo = {
  provides: function(t) {
    var n = !1;
    Ae.matchMedia && (n = Ae.matchMedia("(prefers-reduced-motion: reduce)").matches), t.missingIconAbstract = function() {
      var r = [], a = {
        fill: "currentColor"
      }, i = {
        attributeType: "XML",
        repeatCount: "indefinite",
        dur: "2s"
      };
      r.push({
        tag: "path",
        attributes: w(w({}, a), {}, {
          d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"
        })
      });
      var s = w(w({}, i), {}, {
        attributeName: "opacity"
      }), f = {
        tag: "circle",
        attributes: w(w({}, a), {}, {
          cx: "256",
          cy: "364",
          r: "28"
        }),
        children: []
      };
      return n || f.children.push({
        tag: "animate",
        attributes: w(w({}, i), {}, {
          attributeName: "r",
          values: "28;14;28;28;14;28;"
        })
      }, {
        tag: "animate",
        attributes: w(w({}, s), {}, {
          values: "1;0;1;1;0;1;"
        })
      }), r.push(f), r.push({
        tag: "path",
        attributes: w(w({}, a), {}, {
          opacity: "1",
          d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"
        }),
        children: n ? [] : [{
          tag: "animate",
          attributes: w(w({}, s), {}, {
            values: "1;0;0;0;0;1;"
          })
        }]
      }), n || r.push({
        tag: "path",
        attributes: w(w({}, a), {}, {
          opacity: "0",
          d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"
        }),
        children: [{
          tag: "animate",
          attributes: w(w({}, s), {}, {
            values: "0;0;1;1;0;0;"
          })
        }]
      }), {
        tag: "g",
        attributes: {
          class: "missing"
        },
        children: r
      };
    };
  }
}, to = {
  hooks: function() {
    return {
      parseNodeAttributes: function(n, r) {
        var a = r.getAttribute("data-fa-symbol"), i = a === null ? !1 : a === "" ? !0 : a;
        return n.symbol = i, n;
      }
    };
  }
}, no = [ei, zi, Wi, Ui, Hi, Xi, Ki, Ji, Qi, eo, to];
pi(no, {
  mixoutsTo: ce
});
ce.noAuto;
ce.config;
ce.library;
ce.dom;
var sn = ce.parse;
ce.findIconDefinition;
ce.toHtml;
var ro = ce.icon;
ce.layer;
ce.text;
ce.counter;
var D = {}, ur = {
  get exports() {
    return D;
  },
  set exports(e) {
    D = e;
  }
}, St = {}, ao = {
  get exports() {
    return St;
  },
  set exports(e) {
    St = e;
  }
}, V = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var dr;
function io() {
  if (dr)
    return V;
  dr = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, f = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, c = e ? Symbol.for("react.forward_ref") : 60112, d = e ? Symbol.for("react.suspense") : 60113, b = e ? Symbol.for("react.suspense_list") : 60120, k = e ? Symbol.for("react.memo") : 60115, _ = e ? Symbol.for("react.lazy") : 60116, S = e ? Symbol.for("react.block") : 60121, y = e ? Symbol.for("react.fundamental") : 60117, P = e ? Symbol.for("react.responder") : 60118, x = e ? Symbol.for("react.scope") : 60119;
  function A(v) {
    if (typeof v == "object" && v !== null) {
      var ee = v.$$typeof;
      switch (ee) {
        case t:
          switch (v = v.type, v) {
            case l:
            case u:
            case r:
            case i:
            case a:
            case d:
              return v;
            default:
              switch (v = v && v.$$typeof, v) {
                case f:
                case c:
                case _:
                case k:
                case s:
                  return v;
                default:
                  return ee;
              }
          }
        case n:
          return ee;
      }
    }
  }
  function C(v) {
    return A(v) === u;
  }
  return V.AsyncMode = l, V.ConcurrentMode = u, V.ContextConsumer = f, V.ContextProvider = s, V.Element = t, V.ForwardRef = c, V.Fragment = r, V.Lazy = _, V.Memo = k, V.Portal = n, V.Profiler = i, V.StrictMode = a, V.Suspense = d, V.isAsyncMode = function(v) {
    return C(v) || A(v) === l;
  }, V.isConcurrentMode = C, V.isContextConsumer = function(v) {
    return A(v) === f;
  }, V.isContextProvider = function(v) {
    return A(v) === s;
  }, V.isElement = function(v) {
    return typeof v == "object" && v !== null && v.$$typeof === t;
  }, V.isForwardRef = function(v) {
    return A(v) === c;
  }, V.isFragment = function(v) {
    return A(v) === r;
  }, V.isLazy = function(v) {
    return A(v) === _;
  }, V.isMemo = function(v) {
    return A(v) === k;
  }, V.isPortal = function(v) {
    return A(v) === n;
  }, V.isProfiler = function(v) {
    return A(v) === i;
  }, V.isStrictMode = function(v) {
    return A(v) === a;
  }, V.isSuspense = function(v) {
    return A(v) === d;
  }, V.isValidElementType = function(v) {
    return typeof v == "string" || typeof v == "function" || v === r || v === u || v === i || v === a || v === d || v === b || typeof v == "object" && v !== null && (v.$$typeof === _ || v.$$typeof === k || v.$$typeof === s || v.$$typeof === f || v.$$typeof === c || v.$$typeof === y || v.$$typeof === P || v.$$typeof === x || v.$$typeof === S);
  }, V.typeOf = A, V;
}
var q = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var mr;
function oo() {
  return mr || (mr = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, f = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, c = e ? Symbol.for("react.forward_ref") : 60112, d = e ? Symbol.for("react.suspense") : 60113, b = e ? Symbol.for("react.suspense_list") : 60120, k = e ? Symbol.for("react.memo") : 60115, _ = e ? Symbol.for("react.lazy") : 60116, S = e ? Symbol.for("react.block") : 60121, y = e ? Symbol.for("react.fundamental") : 60117, P = e ? Symbol.for("react.responder") : 60118, x = e ? Symbol.for("react.scope") : 60119;
    function A(h) {
      return typeof h == "string" || typeof h == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      h === r || h === u || h === i || h === a || h === d || h === b || typeof h == "object" && h !== null && (h.$$typeof === _ || h.$$typeof === k || h.$$typeof === s || h.$$typeof === f || h.$$typeof === c || h.$$typeof === y || h.$$typeof === P || h.$$typeof === x || h.$$typeof === S);
    }
    function C(h) {
      if (typeof h == "object" && h !== null) {
        var ue = h.$$typeof;
        switch (ue) {
          case t:
            var $e = h.type;
            switch ($e) {
              case l:
              case u:
              case r:
              case i:
              case a:
              case d:
                return $e;
              default:
                var Ie = $e && $e.$$typeof;
                switch (Ie) {
                  case f:
                  case c:
                  case _:
                  case k:
                  case s:
                    return Ie;
                  default:
                    return ue;
                }
            }
          case n:
            return ue;
        }
      }
    }
    var v = l, ee = u, ie = f, me = s, ne = t, B = c, re = r, Ee = _, fe = k, se = n, ge = i, le = a, pe = d, Re = !1;
    function Fe(h) {
      return Re || (Re = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), p(h) || C(h) === l;
    }
    function p(h) {
      return C(h) === u;
    }
    function E(h) {
      return C(h) === f;
    }
    function M(h) {
      return C(h) === s;
    }
    function j(h) {
      return typeof h == "object" && h !== null && h.$$typeof === t;
    }
    function R(h) {
      return C(h) === c;
    }
    function Y(h) {
      return C(h) === r;
    }
    function I(h) {
      return C(h) === _;
    }
    function N(h) {
      return C(h) === k;
    }
    function L(h) {
      return C(h) === n;
    }
    function W(h) {
      return C(h) === i;
    }
    function F(h) {
      return C(h) === a;
    }
    function ae(h) {
      return C(h) === d;
    }
    q.AsyncMode = v, q.ConcurrentMode = ee, q.ContextConsumer = ie, q.ContextProvider = me, q.Element = ne, q.ForwardRef = B, q.Fragment = re, q.Lazy = Ee, q.Memo = fe, q.Portal = se, q.Profiler = ge, q.StrictMode = le, q.Suspense = pe, q.isAsyncMode = Fe, q.isConcurrentMode = p, q.isContextConsumer = E, q.isContextProvider = M, q.isElement = j, q.isForwardRef = R, q.isFragment = Y, q.isLazy = I, q.isMemo = N, q.isPortal = L, q.isProfiler = W, q.isStrictMode = F, q.isSuspense = ae, q.isValidElementType = A, q.typeOf = C;
  }()), q;
}
var vr;
function Kr() {
  return vr || (vr = 1, function(e) {
    process.env.NODE_ENV === "production" ? e.exports = io() : e.exports = oo();
  }(ao)), St;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Wt, pr;
function so() {
  if (pr)
    return Wt;
  pr = 1;
  var e = Object.getOwnPropertySymbols, t = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
  function r(i) {
    if (i == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(i);
  }
  function a() {
    try {
      if (!Object.assign)
        return !1;
      var i = new String("abc");
      if (i[5] = "de", Object.getOwnPropertyNames(i)[0] === "5")
        return !1;
      for (var s = {}, f = 0; f < 10; f++)
        s["_" + String.fromCharCode(f)] = f;
      var l = Object.getOwnPropertyNames(s).map(function(c) {
        return s[c];
      });
      if (l.join("") !== "0123456789")
        return !1;
      var u = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(c) {
        u[c] = c;
      }), Object.keys(Object.assign({}, u)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return Wt = a() ? Object.assign : function(i, s) {
    for (var f, l = r(i), u, c = 1; c < arguments.length; c++) {
      f = Object(arguments[c]);
      for (var d in f)
        t.call(f, d) && (l[d] = f[d]);
      if (e) {
        u = e(f);
        for (var b = 0; b < u.length; b++)
          n.call(f, u[b]) && (l[u[b]] = f[u[b]]);
      }
    }
    return l;
  }, Wt;
}
var Ut, br;
function En() {
  if (br)
    return Ut;
  br = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Ut = e, Ut;
}
var Ht, gr;
function Jr() {
  return gr || (gr = 1, Ht = Function.call.bind(Object.prototype.hasOwnProperty)), Ht;
}
var Vt, yr;
function fo() {
  if (yr)
    return Vt;
  yr = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = En(), n = {}, r = Jr();
    e = function(i) {
      var s = "Warning: " + i;
      typeof console < "u" && console.error(s);
      try {
        throw new Error(s);
      } catch {
      }
    };
  }
  function a(i, s, f, l, u) {
    if (process.env.NODE_ENV !== "production") {
      for (var c in i)
        if (r(i, c)) {
          var d;
          try {
            if (typeof i[c] != "function") {
              var b = Error(
                (l || "React class") + ": " + f + " type `" + c + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof i[c] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw b.name = "Invariant Violation", b;
            }
            d = i[c](s, c, l, f, null, t);
          } catch (_) {
            d = _;
          }
          if (d && !(d instanceof Error) && e(
            (l || "React class") + ": type specification of " + f + " `" + c + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof d + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), d instanceof Error && !(d.message in n)) {
            n[d.message] = !0;
            var k = u ? u() : "";
            e(
              "Failed " + f + " type: " + d.message + (k ?? "")
            );
          }
        }
    }
  }
  return a.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (n = {});
  }, Vt = a, Vt;
}
var qt, hr;
function lo() {
  if (hr)
    return qt;
  hr = 1;
  var e = Kr(), t = so(), n = En(), r = Jr(), a = fo(), i = function() {
  };
  process.env.NODE_ENV !== "production" && (i = function(f) {
    var l = "Warning: " + f;
    typeof console < "u" && console.error(l);
    try {
      throw new Error(l);
    } catch {
    }
  });
  function s() {
    return null;
  }
  return qt = function(f, l) {
    var u = typeof Symbol == "function" && Symbol.iterator, c = "@@iterator";
    function d(p) {
      var E = p && (u && p[u] || p[c]);
      if (typeof E == "function")
        return E;
    }
    var b = "<<anonymous>>", k = {
      array: P("array"),
      bigint: P("bigint"),
      bool: P("boolean"),
      func: P("function"),
      number: P("number"),
      object: P("object"),
      string: P("string"),
      symbol: P("symbol"),
      any: x(),
      arrayOf: A,
      element: C(),
      elementType: v(),
      instanceOf: ee,
      node: B(),
      objectOf: me,
      oneOf: ie,
      oneOfType: ne,
      shape: Ee,
      exact: fe
    };
    function _(p, E) {
      return p === E ? p !== 0 || 1 / p === 1 / E : p !== p && E !== E;
    }
    function S(p, E) {
      this.message = p, this.data = E && typeof E == "object" ? E : {}, this.stack = "";
    }
    S.prototype = Error.prototype;
    function y(p) {
      if (process.env.NODE_ENV !== "production")
        var E = {}, M = 0;
      function j(Y, I, N, L, W, F, ae) {
        if (L = L || b, F = F || N, ae !== n) {
          if (l) {
            var h = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw h.name = "Invariant Violation", h;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var ue = L + ":" + N;
            !E[ue] && // Avoid spamming the console because they are often not actionable except for lib authors
            M < 3 && (i(
              "You are manually calling a React.PropTypes validation function for the `" + F + "` prop on `" + L + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), E[ue] = !0, M++);
          }
        }
        return I[N] == null ? Y ? I[N] === null ? new S("The " + W + " `" + F + "` is marked as required " + ("in `" + L + "`, but its value is `null`.")) : new S("The " + W + " `" + F + "` is marked as required in " + ("`" + L + "`, but its value is `undefined`.")) : null : p(I, N, L, W, F);
      }
      var R = j.bind(null, !1);
      return R.isRequired = j.bind(null, !0), R;
    }
    function P(p) {
      function E(M, j, R, Y, I, N) {
        var L = M[j], W = le(L);
        if (W !== p) {
          var F = pe(L);
          return new S(
            "Invalid " + Y + " `" + I + "` of type " + ("`" + F + "` supplied to `" + R + "`, expected ") + ("`" + p + "`."),
            { expectedType: p }
          );
        }
        return null;
      }
      return y(E);
    }
    function x() {
      return y(s);
    }
    function A(p) {
      function E(M, j, R, Y, I) {
        if (typeof p != "function")
          return new S("Property `" + I + "` of component `" + R + "` has invalid PropType notation inside arrayOf.");
        var N = M[j];
        if (!Array.isArray(N)) {
          var L = le(N);
          return new S("Invalid " + Y + " `" + I + "` of type " + ("`" + L + "` supplied to `" + R + "`, expected an array."));
        }
        for (var W = 0; W < N.length; W++) {
          var F = p(N, W, R, Y, I + "[" + W + "]", n);
          if (F instanceof Error)
            return F;
        }
        return null;
      }
      return y(E);
    }
    function C() {
      function p(E, M, j, R, Y) {
        var I = E[M];
        if (!f(I)) {
          var N = le(I);
          return new S("Invalid " + R + " `" + Y + "` of type " + ("`" + N + "` supplied to `" + j + "`, expected a single ReactElement."));
        }
        return null;
      }
      return y(p);
    }
    function v() {
      function p(E, M, j, R, Y) {
        var I = E[M];
        if (!e.isValidElementType(I)) {
          var N = le(I);
          return new S("Invalid " + R + " `" + Y + "` of type " + ("`" + N + "` supplied to `" + j + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return y(p);
    }
    function ee(p) {
      function E(M, j, R, Y, I) {
        if (!(M[j] instanceof p)) {
          var N = p.name || b, L = Fe(M[j]);
          return new S("Invalid " + Y + " `" + I + "` of type " + ("`" + L + "` supplied to `" + R + "`, expected ") + ("instance of `" + N + "`."));
        }
        return null;
      }
      return y(E);
    }
    function ie(p) {
      if (!Array.isArray(p))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? i(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : i("Invalid argument supplied to oneOf, expected an array.")), s;
      function E(M, j, R, Y, I) {
        for (var N = M[j], L = 0; L < p.length; L++)
          if (_(N, p[L]))
            return null;
        var W = JSON.stringify(p, function(ae, h) {
          var ue = pe(h);
          return ue === "symbol" ? String(h) : h;
        });
        return new S("Invalid " + Y + " `" + I + "` of value `" + String(N) + "` " + ("supplied to `" + R + "`, expected one of " + W + "."));
      }
      return y(E);
    }
    function me(p) {
      function E(M, j, R, Y, I) {
        if (typeof p != "function")
          return new S("Property `" + I + "` of component `" + R + "` has invalid PropType notation inside objectOf.");
        var N = M[j], L = le(N);
        if (L !== "object")
          return new S("Invalid " + Y + " `" + I + "` of type " + ("`" + L + "` supplied to `" + R + "`, expected an object."));
        for (var W in N)
          if (r(N, W)) {
            var F = p(N, W, R, Y, I + "." + W, n);
            if (F instanceof Error)
              return F;
          }
        return null;
      }
      return y(E);
    }
    function ne(p) {
      if (!Array.isArray(p))
        return process.env.NODE_ENV !== "production" && i("Invalid argument supplied to oneOfType, expected an instance of array."), s;
      for (var E = 0; E < p.length; E++) {
        var M = p[E];
        if (typeof M != "function")
          return i(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + Re(M) + " at index " + E + "."
          ), s;
      }
      function j(R, Y, I, N, L) {
        for (var W = [], F = 0; F < p.length; F++) {
          var ae = p[F], h = ae(R, Y, I, N, L, n);
          if (h == null)
            return null;
          h.data && r(h.data, "expectedType") && W.push(h.data.expectedType);
        }
        var ue = W.length > 0 ? ", expected one of type [" + W.join(", ") + "]" : "";
        return new S("Invalid " + N + " `" + L + "` supplied to " + ("`" + I + "`" + ue + "."));
      }
      return y(j);
    }
    function B() {
      function p(E, M, j, R, Y) {
        return se(E[M]) ? null : new S("Invalid " + R + " `" + Y + "` supplied to " + ("`" + j + "`, expected a ReactNode."));
      }
      return y(p);
    }
    function re(p, E, M, j, R) {
      return new S(
        (p || "React class") + ": " + E + " type `" + M + "." + j + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + R + "`."
      );
    }
    function Ee(p) {
      function E(M, j, R, Y, I) {
        var N = M[j], L = le(N);
        if (L !== "object")
          return new S("Invalid " + Y + " `" + I + "` of type `" + L + "` " + ("supplied to `" + R + "`, expected `object`."));
        for (var W in p) {
          var F = p[W];
          if (typeof F != "function")
            return re(R, Y, I, W, pe(F));
          var ae = F(N, W, R, Y, I + "." + W, n);
          if (ae)
            return ae;
        }
        return null;
      }
      return y(E);
    }
    function fe(p) {
      function E(M, j, R, Y, I) {
        var N = M[j], L = le(N);
        if (L !== "object")
          return new S("Invalid " + Y + " `" + I + "` of type `" + L + "` " + ("supplied to `" + R + "`, expected `object`."));
        var W = t({}, M[j], p);
        for (var F in W) {
          var ae = p[F];
          if (r(p, F) && typeof ae != "function")
            return re(R, Y, I, F, pe(ae));
          if (!ae)
            return new S(
              "Invalid " + Y + " `" + I + "` key `" + F + "` supplied to `" + R + "`.\nBad object: " + JSON.stringify(M[j], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(p), null, "  ")
            );
          var h = ae(N, F, R, Y, I + "." + F, n);
          if (h)
            return h;
        }
        return null;
      }
      return y(E);
    }
    function se(p) {
      switch (typeof p) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !p;
        case "object":
          if (Array.isArray(p))
            return p.every(se);
          if (p === null || f(p))
            return !0;
          var E = d(p);
          if (E) {
            var M = E.call(p), j;
            if (E !== p.entries) {
              for (; !(j = M.next()).done; )
                if (!se(j.value))
                  return !1;
            } else
              for (; !(j = M.next()).done; ) {
                var R = j.value;
                if (R && !se(R[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function ge(p, E) {
      return p === "symbol" ? !0 : E ? E["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && E instanceof Symbol : !1;
    }
    function le(p) {
      var E = typeof p;
      return Array.isArray(p) ? "array" : p instanceof RegExp ? "object" : ge(E, p) ? "symbol" : E;
    }
    function pe(p) {
      if (typeof p > "u" || p === null)
        return "" + p;
      var E = le(p);
      if (E === "object") {
        if (p instanceof Date)
          return "date";
        if (p instanceof RegExp)
          return "regexp";
      }
      return E;
    }
    function Re(p) {
      var E = pe(p);
      switch (E) {
        case "array":
        case "object":
          return "an " + E;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + E;
        default:
          return E;
      }
    }
    function Fe(p) {
      return !p.constructor || !p.constructor.name ? b : p.constructor.name;
    }
    return k.checkPropTypes = a, k.resetWarningCache = a.resetWarningCache, k.PropTypes = k, k;
  }, qt;
}
var Bt, wr;
function co() {
  if (wr)
    return Bt;
  wr = 1;
  var e = En();
  function t() {
  }
  function n() {
  }
  return n.resetWarningCache = t, Bt = function() {
    function r(s, f, l, u, c, d) {
      if (d !== e) {
        var b = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw b.name = "Invariant Violation", b;
      }
    }
    r.isRequired = r;
    function a() {
      return r;
    }
    var i = {
      array: r,
      bigint: r,
      bool: r,
      func: r,
      number: r,
      object: r,
      string: r,
      symbol: r,
      any: r,
      arrayOf: a,
      element: r,
      elementType: r,
      instanceOf: a,
      node: r,
      objectOf: a,
      oneOf: a,
      oneOfType: a,
      shape: a,
      exact: a,
      checkPropTypes: n,
      resetWarningCache: t
    };
    return i.PropTypes = i, i;
  }, Bt;
}
if (process.env.NODE_ENV !== "production") {
  var uo = Kr(), mo = !0;
  ur.exports = lo()(uo.isElement, mo);
} else
  ur.exports = co()();
function xr(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Se(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? xr(Object(n), !0).forEach(function(r) {
      He(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : xr(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function Tt(e) {
  return Tt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Tt(e);
}
function He(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function vo(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), a, i;
  for (i = 0; i < r.length; i++)
    a = r[i], !(t.indexOf(a) >= 0) && (n[a] = e[a]);
  return n;
}
function po(e, t) {
  if (e == null)
    return {};
  var n = vo(e, t), r, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      r = i[a], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function fn(e) {
  return bo(e) || go(e) || yo(e) || ho();
}
function bo(e) {
  if (Array.isArray(e))
    return ln(e);
}
function go(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null)
    return Array.from(e);
}
function yo(e, t) {
  if (e) {
    if (typeof e == "string")
      return ln(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set")
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return ln(e, t);
  }
}
function ln(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++)
    r[n] = e[n];
  return r;
}
function ho() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function wo(e) {
  var t, n = e.beat, r = e.fade, a = e.beatFade, i = e.bounce, s = e.shake, f = e.flash, l = e.spin, u = e.spinPulse, c = e.spinReverse, d = e.pulse, b = e.fixedWidth, k = e.inverse, _ = e.border, S = e.listItem, y = e.flip, P = e.size, x = e.rotation, A = e.pull, C = (t = {
    "fa-beat": n,
    "fa-fade": r,
    "fa-beat-fade": a,
    "fa-bounce": i,
    "fa-shake": s,
    "fa-flash": f,
    "fa-spin": l,
    "fa-spin-reverse": c,
    "fa-spin-pulse": u,
    "fa-pulse": d,
    "fa-fw": b,
    "fa-inverse": k,
    "fa-border": _,
    "fa-li": S,
    "fa-flip": y === !0,
    "fa-flip-horizontal": y === "horizontal" || y === "both",
    "fa-flip-vertical": y === "vertical" || y === "both"
  }, He(t, "fa-".concat(P), typeof P < "u" && P !== null), He(t, "fa-rotate-".concat(x), typeof x < "u" && x !== null && x !== 0), He(t, "fa-pull-".concat(A), typeof A < "u" && A !== null), He(t, "fa-swap-opacity", e.swapOpacity), t);
  return Object.keys(C).map(function(v) {
    return C[v] ? v : null;
  }).filter(function(v) {
    return v;
  });
}
function xo(e) {
  return e = e - 0, e === e;
}
function Zr(e) {
  return xo(e) ? e : (e = e.replace(/[\-_\s]+(.)?/g, function(t, n) {
    return n ? n.toUpperCase() : "";
  }), e.substr(0, 1).toLowerCase() + e.substr(1));
}
var ko = ["style"];
function Eo(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function Oo(e) {
  return e.split(";").map(function(t) {
    return t.trim();
  }).filter(function(t) {
    return t;
  }).reduce(function(t, n) {
    var r = n.indexOf(":"), a = Zr(n.slice(0, r)), i = n.slice(r + 1).trim();
    return a.startsWith("webkit") ? t[Eo(a)] = i : t[a] = i, t;
  }, {});
}
function Qr(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (typeof t == "string")
    return t;
  var r = (t.children || []).map(function(l) {
    return Qr(e, l);
  }), a = Object.keys(t.attributes || {}).reduce(function(l, u) {
    var c = t.attributes[u];
    switch (u) {
      case "class":
        l.attrs.className = c, delete t.attributes.class;
        break;
      case "style":
        l.attrs.style = Oo(c);
        break;
      default:
        u.indexOf("aria-") === 0 || u.indexOf("data-") === 0 ? l.attrs[u.toLowerCase()] = c : l.attrs[Zr(u)] = c;
    }
    return l;
  }, {
    attrs: {}
  }), i = n.style, s = i === void 0 ? {} : i, f = po(n, ko);
  return a.attrs.style = Se(Se({}, a.attrs.style), s), e.apply(void 0, [t.tag, Se(Se({}, a.attrs), f)].concat(fn(r)));
}
var ea = !1;
try {
  ea = process.env.NODE_ENV === "production";
} catch {
}
function Po() {
  if (!ea && console && typeof console.error == "function") {
    var e;
    (e = console).error.apply(e, arguments);
  }
}
function kr(e) {
  if (e && Tt(e) === "object" && e.prefix && e.iconName && e.icon)
    return e;
  if (sn.icon)
    return sn.icon(e);
  if (e === null)
    return null;
  if (e && Tt(e) === "object" && e.prefix && e.iconName)
    return e;
  if (Array.isArray(e) && e.length === 2)
    return {
      prefix: e[0],
      iconName: e[1]
    };
  if (typeof e == "string")
    return {
      prefix: "fas",
      iconName: e
    };
}
function Gt(e, t) {
  return Array.isArray(t) && t.length > 0 || !Array.isArray(t) && t ? He({}, e, t) : {};
}
var Te = /* @__PURE__ */ At.forwardRef(function(e, t) {
  var n = e.icon, r = e.mask, a = e.symbol, i = e.className, s = e.title, f = e.titleId, l = e.maskId, u = kr(n), c = Gt("classes", [].concat(fn(wo(e)), fn(i.split(" ")))), d = Gt("transform", typeof e.transform == "string" ? sn.transform(e.transform) : e.transform), b = Gt("mask", kr(r)), k = ro(u, Se(Se(Se(Se({}, c), d), b), {}, {
    symbol: a,
    title: s,
    titleId: f,
    maskId: l
  }));
  if (!k)
    return Po("Could not find icon", u), null;
  var _ = k.abstract, S = {
    ref: t
  };
  return Object.keys(e).forEach(function(y) {
    Te.defaultProps.hasOwnProperty(y) || (S[y] = e[y]);
  }), So(_[0], S);
});
Te.displayName = "FontAwesomeIcon";
Te.propTypes = {
  beat: D.bool,
  border: D.bool,
  beatFade: D.bool,
  bounce: D.bool,
  className: D.string,
  fade: D.bool,
  flash: D.bool,
  mask: D.oneOfType([D.object, D.array, D.string]),
  maskId: D.string,
  fixedWidth: D.bool,
  inverse: D.bool,
  flip: D.oneOf([!0, !1, "horizontal", "vertical", "both"]),
  icon: D.oneOfType([D.object, D.array, D.string]),
  listItem: D.bool,
  pull: D.oneOf(["right", "left"]),
  pulse: D.bool,
  rotation: D.oneOf([0, 90, 180, 270]),
  shake: D.bool,
  size: D.oneOf(["2xs", "xs", "sm", "lg", "xl", "2xl", "1x", "2x", "3x", "4x", "5x", "6x", "7x", "8x", "9x", "10x"]),
  spin: D.bool,
  spinPulse: D.bool,
  spinReverse: D.bool,
  symbol: D.oneOfType([D.bool, D.string]),
  title: D.string,
  titleId: D.string,
  transform: D.oneOfType([D.string, D.object]),
  swapOpacity: D.bool
};
Te.defaultProps = {
  border: !1,
  className: "",
  mask: null,
  maskId: null,
  fixedWidth: !1,
  inverse: !1,
  flip: !1,
  icon: null,
  listItem: !1,
  pull: null,
  pulse: !1,
  rotation: null,
  size: null,
  spin: !1,
  spinPulse: !1,
  spinReverse: !1,
  beat: !1,
  fade: !1,
  beatFade: !1,
  bounce: !1,
  shake: !1,
  symbol: !1,
  title: "",
  titleId: null,
  transform: null,
  swapOpacity: !1
};
var So = Qr.bind(null, At.createElement), To = {
  prefix: "fas",
  iconName: "arrow-down-wide-short",
  icon: [576, 512, ["sort-amount-asc", "sort-amount-down"], "f160", "M151.6 469.6C145.5 476.2 137 480 128 480s-17.5-3.8-23.6-10.4l-88-96c-11.9-13-11.1-33.3 2-45.2s33.3-11.1 45.2 2L96 365.7V64c0-17.7 14.3-32 32-32s32 14.3 32 32V365.7l32.4-35.4c11.9-13 32.2-13.9 45.2-2s13.9 32.2 2 45.2l-88 96zM320 480c-17.7 0-32-14.3-32-32s14.3-32 32-32h32c17.7 0 32 14.3 32 32s-14.3 32-32 32H320zm0-128c-17.7 0-32-14.3-32-32s14.3-32 32-32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H320zm0-128c-17.7 0-32-14.3-32-32s14.3-32 32-32H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H320zm0-128c-17.7 0-32-14.3-32-32s14.3-32 32-32H544c17.7 0 32 14.3 32 32s-14.3 32-32 32H320z"]
}, Ao = {
  prefix: "fas",
  iconName: "arrow-down-short-wide",
  icon: [576, 512, ["sort-amount-desc", "sort-amount-down-alt"], "f884", "M151.6 469.6C145.5 476.2 137 480 128 480s-17.5-3.8-23.6-10.4l-88-96c-11.9-13-11.1-33.3 2-45.2s33.3-11.1 45.2 2L96 365.7V64c0-17.7 14.3-32 32-32s32 14.3 32 32V365.7l32.4-35.4c11.9-13 32.2-13.9 45.2-2s13.9 32.2 2 45.2l-88 96zM320 32h32c17.7 0 32 14.3 32 32s-14.3 32-32 32H320c-17.7 0-32-14.3-32-32s14.3-32 32-32zm0 128h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H320c-17.7 0-32-14.3-32-32s14.3-32 32-32zm0 128H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H320c-17.7 0-32-14.3-32-32s14.3-32 32-32zm0 128H544c17.7 0 32 14.3 32 32s-14.3 32-32 32H320c-17.7 0-32-14.3-32-32s14.3-32 32-32z"]
}, _o = {
  prefix: "fas",
  iconName: "rotate",
  icon: [512, 512, [128260, "sync-alt"], "f2f1", "M142.9 142.9c62.2-62.2 162.7-62.5 225.3-1L327 183c-6.9 6.9-8.9 17.2-5.2 26.2s12.5 14.8 22.2 14.8H463.5c0 0 0 0 0 0H472c13.3 0 24-10.7 24-24V72c0-9.7-5.8-18.5-14.8-22.2s-19.3-1.7-26.2 5.2L413.4 96.6c-87.6-86.5-228.7-86.2-315.8 1C73.2 122 55.6 150.7 44.8 181.4c-5.9 16.7 2.9 34.9 19.5 40.8s34.9-2.9 40.8-19.5c7.7-21.8 20.2-42.3 37.8-59.8zM16 312v7.6 .7V440c0 9.7 5.8 18.5 14.8 22.2s19.3 1.7 26.2-5.2l41.6-41.6c87.6 86.5 228.7 86.2 315.8-1c24.4-24.4 42.1-53.1 52.9-83.7c5.9-16.7-2.9-34.9-19.5-40.8s-34.9 2.9-40.8 19.5c-7.7 21.8-20.2 42.3-37.8 59.8c-62.2 62.2-162.7 62.5-225.3 1L185 329c6.9-6.9 8.9-17.2 5.2-26.2s-12.5-14.8-22.2-14.8H48.4h-.7H40c-13.3 0-24 10.7-24 24z"]
}, Co = {
  prefix: "fas",
  iconName: "arrows-up-down",
  icon: [320, 512, ["arrows-v"], "f07d", "M182.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-96 96c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L128 109.3V402.7L86.6 361.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l96 96c12.5 12.5 32.8 12.5 45.3 0l96-96c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 402.7V109.3l41.4 41.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-96-96z"]
};
const Ro = ({
  title: e,
  dataName: t,
  order: n,
  setOrder: r
}) => {
  function a() {
    return n.orderParam === t && n.orderDirection === "asc" ? /* @__PURE__ */ H(Te, { icon: Ao }) : n.orderParam === t && n.orderDirection === "desc" ? /* @__PURE__ */ H(Te, { icon: To }) : /* @__PURE__ */ H(
      Te,
      {
        icon: Co,
        className: "datalist-icon-sort-disabled"
      }
    );
  }
  function i() {
    r({ orderParam: t, orderDirection: "desc" });
  }
  return /* @__PURE__ */ H("th", { className: "datalist-column-title", onClick: i, children: /* @__PURE__ */ De("span", { children: [
    e,
    a()
  ] }) });
};
function Io(e) {
  const { apiService: t, limit: n, dataParser: r } = e, [a, i] = Je(1), [s, f] = Je(null), [l, u] = Je(0), [c, d] = Je(!1);
  function b(_) {
    if (!t.listPaged)
      return;
    d(!1);
    const { page: S, limit: y, orderParam: P, orderDirection: x, query: A } = _;
    t.listPaged({ page: S, limit: y, orderParam: P, orderDirection: x, query: A }).then((C) => {
      setTimeout(() => {
        if (C.statusCode !== 200)
          return;
        const v = r ? r(C.body) : C.body;
        f(v.data), u(v.total), i(S || 1), d(!0);
      }, 300);
    });
  }
  function k(_) {
    const { page: S, orderDirection: y, orderParam: P, query: x } = _;
    b({ page: S, limit: n, orderDirection: y, orderParam: P, query: x }), i(S || 1);
  }
  return { defaultPage: a, data: s, totalItens: l, loaded: c, loadData: b, loadPage: k };
}
const No = ({
  defaultPage: e,
  totalItens: t,
  pageLimit: n,
  order: r,
  paginationClassName: a,
  query: i,
  loadPage: s
}) => {
  const f = Math.round(t / n);
  function l(y) {
    return y === e ? "datalist-pagination-button-active" : "";
  }
  function u(y) {
    y.preventDefault(), s({ page: parseInt(y.target.id), ...r, query: i });
  }
  function c(y) {
    y.preventDefault();
    const P = e + 1;
    s({ page: P, ...r, query: i });
  }
  function d(y) {
    y.preventDefault();
    const P = e - 1;
    s({ page: P, ...r, query: i });
  }
  function b(y) {
    const P = {
      prev: {
        rule: e === 1,
        label: "Previous",
        text: "Anterior",
        onclick: d
      },
      next: {
        rule: e === f,
        label: "Next",
        text: "Próximo",
        onclick: c
      }
    }, { rule: x, label: A, text: C, onclick: v } = P[y];
    return x ? /* @__PURE__ */ H("li", { className: "datalist-pagination-button-disabled", children: /* @__PURE__ */ H("span", { "aria-hidden": "true", children: C }) }) : /* @__PURE__ */ H("li", { className: "datalist-pagination-button", children: /* @__PURE__ */ H("a", { href: "#", "aria-label": A, onClick: v, children: C }) });
  }
  function k() {
    const y = [], P = f - 4;
    for (let x = 1; x <= f; x++)
      (x === 1 || x === e || e <= 4 && (x === 5 || x <= 4) || e > P && x >= P || e <= P && (x === e - 1 || x === e + 1) || x === f) && y.push(x);
    return e >= 5 && y.splice(1, 0, "..."), e <= f - 4 && y.splice(-1, 0, "..."), y;
  }
  function _() {
    const y = k() || [];
    return !f || f <= 0 ? /* @__PURE__ */ H(Pe, {}) : y.map((P, x) => P === "..." ? /* @__PURE__ */ H("li", { className: "datalist-pagination-button-disabled", children: /* @__PURE__ */ H("a", { href: "#", children: "..." }) }, x) : /* @__PURE__ */ H("li", { className: `${l(P)}`, children: /* @__PURE__ */ H("a", { href: "#", id: P, onClick: u, children: P }) }, x));
  }
  function S() {
    return t <= 0 || t < n ? /* @__PURE__ */ H(Pe, {}) : /* @__PURE__ */ De("div", { className: "datalist-pagination-wrapper", children: [
      /* @__PURE__ */ De("div", { className: "datalist-itens-info", children: [
        "Mostrando 1 até ",
        n,
        " de ",
        t,
        " registros"
      ] }),
      /* @__PURE__ */ De("ul", { className: a || "datalist-pagination", children: [
        b("prev"),
        _(),
        b("next")
      ] })
    ] });
  }
  return /* @__PURE__ */ H(Pe, { children: S() });
}, jo = xa(
  {}
), Mo = ({
  columns: e,
  apiService: t,
  pageLimit: n,
  defaultOrder: r,
  orderDirection: a,
  className: i,
  paginationClassName: s,
  query: f,
  requiredQuery: l,
  dataParser: u
}) => {
  n = n || 10;
  const { data: c, defaultPage: d, totalItens: b, loaded: k, loadPage: _, loadData: S } = Io({
    apiService: t,
    limit: n,
    defaultOrder: r,
    orderDirection: a,
    query: { ...f, ...l },
    dataParser: u
  }), [y, P] = Je({
    orderDirection: null,
    orderParam: null
  });
  function x(B) {
    B.orderParam === y.orderParam && (y.orderDirection === "asc" && (B.orderDirection = "desc"), y.orderDirection === "desc" && (B.orderDirection = "asc")), P(B);
  }
  function A() {
    return !e || e.length <= 0 ? /* @__PURE__ */ H(Pe, {}) : e.map((B, re) => {
      if (B)
        return B.noOrder ? /* @__PURE__ */ H("th", { children: B.title }, re) : /* @__PURE__ */ H(
          Ro,
          {
            title: B.title || "",
            dataName: B.data || "",
            setOrder: x,
            order: y
          },
          re
        );
    });
  }
  function C(B, re) {
    return B.render ? B.render(re) : B.data ? re[B.data] : " - ";
  }
  function v(B) {
    return !e || e.length <= 0 ? /* @__PURE__ */ H(Pe, {}) : e.map((re, Ee) => {
      if (re)
        return /* @__PURE__ */ H("td", { children: C(re, B) }, Ee);
    });
  }
  function ee() {
    return !c || c.length <= 0 ? /* @__PURE__ */ H(Pe, {}) : c.map((B, re) => /* @__PURE__ */ H("tr", { children: v(B) }, re));
  }
  function ie() {
    return k ? /* @__PURE__ */ H(Pe, {}) : /* @__PURE__ */ De("div", { className: "datalist-loading", children: [
      /* @__PURE__ */ H(Te, { icon: _o }),
      " ",
      /* @__PURE__ */ H("span", { children: "Carregando..." })
    ] });
  }
  function me() {
    S({ limit: n, query: { ...f, ...l } });
  }
  Ln(() => {
    !y || !y.orderParam || (S({
      limit: n,
      ...y,
      query: { ...f, ...l }
    }), console.log("datalist"));
  }, [y]), Ln(() => {
    c != null && (!f || Object.keys(f).length <= 0) || S({ limit: n, query: { ...f, ...l } });
  }, [f]);
  function ne() {
    return k && (!c || c.length <= 0) ? /* @__PURE__ */ H(Pe, { children: "Não há ítens a serem exibidos." }) : /* @__PURE__ */ De("div", { className: "datalist", children: [
      ie(),
      /* @__PURE__ */ De("table", { className: "datalist-table", children: [
        /* @__PURE__ */ H("thead", { className: "datalist-thead", children: /* @__PURE__ */ H("tr", { className: "datalist-tr", children: A() }) }),
        /* @__PURE__ */ H("tbody", { className: "datalist-tbody", children: ee() })
      ] }),
      /* @__PURE__ */ H(
        No,
        {
          defaultPage: d,
          loadPage: _,
          pageLimit: n || 10,
          totalItens: b,
          order: y,
          paginationClassName: s,
          query: { ...f, ...l }
        }
      )
    ] });
  }
  return /* @__PURE__ */ H(jo.Provider, { value: { reloadList: me }, children: ne() });
};
export {
  Mo as DataList,
  jo as DatalistContext
};
