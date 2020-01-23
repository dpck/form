function m(a) {
  var b = 0;
  return function() {
    return b < a.length ? {done:!1, value:a[b++]} : {done:!0};
  };
}
function t(a) {
  var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
  return b ? b.call(a) : {next:m(a)};
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
    var ca = {C:!0}, x = {};
    try {
      x.__proto__ = ca;
      v = x.C;
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
          var f = Object.getOwnPropertyDescriptor(b, c);
          f && Object.defineProperty(a, c, f);
        } else {
          a[c] = b[c];
        }
      }
    }
  }
}
var B = "undefined" != typeof window && window === this ? this : "undefined" != typeof global && null != global ? global : this, C = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
  a != Array.prototype && a != Object.prototype && (a[b] = c.value);
};
function D(a, b) {
  if (b) {
    var c = B;
    a = a.split(".");
    for (var f = 0; f < a.length - 1; f++) {
      var h = a[f];
      h in c || (c[h] = {});
      c = c[h];
    }
    a = a[a.length - 1];
    f = c[a];
    b = b(f);
    b != f && null != b && C(c, a, {configurable:!0, writable:!0, value:b});
  }
}
D("Promise", function(a) {
  function b(d) {
    this.b = 0;
    this.g = void 0;
    this.a = [];
    var g = this.c();
    try {
      d(g.resolve, g.reject);
    } catch (e) {
      g.reject(e);
    }
  }
  function c() {
    this.a = null;
  }
  function f(d) {
    return d instanceof b ? d : new b(function(g) {
      g(d);
    });
  }
  if (a) {
    return a;
  }
  c.prototype.b = function(d) {
    if (null == this.a) {
      this.a = [];
      var g = this;
      this.c(function() {
        g.g();
      });
    }
    this.a.push(d);
  };
  var h = B.setTimeout;
  c.prototype.c = function(d) {
    h(d, 0);
  };
  c.prototype.g = function() {
    for (; this.a && this.a.length;) {
      var d = this.a;
      this.a = [];
      for (var g = 0; g < d.length; ++g) {
        var e = d[g];
        d[g] = null;
        try {
          e();
        } catch (l) {
          this.f(l);
        }
      }
    }
    this.a = null;
  };
  c.prototype.f = function(d) {
    this.c(function() {
      throw d;
    });
  };
  b.prototype.c = function() {
    function d(l) {
      return function(n) {
        e || (e = !0, l.call(g, n));
      };
    }
    var g = this, e = !1;
    return {resolve:d(this.D), reject:d(this.f)};
  };
  b.prototype.D = function(d) {
    if (d === this) {
      this.f(new TypeError("A Promise cannot resolve to itself"));
    } else {
      if (d instanceof b) {
        this.F(d);
      } else {
        a: {
          switch(typeof d) {
            case "object":
              var g = null != d;
              break a;
            case "function":
              g = !0;
              break a;
            default:
              g = !1;
          }
        }
        g ? this.u(d) : this.j(d);
      }
    }
  };
  b.prototype.u = function(d) {
    var g = void 0;
    try {
      g = d.then;
    } catch (e) {
      this.f(e);
      return;
    }
    "function" == typeof g ? this.G(g, d) : this.j(d);
  };
  b.prototype.f = function(d) {
    this.l(2, d);
  };
  b.prototype.j = function(d) {
    this.l(1, d);
  };
  b.prototype.l = function(d, g) {
    if (0 != this.b) {
      throw Error("Cannot settle(" + d + ", " + g + "): Promise already settled in state" + this.b);
    }
    this.b = d;
    this.g = g;
    this.o();
  };
  b.prototype.o = function() {
    if (null != this.a) {
      for (var d = 0; d < this.a.length; ++d) {
        k.b(this.a[d]);
      }
      this.a = null;
    }
  };
  var k = new c;
  b.prototype.F = function(d) {
    var g = this.c();
    d.s(g.resolve, g.reject);
  };
  b.prototype.G = function(d, g) {
    var e = this.c();
    try {
      d.call(g, e.resolve, e.reject);
    } catch (l) {
      e.reject(l);
    }
  };
  b.prototype.then = function(d, g) {
    function e(p, r) {
      return "function" == typeof p ? function(w) {
        try {
          l(p(w));
        } catch (A) {
          n(A);
        }
      } : r;
    }
    var l, n, q = new b(function(p, r) {
      l = p;
      n = r;
    });
    this.s(e(d, l), e(g, n));
    return q;
  };
  b.prototype.catch = function(d) {
    return this.then(void 0, d);
  };
  b.prototype.s = function(d, g) {
    function e() {
      switch(l.b) {
        case 1:
          d(l.g);
          break;
        case 2:
          g(l.g);
          break;
        default:
          throw Error("Unexpected state: " + l.b);
      }
    }
    var l = this;
    null == this.a ? k.b(e) : this.a.push(e);
  };
  b.resolve = f;
  b.reject = function(d) {
    return new b(function(g, e) {
      e(d);
    });
  };
  b.race = function(d) {
    return new b(function(g, e) {
      for (var l = t(d), n = l.next(); !n.done; n = l.next()) {
        f(n.value).s(g, e);
      }
    });
  };
  b.all = function(d) {
    var g = t(d), e = g.next();
    return e.done ? f([]) : new b(function(l, n) {
      function q(w) {
        return function(A) {
          p[w] = A;
          r--;
          0 == r && l(p);
        };
      }
      var p = [], r = 0;
      do {
        p.push(void 0), r++, f(e.value).s(q(p.length - 1), n), e = g.next();
      } while (!e.done);
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
    return ea(m(this));
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
    return L(a, "return" in c ? c["return"] : function(f) {
      return {value:f, done:!0};
    }, b, a.a.return);
  }
  a.a.return(b);
  return M(a);
}
function L(a, b, c, f) {
  try {
    var h = b.call(a.a.c, c);
    if (!(h instanceof Object)) {
      throw new TypeError("Iterator result " + h + " is not an object");
    }
    if (!h.done) {
      return a.a.j = !1, h;
    }
    var k = h.value;
  } catch (d) {
    return a.a.c = null, J(a.a, d), M(a);
  }
  a.a.c = null;
  f.call(a.a, k);
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
  function b(f) {
    return a.next(f);
  }
  function c(f) {
    return a.throw(f);
  }
  return new Promise(function(f, h) {
    function k(d) {
      d.done ? f(d.value) : Promise.resolve(d.value).then(b, c).then(k, h);
    }
    k(a.next());
  });
}
function ka(a, b) {
  G();
  a instanceof String && (a += "");
  var c = 0, f = {next:function() {
    if (c < a.length) {
      var h = c++;
      return {value:b(h, a[h]), done:!1};
    }
    f.next = function() {
      return {done:!0, value:void 0};
    };
    return f.next();
  }};
  f[Symbol.iterator] = function() {
    return f;
  };
  return f;
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
    var c = [], f;
    for (f in b) {
      Object.prototype.hasOwnProperty.call(b, f) && c.push([f, b[f]]);
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
    var f = this.length, h = b.length;
    c = Math.max(0, Math.min(c | 0, this.length));
    for (var k = 0; k < h && c < f;) {
      if (this[c++] != b[k++]) {
        return !1;
      }
    }
    return k >= h;
  };
});
try {
  window.preact = preact;
} catch (a) {
  window.preact = {};
}
var N = window.preact, O = N.h, P = N.Component, la = N.render;
function ma(a) {
  var b = a.help, c = a.i, f = a.valid, h = "text-muted";
  a.invalid ? h = "invalid-feedback" : f && (h = "valid-feedback");
  a = "form-text " + h;
  return "string" != typeof b ? O("small", {id:c, className:a}, b) : O("small", {id:c, className:a, dangerouslySetInnerHTML:{__html:b}});
}
;function Q(a, b) {
  var c = this.props, f = c.name, h = a.value;
  if (this.context.values[f] != b.values[f]) {
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
  a = Object.entries(a).reduce(function(c, f) {
    var h = t(f);
    f = h.next().value;
    h = h.next().value;
    if ("col" == f || f.startsWith("col-")) {
      return b.push(f), c;
    }
    c[f] = h;
    return c;
  }, {});
  return {v:b, B:a};
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
  var b = Object.assign({}, a), c = a.children, f = a.label, h = a.help, k = a.details, d = a.className, g = a["form-row"], e = void 0 === a.row ? g : a.row;
  a = a.labelClassName;
  b = (delete b.children, delete b.label, delete b.help, delete b.details, delete b.className, delete b["form-row"], delete b.row, delete b.labelClassName, b);
  d = ["form-group", d, e ? (g ? "form-" : "") + "row" : null].filter(Boolean).join(" ") || void 0;
  g = R(b).v;
  a = [e ? "col-form-label" : null, a].concat(g instanceof Array ? g : aa(t(g))).filter(Boolean).join(" ") || void 0;
  f = f ? O("label", {className:a, htmlFor:this.id}, f) : null;
  h = O(ma, {help:h, i:this.i});
  return k ? O("details", {className:d}, O("summary", {}, f), c, e ? O("div", {className:"col-12"}, h) : h) : O("div", {className:d}, f, c, e ? O("div", {className:"col-12"}, h) : h);
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
  var b = Object.assign({}, a), c = a.options, f = a.name, h = a.value, k = a.required, d = a.className;
  a = a.defaultText;
  var g = (delete b.options, delete b.name, delete b.value, delete b.required, delete b.className, delete b.defaultText, b), e = this.context, l = e.onChange;
  b = e.i;
  var n = e.id;
  e = void 0 === e.values ? {} : e.values;
  e = f in e ? e[f] : h;
  var q = R(g);
  g = q.v;
  q = q.B;
  d = ["custom-select", d].filter(Boolean).join(" ");
  c = O("select", Object.assign({}, q, {name:f, value:void 0 !== e ? e : "", className:d, required:k, id:n, "aria-describedby":b, onChange:function(p) {
    l(f, p.currentTarget.value);
  }}), null !== a && O("option", {value:""}, a), c.map(function(p) {
    var r = p.value;
    return O("option", {key:r, value:r, selected:r == h}, p.title);
  }));
  return g.length ? O("div", {className:g.join(" ")}, c) : c;
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
  var a = this.props, b = t(a.children).next().value;
  a = a.name;
  var c = this.context.onChange;
  b && c(a, b.trim());
};
U.prototype.render = function(a) {
  var b = Object.assign({}, a), c = void 0 === a.rows ? 3 : a.rows, f = a.required, h = a.name, k = a.placeholder;
  a = a.children;
  b = (delete b.rows, delete b.required, delete b.name, delete b.placeholder, delete b.children, b);
  var d = this.context, g = d.onChange, e = void 0 === d.values ? {} : d.values, l = h in e;
  return O("textarea", Object.assign({}, b, {required:f, name:h, placeholder:k, "aria-describedby":d.i, className:"form-control", id:d.id, onChange:function(n) {
    g(h, n.currentTarget.value);
  }, rows:c}), l ? e[h] : a);
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
  var b = this, c = Object.assign({}, a), f = a.required, h = a.name, k = a.placeholder, d = void 0 === a.type ? "text" : a.type, g = a.file, e = a.value, l = a.className, n = a.invalid, q = a.valid;
  a = a.help;
  c = (delete c.required, delete c.name, delete c.placeholder, delete c.type, delete c.file, delete c.value, delete c.className, delete c.invalid, delete c.valid, delete c.help, c);
  var p = R(c);
  c = p.v;
  p = p.B;
  l = ["form-control" + (g ? "-file" : ""), l, n ? "is-invalid" : null, q ? "is-valid" : null].filter(Boolean).join(" ");
  var r = this.context;
  g = r.i;
  var w = void 0 === r.values ? {} : r.values;
  f = O("input", Object.assign({}, p, {required:f, name:h, placeholder:k, className:l, value:h in w ? w[h] : e, type:d, "aria-describedby":g, id:r.id, onChange:function(A) {
    b.onChange(A.currentTarget.value);
  }}));
  return c.length ? (n = a ? O(ma, {help:a, i:g, valid:q, invalid:n}) : null, O("div", {className:c.join(" ")}, f, n)) : f;
};
function na(a, b) {
  return b = b || {}, new Promise(function(c, f) {
    function h() {
      return {ok:2 == (k.status / 100 | 0), statusText:k.statusText, status:k.status, url:k.responseURL, text:function() {
        return Promise.resolve(k.responseText);
      }, json:function() {
        return Promise.resolve(JSON.parse(k.responseText));
      }, blob:function() {
        return Promise.resolve(new Blob([k.response]));
      }, clone:h, headers:{keys:function() {
        return d;
      }, entries:function() {
        return g;
      }, get:function(n) {
        return e[n.toLowerCase()];
      }, has:function(n) {
        return n.toLowerCase() in e;
      }}};
    }
    var k = new XMLHttpRequest, d = [], g = [], e = {}, l;
    for (l in k.open(b.method || "get", a, !0), k.onload = function() {
      k.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm, function(n, q, p) {
        d.push(q = q.toLowerCase());
        g.push([q, p]);
        e[q] = e[q] ? e[q] + "," + p : p;
      });
      c(h());
    }, k.onerror = f, k.withCredentials = "include" == b.credentials, b.headers) {
      k.setRequestHeader(l, b.headers[l]);
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
  var b = this, c, f, h, k, d, g;
  return ja(new ia(new fa(function(e) {
    switch(e.b) {
      case 1:
        a.preventDefault();
        if (!b.props.path) {
          return b.setState({error:"Path is not set in the properties of the form."}), e.return(!1);
        }
        b.setState({error:null, success:null});
        c = new FormData(a.target);
        b.setState({formLoading:!0});
        e.g = 2;
        e.f = 3;
        return K(e, na(b.props.path, Object.assign({}, {method:"POST", body:c}, b.b)), 5);
      case 5:
        return f = e.l, K(e, f.json(), 6);
      case 6:
        h = e.l, (k = h.error) ? b.setState({error:k}) : b.setState({success:1});
      case 3:
        e.u = [e.a];
        e.g = 0;
        e.f = 0;
        b.setState({formLoading:!1});
        var l = e.u.splice(0)[0];
        (l = e.a = e.a || l) ? l.A ? e.b = e.g || e.f : void 0 != l.m && e.f < l.m ? (e.b = l.m, e.a = null) : e.b = e.f : e.b = 4;
        break;
      case 2:
        e.g = 0;
        l = e.a.w;
        e.a = null;
        g = d = l;
        d instanceof Event && (g = Error("Network error"));
        b.setState({error:g});
        e.m(3);
        break;
      case 4:
        if (!b.props.submitFinish) {
          e.m(7);
          break;
        }
        return K(e, b.props.submitFinish(f), 7);
      case 7:
        return e.return(!1);
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
  var b = Object.assign({}, a), c = a.children, f = a.formRef;
  a = a.onSubmit;
  b = (delete b.children, delete b.formRef, delete b.onSubmit, delete b.onChange, b);
  return O("form", Object.assign({}, b, {ref:f, onSubmit:a}), c);
};
function oa(a) {
  var b = Object.assign({}, a), c = a.disabled, f = a.loading, h = a.confirmText, k = void 0 === a.loadingText ? h : a.loadingText, d = a.className, g = void 0 === a.type ? "primary" : a.type;
  a = void 0 === a.outline ? !1 : a.outline;
  b = (delete b.disabled, delete b.loading, delete b.confirmText, delete b.loadingText, delete b.className, delete b.type, delete b.outline, b);
  d = ["btn", "btn-" + (a ? "outline-" : "") + g, d].filter(Boolean);
  return O("button", Object.assign({}, b, {className:d.join(" "), type:"submit", disabled:c || f}), f && O("span", {className:"spinner-border spinner-border-sm" + (k ? " mr-2" : ""), role:"status", "aria-hidden":"true"}), f ? k : h);
}
;function Y() {
  return W.apply(this, arguments) || this;
}
z(Y, W);
Y.prototype.render = function(a) {
  var b = this, c = Object.assign({}, a), f = a.onChange;
  a = (delete c.onChange, c);
  var h = this.state;
  c = h.formLoading;
  var k = h.error;
  h = h.success;
  return O(X, Object.assign({}, a, {onSubmit:this.a.bind(this), onChange:function(d) {
    b.setState({error:null, success:null});
    f && f(d);
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