function l(a) {
  var b = 0;
  return function() {
    return b < a.length ? {done:!1, value:a[b++]} : {done:!0};
  };
}
function r(a) {
  var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
  return b ? b.call(a) : {next:l(a)};
}
function aa(a) {
  for (var b, c = []; !(b = a.next()).done;) {
    c.push(b.value);
  }
  return c;
}
var ba = "function" == typeof Object.create ? Object.create : function(a) {
  function b() {
  }
  b.prototype = a;
  return new b;
}, u;
if ("function" == typeof Object.setPrototypeOf) {
  u = Object.setPrototypeOf;
} else {
  var v;
  a: {
    var ca = {B:!0}, x = {};
    try {
      x.__proto__ = ca;
      v = x.B;
      break a;
    } catch (a) {
    }
    v = !1;
  }
  u = v ? function(a, b) {
    a.__proto__ = b;
    if (a.__proto__ !== b) {
      throw new TypeError(a + " is not extensible");
    }
    return a;
  } : null;
}
var y = u;
function z(a, b) {
  a.prototype = ba(b.prototype);
  a.prototype.constructor = a;
  if (y) {
    y(a, b);
  } else {
    for (var c in b) {
      if ("prototype" != c) {
        if (Object.defineProperties) {
          var e = Object.getOwnPropertyDescriptor(b, c);
          e && Object.defineProperty(a, c, e);
        } else {
          a[c] = b[c];
        }
      }
    }
  }
  a.H = b.prototype;
}
var B = "undefined" != typeof window && window === this ? this : "undefined" != typeof global && null != global ? global : this, C = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
  a != Array.prototype && a != Object.prototype && (a[b] = c.value);
};
function D(a, b) {
  if (b) {
    var c = B;
    a = a.split(".");
    for (var e = 0; e < a.length - 1; e++) {
      var h = a[e];
      h in c || (c[h] = {});
      c = c[h];
    }
    a = a[a.length - 1];
    e = c[a];
    b = b(e);
    b != e && null != b && C(c, a, {configurable:!0, writable:!0, value:b});
  }
}
D("Promise", function(a) {
  function b(f) {
    this.b = 0;
    this.g = void 0;
    this.a = [];
    var d = this.c();
    try {
      f(d.resolve, d.reject);
    } catch (g) {
      d.reject(g);
    }
  }
  function c() {
    this.a = null;
  }
  function e(f) {
    return f instanceof b ? f : new b(function(d) {
      d(f);
    });
  }
  if (a) {
    return a;
  }
  c.prototype.b = function(f) {
    if (null == this.a) {
      this.a = [];
      var d = this;
      this.c(function() {
        d.g();
      });
    }
    this.a.push(f);
  };
  var h = B.setTimeout;
  c.prototype.c = function(f) {
    h(f, 0);
  };
  c.prototype.g = function() {
    for (; this.a && this.a.length;) {
      var f = this.a;
      this.a = [];
      for (var d = 0; d < f.length; ++d) {
        var g = f[d];
        f[d] = null;
        try {
          g();
        } catch (m) {
          this.f(m);
        }
      }
    }
    this.a = null;
  };
  c.prototype.f = function(f) {
    this.c(function() {
      throw f;
    });
  };
  b.prototype.c = function() {
    function f(m) {
      return function(n) {
        g || (g = !0, m.call(d, n));
      };
    }
    var d = this, g = !1;
    return {resolve:f(this.D), reject:f(this.f)};
  };
  b.prototype.D = function(f) {
    if (f === this) {
      this.f(new TypeError("A Promise cannot resolve to itself"));
    } else {
      if (f instanceof b) {
        this.F(f);
      } else {
        a: {
          switch(typeof f) {
            case "object":
              var d = null != f;
              break a;
            case "function":
              d = !0;
              break a;
            default:
              d = !1;
          }
        }
        d ? this.u(f) : this.j(f);
      }
    }
  };
  b.prototype.u = function(f) {
    var d = void 0;
    try {
      d = f.then;
    } catch (g) {
      this.f(g);
      return;
    }
    "function" == typeof d ? this.G(d, f) : this.j(f);
  };
  b.prototype.f = function(f) {
    this.l(2, f);
  };
  b.prototype.j = function(f) {
    this.l(1, f);
  };
  b.prototype.l = function(f, d) {
    if (0 != this.b) {
      throw Error("Cannot settle(" + f + ", " + d + "): Promise already settled in state" + this.b);
    }
    this.b = f;
    this.g = d;
    this.o();
  };
  b.prototype.o = function() {
    if (null != this.a) {
      for (var f = 0; f < this.a.length; ++f) {
        k.b(this.a[f]);
      }
      this.a = null;
    }
  };
  var k = new c;
  b.prototype.F = function(f) {
    var d = this.c();
    f.s(d.resolve, d.reject);
  };
  b.prototype.G = function(f, d) {
    var g = this.c();
    try {
      f.call(d, g.resolve, g.reject);
    } catch (m) {
      g.reject(m);
    }
  };
  b.prototype.then = function(f, d) {
    function g(p, t) {
      return "function" == typeof p ? function(w) {
        try {
          m(p(w));
        } catch (A) {
          n(A);
        }
      } : t;
    }
    var m, n, q = new b(function(p, t) {
      m = p;
      n = t;
    });
    this.s(g(f, m), g(d, n));
    return q;
  };
  b.prototype.catch = function(f) {
    return this.then(void 0, f);
  };
  b.prototype.s = function(f, d) {
    function g() {
      switch(m.b) {
        case 1:
          f(m.g);
          break;
        case 2:
          d(m.g);
          break;
        default:
          throw Error("Unexpected state: " + m.b);
      }
    }
    var m = this;
    null == this.a ? k.b(g) : this.a.push(g);
  };
  b.resolve = e;
  b.reject = function(f) {
    return new b(function(d, g) {
      g(f);
    });
  };
  b.race = function(f) {
    return new b(function(d, g) {
      for (var m = r(f), n = m.next(); !n.done; n = m.next()) {
        e(n.value).s(d, g);
      }
    });
  };
  b.all = function(f) {
    var d = r(f), g = d.next();
    return g.done ? e([]) : new b(function(m, n) {
      function q(w) {
        return function(A) {
          p[w] = A;
          t--;
          0 == t && m(p);
        };
      }
      var p = [], t = 0;
      do {
        p.push(void 0), t++, e(g.value).s(q(p.length - 1), n), g = d.next();
      } while (!g.done);
    });
  };
  return b;
});
function E() {
  E = function() {
  };
  B.Symbol || (B.Symbol = da);
}
function F(a, b) {
  this.a = a;
  C(this, "description", {configurable:!0, writable:!0, value:b});
}
F.prototype.toString = function() {
  return this.a;
};
var da = function() {
  function a(c) {
    if (this instanceof a) {
      throw new TypeError("Symbol is not a constructor");
    }
    return new F("jscomp_symbol_" + (c || "") + "_" + b++, c);
  }
  var b = 0;
  return a;
}();
function G() {
  E();
  var a = B.Symbol.iterator;
  a || (a = B.Symbol.iterator = B.Symbol("Symbol.iterator"));
  "function" != typeof Array.prototype[a] && C(Array.prototype, a, {configurable:!0, writable:!0, value:function() {
    return ea(l(this));
  }});
  G = function() {
  };
}
function ea(a) {
  G();
  a = {next:a};
  a[B.Symbol.iterator] = function() {
    return this;
  };
  return a;
}
function H() {
  this.j = !1;
  this.c = null;
  this.l = void 0;
  this.b = 1;
  this.f = this.g = 0;
  this.u = this.a = null;
}
function I(a) {
  if (a.j) {
    throw new TypeError("Generator is already running");
  }
  a.j = !0;
}
H.prototype.o = function(a) {
  this.l = a;
};
function J(a, b) {
  a.a = {w:b, A:!0};
  a.b = a.g || a.f;
}
H.prototype.return = function(a) {
  this.a = {return:a};
  this.b = this.f;
};
function K(a, b, c) {
  a.b = c;
  return {value:b};
}
H.prototype.m = function(a) {
  this.b = a;
};
function fa(a) {
  this.a = new H;
  this.b = a;
}
function ha(a, b) {
  I(a.a);
  var c = a.a.c;
  if (c) {
    return L(a, "return" in c ? c["return"] : function(e) {
      return {value:e, done:!0};
    }, b, a.a.return);
  }
  a.a.return(b);
  return M(a);
}
function L(a, b, c, e) {
  try {
    var h = b.call(a.a.c, c);
    if (!(h instanceof Object)) {
      throw new TypeError("Iterator result " + h + " is not an object");
    }
    if (!h.done) {
      return a.a.j = !1, h;
    }
    var k = h.value;
  } catch (f) {
    return a.a.c = null, J(a.a, f), M(a);
  }
  a.a.c = null;
  e.call(a.a, k);
  return M(a);
}
function M(a) {
  for (; a.a.b;) {
    try {
      var b = a.b(a.a);
      if (b) {
        return a.a.j = !1, {value:b.value, done:!1};
      }
    } catch (c) {
      a.a.l = void 0, J(a.a, c);
    }
  }
  a.a.j = !1;
  if (a.a.a) {
    b = a.a.a;
    a.a.a = null;
    if (b.A) {
      throw b.w;
    }
    return {value:b.return, done:!0};
  }
  return {value:void 0, done:!0};
}
function ia(a) {
  this.next = function(b) {
    I(a.a);
    a.a.c ? b = L(a, a.a.c.next, b, a.a.o) : (a.a.o(b), b = M(a));
    return b;
  };
  this.throw = function(b) {
    I(a.a);
    a.a.c ? b = L(a, a.a.c["throw"], b, a.a.o) : (J(a.a, b), b = M(a));
    return b;
  };
  this.return = function(b) {
    return ha(a, b);
  };
  G();
  this[Symbol.iterator] = function() {
    return this;
  };
}
function ja(a) {
  function b(e) {
    return a.next(e);
  }
  function c(e) {
    return a.throw(e);
  }
  return new Promise(function(e, h) {
    function k(f) {
      f.done ? e(f.value) : Promise.resolve(f.value).then(b, c).then(k, h);
    }
    k(a.next());
  });
}
function ka(a, b) {
  G();
  a instanceof String && (a += "");
  var c = 0, e = {next:function() {
    if (c < a.length) {
      var h = c++;
      return {value:b(h, a[h]), done:!1};
    }
    e.next = function() {
      return {done:!0, value:void 0};
    };
    return e.next();
  }};
  e[Symbol.iterator] = function() {
    return e;
  };
  return e;
}
D("Array.prototype.values", function(a) {
  return a ? a : function() {
    return ka(this, function(b, c) {
      return c;
    });
  };
});
D("Object.entries", function(a) {
  return a ? a : function(b) {
    var c = [], e;
    for (e in b) {
      Object.prototype.hasOwnProperty.call(b, e) && c.push([e, b[e]]);
    }
    return c;
  };
});
D("String.prototype.startsWith", function(a) {
  return a ? a : function(b, c) {
    if (null == this) {
      throw new TypeError("The 'this' value for String.prototype.startsWith must not be null or undefined");
    }
    if (b instanceof RegExp) {
      throw new TypeError("First argument to String.prototype.startsWith must not be a regular expression");
    }
    var e = this.length, h = b.length;
    c = Math.max(0, Math.min(c | 0, this.length));
    for (var k = 0; k < h && c < e;) {
      if (this[c++] != b[k++]) {
        return !1;
      }
    }
    return k >= h;
  };
});
var N = preact, O = N.h, P = N.Component, la = N.render;
function ma(a) {
  var b = a.help, c = a.i, e = a.valid, h = "text-muted";
  a.invalid ? h = "invalid-feedback" : e && (h = "valid-feedback");
  a = "form-text " + h;
  return "string" != typeof b ? O("small", {id:c, className:a}, b) : O("small", {id:c, className:a, dangerouslySetInnerHTML:{__html:b}});
}
;function Q(a, b) {
  var c = this.props, e = c.name, h = a.value;
  if (this.context.values[e] != b.values[e]) {
    return !0;
  }
  if (c.value != h) {
    if (b.onChange) {
      b.onChange(a.name, h);
    }
    return !1;
  }
}
function R(a) {
  var b = [];
  a = Object.entries(a).reduce(function(c, e) {
    var h = r(e);
    e = h.next().value;
    h = h.next().value;
    if ("col" == e || e.startsWith("col-")) {
      return b.push(e), c;
    }
    c[e] = h;
    return c;
  }, {});
  return {v:b, C:a};
}
;function S() {
  var a = P.call(this) || this;
  a.id = "i" + Math.floor(100000 * Math.random());
  a.i = "h" + a.id;
  a.props = a.props;
  return a;
}
z(S, P);
S.prototype.getChildContext = function() {
  return {id:this.id, i:this.i};
};
S.prototype.render = function(a) {
  var b = Object.assign({}, a), c = a.children, e = a.label, h = a.help, k = a.details, f = a.className, d = a["form-row"], g = void 0 === a.row ? d : a.row;
  a = a.labelClassName;
  b = (delete b.children, delete b.label, delete b.help, delete b.details, delete b.className, delete b["form-row"], delete b.row, delete b.labelClassName, b);
  f = ["form-group", f, g ? (d ? "form-" : "") + "row" : null].filter(Boolean).join(" ") || void 0;
  d = R(b).v;
  a = [g ? "col-form-label" : null, a].concat(d instanceof Array ? d : aa(r(d))).filter(Boolean).join(" ") || void 0;
  e = e ? O("label", {className:a, htmlFor:this.id}, e) : null;
  h = O(ma, {help:h, i:this.i});
  return k ? O("details", {className:f}, O("summary", {}, e), c, g ? O("div", {className:"col-12"}, h) : h) : O("div", {className:f}, e, c, g ? O("div", {className:"col-12"}, h) : h);
};
function T() {
  var a = P.call(this) || this;
  a.props = a.props;
  return a;
}
z(T, P);
T.prototype.shouldComponentUpdate = function(a, b, c) {
  return Q.call(this, a, c);
};
T.prototype.componentDidMount = function() {
  var a = this.props, b = a.value;
  a = a.name;
  var c = this.context.onChange;
  c && void 0 !== b && c(a, b);
};
T.prototype.render = function(a) {
  var b = Object.assign({}, a), c = a.options, e = a.name, h = a.value, k = a.required, f = a.className;
  a = a.defaultText;
  var d = (delete b.options, delete b.name, delete b.value, delete b.required, delete b.className, delete b.defaultText, b), g = this.context, m = g.onChange;
  b = g.i;
  var n = g.id;
  g = void 0 === g.values ? {} : g.values;
  g = e in g ? g[e] : h;
  d = R(d).v;
  f = ["custom-select", f].filter(Boolean).join(" ");
  c = O("select", {name:e, value:void 0 !== g ? g : "", className:f, required:k, id:n, "aria-describedby":b, onChange:function(q) {
    m(e, q.currentTarget.value);
  }}, O("option", {value:""}, a), c.map(function(q) {
    var p = q.value;
    return O("option", {key:p, value:p, selected:p == h}, q.title);
  }));
  return d.length ? O("div", {className:d.join(" ")}, c) : c;
};
function U() {
  var a = P.call(this) || this;
  a.props = a.props;
  return a;
}
z(U, P);
U.prototype.shouldComponentUpdate = function(a, b, c) {
  return Q.call(this, a, c);
};
U.prototype.componentDidMount = function() {
  var a = this.props, b = r(a.children).next().value;
  a = a.name;
  var c = this.context.onChange;
  b && c(a, b.trim());
};
U.prototype.render = function(a) {
  var b = a.name, c = a.children, e = this.context, h = e.onChange, k = void 0 === e.values ? {} : e.values;
  return O("textarea", {required:a.required, name:b, placeholder:a.placeholder, "aria-describedby":e.i, className:"form-control", id:e.id, onChange:function(f) {
    h(b, f.currentTarget.value);
  }, rows:void 0 === a.rows ? 3 : a.rows}, b in k ? k[b] : c);
};
function V() {
  var a = P.call(this) || this;
  a.props = a.props;
  return a;
}
z(V, P);
V.prototype.shouldComponentUpdate = function(a, b, c) {
  return Q.call(this, a, c);
};
V.prototype.componentDidMount = function() {
  var a = this.props, b = a.value;
  a = a.name;
  var c = this.context.onChange;
  void 0 !== b && c && c(a, b);
};
V.prototype.onChange = function(a) {
  this.context.onChange(this.props.name, a);
};
V.prototype.render = function(a) {
  var b = this, c = Object.assign({}, a), e = a.required, h = a.name, k = a.placeholder, f = void 0 === a.type ? "text" : a.type, d = a.file, g = a.value, m = a.className, n = a.invalid, q = a.valid;
  a = a.help;
  c = (delete c.required, delete c.name, delete c.placeholder, delete c.type, delete c.file, delete c.value, delete c.className, delete c.invalid, delete c.valid, delete c.help, c);
  var p = R(c);
  c = p.v;
  p = p.C;
  m = ["form-control" + (d ? "-file" : ""), m, n ? "is-invalid" : null, q ? "is-valid" : null].filter(Boolean).join(" ");
  var t = this.context;
  d = t.i;
  var w = void 0 === t.values ? {} : t.values;
  e = O("input", Object.assign({}, p, {required:e, name:h, placeholder:k, className:m, value:h in w ? w[h] : g, type:f, "aria-describedby":d, id:t.id, onChange:function(A) {
    b.onChange(A.currentTarget.value);
  }}));
  return c.length ? (n = a ? O(ma, {help:a, i:d, valid:q, invalid:n}) : null, O("div", {className:c.join(" ")}, e, n)) : e;
};
function na(a, b) {
  return b = b || {}, new Promise(function(c, e) {
    function h() {
      return {ok:2 == (k.status / 100 | 0), statusText:k.statusText, status:k.status, url:k.responseURL, text:function() {
        return Promise.resolve(k.responseText);
      }, json:function() {
        return Promise.resolve(JSON.parse(k.responseText));
      }, blob:function() {
        return Promise.resolve(new Blob([k.response]));
      }, clone:h, headers:{keys:function() {
        return f;
      }, entries:function() {
        return d;
      }, get:function(n) {
        return g[n.toLowerCase()];
      }, has:function(n) {
        return n.toLowerCase() in g;
      }}};
    }
    var k = new XMLHttpRequest, f = [], d = [], g = {}, m;
    for (m in k.open(b.method || "get", a, !0), k.onload = function() {
      k.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm, function(n, q, p) {
        f.push(q = q.toLowerCase());
        d.push([q, p]);
        g[q] = g[q] ? g[q] + "," + p : p;
      });
      c(h());
    }, k.onerror = e, k.withCredentials = "include" == b.credentials, b.headers) {
      k.setRequestHeader(m, b.headers[m]);
    }
    k.send(b.body || null);
  });
}
;function W() {
  var a = P.call(this) || this;
  a.props = a.props;
  a.state = {formLoading:!1, error:null, success:null};
  a.b = {};
  return a;
}
z(W, P);
W.prototype.a = function(a) {
  var b = this, c, e, h, k, f;
  return ja(new ia(new fa(function(d) {
    switch(d.b) {
      case 1:
        a.preventDefault();
        if (!b.props.path) {
          return b.setState({error:"Path is not set in the properties of the form."}), d.return(!1);
        }
        b.setState({error:null, success:null});
        c = new FormData(a.target);
        b.setState({formLoading:!0});
        d.g = 2;
        d.f = 3;
        return K(d, na(b.props.path, Object.assign({}, {method:"POST", body:c}, b.b)), 5);
      case 5:
        return e = d.l, K(d, e.json(), 6);
      case 6:
        h = d.l, (k = h.error) ? b.setState({error:k}) : b.setState({success:1});
      case 3:
        d.u = [d.a];
        d.g = 0;
        d.f = 0;
        b.setState({formLoading:!1});
        var g = d.u.splice(0)[0];
        (g = d.a = d.a || g) ? g.A ? d.b = d.g || d.f : void 0 != g.m && d.f < g.m ? (d.b = g.m, d.a = null) : d.b = d.f : d.b = 4;
        break;
      case 2:
        d.g = 0;
        g = d.a.w;
        d.a = null;
        f = g;
        b.setState({error:f});
        d.m(3);
        break;
      case 4:
        if (!b.props.submitFinish) {
          d.m(7);
          break;
        }
        return K(d, b.props.submitFinish(e), 7);
      case 7:
        return d.return(!1);
    }
  })));
};
function X() {
  var a = P.call(this) || this;
  a.state = {values:{}};
  a.props = a.props;
  return a;
}
z(X, P);
X.prototype.getChildContext = function() {
  return {values:this.state.values, onChange:this.onChange.bind(this)};
};
X.prototype.onChange = function(a, b) {
  var c = {};
  this.setState({values:Object.assign({}, this.state.values, (c[a] = b, c))});
  if (this.props.onChange) {
    this.props.onChange(this.state.values);
  }
};
X.prototype.render = function(a) {
  var b = Object.assign({}, a), c = a.children, e = a.formRef;
  a = a.onSubmit;
  b = (delete b.children, delete b.formRef, delete b.onSubmit, delete b.onChange, b);
  return O("form", Object.assign({}, b, {ref:e, onSubmit:a}), c);
};
function oa(a) {
  var b = a.loading, c = a.confirmText, e = void 0 === a.loadingText ? c : a.loadingText;
  a = ["btn", "btn-" + ((void 0 === a.outline ? 0 : a.outline) ? "outline-" : "") + (void 0 === a.type ? "primary" : a.type), a.className].filter(Boolean);
  return O("button", {className:a.join(" "), type:"submit", disabled:b}, b && O("span", {className:"spinner-border spinner-border-sm" + (e ? " mr-2" : ""), role:"status", "aria-hidden":"true"}), b ? e : c);
}
;function Y() {
  return W.apply(this, arguments) || this;
}
z(Y, W);
Y.prototype.render = function(a) {
  var b = this, c = Object.assign({}, a), e = a.onChange;
  a = (delete c.onChange, c);
  var h = this.state;
  c = h.formLoading;
  var k = h.error;
  h = h.success;
  return O(X, Object.assign({}, a, {onSubmit:this.a.bind(this), onChange:function(f) {
    b.setState({error:null, success:null});
    e && e(f);
  }}), O(S, {label:"Input", help:"Type in something..."}, O(V, {name:"input", value:"hello-world"})), O(S, {label:"Select", help:"Please select..."}, O(T, {options:[{title:"Free will", value:"1"}, {title:"Unfree will", value:"2"}], name:"select", value:"2"})), O(S, {label:"TextArea", help:"Multiple row input..."}, O(U, {name:"textarea"}, "One must still have chaos in oneself to be able to give birth to a dancing star.")), O(oa, {loading:c, type:"warning", confirmText:"Submit Data"}), k && "Error: " + 
  k, h && "OK");
};
function Z() {
  return P.apply(this, arguments) || this;
}
z(Z, P);
Z.prototype.render = function() {
  var a = this;
  return O("div", {className:"container"}, O("h1", {}, "@Depack/Form"), O("blockquote", {className:"blockquote"}, "The Preact component that creates and maintains\n          the form state (designed for Depack bundler)."), O("div", {className:"row"}, O("div", {className:"col-sm-6"}, O(Y, {onChange:function(b) {
    a.setState(b);
  }, path:"/form"})), O("div", {className:"col-sm-6"}, O("pre", {style:"white-space: pre-wrap;"}, JSON.stringify(this.state, null, 2)))));
};
la(O(Z), document.querySelector("#preact"));


//# sourceMappingURL=main.js.map