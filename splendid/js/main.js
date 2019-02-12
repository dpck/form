function ba(a) {
  var b = 0;
  return function() {
    return b < a.length ? {done:!1, value:a[b++]} : {done:!0};
  };
}
var ca = "function" == typeof Object.create ? Object.create : function(a) {
  function b() {
  }
  b.prototype = a;
  return new b;
}, k;
if ("function" == typeof Object.setPrototypeOf) {
  k = Object.setPrototypeOf;
} else {
  var w;
  a: {
    var da = {R:!0}, ea = {};
    try {
      ea.__proto__ = da;
      w = ea.R;
      break a;
    } catch (a) {
    }
    w = !1;
  }
  k = w ? function(a, b) {
    a.__proto__ = b;
    if (a.__proto__ !== b) {
      throw new TypeError(a + " is not extensible");
    }
    return a;
  } : null;
}
var fa = k;
function x(a, b) {
  a.prototype = ca(b.prototype);
  a.prototype.constructor = a;
  if (fa) {
    fa(a, b);
  } else {
    for (var c in b) {
      if ("prototype" != c) {
        if (Object.defineProperties) {
          var d = Object.getOwnPropertyDescriptor(b, c);
          d && Object.defineProperty(a, c, d);
        } else {
          a[c] = b[c];
        }
      }
    }
  }
  a.ga = b.prototype;
}
var ha = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
  a != Array.prototype && a != Object.prototype && (a[b] = c.value);
}, D = "undefined" != typeof window && window === this ? this : "undefined" != typeof global && null != global ? global : this;
function ia() {
  ia = function() {
  };
  D.Symbol || (D.Symbol = ja);
}
var ja = function() {
  var a = 0;
  return function(b) {
    return "jscomp_symbol_" + (b || "") + a++;
  };
}();
function E() {
  ia();
  var a = D.Symbol.iterator;
  a || (a = D.Symbol.iterator = D.Symbol("iterator"));
  "function" != typeof Array.prototype[a] && ha(Array.prototype, a, {configurable:!0, writable:!0, value:function() {
    return ka(ba(this));
  }});
  E = function() {
  };
}
function ka(a) {
  E();
  a = {next:a};
  a[D.Symbol.iterator] = function() {
    return this;
  };
  return a;
}
function la(a, b) {
  E();
  a instanceof String && (a += "");
  var c = 0, d = {next:function() {
    if (c < a.length) {
      var e = c++;
      return {value:b(e, a[e]), done:!1};
    }
    d.next = function() {
      return {done:!0, value:void 0};
    };
    return d.next();
  }};
  d[Symbol.iterator] = function() {
    return d;
  };
  return d;
}
function ma(a, b) {
  if (b) {
    var c = D;
    a = a.split(".");
    for (var d = 0; d < a.length - 1; d++) {
      var e = a[d];
      e in c || (c[e] = {});
      c = c[e];
    }
    a = a[a.length - 1];
    d = c[a];
    b = b(d);
    b != d && null != b && ha(c, a, {configurable:!0, writable:!0, value:b});
  }
}
ma("Array.prototype.values", function(a) {
  return a ? a : function() {
    return la(this, function(a, c) {
      return c;
    });
  };
});
var na = "function" == typeof Object.assign ? Object.assign : function(a, b) {
  for (var c = 1; c < arguments.length; c++) {
    var d = arguments[c];
    if (d) {
      for (var e in d) {
        Object.prototype.hasOwnProperty.call(d, e) && (a[e] = d[e]);
      }
    }
  }
  return a;
};
ma("Object.assign", function(a) {
  return a || na;
});
function oa() {
}
var F = {}, G = [], pa = [];
function I(a, b) {
  var c = pa, d, e;
  for (e = arguments.length; 2 < e--;) {
    G.push(arguments[e]);
  }
  b && null != b.children && (G.length || G.push(b.children), delete b.children);
  for (; G.length;) {
    if ((d = G.pop()) && void 0 !== d.pop) {
      for (e = d.length; e--;) {
        G.push(d[e]);
      }
    } else {
      "boolean" === typeof d && (d = null);
      if (e = "function" !== typeof a) {
        null == d ? d = "" : "number" === typeof d ? d = String(d) : "string" !== typeof d && (e = !1);
      }
      e && f ? c[c.length - 1] += d : c === pa ? c = [d] : c.push(d);
      var f = e;
    }
  }
  f = new oa;
  f.nodeName = a;
  f.children = c;
  f.attributes = null == b ? void 0 : b;
  f.key = null == b ? void 0 : b.key;
  void 0 !== F.aa && F.aa(f);
  return f;
}
function J(a, b) {
  for (var c in b) {
    a[c] = b[c];
  }
  return a;
}
function K(a, b) {
  null != a && ("function" == typeof a ? a(b) : a.current = b);
}
var qa = "function" == typeof Promise ? Promise.resolve().then.bind(Promise.resolve()) : setTimeout, ra = /acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i, sa = [];
function ta(a) {
  !a.j && (a.j = !0) && 1 == sa.push(a) && (F.ca || qa)(ua);
}
function ua() {
  for (var a; a = sa.pop();) {
    a.j && L(a);
  }
}
function va(a) {
  var b = J({}, a.attributes);
  b.children = a.children;
  a = a.nodeName.da;
  if (void 0 !== a) {
    for (var c in a) {
      void 0 === b[c] && (b[c] = a[c]);
    }
  }
  return b;
}
function M(a) {
  var b = a.parentNode;
  b && b.removeChild(a);
}
function wa(a, b, c, d) {
  var e = N;
  "className" === b && (b = "class");
  if ("key" !== b) {
    if ("ref" === b) {
      K(c, null), K(d, a);
    } else {
      if ("class" !== b || e) {
        if ("style" === b) {
          if (d && "string" !== typeof d && "string" !== typeof c || (a.style.cssText = d || ""), d && "object" === typeof d) {
            if ("string" !== typeof c) {
              for (var f in c) {
                f in d || (a.style[f] = "");
              }
            }
            for (f in d) {
              a.style[f] = "number" === typeof d[f] && !1 === ra.test(f) ? d[f] + "px" : d[f];
            }
          }
        } else {
          if ("dangerouslySetInnerHTML" === b) {
            d && (a.innerHTML = d.P || "");
          } else {
            if ("o" == b[0] && "n" == b[1]) {
              e = b !== (b = b.replace(/Capture$/, "")), b = b.toLowerCase().substring(2), d ? c || a.addEventListener(b, xa, e) : a.removeEventListener(b, xa, e), (a.H || (a.H = {}))[b] = d;
            } else {
              if ("list" !== b && "type" !== b && !e && b in a) {
                try {
                  a[b] = null == d ? "" : d;
                } catch (g) {
                }
                null != d && !1 !== d || "spellcheck" == b || a.removeAttribute(b);
              } else {
                c = e && b !== (b = b.replace(/^xlink:?/, "")), null == d || !1 === d ? c ? a.removeAttributeNS("http://www.w3.org/1999/xlink", b.toLowerCase()) : a.removeAttribute(b) : "function" !== typeof d && (c ? a.setAttributeNS("http://www.w3.org/1999/xlink", b.toLowerCase(), d) : a.setAttribute(b, d));
              }
            }
          }
        }
      } else {
        a.className = d || "";
      }
    }
  }
}
function xa(a) {
  return this.H[a.type](F.event && F.event(a) || a);
}
var ya = [], O = 0, N = !1, P = !1;
function za() {
  for (var a; a = ya.shift();) {
    F.S && F.S(a), a.o && a.o();
  }
}
function Aa(a, b, c, d, e, f) {
  O++ || (N = null != e && void 0 !== e.fa, P = null != a && !("__preactattr_" in a));
  a = Ba(a, b, c, d, f);
  e && a.parentNode !== e && e.appendChild(a);
  --O || (P = !1, f || za());
  return a;
}
function Ba(a, b, c, d, e) {
  var f = a, g = N;
  if (null == b || "boolean" === typeof b) {
    b = "";
  }
  if ("string" === typeof b || "number" === typeof b) {
    return a && void 0 !== a.splitText && a.parentNode && (!a.b || e) ? a.nodeValue != b && (a.nodeValue = b) : (f = document.createTextNode(b), a && (a.parentNode && a.parentNode.replaceChild(f, a), Q(a, !0))), f.__preactattr_ = !0, f;
  }
  e = b.nodeName;
  if ("function" === typeof e) {
    g = a;
    var h = b;
    f = b = g && g.b;
    var y = g, r = b && g.u === h.nodeName, n = r;
    for (a = va(h); b && !n && (b = b.I);) {
      n = b.constructor === h.nodeName;
    }
    b && n && (!d || b.b) ? (R(b, a, 3, c, d), g = b.f) : (f && !r && (S(f), g = y = null), b = Ca(h.nodeName, a, c), g && !b.h && (b.h = g, y = null), R(b, a, 1, c, d), g = b.f, y && g !== y && (y.b = null, Q(y, !1)));
    return g;
  }
  N = "svg" === e ? !0 : "foreignObject" === e ? !1 : N;
  e = String(e);
  if (!a || a.K !== e && a.nodeName.toLowerCase() !== e.toLowerCase()) {
    if (f = e, e = N ? document.createElementNS("http://www.w3.org/2000/svg", f) : document.createElement(f), e.K = f, f = e, a) {
      for (; a.firstChild;) {
        f.appendChild(a.firstChild);
      }
      a.parentNode && a.parentNode.replaceChild(f, a);
      Q(a, !0);
    }
  }
  var p = f.firstChild;
  a = f.__preactattr_;
  e = b.children;
  if (null == a) {
    a = f.__preactattr_ = {};
    for (var m = f.attributes, z = m.length; z--;) {
      a[m[z].name] = m[z].value;
    }
  }
  if (!P && e && 1 === e.length && "string" === typeof e[0] && null != p && void 0 !== p.splitText && null == p.nextSibling) {
    p.nodeValue != e[0] && (p.nodeValue = e[0]);
  } else {
    if (e && e.length || null != p) {
      p = f;
      m = P || null != a.ba;
      z = p.childNodes;
      var B = [], A = {}, t = 0, q = 0, l = z.length, H = 0, aa = e ? e.length : 0;
      if (0 !== l) {
        for (n = 0; n < l; n++) {
          var u = z[n], C = u.__preactattr_;
          var v = aa && C ? u.b ? u.b.F : C.key : null;
          if (null != v) {
            t++, A[v] = u;
          } else {
            if (C || (void 0 !== u.splitText ? m ? u.nodeValue.trim() : 1 : m)) {
              B[H++] = u;
            }
          }
        }
      }
      if (0 !== aa) {
        for (n = 0; n < aa; n++) {
          l = e[n];
          r = null;
          v = l.key;
          if (null != v) {
            t && void 0 !== A[v] && (r = A[v], A[v] = void 0, t--);
          } else {
            if (q < H) {
              for (v = q; v < H; v++) {
                if (u = void 0 !== B[v]) {
                  if (u = y = B[v], "string" === typeof l || "number" === typeof l) {
                    u = void 0 !== u.splitText;
                  } else {
                    if ("string" === typeof l.nodeName) {
                      if (C = !u.u) {
                        C = l.nodeName, C = u.K === C || u.nodeName.toLowerCase() === C.toLowerCase();
                      }
                      u = C;
                    } else {
                      u = m || u.u === l.nodeName;
                    }
                  }
                }
                if (u) {
                  r = y;
                  B[v] = void 0;
                  v === H - 1 && H--;
                  v === q && q++;
                  break;
                }
              }
            }
          }
          r = Ba(r, l, c, d);
          l = z[n];
          r && r !== p && r !== l && (null == l ? p.appendChild(r) : r === l.nextSibling ? M(l) : p.insertBefore(r, l));
        }
      }
      if (t) {
        for (n in A) {
          void 0 !== A[n] && Q(A[n], !1);
        }
      }
      for (; q <= H;) {
        void 0 !== (r = B[H--]) && Q(r, !1);
      }
    }
  }
  c = f;
  d = b.attributes;
  b = a;
  for (h in b) {
    d && null != d[h] || null == b[h] || wa(c, h, b[h], b[h] = void 0);
  }
  for (h in d) {
    "children" === h || "innerHTML" === h || h in b && d[h] === ("value" === h || "checked" === h ? c[h] : b[h]) || wa(c, h, b[h], b[h] = d[h]);
  }
  N = g;
  return f;
}
function Q(a, b) {
  var c = a.b;
  c ? S(c) : (null != a.__preactattr_ && K(a.__preactattr_.D, null), !1 !== b && null != a.__preactattr_ || M(a), Da(a));
}
function Da(a) {
  for (a = a.lastChild; a;) {
    var b = a.previousSibling;
    Q(a, !0);
    a = b;
  }
}
var T = [];
function Ca(a, b, c) {
  var d = T.length;
  if (a.prototype && a.prototype.g) {
    var e = new a(b, c);
    U.call(e, b, c);
  } else {
    e = new U(b, c), e.constructor = a, e.g = Ea;
  }
  for (; d--;) {
    if (T[d].constructor === a) {
      e.h = T[d].h;
      T.splice(d, 1);
      break;
    }
  }
  return e;
}
function Ea(a, b, c) {
  return this.constructor(a, c);
}
function R(a, b, c, d, e) {
  a.l || (a.l = !0, a.G = b.D, a.F = b.key, delete b.D, delete b.key, "undefined" === typeof a.constructor.J && (!a.f || e ? a.W && a.W() : a.X && a.X(b, d)), d && d !== a.context && (a.A || (a.A = a.context), a.context = d), a.B || (a.B = a.a), a.a = b, a.l = !1, 0 !== c && (1 !== c && !1 === F.ha && a.f ? ta(a) : L(a, 1, e)), K(a.G, a));
}
function L(a, b, c, d) {
  if (!a.l) {
    var e = a.a, f = a.state, g = a.context, h = a.B || e, y = a.C || f, r = a.A || g, n = a.f, p = a.h, m = n || p, z = a.b, B = !1, A = r, t;
    a.constructor.J && (f = J(J({}, f), a.constructor.J(e, f)), a.state = f);
    n && (a.a = h, a.state = y, a.context = r, 2 !== b && a.s && !1 === a.s(e, f, g) ? B = !0 : a.Z && a.Z(e, f, g), a.a = e, a.state = f, a.context = g);
    a.B = a.C = a.A = a.h = null;
    a.j = !1;
    if (!B) {
      e = a.g(e, f, g);
      a.v && (g = J(J({}, g), a.v()));
      n && a.$ && (A = a.$(h, y));
      f = e && e.nodeName;
      if ("function" === typeof f) {
        var q = va(e);
        if ((t = z) && t.constructor === f && q.key == t.F) {
          R(t, q, 1, g, !1);
        } else {
          var l = t;
          a.b = t = Ca(f, q, g);
          t.h = t.h || p;
          t.I = a;
          R(t, q, 0, g, !1);
          L(t, 1, c, !0);
        }
        q = t.f;
      } else {
        p = m;
        if (l = z) {
          p = a.b = null;
        }
        if (m || 1 === b) {
          p && (p.b = null), q = Aa(p, e, g, c || !n, m && m.parentNode, !0);
        }
      }
      m && q !== m && t !== z && (g = m.parentNode) && q !== g && (g.replaceChild(q, m), l || (m.b = null, Q(m, !1)));
      l && S(l);
      if ((a.f = q) && !d) {
        for (l = m = a; l = l.I;) {
          (m = l).f = q;
        }
        q.b = m;
        q.u = m.constructor;
      }
    }
    !n || c ? ya.push(a) : B || (a.V && a.V(h, y, A), F.T && F.T(a));
    for (; a.m.length;) {
      a.m.pop().call(a);
    }
    O || d || za();
  }
}
function S(a) {
  F.U && F.U(a);
  var b = a.f;
  a.l = !0;
  a.Y && a.Y();
  a.f = null;
  var c = a.b;
  c ? S(c) : b && (null != b.__preactattr_ && K(b.__preactattr_.D, null), a.h = b, M(b), T.push(a), Da(b));
  K(a.G, null);
}
function U(a, b) {
  this.j = !0;
  this.context = b;
  this.a = a;
  this.state = this.state || {};
  this.m = [];
}
J(U.prototype, {L:function(a, b) {
  this.C || (this.C = this.state);
  this.state = J(J({}, this.state), "function" === typeof a ? a(this.state, this.a) : a);
  b && this.m.push(b);
  ta(this);
}, ea:function(a) {
  a && this.m.push(a);
  L(this, 2);
}, g:function() {
}});
function V() {
  U.call(this);
  this.a = this.a;
}
x(V, U);
V.prototype.s = function(a, b, c) {
  a = this.a.name;
  return this.context.values[a] != c.values[a];
};
V.prototype.o = function() {
  var a = this.a, b = a.value;
  a = a.name;
  var c = this.context.c;
  void 0 !== b && c(a, b);
};
V.prototype.g = function(a) {
  var b = a.options, c = a.name, d = a.value, e = this.context, f = e.c, g = void 0 === e.values ? {} : e.values;
  return I("select", {name:c, value:c in g ? g[c] : d, required:a.required, className:"custom-select", id:e.id, "aria-describedby":e.i, onChange:function(a) {
    f(c, a.currentTarget.value);
  }}, I("option"), b.map(function(a) {
    var b = a.value;
    return I("option", {key:b, value:b, selected:b == d}, a.title);
  }));
};
function W() {
  U.call(this);
  this.a = this.a;
}
x(W, U);
W.prototype.s = function(a, b, c) {
  a = this.a.name;
  return this.context.values[a] != c.values[a];
};
W.prototype.o = function() {
  var a = this.a, b = a.children, c = "undefined" != typeof Symbol && Symbol.iterator && b[Symbol.iterator];
  b = (c ? c.call(b) : {next:ba(b)}).next().value;
  a = a.name;
  c = this.context.c;
  b && c(a, b.trim());
};
W.prototype.g = function(a) {
  var b = a.name, c = a.children, d = this.context, e = d.c, f = void 0 === d.values ? {} : d.values;
  return I("textarea", {required:a.required, name:b, placeholder:a.placeholder, "aria-describedby":d.i, className:"form-control", id:d.id, onChange:function(a) {
    e(b, a.currentTarget.value);
  }, rows:void 0 === a.rows ? 3 : a.rows}, b in f ? f[b] : c);
};
function X() {
  U.call(this);
  this.a = this.a;
}
x(X, U);
X.prototype.s = function(a, b, c) {
  a = this.a.name;
  return this.context.values[a] != c.values[a];
};
X.prototype.o = function() {
  var a = this.a, b = a.value;
  a = a.name;
  var c = this.context.c;
  void 0 !== b && c(a, b);
};
X.prototype.g = function(a) {
  var b = a.name, c = a.value, d = this.context, e = d.c, f = void 0 === d.values ? {} : d.values;
  return I("input", {required:a.required, name:b, placeholder:a.placeholder, className:"form-control" + (a.file ? "-file" : ""), value:b in f ? f[b] : c, type:void 0 === a.type ? "text" : a.type, "aria-describedby":d.i, id:d.id, onChange:function(a) {
    e(b, a.currentTarget.value);
  }});
};
function Y() {
  U.call(this);
  this.state = {values:{}};
  this.a = this.a;
}
x(Y, U);
Y.prototype.v = function() {
  return {values:this.state.values, c:this.c.bind(this)};
};
Y.prototype.c = function(a, b) {
  var c = {};
  this.L({values:Object.assign({}, this.state.values, (c[a] = b, c))});
  this.a.c && this.a.c(this.state.values);
};
Y.prototype.g = function(a) {
  var b = Object.assign({}, a);
  a = a.children;
  b = (delete b.children, b);
  return I("form", Object.assign({}, b), a);
};
function Z() {
  U.call(this);
  this.id = "i" + Math.floor(100000 * Math.random());
  this.i = "h" + this.id;
  this.a = this.a;
}
x(Z, U);
Z.prototype.v = function() {
  return {id:this.id, i:this.i};
};
Z.prototype.g = function() {
  var a = this.a, b = a.children, c = a.label;
  a = a.w;
  return I("div", {className:"form-group"}, c && I("label", {htmlFor:this.id}, c), b, a && I("small", {id:this.i, dangerouslySetInnerHTML:{P:a}, className:"form-text text-muted"}));
};
var Fa = {get N() {
  return V;
}, get O() {
  return W;
}, get M() {
  return X;
}};
function Ga(a) {
  a = Object.assign({}, a);
  return I(Y, Object.assign({}, a), I(Z, {label:"Input", w:"Type in something..."}, I(Fa.M, {name:"input", value:"hello-world"})), I(Z, {label:"Select", w:"Please select..."}, I(Fa.N, {options:[{title:"Free will", value:"1"}, {title:"Unfree will", value:"2"}], name:"select", value:"2"})), I(Z, {label:"TextArea", w:"Multiple row input..."}, I(Fa.O, {name:"textarea"}, "One must still have chaos in oneself to be able to give birth to a dancing star.")));
}
;function Ha(a) {
  U.apply(this, arguments);
}
x(Ha, U);
Ha.prototype.g = function() {
  var a = this;
  return I("div", {className:"container"}, I("h1", {}, "@Depack/Form"), I("blockquote", {className:"blockquote"}, "The Preact component that creates and maintains\n          the form state (designed for Depack bundler)."), I("div", {className:"row"}, I("div", {className:"col-sm-6"}, I(Ga, {c:function(b) {
    a.L(b);
  }})), I("div", {className:"col-sm-6"}, I("pre", {style:"white-space: pre-wrap;"}, JSON.stringify(this.state, null, 2)))));
};
var Ia = I(Ha);
Aa(void 0, Ia, {}, !1, document.querySelector("#preact"), !1);


//# sourceMappingURL=main.js.map