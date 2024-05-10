var rl = Object.defineProperty;
var il = (e, n, t) => n in e ? rl(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t;
var Xe = (e, n, t) => (il(e, typeof n != "symbol" ? n + "" : n, t), t), di = (e, n, t) => {
  if (!n.has(e))
    throw TypeError("Cannot " + t);
};
var x = (e, n, t) => (di(e, n, "read from private field"), t ? t.call(e) : n.get(e)), xe = (e, n, t) => {
  if (n.has(e))
    throw TypeError("Cannot add the same private member more than once");
  n instanceof WeakSet ? n.add(e) : n.set(e, t);
}, Ce = (e, n, t, l) => (di(e, n, "write to private field"), l ? l.call(e, t) : n.set(e, t), t);
var Wr = (e, n, t, l) => ({
  set _(h) {
    Ce(e, n, h, t);
  },
  get _() {
    return x(e, n, l);
  }
}), Re = (e, n, t) => (di(e, n, "access private method"), t);
import os, { createContext as nl, useContext as ss, useState as Ri, useCallback as po, useEffect as Oi, useRef as ol, useMemo as sl } from "react";
var Xt = "/", jr = "+", Er = "#", al = {
  matches: as,
  extract: ls,
  exec: ll,
  fill: ul,
  clean: hl
};
function ll(e, n) {
  return as(e, n) ? ls(e, n) : null;
}
function as(e, n) {
  for (var t = e.split(Xt), l = n.split(Xt), h = t.length, o = l.length, r = h - 1, s = 0; s < h; s++) {
    var i = t[s], a = i[0], c = l[s];
    if (!(!c && !i)) {
      if (!c && i !== Er)
        return !1;
      if (a === Er)
        return s === r;
      if (a !== jr && i !== c)
        return !1;
    }
  }
  return h === o;
}
function ul(e, n) {
  for (var t = e.split(Xt), l = t.length, h = [], o = 0; o < l; o++) {
    var r = t[o], s = r[0], i = r.slice(1), a = n[i];
    if (s === Er) {
      a !== void 0 && h.push([].concat(a).join(Xt));
      break;
    } else
      s === jr ? h.push("" + a) : h.push(r);
  }
  return h.join(Xt);
}
function ls(e, n) {
  for (var t = {}, l = e.split(Xt), h = n.split(Xt), o = l.length, r = 0; r < o; r++) {
    var s = l[r], i = s[0];
    if (s.length !== 1)
      if (i === Er) {
        t[s.slice(1)] = h.slice(r);
        break;
      } else
        i === jr && (t[s.slice(1)] = h[r]);
  }
  return t;
}
function hl(e) {
  for (var n = e.split(Xt), t = n.length, l = [], h = 0; h < t; h++) {
    var o = n[h], r = o[0];
    r === Er ? l.push(Er) : r === jr ? l.push(jr) : l.push(o);
  }
  return l.join("/");
}
const eo = nl({});
function nh(e, n = {}) {
  const { client: t, connectionStatus: l, parserMethod: h } = ss(eo), [o, r] = Ri(void 0), s = po(async () => {
    t == null || t.subscribe(e, n);
  }, [t, n, e]), i = po(
    (a, c) => {
      [e].flat().some((d) => al.matches(d, a)) && r({
        topic: a,
        message: (h == null ? void 0 : h(c)) || c.toString()
      });
    },
    [h, e]
  );
  return Oi(() => (t != null && t.connected && (s(), t.on("message", i)), () => {
    t == null || t.off("message", i);
  }), [i, t, s]), {
    client: t,
    topic: e,
    message: o,
    connectionStatus: l
  };
}
function oh() {
  const { connectionStatus: e, client: n, parserMethod: t } = ss(
    eo
  );
  return {
    connectionStatus: e,
    client: n,
    parserMethod: t
  };
}
var Ci = { exports: {} }, Ir = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var go;
function cl() {
  if (go)
    return Ir;
  go = 1;
  var e = os, n = Symbol.for("react.element"), t = Symbol.for("react.fragment"), l = Object.prototype.hasOwnProperty, h = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, o = { key: !0, ref: !0, __self: !0, __source: !0 };
  function r(s, i, a) {
    var c, d = {}, g = null, b = null;
    a !== void 0 && (g = "" + a), i.key !== void 0 && (g = "" + i.key), i.ref !== void 0 && (b = i.ref);
    for (c in i)
      l.call(i, c) && !o.hasOwnProperty(c) && (d[c] = i[c]);
    if (s && s.defaultProps)
      for (c in i = s.defaultProps, i)
        d[c] === void 0 && (d[c] = i[c]);
    return { $$typeof: n, type: s, key: g, ref: b, props: d, _owner: h.current };
  }
  return Ir.Fragment = t, Ir.jsx = r, Ir.jsxs = r, Ir;
}
var Tr = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var bo;
function fl() {
  return bo || (bo = 1, process.env.NODE_ENV !== "production" && function() {
    var e = os, n = Symbol.for("react.element"), t = Symbol.for("react.portal"), l = Symbol.for("react.fragment"), h = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), r = Symbol.for("react.provider"), s = Symbol.for("react.context"), i = Symbol.for("react.forward_ref"), a = Symbol.for("react.suspense"), c = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), g = Symbol.for("react.lazy"), b = Symbol.for("react.offscreen"), m = Symbol.iterator, y = "@@iterator";
    function T(L) {
      if (L === null || typeof L != "object")
        return null;
      var _e = m && L[m] || L[y];
      return typeof _e == "function" ? _e : null;
    }
    var U = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function S(L) {
      {
        for (var _e = arguments.length, Te = new Array(_e > 1 ? _e - 1 : 0), Pe = 1; Pe < _e; Pe++)
          Te[Pe - 1] = arguments[Pe];
        R("error", L, Te);
      }
    }
    function R(L, _e, Te) {
      {
        var Pe = U.ReactDebugCurrentFrame, Ne = Pe.getStackAddendum();
        Ne !== "" && (_e += "%s", Te = Te.concat([Ne]));
        var We = Te.map(function(je) {
          return String(je);
        });
        We.unshift("Warning: " + _e), Function.prototype.apply.call(console[L], console, We);
      }
    }
    var F = !1, W = !1, C = !1, O = !1, M = !1, $;
    $ = Symbol.for("react.module.reference");
    function X(L) {
      return !!(typeof L == "string" || typeof L == "function" || L === l || L === o || M || L === h || L === a || L === c || O || L === b || F || W || C || typeof L == "object" && L !== null && (L.$$typeof === g || L.$$typeof === d || L.$$typeof === r || L.$$typeof === s || L.$$typeof === i || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      L.$$typeof === $ || L.getModuleId !== void 0));
    }
    function te(L, _e, Te) {
      var Pe = L.displayName;
      if (Pe)
        return Pe;
      var Ne = _e.displayName || _e.name || "";
      return Ne !== "" ? Te + "(" + Ne + ")" : Te;
    }
    function E(L) {
      return L.displayName || "Context";
    }
    function q(L) {
      if (L == null)
        return null;
      if (typeof L.tag == "number" && S("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof L == "function")
        return L.displayName || L.name || null;
      if (typeof L == "string")
        return L;
      switch (L) {
        case l:
          return "Fragment";
        case t:
          return "Portal";
        case o:
          return "Profiler";
        case h:
          return "StrictMode";
        case a:
          return "Suspense";
        case c:
          return "SuspenseList";
      }
      if (typeof L == "object")
        switch (L.$$typeof) {
          case s:
            var _e = L;
            return E(_e) + ".Consumer";
          case r:
            var Te = L;
            return E(Te._context) + ".Provider";
          case i:
            return te(L, L.render, "ForwardRef");
          case d:
            var Pe = L.displayName || null;
            return Pe !== null ? Pe : q(L.type) || "Memo";
          case g: {
            var Ne = L, We = Ne._payload, je = Ne._init;
            try {
              return q(je(We));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var Z = Object.assign, z = 0, be, ne, V, me, ie, Ee, A;
    function Q() {
    }
    Q.__reactDisabledLog = !0;
    function fe() {
      {
        if (z === 0) {
          be = console.log, ne = console.info, V = console.warn, me = console.error, ie = console.group, Ee = console.groupCollapsed, A = console.groupEnd;
          var L = {
            configurable: !0,
            enumerable: !0,
            value: Q,
            writable: !0
          };
          Object.defineProperties(console, {
            info: L,
            log: L,
            warn: L,
            error: L,
            group: L,
            groupCollapsed: L,
            groupEnd: L
          });
        }
        z++;
      }
    }
    function Ae() {
      {
        if (z--, z === 0) {
          var L = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Z({}, L, {
              value: be
            }),
            info: Z({}, L, {
              value: ne
            }),
            warn: Z({}, L, {
              value: V
            }),
            error: Z({}, L, {
              value: me
            }),
            group: Z({}, L, {
              value: ie
            }),
            groupCollapsed: Z({}, L, {
              value: Ee
            }),
            groupEnd: Z({}, L, {
              value: A
            })
          });
        }
        z < 0 && S("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ae = U.ReactCurrentDispatcher, B;
    function _(L, _e, Te) {
      {
        if (B === void 0)
          try {
            throw Error();
          } catch (Ne) {
            var Pe = Ne.stack.trim().match(/\n( *(at )?)/);
            B = Pe && Pe[1] || "";
          }
        return `
` + B + L;
      }
    }
    var Y = !1, se;
    {
      var ee = typeof WeakMap == "function" ? WeakMap : Map;
      se = new ee();
    }
    function J(L, _e) {
      if (!L || Y)
        return "";
      {
        var Te = se.get(L);
        if (Te !== void 0)
          return Te;
      }
      var Pe;
      Y = !0;
      var Ne = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var We;
      We = ae.current, ae.current = null, fe();
      try {
        if (_e) {
          var je = function() {
            throw Error();
          };
          if (Object.defineProperty(je.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(je, []);
            } catch (gt) {
              Pe = gt;
            }
            Reflect.construct(L, [], je);
          } else {
            try {
              je.call();
            } catch (gt) {
              Pe = gt;
            }
            L.call(je.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (gt) {
            Pe = gt;
          }
          L();
        }
      } catch (gt) {
        if (gt && Pe && typeof gt.stack == "string") {
          for (var Ue = gt.stack.split(`
`), pt = Pe.stack.split(`
`), tt = Ue.length - 1, rt = pt.length - 1; tt >= 1 && rt >= 0 && Ue[tt] !== pt[rt]; )
            rt--;
          for (; tt >= 1 && rt >= 0; tt--, rt--)
            if (Ue[tt] !== pt[rt]) {
              if (tt !== 1 || rt !== 1)
                do
                  if (tt--, rt--, rt < 0 || Ue[tt] !== pt[rt]) {
                    var Et = `
` + Ue[tt].replace(" at new ", " at ");
                    return L.displayName && Et.includes("<anonymous>") && (Et = Et.replace("<anonymous>", L.displayName)), typeof L == "function" && se.set(L, Et), Et;
                  }
                while (tt >= 1 && rt >= 0);
              break;
            }
        }
      } finally {
        Y = !1, ae.current = We, Ae(), Error.prepareStackTrace = Ne;
      }
      var yr = L ? L.displayName || L.name : "", er = yr ? _(yr) : "";
      return typeof L == "function" && se.set(L, er), er;
    }
    function ce(L, _e, Te) {
      return J(L, !1);
    }
    function pe(L) {
      var _e = L.prototype;
      return !!(_e && _e.isReactComponent);
    }
    function k(L, _e, Te) {
      if (L == null)
        return "";
      if (typeof L == "function")
        return J(L, pe(L));
      if (typeof L == "string")
        return _(L);
      switch (L) {
        case a:
          return _("Suspense");
        case c:
          return _("SuspenseList");
      }
      if (typeof L == "object")
        switch (L.$$typeof) {
          case i:
            return ce(L.render);
          case d:
            return k(L.type, _e, Te);
          case g: {
            var Pe = L, Ne = Pe._payload, We = Pe._init;
            try {
              return k(We(Ne), _e, Te);
            } catch {
            }
          }
        }
      return "";
    }
    var N = Object.prototype.hasOwnProperty, D = {}, re = U.ReactDebugCurrentFrame;
    function G(L) {
      if (L) {
        var _e = L._owner, Te = k(L.type, L._source, _e ? _e.type : null);
        re.setExtraStackFrame(Te);
      } else
        re.setExtraStackFrame(null);
    }
    function j(L, _e, Te, Pe, Ne) {
      {
        var We = Function.call.bind(N);
        for (var je in L)
          if (We(L, je)) {
            var Ue = void 0;
            try {
              if (typeof L[je] != "function") {
                var pt = Error((Pe || "React class") + ": " + Te + " type `" + je + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof L[je] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw pt.name = "Invariant Violation", pt;
              }
              Ue = L[je](_e, je, Pe, Te, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (tt) {
              Ue = tt;
            }
            Ue && !(Ue instanceof Error) && (G(Ne), S("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", Pe || "React class", Te, je, typeof Ue), G(null)), Ue instanceof Error && !(Ue.message in D) && (D[Ue.message] = !0, G(Ne), S("Failed %s type: %s", Te, Ue.message), G(null));
          }
      }
    }
    var K = Array.isArray;
    function ye(L) {
      return K(L);
    }
    function Se(L) {
      {
        var _e = typeof Symbol == "function" && Symbol.toStringTag, Te = _e && L[Symbol.toStringTag] || L.constructor.name || "Object";
        return Te;
      }
    }
    function ke(L) {
      try {
        return Me(L), !1;
      } catch {
        return !0;
      }
    }
    function Me(L) {
      return "" + L;
    }
    function f(L) {
      if (ke(L))
        return S("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Se(L)), Me(L);
    }
    var u = U.ReactCurrentOwner, p = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, w, I, v;
    v = {};
    function P(L) {
      if (N.call(L, "ref")) {
        var _e = Object.getOwnPropertyDescriptor(L, "ref").get;
        if (_e && _e.isReactWarning)
          return !1;
      }
      return L.ref !== void 0;
    }
    function H(L) {
      if (N.call(L, "key")) {
        var _e = Object.getOwnPropertyDescriptor(L, "key").get;
        if (_e && _e.isReactWarning)
          return !1;
      }
      return L.key !== void 0;
    }
    function de(L, _e) {
      if (typeof L.ref == "string" && u.current && _e && u.current.stateNode !== _e) {
        var Te = q(u.current.type);
        v[Te] || (S('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', q(u.current.type), L.ref), v[Te] = !0);
      }
    }
    function oe(L, _e) {
      {
        var Te = function() {
          w || (w = !0, S("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", _e));
        };
        Te.isReactWarning = !0, Object.defineProperty(L, "key", {
          get: Te,
          configurable: !0
        });
      }
    }
    function ve(L, _e) {
      {
        var Te = function() {
          I || (I = !0, S("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", _e));
        };
        Te.isReactWarning = !0, Object.defineProperty(L, "ref", {
          get: Te,
          configurable: !0
        });
      }
    }
    var Ie = function(L, _e, Te, Pe, Ne, We, je) {
      var Ue = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: n,
        // Built-in properties that belong on the element
        type: L,
        key: _e,
        ref: Te,
        props: je,
        // Record the component responsible for creating this element.
        _owner: We
      };
      return Ue._store = {}, Object.defineProperty(Ue._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(Ue, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Pe
      }), Object.defineProperty(Ue, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Ne
      }), Object.freeze && (Object.freeze(Ue.props), Object.freeze(Ue)), Ue;
    };
    function Oe(L, _e, Te, Pe, Ne) {
      {
        var We, je = {}, Ue = null, pt = null;
        Te !== void 0 && (f(Te), Ue = "" + Te), H(_e) && (f(_e.key), Ue = "" + _e.key), P(_e) && (pt = _e.ref, de(_e, Ne));
        for (We in _e)
          N.call(_e, We) && !p.hasOwnProperty(We) && (je[We] = _e[We]);
        if (L && L.defaultProps) {
          var tt = L.defaultProps;
          for (We in tt)
            je[We] === void 0 && (je[We] = tt[We]);
        }
        if (Ue || pt) {
          var rt = typeof L == "function" ? L.displayName || L.name || "Unknown" : L;
          Ue && oe(je, rt), pt && ve(je, rt);
        }
        return Ie(L, Ue, pt, Ne, Pe, u.current, je);
      }
    }
    var Ve = U.ReactCurrentOwner, lt = U.ReactDebugCurrentFrame;
    function Le(L) {
      if (L) {
        var _e = L._owner, Te = k(L.type, L._source, _e ? _e.type : null);
        lt.setExtraStackFrame(Te);
      } else
        lt.setExtraStackFrame(null);
    }
    var st;
    st = !1;
    function ze(L) {
      return typeof L == "object" && L !== null && L.$$typeof === n;
    }
    function Ge() {
      {
        if (Ve.current) {
          var L = q(Ve.current.type);
          if (L)
            return `

Check the render method of \`` + L + "`.";
        }
        return "";
      }
    }
    function Je(L) {
      return "";
    }
    var it = {};
    function Be(L) {
      {
        var _e = Ge();
        if (!_e) {
          var Te = typeof L == "string" ? L : L.displayName || L.name;
          Te && (_e = `

Check the top-level render call using <` + Te + ">.");
        }
        return _e;
      }
    }
    function He(L, _e) {
      {
        if (!L._store || L._store.validated || L.key != null)
          return;
        L._store.validated = !0;
        var Te = Be(_e);
        if (it[Te])
          return;
        it[Te] = !0;
        var Pe = "";
        L && L._owner && L._owner !== Ve.current && (Pe = " It was passed a child from " + q(L._owner.type) + "."), Le(L), S('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', Te, Pe), Le(null);
      }
    }
    function ut(L, _e) {
      {
        if (typeof L != "object")
          return;
        if (ye(L))
          for (var Te = 0; Te < L.length; Te++) {
            var Pe = L[Te];
            ze(Pe) && He(Pe, _e);
          }
        else if (ze(L))
          L._store && (L._store.validated = !0);
        else if (L) {
          var Ne = T(L);
          if (typeof Ne == "function" && Ne !== L.entries)
            for (var We = Ne.call(L), je; !(je = We.next()).done; )
              ze(je.value) && He(je.value, _e);
        }
      }
    }
    function nt(L) {
      {
        var _e = L.type;
        if (_e == null || typeof _e == "string")
          return;
        var Te;
        if (typeof _e == "function")
          Te = _e.propTypes;
        else if (typeof _e == "object" && (_e.$$typeof === i || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        _e.$$typeof === d))
          Te = _e.propTypes;
        else
          return;
        if (Te) {
          var Pe = q(_e);
          j(Te, L.props, "prop", Pe, L);
        } else if (_e.PropTypes !== void 0 && !st) {
          st = !0;
          var Ne = q(_e);
          S("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Ne || "Unknown");
        }
        typeof _e.getDefaultProps == "function" && !_e.getDefaultProps.isReactClassApproved && S("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function yt(L) {
      {
        for (var _e = Object.keys(L.props), Te = 0; Te < _e.length; Te++) {
          var Pe = _e[Te];
          if (Pe !== "children" && Pe !== "key") {
            Le(L), S("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", Pe), Le(null);
            break;
          }
        }
        L.ref !== null && (Le(L), S("Invalid attribute `ref` supplied to `React.Fragment`."), Le(null));
      }
    }
    var Ot = {};
    function At(L, _e, Te, Pe, Ne, We) {
      {
        var je = X(L);
        if (!je) {
          var Ue = "";
          (L === void 0 || typeof L == "object" && L !== null && Object.keys(L).length === 0) && (Ue += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var pt = Je();
          pt ? Ue += pt : Ue += Ge();
          var tt;
          L === null ? tt = "null" : ye(L) ? tt = "array" : L !== void 0 && L.$$typeof === n ? (tt = "<" + (q(L.type) || "Unknown") + " />", Ue = " Did you accidentally export a JSX literal instead of a component?") : tt = typeof L, S("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", tt, Ue);
        }
        var rt = Oe(L, _e, Te, Ne, We);
        if (rt == null)
          return rt;
        if (je) {
          var Et = _e.children;
          if (Et !== void 0)
            if (Pe)
              if (ye(Et)) {
                for (var yr = 0; yr < Et.length; yr++)
                  ut(Et[yr], L);
                Object.freeze && Object.freeze(Et);
              } else
                S("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              ut(Et, L);
        }
        if (N.call(_e, "key")) {
          var er = q(L), gt = Object.keys(_e).filter(function(tl) {
            return tl !== "key";
          }), fi = gt.length > 0 ? "{key: someKey, " + gt.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Ot[er + fi]) {
            var el = gt.length > 0 ? "{" + gt.join(": ..., ") + ": ...}" : "{}";
            S(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, fi, er, el, er), Ot[er + fi] = !0;
          }
        }
        return L === l ? yt(rt) : nt(rt), rt;
      }
    }
    function Dr(L, _e, Te) {
      return At(L, _e, Te, !0);
    }
    function Fr(L, _e, Te) {
      return At(L, _e, Te, !1);
    }
    var Xa = Fr, Za = Dr;
    Tr.Fragment = l, Tr.jsx = Xa, Tr.jsxs = Za;
  }()), Tr;
}
process.env.NODE_ENV === "production" ? Ci.exports = cl() : Ci.exports = fl();
var dl = Ci.exports, to = Object.defineProperty, pl = Object.getOwnPropertyDescriptor, gl = Object.getOwnPropertyNames, bl = Object.prototype.hasOwnProperty, ht = (e, n) => () => (e && (n = e(e = 0)), n), we = (e, n) => () => (n || e((n = { exports: {} }).exports, n), n.exports), pr = (e, n) => {
  for (var t in n)
    to(e, t, { get: n[t], enumerable: !0 });
}, ml = (e, n, t, l) => {
  if (n && typeof n == "object" || typeof n == "function")
    for (let h of gl(n))
      !bl.call(e, h) && h !== t && to(e, h, { get: () => n[h], enumerable: !(l = pl(n, h)) || l.enumerable });
  return e;
}, $e = (e) => ml(to({}, "__esModule", { value: !0 }), e), wt, le = ht(() => {
  wt = { deviceMemory: 8, hardwareConcurrency: 8, language: "en-US" };
}), qe = {};
pr(qe, { _debugEnd: () => hn, _debugProcess: () => un, _events: () => In, _eventsCount: () => Tn, _exiting: () => Yi, _fatalExceptions: () => sn, _getActiveHandles: () => gs, _getActiveRequests: () => ps, _kill: () => Ji, _linkedBinding: () => fs, _maxListeners: () => An, _preload_modules: () => En, _rawDebug: () => Hi, _startProfilerIdleNotifier: () => cn, _stopProfilerIdleNotifier: () => fn, _tickCallback: () => ln, abort: () => bn, addListener: () => kn, allowedNodeEnvironmentFlags: () => nn, arch: () => Bi, argv: () => Ui, argv0: () => _n, assert: () => bs, binding: () => Fi, chdir: () => qi, config: () => Qi, cpuUsage: () => Br, cwd: () => $i, debugPort: () => wn, default: () => io, dlopen: () => ds, domain: () => Ki, emit: () => Bn, emitWarning: () => Di, env: () => Mi, execArgv: () => Li, execPath: () => vn, exit: () => tn, features: () => on, hasUncaughtExceptionCaptureCallback: () => ms, hrtime: () => Kr, kill: () => en, listeners: () => vs, memoryUsage: () => Zi, moduleLoadList: () => zi, nextTick: () => hs, off: () => On, on: () => Ut, once: () => Rn, openStdin: () => rn, pid: () => mn, platform: () => xi, ppid: () => yn, prependListener: () => xn, prependOnceListener: () => Mn, reallyExit: () => Gi, release: () => Vi, removeAllListeners: () => Pn, removeListener: () => Cn, resourceUsage: () => Xi, setSourceMapsEnabled: () => Sn, setUncaughtExceptionCaptureCallback: () => an, stderr: () => pn, stdin: () => gn, stdout: () => dn, title: () => Pi, umask: () => Wi, uptime: () => ys, version: () => ji, versions: () => Ni });
function ro(e) {
  throw new Error("Node.js process " + e + " is not supported by JSPM core outside of Node.js");
}
function yl() {
  !cr || !ur || (cr = !1, ur.length ? Bt = ur.concat(Bt) : Ur = -1, Bt.length && us());
}
function us() {
  if (!cr) {
    var e = setTimeout(yl, 0);
    cr = !0;
    for (var n = Bt.length; n; ) {
      for (ur = Bt, Bt = []; ++Ur < n; )
        ur && ur[Ur].run();
      Ur = -1, n = Bt.length;
    }
    ur = null, cr = !1, clearTimeout(e);
  }
}
function hs(e) {
  var n = new Array(arguments.length - 1);
  if (arguments.length > 1)
    for (var t = 1; t < arguments.length; t++)
      n[t - 1] = arguments[t];
  Bt.push(new cs(e, n)), Bt.length === 1 && !cr && setTimeout(us, 0);
}
function cs(e, n) {
  this.fun = e, this.array = n;
}
function dt() {
}
function fs(e) {
  ro("_linkedBinding");
}
function ds(e) {
  ro("dlopen");
}
function ps() {
  return [];
}
function gs() {
  return [];
}
function bs(e, n) {
  if (!e)
    throw new Error(n || "assertion error");
}
function ms() {
  return !1;
}
function ys() {
  return Dt.now() / 1e3;
}
function Kr(e) {
  var n = Math.floor((Date.now() - Dt.now()) * 1e-3), t = Dt.now() * 1e-3, l = Math.floor(t) + n, h = Math.floor(t % 1 * 1e9);
  return e && (l = l - e[0], h = h - e[1], h < 0 && (l--, h += Yr)), [l, h];
}
function Ut() {
  return io;
}
function vs(e) {
  return [];
}
var Bt, cr, ur, Ur, Pi, Bi, xi, Mi, Ui, Li, ji, Ni, Di, Fi, Wi, $i, qi, Vi, Hi, zi, Ki, Yi, Qi, Gi, Ji, Br, Xi, Zi, en, tn, rn, nn, on, sn, an, ln, un, hn, cn, fn, dn, pn, gn, bn, mn, yn, vn, wn, _n, En, Sn, Dt, pi, Yr, An, In, Tn, kn, Rn, On, Cn, Pn, Bn, xn, Mn, io, vl = ht(() => {
  he(), ue(), le(), Bt = [], cr = !1, Ur = -1, cs.prototype.run = function() {
    this.fun.apply(null, this.array);
  }, Pi = "browser", Bi = "x64", xi = "browser", Mi = { PATH: "/usr/bin", LANG: wt.language + ".UTF-8", PWD: "/", HOME: "/home", TMP: "/tmp" }, Ui = ["/usr/bin/node"], Li = [], ji = "v16.8.0", Ni = {}, Di = function(e, n) {
    console.warn((n ? n + ": " : "") + e);
  }, Fi = function(e) {
    ro("binding");
  }, Wi = function(e) {
    return 0;
  }, $i = function() {
    return "/";
  }, qi = function(e) {
  }, Vi = { name: "node", sourceUrl: "", headersUrl: "", libUrl: "" }, Hi = dt, zi = [], Ki = {}, Yi = !1, Qi = {}, Gi = dt, Ji = dt, Br = function() {
    return {};
  }, Xi = Br, Zi = Br, en = dt, tn = dt, rn = dt, nn = {}, on = { inspector: !1, debug: !1, uv: !1, ipv6: !1, tls_alpn: !1, tls_sni: !1, tls_ocsp: !1, tls: !1, cached_builtins: !0 }, sn = dt, an = dt, ln = dt, un = dt, hn = dt, cn = dt, fn = dt, dn = void 0, pn = void 0, gn = void 0, bn = dt, mn = 2, yn = 1, vn = "/bin/usr/node", wn = 9229, _n = "node", En = [], Sn = dt, Dt = { now: typeof performance < "u" ? performance.now.bind(performance) : void 0, timing: typeof performance < "u" ? performance.timing : void 0 }, Dt.now === void 0 && (pi = Date.now(), Dt.timing && Dt.timing.navigationStart && (pi = Dt.timing.navigationStart), Dt.now = () => Date.now() - pi), Yr = 1e9, Kr.bigint = function(e) {
    var n = Kr(e);
    return typeof BigInt > "u" ? n[0] * Yr + n[1] : BigInt(n[0] * Yr) + BigInt(n[1]);
  }, An = 10, In = {}, Tn = 0, kn = Ut, Rn = Ut, On = Ut, Cn = Ut, Pn = Ut, Bn = dt, xn = Ut, Mn = Ut, io = { version: ji, versions: Ni, arch: Bi, platform: xi, release: Vi, _rawDebug: Hi, moduleLoadList: zi, binding: Fi, _linkedBinding: fs, _events: In, _eventsCount: Tn, _maxListeners: An, on: Ut, addListener: kn, once: Rn, off: On, removeListener: Cn, removeAllListeners: Pn, emit: Bn, prependListener: xn, prependOnceListener: Mn, listeners: vs, domain: Ki, _exiting: Yi, config: Qi, dlopen: ds, uptime: ys, _getActiveRequests: ps, _getActiveHandles: gs, reallyExit: Gi, _kill: Ji, cpuUsage: Br, resourceUsage: Xi, memoryUsage: Zi, kill: en, exit: tn, openStdin: rn, allowedNodeEnvironmentFlags: nn, assert: bs, features: on, _fatalExceptions: sn, setUncaughtExceptionCaptureCallback: an, hasUncaughtExceptionCaptureCallback: ms, emitWarning: Di, nextTick: hs, _tickCallback: ln, _debugProcess: un, _debugEnd: hn, _startProfilerIdleNotifier: cn, _stopProfilerIdleNotifier: fn, stdout: dn, stdin: gn, stderr: pn, abort: bn, umask: Wi, chdir: qi, cwd: $i, env: Mi, title: Pi, argv: Ui, execArgv: Li, pid: mn, ppid: yn, execPath: vn, debugPort: wn, hrtime: Kr, argv0: _n, _preload_modules: En, setSourceMapsEnabled: Sn };
}), ue = ht(() => {
  vl();
}), ct = {};
pr(ct, { Buffer: () => ti, INSPECT_MAX_BYTES: () => ws, default: () => Lt, kMaxLength: () => _s });
function wl() {
  if (Un)
    return wr;
  Un = !0, wr.byteLength = s, wr.toByteArray = a, wr.fromByteArray = g;
  for (var e = [], n = [], t = typeof Uint8Array < "u" ? Uint8Array : Array, l = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", h = 0, o = l.length; h < o; ++h)
    e[h] = l[h], n[l.charCodeAt(h)] = h;
  n[45] = 62, n[95] = 63;
  function r(b) {
    var m = b.length;
    if (m % 4 > 0)
      throw new Error("Invalid string. Length must be a multiple of 4");
    var y = b.indexOf("=");
    y === -1 && (y = m);
    var T = y === m ? 0 : 4 - y % 4;
    return [y, T];
  }
  function s(b) {
    var m = r(b), y = m[0], T = m[1];
    return (y + T) * 3 / 4 - T;
  }
  function i(b, m, y) {
    return (m + y) * 3 / 4 - y;
  }
  function a(b) {
    var m, y = r(b), T = y[0], U = y[1], S = new t(i(b, T, U)), R = 0, F = U > 0 ? T - 4 : T, W;
    for (W = 0; W < F; W += 4)
      m = n[b.charCodeAt(W)] << 18 | n[b.charCodeAt(W + 1)] << 12 | n[b.charCodeAt(W + 2)] << 6 | n[b.charCodeAt(W + 3)], S[R++] = m >> 16 & 255, S[R++] = m >> 8 & 255, S[R++] = m & 255;
    return U === 2 && (m = n[b.charCodeAt(W)] << 2 | n[b.charCodeAt(W + 1)] >> 4, S[R++] = m & 255), U === 1 && (m = n[b.charCodeAt(W)] << 10 | n[b.charCodeAt(W + 1)] << 4 | n[b.charCodeAt(W + 2)] >> 2, S[R++] = m >> 8 & 255, S[R++] = m & 255), S;
  }
  function c(b) {
    return e[b >> 18 & 63] + e[b >> 12 & 63] + e[b >> 6 & 63] + e[b & 63];
  }
  function d(b, m, y) {
    for (var T, U = [], S = m; S < y; S += 3)
      T = (b[S] << 16 & 16711680) + (b[S + 1] << 8 & 65280) + (b[S + 2] & 255), U.push(c(T));
    return U.join("");
  }
  function g(b) {
    for (var m, y = b.length, T = y % 3, U = [], S = 16383, R = 0, F = y - T; R < F; R += S)
      U.push(d(b, R, R + S > F ? F : R + S));
    return T === 1 ? (m = b[y - 1], U.push(e[m >> 2] + e[m << 4 & 63] + "==")) : T === 2 && (m = (b[y - 2] << 8) + b[y - 1], U.push(e[m >> 10] + e[m >> 4 & 63] + e[m << 2 & 63] + "=")), U.join("");
  }
  return wr;
}
function _l() {
  return Ln ? xr : (Ln = !0, xr.read = function(e, n, t, l, h) {
    var o, r, s = h * 8 - l - 1, i = (1 << s) - 1, a = i >> 1, c = -7, d = t ? h - 1 : 0, g = t ? -1 : 1, b = e[n + d];
    for (d += g, o = b & (1 << -c) - 1, b >>= -c, c += s; c > 0; o = o * 256 + e[n + d], d += g, c -= 8)
      ;
    for (r = o & (1 << -c) - 1, o >>= -c, c += l; c > 0; r = r * 256 + e[n + d], d += g, c -= 8)
      ;
    if (o === 0)
      o = 1 - a;
    else {
      if (o === i)
        return r ? NaN : (b ? -1 : 1) * (1 / 0);
      r = r + Math.pow(2, l), o = o - a;
    }
    return (b ? -1 : 1) * r * Math.pow(2, o - l);
  }, xr.write = function(e, n, t, l, h, o) {
    var r, s, i, a = o * 8 - h - 1, c = (1 << a) - 1, d = c >> 1, g = h === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, b = l ? 0 : o - 1, m = l ? 1 : -1, y = n < 0 || n === 0 && 1 / n < 0 ? 1 : 0;
    for (n = Math.abs(n), isNaN(n) || n === 1 / 0 ? (s = isNaN(n) ? 1 : 0, r = c) : (r = Math.floor(Math.log(n) / Math.LN2), n * (i = Math.pow(2, -r)) < 1 && (r--, i *= 2), r + d >= 1 ? n += g / i : n += g * Math.pow(2, 1 - d), n * i >= 2 && (r++, i /= 2), r + d >= c ? (s = 0, r = c) : r + d >= 1 ? (s = (n * i - 1) * Math.pow(2, h), r = r + d) : (s = n * Math.pow(2, d - 1) * Math.pow(2, h), r = 0)); h >= 8; e[t + b] = s & 255, b += m, s /= 256, h -= 8)
      ;
    for (r = r << h | s, a += h; a > 0; e[t + b] = r & 255, b += m, r /= 256, a -= 8)
      ;
    e[t + b - m] |= y * 128;
  }, xr);
}
function El() {
  if (jn)
    return Yt;
  jn = !0;
  let e = wl(), n = _l(), t = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
  Yt.Buffer = r, Yt.SlowBuffer = U, Yt.INSPECT_MAX_BYTES = 50;
  let l = 2147483647;
  Yt.kMaxLength = l, r.TYPED_ARRAY_SUPPORT = h(), !r.TYPED_ARRAY_SUPPORT && typeof console < "u" && typeof console.error == "function" && console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");
  function h() {
    try {
      let f = new Uint8Array(1), u = { foo: function() {
        return 42;
      } };
      return Object.setPrototypeOf(u, Uint8Array.prototype), Object.setPrototypeOf(f, u), f.foo() === 42;
    } catch {
      return !1;
    }
  }
  Object.defineProperty(r.prototype, "parent", { enumerable: !0, get: function() {
    if (r.isBuffer(this))
      return this.buffer;
  } }), Object.defineProperty(r.prototype, "offset", { enumerable: !0, get: function() {
    if (r.isBuffer(this))
      return this.byteOffset;
  } });
  function o(f) {
    if (f > l)
      throw new RangeError('The value "' + f + '" is invalid for option "size"');
    let u = new Uint8Array(f);
    return Object.setPrototypeOf(u, r.prototype), u;
  }
  function r(f, u, p) {
    if (typeof f == "number") {
      if (typeof u == "string")
        throw new TypeError('The "string" argument must be of type string. Received type number');
      return c(f);
    }
    return s(f, u, p);
  }
  r.poolSize = 8192;
  function s(f, u, p) {
    if (typeof f == "string")
      return d(f, u);
    if (ArrayBuffer.isView(f))
      return b(f);
    if (f == null)
      throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof f);
    if (K(f, ArrayBuffer) || f && K(f.buffer, ArrayBuffer) || typeof SharedArrayBuffer < "u" && (K(f, SharedArrayBuffer) || f && K(f.buffer, SharedArrayBuffer)))
      return m(f, u, p);
    if (typeof f == "number")
      throw new TypeError('The "value" argument must not be of type number. Received type number');
    let w = f.valueOf && f.valueOf();
    if (w != null && w !== f)
      return r.from(w, u, p);
    let I = y(f);
    if (I)
      return I;
    if (typeof Symbol < "u" && Symbol.toPrimitive != null && typeof f[Symbol.toPrimitive] == "function")
      return r.from(f[Symbol.toPrimitive]("string"), u, p);
    throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof f);
  }
  r.from = function(f, u, p) {
    return s(f, u, p);
  }, Object.setPrototypeOf(r.prototype, Uint8Array.prototype), Object.setPrototypeOf(r, Uint8Array);
  function i(f) {
    if (typeof f != "number")
      throw new TypeError('"size" argument must be of type number');
    if (f < 0)
      throw new RangeError('The value "' + f + '" is invalid for option "size"');
  }
  function a(f, u, p) {
    return i(f), f <= 0 ? o(f) : u !== void 0 ? typeof p == "string" ? o(f).fill(u, p) : o(f).fill(u) : o(f);
  }
  r.alloc = function(f, u, p) {
    return a(f, u, p);
  };
  function c(f) {
    return i(f), o(f < 0 ? 0 : T(f) | 0);
  }
  r.allocUnsafe = function(f) {
    return c(f);
  }, r.allocUnsafeSlow = function(f) {
    return c(f);
  };
  function d(f, u) {
    if ((typeof u != "string" || u === "") && (u = "utf8"), !r.isEncoding(u))
      throw new TypeError("Unknown encoding: " + u);
    let p = S(f, u) | 0, w = o(p), I = w.write(f, u);
    return I !== p && (w = w.slice(0, I)), w;
  }
  function g(f) {
    let u = f.length < 0 ? 0 : T(f.length) | 0, p = o(u);
    for (let w = 0; w < u; w += 1)
      p[w] = f[w] & 255;
    return p;
  }
  function b(f) {
    if (K(f, Uint8Array)) {
      let u = new Uint8Array(f);
      return m(u.buffer, u.byteOffset, u.byteLength);
    }
    return g(f);
  }
  function m(f, u, p) {
    if (u < 0 || f.byteLength < u)
      throw new RangeError('"offset" is outside of buffer bounds');
    if (f.byteLength < u + (p || 0))
      throw new RangeError('"length" is outside of buffer bounds');
    let w;
    return u === void 0 && p === void 0 ? w = new Uint8Array(f) : p === void 0 ? w = new Uint8Array(f, u) : w = new Uint8Array(f, u, p), Object.setPrototypeOf(w, r.prototype), w;
  }
  function y(f) {
    if (r.isBuffer(f)) {
      let u = T(f.length) | 0, p = o(u);
      return p.length === 0 || f.copy(p, 0, 0, u), p;
    }
    if (f.length !== void 0)
      return typeof f.length != "number" || ye(f.length) ? o(0) : g(f);
    if (f.type === "Buffer" && Array.isArray(f.data))
      return g(f.data);
  }
  function T(f) {
    if (f >= l)
      throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + l.toString(16) + " bytes");
    return f | 0;
  }
  function U(f) {
    return +f != f && (f = 0), r.alloc(+f);
  }
  r.isBuffer = function(f) {
    return f != null && f._isBuffer === !0 && f !== r.prototype;
  }, r.compare = function(f, u) {
    if (K(f, Uint8Array) && (f = r.from(f, f.offset, f.byteLength)), K(u, Uint8Array) && (u = r.from(u, u.offset, u.byteLength)), !r.isBuffer(f) || !r.isBuffer(u))
      throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
    if (f === u)
      return 0;
    let p = f.length, w = u.length;
    for (let I = 0, v = Math.min(p, w); I < v; ++I)
      if (f[I] !== u[I]) {
        p = f[I], w = u[I];
        break;
      }
    return p < w ? -1 : w < p ? 1 : 0;
  }, r.isEncoding = function(f) {
    switch (String(f).toLowerCase()) {
      case "hex":
      case "utf8":
      case "utf-8":
      case "ascii":
      case "latin1":
      case "binary":
      case "base64":
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return !0;
      default:
        return !1;
    }
  }, r.concat = function(f, u) {
    if (!Array.isArray(f))
      throw new TypeError('"list" argument must be an Array of Buffers');
    if (f.length === 0)
      return r.alloc(0);
    let p;
    if (u === void 0)
      for (u = 0, p = 0; p < f.length; ++p)
        u += f[p].length;
    let w = r.allocUnsafe(u), I = 0;
    for (p = 0; p < f.length; ++p) {
      let v = f[p];
      if (K(v, Uint8Array))
        I + v.length > w.length ? (r.isBuffer(v) || (v = r.from(v)), v.copy(w, I)) : Uint8Array.prototype.set.call(w, v, I);
      else if (r.isBuffer(v))
        v.copy(w, I);
      else
        throw new TypeError('"list" argument must be an Array of Buffers');
      I += v.length;
    }
    return w;
  };
  function S(f, u) {
    if (r.isBuffer(f))
      return f.length;
    if (ArrayBuffer.isView(f) || K(f, ArrayBuffer))
      return f.byteLength;
    if (typeof f != "string")
      throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof f);
    let p = f.length, w = arguments.length > 2 && arguments[2] === !0;
    if (!w && p === 0)
      return 0;
    let I = !1;
    for (; ; )
      switch (u) {
        case "ascii":
        case "latin1":
        case "binary":
          return p;
        case "utf8":
        case "utf-8":
          return N(f).length;
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return p * 2;
        case "hex":
          return p >>> 1;
        case "base64":
          return G(f).length;
        default:
          if (I)
            return w ? -1 : N(f).length;
          u = ("" + u).toLowerCase(), I = !0;
      }
  }
  r.byteLength = S;
  function R(f, u, p) {
    let w = !1;
    if ((u === void 0 || u < 0) && (u = 0), u > this.length || ((p === void 0 || p > this.length) && (p = this.length), p <= 0) || (p >>>= 0, u >>>= 0, p <= u))
      return "";
    for (f || (f = "utf8"); ; )
      switch (f) {
        case "hex":
          return V(this, u, p);
        case "utf8":
        case "utf-8":
          return q(this, u, p);
        case "ascii":
          return be(this, u, p);
        case "latin1":
        case "binary":
          return ne(this, u, p);
        case "base64":
          return E(this, u, p);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return me(this, u, p);
        default:
          if (w)
            throw new TypeError("Unknown encoding: " + f);
          f = (f + "").toLowerCase(), w = !0;
      }
  }
  r.prototype._isBuffer = !0;
  function F(f, u, p) {
    let w = f[u];
    f[u] = f[p], f[p] = w;
  }
  r.prototype.swap16 = function() {
    let f = this.length;
    if (f % 2 !== 0)
      throw new RangeError("Buffer size must be a multiple of 16-bits");
    for (let u = 0; u < f; u += 2)
      F(this, u, u + 1);
    return this;
  }, r.prototype.swap32 = function() {
    let f = this.length;
    if (f % 4 !== 0)
      throw new RangeError("Buffer size must be a multiple of 32-bits");
    for (let u = 0; u < f; u += 4)
      F(this, u, u + 3), F(this, u + 1, u + 2);
    return this;
  }, r.prototype.swap64 = function() {
    let f = this.length;
    if (f % 8 !== 0)
      throw new RangeError("Buffer size must be a multiple of 64-bits");
    for (let u = 0; u < f; u += 8)
      F(this, u, u + 7), F(this, u + 1, u + 6), F(this, u + 2, u + 5), F(this, u + 3, u + 4);
    return this;
  }, r.prototype.toString = function() {
    let f = this.length;
    return f === 0 ? "" : arguments.length === 0 ? q(this, 0, f) : R.apply(this, arguments);
  }, r.prototype.toLocaleString = r.prototype.toString, r.prototype.equals = function(f) {
    if (!r.isBuffer(f))
      throw new TypeError("Argument must be a Buffer");
    return this === f ? !0 : r.compare(this, f) === 0;
  }, r.prototype.inspect = function() {
    let f = "", u = Yt.INSPECT_MAX_BYTES;
    return f = this.toString("hex", 0, u).replace(/(.{2})/g, "$1 ").trim(), this.length > u && (f += " ... "), "<Buffer " + f + ">";
  }, t && (r.prototype[t] = r.prototype.inspect), r.prototype.compare = function(f, u, p, w, I) {
    if (K(f, Uint8Array) && (f = r.from(f, f.offset, f.byteLength)), !r.isBuffer(f))
      throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof f);
    if (u === void 0 && (u = 0), p === void 0 && (p = f ? f.length : 0), w === void 0 && (w = 0), I === void 0 && (I = this.length), u < 0 || p > f.length || w < 0 || I > this.length)
      throw new RangeError("out of range index");
    if (w >= I && u >= p)
      return 0;
    if (w >= I)
      return -1;
    if (u >= p)
      return 1;
    if (u >>>= 0, p >>>= 0, w >>>= 0, I >>>= 0, this === f)
      return 0;
    let v = I - w, P = p - u, H = Math.min(v, P), de = this.slice(w, I), oe = f.slice(u, p);
    for (let ve = 0; ve < H; ++ve)
      if (de[ve] !== oe[ve]) {
        v = de[ve], P = oe[ve];
        break;
      }
    return v < P ? -1 : P < v ? 1 : 0;
  };
  function W(f, u, p, w, I) {
    if (f.length === 0)
      return -1;
    if (typeof p == "string" ? (w = p, p = 0) : p > 2147483647 ? p = 2147483647 : p < -2147483648 && (p = -2147483648), p = +p, ye(p) && (p = I ? 0 : f.length - 1), p < 0 && (p = f.length + p), p >= f.length) {
      if (I)
        return -1;
      p = f.length - 1;
    } else if (p < 0)
      if (I)
        p = 0;
      else
        return -1;
    if (typeof u == "string" && (u = r.from(u, w)), r.isBuffer(u))
      return u.length === 0 ? -1 : C(f, u, p, w, I);
    if (typeof u == "number")
      return u = u & 255, typeof Uint8Array.prototype.indexOf == "function" ? I ? Uint8Array.prototype.indexOf.call(f, u, p) : Uint8Array.prototype.lastIndexOf.call(f, u, p) : C(f, [u], p, w, I);
    throw new TypeError("val must be string, number or Buffer");
  }
  function C(f, u, p, w, I) {
    let v = 1, P = f.length, H = u.length;
    if (w !== void 0 && (w = String(w).toLowerCase(), w === "ucs2" || w === "ucs-2" || w === "utf16le" || w === "utf-16le")) {
      if (f.length < 2 || u.length < 2)
        return -1;
      v = 2, P /= 2, H /= 2, p /= 2;
    }
    function de(ve, Ie) {
      return v === 1 ? ve[Ie] : ve.readUInt16BE(Ie * v);
    }
    let oe;
    if (I) {
      let ve = -1;
      for (oe = p; oe < P; oe++)
        if (de(f, oe) === de(u, ve === -1 ? 0 : oe - ve)) {
          if (ve === -1 && (ve = oe), oe - ve + 1 === H)
            return ve * v;
        } else
          ve !== -1 && (oe -= oe - ve), ve = -1;
    } else
      for (p + H > P && (p = P - H), oe = p; oe >= 0; oe--) {
        let ve = !0;
        for (let Ie = 0; Ie < H; Ie++)
          if (de(f, oe + Ie) !== de(u, Ie)) {
            ve = !1;
            break;
          }
        if (ve)
          return oe;
      }
    return -1;
  }
  r.prototype.includes = function(f, u, p) {
    return this.indexOf(f, u, p) !== -1;
  }, r.prototype.indexOf = function(f, u, p) {
    return W(this, f, u, p, !0);
  }, r.prototype.lastIndexOf = function(f, u, p) {
    return W(this, f, u, p, !1);
  };
  function O(f, u, p, w) {
    p = Number(p) || 0;
    let I = f.length - p;
    w ? (w = Number(w), w > I && (w = I)) : w = I;
    let v = u.length;
    w > v / 2 && (w = v / 2);
    let P;
    for (P = 0; P < w; ++P) {
      let H = parseInt(u.substr(P * 2, 2), 16);
      if (ye(H))
        return P;
      f[p + P] = H;
    }
    return P;
  }
  function M(f, u, p, w) {
    return j(N(u, f.length - p), f, p, w);
  }
  function $(f, u, p, w) {
    return j(D(u), f, p, w);
  }
  function X(f, u, p, w) {
    return j(G(u), f, p, w);
  }
  function te(f, u, p, w) {
    return j(re(u, f.length - p), f, p, w);
  }
  r.prototype.write = function(f, u, p, w) {
    if (u === void 0)
      w = "utf8", p = this.length, u = 0;
    else if (p === void 0 && typeof u == "string")
      w = u, p = this.length, u = 0;
    else if (isFinite(u))
      u = u >>> 0, isFinite(p) ? (p = p >>> 0, w === void 0 && (w = "utf8")) : (w = p, p = void 0);
    else
      throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
    let I = this.length - u;
    if ((p === void 0 || p > I) && (p = I), f.length > 0 && (p < 0 || u < 0) || u > this.length)
      throw new RangeError("Attempt to write outside buffer bounds");
    w || (w = "utf8");
    let v = !1;
    for (; ; )
      switch (w) {
        case "hex":
          return O(this, f, u, p);
        case "utf8":
        case "utf-8":
          return M(this, f, u, p);
        case "ascii":
        case "latin1":
        case "binary":
          return $(this, f, u, p);
        case "base64":
          return X(this, f, u, p);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return te(this, f, u, p);
        default:
          if (v)
            throw new TypeError("Unknown encoding: " + w);
          w = ("" + w).toLowerCase(), v = !0;
      }
  }, r.prototype.toJSON = function() {
    return { type: "Buffer", data: Array.prototype.slice.call(this._arr || this, 0) };
  };
  function E(f, u, p) {
    return u === 0 && p === f.length ? e.fromByteArray(f) : e.fromByteArray(f.slice(u, p));
  }
  function q(f, u, p) {
    p = Math.min(f.length, p);
    let w = [], I = u;
    for (; I < p; ) {
      let v = f[I], P = null, H = v > 239 ? 4 : v > 223 ? 3 : v > 191 ? 2 : 1;
      if (I + H <= p) {
        let de, oe, ve, Ie;
        switch (H) {
          case 1:
            v < 128 && (P = v);
            break;
          case 2:
            de = f[I + 1], (de & 192) === 128 && (Ie = (v & 31) << 6 | de & 63, Ie > 127 && (P = Ie));
            break;
          case 3:
            de = f[I + 1], oe = f[I + 2], (de & 192) === 128 && (oe & 192) === 128 && (Ie = (v & 15) << 12 | (de & 63) << 6 | oe & 63, Ie > 2047 && (Ie < 55296 || Ie > 57343) && (P = Ie));
            break;
          case 4:
            de = f[I + 1], oe = f[I + 2], ve = f[I + 3], (de & 192) === 128 && (oe & 192) === 128 && (ve & 192) === 128 && (Ie = (v & 15) << 18 | (de & 63) << 12 | (oe & 63) << 6 | ve & 63, Ie > 65535 && Ie < 1114112 && (P = Ie));
        }
      }
      P === null ? (P = 65533, H = 1) : P > 65535 && (P -= 65536, w.push(P >>> 10 & 1023 | 55296), P = 56320 | P & 1023), w.push(P), I += H;
    }
    return z(w);
  }
  let Z = 4096;
  function z(f) {
    let u = f.length;
    if (u <= Z)
      return String.fromCharCode.apply(String, f);
    let p = "", w = 0;
    for (; w < u; )
      p += String.fromCharCode.apply(String, f.slice(w, w += Z));
    return p;
  }
  function be(f, u, p) {
    let w = "";
    p = Math.min(f.length, p);
    for (let I = u; I < p; ++I)
      w += String.fromCharCode(f[I] & 127);
    return w;
  }
  function ne(f, u, p) {
    let w = "";
    p = Math.min(f.length, p);
    for (let I = u; I < p; ++I)
      w += String.fromCharCode(f[I]);
    return w;
  }
  function V(f, u, p) {
    let w = f.length;
    (!u || u < 0) && (u = 0), (!p || p < 0 || p > w) && (p = w);
    let I = "";
    for (let v = u; v < p; ++v)
      I += Se[f[v]];
    return I;
  }
  function me(f, u, p) {
    let w = f.slice(u, p), I = "";
    for (let v = 0; v < w.length - 1; v += 2)
      I += String.fromCharCode(w[v] + w[v + 1] * 256);
    return I;
  }
  r.prototype.slice = function(f, u) {
    let p = this.length;
    f = ~~f, u = u === void 0 ? p : ~~u, f < 0 ? (f += p, f < 0 && (f = 0)) : f > p && (f = p), u < 0 ? (u += p, u < 0 && (u = 0)) : u > p && (u = p), u < f && (u = f);
    let w = this.subarray(f, u);
    return Object.setPrototypeOf(w, r.prototype), w;
  };
  function ie(f, u, p) {
    if (f % 1 !== 0 || f < 0)
      throw new RangeError("offset is not uint");
    if (f + u > p)
      throw new RangeError("Trying to access beyond buffer length");
  }
  r.prototype.readUintLE = r.prototype.readUIntLE = function(f, u, p) {
    f = f >>> 0, u = u >>> 0, p || ie(f, u, this.length);
    let w = this[f], I = 1, v = 0;
    for (; ++v < u && (I *= 256); )
      w += this[f + v] * I;
    return w;
  }, r.prototype.readUintBE = r.prototype.readUIntBE = function(f, u, p) {
    f = f >>> 0, u = u >>> 0, p || ie(f, u, this.length);
    let w = this[f + --u], I = 1;
    for (; u > 0 && (I *= 256); )
      w += this[f + --u] * I;
    return w;
  }, r.prototype.readUint8 = r.prototype.readUInt8 = function(f, u) {
    return f = f >>> 0, u || ie(f, 1, this.length), this[f];
  }, r.prototype.readUint16LE = r.prototype.readUInt16LE = function(f, u) {
    return f = f >>> 0, u || ie(f, 2, this.length), this[f] | this[f + 1] << 8;
  }, r.prototype.readUint16BE = r.prototype.readUInt16BE = function(f, u) {
    return f = f >>> 0, u || ie(f, 2, this.length), this[f] << 8 | this[f + 1];
  }, r.prototype.readUint32LE = r.prototype.readUInt32LE = function(f, u) {
    return f = f >>> 0, u || ie(f, 4, this.length), (this[f] | this[f + 1] << 8 | this[f + 2] << 16) + this[f + 3] * 16777216;
  }, r.prototype.readUint32BE = r.prototype.readUInt32BE = function(f, u) {
    return f = f >>> 0, u || ie(f, 4, this.length), this[f] * 16777216 + (this[f + 1] << 16 | this[f + 2] << 8 | this[f + 3]);
  }, r.prototype.readBigUInt64LE = ke(function(f) {
    f = f >>> 0, J(f, "offset");
    let u = this[f], p = this[f + 7];
    (u === void 0 || p === void 0) && ce(f, this.length - 8);
    let w = u + this[++f] * 2 ** 8 + this[++f] * 2 ** 16 + this[++f] * 2 ** 24, I = this[++f] + this[++f] * 2 ** 8 + this[++f] * 2 ** 16 + p * 2 ** 24;
    return BigInt(w) + (BigInt(I) << BigInt(32));
  }), r.prototype.readBigUInt64BE = ke(function(f) {
    f = f >>> 0, J(f, "offset");
    let u = this[f], p = this[f + 7];
    (u === void 0 || p === void 0) && ce(f, this.length - 8);
    let w = u * 2 ** 24 + this[++f] * 2 ** 16 + this[++f] * 2 ** 8 + this[++f], I = this[++f] * 2 ** 24 + this[++f] * 2 ** 16 + this[++f] * 2 ** 8 + p;
    return (BigInt(w) << BigInt(32)) + BigInt(I);
  }), r.prototype.readIntLE = function(f, u, p) {
    f = f >>> 0, u = u >>> 0, p || ie(f, u, this.length);
    let w = this[f], I = 1, v = 0;
    for (; ++v < u && (I *= 256); )
      w += this[f + v] * I;
    return I *= 128, w >= I && (w -= Math.pow(2, 8 * u)), w;
  }, r.prototype.readIntBE = function(f, u, p) {
    f = f >>> 0, u = u >>> 0, p || ie(f, u, this.length);
    let w = u, I = 1, v = this[f + --w];
    for (; w > 0 && (I *= 256); )
      v += this[f + --w] * I;
    return I *= 128, v >= I && (v -= Math.pow(2, 8 * u)), v;
  }, r.prototype.readInt8 = function(f, u) {
    return f = f >>> 0, u || ie(f, 1, this.length), this[f] & 128 ? (255 - this[f] + 1) * -1 : this[f];
  }, r.prototype.readInt16LE = function(f, u) {
    f = f >>> 0, u || ie(f, 2, this.length);
    let p = this[f] | this[f + 1] << 8;
    return p & 32768 ? p | 4294901760 : p;
  }, r.prototype.readInt16BE = function(f, u) {
    f = f >>> 0, u || ie(f, 2, this.length);
    let p = this[f + 1] | this[f] << 8;
    return p & 32768 ? p | 4294901760 : p;
  }, r.prototype.readInt32LE = function(f, u) {
    return f = f >>> 0, u || ie(f, 4, this.length), this[f] | this[f + 1] << 8 | this[f + 2] << 16 | this[f + 3] << 24;
  }, r.prototype.readInt32BE = function(f, u) {
    return f = f >>> 0, u || ie(f, 4, this.length), this[f] << 24 | this[f + 1] << 16 | this[f + 2] << 8 | this[f + 3];
  }, r.prototype.readBigInt64LE = ke(function(f) {
    f = f >>> 0, J(f, "offset");
    let u = this[f], p = this[f + 7];
    (u === void 0 || p === void 0) && ce(f, this.length - 8);
    let w = this[f + 4] + this[f + 5] * 2 ** 8 + this[f + 6] * 2 ** 16 + (p << 24);
    return (BigInt(w) << BigInt(32)) + BigInt(u + this[++f] * 2 ** 8 + this[++f] * 2 ** 16 + this[++f] * 2 ** 24);
  }), r.prototype.readBigInt64BE = ke(function(f) {
    f = f >>> 0, J(f, "offset");
    let u = this[f], p = this[f + 7];
    (u === void 0 || p === void 0) && ce(f, this.length - 8);
    let w = (u << 24) + this[++f] * 2 ** 16 + this[++f] * 2 ** 8 + this[++f];
    return (BigInt(w) << BigInt(32)) + BigInt(this[++f] * 2 ** 24 + this[++f] * 2 ** 16 + this[++f] * 2 ** 8 + p);
  }), r.prototype.readFloatLE = function(f, u) {
    return f = f >>> 0, u || ie(f, 4, this.length), n.read(this, f, !0, 23, 4);
  }, r.prototype.readFloatBE = function(f, u) {
    return f = f >>> 0, u || ie(f, 4, this.length), n.read(this, f, !1, 23, 4);
  }, r.prototype.readDoubleLE = function(f, u) {
    return f = f >>> 0, u || ie(f, 8, this.length), n.read(this, f, !0, 52, 8);
  }, r.prototype.readDoubleBE = function(f, u) {
    return f = f >>> 0, u || ie(f, 8, this.length), n.read(this, f, !1, 52, 8);
  };
  function Ee(f, u, p, w, I, v) {
    if (!r.isBuffer(f))
      throw new TypeError('"buffer" argument must be a Buffer instance');
    if (u > I || u < v)
      throw new RangeError('"value" argument is out of bounds');
    if (p + w > f.length)
      throw new RangeError("Index out of range");
  }
  r.prototype.writeUintLE = r.prototype.writeUIntLE = function(f, u, p, w) {
    if (f = +f, u = u >>> 0, p = p >>> 0, !w) {
      let P = Math.pow(2, 8 * p) - 1;
      Ee(this, f, u, p, P, 0);
    }
    let I = 1, v = 0;
    for (this[u] = f & 255; ++v < p && (I *= 256); )
      this[u + v] = f / I & 255;
    return u + p;
  }, r.prototype.writeUintBE = r.prototype.writeUIntBE = function(f, u, p, w) {
    if (f = +f, u = u >>> 0, p = p >>> 0, !w) {
      let P = Math.pow(2, 8 * p) - 1;
      Ee(this, f, u, p, P, 0);
    }
    let I = p - 1, v = 1;
    for (this[u + I] = f & 255; --I >= 0 && (v *= 256); )
      this[u + I] = f / v & 255;
    return u + p;
  }, r.prototype.writeUint8 = r.prototype.writeUInt8 = function(f, u, p) {
    return f = +f, u = u >>> 0, p || Ee(this, f, u, 1, 255, 0), this[u] = f & 255, u + 1;
  }, r.prototype.writeUint16LE = r.prototype.writeUInt16LE = function(f, u, p) {
    return f = +f, u = u >>> 0, p || Ee(this, f, u, 2, 65535, 0), this[u] = f & 255, this[u + 1] = f >>> 8, u + 2;
  }, r.prototype.writeUint16BE = r.prototype.writeUInt16BE = function(f, u, p) {
    return f = +f, u = u >>> 0, p || Ee(this, f, u, 2, 65535, 0), this[u] = f >>> 8, this[u + 1] = f & 255, u + 2;
  }, r.prototype.writeUint32LE = r.prototype.writeUInt32LE = function(f, u, p) {
    return f = +f, u = u >>> 0, p || Ee(this, f, u, 4, 4294967295, 0), this[u + 3] = f >>> 24, this[u + 2] = f >>> 16, this[u + 1] = f >>> 8, this[u] = f & 255, u + 4;
  }, r.prototype.writeUint32BE = r.prototype.writeUInt32BE = function(f, u, p) {
    return f = +f, u = u >>> 0, p || Ee(this, f, u, 4, 4294967295, 0), this[u] = f >>> 24, this[u + 1] = f >>> 16, this[u + 2] = f >>> 8, this[u + 3] = f & 255, u + 4;
  };
  function A(f, u, p, w, I) {
    ee(u, w, I, f, p, 7);
    let v = Number(u & BigInt(4294967295));
    f[p++] = v, v = v >> 8, f[p++] = v, v = v >> 8, f[p++] = v, v = v >> 8, f[p++] = v;
    let P = Number(u >> BigInt(32) & BigInt(4294967295));
    return f[p++] = P, P = P >> 8, f[p++] = P, P = P >> 8, f[p++] = P, P = P >> 8, f[p++] = P, p;
  }
  function Q(f, u, p, w, I) {
    ee(u, w, I, f, p, 7);
    let v = Number(u & BigInt(4294967295));
    f[p + 7] = v, v = v >> 8, f[p + 6] = v, v = v >> 8, f[p + 5] = v, v = v >> 8, f[p + 4] = v;
    let P = Number(u >> BigInt(32) & BigInt(4294967295));
    return f[p + 3] = P, P = P >> 8, f[p + 2] = P, P = P >> 8, f[p + 1] = P, P = P >> 8, f[p] = P, p + 8;
  }
  r.prototype.writeBigUInt64LE = ke(function(f, u = 0) {
    return A(this, f, u, BigInt(0), BigInt("0xffffffffffffffff"));
  }), r.prototype.writeBigUInt64BE = ke(function(f, u = 0) {
    return Q(this, f, u, BigInt(0), BigInt("0xffffffffffffffff"));
  }), r.prototype.writeIntLE = function(f, u, p, w) {
    if (f = +f, u = u >>> 0, !w) {
      let H = Math.pow(2, 8 * p - 1);
      Ee(this, f, u, p, H - 1, -H);
    }
    let I = 0, v = 1, P = 0;
    for (this[u] = f & 255; ++I < p && (v *= 256); )
      f < 0 && P === 0 && this[u + I - 1] !== 0 && (P = 1), this[u + I] = (f / v >> 0) - P & 255;
    return u + p;
  }, r.prototype.writeIntBE = function(f, u, p, w) {
    if (f = +f, u = u >>> 0, !w) {
      let H = Math.pow(2, 8 * p - 1);
      Ee(this, f, u, p, H - 1, -H);
    }
    let I = p - 1, v = 1, P = 0;
    for (this[u + I] = f & 255; --I >= 0 && (v *= 256); )
      f < 0 && P === 0 && this[u + I + 1] !== 0 && (P = 1), this[u + I] = (f / v >> 0) - P & 255;
    return u + p;
  }, r.prototype.writeInt8 = function(f, u, p) {
    return f = +f, u = u >>> 0, p || Ee(this, f, u, 1, 127, -128), f < 0 && (f = 255 + f + 1), this[u] = f & 255, u + 1;
  }, r.prototype.writeInt16LE = function(f, u, p) {
    return f = +f, u = u >>> 0, p || Ee(this, f, u, 2, 32767, -32768), this[u] = f & 255, this[u + 1] = f >>> 8, u + 2;
  }, r.prototype.writeInt16BE = function(f, u, p) {
    return f = +f, u = u >>> 0, p || Ee(this, f, u, 2, 32767, -32768), this[u] = f >>> 8, this[u + 1] = f & 255, u + 2;
  }, r.prototype.writeInt32LE = function(f, u, p) {
    return f = +f, u = u >>> 0, p || Ee(this, f, u, 4, 2147483647, -2147483648), this[u] = f & 255, this[u + 1] = f >>> 8, this[u + 2] = f >>> 16, this[u + 3] = f >>> 24, u + 4;
  }, r.prototype.writeInt32BE = function(f, u, p) {
    return f = +f, u = u >>> 0, p || Ee(this, f, u, 4, 2147483647, -2147483648), f < 0 && (f = 4294967295 + f + 1), this[u] = f >>> 24, this[u + 1] = f >>> 16, this[u + 2] = f >>> 8, this[u + 3] = f & 255, u + 4;
  }, r.prototype.writeBigInt64LE = ke(function(f, u = 0) {
    return A(this, f, u, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
  }), r.prototype.writeBigInt64BE = ke(function(f, u = 0) {
    return Q(this, f, u, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
  });
  function fe(f, u, p, w, I, v) {
    if (p + w > f.length)
      throw new RangeError("Index out of range");
    if (p < 0)
      throw new RangeError("Index out of range");
  }
  function Ae(f, u, p, w, I) {
    return u = +u, p = p >>> 0, I || fe(f, u, p, 4), n.write(f, u, p, w, 23, 4), p + 4;
  }
  r.prototype.writeFloatLE = function(f, u, p) {
    return Ae(this, f, u, !0, p);
  }, r.prototype.writeFloatBE = function(f, u, p) {
    return Ae(this, f, u, !1, p);
  };
  function ae(f, u, p, w, I) {
    return u = +u, p = p >>> 0, I || fe(f, u, p, 8), n.write(f, u, p, w, 52, 8), p + 8;
  }
  r.prototype.writeDoubleLE = function(f, u, p) {
    return ae(this, f, u, !0, p);
  }, r.prototype.writeDoubleBE = function(f, u, p) {
    return ae(this, f, u, !1, p);
  }, r.prototype.copy = function(f, u, p, w) {
    if (!r.isBuffer(f))
      throw new TypeError("argument should be a Buffer");
    if (p || (p = 0), !w && w !== 0 && (w = this.length), u >= f.length && (u = f.length), u || (u = 0), w > 0 && w < p && (w = p), w === p || f.length === 0 || this.length === 0)
      return 0;
    if (u < 0)
      throw new RangeError("targetStart out of bounds");
    if (p < 0 || p >= this.length)
      throw new RangeError("Index out of range");
    if (w < 0)
      throw new RangeError("sourceEnd out of bounds");
    w > this.length && (w = this.length), f.length - u < w - p && (w = f.length - u + p);
    let I = w - p;
    return this === f && typeof Uint8Array.prototype.copyWithin == "function" ? this.copyWithin(u, p, w) : Uint8Array.prototype.set.call(f, this.subarray(p, w), u), I;
  }, r.prototype.fill = function(f, u, p, w) {
    if (typeof f == "string") {
      if (typeof u == "string" ? (w = u, u = 0, p = this.length) : typeof p == "string" && (w = p, p = this.length), w !== void 0 && typeof w != "string")
        throw new TypeError("encoding must be a string");
      if (typeof w == "string" && !r.isEncoding(w))
        throw new TypeError("Unknown encoding: " + w);
      if (f.length === 1) {
        let v = f.charCodeAt(0);
        (w === "utf8" && v < 128 || w === "latin1") && (f = v);
      }
    } else
      typeof f == "number" ? f = f & 255 : typeof f == "boolean" && (f = Number(f));
    if (u < 0 || this.length < u || this.length < p)
      throw new RangeError("Out of range index");
    if (p <= u)
      return this;
    u = u >>> 0, p = p === void 0 ? this.length : p >>> 0, f || (f = 0);
    let I;
    if (typeof f == "number")
      for (I = u; I < p; ++I)
        this[I] = f;
    else {
      let v = r.isBuffer(f) ? f : r.from(f, w), P = v.length;
      if (P === 0)
        throw new TypeError('The value "' + f + '" is invalid for argument "value"');
      for (I = 0; I < p - u; ++I)
        this[I + u] = v[I % P];
    }
    return this;
  };
  let B = {};
  function _(f, u, p) {
    B[f] = class extends p {
      constructor() {
        super(), Object.defineProperty(this, "message", { value: u.apply(this, arguments), writable: !0, configurable: !0 }), this.name = `${this.name} [${f}]`, this.stack, delete this.name;
      }
      get code() {
        return f;
      }
      set code(w) {
        Object.defineProperty(this, "code", { configurable: !0, enumerable: !0, value: w, writable: !0 });
      }
      toString() {
        return `${this.name} [${f}]: ${this.message}`;
      }
    };
  }
  _("ERR_BUFFER_OUT_OF_BOUNDS", function(f) {
    return f ? `${f} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds";
  }, RangeError), _("ERR_INVALID_ARG_TYPE", function(f, u) {
    return `The "${f}" argument must be of type number. Received type ${typeof u}`;
  }, TypeError), _("ERR_OUT_OF_RANGE", function(f, u, p) {
    let w = `The value of "${f}" is out of range.`, I = p;
    return Number.isInteger(p) && Math.abs(p) > 2 ** 32 ? I = Y(String(p)) : typeof p == "bigint" && (I = String(p), (p > BigInt(2) ** BigInt(32) || p < -(BigInt(2) ** BigInt(32))) && (I = Y(I)), I += "n"), w += ` It must be ${u}. Received ${I}`, w;
  }, RangeError);
  function Y(f) {
    let u = "", p = f.length, w = f[0] === "-" ? 1 : 0;
    for (; p >= w + 4; p -= 3)
      u = `_${f.slice(p - 3, p)}${u}`;
    return `${f.slice(0, p)}${u}`;
  }
  function se(f, u, p) {
    J(u, "offset"), (f[u] === void 0 || f[u + p] === void 0) && ce(u, f.length - (p + 1));
  }
  function ee(f, u, p, w, I, v) {
    if (f > p || f < u) {
      let P = typeof u == "bigint" ? "n" : "", H;
      throw u === 0 || u === BigInt(0) ? H = `>= 0${P} and < 2${P} ** ${(v + 1) * 8}${P}` : H = `>= -(2${P} ** ${(v + 1) * 8 - 1}${P}) and < 2 ** ${(v + 1) * 8 - 1}${P}`, new B.ERR_OUT_OF_RANGE("value", H, f);
    }
    se(w, I, v);
  }
  function J(f, u) {
    if (typeof f != "number")
      throw new B.ERR_INVALID_ARG_TYPE(u, "number", f);
  }
  function ce(f, u, p) {
    throw Math.floor(f) !== f ? (J(f, p), new B.ERR_OUT_OF_RANGE("offset", "an integer", f)) : u < 0 ? new B.ERR_BUFFER_OUT_OF_BOUNDS() : new B.ERR_OUT_OF_RANGE("offset", `>= 0 and <= ${u}`, f);
  }
  let pe = /[^+/0-9A-Za-z-_]/g;
  function k(f) {
    if (f = f.split("=")[0], f = f.trim().replace(pe, ""), f.length < 2)
      return "";
    for (; f.length % 4 !== 0; )
      f = f + "=";
    return f;
  }
  function N(f, u) {
    u = u || 1 / 0;
    let p, w = f.length, I = null, v = [];
    for (let P = 0; P < w; ++P) {
      if (p = f.charCodeAt(P), p > 55295 && p < 57344) {
        if (!I) {
          if (p > 56319) {
            (u -= 3) > -1 && v.push(239, 191, 189);
            continue;
          } else if (P + 1 === w) {
            (u -= 3) > -1 && v.push(239, 191, 189);
            continue;
          }
          I = p;
          continue;
        }
        if (p < 56320) {
          (u -= 3) > -1 && v.push(239, 191, 189), I = p;
          continue;
        }
        p = (I - 55296 << 10 | p - 56320) + 65536;
      } else
        I && (u -= 3) > -1 && v.push(239, 191, 189);
      if (I = null, p < 128) {
        if ((u -= 1) < 0)
          break;
        v.push(p);
      } else if (p < 2048) {
        if ((u -= 2) < 0)
          break;
        v.push(p >> 6 | 192, p & 63 | 128);
      } else if (p < 65536) {
        if ((u -= 3) < 0)
          break;
        v.push(p >> 12 | 224, p >> 6 & 63 | 128, p & 63 | 128);
      } else if (p < 1114112) {
        if ((u -= 4) < 0)
          break;
        v.push(p >> 18 | 240, p >> 12 & 63 | 128, p >> 6 & 63 | 128, p & 63 | 128);
      } else
        throw new Error("Invalid code point");
    }
    return v;
  }
  function D(f) {
    let u = [];
    for (let p = 0; p < f.length; ++p)
      u.push(f.charCodeAt(p) & 255);
    return u;
  }
  function re(f, u) {
    let p, w, I, v = [];
    for (let P = 0; P < f.length && !((u -= 2) < 0); ++P)
      p = f.charCodeAt(P), w = p >> 8, I = p % 256, v.push(I), v.push(w);
    return v;
  }
  function G(f) {
    return e.toByteArray(k(f));
  }
  function j(f, u, p, w) {
    let I;
    for (I = 0; I < w && !(I + p >= u.length || I >= f.length); ++I)
      u[I + p] = f[I];
    return I;
  }
  function K(f, u) {
    return f instanceof u || f != null && f.constructor != null && f.constructor.name != null && f.constructor.name === u.name;
  }
  function ye(f) {
    return f !== f;
  }
  let Se = function() {
    let f = "0123456789abcdef", u = new Array(256);
    for (let p = 0; p < 16; ++p) {
      let w = p * 16;
      for (let I = 0; I < 16; ++I)
        u[w + I] = f[p] + f[I];
    }
    return u;
  }();
  function ke(f) {
    return typeof BigInt > "u" ? Me : f;
  }
  function Me() {
    throw new Error("BigInt not supported");
  }
  return Yt;
}
var wr, Un, xr, Ln, Yt, jn, Lt, ti, ws, _s, ft = ht(() => {
  he(), ue(), le(), wr = {}, Un = !1, xr = {}, Ln = !1, Yt = {}, jn = !1, Lt = El(), Lt.Buffer, Lt.SlowBuffer, Lt.INSPECT_MAX_BYTES, Lt.kMaxLength, ti = Lt.Buffer, ws = Lt.INSPECT_MAX_BYTES, _s = Lt.kMaxLength;
}), he = ht(() => {
  ft();
}), Sl = we((e) => {
  he(), ue(), le(), Object.defineProperty(e, "__esModule", { value: !0 });
  var n = class {
    constructor(t) {
      this.aliasToTopic = {}, this.max = t;
    }
    put(t, l) {
      return l === 0 || l > this.max ? !1 : (this.aliasToTopic[l] = t, this.length = Object.keys(this.aliasToTopic).length, !0);
    }
    getTopicByAlias(t) {
      return this.aliasToTopic[t];
    }
    clear() {
      this.aliasToTopic = {};
    }
  };
  e.default = n;
}), ot = we((e, n) => {
  he(), ue(), le(), n.exports = { ArrayIsArray(t) {
    return Array.isArray(t);
  }, ArrayPrototypeIncludes(t, l) {
    return t.includes(l);
  }, ArrayPrototypeIndexOf(t, l) {
    return t.indexOf(l);
  }, ArrayPrototypeJoin(t, l) {
    return t.join(l);
  }, ArrayPrototypeMap(t, l) {
    return t.map(l);
  }, ArrayPrototypePop(t, l) {
    return t.pop(l);
  }, ArrayPrototypePush(t, l) {
    return t.push(l);
  }, ArrayPrototypeSlice(t, l, h) {
    return t.slice(l, h);
  }, Error, FunctionPrototypeCall(t, l, ...h) {
    return t.call(l, ...h);
  }, FunctionPrototypeSymbolHasInstance(t, l) {
    return Function.prototype[Symbol.hasInstance].call(t, l);
  }, MathFloor: Math.floor, Number, NumberIsInteger: Number.isInteger, NumberIsNaN: Number.isNaN, NumberMAX_SAFE_INTEGER: Number.MAX_SAFE_INTEGER, NumberMIN_SAFE_INTEGER: Number.MIN_SAFE_INTEGER, NumberParseInt: Number.parseInt, ObjectDefineProperties(t, l) {
    return Object.defineProperties(t, l);
  }, ObjectDefineProperty(t, l, h) {
    return Object.defineProperty(t, l, h);
  }, ObjectGetOwnPropertyDescriptor(t, l) {
    return Object.getOwnPropertyDescriptor(t, l);
  }, ObjectKeys(t) {
    return Object.keys(t);
  }, ObjectSetPrototypeOf(t, l) {
    return Object.setPrototypeOf(t, l);
  }, Promise, PromisePrototypeCatch(t, l) {
    return t.catch(l);
  }, PromisePrototypeThen(t, l, h) {
    return t.then(l, h);
  }, PromiseReject(t) {
    return Promise.reject(t);
  }, ReflectApply: Reflect.apply, RegExpPrototypeTest(t, l) {
    return t.test(l);
  }, SafeSet: Set, String, StringPrototypeSlice(t, l, h) {
    return t.slice(l, h);
  }, StringPrototypeToLowerCase(t) {
    return t.toLowerCase();
  }, StringPrototypeToUpperCase(t) {
    return t.toUpperCase();
  }, StringPrototypeTrim(t) {
    return t.trim();
  }, Symbol, SymbolFor: Symbol.for, SymbolAsyncIterator: Symbol.asyncIterator, SymbolHasInstance: Symbol.hasInstance, SymbolIterator: Symbol.iterator, TypedArrayPrototypeSet(t, l, h) {
    return t.set(l, h);
  }, Uint8Array };
}), $t = we((e, n) => {
  he(), ue(), le();
  var t = (ft(), $e(ct)), l = Object.getPrototypeOf(async function() {
  }).constructor, h = globalThis.Blob || t.Blob, o = typeof h < "u" ? function(s) {
    return s instanceof h;
  } : function(s) {
    return !1;
  }, r = class extends Error {
    constructor(s) {
      if (!Array.isArray(s))
        throw new TypeError(`Expected input to be an Array, got ${typeof s}`);
      let i = "";
      for (let a = 0; a < s.length; a++)
        i += `    ${s[a].stack}
`;
      super(i), this.name = "AggregateError", this.errors = s;
    }
  };
  n.exports = { AggregateError: r, kEmptyObject: Object.freeze({}), once(s) {
    let i = !1;
    return function(...a) {
      i || (i = !0, s.apply(this, a));
    };
  }, createDeferredPromise: function() {
    let s, i;
    return { promise: new Promise((a, c) => {
      s = a, i = c;
    }), resolve: s, reject: i };
  }, promisify(s) {
    return new Promise((i, a) => {
      s((c, ...d) => c ? a(c) : i(...d));
    });
  }, debuglog() {
    return function() {
    };
  }, format(s, ...i) {
    return s.replace(/%([sdifj])/g, function(...[a, c]) {
      let d = i.shift();
      return c === "f" ? d.toFixed(6) : c === "j" ? JSON.stringify(d) : c === "s" && typeof d == "object" ? `${d.constructor !== Object ? d.constructor.name : ""} {}`.trim() : d.toString();
    });
  }, inspect(s) {
    switch (typeof s) {
      case "string":
        if (s.includes("'"))
          if (s.includes('"')) {
            if (!s.includes("`") && !s.includes("${"))
              return `\`${s}\``;
          } else
            return `"${s}"`;
        return `'${s}'`;
      case "number":
        return isNaN(s) ? "NaN" : Object.is(s, -0) ? String(s) : s;
      case "bigint":
        return `${String(s)}n`;
      case "boolean":
      case "undefined":
        return String(s);
      case "object":
        return "{}";
    }
  }, types: { isAsyncFunction(s) {
    return s instanceof l;
  }, isArrayBufferView(s) {
    return ArrayBuffer.isView(s);
  } }, isBlob: o }, n.exports.promisify.custom = Symbol.for("nodejs.util.promisify.custom");
}), no = we((e, n) => {
  he(), ue(), le();
  var { AbortController: t, AbortSignal: l } = typeof self < "u" ? self : typeof window < "u" ? window : void 0;
  n.exports = t, n.exports.AbortSignal = l, n.exports.default = t;
}), mt = we((e, n) => {
  he(), ue(), le();
  var { format: t, inspect: l, AggregateError: h } = $t(), o = globalThis.AggregateError || h, r = Symbol("kIsNodeError"), s = ["string", "function", "number", "object", "Function", "Object", "boolean", "bigint", "symbol"], i = /^([A-Z][a-z0-9]*)+$/, a = "__node_internal_", c = {};
  function d(S, R) {
    if (!S)
      throw new c.ERR_INTERNAL_ASSERTION(R);
  }
  function g(S) {
    let R = "", F = S.length, W = S[0] === "-" ? 1 : 0;
    for (; F >= W + 4; F -= 3)
      R = `_${S.slice(F - 3, F)}${R}`;
    return `${S.slice(0, F)}${R}`;
  }
  function b(S, R, F) {
    if (typeof R == "function")
      return d(R.length <= F.length, `Code: ${S}; The provided arguments length (${F.length}) does not match the required ones (${R.length}).`), R(...F);
    let W = (R.match(/%[dfijoOs]/g) || []).length;
    return d(W === F.length, `Code: ${S}; The provided arguments length (${F.length}) does not match the required ones (${W}).`), F.length === 0 ? R : t(R, ...F);
  }
  function m(S, R, F) {
    F || (F = Error);
    class W extends F {
      constructor(...O) {
        super(b(S, R, O));
      }
      toString() {
        return `${this.name} [${S}]: ${this.message}`;
      }
    }
    Object.defineProperties(W.prototype, { name: { value: F.name, writable: !0, enumerable: !1, configurable: !0 }, toString: { value() {
      return `${this.name} [${S}]: ${this.message}`;
    }, writable: !0, enumerable: !1, configurable: !0 } }), W.prototype.code = S, W.prototype[r] = !0, c[S] = W;
  }
  function y(S) {
    let R = a + S.name;
    return Object.defineProperty(S, "name", { value: R }), S;
  }
  function T(S, R) {
    if (S && R && S !== R) {
      if (Array.isArray(R.errors))
        return R.errors.push(S), R;
      let F = new o([R, S], R.message);
      return F.code = R.code, F;
    }
    return S || R;
  }
  var U = class extends Error {
    constructor(S = "The operation was aborted", R = void 0) {
      if (R !== void 0 && typeof R != "object")
        throw new c.ERR_INVALID_ARG_TYPE("options", "Object", R);
      super(S, R), this.code = "ABORT_ERR", this.name = "AbortError";
    }
  };
  m("ERR_ASSERTION", "%s", Error), m("ERR_INVALID_ARG_TYPE", (S, R, F) => {
    d(typeof S == "string", "'name' must be a string"), Array.isArray(R) || (R = [R]);
    let W = "The ";
    S.endsWith(" argument") ? W += `${S} ` : W += `"${S}" ${S.includes(".") ? "property" : "argument"} `, W += "must be ";
    let C = [], O = [], M = [];
    for (let X of R)
      d(typeof X == "string", "All expected entries have to be of type string"), s.includes(X) ? C.push(X.toLowerCase()) : i.test(X) ? O.push(X) : (d(X !== "object", 'The value "object" should be written as "Object"'), M.push(X));
    if (O.length > 0) {
      let X = C.indexOf("object");
      X !== -1 && (C.splice(C, X, 1), O.push("Object"));
    }
    if (C.length > 0) {
      switch (C.length) {
        case 1:
          W += `of type ${C[0]}`;
          break;
        case 2:
          W += `one of type ${C[0]} or ${C[1]}`;
          break;
        default: {
          let X = C.pop();
          W += `one of type ${C.join(", ")}, or ${X}`;
        }
      }
      (O.length > 0 || M.length > 0) && (W += " or ");
    }
    if (O.length > 0) {
      switch (O.length) {
        case 1:
          W += `an instance of ${O[0]}`;
          break;
        case 2:
          W += `an instance of ${O[0]} or ${O[1]}`;
          break;
        default: {
          let X = O.pop();
          W += `an instance of ${O.join(", ")}, or ${X}`;
        }
      }
      M.length > 0 && (W += " or ");
    }
    switch (M.length) {
      case 0:
        break;
      case 1:
        M[0].toLowerCase() !== M[0] && (W += "an "), W += `${M[0]}`;
        break;
      case 2:
        W += `one of ${M[0]} or ${M[1]}`;
        break;
      default: {
        let X = M.pop();
        W += `one of ${M.join(", ")}, or ${X}`;
      }
    }
    if (F == null)
      W += `. Received ${F}`;
    else if (typeof F == "function" && F.name)
      W += `. Received function ${F.name}`;
    else if (typeof F == "object") {
      var $;
      if (($ = F.constructor) !== null && $ !== void 0 && $.name)
        W += `. Received an instance of ${F.constructor.name}`;
      else {
        let X = l(F, { depth: -1 });
        W += `. Received ${X}`;
      }
    } else {
      let X = l(F, { colors: !1 });
      X.length > 25 && (X = `${X.slice(0, 25)}...`), W += `. Received type ${typeof F} (${X})`;
    }
    return W;
  }, TypeError), m("ERR_INVALID_ARG_VALUE", (S, R, F = "is invalid") => {
    let W = l(R);
    return W.length > 128 && (W = W.slice(0, 128) + "..."), `The ${S.includes(".") ? "property" : "argument"} '${S}' ${F}. Received ${W}`;
  }, TypeError), m("ERR_INVALID_RETURN_VALUE", (S, R, F) => {
    var W;
    let C = F != null && (W = F.constructor) !== null && W !== void 0 && W.name ? `instance of ${F.constructor.name}` : `type ${typeof F}`;
    return `Expected ${S} to be returned from the "${R}" function but got ${C}.`;
  }, TypeError), m("ERR_MISSING_ARGS", (...S) => {
    d(S.length > 0, "At least one arg needs to be specified");
    let R, F = S.length;
    switch (S = (Array.isArray(S) ? S : [S]).map((W) => `"${W}"`).join(" or "), F) {
      case 1:
        R += `The ${S[0]} argument`;
        break;
      case 2:
        R += `The ${S[0]} and ${S[1]} arguments`;
        break;
      default:
        {
          let W = S.pop();
          R += `The ${S.join(", ")}, and ${W} arguments`;
        }
        break;
    }
    return `${R} must be specified`;
  }, TypeError), m("ERR_OUT_OF_RANGE", (S, R, F) => {
    d(R, 'Missing "range" argument');
    let W;
    return Number.isInteger(F) && Math.abs(F) > 2 ** 32 ? W = g(String(F)) : typeof F == "bigint" ? (W = String(F), (F > 2n ** 32n || F < -(2n ** 32n)) && (W = g(W)), W += "n") : W = l(F), `The value of "${S}" is out of range. It must be ${R}. Received ${W}`;
  }, RangeError), m("ERR_MULTIPLE_CALLBACK", "Callback called multiple times", Error), m("ERR_METHOD_NOT_IMPLEMENTED", "The %s method is not implemented", Error), m("ERR_STREAM_ALREADY_FINISHED", "Cannot call %s after a stream was finished", Error), m("ERR_STREAM_CANNOT_PIPE", "Cannot pipe, not readable", Error), m("ERR_STREAM_DESTROYED", "Cannot call %s after a stream was destroyed", Error), m("ERR_STREAM_NULL_VALUES", "May not write null values to stream", TypeError), m("ERR_STREAM_PREMATURE_CLOSE", "Premature close", Error), m("ERR_STREAM_PUSH_AFTER_EOF", "stream.push() after EOF", Error), m("ERR_STREAM_UNSHIFT_AFTER_END_EVENT", "stream.unshift() after end event", Error), m("ERR_STREAM_WRITE_AFTER_END", "write after end", Error), m("ERR_UNKNOWN_ENCODING", "Unknown encoding: %s", TypeError), n.exports = { AbortError: U, aggregateTwoErrors: y(T), hideStackFrames: y, codes: c };
}), si = we((e, n) => {
  he(), ue(), le();
  var { ArrayIsArray: t, ArrayPrototypeIncludes: l, ArrayPrototypeJoin: h, ArrayPrototypeMap: o, NumberIsInteger: r, NumberIsNaN: s, NumberMAX_SAFE_INTEGER: i, NumberMIN_SAFE_INTEGER: a, NumberParseInt: c, ObjectPrototypeHasOwnProperty: d, RegExpPrototypeExec: g, String: b, StringPrototypeToUpperCase: m, StringPrototypeTrim: y } = ot(), { hideStackFrames: T, codes: { ERR_SOCKET_BAD_PORT: U, ERR_INVALID_ARG_TYPE: S, ERR_INVALID_ARG_VALUE: R, ERR_OUT_OF_RANGE: F, ERR_UNKNOWN_SIGNAL: W } } = mt(), { normalizeEncoding: C } = $t(), { isAsyncFunction: O, isArrayBufferView: M } = $t().types, $ = {};
  function X(j) {
    return j === (j | 0);
  }
  function te(j) {
    return j === j >>> 0;
  }
  var E = /^[0-7]+$/, q = "must be a 32-bit unsigned integer or an octal string";
  function Z(j, K, ye) {
    if (typeof j > "u" && (j = ye), typeof j == "string") {
      if (g(E, j) === null)
        throw new R(K, j, q);
      j = c(j, 8);
    }
    return ne(j, K), j;
  }
  var z = T((j, K, ye = a, Se = i) => {
    if (typeof j != "number")
      throw new S(K, "number", j);
    if (!r(j))
      throw new F(K, "an integer", j);
    if (j < ye || j > Se)
      throw new F(K, `>= ${ye} && <= ${Se}`, j);
  }), be = T((j, K, ye = -2147483648, Se = 2147483647) => {
    if (typeof j != "number")
      throw new S(K, "number", j);
    if (!r(j))
      throw new F(K, "an integer", j);
    if (j < ye || j > Se)
      throw new F(K, `>= ${ye} && <= ${Se}`, j);
  }), ne = T((j, K, ye = !1) => {
    if (typeof j != "number")
      throw new S(K, "number", j);
    if (!r(j))
      throw new F(K, "an integer", j);
    let Se = ye ? 1 : 0, ke = 4294967295;
    if (j < Se || j > ke)
      throw new F(K, `>= ${Se} && <= ${ke}`, j);
  });
  function V(j, K) {
    if (typeof j != "string")
      throw new S(K, "string", j);
  }
  function me(j, K, ye = void 0, Se) {
    if (typeof j != "number")
      throw new S(K, "number", j);
    if (ye != null && j < ye || Se != null && j > Se || (ye != null || Se != null) && s(j))
      throw new F(K, `${ye != null ? `>= ${ye}` : ""}${ye != null && Se != null ? " && " : ""}${Se != null ? `<= ${Se}` : ""}`, j);
  }
  var ie = T((j, K, ye) => {
    if (!l(ye, j)) {
      let Se = "must be one of: " + h(o(ye, (ke) => typeof ke == "string" ? `'${ke}'` : b(ke)), ", ");
      throw new R(K, j, Se);
    }
  });
  function Ee(j, K) {
    if (typeof j != "boolean")
      throw new S(K, "boolean", j);
  }
  function A(j, K, ye) {
    return j == null || !d(j, K) ? ye : j[K];
  }
  var Q = T((j, K, ye = null) => {
    let Se = A(ye, "allowArray", !1), ke = A(ye, "allowFunction", !1);
    if (!A(ye, "nullable", !1) && j === null || !Se && t(j) || typeof j != "object" && (!ke || typeof j != "function"))
      throw new S(K, "Object", j);
  }), fe = T((j, K) => {
    if (j != null && typeof j != "object" && typeof j != "function")
      throw new S(K, "a dictionary", j);
  }), Ae = T((j, K, ye = 0) => {
    if (!t(j))
      throw new S(K, "Array", j);
    if (j.length < ye) {
      let Se = `must be longer than ${ye}`;
      throw new R(K, j, Se);
    }
  });
  function ae(j, K) {
    Ae(j, K);
    for (let ye = 0; ye < j.length; ye++)
      V(j[ye], `${K}[${ye}]`);
  }
  function B(j, K) {
    Ae(j, K);
    for (let ye = 0; ye < j.length; ye++)
      Ee(j[ye], `${K}[${ye}]`);
  }
  function _(j, K = "signal") {
    if (V(j, K), $[j] === void 0)
      throw $[m(j)] !== void 0 ? new W(j + " (signals must use all capital letters)") : new W(j);
  }
  var Y = T((j, K = "buffer") => {
    if (!M(j))
      throw new S(K, ["Buffer", "TypedArray", "DataView"], j);
  });
  function se(j, K) {
    let ye = C(K), Se = j.length;
    if (ye === "hex" && Se % 2 !== 0)
      throw new R("encoding", K, `is invalid for data of length ${Se}`);
  }
  function ee(j, K = "Port", ye = !0) {
    if (typeof j != "number" && typeof j != "string" || typeof j == "string" && y(j).length === 0 || +j !== +j >>> 0 || j > 65535 || j === 0 && !ye)
      throw new U(K, j, ye);
    return j | 0;
  }
  var J = T((j, K) => {
    if (j !== void 0 && (j === null || typeof j != "object" || !("aborted" in j)))
      throw new S(K, "AbortSignal", j);
  }), ce = T((j, K) => {
    if (typeof j != "function")
      throw new S(K, "Function", j);
  }), pe = T((j, K) => {
    if (typeof j != "function" || O(j))
      throw new S(K, "Function", j);
  }), k = T((j, K) => {
    if (j !== void 0)
      throw new S(K, "undefined", j);
  });
  function N(j, K, ye) {
    if (!l(ye, j))
      throw new S(K, `('${h(ye, "|")}')`, j);
  }
  var D = /^(?:<[^>]*>)(?:\s*;\s*[^;"\s]+(?:=(")?[^;"\s]*\1)?)*$/;
  function re(j, K) {
    if (typeof j > "u" || !g(D, j))
      throw new R(K, j, 'must be an array or string of format "</styles.css>; rel=preload; as=style"');
  }
  function G(j) {
    if (typeof j == "string")
      return re(j, "hints"), j;
    if (t(j)) {
      let K = j.length, ye = "";
      if (K === 0)
        return ye;
      for (let Se = 0; Se < K; Se++) {
        let ke = j[Se];
        re(ke, "hints"), ye += ke, Se !== K - 1 && (ye += ", ");
      }
      return ye;
    }
    throw new R("hints", j, 'must be an array or string of format "</styles.css>; rel=preload; as=style"');
  }
  n.exports = { isInt32: X, isUint32: te, parseFileMode: Z, validateArray: Ae, validateStringArray: ae, validateBooleanArray: B, validateBoolean: Ee, validateBuffer: Y, validateDictionary: fe, validateEncoding: se, validateFunction: ce, validateInt32: be, validateInteger: z, validateNumber: me, validateObject: Q, validateOneOf: ie, validatePlainFunction: pe, validatePort: ee, validateSignalName: _, validateString: V, validateUint32: ne, validateUndefined: k, validateUnion: N, validateAbortSignal: J, validateLinkHeaderValue: G };
}), gr = we((e, n) => {
  he(), ue(), le();
  var t = n.exports = {}, l, h;
  function o() {
    throw new Error("setTimeout has not been defined");
  }
  function r() {
    throw new Error("clearTimeout has not been defined");
  }
  (function() {
    try {
      typeof setTimeout == "function" ? l = setTimeout : l = o;
    } catch {
      l = o;
    }
    try {
      typeof clearTimeout == "function" ? h = clearTimeout : h = r;
    } catch {
      h = r;
    }
  })();
  function s(U) {
    if (l === setTimeout)
      return setTimeout(U, 0);
    if ((l === o || !l) && setTimeout)
      return l = setTimeout, setTimeout(U, 0);
    try {
      return l(U, 0);
    } catch {
      try {
        return l.call(null, U, 0);
      } catch {
        return l.call(this, U, 0);
      }
    }
  }
  function i(U) {
    if (h === clearTimeout)
      return clearTimeout(U);
    if ((h === r || !h) && clearTimeout)
      return h = clearTimeout, clearTimeout(U);
    try {
      return h(U);
    } catch {
      try {
        return h.call(null, U);
      } catch {
        return h.call(this, U);
      }
    }
  }
  var a = [], c = !1, d, g = -1;
  function b() {
    !c || !d || (c = !1, d.length ? a = d.concat(a) : g = -1, a.length && m());
  }
  function m() {
    if (!c) {
      var U = s(b);
      c = !0;
      for (var S = a.length; S; ) {
        for (d = a, a = []; ++g < S; )
          d && d[g].run();
        g = -1, S = a.length;
      }
      d = null, c = !1, i(U);
    }
  }
  t.nextTick = function(U) {
    var S = new Array(arguments.length - 1);
    if (arguments.length > 1)
      for (var R = 1; R < arguments.length; R++)
        S[R - 1] = arguments[R];
    a.push(new y(U, S)), a.length === 1 && !c && s(m);
  };
  function y(U, S) {
    this.fun = U, this.array = S;
  }
  y.prototype.run = function() {
    this.fun.apply(null, this.array);
  }, t.title = "browser", t.browser = !0, t.env = {}, t.argv = [], t.version = "", t.versions = {};
  function T() {
  }
  t.on = T, t.addListener = T, t.once = T, t.off = T, t.removeListener = T, t.removeAllListeners = T, t.emit = T, t.prependListener = T, t.prependOnceListener = T, t.listeners = function(U) {
    return [];
  }, t.binding = function(U) {
    throw new Error("process.binding is not supported");
  }, t.cwd = function() {
    return "/";
  }, t.chdir = function(U) {
    throw new Error("process.chdir is not supported");
  }, t.umask = function() {
    return 0;
  };
}), Ht = we((e, n) => {
  he(), ue(), le();
  var { Symbol: t, SymbolAsyncIterator: l, SymbolIterator: h, SymbolFor: o } = ot(), r = t("kDestroyed"), s = t("kIsErrored"), i = t("kIsReadable"), a = t("kIsDisturbed"), c = o("nodejs.webstream.isClosedPromise"), d = o("nodejs.webstream.controllerErrorFunction");
  function g(A, Q = !1) {
    var fe;
    return !!(A && typeof A.pipe == "function" && typeof A.on == "function" && (!Q || typeof A.pause == "function" && typeof A.resume == "function") && (!A._writableState || ((fe = A._readableState) === null || fe === void 0 ? void 0 : fe.readable) !== !1) && (!A._writableState || A._readableState));
  }
  function b(A) {
    var Q;
    return !!(A && typeof A.write == "function" && typeof A.on == "function" && (!A._readableState || ((Q = A._writableState) === null || Q === void 0 ? void 0 : Q.writable) !== !1));
  }
  function m(A) {
    return !!(A && typeof A.pipe == "function" && A._readableState && typeof A.on == "function" && typeof A.write == "function");
  }
  function y(A) {
    return A && (A._readableState || A._writableState || typeof A.write == "function" && typeof A.on == "function" || typeof A.pipe == "function" && typeof A.on == "function");
  }
  function T(A) {
    return !!(A && !y(A) && typeof A.pipeThrough == "function" && typeof A.getReader == "function" && typeof A.cancel == "function");
  }
  function U(A) {
    return !!(A && !y(A) && typeof A.getWriter == "function" && typeof A.abort == "function");
  }
  function S(A) {
    return !!(A && !y(A) && typeof A.readable == "object" && typeof A.writable == "object");
  }
  function R(A) {
    return T(A) || U(A) || S(A);
  }
  function F(A, Q) {
    return A == null ? !1 : Q === !0 ? typeof A[l] == "function" : Q === !1 ? typeof A[h] == "function" : typeof A[l] == "function" || typeof A[h] == "function";
  }
  function W(A) {
    if (!y(A))
      return null;
    let Q = A._writableState, fe = A._readableState, Ae = Q || fe;
    return !!(A.destroyed || A[r] || Ae != null && Ae.destroyed);
  }
  function C(A) {
    if (!b(A))
      return null;
    if (A.writableEnded === !0)
      return !0;
    let Q = A._writableState;
    return Q != null && Q.errored ? !1 : typeof (Q == null ? void 0 : Q.ended) != "boolean" ? null : Q.ended;
  }
  function O(A, Q) {
    if (!b(A))
      return null;
    if (A.writableFinished === !0)
      return !0;
    let fe = A._writableState;
    return fe != null && fe.errored ? !1 : typeof (fe == null ? void 0 : fe.finished) != "boolean" ? null : !!(fe.finished || Q === !1 && fe.ended === !0 && fe.length === 0);
  }
  function M(A) {
    if (!g(A))
      return null;
    if (A.readableEnded === !0)
      return !0;
    let Q = A._readableState;
    return !Q || Q.errored ? !1 : typeof (Q == null ? void 0 : Q.ended) != "boolean" ? null : Q.ended;
  }
  function $(A, Q) {
    if (!g(A))
      return null;
    let fe = A._readableState;
    return fe != null && fe.errored ? !1 : typeof (fe == null ? void 0 : fe.endEmitted) != "boolean" ? null : !!(fe.endEmitted || Q === !1 && fe.ended === !0 && fe.length === 0);
  }
  function X(A) {
    return A && A[i] != null ? A[i] : typeof (A == null ? void 0 : A.readable) != "boolean" ? null : W(A) ? !1 : g(A) && A.readable && !$(A);
  }
  function te(A) {
    return typeof (A == null ? void 0 : A.writable) != "boolean" ? null : W(A) ? !1 : b(A) && A.writable && !C(A);
  }
  function E(A, Q) {
    return y(A) ? W(A) ? !0 : !((Q == null ? void 0 : Q.readable) !== !1 && X(A) || (Q == null ? void 0 : Q.writable) !== !1 && te(A)) : null;
  }
  function q(A) {
    var Q, fe;
    return y(A) ? A.writableErrored ? A.writableErrored : (Q = (fe = A._writableState) === null || fe === void 0 ? void 0 : fe.errored) !== null && Q !== void 0 ? Q : null : null;
  }
  function Z(A) {
    var Q, fe;
    return y(A) ? A.readableErrored ? A.readableErrored : (Q = (fe = A._readableState) === null || fe === void 0 ? void 0 : fe.errored) !== null && Q !== void 0 ? Q : null : null;
  }
  function z(A) {
    if (!y(A))
      return null;
    if (typeof A.closed == "boolean")
      return A.closed;
    let Q = A._writableState, fe = A._readableState;
    return typeof (Q == null ? void 0 : Q.closed) == "boolean" || typeof (fe == null ? void 0 : fe.closed) == "boolean" ? (Q == null ? void 0 : Q.closed) || (fe == null ? void 0 : fe.closed) : typeof A._closed == "boolean" && be(A) ? A._closed : null;
  }
  function be(A) {
    return typeof A._closed == "boolean" && typeof A._defaultKeepAlive == "boolean" && typeof A._removedConnection == "boolean" && typeof A._removedContLen == "boolean";
  }
  function ne(A) {
    return typeof A._sent100 == "boolean" && be(A);
  }
  function V(A) {
    var Q;
    return typeof A._consuming == "boolean" && typeof A._dumped == "boolean" && ((Q = A.req) === null || Q === void 0 ? void 0 : Q.upgradeOrConnect) === void 0;
  }
  function me(A) {
    if (!y(A))
      return null;
    let Q = A._writableState, fe = A._readableState, Ae = Q || fe;
    return !Ae && ne(A) || !!(Ae && Ae.autoDestroy && Ae.emitClose && Ae.closed === !1);
  }
  function ie(A) {
    var Q;
    return !!(A && ((Q = A[a]) !== null && Q !== void 0 ? Q : A.readableDidRead || A.readableAborted));
  }
  function Ee(A) {
    var Q, fe, Ae, ae, B, _, Y, se, ee, J;
    return !!(A && ((Q = (fe = (Ae = (ae = (B = (_ = A[s]) !== null && _ !== void 0 ? _ : A.readableErrored) !== null && B !== void 0 ? B : A.writableErrored) !== null && ae !== void 0 ? ae : (Y = A._readableState) === null || Y === void 0 ? void 0 : Y.errorEmitted) !== null && Ae !== void 0 ? Ae : (se = A._writableState) === null || se === void 0 ? void 0 : se.errorEmitted) !== null && fe !== void 0 ? fe : (ee = A._readableState) === null || ee === void 0 ? void 0 : ee.errored) !== null && Q !== void 0 ? Q : !((J = A._writableState) === null || J === void 0) && J.errored));
  }
  n.exports = { kDestroyed: r, isDisturbed: ie, kIsDisturbed: a, isErrored: Ee, kIsErrored: s, isReadable: X, kIsReadable: i, kIsClosedPromise: c, kControllerErrorFunction: d, isClosed: z, isDestroyed: W, isDuplexNodeStream: m, isFinished: E, isIterable: F, isReadableNodeStream: g, isReadableStream: T, isReadableEnded: M, isReadableFinished: $, isReadableErrored: Z, isNodeStream: y, isWebStream: R, isWritable: te, isWritableNodeStream: b, isWritableStream: U, isWritableEnded: C, isWritableFinished: O, isWritableErrored: q, isServerRequest: V, isServerResponse: ne, willEmitClose: me, isTransformStream: S };
}), Zt = we((e, n) => {
  he(), ue(), le();
  var t = gr(), { AbortError: l, codes: h } = mt(), { ERR_INVALID_ARG_TYPE: o, ERR_STREAM_PREMATURE_CLOSE: r } = h, { kEmptyObject: s, once: i } = $t(), { validateAbortSignal: a, validateFunction: c, validateObject: d, validateBoolean: g } = si(), { Promise: b, PromisePrototypeThen: m } = ot(), { isClosed: y, isReadable: T, isReadableNodeStream: U, isReadableStream: S, isReadableFinished: R, isReadableErrored: F, isWritable: W, isWritableNodeStream: C, isWritableStream: O, isWritableFinished: M, isWritableErrored: $, isNodeStream: X, willEmitClose: te, kIsClosedPromise: E } = Ht();
  function q(V) {
    return V.setHeader && typeof V.abort == "function";
  }
  var Z = () => {
  };
  function z(V, me, ie) {
    var Ee, A;
    if (arguments.length === 2 ? (ie = me, me = s) : me == null ? me = s : d(me, "options"), c(ie, "callback"), a(me.signal, "options.signal"), ie = i(ie), S(V) || O(V))
      return be(V, me, ie);
    if (!X(V))
      throw new o("stream", ["ReadableStream", "WritableStream", "Stream"], V);
    let Q = (Ee = me.readable) !== null && Ee !== void 0 ? Ee : U(V), fe = (A = me.writable) !== null && A !== void 0 ? A : C(V), Ae = V._writableState, ae = V._readableState, B = () => {
      V.writable || se();
    }, _ = te(V) && U(V) === Q && C(V) === fe, Y = M(V, !1), se = () => {
      Y = !0, V.destroyed && (_ = !1), !(_ && (!V.readable || Q)) && (!Q || ee) && ie.call(V);
    }, ee = R(V, !1), J = () => {
      ee = !0, V.destroyed && (_ = !1), !(_ && (!V.writable || fe)) && (!fe || Y) && ie.call(V);
    }, ce = (G) => {
      ie.call(V, G);
    }, pe = y(V), k = () => {
      pe = !0;
      let G = $(V) || F(V);
      if (G && typeof G != "boolean")
        return ie.call(V, G);
      if (Q && !ee && U(V, !0) && !R(V, !1))
        return ie.call(V, new r());
      if (fe && !Y && !M(V, !1))
        return ie.call(V, new r());
      ie.call(V);
    }, N = () => {
      pe = !0;
      let G = $(V) || F(V);
      if (G && typeof G != "boolean")
        return ie.call(V, G);
      ie.call(V);
    }, D = () => {
      V.req.on("finish", se);
    };
    q(V) ? (V.on("complete", se), _ || V.on("abort", k), V.req ? D() : V.on("request", D)) : fe && !Ae && (V.on("end", B), V.on("close", B)), !_ && typeof V.aborted == "boolean" && V.on("aborted", k), V.on("end", J), V.on("finish", se), me.error !== !1 && V.on("error", ce), V.on("close", k), pe ? t.nextTick(k) : Ae != null && Ae.errorEmitted || ae != null && ae.errorEmitted ? _ || t.nextTick(N) : (!Q && (!_ || T(V)) && (Y || W(V) === !1) || !fe && (!_ || W(V)) && (ee || T(V) === !1) || ae && V.req && V.aborted) && t.nextTick(N);
    let re = () => {
      ie = Z, V.removeListener("aborted", k), V.removeListener("complete", se), V.removeListener("abort", k), V.removeListener("request", D), V.req && V.req.removeListener("finish", se), V.removeListener("end", B), V.removeListener("close", B), V.removeListener("finish", se), V.removeListener("end", J), V.removeListener("error", ce), V.removeListener("close", k);
    };
    if (me.signal && !pe) {
      let G = () => {
        let j = ie;
        re(), j.call(V, new l(void 0, { cause: me.signal.reason }));
      };
      if (me.signal.aborted)
        t.nextTick(G);
      else {
        let j = ie;
        ie = i((...K) => {
          me.signal.removeEventListener("abort", G), j.apply(V, K);
        }), me.signal.addEventListener("abort", G);
      }
    }
    return re;
  }
  function be(V, me, ie) {
    let Ee = !1, A = Z;
    if (me.signal)
      if (A = () => {
        Ee = !0, ie.call(V, new l(void 0, { cause: me.signal.reason }));
      }, me.signal.aborted)
        t.nextTick(A);
      else {
        let fe = ie;
        ie = i((...Ae) => {
          me.signal.removeEventListener("abort", A), fe.apply(V, Ae);
        }), me.signal.addEventListener("abort", A);
      }
    let Q = (...fe) => {
      Ee || t.nextTick(() => ie.apply(V, fe));
    };
    return m(V[E].promise, Q, Q), Z;
  }
  function ne(V, me) {
    var ie;
    let Ee = !1;
    return me === null && (me = s), (ie = me) !== null && ie !== void 0 && ie.cleanup && (g(me.cleanup, "cleanup"), Ee = me.cleanup), new b((A, Q) => {
      let fe = z(V, me, (Ae) => {
        Ee && fe(), Ae ? Q(Ae) : A();
      });
    });
  }
  n.exports = z, n.exports.finished = ne;
}), Sr = we((e, n) => {
  he(), ue(), le();
  var t = gr(), { aggregateTwoErrors: l, codes: { ERR_MULTIPLE_CALLBACK: h }, AbortError: o } = mt(), { Symbol: r } = ot(), { kDestroyed: s, isDestroyed: i, isFinished: a, isServerRequest: c } = Ht(), d = r("kDestroy"), g = r("kConstruct");
  function b(E, q, Z) {
    E && (E.stack, q && !q.errored && (q.errored = E), Z && !Z.errored && (Z.errored = E));
  }
  function m(E, q) {
    let Z = this._readableState, z = this._writableState, be = z || Z;
    return z != null && z.destroyed || Z != null && Z.destroyed ? (typeof q == "function" && q(), this) : (b(E, z, Z), z && (z.destroyed = !0), Z && (Z.destroyed = !0), be.constructed ? y(this, E, q) : this.once(d, function(ne) {
      y(this, l(ne, E), q);
    }), this);
  }
  function y(E, q, Z) {
    let z = !1;
    function be(ne) {
      if (z)
        return;
      z = !0;
      let V = E._readableState, me = E._writableState;
      b(ne, me, V), me && (me.closed = !0), V && (V.closed = !0), typeof Z == "function" && Z(ne), ne ? t.nextTick(T, E, ne) : t.nextTick(U, E);
    }
    try {
      E._destroy(q || null, be);
    } catch (ne) {
      be(ne);
    }
  }
  function T(E, q) {
    S(E, q), U(E);
  }
  function U(E) {
    let q = E._readableState, Z = E._writableState;
    Z && (Z.closeEmitted = !0), q && (q.closeEmitted = !0), (Z != null && Z.emitClose || q != null && q.emitClose) && E.emit("close");
  }
  function S(E, q) {
    let Z = E._readableState, z = E._writableState;
    z != null && z.errorEmitted || Z != null && Z.errorEmitted || (z && (z.errorEmitted = !0), Z && (Z.errorEmitted = !0), E.emit("error", q));
  }
  function R() {
    let E = this._readableState, q = this._writableState;
    E && (E.constructed = !0, E.closed = !1, E.closeEmitted = !1, E.destroyed = !1, E.errored = null, E.errorEmitted = !1, E.reading = !1, E.ended = E.readable === !1, E.endEmitted = E.readable === !1), q && (q.constructed = !0, q.destroyed = !1, q.closed = !1, q.closeEmitted = !1, q.errored = null, q.errorEmitted = !1, q.finalCalled = !1, q.prefinished = !1, q.ended = q.writable === !1, q.ending = q.writable === !1, q.finished = q.writable === !1);
  }
  function F(E, q, Z) {
    let z = E._readableState, be = E._writableState;
    if (be != null && be.destroyed || z != null && z.destroyed)
      return this;
    z != null && z.autoDestroy || be != null && be.autoDestroy ? E.destroy(q) : q && (q.stack, be && !be.errored && (be.errored = q), z && !z.errored && (z.errored = q), Z ? t.nextTick(S, E, q) : S(E, q));
  }
  function W(E, q) {
    if (typeof E._construct != "function")
      return;
    let Z = E._readableState, z = E._writableState;
    Z && (Z.constructed = !1), z && (z.constructed = !1), E.once(g, q), !(E.listenerCount(g) > 1) && t.nextTick(C, E);
  }
  function C(E) {
    let q = !1;
    function Z(z) {
      if (q) {
        F(E, z ?? new h());
        return;
      }
      q = !0;
      let be = E._readableState, ne = E._writableState, V = ne || be;
      be && (be.constructed = !0), ne && (ne.constructed = !0), V.destroyed ? E.emit(d, z) : z ? F(E, z, !0) : t.nextTick(O, E);
    }
    try {
      E._construct((z) => {
        t.nextTick(Z, z);
      });
    } catch (z) {
      t.nextTick(Z, z);
    }
  }
  function O(E) {
    E.emit(g);
  }
  function M(E) {
    return (E == null ? void 0 : E.setHeader) && typeof E.abort == "function";
  }
  function $(E) {
    E.emit("close");
  }
  function X(E, q) {
    E.emit("error", q), t.nextTick($, E);
  }
  function te(E, q) {
    !E || i(E) || (!q && !a(E) && (q = new o()), c(E) ? (E.socket = null, E.destroy(q)) : M(E) ? E.abort() : M(E.req) ? E.req.abort() : typeof E.destroy == "function" ? E.destroy(q) : typeof E.close == "function" ? E.close() : q ? t.nextTick(X, E, q) : t.nextTick($, E), E.destroyed || (E[s] = !0));
  }
  n.exports = { construct: W, destroyer: te, destroy: m, undestroy: R, errorOrDestroy: F };
});
function Fe() {
  Fe.init.call(this);
}
function Qr(e) {
  if (typeof e != "function")
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof e);
}
function Es(e) {
  return e._maxListeners === void 0 ? Fe.defaultMaxListeners : e._maxListeners;
}
function mo(e, n, t, l) {
  var h, o, r, s;
  if (Qr(t), (o = e._events) === void 0 ? (o = e._events = /* @__PURE__ */ Object.create(null), e._eventsCount = 0) : (o.newListener !== void 0 && (e.emit("newListener", n, t.listener ? t.listener : t), o = e._events), r = o[n]), r === void 0)
    r = o[n] = t, ++e._eventsCount;
  else if (typeof r == "function" ? r = o[n] = l ? [t, r] : [r, t] : l ? r.unshift(t) : r.push(t), (h = Es(e)) > 0 && r.length > h && !r.warned) {
    r.warned = !0;
    var i = new Error("Possible EventEmitter memory leak detected. " + r.length + " " + String(n) + " listeners added. Use emitter.setMaxListeners() to increase limit");
    i.name = "MaxListenersExceededWarning", i.emitter = e, i.type = n, i.count = r.length, s = i, console && console.warn && console.warn(s);
  }
  return e;
}
function Al() {
  if (!this.fired)
    return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, arguments.length === 0 ? this.listener.call(this.target) : this.listener.apply(this.target, arguments);
}
function yo(e, n, t) {
  var l = { fired: !1, wrapFn: void 0, target: e, type: n, listener: t }, h = Al.bind(l);
  return h.listener = t, l.wrapFn = h, h;
}
function vo(e, n, t) {
  var l = e._events;
  if (l === void 0)
    return [];
  var h = l[n];
  return h === void 0 ? [] : typeof h == "function" ? t ? [h.listener || h] : [h] : t ? function(o) {
    for (var r = new Array(o.length), s = 0; s < r.length; ++s)
      r[s] = o[s].listener || o[s];
    return r;
  }(h) : Ss(h, h.length);
}
function wo(e) {
  var n = this._events;
  if (n !== void 0) {
    var t = n[e];
    if (typeof t == "function")
      return 1;
    if (t !== void 0)
      return t.length;
  }
  return 0;
}
function Ss(e, n) {
  for (var t = new Array(n), l = 0; l < n; ++l)
    t[l] = e[l];
  return t;
}
var _o, Eo, tr, gi, bi, mi, _t, So = ht(() => {
  he(), ue(), le(), tr = typeof Reflect == "object" ? Reflect : null, gi = tr && typeof tr.apply == "function" ? tr.apply : function(e, n, t) {
    return Function.prototype.apply.call(e, n, t);
  }, Eo = tr && typeof tr.ownKeys == "function" ? tr.ownKeys : Object.getOwnPropertySymbols ? function(e) {
    return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e));
  } : function(e) {
    return Object.getOwnPropertyNames(e);
  }, bi = Number.isNaN || function(e) {
    return e != e;
  }, _o = Fe, Fe.EventEmitter = Fe, Fe.prototype._events = void 0, Fe.prototype._eventsCount = 0, Fe.prototype._maxListeners = void 0, mi = 10, Object.defineProperty(Fe, "defaultMaxListeners", { enumerable: !0, get: function() {
    return mi;
  }, set: function(e) {
    if (typeof e != "number" || e < 0 || bi(e))
      throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + e + ".");
    mi = e;
  } }), Fe.init = function() {
    this._events !== void 0 && this._events !== Object.getPrototypeOf(this)._events || (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0;
  }, Fe.prototype.setMaxListeners = function(e) {
    if (typeof e != "number" || e < 0 || bi(e))
      throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + e + ".");
    return this._maxListeners = e, this;
  }, Fe.prototype.getMaxListeners = function() {
    return Es(this);
  }, Fe.prototype.emit = function(e) {
    for (var n = [], t = 1; t < arguments.length; t++)
      n.push(arguments[t]);
    var l = e === "error", h = this._events;
    if (h !== void 0)
      l = l && h.error === void 0;
    else if (!l)
      return !1;
    if (l) {
      var o;
      if (n.length > 0 && (o = n[0]), o instanceof Error)
        throw o;
      var r = new Error("Unhandled error." + (o ? " (" + o.message + ")" : ""));
      throw r.context = o, r;
    }
    var s = h[e];
    if (s === void 0)
      return !1;
    if (typeof s == "function")
      gi(s, this, n);
    else {
      var i = s.length, a = Ss(s, i);
      for (t = 0; t < i; ++t)
        gi(a[t], this, n);
    }
    return !0;
  }, Fe.prototype.addListener = function(e, n) {
    return mo(this, e, n, !1);
  }, Fe.prototype.on = Fe.prototype.addListener, Fe.prototype.prependListener = function(e, n) {
    return mo(this, e, n, !0);
  }, Fe.prototype.once = function(e, n) {
    return Qr(n), this.on(e, yo(this, e, n)), this;
  }, Fe.prototype.prependOnceListener = function(e, n) {
    return Qr(n), this.prependListener(e, yo(this, e, n)), this;
  }, Fe.prototype.removeListener = function(e, n) {
    var t, l, h, o, r;
    if (Qr(n), (l = this._events) === void 0)
      return this;
    if ((t = l[e]) === void 0)
      return this;
    if (t === n || t.listener === n)
      --this._eventsCount == 0 ? this._events = /* @__PURE__ */ Object.create(null) : (delete l[e], l.removeListener && this.emit("removeListener", e, t.listener || n));
    else if (typeof t != "function") {
      for (h = -1, o = t.length - 1; o >= 0; o--)
        if (t[o] === n || t[o].listener === n) {
          r = t[o].listener, h = o;
          break;
        }
      if (h < 0)
        return this;
      h === 0 ? t.shift() : function(s, i) {
        for (; i + 1 < s.length; i++)
          s[i] = s[i + 1];
        s.pop();
      }(t, h), t.length === 1 && (l[e] = t[0]), l.removeListener !== void 0 && this.emit("removeListener", e, r || n);
    }
    return this;
  }, Fe.prototype.off = Fe.prototype.removeListener, Fe.prototype.removeAllListeners = function(e) {
    var n, t, l;
    if ((t = this._events) === void 0)
      return this;
    if (t.removeListener === void 0)
      return arguments.length === 0 ? (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0) : t[e] !== void 0 && (--this._eventsCount == 0 ? this._events = /* @__PURE__ */ Object.create(null) : delete t[e]), this;
    if (arguments.length === 0) {
      var h, o = Object.keys(t);
      for (l = 0; l < o.length; ++l)
        (h = o[l]) !== "removeListener" && this.removeAllListeners(h);
      return this.removeAllListeners("removeListener"), this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0, this;
    }
    if (typeof (n = t[e]) == "function")
      this.removeListener(e, n);
    else if (n !== void 0)
      for (l = n.length - 1; l >= 0; l--)
        this.removeListener(e, n[l]);
    return this;
  }, Fe.prototype.listeners = function(e) {
    return vo(this, e, !0);
  }, Fe.prototype.rawListeners = function(e) {
    return vo(this, e, !1);
  }, Fe.listenerCount = function(e, n) {
    return typeof e.listenerCount == "function" ? e.listenerCount(n) : wo.call(e, n);
  }, Fe.prototype.listenerCount = wo, Fe.prototype.eventNames = function() {
    return this._eventsCount > 0 ? Eo(this._events) : [];
  }, _t = _o, _t.EventEmitter, _t.defaultMaxListeners, _t.init, _t.listenerCount, _t.EventEmitter, _t.defaultMaxListeners, _t.init, _t.listenerCount;
}), br = {};
pr(br, { EventEmitter: () => As, default: () => _t, defaultMaxListeners: () => Is, init: () => Ts, listenerCount: () => ks, on: () => Rs, once: () => Os });
var As, Is, Ts, ks, Rs, Os, Ar = ht(() => {
  he(), ue(), le(), So(), So(), _t.once = function(e, n) {
    return new Promise((t, l) => {
      function h(...r) {
        o !== void 0 && e.removeListener("error", o), t(r);
      }
      let o;
      n !== "error" && (o = (r) => {
        e.removeListener(name, h), l(r);
      }, e.once("error", o)), e.once(n, h);
    });
  }, _t.on = function(e, n) {
    let t = [], l = [], h = null, o = !1, r = { async next() {
      let a = t.shift();
      if (a)
        return createIterResult(a, !1);
      if (h) {
        let c = Promise.reject(h);
        return h = null, c;
      }
      return o ? createIterResult(void 0, !0) : new Promise((c, d) => l.push({ resolve: c, reject: d }));
    }, async return() {
      e.removeListener(n, s), e.removeListener("error", i), o = !0;
      for (let a of l)
        a.resolve(createIterResult(void 0, !0));
      return createIterResult(void 0, !0);
    }, throw(a) {
      h = a, e.removeListener(n, s), e.removeListener("error", i);
    }, [Symbol.asyncIterator]() {
      return this;
    } };
    return e.on(n, s), e.on("error", i), r;
    function s(...a) {
      let c = l.shift();
      c ? c.resolve(createIterResult(a, !1)) : t.push(a);
    }
    function i(a) {
      o = !0;
      let c = l.shift();
      c ? c.reject(a) : h = a, r.return();
    }
  }, { EventEmitter: As, defaultMaxListeners: Is, init: Ts, listenerCount: ks, on: Rs, once: Os } = _t;
}), oo = we((e, n) => {
  he(), ue(), le();
  var { ArrayIsArray: t, ObjectSetPrototypeOf: l } = ot(), { EventEmitter: h } = (Ar(), $e(br));
  function o(s) {
    h.call(this, s);
  }
  l(o.prototype, h.prototype), l(o, h), o.prototype.pipe = function(s, i) {
    let a = this;
    function c(U) {
      s.writable && s.write(U) === !1 && a.pause && a.pause();
    }
    a.on("data", c);
    function d() {
      a.readable && a.resume && a.resume();
    }
    s.on("drain", d), !s._isStdio && (!i || i.end !== !1) && (a.on("end", b), a.on("close", m));
    let g = !1;
    function b() {
      g || (g = !0, s.end());
    }
    function m() {
      g || (g = !0, typeof s.destroy == "function" && s.destroy());
    }
    function y(U) {
      T(), h.listenerCount(this, "error") === 0 && this.emit("error", U);
    }
    r(a, "error", y), r(s, "error", y);
    function T() {
      a.removeListener("data", c), s.removeListener("drain", d), a.removeListener("end", b), a.removeListener("close", m), a.removeListener("error", y), s.removeListener("error", y), a.removeListener("end", T), a.removeListener("close", T), s.removeListener("close", T);
    }
    return a.on("end", T), a.on("close", T), s.on("close", T), s.emit("pipe", a), s;
  };
  function r(s, i, a) {
    if (typeof s.prependListener == "function")
      return s.prependListener(i, a);
    !s._events || !s._events[i] ? s.on(i, a) : t(s._events[i]) ? s._events[i].unshift(a) : s._events[i] = [a, s._events[i]];
  }
  n.exports = { Stream: o, prependListener: r };
}), ai = we((e, n) => {
  he(), ue(), le();
  var { AbortError: t, codes: l } = mt(), { isNodeStream: h, isWebStream: o, kControllerErrorFunction: r } = Ht(), s = Zt(), { ERR_INVALID_ARG_TYPE: i } = l, a = (c, d) => {
    if (typeof c != "object" || !("aborted" in c))
      throw new i(d, "AbortSignal", c);
  };
  n.exports.addAbortSignal = function(c, d) {
    if (a(c, "signal"), !h(d) && !o(d))
      throw new i("stream", ["ReadableStream", "WritableStream", "Stream"], d);
    return n.exports.addAbortSignalNoValidate(c, d);
  }, n.exports.addAbortSignalNoValidate = function(c, d) {
    if (typeof c != "object" || !("aborted" in c))
      return d;
    let g = h(d) ? () => {
      d.destroy(new t(void 0, { cause: c.reason }));
    } : () => {
      d[r](new t(void 0, { cause: c.reason }));
    };
    return c.aborted ? g() : (c.addEventListener("abort", g), s(d, () => c.removeEventListener("abort", g))), d;
  };
}), Il = we((e, n) => {
  he(), ue(), le();
  var { StringPrototypeSlice: t, SymbolIterator: l, TypedArrayPrototypeSet: h, Uint8Array: o } = ot(), { Buffer: r } = (ft(), $e(ct)), { inspect: s } = $t();
  n.exports = class {
    constructor() {
      this.head = null, this.tail = null, this.length = 0;
    }
    push(i) {
      let a = { data: i, next: null };
      this.length > 0 ? this.tail.next = a : this.head = a, this.tail = a, ++this.length;
    }
    unshift(i) {
      let a = { data: i, next: this.head };
      this.length === 0 && (this.tail = a), this.head = a, ++this.length;
    }
    shift() {
      if (this.length === 0)
        return;
      let i = this.head.data;
      return this.length === 1 ? this.head = this.tail = null : this.head = this.head.next, --this.length, i;
    }
    clear() {
      this.head = this.tail = null, this.length = 0;
    }
    join(i) {
      if (this.length === 0)
        return "";
      let a = this.head, c = "" + a.data;
      for (; (a = a.next) !== null; )
        c += i + a.data;
      return c;
    }
    concat(i) {
      if (this.length === 0)
        return r.alloc(0);
      let a = r.allocUnsafe(i >>> 0), c = this.head, d = 0;
      for (; c; )
        h(a, c.data, d), d += c.data.length, c = c.next;
      return a;
    }
    consume(i, a) {
      let c = this.head.data;
      if (i < c.length) {
        let d = c.slice(0, i);
        return this.head.data = c.slice(i), d;
      }
      return i === c.length ? this.shift() : a ? this._getString(i) : this._getBuffer(i);
    }
    first() {
      return this.head.data;
    }
    *[l]() {
      for (let i = this.head; i; i = i.next)
        yield i.data;
    }
    _getString(i) {
      let a = "", c = this.head, d = 0;
      do {
        let g = c.data;
        if (i > g.length)
          a += g, i -= g.length;
        else {
          i === g.length ? (a += g, ++d, c.next ? this.head = c.next : this.head = this.tail = null) : (a += t(g, 0, i), this.head = c, c.data = t(g, i));
          break;
        }
        ++d;
      } while ((c = c.next) !== null);
      return this.length -= d, a;
    }
    _getBuffer(i) {
      let a = r.allocUnsafe(i), c = i, d = this.head, g = 0;
      do {
        let b = d.data;
        if (i > b.length)
          h(a, b, c - i), i -= b.length;
        else {
          i === b.length ? (h(a, b, c - i), ++g, d.next ? this.head = d.next : this.head = this.tail = null) : (h(a, new o(b.buffer, b.byteOffset, i), c - i), this.head = d, d.data = b.slice(i));
          break;
        }
        ++g;
      } while ((d = d.next) !== null);
      return this.length -= g, a;
    }
    [Symbol.for("nodejs.util.inspect.custom")](i, a) {
      return s(this, { ...a, depth: 0, customInspect: !1 });
    }
  };
}), so = we((e, n) => {
  he(), ue(), le();
  var { MathFloor: t, NumberIsInteger: l } = ot(), { ERR_INVALID_ARG_VALUE: h } = mt().codes;
  function o(i, a, c) {
    return i.highWaterMark != null ? i.highWaterMark : a ? i[c] : null;
  }
  function r(i) {
    return i ? 16 : 16 * 1024;
  }
  function s(i, a, c, d) {
    let g = o(a, d, c);
    if (g != null) {
      if (!l(g) || g < 0) {
        let b = d ? `options.${c}` : "options.highWaterMark";
        throw new h(b, g);
      }
      return t(g);
    }
    return r(i.objectMode);
  }
  n.exports = { getHighWaterMark: s, getDefaultHighWaterMark: r };
});
function Ao(e) {
  var n = e.length;
  if (n % 4 > 0)
    throw new Error("Invalid string. Length must be a multiple of 4");
  var t = e.indexOf("=");
  return t === -1 && (t = n), [t, t === n ? 0 : 4 - t % 4];
}
function Tl(e, n, t) {
  for (var l, h, o = [], r = n; r < t; r += 3)
    l = (e[r] << 16 & 16711680) + (e[r + 1] << 8 & 65280) + (255 & e[r + 2]), o.push(Rt[(h = l) >> 18 & 63] + Rt[h >> 12 & 63] + Rt[h >> 6 & 63] + Rt[63 & h]);
  return o.join("");
}
function Ft(e) {
  if (e > 2147483647)
    throw new RangeError('The value "' + e + '" is invalid for option "size"');
  var n = new Uint8Array(e);
  return Object.setPrototypeOf(n, ge.prototype), n;
}
function ge(e, n, t) {
  if (typeof e == "number") {
    if (typeof n == "string")
      throw new TypeError('The "string" argument must be of type string. Received type number');
    return Nn(e);
  }
  return Cs(e, n, t);
}
function Cs(e, n, t) {
  if (typeof e == "string")
    return function(o, r) {
      if (typeof r == "string" && r !== "" || (r = "utf8"), !ge.isEncoding(r))
        throw new TypeError("Unknown encoding: " + r);
      var s = 0 | Bs(o, r), i = Ft(s), a = i.write(o, r);
      return a !== s && (i = i.slice(0, a)), i;
    }(e, n);
  if (ArrayBuffer.isView(e))
    return yi(e);
  if (e == null)
    throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof e);
  if (Wt(e, ArrayBuffer) || e && Wt(e.buffer, ArrayBuffer) || typeof SharedArrayBuffer < "u" && (Wt(e, SharedArrayBuffer) || e && Wt(e.buffer, SharedArrayBuffer)))
    return kl(e, n, t);
  if (typeof e == "number")
    throw new TypeError('The "value" argument must not be of type number. Received type number');
  var l = e.valueOf && e.valueOf();
  if (l != null && l !== e)
    return ge.from(l, n, t);
  var h = function(o) {
    if (ge.isBuffer(o)) {
      var r = 0 | ao(o.length), s = Ft(r);
      return s.length === 0 || o.copy(s, 0, 0, r), s;
    }
    if (o.length !== void 0)
      return typeof o.length != "number" || lo(o.length) ? Ft(0) : yi(o);
    if (o.type === "Buffer" && Array.isArray(o.data))
      return yi(o.data);
  }(e);
  if (h)
    return h;
  if (typeof Symbol < "u" && Symbol.toPrimitive != null && typeof e[Symbol.toPrimitive] == "function")
    return ge.from(e[Symbol.toPrimitive]("string"), n, t);
  throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof e);
}
function Ps(e) {
  if (typeof e != "number")
    throw new TypeError('"size" argument must be of type number');
  if (e < 0)
    throw new RangeError('The value "' + e + '" is invalid for option "size"');
}
function Nn(e) {
  return Ps(e), Ft(e < 0 ? 0 : 0 | ao(e));
}
function yi(e) {
  for (var n = e.length < 0 ? 0 : 0 | ao(e.length), t = Ft(n), l = 0; l < n; l += 1)
    t[l] = 255 & e[l];
  return t;
}
function kl(e, n, t) {
  if (n < 0 || e.byteLength < n)
    throw new RangeError('"offset" is outside of buffer bounds');
  if (e.byteLength < n + (t || 0))
    throw new RangeError('"length" is outside of buffer bounds');
  var l;
  return l = n === void 0 && t === void 0 ? new Uint8Array(e) : t === void 0 ? new Uint8Array(e, n) : new Uint8Array(e, n, t), Object.setPrototypeOf(l, ge.prototype), l;
}
function ao(e) {
  if (e >= 2147483647)
    throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x7fffffff bytes");
  return 0 | e;
}
function Bs(e, n) {
  if (ge.isBuffer(e))
    return e.length;
  if (ArrayBuffer.isView(e) || Wt(e, ArrayBuffer))
    return e.byteLength;
  if (typeof e != "string")
    throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof e);
  var t = e.length, l = arguments.length > 2 && arguments[2] === !0;
  if (!l && t === 0)
    return 0;
  for (var h = !1; ; )
    switch (n) {
      case "ascii":
      case "latin1":
      case "binary":
        return t;
      case "utf8":
      case "utf-8":
        return Dn(e).length;
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return 2 * t;
      case "hex":
        return t >>> 1;
      case "base64":
        return Ls(e).length;
      default:
        if (h)
          return l ? -1 : Dn(e).length;
        n = ("" + n).toLowerCase(), h = !0;
    }
}
function Rl(e, n, t) {
  var l = !1;
  if ((n === void 0 || n < 0) && (n = 0), n > this.length || ((t === void 0 || t > this.length) && (t = this.length), t <= 0) || (t >>>= 0) <= (n >>>= 0))
    return "";
  for (e || (e = "utf8"); ; )
    switch (e) {
      case "hex":
        return jl(this, n, t);
      case "utf8":
      case "utf-8":
        return Ms(this, n, t);
      case "ascii":
        return Ul(this, n, t);
      case "latin1":
      case "binary":
        return Ll(this, n, t);
      case "base64":
        return Ml(this, n, t);
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return Nl(this, n, t);
      default:
        if (l)
          throw new TypeError("Unknown encoding: " + e);
        e = (e + "").toLowerCase(), l = !0;
    }
}
function rr(e, n, t) {
  var l = e[n];
  e[n] = e[t], e[t] = l;
}
function Io(e, n, t, l, h) {
  if (e.length === 0)
    return -1;
  if (typeof t == "string" ? (l = t, t = 0) : t > 2147483647 ? t = 2147483647 : t < -2147483648 && (t = -2147483648), lo(t = +t) && (t = h ? 0 : e.length - 1), t < 0 && (t = e.length + t), t >= e.length) {
    if (h)
      return -1;
    t = e.length - 1;
  } else if (t < 0) {
    if (!h)
      return -1;
    t = 0;
  }
  if (typeof n == "string" && (n = ge.from(n, l)), ge.isBuffer(n))
    return n.length === 0 ? -1 : To(e, n, t, l, h);
  if (typeof n == "number")
    return n &= 255, typeof Uint8Array.prototype.indexOf == "function" ? h ? Uint8Array.prototype.indexOf.call(e, n, t) : Uint8Array.prototype.lastIndexOf.call(e, n, t) : To(e, [n], t, l, h);
  throw new TypeError("val must be string, number or Buffer");
}
function To(e, n, t, l, h) {
  var o, r = 1, s = e.length, i = n.length;
  if (l !== void 0 && ((l = String(l).toLowerCase()) === "ucs2" || l === "ucs-2" || l === "utf16le" || l === "utf-16le")) {
    if (e.length < 2 || n.length < 2)
      return -1;
    r = 2, s /= 2, i /= 2, t /= 2;
  }
  function a(b, m) {
    return r === 1 ? b[m] : b.readUInt16BE(m * r);
  }
  if (h) {
    var c = -1;
    for (o = t; o < s; o++)
      if (a(e, o) === a(n, c === -1 ? 0 : o - c)) {
        if (c === -1 && (c = o), o - c + 1 === i)
          return c * r;
      } else
        c !== -1 && (o -= o - c), c = -1;
  } else
    for (t + i > s && (t = s - i), o = t; o >= 0; o--) {
      for (var d = !0, g = 0; g < i; g++)
        if (a(e, o + g) !== a(n, g)) {
          d = !1;
          break;
        }
      if (d)
        return o;
    }
  return -1;
}
function Ol(e, n, t, l) {
  t = Number(t) || 0;
  var h = e.length - t;
  l ? (l = Number(l)) > h && (l = h) : l = h;
  var o = n.length;
  l > o / 2 && (l = o / 2);
  for (var r = 0; r < l; ++r) {
    var s = parseInt(n.substr(2 * r, 2), 16);
    if (lo(s))
      return r;
    e[t + r] = s;
  }
  return r;
}
function Cl(e, n, t, l) {
  return li(Dn(n, e.length - t), e, t, l);
}
function xs(e, n, t, l) {
  return li(function(h) {
    for (var o = [], r = 0; r < h.length; ++r)
      o.push(255 & h.charCodeAt(r));
    return o;
  }(n), e, t, l);
}
function Pl(e, n, t, l) {
  return xs(e, n, t, l);
}
function Bl(e, n, t, l) {
  return li(Ls(n), e, t, l);
}
function xl(e, n, t, l) {
  return li(function(h, o) {
    for (var r, s, i, a = [], c = 0; c < h.length && !((o -= 2) < 0); ++c)
      r = h.charCodeAt(c), s = r >> 8, i = r % 256, a.push(i), a.push(s);
    return a;
  }(n, e.length - t), e, t, l);
}
function Ml(e, n, t) {
  return n === 0 && t === e.length ? ri.fromByteArray(e) : ri.fromByteArray(e.slice(n, t));
}
function Ms(e, n, t) {
  t = Math.min(e.length, t);
  for (var l = [], h = n; h < t; ) {
    var o, r, s, i, a = e[h], c = null, d = a > 239 ? 4 : a > 223 ? 3 : a > 191 ? 2 : 1;
    if (h + d <= t)
      switch (d) {
        case 1:
          a < 128 && (c = a);
          break;
        case 2:
          (192 & (o = e[h + 1])) == 128 && (i = (31 & a) << 6 | 63 & o) > 127 && (c = i);
          break;
        case 3:
          o = e[h + 1], r = e[h + 2], (192 & o) == 128 && (192 & r) == 128 && (i = (15 & a) << 12 | (63 & o) << 6 | 63 & r) > 2047 && (i < 55296 || i > 57343) && (c = i);
          break;
        case 4:
          o = e[h + 1], r = e[h + 2], s = e[h + 3], (192 & o) == 128 && (192 & r) == 128 && (192 & s) == 128 && (i = (15 & a) << 18 | (63 & o) << 12 | (63 & r) << 6 | 63 & s) > 65535 && i < 1114112 && (c = i);
      }
    c === null ? (c = 65533, d = 1) : c > 65535 && (c -= 65536, l.push(c >>> 10 & 1023 | 55296), c = 56320 | 1023 & c), l.push(c), h += d;
  }
  return function(g) {
    var b = g.length;
    if (b <= 4096)
      return String.fromCharCode.apply(String, g);
    for (var m = "", y = 0; y < b; )
      m += String.fromCharCode.apply(String, g.slice(y, y += 4096));
    return m;
  }(l);
}
function Ul(e, n, t) {
  var l = "";
  t = Math.min(e.length, t);
  for (var h = n; h < t; ++h)
    l += String.fromCharCode(127 & e[h]);
  return l;
}
function Ll(e, n, t) {
  var l = "";
  t = Math.min(e.length, t);
  for (var h = n; h < t; ++h)
    l += String.fromCharCode(e[h]);
  return l;
}
function jl(e, n, t) {
  var l = e.length;
  (!n || n < 0) && (n = 0), (!t || t < 0 || t > l) && (t = l);
  for (var h = "", o = n; o < t; ++o)
    h += Ns[e[o]];
  return h;
}
function Nl(e, n, t) {
  for (var l = e.slice(n, t), h = "", o = 0; o < l.length; o += 2)
    h += String.fromCharCode(l[o] + 256 * l[o + 1]);
  return h;
}
function at(e, n, t) {
  if (e % 1 != 0 || e < 0)
    throw new RangeError("offset is not uint");
  if (e + n > t)
    throw new RangeError("Trying to access beyond buffer length");
}
function bt(e, n, t, l, h, o) {
  if (!ge.isBuffer(e))
    throw new TypeError('"buffer" argument must be a Buffer instance');
  if (n > h || n < o)
    throw new RangeError('"value" argument is out of bounds');
  if (t + l > e.length)
    throw new RangeError("Index out of range");
}
function Us(e, n, t, l, h, o) {
  if (t + l > e.length)
    throw new RangeError("Index out of range");
  if (t < 0)
    throw new RangeError("Index out of range");
}
function ko(e, n, t, l, h) {
  return n = +n, t >>>= 0, h || Us(e, 0, t, 4), lr.write(e, n, t, l, 23, 4), t + 4;
}
function Ro(e, n, t, l, h) {
  return n = +n, t >>>= 0, h || Us(e, 0, t, 8), lr.write(e, n, t, l, 52, 8), t + 8;
}
function Dn(e, n) {
  var t;
  n = n || 1 / 0;
  for (var l = e.length, h = null, o = [], r = 0; r < l; ++r) {
    if ((t = e.charCodeAt(r)) > 55295 && t < 57344) {
      if (!h) {
        if (t > 56319) {
          (n -= 3) > -1 && o.push(239, 191, 189);
          continue;
        }
        if (r + 1 === l) {
          (n -= 3) > -1 && o.push(239, 191, 189);
          continue;
        }
        h = t;
        continue;
      }
      if (t < 56320) {
        (n -= 3) > -1 && o.push(239, 191, 189), h = t;
        continue;
      }
      t = 65536 + (h - 55296 << 10 | t - 56320);
    } else
      h && (n -= 3) > -1 && o.push(239, 191, 189);
    if (h = null, t < 128) {
      if ((n -= 1) < 0)
        break;
      o.push(t);
    } else if (t < 2048) {
      if ((n -= 2) < 0)
        break;
      o.push(t >> 6 | 192, 63 & t | 128);
    } else if (t < 65536) {
      if ((n -= 3) < 0)
        break;
      o.push(t >> 12 | 224, t >> 6 & 63 | 128, 63 & t | 128);
    } else {
      if (!(t < 1114112))
        throw new Error("Invalid code point");
      if ((n -= 4) < 0)
        break;
      o.push(t >> 18 | 240, t >> 12 & 63 | 128, t >> 6 & 63 | 128, 63 & t | 128);
    }
  }
  return o;
}
function Ls(e) {
  return ri.toByteArray(function(n) {
    if ((n = (n = n.split("=")[0]).trim().replace(js, "")).length < 2)
      return "";
    for (; n.length % 4 != 0; )
      n += "=";
    return n;
  }(e));
}
function li(e, n, t, l) {
  for (var h = 0; h < l && !(h + t >= n.length || h >= e.length); ++h)
    n[h + t] = e[h];
  return h;
}
function Wt(e, n) {
  return e instanceof n || e != null && e.constructor != null && e.constructor.name != null && e.constructor.name === n.name;
}
function lo(e) {
  return e != e;
}
function Oo(e, n) {
  for (var t in e)
    n[t] = e[t];
}
function ir(e, n, t) {
  return Tt(e, n, t);
}
function kr(e) {
  var n;
  switch (this.encoding = function(t) {
    var l = function(h) {
      if (!h)
        return "utf8";
      for (var o; ; )
        switch (h) {
          case "utf8":
          case "utf-8":
            return "utf8";
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return "utf16le";
          case "latin1":
          case "binary":
            return "latin1";
          case "base64":
          case "ascii":
          case "hex":
            return h;
          default:
            if (o)
              return;
            h = ("" + h).toLowerCase(), o = !0;
        }
    }(t);
    if (typeof l != "string" && (ii.isEncoding === Fn || !Fn(t)))
      throw new Error("Unknown encoding: " + t);
    return l || t;
  }(e), this.encoding) {
    case "utf16le":
      this.text = Fl, this.end = Wl, n = 4;
      break;
    case "utf8":
      this.fillLast = Dl, n = 4;
      break;
    case "base64":
      this.text = $l, this.end = ql, n = 3;
      break;
    default:
      return this.write = Vl, this.end = Hl, void 0;
  }
  this.lastNeed = 0, this.lastTotal = 0, this.lastChar = ii.allocUnsafe(n);
}
function vi(e) {
  return e <= 127 ? 0 : e >> 5 == 6 ? 2 : e >> 4 == 14 ? 3 : e >> 3 == 30 ? 4 : e >> 6 == 2 ? -1 : -2;
}
function Dl(e) {
  var n = this.lastTotal - this.lastNeed, t = function(l, h, o) {
    if ((192 & h[0]) != 128)
      return l.lastNeed = 0, "�";
    if (l.lastNeed > 1 && h.length > 1) {
      if ((192 & h[1]) != 128)
        return l.lastNeed = 1, "�";
      if (l.lastNeed > 2 && h.length > 2 && (192 & h[2]) != 128)
        return l.lastNeed = 2, "�";
    }
  }(this, e);
  return t !== void 0 ? t : this.lastNeed <= e.length ? (e.copy(this.lastChar, n, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal)) : (e.copy(this.lastChar, n, 0, e.length), this.lastNeed -= e.length, void 0);
}
function Fl(e, n) {
  if ((e.length - n) % 2 == 0) {
    var t = e.toString("utf16le", n);
    if (t) {
      var l = t.charCodeAt(t.length - 1);
      if (l >= 55296 && l <= 56319)
        return this.lastNeed = 2, this.lastTotal = 4, this.lastChar[0] = e[e.length - 2], this.lastChar[1] = e[e.length - 1], t.slice(0, -1);
    }
    return t;
  }
  return this.lastNeed = 1, this.lastTotal = 2, this.lastChar[0] = e[e.length - 1], e.toString("utf16le", n, e.length - 1);
}
function Wl(e) {
  var n = e && e.length ? this.write(e) : "";
  if (this.lastNeed) {
    var t = this.lastTotal - this.lastNeed;
    return n + this.lastChar.toString("utf16le", 0, t);
  }
  return n;
}
function $l(e, n) {
  var t = (e.length - n) % 3;
  return t === 0 ? e.toString("base64", n) : (this.lastNeed = 3 - t, this.lastTotal = 3, t === 1 ? this.lastChar[0] = e[e.length - 1] : (this.lastChar[0] = e[e.length - 2], this.lastChar[1] = e[e.length - 1]), e.toString("base64", n, e.length - t));
}
function ql(e) {
  var n = e && e.length ? this.write(e) : "";
  return this.lastNeed ? n + this.lastChar.toString("base64", 0, 3 - this.lastNeed) : n;
}
function Vl(e) {
  return e.toString(this.encoding);
}
function Hl(e) {
  return e && e.length ? this.write(e) : "";
}
var Co, Rt, vt, Po, $r, nr, Bo, xo, Ct, ri, lr, wi, js, Ns, Rr, Or, Tt, Mo, _r, ii, Fn, Uo = ht(() => {
  for (he(), ue(), le(), Co = { byteLength: function(e) {
    var n = Ao(e), t = n[0], l = n[1];
    return 3 * (t + l) / 4 - l;
  }, toByteArray: function(e) {
    var n, t, l = Ao(e), h = l[0], o = l[1], r = new Po(function(a, c, d) {
      return 3 * (c + d) / 4 - d;
    }(0, h, o)), s = 0, i = o > 0 ? h - 4 : h;
    for (t = 0; t < i; t += 4)
      n = vt[e.charCodeAt(t)] << 18 | vt[e.charCodeAt(t + 1)] << 12 | vt[e.charCodeAt(t + 2)] << 6 | vt[e.charCodeAt(t + 3)], r[s++] = n >> 16 & 255, r[s++] = n >> 8 & 255, r[s++] = 255 & n;
    return o === 2 && (n = vt[e.charCodeAt(t)] << 2 | vt[e.charCodeAt(t + 1)] >> 4, r[s++] = 255 & n), o === 1 && (n = vt[e.charCodeAt(t)] << 10 | vt[e.charCodeAt(t + 1)] << 4 | vt[e.charCodeAt(t + 2)] >> 2, r[s++] = n >> 8 & 255, r[s++] = 255 & n), r;
  }, fromByteArray: function(e) {
    for (var n, t = e.length, l = t % 3, h = [], o = 0, r = t - l; o < r; o += 16383)
      h.push(Tl(e, o, o + 16383 > r ? r : o + 16383));
    return l === 1 ? (n = e[t - 1], h.push(Rt[n >> 2] + Rt[n << 4 & 63] + "==")) : l === 2 && (n = (e[t - 2] << 8) + e[t - 1], h.push(Rt[n >> 10] + Rt[n >> 4 & 63] + Rt[n << 2 & 63] + "=")), h.join("");
  } }, Rt = [], vt = [], Po = typeof Uint8Array < "u" ? Uint8Array : Array, $r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", nr = 0, Bo = $r.length; nr < Bo; ++nr)
    Rt[nr] = $r[nr], vt[$r.charCodeAt(nr)] = nr;
  vt[45] = 62, vt[95] = 63, xo = { read: function(e, n, t, l, h) {
    var o, r, s = 8 * h - l - 1, i = (1 << s) - 1, a = i >> 1, c = -7, d = t ? h - 1 : 0, g = t ? -1 : 1, b = e[n + d];
    for (d += g, o = b & (1 << -c) - 1, b >>= -c, c += s; c > 0; o = 256 * o + e[n + d], d += g, c -= 8)
      ;
    for (r = o & (1 << -c) - 1, o >>= -c, c += l; c > 0; r = 256 * r + e[n + d], d += g, c -= 8)
      ;
    if (o === 0)
      o = 1 - a;
    else {
      if (o === i)
        return r ? NaN : 1 / 0 * (b ? -1 : 1);
      r += Math.pow(2, l), o -= a;
    }
    return (b ? -1 : 1) * r * Math.pow(2, o - l);
  }, write: function(e, n, t, l, h, o) {
    var r, s, i, a = 8 * o - h - 1, c = (1 << a) - 1, d = c >> 1, g = h === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, b = l ? 0 : o - 1, m = l ? 1 : -1, y = n < 0 || n === 0 && 1 / n < 0 ? 1 : 0;
    for (n = Math.abs(n), isNaN(n) || n === 1 / 0 ? (s = isNaN(n) ? 1 : 0, r = c) : (r = Math.floor(Math.log(n) / Math.LN2), n * (i = Math.pow(2, -r)) < 1 && (r--, i *= 2), (n += r + d >= 1 ? g / i : g * Math.pow(2, 1 - d)) * i >= 2 && (r++, i /= 2), r + d >= c ? (s = 0, r = c) : r + d >= 1 ? (s = (n * i - 1) * Math.pow(2, h), r += d) : (s = n * Math.pow(2, d - 1) * Math.pow(2, h), r = 0)); h >= 8; e[t + b] = 255 & s, b += m, s /= 256, h -= 8)
      ;
    for (r = r << h | s, a += h; a > 0; e[t + b] = 255 & r, b += m, r /= 256, a -= 8)
      ;
    e[t + b - m] |= 128 * y;
  } }, Ct = {}, ri = Co, lr = xo, wi = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null, Ct.Buffer = ge, Ct.SlowBuffer = function(e) {
    return +e != e && (e = 0), ge.alloc(+e);
  }, Ct.INSPECT_MAX_BYTES = 50, Ct.kMaxLength = 2147483647, ge.TYPED_ARRAY_SUPPORT = function() {
    try {
      var e = new Uint8Array(1), n = { foo: function() {
        return 42;
      } };
      return Object.setPrototypeOf(n, Uint8Array.prototype), Object.setPrototypeOf(e, n), e.foo() === 42;
    } catch {
      return !1;
    }
  }(), ge.TYPED_ARRAY_SUPPORT || typeof console > "u" || typeof console.error != "function" || console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."), Object.defineProperty(ge.prototype, "parent", { enumerable: !0, get: function() {
    if (ge.isBuffer(this))
      return this.buffer;
  } }), Object.defineProperty(ge.prototype, "offset", { enumerable: !0, get: function() {
    if (ge.isBuffer(this))
      return this.byteOffset;
  } }), ge.poolSize = 8192, ge.from = function(e, n, t) {
    return Cs(e, n, t);
  }, Object.setPrototypeOf(ge.prototype, Uint8Array.prototype), Object.setPrototypeOf(ge, Uint8Array), ge.alloc = function(e, n, t) {
    return function(l, h, o) {
      return Ps(l), l <= 0 ? Ft(l) : h !== void 0 ? typeof o == "string" ? Ft(l).fill(h, o) : Ft(l).fill(h) : Ft(l);
    }(e, n, t);
  }, ge.allocUnsafe = function(e) {
    return Nn(e);
  }, ge.allocUnsafeSlow = function(e) {
    return Nn(e);
  }, ge.isBuffer = function(e) {
    return e != null && e._isBuffer === !0 && e !== ge.prototype;
  }, ge.compare = function(e, n) {
    if (Wt(e, Uint8Array) && (e = ge.from(e, e.offset, e.byteLength)), Wt(n, Uint8Array) && (n = ge.from(n, n.offset, n.byteLength)), !ge.isBuffer(e) || !ge.isBuffer(n))
      throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
    if (e === n)
      return 0;
    for (var t = e.length, l = n.length, h = 0, o = Math.min(t, l); h < o; ++h)
      if (e[h] !== n[h]) {
        t = e[h], l = n[h];
        break;
      }
    return t < l ? -1 : l < t ? 1 : 0;
  }, ge.isEncoding = function(e) {
    switch (String(e).toLowerCase()) {
      case "hex":
      case "utf8":
      case "utf-8":
      case "ascii":
      case "latin1":
      case "binary":
      case "base64":
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return !0;
      default:
        return !1;
    }
  }, ge.concat = function(e, n) {
    if (!Array.isArray(e))
      throw new TypeError('"list" argument must be an Array of Buffers');
    if (e.length === 0)
      return ge.alloc(0);
    var t;
    if (n === void 0)
      for (n = 0, t = 0; t < e.length; ++t)
        n += e[t].length;
    var l = ge.allocUnsafe(n), h = 0;
    for (t = 0; t < e.length; ++t) {
      var o = e[t];
      if (Wt(o, Uint8Array) && (o = ge.from(o)), !ge.isBuffer(o))
        throw new TypeError('"list" argument must be an Array of Buffers');
      o.copy(l, h), h += o.length;
    }
    return l;
  }, ge.byteLength = Bs, ge.prototype._isBuffer = !0, ge.prototype.swap16 = function() {
    var e = this.length;
    if (e % 2 != 0)
      throw new RangeError("Buffer size must be a multiple of 16-bits");
    for (var n = 0; n < e; n += 2)
      rr(this, n, n + 1);
    return this;
  }, ge.prototype.swap32 = function() {
    var e = this.length;
    if (e % 4 != 0)
      throw new RangeError("Buffer size must be a multiple of 32-bits");
    for (var n = 0; n < e; n += 4)
      rr(this, n, n + 3), rr(this, n + 1, n + 2);
    return this;
  }, ge.prototype.swap64 = function() {
    var e = this.length;
    if (e % 8 != 0)
      throw new RangeError("Buffer size must be a multiple of 64-bits");
    for (var n = 0; n < e; n += 8)
      rr(this, n, n + 7), rr(this, n + 1, n + 6), rr(this, n + 2, n + 5), rr(this, n + 3, n + 4);
    return this;
  }, ge.prototype.toString = function() {
    var e = this.length;
    return e === 0 ? "" : arguments.length === 0 ? Ms(this, 0, e) : Rl.apply(this, arguments);
  }, ge.prototype.toLocaleString = ge.prototype.toString, ge.prototype.equals = function(e) {
    if (!ge.isBuffer(e))
      throw new TypeError("Argument must be a Buffer");
    return this === e || ge.compare(this, e) === 0;
  }, ge.prototype.inspect = function() {
    var e = "", n = Ct.INSPECT_MAX_BYTES;
    return e = this.toString("hex", 0, n).replace(/(.{2})/g, "$1 ").trim(), this.length > n && (e += " ... "), "<Buffer " + e + ">";
  }, wi && (ge.prototype[wi] = ge.prototype.inspect), ge.prototype.compare = function(e, n, t, l, h) {
    if (Wt(e, Uint8Array) && (e = ge.from(e, e.offset, e.byteLength)), !ge.isBuffer(e))
      throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof e);
    if (n === void 0 && (n = 0), t === void 0 && (t = e ? e.length : 0), l === void 0 && (l = 0), h === void 0 && (h = this.length), n < 0 || t > e.length || l < 0 || h > this.length)
      throw new RangeError("out of range index");
    if (l >= h && n >= t)
      return 0;
    if (l >= h)
      return -1;
    if (n >= t)
      return 1;
    if (this === e)
      return 0;
    for (var o = (h >>>= 0) - (l >>>= 0), r = (t >>>= 0) - (n >>>= 0), s = Math.min(o, r), i = this.slice(l, h), a = e.slice(n, t), c = 0; c < s; ++c)
      if (i[c] !== a[c]) {
        o = i[c], r = a[c];
        break;
      }
    return o < r ? -1 : r < o ? 1 : 0;
  }, ge.prototype.includes = function(e, n, t) {
    return this.indexOf(e, n, t) !== -1;
  }, ge.prototype.indexOf = function(e, n, t) {
    return Io(this, e, n, t, !0);
  }, ge.prototype.lastIndexOf = function(e, n, t) {
    return Io(this, e, n, t, !1);
  }, ge.prototype.write = function(e, n, t, l) {
    if (n === void 0)
      l = "utf8", t = this.length, n = 0;
    else if (t === void 0 && typeof n == "string")
      l = n, t = this.length, n = 0;
    else {
      if (!isFinite(n))
        throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
      n >>>= 0, isFinite(t) ? (t >>>= 0, l === void 0 && (l = "utf8")) : (l = t, t = void 0);
    }
    var h = this.length - n;
    if ((t === void 0 || t > h) && (t = h), e.length > 0 && (t < 0 || n < 0) || n > this.length)
      throw new RangeError("Attempt to write outside buffer bounds");
    l || (l = "utf8");
    for (var o = !1; ; )
      switch (l) {
        case "hex":
          return Ol(this, e, n, t);
        case "utf8":
        case "utf-8":
          return Cl(this, e, n, t);
        case "ascii":
          return xs(this, e, n, t);
        case "latin1":
        case "binary":
          return Pl(this, e, n, t);
        case "base64":
          return Bl(this, e, n, t);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return xl(this, e, n, t);
        default:
          if (o)
            throw new TypeError("Unknown encoding: " + l);
          l = ("" + l).toLowerCase(), o = !0;
      }
  }, ge.prototype.toJSON = function() {
    return { type: "Buffer", data: Array.prototype.slice.call(this._arr || this, 0) };
  }, ge.prototype.slice = function(e, n) {
    var t = this.length;
    (e = ~~e) < 0 ? (e += t) < 0 && (e = 0) : e > t && (e = t), (n = n === void 0 ? t : ~~n) < 0 ? (n += t) < 0 && (n = 0) : n > t && (n = t), n < e && (n = e);
    var l = this.subarray(e, n);
    return Object.setPrototypeOf(l, ge.prototype), l;
  }, ge.prototype.readUIntLE = function(e, n, t) {
    e >>>= 0, n >>>= 0, t || at(e, n, this.length);
    for (var l = this[e], h = 1, o = 0; ++o < n && (h *= 256); )
      l += this[e + o] * h;
    return l;
  }, ge.prototype.readUIntBE = function(e, n, t) {
    e >>>= 0, n >>>= 0, t || at(e, n, this.length);
    for (var l = this[e + --n], h = 1; n > 0 && (h *= 256); )
      l += this[e + --n] * h;
    return l;
  }, ge.prototype.readUInt8 = function(e, n) {
    return e >>>= 0, n || at(e, 1, this.length), this[e];
  }, ge.prototype.readUInt16LE = function(e, n) {
    return e >>>= 0, n || at(e, 2, this.length), this[e] | this[e + 1] << 8;
  }, ge.prototype.readUInt16BE = function(e, n) {
    return e >>>= 0, n || at(e, 2, this.length), this[e] << 8 | this[e + 1];
  }, ge.prototype.readUInt32LE = function(e, n) {
    return e >>>= 0, n || at(e, 4, this.length), (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + 16777216 * this[e + 3];
  }, ge.prototype.readUInt32BE = function(e, n) {
    return e >>>= 0, n || at(e, 4, this.length), 16777216 * this[e] + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]);
  }, ge.prototype.readIntLE = function(e, n, t) {
    e >>>= 0, n >>>= 0, t || at(e, n, this.length);
    for (var l = this[e], h = 1, o = 0; ++o < n && (h *= 256); )
      l += this[e + o] * h;
    return l >= (h *= 128) && (l -= Math.pow(2, 8 * n)), l;
  }, ge.prototype.readIntBE = function(e, n, t) {
    e >>>= 0, n >>>= 0, t || at(e, n, this.length);
    for (var l = n, h = 1, o = this[e + --l]; l > 0 && (h *= 256); )
      o += this[e + --l] * h;
    return o >= (h *= 128) && (o -= Math.pow(2, 8 * n)), o;
  }, ge.prototype.readInt8 = function(e, n) {
    return e >>>= 0, n || at(e, 1, this.length), 128 & this[e] ? -1 * (255 - this[e] + 1) : this[e];
  }, ge.prototype.readInt16LE = function(e, n) {
    e >>>= 0, n || at(e, 2, this.length);
    var t = this[e] | this[e + 1] << 8;
    return 32768 & t ? 4294901760 | t : t;
  }, ge.prototype.readInt16BE = function(e, n) {
    e >>>= 0, n || at(e, 2, this.length);
    var t = this[e + 1] | this[e] << 8;
    return 32768 & t ? 4294901760 | t : t;
  }, ge.prototype.readInt32LE = function(e, n) {
    return e >>>= 0, n || at(e, 4, this.length), this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24;
  }, ge.prototype.readInt32BE = function(e, n) {
    return e >>>= 0, n || at(e, 4, this.length), this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3];
  }, ge.prototype.readFloatLE = function(e, n) {
    return e >>>= 0, n || at(e, 4, this.length), lr.read(this, e, !0, 23, 4);
  }, ge.prototype.readFloatBE = function(e, n) {
    return e >>>= 0, n || at(e, 4, this.length), lr.read(this, e, !1, 23, 4);
  }, ge.prototype.readDoubleLE = function(e, n) {
    return e >>>= 0, n || at(e, 8, this.length), lr.read(this, e, !0, 52, 8);
  }, ge.prototype.readDoubleBE = function(e, n) {
    return e >>>= 0, n || at(e, 8, this.length), lr.read(this, e, !1, 52, 8);
  }, ge.prototype.writeUIntLE = function(e, n, t, l) {
    e = +e, n >>>= 0, t >>>= 0, l || bt(this, e, n, t, Math.pow(2, 8 * t) - 1, 0);
    var h = 1, o = 0;
    for (this[n] = 255 & e; ++o < t && (h *= 256); )
      this[n + o] = e / h & 255;
    return n + t;
  }, ge.prototype.writeUIntBE = function(e, n, t, l) {
    e = +e, n >>>= 0, t >>>= 0, l || bt(this, e, n, t, Math.pow(2, 8 * t) - 1, 0);
    var h = t - 1, o = 1;
    for (this[n + h] = 255 & e; --h >= 0 && (o *= 256); )
      this[n + h] = e / o & 255;
    return n + t;
  }, ge.prototype.writeUInt8 = function(e, n, t) {
    return e = +e, n >>>= 0, t || bt(this, e, n, 1, 255, 0), this[n] = 255 & e, n + 1;
  }, ge.prototype.writeUInt16LE = function(e, n, t) {
    return e = +e, n >>>= 0, t || bt(this, e, n, 2, 65535, 0), this[n] = 255 & e, this[n + 1] = e >>> 8, n + 2;
  }, ge.prototype.writeUInt16BE = function(e, n, t) {
    return e = +e, n >>>= 0, t || bt(this, e, n, 2, 65535, 0), this[n] = e >>> 8, this[n + 1] = 255 & e, n + 2;
  }, ge.prototype.writeUInt32LE = function(e, n, t) {
    return e = +e, n >>>= 0, t || bt(this, e, n, 4, 4294967295, 0), this[n + 3] = e >>> 24, this[n + 2] = e >>> 16, this[n + 1] = e >>> 8, this[n] = 255 & e, n + 4;
  }, ge.prototype.writeUInt32BE = function(e, n, t) {
    return e = +e, n >>>= 0, t || bt(this, e, n, 4, 4294967295, 0), this[n] = e >>> 24, this[n + 1] = e >>> 16, this[n + 2] = e >>> 8, this[n + 3] = 255 & e, n + 4;
  }, ge.prototype.writeIntLE = function(e, n, t, l) {
    if (e = +e, n >>>= 0, !l) {
      var h = Math.pow(2, 8 * t - 1);
      bt(this, e, n, t, h - 1, -h);
    }
    var o = 0, r = 1, s = 0;
    for (this[n] = 255 & e; ++o < t && (r *= 256); )
      e < 0 && s === 0 && this[n + o - 1] !== 0 && (s = 1), this[n + o] = (e / r >> 0) - s & 255;
    return n + t;
  }, ge.prototype.writeIntBE = function(e, n, t, l) {
    if (e = +e, n >>>= 0, !l) {
      var h = Math.pow(2, 8 * t - 1);
      bt(this, e, n, t, h - 1, -h);
    }
    var o = t - 1, r = 1, s = 0;
    for (this[n + o] = 255 & e; --o >= 0 && (r *= 256); )
      e < 0 && s === 0 && this[n + o + 1] !== 0 && (s = 1), this[n + o] = (e / r >> 0) - s & 255;
    return n + t;
  }, ge.prototype.writeInt8 = function(e, n, t) {
    return e = +e, n >>>= 0, t || bt(this, e, n, 1, 127, -128), e < 0 && (e = 255 + e + 1), this[n] = 255 & e, n + 1;
  }, ge.prototype.writeInt16LE = function(e, n, t) {
    return e = +e, n >>>= 0, t || bt(this, e, n, 2, 32767, -32768), this[n] = 255 & e, this[n + 1] = e >>> 8, n + 2;
  }, ge.prototype.writeInt16BE = function(e, n, t) {
    return e = +e, n >>>= 0, t || bt(this, e, n, 2, 32767, -32768), this[n] = e >>> 8, this[n + 1] = 255 & e, n + 2;
  }, ge.prototype.writeInt32LE = function(e, n, t) {
    return e = +e, n >>>= 0, t || bt(this, e, n, 4, 2147483647, -2147483648), this[n] = 255 & e, this[n + 1] = e >>> 8, this[n + 2] = e >>> 16, this[n + 3] = e >>> 24, n + 4;
  }, ge.prototype.writeInt32BE = function(e, n, t) {
    return e = +e, n >>>= 0, t || bt(this, e, n, 4, 2147483647, -2147483648), e < 0 && (e = 4294967295 + e + 1), this[n] = e >>> 24, this[n + 1] = e >>> 16, this[n + 2] = e >>> 8, this[n + 3] = 255 & e, n + 4;
  }, ge.prototype.writeFloatLE = function(e, n, t) {
    return ko(this, e, n, !0, t);
  }, ge.prototype.writeFloatBE = function(e, n, t) {
    return ko(this, e, n, !1, t);
  }, ge.prototype.writeDoubleLE = function(e, n, t) {
    return Ro(this, e, n, !0, t);
  }, ge.prototype.writeDoubleBE = function(e, n, t) {
    return Ro(this, e, n, !1, t);
  }, ge.prototype.copy = function(e, n, t, l) {
    if (!ge.isBuffer(e))
      throw new TypeError("argument should be a Buffer");
    if (t || (t = 0), l || l === 0 || (l = this.length), n >= e.length && (n = e.length), n || (n = 0), l > 0 && l < t && (l = t), l === t || e.length === 0 || this.length === 0)
      return 0;
    if (n < 0)
      throw new RangeError("targetStart out of bounds");
    if (t < 0 || t >= this.length)
      throw new RangeError("Index out of range");
    if (l < 0)
      throw new RangeError("sourceEnd out of bounds");
    l > this.length && (l = this.length), e.length - n < l - t && (l = e.length - n + t);
    var h = l - t;
    if (this === e && typeof Uint8Array.prototype.copyWithin == "function")
      this.copyWithin(n, t, l);
    else if (this === e && t < n && n < l)
      for (var o = h - 1; o >= 0; --o)
        e[o + n] = this[o + t];
    else
      Uint8Array.prototype.set.call(e, this.subarray(t, l), n);
    return h;
  }, ge.prototype.fill = function(e, n, t, l) {
    if (typeof e == "string") {
      if (typeof n == "string" ? (l = n, n = 0, t = this.length) : typeof t == "string" && (l = t, t = this.length), l !== void 0 && typeof l != "string")
        throw new TypeError("encoding must be a string");
      if (typeof l == "string" && !ge.isEncoding(l))
        throw new TypeError("Unknown encoding: " + l);
      if (e.length === 1) {
        var h = e.charCodeAt(0);
        (l === "utf8" && h < 128 || l === "latin1") && (e = h);
      }
    } else
      typeof e == "number" ? e &= 255 : typeof e == "boolean" && (e = Number(e));
    if (n < 0 || this.length < n || this.length < t)
      throw new RangeError("Out of range index");
    if (t <= n)
      return this;
    var o;
    if (n >>>= 0, t = t === void 0 ? this.length : t >>> 0, e || (e = 0), typeof e == "number")
      for (o = n; o < t; ++o)
        this[o] = e;
    else {
      var r = ge.isBuffer(e) ? e : ge.from(e, l), s = r.length;
      if (s === 0)
        throw new TypeError('The value "' + e + '" is invalid for argument "value"');
      for (o = 0; o < t - n; ++o)
        this[o + n] = r[o % s];
    }
    return this;
  }, js = /[^+/0-9A-Za-z-_]/g, Ns = function() {
    for (var e = new Array(256), n = 0; n < 16; ++n)
      for (var t = 16 * n, l = 0; l < 16; ++l)
        e[t + l] = "0123456789abcdef"[n] + "0123456789abcdef"[l];
    return e;
  }(), Ct.Buffer, Ct.INSPECT_MAX_BYTES, Ct.kMaxLength, Rr = {}, Or = Ct, Tt = Or.Buffer, Tt.from && Tt.alloc && Tt.allocUnsafe && Tt.allocUnsafeSlow ? Rr = Or : (Oo(Or, Rr), Rr.Buffer = ir), ir.prototype = Object.create(Tt.prototype), Oo(Tt, ir), ir.from = function(e, n, t) {
    if (typeof e == "number")
      throw new TypeError("Argument must not be a number");
    return Tt(e, n, t);
  }, ir.alloc = function(e, n, t) {
    if (typeof e != "number")
      throw new TypeError("Argument must be a number");
    var l = Tt(e);
    return n !== void 0 ? typeof t == "string" ? l.fill(n, t) : l.fill(n) : l.fill(0), l;
  }, ir.allocUnsafe = function(e) {
    if (typeof e != "number")
      throw new TypeError("Argument must be a number");
    return Tt(e);
  }, ir.allocUnsafeSlow = function(e) {
    if (typeof e != "number")
      throw new TypeError("Argument must be a number");
    return Or.SlowBuffer(e);
  }, Mo = Rr, _r = {}, ii = Mo.Buffer, Fn = ii.isEncoding || function(e) {
    switch ((e = "" + e) && e.toLowerCase()) {
      case "hex":
      case "utf8":
      case "utf-8":
      case "ascii":
      case "binary":
      case "base64":
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
      case "raw":
        return !0;
      default:
        return !1;
    }
  }, _r.StringDecoder = kr, kr.prototype.write = function(e) {
    if (e.length === 0)
      return "";
    var n, t;
    if (this.lastNeed) {
      if ((n = this.fillLast(e)) === void 0)
        return "";
      t = this.lastNeed, this.lastNeed = 0;
    } else
      t = 0;
    return t < e.length ? n ? n + this.text(e, t) : this.text(e, t) : n || "";
  }, kr.prototype.end = function(e) {
    var n = e && e.length ? this.write(e) : "";
    return this.lastNeed ? n + "�" : n;
  }, kr.prototype.text = function(e, n) {
    var t = function(h, o, r) {
      var s = o.length - 1;
      if (s < r)
        return 0;
      var i = vi(o[s]);
      return i >= 0 ? (i > 0 && (h.lastNeed = i - 1), i) : --s < r || i === -2 ? 0 : (i = vi(o[s])) >= 0 ? (i > 0 && (h.lastNeed = i - 2), i) : --s < r || i === -2 ? 0 : (i = vi(o[s])) >= 0 ? (i > 0 && (i === 2 ? i = 0 : h.lastNeed = i - 3), i) : 0;
    }(this, e, n);
    if (!this.lastNeed)
      return e.toString("utf8", n);
    this.lastTotal = t;
    var l = e.length - (t - this.lastNeed);
    return e.copy(this.lastChar, 0, l), e.toString("utf8", n, l);
  }, kr.prototype.fillLast = function(e) {
    if (this.lastNeed <= e.length)
      return e.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal);
    e.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, e.length), this.lastNeed -= e.length;
  }, _r.StringDecoder, _r.StringDecoder;
}), Ds = {};
pr(Ds, { StringDecoder: () => Fs, default: () => _r });
var Fs, zl = ht(() => {
  he(), ue(), le(), Uo(), Uo(), Fs = _r.StringDecoder;
}), Ws = we((e, n) => {
  he(), ue(), le();
  var t = gr(), { PromisePrototypeThen: l, SymbolAsyncIterator: h, SymbolIterator: o } = ot(), { Buffer: r } = (ft(), $e(ct)), { ERR_INVALID_ARG_TYPE: s, ERR_STREAM_NULL_VALUES: i } = mt().codes;
  function a(c, d, g) {
    let b;
    if (typeof d == "string" || d instanceof r)
      return new c({ objectMode: !0, ...g, read() {
        this.push(d), this.push(null);
      } });
    let m;
    if (d && d[h])
      m = !0, b = d[h]();
    else if (d && d[o])
      m = !1, b = d[o]();
    else
      throw new s("iterable", ["Iterable"], d);
    let y = new c({ objectMode: !0, highWaterMark: 1, ...g }), T = !1;
    y._read = function() {
      T || (T = !0, S());
    }, y._destroy = function(R, F) {
      l(U(R), () => t.nextTick(F, R), (W) => t.nextTick(F, W || R));
    };
    async function U(R) {
      let F = R != null, W = typeof b.throw == "function";
      if (F && W) {
        let { value: C, done: O } = await b.throw(R);
        if (await C, O)
          return;
      }
      if (typeof b.return == "function") {
        let { value: C } = await b.return();
        await C;
      }
    }
    async function S() {
      for (; ; ) {
        try {
          let { value: R, done: F } = m ? await b.next() : b.next();
          if (F)
            y.push(null);
          else {
            let W = R && typeof R.then == "function" ? await R : R;
            if (W === null)
              throw T = !1, new i();
            if (y.push(W))
              continue;
            T = !1;
          }
        } catch (R) {
          y.destroy(R);
        }
        break;
      }
    }
    return y;
  }
  n.exports = a;
}), ui = we((e, n) => {
  he(), ue(), le();
  var t = gr(), { ArrayPrototypeIndexOf: l, NumberIsInteger: h, NumberIsNaN: o, NumberParseInt: r, ObjectDefineProperties: s, ObjectKeys: i, ObjectSetPrototypeOf: a, Promise: c, SafeSet: d, SymbolAsyncIterator: g, Symbol: b } = ot();
  n.exports = A, A.ReadableState = Ee;
  var { EventEmitter: m } = (Ar(), $e(br)), { Stream: y, prependListener: T } = oo(), { Buffer: U } = (ft(), $e(ct)), { addAbortSignal: S } = ai(), R = Zt(), F = $t().debuglog("stream", (u) => {
    F = u;
  }), W = Il(), C = Sr(), { getHighWaterMark: O, getDefaultHighWaterMark: M } = so(), { aggregateTwoErrors: $, codes: { ERR_INVALID_ARG_TYPE: X, ERR_METHOD_NOT_IMPLEMENTED: te, ERR_OUT_OF_RANGE: E, ERR_STREAM_PUSH_AFTER_EOF: q, ERR_STREAM_UNSHIFT_AFTER_END_EVENT: Z } } = mt(), { validateObject: z } = si(), be = b("kPaused"), { StringDecoder: ne } = (zl(), $e(Ds)), V = Ws();
  a(A.prototype, y.prototype), a(A, y);
  var me = () => {
  }, { errorOrDestroy: ie } = C;
  function Ee(u, p, w) {
    typeof w != "boolean" && (w = p instanceof qt()), this.objectMode = !!(u && u.objectMode), w && (this.objectMode = this.objectMode || !!(u && u.readableObjectMode)), this.highWaterMark = u ? O(this, u, "readableHighWaterMark", w) : M(!1), this.buffer = new W(), this.length = 0, this.pipes = [], this.flowing = null, this.ended = !1, this.endEmitted = !1, this.reading = !1, this.constructed = !0, this.sync = !0, this.needReadable = !1, this.emittedReadable = !1, this.readableListening = !1, this.resumeScheduled = !1, this[be] = null, this.errorEmitted = !1, this.emitClose = !u || u.emitClose !== !1, this.autoDestroy = !u || u.autoDestroy !== !1, this.destroyed = !1, this.errored = null, this.closed = !1, this.closeEmitted = !1, this.defaultEncoding = u && u.defaultEncoding || "utf8", this.awaitDrainWriters = null, this.multiAwaitDrain = !1, this.readingMore = !1, this.dataEmitted = !1, this.decoder = null, this.encoding = null, u && u.encoding && (this.decoder = new ne(u.encoding), this.encoding = u.encoding);
  }
  function A(u) {
    if (!(this instanceof A))
      return new A(u);
    let p = this instanceof qt();
    this._readableState = new Ee(u, this, p), u && (typeof u.read == "function" && (this._read = u.read), typeof u.destroy == "function" && (this._destroy = u.destroy), typeof u.construct == "function" && (this._construct = u.construct), u.signal && !p && S(u.signal, this)), y.call(this, u), C.construct(this, () => {
      this._readableState.needReadable && ee(this, this._readableState);
    });
  }
  A.prototype.destroy = C.destroy, A.prototype._undestroy = C.undestroy, A.prototype._destroy = function(u, p) {
    p(u);
  }, A.prototype[m.captureRejectionSymbol] = function(u) {
    this.destroy(u);
  }, A.prototype.push = function(u, p) {
    return Q(this, u, p, !1);
  }, A.prototype.unshift = function(u, p) {
    return Q(this, u, p, !0);
  };
  function Q(u, p, w, I) {
    F("readableAddChunk", p);
    let v = u._readableState, P;
    if (v.objectMode || (typeof p == "string" ? (w = w || v.defaultEncoding, v.encoding !== w && (I && v.encoding ? p = U.from(p, w).toString(v.encoding) : (p = U.from(p, w), w = ""))) : p instanceof U ? w = "" : y._isUint8Array(p) ? (p = y._uint8ArrayToBuffer(p), w = "") : p != null && (P = new X("chunk", ["string", "Buffer", "Uint8Array"], p))), P)
      ie(u, P);
    else if (p === null)
      v.reading = !1, _(u, v);
    else if (v.objectMode || p && p.length > 0)
      if (I)
        if (v.endEmitted)
          ie(u, new Z());
        else {
          if (v.destroyed || v.errored)
            return !1;
          fe(u, v, p, !0);
        }
      else if (v.ended)
        ie(u, new q());
      else {
        if (v.destroyed || v.errored)
          return !1;
        v.reading = !1, v.decoder && !w ? (p = v.decoder.write(p), v.objectMode || p.length !== 0 ? fe(u, v, p, !1) : ee(u, v)) : fe(u, v, p, !1);
      }
    else
      I || (v.reading = !1, ee(u, v));
    return !v.ended && (v.length < v.highWaterMark || v.length === 0);
  }
  function fe(u, p, w, I) {
    p.flowing && p.length === 0 && !p.sync && u.listenerCount("data") > 0 ? (p.multiAwaitDrain ? p.awaitDrainWriters.clear() : p.awaitDrainWriters = null, p.dataEmitted = !0, u.emit("data", w)) : (p.length += p.objectMode ? 1 : w.length, I ? p.buffer.unshift(w) : p.buffer.push(w), p.needReadable && Y(u)), ee(u, p);
  }
  A.prototype.isPaused = function() {
    let u = this._readableState;
    return u[be] === !0 || u.flowing === !1;
  }, A.prototype.setEncoding = function(u) {
    let p = new ne(u);
    this._readableState.decoder = p, this._readableState.encoding = this._readableState.decoder.encoding;
    let w = this._readableState.buffer, I = "";
    for (let v of w)
      I += p.write(v);
    return w.clear(), I !== "" && w.push(I), this._readableState.length = I.length, this;
  };
  var Ae = 1073741824;
  function ae(u) {
    if (u > Ae)
      throw new E("size", "<= 1GiB", u);
    return u--, u |= u >>> 1, u |= u >>> 2, u |= u >>> 4, u |= u >>> 8, u |= u >>> 16, u++, u;
  }
  function B(u, p) {
    return u <= 0 || p.length === 0 && p.ended ? 0 : p.objectMode ? 1 : o(u) ? p.flowing && p.length ? p.buffer.first().length : p.length : u <= p.length ? u : p.ended ? p.length : 0;
  }
  A.prototype.read = function(u) {
    F("read", u), u === void 0 ? u = NaN : h(u) || (u = r(u, 10));
    let p = this._readableState, w = u;
    if (u > p.highWaterMark && (p.highWaterMark = ae(u)), u !== 0 && (p.emittedReadable = !1), u === 0 && p.needReadable && ((p.highWaterMark !== 0 ? p.length >= p.highWaterMark : p.length > 0) || p.ended))
      return F("read: emitReadable", p.length, p.ended), p.length === 0 && p.ended ? ye(this) : Y(this), null;
    if (u = B(u, p), u === 0 && p.ended)
      return p.length === 0 && ye(this), null;
    let I = p.needReadable;
    if (F("need readable", I), (p.length === 0 || p.length - u < p.highWaterMark) && (I = !0, F("length less than watermark", I)), p.ended || p.reading || p.destroyed || p.errored || !p.constructed)
      I = !1, F("reading, ended or constructing", I);
    else if (I) {
      F("do read"), p.reading = !0, p.sync = !0, p.length === 0 && (p.needReadable = !0);
      try {
        this._read(p.highWaterMark);
      } catch (P) {
        ie(this, P);
      }
      p.sync = !1, p.reading || (u = B(w, p));
    }
    let v;
    return u > 0 ? v = K(u, p) : v = null, v === null ? (p.needReadable = p.length <= p.highWaterMark, u = 0) : (p.length -= u, p.multiAwaitDrain ? p.awaitDrainWriters.clear() : p.awaitDrainWriters = null), p.length === 0 && (p.ended || (p.needReadable = !0), w !== u && p.ended && ye(this)), v !== null && !p.errorEmitted && !p.closeEmitted && (p.dataEmitted = !0, this.emit("data", v)), v;
  };
  function _(u, p) {
    if (F("onEofChunk"), !p.ended) {
      if (p.decoder) {
        let w = p.decoder.end();
        w && w.length && (p.buffer.push(w), p.length += p.objectMode ? 1 : w.length);
      }
      p.ended = !0, p.sync ? Y(u) : (p.needReadable = !1, p.emittedReadable = !0, se(u));
    }
  }
  function Y(u) {
    let p = u._readableState;
    F("emitReadable", p.needReadable, p.emittedReadable), p.needReadable = !1, p.emittedReadable || (F("emitReadable", p.flowing), p.emittedReadable = !0, t.nextTick(se, u));
  }
  function se(u) {
    let p = u._readableState;
    F("emitReadable_", p.destroyed, p.length, p.ended), !p.destroyed && !p.errored && (p.length || p.ended) && (u.emit("readable"), p.emittedReadable = !1), p.needReadable = !p.flowing && !p.ended && p.length <= p.highWaterMark, re(u);
  }
  function ee(u, p) {
    !p.readingMore && p.constructed && (p.readingMore = !0, t.nextTick(J, u, p));
  }
  function J(u, p) {
    for (; !p.reading && !p.ended && (p.length < p.highWaterMark || p.flowing && p.length === 0); ) {
      let w = p.length;
      if (F("maybeReadMore read 0"), u.read(0), w === p.length)
        break;
    }
    p.readingMore = !1;
  }
  A.prototype._read = function(u) {
    throw new te("_read()");
  }, A.prototype.pipe = function(u, p) {
    let w = this, I = this._readableState;
    I.pipes.length === 1 && (I.multiAwaitDrain || (I.multiAwaitDrain = !0, I.awaitDrainWriters = new d(I.awaitDrainWriters ? [I.awaitDrainWriters] : []))), I.pipes.push(u), F("pipe count=%d opts=%j", I.pipes.length, p);
    let v = (!p || p.end !== !1) && u !== t.stdout && u !== t.stderr ? H : st;
    I.endEmitted ? t.nextTick(v) : w.once("end", v), u.on("unpipe", P);
    function P(ze, Ge) {
      F("onunpipe"), ze === w && Ge && Ge.hasUnpiped === !1 && (Ge.hasUnpiped = !0, ve());
    }
    function H() {
      F("onend"), u.end();
    }
    let de, oe = !1;
    function ve() {
      F("cleanup"), u.removeListener("close", lt), u.removeListener("finish", Le), de && u.removeListener("drain", de), u.removeListener("error", Ve), u.removeListener("unpipe", P), w.removeListener("end", H), w.removeListener("end", st), w.removeListener("data", Oe), oe = !0, de && I.awaitDrainWriters && (!u._writableState || u._writableState.needDrain) && de();
    }
    function Ie() {
      oe || (I.pipes.length === 1 && I.pipes[0] === u ? (F("false write response, pause", 0), I.awaitDrainWriters = u, I.multiAwaitDrain = !1) : I.pipes.length > 1 && I.pipes.includes(u) && (F("false write response, pause", I.awaitDrainWriters.size), I.awaitDrainWriters.add(u)), w.pause()), de || (de = ce(w, u), u.on("drain", de));
    }
    w.on("data", Oe);
    function Oe(ze) {
      F("ondata");
      let Ge = u.write(ze);
      F("dest.write", Ge), Ge === !1 && Ie();
    }
    function Ve(ze) {
      if (F("onerror", ze), st(), u.removeListener("error", Ve), u.listenerCount("error") === 0) {
        let Ge = u._writableState || u._readableState;
        Ge && !Ge.errorEmitted ? ie(u, ze) : u.emit("error", ze);
      }
    }
    T(u, "error", Ve);
    function lt() {
      u.removeListener("finish", Le), st();
    }
    u.once("close", lt);
    function Le() {
      F("onfinish"), u.removeListener("close", lt), st();
    }
    u.once("finish", Le);
    function st() {
      F("unpipe"), w.unpipe(u);
    }
    return u.emit("pipe", w), u.writableNeedDrain === !0 ? I.flowing && Ie() : I.flowing || (F("pipe resume"), w.resume()), u;
  };
  function ce(u, p) {
    return function() {
      let w = u._readableState;
      w.awaitDrainWriters === p ? (F("pipeOnDrain", 1), w.awaitDrainWriters = null) : w.multiAwaitDrain && (F("pipeOnDrain", w.awaitDrainWriters.size), w.awaitDrainWriters.delete(p)), (!w.awaitDrainWriters || w.awaitDrainWriters.size === 0) && u.listenerCount("data") && u.resume();
    };
  }
  A.prototype.unpipe = function(u) {
    let p = this._readableState, w = { hasUnpiped: !1 };
    if (p.pipes.length === 0)
      return this;
    if (!u) {
      let v = p.pipes;
      p.pipes = [], this.pause();
      for (let P = 0; P < v.length; P++)
        v[P].emit("unpipe", this, { hasUnpiped: !1 });
      return this;
    }
    let I = l(p.pipes, u);
    return I === -1 ? this : (p.pipes.splice(I, 1), p.pipes.length === 0 && this.pause(), u.emit("unpipe", this, w), this);
  }, A.prototype.on = function(u, p) {
    let w = y.prototype.on.call(this, u, p), I = this._readableState;
    return u === "data" ? (I.readableListening = this.listenerCount("readable") > 0, I.flowing !== !1 && this.resume()) : u === "readable" && !I.endEmitted && !I.readableListening && (I.readableListening = I.needReadable = !0, I.flowing = !1, I.emittedReadable = !1, F("on readable", I.length, I.reading), I.length ? Y(this) : I.reading || t.nextTick(k, this)), w;
  }, A.prototype.addListener = A.prototype.on, A.prototype.removeListener = function(u, p) {
    let w = y.prototype.removeListener.call(this, u, p);
    return u === "readable" && t.nextTick(pe, this), w;
  }, A.prototype.off = A.prototype.removeListener, A.prototype.removeAllListeners = function(u) {
    let p = y.prototype.removeAllListeners.apply(this, arguments);
    return (u === "readable" || u === void 0) && t.nextTick(pe, this), p;
  };
  function pe(u) {
    let p = u._readableState;
    p.readableListening = u.listenerCount("readable") > 0, p.resumeScheduled && p[be] === !1 ? p.flowing = !0 : u.listenerCount("data") > 0 ? u.resume() : p.readableListening || (p.flowing = null);
  }
  function k(u) {
    F("readable nexttick read 0"), u.read(0);
  }
  A.prototype.resume = function() {
    let u = this._readableState;
    return u.flowing || (F("resume"), u.flowing = !u.readableListening, N(this, u)), u[be] = !1, this;
  };
  function N(u, p) {
    p.resumeScheduled || (p.resumeScheduled = !0, t.nextTick(D, u, p));
  }
  function D(u, p) {
    F("resume", p.reading), p.reading || u.read(0), p.resumeScheduled = !1, u.emit("resume"), re(u), p.flowing && !p.reading && u.read(0);
  }
  A.prototype.pause = function() {
    return F("call pause flowing=%j", this._readableState.flowing), this._readableState.flowing !== !1 && (F("pause"), this._readableState.flowing = !1, this.emit("pause")), this._readableState[be] = !0, this;
  };
  function re(u) {
    let p = u._readableState;
    for (F("flow", p.flowing); p.flowing && u.read() !== null; )
      ;
  }
  A.prototype.wrap = function(u) {
    let p = !1;
    u.on("data", (I) => {
      !this.push(I) && u.pause && (p = !0, u.pause());
    }), u.on("end", () => {
      this.push(null);
    }), u.on("error", (I) => {
      ie(this, I);
    }), u.on("close", () => {
      this.destroy();
    }), u.on("destroy", () => {
      this.destroy();
    }), this._read = () => {
      p && u.resume && (p = !1, u.resume());
    };
    let w = i(u);
    for (let I = 1; I < w.length; I++) {
      let v = w[I];
      this[v] === void 0 && typeof u[v] == "function" && (this[v] = u[v].bind(u));
    }
    return this;
  }, A.prototype[g] = function() {
    return G(this);
  }, A.prototype.iterator = function(u) {
    return u !== void 0 && z(u, "options"), G(this, u);
  };
  function G(u, p) {
    typeof u.read != "function" && (u = A.wrap(u, { objectMode: !0 }));
    let w = j(u, p);
    return w.stream = u, w;
  }
  async function* j(u, p) {
    let w = me;
    function I(H) {
      this === u ? (w(), w = me) : w = H;
    }
    u.on("readable", I);
    let v, P = R(u, { writable: !1 }, (H) => {
      v = H ? $(v, H) : null, w(), w = me;
    });
    try {
      for (; ; ) {
        let H = u.destroyed ? null : u.read();
        if (H !== null)
          yield H;
        else {
          if (v)
            throw v;
          if (v === null)
            return;
          await new c(I);
        }
      }
    } catch (H) {
      throw v = $(v, H), v;
    } finally {
      (v || (p == null ? void 0 : p.destroyOnReturn) !== !1) && (v === void 0 || u._readableState.autoDestroy) ? C.destroyer(u, null) : (u.off("readable", I), P());
    }
  }
  s(A.prototype, { readable: { __proto__: null, get() {
    let u = this._readableState;
    return !!u && u.readable !== !1 && !u.destroyed && !u.errorEmitted && !u.endEmitted;
  }, set(u) {
    this._readableState && (this._readableState.readable = !!u);
  } }, readableDidRead: { __proto__: null, enumerable: !1, get: function() {
    return this._readableState.dataEmitted;
  } }, readableAborted: { __proto__: null, enumerable: !1, get: function() {
    return !!(this._readableState.readable !== !1 && (this._readableState.destroyed || this._readableState.errored) && !this._readableState.endEmitted);
  } }, readableHighWaterMark: { __proto__: null, enumerable: !1, get: function() {
    return this._readableState.highWaterMark;
  } }, readableBuffer: { __proto__: null, enumerable: !1, get: function() {
    return this._readableState && this._readableState.buffer;
  } }, readableFlowing: { __proto__: null, enumerable: !1, get: function() {
    return this._readableState.flowing;
  }, set: function(u) {
    this._readableState && (this._readableState.flowing = u);
  } }, readableLength: { __proto__: null, enumerable: !1, get() {
    return this._readableState.length;
  } }, readableObjectMode: { __proto__: null, enumerable: !1, get() {
    return this._readableState ? this._readableState.objectMode : !1;
  } }, readableEncoding: { __proto__: null, enumerable: !1, get() {
    return this._readableState ? this._readableState.encoding : null;
  } }, errored: { __proto__: null, enumerable: !1, get() {
    return this._readableState ? this._readableState.errored : null;
  } }, closed: { __proto__: null, get() {
    return this._readableState ? this._readableState.closed : !1;
  } }, destroyed: { __proto__: null, enumerable: !1, get() {
    return this._readableState ? this._readableState.destroyed : !1;
  }, set(u) {
    this._readableState && (this._readableState.destroyed = u);
  } }, readableEnded: { __proto__: null, enumerable: !1, get() {
    return this._readableState ? this._readableState.endEmitted : !1;
  } } }), s(Ee.prototype, { pipesCount: { __proto__: null, get() {
    return this.pipes.length;
  } }, paused: { __proto__: null, get() {
    return this[be] !== !1;
  }, set(u) {
    this[be] = !!u;
  } } }), A._fromList = K;
  function K(u, p) {
    if (p.length === 0)
      return null;
    let w;
    return p.objectMode ? w = p.buffer.shift() : !u || u >= p.length ? (p.decoder ? w = p.buffer.join("") : p.buffer.length === 1 ? w = p.buffer.first() : w = p.buffer.concat(p.length), p.buffer.clear()) : w = p.buffer.consume(u, p.decoder), w;
  }
  function ye(u) {
    let p = u._readableState;
    F("endReadable", p.endEmitted), p.endEmitted || (p.ended = !0, t.nextTick(Se, p, u));
  }
  function Se(u, p) {
    if (F("endReadableNT", u.endEmitted, u.length), !u.errored && !u.closeEmitted && !u.endEmitted && u.length === 0) {
      if (u.endEmitted = !0, p.emit("end"), p.writable && p.allowHalfOpen === !1)
        t.nextTick(ke, p);
      else if (u.autoDestroy) {
        let w = p._writableState;
        (!w || w.autoDestroy && (w.finished || w.writable === !1)) && p.destroy();
      }
    }
  }
  function ke(u) {
    u.writable && !u.writableEnded && !u.destroyed && u.end();
  }
  A.from = function(u, p) {
    return V(A, u, p);
  };
  var Me;
  function f() {
    return Me === void 0 && (Me = {}), Me;
  }
  A.fromWeb = function(u, p) {
    return f().newStreamReadableFromReadableStream(u, p);
  }, A.toWeb = function(u, p) {
    return f().newReadableStreamFromStreamReadable(u, p);
  }, A.wrap = function(u, p) {
    var w, I;
    return new A({ objectMode: (w = (I = u.readableObjectMode) !== null && I !== void 0 ? I : u.objectMode) !== null && w !== void 0 ? w : !0, ...p, destroy(v, P) {
      C.destroyer(u, v), P(v);
    } }).wrap(u);
  };
}), $s = we((e, n) => {
  he(), ue(), le();
  var t = gr(), { ArrayPrototypeSlice: l, Error: h, FunctionPrototypeSymbolHasInstance: o, ObjectDefineProperty: r, ObjectDefineProperties: s, ObjectSetPrototypeOf: i, StringPrototypeToLowerCase: a, Symbol: c, SymbolHasInstance: d } = ot();
  n.exports = ne, ne.WritableState = z;
  var { EventEmitter: g } = (Ar(), $e(br)), b = oo().Stream, { Buffer: m } = (ft(), $e(ct)), y = Sr(), { addAbortSignal: T } = ai(), { getHighWaterMark: U, getDefaultHighWaterMark: S } = so(), { ERR_INVALID_ARG_TYPE: R, ERR_METHOD_NOT_IMPLEMENTED: F, ERR_MULTIPLE_CALLBACK: W, ERR_STREAM_CANNOT_PIPE: C, ERR_STREAM_DESTROYED: O, ERR_STREAM_ALREADY_FINISHED: M, ERR_STREAM_NULL_VALUES: $, ERR_STREAM_WRITE_AFTER_END: X, ERR_UNKNOWN_ENCODING: te } = mt().codes, { errorOrDestroy: E } = y;
  i(ne.prototype, b.prototype), i(ne, b);
  function q() {
  }
  var Z = c("kOnFinished");
  function z(k, N, D) {
    typeof D != "boolean" && (D = N instanceof qt()), this.objectMode = !!(k && k.objectMode), D && (this.objectMode = this.objectMode || !!(k && k.writableObjectMode)), this.highWaterMark = k ? U(this, k, "writableHighWaterMark", D) : S(!1), this.finalCalled = !1, this.needDrain = !1, this.ending = !1, this.ended = !1, this.finished = !1, this.destroyed = !1;
    let re = !!(k && k.decodeStrings === !1);
    this.decodeStrings = !re, this.defaultEncoding = k && k.defaultEncoding || "utf8", this.length = 0, this.writing = !1, this.corked = 0, this.sync = !0, this.bufferProcessing = !1, this.onwrite = A.bind(void 0, N), this.writecb = null, this.writelen = 0, this.afterWriteTickInfo = null, be(this), this.pendingcb = 0, this.constructed = !0, this.prefinished = !1, this.errorEmitted = !1, this.emitClose = !k || k.emitClose !== !1, this.autoDestroy = !k || k.autoDestroy !== !1, this.errored = null, this.closed = !1, this.closeEmitted = !1, this[Z] = [];
  }
  function be(k) {
    k.buffered = [], k.bufferedIndex = 0, k.allBuffers = !0, k.allNoop = !0;
  }
  z.prototype.getBuffer = function() {
    return l(this.buffered, this.bufferedIndex);
  }, r(z.prototype, "bufferedRequestCount", { __proto__: null, get() {
    return this.buffered.length - this.bufferedIndex;
  } });
  function ne(k) {
    let N = this instanceof qt();
    if (!N && !o(ne, this))
      return new ne(k);
    this._writableState = new z(k, this, N), k && (typeof k.write == "function" && (this._write = k.write), typeof k.writev == "function" && (this._writev = k.writev), typeof k.destroy == "function" && (this._destroy = k.destroy), typeof k.final == "function" && (this._final = k.final), typeof k.construct == "function" && (this._construct = k.construct), k.signal && T(k.signal, this)), b.call(this, k), y.construct(this, () => {
      let D = this._writableState;
      D.writing || ae(this, D), se(this, D);
    });
  }
  r(ne, d, { __proto__: null, value: function(k) {
    return o(this, k) ? !0 : this !== ne ? !1 : k && k._writableState instanceof z;
  } }), ne.prototype.pipe = function() {
    E(this, new C());
  };
  function V(k, N, D, re) {
    let G = k._writableState;
    if (typeof D == "function")
      re = D, D = G.defaultEncoding;
    else {
      if (!D)
        D = G.defaultEncoding;
      else if (D !== "buffer" && !m.isEncoding(D))
        throw new te(D);
      typeof re != "function" && (re = q);
    }
    if (N === null)
      throw new $();
    if (!G.objectMode)
      if (typeof N == "string")
        G.decodeStrings !== !1 && (N = m.from(N, D), D = "buffer");
      else if (N instanceof m)
        D = "buffer";
      else if (b._isUint8Array(N))
        N = b._uint8ArrayToBuffer(N), D = "buffer";
      else
        throw new R("chunk", ["string", "Buffer", "Uint8Array"], N);
    let j;
    return G.ending ? j = new X() : G.destroyed && (j = new O("write")), j ? (t.nextTick(re, j), E(k, j, !0), j) : (G.pendingcb++, me(k, G, N, D, re));
  }
  ne.prototype.write = function(k, N, D) {
    return V(this, k, N, D) === !0;
  }, ne.prototype.cork = function() {
    this._writableState.corked++;
  }, ne.prototype.uncork = function() {
    let k = this._writableState;
    k.corked && (k.corked--, k.writing || ae(this, k));
  }, ne.prototype.setDefaultEncoding = function(k) {
    if (typeof k == "string" && (k = a(k)), !m.isEncoding(k))
      throw new te(k);
    return this._writableState.defaultEncoding = k, this;
  };
  function me(k, N, D, re, G) {
    let j = N.objectMode ? 1 : D.length;
    N.length += j;
    let K = N.length < N.highWaterMark;
    return K || (N.needDrain = !0), N.writing || N.corked || N.errored || !N.constructed ? (N.buffered.push({ chunk: D, encoding: re, callback: G }), N.allBuffers && re !== "buffer" && (N.allBuffers = !1), N.allNoop && G !== q && (N.allNoop = !1)) : (N.writelen = j, N.writecb = G, N.writing = !0, N.sync = !0, k._write(D, re, N.onwrite), N.sync = !1), K && !N.errored && !N.destroyed;
  }
  function ie(k, N, D, re, G, j, K) {
    N.writelen = re, N.writecb = K, N.writing = !0, N.sync = !0, N.destroyed ? N.onwrite(new O("write")) : D ? k._writev(G, N.onwrite) : k._write(G, j, N.onwrite), N.sync = !1;
  }
  function Ee(k, N, D, re) {
    --N.pendingcb, re(D), Ae(N), E(k, D);
  }
  function A(k, N) {
    let D = k._writableState, re = D.sync, G = D.writecb;
    if (typeof G != "function") {
      E(k, new W());
      return;
    }
    D.writing = !1, D.writecb = null, D.length -= D.writelen, D.writelen = 0, N ? (N.stack, D.errored || (D.errored = N), k._readableState && !k._readableState.errored && (k._readableState.errored = N), re ? t.nextTick(Ee, k, D, N, G) : Ee(k, D, N, G)) : (D.buffered.length > D.bufferedIndex && ae(k, D), re ? D.afterWriteTickInfo !== null && D.afterWriteTickInfo.cb === G ? D.afterWriteTickInfo.count++ : (D.afterWriteTickInfo = { count: 1, cb: G, stream: k, state: D }, t.nextTick(Q, D.afterWriteTickInfo)) : fe(k, D, 1, G));
  }
  function Q({ stream: k, state: N, count: D, cb: re }) {
    return N.afterWriteTickInfo = null, fe(k, N, D, re);
  }
  function fe(k, N, D, re) {
    for (!N.ending && !k.destroyed && N.length === 0 && N.needDrain && (N.needDrain = !1, k.emit("drain")); D-- > 0; )
      N.pendingcb--, re();
    N.destroyed && Ae(N), se(k, N);
  }
  function Ae(k) {
    if (k.writing)
      return;
    for (let G = k.bufferedIndex; G < k.buffered.length; ++G) {
      var N;
      let { chunk: j, callback: K } = k.buffered[G], ye = k.objectMode ? 1 : j.length;
      k.length -= ye, K((N = k.errored) !== null && N !== void 0 ? N : new O("write"));
    }
    let D = k[Z].splice(0);
    for (let G = 0; G < D.length; G++) {
      var re;
      D[G]((re = k.errored) !== null && re !== void 0 ? re : new O("end"));
    }
    be(k);
  }
  function ae(k, N) {
    if (N.corked || N.bufferProcessing || N.destroyed || !N.constructed)
      return;
    let { buffered: D, bufferedIndex: re, objectMode: G } = N, j = D.length - re;
    if (!j)
      return;
    let K = re;
    if (N.bufferProcessing = !0, j > 1 && k._writev) {
      N.pendingcb -= j - 1;
      let ye = N.allNoop ? q : (ke) => {
        for (let Me = K; Me < D.length; ++Me)
          D[Me].callback(ke);
      }, Se = N.allNoop && K === 0 ? D : l(D, K);
      Se.allBuffers = N.allBuffers, ie(k, N, !0, N.length, Se, "", ye), be(N);
    } else {
      do {
        let { chunk: ye, encoding: Se, callback: ke } = D[K];
        D[K++] = null;
        let Me = G ? 1 : ye.length;
        ie(k, N, !1, Me, ye, Se, ke);
      } while (K < D.length && !N.writing);
      K === D.length ? be(N) : K > 256 ? (D.splice(0, K), N.bufferedIndex = 0) : N.bufferedIndex = K;
    }
    N.bufferProcessing = !1;
  }
  ne.prototype._write = function(k, N, D) {
    if (this._writev)
      this._writev([{ chunk: k, encoding: N }], D);
    else
      throw new F("_write()");
  }, ne.prototype._writev = null, ne.prototype.end = function(k, N, D) {
    let re = this._writableState;
    typeof k == "function" ? (D = k, k = null, N = null) : typeof N == "function" && (D = N, N = null);
    let G;
    if (k != null) {
      let j = V(this, k, N);
      j instanceof h && (G = j);
    }
    return re.corked && (re.corked = 1, this.uncork()), G || (!re.errored && !re.ending ? (re.ending = !0, se(this, re, !0), re.ended = !0) : re.finished ? G = new M("end") : re.destroyed && (G = new O("end"))), typeof D == "function" && (G || re.finished ? t.nextTick(D, G) : re[Z].push(D)), this;
  };
  function B(k) {
    return k.ending && !k.destroyed && k.constructed && k.length === 0 && !k.errored && k.buffered.length === 0 && !k.finished && !k.writing && !k.errorEmitted && !k.closeEmitted;
  }
  function _(k, N) {
    let D = !1;
    function re(G) {
      if (D) {
        E(k, G ?? W());
        return;
      }
      if (D = !0, N.pendingcb--, G) {
        let j = N[Z].splice(0);
        for (let K = 0; K < j.length; K++)
          j[K](G);
        E(k, G, N.sync);
      } else
        B(N) && (N.prefinished = !0, k.emit("prefinish"), N.pendingcb++, t.nextTick(ee, k, N));
    }
    N.sync = !0, N.pendingcb++;
    try {
      k._final(re);
    } catch (G) {
      re(G);
    }
    N.sync = !1;
  }
  function Y(k, N) {
    !N.prefinished && !N.finalCalled && (typeof k._final == "function" && !N.destroyed ? (N.finalCalled = !0, _(k, N)) : (N.prefinished = !0, k.emit("prefinish")));
  }
  function se(k, N, D) {
    B(N) && (Y(k, N), N.pendingcb === 0 && (D ? (N.pendingcb++, t.nextTick((re, G) => {
      B(G) ? ee(re, G) : G.pendingcb--;
    }, k, N)) : B(N) && (N.pendingcb++, ee(k, N))));
  }
  function ee(k, N) {
    N.pendingcb--, N.finished = !0;
    let D = N[Z].splice(0);
    for (let re = 0; re < D.length; re++)
      D[re]();
    if (k.emit("finish"), N.autoDestroy) {
      let re = k._readableState;
      (!re || re.autoDestroy && (re.endEmitted || re.readable === !1)) && k.destroy();
    }
  }
  s(ne.prototype, { closed: { __proto__: null, get() {
    return this._writableState ? this._writableState.closed : !1;
  } }, destroyed: { __proto__: null, get() {
    return this._writableState ? this._writableState.destroyed : !1;
  }, set(k) {
    this._writableState && (this._writableState.destroyed = k);
  } }, writable: { __proto__: null, get() {
    let k = this._writableState;
    return !!k && k.writable !== !1 && !k.destroyed && !k.errored && !k.ending && !k.ended;
  }, set(k) {
    this._writableState && (this._writableState.writable = !!k);
  } }, writableFinished: { __proto__: null, get() {
    return this._writableState ? this._writableState.finished : !1;
  } }, writableObjectMode: { __proto__: null, get() {
    return this._writableState ? this._writableState.objectMode : !1;
  } }, writableBuffer: { __proto__: null, get() {
    return this._writableState && this._writableState.getBuffer();
  } }, writableEnded: { __proto__: null, get() {
    return this._writableState ? this._writableState.ending : !1;
  } }, writableNeedDrain: { __proto__: null, get() {
    let k = this._writableState;
    return k ? !k.destroyed && !k.ending && k.needDrain : !1;
  } }, writableHighWaterMark: { __proto__: null, get() {
    return this._writableState && this._writableState.highWaterMark;
  } }, writableCorked: { __proto__: null, get() {
    return this._writableState ? this._writableState.corked : 0;
  } }, writableLength: { __proto__: null, get() {
    return this._writableState && this._writableState.length;
  } }, errored: { __proto__: null, enumerable: !1, get() {
    return this._writableState ? this._writableState.errored : null;
  } }, writableAborted: { __proto__: null, enumerable: !1, get: function() {
    return !!(this._writableState.writable !== !1 && (this._writableState.destroyed || this._writableState.errored) && !this._writableState.finished);
  } } });
  var J = y.destroy;
  ne.prototype.destroy = function(k, N) {
    let D = this._writableState;
    return !D.destroyed && (D.bufferedIndex < D.buffered.length || D[Z].length) && t.nextTick(Ae, D), J.call(this, k, N), this;
  }, ne.prototype._undestroy = y.undestroy, ne.prototype._destroy = function(k, N) {
    N(k);
  }, ne.prototype[g.captureRejectionSymbol] = function(k) {
    this.destroy(k);
  };
  var ce;
  function pe() {
    return ce === void 0 && (ce = {}), ce;
  }
  ne.fromWeb = function(k, N) {
    return pe().newStreamWritableFromWritableStream(k, N);
  }, ne.toWeb = function(k) {
    return pe().newWritableStreamFromStreamWritable(k);
  };
}), Kl = we((e, n) => {
  he(), ue(), le();
  var t = gr(), l = (ft(), $e(ct)), { isReadable: h, isWritable: o, isIterable: r, isNodeStream: s, isReadableNodeStream: i, isWritableNodeStream: a, isDuplexNodeStream: c } = Ht(), d = Zt(), { AbortError: g, codes: { ERR_INVALID_ARG_TYPE: b, ERR_INVALID_RETURN_VALUE: m } } = mt(), { destroyer: y } = Sr(), T = qt(), U = ui(), { createDeferredPromise: S } = $t(), R = Ws(), F = globalThis.Blob || l.Blob, W = typeof F < "u" ? function(te) {
    return te instanceof F;
  } : function(te) {
    return !1;
  }, C = globalThis.AbortController || no().AbortController, { FunctionPrototypeCall: O } = ot(), M = class extends T {
    constructor(te) {
      super(te), (te == null ? void 0 : te.readable) === !1 && (this._readableState.readable = !1, this._readableState.ended = !0, this._readableState.endEmitted = !0), (te == null ? void 0 : te.writable) === !1 && (this._writableState.writable = !1, this._writableState.ending = !0, this._writableState.ended = !0, this._writableState.finished = !0);
    }
  };
  n.exports = function te(E, q) {
    if (c(E))
      return E;
    if (i(E))
      return X({ readable: E });
    if (a(E))
      return X({ writable: E });
    if (s(E))
      return X({ writable: !1, readable: !1 });
    if (typeof E == "function") {
      let { value: z, write: be, final: ne, destroy: V } = $(E);
      if (r(z))
        return R(M, z, { objectMode: !0, write: be, final: ne, destroy: V });
      let me = z == null ? void 0 : z.then;
      if (typeof me == "function") {
        let ie, Ee = O(me, z, (A) => {
          if (A != null)
            throw new m("nully", "body", A);
        }, (A) => {
          y(ie, A);
        });
        return ie = new M({ objectMode: !0, readable: !1, write: be, final(A) {
          ne(async () => {
            try {
              await Ee, t.nextTick(A, null);
            } catch (Q) {
              t.nextTick(A, Q);
            }
          });
        }, destroy: V });
      }
      throw new m("Iterable, AsyncIterable or AsyncFunction", q, z);
    }
    if (W(E))
      return te(E.arrayBuffer());
    if (r(E))
      return R(M, E, { objectMode: !0, writable: !1 });
    if (typeof (E == null ? void 0 : E.writable) == "object" || typeof (E == null ? void 0 : E.readable) == "object") {
      let z = E != null && E.readable ? i(E == null ? void 0 : E.readable) ? E == null ? void 0 : E.readable : te(E.readable) : void 0, be = E != null && E.writable ? a(E == null ? void 0 : E.writable) ? E == null ? void 0 : E.writable : te(E.writable) : void 0;
      return X({ readable: z, writable: be });
    }
    let Z = E == null ? void 0 : E.then;
    if (typeof Z == "function") {
      let z;
      return O(Z, E, (be) => {
        be != null && z.push(be), z.push(null);
      }, (be) => {
        y(z, be);
      }), z = new M({ objectMode: !0, writable: !1, read() {
      } });
    }
    throw new b(q, ["Blob", "ReadableStream", "WritableStream", "Stream", "Iterable", "AsyncIterable", "Function", "{ readable, writable } pair", "Promise"], E);
  };
  function $(te) {
    let { promise: E, resolve: q } = S(), Z = new C(), z = Z.signal;
    return { value: te(async function* () {
      for (; ; ) {
        let be = E;
        E = null;
        let { chunk: ne, done: V, cb: me } = await be;
        if (t.nextTick(me), V)
          return;
        if (z.aborted)
          throw new g(void 0, { cause: z.reason });
        ({ promise: E, resolve: q } = S()), yield ne;
      }
    }(), { signal: z }), write(be, ne, V) {
      let me = q;
      q = null, me({ chunk: be, done: !1, cb: V });
    }, final(be) {
      let ne = q;
      q = null, ne({ done: !0, cb: be });
    }, destroy(be, ne) {
      Z.abort(), ne(be);
    } };
  }
  function X(te) {
    let E = te.readable && typeof te.readable.read != "function" ? U.wrap(te.readable) : te.readable, q = te.writable, Z = !!h(E), z = !!o(q), be, ne, V, me, ie;
    function Ee(A) {
      let Q = me;
      me = null, Q ? Q(A) : A && ie.destroy(A);
    }
    return ie = new M({ readableObjectMode: !!(E != null && E.readableObjectMode), writableObjectMode: !!(q != null && q.writableObjectMode), readable: Z, writable: z }), z && (d(q, (A) => {
      z = !1, A && y(E, A), Ee(A);
    }), ie._write = function(A, Q, fe) {
      q.write(A, Q) ? fe() : be = fe;
    }, ie._final = function(A) {
      q.end(), ne = A;
    }, q.on("drain", function() {
      if (be) {
        let A = be;
        be = null, A();
      }
    }), q.on("finish", function() {
      if (ne) {
        let A = ne;
        ne = null, A();
      }
    })), Z && (d(E, (A) => {
      Z = !1, A && y(E, A), Ee(A);
    }), E.on("readable", function() {
      if (V) {
        let A = V;
        V = null, A();
      }
    }), E.on("end", function() {
      ie.push(null);
    }), ie._read = function() {
      for (; ; ) {
        let A = E.read();
        if (A === null) {
          V = ie._read;
          return;
        }
        if (!ie.push(A))
          return;
      }
    }), ie._destroy = function(A, Q) {
      !A && me !== null && (A = new g()), V = null, be = null, ne = null, me === null ? Q(A) : (me = Q, y(q, A), y(E, A));
    }, ie;
  }
}), qt = we((e, n) => {
  he(), ue(), le();
  var { ObjectDefineProperties: t, ObjectGetOwnPropertyDescriptor: l, ObjectKeys: h, ObjectSetPrototypeOf: o } = ot();
  n.exports = i;
  var r = ui(), s = $s();
  o(i.prototype, r.prototype), o(i, r);
  {
    let g = h(s.prototype);
    for (let b = 0; b < g.length; b++) {
      let m = g[b];
      i.prototype[m] || (i.prototype[m] = s.prototype[m]);
    }
  }
  function i(g) {
    if (!(this instanceof i))
      return new i(g);
    r.call(this, g), s.call(this, g), g ? (this.allowHalfOpen = g.allowHalfOpen !== !1, g.readable === !1 && (this._readableState.readable = !1, this._readableState.ended = !0, this._readableState.endEmitted = !0), g.writable === !1 && (this._writableState.writable = !1, this._writableState.ending = !0, this._writableState.ended = !0, this._writableState.finished = !0)) : this.allowHalfOpen = !0;
  }
  t(i.prototype, { writable: { __proto__: null, ...l(s.prototype, "writable") }, writableHighWaterMark: { __proto__: null, ...l(s.prototype, "writableHighWaterMark") }, writableObjectMode: { __proto__: null, ...l(s.prototype, "writableObjectMode") }, writableBuffer: { __proto__: null, ...l(s.prototype, "writableBuffer") }, writableLength: { __proto__: null, ...l(s.prototype, "writableLength") }, writableFinished: { __proto__: null, ...l(s.prototype, "writableFinished") }, writableCorked: { __proto__: null, ...l(s.prototype, "writableCorked") }, writableEnded: { __proto__: null, ...l(s.prototype, "writableEnded") }, writableNeedDrain: { __proto__: null, ...l(s.prototype, "writableNeedDrain") }, destroyed: { __proto__: null, get() {
    return this._readableState === void 0 || this._writableState === void 0 ? !1 : this._readableState.destroyed && this._writableState.destroyed;
  }, set(g) {
    this._readableState && this._writableState && (this._readableState.destroyed = g, this._writableState.destroyed = g);
  } } });
  var a;
  function c() {
    return a === void 0 && (a = {}), a;
  }
  i.fromWeb = function(g, b) {
    return c().newStreamDuplexFromReadableWritablePair(g, b);
  }, i.toWeb = function(g) {
    return c().newReadableWritablePairFromDuplex(g);
  };
  var d;
  i.from = function(g) {
    return d || (d = Kl()), d(g, "body");
  };
}), qs = we((e, n) => {
  he(), ue(), le();
  var { ObjectSetPrototypeOf: t, Symbol: l } = ot();
  n.exports = i;
  var { ERR_METHOD_NOT_IMPLEMENTED: h } = mt().codes, o = qt(), { getHighWaterMark: r } = so();
  t(i.prototype, o.prototype), t(i, o);
  var s = l("kCallback");
  function i(d) {
    if (!(this instanceof i))
      return new i(d);
    let g = d ? r(this, d, "readableHighWaterMark", !0) : null;
    g === 0 && (d = { ...d, highWaterMark: null, readableHighWaterMark: g, writableHighWaterMark: d.writableHighWaterMark || 0 }), o.call(this, d), this._readableState.sync = !1, this[s] = null, d && (typeof d.transform == "function" && (this._transform = d.transform), typeof d.flush == "function" && (this._flush = d.flush)), this.on("prefinish", c);
  }
  function a(d) {
    typeof this._flush == "function" && !this.destroyed ? this._flush((g, b) => {
      if (g) {
        d ? d(g) : this.destroy(g);
        return;
      }
      b != null && this.push(b), this.push(null), d && d();
    }) : (this.push(null), d && d());
  }
  function c() {
    this._final !== a && a.call(this);
  }
  i.prototype._final = a, i.prototype._transform = function(d, g, b) {
    throw new h("_transform()");
  }, i.prototype._write = function(d, g, b) {
    let m = this._readableState, y = this._writableState, T = m.length;
    this._transform(d, g, (U, S) => {
      if (U) {
        b(U);
        return;
      }
      S != null && this.push(S), y.ended || T === m.length || m.length < m.highWaterMark ? b() : this[s] = b;
    });
  }, i.prototype._read = function() {
    if (this[s]) {
      let d = this[s];
      this[s] = null, d();
    }
  };
}), Vs = we((e, n) => {
  he(), ue(), le();
  var { ObjectSetPrototypeOf: t } = ot();
  n.exports = h;
  var l = qs();
  t(h.prototype, l.prototype), t(h, l);
  function h(o) {
    if (!(this instanceof h))
      return new h(o);
    l.call(this, o);
  }
  h.prototype._transform = function(o, r, s) {
    s(null, o);
  };
}), uo = we((e, n) => {
  he(), ue(), le();
  var t = gr(), { ArrayIsArray: l, Promise: h, SymbolAsyncIterator: o } = ot(), r = Zt(), { once: s } = $t(), i = Sr(), a = qt(), { aggregateTwoErrors: c, codes: { ERR_INVALID_ARG_TYPE: d, ERR_INVALID_RETURN_VALUE: g, ERR_MISSING_ARGS: b, ERR_STREAM_DESTROYED: m, ERR_STREAM_PREMATURE_CLOSE: y }, AbortError: T } = mt(), { validateFunction: U, validateAbortSignal: S } = si(), { isIterable: R, isReadable: F, isReadableNodeStream: W, isNodeStream: C, isTransformStream: O, isWebStream: M, isReadableStream: $, isReadableEnded: X } = Ht(), te = globalThis.AbortController || no().AbortController, E, q;
  function Z(Q, fe, Ae) {
    let ae = !1;
    Q.on("close", () => {
      ae = !0;
    });
    let B = r(Q, { readable: fe, writable: Ae }, (_) => {
      ae = !_;
    });
    return { destroy: (_) => {
      ae || (ae = !0, i.destroyer(Q, _ || new m("pipe")));
    }, cleanup: B };
  }
  function z(Q) {
    return U(Q[Q.length - 1], "streams[stream.length - 1]"), Q.pop();
  }
  function be(Q) {
    if (R(Q))
      return Q;
    if (W(Q))
      return ne(Q);
    throw new d("val", ["Readable", "Iterable", "AsyncIterable"], Q);
  }
  async function* ne(Q) {
    q || (q = ui()), yield* q.prototype[o].call(Q);
  }
  async function V(Q, fe, Ae, { end: ae }) {
    let B, _ = null, Y = (J) => {
      if (J && (B = J), _) {
        let ce = _;
        _ = null, ce();
      }
    }, se = () => new h((J, ce) => {
      B ? ce(B) : _ = () => {
        B ? ce(B) : J();
      };
    });
    fe.on("drain", Y);
    let ee = r(fe, { readable: !1 }, Y);
    try {
      fe.writableNeedDrain && await se();
      for await (let J of Q)
        fe.write(J) || await se();
      ae && fe.end(), await se(), Ae();
    } catch (J) {
      Ae(B !== J ? c(B, J) : J);
    } finally {
      ee(), fe.off("drain", Y);
    }
  }
  async function me(Q, fe, Ae, { end: ae }) {
    O(fe) && (fe = fe.writable);
    let B = fe.getWriter();
    try {
      for await (let _ of Q)
        await B.ready, B.write(_).catch(() => {
        });
      await B.ready, ae && await B.close(), Ae();
    } catch (_) {
      try {
        await B.abort(_), Ae(_);
      } catch (Y) {
        Ae(Y);
      }
    }
  }
  function ie(...Q) {
    return Ee(Q, s(z(Q)));
  }
  function Ee(Q, fe, Ae) {
    if (Q.length === 1 && l(Q[0]) && (Q = Q[0]), Q.length < 2)
      throw new b("streams");
    let ae = new te(), B = ae.signal, _ = Ae == null ? void 0 : Ae.signal, Y = [];
    S(_, "options.signal");
    function se() {
      N(new T());
    }
    _ == null || _.addEventListener("abort", se);
    let ee, J, ce = [], pe = 0;
    function k(j) {
      N(j, --pe === 0);
    }
    function N(j, K) {
      if (j && (!ee || ee.code === "ERR_STREAM_PREMATURE_CLOSE") && (ee = j), !(!ee && !K)) {
        for (; ce.length; )
          ce.shift()(ee);
        _ == null || _.removeEventListener("abort", se), ae.abort(), K && (ee || Y.forEach((ye) => ye()), t.nextTick(fe, ee, J));
      }
    }
    let D;
    for (let j = 0; j < Q.length; j++) {
      let K = Q[j], ye = j < Q.length - 1, Se = j > 0, ke = ye || (Ae == null ? void 0 : Ae.end) !== !1, Me = j === Q.length - 1;
      if (C(K)) {
        let f = function(u) {
          u && u.name !== "AbortError" && u.code !== "ERR_STREAM_PREMATURE_CLOSE" && k(u);
        };
        if (ke) {
          let { destroy: u, cleanup: p } = Z(K, ye, Se);
          ce.push(u), F(K) && Me && Y.push(p);
        }
        K.on("error", f), F(K) && Me && Y.push(() => {
          K.removeListener("error", f);
        });
      }
      if (j === 0)
        if (typeof K == "function") {
          if (D = K({ signal: B }), !R(D))
            throw new g("Iterable, AsyncIterable or Stream", "source", D);
        } else
          R(K) || W(K) || O(K) ? D = K : D = a.from(K);
      else if (typeof K == "function") {
        if (O(D)) {
          var re;
          D = be((re = D) === null || re === void 0 ? void 0 : re.readable);
        } else
          D = be(D);
        if (D = K(D, { signal: B }), ye) {
          if (!R(D, !0))
            throw new g("AsyncIterable", `transform[${j - 1}]`, D);
        } else {
          var G;
          E || (E = Vs());
          let f = new E({ objectMode: !0 }), u = (G = D) === null || G === void 0 ? void 0 : G.then;
          if (typeof u == "function")
            pe++, u.call(D, (I) => {
              J = I, I != null && f.write(I), ke && f.end(), t.nextTick(k);
            }, (I) => {
              f.destroy(I), t.nextTick(k, I);
            });
          else if (R(D, !0))
            pe++, V(D, f, k, { end: ke });
          else if ($(D) || O(D)) {
            let I = D.readable || D;
            pe++, V(I, f, k, { end: ke });
          } else
            throw new g("AsyncIterable or Promise", "destination", D);
          D = f;
          let { destroy: p, cleanup: w } = Z(D, !1, !0);
          ce.push(p), Me && Y.push(w);
        }
      } else if (C(K)) {
        if (W(D)) {
          pe += 2;
          let f = A(D, K, k, { end: ke });
          F(K) && Me && Y.push(f);
        } else if (O(D) || $(D)) {
          let f = D.readable || D;
          pe++, V(f, K, k, { end: ke });
        } else if (R(D))
          pe++, V(D, K, k, { end: ke });
        else
          throw new d("val", ["Readable", "Iterable", "AsyncIterable", "ReadableStream", "TransformStream"], D);
        D = K;
      } else if (M(K)) {
        if (W(D))
          pe++, me(be(D), K, k, { end: ke });
        else if ($(D) || R(D))
          pe++, me(D, K, k, { end: ke });
        else if (O(D))
          pe++, me(D.readable, K, k, { end: ke });
        else
          throw new d("val", ["Readable", "Iterable", "AsyncIterable", "ReadableStream", "TransformStream"], D);
        D = K;
      } else
        D = a.from(K);
    }
    return (B != null && B.aborted || _ != null && _.aborted) && t.nextTick(se), D;
  }
  function A(Q, fe, Ae, { end: ae }) {
    let B = !1;
    if (fe.on("close", () => {
      B || Ae(new y());
    }), Q.pipe(fe, { end: !1 }), ae) {
      let _ = function() {
        B = !0, fe.end();
      };
      X(Q) ? t.nextTick(_) : Q.once("end", _);
    } else
      Ae();
    return r(Q, { readable: !0, writable: !1 }, (_) => {
      let Y = Q._readableState;
      _ && _.code === "ERR_STREAM_PREMATURE_CLOSE" && Y && Y.ended && !Y.errored && !Y.errorEmitted ? Q.once("end", Ae).once("error", Ae) : Ae(_);
    }), r(fe, { readable: !1, writable: !0 }, Ae);
  }
  n.exports = { pipelineImpl: Ee, pipeline: ie };
}), Hs = we((e, n) => {
  he(), ue(), le();
  var { pipeline: t } = uo(), l = qt(), { destroyer: h } = Sr(), { isNodeStream: o, isReadable: r, isWritable: s, isWebStream: i, isTransformStream: a, isWritableStream: c, isReadableStream: d } = Ht(), { AbortError: g, codes: { ERR_INVALID_ARG_VALUE: b, ERR_MISSING_ARGS: m } } = mt(), y = Zt();
  n.exports = function(...T) {
    if (T.length === 0)
      throw new m("streams");
    if (T.length === 1)
      return l.from(T[0]);
    let U = [...T];
    if (typeof T[0] == "function" && (T[0] = l.from(T[0])), typeof T[T.length - 1] == "function") {
      let E = T.length - 1;
      T[E] = l.from(T[E]);
    }
    for (let E = 0; E < T.length; ++E)
      if (!(!o(T[E]) && !i(T[E]))) {
        if (E < T.length - 1 && !(r(T[E]) || d(T[E]) || a(T[E])))
          throw new b(`streams[${E}]`, U[E], "must be readable");
        if (E > 0 && !(s(T[E]) || c(T[E]) || a(T[E])))
          throw new b(`streams[${E}]`, U[E], "must be writable");
      }
    let S, R, F, W, C;
    function O(E) {
      let q = W;
      W = null, q ? q(E) : E ? C.destroy(E) : !te && !X && C.destroy();
    }
    let M = T[0], $ = t(T, O), X = !!(s(M) || c(M) || a(M)), te = !!(r($) || d($) || a($));
    if (C = new l({ writableObjectMode: !!(M != null && M.writableObjectMode), readableObjectMode: !!($ != null && $.writableObjectMode), writable: X, readable: te }), X) {
      if (o(M))
        C._write = function(q, Z, z) {
          M.write(q, Z) ? z() : S = z;
        }, C._final = function(q) {
          M.end(), R = q;
        }, M.on("drain", function() {
          if (S) {
            let q = S;
            S = null, q();
          }
        });
      else if (i(M)) {
        let q = (a(M) ? M.writable : M).getWriter();
        C._write = async function(Z, z, be) {
          try {
            await q.ready, q.write(Z).catch(() => {
            }), be();
          } catch (ne) {
            be(ne);
          }
        }, C._final = async function(Z) {
          try {
            await q.ready, q.close().catch(() => {
            }), R = Z;
          } catch (z) {
            Z(z);
          }
        };
      }
      let E = a($) ? $.readable : $;
      y(E, () => {
        if (R) {
          let q = R;
          R = null, q();
        }
      });
    }
    if (te) {
      if (o($))
        $.on("readable", function() {
          if (F) {
            let E = F;
            F = null, E();
          }
        }), $.on("end", function() {
          C.push(null);
        }), C._read = function() {
          for (; ; ) {
            let E = $.read();
            if (E === null) {
              F = C._read;
              return;
            }
            if (!C.push(E))
              return;
          }
        };
      else if (i($)) {
        let E = (a($) ? $.readable : $).getReader();
        C._read = async function() {
          for (; ; )
            try {
              let { value: q, done: Z } = await E.read();
              if (!C.push(q))
                return;
              if (Z) {
                C.push(null);
                return;
              }
            } catch {
              return;
            }
        };
      }
    }
    return C._destroy = function(E, q) {
      !E && W !== null && (E = new g()), F = null, S = null, R = null, W === null ? q(E) : (W = q, o($) && h($, E));
    }, C;
  };
}), Yl = we((e, n) => {
  he(), ue(), le();
  var t = globalThis.AbortController || no().AbortController, { codes: { ERR_INVALID_ARG_VALUE: l, ERR_INVALID_ARG_TYPE: h, ERR_MISSING_ARGS: o, ERR_OUT_OF_RANGE: r }, AbortError: s } = mt(), { validateAbortSignal: i, validateInteger: a, validateObject: c } = si(), d = ot().Symbol("kWeak"), { finished: g } = Zt(), b = Hs(), { addAbortSignalNoValidate: m } = ai(), { isWritable: y, isNodeStream: T } = Ht(), { ArrayPrototypePush: U, MathFloor: S, Number: R, NumberIsNaN: F, Promise: W, PromiseReject: C, PromisePrototypeThen: O, Symbol: M } = ot(), $ = M("kEmpty"), X = M("kEof");
  function te(ae, B) {
    if (B != null && c(B, "options"), (B == null ? void 0 : B.signal) != null && i(B.signal, "options.signal"), T(ae) && !y(ae))
      throw new l("stream", ae, "must be writable");
    let _ = b(this, ae);
    return B != null && B.signal && m(B.signal, _), _;
  }
  function E(ae, B) {
    if (typeof ae != "function")
      throw new h("fn", ["Function", "AsyncFunction"], ae);
    B != null && c(B, "options"), (B == null ? void 0 : B.signal) != null && i(B.signal, "options.signal");
    let _ = 1;
    return (B == null ? void 0 : B.concurrency) != null && (_ = S(B.concurrency)), a(_, "concurrency", 1), (async function* () {
      var Y, se;
      let ee = new t(), J = this, ce = [], pe = ee.signal, k = { signal: pe }, N = () => ee.abort();
      B != null && (Y = B.signal) !== null && Y !== void 0 && Y.aborted && N(), B == null || (se = B.signal) === null || se === void 0 || se.addEventListener("abort", N);
      let D, re, G = !1;
      function j() {
        G = !0;
      }
      async function K() {
        try {
          for await (let ke of J) {
            var ye;
            if (G)
              return;
            if (pe.aborted)
              throw new s();
            try {
              ke = ae(ke, k);
            } catch (Me) {
              ke = C(Me);
            }
            ke !== $ && (typeof ((ye = ke) === null || ye === void 0 ? void 0 : ye.catch) == "function" && ke.catch(j), ce.push(ke), D && (D(), D = null), !G && ce.length && ce.length >= _ && await new W((Me) => {
              re = Me;
            }));
          }
          ce.push(X);
        } catch (ke) {
          let Me = C(ke);
          O(Me, void 0, j), ce.push(Me);
        } finally {
          var Se;
          G = !0, D && (D(), D = null), B == null || (Se = B.signal) === null || Se === void 0 || Se.removeEventListener("abort", N);
        }
      }
      K();
      try {
        for (; ; ) {
          for (; ce.length > 0; ) {
            let ye = await ce[0];
            if (ye === X)
              return;
            if (pe.aborted)
              throw new s();
            ye !== $ && (yield ye), ce.shift(), re && (re(), re = null);
          }
          await new W((ye) => {
            D = ye;
          });
        }
      } finally {
        ee.abort(), G = !0, re && (re(), re = null);
      }
    }).call(this);
  }
  function q(ae = void 0) {
    return ae != null && c(ae, "options"), (ae == null ? void 0 : ae.signal) != null && i(ae.signal, "options.signal"), (async function* () {
      let B = 0;
      for await (let Y of this) {
        var _;
        if (ae != null && (_ = ae.signal) !== null && _ !== void 0 && _.aborted)
          throw new s({ cause: ae.signal.reason });
        yield [B++, Y];
      }
    }).call(this);
  }
  async function Z(ae, B = void 0) {
    for await (let _ of V.call(this, ae, B))
      return !0;
    return !1;
  }
  async function z(ae, B = void 0) {
    if (typeof ae != "function")
      throw new h("fn", ["Function", "AsyncFunction"], ae);
    return !await Z.call(this, async (..._) => !await ae(..._), B);
  }
  async function be(ae, B) {
    for await (let _ of V.call(this, ae, B))
      return _;
  }
  async function ne(ae, B) {
    if (typeof ae != "function")
      throw new h("fn", ["Function", "AsyncFunction"], ae);
    async function _(Y, se) {
      return await ae(Y, se), $;
    }
    for await (let Y of E.call(this, _, B))
      ;
  }
  function V(ae, B) {
    if (typeof ae != "function")
      throw new h("fn", ["Function", "AsyncFunction"], ae);
    async function _(Y, se) {
      return await ae(Y, se) ? Y : $;
    }
    return E.call(this, _, B);
  }
  var me = class extends o {
    constructor() {
      super("reduce"), this.message = "Reduce of an empty stream requires an initial value";
    }
  };
  async function ie(ae, B, _) {
    var Y;
    if (typeof ae != "function")
      throw new h("reducer", ["Function", "AsyncFunction"], ae);
    _ != null && c(_, "options"), (_ == null ? void 0 : _.signal) != null && i(_.signal, "options.signal");
    let se = arguments.length > 1;
    if (_ != null && (Y = _.signal) !== null && Y !== void 0 && Y.aborted) {
      let k = new s(void 0, { cause: _.signal.reason });
      throw this.once("error", () => {
      }), await g(this.destroy(k)), k;
    }
    let ee = new t(), J = ee.signal;
    if (_ != null && _.signal) {
      let k = { once: !0, [d]: this };
      _.signal.addEventListener("abort", () => ee.abort(), k);
    }
    let ce = !1;
    try {
      for await (let k of this) {
        var pe;
        if (ce = !0, _ != null && (pe = _.signal) !== null && pe !== void 0 && pe.aborted)
          throw new s();
        se ? B = await ae(B, k, { signal: J }) : (B = k, se = !0);
      }
      if (!ce && !se)
        throw new me();
    } finally {
      ee.abort();
    }
    return B;
  }
  async function Ee(ae) {
    ae != null && c(ae, "options"), (ae == null ? void 0 : ae.signal) != null && i(ae.signal, "options.signal");
    let B = [];
    for await (let Y of this) {
      var _;
      if (ae != null && (_ = ae.signal) !== null && _ !== void 0 && _.aborted)
        throw new s(void 0, { cause: ae.signal.reason });
      U(B, Y);
    }
    return B;
  }
  function A(ae, B) {
    let _ = E.call(this, ae, B);
    return (async function* () {
      for await (let Y of _)
        yield* Y;
    }).call(this);
  }
  function Q(ae) {
    if (ae = R(ae), F(ae))
      return 0;
    if (ae < 0)
      throw new r("number", ">= 0", ae);
    return ae;
  }
  function fe(ae, B = void 0) {
    return B != null && c(B, "options"), (B == null ? void 0 : B.signal) != null && i(B.signal, "options.signal"), ae = Q(ae), (async function* () {
      var _;
      if (B != null && (_ = B.signal) !== null && _ !== void 0 && _.aborted)
        throw new s();
      for await (let se of this) {
        var Y;
        if (B != null && (Y = B.signal) !== null && Y !== void 0 && Y.aborted)
          throw new s();
        ae-- <= 0 && (yield se);
      }
    }).call(this);
  }
  function Ae(ae, B = void 0) {
    return B != null && c(B, "options"), (B == null ? void 0 : B.signal) != null && i(B.signal, "options.signal"), ae = Q(ae), (async function* () {
      var _;
      if (B != null && (_ = B.signal) !== null && _ !== void 0 && _.aborted)
        throw new s();
      for await (let se of this) {
        var Y;
        if (B != null && (Y = B.signal) !== null && Y !== void 0 && Y.aborted)
          throw new s();
        if (ae-- > 0)
          yield se;
        else
          return;
      }
    }).call(this);
  }
  n.exports.streamReturningOperators = { asIndexedPairs: q, drop: fe, filter: V, flatMap: A, map: E, take: Ae, compose: te }, n.exports.promiseReturningOperators = { every: z, forEach: ne, reduce: ie, toArray: Ee, some: Z, find: be };
}), zs = we((e, n) => {
  he(), ue(), le();
  var { ArrayPrototypePop: t, Promise: l } = ot(), { isIterable: h, isNodeStream: o, isWebStream: r } = Ht(), { pipelineImpl: s } = uo(), { finished: i } = Zt();
  Ks();
  function a(...c) {
    return new l((d, g) => {
      let b, m, y = c[c.length - 1];
      if (y && typeof y == "object" && !o(y) && !h(y) && !r(y)) {
        let T = t(c);
        b = T.signal, m = T.end;
      }
      s(c, (T, U) => {
        T ? g(T) : d(U);
      }, { signal: b, end: m });
    });
  }
  n.exports = { finished: i, pipeline: a };
}), Ks = we((e, n) => {
  he(), ue(), le();
  var { Buffer: t } = (ft(), $e(ct)), { ObjectDefineProperty: l, ObjectKeys: h, ReflectApply: o } = ot(), { promisify: { custom: r } } = $t(), { streamReturningOperators: s, promiseReturningOperators: i } = Yl(), { codes: { ERR_ILLEGAL_CONSTRUCTOR: a } } = mt(), c = Hs(), { pipeline: d } = uo(), { destroyer: g } = Sr(), b = Zt(), m = zs(), y = Ht(), T = n.exports = oo().Stream;
  T.isDisturbed = y.isDisturbed, T.isErrored = y.isErrored, T.isReadable = y.isReadable, T.Readable = ui();
  for (let S of h(s)) {
    let R = function(...W) {
      if (new.target)
        throw a();
      return T.Readable.from(o(F, this, W));
    }, F = s[S];
    l(R, "name", { __proto__: null, value: F.name }), l(R, "length", { __proto__: null, value: F.length }), l(T.Readable.prototype, S, { __proto__: null, value: R, enumerable: !1, configurable: !0, writable: !0 });
  }
  for (let S of h(i)) {
    let R = function(...W) {
      if (new.target)
        throw a();
      return o(F, this, W);
    }, F = i[S];
    l(R, "name", { __proto__: null, value: F.name }), l(R, "length", { __proto__: null, value: F.length }), l(T.Readable.prototype, S, { __proto__: null, value: R, enumerable: !1, configurable: !0, writable: !0 });
  }
  T.Writable = $s(), T.Duplex = qt(), T.Transform = qs(), T.PassThrough = Vs(), T.pipeline = d;
  var { addAbortSignal: U } = ai();
  T.addAbortSignal = U, T.finished = b, T.destroy = g, T.compose = c, l(T, "promises", { __proto__: null, configurable: !0, enumerable: !0, get() {
    return m;
  } }), l(d, r, { __proto__: null, enumerable: !0, get() {
    return m.pipeline;
  } }), l(b, r, { __proto__: null, enumerable: !0, get() {
    return m.finished;
  } }), T.Stream = T, T._isUint8Array = function(S) {
    return S instanceof Uint8Array;
  }, T._uint8ArrayToBuffer = function(S) {
    return t.from(S.buffer, S.byteOffset, S.byteLength);
  };
}), mr = we((e, n) => {
  he(), ue(), le();
  var t = Ks(), l = zs(), h = t.Readable.destroy;
  n.exports = t.Readable, n.exports._uint8ArrayToBuffer = t._uint8ArrayToBuffer, n.exports._isUint8Array = t._isUint8Array, n.exports.isDisturbed = t.isDisturbed, n.exports.isErrored = t.isErrored, n.exports.isReadable = t.isReadable, n.exports.Readable = t.Readable, n.exports.Writable = t.Writable, n.exports.Duplex = t.Duplex, n.exports.Transform = t.Transform, n.exports.PassThrough = t.PassThrough, n.exports.addAbortSignal = t.addAbortSignal, n.exports.finished = t.finished, n.exports.destroy = t.destroy, n.exports.destroy = h, n.exports.pipeline = t.pipeline, n.exports.compose = t.compose, Object.defineProperty(t, "promises", { configurable: !0, enumerable: !0, get() {
    return l;
  } }), n.exports.Stream = t.Stream, n.exports.default = n.exports;
}), Ql = we((e, n) => {
  he(), ue(), le(), typeof Object.create == "function" ? n.exports = function(t, l) {
    l && (t.super_ = l, t.prototype = Object.create(l.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }));
  } : n.exports = function(t, l) {
    if (l) {
      t.super_ = l;
      var h = function() {
      };
      h.prototype = l.prototype, t.prototype = new h(), t.prototype.constructor = t;
    }
  };
}), Gl = we((e, n) => {
  he(), ue(), le();
  var { Buffer: t } = (ft(), $e(ct)), l = Symbol.for("BufferList");
  function h(o) {
    if (!(this instanceof h))
      return new h(o);
    h._init.call(this, o);
  }
  h._init = function(o) {
    Object.defineProperty(this, l, { value: !0 }), this._bufs = [], this.length = 0, o && this.append(o);
  }, h.prototype._new = function(o) {
    return new h(o);
  }, h.prototype._offset = function(o) {
    if (o === 0)
      return [0, 0];
    let r = 0;
    for (let s = 0; s < this._bufs.length; s++) {
      let i = r + this._bufs[s].length;
      if (o < i || s === this._bufs.length - 1)
        return [s, o - r];
      r = i;
    }
  }, h.prototype._reverseOffset = function(o) {
    let r = o[0], s = o[1];
    for (let i = 0; i < r; i++)
      s += this._bufs[i].length;
    return s;
  }, h.prototype.get = function(o) {
    if (o > this.length || o < 0)
      return;
    let r = this._offset(o);
    return this._bufs[r[0]][r[1]];
  }, h.prototype.slice = function(o, r) {
    return typeof o == "number" && o < 0 && (o += this.length), typeof r == "number" && r < 0 && (r += this.length), this.copy(null, 0, o, r);
  }, h.prototype.copy = function(o, r, s, i) {
    if ((typeof s != "number" || s < 0) && (s = 0), (typeof i != "number" || i > this.length) && (i = this.length), s >= this.length || i <= 0)
      return o || t.alloc(0);
    let a = !!o, c = this._offset(s), d = i - s, g = d, b = a && r || 0, m = c[1];
    if (s === 0 && i === this.length) {
      if (!a)
        return this._bufs.length === 1 ? this._bufs[0] : t.concat(this._bufs, this.length);
      for (let y = 0; y < this._bufs.length; y++)
        this._bufs[y].copy(o, b), b += this._bufs[y].length;
      return o;
    }
    if (g <= this._bufs[c[0]].length - m)
      return a ? this._bufs[c[0]].copy(o, r, m, m + g) : this._bufs[c[0]].slice(m, m + g);
    a || (o = t.allocUnsafe(d));
    for (let y = c[0]; y < this._bufs.length; y++) {
      let T = this._bufs[y].length - m;
      if (g > T)
        this._bufs[y].copy(o, b, m), b += T;
      else {
        this._bufs[y].copy(o, b, m, m + g), b += T;
        break;
      }
      g -= T, m && (m = 0);
    }
    return o.length > b ? o.slice(0, b) : o;
  }, h.prototype.shallowSlice = function(o, r) {
    if (o = o || 0, r = typeof r != "number" ? this.length : r, o < 0 && (o += this.length), r < 0 && (r += this.length), o === r)
      return this._new();
    let s = this._offset(o), i = this._offset(r), a = this._bufs.slice(s[0], i[0] + 1);
    return i[1] === 0 ? a.pop() : a[a.length - 1] = a[a.length - 1].slice(0, i[1]), s[1] !== 0 && (a[0] = a[0].slice(s[1])), this._new(a);
  }, h.prototype.toString = function(o, r, s) {
    return this.slice(r, s).toString(o);
  }, h.prototype.consume = function(o) {
    if (o = Math.trunc(o), Number.isNaN(o) || o <= 0)
      return this;
    for (; this._bufs.length; )
      if (o >= this._bufs[0].length)
        o -= this._bufs[0].length, this.length -= this._bufs[0].length, this._bufs.shift();
      else {
        this._bufs[0] = this._bufs[0].slice(o), this.length -= o;
        break;
      }
    return this;
  }, h.prototype.duplicate = function() {
    let o = this._new();
    for (let r = 0; r < this._bufs.length; r++)
      o.append(this._bufs[r]);
    return o;
  }, h.prototype.append = function(o) {
    if (o == null)
      return this;
    if (o.buffer)
      this._appendBuffer(t.from(o.buffer, o.byteOffset, o.byteLength));
    else if (Array.isArray(o))
      for (let r = 0; r < o.length; r++)
        this.append(o[r]);
    else if (this._isBufferList(o))
      for (let r = 0; r < o._bufs.length; r++)
        this.append(o._bufs[r]);
    else
      typeof o == "number" && (o = o.toString()), this._appendBuffer(t.from(o));
    return this;
  }, h.prototype._appendBuffer = function(o) {
    this._bufs.push(o), this.length += o.length;
  }, h.prototype.indexOf = function(o, r, s) {
    if (s === void 0 && typeof r == "string" && (s = r, r = void 0), typeof o == "function" || Array.isArray(o))
      throw new TypeError('The "value" argument must be one of type string, Buffer, BufferList, or Uint8Array.');
    if (typeof o == "number" ? o = t.from([o]) : typeof o == "string" ? o = t.from(o, s) : this._isBufferList(o) ? o = o.slice() : Array.isArray(o.buffer) ? o = t.from(o.buffer, o.byteOffset, o.byteLength) : t.isBuffer(o) || (o = t.from(o)), r = Number(r || 0), isNaN(r) && (r = 0), r < 0 && (r = this.length + r), r < 0 && (r = 0), o.length === 0)
      return r > this.length ? this.length : r;
    let i = this._offset(r), a = i[0], c = i[1];
    for (; a < this._bufs.length; a++) {
      let d = this._bufs[a];
      for (; c < d.length; )
        if (d.length - c >= o.length) {
          let g = d.indexOf(o, c);
          if (g !== -1)
            return this._reverseOffset([a, g]);
          c = d.length - o.length + 1;
        } else {
          let g = this._reverseOffset([a, c]);
          if (this._match(g, o))
            return g;
          c++;
        }
      c = 0;
    }
    return -1;
  }, h.prototype._match = function(o, r) {
    if (this.length - o < r.length)
      return !1;
    for (let s = 0; s < r.length; s++)
      if (this.get(o + s) !== r[s])
        return !1;
    return !0;
  }, function() {
    let o = { readDoubleBE: 8, readDoubleLE: 8, readFloatBE: 4, readFloatLE: 4, readBigInt64BE: 8, readBigInt64LE: 8, readBigUInt64BE: 8, readBigUInt64LE: 8, readInt32BE: 4, readInt32LE: 4, readUInt32BE: 4, readUInt32LE: 4, readInt16BE: 2, readInt16LE: 2, readUInt16BE: 2, readUInt16LE: 2, readInt8: 1, readUInt8: 1, readIntBE: null, readIntLE: null, readUIntBE: null, readUIntLE: null };
    for (let r in o)
      (function(s) {
        o[s] === null ? h.prototype[s] = function(i, a) {
          return this.slice(i, i + a)[s](0, a);
        } : h.prototype[s] = function(i = 0) {
          return this.slice(i, i + o[s])[s](0);
        };
      })(r);
  }(), h.prototype._isBufferList = function(o) {
    return o instanceof h || h.isBufferList(o);
  }, h.isBufferList = function(o) {
    return o != null && o[l];
  }, n.exports = h;
}), Jl = we((e, n) => {
  he(), ue(), le();
  var t = mr().Duplex, l = Ql(), h = Gl();
  function o(r) {
    if (!(this instanceof o))
      return new o(r);
    if (typeof r == "function") {
      this._callback = r;
      let s = (function(i) {
        this._callback && (this._callback(i), this._callback = null);
      }).bind(this);
      this.on("pipe", function(i) {
        i.on("error", s);
      }), this.on("unpipe", function(i) {
        i.removeListener("error", s);
      }), r = null;
    }
    h._init.call(this, r), t.call(this);
  }
  l(o, t), Object.assign(o.prototype, h.prototype), o.prototype._new = function(r) {
    return new o(r);
  }, o.prototype._write = function(r, s, i) {
    this._appendBuffer(r), typeof i == "function" && i();
  }, o.prototype._read = function(r) {
    if (!this.length)
      return this.push(null);
    r = Math.min(r, this.length), this.push(this.slice(0, r)), this.consume(r);
  }, o.prototype.end = function(r) {
    t.prototype.end.call(this, r), this._callback && (this._callback(null, this.slice()), this._callback = null);
  }, o.prototype._destroy = function(r, s) {
    this._bufs.length = 0, this.length = 0, s(r);
  }, o.prototype._isBufferList = function(r) {
    return r instanceof o || r instanceof h || o.isBufferList(r);
  }, o.isBufferList = h.isBufferList, n.exports = o, n.exports.BufferListStream = o, n.exports.BufferList = h;
}), Xl = we((e, n) => {
  he(), ue(), le();
  var t = class {
    constructor() {
      this.cmd = null, this.retain = !1, this.qos = 0, this.dup = !1, this.length = -1, this.topic = null, this.payload = null;
    }
  };
  n.exports = t;
}), Ys = we((e, n) => {
  he(), ue(), le();
  var t = n.exports, { Buffer: l } = (ft(), $e(ct));
  t.types = { 0: "reserved", 1: "connect", 2: "connack", 3: "publish", 4: "puback", 5: "pubrec", 6: "pubrel", 7: "pubcomp", 8: "subscribe", 9: "suback", 10: "unsubscribe", 11: "unsuback", 12: "pingreq", 13: "pingresp", 14: "disconnect", 15: "auth" }, t.requiredHeaderFlags = { 1: 0, 2: 0, 4: 0, 5: 0, 6: 2, 7: 0, 8: 2, 9: 0, 10: 2, 11: 0, 12: 0, 13: 0, 14: 0, 15: 0 }, t.requiredHeaderFlagsErrors = {};
  for (let o in t.requiredHeaderFlags) {
    let r = t.requiredHeaderFlags[o];
    t.requiredHeaderFlagsErrors[o] = "Invalid header flag bits, must be 0x" + r.toString(16) + " for " + t.types[o] + " packet";
  }
  t.codes = {};
  for (let o in t.types) {
    let r = t.types[o];
    t.codes[r] = o;
  }
  t.CMD_SHIFT = 4, t.CMD_MASK = 240, t.DUP_MASK = 8, t.QOS_MASK = 3, t.QOS_SHIFT = 1, t.RETAIN_MASK = 1, t.VARBYTEINT_MASK = 127, t.VARBYTEINT_FIN_MASK = 128, t.VARBYTEINT_MAX = 268435455, t.SESSIONPRESENT_MASK = 1, t.SESSIONPRESENT_HEADER = l.from([t.SESSIONPRESENT_MASK]), t.CONNACK_HEADER = l.from([t.codes.connack << t.CMD_SHIFT]), t.USERNAME_MASK = 128, t.PASSWORD_MASK = 64, t.WILL_RETAIN_MASK = 32, t.WILL_QOS_MASK = 24, t.WILL_QOS_SHIFT = 3, t.WILL_FLAG_MASK = 4, t.CLEAN_SESSION_MASK = 2, t.CONNECT_HEADER = l.from([t.codes.connect << t.CMD_SHIFT]), t.properties = { sessionExpiryInterval: 17, willDelayInterval: 24, receiveMaximum: 33, maximumPacketSize: 39, topicAliasMaximum: 34, requestResponseInformation: 25, requestProblemInformation: 23, userProperties: 38, authenticationMethod: 21, authenticationData: 22, payloadFormatIndicator: 1, messageExpiryInterval: 2, contentType: 3, responseTopic: 8, correlationData: 9, maximumQoS: 36, retainAvailable: 37, assignedClientIdentifier: 18, reasonString: 31, wildcardSubscriptionAvailable: 40, subscriptionIdentifiersAvailable: 41, sharedSubscriptionAvailable: 42, serverKeepAlive: 19, responseInformation: 26, serverReference: 28, topicAlias: 35, subscriptionIdentifier: 11 }, t.propertiesCodes = {};
  for (let o in t.properties) {
    let r = t.properties[o];
    t.propertiesCodes[r] = o;
  }
  t.propertiesTypes = { sessionExpiryInterval: "int32", willDelayInterval: "int32", receiveMaximum: "int16", maximumPacketSize: "int32", topicAliasMaximum: "int16", requestResponseInformation: "byte", requestProblemInformation: "byte", userProperties: "pair", authenticationMethod: "string", authenticationData: "binary", payloadFormatIndicator: "byte", messageExpiryInterval: "int32", contentType: "string", responseTopic: "string", correlationData: "binary", maximumQoS: "int8", retainAvailable: "byte", assignedClientIdentifier: "string", reasonString: "string", wildcardSubscriptionAvailable: "byte", subscriptionIdentifiersAvailable: "byte", sharedSubscriptionAvailable: "byte", serverKeepAlive: "int16", responseInformation: "string", serverReference: "string", topicAlias: "int16", subscriptionIdentifier: "var" };
  function h(o) {
    return [0, 1, 2].map((r) => [0, 1].map((s) => [0, 1].map((i) => {
      let a = l.alloc(1);
      return a.writeUInt8(t.codes[o] << t.CMD_SHIFT | (s ? t.DUP_MASK : 0) | r << t.QOS_SHIFT | i, 0, !0), a;
    })));
  }
  t.PUBLISH_HEADER = h("publish"), t.SUBSCRIBE_HEADER = h("subscribe"), t.SUBSCRIBE_OPTIONS_QOS_MASK = 3, t.SUBSCRIBE_OPTIONS_NL_MASK = 1, t.SUBSCRIBE_OPTIONS_NL_SHIFT = 2, t.SUBSCRIBE_OPTIONS_RAP_MASK = 1, t.SUBSCRIBE_OPTIONS_RAP_SHIFT = 3, t.SUBSCRIBE_OPTIONS_RH_MASK = 3, t.SUBSCRIBE_OPTIONS_RH_SHIFT = 4, t.SUBSCRIBE_OPTIONS_RH = [0, 16, 32], t.SUBSCRIBE_OPTIONS_NL = 4, t.SUBSCRIBE_OPTIONS_RAP = 8, t.SUBSCRIBE_OPTIONS_QOS = [0, 1, 2], t.UNSUBSCRIBE_HEADER = h("unsubscribe"), t.ACKS = { unsuback: h("unsuback"), puback: h("puback"), pubcomp: h("pubcomp"), pubrel: h("pubrel"), pubrec: h("pubrec") }, t.SUBACK_HEADER = l.from([t.codes.suback << t.CMD_SHIFT]), t.VERSION3 = l.from([3]), t.VERSION4 = l.from([4]), t.VERSION5 = l.from([5]), t.VERSION131 = l.from([131]), t.VERSION132 = l.from([132]), t.QOS = [0, 1, 2].map((o) => l.from([o])), t.EMPTY = { pingreq: l.from([t.codes.pingreq << 4, 0]), pingresp: l.from([t.codes.pingresp << 4, 0]), disconnect: l.from([t.codes.disconnect << 4, 0]) }, t.MQTT5_PUBACK_PUBREC_CODES = { 0: "Success", 16: "No matching subscribers", 128: "Unspecified error", 131: "Implementation specific error", 135: "Not authorized", 144: "Topic Name invalid", 145: "Packet identifier in use", 151: "Quota exceeded", 153: "Payload format invalid" }, t.MQTT5_PUBREL_PUBCOMP_CODES = { 0: "Success", 146: "Packet Identifier not found" }, t.MQTT5_SUBACK_CODES = { 0: "Granted QoS 0", 1: "Granted QoS 1", 2: "Granted QoS 2", 128: "Unspecified error", 131: "Implementation specific error", 135: "Not authorized", 143: "Topic Filter invalid", 145: "Packet Identifier in use", 151: "Quota exceeded", 158: "Shared Subscriptions not supported", 161: "Subscription Identifiers not supported", 162: "Wildcard Subscriptions not supported" }, t.MQTT5_UNSUBACK_CODES = { 0: "Success", 17: "No subscription existed", 128: "Unspecified error", 131: "Implementation specific error", 135: "Not authorized", 143: "Topic Filter invalid", 145: "Packet Identifier in use" }, t.MQTT5_DISCONNECT_CODES = { 0: "Normal disconnection", 4: "Disconnect with Will Message", 128: "Unspecified error", 129: "Malformed Packet", 130: "Protocol Error", 131: "Implementation specific error", 135: "Not authorized", 137: "Server busy", 139: "Server shutting down", 141: "Keep Alive timeout", 142: "Session taken over", 143: "Topic Filter invalid", 144: "Topic Name invalid", 147: "Receive Maximum exceeded", 148: "Topic Alias invalid", 149: "Packet too large", 150: "Message rate too high", 151: "Quota exceeded", 152: "Administrative action", 153: "Payload format invalid", 154: "Retain not supported", 155: "QoS not supported", 156: "Use another server", 157: "Server moved", 158: "Shared Subscriptions not supported", 159: "Connection rate exceeded", 160: "Maximum connect time", 161: "Subscription Identifiers not supported", 162: "Wildcard Subscriptions not supported" }, t.MQTT5_AUTH_CODES = { 0: "Success", 24: "Continue authentication", 25: "Re-authenticate" };
}), Zl = we((e, n) => {
  he(), ue(), le();
  var t = 1e3, l = t * 60, h = l * 60, o = h * 24, r = o * 7, s = o * 365.25;
  n.exports = function(g, b) {
    b = b || {};
    var m = typeof g;
    if (m === "string" && g.length > 0)
      return i(g);
    if (m === "number" && isFinite(g))
      return b.long ? c(g) : a(g);
    throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(g));
  };
  function i(g) {
    if (g = String(g), !(g.length > 100)) {
      var b = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(g);
      if (b) {
        var m = parseFloat(b[1]), y = (b[2] || "ms").toLowerCase();
        switch (y) {
          case "years":
          case "year":
          case "yrs":
          case "yr":
          case "y":
            return m * s;
          case "weeks":
          case "week":
          case "w":
            return m * r;
          case "days":
          case "day":
          case "d":
            return m * o;
          case "hours":
          case "hour":
          case "hrs":
          case "hr":
          case "h":
            return m * h;
          case "minutes":
          case "minute":
          case "mins":
          case "min":
          case "m":
            return m * l;
          case "seconds":
          case "second":
          case "secs":
          case "sec":
          case "s":
            return m * t;
          case "milliseconds":
          case "millisecond":
          case "msecs":
          case "msec":
          case "ms":
            return m;
          default:
            return;
        }
      }
    }
  }
  function a(g) {
    var b = Math.abs(g);
    return b >= o ? Math.round(g / o) + "d" : b >= h ? Math.round(g / h) + "h" : b >= l ? Math.round(g / l) + "m" : b >= t ? Math.round(g / t) + "s" : g + "ms";
  }
  function c(g) {
    var b = Math.abs(g);
    return b >= o ? d(g, b, o, "day") : b >= h ? d(g, b, h, "hour") : b >= l ? d(g, b, l, "minute") : b >= t ? d(g, b, t, "second") : g + " ms";
  }
  function d(g, b, m, y) {
    var T = b >= m * 1.5;
    return Math.round(g / m) + " " + y + (T ? "s" : "");
  }
}), eu = we((e, n) => {
  he(), ue(), le();
  function t(l) {
    o.debug = o, o.default = o, o.coerce = d, o.disable = i, o.enable = s, o.enabled = a, o.humanize = Zl(), o.destroy = g, Object.keys(l).forEach((b) => {
      o[b] = l[b];
    }), o.names = [], o.skips = [], o.formatters = {};
    function h(b) {
      let m = 0;
      for (let y = 0; y < b.length; y++)
        m = (m << 5) - m + b.charCodeAt(y), m |= 0;
      return o.colors[Math.abs(m) % o.colors.length];
    }
    o.selectColor = h;
    function o(b) {
      let m, y = null, T, U;
      function S(...R) {
        if (!S.enabled)
          return;
        let F = S, W = Number(/* @__PURE__ */ new Date()), C = W - (m || W);
        F.diff = C, F.prev = m, F.curr = W, m = W, R[0] = o.coerce(R[0]), typeof R[0] != "string" && R.unshift("%O");
        let O = 0;
        R[0] = R[0].replace(/%([a-zA-Z%])/g, (M, $) => {
          if (M === "%%")
            return "%";
          O++;
          let X = o.formatters[$];
          if (typeof X == "function") {
            let te = R[O];
            M = X.call(F, te), R.splice(O, 1), O--;
          }
          return M;
        }), o.formatArgs.call(F, R), (F.log || o.log).apply(F, R);
      }
      return S.namespace = b, S.useColors = o.useColors(), S.color = o.selectColor(b), S.extend = r, S.destroy = o.destroy, Object.defineProperty(S, "enabled", { enumerable: !0, configurable: !1, get: () => y !== null ? y : (T !== o.namespaces && (T = o.namespaces, U = o.enabled(b)), U), set: (R) => {
        y = R;
      } }), typeof o.init == "function" && o.init(S), S;
    }
    function r(b, m) {
      let y = o(this.namespace + (typeof m > "u" ? ":" : m) + b);
      return y.log = this.log, y;
    }
    function s(b) {
      o.save(b), o.namespaces = b, o.names = [], o.skips = [];
      let m, y = (typeof b == "string" ? b : "").split(/[\s,]+/), T = y.length;
      for (m = 0; m < T; m++)
        y[m] && (b = y[m].replace(/\*/g, ".*?"), b[0] === "-" ? o.skips.push(new RegExp("^" + b.slice(1) + "$")) : o.names.push(new RegExp("^" + b + "$")));
    }
    function i() {
      let b = [...o.names.map(c), ...o.skips.map(c).map((m) => "-" + m)].join(",");
      return o.enable(""), b;
    }
    function a(b) {
      if (b[b.length - 1] === "*")
        return !0;
      let m, y;
      for (m = 0, y = o.skips.length; m < y; m++)
        if (o.skips[m].test(b))
          return !1;
      for (m = 0, y = o.names.length; m < y; m++)
        if (o.names[m].test(b))
          return !0;
      return !1;
    }
    function c(b) {
      return b.toString().substring(2, b.toString().length - 2).replace(/\.\*\?$/, "*");
    }
    function d(b) {
      return b instanceof Error ? b.stack || b.message : b;
    }
    function g() {
      console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
    }
    return o.enable(o.load()), o;
  }
  n.exports = t;
}), Vt = we((e, n) => {
  he(), ue(), le(), e.formatArgs = l, e.save = h, e.load = o, e.useColors = t, e.storage = r(), e.destroy = /* @__PURE__ */ (() => {
    let i = !1;
    return () => {
      i || (i = !0, console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."));
    };
  })(), e.colors = ["#0000CC", "#0000FF", "#0033CC", "#0033FF", "#0066CC", "#0066FF", "#0099CC", "#0099FF", "#00CC00", "#00CC33", "#00CC66", "#00CC99", "#00CCCC", "#00CCFF", "#3300CC", "#3300FF", "#3333CC", "#3333FF", "#3366CC", "#3366FF", "#3399CC", "#3399FF", "#33CC00", "#33CC33", "#33CC66", "#33CC99", "#33CCCC", "#33CCFF", "#6600CC", "#6600FF", "#6633CC", "#6633FF", "#66CC00", "#66CC33", "#9900CC", "#9900FF", "#9933CC", "#9933FF", "#99CC00", "#99CC33", "#CC0000", "#CC0033", "#CC0066", "#CC0099", "#CC00CC", "#CC00FF", "#CC3300", "#CC3333", "#CC3366", "#CC3399", "#CC33CC", "#CC33FF", "#CC6600", "#CC6633", "#CC9900", "#CC9933", "#CCCC00", "#CCCC33", "#FF0000", "#FF0033", "#FF0066", "#FF0099", "#FF00CC", "#FF00FF", "#FF3300", "#FF3333", "#FF3366", "#FF3399", "#FF33CC", "#FF33FF", "#FF6600", "#FF6633", "#FF9900", "#FF9933", "#FFCC00", "#FFCC33"];
  function t() {
    return typeof window < "u" && window.process && (window.process.type === "renderer" || window.process.__nwjs) ? !0 : typeof wt < "u" && wt.userAgent && wt.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/) ? !1 : typeof document < "u" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || typeof window < "u" && window.console && (window.console.firebug || window.console.exception && window.console.table) || typeof wt < "u" && wt.userAgent && wt.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || typeof wt < "u" && wt.userAgent && wt.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
  }
  function l(i) {
    if (i[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + i[0] + (this.useColors ? "%c " : " ") + "+" + n.exports.humanize(this.diff), !this.useColors)
      return;
    let a = "color: " + this.color;
    i.splice(1, 0, a, "color: inherit");
    let c = 0, d = 0;
    i[0].replace(/%[a-zA-Z%]/g, (g) => {
      g !== "%%" && (c++, g === "%c" && (d = c));
    }), i.splice(d, 0, a);
  }
  e.log = console.debug || console.log || (() => {
  });
  function h(i) {
    try {
      i ? e.storage.setItem("debug", i) : e.storage.removeItem("debug");
    } catch {
    }
  }
  function o() {
    let i;
    try {
      i = e.storage.getItem("debug");
    } catch {
    }
    return !i && typeof qe < "u" && "env" in qe && (i = qe.env.DEBUG), i;
  }
  function r() {
    try {
      return localStorage;
    } catch {
    }
  }
  n.exports = eu()(e);
  var { formatters: s } = n.exports;
  s.j = function(i) {
    try {
      return JSON.stringify(i);
    } catch (a) {
      return "[UnexpectedJSONParseError]: " + a.message;
    }
  };
}), tu = we((e, n) => {
  he(), ue(), le();
  var t = Jl(), { EventEmitter: l } = (Ar(), $e(br)), h = Xl(), o = Ys(), r = Vt()("mqtt-packet:parser"), s = class Wn extends l {
    constructor() {
      super(), this.parser = this.constructor.parser;
    }
    static parser(a) {
      return this instanceof Wn ? (this.settings = a || {}, this._states = ["_parseHeader", "_parseLength", "_parsePayload", "_newPacket"], this._resetState(), this) : new Wn().parser(a);
    }
    _resetState() {
      r("_resetState: resetting packet, error, _list, and _stateCounter"), this.packet = new h(), this.error = null, this._list = t(), this._stateCounter = 0;
    }
    parse(a) {
      for (this.error && this._resetState(), this._list.append(a), r("parse: current state: %s", this._states[this._stateCounter]); (this.packet.length !== -1 || this._list.length > 0) && this[this._states[this._stateCounter]]() && !this.error; )
        this._stateCounter++, r("parse: state complete. _stateCounter is now: %d", this._stateCounter), r("parse: packet.length: %d, buffer list length: %d", this.packet.length, this._list.length), this._stateCounter >= this._states.length && (this._stateCounter = 0);
      return r("parse: exited while loop. packet: %d, buffer list length: %d", this.packet.length, this._list.length), this._list.length;
    }
    _parseHeader() {
      let a = this._list.readUInt8(0), c = a >> o.CMD_SHIFT;
      this.packet.cmd = o.types[c];
      let d = a & 15, g = o.requiredHeaderFlags[c];
      return g != null && d !== g ? this._emitError(new Error(o.requiredHeaderFlagsErrors[c])) : (this.packet.retain = (a & o.RETAIN_MASK) !== 0, this.packet.qos = a >> o.QOS_SHIFT & o.QOS_MASK, this.packet.qos > 2 ? this._emitError(new Error("Packet must not have both QoS bits set to 1")) : (this.packet.dup = (a & o.DUP_MASK) !== 0, r("_parseHeader: packet: %o", this.packet), this._list.consume(1), !0));
    }
    _parseLength() {
      let a = this._parseVarByteNum(!0);
      return a && (this.packet.length = a.value, this._list.consume(a.bytes)), r("_parseLength %d", a.value), !!a;
    }
    _parsePayload() {
      r("_parsePayload: payload %O", this._list);
      let a = !1;
      if (this.packet.length === 0 || this._list.length >= this.packet.length) {
        switch (this._pos = 0, this.packet.cmd) {
          case "connect":
            this._parseConnect();
            break;
          case "connack":
            this._parseConnack();
            break;
          case "publish":
            this._parsePublish();
            break;
          case "puback":
          case "pubrec":
          case "pubrel":
          case "pubcomp":
            this._parseConfirmation();
            break;
          case "subscribe":
            this._parseSubscribe();
            break;
          case "suback":
            this._parseSuback();
            break;
          case "unsubscribe":
            this._parseUnsubscribe();
            break;
          case "unsuback":
            this._parseUnsuback();
            break;
          case "pingreq":
          case "pingresp":
            break;
          case "disconnect":
            this._parseDisconnect();
            break;
          case "auth":
            this._parseAuth();
            break;
          default:
            this._emitError(new Error("Not supported"));
        }
        a = !0;
      }
      return r("_parsePayload complete result: %s", a), a;
    }
    _parseConnect() {
      r("_parseConnect");
      let a, c, d, g, b = {}, m = this.packet, y = this._parseString();
      if (y === null)
        return this._emitError(new Error("Cannot parse protocolId"));
      if (y !== "MQTT" && y !== "MQIsdp")
        return this._emitError(new Error("Invalid protocolId"));
      if (m.protocolId = y, this._pos >= this._list.length)
        return this._emitError(new Error("Packet too short"));
      if (m.protocolVersion = this._list.readUInt8(this._pos), m.protocolVersion >= 128 && (m.bridgeMode = !0, m.protocolVersion = m.protocolVersion - 128), m.protocolVersion !== 3 && m.protocolVersion !== 4 && m.protocolVersion !== 5)
        return this._emitError(new Error("Invalid protocol version"));
      if (this._pos++, this._pos >= this._list.length)
        return this._emitError(new Error("Packet too short"));
      if (this._list.readUInt8(this._pos) & 1)
        return this._emitError(new Error("Connect flag bit 0 must be 0, but got 1"));
      b.username = this._list.readUInt8(this._pos) & o.USERNAME_MASK, b.password = this._list.readUInt8(this._pos) & o.PASSWORD_MASK, b.will = this._list.readUInt8(this._pos) & o.WILL_FLAG_MASK;
      let T = !!(this._list.readUInt8(this._pos) & o.WILL_RETAIN_MASK), U = (this._list.readUInt8(this._pos) & o.WILL_QOS_MASK) >> o.WILL_QOS_SHIFT;
      if (b.will)
        m.will = {}, m.will.retain = T, m.will.qos = U;
      else {
        if (T)
          return this._emitError(new Error("Will Retain Flag must be set to zero when Will Flag is set to 0"));
        if (U)
          return this._emitError(new Error("Will QoS must be set to zero when Will Flag is set to 0"));
      }
      if (m.clean = (this._list.readUInt8(this._pos) & o.CLEAN_SESSION_MASK) !== 0, this._pos++, m.keepalive = this._parseNum(), m.keepalive === -1)
        return this._emitError(new Error("Packet too short"));
      if (m.protocolVersion === 5) {
        let R = this._parseProperties();
        Object.getOwnPropertyNames(R).length && (m.properties = R);
      }
      let S = this._parseString();
      if (S === null)
        return this._emitError(new Error("Packet too short"));
      if (m.clientId = S, r("_parseConnect: packet.clientId: %s", m.clientId), b.will) {
        if (m.protocolVersion === 5) {
          let R = this._parseProperties();
          Object.getOwnPropertyNames(R).length && (m.will.properties = R);
        }
        if (a = this._parseString(), a === null)
          return this._emitError(new Error("Cannot parse will topic"));
        if (m.will.topic = a, r("_parseConnect: packet.will.topic: %s", m.will.topic), c = this._parseBuffer(), c === null)
          return this._emitError(new Error("Cannot parse will payload"));
        m.will.payload = c, r("_parseConnect: packet.will.paylaod: %s", m.will.payload);
      }
      if (b.username) {
        if (g = this._parseString(), g === null)
          return this._emitError(new Error("Cannot parse username"));
        m.username = g, r("_parseConnect: packet.username: %s", m.username);
      }
      if (b.password) {
        if (d = this._parseBuffer(), d === null)
          return this._emitError(new Error("Cannot parse password"));
        m.password = d;
      }
      return this.settings = m, r("_parseConnect: complete"), m;
    }
    _parseConnack() {
      r("_parseConnack");
      let a = this.packet;
      if (this._list.length < 1)
        return null;
      let c = this._list.readUInt8(this._pos++);
      if (c > 1)
        return this._emitError(new Error("Invalid connack flags, bits 7-1 must be set to 0"));
      if (a.sessionPresent = !!(c & o.SESSIONPRESENT_MASK), this.settings.protocolVersion === 5)
        this._list.length >= 2 ? a.reasonCode = this._list.readUInt8(this._pos++) : a.reasonCode = 0;
      else {
        if (this._list.length < 2)
          return null;
        a.returnCode = this._list.readUInt8(this._pos++);
      }
      if (a.returnCode === -1 || a.reasonCode === -1)
        return this._emitError(new Error("Cannot parse return code"));
      if (this.settings.protocolVersion === 5) {
        let d = this._parseProperties();
        Object.getOwnPropertyNames(d).length && (a.properties = d);
      }
      r("_parseConnack: complete");
    }
    _parsePublish() {
      r("_parsePublish");
      let a = this.packet;
      if (a.topic = this._parseString(), a.topic === null)
        return this._emitError(new Error("Cannot parse topic"));
      if (!(a.qos > 0 && !this._parseMessageId())) {
        if (this.settings.protocolVersion === 5) {
          let c = this._parseProperties();
          Object.getOwnPropertyNames(c).length && (a.properties = c);
        }
        a.payload = this._list.slice(this._pos, a.length), r("_parsePublish: payload from buffer list: %o", a.payload);
      }
    }
    _parseSubscribe() {
      r("_parseSubscribe");
      let a = this.packet, c, d, g, b, m, y, T;
      if (a.subscriptions = [], !!this._parseMessageId()) {
        if (this.settings.protocolVersion === 5) {
          let U = this._parseProperties();
          Object.getOwnPropertyNames(U).length && (a.properties = U);
        }
        if (a.length <= 0)
          return this._emitError(new Error("Malformed subscribe, no payload specified"));
        for (; this._pos < a.length; ) {
          if (c = this._parseString(), c === null)
            return this._emitError(new Error("Cannot parse topic"));
          if (this._pos >= a.length)
            return this._emitError(new Error("Malformed Subscribe Payload"));
          if (d = this._parseByte(), this.settings.protocolVersion === 5) {
            if (d & 192)
              return this._emitError(new Error("Invalid subscribe topic flag bits, bits 7-6 must be 0"));
          } else if (d & 252)
            return this._emitError(new Error("Invalid subscribe topic flag bits, bits 7-2 must be 0"));
          if (g = d & o.SUBSCRIBE_OPTIONS_QOS_MASK, g > 2)
            return this._emitError(new Error("Invalid subscribe QoS, must be <= 2"));
          if (y = (d >> o.SUBSCRIBE_OPTIONS_NL_SHIFT & o.SUBSCRIBE_OPTIONS_NL_MASK) !== 0, m = (d >> o.SUBSCRIBE_OPTIONS_RAP_SHIFT & o.SUBSCRIBE_OPTIONS_RAP_MASK) !== 0, b = d >> o.SUBSCRIBE_OPTIONS_RH_SHIFT & o.SUBSCRIBE_OPTIONS_RH_MASK, b > 2)
            return this._emitError(new Error("Invalid retain handling, must be <= 2"));
          T = { topic: c, qos: g }, this.settings.protocolVersion === 5 ? (T.nl = y, T.rap = m, T.rh = b) : this.settings.bridgeMode && (T.rh = 0, T.rap = !0, T.nl = !0), r("_parseSubscribe: push subscription `%s` to subscription", T), a.subscriptions.push(T);
        }
      }
    }
    _parseSuback() {
      r("_parseSuback");
      let a = this.packet;
      if (this.packet.granted = [], !!this._parseMessageId()) {
        if (this.settings.protocolVersion === 5) {
          let c = this._parseProperties();
          Object.getOwnPropertyNames(c).length && (a.properties = c);
        }
        if (a.length <= 0)
          return this._emitError(new Error("Malformed suback, no payload specified"));
        for (; this._pos < this.packet.length; ) {
          let c = this._list.readUInt8(this._pos++);
          if (this.settings.protocolVersion === 5) {
            if (!o.MQTT5_SUBACK_CODES[c])
              return this._emitError(new Error("Invalid suback code"));
          } else if (c > 2 && c !== 128)
            return this._emitError(new Error("Invalid suback QoS, must be 0, 1, 2 or 128"));
          this.packet.granted.push(c);
        }
      }
    }
    _parseUnsubscribe() {
      r("_parseUnsubscribe");
      let a = this.packet;
      if (a.unsubscriptions = [], !!this._parseMessageId()) {
        if (this.settings.protocolVersion === 5) {
          let c = this._parseProperties();
          Object.getOwnPropertyNames(c).length && (a.properties = c);
        }
        if (a.length <= 0)
          return this._emitError(new Error("Malformed unsubscribe, no payload specified"));
        for (; this._pos < a.length; ) {
          let c = this._parseString();
          if (c === null)
            return this._emitError(new Error("Cannot parse topic"));
          r("_parseUnsubscribe: push topic `%s` to unsubscriptions", c), a.unsubscriptions.push(c);
        }
      }
    }
    _parseUnsuback() {
      r("_parseUnsuback");
      let a = this.packet;
      if (!this._parseMessageId())
        return this._emitError(new Error("Cannot parse messageId"));
      if ((this.settings.protocolVersion === 3 || this.settings.protocolVersion === 4) && a.length !== 2)
        return this._emitError(new Error("Malformed unsuback, payload length must be 2"));
      if (a.length <= 0)
        return this._emitError(new Error("Malformed unsuback, no payload specified"));
      if (this.settings.protocolVersion === 5) {
        let c = this._parseProperties();
        for (Object.getOwnPropertyNames(c).length && (a.properties = c), a.granted = []; this._pos < this.packet.length; ) {
          let d = this._list.readUInt8(this._pos++);
          if (!o.MQTT5_UNSUBACK_CODES[d])
            return this._emitError(new Error("Invalid unsuback code"));
          this.packet.granted.push(d);
        }
      }
    }
    _parseConfirmation() {
      r("_parseConfirmation: packet.cmd: `%s`", this.packet.cmd);
      let a = this.packet;
      if (this._parseMessageId(), this.settings.protocolVersion === 5) {
        if (a.length > 2) {
          switch (a.reasonCode = this._parseByte(), this.packet.cmd) {
            case "puback":
            case "pubrec":
              if (!o.MQTT5_PUBACK_PUBREC_CODES[a.reasonCode])
                return this._emitError(new Error("Invalid " + this.packet.cmd + " reason code"));
              break;
            case "pubrel":
            case "pubcomp":
              if (!o.MQTT5_PUBREL_PUBCOMP_CODES[a.reasonCode])
                return this._emitError(new Error("Invalid " + this.packet.cmd + " reason code"));
              break;
          }
          r("_parseConfirmation: packet.reasonCode `%d`", a.reasonCode);
        } else
          a.reasonCode = 0;
        if (a.length > 3) {
          let c = this._parseProperties();
          Object.getOwnPropertyNames(c).length && (a.properties = c);
        }
      }
      return !0;
    }
    _parseDisconnect() {
      let a = this.packet;
      if (r("_parseDisconnect"), this.settings.protocolVersion === 5) {
        this._list.length > 0 ? (a.reasonCode = this._parseByte(), o.MQTT5_DISCONNECT_CODES[a.reasonCode] || this._emitError(new Error("Invalid disconnect reason code"))) : a.reasonCode = 0;
        let c = this._parseProperties();
        Object.getOwnPropertyNames(c).length && (a.properties = c);
      }
      return r("_parseDisconnect result: true"), !0;
    }
    _parseAuth() {
      r("_parseAuth");
      let a = this.packet;
      if (this.settings.protocolVersion !== 5)
        return this._emitError(new Error("Not supported auth packet for this version MQTT"));
      if (a.reasonCode = this._parseByte(), !o.MQTT5_AUTH_CODES[a.reasonCode])
        return this._emitError(new Error("Invalid auth reason code"));
      let c = this._parseProperties();
      return Object.getOwnPropertyNames(c).length && (a.properties = c), r("_parseAuth: result: true"), !0;
    }
    _parseMessageId() {
      let a = this.packet;
      return a.messageId = this._parseNum(), a.messageId === null ? (this._emitError(new Error("Cannot parse messageId")), !1) : (r("_parseMessageId: packet.messageId %d", a.messageId), !0);
    }
    _parseString(a) {
      let c = this._parseNum(), d = c + this._pos;
      if (c === -1 || d > this._list.length || d > this.packet.length)
        return null;
      let g = this._list.toString("utf8", this._pos, d);
      return this._pos += c, r("_parseString: result: %s", g), g;
    }
    _parseStringPair() {
      return r("_parseStringPair"), { name: this._parseString(), value: this._parseString() };
    }
    _parseBuffer() {
      let a = this._parseNum(), c = a + this._pos;
      if (a === -1 || c > this._list.length || c > this.packet.length)
        return null;
      let d = this._list.slice(this._pos, c);
      return this._pos += a, r("_parseBuffer: result: %o", d), d;
    }
    _parseNum() {
      if (this._list.length - this._pos < 2)
        return -1;
      let a = this._list.readUInt16BE(this._pos);
      return this._pos += 2, r("_parseNum: result: %s", a), a;
    }
    _parse4ByteNum() {
      if (this._list.length - this._pos < 4)
        return -1;
      let a = this._list.readUInt32BE(this._pos);
      return this._pos += 4, r("_parse4ByteNum: result: %s", a), a;
    }
    _parseVarByteNum(a) {
      r("_parseVarByteNum");
      let c = 4, d = 0, g = 1, b = 0, m = !1, y, T = this._pos ? this._pos : 0;
      for (; d < c && T + d < this._list.length; ) {
        if (y = this._list.readUInt8(T + d++), b += g * (y & o.VARBYTEINT_MASK), g *= 128, !(y & o.VARBYTEINT_FIN_MASK)) {
          m = !0;
          break;
        }
        if (this._list.length <= d)
          break;
      }
      return !m && d === c && this._list.length >= d && this._emitError(new Error("Invalid variable byte integer")), T && (this._pos += d), m ? a ? m = { bytes: d, value: b } : m = b : m = !1, r("_parseVarByteNum: result: %o", m), m;
    }
    _parseByte() {
      let a;
      return this._pos < this._list.length && (a = this._list.readUInt8(this._pos), this._pos++), r("_parseByte: result: %o", a), a;
    }
    _parseByType(a) {
      switch (r("_parseByType: type: %s", a), a) {
        case "byte":
          return this._parseByte() !== 0;
        case "int8":
          return this._parseByte();
        case "int16":
          return this._parseNum();
        case "int32":
          return this._parse4ByteNum();
        case "var":
          return this._parseVarByteNum();
        case "string":
          return this._parseString();
        case "pair":
          return this._parseStringPair();
        case "binary":
          return this._parseBuffer();
      }
    }
    _parseProperties() {
      r("_parseProperties");
      let a = this._parseVarByteNum(), c = this._pos + a, d = {};
      for (; this._pos < c; ) {
        let g = this._parseByte();
        if (!g)
          return this._emitError(new Error("Cannot parse property code type")), !1;
        let b = o.propertiesCodes[g];
        if (!b)
          return this._emitError(new Error("Unknown property")), !1;
        if (b === "userProperties") {
          d[b] || (d[b] = /* @__PURE__ */ Object.create(null));
          let m = this._parseByType(o.propertiesTypes[b]);
          if (d[b][m.name])
            if (Array.isArray(d[b][m.name]))
              d[b][m.name].push(m.value);
            else {
              let y = d[b][m.name];
              d[b][m.name] = [y], d[b][m.name].push(m.value);
            }
          else
            d[b][m.name] = m.value;
          continue;
        }
        d[b] ? Array.isArray(d[b]) ? d[b].push(this._parseByType(o.propertiesTypes[b])) : (d[b] = [d[b]], d[b].push(this._parseByType(o.propertiesTypes[b]))) : d[b] = this._parseByType(o.propertiesTypes[b]);
      }
      return d;
    }
    _newPacket() {
      return r("_newPacket"), this.packet && (this._list.consume(this.packet.length), r("_newPacket: parser emit packet: packet.cmd: %s, packet.payload: %s, packet.length: %d", this.packet.cmd, this.packet.payload, this.packet.length), this.emit("packet", this.packet)), r("_newPacket: new packet"), this.packet = new h(), this._pos = 0, !0;
    }
    _emitError(a) {
      r("_emitError", a), this.error = a, this.emit("error", a);
    }
  };
  n.exports = s;
}), ru = we((e, n) => {
  he(), ue(), le();
  var { Buffer: t } = (ft(), $e(ct)), l = 65536, h = {}, o = t.isBuffer(t.from([1, 2]).subarray(0, 1));
  function r(c) {
    let d = t.allocUnsafe(2);
    return d.writeUInt8(c >> 8, 0), d.writeUInt8(c & 255, 1), d;
  }
  function s() {
    for (let c = 0; c < l; c++)
      h[c] = r(c);
  }
  function i(c) {
    let d = 0, g = 0, b = t.allocUnsafe(4);
    do
      d = c % 128 | 0, c = c / 128 | 0, c > 0 && (d = d | 128), b.writeUInt8(d, g++);
    while (c > 0 && g < 4);
    return c > 0 && (g = 0), o ? b.subarray(0, g) : b.slice(0, g);
  }
  function a(c) {
    let d = t.allocUnsafe(4);
    return d.writeUInt32BE(c, 0), d;
  }
  n.exports = { cache: h, generateCache: s, generateNumber: r, genBufVariableByteInt: i, generate4ByteBuffer: a };
}), iu = we((e, n) => {
  he(), ue(), le(), typeof qe > "u" || !qe.version || qe.version.indexOf("v0.") === 0 || qe.version.indexOf("v1.") === 0 && qe.version.indexOf("v1.8.") !== 0 ? n.exports = { nextTick: t } : n.exports = qe;
  function t(l, h, o, r) {
    if (typeof l != "function")
      throw new TypeError('"callback" argument must be a function');
    var s = arguments.length, i, a;
    switch (s) {
      case 0:
      case 1:
        return qe.nextTick(l);
      case 2:
        return qe.nextTick(function() {
          l.call(null, h);
        });
      case 3:
        return qe.nextTick(function() {
          l.call(null, h, o);
        });
      case 4:
        return qe.nextTick(function() {
          l.call(null, h, o, r);
        });
      default:
        for (i = new Array(s - 1), a = 0; a < i.length; )
          i[a++] = arguments[a];
        return qe.nextTick(function() {
          l.apply(null, i);
        });
    }
  }
}), Qs = we((e, n) => {
  he(), ue(), le();
  var t = Ys(), { Buffer: l } = (ft(), $e(ct)), h = l.allocUnsafe(0), o = l.from([0]), r = ru(), s = iu().nextTick, i = Vt()("mqtt-packet:writeToStream"), a = r.cache, c = r.generateNumber, d = r.generateCache, g = r.genBufVariableByteInt, b = r.generate4ByteBuffer, m = ne, y = !0;
  function T(B, _, Y) {
    switch (i("generate called"), _.cork && (_.cork(), s(U, _)), y && (y = !1, d()), i("generate: packet.cmd: %s", B.cmd), B.cmd) {
      case "connect":
        return S(B, _);
      case "connack":
        return R(B, _, Y);
      case "publish":
        return F(B, _, Y);
      case "puback":
      case "pubrec":
      case "pubrel":
      case "pubcomp":
        return W(B, _, Y);
      case "subscribe":
        return C(B, _, Y);
      case "suback":
        return O(B, _, Y);
      case "unsubscribe":
        return M(B, _, Y);
      case "unsuback":
        return $(B, _, Y);
      case "pingreq":
      case "pingresp":
        return X(B, _);
      case "disconnect":
        return te(B, _, Y);
      case "auth":
        return E(B, _, Y);
      default:
        return _.destroy(new Error("Unknown command")), !1;
    }
  }
  Object.defineProperty(T, "cacheNumbers", { get() {
    return m === ne;
  }, set(B) {
    B ? ((!a || Object.keys(a).length === 0) && (y = !0), m = ne) : (y = !1, m = V);
  } });
  function U(B) {
    B.uncork();
  }
  function S(B, _, Y) {
    let se = B || {}, ee = se.protocolId || "MQTT", J = se.protocolVersion || 4, ce = se.will, pe = se.clean, k = se.keepalive || 0, N = se.clientId || "", D = se.username, re = se.password, G = se.properties;
    pe === void 0 && (pe = !0);
    let j = 0;
    if (!ee || typeof ee != "string" && !l.isBuffer(ee))
      return _.destroy(new Error("Invalid protocolId")), !1;
    if (j += ee.length + 2, J !== 3 && J !== 4 && J !== 5)
      return _.destroy(new Error("Invalid protocol version")), !1;
    if (j += 1, (typeof N == "string" || l.isBuffer(N)) && (N || J >= 4) && (N || pe))
      j += l.byteLength(N) + 2;
    else {
      if (J < 4)
        return _.destroy(new Error("clientId must be supplied before 3.1.1")), !1;
      if (pe * 1 === 0)
        return _.destroy(new Error("clientId must be given if cleanSession set to 0")), !1;
    }
    if (typeof k != "number" || k < 0 || k > 65535 || k % 1 !== 0)
      return _.destroy(new Error("Invalid keepalive")), !1;
    j += 2, j += 1;
    let K, ye;
    if (J === 5) {
      if (K = Ee(_, G), !K)
        return !1;
      j += K.length;
    }
    if (ce) {
      if (typeof ce != "object")
        return _.destroy(new Error("Invalid will")), !1;
      if (!ce.topic || typeof ce.topic != "string")
        return _.destroy(new Error("Invalid will topic")), !1;
      if (j += l.byteLength(ce.topic) + 2, j += 2, ce.payload)
        if (ce.payload.length >= 0)
          typeof ce.payload == "string" ? j += l.byteLength(ce.payload) : j += ce.payload.length;
        else
          return _.destroy(new Error("Invalid will payload")), !1;
      if (ye = {}, J === 5) {
        if (ye = Ee(_, ce.properties), !ye)
          return !1;
        j += ye.length;
      }
    }
    let Se = !1;
    if (D != null)
      if (ae(D))
        Se = !0, j += l.byteLength(D) + 2;
      else
        return _.destroy(new Error("Invalid username")), !1;
    if (re != null) {
      if (!Se)
        return _.destroy(new Error("Username is required to use password")), !1;
      if (ae(re))
        j += Ae(re) + 2;
      else
        return _.destroy(new Error("Invalid password")), !1;
    }
    _.write(t.CONNECT_HEADER), Z(_, j), ie(_, ee), se.bridgeMode && (J += 128), _.write(J === 131 ? t.VERSION131 : J === 132 ? t.VERSION132 : J === 4 ? t.VERSION4 : J === 5 ? t.VERSION5 : t.VERSION3);
    let ke = 0;
    return ke |= D != null ? t.USERNAME_MASK : 0, ke |= re != null ? t.PASSWORD_MASK : 0, ke |= ce && ce.retain ? t.WILL_RETAIN_MASK : 0, ke |= ce && ce.qos ? ce.qos << t.WILL_QOS_SHIFT : 0, ke |= ce ? t.WILL_FLAG_MASK : 0, ke |= pe ? t.CLEAN_SESSION_MASK : 0, _.write(l.from([ke])), m(_, k), J === 5 && K.write(), ie(_, N), ce && (J === 5 && ye.write(), z(_, ce.topic), ie(_, ce.payload)), D != null && ie(_, D), re != null && ie(_, re), !0;
  }
  function R(B, _, Y) {
    let se = Y ? Y.protocolVersion : 4, ee = B || {}, J = se === 5 ? ee.reasonCode : ee.returnCode, ce = ee.properties, pe = 2;
    if (typeof J != "number")
      return _.destroy(new Error("Invalid return code")), !1;
    let k = null;
    if (se === 5) {
      if (k = Ee(_, ce), !k)
        return !1;
      pe += k.length;
    }
    return _.write(t.CONNACK_HEADER), Z(_, pe), _.write(ee.sessionPresent ? t.SESSIONPRESENT_HEADER : o), _.write(l.from([J])), k == null || k.write(), !0;
  }
  function F(B, _, Y) {
    i("publish: packet: %o", B);
    let se = Y ? Y.protocolVersion : 4, ee = B || {}, J = ee.qos || 0, ce = ee.retain ? t.RETAIN_MASK : 0, pe = ee.topic, k = ee.payload || h, N = ee.messageId, D = ee.properties, re = 0;
    if (typeof pe == "string")
      re += l.byteLength(pe) + 2;
    else if (l.isBuffer(pe))
      re += pe.length + 2;
    else
      return _.destroy(new Error("Invalid topic")), !1;
    if (l.isBuffer(k) ? re += k.length : re += l.byteLength(k), J && typeof N != "number")
      return _.destroy(new Error("Invalid messageId")), !1;
    J && (re += 2);
    let G = null;
    if (se === 5) {
      if (G = Ee(_, D), !G)
        return !1;
      re += G.length;
    }
    return _.write(t.PUBLISH_HEADER[J][ee.dup ? 1 : 0][ce ? 1 : 0]), Z(_, re), m(_, Ae(pe)), _.write(pe), J > 0 && m(_, N), G == null || G.write(), i("publish: payload: %o", k), _.write(k);
  }
  function W(B, _, Y) {
    let se = Y ? Y.protocolVersion : 4, ee = B || {}, J = ee.cmd || "puback", ce = ee.messageId, pe = ee.dup && J === "pubrel" ? t.DUP_MASK : 0, k = 0, N = ee.reasonCode, D = ee.properties, re = se === 5 ? 3 : 2;
    if (J === "pubrel" && (k = 1), typeof ce != "number")
      return _.destroy(new Error("Invalid messageId")), !1;
    let G = null;
    if (se === 5 && typeof D == "object") {
      if (G = A(_, D, Y, re), !G)
        return !1;
      re += G.length;
    }
    return _.write(t.ACKS[J][k][pe][0]), re === 3 && (re += N !== 0 ? 1 : -1), Z(_, re), m(_, ce), se === 5 && re !== 2 && _.write(l.from([N])), G !== null ? G.write() : re === 4 && _.write(l.from([0])), !0;
  }
  function C(B, _, Y) {
    i("subscribe: packet: ");
    let se = Y ? Y.protocolVersion : 4, ee = B || {}, J = ee.dup ? t.DUP_MASK : 0, ce = ee.messageId, pe = ee.subscriptions, k = ee.properties, N = 0;
    if (typeof ce != "number")
      return _.destroy(new Error("Invalid messageId")), !1;
    N += 2;
    let D = null;
    if (se === 5) {
      if (D = Ee(_, k), !D)
        return !1;
      N += D.length;
    }
    if (typeof pe == "object" && pe.length)
      for (let G = 0; G < pe.length; G += 1) {
        let j = pe[G].topic, K = pe[G].qos;
        if (typeof j != "string")
          return _.destroy(new Error("Invalid subscriptions - invalid topic")), !1;
        if (typeof K != "number")
          return _.destroy(new Error("Invalid subscriptions - invalid qos")), !1;
        if (se === 5) {
          if (typeof (pe[G].nl || !1) != "boolean")
            return _.destroy(new Error("Invalid subscriptions - invalid No Local")), !1;
          if (typeof (pe[G].rap || !1) != "boolean")
            return _.destroy(new Error("Invalid subscriptions - invalid Retain as Published")), !1;
          let ye = pe[G].rh || 0;
          if (typeof ye != "number" || ye > 2)
            return _.destroy(new Error("Invalid subscriptions - invalid Retain Handling")), !1;
        }
        N += l.byteLength(j) + 2 + 1;
      }
    else
      return _.destroy(new Error("Invalid subscriptions")), !1;
    i("subscribe: writing to stream: %o", t.SUBSCRIBE_HEADER), _.write(t.SUBSCRIBE_HEADER[1][J ? 1 : 0][0]), Z(_, N), m(_, ce), D !== null && D.write();
    let re = !0;
    for (let G of pe) {
      let j = G.topic, K = G.qos, ye = +G.nl, Se = +G.rap, ke = G.rh, Me;
      z(_, j), Me = t.SUBSCRIBE_OPTIONS_QOS[K], se === 5 && (Me |= ye ? t.SUBSCRIBE_OPTIONS_NL : 0, Me |= Se ? t.SUBSCRIBE_OPTIONS_RAP : 0, Me |= ke ? t.SUBSCRIBE_OPTIONS_RH[ke] : 0), re = _.write(l.from([Me]));
    }
    return re;
  }
  function O(B, _, Y) {
    let se = Y ? Y.protocolVersion : 4, ee = B || {}, J = ee.messageId, ce = ee.granted, pe = ee.properties, k = 0;
    if (typeof J != "number")
      return _.destroy(new Error("Invalid messageId")), !1;
    if (k += 2, typeof ce == "object" && ce.length)
      for (let D = 0; D < ce.length; D += 1) {
        if (typeof ce[D] != "number")
          return _.destroy(new Error("Invalid qos vector")), !1;
        k += 1;
      }
    else
      return _.destroy(new Error("Invalid qos vector")), !1;
    let N = null;
    if (se === 5) {
      if (N = A(_, pe, Y, k), !N)
        return !1;
      k += N.length;
    }
    return _.write(t.SUBACK_HEADER), Z(_, k), m(_, J), N !== null && N.write(), _.write(l.from(ce));
  }
  function M(B, _, Y) {
    let se = Y ? Y.protocolVersion : 4, ee = B || {}, J = ee.messageId, ce = ee.dup ? t.DUP_MASK : 0, pe = ee.unsubscriptions, k = ee.properties, N = 0;
    if (typeof J != "number")
      return _.destroy(new Error("Invalid messageId")), !1;
    if (N += 2, typeof pe == "object" && pe.length)
      for (let G = 0; G < pe.length; G += 1) {
        if (typeof pe[G] != "string")
          return _.destroy(new Error("Invalid unsubscriptions")), !1;
        N += l.byteLength(pe[G]) + 2;
      }
    else
      return _.destroy(new Error("Invalid unsubscriptions")), !1;
    let D = null;
    if (se === 5) {
      if (D = Ee(_, k), !D)
        return !1;
      N += D.length;
    }
    _.write(t.UNSUBSCRIBE_HEADER[1][ce ? 1 : 0][0]), Z(_, N), m(_, J), D !== null && D.write();
    let re = !0;
    for (let G = 0; G < pe.length; G++)
      re = z(_, pe[G]);
    return re;
  }
  function $(B, _, Y) {
    let se = Y ? Y.protocolVersion : 4, ee = B || {}, J = ee.messageId, ce = ee.dup ? t.DUP_MASK : 0, pe = ee.granted, k = ee.properties, N = ee.cmd, D = 0, re = 2;
    if (typeof J != "number")
      return _.destroy(new Error("Invalid messageId")), !1;
    if (se === 5)
      if (typeof pe == "object" && pe.length)
        for (let j = 0; j < pe.length; j += 1) {
          if (typeof pe[j] != "number")
            return _.destroy(new Error("Invalid qos vector")), !1;
          re += 1;
        }
      else
        return _.destroy(new Error("Invalid qos vector")), !1;
    let G = null;
    if (se === 5) {
      if (G = A(_, k, Y, re), !G)
        return !1;
      re += G.length;
    }
    return _.write(t.ACKS[N][D][ce][0]), Z(_, re), m(_, J), G !== null && G.write(), se === 5 && _.write(l.from(pe)), !0;
  }
  function X(B, _, Y) {
    return _.write(t.EMPTY[B.cmd]);
  }
  function te(B, _, Y) {
    let se = Y ? Y.protocolVersion : 4, ee = B || {}, J = ee.reasonCode, ce = ee.properties, pe = se === 5 ? 1 : 0, k = null;
    if (se === 5) {
      if (k = A(_, ce, Y, pe), !k)
        return !1;
      pe += k.length;
    }
    return _.write(l.from([t.codes.disconnect << 4])), Z(_, pe), se === 5 && _.write(l.from([J])), k !== null && k.write(), !0;
  }
  function E(B, _, Y) {
    let se = Y ? Y.protocolVersion : 4, ee = B || {}, J = ee.reasonCode, ce = ee.properties, pe = se === 5 ? 1 : 0;
    se !== 5 && _.destroy(new Error("Invalid mqtt version for auth packet"));
    let k = A(_, ce, Y, pe);
    return k ? (pe += k.length, _.write(l.from([t.codes.auth << 4])), Z(_, pe), _.write(l.from([J])), k !== null && k.write(), !0) : !1;
  }
  var q = {};
  function Z(B, _) {
    if (_ > t.VARBYTEINT_MAX)
      return B.destroy(new Error(`Invalid variable byte integer: ${_}`)), !1;
    let Y = q[_];
    return Y || (Y = g(_), _ < 16384 && (q[_] = Y)), i("writeVarByteInt: writing to stream: %o", Y), B.write(Y);
  }
  function z(B, _) {
    let Y = l.byteLength(_);
    return m(B, Y), i("writeString: %s", _), B.write(_, "utf8");
  }
  function be(B, _, Y) {
    z(B, _), z(B, Y);
  }
  function ne(B, _) {
    return i("writeNumberCached: number: %d", _), i("writeNumberCached: %o", a[_]), B.write(a[_]);
  }
  function V(B, _) {
    let Y = c(_);
    return i("writeNumberGenerated: %o", Y), B.write(Y);
  }
  function me(B, _) {
    let Y = b(_);
    return i("write4ByteNumber: %o", Y), B.write(Y);
  }
  function ie(B, _) {
    typeof _ == "string" ? z(B, _) : _ ? (m(B, _.length), B.write(_)) : m(B, 0);
  }
  function Ee(B, _) {
    if (typeof _ != "object" || _.length != null)
      return { length: 1, write() {
        fe(B, {}, 0);
      } };
    let Y = 0;
    function se(ee, J) {
      let ce = t.propertiesTypes[ee], pe = 0;
      switch (ce) {
        case "byte": {
          if (typeof J != "boolean")
            return B.destroy(new Error(`Invalid ${ee}: ${J}`)), !1;
          pe += 2;
          break;
        }
        case "int8": {
          if (typeof J != "number" || J < 0 || J > 255)
            return B.destroy(new Error(`Invalid ${ee}: ${J}`)), !1;
          pe += 2;
          break;
        }
        case "binary": {
          if (J && J === null)
            return B.destroy(new Error(`Invalid ${ee}: ${J}`)), !1;
          pe += 1 + l.byteLength(J) + 2;
          break;
        }
        case "int16": {
          if (typeof J != "number" || J < 0 || J > 65535)
            return B.destroy(new Error(`Invalid ${ee}: ${J}`)), !1;
          pe += 3;
          break;
        }
        case "int32": {
          if (typeof J != "number" || J < 0 || J > 4294967295)
            return B.destroy(new Error(`Invalid ${ee}: ${J}`)), !1;
          pe += 5;
          break;
        }
        case "var": {
          if (typeof J != "number" || J < 0 || J > 268435455)
            return B.destroy(new Error(`Invalid ${ee}: ${J}`)), !1;
          pe += 1 + l.byteLength(g(J));
          break;
        }
        case "string": {
          if (typeof J != "string")
            return B.destroy(new Error(`Invalid ${ee}: ${J}`)), !1;
          pe += 3 + l.byteLength(J.toString());
          break;
        }
        case "pair": {
          if (typeof J != "object")
            return B.destroy(new Error(`Invalid ${ee}: ${J}`)), !1;
          pe += Object.getOwnPropertyNames(J).reduce((k, N) => {
            let D = J[N];
            return Array.isArray(D) ? k += D.reduce((re, G) => (re += 3 + l.byteLength(N.toString()) + 2 + l.byteLength(G.toString()), re), 0) : k += 3 + l.byteLength(N.toString()) + 2 + l.byteLength(J[N].toString()), k;
          }, 0);
          break;
        }
        default:
          return B.destroy(new Error(`Invalid property ${ee}: ${J}`)), !1;
      }
      return pe;
    }
    if (_)
      for (let ee in _) {
        let J = 0, ce = 0, pe = _[ee];
        if (Array.isArray(pe))
          for (let k = 0; k < pe.length; k++) {
            if (ce = se(ee, pe[k]), !ce)
              return !1;
            J += ce;
          }
        else {
          if (ce = se(ee, pe), !ce)
            return !1;
          J = ce;
        }
        if (!J)
          return !1;
        Y += J;
      }
    return { length: l.byteLength(g(Y)) + Y, write() {
      fe(B, _, Y);
    } };
  }
  function A(B, _, Y, se) {
    let ee = ["reasonString", "userProperties"], J = Y && Y.properties && Y.properties.maximumPacketSize ? Y.properties.maximumPacketSize : 0, ce = Ee(B, _);
    if (J)
      for (; se + ce.length > J; ) {
        let pe = ee.shift();
        if (pe && _[pe])
          delete _[pe], ce = Ee(B, _);
        else
          return !1;
      }
    return ce;
  }
  function Q(B, _, Y) {
    switch (t.propertiesTypes[_]) {
      case "byte": {
        B.write(l.from([t.properties[_]])), B.write(l.from([+Y]));
        break;
      }
      case "int8": {
        B.write(l.from([t.properties[_]])), B.write(l.from([Y]));
        break;
      }
      case "binary": {
        B.write(l.from([t.properties[_]])), ie(B, Y);
        break;
      }
      case "int16": {
        B.write(l.from([t.properties[_]])), m(B, Y);
        break;
      }
      case "int32": {
        B.write(l.from([t.properties[_]])), me(B, Y);
        break;
      }
      case "var": {
        B.write(l.from([t.properties[_]])), Z(B, Y);
        break;
      }
      case "string": {
        B.write(l.from([t.properties[_]])), z(B, Y);
        break;
      }
      case "pair": {
        Object.getOwnPropertyNames(Y).forEach((se) => {
          let ee = Y[se];
          Array.isArray(ee) ? ee.forEach((J) => {
            B.write(l.from([t.properties[_]])), be(B, se.toString(), J.toString());
          }) : (B.write(l.from([t.properties[_]])), be(B, se.toString(), ee.toString()));
        });
        break;
      }
      default:
        return B.destroy(new Error(`Invalid property ${_} value: ${Y}`)), !1;
    }
  }
  function fe(B, _, Y) {
    Z(B, Y);
    for (let se in _)
      if (Object.prototype.hasOwnProperty.call(_, se) && _[se] !== null) {
        let ee = _[se];
        if (Array.isArray(ee))
          for (let J = 0; J < ee.length; J++)
            Q(B, se, ee[J]);
        else
          Q(B, se, ee);
      }
  }
  function Ae(B) {
    return B ? B instanceof l ? B.length : l.byteLength(B) : 0;
  }
  function ae(B) {
    return typeof B == "string" || B instanceof l;
  }
  n.exports = T;
}), nu = we((e, n) => {
  he(), ue(), le();
  var t = Qs(), { EventEmitter: l } = (Ar(), $e(br)), { Buffer: h } = (ft(), $e(ct));
  function o(s, i) {
    let a = new r();
    return t(s, a, i), a.concat();
  }
  var r = class extends l {
    constructor() {
      super(), this._array = new Array(20), this._i = 0;
    }
    write(s) {
      return this._array[this._i++] = s, !0;
    }
    concat() {
      let s = 0, i = new Array(this._array.length), a = this._array, c = 0, d;
      for (d = 0; d < a.length && a[d] !== void 0; d++)
        typeof a[d] != "string" ? i[d] = a[d].length : i[d] = h.byteLength(a[d]), s += i[d];
      let g = h.allocUnsafe(s);
      for (d = 0; d < a.length && a[d] !== void 0; d++)
        typeof a[d] != "string" ? (a[d].copy(g, c), c += i[d]) : (g.write(a[d], c), c += i[d]);
      return g;
    }
    destroy(s) {
      s && this.emit("error", s);
    }
  };
  n.exports = o;
}), ou = we((e) => {
  he(), ue(), le(), e.parser = tu().parser, e.generate = nu(), e.writeToStream = Qs();
}), Gs = we((e) => {
  he(), ue(), le(), Object.defineProperty(e, "__esModule", { value: !0 });
  var n = class {
    constructor() {
      this.nextId = Math.max(1, Math.floor(Math.random() * 65535));
    }
    allocate() {
      let t = this.nextId++;
      return this.nextId === 65536 && (this.nextId = 1), t;
    }
    getLastAllocated() {
      return this.nextId === 1 ? 65535 : this.nextId - 1;
    }
    register(t) {
      return !0;
    }
    deallocate(t) {
    }
    clear() {
    }
  };
  e.default = n;
}), su = we((e, n) => {
  he(), ue(), le(), n.exports = l;
  function t(o) {
    return o instanceof ti ? ti.from(o) : new o.constructor(o.buffer.slice(), o.byteOffset, o.length);
  }
  function l(o) {
    if (o = o || {}, o.circles)
      return h(o);
    return o.proto ? i : s;
    function r(a, c) {
      for (var d = Object.keys(a), g = new Array(d.length), b = 0; b < d.length; b++) {
        var m = d[b], y = a[m];
        typeof y != "object" || y === null ? g[m] = y : y instanceof Date ? g[m] = new Date(y) : ArrayBuffer.isView(y) ? g[m] = t(y) : g[m] = c(y);
      }
      return g;
    }
    function s(a) {
      if (typeof a != "object" || a === null)
        return a;
      if (a instanceof Date)
        return new Date(a);
      if (Array.isArray(a))
        return r(a, s);
      if (a instanceof Map)
        return new Map(r(Array.from(a), s));
      if (a instanceof Set)
        return new Set(r(Array.from(a), s));
      var c = {};
      for (var d in a)
        if (Object.hasOwnProperty.call(a, d) !== !1) {
          var g = a[d];
          typeof g != "object" || g === null ? c[d] = g : g instanceof Date ? c[d] = new Date(g) : g instanceof Map ? c[d] = new Map(r(Array.from(g), s)) : g instanceof Set ? c[d] = new Set(r(Array.from(g), s)) : ArrayBuffer.isView(g) ? c[d] = t(g) : c[d] = s(g);
        }
      return c;
    }
    function i(a) {
      if (typeof a != "object" || a === null)
        return a;
      if (a instanceof Date)
        return new Date(a);
      if (Array.isArray(a))
        return r(a, i);
      if (a instanceof Map)
        return new Map(r(Array.from(a), i));
      if (a instanceof Set)
        return new Set(r(Array.from(a), i));
      var c = {};
      for (var d in a) {
        var g = a[d];
        typeof g != "object" || g === null ? c[d] = g : g instanceof Date ? c[d] = new Date(g) : g instanceof Map ? c[d] = new Map(r(Array.from(g), i)) : g instanceof Set ? c[d] = new Set(r(Array.from(g), i)) : ArrayBuffer.isView(g) ? c[d] = t(g) : c[d] = i(g);
      }
      return c;
    }
  }
  function h(o) {
    var r = [], s = [];
    return o.proto ? c : a;
    function i(d, g) {
      for (var b = Object.keys(d), m = new Array(b.length), y = 0; y < b.length; y++) {
        var T = b[y], U = d[T];
        if (typeof U != "object" || U === null)
          m[T] = U;
        else if (U instanceof Date)
          m[T] = new Date(U);
        else if (ArrayBuffer.isView(U))
          m[T] = t(U);
        else {
          var S = r.indexOf(U);
          S !== -1 ? m[T] = s[S] : m[T] = g(U);
        }
      }
      return m;
    }
    function a(d) {
      if (typeof d != "object" || d === null)
        return d;
      if (d instanceof Date)
        return new Date(d);
      if (Array.isArray(d))
        return i(d, a);
      if (d instanceof Map)
        return new Map(i(Array.from(d), a));
      if (d instanceof Set)
        return new Set(i(Array.from(d), a));
      var g = {};
      r.push(d), s.push(g);
      for (var b in d)
        if (Object.hasOwnProperty.call(d, b) !== !1) {
          var m = d[b];
          if (typeof m != "object" || m === null)
            g[b] = m;
          else if (m instanceof Date)
            g[b] = new Date(m);
          else if (m instanceof Map)
            g[b] = new Map(i(Array.from(m), a));
          else if (m instanceof Set)
            g[b] = new Set(i(Array.from(m), a));
          else if (ArrayBuffer.isView(m))
            g[b] = t(m);
          else {
            var y = r.indexOf(m);
            y !== -1 ? g[b] = s[y] : g[b] = a(m);
          }
        }
      return r.pop(), s.pop(), g;
    }
    function c(d) {
      if (typeof d != "object" || d === null)
        return d;
      if (d instanceof Date)
        return new Date(d);
      if (Array.isArray(d))
        return i(d, c);
      if (d instanceof Map)
        return new Map(i(Array.from(d), c));
      if (d instanceof Set)
        return new Set(i(Array.from(d), c));
      var g = {};
      r.push(d), s.push(g);
      for (var b in d) {
        var m = d[b];
        if (typeof m != "object" || m === null)
          g[b] = m;
        else if (m instanceof Date)
          g[b] = new Date(m);
        else if (m instanceof Map)
          g[b] = new Map(i(Array.from(m), c));
        else if (m instanceof Set)
          g[b] = new Set(i(Array.from(m), c));
        else if (ArrayBuffer.isView(m))
          g[b] = t(m);
        else {
          var y = r.indexOf(m);
          y !== -1 ? g[b] = s[y] : g[b] = c(m);
        }
      }
      return r.pop(), s.pop(), g;
    }
  }
}), au = we((e, n) => {
  he(), ue(), le(), n.exports = su()();
}), lu = we((e) => {
  he(), ue(), le(), Object.defineProperty(e, "__esModule", { value: !0 }), e.validateTopics = e.validateTopic = void 0;
  function n(l) {
    let h = l.split("/");
    for (let o = 0; o < h.length; o++)
      if (h[o] !== "+") {
        if (h[o] === "#")
          return o === h.length - 1;
        if (h[o].indexOf("+") !== -1 || h[o].indexOf("#") !== -1)
          return !1;
      }
    return !0;
  }
  e.validateTopic = n;
  function t(l) {
    if (l.length === 0)
      return "empty_topic_list";
    for (let h = 0; h < l.length; h++)
      if (!n(l[h]))
        return l[h];
    return null;
  }
  e.validateTopics = t;
}), Js = we((e) => {
  he(), ue(), le(), Object.defineProperty(e, "__esModule", { value: !0 });
  var n = mr(), t = { objectMode: !0 }, l = { clean: !0 }, h = class {
    constructor(o) {
      this.options = o || {}, this.options = Object.assign(Object.assign({}, l), o), this._inflights = /* @__PURE__ */ new Map();
    }
    put(o, r) {
      return this._inflights.set(o.messageId, o), r && r(), this;
    }
    createStream() {
      let o = new n.Readable(t), r = [], s = !1, i = 0;
      return this._inflights.forEach((a, c) => {
        r.push(a);
      }), o._read = () => {
        !s && i < r.length ? o.push(r[i++]) : o.push(null);
      }, o.destroy = (a) => {
        if (!s)
          return s = !0, setTimeout(() => {
            o.emit("close");
          }, 0), o;
      }, o;
    }
    del(o, r) {
      let s = this._inflights.get(o.messageId);
      return s ? (this._inflights.delete(o.messageId), r(null, s)) : r && r(new Error("missing packet")), this;
    }
    get(o, r) {
      let s = this._inflights.get(o.messageId);
      return s ? r(null, s) : r && r(new Error("missing packet")), this;
    }
    close(o) {
      this.options.clean && (this._inflights = null), o && o();
    }
  };
  e.default = h;
}), uu = we((e) => {
  he(), ue(), le(), Object.defineProperty(e, "__esModule", { value: !0 });
  var n = [0, 16, 128, 131, 135, 144, 145, 151, 153], t = (l, h, o) => {
    l.log("handlePublish: packet %o", h), o = typeof o < "u" ? o : l.noop;
    let r = h.topic.toString(), s = h.payload, { qos: i } = h, { messageId: a } = h, { options: c } = l;
    if (l.options.protocolVersion === 5) {
      let d;
      if (h.properties && (d = h.properties.topicAlias), typeof d < "u")
        if (r.length === 0)
          if (d > 0 && d <= 65535) {
            let g = l.topicAliasRecv.getTopicByAlias(d);
            if (g)
              r = g, l.log("handlePublish :: topic complemented by alias. topic: %s - alias: %d", r, d);
            else {
              l.log("handlePublish :: unregistered topic alias. alias: %d", d), l.emit("error", new Error("Received unregistered Topic Alias"));
              return;
            }
          } else {
            l.log("handlePublish :: topic alias out of range. alias: %d", d), l.emit("error", new Error("Received Topic Alias is out of range"));
            return;
          }
        else if (l.topicAliasRecv.put(r, d))
          l.log("handlePublish :: registered topic: %s - alias: %d", r, d);
        else {
          l.log("handlePublish :: topic alias out of range. alias: %d", d), l.emit("error", new Error("Received Topic Alias is out of range"));
          return;
        }
    }
    switch (l.log("handlePublish: qos %d", i), i) {
      case 2: {
        c.customHandleAcks(r, s, h, (d, g) => {
          if (typeof d == "number" && (g = d, d = null), d)
            return l.emit("error", d);
          if (n.indexOf(g) === -1)
            return l.emit("error", new Error("Wrong reason code for pubrec"));
          g ? l._sendPacket({ cmd: "pubrec", messageId: a, reasonCode: g }, o) : l.incomingStore.put(h, () => {
            l._sendPacket({ cmd: "pubrec", messageId: a }, o);
          });
        });
        break;
      }
      case 1: {
        c.customHandleAcks(r, s, h, (d, g) => {
          if (typeof d == "number" && (g = d, d = null), d)
            return l.emit("error", d);
          if (n.indexOf(g) === -1)
            return l.emit("error", new Error("Wrong reason code for puback"));
          g || l.emit("message", r, s, h), l.handleMessage(h, (b) => {
            if (b)
              return o && o(b);
            l._sendPacket({ cmd: "puback", messageId: a, reasonCode: g }, o);
          });
        });
        break;
      }
      case 0:
        l.emit("message", r, s, h), l.handleMessage(h, o);
        break;
      default:
        l.log("handlePublish: unknown QoS. Doing nothing.");
        break;
    }
  };
  e.default = t;
}), hu = we((e, n) => {
  n.exports = { version: "5.5.5" };
}), Nr = we((e) => {
  he(), ue(), le(), Object.defineProperty(e, "__esModule", { value: !0 }), e.MQTTJS_VERSION = e.nextTick = e.applyMixin = e.ErrorWithReasonCode = void 0;
  var n = class Xs extends Error {
    constructor(h, o) {
      super(h), this.code = o, Object.setPrototypeOf(this, Xs.prototype), Object.getPrototypeOf(this).name = "ErrorWithReasonCode";
    }
  };
  e.ErrorWithReasonCode = n;
  function t(l, h, o = !1) {
    var r;
    let s = [h];
    for (; ; ) {
      let i = s[0], a = Object.getPrototypeOf(i);
      if (a != null && a.prototype)
        s.unshift(a);
      else
        break;
    }
    for (let i of s)
      for (let a of Object.getOwnPropertyNames(i.prototype))
        (o || a !== "constructor") && Object.defineProperty(l.prototype, a, (r = Object.getOwnPropertyDescriptor(i.prototype, a)) !== null && r !== void 0 ? r : /* @__PURE__ */ Object.create(null));
  }
  e.applyMixin = t, e.nextTick = typeof (qe == null ? void 0 : qe.nextTick) == "function" ? qe.nextTick : (l) => {
    setTimeout(l, 0);
  }, e.MQTTJS_VERSION = hu().version;
}), hi = we((e) => {
  he(), ue(), le(), Object.defineProperty(e, "__esModule", { value: !0 }), e.ReasonCodes = void 0, e.ReasonCodes = { 0: "", 1: "Unacceptable protocol version", 2: "Identifier rejected", 3: "Server unavailable", 4: "Bad username or password", 5: "Not authorized", 16: "No matching subscribers", 17: "No subscription existed", 128: "Unspecified error", 129: "Malformed Packet", 130: "Protocol Error", 131: "Implementation specific error", 132: "Unsupported Protocol Version", 133: "Client Identifier not valid", 134: "Bad User Name or Password", 135: "Not authorized", 136: "Server unavailable", 137: "Server busy", 138: "Banned", 139: "Server shutting down", 140: "Bad authentication method", 141: "Keep Alive timeout", 142: "Session taken over", 143: "Topic Filter invalid", 144: "Topic Name invalid", 145: "Packet identifier in use", 146: "Packet Identifier not found", 147: "Receive Maximum exceeded", 148: "Topic Alias invalid", 149: "Packet too large", 150: "Message rate too high", 151: "Quota exceeded", 152: "Administrative action", 153: "Payload format invalid", 154: "Retain not supported", 155: "QoS not supported", 156: "Use another server", 157: "Server moved", 158: "Shared Subscriptions not supported", 159: "Connection rate exceeded", 160: "Maximum connect time", 161: "Subscription Identifiers not supported", 162: "Wildcard Subscriptions not supported" };
  var n = (t, l) => {
    let { messageId: h } = l, o = l.cmd, r = null, s = t.outgoing[h] ? t.outgoing[h].cb : null, i;
    if (!s) {
      t.log("_handleAck :: Server sent an ack in error. Ignoring.");
      return;
    }
    switch (t.log("_handleAck :: packet type", o), o) {
      case "pubcomp":
      case "puback": {
        let a = l.reasonCode;
        a && a > 0 && a !== 16 ? (i = new Error(`Publish error: ${e.ReasonCodes[a]}`), i.code = a, t._removeOutgoingAndStoreMessage(h, () => {
          s(i, l);
        })) : t._removeOutgoingAndStoreMessage(h, s);
        break;
      }
      case "pubrec": {
        r = { cmd: "pubrel", qos: 2, messageId: h };
        let a = l.reasonCode;
        a && a > 0 && a !== 16 ? (i = new Error(`Publish error: ${e.ReasonCodes[a]}`), i.code = a, t._removeOutgoingAndStoreMessage(h, () => {
          s(i, l);
        })) : t._sendPacket(r);
        break;
      }
      case "suback": {
        delete t.outgoing[h], t.messageIdProvider.deallocate(h);
        let a = l.granted;
        for (let c = 0; c < a.length; c++)
          if (a[c] & 128) {
            let d = t.messageIdToTopic[h];
            d && d.forEach((g) => {
              delete t._resubscribeTopics[g];
            });
          }
        delete t.messageIdToTopic[h], t._invokeStoreProcessingQueue(), s(null, l);
        break;
      }
      case "unsuback": {
        delete t.outgoing[h], t.messageIdProvider.deallocate(h), t._invokeStoreProcessingQueue(), s(null);
        break;
      }
      default:
        t.emit("error", new Error("unrecognized packet type"));
    }
    t.disconnecting && Object.keys(t.outgoing).length === 0 && t.emit("outgoingEmpty");
  };
  e.default = n;
}), cu = we((e) => {
  he(), ue(), le(), Object.defineProperty(e, "__esModule", { value: !0 });
  var n = Nr(), t = hi(), l = (h, o) => {
    let { options: r } = h, s = r.protocolVersion, i = s === 5 ? o.reasonCode : o.returnCode;
    if (s !== 5) {
      let a = new n.ErrorWithReasonCode(`Protocol error: Auth packets are only supported in MQTT 5. Your version:${s}`, i);
      h.emit("error", a);
      return;
    }
    h.handleAuth(o, (a, c) => {
      if (a) {
        h.emit("error", a);
        return;
      }
      if (i === 24)
        h.reconnecting = !1, h._sendPacket(c);
      else {
        let d = new n.ErrorWithReasonCode(`Connection refused: ${t.ReasonCodes[i]}`, i);
        h.emit("error", d);
      }
    });
  };
  e.default = l;
}), fu = we((e) => {
  var b, m, y, T, U, S, R, F, W, C, O, M, $, X, te, E, q, Z, z, be, ne, V, me, ie, Ee, A, $n, fe, Ae, ae, B, _, Zs, se, ee, J, ce, Qt, k, Gt, D, qn, G, Gr, K, Jr, Se, Ke, Me, Vn, u, Mr, w;
  he(), ue(), le(), Object.defineProperty(e, "__esModule", { value: !0 }), e.LRUCache = void 0;
  var n = typeof performance == "object" && performance && typeof performance.now == "function" ? performance : Date, t = /* @__PURE__ */ new Set(), l = typeof qe == "object" && qe ? qe : {}, h = (I, v, P, H) => {
    typeof l.emitWarning == "function" ? l.emitWarning(I, v, P, H) : console.error(`[${P}] ${v}: ${I}`);
  }, o = globalThis.AbortController, r = globalThis.AbortSignal;
  if (typeof o > "u") {
    r = class {
      constructor() {
        Xe(this, "onabort");
        Xe(this, "_onabort", []);
        Xe(this, "reason");
        Xe(this, "aborted", !1);
      }
      addEventListener(P, H) {
        this._onabort.push(H);
      }
    }, o = class {
      constructor() {
        Xe(this, "signal", new r());
        v();
      }
      abort(P) {
        var H, de;
        if (!this.signal.aborted) {
          this.signal.reason = P, this.signal.aborted = !0;
          for (let oe of this.signal._onabort)
            oe(P);
          (de = (H = this.signal).onabort) == null || de.call(H, P);
        }
      }
    };
    let I = ((b = l.env) == null ? void 0 : b.LRU_CACHE_IGNORE_AC_WARNING) !== "1", v = () => {
      I && (I = !1, h("AbortController is not defined. If using lru-cache in node 14, load an AbortController polyfill from the `node-abort-controller` package. A minimal polyfill is provided for use by LRUCache.fetch(), but it should not be relied upon in other contexts (eg, passing it to other APIs that use AbortController/AbortSignal might have undesirable effects). You may disable this with LRU_CACHE_IGNORE_AC_WARNING=1 in the env.", "NO_ABORT_CONTROLLER", "ENOTSUP", v));
    };
  }
  var s = (I) => !t.has(I), i = (I) => I && I === Math.floor(I) && I > 0 && isFinite(I), a = (I) => i(I) ? I <= Math.pow(2, 8) ? Uint8Array : I <= Math.pow(2, 16) ? Uint16Array : I <= Math.pow(2, 32) ? Uint32Array : I <= Number.MAX_SAFE_INTEGER ? c : null : null, c = class extends Array {
    constructor(I) {
      super(I), this.fill(0);
    }
  }, d = (m = class {
    constructor(v, P) {
      Xe(this, "heap");
      Xe(this, "length");
      if (!x(m, y))
        throw new TypeError("instantiate Stack using Stack.create(n)");
      this.heap = new P(v), this.length = 0;
    }
    static create(v) {
      let P = a(v);
      if (!P)
        return [];
      Ce(m, y, !0);
      let H = new m(v, P);
      return Ce(m, y, !1), H;
    }
    push(v) {
      this.heap[this.length++] = v;
    }
    pop() {
      return this.heap[--this.length];
    }
  }, y = new WeakMap(), xe(m, y, !1), m), g = (w = class {
    constructor(v) {
      xe(this, A);
      xe(this, _);
      xe(this, ce);
      xe(this, k);
      xe(this, D);
      xe(this, G);
      xe(this, K);
      xe(this, Se);
      xe(this, Me);
      xe(this, u);
      xe(this, T, void 0);
      xe(this, U, void 0);
      xe(this, S, void 0);
      xe(this, R, void 0);
      xe(this, F, void 0);
      Xe(this, "ttl");
      Xe(this, "ttlResolution");
      Xe(this, "ttlAutopurge");
      Xe(this, "updateAgeOnGet");
      Xe(this, "updateAgeOnHas");
      Xe(this, "allowStale");
      Xe(this, "noDisposeOnSet");
      Xe(this, "noUpdateTTL");
      Xe(this, "maxEntrySize");
      Xe(this, "sizeCalculation");
      Xe(this, "noDeleteOnFetchRejection");
      Xe(this, "noDeleteOnStaleGet");
      Xe(this, "allowStaleOnFetchAbort");
      Xe(this, "allowStaleOnFetchRejection");
      Xe(this, "ignoreFetchAbort");
      xe(this, W, void 0);
      xe(this, C, void 0);
      xe(this, O, void 0);
      xe(this, M, void 0);
      xe(this, $, void 0);
      xe(this, X, void 0);
      xe(this, te, void 0);
      xe(this, E, void 0);
      xe(this, q, void 0);
      xe(this, Z, void 0);
      xe(this, z, void 0);
      xe(this, be, void 0);
      xe(this, ne, void 0);
      xe(this, V, void 0);
      xe(this, me, void 0);
      xe(this, ie, void 0);
      xe(this, Ee, void 0);
      xe(this, fe, () => {
      });
      xe(this, Ae, () => {
      });
      xe(this, ae, () => {
      });
      xe(this, B, () => !1);
      xe(this, se, (v) => {
      });
      xe(this, ee, (v, P, H) => {
      });
      xe(this, J, (v, P, H, de) => {
        if (H || de)
          throw new TypeError("cannot set size without setting maxSize or maxEntrySize on cache");
        return 0;
      });
      let { max: P = 0, ttl: H, ttlResolution: de = 1, ttlAutopurge: oe, updateAgeOnGet: ve, updateAgeOnHas: Ie, allowStale: Oe, dispose: Ve, disposeAfter: lt, noDisposeOnSet: Le, noUpdateTTL: st, maxSize: ze = 0, maxEntrySize: Ge = 0, sizeCalculation: Je, fetchMethod: it, noDeleteOnFetchRejection: Be, noDeleteOnStaleGet: He, allowStaleOnFetchRejection: ut, allowStaleOnFetchAbort: nt, ignoreFetchAbort: yt } = v;
      if (P !== 0 && !i(P))
        throw new TypeError("max option must be a nonnegative integer");
      let Ot = P ? a(P) : Array;
      if (!Ot)
        throw new Error("invalid max value: " + P);
      if (Ce(this, T, P), Ce(this, U, ze), this.maxEntrySize = Ge || x(this, U), this.sizeCalculation = Je, this.sizeCalculation) {
        if (!x(this, U) && !this.maxEntrySize)
          throw new TypeError("cannot set sizeCalculation without setting maxSize or maxEntrySize");
        if (typeof this.sizeCalculation != "function")
          throw new TypeError("sizeCalculation set to non-function");
      }
      if (it !== void 0 && typeof it != "function")
        throw new TypeError("fetchMethod must be a function if specified");
      if (Ce(this, F, it), Ce(this, ie, !!it), Ce(this, O, /* @__PURE__ */ new Map()), Ce(this, M, new Array(P).fill(void 0)), Ce(this, $, new Array(P).fill(void 0)), Ce(this, X, new Ot(P)), Ce(this, te, new Ot(P)), Ce(this, E, 0), Ce(this, q, 0), Ce(this, Z, d.create(P)), Ce(this, W, 0), Ce(this, C, 0), typeof Ve == "function" && Ce(this, S, Ve), typeof lt == "function" ? (Ce(this, R, lt), Ce(this, z, [])) : (Ce(this, R, void 0), Ce(this, z, void 0)), Ce(this, me, !!x(this, S)), Ce(this, Ee, !!x(this, R)), this.noDisposeOnSet = !!Le, this.noUpdateTTL = !!st, this.noDeleteOnFetchRejection = !!Be, this.allowStaleOnFetchRejection = !!ut, this.allowStaleOnFetchAbort = !!nt, this.ignoreFetchAbort = !!yt, this.maxEntrySize !== 0) {
        if (x(this, U) !== 0 && !i(x(this, U)))
          throw new TypeError("maxSize must be a positive integer if specified");
        if (!i(this.maxEntrySize))
          throw new TypeError("maxEntrySize must be a positive integer if specified");
        Re(this, _, Zs).call(this);
      }
      if (this.allowStale = !!Oe, this.noDeleteOnStaleGet = !!He, this.updateAgeOnGet = !!ve, this.updateAgeOnHas = !!Ie, this.ttlResolution = i(de) || de === 0 ? de : 1, this.ttlAutopurge = !!oe, this.ttl = H || 0, this.ttl) {
        if (!i(this.ttl))
          throw new TypeError("ttl must be a positive integer if specified");
        Re(this, A, $n).call(this);
      }
      if (x(this, T) === 0 && this.ttl === 0 && x(this, U) === 0)
        throw new TypeError("At least one of max, maxSize, or ttl is required");
      if (!this.ttlAutopurge && !x(this, T) && !x(this, U)) {
        let At = "LRU_CACHE_UNBOUNDED";
        s(At) && (t.add(At), h("TTL caching without ttlAutopurge, max, or maxSize can result in unbounded memory consumption.", "UnboundedCacheWarning", At, w));
      }
    }
    static unsafeExposeInternals(v) {
      return { starts: x(v, ne), ttls: x(v, V), sizes: x(v, be), keyMap: x(v, O), keyList: x(v, M), valList: x(v, $), next: x(v, X), prev: x(v, te), get head() {
        return x(v, E);
      }, get tail() {
        return x(v, q);
      }, free: x(v, Z), isBackgroundFetch: (P) => {
        var H;
        return Re(H = v, Se, Ke).call(H, P);
      }, backgroundFetch: (P, H, de, oe) => {
        var ve;
        return Re(ve = v, K, Jr).call(ve, P, H, de, oe);
      }, moveToTail: (P) => {
        var H;
        return Re(H = v, u, Mr).call(H, P);
      }, indexes: (P) => {
        var H;
        return Re(H = v, ce, Qt).call(H, P);
      }, rindexes: (P) => {
        var H;
        return Re(H = v, k, Gt).call(H, P);
      }, isStale: (P) => {
        var H;
        return x(H = v, B).call(H, P);
      } };
    }
    get max() {
      return x(this, T);
    }
    get maxSize() {
      return x(this, U);
    }
    get calculatedSize() {
      return x(this, C);
    }
    get size() {
      return x(this, W);
    }
    get fetchMethod() {
      return x(this, F);
    }
    get dispose() {
      return x(this, S);
    }
    get disposeAfter() {
      return x(this, R);
    }
    getRemainingTTL(v) {
      return x(this, O).has(v) ? 1 / 0 : 0;
    }
    *entries() {
      for (let v of Re(this, ce, Qt).call(this))
        x(this, $)[v] !== void 0 && x(this, M)[v] !== void 0 && !Re(this, Se, Ke).call(this, x(this, $)[v]) && (yield [x(this, M)[v], x(this, $)[v]]);
    }
    *rentries() {
      for (let v of Re(this, k, Gt).call(this))
        x(this, $)[v] !== void 0 && x(this, M)[v] !== void 0 && !Re(this, Se, Ke).call(this, x(this, $)[v]) && (yield [x(this, M)[v], x(this, $)[v]]);
    }
    *keys() {
      for (let v of Re(this, ce, Qt).call(this)) {
        let P = x(this, M)[v];
        P !== void 0 && !Re(this, Se, Ke).call(this, x(this, $)[v]) && (yield P);
      }
    }
    *rkeys() {
      for (let v of Re(this, k, Gt).call(this)) {
        let P = x(this, M)[v];
        P !== void 0 && !Re(this, Se, Ke).call(this, x(this, $)[v]) && (yield P);
      }
    }
    *values() {
      for (let v of Re(this, ce, Qt).call(this))
        x(this, $)[v] !== void 0 && !Re(this, Se, Ke).call(this, x(this, $)[v]) && (yield x(this, $)[v]);
    }
    *rvalues() {
      for (let v of Re(this, k, Gt).call(this))
        x(this, $)[v] !== void 0 && !Re(this, Se, Ke).call(this, x(this, $)[v]) && (yield x(this, $)[v]);
    }
    [Symbol.iterator]() {
      return this.entries();
    }
    find(v, P = {}) {
      for (let H of Re(this, ce, Qt).call(this)) {
        let de = x(this, $)[H], oe = Re(this, Se, Ke).call(this, de) ? de.__staleWhileFetching : de;
        if (oe !== void 0 && v(oe, x(this, M)[H], this))
          return this.get(x(this, M)[H], P);
      }
    }
    forEach(v, P = this) {
      for (let H of Re(this, ce, Qt).call(this)) {
        let de = x(this, $)[H], oe = Re(this, Se, Ke).call(this, de) ? de.__staleWhileFetching : de;
        oe !== void 0 && v.call(P, oe, x(this, M)[H], this);
      }
    }
    rforEach(v, P = this) {
      for (let H of Re(this, k, Gt).call(this)) {
        let de = x(this, $)[H], oe = Re(this, Se, Ke).call(this, de) ? de.__staleWhileFetching : de;
        oe !== void 0 && v.call(P, oe, x(this, M)[H], this);
      }
    }
    purgeStale() {
      let v = !1;
      for (let P of Re(this, k, Gt).call(this, { allowStale: !0 }))
        x(this, B).call(this, P) && (this.delete(x(this, M)[P]), v = !0);
      return v;
    }
    dump() {
      let v = [];
      for (let P of Re(this, ce, Qt).call(this, { allowStale: !0 })) {
        let H = x(this, M)[P], de = x(this, $)[P], oe = Re(this, Se, Ke).call(this, de) ? de.__staleWhileFetching : de;
        if (oe === void 0 || H === void 0)
          continue;
        let ve = { value: oe };
        if (x(this, V) && x(this, ne)) {
          ve.ttl = x(this, V)[P];
          let Ie = n.now() - x(this, ne)[P];
          ve.start = Math.floor(Date.now() - Ie);
        }
        x(this, be) && (ve.size = x(this, be)[P]), v.unshift([H, ve]);
      }
      return v;
    }
    load(v) {
      this.clear();
      for (let [P, H] of v) {
        if (H.start) {
          let de = Date.now() - H.start;
          H.start = n.now() - de;
        }
        this.set(P, H.value, H);
      }
    }
    set(v, P, H = {}) {
      var st, ze, Ge, Je, it;
      if (P === void 0)
        return this.delete(v), this;
      let { ttl: de = this.ttl, start: oe, noDisposeOnSet: ve = this.noDisposeOnSet, sizeCalculation: Ie = this.sizeCalculation, status: Oe } = H, { noUpdateTTL: Ve = this.noUpdateTTL } = H, lt = x(this, J).call(this, v, P, H.size || 0, Ie);
      if (this.maxEntrySize && lt > this.maxEntrySize)
        return Oe && (Oe.set = "miss", Oe.maxEntrySizeExceeded = !0), this.delete(v), this;
      let Le = x(this, W) === 0 ? void 0 : x(this, O).get(v);
      if (Le === void 0)
        Le = x(this, W) === 0 ? x(this, q) : x(this, Z).length !== 0 ? x(this, Z).pop() : x(this, W) === x(this, T) ? Re(this, G, Gr).call(this, !1) : x(this, W), x(this, M)[Le] = v, x(this, $)[Le] = P, x(this, O).set(v, Le), x(this, X)[x(this, q)] = Le, x(this, te)[Le] = x(this, q), Ce(this, q, Le), Wr(this, W)._++, x(this, ee).call(this, Le, lt, Oe), Oe && (Oe.set = "add"), Ve = !1;
      else {
        Re(this, u, Mr).call(this, Le);
        let Be = x(this, $)[Le];
        if (P !== Be) {
          if (x(this, ie) && Re(this, Se, Ke).call(this, Be)) {
            Be.__abortController.abort(new Error("replaced"));
            let { __staleWhileFetching: He } = Be;
            He !== void 0 && !ve && (x(this, me) && ((st = x(this, S)) == null || st.call(this, He, v, "set")), x(this, Ee) && ((ze = x(this, z)) == null || ze.push([He, v, "set"])));
          } else
            ve || (x(this, me) && ((Ge = x(this, S)) == null || Ge.call(this, Be, v, "set")), x(this, Ee) && ((Je = x(this, z)) == null || Je.push([Be, v, "set"])));
          if (x(this, se).call(this, Le), x(this, ee).call(this, Le, lt, Oe), x(this, $)[Le] = P, Oe) {
            Oe.set = "replace";
            let He = Be && Re(this, Se, Ke).call(this, Be) ? Be.__staleWhileFetching : Be;
            He !== void 0 && (Oe.oldValue = He);
          }
        } else
          Oe && (Oe.set = "update");
      }
      if (de !== 0 && !x(this, V) && Re(this, A, $n).call(this), x(this, V) && (Ve || x(this, ae).call(this, Le, de, oe), Oe && x(this, Ae).call(this, Oe, Le)), !ve && x(this, Ee) && x(this, z)) {
        let Be = x(this, z), He;
        for (; He = Be == null ? void 0 : Be.shift(); )
          (it = x(this, R)) == null || it.call(this, ...He);
      }
      return this;
    }
    pop() {
      var v;
      try {
        for (; x(this, W); ) {
          let P = x(this, $)[x(this, E)];
          if (Re(this, G, Gr).call(this, !0), Re(this, Se, Ke).call(this, P)) {
            if (P.__staleWhileFetching)
              return P.__staleWhileFetching;
          } else if (P !== void 0)
            return P;
        }
      } finally {
        if (x(this, Ee) && x(this, z)) {
          let P = x(this, z), H;
          for (; H = P == null ? void 0 : P.shift(); )
            (v = x(this, R)) == null || v.call(this, ...H);
        }
      }
    }
    has(v, P = {}) {
      let { updateAgeOnHas: H = this.updateAgeOnHas, status: de } = P, oe = x(this, O).get(v);
      if (oe !== void 0) {
        let ve = x(this, $)[oe];
        if (Re(this, Se, Ke).call(this, ve) && ve.__staleWhileFetching === void 0)
          return !1;
        if (x(this, B).call(this, oe))
          de && (de.has = "stale", x(this, Ae).call(this, de, oe));
        else
          return H && x(this, fe).call(this, oe), de && (de.has = "hit", x(this, Ae).call(this, de, oe)), !0;
      } else
        de && (de.has = "miss");
      return !1;
    }
    peek(v, P = {}) {
      let { allowStale: H = this.allowStale } = P, de = x(this, O).get(v);
      if (de !== void 0 && (H || !x(this, B).call(this, de))) {
        let oe = x(this, $)[de];
        return Re(this, Se, Ke).call(this, oe) ? oe.__staleWhileFetching : oe;
      }
    }
    async fetch(v, P = {}) {
      let { allowStale: H = this.allowStale, updateAgeOnGet: de = this.updateAgeOnGet, noDeleteOnStaleGet: oe = this.noDeleteOnStaleGet, ttl: ve = this.ttl, noDisposeOnSet: Ie = this.noDisposeOnSet, size: Oe = 0, sizeCalculation: Ve = this.sizeCalculation, noUpdateTTL: lt = this.noUpdateTTL, noDeleteOnFetchRejection: Le = this.noDeleteOnFetchRejection, allowStaleOnFetchRejection: st = this.allowStaleOnFetchRejection, ignoreFetchAbort: ze = this.ignoreFetchAbort, allowStaleOnFetchAbort: Ge = this.allowStaleOnFetchAbort, context: Je, forceRefresh: it = !1, status: Be, signal: He } = P;
      if (!x(this, ie))
        return Be && (Be.fetch = "get"), this.get(v, { allowStale: H, updateAgeOnGet: de, noDeleteOnStaleGet: oe, status: Be });
      let ut = { allowStale: H, updateAgeOnGet: de, noDeleteOnStaleGet: oe, ttl: ve, noDisposeOnSet: Ie, size: Oe, sizeCalculation: Ve, noUpdateTTL: lt, noDeleteOnFetchRejection: Le, allowStaleOnFetchRejection: st, allowStaleOnFetchAbort: Ge, ignoreFetchAbort: ze, status: Be, signal: He }, nt = x(this, O).get(v);
      if (nt === void 0) {
        Be && (Be.fetch = "miss");
        let yt = Re(this, K, Jr).call(this, v, nt, ut, Je);
        return yt.__returned = yt;
      } else {
        let yt = x(this, $)[nt];
        if (Re(this, Se, Ke).call(this, yt)) {
          let Fr = H && yt.__staleWhileFetching !== void 0;
          return Be && (Be.fetch = "inflight", Fr && (Be.returnedStale = !0)), Fr ? yt.__staleWhileFetching : yt.__returned = yt;
        }
        let Ot = x(this, B).call(this, nt);
        if (!it && !Ot)
          return Be && (Be.fetch = "hit"), Re(this, u, Mr).call(this, nt), de && x(this, fe).call(this, nt), Be && x(this, Ae).call(this, Be, nt), yt;
        let At = Re(this, K, Jr).call(this, v, nt, ut, Je), Dr = At.__staleWhileFetching !== void 0 && H;
        return Be && (Be.fetch = Ot ? "stale" : "refresh", Dr && Ot && (Be.returnedStale = !0)), Dr ? At.__staleWhileFetching : At.__returned = At;
      }
    }
    get(v, P = {}) {
      let { allowStale: H = this.allowStale, updateAgeOnGet: de = this.updateAgeOnGet, noDeleteOnStaleGet: oe = this.noDeleteOnStaleGet, status: ve } = P, Ie = x(this, O).get(v);
      if (Ie !== void 0) {
        let Oe = x(this, $)[Ie], Ve = Re(this, Se, Ke).call(this, Oe);
        return ve && x(this, Ae).call(this, ve, Ie), x(this, B).call(this, Ie) ? (ve && (ve.get = "stale"), Ve ? (ve && H && Oe.__staleWhileFetching !== void 0 && (ve.returnedStale = !0), H ? Oe.__staleWhileFetching : void 0) : (oe || this.delete(v), ve && H && (ve.returnedStale = !0), H ? Oe : void 0)) : (ve && (ve.get = "hit"), Ve ? Oe.__staleWhileFetching : (Re(this, u, Mr).call(this, Ie), de && x(this, fe).call(this, Ie), Oe));
      } else
        ve && (ve.get = "miss");
    }
    delete(v) {
      var H, de, oe, ve;
      let P = !1;
      if (x(this, W) !== 0) {
        let Ie = x(this, O).get(v);
        if (Ie !== void 0)
          if (P = !0, x(this, W) === 1)
            this.clear();
          else {
            x(this, se).call(this, Ie);
            let Oe = x(this, $)[Ie];
            Re(this, Se, Ke).call(this, Oe) ? Oe.__abortController.abort(new Error("deleted")) : (x(this, me) || x(this, Ee)) && (x(this, me) && ((H = x(this, S)) == null || H.call(this, Oe, v, "delete")), x(this, Ee) && ((de = x(this, z)) == null || de.push([Oe, v, "delete"]))), x(this, O).delete(v), x(this, M)[Ie] = void 0, x(this, $)[Ie] = void 0, Ie === x(this, q) ? Ce(this, q, x(this, te)[Ie]) : Ie === x(this, E) ? Ce(this, E, x(this, X)[Ie]) : (x(this, X)[x(this, te)[Ie]] = x(this, X)[Ie], x(this, te)[x(this, X)[Ie]] = x(this, te)[Ie]), Wr(this, W)._--, x(this, Z).push(Ie);
          }
      }
      if (x(this, Ee) && ((oe = x(this, z)) != null && oe.length)) {
        let Ie = x(this, z), Oe;
        for (; Oe = Ie == null ? void 0 : Ie.shift(); )
          (ve = x(this, R)) == null || ve.call(this, ...Oe);
      }
      return P;
    }
    clear() {
      var v, P, H;
      for (let de of Re(this, k, Gt).call(this, { allowStale: !0 })) {
        let oe = x(this, $)[de];
        if (Re(this, Se, Ke).call(this, oe))
          oe.__abortController.abort(new Error("deleted"));
        else {
          let ve = x(this, M)[de];
          x(this, me) && ((v = x(this, S)) == null || v.call(this, oe, ve, "delete")), x(this, Ee) && ((P = x(this, z)) == null || P.push([oe, ve, "delete"]));
        }
      }
      if (x(this, O).clear(), x(this, $).fill(void 0), x(this, M).fill(void 0), x(this, V) && x(this, ne) && (x(this, V).fill(0), x(this, ne).fill(0)), x(this, be) && x(this, be).fill(0), Ce(this, E, 0), Ce(this, q, 0), x(this, Z).length = 0, Ce(this, C, 0), Ce(this, W, 0), x(this, Ee) && x(this, z)) {
        let de = x(this, z), oe;
        for (; oe = de == null ? void 0 : de.shift(); )
          (H = x(this, R)) == null || H.call(this, ...oe);
      }
    }
  }, T = new WeakMap(), U = new WeakMap(), S = new WeakMap(), R = new WeakMap(), F = new WeakMap(), W = new WeakMap(), C = new WeakMap(), O = new WeakMap(), M = new WeakMap(), $ = new WeakMap(), X = new WeakMap(), te = new WeakMap(), E = new WeakMap(), q = new WeakMap(), Z = new WeakMap(), z = new WeakMap(), be = new WeakMap(), ne = new WeakMap(), V = new WeakMap(), me = new WeakMap(), ie = new WeakMap(), Ee = new WeakMap(), A = new WeakSet(), $n = function() {
    let v = new c(x(this, T)), P = new c(x(this, T));
    Ce(this, V, v), Ce(this, ne, P), Ce(this, ae, (oe, ve, Ie = n.now()) => {
      if (P[oe] = ve !== 0 ? Ie : 0, v[oe] = ve, ve !== 0 && this.ttlAutopurge) {
        let Oe = setTimeout(() => {
          x(this, B).call(this, oe) && this.delete(x(this, M)[oe]);
        }, ve + 1);
        Oe.unref && Oe.unref();
      }
    }), Ce(this, fe, (oe) => {
      P[oe] = v[oe] !== 0 ? n.now() : 0;
    }), Ce(this, Ae, (oe, ve) => {
      if (v[ve]) {
        let Ie = v[ve], Oe = P[ve];
        oe.ttl = Ie, oe.start = Oe, oe.now = H || de();
        let Ve = oe.now - Oe;
        oe.remainingTTL = Ie - Ve;
      }
    });
    let H = 0, de = () => {
      let oe = n.now();
      if (this.ttlResolution > 0) {
        H = oe;
        let ve = setTimeout(() => H = 0, this.ttlResolution);
        ve.unref && ve.unref();
      }
      return oe;
    };
    this.getRemainingTTL = (oe) => {
      let ve = x(this, O).get(oe);
      if (ve === void 0)
        return 0;
      let Ie = v[ve], Oe = P[ve];
      if (Ie === 0 || Oe === 0)
        return 1 / 0;
      let Ve = (H || de()) - Oe;
      return Ie - Ve;
    }, Ce(this, B, (oe) => v[oe] !== 0 && P[oe] !== 0 && (H || de()) - P[oe] > v[oe]);
  }, fe = new WeakMap(), Ae = new WeakMap(), ae = new WeakMap(), B = new WeakMap(), _ = new WeakSet(), Zs = function() {
    let v = new c(x(this, T));
    Ce(this, C, 0), Ce(this, be, v), Ce(this, se, (P) => {
      Ce(this, C, x(this, C) - v[P]), v[P] = 0;
    }), Ce(this, J, (P, H, de, oe) => {
      if (Re(this, Se, Ke).call(this, H))
        return 0;
      if (!i(de))
        if (oe) {
          if (typeof oe != "function")
            throw new TypeError("sizeCalculation must be a function");
          if (de = oe(H, P), !i(de))
            throw new TypeError("sizeCalculation return invalid (expect positive integer)");
        } else
          throw new TypeError("invalid size value (must be positive integer). When maxSize or maxEntrySize is used, sizeCalculation or size must be set.");
      return de;
    }), Ce(this, ee, (P, H, de) => {
      if (v[P] = H, x(this, U)) {
        let oe = x(this, U) - v[P];
        for (; x(this, C) > oe; )
          Re(this, G, Gr).call(this, !0);
      }
      Ce(this, C, x(this, C) + v[P]), de && (de.entrySize = H, de.totalCalculatedSize = x(this, C));
    });
  }, se = new WeakMap(), ee = new WeakMap(), J = new WeakMap(), ce = new WeakSet(), Qt = function* ({ allowStale: v = this.allowStale } = {}) {
    if (x(this, W))
      for (let P = x(this, q); !(!Re(this, D, qn).call(this, P) || ((v || !x(this, B).call(this, P)) && (yield P), P === x(this, E))); )
        P = x(this, te)[P];
  }, k = new WeakSet(), Gt = function* ({ allowStale: v = this.allowStale } = {}) {
    if (x(this, W))
      for (let P = x(this, E); !(!Re(this, D, qn).call(this, P) || ((v || !x(this, B).call(this, P)) && (yield P), P === x(this, q))); )
        P = x(this, X)[P];
  }, D = new WeakSet(), qn = function(v) {
    return v !== void 0 && x(this, O).get(x(this, M)[v]) === v;
  }, G = new WeakSet(), Gr = function(v) {
    var oe, ve;
    let P = x(this, E), H = x(this, M)[P], de = x(this, $)[P];
    return x(this, ie) && Re(this, Se, Ke).call(this, de) ? de.__abortController.abort(new Error("evicted")) : (x(this, me) || x(this, Ee)) && (x(this, me) && ((oe = x(this, S)) == null || oe.call(this, de, H, "evict")), x(this, Ee) && ((ve = x(this, z)) == null || ve.push([de, H, "evict"]))), x(this, se).call(this, P), v && (x(this, M)[P] = void 0, x(this, $)[P] = void 0, x(this, Z).push(P)), x(this, W) === 1 ? (Ce(this, E, Ce(this, q, 0)), x(this, Z).length = 0) : Ce(this, E, x(this, X)[P]), x(this, O).delete(H), Wr(this, W)._--, P;
  }, K = new WeakSet(), Jr = function(v, P, H, de) {
    let oe = P === void 0 ? void 0 : x(this, $)[P];
    if (Re(this, Se, Ke).call(this, oe))
      return oe;
    let ve = new o(), { signal: Ie } = H;
    Ie == null || Ie.addEventListener("abort", () => ve.abort(Ie.reason), { signal: ve.signal });
    let Oe = { signal: ve.signal, options: H, context: de }, Ve = (Je, it = !1) => {
      let { aborted: Be } = ve.signal, He = H.ignoreFetchAbort && Je !== void 0;
      if (H.status && (Be && !it ? (H.status.fetchAborted = !0, H.status.fetchError = ve.signal.reason, He && (H.status.fetchAbortIgnored = !0)) : H.status.fetchResolved = !0), Be && !He && !it)
        return Le(ve.signal.reason);
      let ut = ze;
      return x(this, $)[P] === ze && (Je === void 0 ? ut.__staleWhileFetching ? x(this, $)[P] = ut.__staleWhileFetching : this.delete(v) : (H.status && (H.status.fetchUpdated = !0), this.set(v, Je, Oe.options))), Je;
    }, lt = (Je) => (H.status && (H.status.fetchRejected = !0, H.status.fetchError = Je), Le(Je)), Le = (Je) => {
      let { aborted: it } = ve.signal, Be = it && H.allowStaleOnFetchAbort, He = Be || H.allowStaleOnFetchRejection, ut = He || H.noDeleteOnFetchRejection, nt = ze;
      if (x(this, $)[P] === ze && (!ut || nt.__staleWhileFetching === void 0 ? this.delete(v) : Be || (x(this, $)[P] = nt.__staleWhileFetching)), He)
        return H.status && nt.__staleWhileFetching !== void 0 && (H.status.returnedStale = !0), nt.__staleWhileFetching;
      if (nt.__returned === nt)
        throw Je;
    }, st = (Je, it) => {
      var He;
      let Be = (He = x(this, F)) == null ? void 0 : He.call(this, v, oe, Oe);
      Be && Be instanceof Promise && Be.then((ut) => Je(ut === void 0 ? void 0 : ut), it), ve.signal.addEventListener("abort", () => {
        (!H.ignoreFetchAbort || H.allowStaleOnFetchAbort) && (Je(void 0), H.allowStaleOnFetchAbort && (Je = (ut) => Ve(ut, !0)));
      });
    };
    H.status && (H.status.fetchDispatched = !0);
    let ze = new Promise(st).then(Ve, lt), Ge = Object.assign(ze, { __abortController: ve, __staleWhileFetching: oe, __returned: void 0 });
    return P === void 0 ? (this.set(v, Ge, { ...Oe.options, status: void 0 }), P = x(this, O).get(v)) : x(this, $)[P] = Ge, Ge;
  }, Se = new WeakSet(), Ke = function(v) {
    if (!x(this, ie))
      return !1;
    let P = v;
    return !!P && P instanceof Promise && P.hasOwnProperty("__staleWhileFetching") && P.__abortController instanceof o;
  }, Me = new WeakSet(), Vn = function(v, P) {
    x(this, te)[P] = v, x(this, X)[v] = P;
  }, u = new WeakSet(), Mr = function(v) {
    v !== x(this, q) && (v === x(this, E) ? Ce(this, E, x(this, X)[v]) : Re(this, Me, Vn).call(this, x(this, te)[v], x(this, X)[v]), Re(this, Me, Vn).call(this, x(this, q), v), Ce(this, q, v));
  }, w);
  e.LRUCache = g;
}), zt = we((e) => {
  he(), ue(), le(), Object.defineProperty(e, "t", { value: !0 }), e.ContainerIterator = e.Container = e.Base = void 0;
  var n = class {
    constructor(h = 0) {
      this.iteratorType = h;
    }
    equals(h) {
      return this.o === h.o;
    }
  };
  e.ContainerIterator = n;
  var t = class {
    constructor() {
      this.i = 0;
    }
    get length() {
      return this.i;
    }
    size() {
      return this.i;
    }
    empty() {
      return this.i === 0;
    }
  };
  e.Base = t;
  var l = class extends t {
  };
  e.Container = l;
}), du = we((e) => {
  he(), ue(), le(), Object.defineProperty(e, "t", { value: !0 }), e.default = void 0;
  var n = zt(), t = class extends n.Base {
    constructor(h = []) {
      super(), this.S = [];
      let o = this;
      h.forEach(function(r) {
        o.push(r);
      });
    }
    clear() {
      this.i = 0, this.S = [];
    }
    push(h) {
      return this.S.push(h), this.i += 1, this.i;
    }
    pop() {
      if (this.i !== 0)
        return this.i -= 1, this.S.pop();
    }
    top() {
      return this.S[this.i - 1];
    }
  }, l = t;
  e.default = l;
}), pu = we((e) => {
  he(), ue(), le(), Object.defineProperty(e, "t", { value: !0 }), e.default = void 0;
  var n = zt(), t = class extends n.Base {
    constructor(h = []) {
      super(), this.j = 0, this.q = [];
      let o = this;
      h.forEach(function(r) {
        o.push(r);
      });
    }
    clear() {
      this.q = [], this.i = this.j = 0;
    }
    push(h) {
      let o = this.q.length;
      if (this.j / o > 0.5 && this.j + this.i >= o && o > 4096) {
        let r = this.i;
        for (let s = 0; s < r; ++s)
          this.q[s] = this.q[this.j + s];
        this.j = 0, this.q[this.i] = h;
      } else
        this.q[this.j + this.i] = h;
      return ++this.i;
    }
    pop() {
      if (this.i === 0)
        return;
      let h = this.q[this.j++];
      return this.i -= 1, h;
    }
    front() {
      if (this.i !== 0)
        return this.q[this.j];
    }
  }, l = t;
  e.default = l;
}), gu = we((e) => {
  he(), ue(), le(), Object.defineProperty(e, "t", { value: !0 }), e.default = void 0;
  var n = zt(), t = class extends n.Base {
    constructor(h = [], o = function(s, i) {
      return s > i ? -1 : s < i ? 1 : 0;
    }, r = !0) {
      if (super(), this.v = o, Array.isArray(h))
        this.C = r ? [...h] : h;
      else {
        this.C = [];
        let i = this;
        h.forEach(function(a) {
          i.C.push(a);
        });
      }
      this.i = this.C.length;
      let s = this.i >> 1;
      for (let i = this.i - 1 >> 1; i >= 0; --i)
        this.k(i, s);
    }
    m(h) {
      let o = this.C[h];
      for (; h > 0; ) {
        let r = h - 1 >> 1, s = this.C[r];
        if (this.v(s, o) <= 0)
          break;
        this.C[h] = s, h = r;
      }
      this.C[h] = o;
    }
    k(h, o) {
      let r = this.C[h];
      for (; h < o; ) {
        let s = h << 1 | 1, i = s + 1, a = this.C[s];
        if (i < this.i && this.v(a, this.C[i]) > 0 && (s = i, a = this.C[i]), this.v(a, r) >= 0)
          break;
        this.C[h] = a, h = s;
      }
      this.C[h] = r;
    }
    clear() {
      this.i = 0, this.C.length = 0;
    }
    push(h) {
      this.C.push(h), this.m(this.i), this.i += 1;
    }
    pop() {
      if (this.i === 0)
        return;
      let h = this.C[0], o = this.C.pop();
      return this.i -= 1, this.i && (this.C[0] = o, this.k(0, this.i >> 1)), h;
    }
    top() {
      return this.C[0];
    }
    find(h) {
      return this.C.indexOf(h) >= 0;
    }
    remove(h) {
      let o = this.C.indexOf(h);
      return o < 0 ? !1 : (o === 0 ? this.pop() : o === this.i - 1 ? (this.C.pop(), this.i -= 1) : (this.C.splice(o, 1, this.C.pop()), this.i -= 1, this.m(o), this.k(o, this.i >> 1)), !0);
    }
    updateItem(h) {
      let o = this.C.indexOf(h);
      return o < 0 ? !1 : (this.m(o), this.k(o, this.i >> 1), !0);
    }
    toArray() {
      return [...this.C];
    }
  }, l = t;
  e.default = l;
}), ho = we((e) => {
  he(), ue(), le(), Object.defineProperty(e, "t", { value: !0 }), e.default = void 0;
  var n = zt(), t = class extends n.Container {
  }, l = t;
  e.default = l;
}), Kt = we((e) => {
  he(), ue(), le(), Object.defineProperty(e, "t", { value: !0 }), e.throwIteratorAccessError = n;
  function n() {
    throw new RangeError("Iterator access denied!");
  }
}), ea = we((e) => {
  he(), ue(), le(), Object.defineProperty(e, "t", { value: !0 }), e.RandomIterator = void 0;
  var n = zt(), t = Kt(), l = class extends n.ContainerIterator {
    constructor(h, o) {
      super(o), this.o = h, this.iteratorType === 0 ? (this.pre = function() {
        return this.o === 0 && (0, t.throwIteratorAccessError)(), this.o -= 1, this;
      }, this.next = function() {
        return this.o === this.container.size() && (0, t.throwIteratorAccessError)(), this.o += 1, this;
      }) : (this.pre = function() {
        return this.o === this.container.size() - 1 && (0, t.throwIteratorAccessError)(), this.o += 1, this;
      }, this.next = function() {
        return this.o === -1 && (0, t.throwIteratorAccessError)(), this.o -= 1, this;
      });
    }
    get pointer() {
      return this.container.getElementByPos(this.o);
    }
    set pointer(h) {
      this.container.setElementByPos(this.o, h);
    }
  };
  e.RandomIterator = l;
}), bu = we((e) => {
  he(), ue(), le(), Object.defineProperty(e, "t", { value: !0 }), e.default = void 0;
  var n = l(ho()), t = ea();
  function l(s) {
    return s && s.t ? s : { default: s };
  }
  var h = class ta extends t.RandomIterator {
    constructor(i, a, c) {
      super(i, c), this.container = a;
    }
    copy() {
      return new ta(this.o, this.container, this.iteratorType);
    }
  }, o = class extends n.default {
    constructor(s = [], i = !0) {
      if (super(), Array.isArray(s))
        this.J = i ? [...s] : s, this.i = s.length;
      else {
        this.J = [];
        let a = this;
        s.forEach(function(c) {
          a.pushBack(c);
        });
      }
    }
    clear() {
      this.i = 0, this.J.length = 0;
    }
    begin() {
      return new h(0, this);
    }
    end() {
      return new h(this.i, this);
    }
    rBegin() {
      return new h(this.i - 1, this, 1);
    }
    rEnd() {
      return new h(-1, this, 1);
    }
    front() {
      return this.J[0];
    }
    back() {
      return this.J[this.i - 1];
    }
    getElementByPos(s) {
      if (s < 0 || s > this.i - 1)
        throw new RangeError();
      return this.J[s];
    }
    eraseElementByPos(s) {
      if (s < 0 || s > this.i - 1)
        throw new RangeError();
      return this.J.splice(s, 1), this.i -= 1, this.i;
    }
    eraseElementByValue(s) {
      let i = 0;
      for (let a = 0; a < this.i; ++a)
        this.J[a] !== s && (this.J[i++] = this.J[a]);
      return this.i = this.J.length = i, this.i;
    }
    eraseElementByIterator(s) {
      let i = s.o;
      return s = s.next(), this.eraseElementByPos(i), s;
    }
    pushBack(s) {
      return this.J.push(s), this.i += 1, this.i;
    }
    popBack() {
      if (this.i !== 0)
        return this.i -= 1, this.J.pop();
    }
    setElementByPos(s, i) {
      if (s < 0 || s > this.i - 1)
        throw new RangeError();
      this.J[s] = i;
    }
    insert(s, i, a = 1) {
      if (s < 0 || s > this.i)
        throw new RangeError();
      return this.J.splice(s, 0, ...new Array(a).fill(i)), this.i += a, this.i;
    }
    find(s) {
      for (let i = 0; i < this.i; ++i)
        if (this.J[i] === s)
          return new h(i, this);
      return this.end();
    }
    reverse() {
      this.J.reverse();
    }
    unique() {
      let s = 1;
      for (let i = 1; i < this.i; ++i)
        this.J[i] !== this.J[i - 1] && (this.J[s++] = this.J[i]);
      return this.i = this.J.length = s, this.i;
    }
    sort(s) {
      this.J.sort(s);
    }
    forEach(s) {
      for (let i = 0; i < this.i; ++i)
        s(this.J[i], i, this);
    }
    [Symbol.iterator]() {
      return (function* () {
        yield* this.J;
      }).bind(this)();
    }
  }, r = o;
  e.default = r;
}), mu = we((e) => {
  he(), ue(), le(), Object.defineProperty(e, "t", { value: !0 }), e.default = void 0;
  var n = h(ho()), t = zt(), l = Kt();
  function h(i) {
    return i && i.t ? i : { default: i };
  }
  var o = class ra extends t.ContainerIterator {
    constructor(a, c, d, g) {
      super(g), this.o = a, this.h = c, this.container = d, this.iteratorType === 0 ? (this.pre = function() {
        return this.o.L === this.h && (0, l.throwIteratorAccessError)(), this.o = this.o.L, this;
      }, this.next = function() {
        return this.o === this.h && (0, l.throwIteratorAccessError)(), this.o = this.o.B, this;
      }) : (this.pre = function() {
        return this.o.B === this.h && (0, l.throwIteratorAccessError)(), this.o = this.o.B, this;
      }, this.next = function() {
        return this.o === this.h && (0, l.throwIteratorAccessError)(), this.o = this.o.L, this;
      });
    }
    get pointer() {
      return this.o === this.h && (0, l.throwIteratorAccessError)(), this.o.l;
    }
    set pointer(a) {
      this.o === this.h && (0, l.throwIteratorAccessError)(), this.o.l = a;
    }
    copy() {
      return new ra(this.o, this.h, this.container, this.iteratorType);
    }
  }, r = class extends n.default {
    constructor(i = []) {
      super(), this.h = {}, this.p = this._ = this.h.L = this.h.B = this.h;
      let a = this;
      i.forEach(function(c) {
        a.pushBack(c);
      });
    }
    V(i) {
      let { L: a, B: c } = i;
      a.B = c, c.L = a, i === this.p && (this.p = c), i === this._ && (this._ = a), this.i -= 1;
    }
    G(i, a) {
      let c = a.B, d = { l: i, L: a, B: c };
      a.B = d, c.L = d, a === this.h && (this.p = d), c === this.h && (this._ = d), this.i += 1;
    }
    clear() {
      this.i = 0, this.p = this._ = this.h.L = this.h.B = this.h;
    }
    begin() {
      return new o(this.p, this.h, this);
    }
    end() {
      return new o(this.h, this.h, this);
    }
    rBegin() {
      return new o(this._, this.h, this, 1);
    }
    rEnd() {
      return new o(this.h, this.h, this, 1);
    }
    front() {
      return this.p.l;
    }
    back() {
      return this._.l;
    }
    getElementByPos(i) {
      if (i < 0 || i > this.i - 1)
        throw new RangeError();
      let a = this.p;
      for (; i--; )
        a = a.B;
      return a.l;
    }
    eraseElementByPos(i) {
      if (i < 0 || i > this.i - 1)
        throw new RangeError();
      let a = this.p;
      for (; i--; )
        a = a.B;
      return this.V(a), this.i;
    }
    eraseElementByValue(i) {
      let a = this.p;
      for (; a !== this.h; )
        a.l === i && this.V(a), a = a.B;
      return this.i;
    }
    eraseElementByIterator(i) {
      let a = i.o;
      return a === this.h && (0, l.throwIteratorAccessError)(), i = i.next(), this.V(a), i;
    }
    pushBack(i) {
      return this.G(i, this._), this.i;
    }
    popBack() {
      if (this.i === 0)
        return;
      let i = this._.l;
      return this.V(this._), i;
    }
    pushFront(i) {
      return this.G(i, this.h), this.i;
    }
    popFront() {
      if (this.i === 0)
        return;
      let i = this.p.l;
      return this.V(this.p), i;
    }
    setElementByPos(i, a) {
      if (i < 0 || i > this.i - 1)
        throw new RangeError();
      let c = this.p;
      for (; i--; )
        c = c.B;
      c.l = a;
    }
    insert(i, a, c = 1) {
      if (i < 0 || i > this.i)
        throw new RangeError();
      if (c <= 0)
        return this.i;
      if (i === 0)
        for (; c--; )
          this.pushFront(a);
      else if (i === this.i)
        for (; c--; )
          this.pushBack(a);
      else {
        let d = this.p;
        for (let b = 1; b < i; ++b)
          d = d.B;
        let g = d.B;
        for (this.i += c; c--; )
          d.B = { l: a, L: d }, d.B.L = d, d = d.B;
        d.B = g, g.L = d;
      }
      return this.i;
    }
    find(i) {
      let a = this.p;
      for (; a !== this.h; ) {
        if (a.l === i)
          return new o(a, this.h, this);
        a = a.B;
      }
      return this.end();
    }
    reverse() {
      if (this.i <= 1)
        return;
      let i = this.p, a = this._, c = 0;
      for (; c << 1 < this.i; ) {
        let d = i.l;
        i.l = a.l, a.l = d, i = i.B, a = a.L, c += 1;
      }
    }
    unique() {
      if (this.i <= 1)
        return this.i;
      let i = this.p;
      for (; i !== this.h; ) {
        let a = i;
        for (; a.B !== this.h && a.l === a.B.l; )
          a = a.B, this.i -= 1;
        i.B = a.B, i.B.L = i, i = i.B;
      }
      return this.i;
    }
    sort(i) {
      if (this.i <= 1)
        return;
      let a = [];
      this.forEach(function(d) {
        a.push(d);
      }), a.sort(i);
      let c = this.p;
      a.forEach(function(d) {
        c.l = d, c = c.B;
      });
    }
    merge(i) {
      let a = this;
      if (this.i === 0)
        i.forEach(function(c) {
          a.pushBack(c);
        });
      else {
        let c = this.p;
        i.forEach(function(d) {
          for (; c !== a.h && c.l <= d; )
            c = c.B;
          a.G(d, c.L);
        });
      }
      return this.i;
    }
    forEach(i) {
      let a = this.p, c = 0;
      for (; a !== this.h; )
        i(a.l, c++, this), a = a.B;
    }
    [Symbol.iterator]() {
      return (function* () {
        if (this.i === 0)
          return;
        let i = this.p;
        for (; i !== this.h; )
          yield i.l, i = i.B;
      }).bind(this)();
    }
  }, s = r;
  e.default = s;
}), yu = we((e) => {
  he(), ue(), le(), Object.defineProperty(e, "t", { value: !0 }), e.default = void 0;
  var n = l(ho()), t = ea();
  function l(s) {
    return s && s.t ? s : { default: s };
  }
  var h = class ia extends t.RandomIterator {
    constructor(i, a, c) {
      super(i, c), this.container = a;
    }
    copy() {
      return new ia(this.o, this.container, this.iteratorType);
    }
  }, o = class extends n.default {
    constructor(s = [], i = 4096) {
      super(), this.j = 0, this.D = 0, this.R = 0, this.N = 0, this.P = 0, this.A = [];
      let a = (() => {
        if (typeof s.length == "number")
          return s.length;
        if (typeof s.size == "number")
          return s.size;
        if (typeof s.size == "function")
          return s.size();
        throw new TypeError("Cannot get the length or size of the container");
      })();
      this.F = i, this.P = Math.max(Math.ceil(a / this.F), 1);
      for (let g = 0; g < this.P; ++g)
        this.A.push(new Array(this.F));
      let c = Math.ceil(a / this.F);
      this.j = this.R = (this.P >> 1) - (c >> 1), this.D = this.N = this.F - a % this.F >> 1;
      let d = this;
      s.forEach(function(g) {
        d.pushBack(g);
      });
    }
    T() {
      let s = [], i = Math.max(this.P >> 1, 1);
      for (let a = 0; a < i; ++a)
        s[a] = new Array(this.F);
      for (let a = this.j; a < this.P; ++a)
        s[s.length] = this.A[a];
      for (let a = 0; a < this.R; ++a)
        s[s.length] = this.A[a];
      s[s.length] = [...this.A[this.R]], this.j = i, this.R = s.length - 1;
      for (let a = 0; a < i; ++a)
        s[s.length] = new Array(this.F);
      this.A = s, this.P = s.length;
    }
    O(s) {
      let i = this.D + s + 1, a = i % this.F, c = a - 1, d = this.j + (i - a) / this.F;
      return a === 0 && (d -= 1), d %= this.P, c < 0 && (c += this.F), { curNodeBucketIndex: d, curNodePointerIndex: c };
    }
    clear() {
      this.A = [new Array(this.F)], this.P = 1, this.j = this.R = this.i = 0, this.D = this.N = this.F >> 1;
    }
    begin() {
      return new h(0, this);
    }
    end() {
      return new h(this.i, this);
    }
    rBegin() {
      return new h(this.i - 1, this, 1);
    }
    rEnd() {
      return new h(-1, this, 1);
    }
    front() {
      if (this.i !== 0)
        return this.A[this.j][this.D];
    }
    back() {
      if (this.i !== 0)
        return this.A[this.R][this.N];
    }
    pushBack(s) {
      return this.i && (this.N < this.F - 1 ? this.N += 1 : this.R < this.P - 1 ? (this.R += 1, this.N = 0) : (this.R = 0, this.N = 0), this.R === this.j && this.N === this.D && this.T()), this.i += 1, this.A[this.R][this.N] = s, this.i;
    }
    popBack() {
      if (this.i === 0)
        return;
      let s = this.A[this.R][this.N];
      return this.i !== 1 && (this.N > 0 ? this.N -= 1 : this.R > 0 ? (this.R -= 1, this.N = this.F - 1) : (this.R = this.P - 1, this.N = this.F - 1)), this.i -= 1, s;
    }
    pushFront(s) {
      return this.i && (this.D > 0 ? this.D -= 1 : this.j > 0 ? (this.j -= 1, this.D = this.F - 1) : (this.j = this.P - 1, this.D = this.F - 1), this.j === this.R && this.D === this.N && this.T()), this.i += 1, this.A[this.j][this.D] = s, this.i;
    }
    popFront() {
      if (this.i === 0)
        return;
      let s = this.A[this.j][this.D];
      return this.i !== 1 && (this.D < this.F - 1 ? this.D += 1 : this.j < this.P - 1 ? (this.j += 1, this.D = 0) : (this.j = 0, this.D = 0)), this.i -= 1, s;
    }
    getElementByPos(s) {
      if (s < 0 || s > this.i - 1)
        throw new RangeError();
      let { curNodeBucketIndex: i, curNodePointerIndex: a } = this.O(s);
      return this.A[i][a];
    }
    setElementByPos(s, i) {
      if (s < 0 || s > this.i - 1)
        throw new RangeError();
      let { curNodeBucketIndex: a, curNodePointerIndex: c } = this.O(s);
      this.A[a][c] = i;
    }
    insert(s, i, a = 1) {
      if (s < 0 || s > this.i)
        throw new RangeError();
      if (s === 0)
        for (; a--; )
          this.pushFront(i);
      else if (s === this.i)
        for (; a--; )
          this.pushBack(i);
      else {
        let c = [];
        for (let d = s; d < this.i; ++d)
          c.push(this.getElementByPos(d));
        this.cut(s - 1);
        for (let d = 0; d < a; ++d)
          this.pushBack(i);
        for (let d = 0; d < c.length; ++d)
          this.pushBack(c[d]);
      }
      return this.i;
    }
    cut(s) {
      if (s < 0)
        return this.clear(), 0;
      let { curNodeBucketIndex: i, curNodePointerIndex: a } = this.O(s);
      return this.R = i, this.N = a, this.i = s + 1, this.i;
    }
    eraseElementByPos(s) {
      if (s < 0 || s > this.i - 1)
        throw new RangeError();
      if (s === 0)
        this.popFront();
      else if (s === this.i - 1)
        this.popBack();
      else {
        let i = [];
        for (let c = s + 1; c < this.i; ++c)
          i.push(this.getElementByPos(c));
        this.cut(s), this.popBack();
        let a = this;
        i.forEach(function(c) {
          a.pushBack(c);
        });
      }
      return this.i;
    }
    eraseElementByValue(s) {
      if (this.i === 0)
        return 0;
      let i = [];
      for (let c = 0; c < this.i; ++c) {
        let d = this.getElementByPos(c);
        d !== s && i.push(d);
      }
      let a = i.length;
      for (let c = 0; c < a; ++c)
        this.setElementByPos(c, i[c]);
      return this.cut(a - 1);
    }
    eraseElementByIterator(s) {
      let i = s.o;
      return this.eraseElementByPos(i), s = s.next(), s;
    }
    find(s) {
      for (let i = 0; i < this.i; ++i)
        if (this.getElementByPos(i) === s)
          return new h(i, this);
      return this.end();
    }
    reverse() {
      let s = 0, i = this.i - 1;
      for (; s < i; ) {
        let a = this.getElementByPos(s);
        this.setElementByPos(s, this.getElementByPos(i)), this.setElementByPos(i, a), s += 1, i -= 1;
      }
    }
    unique() {
      if (this.i <= 1)
        return this.i;
      let s = 1, i = this.getElementByPos(0);
      for (let a = 1; a < this.i; ++a) {
        let c = this.getElementByPos(a);
        c !== i && (i = c, this.setElementByPos(s++, c));
      }
      for (; this.i > s; )
        this.popBack();
      return this.i;
    }
    sort(s) {
      let i = [];
      for (let a = 0; a < this.i; ++a)
        i.push(this.getElementByPos(a));
      i.sort(s);
      for (let a = 0; a < this.i; ++a)
        this.setElementByPos(a, i[a]);
    }
    shrinkToFit() {
      if (this.i === 0)
        return;
      let s = [];
      this.forEach(function(i) {
        s.push(i);
      }), this.P = Math.max(Math.ceil(this.i / this.F), 1), this.i = this.j = this.R = this.D = this.N = 0, this.A = [];
      for (let i = 0; i < this.P; ++i)
        this.A.push(new Array(this.F));
      for (let i = 0; i < s.length; ++i)
        this.pushBack(s[i]);
    }
    forEach(s) {
      for (let i = 0; i < this.i; ++i)
        s(this.getElementByPos(i), i, this);
    }
    [Symbol.iterator]() {
      return (function* () {
        for (let s = 0; s < this.i; ++s)
          yield this.getElementByPos(s);
      }).bind(this)();
    }
  }, r = o;
  e.default = r;
}), vu = we((e) => {
  he(), ue(), le(), Object.defineProperty(e, "t", { value: !0 }), e.TreeNodeEnableIndex = e.TreeNode = void 0;
  var n = class {
    constructor(l, h) {
      this.ee = 1, this.u = void 0, this.l = void 0, this.U = void 0, this.W = void 0, this.tt = void 0, this.u = l, this.l = h;
    }
    L() {
      let l = this;
      if (l.ee === 1 && l.tt.tt === l)
        l = l.W;
      else if (l.U)
        for (l = l.U; l.W; )
          l = l.W;
      else {
        let h = l.tt;
        for (; h.U === l; )
          l = h, h = l.tt;
        l = h;
      }
      return l;
    }
    B() {
      let l = this;
      if (l.W) {
        for (l = l.W; l.U; )
          l = l.U;
        return l;
      } else {
        let h = l.tt;
        for (; h.W === l; )
          l = h, h = l.tt;
        return l.W !== h ? h : l;
      }
    }
    te() {
      let l = this.tt, h = this.W, o = h.U;
      return l.tt === this ? l.tt = h : l.U === this ? l.U = h : l.W = h, h.tt = l, h.U = this, this.tt = h, this.W = o, o && (o.tt = this), h;
    }
    se() {
      let l = this.tt, h = this.U, o = h.W;
      return l.tt === this ? l.tt = h : l.U === this ? l.U = h : l.W = h, h.tt = l, h.W = this, this.tt = h, this.U = o, o && (o.tt = this), h;
    }
  };
  e.TreeNode = n;
  var t = class extends n {
    constructor() {
      super(...arguments), this.rt = 1;
    }
    te() {
      let l = super.te();
      return this.ie(), l.ie(), l;
    }
    se() {
      let l = super.se();
      return this.ie(), l.ie(), l;
    }
    ie() {
      this.rt = 1, this.U && (this.rt += this.U.rt), this.W && (this.rt += this.W.rt);
    }
  };
  e.TreeNodeEnableIndex = t;
}), na = we((e) => {
  he(), ue(), le(), Object.defineProperty(e, "t", { value: !0 }), e.default = void 0;
  var n = vu(), t = zt(), l = Kt(), h = class extends t.Container {
    constructor(r = function(i, a) {
      return i < a ? -1 : i > a ? 1 : 0;
    }, s = !1) {
      super(), this.Y = void 0, this.v = r, s ? (this.re = n.TreeNodeEnableIndex, this.M = function(i, a, c) {
        let d = this.ne(i, a, c);
        if (d) {
          let g = d.tt;
          for (; g !== this.h; )
            g.rt += 1, g = g.tt;
          let b = this.he(d);
          if (b) {
            let { parentNode: m, grandParent: y, curNode: T } = b;
            m.ie(), y.ie(), T.ie();
          }
        }
        return this.i;
      }, this.V = function(i) {
        let a = this.fe(i);
        for (; a !== this.h; )
          a.rt -= 1, a = a.tt;
      }) : (this.re = n.TreeNode, this.M = function(i, a, c) {
        let d = this.ne(i, a, c);
        return d && this.he(d), this.i;
      }, this.V = this.fe), this.h = new this.re();
    }
    X(r, s) {
      let i = this.h;
      for (; r; ) {
        let a = this.v(r.u, s);
        if (a < 0)
          r = r.W;
        else if (a > 0)
          i = r, r = r.U;
        else
          return r;
      }
      return i;
    }
    Z(r, s) {
      let i = this.h;
      for (; r; )
        this.v(r.u, s) <= 0 ? r = r.W : (i = r, r = r.U);
      return i;
    }
    $(r, s) {
      let i = this.h;
      for (; r; ) {
        let a = this.v(r.u, s);
        if (a < 0)
          i = r, r = r.W;
        else if (a > 0)
          r = r.U;
        else
          return r;
      }
      return i;
    }
    rr(r, s) {
      let i = this.h;
      for (; r; )
        this.v(r.u, s) < 0 ? (i = r, r = r.W) : r = r.U;
      return i;
    }
    ue(r) {
      for (; ; ) {
        let s = r.tt;
        if (s === this.h)
          return;
        if (r.ee === 1) {
          r.ee = 0;
          return;
        }
        if (r === s.U) {
          let i = s.W;
          if (i.ee === 1)
            i.ee = 0, s.ee = 1, s === this.Y ? this.Y = s.te() : s.te();
          else if (i.W && i.W.ee === 1) {
            i.ee = s.ee, s.ee = 0, i.W.ee = 0, s === this.Y ? this.Y = s.te() : s.te();
            return;
          } else
            i.U && i.U.ee === 1 ? (i.ee = 1, i.U.ee = 0, i.se()) : (i.ee = 1, r = s);
        } else {
          let i = s.U;
          if (i.ee === 1)
            i.ee = 0, s.ee = 1, s === this.Y ? this.Y = s.se() : s.se();
          else if (i.U && i.U.ee === 1) {
            i.ee = s.ee, s.ee = 0, i.U.ee = 0, s === this.Y ? this.Y = s.se() : s.se();
            return;
          } else
            i.W && i.W.ee === 1 ? (i.ee = 1, i.W.ee = 0, i.te()) : (i.ee = 1, r = s);
        }
      }
    }
    fe(r) {
      if (this.i === 1)
        return this.clear(), this.h;
      let s = r;
      for (; s.U || s.W; ) {
        if (s.W)
          for (s = s.W; s.U; )
            s = s.U;
        else
          s = s.U;
        [r.u, s.u] = [s.u, r.u], [r.l, s.l] = [s.l, r.l], r = s;
      }
      this.h.U === s ? this.h.U = s.tt : this.h.W === s && (this.h.W = s.tt), this.ue(s);
      let i = s.tt;
      return s === i.U ? i.U = void 0 : i.W = void 0, this.i -= 1, this.Y.ee = 0, i;
    }
    oe(r, s) {
      return r === void 0 ? !1 : this.oe(r.U, s) || s(r) ? !0 : this.oe(r.W, s);
    }
    he(r) {
      for (; ; ) {
        let s = r.tt;
        if (s.ee === 0)
          return;
        let i = s.tt;
        if (s === i.U) {
          let a = i.W;
          if (a && a.ee === 1) {
            if (a.ee = s.ee = 0, i === this.Y)
              return;
            i.ee = 1, r = i;
            continue;
          } else if (r === s.W) {
            if (r.ee = 0, r.U && (r.U.tt = s), r.W && (r.W.tt = i), s.W = r.U, i.U = r.W, r.U = s, r.W = i, i === this.Y)
              this.Y = r, this.h.tt = r;
            else {
              let c = i.tt;
              c.U === i ? c.U = r : c.W = r;
            }
            return r.tt = i.tt, s.tt = r, i.tt = r, i.ee = 1, { parentNode: s, grandParent: i, curNode: r };
          } else
            s.ee = 0, i === this.Y ? this.Y = i.se() : i.se(), i.ee = 1;
        } else {
          let a = i.U;
          if (a && a.ee === 1) {
            if (a.ee = s.ee = 0, i === this.Y)
              return;
            i.ee = 1, r = i;
            continue;
          } else if (r === s.U) {
            if (r.ee = 0, r.U && (r.U.tt = i), r.W && (r.W.tt = s), i.W = r.U, s.U = r.W, r.U = i, r.W = s, i === this.Y)
              this.Y = r, this.h.tt = r;
            else {
              let c = i.tt;
              c.U === i ? c.U = r : c.W = r;
            }
            return r.tt = i.tt, s.tt = r, i.tt = r, i.ee = 1, { parentNode: s, grandParent: i, curNode: r };
          } else
            s.ee = 0, i === this.Y ? this.Y = i.te() : i.te(), i.ee = 1;
        }
        return;
      }
    }
    ne(r, s, i) {
      if (this.Y === void 0) {
        this.i += 1, this.Y = new this.re(r, s), this.Y.ee = 0, this.Y.tt = this.h, this.h.tt = this.Y, this.h.U = this.Y, this.h.W = this.Y;
        return;
      }
      let a, c = this.h.U, d = this.v(c.u, r);
      if (d === 0) {
        c.l = s;
        return;
      } else if (d > 0)
        c.U = new this.re(r, s), c.U.tt = c, a = c.U, this.h.U = a;
      else {
        let g = this.h.W, b = this.v(g.u, r);
        if (b === 0) {
          g.l = s;
          return;
        } else if (b < 0)
          g.W = new this.re(r, s), g.W.tt = g, a = g.W, this.h.W = a;
        else {
          if (i !== void 0) {
            let m = i.o;
            if (m !== this.h) {
              let y = this.v(m.u, r);
              if (y === 0) {
                m.l = s;
                return;
              } else if (y > 0) {
                let T = m.L(), U = this.v(T.u, r);
                if (U === 0) {
                  T.l = s;
                  return;
                } else
                  U < 0 && (a = new this.re(r, s), T.W === void 0 ? (T.W = a, a.tt = T) : (m.U = a, a.tt = m));
              }
            }
          }
          if (a === void 0)
            for (a = this.Y; ; ) {
              let m = this.v(a.u, r);
              if (m > 0) {
                if (a.U === void 0) {
                  a.U = new this.re(r, s), a.U.tt = a, a = a.U;
                  break;
                }
                a = a.U;
              } else if (m < 0) {
                if (a.W === void 0) {
                  a.W = new this.re(r, s), a.W.tt = a, a = a.W;
                  break;
                }
                a = a.W;
              } else {
                a.l = s;
                return;
              }
            }
        }
      }
      return this.i += 1, a;
    }
    I(r, s) {
      for (; r; ) {
        let i = this.v(r.u, s);
        if (i < 0)
          r = r.W;
        else if (i > 0)
          r = r.U;
        else
          return r;
      }
      return r || this.h;
    }
    clear() {
      this.i = 0, this.Y = void 0, this.h.tt = void 0, this.h.U = this.h.W = void 0;
    }
    updateKeyByIterator(r, s) {
      let i = r.o;
      if (i === this.h && (0, l.throwIteratorAccessError)(), this.i === 1)
        return i.u = s, !0;
      if (i === this.h.U)
        return this.v(i.B().u, s) > 0 ? (i.u = s, !0) : !1;
      if (i === this.h.W)
        return this.v(i.L().u, s) < 0 ? (i.u = s, !0) : !1;
      let a = i.L().u;
      if (this.v(a, s) >= 0)
        return !1;
      let c = i.B().u;
      return this.v(c, s) <= 0 ? !1 : (i.u = s, !0);
    }
    eraseElementByPos(r) {
      if (r < 0 || r > this.i - 1)
        throw new RangeError();
      let s = 0, i = this;
      return this.oe(this.Y, function(a) {
        return r === s ? (i.V(a), !0) : (s += 1, !1);
      }), this.i;
    }
    eraseElementByKey(r) {
      if (this.i === 0)
        return !1;
      let s = this.I(this.Y, r);
      return s === this.h ? !1 : (this.V(s), !0);
    }
    eraseElementByIterator(r) {
      let s = r.o;
      s === this.h && (0, l.throwIteratorAccessError)();
      let i = s.W === void 0;
      return r.iteratorType === 0 ? i && r.next() : (!i || s.U === void 0) && r.next(), this.V(s), r;
    }
    forEach(r) {
      let s = 0;
      for (let i of this)
        r(i, s++, this);
    }
    getElementByPos(r) {
      if (r < 0 || r > this.i - 1)
        throw new RangeError();
      let s, i = 0;
      for (let a of this) {
        if (i === r) {
          s = a;
          break;
        }
        i += 1;
      }
      return s;
    }
    getHeight() {
      if (this.i === 0)
        return 0;
      let r = function(s) {
        return s ? Math.max(r(s.U), r(s.W)) + 1 : 0;
      };
      return r(this.Y);
    }
  }, o = h;
  e.default = o;
}), oa = we((e) => {
  he(), ue(), le(), Object.defineProperty(e, "t", { value: !0 }), e.default = void 0;
  var n = zt(), t = Kt(), l = class extends n.ContainerIterator {
    constructor(o, r, s) {
      super(s), this.o = o, this.h = r, this.iteratorType === 0 ? (this.pre = function() {
        return this.o === this.h.U && (0, t.throwIteratorAccessError)(), this.o = this.o.L(), this;
      }, this.next = function() {
        return this.o === this.h && (0, t.throwIteratorAccessError)(), this.o = this.o.B(), this;
      }) : (this.pre = function() {
        return this.o === this.h.W && (0, t.throwIteratorAccessError)(), this.o = this.o.B(), this;
      }, this.next = function() {
        return this.o === this.h && (0, t.throwIteratorAccessError)(), this.o = this.o.L(), this;
      });
    }
    get index() {
      let o = this.o, r = this.h.tt;
      if (o === this.h)
        return r ? r.rt - 1 : 0;
      let s = 0;
      for (o.U && (s += o.U.rt); o !== r; ) {
        let i = o.tt;
        o === i.W && (s += 1, i.U && (s += i.U.rt)), o = i;
      }
      return s;
    }
  }, h = l;
  e.default = h;
}), wu = we((e) => {
  he(), ue(), le(), Object.defineProperty(e, "t", { value: !0 }), e.default = void 0;
  var n = h(na()), t = h(oa()), l = Kt();
  function h(i) {
    return i && i.t ? i : { default: i };
  }
  var o = class sa extends t.default {
    constructor(a, c, d, g) {
      super(a, c, g), this.container = d;
    }
    get pointer() {
      return this.o === this.h && (0, l.throwIteratorAccessError)(), this.o.u;
    }
    copy() {
      return new sa(this.o, this.h, this.container, this.iteratorType);
    }
  }, r = class extends n.default {
    constructor(i = [], a, c) {
      super(a, c);
      let d = this;
      i.forEach(function(g) {
        d.insert(g);
      });
    }
    *K(i) {
      i !== void 0 && (yield* this.K(i.U), yield i.u, yield* this.K(i.W));
    }
    begin() {
      return new o(this.h.U || this.h, this.h, this);
    }
    end() {
      return new o(this.h, this.h, this);
    }
    rBegin() {
      return new o(this.h.W || this.h, this.h, this, 1);
    }
    rEnd() {
      return new o(this.h, this.h, this, 1);
    }
    front() {
      return this.h.U ? this.h.U.u : void 0;
    }
    back() {
      return this.h.W ? this.h.W.u : void 0;
    }
    insert(i, a) {
      return this.M(i, void 0, a);
    }
    find(i) {
      let a = this.I(this.Y, i);
      return new o(a, this.h, this);
    }
    lowerBound(i) {
      let a = this.X(this.Y, i);
      return new o(a, this.h, this);
    }
    upperBound(i) {
      let a = this.Z(this.Y, i);
      return new o(a, this.h, this);
    }
    reverseLowerBound(i) {
      let a = this.$(this.Y, i);
      return new o(a, this.h, this);
    }
    reverseUpperBound(i) {
      let a = this.rr(this.Y, i);
      return new o(a, this.h, this);
    }
    union(i) {
      let a = this;
      return i.forEach(function(c) {
        a.insert(c);
      }), this.i;
    }
    [Symbol.iterator]() {
      return this.K(this.Y);
    }
  }, s = r;
  e.default = s;
}), _u = we((e) => {
  he(), ue(), le(), Object.defineProperty(e, "t", { value: !0 }), e.default = void 0;
  var n = h(na()), t = h(oa()), l = Kt();
  function h(i) {
    return i && i.t ? i : { default: i };
  }
  var o = class aa extends t.default {
    constructor(a, c, d, g) {
      super(a, c, g), this.container = d;
    }
    get pointer() {
      this.o === this.h && (0, l.throwIteratorAccessError)();
      let a = this;
      return new Proxy([], { get(c, d) {
        if (d === "0")
          return a.o.u;
        if (d === "1")
          return a.o.l;
      }, set(c, d, g) {
        if (d !== "1")
          throw new TypeError("props must be 1");
        return a.o.l = g, !0;
      } });
    }
    copy() {
      return new aa(this.o, this.h, this.container, this.iteratorType);
    }
  }, r = class extends n.default {
    constructor(i = [], a, c) {
      super(a, c);
      let d = this;
      i.forEach(function(g) {
        d.setElement(g[0], g[1]);
      });
    }
    *K(i) {
      i !== void 0 && (yield* this.K(i.U), yield [i.u, i.l], yield* this.K(i.W));
    }
    begin() {
      return new o(this.h.U || this.h, this.h, this);
    }
    end() {
      return new o(this.h, this.h, this);
    }
    rBegin() {
      return new o(this.h.W || this.h, this.h, this, 1);
    }
    rEnd() {
      return new o(this.h, this.h, this, 1);
    }
    front() {
      if (this.i === 0)
        return;
      let i = this.h.U;
      return [i.u, i.l];
    }
    back() {
      if (this.i === 0)
        return;
      let i = this.h.W;
      return [i.u, i.l];
    }
    lowerBound(i) {
      let a = this.X(this.Y, i);
      return new o(a, this.h, this);
    }
    upperBound(i) {
      let a = this.Z(this.Y, i);
      return new o(a, this.h, this);
    }
    reverseLowerBound(i) {
      let a = this.$(this.Y, i);
      return new o(a, this.h, this);
    }
    reverseUpperBound(i) {
      let a = this.rr(this.Y, i);
      return new o(a, this.h, this);
    }
    setElement(i, a, c) {
      return this.M(i, a, c);
    }
    find(i) {
      let a = this.I(this.Y, i);
      return new o(a, this.h, this);
    }
    getElementByKey(i) {
      return this.I(this.Y, i).l;
    }
    union(i) {
      let a = this;
      return i.forEach(function(c) {
        a.setElement(c[0], c[1]);
      }), this.i;
    }
    [Symbol.iterator]() {
      return this.K(this.Y);
    }
  }, s = r;
  e.default = s;
}), la = we((e) => {
  he(), ue(), le(), Object.defineProperty(e, "t", { value: !0 }), e.default = n;
  function n(t) {
    let l = typeof t;
    return l === "object" && t !== null || l === "function";
  }
}), ua = we((e) => {
  he(), ue(), le(), Object.defineProperty(e, "t", { value: !0 }), e.HashContainerIterator = e.HashContainer = void 0;
  var n = zt(), t = h(la()), l = Kt();
  function h(s) {
    return s && s.t ? s : { default: s };
  }
  var o = class extends n.ContainerIterator {
    constructor(s, i, a) {
      super(a), this.o = s, this.h = i, this.iteratorType === 0 ? (this.pre = function() {
        return this.o.L === this.h && (0, l.throwIteratorAccessError)(), this.o = this.o.L, this;
      }, this.next = function() {
        return this.o === this.h && (0, l.throwIteratorAccessError)(), this.o = this.o.B, this;
      }) : (this.pre = function() {
        return this.o.B === this.h && (0, l.throwIteratorAccessError)(), this.o = this.o.B, this;
      }, this.next = function() {
        return this.o === this.h && (0, l.throwIteratorAccessError)(), this.o = this.o.L, this;
      });
    }
  };
  e.HashContainerIterator = o;
  var r = class extends n.Container {
    constructor() {
      super(), this.H = [], this.g = {}, this.HASH_TAG = Symbol("@@HASH_TAG"), Object.setPrototypeOf(this.g, null), this.h = {}, this.h.L = this.h.B = this.p = this._ = this.h;
    }
    V(s) {
      let { L: i, B: a } = s;
      i.B = a, a.L = i, s === this.p && (this.p = a), s === this._ && (this._ = i), this.i -= 1;
    }
    M(s, i, a) {
      a === void 0 && (a = (0, t.default)(s));
      let c;
      if (a) {
        let d = s[this.HASH_TAG];
        if (d !== void 0)
          return this.H[d].l = i, this.i;
        Object.defineProperty(s, this.HASH_TAG, { value: this.H.length, configurable: !0 }), c = { u: s, l: i, L: this._, B: this.h }, this.H.push(c);
      } else {
        let d = this.g[s];
        if (d)
          return d.l = i, this.i;
        c = { u: s, l: i, L: this._, B: this.h }, this.g[s] = c;
      }
      return this.i === 0 ? (this.p = c, this.h.B = c) : this._.B = c, this._ = c, this.h.L = c, ++this.i;
    }
    I(s, i) {
      if (i === void 0 && (i = (0, t.default)(s)), i) {
        let a = s[this.HASH_TAG];
        return a === void 0 ? this.h : this.H[a];
      } else
        return this.g[s] || this.h;
    }
    clear() {
      let s = this.HASH_TAG;
      this.H.forEach(function(i) {
        delete i.u[s];
      }), this.H = [], this.g = {}, Object.setPrototypeOf(this.g, null), this.i = 0, this.p = this._ = this.h.L = this.h.B = this.h;
    }
    eraseElementByKey(s, i) {
      let a;
      if (i === void 0 && (i = (0, t.default)(s)), i) {
        let c = s[this.HASH_TAG];
        if (c === void 0)
          return !1;
        delete s[this.HASH_TAG], a = this.H[c], delete this.H[c];
      } else {
        if (a = this.g[s], a === void 0)
          return !1;
        delete this.g[s];
      }
      return this.V(a), !0;
    }
    eraseElementByIterator(s) {
      let i = s.o;
      return i === this.h && (0, l.throwIteratorAccessError)(), this.V(i), s.next();
    }
    eraseElementByPos(s) {
      if (s < 0 || s > this.i - 1)
        throw new RangeError();
      let i = this.p;
      for (; s--; )
        i = i.B;
      return this.V(i), this.i;
    }
  };
  e.HashContainer = r;
}), Eu = we((e) => {
  he(), ue(), le(), Object.defineProperty(e, "t", { value: !0 }), e.default = void 0;
  var n = ua(), t = Kt(), l = class ha extends n.HashContainerIterator {
    constructor(s, i, a, c) {
      super(s, i, c), this.container = a;
    }
    get pointer() {
      return this.o === this.h && (0, t.throwIteratorAccessError)(), this.o.u;
    }
    copy() {
      return new ha(this.o, this.h, this.container, this.iteratorType);
    }
  }, h = class extends n.HashContainer {
    constructor(r = []) {
      super();
      let s = this;
      r.forEach(function(i) {
        s.insert(i);
      });
    }
    begin() {
      return new l(this.p, this.h, this);
    }
    end() {
      return new l(this.h, this.h, this);
    }
    rBegin() {
      return new l(this._, this.h, this, 1);
    }
    rEnd() {
      return new l(this.h, this.h, this, 1);
    }
    front() {
      return this.p.u;
    }
    back() {
      return this._.u;
    }
    insert(r, s) {
      return this.M(r, void 0, s);
    }
    getElementByPos(r) {
      if (r < 0 || r > this.i - 1)
        throw new RangeError();
      let s = this.p;
      for (; r--; )
        s = s.B;
      return s.u;
    }
    find(r, s) {
      let i = this.I(r, s);
      return new l(i, this.h, this);
    }
    forEach(r) {
      let s = 0, i = this.p;
      for (; i !== this.h; )
        r(i.u, s++, this), i = i.B;
    }
    [Symbol.iterator]() {
      return (function* () {
        let r = this.p;
        for (; r !== this.h; )
          yield r.u, r = r.B;
      }).bind(this)();
    }
  }, o = h;
  e.default = o;
}), Su = we((e) => {
  he(), ue(), le(), Object.defineProperty(e, "t", { value: !0 }), e.default = void 0;
  var n = ua(), t = h(la()), l = Kt();
  function h(i) {
    return i && i.t ? i : { default: i };
  }
  var o = class ca extends n.HashContainerIterator {
    constructor(a, c, d, g) {
      super(a, c, g), this.container = d;
    }
    get pointer() {
      this.o === this.h && (0, l.throwIteratorAccessError)();
      let a = this;
      return new Proxy([], { get(c, d) {
        if (d === "0")
          return a.o.u;
        if (d === "1")
          return a.o.l;
      }, set(c, d, g) {
        if (d !== "1")
          throw new TypeError("props must be 1");
        return a.o.l = g, !0;
      } });
    }
    copy() {
      return new ca(this.o, this.h, this.container, this.iteratorType);
    }
  }, r = class extends n.HashContainer {
    constructor(i = []) {
      super();
      let a = this;
      i.forEach(function(c) {
        a.setElement(c[0], c[1]);
      });
    }
    begin() {
      return new o(this.p, this.h, this);
    }
    end() {
      return new o(this.h, this.h, this);
    }
    rBegin() {
      return new o(this._, this.h, this, 1);
    }
    rEnd() {
      return new o(this.h, this.h, this, 1);
    }
    front() {
      if (this.i !== 0)
        return [this.p.u, this.p.l];
    }
    back() {
      if (this.i !== 0)
        return [this._.u, this._.l];
    }
    setElement(i, a, c) {
      return this.M(i, a, c);
    }
    getElementByKey(i, a) {
      if (a === void 0 && (a = (0, t.default)(i)), a) {
        let d = i[this.HASH_TAG];
        return d !== void 0 ? this.H[d].l : void 0;
      }
      let c = this.g[i];
      return c ? c.l : void 0;
    }
    getElementByPos(i) {
      if (i < 0 || i > this.i - 1)
        throw new RangeError();
      let a = this.p;
      for (; i--; )
        a = a.B;
      return [a.u, a.l];
    }
    find(i, a) {
      let c = this.I(i, a);
      return new o(c, this.h, this);
    }
    forEach(i) {
      let a = 0, c = this.p;
      for (; c !== this.h; )
        i([c.u, c.l], a++, this), c = c.B;
    }
    [Symbol.iterator]() {
      return (function* () {
        let i = this.p;
        for (; i !== this.h; )
          yield [i.u, i.l], i = i.B;
      }).bind(this)();
    }
  }, s = r;
  e.default = s;
}), Au = we((e) => {
  he(), ue(), le(), Object.defineProperty(e, "t", { value: !0 }), Object.defineProperty(e, "Deque", { enumerable: !0, get: function() {
    return r.default;
  } }), Object.defineProperty(e, "HashMap", { enumerable: !0, get: function() {
    return c.default;
  } }), Object.defineProperty(e, "HashSet", { enumerable: !0, get: function() {
    return a.default;
  } }), Object.defineProperty(e, "LinkList", { enumerable: !0, get: function() {
    return o.default;
  } }), Object.defineProperty(e, "OrderedMap", { enumerable: !0, get: function() {
    return i.default;
  } }), Object.defineProperty(e, "OrderedSet", { enumerable: !0, get: function() {
    return s.default;
  } }), Object.defineProperty(e, "PriorityQueue", { enumerable: !0, get: function() {
    return l.default;
  } }), Object.defineProperty(e, "Queue", { enumerable: !0, get: function() {
    return t.default;
  } }), Object.defineProperty(e, "Stack", { enumerable: !0, get: function() {
    return n.default;
  } }), Object.defineProperty(e, "Vector", { enumerable: !0, get: function() {
    return h.default;
  } });
  var n = d(du()), t = d(pu()), l = d(gu()), h = d(bu()), o = d(mu()), r = d(yu()), s = d(wu()), i = d(_u()), a = d(Eu()), c = d(Su());
  function d(g) {
    return g && g.t ? g : { default: g };
  }
}), Iu = we((e, n) => {
  he(), ue(), le();
  var t = Au().OrderedSet, l = Vt()("number-allocator:trace"), h = Vt()("number-allocator:error");
  function o(s, i) {
    this.low = s, this.high = i;
  }
  o.prototype.equals = function(s) {
    return this.low === s.low && this.high === s.high;
  }, o.prototype.compare = function(s) {
    return this.low < s.low && this.high < s.low ? -1 : s.low < this.low && s.high < this.low ? 1 : 0;
  };
  function r(s, i) {
    if (!(this instanceof r))
      return new r(s, i);
    this.min = s, this.max = i, this.ss = new t([], (a, c) => a.compare(c)), l("Create"), this.clear();
  }
  r.prototype.firstVacant = function() {
    return this.ss.size() === 0 ? null : this.ss.front().low;
  }, r.prototype.alloc = function() {
    if (this.ss.size() === 0)
      return l("alloc():empty"), null;
    let s = this.ss.begin(), i = s.pointer.low, a = s.pointer.high, c = i;
    return c + 1 <= a ? this.ss.updateKeyByIterator(s, new o(i + 1, a)) : this.ss.eraseElementByPos(0), l("alloc():" + c), c;
  }, r.prototype.use = function(s) {
    let i = new o(s, s), a = this.ss.lowerBound(i);
    if (!a.equals(this.ss.end())) {
      let c = a.pointer.low, d = a.pointer.high;
      return a.pointer.equals(i) ? (this.ss.eraseElementByIterator(a), l("use():" + s), !0) : c > s ? !1 : c === s ? (this.ss.updateKeyByIterator(a, new o(c + 1, d)), l("use():" + s), !0) : d === s ? (this.ss.updateKeyByIterator(a, new o(c, d - 1)), l("use():" + s), !0) : (this.ss.updateKeyByIterator(a, new o(s + 1, d)), this.ss.insert(new o(c, s - 1)), l("use():" + s), !0);
    }
    return l("use():failed"), !1;
  }, r.prototype.free = function(s) {
    if (s < this.min || s > this.max) {
      h("free():" + s + " is out of range");
      return;
    }
    let i = new o(s, s), a = this.ss.upperBound(i);
    if (a.equals(this.ss.end())) {
      if (a.equals(this.ss.begin())) {
        this.ss.insert(i);
        return;
      }
      a.pre();
      let c = a.pointer.high;
      a.pointer.high + 1 === s ? this.ss.updateKeyByIterator(a, new o(c, s)) : this.ss.insert(i);
    } else if (a.equals(this.ss.begin()))
      if (s + 1 === a.pointer.low) {
        let c = a.pointer.high;
        this.ss.updateKeyByIterator(a, new o(s, c));
      } else
        this.ss.insert(i);
    else {
      let c = a.pointer.low, d = a.pointer.high;
      a.pre();
      let g = a.pointer.low;
      a.pointer.high + 1 === s ? s + 1 === c ? (this.ss.eraseElementByIterator(a), this.ss.updateKeyByIterator(a, new o(g, d))) : this.ss.updateKeyByIterator(a, new o(g, s)) : s + 1 === c ? (this.ss.eraseElementByIterator(a.next()), this.ss.insert(new o(s, d))) : this.ss.insert(i);
    }
    l("free():" + s);
  }, r.prototype.clear = function() {
    l("clear()"), this.ss.clear(), this.ss.insert(new o(this.min, this.max));
  }, r.prototype.intervalCount = function() {
    return this.ss.size();
  }, r.prototype.dump = function() {
    console.log("length:" + this.ss.size());
    for (let s of this.ss)
      console.log(s);
  }, n.exports = r;
}), fa = we((e, n) => {
  he(), ue(), le();
  var t = Iu();
  n.exports.NumberAllocator = t;
}), Tu = we((e) => {
  he(), ue(), le(), Object.defineProperty(e, "__esModule", { value: !0 });
  var n = fu(), t = fa(), l = class {
    constructor(h) {
      h > 0 && (this.aliasToTopic = new n.LRUCache({ max: h }), this.topicToAlias = {}, this.numberAllocator = new t.NumberAllocator(1, h), this.max = h, this.length = 0);
    }
    put(h, o) {
      if (o === 0 || o > this.max)
        return !1;
      let r = this.aliasToTopic.get(o);
      return r && delete this.topicToAlias[r], this.aliasToTopic.set(o, h), this.topicToAlias[h] = o, this.numberAllocator.use(o), this.length = this.aliasToTopic.size, !0;
    }
    getTopicByAlias(h) {
      return this.aliasToTopic.get(h);
    }
    getAliasByTopic(h) {
      let o = this.topicToAlias[h];
      return typeof o < "u" && this.aliasToTopic.get(o), o;
    }
    clear() {
      this.aliasToTopic.clear(), this.topicToAlias = {}, this.numberAllocator.clear(), this.length = 0;
    }
    getLruAlias() {
      return this.numberAllocator.firstVacant() || [...this.aliasToTopic.keys()][this.aliasToTopic.size - 1];
    }
  };
  e.default = l;
}), ku = we((e) => {
  he(), ue(), le();
  var n = e && e.__importDefault || function(r) {
    return r && r.__esModule ? r : { default: r };
  };
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = hi(), l = n(Tu()), h = Nr(), o = (r, s) => {
    r.log("_handleConnack");
    let { options: i } = r, a = i.protocolVersion === 5 ? s.reasonCode : s.returnCode;
    if (clearTimeout(r.connackTimer), delete r.topicAliasSend, s.properties) {
      if (s.properties.topicAliasMaximum) {
        if (s.properties.topicAliasMaximum > 65535) {
          r.emit("error", new Error("topicAliasMaximum from broker is out of range"));
          return;
        }
        s.properties.topicAliasMaximum > 0 && (r.topicAliasSend = new l.default(s.properties.topicAliasMaximum));
      }
      s.properties.serverKeepAlive && i.keepalive && (i.keepalive = s.properties.serverKeepAlive, r._shiftPingInterval()), s.properties.maximumPacketSize && (i.properties || (i.properties = {}), i.properties.maximumPacketSize = s.properties.maximumPacketSize);
    }
    if (a === 0)
      r.reconnecting = !1, r._onConnect(s);
    else if (a > 0) {
      let c = new h.ErrorWithReasonCode(`Connection refused: ${t.ReasonCodes[a]}`, a);
      r.emit("error", c);
    }
  };
  e.default = o;
}), Ru = we((e) => {
  he(), ue(), le(), Object.defineProperty(e, "__esModule", { value: !0 });
  var n = (t, l, h) => {
    t.log("handling pubrel packet");
    let o = typeof h < "u" ? h : t.noop, { messageId: r } = l, s = { cmd: "pubcomp", messageId: r };
    t.incomingStore.get(l, (i, a) => {
      i ? t._sendPacket(s, o) : (t.emit("message", a.topic, a.payload, a), t.handleMessage(a, (c) => {
        if (c)
          return o(c);
        t.incomingStore.del(a, t.noop), t._sendPacket(s, o);
      }));
    });
  };
  e.default = n;
}), Ou = we((e) => {
  he(), ue(), le();
  var n = e && e.__importDefault || function(i) {
    return i && i.__esModule ? i : { default: i };
  };
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = n(uu()), l = n(cu()), h = n(ku()), o = n(hi()), r = n(Ru()), s = (i, a, c) => {
    let { options: d } = i;
    if (d.protocolVersion === 5 && d.properties && d.properties.maximumPacketSize && d.properties.maximumPacketSize < a.length)
      return i.emit("error", new Error(`exceeding packets size ${a.cmd}`)), i.end({ reasonCode: 149, properties: { reasonString: "Maximum packet size was exceeded" } }), i;
    switch (i.pingResp = Date.now(), a.cmd !== "pingresp" && i._shiftPingInterval(), i.log("_handlePacket :: emitting packetreceive"), i.emit("packetreceive", a), a.cmd) {
      case "publish":
        (0, t.default)(i, a, c);
        break;
      case "puback":
      case "pubrec":
      case "pubcomp":
      case "suback":
      case "unsuback":
        (0, o.default)(i, a), c();
        break;
      case "pubrel":
        (0, r.default)(i, a, c);
        break;
      case "connack":
        (0, h.default)(i, a), c();
        break;
      case "auth":
        (0, l.default)(i, a), c();
        break;
      case "pingresp":
        c();
        break;
      case "disconnect":
        i.emit("disconnect", a), c();
        break;
      default:
        i.log("_handlePacket :: unknown command"), c();
        break;
    }
  };
  e.default = s;
}), Cu = we((e) => {
  he(), ue(), le();
  var n = e && e.__importDefault || function(o) {
    return o && o.__esModule ? o : { default: o };
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.TypedEventEmitter = void 0;
  var t = n((Ar(), $e(br))), l = Nr(), h = class {
  };
  e.TypedEventEmitter = h, (0, l.applyMixin)(h, t.default);
}), ci = we((e) => {
  he(), ue(), le(), Object.defineProperty(e, "__esModule", { value: !0 }), e.isReactNativeBrowser = e.isWebWorker = void 0;
  var n = () => typeof window < "u" && typeof window.document < "u", t = () => {
    var o, r;
    return !!(typeof self == "object" && !((r = (o = self == null ? void 0 : self.constructor) === null || o === void 0 ? void 0 : o.name) === null || r === void 0) && r.includes("WorkerGlobalScope"));
  }, l = () => typeof wt < "u" && wt.product === "ReactNative", h = n() || t() || l();
  e.isWebWorker = t(), e.isReactNativeBrowser = l(), e.default = h;
}), Pu = we((e, n) => {
  he(), ue(), le(), function(t, l) {
    typeof e == "object" && typeof n < "u" ? l(e) : typeof define == "function" && define.amd ? define(["exports"], l) : (t = typeof globalThis < "u" ? globalThis : t || self, l(t.fastUniqueNumbers = {}));
  }(e, function(t) {
    var l = function(b) {
      return function(m) {
        var y = b(m);
        return m.add(y), y;
      };
    }, h = function(b) {
      return function(m, y) {
        return b.set(m, y), y;
      };
    }, o = Number.MAX_SAFE_INTEGER === void 0 ? 9007199254740991 : Number.MAX_SAFE_INTEGER, r = 536870912, s = r * 2, i = function(b, m) {
      return function(y) {
        var T = m.get(y), U = T === void 0 ? y.size : T < s ? T + 1 : 0;
        if (!y.has(U))
          return b(y, U);
        if (y.size < r) {
          for (; y.has(U); )
            U = Math.floor(Math.random() * s);
          return b(y, U);
        }
        if (y.size > o)
          throw new Error("Congratulations, you created a collection of unique numbers which uses all available integers!");
        for (; y.has(U); )
          U = Math.floor(Math.random() * o);
        return b(y, U);
      };
    }, a = /* @__PURE__ */ new WeakMap(), c = h(a), d = i(c, a), g = l(d);
    t.addUniqueNumber = g, t.generateUniqueNumber = d;
  });
}), Bu = we((e, n) => {
  he(), ue(), le(), function(t, l) {
    typeof e == "object" && typeof n < "u" ? l(e, Pu()) : typeof define == "function" && define.amd ? define(["exports", "fast-unique-numbers"], l) : (t = typeof globalThis < "u" ? globalThis : t || self, l(t.workerTimersBroker = {}, t.fastUniqueNumbers));
  }(e, function(t, l) {
    var h = function(s) {
      return s.method !== void 0 && s.method === "call";
    }, o = function(s) {
      return s.error === null && typeof s.id == "number";
    }, r = function(s) {
      var i = /* @__PURE__ */ new Map([[0, function() {
      }]]), a = /* @__PURE__ */ new Map([[0, function() {
      }]]), c = /* @__PURE__ */ new Map(), d = new Worker(s);
      d.addEventListener("message", function(T) {
        var U = T.data;
        if (h(U)) {
          var S = U.params, R = S.timerId, F = S.timerType;
          if (F === "interval") {
            var W = i.get(R);
            if (typeof W == "number") {
              var C = c.get(W);
              if (C === void 0 || C.timerId !== R || C.timerType !== F)
                throw new Error("The timer is in an undefined state.");
            } else if (typeof W < "u")
              W();
            else
              throw new Error("The timer is in an undefined state.");
          } else if (F === "timeout") {
            var O = a.get(R);
            if (typeof O == "number") {
              var M = c.get(O);
              if (M === void 0 || M.timerId !== R || M.timerType !== F)
                throw new Error("The timer is in an undefined state.");
            } else if (typeof O < "u")
              O(), a.delete(R);
            else
              throw new Error("The timer is in an undefined state.");
          }
        } else if (o(U)) {
          var $ = U.id, X = c.get($);
          if (X === void 0)
            throw new Error("The timer is in an undefined state.");
          var te = X.timerId, E = X.timerType;
          c.delete($), E === "interval" ? i.delete(te) : a.delete(te);
        } else {
          var q = U.error.message;
          throw new Error(q);
        }
      });
      var g = function(T) {
        var U = l.generateUniqueNumber(c);
        c.set(U, { timerId: T, timerType: "interval" }), i.set(T, U), d.postMessage({ id: U, method: "clear", params: { timerId: T, timerType: "interval" } });
      }, b = function(T) {
        var U = l.generateUniqueNumber(c);
        c.set(U, { timerId: T, timerType: "timeout" }), a.set(T, U), d.postMessage({ id: U, method: "clear", params: { timerId: T, timerType: "timeout" } });
      }, m = function(T) {
        var U = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, S = l.generateUniqueNumber(i);
        return i.set(S, function() {
          T(), typeof i.get(S) == "function" && d.postMessage({ id: null, method: "set", params: { delay: U, now: performance.now(), timerId: S, timerType: "interval" } });
        }), d.postMessage({ id: null, method: "set", params: { delay: U, now: performance.now(), timerId: S, timerType: "interval" } }), S;
      }, y = function(T) {
        var U = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, S = l.generateUniqueNumber(a);
        return a.set(S, T), d.postMessage({ id: null, method: "set", params: { delay: U, now: performance.now(), timerId: S, timerType: "timeout" } }), S;
      };
      return { clearInterval: g, clearTimeout: b, setInterval: m, setTimeout: y };
    };
    t.load = r;
  });
}), xu = we((e, n) => {
  he(), ue(), le(), function(t, l) {
    typeof e == "object" && typeof n < "u" ? l(e, Bu()) : typeof define == "function" && define.amd ? define(["exports", "worker-timers-broker"], l) : (t = typeof globalThis < "u" ? globalThis : t || self, l(t.workerTimers = {}, t.workerTimersBroker));
  }(e, function(t, l) {
    var h = function(d, g) {
      var b = null;
      return function() {
        if (b !== null)
          return b;
        var m = new Blob([g], { type: "application/javascript; charset=utf-8" }), y = URL.createObjectURL(m);
        return b = d(y), setTimeout(function() {
          return URL.revokeObjectURL(y);
        }), b;
      };
    }, o = `(()=>{var e={472:(e,t,r)=>{var o,i;void 0===(i="function"==typeof(o=function(){"use strict";var e=new Map,t=new Map,r=function(t){var r=e.get(t);if(void 0===r)throw new Error('There is no interval scheduled with the given id "'.concat(t,'".'));clearTimeout(r),e.delete(t)},o=function(e){var r=t.get(e);if(void 0===r)throw new Error('There is no timeout scheduled with the given id "'.concat(e,'".'));clearTimeout(r),t.delete(e)},i=function(e,t){var r,o=performance.now();return{expected:o+(r=e-Math.max(0,o-t)),remainingDelay:r}},n=function e(t,r,o,i){var n=performance.now();n>o?postMessage({id:null,method:"call",params:{timerId:r,timerType:i}}):t.set(r,setTimeout(e,o-n,t,r,o,i))},a=function(t,r,o){var a=i(t,o),s=a.expected,d=a.remainingDelay;e.set(r,setTimeout(n,d,e,r,s,"interval"))},s=function(e,r,o){var a=i(e,o),s=a.expected,d=a.remainingDelay;t.set(r,setTimeout(n,d,t,r,s,"timeout"))};addEventListener("message",(function(e){var t=e.data;try{if("clear"===t.method){var i=t.id,n=t.params,d=n.timerId,c=n.timerType;if("interval"===c)r(d),postMessage({error:null,id:i});else{if("timeout"!==c)throw new Error('The given type "'.concat(c,'" is not supported'));o(d),postMessage({error:null,id:i})}}else{if("set"!==t.method)throw new Error('The given method "'.concat(t.method,'" is not supported'));var u=t.params,l=u.delay,p=u.now,m=u.timerId,v=u.timerType;if("interval"===v)a(l,m,p);else{if("timeout"!==v)throw new Error('The given type "'.concat(v,'" is not supported'));s(l,m,p)}}}catch(e){postMessage({error:{message:e.message},id:t.id,result:null})}}))})?o.call(t,r,t,e):o)||(e.exports=i)}},t={};function r(o){var i=t[o];if(void 0!==i)return i.exports;var n=t[o]={exports:{}};return e[o](n,n.exports,r),n.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";r(472)})()})();`, r = h(l.load, o), s = function(d) {
      return r().clearInterval(d);
    }, i = function(d) {
      return r().clearTimeout(d);
    }, a = function() {
      var d;
      return (d = r()).setInterval.apply(d, arguments);
    }, c = function() {
      var d;
      return (d = r()).setTimeout.apply(d, arguments);
    };
    t.clearInterval = s, t.clearTimeout = i, t.setInterval = a, t.setTimeout = c;
  });
}), Mu = we((e) => {
  he(), ue(), le();
  var n = e && e.__createBinding || (Object.create ? function(a, c, d, g) {
    g === void 0 && (g = d);
    var b = Object.getOwnPropertyDescriptor(c, d);
    (!b || ("get" in b ? !c.__esModule : b.writable || b.configurable)) && (b = { enumerable: !0, get: function() {
      return c[d];
    } }), Object.defineProperty(a, g, b);
  } : function(a, c, d, g) {
    g === void 0 && (g = d), a[g] = c[d];
  }), t = e && e.__setModuleDefault || (Object.create ? function(a, c) {
    Object.defineProperty(a, "default", { enumerable: !0, value: c });
  } : function(a, c) {
    a.default = c;
  }), l = e && e.__importStar || function(a) {
    if (a && a.__esModule)
      return a;
    var c = {};
    if (a != null)
      for (var d in a)
        d !== "default" && Object.prototype.hasOwnProperty.call(a, d) && n(c, a, d);
    return t(c, a), c;
  };
  Object.defineProperty(e, "__esModule", { value: !0 });
  var h = l(ci()), o = xu(), r = { set: o.setTimeout, clear: o.clearTimeout }, s = { set: (a, c) => setTimeout(a, c), clear: (a) => clearTimeout(a) }, i = (a) => {
    switch (a) {
      case "native":
        return s;
      case "worker":
        return r;
      case "auto":
      default:
        return h.default && !h.isWebWorker && !h.isReactNativeBrowser ? r : s;
    }
  };
  e.default = i;
}), da = we((e) => {
  he(), ue(), le();
  var n = e && e.__importDefault || function(h) {
    return h && h.__esModule ? h : { default: h };
  };
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = n(Mu()), l = class {
    constructor(h, o, r) {
      this.destroyed = !1, this.keepalive = h * 1e3, this.checkPing = o, this.timer = (0, t.default)(r), this.reschedule();
    }
    clear() {
      this.timerId && (this.timer.clear(this.timerId), this.timerId = null);
    }
    destroy() {
      this.clear(), this.destroyed = !0;
    }
    reschedule() {
      this.destroyed || (this.clear(), this.timerId = this.timer.set(() => {
        this.destroyed || (this.checkPing(), this.reschedule());
      }, this.keepalive));
    }
  };
  e.default = l;
}), Hn = we((e) => {
  he(), ue(), le();
  var n = e && e.__createBinding || (Object.create ? function(W, C, O, M) {
    M === void 0 && (M = O);
    var $ = Object.getOwnPropertyDescriptor(C, O);
    (!$ || ("get" in $ ? !C.__esModule : $.writable || $.configurable)) && ($ = { enumerable: !0, get: function() {
      return C[O];
    } }), Object.defineProperty(W, M, $);
  } : function(W, C, O, M) {
    M === void 0 && (M = O), W[M] = C[O];
  }), t = e && e.__setModuleDefault || (Object.create ? function(W, C) {
    Object.defineProperty(W, "default", { enumerable: !0, value: C });
  } : function(W, C) {
    W.default = C;
  }), l = e && e.__importStar || function(W) {
    if (W && W.__esModule)
      return W;
    var C = {};
    if (W != null)
      for (var O in W)
        O !== "default" && Object.prototype.hasOwnProperty.call(W, O) && n(C, W, O);
    return t(C, W), C;
  }, h = e && e.__importDefault || function(W) {
    return W && W.__esModule ? W : { default: W };
  };
  Object.defineProperty(e, "__esModule", { value: !0 });
  var o = h(Sl()), r = h(ou()), s = h(Gs()), i = mr(), a = h(au()), c = l(lu()), d = h(Vt()), g = h(Js()), b = h(Ou()), m = Nr(), y = Cu(), T = h(da()), U = l(ci()), S = globalThis.setImmediate || ((...W) => {
    let C = W.shift();
    (0, m.nextTick)(() => {
      C(...W);
    });
  }), R = { keepalive: 60, reschedulePings: !0, protocolId: "MQTT", protocolVersion: 4, reconnectPeriod: 1e3, connectTimeout: 30 * 1e3, clean: !0, resubscribe: !0, writeCache: !0, timerVariant: "auto" }, F = class zn extends y.TypedEventEmitter {
    static defaultId() {
      return `mqttjs_${Math.random().toString(16).substr(2, 8)}`;
    }
    constructor(C, O) {
      super(), this.options = O || {};
      for (let M in R)
        typeof this.options[M] > "u" ? this.options[M] = R[M] : this.options[M] = O[M];
      this.log = this.options.log || (0, d.default)("mqttjs:client"), this.noop = this._noop.bind(this), this.log("MqttClient :: version:", zn.VERSION), U.isWebWorker ? this.log("MqttClient :: environment", "webworker") : this.log("MqttClient :: environment", U.default ? "browser" : "node"), this.log("MqttClient :: options.protocol", O.protocol), this.log("MqttClient :: options.protocolVersion", O.protocolVersion), this.log("MqttClient :: options.username", O.username), this.log("MqttClient :: options.keepalive", O.keepalive), this.log("MqttClient :: options.reconnectPeriod", O.reconnectPeriod), this.log("MqttClient :: options.rejectUnauthorized", O.rejectUnauthorized), this.log("MqttClient :: options.properties.topicAliasMaximum", O.properties ? O.properties.topicAliasMaximum : void 0), this.options.clientId = typeof O.clientId == "string" ? O.clientId : zn.defaultId(), this.log("MqttClient :: clientId", this.options.clientId), this.options.customHandleAcks = O.protocolVersion === 5 && O.customHandleAcks ? O.customHandleAcks : (...M) => {
        M[3](null, 0);
      }, this.options.writeCache || (r.default.writeToStream.cacheNumbers = !1), this.streamBuilder = C, this.messageIdProvider = typeof this.options.messageIdProvider > "u" ? new s.default() : this.options.messageIdProvider, this.outgoingStore = O.outgoingStore || new g.default(), this.incomingStore = O.incomingStore || new g.default(), this.queueQoSZero = O.queueQoSZero === void 0 ? !0 : O.queueQoSZero, this._resubscribeTopics = {}, this.messageIdToTopic = {}, this.pingTimer = null, this.connected = !1, this.disconnecting = !1, this.reconnecting = !1, this.queue = [], this.connackTimer = null, this.reconnectTimer = null, this._storeProcessing = !1, this._packetIdsDuringStoreProcessing = {}, this._storeProcessingQueue = [], this.outgoing = {}, this._firstConnection = !0, O.properties && O.properties.topicAliasMaximum > 0 && (O.properties.topicAliasMaximum > 65535 ? this.log("MqttClient :: options.properties.topicAliasMaximum is out of range") : this.topicAliasRecv = new o.default(O.properties.topicAliasMaximum)), this.on("connect", () => {
        let { queue: M } = this, $ = () => {
          let X = M.shift();
          this.log("deliver :: entry %o", X);
          let te = null;
          if (!X) {
            this._resubscribe();
            return;
          }
          te = X.packet, this.log("deliver :: call _sendPacket for %o", te);
          let E = !0;
          te.messageId && te.messageId !== 0 && (this.messageIdProvider.register(te.messageId) || (E = !1)), E ? this._sendPacket(te, (q) => {
            X.cb && X.cb(q), $();
          }) : (this.log("messageId: %d has already used. The message is skipped and removed.", te.messageId), $());
        };
        this.log("connect :: sending queued packets"), $();
      }), this.on("close", () => {
        this.log("close :: connected set to `false`"), this.connected = !1, this.log("close :: clearing connackTimer"), clearTimeout(this.connackTimer), this._destroyPingTimer(), this.topicAliasRecv && this.topicAliasRecv.clear(), this.log("close :: calling _setupReconnect"), this._setupReconnect();
      }), this.options.manualConnect || (this.log("MqttClient :: setting up stream"), this.connect());
    }
    handleAuth(C, O) {
      O();
    }
    handleMessage(C, O) {
      O();
    }
    _nextId() {
      return this.messageIdProvider.allocate();
    }
    getLastMessageId() {
      return this.messageIdProvider.getLastAllocated();
    }
    connect() {
      var C;
      let O = new i.Writable(), M = r.default.parser(this.options), $ = null, X = [];
      this.log("connect :: calling method to clear reconnect"), this._clearReconnect(), this.log("connect :: using streamBuilder provided to client to create stream"), this.stream = this.streamBuilder(this), M.on("packet", (z) => {
        this.log("parser :: on packet push to packets array."), X.push(z);
      });
      let te = () => {
        this.log("work :: getting next packet in queue");
        let z = X.shift();
        if (z)
          this.log("work :: packet pulled from queue"), (0, b.default)(this, z, E);
        else {
          this.log("work :: no packets in queue");
          let be = $;
          $ = null, this.log("work :: done flag is %s", !!be), be && be();
        }
      }, E = () => {
        if (X.length)
          (0, m.nextTick)(te);
        else {
          let z = $;
          $ = null, z();
        }
      };
      O._write = (z, be, ne) => {
        $ = ne, this.log("writable stream :: parsing buffer"), M.parse(z), te();
      };
      let q = (z) => {
        this.log("streamErrorHandler :: error", z.message), z.code ? (this.log("streamErrorHandler :: emitting error"), this.emit("error", z)) : this.noop(z);
      };
      this.log("connect :: pipe stream to writable stream"), this.stream.pipe(O), this.stream.on("error", q), this.stream.on("close", () => {
        this.log("(%s)stream :: on close", this.options.clientId), this._flushVolatile(), this.log("stream: emit close to MqttClient"), this.emit("close");
      }), this.log("connect: sending packet `connect`");
      let Z = { cmd: "connect", protocolId: this.options.protocolId, protocolVersion: this.options.protocolVersion, clean: this.options.clean, clientId: this.options.clientId, keepalive: this.options.keepalive, username: this.options.username, password: this.options.password, properties: this.options.properties };
      if (this.options.will && (Z.will = Object.assign(Object.assign({}, this.options.will), { payload: (C = this.options.will) === null || C === void 0 ? void 0 : C.payload })), this.topicAliasRecv && (Z.properties || (Z.properties = {}), this.topicAliasRecv && (Z.properties.topicAliasMaximum = this.topicAliasRecv.max)), this._writePacket(Z), M.on("error", this.emit.bind(this, "error")), this.options.properties) {
        if (!this.options.properties.authenticationMethod && this.options.properties.authenticationData)
          return this.end(() => this.emit("error", new Error("Packet has no Authentication Method"))), this;
        if (this.options.properties.authenticationMethod && this.options.authPacket && typeof this.options.authPacket == "object") {
          let z = Object.assign({ cmd: "auth", reasonCode: 0 }, this.options.authPacket);
          this._writePacket(z);
        }
      }
      return this.stream.setMaxListeners(1e3), clearTimeout(this.connackTimer), this.connackTimer = setTimeout(() => {
        this.log("!!connectTimeout hit!! Calling _cleanUp with force `true`"), this.emit("error", new Error("connack timeout")), this._cleanUp(!0);
      }, this.options.connectTimeout), this;
    }
    publish(C, O, M, $) {
      this.log("publish :: message `%s` to topic `%s`", O, C);
      let { options: X } = this;
      typeof M == "function" && ($ = M, M = null), M = M || {}, M = Object.assign(Object.assign({}, { qos: 0, retain: !1, dup: !1 }), M);
      let { qos: te, retain: E, dup: q, properties: Z, cbStorePut: z } = M;
      if (this._checkDisconnecting($))
        return this;
      let be = () => {
        let ne = 0;
        if ((te === 1 || te === 2) && (ne = this._nextId(), ne === null))
          return this.log("No messageId left"), !1;
        let V = { cmd: "publish", topic: C, payload: O, qos: te, retain: E, messageId: ne, dup: q };
        switch (X.protocolVersion === 5 && (V.properties = Z), this.log("publish :: qos", te), te) {
          case 1:
          case 2:
            this.outgoing[V.messageId] = { volatile: !1, cb: $ || this.noop }, this.log("MqttClient:publish: packet cmd: %s", V.cmd), this._sendPacket(V, void 0, z);
            break;
          default:
            this.log("MqttClient:publish: packet cmd: %s", V.cmd), this._sendPacket(V, $, z);
            break;
        }
        return !0;
      };
      return (this._storeProcessing || this._storeProcessingQueue.length > 0 || !be()) && this._storeProcessingQueue.push({ invoke: be, cbStorePut: M.cbStorePut, callback: $ }), this;
    }
    publishAsync(C, O, M) {
      return new Promise(($, X) => {
        this.publish(C, O, M, (te, E) => {
          te ? X(te) : $(E);
        });
      });
    }
    subscribe(C, O, M) {
      let $ = this.options.protocolVersion;
      typeof O == "function" && (M = O), M = M || this.noop;
      let X = !1, te = [];
      typeof C == "string" ? (C = [C], te = C) : Array.isArray(C) ? te = C : typeof C == "object" && (X = C.resubscribe, delete C.resubscribe, te = Object.keys(C));
      let E = c.validateTopics(te);
      if (E !== null)
        return S(M, new Error(`Invalid topic ${E}`)), this;
      if (this._checkDisconnecting(M))
        return this.log("subscribe: discconecting true"), this;
      let q = { qos: 0 };
      $ === 5 && (q.nl = !1, q.rap = !1, q.rh = 0), O = Object.assign(Object.assign({}, q), O);
      let Z = O.properties, z = [], be = (V, me) => {
        if (me = me || O, !Object.prototype.hasOwnProperty.call(this._resubscribeTopics, V) || this._resubscribeTopics[V].qos < me.qos || X) {
          let ie = { topic: V, qos: me.qos };
          $ === 5 && (ie.nl = me.nl, ie.rap = me.rap, ie.rh = me.rh, ie.properties = Z), this.log("subscribe: pushing topic `%s` and qos `%s` to subs list", ie.topic, ie.qos), z.push(ie);
        }
      };
      if (Array.isArray(C) ? C.forEach((V) => {
        this.log("subscribe: array topic %s", V), be(V);
      }) : Object.keys(C).forEach((V) => {
        this.log("subscribe: object topic %s, %o", V, C[V]), be(V, C[V]);
      }), !z.length)
        return M(null, []), this;
      let ne = () => {
        let V = this._nextId();
        if (V === null)
          return this.log("No messageId left"), !1;
        let me = { cmd: "subscribe", subscriptions: z, messageId: V };
        if (Z && (me.properties = Z), this.options.resubscribe) {
          this.log("subscribe :: resubscribe true");
          let ie = [];
          z.forEach((Ee) => {
            if (this.options.reconnectPeriod > 0) {
              let A = { qos: Ee.qos };
              $ === 5 && (A.nl = Ee.nl || !1, A.rap = Ee.rap || !1, A.rh = Ee.rh || 0, A.properties = Ee.properties), this._resubscribeTopics[Ee.topic] = A, ie.push(Ee.topic);
            }
          }), this.messageIdToTopic[me.messageId] = ie;
        }
        return this.outgoing[me.messageId] = { volatile: !0, cb(ie, Ee) {
          if (!ie) {
            let { granted: A } = Ee;
            for (let Q = 0; Q < A.length; Q += 1)
              z[Q].qos = A[Q];
          }
          M(ie, z);
        } }, this.log("subscribe :: call _sendPacket"), this._sendPacket(me), !0;
      };
      return (this._storeProcessing || this._storeProcessingQueue.length > 0 || !ne()) && this._storeProcessingQueue.push({ invoke: ne, callback: M }), this;
    }
    subscribeAsync(C, O) {
      return new Promise((M, $) => {
        this.subscribe(C, O, (X, te) => {
          X ? $(X) : M(te);
        });
      });
    }
    unsubscribe(C, O, M) {
      typeof C == "string" && (C = [C]), typeof O == "function" && (M = O), M = M || this.noop;
      let $ = c.validateTopics(C);
      if ($ !== null)
        return S(M, new Error(`Invalid topic ${$}`)), this;
      if (this._checkDisconnecting(M))
        return this;
      let X = () => {
        let te = this._nextId();
        if (te === null)
          return this.log("No messageId left"), !1;
        let E = { cmd: "unsubscribe", messageId: te, unsubscriptions: [] };
        return typeof C == "string" ? E.unsubscriptions = [C] : Array.isArray(C) && (E.unsubscriptions = C), this.options.resubscribe && E.unsubscriptions.forEach((q) => {
          delete this._resubscribeTopics[q];
        }), typeof O == "object" && O.properties && (E.properties = O.properties), this.outgoing[E.messageId] = { volatile: !0, cb: M }, this.log("unsubscribe: call _sendPacket"), this._sendPacket(E), !0;
      };
      return (this._storeProcessing || this._storeProcessingQueue.length > 0 || !X()) && this._storeProcessingQueue.push({ invoke: X, callback: M }), this;
    }
    unsubscribeAsync(C, O) {
      return new Promise((M, $) => {
        this.unsubscribe(C, O, (X, te) => {
          X ? $(X) : M(te);
        });
      });
    }
    end(C, O, M) {
      this.log("end :: (%s)", this.options.clientId), (C == null || typeof C != "boolean") && (M = M || O, O = C, C = !1), typeof O != "object" && (M = M || O, O = null), this.log("end :: cb? %s", !!M), (!M || typeof M != "function") && (M = this.noop);
      let $ = () => {
        this.log("end :: closeStores: closing incoming and outgoing stores"), this.disconnected = !0, this.incomingStore.close((te) => {
          this.outgoingStore.close((E) => {
            if (this.log("end :: closeStores: emitting end"), this.emit("end"), M) {
              let q = te || E;
              this.log("end :: closeStores: invoking callback with args"), M(q);
            }
          });
        }), this._deferredReconnect && this._deferredReconnect();
      }, X = () => {
        this.log("end :: (%s) :: finish :: calling _cleanUp with force %s", this.options.clientId, C), this._cleanUp(C, () => {
          this.log("end :: finish :: calling process.nextTick on closeStores"), (0, m.nextTick)($);
        }, O);
      };
      return this.disconnecting ? (M(), this) : (this._clearReconnect(), this.disconnecting = !0, !C && Object.keys(this.outgoing).length > 0 ? (this.log("end :: (%s) :: calling finish in 10ms once outgoing is empty", this.options.clientId), this.once("outgoingEmpty", setTimeout.bind(null, X, 10))) : (this.log("end :: (%s) :: immediately calling finish", this.options.clientId), X()), this);
    }
    endAsync(C, O) {
      return new Promise((M, $) => {
        this.end(C, O, (X) => {
          X ? $(X) : M();
        });
      });
    }
    removeOutgoingMessage(C) {
      if (this.outgoing[C]) {
        let { cb: O } = this.outgoing[C];
        this._removeOutgoingAndStoreMessage(C, () => {
          O(new Error("Message removed"));
        });
      }
      return this;
    }
    reconnect(C) {
      this.log("client reconnect");
      let O = () => {
        C ? (this.options.incomingStore = C.incomingStore, this.options.outgoingStore = C.outgoingStore) : (this.options.incomingStore = null, this.options.outgoingStore = null), this.incomingStore = this.options.incomingStore || new g.default(), this.outgoingStore = this.options.outgoingStore || new g.default(), this.disconnecting = !1, this.disconnected = !1, this._deferredReconnect = null, this._reconnect();
      };
      return this.disconnecting && !this.disconnected ? this._deferredReconnect = O : O(), this;
    }
    _flushVolatile() {
      this.outgoing && (this.log("_flushVolatile :: deleting volatile messages from the queue and setting their callbacks as error function"), Object.keys(this.outgoing).forEach((C) => {
        this.outgoing[C].volatile && typeof this.outgoing[C].cb == "function" && (this.outgoing[C].cb(new Error("Connection closed")), delete this.outgoing[C]);
      }));
    }
    _flush() {
      this.outgoing && (this.log("_flush: queue exists? %b", !!this.outgoing), Object.keys(this.outgoing).forEach((C) => {
        typeof this.outgoing[C].cb == "function" && (this.outgoing[C].cb(new Error("Connection closed")), delete this.outgoing[C]);
      }));
    }
    _removeTopicAliasAndRecoverTopicName(C) {
      let O;
      C.properties && (O = C.properties.topicAlias);
      let M = C.topic.toString();
      if (this.log("_removeTopicAliasAndRecoverTopicName :: alias %d, topic %o", O, M), M.length === 0) {
        if (typeof O > "u")
          return new Error("Unregistered Topic Alias");
        if (M = this.topicAliasSend.getTopicByAlias(O), typeof M > "u")
          return new Error("Unregistered Topic Alias");
        C.topic = M;
      }
      O && delete C.properties.topicAlias;
    }
    _checkDisconnecting(C) {
      return this.disconnecting && (C && C !== this.noop ? C(new Error("client disconnecting")) : this.emit("error", new Error("client disconnecting"))), this.disconnecting;
    }
    _reconnect() {
      this.log("_reconnect: emitting reconnect to client"), this.emit("reconnect"), this.connected ? (this.end(() => {
        this.connect();
      }), this.log("client already connected. disconnecting first.")) : (this.log("_reconnect: calling connect"), this.connect());
    }
    _setupReconnect() {
      !this.disconnecting && !this.reconnectTimer && this.options.reconnectPeriod > 0 ? (this.reconnecting || (this.log("_setupReconnect :: emit `offline` state"), this.emit("offline"), this.log("_setupReconnect :: set `reconnecting` to `true`"), this.reconnecting = !0), this.log("_setupReconnect :: setting reconnectTimer for %d ms", this.options.reconnectPeriod), this.reconnectTimer = setInterval(() => {
        this.log("reconnectTimer :: reconnect triggered!"), this._reconnect();
      }, this.options.reconnectPeriod)) : this.log("_setupReconnect :: doing nothing...");
    }
    _clearReconnect() {
      this.log("_clearReconnect : clearing reconnect timer"), this.reconnectTimer && (clearInterval(this.reconnectTimer), this.reconnectTimer = null);
    }
    _cleanUp(C, O, M = {}) {
      if (O && (this.log("_cleanUp :: done callback provided for on stream close"), this.stream.on("close", O)), this.log("_cleanUp :: forced? %s", C), C)
        this.options.reconnectPeriod === 0 && this.options.clean && this._flush(), this.log("_cleanUp :: (%s) :: destroying stream", this.options.clientId), this.stream.destroy();
      else {
        let $ = Object.assign({ cmd: "disconnect" }, M);
        this.log("_cleanUp :: (%s) :: call _sendPacket with disconnect packet", this.options.clientId), this._sendPacket($, () => {
          this.log("_cleanUp :: (%s) :: destroying stream", this.options.clientId), S(() => {
            this.stream.end(() => {
              this.log("_cleanUp :: (%s) :: stream destroyed", this.options.clientId);
            });
          });
        });
      }
      !this.disconnecting && !this.reconnecting && (this.log("_cleanUp :: client not disconnecting/reconnecting. Clearing and resetting reconnect."), this._clearReconnect(), this._setupReconnect()), this._destroyPingTimer(), O && !this.connected && (this.log("_cleanUp :: (%s) :: removing stream `done` callback `close` listener", this.options.clientId), this.stream.removeListener("close", O), O());
    }
    _storeAndSend(C, O, M) {
      this.log("storeAndSend :: store packet with cmd %s to outgoingStore", C.cmd);
      let $ = C, X;
      if ($.cmd === "publish" && ($ = (0, a.default)(C), X = this._removeTopicAliasAndRecoverTopicName($), X))
        return O && O(X);
      this.outgoingStore.put($, (te) => {
        if (te)
          return O && O(te);
        M(), this._writePacket(C, O);
      });
    }
    _applyTopicAlias(C) {
      if (this.options.protocolVersion === 5 && C.cmd === "publish") {
        let O;
        C.properties && (O = C.properties.topicAlias);
        let M = C.topic.toString();
        if (this.topicAliasSend)
          if (O) {
            if (M.length !== 0 && (this.log("applyTopicAlias :: register topic: %s - alias: %d", M, O), !this.topicAliasSend.put(M, O)))
              return this.log("applyTopicAlias :: error out of range. topic: %s - alias: %d", M, O), new Error("Sending Topic Alias out of range");
          } else
            M.length !== 0 && (this.options.autoAssignTopicAlias ? (O = this.topicAliasSend.getAliasByTopic(M), O ? (C.topic = "", C.properties = Object.assign(Object.assign({}, C.properties), { topicAlias: O }), this.log("applyTopicAlias :: auto assign(use) topic: %s - alias: %d", M, O)) : (O = this.topicAliasSend.getLruAlias(), this.topicAliasSend.put(M, O), C.properties = Object.assign(Object.assign({}, C.properties), { topicAlias: O }), this.log("applyTopicAlias :: auto assign topic: %s - alias: %d", M, O))) : this.options.autoUseTopicAlias && (O = this.topicAliasSend.getAliasByTopic(M), O && (C.topic = "", C.properties = Object.assign(Object.assign({}, C.properties), { topicAlias: O }), this.log("applyTopicAlias :: auto use topic: %s - alias: %d", M, O))));
        else if (O)
          return this.log("applyTopicAlias :: error out of range. topic: %s - alias: %d", M, O), new Error("Sending Topic Alias out of range");
      }
    }
    _noop(C) {
      this.log("noop ::", C);
    }
    _writePacket(C, O) {
      this.log("_writePacket :: packet: %O", C), this.log("_writePacket :: emitting `packetsend`"), this.emit("packetsend", C), this.log("_writePacket :: writing to stream");
      let M = r.default.writeToStream(C, this.stream, this.options);
      this.log("_writePacket :: writeToStream result %s", M), !M && O && O !== this.noop ? (this.log("_writePacket :: handle events on `drain` once through callback."), this.stream.once("drain", O)) : O && (this.log("_writePacket :: invoking cb"), O());
    }
    _sendPacket(C, O, M, $) {
      this.log("_sendPacket :: (%s) ::  start", this.options.clientId), M = M || this.noop, O = O || this.noop;
      let X = this._applyTopicAlias(C);
      if (X) {
        O(X);
        return;
      }
      if (!this.connected) {
        if (C.cmd === "auth") {
          this._writePacket(C, O);
          return;
        }
        this.log("_sendPacket :: client not connected. Storing packet offline."), this._storePacket(C, O, M);
        return;
      }
      if ($) {
        this._writePacket(C, O);
        return;
      }
      switch (C.cmd) {
        case "publish":
          break;
        case "pubrel":
          this._storeAndSend(C, O, M);
          return;
        default:
          this._writePacket(C, O);
          return;
      }
      switch (C.qos) {
        case 2:
        case 1:
          this._storeAndSend(C, O, M);
          break;
        case 0:
        default:
          this._writePacket(C, O);
          break;
      }
      this.log("_sendPacket :: (%s) ::  end", this.options.clientId);
    }
    _storePacket(C, O, M) {
      this.log("_storePacket :: packet: %o", C), this.log("_storePacket :: cb? %s", !!O), M = M || this.noop;
      let $ = C;
      if ($.cmd === "publish") {
        $ = (0, a.default)(C);
        let te = this._removeTopicAliasAndRecoverTopicName($);
        if (te)
          return O && O(te);
      }
      let X = $.qos || 0;
      X === 0 && this.queueQoSZero || $.cmd !== "publish" ? this.queue.push({ packet: $, cb: O }) : X > 0 ? (O = this.outgoing[$.messageId] ? this.outgoing[$.messageId].cb : null, this.outgoingStore.put($, (te) => {
        if (te)
          return O && O(te);
        M();
      })) : O && O(new Error("No connection to broker"));
    }
    _setupPingTimer() {
      this.log("_setupPingTimer :: keepalive %d (seconds)", this.options.keepalive), !this.pingTimer && this.options.keepalive && (this.pingTimer = new T.default(this.options.keepalive, () => {
        this._checkPing();
      }, this.options.timerVariant), this.pingResp = Date.now());
    }
    _destroyPingTimer() {
      this.pingTimer && (this.log("_destroyPingTimer :: destroying ping timer"), this.pingTimer.destroy(), this.pingTimer = null);
    }
    _shiftPingInterval() {
      this.pingTimer && this.options.keepalive && this.options.reschedulePings && this._reschedulePing();
    }
    _reschedulePing() {
      this.log("_reschedulePing :: rescheduling ping"), this.pingTimer.reschedule();
    }
    _checkPing() {
      this.log("_checkPing :: checking ping..."), Date.now() - this.pingResp - 100 <= this.options.keepalive * 1e3 ? (this.log("_checkPing :: ping response received in time"), this._sendPing()) : (this.emit("error", new Error("Keepalive timeout")), this.log("_checkPing :: calling _cleanUp with force true"), this._cleanUp(!0));
    }
    _sendPing() {
      this.log("_sendPing :: sending pingreq"), this._sendPacket({ cmd: "pingreq" });
    }
    _resubscribe() {
      this.log("_resubscribe");
      let C = Object.keys(this._resubscribeTopics);
      if (!this._firstConnection && (this.options.clean || this.options.protocolVersion >= 4 && !this.connackPacket.sessionPresent) && C.length > 0)
        if (this.options.resubscribe)
          if (this.options.protocolVersion === 5) {
            this.log("_resubscribe: protocolVersion 5");
            for (let O = 0; O < C.length; O++) {
              let M = {};
              M[C[O]] = this._resubscribeTopics[C[O]], M.resubscribe = !0, this.subscribe(M, { properties: M[C[O]].properties });
            }
          } else
            this._resubscribeTopics.resubscribe = !0, this.subscribe(this._resubscribeTopics);
        else
          this._resubscribeTopics = {};
      this._firstConnection = !1;
    }
    _onConnect(C) {
      if (this.disconnected) {
        this.emit("connect", C);
        return;
      }
      this.connackPacket = C, this.messageIdProvider.clear(), this._setupPingTimer(), this.connected = !0;
      let O = () => {
        let M = this.outgoingStore.createStream(), $ = () => {
          M.destroy(), M = null, this._flushStoreProcessingQueue(), X();
        }, X = () => {
          this._storeProcessing = !1, this._packetIdsDuringStoreProcessing = {};
        };
        this.once("close", $), M.on("error", (E) => {
          X(), this._flushStoreProcessingQueue(), this.removeListener("close", $), this.emit("error", E);
        });
        let te = () => {
          if (!M)
            return;
          let E = M.read(1), q;
          if (!E) {
            M.once("readable", te);
            return;
          }
          if (this._storeProcessing = !0, this._packetIdsDuringStoreProcessing[E.messageId]) {
            te();
            return;
          }
          !this.disconnecting && !this.reconnectTimer ? (q = this.outgoing[E.messageId] ? this.outgoing[E.messageId].cb : null, this.outgoing[E.messageId] = { volatile: !1, cb(Z, z) {
            q && q(Z, z), te();
          } }, this._packetIdsDuringStoreProcessing[E.messageId] = !0, this.messageIdProvider.register(E.messageId) ? this._sendPacket(E, void 0, void 0, !0) : this.log("messageId: %d has already used.", E.messageId)) : M.destroy && M.destroy();
        };
        M.on("end", () => {
          let E = !0;
          for (let q in this._packetIdsDuringStoreProcessing)
            if (!this._packetIdsDuringStoreProcessing[q]) {
              E = !1;
              break;
            }
          this.removeListener("close", $), E ? (X(), this._invokeAllStoreProcessingQueue(), this.emit("connect", C)) : O();
        }), te();
      };
      O();
    }
    _invokeStoreProcessingQueue() {
      if (!this._storeProcessing && this._storeProcessingQueue.length > 0) {
        let C = this._storeProcessingQueue[0];
        if (C && C.invoke())
          return this._storeProcessingQueue.shift(), !0;
      }
      return !1;
    }
    _invokeAllStoreProcessingQueue() {
      for (; this._invokeStoreProcessingQueue(); )
        ;
    }
    _flushStoreProcessingQueue() {
      for (let C of this._storeProcessingQueue)
        C.cbStorePut && C.cbStorePut(new Error("Connection closed")), C.callback && C.callback(new Error("Connection closed"));
      this._storeProcessingQueue.splice(0);
    }
    _removeOutgoingAndStoreMessage(C, O) {
      delete this.outgoing[C], this.outgoingStore.del({ messageId: C }, (M, $) => {
        O(M, $), this.messageIdProvider.deallocate(C), this._invokeStoreProcessingQueue();
      });
    }
  };
  F.VERSION = m.MQTTJS_VERSION, e.default = F;
}), Uu = we((e) => {
  he(), ue(), le(), Object.defineProperty(e, "__esModule", { value: !0 });
  var n = fa(), t = class {
    constructor() {
      this.numberAllocator = new n.NumberAllocator(1, 65535);
    }
    allocate() {
      return this.lastId = this.numberAllocator.alloc(), this.lastId;
    }
    getLastAllocated() {
      return this.lastId;
    }
    register(l) {
      return this.numberAllocator.use(l);
    }
    deallocate(l) {
      this.numberAllocator.free(l);
    }
    clear() {
      this.numberAllocator.clear();
    }
  };
  e.default = t;
});
function or(e) {
  throw new RangeError(ga[e]);
}
function Lo(e, n) {
  let t = e.split("@"), l = "";
  t.length > 1 && (l = t[0] + "@", e = t[1]);
  let h = function(o, r) {
    let s = [], i = o.length;
    for (; i--; )
      s[i] = r(o[i]);
    return s;
  }((e = e.replace(pa, ".")).split("."), n).join(".");
  return l + h;
}
function jo(e) {
  let n = [], t = 0, l = e.length;
  for (; t < l; ) {
    let h = e.charCodeAt(t++);
    if (h >= 55296 && h <= 56319 && t < l) {
      let o = e.charCodeAt(t++);
      (64512 & o) == 56320 ? n.push(((1023 & h) << 10) + (1023 & o) + 65536) : (n.push(h), t--);
    } else
      n.push(h);
  }
  return n;
}
var No, Do, pa, ga, It, qr, _i, Ei, Si, Ai, Jt, Lu = ht(() => {
  he(), ue(), le(), No = /^xn--/, Do = /[^\0-\x7E]/, pa = /[\x2E\u3002\uFF0E\uFF61]/g, ga = { overflow: "Overflow: input needs wider integers to process", "not-basic": "Illegal input >= 0x80 (not a basic code point)", "invalid-input": "Invalid input" }, It = Math.floor, qr = String.fromCharCode, _i = function(e, n) {
    return e + 22 + 75 * (e < 26) - ((n != 0) << 5);
  }, Ei = function(e, n, t) {
    let l = 0;
    for (e = t ? It(e / 700) : e >> 1, e += It(e / n); e > 455; l += 36)
      e = It(e / 35);
    return It(l + 36 * e / (e + 38));
  }, Si = function(e) {
    let n = [], t = e.length, l = 0, h = 128, o = 72, r = e.lastIndexOf("-");
    r < 0 && (r = 0);
    for (let i = 0; i < r; ++i)
      e.charCodeAt(i) >= 128 && or("not-basic"), n.push(e.charCodeAt(i));
    for (let i = r > 0 ? r + 1 : 0; i < t; ) {
      let a = l;
      for (let d = 1, g = 36; ; g += 36) {
        i >= t && or("invalid-input");
        let b = (s = e.charCodeAt(i++)) - 48 < 10 ? s - 22 : s - 65 < 26 ? s - 65 : s - 97 < 26 ? s - 97 : 36;
        (b >= 36 || b > It((2147483647 - l) / d)) && or("overflow"), l += b * d;
        let m = g <= o ? 1 : g >= o + 26 ? 26 : g - o;
        if (b < m)
          break;
        let y = 36 - m;
        d > It(2147483647 / y) && or("overflow"), d *= y;
      }
      let c = n.length + 1;
      o = Ei(l - a, c, a == 0), It(l / c) > 2147483647 - h && or("overflow"), h += It(l / c), l %= c, n.splice(l++, 0, h);
    }
    var s;
    return String.fromCodePoint(...n);
  }, Ai = function(e) {
    let n = [], t = (e = jo(e)).length, l = 128, h = 0, o = 72;
    for (let i of e)
      i < 128 && n.push(qr(i));
    let r = n.length, s = r;
    for (r && n.push("-"); s < t; ) {
      let i = 2147483647;
      for (let c of e)
        c >= l && c < i && (i = c);
      let a = s + 1;
      i - l > It((2147483647 - h) / a) && or("overflow"), h += (i - l) * a, l = i;
      for (let c of e)
        if (c < l && ++h > 2147483647 && or("overflow"), c == l) {
          let d = h;
          for (let g = 36; ; g += 36) {
            let b = g <= o ? 1 : g >= o + 26 ? 26 : g - o;
            if (d < b)
              break;
            let m = d - b, y = 36 - b;
            n.push(qr(_i(b + m % y, 0))), d = It(m / y);
          }
          n.push(qr(_i(d, 0))), o = Ei(h, a, s == r), h = 0, ++s;
        }
      ++h, ++l;
    }
    return n.join("");
  }, Jt = { version: "2.1.0", ucs2: { decode: jo, encode: (e) => String.fromCodePoint(...e) }, decode: Si, encode: Ai, toASCII: function(e) {
    return Lo(e, function(n) {
      return Do.test(n) ? "xn--" + Ai(n) : n;
    });
  }, toUnicode: function(e) {
    return Lo(e, function(n) {
      return No.test(n) ? Si(n.slice(4).toLowerCase()) : n;
    });
  } }, Jt.decode, Jt.encode, Jt.toASCII, Jt.toUnicode, Jt.ucs2, Jt.version;
});
function ju(e, n) {
  return Object.prototype.hasOwnProperty.call(e, n);
}
var Fo, vr, Wo, Pt, Nu = ht(() => {
  he(), ue(), le(), Fo = function(e, n, t, l) {
    n = n || "&", t = t || "=";
    var h = {};
    if (typeof e != "string" || e.length === 0)
      return h;
    var o = /\+/g;
    e = e.split(n);
    var r = 1e3;
    l && typeof l.maxKeys == "number" && (r = l.maxKeys);
    var s = e.length;
    r > 0 && s > r && (s = r);
    for (var i = 0; i < s; ++i) {
      var a, c, d, g, b = e[i].replace(o, "%20"), m = b.indexOf(t);
      m >= 0 ? (a = b.substr(0, m), c = b.substr(m + 1)) : (a = b, c = ""), d = decodeURIComponent(a), g = decodeURIComponent(c), ju(h, d) ? Array.isArray(h[d]) ? h[d].push(g) : h[d] = [h[d], g] : h[d] = g;
    }
    return h;
  }, vr = function(e) {
    switch (typeof e) {
      case "string":
        return e;
      case "boolean":
        return e ? "true" : "false";
      case "number":
        return isFinite(e) ? e : "";
      default:
        return "";
    }
  }, Wo = function(e, n, t, l) {
    return n = n || "&", t = t || "=", e === null && (e = void 0), typeof e == "object" ? Object.keys(e).map(function(h) {
      var o = encodeURIComponent(vr(h)) + t;
      return Array.isArray(e[h]) ? e[h].map(function(r) {
        return o + encodeURIComponent(vr(r));
      }).join(n) : o + encodeURIComponent(vr(e[h]));
    }).join(n) : l ? encodeURIComponent(vr(l)) + t + encodeURIComponent(vr(e)) : "";
  }, Pt = {}, Pt.decode = Pt.parse = Fo, Pt.encode = Pt.stringify = Wo, Pt.decode, Pt.encode, Pt.parse, Pt.stringify;
});
function Kn() {
  throw new Error("setTimeout has not been defined");
}
function Yn() {
  throw new Error("clearTimeout has not been defined");
}
function ba(e) {
  if (jt === setTimeout)
    return setTimeout(e, 0);
  if ((jt === Kn || !jt) && setTimeout)
    return jt = setTimeout, setTimeout(e, 0);
  try {
    return jt(e, 0);
  } catch {
    try {
      return jt.call(null, e, 0);
    } catch {
      return jt.call(this || fr, e, 0);
    }
  }
}
function Du() {
  dr && hr && (dr = !1, hr.length ? xt = hr.concat(xt) : Lr = -1, xt.length && ma());
}
function ma() {
  if (!dr) {
    var e = ba(Du);
    dr = !0;
    for (var n = xt.length; n; ) {
      for (hr = xt, xt = []; ++Lr < n; )
        hr && hr[Lr].run();
      Lr = -1, n = xt.length;
    }
    hr = null, dr = !1, function(t) {
      if (Nt === clearTimeout)
        return clearTimeout(t);
      if ((Nt === Yn || !Nt) && clearTimeout)
        return Nt = clearTimeout, clearTimeout(t);
      try {
        Nt(t);
      } catch {
        try {
          return Nt.call(null, t);
        } catch {
          return Nt.call(this || fr, t);
        }
      }
    }(e);
  }
}
function $o(e, n) {
  (this || fr).fun = e, (this || fr).array = n;
}
function Mt() {
}
var qo, jt, Nt, fr, et, hr, xt, dr, Lr, Ze, Fu = ht(() => {
  he(), ue(), le(), fr = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : global, et = qo = {}, function() {
    try {
      jt = typeof setTimeout == "function" ? setTimeout : Kn;
    } catch {
      jt = Kn;
    }
    try {
      Nt = typeof clearTimeout == "function" ? clearTimeout : Yn;
    } catch {
      Nt = Yn;
    }
  }(), xt = [], dr = !1, Lr = -1, et.nextTick = function(e) {
    var n = new Array(arguments.length - 1);
    if (arguments.length > 1)
      for (var t = 1; t < arguments.length; t++)
        n[t - 1] = arguments[t];
    xt.push(new $o(e, n)), xt.length !== 1 || dr || ba(ma);
  }, $o.prototype.run = function() {
    (this || fr).fun.apply(null, (this || fr).array);
  }, et.title = "browser", et.browser = !0, et.env = {}, et.argv = [], et.version = "", et.versions = {}, et.on = Mt, et.addListener = Mt, et.once = Mt, et.off = Mt, et.removeListener = Mt, et.removeAllListeners = Mt, et.emit = Mt, et.prependListener = Mt, et.prependOnceListener = Mt, et.listeners = function(e) {
    return [];
  }, et.binding = function(e) {
    throw new Error("process.binding is not supported");
  }, et.cwd = function() {
    return "/";
  }, et.chdir = function(e) {
    throw new Error("process.chdir is not supported");
  }, et.umask = function() {
    return 0;
  }, Ze = qo, Ze.addListener, Ze.argv, Ze.binding, Ze.browser, Ze.chdir, Ze.cwd, Ze.emit, Ze.env, Ze.listeners, Ze.nextTick, Ze.off, Ze.on, Ze.once, Ze.prependListener, Ze.prependOnceListener, Ze.removeAllListeners, Ze.removeListener, Ze.title, Ze.umask, Ze.version, Ze.versions;
});
function Wu() {
  if (Qn)
    return Xr;
  Qn = !0;
  var e = Xr = {}, n, t;
  function l() {
    throw new Error("setTimeout has not been defined");
  }
  function h() {
    throw new Error("clearTimeout has not been defined");
  }
  (function() {
    try {
      typeof setTimeout == "function" ? n = setTimeout : n = l;
    } catch {
      n = l;
    }
    try {
      typeof clearTimeout == "function" ? t = clearTimeout : t = h;
    } catch {
      t = h;
    }
  })();
  function o(y) {
    if (n === setTimeout)
      return setTimeout(y, 0);
    if ((n === l || !n) && setTimeout)
      return n = setTimeout, setTimeout(y, 0);
    try {
      return n(y, 0);
    } catch {
      try {
        return n.call(null, y, 0);
      } catch {
        return n.call(this || ar, y, 0);
      }
    }
  }
  function r(y) {
    if (t === clearTimeout)
      return clearTimeout(y);
    if ((t === h || !t) && clearTimeout)
      return t = clearTimeout, clearTimeout(y);
    try {
      return t(y);
    } catch {
      try {
        return t.call(null, y);
      } catch {
        return t.call(this || ar, y);
      }
    }
  }
  var s = [], i = !1, a, c = -1;
  function d() {
    !i || !a || (i = !1, a.length ? s = a.concat(s) : c = -1, s.length && g());
  }
  function g() {
    if (!i) {
      var y = o(d);
      i = !0;
      for (var T = s.length; T; ) {
        for (a = s, s = []; ++c < T; )
          a && a[c].run();
        c = -1, T = s.length;
      }
      a = null, i = !1, r(y);
    }
  }
  e.nextTick = function(y) {
    var T = new Array(arguments.length - 1);
    if (arguments.length > 1)
      for (var U = 1; U < arguments.length; U++)
        T[U - 1] = arguments[U];
    s.push(new b(y, T)), s.length === 1 && !i && o(g);
  };
  function b(y, T) {
    (this || ar).fun = y, (this || ar).array = T;
  }
  b.prototype.run = function() {
    (this || ar).fun.apply(null, (this || ar).array);
  }, e.title = "browser", e.browser = !0, e.env = {}, e.argv = [], e.version = "", e.versions = {};
  function m() {
  }
  return e.on = m, e.addListener = m, e.once = m, e.off = m, e.removeListener = m, e.removeAllListeners = m, e.emit = m, e.prependListener = m, e.prependOnceListener = m, e.listeners = function(y) {
    return [];
  }, e.binding = function(y) {
    throw new Error("process.binding is not supported");
  }, e.cwd = function() {
    return "/";
  }, e.chdir = function(y) {
    throw new Error("process.chdir is not supported");
  }, e.umask = function() {
    return 0;
  }, Xr;
}
var Xr, Qn, ar, Ye, ya = ht(() => {
  he(), ue(), le(), Xr = {}, Qn = !1, ar = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : global, Ye = Wu(), Ye.platform = "browser", Ye.addListener, Ye.argv, Ye.binding, Ye.browser, Ye.chdir, Ye.cwd, Ye.emit, Ye.env, Ye.listeners, Ye.nextTick, Ye.off, Ye.on, Ye.once, Ye.prependListener, Ye.prependOnceListener, Ye.removeAllListeners, Ye.removeListener, Ye.title, Ye.umask, Ye.version, Ye.versions;
});
function $u() {
  if (Gn)
    return Zr;
  Gn = !0;
  var e = Ye;
  function n(o) {
    if (typeof o != "string")
      throw new TypeError("Path must be a string. Received " + JSON.stringify(o));
  }
  function t(o, r) {
    for (var s = "", i = 0, a = -1, c = 0, d, g = 0; g <= o.length; ++g) {
      if (g < o.length)
        d = o.charCodeAt(g);
      else {
        if (d === 47)
          break;
        d = 47;
      }
      if (d === 47) {
        if (!(a === g - 1 || c === 1))
          if (a !== g - 1 && c === 2) {
            if (s.length < 2 || i !== 2 || s.charCodeAt(s.length - 1) !== 46 || s.charCodeAt(s.length - 2) !== 46) {
              if (s.length > 2) {
                var b = s.lastIndexOf("/");
                if (b !== s.length - 1) {
                  b === -1 ? (s = "", i = 0) : (s = s.slice(0, b), i = s.length - 1 - s.lastIndexOf("/")), a = g, c = 0;
                  continue;
                }
              } else if (s.length === 2 || s.length === 1) {
                s = "", i = 0, a = g, c = 0;
                continue;
              }
            }
            r && (s.length > 0 ? s += "/.." : s = "..", i = 2);
          } else
            s.length > 0 ? s += "/" + o.slice(a + 1, g) : s = o.slice(a + 1, g), i = g - a - 1;
        a = g, c = 0;
      } else
        d === 46 && c !== -1 ? ++c : c = -1;
    }
    return s;
  }
  function l(o, r) {
    var s = r.dir || r.root, i = r.base || (r.name || "") + (r.ext || "");
    return s ? s === r.root ? s + i : s + o + i : i;
  }
  var h = { resolve: function() {
    for (var o = "", r = !1, s, i = arguments.length - 1; i >= -1 && !r; i--) {
      var a;
      i >= 0 ? a = arguments[i] : (s === void 0 && (s = e.cwd()), a = s), n(a), a.length !== 0 && (o = a + "/" + o, r = a.charCodeAt(0) === 47);
    }
    return o = t(o, !r), r ? o.length > 0 ? "/" + o : "/" : o.length > 0 ? o : ".";
  }, normalize: function(o) {
    if (n(o), o.length === 0)
      return ".";
    var r = o.charCodeAt(0) === 47, s = o.charCodeAt(o.length - 1) === 47;
    return o = t(o, !r), o.length === 0 && !r && (o = "."), o.length > 0 && s && (o += "/"), r ? "/" + o : o;
  }, isAbsolute: function(o) {
    return n(o), o.length > 0 && o.charCodeAt(0) === 47;
  }, join: function() {
    if (arguments.length === 0)
      return ".";
    for (var o, r = 0; r < arguments.length; ++r) {
      var s = arguments[r];
      n(s), s.length > 0 && (o === void 0 ? o = s : o += "/" + s);
    }
    return o === void 0 ? "." : h.normalize(o);
  }, relative: function(o, r) {
    if (n(o), n(r), o === r || (o = h.resolve(o), r = h.resolve(r), o === r))
      return "";
    for (var s = 1; s < o.length && o.charCodeAt(s) === 47; ++s)
      ;
    for (var i = o.length, a = i - s, c = 1; c < r.length && r.charCodeAt(c) === 47; ++c)
      ;
    for (var d = r.length, g = d - c, b = a < g ? a : g, m = -1, y = 0; y <= b; ++y) {
      if (y === b) {
        if (g > b) {
          if (r.charCodeAt(c + y) === 47)
            return r.slice(c + y + 1);
          if (y === 0)
            return r.slice(c + y);
        } else
          a > b && (o.charCodeAt(s + y) === 47 ? m = y : y === 0 && (m = 0));
        break;
      }
      var T = o.charCodeAt(s + y), U = r.charCodeAt(c + y);
      if (T !== U)
        break;
      T === 47 && (m = y);
    }
    var S = "";
    for (y = s + m + 1; y <= i; ++y)
      (y === i || o.charCodeAt(y) === 47) && (S.length === 0 ? S += ".." : S += "/..");
    return S.length > 0 ? S + r.slice(c + m) : (c += m, r.charCodeAt(c) === 47 && ++c, r.slice(c));
  }, _makeLong: function(o) {
    return o;
  }, dirname: function(o) {
    if (n(o), o.length === 0)
      return ".";
    for (var r = o.charCodeAt(0), s = r === 47, i = -1, a = !0, c = o.length - 1; c >= 1; --c)
      if (r = o.charCodeAt(c), r === 47) {
        if (!a) {
          i = c;
          break;
        }
      } else
        a = !1;
    return i === -1 ? s ? "/" : "." : s && i === 1 ? "//" : o.slice(0, i);
  }, basename: function(o, r) {
    if (r !== void 0 && typeof r != "string")
      throw new TypeError('"ext" argument must be a string');
    n(o);
    var s = 0, i = -1, a = !0, c;
    if (r !== void 0 && r.length > 0 && r.length <= o.length) {
      if (r.length === o.length && r === o)
        return "";
      var d = r.length - 1, g = -1;
      for (c = o.length - 1; c >= 0; --c) {
        var b = o.charCodeAt(c);
        if (b === 47) {
          if (!a) {
            s = c + 1;
            break;
          }
        } else
          g === -1 && (a = !1, g = c + 1), d >= 0 && (b === r.charCodeAt(d) ? --d === -1 && (i = c) : (d = -1, i = g));
      }
      return s === i ? i = g : i === -1 && (i = o.length), o.slice(s, i);
    } else {
      for (c = o.length - 1; c >= 0; --c)
        if (o.charCodeAt(c) === 47) {
          if (!a) {
            s = c + 1;
            break;
          }
        } else
          i === -1 && (a = !1, i = c + 1);
      return i === -1 ? "" : o.slice(s, i);
    }
  }, extname: function(o) {
    n(o);
    for (var r = -1, s = 0, i = -1, a = !0, c = 0, d = o.length - 1; d >= 0; --d) {
      var g = o.charCodeAt(d);
      if (g === 47) {
        if (!a) {
          s = d + 1;
          break;
        }
        continue;
      }
      i === -1 && (a = !1, i = d + 1), g === 46 ? r === -1 ? r = d : c !== 1 && (c = 1) : r !== -1 && (c = -1);
    }
    return r === -1 || i === -1 || c === 0 || c === 1 && r === i - 1 && r === s + 1 ? "" : o.slice(r, i);
  }, format: function(o) {
    if (o === null || typeof o != "object")
      throw new TypeError('The "pathObject" argument must be of type Object. Received type ' + typeof o);
    return l("/", o);
  }, parse: function(o) {
    n(o);
    var r = { root: "", dir: "", base: "", ext: "", name: "" };
    if (o.length === 0)
      return r;
    var s = o.charCodeAt(0), i = s === 47, a;
    i ? (r.root = "/", a = 1) : a = 0;
    for (var c = -1, d = 0, g = -1, b = !0, m = o.length - 1, y = 0; m >= a; --m) {
      if (s = o.charCodeAt(m), s === 47) {
        if (!b) {
          d = m + 1;
          break;
        }
        continue;
      }
      g === -1 && (b = !1, g = m + 1), s === 46 ? c === -1 ? c = m : y !== 1 && (y = 1) : c !== -1 && (y = -1);
    }
    return c === -1 || g === -1 || y === 0 || y === 1 && c === g - 1 && c === d + 1 ? g !== -1 && (d === 0 && i ? r.base = r.name = o.slice(1, g) : r.base = r.name = o.slice(d, g)) : (d === 0 && i ? (r.name = o.slice(1, c), r.base = o.slice(1, g)) : (r.name = o.slice(d, c), r.base = o.slice(d, g)), r.ext = o.slice(c, g)), d > 0 ? r.dir = o.slice(0, d - 1) : i && (r.dir = "/"), r;
  }, sep: "/", delimiter: ":", win32: null, posix: null };
  return h.posix = h, Zr = h, Zr;
}
var Zr, Gn, Jn, qu = ht(() => {
  he(), ue(), le(), ya(), Zr = {}, Gn = !1, Jn = $u();
}), va = {};
pr(va, { URL: () => ja, Url: () => Ba, default: () => De, fileURLToPath: () => wa, format: () => xa, parse: () => La, pathToFileURL: () => _a, resolve: () => Ma, resolveObject: () => Ua });
function St() {
  this.protocol = null, this.slashes = null, this.auth = null, this.host = null, this.port = null, this.hostname = null, this.hash = null, this.search = null, this.query = null, this.pathname = null, this.path = null, this.href = null;
}
function Cr(e, n, t) {
  if (e && kt.isObject(e) && e instanceof St)
    return e;
  var l = new St();
  return l.parse(e, n, t), l;
}
function Vu() {
  if (Xn)
    return ei;
  Xn = !0;
  var e = Ze;
  function n(o) {
    if (typeof o != "string")
      throw new TypeError("Path must be a string. Received " + JSON.stringify(o));
  }
  function t(o, r) {
    for (var s = "", i = 0, a = -1, c = 0, d, g = 0; g <= o.length; ++g) {
      if (g < o.length)
        d = o.charCodeAt(g);
      else {
        if (d === 47)
          break;
        d = 47;
      }
      if (d === 47) {
        if (!(a === g - 1 || c === 1))
          if (a !== g - 1 && c === 2) {
            if (s.length < 2 || i !== 2 || s.charCodeAt(s.length - 1) !== 46 || s.charCodeAt(s.length - 2) !== 46) {
              if (s.length > 2) {
                var b = s.lastIndexOf("/");
                if (b !== s.length - 1) {
                  b === -1 ? (s = "", i = 0) : (s = s.slice(0, b), i = s.length - 1 - s.lastIndexOf("/")), a = g, c = 0;
                  continue;
                }
              } else if (s.length === 2 || s.length === 1) {
                s = "", i = 0, a = g, c = 0;
                continue;
              }
            }
            r && (s.length > 0 ? s += "/.." : s = "..", i = 2);
          } else
            s.length > 0 ? s += "/" + o.slice(a + 1, g) : s = o.slice(a + 1, g), i = g - a - 1;
        a = g, c = 0;
      } else
        d === 46 && c !== -1 ? ++c : c = -1;
    }
    return s;
  }
  function l(o, r) {
    var s = r.dir || r.root, i = r.base || (r.name || "") + (r.ext || "");
    return s ? s === r.root ? s + i : s + o + i : i;
  }
  var h = { resolve: function() {
    for (var o = "", r = !1, s, i = arguments.length - 1; i >= -1 && !r; i--) {
      var a;
      i >= 0 ? a = arguments[i] : (s === void 0 && (s = e.cwd()), a = s), n(a), a.length !== 0 && (o = a + "/" + o, r = a.charCodeAt(0) === 47);
    }
    return o = t(o, !r), r ? o.length > 0 ? "/" + o : "/" : o.length > 0 ? o : ".";
  }, normalize: function(o) {
    if (n(o), o.length === 0)
      return ".";
    var r = o.charCodeAt(0) === 47, s = o.charCodeAt(o.length - 1) === 47;
    return o = t(o, !r), o.length === 0 && !r && (o = "."), o.length > 0 && s && (o += "/"), r ? "/" + o : o;
  }, isAbsolute: function(o) {
    return n(o), o.length > 0 && o.charCodeAt(0) === 47;
  }, join: function() {
    if (arguments.length === 0)
      return ".";
    for (var o, r = 0; r < arguments.length; ++r) {
      var s = arguments[r];
      n(s), s.length > 0 && (o === void 0 ? o = s : o += "/" + s);
    }
    return o === void 0 ? "." : h.normalize(o);
  }, relative: function(o, r) {
    if (n(o), n(r), o === r || (o = h.resolve(o), r = h.resolve(r), o === r))
      return "";
    for (var s = 1; s < o.length && o.charCodeAt(s) === 47; ++s)
      ;
    for (var i = o.length, a = i - s, c = 1; c < r.length && r.charCodeAt(c) === 47; ++c)
      ;
    for (var d = r.length, g = d - c, b = a < g ? a : g, m = -1, y = 0; y <= b; ++y) {
      if (y === b) {
        if (g > b) {
          if (r.charCodeAt(c + y) === 47)
            return r.slice(c + y + 1);
          if (y === 0)
            return r.slice(c + y);
        } else
          a > b && (o.charCodeAt(s + y) === 47 ? m = y : y === 0 && (m = 0));
        break;
      }
      var T = o.charCodeAt(s + y), U = r.charCodeAt(c + y);
      if (T !== U)
        break;
      T === 47 && (m = y);
    }
    var S = "";
    for (y = s + m + 1; y <= i; ++y)
      (y === i || o.charCodeAt(y) === 47) && (S.length === 0 ? S += ".." : S += "/..");
    return S.length > 0 ? S + r.slice(c + m) : (c += m, r.charCodeAt(c) === 47 && ++c, r.slice(c));
  }, _makeLong: function(o) {
    return o;
  }, dirname: function(o) {
    if (n(o), o.length === 0)
      return ".";
    for (var r = o.charCodeAt(0), s = r === 47, i = -1, a = !0, c = o.length - 1; c >= 1; --c)
      if (r = o.charCodeAt(c), r === 47) {
        if (!a) {
          i = c;
          break;
        }
      } else
        a = !1;
    return i === -1 ? s ? "/" : "." : s && i === 1 ? "//" : o.slice(0, i);
  }, basename: function(o, r) {
    if (r !== void 0 && typeof r != "string")
      throw new TypeError('"ext" argument must be a string');
    n(o);
    var s = 0, i = -1, a = !0, c;
    if (r !== void 0 && r.length > 0 && r.length <= o.length) {
      if (r.length === o.length && r === o)
        return "";
      var d = r.length - 1, g = -1;
      for (c = o.length - 1; c >= 0; --c) {
        var b = o.charCodeAt(c);
        if (b === 47) {
          if (!a) {
            s = c + 1;
            break;
          }
        } else
          g === -1 && (a = !1, g = c + 1), d >= 0 && (b === r.charCodeAt(d) ? --d === -1 && (i = c) : (d = -1, i = g));
      }
      return s === i ? i = g : i === -1 && (i = o.length), o.slice(s, i);
    } else {
      for (c = o.length - 1; c >= 0; --c)
        if (o.charCodeAt(c) === 47) {
          if (!a) {
            s = c + 1;
            break;
          }
        } else
          i === -1 && (a = !1, i = c + 1);
      return i === -1 ? "" : o.slice(s, i);
    }
  }, extname: function(o) {
    n(o);
    for (var r = -1, s = 0, i = -1, a = !0, c = 0, d = o.length - 1; d >= 0; --d) {
      var g = o.charCodeAt(d);
      if (g === 47) {
        if (!a) {
          s = d + 1;
          break;
        }
        continue;
      }
      i === -1 && (a = !1, i = d + 1), g === 46 ? r === -1 ? r = d : c !== 1 && (c = 1) : r !== -1 && (c = -1);
    }
    return r === -1 || i === -1 || c === 0 || c === 1 && r === i - 1 && r === s + 1 ? "" : o.slice(r, i);
  }, format: function(o) {
    if (o === null || typeof o != "object")
      throw new TypeError('The "pathObject" argument must be of type Object. Received type ' + typeof o);
    return l("/", o);
  }, parse: function(o) {
    n(o);
    var r = { root: "", dir: "", base: "", ext: "", name: "" };
    if (o.length === 0)
      return r;
    var s = o.charCodeAt(0), i = s === 47, a;
    i ? (r.root = "/", a = 1) : a = 0;
    for (var c = -1, d = 0, g = -1, b = !0, m = o.length - 1, y = 0; m >= a; --m) {
      if (s = o.charCodeAt(m), s === 47) {
        if (!b) {
          d = m + 1;
          break;
        }
        continue;
      }
      g === -1 && (b = !1, g = m + 1), s === 46 ? c === -1 ? c = m : y !== 1 && (y = 1) : c !== -1 && (y = -1);
    }
    return c === -1 || g === -1 || y === 0 || y === 1 && c === g - 1 && c === d + 1 ? g !== -1 && (d === 0 && i ? r.base = r.name = o.slice(1, g) : r.base = r.name = o.slice(d, g)) : (d === 0 && i ? (r.name = o.slice(1, c), r.base = o.slice(1, g)) : (r.name = o.slice(d, c), r.base = o.slice(d, g)), r.ext = o.slice(c, g)), d > 0 ? r.dir = o.slice(0, d - 1) : i && (r.dir = "/"), r;
  }, sep: "/", delimiter: ":", win32: null, posix: null };
  return h.posix = h, ei = h, ei;
}
function Hu(e) {
  if (typeof e == "string")
    e = new URL(e);
  else if (!(e instanceof URL))
    throw new Deno.errors.InvalidData("invalid argument path , must be a string or URL");
  if (e.protocol !== "file:")
    throw new Deno.errors.InvalidData("invalid url scheme");
  return ni ? zu(e) : Ku(e);
}
function zu(e) {
  let n = e.hostname, t = e.pathname;
  for (let l = 0; l < t.length; l++)
    if (t[l] === "%") {
      let h = t.codePointAt(l + 2) || 32;
      if (t[l + 1] === "2" && h === 102 || t[l + 1] === "5" && h === 99)
        throw new Deno.errors.InvalidData("must not include encoded \\ or / characters");
    }
  if (t = t.replace(Ta, "\\"), t = decodeURIComponent(t), n !== "")
    return `\\\\${n}${t}`;
  {
    let l = t.codePointAt(1) | 32, h = t[2];
    if (l < Aa || l > Ia || h !== ":")
      throw new Deno.errors.InvalidData("file url path must be absolute");
    return t.slice(1);
  }
}
function Ku(e) {
  if (e.hostname !== "")
    throw new Deno.errors.InvalidData("invalid file url hostname");
  let n = e.pathname;
  for (let t = 0; t < n.length; t++)
    if (n[t] === "%") {
      let l = n.codePointAt(t + 2) || 32;
      if (n[t + 1] === "2" && l === 102)
        throw new Deno.errors.InvalidData("must not include encoded / characters");
    }
  return decodeURIComponent(n);
}
function Yu(e) {
  let n = Zn.resolve(e), t = e.charCodeAt(e.length - 1);
  (t === Sa || ni && t === Ea) && n[n.length - 1] !== Zn.sep && (n += "/");
  let l = new URL("file://");
  return n.includes("%") && (n = n.replace(ka, "%25")), !ni && n.includes("\\") && (n = n.replace(Ra, "%5C")), n.includes(`
`) && (n = n.replace(Oa, "%0A")), n.includes("\r") && (n = n.replace(Ca, "%0D")), n.includes("	") && (n = n.replace(Pa, "%09")), l.pathname = n, l;
}
function wa(e) {
  if (typeof e == "string")
    e = new URL(e);
  else if (!(e instanceof URL))
    throw new Deno.errors.InvalidData("invalid argument path , must be a string or URL");
  if (e.protocol !== "file:")
    throw new Deno.errors.InvalidData("invalid url scheme");
  return oi ? Qu(e) : Gu(e);
}
function Qu(e) {
  let n = e.hostname, t = e.pathname;
  for (let l = 0; l < t.length; l++)
    if (t[l] === "%") {
      let h = t.codePointAt(l + 2) || 32;
      if (t[l + 1] === "2" && h === 102 || t[l + 1] === "5" && h === 99)
        throw new Deno.errors.InvalidData("must not include encoded \\ or / characters");
    }
  if (t = t.replace($a, "\\"), t = decodeURIComponent(t), n !== "")
    return `\\\\${n}${t}`;
  {
    let l = t.codePointAt(1) | 32, h = t[2];
    if (l < Fa || l > Wa || h !== ":")
      throw new Deno.errors.InvalidData("file url path must be absolute");
    return t.slice(1);
  }
}
function Gu(e) {
  if (e.hostname !== "")
    throw new Deno.errors.InvalidData("invalid file url hostname");
  let n = e.pathname;
  for (let t = 0; t < n.length; t++)
    if (n[t] === "%") {
      let l = n.codePointAt(t + 2) || 32;
      if (n[t + 1] === "2" && l === 102)
        throw new Deno.errors.InvalidData("must not include encoded / characters");
    }
  return decodeURIComponent(n);
}
function _a(e) {
  let n = Jn.resolve(e), t = e.charCodeAt(e.length - 1);
  (t === Da || oi && t === Na) && n[n.length - 1] !== Jn.sep && (n += "/");
  let l = new URL("file://");
  return n.includes("%") && (n = n.replace(qa, "%25")), !oi && n.includes("\\") && (n = n.replace(Va, "%5C")), n.includes(`
`) && (n = n.replace(Ha, "%0A")), n.includes("\r") && (n = n.replace(za, "%0D")), n.includes("	") && (n = n.replace(Ka, "%09")), l.pathname = n, l;
}
var De, Vo, kt, Ho, zo, Ko, Yo, Vr, Ii, Ti, ki, Qo, Go, Hr, sr, zr, ei, Xn, Zn, Jo, Ea, Sa, Aa, Ia, ni, Ta, ka, Ra, Oa, Ca, Pa, Xo, Ba, xa, Ma, Ua, La, ja, Na, Da, Fa, Wa, oi, $a, qa, Va, Ha, za, Ka, Ju = ht(() => {
  he(), ue(), le(), Lu(), Nu(), Fu(), qu(), ya(), De = {}, Vo = Jt, kt = { isString: function(e) {
    return typeof e == "string";
  }, isObject: function(e) {
    return typeof e == "object" && e !== null;
  }, isNull: function(e) {
    return e === null;
  }, isNullOrUndefined: function(e) {
    return e == null;
  } }, De.parse = Cr, De.resolve = function(e, n) {
    return Cr(e, !1, !0).resolve(n);
  }, De.resolveObject = function(e, n) {
    return e ? Cr(e, !1, !0).resolveObject(n) : n;
  }, De.format = function(e) {
    return kt.isString(e) && (e = Cr(e)), e instanceof St ? e.format() : St.prototype.format.call(e);
  }, De.Url = St, Ho = /^([a-z0-9.+-]+:)/i, zo = /:[0-9]*$/, Ko = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/, Yo = ["{", "}", "|", "\\", "^", "`"].concat(["<", ">", '"', "`", " ", "\r", `
`, "	"]), Vr = ["'"].concat(Yo), Ii = ["%", "/", "?", ";", "#"].concat(Vr), Ti = ["/", "?", "#"], ki = /^[+a-z0-9A-Z_-]{0,63}$/, Qo = /^([+a-z0-9A-Z_-]{0,63})(.*)$/, Go = { javascript: !0, "javascript:": !0 }, Hr = { javascript: !0, "javascript:": !0 }, sr = { http: !0, https: !0, ftp: !0, gopher: !0, file: !0, "http:": !0, "https:": !0, "ftp:": !0, "gopher:": !0, "file:": !0 }, zr = Pt, St.prototype.parse = function(e, n, t) {
    if (!kt.isString(e))
      throw new TypeError("Parameter 'url' must be a string, not " + typeof e);
    var l = e.indexOf("?"), h = l !== -1 && l < e.indexOf("#") ? "?" : "#", o = e.split(h);
    o[0] = o[0].replace(/\\/g, "/");
    var r = e = o.join(h);
    if (r = r.trim(), !t && e.split("#").length === 1) {
      var s = Ko.exec(r);
      if (s)
        return this.path = r, this.href = r, this.pathname = s[1], s[2] ? (this.search = s[2], this.query = n ? zr.parse(this.search.substr(1)) : this.search.substr(1)) : n && (this.search = "", this.query = {}), this;
    }
    var i = Ho.exec(r);
    if (i) {
      var a = (i = i[0]).toLowerCase();
      this.protocol = a, r = r.substr(i.length);
    }
    if (t || i || r.match(/^\/\/[^@\/]+@[^@\/]+/)) {
      var c = r.substr(0, 2) === "//";
      !c || i && Hr[i] || (r = r.substr(2), this.slashes = !0);
    }
    if (!Hr[i] && (c || i && !sr[i])) {
      for (var d, g, b = -1, m = 0; m < Ti.length; m++)
        (y = r.indexOf(Ti[m])) !== -1 && (b === -1 || y < b) && (b = y);
      for ((g = b === -1 ? r.lastIndexOf("@") : r.lastIndexOf("@", b)) !== -1 && (d = r.slice(0, g), r = r.slice(g + 1), this.auth = decodeURIComponent(d)), b = -1, m = 0; m < Ii.length; m++) {
        var y;
        (y = r.indexOf(Ii[m])) !== -1 && (b === -1 || y < b) && (b = y);
      }
      b === -1 && (b = r.length), this.host = r.slice(0, b), r = r.slice(b), this.parseHost(), this.hostname = this.hostname || "";
      var T = this.hostname[0] === "[" && this.hostname[this.hostname.length - 1] === "]";
      if (!T)
        for (var U = this.hostname.split(/\./), S = (m = 0, U.length); m < S; m++) {
          var R = U[m];
          if (R && !R.match(ki)) {
            for (var F = "", W = 0, C = R.length; W < C; W++)
              R.charCodeAt(W) > 127 ? F += "x" : F += R[W];
            if (!F.match(ki)) {
              var O = U.slice(0, m), M = U.slice(m + 1), $ = R.match(Qo);
              $ && (O.push($[1]), M.unshift($[2])), M.length && (r = "/" + M.join(".") + r), this.hostname = O.join(".");
              break;
            }
          }
        }
      this.hostname.length > 255 ? this.hostname = "" : this.hostname = this.hostname.toLowerCase(), T || (this.hostname = Vo.toASCII(this.hostname));
      var X = this.port ? ":" + this.port : "", te = this.hostname || "";
      this.host = te + X, this.href += this.host, T && (this.hostname = this.hostname.substr(1, this.hostname.length - 2), r[0] !== "/" && (r = "/" + r));
    }
    if (!Go[a])
      for (m = 0, S = Vr.length; m < S; m++) {
        var E = Vr[m];
        if (r.indexOf(E) !== -1) {
          var q = encodeURIComponent(E);
          q === E && (q = escape(E)), r = r.split(E).join(q);
        }
      }
    var Z = r.indexOf("#");
    Z !== -1 && (this.hash = r.substr(Z), r = r.slice(0, Z));
    var z = r.indexOf("?");
    if (z !== -1 ? (this.search = r.substr(z), this.query = r.substr(z + 1), n && (this.query = zr.parse(this.query)), r = r.slice(0, z)) : n && (this.search = "", this.query = {}), r && (this.pathname = r), sr[a] && this.hostname && !this.pathname && (this.pathname = "/"), this.pathname || this.search) {
      X = this.pathname || "";
      var be = this.search || "";
      this.path = X + be;
    }
    return this.href = this.format(), this;
  }, St.prototype.format = function() {
    var e = this.auth || "";
    e && (e = (e = encodeURIComponent(e)).replace(/%3A/i, ":"), e += "@");
    var n = this.protocol || "", t = this.pathname || "", l = this.hash || "", h = !1, o = "";
    this.host ? h = e + this.host : this.hostname && (h = e + (this.hostname.indexOf(":") === -1 ? this.hostname : "[" + this.hostname + "]"), this.port && (h += ":" + this.port)), this.query && kt.isObject(this.query) && Object.keys(this.query).length && (o = zr.stringify(this.query));
    var r = this.search || o && "?" + o || "";
    return n && n.substr(-1) !== ":" && (n += ":"), this.slashes || (!n || sr[n]) && h !== !1 ? (h = "//" + (h || ""), t && t.charAt(0) !== "/" && (t = "/" + t)) : h || (h = ""), l && l.charAt(0) !== "#" && (l = "#" + l), r && r.charAt(0) !== "?" && (r = "?" + r), n + h + (t = t.replace(/[?#]/g, function(s) {
      return encodeURIComponent(s);
    })) + (r = r.replace("#", "%23")) + l;
  }, St.prototype.resolve = function(e) {
    return this.resolveObject(Cr(e, !1, !0)).format();
  }, St.prototype.resolveObject = function(e) {
    if (kt.isString(e)) {
      var n = new St();
      n.parse(e, !1, !0), e = n;
    }
    for (var t = new St(), l = Object.keys(this), h = 0; h < l.length; h++) {
      var o = l[h];
      t[o] = this[o];
    }
    if (t.hash = e.hash, e.href === "")
      return t.href = t.format(), t;
    if (e.slashes && !e.protocol) {
      for (var r = Object.keys(e), s = 0; s < r.length; s++) {
        var i = r[s];
        i !== "protocol" && (t[i] = e[i]);
      }
      return sr[t.protocol] && t.hostname && !t.pathname && (t.path = t.pathname = "/"), t.href = t.format(), t;
    }
    if (e.protocol && e.protocol !== t.protocol) {
      if (!sr[e.protocol]) {
        for (var a = Object.keys(e), c = 0; c < a.length; c++) {
          var d = a[c];
          t[d] = e[d];
        }
        return t.href = t.format(), t;
      }
      if (t.protocol = e.protocol, e.host || Hr[e.protocol])
        t.pathname = e.pathname;
      else {
        for (var g = (e.pathname || "").split("/"); g.length && !(e.host = g.shift()); )
          ;
        e.host || (e.host = ""), e.hostname || (e.hostname = ""), g[0] !== "" && g.unshift(""), g.length < 2 && g.unshift(""), t.pathname = g.join("/");
      }
      if (t.search = e.search, t.query = e.query, t.host = e.host || "", t.auth = e.auth, t.hostname = e.hostname || e.host, t.port = e.port, t.pathname || t.search) {
        var b = t.pathname || "", m = t.search || "";
        t.path = b + m;
      }
      return t.slashes = t.slashes || e.slashes, t.href = t.format(), t;
    }
    var y = t.pathname && t.pathname.charAt(0) === "/", T = e.host || e.pathname && e.pathname.charAt(0) === "/", U = T || y || t.host && e.pathname, S = U, R = t.pathname && t.pathname.split("/") || [], F = (g = e.pathname && e.pathname.split("/") || [], t.protocol && !sr[t.protocol]);
    if (F && (t.hostname = "", t.port = null, t.host && (R[0] === "" ? R[0] = t.host : R.unshift(t.host)), t.host = "", e.protocol && (e.hostname = null, e.port = null, e.host && (g[0] === "" ? g[0] = e.host : g.unshift(e.host)), e.host = null), U = U && (g[0] === "" || R[0] === "")), T)
      t.host = e.host || e.host === "" ? e.host : t.host, t.hostname = e.hostname || e.hostname === "" ? e.hostname : t.hostname, t.search = e.search, t.query = e.query, R = g;
    else if (g.length)
      R || (R = []), R.pop(), R = R.concat(g), t.search = e.search, t.query = e.query;
    else if (!kt.isNullOrUndefined(e.search))
      return F && (t.hostname = t.host = R.shift(), ($ = !!(t.host && t.host.indexOf("@") > 0) && t.host.split("@")) && (t.auth = $.shift(), t.host = t.hostname = $.shift())), t.search = e.search, t.query = e.query, kt.isNull(t.pathname) && kt.isNull(t.search) || (t.path = (t.pathname ? t.pathname : "") + (t.search ? t.search : "")), t.href = t.format(), t;
    if (!R.length)
      return t.pathname = null, t.search ? t.path = "/" + t.search : t.path = null, t.href = t.format(), t;
    for (var W = R.slice(-1)[0], C = (t.host || e.host || R.length > 1) && (W === "." || W === "..") || W === "", O = 0, M = R.length; M >= 0; M--)
      (W = R[M]) === "." ? R.splice(M, 1) : W === ".." ? (R.splice(M, 1), O++) : O && (R.splice(M, 1), O--);
    if (!U && !S)
      for (; O--; O)
        R.unshift("..");
    !U || R[0] === "" || R[0] && R[0].charAt(0) === "/" || R.unshift(""), C && R.join("/").substr(-1) !== "/" && R.push("");
    var $, X = R[0] === "" || R[0] && R[0].charAt(0) === "/";
    return F && (t.hostname = t.host = X ? "" : R.length ? R.shift() : "", ($ = !!(t.host && t.host.indexOf("@") > 0) && t.host.split("@")) && (t.auth = $.shift(), t.host = t.hostname = $.shift())), (U = U || t.host && R.length) && !X && R.unshift(""), R.length ? t.pathname = R.join("/") : (t.pathname = null, t.path = null), kt.isNull(t.pathname) && kt.isNull(t.search) || (t.path = (t.pathname ? t.pathname : "") + (t.search ? t.search : "")), t.auth = e.auth || t.auth, t.slashes = t.slashes || e.slashes, t.href = t.format(), t;
  }, St.prototype.parseHost = function() {
    var e = this.host, n = zo.exec(e);
    n && ((n = n[0]) !== ":" && (this.port = n.substr(1)), e = e.substr(0, e.length - n.length)), e && (this.hostname = e);
  }, De.Url, De.format, De.resolve, De.resolveObject, ei = {}, Xn = !1, Zn = Vu(), Jo = typeof Deno < "u" ? Deno.build.os === "windows" ? "win32" : Deno.build.os : void 0, De.URL = typeof URL < "u" ? URL : null, De.pathToFileURL = Yu, De.fileURLToPath = Hu, De.Url, De.format, De.resolve, De.resolveObject, De.URL, Ea = 92, Sa = 47, Aa = 97, Ia = 122, ni = Jo === "win32", Ta = /\//g, ka = /%/g, Ra = /\\/g, Oa = /\n/g, Ca = /\r/g, Pa = /\t/g, Xo = typeof Deno < "u" ? Deno.build.os === "windows" ? "win32" : Deno.build.os : void 0, De.URL = typeof URL < "u" ? URL : null, De.pathToFileURL = _a, De.fileURLToPath = wa, Ba = De.Url, xa = De.format, Ma = De.resolve, Ua = De.resolveObject, La = De.parse, ja = De.URL, Na = 92, Da = 47, Fa = 97, Wa = 122, oi = Xo === "win32", $a = /\//g, qa = /%/g, Va = /\\/g, Ha = /\n/g, za = /\r/g, Ka = /\t/g;
}), co = {};
pr(co, { Server: () => Qe, Socket: () => Qe, Stream: () => Qe, _createServerHandle: () => Qe, _normalizeArgs: () => Qe, _setSimultaneousAccepts: () => Qe, connect: () => Qe, createConnection: () => Qe, createServer: () => Qe, default: () => Ya, isIP: () => Qe, isIPv4: () => Qe, isIPv6: () => Qe });
function Qe() {
  throw new Error("Node.js net module is not supported by JSPM core outside of Node.js");
}
var Ya, Qa = ht(() => {
  he(), ue(), le(), Ya = { _createServerHandle: Qe, _normalizeArgs: Qe, _setSimultaneousAccepts: Qe, connect: Qe, createConnection: Qe, createServer: Qe, isIP: Qe, isIPv4: Qe, isIPv6: Qe, Server: Qe, Socket: Qe, Stream: Qe };
}), Zo = we((e) => {
  he(), ue(), le();
  var n = e && e.__importDefault || function(r) {
    return r && r.__esModule ? r : { default: r };
  };
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = n((Qa(), $e(co))), l = n(Vt()), h = (0, l.default)("mqttjs:tcp"), o = (r, s) => {
    s.port = s.port || 1883, s.hostname = s.hostname || s.host || "localhost";
    let { port: i, path: a } = s, c = s.hostname;
    return h("port %d and host %s", i, c), t.default.createConnection({ port: i, host: c, path: a });
  };
  e.default = o;
}), Ga = {};
pr(Ga, { default: () => Ja });
var Ja, Xu = ht(() => {
  he(), ue(), le(), Ja = {};
}), es = we((e) => {
  he(), ue(), le();
  var n = e && e.__importDefault || function(s) {
    return s && s.__esModule ? s : { default: s };
  };
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = n((Xu(), $e(Ga))), l = n((Qa(), $e(co))), h = n(Vt()), o = (0, h.default)("mqttjs:tls"), r = (s, i) => {
    i.port = i.port || 8883, i.host = i.hostname || i.host || "localhost", l.default.isIP(i.host) === 0 && (i.servername = i.host), i.rejectUnauthorized = i.rejectUnauthorized !== !1, delete i.path, o("port %d host %s rejectUnauthorized %b", i.port, i.host, i.rejectUnauthorized);
    let a = t.default.connect(i);
    a.on("secureConnect", () => {
      i.rejectUnauthorized && !a.authorized ? a.emit("error", new Error("TLS not authorized")) : a.removeListener("error", c);
    });
    function c(d) {
      i.rejectUnauthorized && s.emit("error", d), a.end();
    }
    return a.on("error", c), a;
  };
  e.default = r;
}), fo = we((e) => {
  he(), ue(), le(), Object.defineProperty(e, "__esModule", { value: !0 }), e.BufferedDuplex = e.writev = void 0;
  var n = mr(), t = (ft(), $e(ct));
  function l(o, r) {
    let s = new Array(o.length);
    for (let i = 0; i < o.length; i++)
      typeof o[i].chunk == "string" ? s[i] = t.Buffer.from(o[i].chunk, "utf8") : s[i] = o[i].chunk;
    this._write(t.Buffer.concat(s), "binary", r);
  }
  e.writev = l;
  var h = class extends n.Duplex {
    constructor(o, r, s) {
      super({ objectMode: !0 }), this.proxy = r, this.socket = s, this.writeQueue = [], o.objectMode || (this._writev = l.bind(this)), this.isSocketOpen = !1, this.proxy.on("data", (i) => {
        this.push(i);
      });
    }
    _read(o) {
      this.proxy.read(o);
    }
    _write(o, r, s) {
      this.isSocketOpen ? this.writeToProxy(o, r, s) : this.writeQueue.push({ chunk: o, encoding: r, cb: s });
    }
    _final(o) {
      this.writeQueue = [], this.proxy.end(o);
    }
    _destroy(o, r) {
      this.writeQueue = [], this.proxy.destroy(), r(o);
    }
    socketReady() {
      this.emit("connect"), this.isSocketOpen = !0, this.processWriteQueue();
    }
    writeToProxy(o, r, s) {
      this.proxy.write(o, r) === !1 ? this.proxy.once("drain", s) : s();
    }
    processWriteQueue() {
      for (; this.writeQueue.length > 0; ) {
        let { chunk: o, encoding: r, cb: s } = this.writeQueue.shift();
        this.writeToProxy(o, r, s);
      }
    }
  };
  e.BufferedDuplex = h;
}), ts = we((e) => {
  he(), ue(), le(), Object.defineProperty(e, "__esModule", { value: !0 });
  var n = (ft(), $e(ct)), t = mr(), l = fo(), h, o, r;
  function s() {
    let g = new t.Transform();
    return g._write = (b, m, y) => {
      h.send({ data: b.buffer, success() {
        y();
      }, fail(T) {
        y(new Error(T));
      } });
    }, g._flush = (b) => {
      h.close({ success() {
        b();
      } });
    }, g;
  }
  function i(g) {
    g.hostname || (g.hostname = "localhost"), g.path || (g.path = "/"), g.wsOptions || (g.wsOptions = {});
  }
  function a(g, b) {
    let m = g.protocol === "wxs" ? "wss" : "ws", y = `${m}://${g.hostname}${g.path}`;
    return g.port && g.port !== 80 && g.port !== 443 && (y = `${m}://${g.hostname}:${g.port}${g.path}`), typeof g.transformWsUrl == "function" && (y = g.transformWsUrl(y, g, b)), y;
  }
  function c() {
    h.onOpen(() => {
      r.socketReady();
    }), h.onMessage((g) => {
      let { data: b } = g;
      b instanceof ArrayBuffer ? b = n.Buffer.from(b) : b = n.Buffer.from(b, "utf8"), o.push(b);
    }), h.onClose(() => {
      r.emit("close"), r.end(), r.destroy();
    }), h.onError((g) => {
      let b = new Error(g.errMsg);
      r.destroy(b);
    });
  }
  var d = (g, b) => {
    if (b.hostname = b.hostname || b.host, !b.hostname)
      throw new Error("Could not determine host. Specify host manually.");
    let m = b.protocolId === "MQIsdp" && b.protocolVersion === 3 ? "mqttv3.1" : "mqtt";
    i(b);
    let y = a(b, g);
    h = wx.connectSocket({ url: y, protocols: [m] }), o = s(), r = new l.BufferedDuplex(b, o, h), r._destroy = (U, S) => {
      h.close({ success() {
        S && S(U);
      } });
    };
    let T = r.destroy;
    return r.destroy = (U, S) => (r.destroy = T, setTimeout(() => {
      h.close({ fail() {
        r._destroy(U, S);
      } });
    }, 0), r), c(), r;
  };
  e.default = d;
}), rs = we((e) => {
  he(), ue(), le(), Object.defineProperty(e, "__esModule", { value: !0 });
  var n = (ft(), $e(ct)), t = mr(), l = fo(), h, o, r, s = !1;
  function i() {
    let b = new t.Transform();
    return b._write = (m, y, T) => {
      h.sendSocketMessage({ data: m.buffer, success() {
        T();
      }, fail() {
        T(new Error());
      } });
    }, b._flush = (m) => {
      h.closeSocket({ success() {
        m();
      } });
    }, b;
  }
  function a(b) {
    b.hostname || (b.hostname = "localhost"), b.path || (b.path = "/"), b.wsOptions || (b.wsOptions = {});
  }
  function c(b, m) {
    let y = b.protocol === "alis" ? "wss" : "ws", T = `${y}://${b.hostname}${b.path}`;
    return b.port && b.port !== 80 && b.port !== 443 && (T = `${y}://${b.hostname}:${b.port}${b.path}`), typeof b.transformWsUrl == "function" && (T = b.transformWsUrl(T, b, m)), T;
  }
  function d() {
    s || (s = !0, h.onSocketOpen(() => {
      r.socketReady();
    }), h.onSocketMessage((b) => {
      if (typeof b.data == "string") {
        let m = n.Buffer.from(b.data, "base64");
        o.push(m);
      } else {
        let m = new FileReader();
        m.addEventListener("load", () => {
          let y = m.result;
          y instanceof ArrayBuffer ? y = n.Buffer.from(y) : y = n.Buffer.from(y, "utf8"), o.push(y);
        }), m.readAsArrayBuffer(b.data);
      }
    }), h.onSocketClose(() => {
      r.end(), r.destroy();
    }), h.onSocketError((b) => {
      r.destroy(b);
    }));
  }
  var g = (b, m) => {
    if (m.hostname = m.hostname || m.host, !m.hostname)
      throw new Error("Could not determine host. Specify host manually.");
    let y = m.protocolId === "MQIsdp" && m.protocolVersion === 3 ? "mqttv3.1" : "mqtt";
    a(m);
    let T = c(m, b);
    return h = m.my, h.connectSocket({ url: T, protocols: y }), o = i(), r = new l.BufferedDuplex(m, o, h), d(), r;
  };
  e.default = g;
}), Zu = we((e, n) => {
  he(), ue(), le(), n.exports = function() {
    throw new Error("ws does not work in the browser. Browser clients must use the native WebSocket object");
  };
}), is = we((e) => {
  he(), ue(), le();
  var n = e && e.__importDefault || function(U) {
    return U && U.__esModule ? U : { default: U };
  };
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = (ft(), $e(ct)), l = n(Zu()), h = n(Vt()), o = mr(), r = n(ci()), s = fo(), i = (0, h.default)("mqttjs:ws"), a = ["rejectUnauthorized", "ca", "cert", "key", "pfx", "passphrase"];
  function c(U, S) {
    let R = `${U.protocol}://${U.hostname}:${U.port}${U.path}`;
    return typeof U.transformWsUrl == "function" && (R = U.transformWsUrl(R, U, S)), R;
  }
  function d(U) {
    let S = U;
    return U.hostname || (S.hostname = "localhost"), U.port || (U.protocol === "wss" ? S.port = 443 : S.port = 80), U.path || (S.path = "/"), U.wsOptions || (S.wsOptions = {}), !r.default && U.protocol === "wss" && a.forEach((R) => {
      Object.prototype.hasOwnProperty.call(U, R) && !Object.prototype.hasOwnProperty.call(U.wsOptions, R) && (S.wsOptions[R] = U[R]);
    }), S;
  }
  function g(U) {
    let S = d(U);
    if (S.hostname || (S.hostname = S.host), !S.hostname) {
      if (typeof document > "u")
        throw new Error("Could not determine host. Specify host manually.");
      let R = new URL(document.URL);
      S.hostname = R.hostname, S.port || (S.port = Number(R.port));
    }
    return S.objectMode === void 0 && (S.objectMode = !(S.binary === !0 || S.binary === void 0)), S;
  }
  function b(U, S, R) {
    i("createWebSocket"), i(`protocol: ${R.protocolId} ${R.protocolVersion}`);
    let F = R.protocolId === "MQIsdp" && R.protocolVersion === 3 ? "mqttv3.1" : "mqtt";
    i(`creating new Websocket for url: ${S} and protocol: ${F}`);
    let W;
    return R.createWebsocket ? W = R.createWebsocket(S, [F], R) : W = new l.default(S, [F], R.wsOptions), W;
  }
  function m(U, S) {
    let R = S.protocolId === "MQIsdp" && S.protocolVersion === 3 ? "mqttv3.1" : "mqtt", F = c(S, U), W;
    return S.createWebsocket ? W = S.createWebsocket(F, [R], S) : W = new WebSocket(F, [R]), W.binaryType = "arraybuffer", W;
  }
  var y = (U, S) => {
    i("streamBuilder");
    let R = d(S), F = c(R, U), W = b(U, F, R), C = l.default.createWebSocketStream(W, R.wsOptions);
    return C.url = F, W.on("close", () => {
      C.destroy();
    }), C;
  }, T = (U, S) => {
    i("browserStreamBuilder");
    let R, F = g(S).browserBufferSize || 1024 * 512, W = S.browserBufferTimeout || 1e3, C = !S.objectMode, O = m(U, S), M = X(S, z, be);
    S.objectMode || (M._writev = s.writev.bind(M)), M.on("close", () => {
      O.close();
    });
    let $ = typeof O.addEventListener < "u";
    O.readyState === O.OPEN ? (R = M, R.socket = O) : (R = new s.BufferedDuplex(S, M, O), $ ? O.addEventListener("open", te) : O.onopen = te), $ ? (O.addEventListener("close", E), O.addEventListener("error", q), O.addEventListener("message", Z)) : (O.onclose = E, O.onerror = q, O.onmessage = Z);
    function X(ne, V, me) {
      let ie = new o.Transform({ objectMode: ne.objectMode });
      return ie._write = V, ie._flush = me, ie;
    }
    function te() {
      i("WebSocket onOpen"), R instanceof s.BufferedDuplex && R.socketReady();
    }
    function E(ne) {
      i("WebSocket onClose", ne), R.end(), R.destroy();
    }
    function q(ne) {
      i("WebSocket onError", ne);
      let V = new Error("WebSocket error");
      V.event = ne, R.destroy(V);
    }
    function Z(ne) {
      let { data: V } = ne;
      V instanceof ArrayBuffer ? V = t.Buffer.from(V) : V = t.Buffer.from(V, "utf8"), M.push(V);
    }
    function z(ne, V, me) {
      if (O.bufferedAmount > F) {
        setTimeout(z, W, ne, V, me);
        return;
      }
      C && typeof ne == "string" && (ne = t.Buffer.from(ne, "utf8"));
      try {
        O.send(ne);
      } catch (ie) {
        return me(ie);
      }
      me();
    }
    function be(ne) {
      O.close(), ne();
    }
    return R;
  };
  e.default = r.default ? T : y;
}), eh = we((e) => {
  he(), ue(), le();
  var n = e && e.__importDefault || function(d) {
    return d && d.__esModule ? d : { default: d };
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.connectAsync = void 0;
  var t = n(Vt()), l = n((Ju(), $e(va))), h = n(Hn()), o = n(ci());
  typeof (qe == null ? void 0 : qe.nextTick) != "function" && (qe.nextTick = setImmediate);
  var r = (0, t.default)("mqttjs"), s = {};
  o.default ? (s.wx = ts().default, s.wxs = ts().default, s.ali = rs().default, s.alis = rs().default) : (s.mqtt = Zo().default, s.tcp = Zo().default, s.ssl = es().default, s.tls = s.ssl, s.mqtts = es().default), s.ws = is().default, s.wss = is().default;
  function i(d) {
    let g;
    d.auth && (g = d.auth.match(/^(.+):(.+)$/), g ? (d.username = g[1], d.password = g[2]) : d.username = d.auth);
  }
  function a(d, g) {
    if (r("connecting to an MQTT broker..."), typeof d == "object" && !g && (g = d, d = ""), g = g || {}, d && typeof d == "string") {
      let y = l.default.parse(d, !0);
      if (y.port != null && (y.port = Number(y.port)), g = Object.assign(Object.assign({}, y), g), g.protocol === null)
        throw new Error("Missing protocol");
      g.protocol = g.protocol.replace(/:$/, "");
    }
    if (i(g), g.query && typeof g.query.clientId == "string" && (g.clientId = g.query.clientId), g.cert && g.key)
      if (g.protocol) {
        if (["mqtts", "wss", "wxs", "alis"].indexOf(g.protocol) === -1)
          switch (g.protocol) {
            case "mqtt":
              g.protocol = "mqtts";
              break;
            case "ws":
              g.protocol = "wss";
              break;
            case "wx":
              g.protocol = "wxs";
              break;
            case "ali":
              g.protocol = "alis";
              break;
            default:
              throw new Error(`Unknown protocol for secure connection: "${g.protocol}"!`);
          }
      } else
        throw new Error("Missing secure protocol key");
    if (!s[g.protocol]) {
      let y = ["mqtts", "wss"].indexOf(g.protocol) !== -1;
      g.protocol = ["mqtt", "mqtts", "ws", "wss", "wx", "wxs", "ali", "alis"].filter((T, U) => y && U % 2 === 0 ? !1 : typeof s[T] == "function")[0];
    }
    if (g.clean === !1 && !g.clientId)
      throw new Error("Missing clientId for unclean clients");
    g.protocol && (g.defaultProtocol = g.protocol);
    function b(y) {
      return g.servers && ((!y._reconnectCount || y._reconnectCount === g.servers.length) && (y._reconnectCount = 0), g.host = g.servers[y._reconnectCount].host, g.port = g.servers[y._reconnectCount].port, g.protocol = g.servers[y._reconnectCount].protocol ? g.servers[y._reconnectCount].protocol : g.defaultProtocol, g.hostname = g.host, y._reconnectCount++), r("calling streambuilder for", g.protocol), s[g.protocol](y, g);
    }
    let m = new h.default(b, g);
    return m.on("error", () => {
    }), m;
  }
  function c(d, g, b = !0) {
    return new Promise((m, y) => {
      let T = a(d, g), U = { connect: (R) => {
        S(), m(T);
      }, end: () => {
        S(), m(T);
      }, error: (R) => {
        S(), T.end(), y(R);
      } };
      b === !1 && (U.close = () => {
        U.error(new Error("Couldn't connect to server"));
      });
      function S() {
        Object.keys(U).forEach((R) => {
          T.off(R, U[R]);
        });
      }
      Object.keys(U).forEach((R) => {
        T.on(R, U[R]);
      });
    });
  }
  e.connectAsync = c, e.default = a;
}), ns = we((e) => {
  he(), ue(), le();
  var n = e && e.__createBinding || (Object.create ? function(b, m, y, T) {
    T === void 0 && (T = y);
    var U = Object.getOwnPropertyDescriptor(m, y);
    (!U || ("get" in U ? !m.__esModule : U.writable || U.configurable)) && (U = { enumerable: !0, get: function() {
      return m[y];
    } }), Object.defineProperty(b, T, U);
  } : function(b, m, y, T) {
    T === void 0 && (T = y), b[T] = m[y];
  }), t = e && e.__setModuleDefault || (Object.create ? function(b, m) {
    Object.defineProperty(b, "default", { enumerable: !0, value: m });
  } : function(b, m) {
    b.default = m;
  }), l = e && e.__importStar || function(b) {
    if (b && b.__esModule)
      return b;
    var m = {};
    if (b != null)
      for (var y in b)
        y !== "default" && Object.prototype.hasOwnProperty.call(b, y) && n(m, b, y);
    return t(m, b), m;
  }, h = e && e.__exportStar || function(b, m) {
    for (var y in b)
      y !== "default" && !Object.prototype.hasOwnProperty.call(m, y) && n(m, b, y);
  }, o = e && e.__importDefault || function(b) {
    return b && b.__esModule ? b : { default: b };
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.ReasonCodes = e.PingTimer = e.UniqueMessageIdProvider = e.DefaultMessageIdProvider = e.Store = e.MqttClient = e.connectAsync = e.connect = e.Client = void 0;
  var r = o(Hn());
  e.MqttClient = r.default;
  var s = o(Gs());
  e.DefaultMessageIdProvider = s.default;
  var i = o(Uu());
  e.UniqueMessageIdProvider = i.default;
  var a = o(Js());
  e.Store = a.default;
  var c = l(eh());
  e.connect = c.default, Object.defineProperty(e, "connectAsync", { enumerable: !0, get: function() {
    return c.connectAsync;
  } });
  var d = o(da());
  e.PingTimer = d.default, e.Client = r.default, h(Hn(), e), h(Nr(), e);
  var g = hi();
  Object.defineProperty(e, "ReasonCodes", { enumerable: !0, get: function() {
    return g.ReasonCodes;
  } });
}), th = we((e) => {
  he(), ue(), le();
  var n = e && e.__createBinding || (Object.create ? function(r, s, i, a) {
    a === void 0 && (a = i);
    var c = Object.getOwnPropertyDescriptor(s, i);
    (!c || ("get" in c ? !s.__esModule : c.writable || c.configurable)) && (c = { enumerable: !0, get: function() {
      return s[i];
    } }), Object.defineProperty(r, a, c);
  } : function(r, s, i, a) {
    a === void 0 && (a = i), r[a] = s[i];
  }), t = e && e.__setModuleDefault || (Object.create ? function(r, s) {
    Object.defineProperty(r, "default", { enumerable: !0, value: s });
  } : function(r, s) {
    r.default = s;
  }), l = e && e.__importStar || function(r) {
    if (r && r.__esModule)
      return r;
    var s = {};
    if (r != null)
      for (var i in r)
        i !== "default" && Object.prototype.hasOwnProperty.call(r, i) && n(s, r, i);
    return t(s, r), s;
  }, h = e && e.__exportStar || function(r, s) {
    for (var i in r)
      i !== "default" && !Object.prototype.hasOwnProperty.call(s, i) && n(s, r, i);
  };
  Object.defineProperty(e, "__esModule", { value: !0 });
  var o = l(ns());
  e.default = o, h(ns(), e);
});
th();
/*! Bundled license information:

@jspm/core/nodelibs/browser/buffer.js:
  (*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> *)
*/
const Pr = {
  CONNECTING: "CONNECTING",
  CONNECTED: "CONNECTED",
  DISCONNECTED: "DISCONNECTED",
  OFFLINE: "OFFLINE",
  ERROR: "ERROR"
};
function sh({
  children: e,
  brokerUrl: n,
  options: t = { keepalive: 0 },
  parserMethod: l
}) {
  const h = ol(!1), [o, r] = Ri(Pr.OFFLINE), [s, i] = Ri(null);
  Oi(() => {
    if (!s && !h.current) {
      h.current = !0, r(Pr.CONNECTING);
      const c = (void 0)(n, t);
      c.on("connect", () => {
        r(Pr.CONNECTED), i(c);
      }), c.on("reconnect", () => {
        r("Reconnecting");
      }), c.on("error", (d) => {
        console.log(`Connection error: ${d}`), r(d.message);
      }), c.on("offline", () => {
        r(Pr.OFFLINE);
      }), c.on("end", () => {
        r(Pr.OFFLINE);
      });
    }
  }, [s, h, n, t]), Oi(
    () => () => {
      s && (s.end(!0), i(null), h.current = !1);
    },
    [s, h]
  );
  const a = sl(
    () => ({
      connectionStatus: o,
      client: s,
      parserMethod: l
    }),
    [o, s, l]
  );
  return /* @__PURE__ */ dl.jsx(eo.Provider, { value: a, children: e });
}
export {
  sh as Connector,
  eo as MqttContext,
  oh as useMqttState,
  nh as useSubscription
};
//# sourceMappingURL=rc-mqtt.js.map
