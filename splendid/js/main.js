function aa(a) {
  var b = 0;
  return function() {
    return b < a.length ? {done:!1, value:a[b++]} : {done:!0};
  };
}
function ba(a) {
  var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
  return b ? b.call(a) : {next:aa(a)};
}
var ca = "function" == typeof Object.create ? Object.create : function(a) {
  function b() {
  }
  b.prototype = a;
  return new b;
}, da;
if ("function" == typeof Object.setPrototypeOf) {
  da = Object.setPrototypeOf;
} else {
  var ea;
  a: {
    var fa = {ha:!0}, ha = {};
    try {
      ha.__proto__ = fa;
      ea = ha.ha;
      break a;
    } catch (a) {
    }
    ea = !1;
  }
  da = ea ? function(a, b) {
    a.__proto__ = b;
    if (a.__proto__ !== b) {
      throw new TypeError(a + " is not extensible");
    }
    return a;
  } : null;
}
var ia = da;
function m(a, b) {
  a.prototype = ca(b.prototype);
  a.prototype.constructor = a;
  if (ia) {
    ia(a, b);
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
  a.Fa = b.prototype;
}
var w = "undefined" != typeof window && window === this ? this : "undefined" != typeof global && null != global ? global : this, ja = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
  a != Array.prototype && a != Object.prototype && (a[b] = c.value);
};
function ka(a, b) {
  if (b) {
    var c = w;
    a = a.split(".");
    for (var d = 0; d < a.length - 1; d++) {
      var e = a[d];
      e in c || (c[e] = {});
      c = c[e];
    }
    a = a[a.length - 1];
    d = c[a];
    b = b(d);
    b != d && null != b && ja(c, a, {configurable:!0, writable:!0, value:b});
  }
}
ka("Promise", function(a) {
  function b(a) {
    this.c = 0;
    this.j = void 0;
    this.a = [];
    var b = this.g();
    try {
      a(b.resolve, b.reject);
    } catch (k) {
      b.reject(k);
    }
  }
  function c() {
    this.a = null;
  }
  function d(a) {
    return a instanceof b ? a : new b(function(b) {
      b(a);
    });
  }
  if (a) {
    return a;
  }
  c.prototype.c = function(a) {
    if (null == this.a) {
      this.a = [];
      var b = this;
      this.g(function() {
        b.j();
      });
    }
    this.a.push(a);
  };
  var e = w.setTimeout;
  c.prototype.g = function(a) {
    e(a, 0);
  };
  c.prototype.j = function() {
    for (; this.a && this.a.length;) {
      var a = this.a;
      this.a = [];
      for (var b = 0; b < a.length; ++b) {
        var c = a[b];
        a[b] = null;
        try {
          c();
        } catch (l) {
          this.i(l);
        }
      }
    }
    this.a = null;
  };
  c.prototype.i = function(a) {
    this.g(function() {
      throw a;
    });
  };
  b.prototype.g = function() {
    function a(a) {
      return function(d) {
        c || (c = !0, a.call(b, d));
      };
    }
    var b = this, c = !1;
    return {resolve:a(this.va), reject:a(this.i)};
  };
  b.prototype.va = function(a) {
    if (a === this) {
      this.i(new TypeError("A Promise cannot resolve to itself"));
    } else {
      if (a instanceof b) {
        this.wa(a);
      } else {
        a: {
          switch(typeof a) {
            case "object":
              var c = null != a;
              break a;
            case "function":
              c = !0;
              break a;
            default:
              c = !1;
          }
        }
        c ? this.I(a) : this.s(a);
      }
    }
  };
  b.prototype.I = function(a) {
    var b = void 0;
    try {
      b = a.then;
    } catch (k) {
      this.i(k);
      return;
    }
    "function" == typeof b ? this.ya(b, a) : this.s(a);
  };
  b.prototype.i = function(a) {
    this.v(2, a);
  };
  b.prototype.s = function(a) {
    this.v(1, a);
  };
  b.prototype.v = function(a, b) {
    if (0 != this.c) {
      throw Error("Cannot settle(" + a + ", " + b + "): Promise already settled in state" + this.c);
    }
    this.c = a;
    this.j = b;
    this.B();
  };
  b.prototype.B = function() {
    if (null != this.a) {
      for (var a = 0; a < this.a.length; ++a) {
        f.c(this.a[a]);
      }
      this.a = null;
    }
  };
  var f = new c;
  b.prototype.wa = function(a) {
    var b = this.g();
    a.G(b.resolve, b.reject);
  };
  b.prototype.ya = function(a, b) {
    var c = this.g();
    try {
      a.call(b, c.resolve, c.reject);
    } catch (l) {
      c.reject(l);
    }
  };
  b.prototype.then = function(a, c) {
    function d(a, b) {
      return "function" == typeof a ? function(b) {
        try {
          e(a(b));
        } catch (y) {
          f(y);
        }
      } : b;
    }
    var e, f, g = new b(function(a, b) {
      e = a;
      f = b;
    });
    this.G(d(a, e), d(c, f));
    return g;
  };
  b.prototype.catch = function(a) {
    return this.then(void 0, a);
  };
  b.prototype.G = function(a, b) {
    function c() {
      switch(d.c) {
        case 1:
          a(d.j);
          break;
        case 2:
          b(d.j);
          break;
        default:
          throw Error("Unexpected state: " + d.c);
      }
    }
    var d = this;
    null == this.a ? f.c(c) : this.a.push(c);
  };
  b.resolve = d;
  b.reject = function(a) {
    return new b(function(b, c) {
      c(a);
    });
  };
  b.race = function(a) {
    return new b(function(b, c) {
      for (var e = ba(a), f = e.next(); !f.done; f = e.next()) {
        d(f.value).G(b, c);
      }
    });
  };
  b.all = function(a) {
    var c = ba(a), e = c.next();
    return e.done ? d([]) : new b(function(a, b) {
      function f(b) {
        return function(c) {
          g[b] = c;
          h--;
          0 == h && a(g);
        };
      }
      var g = [], h = 0;
      do {
        g.push(void 0), h++, d(e.value).G(f(g.length - 1), b), e = c.next();
      } while (!e.done);
    });
  };
  return b;
});
function ma() {
  ma = function() {
  };
  w.Symbol || (w.Symbol = na);
}
var na = function() {
  var a = 0;
  return function(b) {
    return "jscomp_symbol_" + (b || "") + a++;
  };
}();
function z() {
  ma();
  var a = w.Symbol.iterator;
  a || (a = w.Symbol.iterator = w.Symbol("iterator"));
  "function" != typeof Array.prototype[a] && ja(Array.prototype, a, {configurable:!0, writable:!0, value:function() {
    return oa(aa(this));
  }});
  z = function() {
  };
}
function oa(a) {
  z();
  a = {next:a};
  a[w.Symbol.iterator] = function() {
    return this;
  };
  return a;
}
function D() {
  this.s = !1;
  this.g = null;
  this.v = void 0;
  this.c = 1;
  this.i = this.j = 0;
  this.I = this.a = null;
}
function pa(a) {
  if (a.s) {
    throw new TypeError("Generator is already running");
  }
  a.s = !0;
}
D.prototype.B = function(a) {
  this.v = a;
};
function qa(a, b) {
  a.a = {Z:b, aa:!0};
  a.c = a.j || a.i;
}
D.prototype.return = function(a) {
  this.a = {return:a};
  this.c = this.i;
};
function ra(a, b, c) {
  a.c = c;
  return {value:b};
}
D.prototype.A = function(a) {
  this.c = a;
};
function sa(a) {
  this.a = new D;
  this.c = a;
}
function ta(a, b) {
  pa(a.a);
  var c = a.a.g;
  if (c) {
    return ua(a, "return" in c ? c["return"] : function(a) {
      return {value:a, done:!0};
    }, b, a.a.return);
  }
  a.a.return(b);
  return E(a);
}
function ua(a, b, c, d) {
  try {
    var e = b.call(a.a.g, c);
    if (!(e instanceof Object)) {
      throw new TypeError("Iterator result " + e + " is not an object");
    }
    if (!e.done) {
      return a.a.s = !1, e;
    }
    var f = e.value;
  } catch (h) {
    return a.a.g = null, qa(a.a, h), E(a);
  }
  a.a.g = null;
  d.call(a.a, f);
  return E(a);
}
function E(a) {
  for (; a.a.c;) {
    try {
      var b = a.c(a.a);
      if (b) {
        return a.a.s = !1, {value:b.value, done:!1};
      }
    } catch (c) {
      a.a.v = void 0, qa(a.a, c);
    }
  }
  a.a.s = !1;
  if (a.a.a) {
    b = a.a.a;
    a.a.a = null;
    if (b.aa) {
      throw b.Z;
    }
    return {value:b.return, done:!0};
  }
  return {value:void 0, done:!0};
}
function va(a) {
  this.next = function(b) {
    pa(a.a);
    a.a.g ? b = ua(a, a.a.g.next, b, a.a.B) : (a.a.B(b), b = E(a));
    return b;
  };
  this.throw = function(b) {
    pa(a.a);
    a.a.g ? b = ua(a, a.a.g["throw"], b, a.a.B) : (qa(a.a, b), b = E(a));
    return b;
  };
  this.return = function(b) {
    return ta(a, b);
  };
  z();
  this[Symbol.iterator] = function() {
    return this;
  };
}
function wa(a) {
  function b(b) {
    return a.next(b);
  }
  function c(b) {
    return a.throw(b);
  }
  return new Promise(function(d, e) {
    function f(a) {
      a.done ? d(a.value) : Promise.resolve(a.value).then(b, c).then(f, e);
    }
    f(a.next());
  });
}
function xa(a, b) {
  z();
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
ka("Array.prototype.values", function(a) {
  return a ? a : function() {
    return xa(this, function(a, c) {
      return c;
    });
  };
});
var ya = "function" == typeof Object.assign ? Object.assign : function(a, b) {
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
ka("Object.assign", function(a) {
  return a || ya;
});
function za() {
}
var F = {}, G = [], Aa = [];
function H(a, b) {
  var c = Aa, d, e;
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
      e && f ? c[c.length - 1] += d : c === Aa ? c = [d] : c.push(d);
      var f = e;
    }
  }
  f = new za;
  f.nodeName = a;
  f.children = c;
  f.attributes = null == b ? void 0 : b;
  f.key = null == b ? void 0 : b.key;
  void 0 !== F.za && F.za(f);
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
var Ba = "function" == typeof Promise ? Promise.resolve().then.bind(Promise.resolve()) : setTimeout, Ca = /acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i, Da = [];
function Ea(a) {
  !a.C && (a.C = !0) && 1 == Da.push(a) && (F.Ba || Ba)(Fa);
}
function Fa() {
  for (var a; a = Da.pop();) {
    a.C && L(a);
  }
}
function Ga(a) {
  var b = J({}, a.attributes);
  b.children = a.children;
  a = a.nodeName.Ca;
  if (void 0 !== a) {
    for (var c in a) {
      void 0 === b[c] && (b[c] = a[c]);
    }
  }
  return b;
}
function Ha(a) {
  var b = a.parentNode;
  b && b.removeChild(a);
}
function Ia(a, b, c, d) {
  var e = M;
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
              a.style[f] = "number" === typeof d[f] && !1 === Ca.test(f) ? d[f] + "px" : d[f];
            }
          }
        } else {
          if ("dangerouslySetInnerHTML" === b) {
            d && (a.innerHTML = d.ga || "");
          } else {
            if ("o" == b[0] && "n" == b[1]) {
              e = b !== (b = b.replace(/Capture$/, "")), b = b.toLowerCase().substring(2), d ? c || a.addEventListener(b, Ja, e) : a.removeEventListener(b, Ja, e), (a.X || (a.X = {}))[b] = d;
            } else {
              if ("list" !== b && "type" !== b && !e && b in a) {
                try {
                  a[b] = null == d ? "" : d;
                } catch (h) {
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
function Ja(a) {
  return this.X[a.type](F.event && F.event(a) || a);
}
var Ka = [], La = 0, M = !1, N = !1;
function Ma() {
  for (var a; a = Ka.shift();) {
    F.ia && F.ia(a), a.H && a.H();
  }
}
function Na(a, b, c, d, e, f) {
  La++ || (M = null != e && void 0 !== e.Ea, N = null != a && !("__preactattr_" in a));
  a = Oa(a, b, c, d, f);
  e && a.parentNode !== e && e.appendChild(a);
  --La || (N = !1, f || Ma());
  return a;
}
function Oa(a, b, c, d, e) {
  var f = a, h = M;
  if (null == b || "boolean" === typeof b) {
    b = "";
  }
  if ("string" === typeof b || "number" === typeof b) {
    return a && void 0 !== a.splitText && a.parentNode && (!a.h || e) ? a.nodeValue != b && (a.nodeValue = b) : (f = document.createTextNode(b), a && (a.parentNode && a.parentNode.replaceChild(f, a), O(a, !0))), f.__preactattr_ = !0, f;
  }
  e = b.nodeName;
  if ("function" === typeof e) {
    h = a;
    var g = b;
    f = b = h && h.h;
    var k = h, l = b && h.L === g.nodeName, q = l;
    for (a = Ga(g); b && !q && (b = b.Y);) {
      q = b.constructor === g.nodeName;
    }
    b && q && (!d || b.h) ? (P(b, a, 3, c, d), h = b.o) : (f && !l && (Q(f), h = k = null), b = Pa(g.nodeName, a, c), h && !b.u && (b.u = h, k = null), P(b, a, 1, c, d), h = b.o, k && h !== k && (k.h = null, O(k, !1)));
    return h;
  }
  M = "svg" === e ? !0 : "foreignObject" === e ? !1 : M;
  e = String(e);
  if (!a || a.ba !== e && a.nodeName.toLowerCase() !== e.toLowerCase()) {
    if (f = e, e = M ? document.createElementNS("http://www.w3.org/2000/svg", f) : document.createElement(f), e.ba = f, f = e, a) {
      for (; a.firstChild;) {
        f.appendChild(a.firstChild);
      }
      a.parentNode && a.parentNode.replaceChild(f, a);
      O(a, !0);
    }
  }
  var r = f.firstChild;
  a = f.__preactattr_;
  e = b.children;
  if (null == a) {
    a = f.__preactattr_ = {};
    for (var p = f.attributes, A = p.length; A--;) {
      a[p[A].name] = p[A].value;
    }
  }
  if (!N && e && 1 === e.length && "string" === typeof e[0] && null != r && void 0 !== r.splitText && null == r.nextSibling) {
    r.nodeValue != e[0] && (r.nodeValue = e[0]);
  } else {
    if (e && e.length || null != r) {
      r = f;
      p = N || null != a.Aa;
      A = r.childNodes;
      var B = [], y = {}, u = 0, t = 0, n = A.length, I = 0, la = e ? e.length : 0;
      if (0 !== n) {
        for (q = 0; q < n; q++) {
          var v = A[q], C = v.__preactattr_;
          var x = la && C ? v.h ? v.h.V : C.key : null;
          if (null != x) {
            u++, y[x] = v;
          } else {
            if (C || (void 0 !== v.splitText ? p ? v.nodeValue.trim() : 1 : p)) {
              B[I++] = v;
            }
          }
        }
      }
      if (0 !== la) {
        for (q = 0; q < la; q++) {
          n = e[q];
          l = null;
          x = n.key;
          if (null != x) {
            u && void 0 !== y[x] && (l = y[x], y[x] = void 0, u--);
          } else {
            if (t < I) {
              for (x = t; x < I; x++) {
                if (v = void 0 !== B[x]) {
                  if (v = k = B[x], "string" === typeof n || "number" === typeof n) {
                    v = void 0 !== v.splitText;
                  } else {
                    if ("string" === typeof n.nodeName) {
                      if (C = !v.L) {
                        C = n.nodeName, C = v.ba === C || v.nodeName.toLowerCase() === C.toLowerCase();
                      }
                      v = C;
                    } else {
                      v = p || v.L === n.nodeName;
                    }
                  }
                }
                if (v) {
                  l = k;
                  B[x] = void 0;
                  x === I - 1 && I--;
                  x === t && t++;
                  break;
                }
              }
            }
          }
          l = Oa(l, n, c, d);
          n = A[q];
          l && l !== r && l !== n && (null == n ? r.appendChild(l) : l === n.nextSibling ? Ha(n) : r.insertBefore(l, n));
        }
      }
      if (u) {
        for (q in y) {
          void 0 !== y[q] && O(y[q], !1);
        }
      }
      for (; t <= I;) {
        void 0 !== (l = B[I--]) && O(l, !1);
      }
    }
  }
  c = f;
  d = b.attributes;
  b = a;
  for (g in b) {
    d && null != d[g] || null == b[g] || Ia(c, g, b[g], b[g] = void 0);
  }
  for (g in d) {
    "children" === g || "innerHTML" === g || g in b && d[g] === ("value" === g || "checked" === g ? c[g] : b[g]) || Ia(c, g, b[g], b[g] = d[g]);
  }
  M = h;
  return f;
}
function O(a, b) {
  var c = a.h;
  c ? Q(c) : (null != a.__preactattr_ && K(a.__preactattr_.T, null), !1 !== b && null != a.__preactattr_ || Ha(a), Qa(a));
}
function Qa(a) {
  for (a = a.lastChild; a;) {
    var b = a.previousSibling;
    O(a, !0);
    a = b;
  }
}
var R = [];
function Pa(a, b, c) {
  var d = R.length;
  if (a.prototype && a.prototype.l) {
    var e = new a(b, c);
    S.call(e, b, c);
  } else {
    e = new S(b, c), e.constructor = a, e.l = Ra;
  }
  for (; d--;) {
    if (R[d].constructor === a) {
      e.u = R[d].u;
      R.splice(d, 1);
      break;
    }
  }
  return e;
}
function Ra(a, b, c) {
  return this.constructor(a, c);
}
function P(a, b, c, d, e) {
  a.D || (a.D = !0, a.W = b.T, a.V = b.key, delete b.T, delete b.key, "undefined" === typeof a.constructor.$ && (!a.o || e ? a.ma && a.ma() : a.na && a.na(b, d)), d && d !== a.context && (a.P || (a.P = a.context), a.context = d), a.R || (a.R = a.b), a.b = b, a.D = !1, 0 !== c && (1 !== c && !1 === F.Ga && a.o ? Ea(a) : L(a, 1, e)), K(a.W, a));
}
function L(a, b, c, d) {
  if (!a.D) {
    var e = a.b, f = a.state, h = a.context, g = a.R || e, k = a.S || f, l = a.P || h, q = a.o, r = a.u, p = q || r, A = a.h, B = !1, y = l, u;
    a.constructor.$ && (f = J(J({}, f), a.constructor.$(e, f)), a.state = f);
    q && (a.b = g, a.state = k, a.context = l, 2 !== b && a.J && !1 === a.J(e, f, h) ? B = !0 : a.pa && a.pa(e, f, h), a.b = e, a.state = f, a.context = h);
    a.R = a.S = a.P = a.u = null;
    a.C = !1;
    if (!B) {
      e = a.l(e, f, h);
      a.N && (h = J(J({}, h), a.N()));
      q && a.sa && (y = a.sa(g, k));
      f = e && e.nodeName;
      if ("function" === typeof f) {
        var t = Ga(e);
        if ((u = A) && u.constructor === f && t.key == u.V) {
          P(u, t, 1, h, !1);
        } else {
          var n = u;
          a.h = u = Pa(f, t, h);
          u.u = u.u || r;
          u.Y = a;
          P(u, t, 0, h, !1);
          L(u, 1, c, !0);
        }
        t = u.o;
      } else {
        r = p;
        if (n = A) {
          r = a.h = null;
        }
        if (p || 1 === b) {
          r && (r.h = null), t = Na(r, e, h, c || !q, p && p.parentNode, !0);
        }
      }
      p && t !== p && u !== A && (h = p.parentNode) && t !== h && (h.replaceChild(t, p), n || (p.h = null, O(p, !1)));
      n && Q(n);
      if ((a.o = t) && !d) {
        for (n = p = a; n = n.Y;) {
          (p = n).o = t;
        }
        t.h = p;
        t.L = p.constructor;
      }
    }
    !q || c ? Ka.push(a) : B || (a.la && a.la(g, k, y), F.ja && F.ja(a));
    for (; a.F.length;) {
      a.F.pop().call(a);
    }
    La || d || Ma();
  }
}
function Q(a) {
  F.ka && F.ka(a);
  var b = a.o;
  a.D = !0;
  a.oa && a.oa();
  a.o = null;
  var c = a.h;
  c ? Q(c) : b && (null != b.__preactattr_ && K(b.__preactattr_.T, null), a.u = b, Ha(b), R.push(a), Qa(b));
  K(a.W, null);
}
function S(a, b) {
  this.C = !0;
  this.context = b;
  this.b = a;
  this.state = this.state || {};
  this.F = [];
}
J(S.prototype, {m:function(a, b) {
  this.S || (this.S = this.state);
  this.state = J(J({}, this.state), "function" === typeof a ? a(this.state, this.b) : a);
  b && this.F.push(b);
  Ea(this);
}, Da:function(a) {
  a && this.F.push(a);
  L(this, 2);
}, l:function() {
}});
function Sa(a, b) {
  var c = this.b, d = c.name, e = a.value;
  if (this.context.values[d] != b.values[d]) {
    return !0;
  }
  if (c.value != e) {
    return b.f && b.f(a.name, e), !1;
  }
}
;function T() {
  S.call(this);
  this.b = this.b;
}
m(T, S);
T.prototype.J = function(a, b, c) {
  return Sa.call(this, a, c);
};
T.prototype.H = function() {
  var a = this.b, b = a.value;
  a = a.name;
  var c = this.context.f;
  c && void 0 !== b && c(a, b);
};
T.prototype.l = function(a) {
  var b = a.options, c = a.name, d = a.value, e = this.context, f = e.f, h = void 0 === e.values ? {} : e.values;
  return H("select", {name:c, value:c in h ? h[c] : d, required:a.required, className:"custom-select", id:e.id, "aria-describedby":e.w, onChange:function(a) {
    f(c, a.currentTarget.value);
  }}, H("option"), b.map(function(a) {
    var b = a.value;
    return H("option", {key:b, value:b, selected:b == d}, a.title);
  }));
};
function U() {
  S.call(this);
  this.b = this.b;
}
m(U, S);
U.prototype.J = function(a, b, c) {
  return Sa.call(this, a, c);
};
U.prototype.H = function() {
  var a = this.b, b = ba(a.children).next().value;
  a = a.name;
  var c = this.context.f;
  b && c(a, b.trim());
};
U.prototype.l = function(a) {
  var b = a.name, c = a.children, d = this.context, e = d.f, f = void 0 === d.values ? {} : d.values;
  return H("textarea", {required:a.required, name:b, placeholder:a.placeholder, "aria-describedby":d.w, className:"form-control", id:d.id, onChange:function(a) {
    e(b, a.currentTarget.value);
  }, rows:void 0 === a.rows ? 3 : a.rows}, b in f ? f[b] : c);
};
function V() {
  S.call(this);
  this.b = this.b;
}
m(V, S);
V.prototype.J = function(a, b, c) {
  return Sa.call(this, a, c);
};
V.prototype.H = function() {
  var a = this.b, b = a.value;
  a = a.name;
  var c = this.context.f;
  void 0 !== b && c && c(a, b);
};
V.prototype.l = function(a) {
  var b = Object.assign({}, a), c = a.required, d = a.name, e = a.placeholder, f = void 0 === a.type ? "text" : a.type, h = a.file;
  a = a.value;
  b = (delete b.required, delete b.name, delete b.placeholder, delete b.type, delete b.file, delete b.value, b);
  var g = this.context, k = g.f, l = void 0 === g.values ? {} : g.values;
  return H("input", Object.assign({}, b, {required:c, name:d, placeholder:e, className:"form-control" + (h ? "-file" : ""), value:d in l ? l[d] : a, type:f, "aria-describedby":g.w, id:g.id, onChange:function(a) {
    k(d, a.currentTarget.value);
  }}));
};
function Ta(a, b) {
  return b = b || {}, new Promise(function(c, d) {
    function e() {
      return {ok:2 == (f.status / 100 | 0), statusText:f.statusText, status:f.status, url:f.responseURL, text:function() {
        return Promise.resolve(f.responseText);
      }, json:function() {
        return Promise.resolve(JSON.parse(f.responseText));
      }, blob:function() {
        return Promise.resolve(new Blob([f.response]));
      }, clone:e, headers:{keys:function() {
        return h;
      }, entries:function() {
        return g;
      }, get:function(a) {
        return k[a.toLowerCase()];
      }, has:function(a) {
        return a.toLowerCase() in k;
      }}};
    }
    var f = new XMLHttpRequest, h = [], g = [], k = {}, l;
    for (l in f.open(b.method || "get", a, !0), f.onload = function() {
      f.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm, function(a, b, c) {
        h.push(b = b.toLowerCase());
        g.push([b, c]);
        k[b] = k[b] ? k[b] + "," + c : c;
      });
      c(e());
    }, f.onerror = d, f.withCredentials = "include" == b.credentials, b.headers) {
      f.setRequestHeader(l, b.headers[l]);
    }
    f.send(b.body || null);
  });
}
;function W() {
  S.call(this);
  this.b = this.b;
  this.state = {M:!1, error:null, K:null};
}
m(W, S);
W.prototype.submit = function(a) {
  var b = this, c, d, e, f, h;
  return wa(new va(new sa(function(g) {
    switch(g.c) {
      case 1:
        a.preventDefault();
        if (!b.b.path) {
          return b.m({error:"Path is not set in the properties of the form."}), g.return(!1);
        }
        b.m({error:null, K:null});
        c = new FormData(a.target);
        b.m({M:!0});
        g.j = 2;
        g.i = 3;
        return ra(g, Ta(b.b.path, {method:"POST", body:c}), 5);
      case 5:
        return d = g.v, ra(g, d.json(), 6);
      case 6:
        e = g.v, (f = e.error) ? b.m({error:f}) : b.m({K:1});
      case 3:
        g.I = [g.a];
        g.j = 0;
        g.i = 0;
        b.m({M:!1});
        var k = g.I.splice(0)[0];
        (k = g.a = g.a || k) ? k.aa ? g.c = g.j || g.i : void 0 != k.A && g.i < k.A ? (g.c = k.A, g.a = null) : g.c = g.i : g.c = 4;
        break;
      case 2:
        g.j = 0;
        k = g.a.Z;
        g.a = null;
        h = k;
        b.m({error:h});
        g.A(3);
        break;
      case 4:
        if (!b.b.xa) {
          g.A(7);
          break;
        }
        return ra(g, b.b.xa(d), 7);
      case 7:
        return g.return(!1);
    }
  })));
};
W.prototype.reset = function() {
  this.m({error:null, K:null});
};
function X() {
  S.call(this);
  this.state = {values:{}};
  this.b = this.b;
}
m(X, S);
X.prototype.N = function() {
  return {values:this.state.values, f:this.f.bind(this)};
};
X.prototype.f = function(a, b) {
  var c = {};
  this.m({values:Object.assign({}, this.state.values, (c[a] = b, c))});
  this.b.f && this.b.f(this.state.values);
};
X.prototype.l = function(a) {
  var b = Object.assign({}, a), c = a.children, d = a.ra;
  a = a.ca;
  b = (delete b.children, delete b.ra, delete b.ca, delete b.f, b);
  return H("form", Object.assign({}, b, {ref:d, onSubmit:a}), c);
};
function Y() {
  S.call(this);
  this.id = "i" + Math.floor(100000 * Math.random());
  this.w = "h" + this.id;
  this.b = this.b;
}
m(Y, S);
Y.prototype.N = function() {
  return {id:this.id, w:this.w};
};
Y.prototype.l = function() {
  var a = this.b, b = a.children, c = a.label;
  a = a.O;
  return H("div", {className:"form-group"}, c && H("label", {htmlFor:this.id}, c), b, a && H("small", {id:this.w, dangerouslySetInnerHTML:{ga:a}, className:"form-text text-muted"}));
};
function Ua(a) {
  var b = a.ta, c = a.qa, d = void 0 === a.ua ? c : a.ua;
  a = ["btn", "btn-" + ((void 0 === a.outline ? 0 : a.outline) ? "outline-" : "") + (void 0 === a.type ? "primary" : a.type), a.className].filter(Boolean);
  return H("button", {className:a.join(" "), type:"submit", disabled:b}, b && H("span", {className:"spinner-border spinner-border-sm" + (d ? " mr-2" : ""), role:"status", "aria-hidden":"true"}), b ? d : c);
}
var Z = {get ea() {
  return T;
}, get fa() {
  return U;
}, get da() {
  return V;
}, get U() {
  return W;
}};
function Va(a) {
  return Z.U.apply(this, arguments) || this;
}
m(Va, Z.U);
Va.prototype.l = function(a) {
  var b = this, c = Object.assign({}, a), d = a.f;
  a = (delete c.f, c);
  var e = this.state;
  c = e.M;
  var f = e.error;
  e = e.K;
  return H(X, Object.assign({}, a, {ca:this.submit.bind(this), f:function(a) {
    b.reset();
    d && d(a);
  }}), H(Y, {label:"Input", O:"Type in something..."}, H(Z.da, {name:"input", value:"hello-world"})), H(Y, {label:"Select", O:"Please select..."}, H(Z.ea, {options:[{title:"Free will", value:"1"}, {title:"Unfree will", value:"2"}], name:"select", value:"2"})), H(Y, {label:"TextArea", O:"Multiple row input..."}, H(Z.fa, {name:"textarea"}, "One must still have chaos in oneself to be able to give birth to a dancing star.")), H(Ua, {ta:c, type:"warning", qa:"Submit Data"}), f && "Error: " + f, e && "OK");
};
function Wa(a) {
  S.apply(this, arguments);
}
m(Wa, S);
Wa.prototype.l = function() {
  var a = this;
  return H("div", {className:"container"}, H("h1", {}, "@Depack/Form"), H("blockquote", {className:"blockquote"}, "The Preact component that creates and maintains\n          the form state (designed for Depack bundler)."), H("div", {className:"row"}, H("div", {className:"col-sm-6"}, H(Va, {f:function(b) {
    a.m(b);
  }, path:"/form"})), H("div", {className:"col-sm-6"}, H("pre", {style:"white-space: pre-wrap;"}, JSON.stringify(this.state, null, 2)))));
};
var Xa = H(Wa);
Na(void 0, Xa, {}, !1, document.querySelector("#preact"), !1);


//# sourceMappingURL=main.js.map