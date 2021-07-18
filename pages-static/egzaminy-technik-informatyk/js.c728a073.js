parcelRequire = (function (e, r, n, t) {
  function i(n, t) {
    function o(e) {
      return i(o.resolve(e))
    }
    function c(r) {
      return e[n][1][r] || r
    }
    if (!r[n]) {
      if (!e[n]) {
        var l = 'function' == typeof parcelRequire && parcelRequire
        if (!t && l) return l(n, !0)
        if (u) return u(n, !0)
        if (f && 'string' == typeof n) return f(n)
        var p = new Error("Cannot find module '" + n + "'")
        throw ((p.code = 'MODULE_NOT_FOUND'), p)
      }
      o.resolve = c
      var a = (r[n] = new i.Module(n))
      e[n][0].call(a.exports, o, a, a.exports, this)
    }
    return r[n].exports
  }
  function o(e) {
    ;(this.id = e), (this.bundle = i), (this.exports = {})
  }
  var u = 'function' == typeof parcelRequire && parcelRequire,
    f = 'function' == typeof require && require
  ;(i.isParcelRequire = !0),
    (i.Module = o),
    (i.modules = e),
    (i.cache = r),
    (i.parent = u)
  for (var c = 0; c < n.length; c++) i(n[c])
  if (n.length) {
    var l = i(n[n.length - 1])
    'object' == typeof exports && 'undefined' != typeof module
      ? (module.exports = l)
      : 'function' == typeof define && define.amd
      ? define(function () {
          return l
        })
      : t && (this[t] = l)
  }
  return i
})(
  {
    13: [
      function (require, module, exports) {},
      {
        './..\\fonts\\Raleway-Bold.ttf': [
          ['Raleway-Bold.869504b8.ttf', 17],
          17
        ],
        './..\\fonts\\Raleway-Regular.ttf': [
          ['Raleway-Regular.01d802c8.ttf', 18],
          18
        ],
        './..\\background.gif': [['background.6f592102.gif', 16], 16]
      }
    ],
    55: [
      function (require, module, exports) {
        function r(r, e) {
          var n = -1,
            o = r.length
          for (e || (e = Array(o)); ++n < o; ) e[n] = r[n]
          return e
        }
        module.exports = r
      },
      {}
    ],
    75: [
      function (require, module, exports) {
        var o = Math.floor,
          r = Math.random
        function t(t, a) {
          return t + o(r() * (a - t + 1))
        }
        module.exports = t
      },
      {}
    ],
    56: [
      function (require, module, exports) {
        var r = require('./_baseRandom')
        function e(e, n) {
          var o = -1,
            a = e.length,
            t = a - 1
          for (n = void 0 === n ? a : n; ++o < n; ) {
            var u = r(o, t),
              v = e[u]
            ;(e[u] = e[o]), (e[o] = v)
          }
          return (e.length = n), e
        }
        module.exports = e
      },
      { './_baseRandom': 75 }
    ],
    34: [
      function (require, module, exports) {
        var r = require('./_copyArray'),
          e = require('./_shuffleSelf')
        function u(u) {
          return e(r(u))
        }
        module.exports = u
      },
      { './_copyArray': 55, './_shuffleSelf': 56 }
    ],
    53: [
      function (require, module, exports) {
        function r(r, n) {
          for (
            var e = -1, l = null == r ? 0 : r.length, o = Array(l);
            ++e < l;

          )
            o[e] = n(r[e], e, r)
          return o
        }
        module.exports = r
      },
      {}
    ],
    148: [
      function (require, module, exports) {
        var r = require('./_arrayMap')
        function e(e, n) {
          return r(n, function (r) {
            return e[r]
          })
        }
        module.exports = e
      },
      { './_arrayMap': 53 }
    ],
    78: [
      function (require, module, exports) {
        function r(r, o) {
          for (var e = -1, n = Array(r); ++e < r; ) n[e] = o(e)
          return n
        }
        module.exports = r
      },
      {}
    ],
    134: [
      function (require, module, exports) {
        var global = arguments[3]
        var e = arguments[3],
          t = 'object' == typeof e && e && e.Object === Object && e
        module.exports = t
      },
      {}
    ],
    109: [
      function (require, module, exports) {
        var e = require('./_freeGlobal'),
          t = 'object' == typeof self && self && self.Object === Object && self,
          l = e || t || Function('return this')()
        module.exports = l
      },
      { './_freeGlobal': 134 }
    ],
    105: [
      function (require, module, exports) {
        var o = require('./_root'),
          r = o.Symbol
        module.exports = r
      },
      { './_root': 109 }
    ],
    149: [
      function (require, module, exports) {
        var r = require('./_Symbol'),
          t = Object.prototype,
          e = t.hasOwnProperty,
          o = t.toString,
          a = r ? r.toStringTag : void 0
        function l(r) {
          var t = e.call(r, a),
            l = r[a]
          try {
            r[a] = void 0
            var c = !0
          } catch (r) {}
          var i = o.call(r)
          return c && (t ? (r[a] = l) : delete r[a]), i
        }
        module.exports = l
      },
      { './_Symbol': 105 }
    ],
    150: [
      function (require, module, exports) {
        var t = Object.prototype,
          o = t.toString
        function r(t) {
          return o.call(t)
        }
        module.exports = r
      },
      {}
    ],
    118: [
      function (require, module, exports) {
        var e = require('./_Symbol'),
          r = require('./_getRawTag'),
          o = require('./_objectToString'),
          t = '[object Null]',
          i = '[object Undefined]',
          n = e ? e.toStringTag : void 0
        function u(e) {
          return null == e
            ? void 0 === e
              ? i
              : t
            : n && n in Object(e)
            ? r(e)
            : o(e)
        }
        module.exports = u
      },
      { './_Symbol': 105, './_getRawTag': 149, './_objectToString': 150 }
    ],
    50: [
      function (require, module, exports) {
        function e(e) {
          return null != e && 'object' == typeof e
        }
        module.exports = e
      },
      {}
    ],
    106: [
      function (require, module, exports) {
        var e = require('./_baseGetTag'),
          r = require('./isObjectLike'),
          t = '[object Arguments]'
        function u(u) {
          return r(u) && e(u) == t
        }
        module.exports = u
      },
      { './_baseGetTag': 118, './isObjectLike': 50 }
    ],
    79: [
      function (require, module, exports) {
        var e = require('./_baseIsArguments'),
          r = require('./isObjectLike'),
          t = Object.prototype,
          l = t.hasOwnProperty,
          n = t.propertyIsEnumerable,
          u = e(
            (function () {
              return arguments
            })()
          )
            ? e
            : function (e) {
                return r(e) && l.call(e, 'callee') && !n.call(e, 'callee')
              }
        module.exports = u
      },
      { './_baseIsArguments': 106, './isObjectLike': 50 }
    ],
    33: [
      function (require, module, exports) {
        var r = Array.isArray
        module.exports = r
      },
      {}
    ],
    108: [
      function (require, module, exports) {
        function e() {
          return !1
        }
        module.exports = e
      },
      {}
    ],
    80: [
      function (require, module, exports) {
        var e = require('./_root'),
          o = require('./stubFalse'),
          r =
            'object' == typeof exports &&
            exports &&
            !exports.nodeType &&
            exports,
          t =
            r &&
            'object' == typeof module &&
            module &&
            !module.nodeType &&
            module,
          p = t && t.exports === r,
          u = p ? e.Buffer : void 0,
          d = u ? u.isBuffer : void 0,
          s = d || o
        module.exports = s
      },
      { './_root': 109, './stubFalse': 108 }
    ],
    81: [
      function (require, module, exports) {
        var e = 9007199254740991,
          r = /^(?:0|[1-9]\d*)$/
        function t(t, n) {
          var o = typeof t
          return (
            !!(n = null == n ? e : n) &&
            ('number' == o || ('symbol' != o && r.test(t))) &&
            t > -1 &&
            t % 1 == 0 &&
            t < n
          )
        }
        module.exports = t
      },
      {}
    ],
    97: [
      function (require, module, exports) {
        var e = 9007199254740991
        function r(r) {
          return 'number' == typeof r && r > -1 && r % 1 == 0 && r <= e
        }
        module.exports = r
      },
      {}
    ],
    110: [
      function (require, module, exports) {
        var e = require('./_baseGetTag'),
          t = require('./isLength'),
          r = require('./isObjectLike'),
          o = '[object Arguments]',
          b = '[object Array]',
          c = '[object Boolean]',
          j = '[object Date]',
          a = '[object Error]',
          n = '[object Function]',
          i = '[object Map]',
          A = '[object Number]',
          y = '[object Object]',
          u = '[object RegExp]',
          g = '[object Set]',
          l = '[object String]',
          p = '[object WeakMap]',
          s = '[object ArrayBuffer]',
          m = '[object DataView]',
          U = '[object Float32Array]',
          f = '[object Float64Array]',
          q = '[object Int8Array]',
          F = '[object Int16Array]',
          I = '[object Int32Array]',
          d = '[object Uint8Array]',
          h = '[object Uint8ClampedArray]',
          k = '[object Uint16Array]',
          x = '[object Uint32Array]',
          B = {}
        function D(o) {
          return r(o) && t(o.length) && !!B[e(o)]
        }
        ;(B[U] = B[f] = B[q] = B[F] = B[I] = B[d] = B[h] = B[k] = B[x] = !0),
          (B[o] =
            B[b] =
            B[s] =
            B[c] =
            B[m] =
            B[j] =
            B[a] =
            B[n] =
            B[i] =
            B[A] =
            B[y] =
            B[u] =
            B[g] =
            B[l] =
            B[p] =
              !1),
          (module.exports = D)
      },
      { './_baseGetTag': 118, './isLength': 97, './isObjectLike': 50 }
    ],
    54: [
      function (require, module, exports) {
        function n(n) {
          return function (r) {
            return n(r)
          }
        }
        module.exports = n
      },
      {}
    ],
    111: [
      function (require, module, exports) {
        var e = require('./_freeGlobal'),
          o =
            'object' == typeof exports &&
            exports &&
            !exports.nodeType &&
            exports,
          r =
            o &&
            'object' == typeof module &&
            module &&
            !module.nodeType &&
            module,
          t = r && r.exports === o,
          p = t && e.process,
          u = (function () {
            try {
              var e = r && r.require && r.require('util').types
              return e || (p && p.binding && p.binding('util'))
            } catch (e) {}
          })()
        module.exports = u
      },
      { './_freeGlobal': 134 }
    ],
    82: [
      function (require, module, exports) {
        var e = require('./_baseIsTypedArray'),
          r = require('./_baseUnary'),
          a = require('./_nodeUtil'),
          i = a && a.isTypedArray,
          s = i ? r(i) : e
        module.exports = s
      },
      { './_baseIsTypedArray': 110, './_baseUnary': 54, './_nodeUtil': 111 }
    ],
    60: [
      function (require, module, exports) {
        var e = require('./_baseTimes'),
          r = require('./isArguments'),
          t = require('./isArray'),
          i = require('./isBuffer'),
          n = require('./_isIndex'),
          s = require('./isTypedArray'),
          u = Object.prototype,
          f = u.hasOwnProperty
        function a(u, a) {
          var o = t(u),
            p = !o && r(u),
            y = !o && !p && i(u),
            g = !o && !p && !y && s(u),
            h = o || p || y || g,
            l = h ? e(u.length, String) : [],
            q = l.length
          for (var b in u)
            (!a && !f.call(u, b)) ||
              (h &&
                ('length' == b ||
                  (y && ('offset' == b || 'parent' == b)) ||
                  (g &&
                    ('buffer' == b ||
                      'byteLength' == b ||
                      'byteOffset' == b)) ||
                  n(b, q))) ||
              l.push(b)
          return l
        }
        module.exports = a
      },
      {
        './_baseTimes': 78,
        './isArguments': 79,
        './isArray': 33,
        './isBuffer': 80,
        './_isIndex': 81,
        './isTypedArray': 82
      }
    ],
    83: [
      function (require, module, exports) {
        var t = Object.prototype
        function o(o) {
          var r = o && o.constructor
          return o === (('function' == typeof r && r.prototype) || t)
        }
        module.exports = o
      },
      {}
    ],
    116: [
      function (require, module, exports) {
        function n(n, r) {
          return function (t) {
            return n(r(t))
          }
        }
        module.exports = n
      },
      {}
    ],
    84: [
      function (require, module, exports) {
        var e = require('./_overArg'),
          r = e(Object.keys, Object)
        module.exports = r
      },
      { './_overArg': 116 }
    ],
    61: [
      function (require, module, exports) {
        var r = require('./_isPrototype'),
          e = require('./_nativeKeys'),
          t = Object.prototype,
          o = t.hasOwnProperty
        function n(t) {
          if (!r(t)) return e(t)
          var n = []
          for (var u in Object(t))
            o.call(t, u) && 'constructor' != u && n.push(u)
          return n
        }
        module.exports = n
      },
      { './_isPrototype': 83, './_nativeKeys': 84 }
    ],
    98: [
      function (require, module, exports) {
        function n(n) {
          var o = typeof n
          return null != n && ('object' == o || 'function' == o)
        }
        module.exports = n
      },
      {}
    ],
    96: [
      function (require, module, exports) {
        var e = require('./_baseGetTag'),
          r = require('./isObject'),
          t = '[object AsyncFunction]',
          n = '[object Function]',
          o = '[object GeneratorFunction]',
          c = '[object Proxy]'
        function u(u) {
          if (!r(u)) return !1
          var i = e(u)
          return i == n || i == o || i == t || i == c
        }
        module.exports = u
      },
      { './_baseGetTag': 118, './isObject': 98 }
    ],
    38: [
      function (require, module, exports) {
        var e = require('./isFunction'),
          n = require('./isLength')
        function r(r) {
          return null != r && n(r.length) && !e(r)
        }
        module.exports = r
      },
      { './isFunction': 96, './isLength': 97 }
    ],
    37: [
      function (require, module, exports) {
        var e = require('./_arrayLikeKeys'),
          r = require('./_baseKeys'),
          i = require('./isArrayLike')
        function u(u) {
          return i(u) ? e(u) : r(u)
        }
        module.exports = u
      },
      { './_arrayLikeKeys': 60, './_baseKeys': 61, './isArrayLike': 38 }
    ],
    107: [
      function (require, module, exports) {
        var e = require('./_baseValues'),
          r = require('./keys')
        function u(u) {
          return null == u ? [] : e(u, r(u))
        }
        module.exports = u
      },
      { './_baseValues': 148, './keys': 37 }
    ],
    35: [
      function (require, module, exports) {
        var e = require('./_shuffleSelf'),
          r = require('./values')
        function u(u) {
          return e(r(u))
        }
        module.exports = u
      },
      { './_shuffleSelf': 56, './values': 107 }
    ],
    25: [
      function (require, module, exports) {
        var r = require('./_arrayShuffle'),
          e = require('./_baseShuffle'),
          u = require('./isArray')
        function a(a) {
          return (u(a) ? r : e)(a)
        }
        module.exports = a
      },
      { './_arrayShuffle': 34, './_baseShuffle': 35, './isArray': 33 }
    ],
    170: [
      function (require, module, exports) {
        var r = require('./_root'),
          e = r['__core-js_shared__']
        module.exports = e
      },
      { './_root': 109 }
    ],
    166: [
      function (require, module, exports) {
        var e = require('./_coreJsData'),
          r = (function () {
            var r = /[^.]+$/.exec((e && e.keys && e.keys.IE_PROTO) || '')
            return r ? 'Symbol(src)_1.' + r : ''
          })()
        function n(e) {
          return !!r && r in e
        }
        module.exports = n
      },
      { './_coreJsData': 170 }
    ],
    162: [
      function (require, module, exports) {
        var t = Function.prototype,
          r = t.toString
        function n(t) {
          if (null != t) {
            try {
              return r.call(t)
            } catch (t) {}
            try {
              return t + ''
            } catch (t) {}
          }
          return ''
        }
        module.exports = n
      },
      {}
    ],
    151: [
      function (require, module, exports) {
        var e = require('./isFunction'),
          r = require('./_isMasked'),
          t = require('./isObject'),
          o = require('./_toSource'),
          n = /[\\^$.*+?()[\]{}|]/g,
          c = /^\[object .+?Constructor\]$/,
          i = Function.prototype,
          u = Object.prototype,
          p = i.toString,
          s = u.hasOwnProperty,
          a = RegExp(
            '^' +
              p
                .call(s)
                .replace(n, '\\$&')
                .replace(
                  /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                  '$1.*?'
                ) +
              '$'
          )
        function l(n) {
          return !(!t(n) || r(n)) && (e(n) ? a : c).test(o(n))
        }
        module.exports = l
      },
      {
        './isFunction': 96,
        './_isMasked': 166,
        './isObject': 98,
        './_toSource': 162
      }
    ],
    152: [
      function (require, module, exports) {
        function n(n, o) {
          return null == n ? void 0 : n[o]
        }
        module.exports = n
      },
      {}
    ],
    125: [
      function (require, module, exports) {
        var e = require('./_baseIsNative'),
          r = require('./_getValue')
        function u(u, a) {
          var i = r(u, a)
          return e(i) ? i : void 0
        }
        module.exports = u
      },
      { './_baseIsNative': 151, './_getValue': 152 }
    ],
    155: [
      function (require, module, exports) {
        var e = require('./_getNative'),
          r = e(Object, 'create')
        module.exports = r
      },
      { './_getNative': 125 }
    ],
    135: [
      function (require, module, exports) {
        var e = require('./_nativeCreate')
        function t() {
          ;(this.__data__ = e ? e(null) : {}), (this.size = 0)
        }
        module.exports = t
      },
      { './_nativeCreate': 155 }
    ],
    136: [
      function (require, module, exports) {
        function t(t) {
          var e = this.has(t) && delete this.__data__[t]
          return (this.size -= e ? 1 : 0), e
        }
        module.exports = t
      },
      {}
    ],
    137: [
      function (require, module, exports) {
        var e = require('./_nativeCreate'),
          r = '__lodash_hash_undefined__',
          t = Object.prototype,
          a = t.hasOwnProperty
        function _(t) {
          var _ = this.__data__
          if (e) {
            var o = _[t]
            return o === r ? void 0 : o
          }
          return a.call(_, t) ? _[t] : void 0
        }
        module.exports = _
      },
      { './_nativeCreate': 155 }
    ],
    138: [
      function (require, module, exports) {
        var e = require('./_nativeCreate'),
          r = Object.prototype,
          t = r.hasOwnProperty
        function a(r) {
          var a = this.__data__
          return e ? void 0 !== a[r] : t.call(a, r)
        }
        module.exports = a
      },
      { './_nativeCreate': 155 }
    ],
    139: [
      function (require, module, exports) {
        var e = require('./_nativeCreate'),
          _ = '__lodash_hash_undefined__'
        function i(i, t) {
          var a = this.__data__
          return (
            (this.size += this.has(i) ? 0 : 1),
            (a[i] = e && void 0 === t ? _ : t),
            this
          )
        }
        module.exports = i
      },
      { './_nativeCreate': 155 }
    ],
    112: [
      function (require, module, exports) {
        var e = require('./_hashClear'),
          r = require('./_hashDelete'),
          t = require('./_hashGet'),
          h = require('./_hashHas'),
          o = require('./_hashSet')
        function a(e) {
          var r = -1,
            t = null == e ? 0 : e.length
          for (this.clear(); ++r < t; ) {
            var h = e[r]
            this.set(h[0], h[1])
          }
        }
        ;(a.prototype.clear = e),
          (a.prototype.delete = r),
          (a.prototype.get = t),
          (a.prototype.has = h),
          (a.prototype.set = o),
          (module.exports = a)
      },
      {
        './_hashClear': 135,
        './_hashDelete': 136,
        './_hashGet': 137,
        './_hashHas': 138,
        './_hashSet': 139
      }
    ],
    140: [
      function (require, module, exports) {
        function t() {
          ;(this.__data__ = []), (this.size = 0)
        }
        module.exports = t
      },
      {}
    ],
    157: [
      function (require, module, exports) {
        function e(e, n) {
          return e === n || (e != e && n != n)
        }
        module.exports = e
      },
      {}
    ],
    163: [
      function (require, module, exports) {
        var r = require('./eq')
        function e(e, n) {
          for (var t = e.length; t--; ) if (r(e[t][0], n)) return t
          return -1
        }
        module.exports = e
      },
      { './eq': 157 }
    ],
    141: [
      function (require, module, exports) {
        var e = require('./_assocIndexOf'),
          r = Array.prototype,
          t = r.splice
        function a(r) {
          var a = this.__data__,
            o = e(a, r)
          return (
            !(o < 0) &&
            (o == a.length - 1 ? a.pop() : t.call(a, o, 1), --this.size, !0)
          )
        }
        module.exports = a
      },
      { './_assocIndexOf': 163 }
    ],
    142: [
      function (require, module, exports) {
        var r = require('./_assocIndexOf')
        function e(e) {
          var a = this.__data__,
            o = r(a, e)
          return o < 0 ? void 0 : a[o][1]
        }
        module.exports = e
      },
      { './_assocIndexOf': 163 }
    ],
    143: [
      function (require, module, exports) {
        var e = require('./_assocIndexOf')
        function r(r) {
          return e(this.__data__, r) > -1
        }
        module.exports = r
      },
      { './_assocIndexOf': 163 }
    ],
    144: [
      function (require, module, exports) {
        var s = require('./_assocIndexOf')
        function e(e, r) {
          var t = this.__data__,
            i = s(t, e)
          return i < 0 ? (++this.size, t.push([e, r])) : (t[i][1] = r), this
        }
        module.exports = e
      },
      { './_assocIndexOf': 163 }
    ],
    113: [
      function (require, module, exports) {
        var e = require('./_listCacheClear'),
          t = require('./_listCacheDelete'),
          r = require('./_listCacheGet'),
          l = require('./_listCacheHas'),
          o = require('./_listCacheSet')
        function a(e) {
          var t = -1,
            r = null == e ? 0 : e.length
          for (this.clear(); ++t < r; ) {
            var l = e[t]
            this.set(l[0], l[1])
          }
        }
        ;(a.prototype.clear = e),
          (a.prototype.delete = t),
          (a.prototype.get = r),
          (a.prototype.has = l),
          (a.prototype.set = o),
          (module.exports = a)
      },
      {
        './_listCacheClear': 140,
        './_listCacheDelete': 141,
        './_listCacheGet': 142,
        './_listCacheHas': 143,
        './_listCacheSet': 144
      }
    ],
    114: [
      function (require, module, exports) {
        var e = require('./_getNative'),
          r = require('./_root'),
          o = e(r, 'Map')
        module.exports = o
      },
      { './_getNative': 125, './_root': 109 }
    ],
    85: [
      function (require, module, exports) {
        var e = require('./_Hash'),
          i = require('./_ListCache'),
          r = require('./_Map')
        function a() {
          ;(this.size = 0),
            (this.__data__ = {
              hash: new e(),
              map: new (r || i)(),
              string: new e()
            })
        }
        module.exports = a
      },
      { './_Hash': 112, './_ListCache': 113, './_Map': 114 }
    ],
    145: [
      function (require, module, exports) {
        function o(o) {
          var n = typeof o
          return 'string' == n ||
            'number' == n ||
            'symbol' == n ||
            'boolean' == n
            ? '__proto__' !== o
            : null === o
        }
        module.exports = o
      },
      {}
    ],
    115: [
      function (require, module, exports) {
        var r = require('./_isKeyable')
        function e(e, a) {
          var t = e.__data__
          return r(a) ? t['string' == typeof a ? 'string' : 'hash'] : t.map
        }
        module.exports = e
      },
      { './_isKeyable': 145 }
    ],
    86: [
      function (require, module, exports) {
        var e = require('./_getMapData')
        function t(t) {
          var r = e(this, t).delete(t)
          return (this.size -= r ? 1 : 0), r
        }
        module.exports = t
      },
      { './_getMapData': 115 }
    ],
    87: [
      function (require, module, exports) {
        var e = require('./_getMapData')
        function t(t) {
          return e(this, t).get(t)
        }
        module.exports = t
      },
      { './_getMapData': 115 }
    ],
    88: [
      function (require, module, exports) {
        var e = require('./_getMapData')
        function r(r) {
          return e(this, r).has(r)
        }
        module.exports = r
      },
      { './_getMapData': 115 }
    ],
    89: [
      function (require, module, exports) {
        var e = require('./_getMapData')
        function t(t, i) {
          var s = e(this, t),
            r = s.size
          return s.set(t, i), (this.size += s.size == r ? 0 : 1), this
        }
        module.exports = t
      },
      { './_getMapData': 115 }
    ],
    62: [
      function (require, module, exports) {
        var e = require('./_mapCacheClear'),
          r = require('./_mapCacheDelete'),
          t = require('./_mapCacheGet'),
          a = require('./_mapCacheHas'),
          p = require('./_mapCacheSet')
        function o(e) {
          var r = -1,
            t = null == e ? 0 : e.length
          for (this.clear(); ++r < t; ) {
            var a = e[r]
            this.set(a[0], a[1])
          }
        }
        ;(o.prototype.clear = e),
          (o.prototype.delete = r),
          (o.prototype.get = t),
          (o.prototype.has = a),
          (o.prototype.set = p),
          (module.exports = o)
      },
      {
        './_mapCacheClear': 85,
        './_mapCacheDelete': 86,
        './_mapCacheGet': 87,
        './_mapCacheHas': 88,
        './_mapCacheSet': 89
      }
    ],
    63: [
      function (require, module, exports) {
        var _ = '__lodash_hash_undefined__'
        function t(t) {
          return this.__data__.set(t, _), this
        }
        module.exports = t
      },
      {}
    ],
    64: [
      function (require, module, exports) {
        function t(t) {
          return this.__data__.has(t)
        }
        module.exports = t
      },
      {}
    ],
    41: [
      function (require, module, exports) {
        var e = require('./_MapCache'),
          t = require('./_setCacheAdd'),
          r = require('./_setCacheHas')
        function a(t) {
          var r = -1,
            a = null == t ? 0 : t.length
          for (this.__data__ = new e(); ++r < a; ) this.add(t[r])
        }
        ;(a.prototype.add = a.prototype.push = t),
          (a.prototype.has = r),
          (module.exports = a)
      },
      { './_MapCache': 62, './_setCacheAdd': 63, './_setCacheHas': 64 }
    ],
    39: [
      function (require, module, exports) {
        function r(r, e, n, t) {
          for (var o = r.length, u = n + (t ? 1 : -1); t ? u-- : ++u < o; )
            if (e(r[u], u, r)) return u
          return -1
        }
        module.exports = r
      },
      {}
    ],
    132: [
      function (require, module, exports) {
        function e(e) {
          return e != e
        }
        module.exports = e
      },
      {}
    ],
    133: [
      function (require, module, exports) {
        function r(r, e, n) {
          for (var t = n - 1, o = r.length; ++t < o; ) if (r[t] === e) return t
          return -1
        }
        module.exports = r
      },
      {}
    ],
    99: [
      function (require, module, exports) {
        var e = require('./_baseFindIndex'),
          r = require('./_baseIsNaN'),
          i = require('./_strictIndexOf')
        function n(n, u, s) {
          return u == u ? i(n, u, s) : e(n, r, s)
        }
        module.exports = n
      },
      { './_baseFindIndex': 39, './_baseIsNaN': 132, './_strictIndexOf': 133 }
    ],
    42: [
      function (require, module, exports) {
        var e = require('./_baseIndexOf')
        function n(n, r) {
          return !!(null == n ? 0 : n.length) && e(n, r, 0) > -1
        }
        module.exports = n
      },
      { './_baseIndexOf': 99 }
    ],
    44: [
      function (require, module, exports) {
        function r(r, n, e) {
          for (var t = -1, u = null == r ? 0 : r.length; ++t < u; )
            if (e(n, r[t])) return !0
          return !1
        }
        module.exports = r
      },
      {}
    ],
    43: [
      function (require, module, exports) {
        function e(e, n) {
          return e.has(n)
        }
        module.exports = e
      },
      {}
    ],
    101: [
      function (require, module, exports) {
        var e = require('./_getNative'),
          r = require('./_root'),
          t = e(r, 'Set')
        module.exports = t
      },
      { './_getNative': 125, './_root': 109 }
    ],
    102: [
      function (require, module, exports) {
        function o() {}
        module.exports = o
      },
      {}
    ],
    46: [
      function (require, module, exports) {
        function r(r) {
          var n = -1,
            o = Array(r.size)
          return (
            r.forEach(function (r) {
              o[++n] = r
            }),
            o
          )
        }
        module.exports = r
      },
      {}
    ],
    45: [
      function (require, module, exports) {
        var e = require('./_Set'),
          r = require('./noop'),
          n = require('./_setToArray'),
          o = 1 / 0,
          u =
            e && 1 / n(new e([, -0]))[1] == o
              ? function (r) {
                  return new e(r)
                }
              : r
        module.exports = u
      },
      { './_Set': 101, './noop': 102, './_setToArray': 46 }
    ],
    28: [
      function (require, module, exports) {
        var e = require('./_SetCache'),
          r = require('./_arrayIncludes'),
          u = require('./_arrayIncludesWith'),
          a = require('./_cacheHas'),
          i = require('./_createSet'),
          n = require('./_setToArray'),
          s = 200
        function t(t, l, h) {
          var c = -1,
            f = r,
            o = t.length,
            q = !0,
            _ = [],
            p = _
          if (h) (q = !1), (f = u)
          else if (o >= s) {
            var v = l ? null : i(t)
            if (v) return n(v)
            ;(q = !1), (f = a), (p = new e())
          } else p = l ? [] : _
          e: for (; ++c < o; ) {
            var d = t[c],
              y = l ? l(d) : d
            if (((d = h || 0 !== d ? d : 0), q && y == y)) {
              for (var g = p.length; g--; ) if (p[g] === y) continue e
              l && p.push(y), _.push(d)
            } else f(p, y, h) || (p !== _ && p.push(y), _.push(d))
          }
          return _
        }
        module.exports = t
      },
      {
        './_SetCache': 41,
        './_arrayIncludes': 42,
        './_arrayIncludesWith': 44,
        './_cacheHas': 43,
        './_createSet': 45,
        './_setToArray': 46
      }
    ],
    24: [
      function (require, module, exports) {
        var e = require('./_baseUniq')
        function r(r) {
          return r && r.length ? e(r) : []
        }
        module.exports = r
      },
      { './_baseUniq': 28 }
    ],
    32: [
      function (require, module, exports) {
        var r = require('./_SetCache'),
          e = require('./_arrayIncludes'),
          a = require('./_arrayIncludesWith'),
          u = require('./_arrayMap'),
          n = require('./_baseUnary'),
          i = require('./_cacheHas'),
          t = 200
        function l(l, h, s, c) {
          var f = -1,
            o = e,
            q = !0,
            _ = l.length,
            p = [],
            v = h.length
          if (!_) return p
          s && (h = u(h, n(s))),
            c
              ? ((o = a), (q = !1))
              : h.length >= t && ((o = i), (q = !1), (h = new r(h)))
          r: for (; ++f < _; ) {
            var y = l[f],
              d = null == s ? y : s(y)
            if (((y = c || 0 !== y ? y : 0), q && d == d)) {
              for (var g = v; g--; ) if (h[g] === d) continue r
              p.push(y)
            } else o(h, d, c) || p.push(y)
          }
          return p
        }
        module.exports = l
      },
      {
        './_SetCache': 41,
        './_arrayIncludes': 42,
        './_arrayIncludesWith': 44,
        './_arrayMap': 53,
        './_baseUnary': 54,
        './_cacheHas': 43
      }
    ],
    51: [
      function (require, module, exports) {
        function e(e, n) {
          for (var r = -1, t = n.length, o = e.length; ++r < t; )
            e[o + r] = n[r]
          return e
        }
        module.exports = e
      },
      {}
    ],
    52: [
      function (require, module, exports) {
        var r = require('./_Symbol'),
          e = require('./isArguments'),
          i = require('./isArray'),
          u = r ? r.isConcatSpreadable : void 0
        function o(r) {
          return i(r) || e(r) || !!(u && r && r[u])
        }
        module.exports = o
      },
      { './_Symbol': 105, './isArguments': 79, './isArray': 33 }
    ],
    31: [
      function (require, module, exports) {
        var r = require('./_arrayPush'),
          e = require('./_isFlattenable')
        function a(t, n, u, l, i) {
          var o = -1,
            h = t.length
          for (u || (u = e), i || (i = []); ++o < h; ) {
            var s = t[o]
            n > 0 && u(s)
              ? n > 1
                ? a(s, n - 1, u, l, i)
                : r(i, s)
              : l || (i[i.length] = s)
          }
          return i
        }
        module.exports = a
      },
      { './_arrayPush': 51, './_isFlattenable': 52 }
    ],
    47: [
      function (require, module, exports) {
        function e(e) {
          return e
        }
        module.exports = e
      },
      {}
    ],
    65: [
      function (require, module, exports) {
        function e(e, l, r) {
          switch (r.length) {
            case 0:
              return e.call(l)
            case 1:
              return e.call(l, r[0])
            case 2:
              return e.call(l, r[0], r[1])
            case 3:
              return e.call(l, r[0], r[1], r[2])
          }
          return e.apply(l, r)
        }
        module.exports = e
      },
      {}
    ],
    48: [
      function (require, module, exports) {
        var r = require('./_apply'),
          t = Math.max
        function a(a, e, n) {
          return (
            (e = t(void 0 === e ? a.length - 1 : e, 0)),
            function () {
              for (
                var o = arguments, u = -1, i = t(o.length - e, 0), f = Array(i);
                ++u < i;

              )
                f[u] = o[e + u]
              u = -1
              for (var h = Array(e + 1); ++u < e; ) h[u] = o[u]
              return (h[e] = n(f)), r(a, this, h)
            }
          )
        }
        module.exports = a
      },
      { './_apply': 65 }
    ],
    130: [
      function (require, module, exports) {
        function n(n) {
          return function () {
            return n
          }
        }
        module.exports = n
      },
      {}
    ],
    131: [
      function (require, module, exports) {
        var e = require('./_getNative'),
          r = (function () {
            try {
              var r = e(Object, 'defineProperty')
              return r({}, '', {}), r
            } catch (e) {}
          })()
        module.exports = r
      },
      { './_getNative': 125 }
    ],
    103: [
      function (require, module, exports) {
        var e = require('./constant'),
          r = require('./_defineProperty'),
          t = require('./identity'),
          i = r
            ? function (t, i) {
                return r(t, 'toString', {
                  configurable: !0,
                  enumerable: !1,
                  value: e(i),
                  writable: !0
                })
              }
            : t
        module.exports = i
      },
      { './constant': 130, './_defineProperty': 131, './identity': 47 }
    ],
    104: [
      function (require, module, exports) {
        var r = 800,
          e = 16,
          n = Date.now
        function t(t) {
          var o = 0,
            u = 0
          return function () {
            var a = n(),
              i = e - (a - u)
            if (((u = a), i > 0)) {
              if (++o >= r) return arguments[0]
            } else o = 0
            return t.apply(void 0, arguments)
          }
        }
        module.exports = t
      },
      {}
    ],
    49: [
      function (require, module, exports) {
        var e = require('./_baseSetToString'),
          r = require('./_shortOut'),
          t = r(e)
        module.exports = t
      },
      { './_baseSetToString': 103, './_shortOut': 104 }
    ],
    29: [
      function (require, module, exports) {
        var e = require('./identity'),
          r = require('./_overRest'),
          t = require('./_setToString')
        function i(i, u) {
          return t(r(i, u, e), i + '')
        }
        module.exports = i
      },
      { './identity': 47, './_overRest': 48, './_setToString': 49 }
    ],
    30: [
      function (require, module, exports) {
        var e = require('./isArrayLike'),
          r = require('./isObjectLike')
        function i(i) {
          return r(i) && e(i)
        }
        module.exports = i
      },
      { './isArrayLike': 38, './isObjectLike': 50 }
    ],
    23: [
      function (require, module, exports) {
        var e = require('./_baseDifference'),
          r = require('./_baseFlatten'),
          i = require('./_baseRest'),
          t = require('./isArrayLikeObject'),
          u = i(function (i, u) {
            return t(i) ? e(i, r(u, 1, t, !0)) : []
          })
        module.exports = u
      },
      {
        './_baseDifference': 32,
        './_baseFlatten': 31,
        './_baseRest': 29,
        './isArrayLikeObject': 30
      }
    ],
    119: [
      function (require, module, exports) {
        var e = require('./_ListCache')
        function i() {
          ;(this.__data__ = new e()), (this.size = 0)
        }
        module.exports = i
      },
      { './_ListCache': 113 }
    ],
    120: [
      function (require, module, exports) {
        function e(e) {
          var t = this.__data__,
            i = t.delete(e)
          return (this.size = t.size), i
        }
        module.exports = e
      },
      {}
    ],
    121: [
      function (require, module, exports) {
        function t(t) {
          return this.__data__.get(t)
        }
        module.exports = t
      },
      {}
    ],
    123: [
      function (require, module, exports) {
        var e = require('./_ListCache'),
          i = require('./_Map'),
          t = require('./_MapCache'),
          s = 200
        function _(_, a) {
          var r = this.__data__
          if (r instanceof e) {
            var h = r.__data__
            if (!i || h.length < s - 1)
              return h.push([_, a]), (this.size = ++r.size), this
            r = this.__data__ = new t(h)
          }
          return r.set(_, a), (this.size = r.size), this
        }
        module.exports = _
      },
      { './_ListCache': 113, './_Map': 114, './_MapCache': 62 }
    ],
    90: [
      function (require, module, exports) {
        var e = require('./_ListCache'),
          t = require('./_stackClear'),
          r = require('./_stackDelete'),
          a = require('./_stackGet'),
          s = require('./_stackHas'),
          o = require('./_stackSet')
        function i(t) {
          var r = (this.__data__ = new e(t))
          this.size = r.size
        }
        ;(i.prototype.clear = t),
          (i.prototype.delete = r),
          (i.prototype.get = a),
          (i.prototype.has = s),
          (i.prototype.set = o),
          (module.exports = i)
      },
      {
        './_ListCache': 113,
        './_stackClear': 119,
        './_stackDelete': 120,
        './_stackGet': 121,
        './_stackHas': 64,
        './_stackSet': 123
      }
    ],
    153: [
      function (require, module, exports) {
        function r(r, n) {
          for (var e = -1, t = null == r ? 0 : r.length; ++e < t; )
            if (n(r[e], e, r)) return !0
          return !1
        }
        module.exports = r
      },
      {}
    ],
    126: [
      function (require, module, exports) {
        var e = require('./_SetCache'),
          r = require('./_arraySome'),
          i = require('./_cacheHas'),
          t = 1,
          a = 2
        function n(n, f, u, o, v, c) {
          var l = u & t,
            s = n.length,
            d = f.length
          if (s != d && !(l && d > s)) return !1
          var h = c.get(n)
          if (h && c.get(f)) return h == f
          var g = -1,
            b = !0,
            k = u & a ? new e() : void 0
          for (c.set(n, f), c.set(f, n); ++g < s; ) {
            var q = n[g],
              _ = f[g]
            if (o) var m = l ? o(_, q, g, f, n, c) : o(q, _, g, n, f, c)
            if (void 0 !== m) {
              if (m) continue
              b = !1
              break
            }
            if (k) {
              if (
                !r(f, function (e, r) {
                  if (!i(k, r) && (q === e || v(q, e, u, o, c)))
                    return k.push(r)
                })
              ) {
                b = !1
                break
              }
            } else if (q !== _ && !v(q, _, u, o, c)) {
              b = !1
              break
            }
          }
          return c.delete(n), c.delete(f), b
        }
        module.exports = n
      },
      { './_SetCache': 41, './_arraySome': 153, './_cacheHas': 43 }
    ],
    156: [
      function (require, module, exports) {
        var r = require('./_root'),
          e = r.Uint8Array
        module.exports = e
      },
      { './_root': 109 }
    ],
    158: [
      function (require, module, exports) {
        function r(r) {
          var n = -1,
            o = Array(r.size)
          return (
            r.forEach(function (r, e) {
              o[++n] = [e, r]
            }),
            o
          )
        }
        module.exports = r
      },
      {}
    ],
    128: [
      function (require, module, exports) {
        var e = require('./_Symbol'),
          r = require('./_Uint8Array'),
          t = require('./eq'),
          a = require('./_equalArrays'),
          c = require('./_mapToArray'),
          o = require('./_setToArray'),
          s = 1,
          u = 2,
          n = '[object Boolean]',
          b = '[object Date]',
          i = '[object Error]',
          f = '[object Map]',
          y = '[object Number]',
          j = '[object RegExp]',
          l = '[object Set]',
          g = '[object String]',
          m = '[object Symbol]',
          q = '[object ArrayBuffer]',
          v = '[object DataView]',
          p = e ? e.prototype : void 0,
          h = p ? p.valueOf : void 0
        function A(e, p, A, _, d, w, L) {
          switch (A) {
            case v:
              if (e.byteLength != p.byteLength || e.byteOffset != p.byteOffset)
                return !1
              ;(e = e.buffer), (p = p.buffer)
            case q:
              return !(e.byteLength != p.byteLength || !w(new r(e), new r(p)))
            case n:
            case b:
            case y:
              return t(+e, +p)
            case i:
              return e.name == p.name && e.message == p.message
            case j:
            case g:
              return e == p + ''
            case f:
              var S = c
            case l:
              var O = _ & s
              if ((S || (S = o), e.size != p.size && !O)) return !1
              var x = L.get(e)
              if (x) return x == p
              ;(_ |= u), L.set(e, p)
              var z = a(S(e), S(p), _, d, w, L)
              return L.delete(e), z
            case m:
              if (h) return h.call(e) == h.call(p)
          }
          return !1
        }
        module.exports = A
      },
      {
        './_Symbol': 105,
        './_Uint8Array': 156,
        './eq': 157,
        './_equalArrays': 126,
        './_mapToArray': 158,
        './_setToArray': 46
      }
    ],
    168: [
      function (require, module, exports) {
        var r = require('./_arrayPush'),
          e = require('./isArray')
        function u(u, a, i) {
          var n = a(u)
          return e(u) ? n : r(n, i(u))
        }
        module.exports = u
      },
      { './_arrayPush': 51, './isArray': 33 }
    ],
    171: [
      function (require, module, exports) {
        function r(r, n) {
          for (
            var e = -1, l = null == r ? 0 : r.length, o = 0, t = [];
            ++e < l;

          ) {
            var u = r[e]
            n(u, e, r) && (t[o++] = u)
          }
          return t
        }
        module.exports = r
      },
      {}
    ],
    172: [
      function (require, module, exports) {
        function e() {
          return []
        }
        module.exports = e
      },
      {}
    ],
    167: [
      function (require, module, exports) {
        var r = require('./_arrayFilter'),
          e = require('./stubArray'),
          t = Object.prototype,
          u = t.propertyIsEnumerable,
          n = Object.getOwnPropertySymbols,
          o = n
            ? function (e) {
                return null == e
                  ? []
                  : ((e = Object(e)),
                    r(n(e), function (r) {
                      return u.call(e, r)
                    }))
              }
            : e
        module.exports = o
      },
      { './_arrayFilter': 171, './stubArray': 172 }
    ],
    154: [
      function (require, module, exports) {
        var e = require('./_baseGetAllKeys'),
          r = require('./_getSymbols'),
          u = require('./keys')
        function s(s) {
          return e(s, u, r)
        }
        module.exports = s
      },
      { './_baseGetAllKeys': 168, './_getSymbols': 167, './keys': 37 }
    ],
    127: [
      function (require, module, exports) {
        var r = require('./_getAllKeys'),
          t = 1,
          e = Object.prototype,
          n = e.hasOwnProperty
        function o(e, o, c, i, a, f) {
          var u = c & t,
            s = r(e),
            v = s.length
          if (v != r(o).length && !u) return !1
          for (var l = v; l--; ) {
            var p = s[l]
            if (!(u ? p in o : n.call(o, p))) return !1
          }
          var g = f.get(e)
          if (g && f.get(o)) return g == o
          var y = !0
          f.set(e, o), f.set(o, e)
          for (var d = u; ++l < v; ) {
            var h = e[(p = s[l])],
              b = o[p]
            if (i) var O = u ? i(b, h, p, o, e, f) : i(h, b, p, e, o, f)
            if (!(void 0 === O ? h === b || a(h, b, c, i, f) : O)) {
              y = !1
              break
            }
            d || (d = 'constructor' == p)
          }
          if (y && !d) {
            var j = e.constructor,
              k = o.constructor
            j != k &&
              'constructor' in e &&
              'constructor' in o &&
              !(
                'function' == typeof j &&
                j instanceof j &&
                'function' == typeof k &&
                k instanceof k
              ) &&
              (y = !1)
          }
          return f.delete(e), f.delete(o), y
        }
        module.exports = o
      },
      { './_getAllKeys': 154 }
    ],
    159: [
      function (require, module, exports) {
        var e = require('./_getNative'),
          r = require('./_root'),
          t = e(r, 'DataView')
        module.exports = t
      },
      { './_getNative': 125, './_root': 109 }
    ],
    160: [
      function (require, module, exports) {
        var e = require('./_getNative'),
          r = require('./_root'),
          o = e(r, 'Promise')
        module.exports = o
      },
      { './_getNative': 125, './_root': 109 }
    ],
    161: [
      function (require, module, exports) {
        var e = require('./_getNative'),
          r = require('./_root'),
          a = e(r, 'WeakMap')
        module.exports = a
      },
      { './_getNative': 125, './_root': 109 }
    ],
    129: [
      function (require, module, exports) {
        var e = require('./_DataView'),
          r = require('./_Map'),
          t = require('./_Promise'),
          a = require('./_Set'),
          u = require('./_WeakMap'),
          c = require('./_baseGetTag'),
          o = require('./_toSource'),
          i = '[object Map]',
          n = '[object Object]',
          s = '[object Promise]',
          b = '[object Set]',
          w = '[object WeakMap]',
          j = '[object DataView]',
          q = o(e),
          _ = o(r),
          p = o(t),
          f = o(a),
          v = o(u),
          M = c
        ;((e && M(new e(new ArrayBuffer(1))) != j) ||
          (r && M(new r()) != i) ||
          (t && M(t.resolve()) != s) ||
          (a && M(new a()) != b) ||
          (u && M(new u()) != w)) &&
          (M = function (e) {
            var r = c(e),
              t = r == n ? e.constructor : void 0,
              a = t ? o(t) : ''
            if (a)
              switch (a) {
                case q:
                  return j
                case _:
                  return i
                case p:
                  return s
                case f:
                  return b
                case v:
                  return w
              }
            return r
          }),
          (module.exports = M)
      },
      {
        './_DataView': 159,
        './_Map': 114,
        './_Promise': 160,
        './_Set': 101,
        './_WeakMap': 161,
        './_baseGetTag': 118,
        './_toSource': 162
      }
    ],
    91: [
      function (require, module, exports) {
        var e = require('./_Stack'),
          r = require('./_equalArrays'),
          a = require('./_equalByTag'),
          u = require('./_equalObjects'),
          t = require('./_getTag'),
          i = require('./isArray'),
          _ = require('./isBuffer'),
          n = require('./isTypedArray'),
          q = 1,
          c = '[object Arguments]',
          l = '[object Array]',
          o = '[object Object]',
          p = Object.prototype,
          f = p.hasOwnProperty
        function s(p, s, y, b, j, v) {
          var w = i(p),
            A = i(s),
            d = w ? l : t(p),
            g = A ? l : t(s),
            O = (d = d == c ? o : d) == o,
            T = (g = g == c ? o : g) == o,
            m = d == g
          if (m && _(p)) {
            if (!_(s)) return !1
            ;(w = !0), (O = !1)
          }
          if (m && !O)
            return (
              v || (v = new e()),
              w || n(p) ? r(p, s, y, b, j, v) : a(p, s, d, y, b, j, v)
            )
          if (!(y & q)) {
            var B = O && f.call(p, '__wrapped__'),
              h = T && f.call(s, '__wrapped__')
            if (B || h) {
              var k = B ? p.value() : p,
                x = h ? s.value() : s
              return v || (v = new e()), j(k, x, y, b, v)
            }
          }
          return !!m && (v || (v = new e()), u(p, s, y, b, j, v))
        }
        module.exports = s
      },
      {
        './_Stack': 90,
        './_equalArrays': 126,
        './_equalByTag': 128,
        './_equalObjects': 127,
        './_getTag': 129,
        './isArray': 33,
        './isBuffer': 80,
        './isTypedArray': 82
      }
    ],
    69: [
      function (require, module, exports) {
        var e = require('./_baseIsEqualDeep'),
          r = require('./isObjectLike')
        function u(l, i, n, s, t) {
          return (
            l === i ||
            (null == l || null == i || (!r(l) && !r(i))
              ? l != l && i != i
              : e(l, i, n, s, u, t))
          )
        }
        module.exports = u
      },
      { './_baseIsEqualDeep': 91, './isObjectLike': 50 }
    ],
    66: [
      function (require, module, exports) {
        var r = require('./_Stack'),
          e = require('./_baseIsEqual'),
          i = 1,
          n = 2
        function u(u, t, a, f) {
          var v = a.length,
            o = v,
            l = !f
          if (null == u) return !o
          for (u = Object(u); v--; ) {
            var s = a[v]
            if (l && s[2] ? s[1] !== u[s[0]] : !(s[0] in u)) return !1
          }
          for (; ++v < o; ) {
            var c = (s = a[v])[0],
              d = u[c],
              q = s[1]
            if (l && s[2]) {
              if (void 0 === d && !(c in u)) return !1
            } else {
              var b = new r()
              if (f) var _ = f(d, q, c, u, t, b)
              if (!(void 0 === _ ? e(q, d, i | n, f, b) : _)) return !1
            }
          }
          return !0
        }
        module.exports = u
      },
      { './_Stack': 90, './_baseIsEqual': 69 }
    ],
    73: [
      function (require, module, exports) {
        var e = require('./isObject')
        function r(r) {
          return r == r && !e(r)
        }
        module.exports = r
      },
      { './isObject': 98 }
    ],
    67: [
      function (require, module, exports) {
        var r = require('./_isStrictComparable'),
          e = require('./keys')
        function t(t) {
          for (var a = e(t), i = a.length; i--; ) {
            var o = a[i],
              u = t[o]
            a[i] = [o, u, r(u)]
          }
          return a
        }
        module.exports = t
      },
      { './_isStrictComparable': 73, './keys': 37 }
    ],
    68: [
      function (require, module, exports) {
        function n(n, t) {
          return function (u) {
            return null != u && u[n] === t && (void 0 !== t || n in Object(u))
          }
        }
        module.exports = n
      },
      {}
    ],
    57: [
      function (require, module, exports) {
        var e = require('./_baseIsMatch'),
          r = require('./_getMatchData'),
          t = require('./_matchesStrictComparable')
        function a(a) {
          var u = r(a)
          return 1 == u.length && u[0][2]
            ? t(u[0][0], u[0][1])
            : function (r) {
                return r === a || e(r, a, u)
              }
        }
        module.exports = a
      },
      {
        './_baseIsMatch': 66,
        './_getMatchData': 67,
        './_matchesStrictComparable': 68
      }
    ],
    95: [
      function (require, module, exports) {
        var e = require('./_baseGetTag'),
          r = require('./isObjectLike'),
          o = '[object Symbol]'
        function t(t) {
          return 'symbol' == typeof t || (r(t) && e(t) == o)
        }
        module.exports = t
      },
      { './_baseGetTag': 118, './isObjectLike': 50 }
    ],
    72: [
      function (require, module, exports) {
        var e = require('./isArray'),
          r = require('./isSymbol'),
          t = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
          n = /^\w*$/
        function u(u, l) {
          if (e(u)) return !1
          var o = typeof u
          return (
            !(
              'number' != o &&
              'symbol' != o &&
              'boolean' != o &&
              null != u &&
              !r(u)
            ) ||
            n.test(u) ||
            !t.test(u) ||
            (null != l && u in Object(l))
          )
        }
        module.exports = u
      },
      { './isArray': 33, './isSymbol': 95 }
    ],
    169: [
      function (require, module, exports) {
        var e = require('./_MapCache'),
          r = 'Expected a function'
        function t(n, a) {
          if ('function' != typeof n || (null != a && 'function' != typeof a))
            throw new TypeError(r)
          var c = function () {
            var e = arguments,
              r = a ? a.apply(this, e) : e[0],
              t = c.cache
            if (t.has(r)) return t.get(r)
            var o = n.apply(this, e)
            return (c.cache = t.set(r, o) || t), o
          }
          return (c.cache = new (t.Cache || e)()), c
        }
        ;(t.Cache = e), (module.exports = t)
      },
      { './_MapCache': 62 }
    ],
    165: [
      function (require, module, exports) {
        var e = require('./memoize'),
          r = 500
        function n(n) {
          var u = e(n, function (e) {
              return c.size === r && c.clear(), e
            }),
            c = u.cache
          return u
        }
        module.exports = n
      },
      { './memoize': 169 }
    ],
    146: [
      function (require, module, exports) {
        var e = require('./_memoizeCapped'),
          r =
            /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
          p = /\\(\\)?/g,
          u = e(function (e) {
            var u = []
            return (
              46 === e.charCodeAt(0) && u.push(''),
              e.replace(r, function (e, r, a, o) {
                u.push(a ? o.replace(p, '$1') : r || e)
              }),
              u
            )
          })
        module.exports = u
      },
      { './_memoizeCapped': 165 }
    ],
    164: [
      function (require, module, exports) {
        var r = require('./_Symbol'),
          e = require('./_arrayMap'),
          i = require('./isArray'),
          t = require('./isSymbol'),
          o = 1 / 0,
          u = r ? r.prototype : void 0,
          n = u ? u.toString : void 0
        function a(r) {
          if ('string' == typeof r) return r
          if (i(r)) return e(r, a) + ''
          if (t(r)) return n ? n.call(r) : ''
          var u = r + ''
          return '0' == u && 1 / r == -o ? '-0' : u
        }
        module.exports = a
      },
      { './_Symbol': 105, './_arrayMap': 53, './isArray': 33, './isSymbol': 95 }
    ],
    147: [
      function (require, module, exports) {
        var r = require('./_baseToString')
        function e(e) {
          return null == e ? '' : r(e)
        }
        module.exports = e
      },
      { './_baseToString': 164 }
    ],
    117: [
      function (require, module, exports) {
        var r = require('./isArray'),
          e = require('./_isKey'),
          i = require('./_stringToPath'),
          t = require('./toString')
        function u(u, n) {
          return r(u) ? u : e(u, n) ? [u] : i(t(u))
        }
        module.exports = u
      },
      {
        './isArray': 33,
        './_isKey': 72,
        './_stringToPath': 146,
        './toString': 147
      }
    ],
    74: [
      function (require, module, exports) {
        var r = require('./isSymbol'),
          e = 1 / 0
        function t(t) {
          if ('string' == typeof t || r(t)) return t
          var i = t + ''
          return '0' == i && 1 / t == -e ? '-0' : i
        }
        module.exports = t
      },
      { './isSymbol': 95 }
    ],
    94: [
      function (require, module, exports) {
        var r = require('./_castPath'),
          e = require('./_toKey')
        function t(t, o) {
          for (var u = 0, n = (o = r(o, t)).length; null != t && u < n; )
            t = t[e(o[u++])]
          return u && u == n ? t : void 0
        }
        module.exports = t
      },
      { './_castPath': 117, './_toKey': 74 }
    ],
    71: [
      function (require, module, exports) {
        var e = require('./_baseGet')
        function r(r, o, u) {
          var i = null == r ? void 0 : e(r, o)
          return void 0 === i ? u : i
        }
        module.exports = r
      },
      { './_baseGet': 94 }
    ],
    92: [
      function (require, module, exports) {
        function n(n, e) {
          return null != n && e in Object(n)
        }
        module.exports = n
      },
      {}
    ],
    93: [
      function (require, module, exports) {
        var r = require('./_castPath'),
          e = require('./isArguments'),
          i = require('./isArray'),
          u = require('./_isIndex'),
          n = require('./isLength'),
          t = require('./_toKey')
        function a(a, l, s) {
          for (var q = -1, o = (l = r(l, a)).length, g = !1; ++q < o; ) {
            var h = t(l[q])
            if (!(g = null != a && s(a, h))) break
            a = a[h]
          }
          return g || ++q != o
            ? g
            : !!(o = null == a ? 0 : a.length) &&
                n(o) &&
                u(h, o) &&
                (i(a) || e(a))
        }
        module.exports = a
      },
      {
        './_castPath': 117,
        './isArguments': 79,
        './isArray': 33,
        './_isIndex': 81,
        './isLength': 97,
        './_toKey': 74
      }
    ],
    70: [
      function (require, module, exports) {
        var e = require('./_baseHasIn'),
          r = require('./_hasPath')
        function u(u, a) {
          return null != u && r(u, a, e)
        }
        module.exports = u
      },
      { './_baseHasIn': 92, './_hasPath': 93 }
    ],
    58: [
      function (require, module, exports) {
        var e = require('./_baseIsEqual'),
          r = require('./get'),
          i = require('./hasIn'),
          u = require('./_isKey'),
          t = require('./_isStrictComparable'),
          a = require('./_matchesStrictComparable'),
          o = require('./_toKey'),
          q = 1,
          n = 2
        function s(s, c) {
          return u(s) && t(c)
            ? a(o(s), c)
            : function (u) {
                var t = r(u, s)
                return void 0 === t && t === c ? i(u, s) : e(c, t, q | n)
              }
        }
        module.exports = s
      },
      {
        './_baseIsEqual': 69,
        './get': 71,
        './hasIn': 70,
        './_isKey': 72,
        './_isStrictComparable': 73,
        './_matchesStrictComparable': 68,
        './_toKey': 74
      }
    ],
    76: [
      function (require, module, exports) {
        function n(n) {
          return function (u) {
            return null == u ? void 0 : u[n]
          }
        }
        module.exports = n
      },
      {}
    ],
    77: [
      function (require, module, exports) {
        var e = require('./_baseGet')
        function r(r) {
          return function (n) {
            return e(n, r)
          }
        }
        module.exports = r
      },
      { './_baseGet': 94 }
    ],
    59: [
      function (require, module, exports) {
        var e = require('./_baseProperty'),
          r = require('./_basePropertyDeep'),
          u = require('./_isKey'),
          i = require('./_toKey')
        function o(o) {
          return u(o) ? e(i(o)) : r(o)
        }
        module.exports = o
      },
      {
        './_baseProperty': 76,
        './_basePropertyDeep': 77,
        './_isKey': 72,
        './_toKey': 74
      }
    ],
    36: [
      function (require, module, exports) {
        var e = require('./_baseMatches'),
          r = require('./_baseMatchesProperty'),
          t = require('./identity'),
          i = require('./isArray'),
          u = require('./property')
        function o(o) {
          return 'function' == typeof o
            ? o
            : null == o
            ? t
            : 'object' == typeof o
            ? i(o)
              ? r(o[0], o[1])
              : e(o)
            : u(o)
        }
        module.exports = o
      },
      {
        './_baseMatches': 57,
        './_baseMatchesProperty': 58,
        './identity': 47,
        './isArray': 33,
        './property': 59
      }
    ],
    26: [
      function (require, module, exports) {
        var r = require('./_baseIteratee'),
          e = require('./isArrayLike'),
          i = require('./keys')
        function t(t) {
          return function (u, n, a) {
            var o = Object(u)
            if (!e(u)) {
              var v = r(n, 3)
              ;(u = i(u)),
                (n = function (r) {
                  return v(o[r], r, o)
                })
            }
            var c = t(u, n, a)
            return c > -1 ? o[v ? u[c] : c] : void 0
          }
        }
        module.exports = t
      },
      { './_baseIteratee': 36, './isArrayLike': 38, './keys': 37 }
    ],
    124: [
      function (require, module, exports) {
        var e = require('./isObject'),
          r = require('./isSymbol'),
          t = NaN,
          i = /^\s+|\s+$/g,
          f = /^[-+]0x[0-9a-f]+$/i,
          u = /^0b[01]+$/i,
          n = /^0o[0-7]+$/i,
          s = parseInt
        function a(a) {
          if ('number' == typeof a) return a
          if (r(a)) return t
          if (e(a)) {
            var o = 'function' == typeof a.valueOf ? a.valueOf() : a
            a = e(o) ? o + '' : o
          }
          if ('string' != typeof a) return 0 === a ? a : +a
          a = a.replace(i, '')
          var l = u.test(a)
          return l || n.test(a) ? s(a.slice(2), l ? 2 : 8) : f.test(a) ? t : +a
        }
        module.exports = a
      },
      { './isObject': 98, './isSymbol': 95 }
    ],
    100: [
      function (require, module, exports) {
        var e = require('./toNumber'),
          r = 1 / 0,
          u = 1.7976931348623157e308
        function o(o) {
          return o
            ? (o = e(o)) === r || o === -r
              ? (o < 0 ? -1 : 1) * u
              : o == o
              ? o
              : 0
            : 0 === o
            ? o
            : 0
        }
        module.exports = o
      },
      { './toNumber': 124 }
    ],
    40: [
      function (require, module, exports) {
        var r = require('./toFinite')
        function e(e) {
          var t = r(e),
            i = t % 1
          return t == t ? (i ? t - i : t) : 0
        }
        module.exports = e
      },
      { './toFinite': 100 }
    ],
    27: [
      function (require, module, exports) {
        var e = require('./_baseFindIndex'),
          r = require('./_baseIteratee'),
          n = require('./toInteger'),
          t = Math.max
        function u(u, a, i) {
          var l = null == u ? 0 : u.length
          if (!l) return -1
          var o = null == i ? 0 : n(i)
          return o < 0 && (o = t(l + o, 0)), e(u, r(a, 3), o)
        }
        module.exports = u
      },
      { './_baseFindIndex': 39, './_baseIteratee': 36, './toInteger': 40 }
    ],
    22: [
      function (require, module, exports) {
        var e = require('./_createFind'),
          r = require('./findIndex'),
          d = e(r)
        module.exports = d
      },
      { './_createFind': 26, './findIndex': 27 }
    ],
    19: [
      function (require, module, exports) {
        module.exports = [
          {
            question: ' Na rysunku procesor oznaczony jest numerem',
            answers: ['2', '3', '5', '8'],
            correctAnswer: 0,
            img: 'e12/1.jpg'
          },
          {
            question: ' Na rysunku karta rozszerzeń oznaczona jest numerem',
            answers: ['4', '1', '6', '7'],
            correctAnswer: 0,
            img: 'e12/2.jpg'
          },
          {
            question: ' Rysunek przedstawia pamięć',
            answers: ['SDRAM DIMM', 'SIMM', 'DDR DIMM', 'Compact Flash'],
            correctAnswer: 0,
            img: 'e12/3.jpg'
          },
          {
            question:
              ' W przedstawionej na schemacie płycie głównej zasilanie należy podłączyć do złącza oznaczonego numerem',
            answers: ['6', '3', '5', '7'],
            correctAnswer: 0,
            img: 'e12/4.jpg'
          },
          {
            question:
              ' W przedstawionej na schemacie płycie głównej złącze PCI oznaczone jest numerem',
            answers: ['4', '1', '2', '3'],
            correctAnswer: 0,
            img: 'e12/5.jpg'
          },
          {
            question: ' Złącze AGP służy do podłączenia',
            answers: [
              'kart graficznych',
              'szybkich pamięci dyskowych',
              'urządzeń wejścia/wyjścia',
              'modemu'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Do którego wyprowadzenia należy podłączyć głośniki aktywne w karcie dźwiękowej, której schemat funkcjonalny przedstawia rysunek?',
            answers: ['Line out', 'Mic in', 'Line in', 'Speaker out'],
            correctAnswer: 0,
            img: 'e12/6.jpg'
          },
          {
            question:
              ' Który z elementów pokazanych na schemacie karty dźwiękowej na rysunku służy do cyfrowego przetwarzania sygnałów?',
            answers: [
              'Procesor DSP',
              'Przetwornik A/D',
              'Syntezator',
              'Mikser'
            ],
            correctAnswer: 0,
            img: 'e12/7.jpg'
          },
          {
            question: ' Warunkiem niezbędnym przy archiwizacji danych jest',
            answers: [
              'kopiowanie danych',
              'kompresja danych',
              'kompresja i kopiowanie danych',
              'kompresja i kopiowanie danych z jednoczesnym ich szyfrowaniem'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Ile komórek pamięci można zaadresować bezpośrednio w 64 bitowym procesorze, który ma 32 bitową szynę adresową?',
            answers: [
              '2 do potęgi 32',
              '2 do potęgi 64',
              '32 do potęgi 2',
              '64 do potęgi 2'
            ],
            correctAnswer: 0
          },
          {
            question: ' Co oznacza zwrot "wykonanie backupu systemu"?',
            answers: [
              'Wykonanie kopii zapasowej systemu',
              'Zamknięcie systemu',
              'Ponowne uruchomienie systemu',
              'Wykonanie aktualizacji systemu'
            ],
            correctAnswer: 0
          },
          {
            question: ' Klaster komputerowy to',
            answers: [
              'grupa komputerów pracujących współbieżnie tak, jakby był to jeden komputer',
              'komputer z macierzą dyskową',
              'komputer z wieloma procesorami',
              'komputer zapasowy, na którym co pewien czas wykonywana jest kopia systemu głównego'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Pamięć oznaczona symbolem PC3200 nie może współpracować z magistralą',
            answers: ['533 MHz', '300 MHz', '333 MHz', '400 MHz'],
            correctAnswer: 0
          },
          {
            question:
              ' Co oznacza jednostka dpi podawana w parametrach katalogowych skanerów i drukarek?',
            answers: [
              'Punkty na cal',
              'Gęstość optyczną',
              'Punkty na milimetr',
              'Punkty na centymetr'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Jaka jest maksymalna prędkość odczytu płyt CD-R w napędzie oznaczonym x48?',
            answers: ['7200 kB/s', '480 kB/s', '4800 kB/s', '10000 kB/s'],
            correctAnswer: 0
          },
          {
            question:
              ' Funkcje różnych kategorii (daty i czasu, finansowe, tekstowe, matematyczne, statystyczne) są elementem składowym',
            answers: [
              'arkusza kalkulacyjnego',
              'edytora tekstu',
              'przeglądarki internetowej',
              'programów do tworzenia prezentacji multimedialnych'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Analizując rysunek zauważamy, że limit zadeklarowanej pamięci wynosi 620976 KB. Widać jednocześnie, że zainstalowanej pamięci fizycznej w analizowanym systemie jest mniej niż pamięci zadeklarowanej. Jaki typ pamięci decyduje w tym wypadku o zwiększeniu limitu pamięci zadeklarowanej ponad wielkość zainstalowanej pamięci fizycznej?',
            answers: [
              'Pamięć pliku stron',
              'Pamięć cache procesora',
              'Pamięć RAM',
              'Pamięć jądra'
            ],
            correctAnswer: 0,
            img: 'e12/8.jpg'
          },
          {
            question:
              ' Urządzenie komputerowe, które bezwzględnie powinno być podłączone do sieci za pośrednictwem UPS, to',
            answers: [
              'serwer sieciowy',
              'dysk zewnętrzny',
              'drukarka atramentowa',
              'ploter'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Z jakiego systemu plików należy skorzystać instalując Linuxa, by mieć możliwość definiowania uprawnień do plików i folderów?',
            answers: ['EXT2', 'FAT32', 'NTFS', 'ISO9660'],
            correctAnswer: 0
          },
          {
            question:
              ' W celu zdalnego i przy tym bezpiecznego administrowania systemem Linux należy wykorzystać protokół',
            answers: ['SSH2', 'FTP', 'Telnet', 'SMTP'],
            correctAnswer: 0
          },
          {
            question:
              ' Cechą charakterystyczną wirusów polimorficznych jest to, że',
            answers: [
              'mają cechę polegającą na modyfikowaniu swojego kodu',
              'atakują tablicę FAT',
              'atakują rekord startowy dysku',
              'zarażają wszystkie komputery w sieci lokalnej'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Na komputerze podłączonym do Internetu, w programie antywirusowym bazę wirusów należy aktualizować co najmniej',
            answers: [
              'raz dziennie',
              'raz w tygodniu',
              'raz w miesiącu',
              'raz do roku'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Jeżeli podczas podłączenia stacji dysków elastycznych 1,44 MB kabel danych zostanie podłączony odwrotnie, to',
            answers: [
              'BIOS komputera zgłosi błąd podłączenia stacji dysków',
              'BIOS komputera poprawnie wykryje stację dysków',
              'BIOS komputera wykryje stację dysków jako 2,88 MB',
              'stacja dysków ulegnie uszkodzeniu'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Jakie elementy znajdują się na przedstawionej płycie głównej?',
            answers: [
              '2 złącza ISA, 4 złącza PCI, 3 złącza pamięci DIMM',
              '2 złącza ISA, 3 złącza PCI, 4 złącza pamięci DIMM',
              '3 złącza ISA, 4 złącza PCI, 2 złącza pamięci DIMM',
              '4 złącza ISA, 2 złącza PCI, 3 złącza pamięci DIMM'
            ],
            correctAnswer: 0,
            img: 'e12/9.jpg'
          },
          {
            question:
              ' Na schemacie blokowym, przedstawiającym fragment systemu mikroprocesorowego, symbolem X oznaczono',
            answers: [
              'kontroler przerwań',
              'pamięć Cache',
              'kontroler DMA',
              'pamięć stałą ROM'
            ],
            correctAnswer: 0,
            img: 'e12/10.jpg'
          },
          {
            question:
              ' Na zdjęciu przedstawiono płytę główną komputera. Strzałką oznaczono',
            answers: [
              'kontroler mostka północnegoz umocowanym radiatorem',
              'procesor z umocowanymradiatorem',
              'chip wbudowanej karty graficznej',
              'kontroler mostka południowego'
            ],
            correctAnswer: 0,
            img: 'e12/11.jpg'
          },
          {
            question: ' Zdjęcie przedstawia kartę',
            answers: [
              'telewizyjną ze złączem PCI',
              'sieciową ze złączem ISA',
              'dźwiękową ze złączem PCI',
              'telewizyjną ze złączem ISA'
            ],
            correctAnswer: 0,
            img: 'e12/12.jpg'
          },
          {
            question: ' Który z interfejsów jest interfejsem równoległym?',
            answers: ['LPT', 'PS/2', 'RS232', 'USB'],
            correctAnswer: 0
          },
          {
            question:
              ' Na schemacie blokowym procesora blok funkcyjny nazwany SIMD to',
            answers: [
              'zestaw 128 bitowych rejestrów niezbędny przy wykonywaniu instrukcji SSE procesora na liczbach stało- i zmiennoprzecinkowych',
              'zestaw 256 bitowych rejestrów znacznie przyspieszający obliczenia na liczbach stałopozycyjnych',
              'jednostka zmiennoprzecinkowa procesora (koprocesor)',
              'moduł procesora realizujący wyłącznie operacje graficzne'
            ],
            correctAnswer: 0,
            img: 'e12/13.jpg'
          },
          {
            question:
              ' Jaką funkcję pełnią elementy Tr1 i Tr2 widoczne na schemacie przedstawiającym kartę sieciową Ethernet?',
            answers: [
              'Zapewniają izolację obwodu elektrycznego sieci LAN od obwodu elektrycznego komputera',
              'Sygnalizują za pomocą dźwięku aktywność karty sieciowej',
              'Zapewniają szyfrowanie i deszyfrowanie danych przesyłanych przez sieć',
              'Sygnalizują za pomocą świecenia kolorem zielonym szybkość pracy karty sieciowej'
            ],
            correctAnswer: 0,
            img: 'e12/14.jpg'
          },
          {
            question: ' Schemat blokowy przedstawia',
            answers: [
              'dysk twardy',
              'streamer',
              'napęd dyskietek',
              'napęd DVD-ROM'
            ],
            correctAnswer: 0,
            img: 'e12/15.jpg'
          },
          {
            question:
              ' Systemy operacyjne z rodziny Linux rozprowadzane są na podstawie licencji',
            answers: ['GNU', 'MOLP', 'shareware', 'komercyjnej'],
            correctAnswer: 0
          },
          {
            question:
              ' Zgodnie z przedstawionym w tabeli standardem opisu pamięci PC-100 wskażpamięć, która ma maksymalny czas dostępu 6 nanosekund i minimalne opóźnienie między sygnałami CAS i RAS wynoszące 2 cykle zegara',
            answers: [
              'PC100-322-60',
              'PC100-323-70',
              'PC100-332-70',
              'PC100-333-60'
            ],
            correctAnswer: 0,
            img: 'e12/16.jpg'
          },
          {
            question:
              ' Zgodnie z dokumentacją karty graficznej jej zdolność do pracy z systemem AGP 2X/4X umożliwia',
            answers: [
              'przesyłanie danych z maksymalną prędkością 1066 MB/s',
              'przesyłanie danych z maksymalną prędkością 256 MB/s',
              'pracę z maksymalną częstotliwością taktowania 55 MHz',
              'pracę z maksymalną częstotliwością taktowania 44 MHz'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Jeżeli w konfiguracji karty graficznej zostanie wybrane odświeżanie obrazu większe od zalecanego, monitor CRT spełniający normy TCO 99',
            answers: [
              'przejdzie w stan uśpienia lub pojawi się okno informacyjne z komunikatem',
              'ulegnie uszkodzeniu',
              'nie wyłączy się, będzie wyświetlał czarny obraz',
              'nie wyłączy się, będzie wyświetlał jedynie część obrazu'
            ],
            correctAnswer: 0
          },
          {
            question: ' Jakie systemy operacyjne infekuje wirus MS Blaster?',
            answers: ['MS Windows 2000/NT/XP', 'MS Windows 9x', 'Linux', 'DOS'],
            correctAnswer: 0
          },
          {
            question: ' W dokumentacji opisano system plików',
            answers: ['NTFS', 'FAT32', 'EXT4', 'FAT'],
            correctAnswer: 0,
            img: 'e12/17.jpg'
          },
          {
            question: ' Liczba 356 zapisana w systemie dwójkowym to',
            answers: ['101100100', '100001100', '110011010', '110011000'],
            correctAnswer: 0
          },
          {
            question:
              ' Pewną liczbę naturalną w systemie szesnastkowym zapisano następująco: 41. Wskaż tę liczbę zapisaną w systemie dziesiętnym',
            answers: ['65', '75', '81', '91'],
            correctAnswer: 0
          },
          {
            question: ' Na płycie głównej wykorzystującej układ Intel 865G',
            answers: [
              'można zainstalować kartę graficzną ze złączem AGP',
              'nie można zainstalować karty graficznej',
              'można zainstalować kartę graficzną ze złączem ISA',
              'można zainstalować kartę graficzną ze złączem PCI-Express'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Najlepsze zabezpieczenie komputera przed wirusami stanowi zainstalowanie',
            answers: [
              'skanera antywirusowego',
              'zapory FireWall',
              'hasła dla BIOS-u',
              'licencjonowanego systemu operacyjnego'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' W celu wymiany uszkodzonego modułu pamięci RAM w pierwszej kolejności należy',
            answers: [
              'odłączyć zasilanie komputera',
              'zdemontować uszkodzony moduł pamięci',
              'otworzyć obudowę komputera',
              'wyłączyć monitor ekranowy'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Specyfika pracy firmy wymaga posługiwania się systemami plików charakteryzujących się dużym bezpieczeństwem i możliwością szyfrowania danych.W tym celu należy zastosować system operacyjny Windows',
            answers: ['2000/7/XP', 'NC', 'NTSC', 'Server'],
            correctAnswer: 0
          },
          {
            question:
              ' Oprogramowanie antywirusowe może skutecznie chronić komputer. Ważne jest, aby wybrać opcję uruchamiania programu wraz z komputerem oraz opcję',
            answers: [
              'monitorowania w czasie rzeczywistym (skanowania w tle)',
              'skanowania ostatnio używanych programów',
              'automatycznego kasowania zainfekowanych plików',
              'automatycznego odłączenia od sieci w przypadku infekcji'
            ],
            correctAnswer: 0
          },
          {
            question: ' Szerokość magistrali pamięci DDR SDRAM wynosi',
            answers: ['64 bity', '72 bity', '36 bitów', '32 bity'],
            correctAnswer: 0
          },
          {
            question:
              ' Przy pomocy taśmy 34-pinowej przedstawionej na rysunku podłącza się do płyty głównej komputera',
            answers: [
              'napędy dyskietek 3,5 lub 5,25 cala',
              'dyski SCSI',
              'dyski ATA',
              'napędy DVD.'
            ],
            correctAnswer: 0,
            img: 'e12/18.jpg'
          },
          {
            question:
              ' Niektóre systemy operacyjne są wielodostępne (multiuser). Systemy takie',
            answers: [
              'oprócz wielozadaniowości z wywłaszczeniem realizują funkcję przydzielania czasu użytkownikom',
              'równocześnie wykonują wiele programów (zadań)',
              'sterują układem (klasterem) niezależnych komputerów',
              'stosowane są głównie w przemyśle i systemach sterowania'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Jeżeli w systemie operacyjnym komputera zainstaluje się program nazywany Trojanem, to spowoduje on',
            answers: [
              'wykonywanie niepożądanych działań poza kontrolą użytkownika',
              'ochronę systemu operacyjnego przed działaniem wirusów',
              'optymalizację działania systemu operacyjnego',
              'wspomaganie działania użytkownika'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Zdjęcie przedstawia płytę główną komputera. Strzałką oznaczono',
            answers: [
              'gniazdo zasilania do płyty ATX',
              'gniazdo zasilania do płyty AT',
              'połączenie do dysku IDE',
              'połączenie do dysku SCSI'
            ],
            correctAnswer: 0,
            img: 'e12/19.jpg'
          },
          {
            question:
              ' Przy pomocy taśmy 60-pinowej przedstawionej na rysunku podłącza się do płyty głównej komputera',
            answers: [
              'wszystkie powyższe urządzenia',
              'tylko dyski SCSI',
              'tylko dyski EIDE',
              'napędy ATAPI'
            ],
            correctAnswer: 0,
            img: 'e12/20.jpg'
          },
          {
            question:
              ' NIEWŁAŚCIWE podłączenie taśmy sygnałowej do napędu dyskietek spowoduje',
            answers: [
              'niemożność pracy z napędem',
              'trwałe uszkodzenie napędu',
              'błędy w zapisie na dyskietce',
              'problemy z uruchomieniem komputera.'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Tabela przedstawia parametry trzech dysków twardych standardu Ultra320 SCSI. Dyski te mogą pracować z maksymalnym transferem wewnętrznym',
            answers: ['132 MB/s', '320MB/S', '200MB/S', '320 GB/s'],
            correctAnswer: 0,
            img: 'e12/21.jpg'
          },
          {
            question:
              ' Usługa Windows XP Professional "Mostek sieciowy" pozwala na łączenie ze sobą',
            answers: [
              'segmentów sieci LAN',
              'dwóch komputerów',
              'roboczych stacji bezdyskowych',
              'klienta z serwerem'
            ],
            correctAnswer: 0
          },
          {
            question: ' Na zdjęciu przedstawiono kartę',
            answers: [
              'graficzną PCI',
              'graficzną AGP',
              'telewizyjną PCI Express',
              'telewizyjną EISA'
            ],
            correctAnswer: 0,
            img: 'e12/22.jpg'
          },
          {
            question:
              ' Blok funkcjonalny RAMDAC na schemacie blokowym przedstawia',
            answers: [
              'przetwornik cyfrowo-analogowy z pamięcią RAM',
              'przetwornik analogowo-cyfrowy z pamięcią RAM',
              'pamięć RAM karty graficznej',
              'pamięć ROM karty graficznej'
            ],
            correctAnswer: 0,
            img: 'e12/23.jpg'
          },
          {
            question:
              ' Który z rodzajów macierzy RAID oferuje tzw. mirroring dysków?',
            answers: ['RAID-1', 'RAID-0', 'RAID-2', 'RAID-5'],
            correctAnswer: 0
          },
          {
            question:
              ' Liczbami 25 i 27, na przedstawionej płycie głównej komputera, oznaczono złącza',
            answers: ['USB', 'PS 2', 'RS 232', 'LPT'],
            correctAnswer: 0,
            img: 'e12/24.jpg'
          },
          {
            question:
              ' W trybie wielozadaniowości z wywłaszczeniem zawieszony program',
            answers: [
              'nie może zawiesić systemu operacyjnego',
              'może zawiesić cały system operacyjny',
              'zablokuje pracę wszystkich innych programów',
              'nie pozwoli usunąć się z pamięci operacyjnej'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Jak należy wpisać w formule arkusza kalkulacyjnego adres komórki B3, żeby przy kopiowaniu tej formuły w dowolne miejsce arkusza adres komórki B3 pozostał niezmieniony?',
            answers: ['$B$3', 'B3', '$B3', 'B$3'],
            correctAnswer: 0
          },
          {
            question:
              ' Blok funkcjonalny oznaczony DSP w zamieszczonym schemacie blokowym to',
            answers: [
              'mikroprocesor karty dźwiękowej',
              'bufor RAM',
              'przetwornik cyfrowo-analogowy z pamięcią RAM',
              'przetwornik analogowo-cyfrowy z pamięcią RAM'
            ],
            correctAnswer: 0,
            img: 'e12/25.jpg'
          },
          {
            question:
              ' W wyniku użycia narzędzia diagnostycznego chkdsk otrzymano informacje widoczne na zrzucie ekranu. Jaką wielkość posiada pojedynczy klaster dysku?',
            answers: ['4 kB', '1 972 kB', '2 140 kB', '8 kB'],
            correctAnswer: 0,
            img: 'e12/26.jpg'
          },
          {
            question:
              ' Komputery przenośne są z reguły wyposażone w bezprzewodowe sieci LAN. Ograniczenia ich użytkowania dotyczą emisji fal radiowych mogących zakłócać działanie innych, ważnych dla bezpieczeństwa, urządzeń',
            answers: ['w samolocie', 'w pociągu', 'w biurze', 'w mieszkaniu'],
            correctAnswer: 0
          },
          {
            question:
              ' Plik zaszyfrowany przez użytkownika za pomocą systemu NTFS 5.0 jest każdorazowo automatycznie szyfrowany podczas',
            answers: [
              'zapisywania go na dysku',
              'kopiowania go przez sieć',
              'wysyłania go pocztą e-mail',
              'odczytywania go przez innego użytkownika'
            ],
            correctAnswer: 0
          },
          {
            question: ' Na zdjęciu przedstawiono',
            answers: [
              'kartę sieci bezprzewodowej',
              'modem kablowy',
              'kartę telewizyjną',
              'moduł łączący komputer z UPS'
            ],
            correctAnswer: 0,
            img: 'e12/27.jpg'
          },
          {
            question:
              ' W systemie Linux mamy następujące prawa dostępu do pewnego pliku rwxr--r-- . Jakim poleceniem zmienimy je na rwxrwx---?',
            answers: [
              'chmod 770 nazwapliku',
              'chmod 221 nazwapliku',
              'chmod 544 nazwapliku',
              'chmod 755 nazwapliku'
            ],
            correctAnswer: 0
          },
          {
            question: ' Zerowanie rejestrów procesora odbywa się poprzez',
            answers: [
              'użycie sygnału RESET',
              'wyzerowanie bitów rejestru flag',
              'ustawienie parametru w BIOS-ie',
              'ustawienie licznika rozkazów na adresie zerowym'
            ],
            correctAnswer: 0
          },
          {
            question: ' Do porównywania liczb binarnych służą',
            answers: [
              'komparatory',
              'sumatory',
              'multipleksery',
              'demultipleksery'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Na podstawie nazw sygnałów sterujących określ funkcję podzespołu komputera oznaczonego na rysunku symbolem X',
            answers: [
              'Kontroler przerwań',
              'Układ generatorów programowalnych',
              'Zegar czasu rzeczywistego',
              'Kontroler DMA'
            ],
            correctAnswer: 0,
            img: 'e12/28.jpg'
          },
          {
            question:
              ' Który z podzespołów komputera przy wyłączonym zasilaniu przechowuje program rozpoczynający ładowanie systemu operacyjnego?',
            answers: ['ROM', 'CPU', 'RAM', 'I/O'],
            correctAnswer: 0,
            img: 'e12/29.jpg'
          },
          {
            question: ' Zdjęcie przedstawia',
            answers: [
              'chłodzenie pasywne chipsetu',
              'wentylator procesora',
              'wentylator karty graficznej',
              'chłodzenie aktywne chipsetu'
            ],
            correctAnswer: 0,
            img: 'e12/30.jpg'
          },
          {
            question:
              ' Monitor CRT łączy się z kartą graficzną za pomocą złącza',
            answers: ['D-SUB', 'PCMCIA', 'D-USB', 'BNC'],
            correctAnswer: 0
          },
          {
            question:
              ' Rejestr mikroprocesora zwany licznikiem rozkazów zawiera',
            answers: [
              'adres rozkazu przeznaczonego do wykonania jako następny',
              'liczbę rozkazów wykonanych przez procesor do danego momentu',
              'liczbę rozkazów pozostałych do wykonania do końca programu',
              'liczbę cykli zegara liczoną od początku pracy programu'
            ],
            correctAnswer: 0
          },
          {
            question: ' Układ RAMDAC',
            answers: [
              'stanowi stopień wyjściowy karty graficznej',
              'zawiera konwerter analogowo-cyfrowy',
              'jest charakterystyczny dla standardu ATA',
              'jest charakterystyczny dla standardu S-ATA'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Jaką liczbę dziesiętną zapisano na jednym bajcie w kodzie znak – moduł: 1 1111111',
            answers: ['–127', '–100', '128', '256'],
            correctAnswer: 0
          },
          {
            question: ' W systemie Linux polecenie ps spowoduje wyświetlenie',
            answers: [
              'listy aktualnych procesów zalogowanego użytkownika',
              'konfiguracji Proxy Server',
              'listy aktualnych procesów drukowania',
              'konfiguracji serwera drukarek Print Server'
            ],
            correctAnswer: 0
          },
          {
            question: ' MFT w systemie plików NTFS to',
            answers: [
              'plik zawierający informacje dotyczące poszczególnych plików i folderów na danym woluminie',
              'główny plik indeksowy partycji',
              'główny rekord rozruchowy dysku',
              'tablica partycji na dysku twardym'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Sumą dwóch liczb binarnych 1101011 i 1001001 jest liczba dziesiętna',
            answers: ['180', '402', '201', '170'],
            correctAnswer: 0
          },
          {
            question:
              ' W systemie Windows XP na komputerze klienckim, plik "hosts" jest plikiem tekstowym, który służy do mapowania',
            answers: [
              'nazw hostów na adresy IP',
              'dysków twardych',
              'nazw hostów na adresy MAC',
              'nazw hostów przez serwery DNS'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Czynności samokontrolujące komputer po włączeniu zasilania oznaczone są skrótem',
            answers: ['POST', 'BIOS', 'CPU', 'MBR'],
            correctAnswer: 0
          },
          {
            question:
              ' Magistrala, która łączy w komputerze procesor z kontrolerem pamięci, składająca się z szyny adresowej, szyny danych i linii sterujących, nosi nazwę',
            answers: [
              'FSB – Front Side Bus',
              'AGP – Accelerated Graphics Port',
              'ISA – Industry Standard Architecture',
              'PCI – Peripheral Component Interconnect'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Określ wielkość klastra na podstawie zamieszczonego fragmentu komunikatu systemu WINDOWS wyświetlonego po zakończeniu działania programu format a:',
            answers: ['0,5 KB', '512 KB', '12 bitów', '1 457 664 bajtów'],
            correctAnswer: 0,
            img: 'e12/31.jpg'
          },
          {
            question:
              ' Systemy operacyjne z rodziny Linux rozprowadzane są na podstawie licencji',
            answers: ['GNU', 'MOLP', 'shareware', 'komercyjnej'],
            correctAnswer: 0
          },
          {
            question: ' W systemie Linux ifconfig oznacza',
            answers: [
              'narzędzie umożliwiające wyświetlenie stanu interfejsów sieciowych',
              'nazwę karty sieciowej',
              'narzędzie umożliwiające sprawdzanie znanych adresów MAC/IP',
              'wykorzystanie pakietów TCP/IP do sprawdzenia stanu odległego hosta'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Które złącze płyty głównej komputera służy do zainstalowania przedstawionej na zdjęciu karty graficznej?',
            answers: ['PCI-E', 'ISA', 'PCI', 'AGP'],
            correctAnswer: 0,
            img: 'e12/32.jpg'
          },
          {
            question:
              ' Który z portów na panelu tylnym komputera oznacza się przedstawionym symbolem?',
            answers: ['USB', 'COM', 'LPT', 'RJ45'],
            correctAnswer: 0,
            img: 'e12/33.jpg'
          },
          {
            question:
              ' Jak nazywa się port panelu tylnego komputera zamieszczony na rysunku?',
            answers: ['DVI', 'FIRE WIRE', 'D-SUB', 'HDMI'],
            correctAnswer: 0,
            img: 'e12/34.jpg'
          },
          {
            question: ' Scandisk to program, który stosuje się do',
            answers: [
              'sprawdzania dysku',
              'defragmentacji dysku',
              'formatowania dysku',
              'oczyszczania dysku'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Program, który dostarcza informacji o wydajności zestawu komputerowego to',
            answers: ['benchmark', 'sniffer', 'debugger', 'kompilator'],
            correctAnswer: 0
          },
          {
            question: ' Główny rekord rozruchowy dysku twardego komputera to',
            answers: ['MBR', 'BOOT', 'FAT', 'PT'],
            correctAnswer: 0
          },
          {
            question: ' Jaki zestaw kolorów zawiera tryb CMYK?',
            answers: [
              'Błękitny, purpurowy, żółty i czarny',
              'Czerwony, zielony, żółty i granatowy',
              'Czerwony, zielony, niebieski i czarny',
              'Czerwony, purpurowy, żółty i karmelowy'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' W systemie Windows moduł odpowiedzialny za internetowe usługi informacyjne to',
            answers: ['IIS', 'ISA', 'IIU', 'OSI'],
            correctAnswer: 0
          },
          {
            question:
              ' Co oznacza znajdujący się w dokumentacji technicznej płyty głównej parametr LGA 775?',
            answers: [
              'Typ gniazda procesora',
              'Typ chipsetu płyty',
              'Rodzaj obsługiwanych pamięci',
              'Rodzaj karty graficznej'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Przedstawione w ramce parametry katalogowe dotyczą dysku twardego',
            answers: [
              'o maksymalnym transferze zewnętrznym 300 MB/s',
              'posiadającego 4 talerze',
              'z pamięcią cache 12 MB',
              'o pojemności dysku 32 MB'
            ],
            correctAnswer: 0,
            img: 'e12/35.jpg'
          },
          {
            question:
              ' Rezydentna część programu antywirusowego jako podstawowa forma ochrony antywirusowej, odpowiedzialna za ciągłe nadzorowanie chronionego systemu komputerowego, to',
            answers: [
              'monitor antywirusowy',
              'skaner skryptowy',
              'zapora systemowa',
              'moduł antyspywarowy'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Do połączenia kamery cyfrowej posiadającej interfejs IEEE 1394 (FireWire), z komputerem stosuje się kabel z wtyczką przedstawioną na zdjęciu',
            answers: ['A', 'B', 'C', 'D'],
            correctAnswer: 0,
            img: 'e12/36.jpg'
          },
          {
            question: ' Na zdjęciu, strzałką wskazano gniazdo interfejsu',
            answers: ['LPT', 'COM', 'FDD', 'IDE'],
            correctAnswer: 0,
            img: 'e12/37.jpg'
          },
          {
            question: ' Na zdjęciu przedstawiono gniazda należące do karty',
            answers: [
              'sieciowej',
              'telewizyjnej',
              'dźwiękowej',
              'faksmodemowej'
            ],
            correctAnswer: 0,
            img: 'e12/38.jpg'
          },
          {
            question:
              ' Który z podzespołów komputera przy wyłączonym zasilaniu przechowuje program rozpoczynający ładowanie systemu operacyjnego?',
            answers: ['ROM', 'CPU', 'RAM', 'I/O'],
            correctAnswer: 0,
            img: 'e12/39.jpg'
          },
          {
            question:
              ' Na podstawie nazw sygnałów sterujących określ funkcję podzespołu komputera oznaczonego na rysunku symbolem X',
            answers: [
              'Kontroler przerwań',
              'Układ generatorów programowalnych',
              'Zegar czasu rzeczywistego',
              'Kontroler DMA'
            ],
            correctAnswer: 0,
            img: 'e12/40.jpg'
          },
          {
            question:
              ' Co oznacza skrót MBR, dotyczący urządzeń techniki komputerowej?',
            answers: [
              'Główny rekord rozruchowy SO',
              'Fizyczny adres karty sieciowej',
              'Bloki pamięci górnej komputera IBM/PC',
              'Usługę związaną z tłumaczeniem nazw domeny'
            ],
            correctAnswer: 0
          },
          {
            question: ' Który z interfejsów jest interfejsem równoległym?',
            answers: ['LPT', 'USB', 'PS/2', 'RS232'],
            correctAnswer: 0
          },
          {
            question:
              ' Który z rodzajów macierzy RAID oferuje tzw. mirroring dysków?',
            answers: ['RAID-1', 'RAID-0', 'RAID-2', 'RAID-5'],
            correctAnswer: 0
          },
          {
            question:
              ' Rejestr mikroprocesora zwany licznikiem rozkazów zawiera',
            answers: [
              'adres rozkazu przeznaczonego do wykonania jako następny',
              'liczbę rozkazów wykonanych przez procesor do danego momentu',
              'liczbę rozkazów pozostałych do wykonania do końca programu',
              'liczbę cykli zegara liczoną od początku pracy programu'
            ],
            correctAnswer: 0
          },
          {
            question: ' Nazwa "PIO Mode" dotyczy trybu pracy',
            answers: ['kanału IDE', 'pamięci', 'modemu', 'napędu FDD'],
            correctAnswer: 0
          },
          {
            question: ' Liczba 257 dziesiętnie to',
            answers: [
              '1 0000 0001 dwójkowo',
              '1000 0000 dwójkowo',
              'FF szesnastkowo',
              'F0 szesnastkowo'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Liczba szesnastkowa: FFFF w systemie dwójkowym ma postać',
            answers: [
              '1111 1111 1111 1111',
              '1111 0000 0000 0111',
              '0010 0000 0000 0111',
              '0000 0000 0000 0000'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Na podstawie informacji z "Właściwości systemu" można wywnioskować, że na komputerze jest zainstalowana fizycznie pamięć RAM o pojemności',
            answers: ['512 MB', '523 MB', '256 MB', '128 MB'],
            correctAnswer: 0,
            img: 'e12/41.jpg'
          },
          {
            question:
              ' Jaka drukarka powinna być zastosowana w dziale sprzedaży hurtowni materiałów budowlanych do drukowania faktur na papierze samokopiującym, tak aby uzyskać na nim kopie wydruku?',
            answers: ['Igłowa', 'Laserowa', 'Atramentowa', 'Sublimacyjna'],
            correctAnswer: 0
          },
          {
            question:
              ' Manager bootowania, który pozwala na wybór systemu operacyjnego Linux do uruchomienia to',
            answers: [
              'Grub',
              'Ranish Partition Manager',
              'Smart Boot Manager',
              'Boot Magic'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Wyrównanie tekstu do prawego i lewego marginesu nazywa się',
            answers: [
              'justowaniem',
              'interlinią',
              'wersalikiem',
              'kapitalikiem'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' W którym miejscu znajduje się nagłówek i stopka w dokumencie tekstowym Word?',
            answers: [
              'Nagłówek jest drukowany na górnym marginesie, natomiast stopka jest drukowana na dolnym marginesie',
              'Nagłówek jest drukowany na dolnym marginesie, natomiast stopka jest drukowana na górnym marginesie',
              'Nagłówek znajduje się na początku dokumentu, natomiast stopka na końcu dokumentu',
              'Na parzystych stronach dokumentu'
            ],
            correctAnswer: 0
          },
          {
            question: ' Odwrotnością bezstratnej kompresji danych jest',
            answers: [
              'dekompresja',
              'archiwizacja',
              'prekompresja',
              'pakowanie danych'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Jaki pierwszy znak w nazwie pliku w systemie Windows oznacza plik tymczasowy?',
            answers: ['~', '#', '*', '&'],
            correctAnswer: 0
          },
          {
            question: ' Robak komputerowy to program, który',
            answers: [
              'ma zdolność samoreplikacji',
              'potrzebuje programu nosiciela',
              'uaktywnia się, gdy nadejdzie odpowiednia data',
              'uruchamia się, gdy użytkownik zainfekowanego komputera uruchomi jakiś program'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' W systemie operacyjnym Linux archiwizację danych wykonuje się poleceniem',
            answers: ['tar', 'rpm', 'cmd', 'chmod'],
            correctAnswer: 0
          },
          {
            question:
              ' Drugi monitor CRT podłączony do zestawu komputerowego służy do',
            answers: [
              'wyprowadzania informacji',
              'kalibracji danych',
              'przetwarzania danych',
              'przechowywania informacji'
            ],
            correctAnswer: 0
          },
          {
            question: ' Ile dział elektronowych posiada matryca LCD?',
            answers: ['0', '3', '2', '1'],
            correctAnswer: 0
          },
          {
            question: ' Pamięć podręczna określana jest nazwą',
            answers: ['Cache', 'Chipset', 'EIDE', 'VLB'],
            correctAnswer: 0
          },
          {
            question:
              ' Pamięć nieulotna, elektrycznie kasowana i programowana określana jest skrótem',
            answers: ['EEPROM', 'IDE', 'ROM', 'RAM'],
            correctAnswer: 0
          },
          {
            question:
              ' Ustawienie zworek na dyskach z interfejsem IDE odpowiada za',
            answers: [
              'tryb pracy dysku',
              'rodzaj interfejsu dyskowego',
              'prędkość obrotową dysku',
              'napięcie zasilania silnika'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Koprocesor (Floating Point Unit) w komputerze służy do wykonywania',
            answers: [
              'operacji zmiennoprzecinkowych',
              'podprogramów',
              'operacji na liczbach całkowitych',
              'operacji na liczbach naturalnych'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Jakie mogą być typy partycji dyskowych w systemie operacyjnym Windows?',
            answers: [
              'Podstawowa, rozszerzona oraz dysk logiczny',
              'Dodatkowa, rozszerzona, wymiany oraz dysk logiczny',
              'Podstawowa, rozszerzona, wymiany, dodatkowa',
              'Dodatkowa, podstawowa, rozszerzona, wymiany oraz dysk logiczny'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Na płycie głównej pokazanej na schemacie, moduły pamięci RAM można zainstalować w gnieździe oznaczonym cyfrą',
            answers: ['1', '2', '3', '4'],
            correctAnswer: 0,
            img: 'e12/42.jpg'
          },
          {
            question: ' Które zadanie spełnia system informatyczny?',
            answers: [
              'Przetwarzanie danych',
              'Sterowanie monitorem CRT',
              'Zabezpieczanie przed wirusami',
              'Kontrola pracy oprogramowania diagnostycznego'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' W czasie uruchamiania (krótko po teście POST) komputer zawiesza się. Co może być przyczyną takiej usterki?',
            answers: [
              'Niewłaściwe napięcie zasilania procesora',
              'Zbyt dużo ikon na pulpicie',
              'Źle skonfigurowana drukarka',
              'Brak podłączonej myszki komputerowej'
            ],
            correctAnswer: 0
          },
          {
            question: ' Rysunek przedstawia wejście typu',
            answers: ['COM', 'USB', 'LPT', 'FireWire'],
            correctAnswer: 0,
            img: 'e12/43.jpg'
          },
          {
            question:
              ' Na rysunku przedstawiono zrzut ekranu z przeprowadzonego testu',
            answers: [
              'czasu oczekiwania pamięci',
              'czasu dostępu do dysku twardego',
              'czasu dostępu do napędu optycznego',
              'czasu opróżniania buforu systemowego'
            ],
            correctAnswer: 0,
            img: 'e12/44.jpg'
          },
          {
            question: ' Przedstawiony symbol odnosi się do urządzeń',
            answers: ['SCSI', 'USB', 'LPT', 'IEEE-1394'],
            correctAnswer: 0,
            img: 'e12/45.jpg'
          },
          {
            question:
              ' Z jaką najniższą efektywną częstotliwością taktowania mogą współpracować pamięci DDR2?',
            answers: ['533 MHz', '800 MHz', '333 MHz', '233 MHz'],
            correctAnswer: 0
          },
          {
            question: ' Pamięci DDR2 zasilane są napięciem',
            answers: ['1,8 V', '1,0 V', '1,4 V', '2,5 V'],
            correctAnswer: 0
          },
          {
            question: ' Na zdjęciu przedstawiono kość pamięci',
            answers: ['SDRAM', 'RIMM', 'SIMM', 'RAMBUS'],
            correctAnswer: 0,
            img: 'e12/46.jpg'
          },
          {
            question:
              ' Wartość liczby 1101 0100 0111 w kodzie szesnastkowym wynosi',
            answers: ['D47', 'C27', 'D43', 'C47'],
            correctAnswer: 0
          },
          {
            question: ' Cookie nazywa się plik',
            answers: [
              'tekstowy, przechowujący informacje dla danej witryny sieci Web',
              'graficzny przechowujący obraz witryny sieci Web',
              'tekstowy, z którego korzystają wszystkie witryny sieci',
              'graficzny, z którego korzystają wszystkie witryny sieci'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Na zdjęciu jest widoczny tylny panel komputera. Jak nazywa się wejście oznaczone strzałką?',
            answers: ['FireWire', 'LPT', 'USB', 'COM'],
            correctAnswer: 0,
            img: 'e12/47.jpg'
          },
          {
            question:
              ' Które ze złączy oznaczonych strzałkami na schemacie monitora jest wejściem cyfrowym?',
            answers: [
              'Złącze 2',
              'Złącze 1',
              'Złącza 1 i 2',
              'Żadne ze złączy'
            ],
            correctAnswer: 0,
            img: 'e12/48.jpg'
          },
          {
            question:
              ' Jaką funkcję pełni układ zaznaczony strzałką na schemacie karty graficznej?',
            answers: [
              'Oblicza wygląd i położenie wielokątów, z których zbudowany jest obiekt',
              'Oblicza kolory każdego wyświetlanego piksela',
              'Ustala widoczność i przesłanianie się obiektów na ekranie',
              'Wykonuje kalkulacje oświetlenia, uwzględniając położenie światła'
            ],
            correctAnswer: 0,
            img: 'e12/49.jpg'
          },
          {
            question:
              ' Rysunek przedstawia schemat blokowy karty dźwiękowej. Jaką funkcję pełni układ oznaczony cyfrą 1?',
            answers: [
              'Zamienia sygnał analogowy na cyfrowy',
              'Wzmacnia sygnał wejściowy',
              'Wzmacnia sygnał wyjściowy',
              'Zamienia sygnał cyfrowy na analogowy'
            ],
            correctAnswer: 0,
            img: 'e12/50.jpg'
          },
          {
            question:
              ' Active Directory w systemach MS Windows Server 2000 i MS Windows Server 2003 to',
            answers: [
              'usługa katalogowa, która przechowuje informacje dotyczące obiektów w sieci i udostępnia je użytkownikom oraz administratorom sieci',
              'baza danych zawierająca informacje o użytkownikach sieci, ich hasłach dostępu i uprawnieniach',
              'logiczna grupa komputerów, które mają możliwość komunikowania się w sieci i wzajemnego udostępniania zasobów',
              'grupa komputerów połączonych w sieć, składająca się z serwera pełniącego rolę kontrolera oraz stacji roboczych – klientów'
            ],
            correctAnswer: 0
          },
          {
            question: ' Procesor RISC to procesor',
            answers: [
              'ze zredukowaną listą rozkazów',
              'z pełną listą rozkazów',
              'z główną listą rozkazów',
              'z kompleksową listą rozkazów'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' W dokumentacji systemu operacyjnego Windows XP opisane są pliki z rozszerzeniem .dll. Rozszerzenie to dotyczy pliku',
            answers: [
              'biblioteki',
              'uruchamialnego',
              'inicjalizacyjnego',
              'dziennika zdarzeń'
            ],
            correctAnswer: 0
          },
          {
            question: ' Licencja OEM to',
            answers: [
              'licencja oprogramowania wyłącznie na system komputerowy, na którym zostało oryginalnie zainstalowane, dotyczy oprogramowania sprzedawanego z nowymi komputerami lub odpowiednimi częściami',
              'dokument, który zezwala na używanie oprogramowania na dowolnym sprzęcie komputerowym w określonej w niej ilości stanowisk, bez instalacyjnych dyskietek, czy krążków CD',
              'licencja czyniąca z oprogramowania własność ogółu, w myśl której autor lub autorzy oprogramowania zrzekają się praw do upowszechniania oprogramowania na rzecz ogółu użytkowników',
              'licencja uprawniająca użytkownika do zainstalowania nabytego oprogramowania tylko w jednym komputerze, obejmująca zakaz udostępniania takiego oprogramowania w sieci oraz na innych wolnostojących komputerach'
            ],
            correctAnswer: 0
          },
          {
            question: ' Procesor Athlon 2800+ to',
            answers: [
              'procesor firmy AMD o wydajności podobnej do procesora Pentium 4 taktowanego częstotliwością 2,8 GHz',
              'procesor firmy Intel taktowany częstotliwością 2,8 GB',
              'procesor firmy AMD taktowany częstotliwością 2,8 GB',
              'procesor firmy Intel o wydajności podobnej do procesora Pentium 4 taktowanego częstotliwością 2,8 GHz'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Najbardziej zaawansowany tryb pracy portu równoległego standardu IEEE-1284 tworzący dwukierunkową magistralę 8-bitową mogącą przesyłać zarówno dane, jak i adresy z maksymalną szybkością transmisji do 2,3 MB/s, pozwalający na podłączenie do 64 urządzeń, to',
            answers: [
              'EPP Mode',
              'Byte Mode',
              'Nibble Mode',
              'Compatilibility Mode'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Gdzie w edytorze tekstu wprowadza się informację lub ciąg znaków, który ma pojawić się na wszystkich stronach dokumentu?',
            answers: [
              'W nagłówku lub stopce',
              'W polu tekstowym',
              'W przypisach dolnych',
              'W przypisach końcowych'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Jeżeli w komórce arkusza kalkulacyjnego MS Excel, zamiast cyfr pojawiają się znaki ########, to należy przede wszystkim sprawdzić, czy',
            answers: [
              'liczba nie mieści się w komórce i nie można jej prawidłowo wyświetlić',
              'wpisana formuła zawiera błąd',
              'pojawił się błąd w obliczeniach',
              'wprowadzone zostały znaki tekstowe, a nie liczby'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' We właściwościach karty graficznej w zakładce Zasoby jest określony jeden z zakresów pamięci dla tej karty od A0000h do BFFFFh. Wielkość ta oznacza obszar pamięci określony adresem fizycznym',
            answers: [
              '1010 0000 0000 0000 0000 – 1011 1111 1111 1111 1111',
              '1011 0000 0000 0000 0000 – 1100 1111 1111 1111 1111',
              '1001 1111 1111 1111 1111 – 1010 0000 0000 0000 0000',
              '1100 1111 1111 1111 1111 – 1110 1111 1111 1111 1111'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Numer przerwania przydzielony dla karty sieciowej został przedstawiony w postaci binarnej jako liczba 10101. Jaka to liczba dziesiętna?',
            answers: ['21', '15', '20', '41'],
            correctAnswer: 0
          },
          {
            question:
              ' Po włączeniu komputera procedura POST pokazuje 512 MB RAM. Na karcie właściwości ogólnych systemu operacyjnego Windows widnieje wartość 480 MB RAM. Co jest przyczyną tej różnicy?',
            answers: [
              'W komputerze znajduje się karta graficzna zintegrowana z płytą główną wykorzystująca część pamięci RAM',
              'System operacyjny jest źle zainstalowany i nie obsługuje całego obszaru pamięci',
              'Jest źle przydzielony rozmiar pliku stronicowania w ustawieniach pamięci wirtualnej',
              'Jedna z kości pamięci jest uszkodzona lub jest uszkodzone jedno z gniazd pamięci RAM na płycie głównej'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Firma potrzebuje drukarki służącej do drukowania trwałych kodów kreskowych oraz etykiet na folii i powierzchniach z tworzyw sztucznych. Jaką drukarkę musi zakupić?',
            answers: ['Termotransferową', 'Igłową', 'Termiczną', 'Mozaikową'],
            correctAnswer: 0
          },
          {
            question:
              ' W przedsiębiorstwie należy cyklicznie tworzyć kopie bezpieczeństwa dużej ilości danych, znajdujących się na serwerze, rzędu kilkuset GB. Jakie urządzenie najlepiej wykorzystać do tego celu?',
            answers: [
              'Streamer',
              'Macierz RAID1',
              'Nagrywarkę CD',
              'Nagrywarkę DVD'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Zamontowany w komputerze dysk ma zostać podzielony na partycje. Podaj maksymalną liczbę partycji rozszerzonych, możliwych do utworzenia na jednym dysku',
            answers: ['1', '2', '3', '4'],
            correctAnswer: 0
          },
          {
            question:
              ' W jakim systemie operacyjnym przy instalacji sterowników do nowego urządzenia może pojawić się komunikat',
            answers: ['Windows XP', 'Unix', 'Linux', 'Windows 98'],
            correctAnswer: 0,
            img: 'e12/51.jpg'
          },
          {
            question:
              ' System operacyjny działający w trybie tekstowym z możliwością uruchomienia środowiska graficznego KDE, to',
            answers: ['Linux', 'DOS', 'Windows 95', 'Windows XP'],
            correctAnswer: 0
          },
          {
            question:
              ' Skaner antywirusowy wykrył niepożądane oprogramowanie. Z opisu wynika, że jest to dialer, który pozostawiony w systemie',
            answers: [
              'połączy się z płatnymi numerami telefonicznymi przy użyciu modemu',
              'zaatakuje rekord startowy dysku',
              'zainfekuje załączniki poczty internetowej',
              'przejmie pełną kontrolę nad komputerem'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Co należy zrobić z wiadomością pocztową od nieznanej osoby, zawierającą niepewny załącznik?',
            answers: [
              'Nie otwierać wiadomości, natychmiast ją usunąć',
              'Otworzyć załącznik, jeśli jest w nim wirus, natychmiast go zamknąć',
              'Otworzyć wiadomość i odpowiedzieć na nią, pytając co zawiera załącznik',
              'Otworzyć załącznik i zapisać go na dysku twardym, a następnie sprawdzić plik programem antywirusowym'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Jakie oznaczenie zgodnie z Dyrektywami Rady Europy musi posiadać komputer, by mógł być dopuszczony do sprzedaży na terenie Polski?',
            answers: ['A', 'B', 'C', 'D'],
            correctAnswer: 0,
            img: 'e12/52.jpg'
          },
          {
            question:
              ' Jaką cyfrą został oznaczony procesor na schemacie płyty głównej komputera?',
            answers: ['1', '2', '3', '4'],
            correctAnswer: 0,
            img: 'e12/53.jpg'
          },
          {
            question:
              ' Blok funkcjonalny RAMDAC na schemacie blokowym przedstawia',
            answers: [
              'przetwornik cyfrowo-analogowy z pamięcią RAM',
              'przetwornik analogowo-cyfrowy z pamięcią RAM',
              'pamięć RAM karty graficznej',
              'pamięć ROM karty graficznej'
            ],
            correctAnswer: 0,
            img: 'e12/54.jpg'
          },
          {
            question: ' Na rysunku przedstawiono symbol układu cyfrowego',
            answers: [
              'kodera priorytetu',
              'dekodera priorytetu',
              'multipleksera priorytetu',
              'demultipleksera priorytetu'
            ],
            correctAnswer: 0,
            img: 'e12/55.jpg'
          },
          {
            question:
              ' Znajdujący się w dokumentacji technicznej płyty głównej symbol: "LGA 775" oznacza typgniazda dla procesorów:',
            answers: [
              'których obudowa posiada pola dotykowe',
              'których obudowa posiada piny',
              'które współpracują z szyną systemową o częstotliwości taktowania maksymalnie do 1 333 MHz.',
              'które zawiera mniej połączeń zasilających niż gniazdo dla procesorów w obudowie PGA.'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Na schemacie blokowym, przedstawiającym fragment systemu mikroprocesorowego, symbolem X oznaczono',
            answers: [
              'kontroler przerwań',
              'pamięć cache',
              'kontroler DMA',
              'pamięć stałą ROM'
            ],
            correctAnswer: 0,
            img: 'e12/56.jpg'
          },
          {
            question:
              ' Jaką kartę rozszerzeń komputera przedstawiono na zdjęciu?',
            answers: ['sieciową', 'graficzną', 'dźwiękową', 'telewizyjną (TV)'],
            correctAnswer: 0,
            img: 'e12/57.jpg'
          },
          {
            question:
              ' Cecha systemu operacyjnego, pozwalająca uruchomić równocześnie kilka aplikacji w ramach podziału czasu, przy czym podział czasu realizowany jest przez same aplikacje nosi nazwę',
            answers: [
              'wielozadaniowości kooperatywnej',
              'wielodostępowości',
              'wielozadaniowości z wywłaszczeniem',
              'wieloprogramowości'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Współcześnie pamięci podręczne procesora drugiego poziomu (ang. "L-2 cache") wykonane są z układów pamięci',
            answers: ['SRAM', 'ROM', 'DRAM', 'EEPROM'],
            correctAnswer: 0
          },
          {
            question:
              ' Program "VirtualPC", który można pobrać z witryny firmy Microsoft służy do korzystania:',
            answers: [
              'z wirtualnych systemów operacyjnych na dysku lokalnym',
              'z bezpłatnej pomocy technicznej TechNet.Soft firmy Virtual Soft',
              'z bezpłatnego konta o pojemności 100 MB w ramach hostingu firmy Microsoft',
              'z konta osobistego o pojemności 1 GB w serwerze wirtualnym firmy Microsoft'
            ],
            correctAnswer: 0
          },
          {
            question: ' Zapisywanie kluczy rejestru do pliku nazywamy',
            answers: [
              'eksportowaniem rejestru',
              'kopiowaniem rejestru',
              'modyfikacją rejestru',
              'edycją rejestru'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Polecenie "mmc" systemu Windows 2OOO/Windows XP uruchamia narzędzie do tworzenia, zapisywania oraz otwierania',
            answers: [
              'zestawu narzędzi administracyjnych zwanych konsolami, służących do zarządzania sprzętem i oprogramowaniem',
              'plików multimedialnych, przechowujących filmy',
              'pliku dziennika operacji dyskowych w systemie plików NTFS',
              'katalogu wraz z jego podkatalogami na partycji sformatowanej w systemie plików NTFS'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' W tabeli zamieszczono podstawowe dane techniczne dwóch interfejsów. Wynika z nich, że SATA w porównaniu z ATA ma',
            answers: [
              'większą przepustowość i mniejszą liczbę wyprowadzeń w złączu',
              'mniejszą przepustowość i mniejszą liczbę wyprowadzeń w złączu',
              'większą przepustowość i większą liczbę wyprowadzeń w złączu',
              'mniejszą przepustowość i większą liczbę wyprowadzeń w złączu'
            ],
            correctAnswer: 0,
            img: 'e12/58.jpg'
          },
          {
            question:
              ' fps (ang. frames per second) bezpośrednio odnosi się do',
            answers: [
              'płynności wyświetlania ruchomych obrazów',
              'prędkości przesyłania danych do dysku w standardzie SATA',
              'wydajności układów pamięci RAM',
              'efektywności przepływu informacji na magistrali systemowej'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' W tabeli zamieszczono dane katalogowe procesora AMD Athlon 1333 Model 4 Thunderbird. Z jaką częstotliwością realizowane są przesłania międzyrejestrowe?',
            answers: ['1333 MHz', '133 MHz', '266 MHz', '2666 MHz'],
            correctAnswer: 0,
            img: 'e12/59.jpg'
          },
          {
            question:
              ' Suma liczb szesnastkowych: 4C + C4 zapisana w systemie dziesiętnym wynosi',
            answers: ['272', '270', '271', '273'],
            correctAnswer: 0
          },
          {
            question:
              ' Liczbie 16 bitowej 0011110010101110 zapisanej w systemie dwójkowym odpowiada w systemie szesnastkowym liczba',
            answers: ['3CAE', '3CBE', '3DAE', '3DFE'],
            correctAnswer: 0
          },
          {
            question:
              ' Do zbudowania programowej macierzy dyskowej RAID-1 należy użyć minimum',
            answers: [
              '2 dysków',
              '1 dysku podzielonego na dwie partycje',
              '3 dysków',
              '4 dysków'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Instalując system operacyjny Linux należy skorzystać z systemu plików',
            answers: ['ReiserFS', 'FAT32', 'NTFS 4', 'NTFS 5'],
            correctAnswer: 0
          },
          {
            question: ' Monitor powinien spełniać standard',
            answers: ['EPA Energy Star', 'TN GNS', 'ISO-9N01', 'TCO Energy66.'],
            correctAnswer: 0
          },
          {
            question:
              ' Szkodliwe samoreplikujące się programy komputerowe wykorzystujące luki w systemie operacyjnym, które potrafią uzupełniać i zmieniać swoją funkcjonalność to',
            answers: ['robaki', 'rootkity', 'trojany', 'wirusy'],
            correctAnswer: 0
          },
          {
            question: ' Symbol graficzny odnosi się do standardu urządzeń',
            answers: ['FireWire', 'LPT', 'USB', 'SCSI-12'],
            correctAnswer: 0,
            img: 'e12/60.jpg'
          },
          {
            question: ' Zdjęcie przedstawia 168-stykową pamięć',
            answers: ['SDRAM', 'SIPP', 'SIMM', 'RIMM'],
            correctAnswer: 0,
            img: 'e12/61.jpg'
          },
          {
            question: ' Rysunek przedstawia schemat blokowy zasilacza',
            answers: [
              'awaryjnego (UPS)',
              'impulsowego komputera',
              'analogowego komputera',
              'impulsowego matrycy RAID'
            ],
            correctAnswer: 0,
            img: 'e12/62.jpg'
          },
          {
            question:
              ' Na schemacie element odpowiedzialny za dekodowanie instrukcji jest oznaczony cyfrą',
            answers: ['3', '1', '2', '6'],
            correctAnswer: 0,
            img: 'e12/63.jpg'
          },
          {
            question:
              ' Na schemacie blokowym karty dźwiękowej element zmieniający sygnał analogowy na sygnał cyfrowy jest oznaczony cyfrą',
            answers: ['4', '2', '3', '5'],
            correctAnswer: 0,
            img: 'e12/64.jpg'
          },
          {
            question:
              ' Rozpowszechniona forma oprogramowania zgodna z zasadą "najpierw wypróbuj, a potem kup", to',
            answers: ['Shareware', 'OEM', 'Software', 'Freeware'],
            correctAnswer: 0
          },
          {
            question: ' Z nośników optycznych największą pojemność ma płyta',
            answers: ['Blu-Ray', 'CD', 'DVD', 'DVD-RAM'],
            correctAnswer: 0
          },
          {
            question:
              ' W którym z rejestrów wewnętrznych procesor zapisuje dodatkowe cechy wyniku wykonywanej operacji?',
            answers: [
              'W rejestrze flagowym',
              'W akumulatorze',
              'W liczniku rozkazów',
              'We wskaźniku stosu'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Który z portów panelu tylnego płyty głównej jest oznaczany w dokumentacji jako port standardu RS232C?',
            answers: ['COM', 'LPT', 'PS/2', 'USB'],
            correctAnswer: 0
          },
          {
            question: ' Termin SLI dotyczy',
            answers: [
              'kart graficznych',
              'dysków twardych',
              'kart sieciowych',
              'modemów'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' W tabeli zamieszczono podstawowe dane techniczne dwóch interfejsów. Wynika z nich, że SATA w porównaniu z ATA ma',
            answers: [
              'większą przepustowość i mniejszą liczbę wyprowadzeń w złączu',
              'mniejszą przepustowość i mniejszą liczbę wyprowadzeń w złączu',
              'większą przepustowość i większą liczbę wyprowadzeń w złączu',
              'mniejszą przepustowość i większą liczbę wyprowadzeń w złączu'
            ],
            correctAnswer: 0,
            img: 'e12/65.jpg'
          },
          {
            question:
              ' W tabeli przedstawiono parametry katalogowe czterech twardych dysków. Największą średnią szybkość odczytu danych zapewnia dysk',
            answers: ['A', 'B', 'C', 'D'],
            correctAnswer: 0,
            img: 'e12/66.jpg'
          },
          {
            question:
              ' Tablica partycji zakończona jest sygnaturą (ciągiem bitów) 55AA (szesnastkowo). Odpowiadająca jej wartość dwójkowa to',
            answers: [
              '101010110101010',
              '1,0101010010101E+015',
              '1,0100101101001E+015',
              '101101001011010'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Zgodnie z zamieszczonym fragmentem testu w komputerze jest zainstalowana',
            answers: [
              'pamięć fizyczna 0,49 GB i plik wymiany 1,20 GB',
              'pamięć fizyczna 0,50 GB i plik wymiany 1,00 GB',
              'pamięć fizyczna 0,49 GB i plik wymiany 1,22 GB',
              'pamięć fizyczna 0,70 GB i plik wymiany 1,22 GB'
            ],
            correctAnswer: 0,
            img: 'e12/67.jpg'
          },
          {
            question:
              ' Pracownik serwisu w wyniku przeprowadzonego testu na serwerze NetWare uzyskał informację, że obiekt ma prawo',
            answers: [
              'dodawania lub usuwania swoich właściwości',
              'czytania swoich właściwości',
              'dodawania swoich właściwości',
              'porównania swoich właściwości'
            ],
            correctAnswer: 0,
            img: 'e12/68.jpg'
          },
          {
            question:
              ' Kamera cyfrowa przy zgrywaniu filmu transmituje na dysk 220 MB na minutę. Na podstawie diagramu wybierz interfejs o najmniejszej szybkości transferu zapewniający warunki takiej transmisji',
            answers: ['1394a', 'USB 1', 'USB 2', '1394b'],
            correctAnswer: 0,
            img: 'e12/69.jpg'
          },
          {
            question:
              ' Jednoczesne zwiększenie szybkości operacji (zapis/odczyt) i bezpieczeństwa przechowywania danych umożliwia macierz dyskowa',
            answers: ['RAID 50', 'RAID 0', 'RAID 1', 'RAID 3'],
            correctAnswer: 0
          },
          {
            question:
              ' W systemie Linux dla uzyskania uprawnień administratora należy w oknie terminala użyć polecenia',
            answers: ['su root', 'df', '$HOME', 'uname -s'],
            correctAnswer: 0
          },
          {
            question:
              ' Szkodliwe samoreplikujące się programy komputerowe wykorzystujące luki w systemie operacyjnym, które potrafią uzupełniać i zmieniać swoją funkcjonalność to',
            answers: ['robaki', 'rootkity', 'trojany', 'wirusy'],
            correctAnswer: 0
          },
          {
            question: ' Program testujący wydajność sprzętu komputerowego to',
            answers: ['benchmark', 'checkdisk', 'exploit', 'sniffer'],
            correctAnswer: 0
          },
          {
            question:
              ' Jaką nazwę nosi niepożądane oprogramowanie komputerowe instalowane najczęściej bez wiedzy użytkownika?',
            answers: ['Malware', 'Shareware', 'Slackware', 'Freeware'],
            correctAnswer: 0
          },
          {
            question:
              ' Na zdjęciu przedstawiono złącza karty graficznej. Złącze cyfrowe to',
            answers: [
              'wyłącznie złącze 3',
              'wyłącznie złącze 1',
              'wyłącznie złącze 2',
              'złącze 1 i 2'
            ],
            correctAnswer: 0,
            img: 'e12/70.jpg'
          },
          {
            question:
              ' Które złącze na tylnym panelu komputera oznaczane jest przedstawionym symbolem graficznym?',
            answers: ['8P8C', 'HDMI', 'USB', 'PS/2'],
            correctAnswer: 0,
            img: 'e12/71.jpg'
          },
          {
            question: ' Przedstawiony symbol graficzny oznacza',
            answers: [
              'przetwornik analogowo-cyfrowy',
              'generator dźwięku',
              'filtr dolnoprzepustowy',
              'przetwornik cyfrowo-analogowy'
            ],
            correctAnswer: 0,
            img: 'e12/72.jpg'
          },
          {
            question:
              ' Na schemacie działania skanera numerem 1 oznaczono element, którego zadaniem jest',
            answers: [
              'zamiana sygnału optycznego na sygnał elektryczny',
              'wzmacnianie sygnału optycznego',
              'wzmacnianie sygnału elektrycznego',
              'zamiana sygnału analogowego na sygnał cyfrowy'
            ],
            correctAnswer: 0,
            img: 'e12/73.jpg'
          },
          {
            question:
              ' Element oznaczony numerem 1 na schemacie blokowym procesora jest odpowiedzialny za',
            answers: [
              'wykonywanie operacji na liczbach zmiennoprzecinkowych',
              'przechowywanie wyniku operacji',
              'wykonywanie operacji na blokach danych',
              'przechowywanie dodatkowych informacji o wykonywanej operacji'
            ],
            correctAnswer: 0,
            img: 'e12/74.jpg'
          },
          {
            question:
              ' Element oznaczony numerem 1 na schemacie blokowym karty graficznej',
            answers: [
              'zawiera matrycę znaków trybu tekstowego',
              'zamienia sygnał cyfrowy na sygnał analogowy',
              'generuje sygnał RGB na wyjście karty graficznej',
              'przechowuje dane wyświetlane, w trybie graficznym'
            ],
            correctAnswer: 0,
            img: 'e12/75.jpg'
          },
          {
            question:
              ' Który z elementów oznaczonych numerami od 1 do 4, przedstawionych na schemacie blokowym frame grabbera i opisanym we fragmencie dokumentacji technicznej, służy do wymiany danych z innymi urządzeniami przetwarzającymi obraz wideo bez niepotrzebnego obciążania magistrali PCI?',
            answers: ['2', '1', '3', '4'],
            correctAnswer: 0,
            img: 'e12/76.jpg'
          },
          {
            question:
              ' W ramce zamieszczono zawartość jednego z plików systemu operacyjnego MS Windows. Jest to plik',
            answers: [
              'tekstowy, zawierający listę zainstalowanych systemów operacyjnych',
              'dziennika, zawierający informacje o zainstalowanych urządzeniach',
              'wykonywalny, uruchamiający edytor rejestru systemu',
              'wsadowy, służący do uruchamiania instalatora'
            ],
            correctAnswer: 0,
            img: 'e12/77.jpg'
          },
          {
            question:
              ' Domyślnie, w systemie Linux, twardy dysk w standardzie SATA oznaczony jest',
            answers: ['sda', 'fda', 'ida', 'ide'],
            correctAnswer: 0
          },
          {
            question:
              ' Przedstawione parametry katalogowe dotyczą routera posiadającego pamięć masową',
            answers: ['64 MB', '3 MB', '32 MB', '680 MB'],
            correctAnswer: 0,
            img: 'e12/78.jpg'
          },
          {
            question:
              ' Ile maksymalnie dysków twardych można podłączyć bezpośrednio do płyty głównej, której fragment specyfikacji przedstawiono w ramce?',
            answers: ['5', '2', '4', '8'],
            correctAnswer: 0,
            img: 'e12/79.jpg'
          },
          {
            question:
              ' Do sporządzenia projektu sieci komputerowej dla budynku szkoły najlepiej wykorzystać edytor grafiki wektorowej, którym jest program',
            answers: ['AutoCad', 'MS Excel', 'MS Publisher', 'Adobe Photoshop'],
            correctAnswer: 0
          },
          {
            question:
              ' Zakres we/wy kontrolera DMA zapisany w postaci heksadecymalnej wynosi 0094-009F, a w systemie dziesiętnym',
            answers: ['148-159', '73-249', '1168-3984', '2368-2544'],
            correctAnswer: 0
          },
          {
            question:
              ' Adres komórki pamięci podano w postaci binarnej 1110001110010100. W systemie szesnastkowym adres zapisuje się w postaci',
            answers: ['E394', '493', '7E+092', 'D281'],
            correctAnswer: 0
          },
          {
            question:
              ' W ramce umieszczono wyniki badania dysku twardego. Jakie działania należy podjąć po ich analizie, aby poprawić sprawność dysku?',
            answers: [
              'Zdefragmentować dysk',
              'Oczyścić dysk',
              'Sformatować dysk',
              'Podzielić dysk na partycje'
            ],
            correctAnswer: 0,
            img: 'e12/80.jpg'
          },
          {
            question:
              ' Firma zajmująca się sprzątaniem musi drukować faktury tekstowe w czterech egzemplarzach jednocześnie, na papierze samokopiującym. Jaką drukarkę powinna wybrać?',
            answers: ['Igłową', 'Laserową', 'Atramentową', 'Termosublimacyjną'],
            correctAnswer: 0
          },
          {
            question:
              ' W biurze rachunkowym znajduje się w jednym pomieszczeniu sześć komputerów podłączonych do koncentratora kablem UTP Cat 5e. Pracownicy użytkujący te komputery muszą mieć możliwość drukowania bardzo dużej ilości (powyżej 5 tys. stron miesięcznie) dokumentów monochromatycznych. Aby koszty zakupu sprzętu i eksploatacji były jak najniższe należy wybrać:',
            answers: [
              'laserową drukarkę sieciową z portem RJ45',
              'atramentowe urządzenie wielofunkcyjne ze skanerem i faksem',
              'laserowe drukarki lokalne podłączone do każdego z komputerów',
              'drukarkę atramentową podłączoną do jednego z komputerów i udostępnianą w sieci'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Trzech użytkowników komputera z zainstalowanym systemem operacyjnym Windows XP Pro ma swoje foldery z dokumentami w katalogu głównym dysku C:. Na dysku jest zainstalowany system plików NTFS. Użytkownicy mają założone w systemie konta z ograniczeniami. W jaki sposób należy zabezpieczyć folder każdego z użytkowników, by pozostali nie mogli modyfikować zawartości folderu?',
            answers: [
              'Przypisać uprawnienia NTFS do modyfikacji folderu tylko właściwemu użytkownikowi',
              'Nadać dokumentom atrybut Ukryty we właściwościach folderów',
              'Każdemu z użytkowników zmienić typ konta na konto z ograniczeniami',
              'Nie udostępniać dokumentów w zakładce Udostępnianie we właściwościach folderu'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Główny księgowy musi mieć możliwość odzyskiwania zawartości folderów z kopii zapasowej plików. Do jakiej grupy użytkowników systemu MS Windows XP należy go przydzielić?',
            answers: [
              'Operatorzy kopii zapasowych',
              'Użytkownicy z ograniczeniami',
              'Użytkownicy pulpitu zdalnego',
              'Operatorzy konfiguracji sieci'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Jakie oprogramowanie, zapobiegające włamaniu do sieci, należy zainstalować na serwerze udostępniającym połączenie z internetem?',
            answers: ['FireWall', 'DNS', 'DHCP', 'Active Directory'],
            correctAnswer: 0
          },
          {
            question:
              ' Komputer jest najprawdopodobniej zainfekowany boot wirusem. Jakie działanie spowoduje usunięcie wirusa w sposób najmniej inwazyjny dla systemu operacyjnego?',
            answers: [
              'Przeskanowanie programem antywirusowym z bootowalnego nośnika',
              'Restart systemu',
              'Uruchomienie systemu w trybie awaryjnym',
              'Ponowne zainstalowanie systemu operacyjnego'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Jednym z zaleceń dotyczących ochrony antywirusowej jest skanowanie całego komputera.Zgodnie z tym zaleceniem komputer należy skanować',
            answers: [
              'systematycznie, na przykład raz w tygodniu',
              'jedynie w sytuacji, gdy podejrzewamy zainfekowanie wirusem',
              'tylko wtedy, gdy nie działa w systemie monitor antywirusowy',
              'jedynie po aktualizacji baz programu antywirusowego'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Do zarządzania programami i usługami uruchamianymi wraz ze startem systemu operacyjnego w Windows 7 należy wykorzystać program',
            answers: [
              'msconfig.exe',
              'config.sys',
              'autorun.inf',
              'autoexec.bat'
            ],
            correctAnswer: 0
          },
          {
            question: ' GRUB, LILO, NTLDR to',
            answers: [
              'programy rozruchowe',
              'wersje głównego interfejsu sieciowego',
              'aplikacje do aktualizacji BIOS-u',
              'firmware dla dysku twardego'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Użytkownik zamierza zainstalować 32-bitowy system operacyjny Windows 7. Ile minimalnie pamięci RAM musi posiadać komputer, aby była możliwa praca systemu w trybie graficznym ?',
            answers: ['1 GB', '256 MB', '512 MB', '2 GB'],
            correctAnswer: 0
          },
          {
            question:
              ' Na nowym komputerze program antywirusowy należy zainstalować',
            answers: [
              'zaraz po zainstalowaniu systemu operacyjnego',
              'w trakcie instalacji systemu operacyjnego',
              'przed zainstalowaniem systemu operacyjnego',
              'po zainstalowaniu pobranych z Internetu programów'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Materiałem eksploatacyjnym dla kolorowej drukarki laserowej jest',
            answers: [
              'kartridż z tonerem',
              'przetwornik CMOS',
              'podajnik papieru',
              'pamięć wydruku'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' W jednostce ALU do akumulatora została wpisana liczba dziesiętna 240. Jaka jest jej binarna reprezentacja?',
            answers: ['11110000', '11111000', '11111100', '11111110'],
            correctAnswer: 0
          },
          {
            question:
              ' Instalowanie systemów Linux oraz Windows 7 przebiegło bez żadnych utrudnień. Systemy zainstalowały się poprawnie z domyślnymi ustawieniami. Na tym samym komputerze, przy identycznej konfiguracji, podczas instalowania systemu Windows XP wyświetlony został komunikat o braku dysków twardych co może świadczyć o',
            answers: [
              'braku sterowników',
              'złym ułożeniu zworek w dysku twardym',
              'uszkodzeniu logicznym dysku twardego',
              'źle ustawionym bootowaniu napędów'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' W systemie Windows 7 w celu skopiowania katalogu c:\\test wraz z podkatologami na dysk przenośny f:\\ należy użyć polecenia',
            answers: [
              'xcopy c:\\test f:\\test/E',
              'copy c:\\test f:\\test/E',
              'copy f:\\test c:\\test/E',
              'xcopy f:\\test c:\\test/E'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Która czynność doprowadzi do nieodwracalnej utraty danych, w przypadku uszkodzenia systemu plików?',
            answers: [
              'Formatowanie dysku.',
              'Włączenie systemu operacyjnego.',
              'Skanowanie programem antywirusowym.',
              'Przeprowadzenie skanowania scandiskiem.'
            ],
            correctAnswer: 0
          },
          {
            question: ' Plik ma rozmiar 2 KiB. Jest to',
            answers: ['16384 bitów', '2000 bitów', '2048 bitów', '16000 bitów'],
            correctAnswer: 0
          },
          {
            question:
              ' Wskaż właściwą kolejność operacji przygotowujących nowy laptop do pracy.',
            answers: [
              'Montaż baterii, podłączenie zewnętrznego zasilania sieciowego, włączenie laptopa, instalacja systemu operacyjnego, wyłączenie laptopa po instalacji systemu operacyjnego',
              'Podłączenie zewnętrznego zasilania sieciowego, włączenie laptopa, instalacja systemu operacyjnego, montaż baterii, wyłączenie laptopa po instalacji systemu operacyjnego',
              'Podłączenie zewnętrznego zasilania sieciowego, włączenie laptopa, montaż baterii, instalacja systemu operacyjnego, wyłączenie laptopa po instalacji systemu operacyjnego',
              'Włączenie laptopa, montaż baterii, instalacja systemu operacyjnego, podłączenie zewnętrznego zasilania sieciowego, wyłączenie laptopa po instalacji systemu operacyjnego'
            ],
            correctAnswer: 0
          },
          {
            question: ' Zaletą systemu plików NTFS jest',
            answers: [
              'możliwość szyfrowania folderów i plików',
              'możliwość sformatowania nośnika o małej pojemności (od 1,44MiB)',
              'zapisywanie plików o nazwie dłuższej niż 255 znaków',
              'przechowywanie tylko jednej kopi tabeli plików'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Okresowych kopii zapasowych dysku serwera nie można tworzyć na wymiennych nośnikach typu',
            answers: ['płyty DVD-ROM', 'karty SD', 'karty MMC', 'płyty CD-RW'],
            correctAnswer: 0
          },
          {
            question:
              ' W dokumentacji jednego z elementów składowych komputera zamieszczono informację, że urządzenie wspiera OpenGL. Dokumentacja dotyczy',
            answers: [
              'karty graficznej.',
              'mikroprocesora.',
              'karty sieciowej.',
              'dysku twardego.'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Użytkownik komputera udostępnia publicznie posiadane pliki w sieci Internet. Prawa autorskie zostaną naruszone, gdy udostępni',
            answers: [
              'obraz płyty systemu operacyjnego Windows 7 Home',
              'otrzymany dokument urzędowy.',
              'własne autorskie filmy z demonstracji ulicznych.',
              'wykonane przez siebie zdjęcia obiektów wojskowych.'
            ],
            correctAnswer: 0
          },
          {
            question: ' Niskopoziomowe formatowanie dysku IDE HDD',
            answers: [
              'jest wykonywane przez producenta dysku.',
              'tworzy partycję rozszerzoną.',
              'tworzy partycję podstawową.',
              'umieszcza program rozruchowy w MBR'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Przy uruchamianiu komputera pojawia się komunikat "CMOS checksum error press F1 to continue press DEL to setup". Wciśnięcie klawisza DEL spowoduje',
            answers: [
              'wejście do BIOS-u komputera',
              'usunięcie pliku setup',
              'skanowanie zawartości pamięci CMOS',
              'przejście do konfiguracji systemu Windows'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' W systemie Windows XP w celu utworzenia nowego użytkownika o nazwie egzamin z hasłem qwerty należy użyć polecenia',
            answers: [
              'net user egzamin qwerty /add',
              'useradd egzamin qwerty /add',
              'adduser egzamin qwerty /add',
              'user net egzamin qwerty /add'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Którego oprogramowania nie można używać na urządzeniach należących do instytucji rządowych lub edukacyjnych?',
            answers: [
              'Microsoft Security Essentials',
              'AbiWord',
              'Microsoft Word',
              'Windows Defender'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' W dokumentacji płyty głównej jest informacja „Wsparcie dla S/PDIF Out”. Oznacza to, że dana płyta główna zawiera',
            answers: [
              'cyfrowe złącze sygnału audio',
              'cyfrowe złącze sygnału video',
              'analogowe złącze sygnału wyjścia video',
              'analogowe złącze sygnału wejścia video'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' W systemie Windows XP do zmiany typu systemu plików z FAT32 na NTFS należy wykorzystać program',
            answers: ['convert.exe', 'replace.exe', 'subst.exe', 'attrib.exe'],
            correctAnswer: 0
          },
          {
            question:
              ' W systemie operacyjnym Ubuntu do monitorowania w czasie rzeczywistym uruchomionych procesów i programów służy polecenie',
            answers: ['top', 'ps', 'proc', 'sysinfo'],
            correctAnswer: 0
          },
          {
            question:
              ' W celu dokonania aktualizacji zainstalowanego systemu operacyjnego Linux Ubuntu należy użyć polecenia',
            answers: [
              'apt-get upgrade',
              'yum upgrade',
              'kernel update',
              'system update'
            ],
            correctAnswer: 0
          },
          {
            question: ' Wskaż nieprawidłowy podział dysku MBR na partycje',
            answers: [
              '1 partycja podstawowa i 2 rozszerzone',
              '3 partycje podstawowe i 1 rozszerzona',
              '2 partycje podstawowe i 1 rozszerzona',
              '1 partycja podstawowa i 1 rozszerzona'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Interfejs SLI (ang. Scalable Link Interface) służy do łączenia',
            answers: [
              'dwóch kart graficznych',
              'czytnika kart z płytą główną',
              'napędu Blu-ray z kartą dźwiękową',
              'karty graficznej z odbiornikiem TV'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Jaki będzie koszt wymiany karty graficznej w komputerze, jeśli karta kosztuje 250 zł, jej wymiana zajmie pracownikowi serwisu 80 min, a każda rozpoczęta roboczo godzina kosztuje 50 zł?',
            answers: ['350 zł', '250 zł', '300 zł', '400 zł'],
            correctAnswer: 0
          },
          {
            question:
              ' W systemie operacyjnym Fedora katalogi domowe użytkowników umieszczone są w katalogu',
            answers: ['/home', '/bin', '/user', '/users'],
            correctAnswer: 0
          },
          {
            question:
              ' W systemie operacyjnym Ubuntu konto użytkownika student można usunąć za pomocą polecenia',
            answers: [
              'userdel student',
              'del user student',
              'net user student /del',
              'user net student /del'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Użytkownik systemu Windows otrzymuje komunikaty o zbyt małej pamięci wirtualnej. Problem ten można rozwiązać przez',
            answers: [
              'zwiększenie pamięci RAM',
              'zamontowanie dodatkowej pamięci cache procesora',
              'zwiększenie rozmiaru pliku virtualfile.sys',
              'zamontowanie dodatkowego dysku'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Program WinRaR wyświetlił okienko informacyjne pokazane na rysunku. Z jakiego typu licencji na program korzystał do tej pory użytkownik?',
            answers: ['shareware', 'adware', 'freeware', 'public domain'],
            correctAnswer: 0,
            img: 'e12/81.jpg'
          },
          {
            question: ' Licencja Windows OEM nie pozwala na wymianę',
            answers: [
              'sprawnej płyty głównej na model o lepszych parametrach',
              'sprawnego zasilacza na model o lepszych parametrach',
              'sprawnej karty graficznej na model o lepszych parametrach',
              'sprawnego dysku twardego na model o lepszych parametrach'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Po uruchomieniu komputera pojawił się komunikat "Non-system disk or disk error. Replace and strike any key when ready". Przyczyną może być',
            answers: [
              'dyskietka włożona do napędu',
              'brak pliku ntldr',
              'uszkodzony kontroler DMA',
              'skasowany BIOS komputera'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' W drukarce laserowej do utrwalania wydruku wykorzystuje się',
            answers: [
              'rozgrzane wałki',
              'promienie lasera',
              'taśmy transmisyjne',
              'głowice piezoelektryczne'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Jaki typ złącza musi posiadać płyta główna, aby użytkownik mógł zainstalować przedstawioną na rysunku kartę graficzną?',
            answers: ['PCIe x16', 'AGP', 'PCI', 'PCIe x1'],
            correctAnswer: 0,
            img: 'e12/82.jpg'
          },
          {
            question:
              ' Które konto nie jest wbudowanym w systemie Windows XP ?',
            answers: ['admin', 'gość', 'pomocnik', 'administrator'],
            correctAnswer: 0
          },
          {
            question:
              ' System S.M.A.R.T. służy do monitorowania pracy i wykrywania błędów',
            answers: [
              'dysków twardych',
              'płyty głównej',
              'kart rozszerzeń',
              'napędów płyt CD/DVD'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Po zainstalowaniu Systemu Windows 7 została w BIOS komputera zmieniona konfiguracja dysku SATA z AHCI na IDE. Po ponownym uruchomieniu komputera system będzie',
            answers: [
              'resetował się podczas uruchamiania',
              'uruchamiał się bez zmian',
              'działał szybciej',
              'działał wolniej'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' W systemie operacyjnym Ubuntu do utworzenia archiwum danych należy wykorzystać program',
            answers: ['tar', 'set', 'sed', 'awk'],
            correctAnswer: 0
          },
          {
            question:
              ' Interfejsem umożliwiającym przesyłanie danych pomiędzy pokazaną na rysunku płyta główna, a urządzeniem zewnętrznym, bez równoczesnego zasilania urządzenia zewnętrznego poprzez interfejs jest',
            answers: ['SATA', 'PCI', 'USB', 'PCIe'],
            correctAnswer: 0,
            img: 'e12/83.jpg'
          },
          {
            question:
              ' W systemach operacyjnych Windows ograniczenie użytkownikom dostępu do poszczególnych katalogów, plików lub dysków umożliwia system plików',
            answers: ['NTFS', 'FAT16', 'FAT32', 'EXT2'],
            correctAnswer: 0
          },
          {
            question:
              ' W dokumentacji technicznej procesora Intel Xeon Processor E3-1220, producent podaje następujące parametry: # of Cores: 4 # of Threads: 4 Clock Speed: 3.1 GHz Max Turbo Frequency: 3.4 GHz Intel Smart Cache: 8 MB DMI: 5 GT/s Instruction Set: 64 bit Instruction Set Extensions: SSE4.1/4.2, AVX Embedded Options Available: No Lithography: 32 nm Max TDP: 80 W. Oznacza to, że Menedżer zadań systemu Windows będzie pokazywał historię użycia dla',
            answers: [
              '4 procesorów',
              '2 procesorów',
              '8 procesorów',
              '16 procesorów'
            ],
            correctAnswer: 0,
            img: 'e12/84.jpg'
          },
          {
            question:
              ' Użytkownik systemu Windows otrzymuje komunikaty o zbyt małej pamięci wirtualnej. Problem ten można rozwiązać przez',
            answers: [
              'zwiększenie pamięci RAM',
              'zamontowanie dodatkowego dysku',
              'zwiększenie rozmiaru pliku virtualfilo.sys',
              'zamontowania dodatkowej pamięci cache procesora'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' W hurtowni materiałów budowlanych istnieje konieczność jednoczesnego drukowania faktur w kilku egzemplarzach. Należy użyć drukarki',
            answers: [
              'igłowej',
              'laserowej',
              'atramentowej',
              'termosublimacyjnej'
            ],
            correctAnswer: 0
          },
          {
            question: ' Złącze IrDA do komunikacji bezprzewodowej jest',
            answers: [
              'złączem szeregowym',
              'złączem pozwalającym transmitować dane na odległość 100m',
              'rozwinięciem systemu BlueTooth',
              'złączem radiowym'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Na który z nośników pamięci zewnętrznej, nie przedostanie się wirus podczas odczytywania jego zawartości?',
            answers: [
              'na płytę DVD-ROM',
              'na kartę SD',
              'na pamięć Flash',
              'na dysk zewnętrzny'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Adres MAC karty sieciowej zapisany w postaci binarnej wynosi 00000000-00010100-10000101-10001011-01101011-10001010. Który z zapisów jest postacią heksadecymalną tego adresu?',
            answers: [
              '00-14-85-8B-6B-8A',
              '00-12-85-8B-6B-8A',
              '00-14-85-8C-6C-8B',
              '00-16-83-8C-6B-8B'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Któremu zapisowi heksadecymalnemu odpowiada zapis binarny adresu komórki pamięci 0111 1100 1111 0110?',
            answers: ['7CF6', '5AF3', '7BF5', '5DF6'],
            correctAnswer: 0
          },
          {
            question:
              ' Jaką funkcję pełni podzespół wskazany strzałką na schemacie chipsetu płyty głównej ?',
            answers: [
              'Pozwala wykorzystać magistralę o szerokości 128 bitów do przesyłania danych pomiędzy pamięcią RAM, a kontrolerem pamięci',
              'Umożliwia połączenie i korzystanie z pamięci DDR 400 jako DUAL Channel w celu zachowania zgodności z DUAL Channel DDR2 800',
              'Umożliwia korzystanie z pamięci DDR3-800 i DDR2-800 jako DUAL Channel',
              'Pozwala wykorzystać typowe pamięci DDR SDRAM'
            ],
            correctAnswer: 0,
            img: 'e12/85.jpg'
          },
          {
            question: ' Na rysunku przedstawiono gniazdo',
            answers: ['D-SUB', 'DVI', 'HDMI', 'FIRE WIRE'],
            correctAnswer: 0,
            img: 'e12/86.jpg'
          },
          {
            question:
              ' Na podstawie zamieszczonej w tabeli informacji dotyczącej dysku twardego określ, który wniosek jest prawdziwy',
            answers: [
              'Defragmentacja nie jest konieczna, fragmentacja całkowita wynosi 9%',
              'Defragmentacja jest zbędna, fragmentacja plików wynosi 0%',
              'Dysk wymaga defragmentacji, fragmentacja całkowita wynosi 19%',
              'Należy zdefragmentować dysk, fragmentacja wolnego miejsca wynosi 19%'
            ],
            correctAnswer: 0,
            img: 'e12/87.jpg'
          },
          {
            question:
              ' W czasie przeprowadzania procedury POST na ekranie pojawia się komunikat "CMOS Battery State Low". Co w takiej sytuacji należy zrobić, aby komunikat nie pojawił się w przyszłości',
            answers: [
              'Wymienić baterię na płycie głównej komputera',
              'Podłączyć zasilanie sieciowe',
              'Wymienić akumulatory laptopa na nowe',
              'Ustawić poprawnie opcje konfiguracyjne CMOS dotyczące zasilania'
            ],
            correctAnswer: 0
          },
          {
            question: ' Niskopoziomowe formatowanie dysku IDE HDD',
            answers: [
              'jest wykonywane przez producenta dysku.',
              'tworzy partycje rozszerzoną.',
              'tworzy partycję podstawową.',
              'umieszcza program rozruchowy w MBR.'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Procedura POST (Power-On Self Test) uruchamiana przez BIOS komputera odpowiada za',
            answers: [
              'przeprowadzenie testu poprawności działania podstawowych podzespołów komputera, wykonywanego przy każdym uruchomieniu lub restarcie',
              'włączenie lub wyłączenie automatycznego rozpoznawania urządzeń pracujących w standardzie P&P',
              'predefiniowane typy schematów zarządzania energią oraz daje możliwość zdefiniowania własnych ustawień',
              'kolejność przeszukiwania zainstalowanych urządzeń w celu znalezienia sektora startowego podczas uruchamiania komputera'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Element oznaczony cyfrą 1 na schemacie karty dźwiękowej',
            answers: [
              'tworzy dźwięk o odpowiednim czasie trwania, wykorzystując krótkie próbki dźwięku',
              'zamienia sygnał audio na sygnał wideo',
              'usuwa dźwięk pochodzący z kilku źródeł',
              'eliminuje szumy na linii, wykorzystując krótkie próbki szumu.'
            ],
            correctAnswer: 0,
            img: 'e12/88.jpg'
          },
          {
            question:
              ' Instalowanie systemów Linux oraz Windows 7 przebiegało bez żadnych utrudnień. Systemy zainstalowały się poprawnie z domyślnymi ustawieniami. Na tym samym komputerze, przy identycznej konfiguracji, podczas instalowania systemu Windows XP wyświetlony został komunikat o braku dysków twardych, co może świadczyć o',
            answers: [
              'braku sterowników.',
              'złym ułożeniu zworek w dysku twardym.',
              'uszkodzeniu logicznym dysku twardego.',
              'źle ustawionym bootowaniu napędów.'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Jaka usługa umożliwia zdalną instalację systemu operacyjnego?',
            answers: ['RIS', 'IIS', 'IRC', 'DNS'],
            correctAnswer: 0
          },
          {
            question:
              ' Na schemacie, przedstawiającym budowę modemu, za funkcję modulacji i demodulacji odpowiada podzespół oznaczony cyfrą',
            answers: ['3', '1', '2', '4'],
            correctAnswer: 0,
            img: 'e12/89.jpg'
          },
          {
            question: ' Główny rekord rozruchowy dysku twardego to',
            answers: ['MBR', 'BOOT', 'FDISK', 'NTLDR'],
            correctAnswer: 0
          },
          {
            question: ' Prefetching to',
            answers: [
              'wykonanie przez procesor fazy pobrania następnego rozkazu w trakcie realizacji fazy wykonania rozkazu poprzedniego',
              'cecha systemu operacyjnego umożliwiająca równoczesne wykonanie kilku procesów',
              'sposób pracy procesora polegający na przejściu do tryby pracy procesora Intel 8086',
              'właściwość procesorów umożliwiająca korzystanie ze wspólnych danych przez rdzenie, bez pośrednictwa pamięci umieszczonej na zewnątrz procesora'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Dla dysku twardego, wartość współczynnika MTBF (Mean Time Between Failure) podawana jest w',
            answers: ['godzinach', 'latach', 'dniach', 'minutach'],
            correctAnswer: 0
          },
          {
            question:
              ' W dokumentacji technicznej płyty głównej jest zapis Supports up to Athlon XP 3000+ procesor. Oznacza on, że płyta główna obsługuję procesory Athlon.',
            answers: [
              'nie nowsze niż Athlon XP 3000+',
              'zgodnie z mobile Athlon 64',
              'wszystkie o częstotliwości poniżej 3000 MHz',
              'wszystkie o częstotliwości powyżej 3000 MHz'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' W modelu RGB, w systemie szesnastkowym, kolor jest zapisany następująco: ABCDEF. Natężenie koloru niebieskiego w tym zapisie ma wartość dziesiętną',
            answers: ['239', '171', '186', '205'],
            correctAnswer: 0
          },
          {
            question:
              ' Który zapis w systemie binarnym odpowiada liczbie 111 zapisanej w systemie dziesiętnym?',
            answers: ['1101111', '1110111', '1111110', '1111111'],
            correctAnswer: 0
          },
          {
            question:
              ' W systemie Linux plik ma ustawione uprawnienia na 541. Właściciel może plik:',
            answers: [
              'odczytać i wykonać',
              'modyfikować',
              'tylko wykonać',
              'odczytać, zapisać i wykonać'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Industry Standard Architecture jest standardem magistrali, zgodnie z którym szyna danych ma szerokość:',
            answers: ['16 bitów', '128 bitów', '64 bitów', '32 bitów'],
            correctAnswer: 0
          },
          {
            question:
              ' Która z wymienionych pamięci RAM wykorzystuje do przesyłania danych wznoszące i opadające zbocze sygnału zegarowego?',
            answers: ['DDR', 'SIMM', 'SDR', 'SIPP'],
            correctAnswer: 0
          },
          {
            question: ' Na rysunku przedstawiono gniazdo:',
            answers: ['DisplayPort', 'HDMI', 'SATA', 'DVI'],
            correctAnswer: 0,
            img: 'e12/90.jpg'
          },
          {
            question:
              ' Które z poleceń systemu Linux powoduje zakończenie procesu?',
            answers: ['kill', 'end', 'null', 'dead'],
            correctAnswer: 0
          },
          {
            question: ' Równoważnym zapisem 2^32 bajtów jest zapis:',
            answers: ['4 GiB', '1 GiB', '2 GB', '8 GB'],
            correctAnswer: 0
          },
          {
            question:
              ' Do wyświetlania zawartości katalogu w systemie Linux służy polecenie:',
            answers: ['ls', 'cd', 'rpm', 'pwd'],
            correctAnswer: 0
          },
          {
            question: ' Polecenie msconfig uruchamia w systemie Windows:',
            answers: [
              'narzędzie konfiguracji systemu',
              'panel sterowania',
              'menedżera zadań',
              'menedżera plików'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Użytkownik systemu Windows otrzymuje komunikaty o zbyt małej pamięci wirtualnej. Problem ten można rozwiązać przez:',
            answers: [
              'zwiększenie pamięci RAM',
              'zamontowanie dodatkowej pamięci cache procesora',
              'zwiększenie rozmiaru pliku virtualfile.sys',
              'zamontowanie dodatkowego dysku'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' W systemie Windows, zainstalowanym w wersji obsługującej przydziały dyskowe, użytkownik o nazwie Gość',
            answers: [
              'może należeć do grup lokalnych i do grup globalnych',
              'nie może należeć do żadnej grupy',
              'może należeć tylko do grupy globalnej',
              'może należeć tylko do grupy o nazwie Goście'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Które określenie dotyczące konta użytkownika Active Directory w systemie Windows jest prawdziwe?',
            answers: [
              'Nazwa logowania użytkownika może mieć długość większą niż 100 bajtów',
              'Nazwa logowania użytkownika musi mieć mniej niż 21 znaków',
              'Nazwa logowania użytkownika musi mieć mniej niż 20 znaków',
              'Nazwa logowanie użytkownika nie może mieć długości większej niż 100 bajtów'
            ],
            correctAnswer: 0
          },
          {
            question: ' Harmonogram zadań w systemie Windows pozwala przypisać',
            answers: [
              'Więcej niż pięć terminów wykonania dla wskazanego programu',
              'Nie więcej niż trzy terminy wykonania dla wskazanego programu',
              'Nie więcej niż cztery terminy wykonania dla wskazanego programu',
              'Nie więcej niż pięć terminów wykonania dla wskazanego programu'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Na płycie głównej uległa uszkodzeniu zintegrowana karta sieciowa. Komputer nie posiadadysku twardego ani żadnych innych napędów takich jak stacja dysków czy CD-ROM. Klient twierdzi, że w sieci firmowej komputery nie posiadają żadnych napędów i wszystko "czyta"się z serwera. W celu zapewnienia utraconej funkcjonalności należy zamontować',
            answers: [
              'w gnieździe rozszerzeń kartę sieciową samodzielnie wspierającą funkcję Preboot Execution Environment',
              'w komputerze dysk twardy',
              'w komputerze napęd CD-ROM',
              'w gnieździe rozszerzeń kartę sieciową samodzielnie wspierającą funkcję Postboot Execution Enumeration'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Podłączając drukarkę wyposażoną w złącze równoległe do komputera, który posiada tylko porty USB należy zainstalować adapter',
            answers: [
              'USB na LPT',
              'USB na PS/2',
              'USB na COM',
              'USB na RS-232'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Do oprogramowania typu malware (z ang. malicious software) nie należy oprogramowanie typu:',
            answers: [
              'computer aided manufacturing',
              'scumware',
              'keylogger',
              'exploit'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Jeśli jednostka alokacji ma 1024 bajty, to pliki zamieszczone w tabeli zajmą na dysku:',
            answers: ['5 klastrów', '3 klastry', '4 klastry', '6 klastrów'],
            correctAnswer: 0,
            img: 'e12/91.jpg'
          },
          {
            question:
              ' Dysk z systemem plików FAT32, na którym często wykonywane są operacje kasowania starych plików oraz zapisu nowych plików, ulega:',
            answers: [
              'fragmentacji',
              'defragmentacji',
              'kolokacji',
              'relokacji'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' W czterech sklepach sprzedawany jest ten sam komputer w różnych cenach. Najtaniej można go nabyć w sklepie:',
            answers: ['C', 'A', 'B', 'D'],
            correctAnswer: 0,
            img: 'e12/92.jpg'
          },
          {
            question:
              ' W systemie Linux hasła użytkowników są przechowywane w pliku:',
            answers: ['passwd', 'users', 'groups', 'password'],
            correctAnswer: 0
          },
          {
            question: ' Postcardware to rodzaj',
            answers: [
              'licencji oprogramowania',
              'karty sieciowej',
              'wirusa komputerowego',
              'usługi poczty elektronicznej'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Licencja wolnego i otwartego oprogramowania, to licencja',
            answers: ['GNU GPL', 'Trial', 'OEM', 'Adware'],
            correctAnswer: 0
          },
          {
            question:
              ' Przedstawiony na rysunku symbol graficzny oznacza opakowanie',
            answers: [
              'nadającego się do recyklingu',
              'zgodne z normą TCO',
              'wielokrotnego użytku',
              'wyprodukowane z surowców wtórnych'
            ],
            correctAnswer: 0,
            img: 'e12/93.jpg'
          },
          {
            question:
              ' W systemie plików NTFS zmianę nazwy pliku umożliwia uprawnienie',
            answers: [
              'modyfikacji',
              'zapisu',
              'odczytu',
              'odczytu i wykonania'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Bezprzewodową transmisję danych zapewnia standard, którego elementem jest interfejs',
            answers: ['IrDA', 'LFH60', 'HDMI', 'DVI'],
            correctAnswer: 0
          },
          {
            question:
              ' Jaki wyraz należałoby wstawić w wykropkowanym miejscu na schemacie blokowym ilustrującym budowę systemu operacyjnego?',
            answers: [
              'Powłoka',
              'Sterowniki',
              'Programy użytkowe',
              'Benchmarki'
            ],
            correctAnswer: 0,
            img: 'e12/94.jpg'
          },
          {
            question:
              ' Której liczbie dziesiętnej odpowiada liczba FF zapisana w systemie szesnastkowym?',
            answers: ['255', '248', '250', '254'],
            correctAnswer: 0
          },
          {
            question: ' Na fotografii przedstawiono',
            answers: ['taśmę barwiącą', 'tusz', 'tuner', 'kartridż'],
            correctAnswer: 0,
            img: 'e12/95.jpg'
          },
          {
            question:
              ' Po uruchomieniu komputera pojawił się komunikat: Non-system disk or disk error. Replace and strike any key when ready. Przyczyną może być',
            answers: [
              'dyskietka włożona do napędu',
              'brak pliku NTLDR',
              'uszkodzony kontroler DMA',
              'skasowany BIOS komputera'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' W celu powiększenia lub zmniejszania ikony na pulpicie należy kręcić kółkiem myszy, przytrzymując jednocześnie klawisz:',
            answers: ['CTRL', 'SHIFT', 'ALT', 'TAB'],
            correctAnswer: 0
          },
          {
            question: ' Na fotografii przedstawiono',
            answers: [
              'zaciskarkę wtyków RJ45',
              'reflektometr',
              'tester sieciowy',
              'zaciskarkę do tulejek'
            ],
            correctAnswer: 0,
            img: 'e12/96.jpg'
          },
          {
            question:
              ' Wewnętrzny dysk twardy IDE zasilany jest poprzez złącze typu',
            answers: ['Molex', 'SATA', 'PCIe', 'ATX'],
            correctAnswer: 0
          },
          {
            question:
              ' Ile maksymalnie partycji podstawowych możemy utworzyć na dysku twardym z MBR?',
            answers: ['4', '8', '24', '26'],
            correctAnswer: 0
          },
          {
            question:
              ' Na dysku należy zapisać 100 tysięcy pojedynczych plików, każdy o rozmiarze 2570 bajtów. Zapisane pliki zajmą najmniej miejsca na dysku o jednostce alokacji wynoszącej',
            answers: ['3072 bajty', '8192 bajty', '4096 bajtów', '2048 bajtów'],
            correctAnswer: 0
          },
          {
            question:
              ' Po podłączeniu sprawnej klawiatury do dowolnego z portów USB nie można wybrać awaryjnego trybu uruchomienia systemu Windows. Mimo to, klawiatura po uruchomieniu systemu w normalnym trybie, działa prawidłowo. Wskazuje to na:',
            answers: [
              'niepoprawne ustawienia BIOS-u',
              'uszkodzony kontroler klawiatury',
              'uszkodzone porty USB',
              'uszkodzony zasilacz'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Aby sprawdzić, który program najbardziej obciąża procesor w systemie Windows, należy uruchomić program:',
            answers: ['menedżer zadań', 'msconfig', 'regedit', 'dxdiag'],
            correctAnswer: 0
          },
          {
            question:
              ' W systemie Windows ustawienia bieżącego użytkownika komputera zapisane są w gałęzi rejestru o skróconej nazwie:',
            answers: ['HKCU', 'HKCC', 'HKCR', 'HKLM'],
            correctAnswer: 0
          },
          {
            question:
              ' Brak odporności na utratę danych z uwagi na fizyczną awarię jednego z dysków jest cechą',
            answers: ['RAID 0', 'RAID 3', 'RAID 2', 'RAID 1'],
            correctAnswer: 0
          },
          {
            question:
              ' Rodzina protokołów, której cechą jest wspólna technika szyfrowania, to',
            answers: ['SSH', 'PPP', 'UDP', 'SPX/IPX'],
            correctAnswer: 0
          },
          {
            question:
              ' Który adres IP w systemie dziesiętnym odpowiada adresowi IP 10101010.00001111.10100000.11111100 zapisanemu w systemie binarnym?',
            answers: [
              '170.15.160.252',
              '170.14.160.252',
              '171.14.159.252',
              '171.15.159.252'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Suma liczb binarnych 1010 + 111 zapisana w systemie dziesiętnym wyniesie',
            answers: ['17', '16', '18', '19'],
            correctAnswer: 0
          },
          {
            question: ' Jednostka obliczeń zmiennoprzecinkowych to',
            answers: ['FPU', 'ALU', 'RPU', 'AND'],
            correctAnswer: 0
          },
          {
            question:
              ' Przydzielaniem czasu procesora do określonych zadań zajmuje się',
            answers: [
              'system operacyjny',
              'chipset',
              'pamięć RAM',
              'cache procesora'
            ],
            correctAnswer: 0
          },
          {
            question: ' Najkrótszy czas dostępu posiada',
            answers: [
              'pamięć cache procesora',
              'dysk twardy',
              'pamięć USB',
              'pamięć RAM'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Przedstawiona na rysunku karta rozszerzeń posiada chłodzenie',
            answers: ['pasywne', 'aktywne', 'wymuszone', 'symetryczne'],
            correctAnswer: 0,
            img: 'e12/97.jpg'
          },
          {
            question:
              ' Błąd systemu Windows typu STOP Error (Blue Screen), polegający na odwoływaniu się systemu do nieprawidłowych danych w pamięci operacyjnej, to',
            answers: [
              'PAGE_FAULT_IN_NONPAGE_AREA',
              'NTFS_FILE_SYSTEM',
              'UNMOUNTABLE_BOOT_VOLUME',
              'UNEXPECTED_KERNEL_MODE_TRAP'
            ],
            correctAnswer: 0
          },
          {
            question: ' Na rysunku przedstawiono złącze zasilania',
            answers: [
              'ATX12V zasilania procesora',
              'stacji dyskietek',
              'dysków wewnętrznych SATA',
              'Molex do dysków twardych'
            ],
            correctAnswer: 0,
            img: 'e12/98.jpg'
          },
          {
            question:
              ' Po instalacji z domyślnymi ustawieniami system Windows XP nie obsługuje systemu plików',
            answers: ['EXT', 'NTFS', 'FAT16', 'FAT32'],
            correctAnswer: 0
          },
          {
            question:
              ' Wyłączenie automatycznej aktualizacji systemu Windows powoduje',
            answers: [
              'zablokowanie samodzielnego pobierania uaktualnień przez system',
              'automatyczne pobieranie aktualizacji bez jej instalacji',
              'zablokowanie każdego sposobu pobierania aktualizacji systemu',
              'automatyczne sprawdzenie, czy jest dostępna aktualizacja i powiadomienie o niej użytkownika'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Klawiszem F5 standardowo w programie Explorator systemu Windows aktywowana jest czynność:',
            answers: [
              'odświeżania zawartości bieżącego okna',
              'kopiowania',
              'otwierania okna wyszukiwania',
              'uruchamiania drukowania zrzutu ekranowego'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Polecenie md w wierszu poleceń systemu Windows służy do',
            answers: [
              'tworzenia katalogu',
              'tworzenia pliku',
              'zmiany nazwy pliku',
              'przejścia do katalogu nadrzędnego'
            ],
            correctAnswer: 0
          },
          {
            question: ' Głównym celem mechanizmu Plug and Play jest:',
            answers: [
              'wykrycie nowo podłączonego sprzętu i automatycznie przydzielenie mu zasobów',
              'automatyczne uruchomienie ostatnio otwartej gry',
              'automatyczne tworzenie kopii danych na nowo podłączonym nośniku pamięci',
              'automatyczne odinstalowanie sterowników, które przez dłuższy czas nie były używane'
            ],
            correctAnswer: 0
          },
          {
            question: ' Dziedziczenie uprawnień polega na:',
            answers: [
              'przeniesieniu uprawnień z obiektu nadrzędnego na obiekt podrzędny',
              'przekazywaniu uprawnień jednego użytkownika drugiemu',
              'nadawaniu uprawnień użytkownikowi przez administratora',
              'przeniesieniu uprawnień z obiektu podrzędnego na obiekt nadrzędny'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' W systemie Windows domyślne konto administratora po jego wyłączeniu i ponownym uruchomieniu komputera',
            answers: [
              'pozostaje dostępne po uruchomieniu systemu w trybie awaryjnym',
              'nie pozwala na zmianę hasła dostępu do konta',
              'umożliwia uruchamianie niektórych usług z tego konta',
              'jest niedostępne, gdy system uruchomi się w trybie awaryjnym'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Program komputerowy służący do zarządzania strukturą plików i katalogów, to:',
            answers: [
              'menedżer plików',
              'system plików',
              'edytor tekstowy',
              'menedżer urządzeń'
            ],
            correctAnswer: 0
          },
          {
            question: ' Programu CHKDSK używa się w celu',
            answers: [
              'naprawy logicznej struktury dysku',
              'defragmentacji dysku',
              'zmiany systemu plików',
              'naprawy fizycznej struktury dysku'
            ],
            correctAnswer: 0
          },
          {
            question: ' Program firewall stosuje się w celu zabezpieczenia',
            answers: [
              'sieci LAN i systemów przed intruzami',
              'dysku przed przepełnieniem',
              'systemu przed błędnymi programami',
              'procesora przed przeciążeniem ze strony systemu'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Programem typu wirus, którego głównym celem jest rozprzestrzenianie się w sieci komputerowej, jest:',
            answers: ['robak', 'trojan', 'backdoor', 'keylogger'],
            correctAnswer: 0
          },
          {
            question:
              ' Przerywając pracę na komputerze zachowujemy możliwości szybkiego powrotu do pracy po wybraniu w systemie Windows opcji:',
            answers: [
              'stanu wstrzymania',
              'wylogowania',
              'zamknięcia systemu',
              'ponownego uruchomienia'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Zgodnie z zamieszczonym cennikiem, średni koszt wyposażenia stanowiska komputerowego wynosi:',
            answers: ['4350,00 zł', '2000,00 zł', '5000,50 zł', '6700,00 zł'],
            correctAnswer: 0,
            img: 'e12/99.jpg'
          },
          {
            question:
              ' W systemie Windows, zainstalowanym w wersji obsługującej przydziały dyskowe, użytkownik o nazwie Gość',
            answers: [
              'może należeć do grup lokalnych i do grup globalnych',
              'nie może należeć do żadnej grupy',
              'może należeć tylko do grupy globalnej',
              'może należeć tylko do grupy o nazwie Goście'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Oprogramowanie OEM (Original Equipment Manufacturer) przypisane jest do',
            answers: [
              'komputera (lub jego części), na którym jest zainstalowane',
              'właściciela/nabywcy komputera',
              'systemu operacyjnego zainstalowanego na danym komputerze',
              'do wszystkich komputerów w danym gospodarstwie domowym'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Licencja CAL (Client Access License) daje użytkownikowi prawo',
            answers: [
              'korzystania z usług udostępnionych przez serwer',
              'zmiany kodu programu',
              'używania programu bezterminowo',
              'kopiowania programu na nośniki zewnętrzne'
            ],
            correctAnswer: 0
          },
          {
            question: ' Oznakowanie CE informuje, że',
            answers: [
              'wyrób spełnia wymagania pod względem bezpieczeństwa użytkowania, ochrony zdrowia i ochrony środowiska',
              'wyrób jest zgodny z normami ISO',
              'wyrób jest wyprodukowany na terenie Unii Europejskiej',
              'producent sprawdził produkt pod względem wydajności i ergonomii'
            ],
            correctAnswer: 0
          },
          {
            question: ' Recykling można określić jako',
            answers: ['odzysk', 'produkcję', 'segregację', 'oszczędność'],
            correctAnswer: 0
          },
          {
            question:
              ' Gorące podłączenie (hot-plug) oznacza, że podłączane urządzenie jest',
            answers: [
              'sprawne zaraz po podłączeniu, bez konieczności wyłączania bądź restartowania systemu',
              'sterowane temperaturą',
              'kompatybilne z komputerem',
              'sprawne po zainstalowaniu właściwych sterowników'
            ],
            correctAnswer: 0
          },
          {
            question: ' Interfejsem wewnętrznym komputera jest',
            answers: ['AGP', 'DVI', 'IrDA', 'RJ-45'],
            correctAnswer: 0
          },
          {
            question: ' Urządzeniem wskazującym jest',
            answers: ['ekran dotykowy', 'skaner', 'drukarka', 'pamięć USB'],
            correctAnswer: 0
          },
          {
            question: ' Wielkość plamki monitora LCD jest równa',
            answers: [
              'odległości od początku jednego do początku następnego piksela',
              'wielkości jednego piksela wyświetlanego na ekranie',
              'wielkości obszaru na którym wyświetla się 1024 pikseli',
              'wielkości obszaru, na którym można wyświetlić wszystkie kolory obsługiwane przez monitor'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Standardem komunikacji pomiędzy skanerem a programem graficznym jest',
            answers: ['TWAIN', 'USB', 'OPC', 'SCAN'],
            correctAnswer: 0
          },
          {
            question: ' Ustawa z dnia 14 grudnia 2012r. o odpadach nakazuje',
            answers: [
              'poddanie odpadów w pierwszej kolejności odzyskowi',
              'składowanie odpadów maksymalnie przez 1 rok',
              'spalenie odpadów w jak najwyższej temperaturze',
              'neutralizację odpadów w dowolny sposób w jak najkrótszym czasie'
            ],
            correctAnswer: 0
          },
          {
            question: ' W drukarce igłowej materiałem eksploatacyjnym jest',
            answers: ['taśma barwiąca', 'tusz', 'toner', 'pigment'],
            correctAnswer: 0
          },
          {
            question:
              ' Która macierz RAID jest zbudowana w oparciu o replikację dwóch lub więcej dysków fizycznych?',
            answers: ['RAID 1', 'RAID 0', 'RAID 3', 'RAID 5'],
            correctAnswer: 0
          },
          {
            question:
              ' Który interfejs pozwala przesyłać dane w postaci cyfrowej i analogowej pomiędzy komputerem a monitorem?',
            answers: ['DVI-I', 'HDMI', 'DFP', 'DISPLAY PORT'],
            correctAnswer: 0
          },
          {
            question: ' Powodem niekontrolowanego zapełnienia dysku może być',
            answers: [
              'wirus komputerowy',
              'częsta defragmentacja',
              'zbyt małe jednostki alokacji plików',
              'źle skonfigurowana pamięć wirtualna'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Aby uporządkować pliki na dysku w celu przyspieszenia pracy systemu, należy:',
            answers: [
              'wykonać defragmentację',
              'usunąć pliki tymczasowe',
              'odinstalować nieużywane programy',
              'przeskanować dysk programem antywirusowym'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' W celu odzyskania danych usuniętych przy pomocy kombinacji klawiszy Shift + Delete, należy',
            answers: [
              'skorzystać z oprogramowania do odzyskiwania danych',
              'odzyskać je z kosza systemowego',
              'użyć kombinacji klawiszy Shift+Insert',
              'odzyskać je z katalogu plików tymczasowych'
            ],
            correctAnswer: 0
          },
          {
            question: ' Obraz dysku tworzy się, aby',
            answers: [
              'zabezpieczyć system, aplikacje i dane przed poważną awarią komputera',
              'przyspieszyć pracę z wybranymi plikami na tym dysku',
              'zabezpieczyć dane przed nieupoważnionymi użytkownikami',
              'zabezpieczyć aplikacje przed nieupoważnionymi użytkownikami'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' W systemach Windows XP Pro/Windows Vista Business/Windows 7 Pro/Windows 8 Pro, opcją gwarantująca poufność danych dla użytkowników korzystających z tego samego komputera, których dane mogą być wykorzystywane wyłącznie przez nich samych, jest',
            answers: [
              'samodzielnie przypisywanie plikom atrybutu: zaszyfrowany',
              'korzystanie z własnym kont z ograniczeniami',
              'samodzielne przypisywanie plikom atrybutu: ukryty',
              'korzystanie z własnych kont z uprawnieniami administratora'
            ],
            correctAnswer: 0
          },
          {
            question: ' Notacja #102816 oznacza zapis w systemie',
            answers: ['szesnastkowym', 'dziesiętnym', 'dwójkowym', 'ósemkowym'],
            correctAnswer: 0
          },
          {
            question:
              ' Liczba 110011(2) zapisana w systemie dziesiętnym ma postać',
            answers: ['51', '50', '52', '53'],
            correctAnswer: 0
          },
          {
            question: ' Liczba 45(H) zapisana w systemie ósemkowym ma postać',
            answers: ['105', '102', '108', '110'],
            correctAnswer: 0
          },
          {
            question:
              ' Przerzutnik bistabilny przechowuje bit informacji w pamięci',
            answers: ['SRAM', 'DRAM', 'SDRAM', 'DDR SDRAM'],
            correctAnswer: 0
          },
          {
            question:
              ' Dodatkowe cechy wyniku operacji wykonywanej przez jednostkę arytmetyczno - logiczną ALU zawiera',
            answers: [
              'rejestr flagowy',
              'akumulator',
              'wskaźnik stosu',
              'licznik rozkazów'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Poprawę jakości skanowania można uzyskać poprzez zmianę',
            answers: [
              'rozdzielczości',
              'wielkości wydruku',
              'formatu pliku wejściowego',
              'rozmiaru skanowanego dokumentu'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Który typ dysków jest podłączany do gniazda IDE płyty głównej komputera?',
            answers: ['ATA', 'SSD', 'SCSI', 'FLASH'],
            correctAnswer: 0
          },
          {
            question: ' Standard podstawki procesora bez nóżek to',
            answers: ['LGA', 'PGA', 'SPGA', 'CPGA'],
            correctAnswer: 0
          },
          {
            question: ' Pokazany na rysunku symbol graficzny oznacza złącze',
            answers: ['FIRE WIRE', 'DVI', 'COM', 'HDMI'],
            correctAnswer: 0,
            img: 'e12/100.jpg'
          },
          {
            question:
              ' Do ilu maksymalnie GB pamięci RAM może uzyskać dostęp 32-bitowa wersja systemu Windows?',
            answers: ['4 GB', '2 GB', '8 GB', '12 GB'],
            correctAnswer: 0
          },
          {
            question:
              ' W którym typie macierzy, przestrzeń wszystkich dysków fizycznych jest widziana jako jeden dysk logiczny?',
            answers: ['RAID 0', 'RAID 1', 'RAID 2', 'RAID 5'],
            correctAnswer: 0
          },
          {
            question:
              ' Do przywracania struktury kluczy rejestru z kopii zapasowej w systemie Windows stosowane jest polecenie',
            answers: ['reg restore', 'reg add', 'reg load', 'reg import'],
            correctAnswer: 0
          },
          {
            question: ' W systemie Linux polecenie chown umożliwia',
            answers: [
              'zmianę właściciela pliku',
              'przeniesienie pliku',
              'naprawę systemu plików',
              'zmianę parametrów pliku'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' W systemie Linux wyświetlenie informacji o uruchomionych procesach umożliwia polecenie',
            answers: ['ps', 'ls', 'su', 'rm'],
            correctAnswer: 0
          },
          {
            question:
              ' W systemie Windows uruchomienie usługi dotyczącej wydajności komputera realizowane jest za pomocą polecenia',
            answers: [
              'perfmon.msc',
              'secpol.msc',
              'services.msc',
              'compmgmt.msc'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Programem służącym do diagnozowania połączeń między hostami w systemie Windows jest',
            answers: ['ping', 'route', 'ipconfig', 'traceroute'],
            correctAnswer: 0
          },
          {
            question:
              ' W dokumentacji technicznej procesora umieszczonego na płycie głównej komputera szybkość zegara podaje się w',
            answers: ['GHz', 's', 'kHz', 'GHz/s'],
            correctAnswer: 0
          },
          {
            question:
              ' Autorskie prawo osobiste twórcy do programu komputerowego',
            answers: [
              'nigdy nie wygasa',
              'trwa 50 lat od daty pierwszej publikacji',
              'trwa 70 lat od daty pierwszej publikacji',
              'trwa wyłącznie przez czas życia jego twórcy'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Oprogramowanie komputerowe, z którego można korzystać za darmo i bez ograniczeń czasowych, rozpowszechniane jest w ramach licencji typu',
            answers: ['public domain', 'trial', 'shareware', 'donationware'],
            correctAnswer: 0
          },
          {
            question:
              ' Grupowa licencja oprogramowania Microsoft to licencja typu',
            answers: ['MOLP', 'GNU', 'OEM', 'EULA'],
            correctAnswer: 0
          },
          {
            question:
              ' Asynchronicznym interfejsem szeregowym zgodnym ze standardem RS-232 jest port',
            answers: ['COM', 'LPT', 'ECP', 'EPP'],
            correctAnswer: 0
          },
          {
            question:
              ' Interfejs USB 3.0 umożliwia transfer danych z prędkością do',
            answers: ['5 Gb/s', '120 MB/s', '400 Mb/s', '4 GB/s'],
            correctAnswer: 0
          },
          {
            question:
              ' System oświetlenia oparty o trójkolorowe diody LED wykorzystują skanery typu',
            answers: ['CIS', 'CCD', 'CMOS', 'CMYK'],
            correctAnswer: 0
          },
          {
            question:
              ' Jeżeli rozdzielczość myszy wynosi 200 dpi a monitora Full HD, to przeciągnięcie kursora w poprzek ekranu wymaga przesunięcia myszy o',
            answers: ['około 25 cm', '480 i', '1080 px', 'około 35 cm'],
            correctAnswer: 0
          },
          {
            question:
              ' Technika zwana rytownictwem odnosi się do zasady działania plotera',
            answers: ['grawerującego', 'tnącego', 'laserowego', 'solwentowego'],
            correctAnswer: 0
          },
          {
            question: ' Elementem eksploatacyjnym drukarki laserowej NIE JEST',
            answers: ['głowica', 'bęben', 'wałek grzewczy', 'lampa czyszcząca'],
            correctAnswer: 0
          },
          {
            question:
              ' Klawiatura QWERTY umożliwiająca wprowadzenie znaków charakterystycznych dla języka polskiego nazywana jest również klawiaturą',
            answers: ['programisty', 'polską', 'maszynistki', 'diakrytyczną'],
            correctAnswer: 0
          },
          {
            question:
              ' Dla zmiany zeskanowanego obrazu na tekst należy zastosować oprogramowanie wykorzystujące techniki',
            answers: ['OCR', 'DPI', 'DTP', 'OMR'],
            correctAnswer: 0
          },
          {
            question: ' Do pomiaru wartości rezystancji służy',
            answers: ['omomierz', 'watomierz', 'woltomierz', 'amperomierz'],
            correctAnswer: 0
          },
          {
            question:
              ' Symulowanie stanów logicznych obwodów cyfrowych umożliwia',
            answers: ['impulsator', 'sonometr', 'kalibrator', 'sonda logiczna'],
            correctAnswer: 0
          },
          {
            question:
              ' Jeden długi i dwa krótkie sygnały dźwiękowe BIOS POST firmy AMI oraz AWARD oznaczają błąd',
            answers: [
              'karty graficznej',
              'zegara systemowego',
              'mikroprocesora',
              'karty sieciowej'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Aby sprawdzić integralność systemu plików w systemie Linux należy użyć polecenia',
            answers: ['fsck', 'man', 'mkfs', 'fstab'],
            correctAnswer: 0
          },
          {
            question:
              ' W celu przywrócenia prawidłowych wersji plików systemowych, w systemie Windows stosowane jest narzędzie',
            answers: ['sfc', 'debug', 'verifer', 'replace'],
            correctAnswer: 0
          },
          {
            question:
              ' Narzędzie System Image Recovery dostępne w zaawansowanych opcjach rozruchu systemu Windows 7 umożliwia',
            answers: [
              'przywrócenie działania systemu wykorzystując jego kopię zapasową',
              'naprawę uszkodzonych plików startowych',
              'naprawę działania systemu wykorzystując punkty przywracania',
              'uruchomienie systemu w specjalnym trybie rozwiązywania problemów'
            ],
            correctAnswer: 0
          },
          {
            question: ' Przyczyną awarii drukarki igłowej może być usterka',
            answers: [
              'elektromagnesu',
              'dyszy',
              'termorezystora',
              'elektrody ładującej'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' W celu zwolnienia adresu IP dla danej karty sieciowej w systemie Windows, należy zastosować polecenie systemowe',
            answers: [
              'ipconfig /release',
              'ipconfig /renew',
              'ipconfig /flushdns',
              'ipconfig /displaydns'
            ],
            correctAnswer: 0
          },
          {
            question: ' Plik messages w systemie Linux przechowuje',
            answers: [
              'ogólne informacje o zdarzeniach systemowych',
              'kody błędów systemowych',
              'dane dotyczące uwierzytelniania',
              'komunikaty związane z inicjacją systemu'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Które z wymienionych poleceń jest stosowane w celu naprawy głównego rekordu rozruchowego dysku twardego systemu z rodziny Windows?',
            answers: ['fixmbr', 'fixboot', 'bcdedit', 'bootcfg'],
            correctAnswer: 0
          },
          {
            question:
              ' Podczas przeglądania stron WWW, w celu podniesienia bezpieczeństwa prywatnych danych, jest wskazane wyłączenie w opcjach przeglądarki',
            answers: [
              'funkcji zapamiętywania haseł',
              'monitów dotyczących uruchomienia skryptów',
              'powiadamiania o wygasłych certyfikatach',
              'blokady wyskakujących okienek'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Które złącze karty graficznej NIE jest interfejsem cyfrowym?',
            answers: ['D-SUB 15pin', 'DVI-D', 'HDMI', 'Display Port'],
            correctAnswer: 0
          },
          {
            question:
              ' Liczba 3FC7 zapisana w systemie dwójkowym będzie miała postać:',
            answers: [
              '11111111000111',
              '00111110010111',
              '01111111100011',
              '10111011110111'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Koprocesor arytmetyczny, którego rolą w mikroprocesorze jest dokonywanie obliczeń na liczbach zmiennoprzecinkowych został na schemacie oznaczony cyfrą',
            answers: ['4', '1', '2', '3'],
            correctAnswer: 0,
            img: 'e12/101.jpg'
          },
          {
            question: ' Standard ACPI BIOSu komputera odpowiada za',
            answers: [
              'zarządzanie energią i konfiguracją',
              'sprawdzanie poprawności działania podstawowych podzespołów płyty głównej',
              'zmianę ustawień BIOSu',
              'zapamiętanie kolejności bootowania'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Dodatkowa funkcja mikroprocesora Intel Turbo Boost pozwala na',
            answers: [
              'automatyczną regulację częstotliwości pracy mikroprocesora w zależności od obciążenia',
              'wykonywanie większej liczby instrukcji w jednym cyklu zegara',
              'włączenie i wyłączenie elementów mikroprocesora w celu oszczędzania energii',
              'dokonywanie rozległych obliczeń przez dwa niezależne rdzenie, przy czym każdy z nich wykonuje do czterech pełnych instrukcji jednocześnie'
            ],
            correctAnswer: 0
          },
          {
            question: ' Kości pamięci DDR3 SDRAM zasilane są napięciem',
            answers: ['1,5 V', '1,8 V', '2,5 V', '3 V'],
            correctAnswer: 0,
            img: 'e12/102.jpg'
          },
          {
            question: ' Określenie w dyskach twardych oznacza',
            answers: [
              'sumę średniego czasu wyszukiwania i opóźnienia',
              'czas potrzebny na ustawienie głowicy nad odpowiednim cylindrem',
              'czas, w którym dane są przesyłane z talerza do elektroniki dysku',
              'sumę czasu przeskoku pomiędzy dwoma cylindrami i czasu przesyłania danych z talerza do elektroniki dysku'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Wyjście słuchawek lub głośników minijack oznaczone jest na karcie dźwiękowej kolorem',
            answers: ['zielonym', 'różowym', 'niebieskim', 'żółtym'],
            correctAnswer: 0
          },
          {
            question: ' Technologia zapewnia',
            answers: [
              'możliwość podłączenia urządzenia do włączonego komputera',
              'możliwość automatycznego instalowania sterowników po podłączeniu urządzenia',
              'jednoczesne wysyłanie i odbieranie danych',
              'przesyłanie danych tylko w jednym kierunku, lecz szybciej'
            ],
            correctAnswer: 0
          },
          {
            question: ' Układ elektroniczny RAMDAC występuje w',
            answers: [
              'karcie graficznej',
              'karcie dźwiękowej',
              'procesorze',
              'zasilaczu'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Ile klawiszy funkcyjnych znajduje się na klawiaturze w standardzie QWERTY?',
            answers: ['12', '8', '10', '14'],
            correctAnswer: 0
          },
          {
            question:
              ' Jakim poleceniem w systemie Linux, można zmienić prawa dostępu do pliku bądź katalogu?',
            answers: ['chmod', 'attrib', 'iptables', 'chattrib'],
            correctAnswer: 0
          },
          {
            question: ' Przedstawiony na rysunku interfejs to',
            answers: ['HDMI', 'S-Video', 'DisplayPort', 'D-Sub'],
            correctAnswer: 0,
            img: 'e12/103.jpg'
          },
          {
            question:
              ' Jakim poleceniem w systemie Linux, nadamy pełny dostęp wszystkim użytkownikom do zasobów?',
            answers: ['chmod 777', 'chmod 533', 'chmod 666', 'chmod 000'],
            correctAnswer: 0
          },
          {
            question:
              ' AC-72-89-17-6E-B2 to adres fizyczny karty sieciowej zapisany w postaci',
            answers: ['heksadecymalnej', 'binarnej', 'oktalnej', 'dziesiętnej'],
            correctAnswer: 0
          },
          {
            question:
              ' Liczba 10011001100 zapisana w postaci heksadecymalnej ma postać',
            answers: ['4CC', '2E4', 'EF4', '998'],
            correctAnswer: 0
          },
          {
            question: ' Konwerter RAMDAC przetwarza sygnał',
            answers: [
              'cyfrowy na analogowy',
              'analogowy na cyfrowy',
              'zmienny na stały',
              'stały na zmienny'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' W systemie Linux plik ma ustawione uprawnienia na 541. Właściciel może plik',
            answers: [
              'odczytać i wykonać',
              'modyfikować',
              'tylko wykonać',
              'odczytać, zapisać i wykonać'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' W komputerach wykonujących zadania serwerowe, wymagające dużej wydajności, należy zastosować dysk z interfejsem',
            answers: ['SAS', 'ATA', 'USB', 'SATA'],
            correctAnswer: 0
          },
          {
            question:
              ' W technologii Blu-ray nośnik jednokrotnego zapisu oznaczany jest',
            answers: ['BD-R', 'BD', 'BD-RE', 'BD-ROM'],
            correctAnswer: 0
          },
          {
            question:
              ' Który poziom macierzy RAID zapisuje dane równolegle na kilku dyskach jako jedno urządzenie',
            answers: ['RAID 0', 'RAID 1', 'RAID 2', 'RAID 3'],
            correctAnswer: 0
          },
          {
            question:
              ' W systemie plików NTFS zmianę nazwy pliku umożliwia uprawnienie',
            answers: [
              'modyfikacji',
              'zapisu',
              'odczytu',
              'odczytu i wykonania'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Którego polecenia należy użyć w konsoli do naprawy błędów na dysku?',
            answers: ['CHKDSK', 'CHDIR', 'SUBST', 'DISKCOMP'],
            correctAnswer: 0
          },
          {
            question:
              ' W celu powiększenia lub zmniejszenia ikony na pulpicie należy kręcić rolką myszki, przytrzymując jednocześnie klawisz',
            answers: ['CTRL', 'SHIFT', 'ALT', 'TAB'],
            correctAnswer: 0
          },
          {
            question:
              ' Wewnętrzny dysk twardy IDE zasilany jest poprzez złącze typu',
            answers: ['Molex', 'SATA', 'PCIe', 'ATX'],
            correctAnswer: 0
          },
          {
            question:
              ' W systemie Linux do monitorowania w czasie rzeczywistym uruchomionych procesów służy polecenie:',
            answers: ['ps', 'sed', 'proc', 'sysinfo'],
            correctAnswer: 0
          },
          {
            question:
              ' W systemie Windows XP do zmiany typu systemu plików na dysku z FAT32 na NTFS należy skorzystać z programu',
            answers: ['convert', 'replace', 'subst', 'attrib'],
            correctAnswer: 0
          },
          {
            question: ' Jednostka obliczeń zmiennoprzecinkowych to',
            answers: ['FPU', 'ALU', 'RPU', 'AND'],
            correctAnswer: 0
          },
          {
            question: ' Wskaż złącze, które NIE występuje w zasilaczach ATX',
            answers: ['DE-15/HD-15', 'MPC', 'PCI-E', 'SATA Connector'],
            correctAnswer: 0
          },
          {
            question:
              ' Przedstawiona na rysunku karta rozszerzeń posiada chłodzenie',
            answers: ['pasywne', 'aktywne', 'wymuszone', 'symetryczne'],
            correctAnswer: 0,
            img: 'e12/104.jpg'
          },
          {
            question:
              ' Który aplet panelu sterowania w systemie Windows 7 umożliwia ograniczenie czasu pracy użytkownika na komputerze?',
            answers: [
              'Kontrola rodzicielska',
              'Centrum akcji',
              'Windows Defender',
              'Konta użytkowników'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Po instalacji z domyślnymi ustawieniami system Windows XP NIE OBSŁUGUJE systemu plików',
            answers: ['EXT', 'NTFS', 'FAT16', 'FAT32'],
            correctAnswer: 0
          },
          {
            question:
              ' Bezpłatnym programem antywirusowym dostarczanym przez Microsoft dla użytkowników legalnych wersji systemu operacyjnego Windows jest',
            answers: [
              'Microsoft Security Essentials',
              'Microsoft Free Antywirus',
              'Windows Antywirus',
              'Windows Defender'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Licencja oprogramowania umożliwiająca darmowe rozpowszechnianie aplikacji to',
            answers: ['freeware', 'OEM', 'MOLP', 'shareware'],
            correctAnswer: 0
          },
          {
            question: ' Głównym celem mechanizmu Plug and Play jest',
            answers: [
              'wykrycie nowo podłączonego sprzętu i automatycznie przydzielenie mu zasobów',
              'automatycznie uruchamianie ostatnio otwartej gry',
              'automatyczne tworzenie kopii danych na nowo podłączonym nośniku pamięci',
              'automatyczne odinstalowywanie sterowników, które przez dłuższy czas nie były używane'
            ],
            correctAnswer: 0
          },
          {
            question: ' Na rysunku przedstawiono taśmę (kabel) złącza',
            answers: ['ATA', 'SAS', 'SCSI', 'SATA'],
            correctAnswer: 0,
            img: 'e12/105.jpg'
          },
          {
            question:
              ' Interfejs HDMI komputera pozwala na przesyłanie sygnału',
            answers: [
              'cyfrowego video i audio',
              'cyfrowego video',
              'cyfrowego audio',
              'analogowego audio i video'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Licencja CAL(Client Access License) daje użytkownikowi prawo',
            answers: [
              'korzystanie z usług udostępnionych przez serwer',
              'zmiany kodu programu',
              'używanie programu bezterminowo',
              'kopiowanie programu na nośniki zewnętrzne'
            ],
            correctAnswer: 0
          },
          {
            question: ' Program antyspyware chroni przed',
            answers: [
              'programami szpiegującymi',
              'programami typu robak',
              'programami antywirusowymi',
              'atakami typu DoS i DDoS(Denial of Service)'
            ],
            correctAnswer: 0
          },
          {
            question: ' Wielkość plamki monitora LCD jest równa',
            answers: [
              'odległości od początku jednego do początku następnego piksela',
              'wielkości jednego piksela wyświetlanego na ekranie',
              'wielkości obszaru na którym wyświetla się 1024 pikseli',
              'wielkość obszaru, na którym można wyświetlić wszystkie kolory obsługiwane przez monitor'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' W przypadku zaschnięcia dyszy w drukarce atramentowej spowodowanych długimi przestojami należy w pierwszej kolejności',
            answers: [
              'dokonać oczyszczenia dyszy z poziomu odpowiedniego programu',
              'ustawić wydruk ekonomiczny',
              'wymienić mechanizm drukujący',
              'oczyścić dyszę wacikiem nasączonym olejem syntetycznym'
            ],
            correctAnswer: 0
          },
          {
            question: ' Interfejsem wewnętrznym komputera jest',
            answers: ['AGP', 'IrDA', 'D-SUB', 'PCMCIA'],
            correctAnswer: 0
          },
          {
            question:
              ' W drukarce laserowej do utrwalania wydruku na papierze służą',
            answers: [
              'rozgrzane wałki',
              'promienie lasera',
              'bęben transferowy',
              'głowice piezoelektryczne'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Aby uniknąć uszkodzenia układów scalonych, podczas naprawy sprzętu komputerowego należy stosować',
            answers: [
              'opaskę antystatyczną',
              'okulary ochronne',
              'gumowe rękawiczki',
              'skórzane rękawiczki'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' System S.M.A.R.T. przeznaczony jest do monitorowania pracy i wykrywania błędów',
            answers: [
              'dysków twardych',
              'płyty głównej',
              'kart rozszerzeń',
              'napędów płyt CD/DVD'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Wskaż najbardziej prawdopodobną przyczynę wystąpienia komunikatu: przy uruchomieniu komputera',
            answers: [
              'Rozładowana bateria podtrzymująca ustawienia BIOS-u',
              'Usunięty plik setup',
              'Uszkodzona karta graficzna',
              'Skasowana zawartość pamięci CMOS'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' W komunikacie o błędzie systemu informacja wyświetlana w postaci heksadecymalnej oznacza',
            answers: [
              'kod błędu',
              'definicję błędu',
              'nazwę sterownika',
              'odnośnik do systemu pomocy'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Najbardziej prawdopodobną przyczyną słabej jakości wydruku drukarki laserowej, charakteryzującego się widocznym rozmazywaniem tonera jest',
            answers: [
              'zbyt niska temperatura utrwalacza',
              'zacięcie papieru',
              'uszkodzenie rolek',
              'zanieczyszczenie wnętrza drukarki'
            ],
            correctAnswer: 0,
            img: 'e12/106.jpg'
          },
          {
            question:
              ' Ustawienia wszystkich użytkowników komputera zapisane są w gałęzi rejestru o akronimie',
            answers: ['HKU', 'HKCR', 'HKCC', 'HKLM'],
            correctAnswer: 0
          },
          {
            question:
              ' Pliki, które znajdują się w koszu, można odzyskać poprzez zastosowanie polecenia',
            answers: ['Przywróć', 'Wróć', 'Cofnij', 'Ponów'],
            correctAnswer: 0
          },
          {
            question:
              ' Podstawowym mechanizmem ochrony danych znajdujących się na serwerze jest',
            answers: [
              'tworzenie kopii bezpieczeństwa',
              'włączenie ochrony systemu',
              'tworzenie punktu przywracania systemu',
              'automatyczne wykonywanie kompresji danych'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Aby przywrócić ustawienia domyślne płyty głównej w przypadku, gdy nie ma możliwości uruchomienia programu BIOS Setup, należy',
            answers: [
              'przełożyć zworkę na płycie głównej',
              'zaktualizować BIOS Setup',
              'uruchomić ponownie system',
              'doładować baterię na płycie głównej'
            ],
            correctAnswer: 0
          },
          {
            question: ' Kopia różnicowa polega na',
            answers: [
              'kopiowaniu tylko plików, które zostały utworzone lub zmienione od czasu utworzenia ostatniej kopii pełnej',
              'kopiowaniu tylko plików, które zostały utworzone od czasu ostatniej kopii pełnej',
              'kopiowaniu tylko plików, które zostały zmienione od czasu utworzenia ostatniej kopii pełnej',
              'kopiowaniu tylko tej części plików, która została dopisana od czasu utworzenia ostatniej kopii pełnej'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Przedstawiony na rysunku symbol graficzny oznacza opakowanie',
            answers: [
              'nadające się do recyklingu',
              'zgodne z normą TCO',
              'wielokrotnego użytku',
              'wyprodukowane z surowców wtórnych'
            ],
            correctAnswer: 0,
            img: 'e12/107.jpg'
          },
          {
            question:
              ' Ile maksymalnie partycji podstawowych na dysku twardym z tablicą MBR pozwala utworzyć narzędzie Zarządzanie dyskami dostarczone wraz z systemem Windows?',
            answers: ['4', '1', '2', '3'],
            correctAnswer: 0
          },
          {
            question:
              ' W jakim systemie liczbowym są zapisane zakresy We/Wy przedstawione na rysunku?',
            answers: ['Szesnastkowym', 'Binarnym', 'Ósemkowym', 'Dziesiętnym'],
            correctAnswer: 0,
            img: 'e12/108.jpg'
          },
          {
            question:
              ' Podstawowe znaczenie przy budowie stacji roboczej, na której będzie działać wiele wirtualnych maszyn ma:',
            answers: [
              'Liczba rdzeni procesora',
              'Wysokiej klasy karta sieciowa',
              'Zespół chłodzenia wodą',
              'Silna karta graficzna'
            ],
            correctAnswer: 0
          },
          {
            question: ' Złącze przedstawione na zdjęciu umożliwia podłączenie',
            answers: ['Monitora', 'Drukarki', 'Modemu', 'Myszy'],
            correctAnswer: 0,
            img: 'e12/109.jpg'
          },
          {
            question:
              ' Które urządzenie NIE powinno być naprawiane w trakcie używania urządzeń antystatycznych?',
            answers: ['Zasilacz', 'Modem', 'Pamięć', 'Dysk twardy'],
            correctAnswer: 0
          },
          {
            question:
              ' Liczba 10101110110(2) zapisana w systemie szesnastkowym ma postać',
            answers: ['576', 'AE6', '536', 'A76'],
            correctAnswer: 0
          },
          {
            question:
              ' Przedstawioną na rysunku kartę rozszerzeń można zainstalować w komputerze, w którym na płycie głównej jest co najmniej jeden wolny slot',
            answers: ['PCI', 'ISA', 'AGP', 'PCIe'],
            correctAnswer: 0,
            img: 'e12/110.jpg'
          },
          {
            question:
              ' System plików, który umożliwia w systemie Windows kompresję danych i nadawanie uprawnień do folderów i plików, to',
            answers: ['NTFS', 'FAT', 'FAT32', 'EXT'],
            correctAnswer: 0
          },
          {
            question:
              ' Po podłączeniu sprawnej klawiatury do dowolnego z portów USB nie można wybrać awaryjnego trybu uruchomienia systemu Windows. Mimo to, klawiatura po uruchomieniu systemu w normalnym trybie, działa prawidłowo. Wskazuje to na',
            answers: [
              'Niepoprawne ustawienia BIOS-u',
              'Uszkodzony zasilacz',
              'Uszkodzone porty USB',
              'Uszkodzony kontroler klawiatury'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Przy wyborze zasilacza komputerowego największe znaczenie',
            answers: [
              'Ma łączna moc wszystkich podzespołów komputerowych',
              'Ma typ procesora',
              'Ma współczynnik kształtu obudowy',
              'Mają parametry zainstalowanego systemu operacyjnego'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' W systemie operacyjnym Linux ilość wolnego miejsca na dyskach można sprawdzić poleceniem',
            answers: ['df', 'du', 'fstab', 'mkfs'],
            correctAnswer: 0
          },
          {
            question:
              ' Najczęstszą przyczyną rozmazywania się tonera na wydrukach z drukarki laserowej jest',
            answers: [
              'Zbyt niska temperatura utrwalacza',
              'Uszkodzenie rolek',
              'Zacięcie papieru',
              'Zanieczyszczenie wnętrza drukarki'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Za przydzielanie czasu procesora do określonych zadań odpowiada',
            answers: [
              'System operacyjny',
              'Chipset',
              'Pamięć RAM',
              'Cache procesora'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Które konto nie jest kontem wbudowanym w system Windows XP?',
            answers: ['Admin', 'Gość', 'Pomocnik', 'Administrator'],
            correctAnswer: 0
          },
          {
            question:
              ' W systemie Windows 7, do modyfikacji konfiguracji rozruchowej komputera za pomocą linii poleceń, należy zastosować polecenie',
            answers: ['bcdedit', 'bootcfg', 'bootfix', 'config'],
            correctAnswer: 0
          },
          {
            question:
              ' Wyłączenie automatycznej aktualizacji systemu Windows powoduje',
            answers: [
              'Zablokowanie samodzielnego pobierania uaktualnień przez system',
              'Automatycznie pobieranie aktualizacji bez jej instalacji',
              'Zablokowanie każdego sposobu pobierania aktualizacji systemu',
              'Automatyczne sprawdzenie, czy jest dostępna aktualizacja i powiadomienie o niej użytkownika'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Wskaż 24-pinowe lub 29-pinowe złącze żenskie, które może przesyłać skompresowany cyfrowy sygnał na monitor.',
            answers: ['DVI', 'VGA', 'HDMI', 'RCA'],
            correctAnswer: 0
          },
          {
            question: ' Interfejs SATA 2 (3Gb/s) zapewnia przepustowość',
            answers: ['375 MB/s', '150 MB/s', '300 MB/s', '750 MB/s'],
            correctAnswer: 0
          },
          {
            question:
              ' Aby w systemie Windows przydzielić użytkownikowi prawo do zmiany czasu systemowego, należy użyć przystawki',
            answers: [
              'secpol.msc',
              'eventvwr.msc',
              'certmgr.msc',
              'services.msc'
            ],
            correctAnswer: 0
          },
          {
            question: ' Program typu firewall nie chroni przed',
            answers: [
              'Wirusami rozprzestrzeniającymi się pocztą e-mail',
              'Atakami generującymi wzmożony ruch w sieci',
              'Uzyskaniem dostępu do komputera przez hakerów',
              'Szpiegowaniem i wykradaniem poufnych danych użytkownika'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Korzystając z zamieszczonej w tabeli specyfikacji płyty głównej, określ maksymalną liczbę kart rozszerzeń, które można podłączyć do magistrali Peripheral Component Interconnect',
            answers: ['5', '1', '2', '3'],
            correctAnswer: 0,
            img: 'e12/111.jpg'
          },
          {
            question: ' Ile urządzeń może być podłączonych do portu IEEE1394?',
            answers: ['63', '1', '8', '55'],
            correctAnswer: 0
          },
          {
            question:
              ' Które narzędzie należy użyć w systemie Windows do wyświetlenia informacji na temat problemów systemowych?',
            answers: [
              'Podgląd zdarzeń',
              'Zasady grupy',
              'Foldery udostępnione',
              'Harmonogram zadań'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Oprogramowanie, przypisane do jednego komputera lub jego części, uniemożliwiające ponowną instalację na nowszym sprzęcie zakupionym przez tego samego użytkownika, to',
            answers: ['OEM', 'MPL', 'CPL', 'MOLP'],
            correctAnswer: 0
          },
          {
            question:
              ' Umieszczany na urządzeniach symbol, będący certyfikatem zgodności urządzeń pod względem emisji promieniowania, ergonomii, energooszczędności i ekologii, przedstawiono na rysunku',
            answers: ['A', 'B', 'C', 'D'],
            correctAnswer: 0,
            img: 'e12/112.jpg'
          },
          {
            question: ' Który z interfejsów jest portem równoległym?',
            answers: ['IEEE1284', 'USB', 'RS232', 'IEEE1394'],
            correctAnswer: 0
          },
          {
            question:
              ' Na rysunku przedstawiono element, który jest częścią składową',
            answers: ['HDD', 'Plotera', 'Drukarki igłowej', 'Napędu CD-ROM'],
            correctAnswer: 0,
            img: 'e12/113.jpg'
          },
          {
            question:
              ' Jaka kopia w procesie archiwizacji plików pozostawia znacznik archiwizacji?',
            answers: ['Różnicowa', 'Normalna', 'Całościowa', 'Przyrostowa'],
            correctAnswer: 0
          },
          {
            question:
              ' Jakiego typu złącze należy użyć, aby podłączyć zasilanie do CD-ROM?',
            answers: ['Molex', 'Berg', 'Mini-Molex', '20-pinowe ATX'],
            correctAnswer: 0
          },
          {
            question:
              ' Bęben światłoczuły jest niezbędnym elementem działania drukarki',
            answers: ['Laserowej', 'Igłowej', 'Atramentowej', 'Sublimacyjnej'],
            correctAnswer: 0
          },
          {
            question:
              ' Zużyte urządzenie elektryczne lub elektroniczne, na którym umieszczony jest znak przedstawiony na rysunku, należy',
            answers: [
              'Przekazać do punktu odbioru zużytej elektroniki',
              'Przekazać do punktu skupu złomu',
              'Wyrzucić do pojemników na śmieci bytowe',
              'Wyrzucić do pojemników oznaczonych tym znakiem'
            ],
            correctAnswer: 0,
            img: 'e12/114.jpg'
          },
          {
            question: ' Przedstawione na rysunku ustawienia dotyczą',
            answers: ['Modemu', 'Karty sieciowej', 'Drukarki', 'Skanera'],
            correctAnswer: 0,
            img: 'e12/115.jpg'
          },
          {
            question:
              ' Na stabilność obrazu w monitorach CRT znaczący wpływ ma',
            answers: [
              'Częstotliwość odświeżania',
              'Czas reakcji',
              'Wieloczęstotliwość',
              'Odwzorowanie kolorów'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Do wykonania w systemie Linux kopii zapasowej wybranych plików należy z wiersza poleceń zastosować program',
            answers: ['tar', 'set', 'cal', 'gdb'],
            correctAnswer: 0
          },
          {
            question:
              ' Przedstawiony na rysunku znak zgodny ze standardem Energy Star oznacza urządzenie',
            answers: [
              'Energooszczędne',
              'O podwyższonym poborze mocy',
              'Będące zwycięzcą plebiscytu EnergyStar',
              'Wyprodukowane przez firmę EnergyStar Co'
            ],
            correctAnswer: 0,
            img: 'e12/116.jpg'
          },
          {
            question:
              ' Co pozwala utrzymać równomierny rozkład ciepła między procesorem a radiatorem?',
            answers: [
              'Mieszanka termiczna',
              'Pasta grafitowa',
              'Silikonowy spray',
              'Klej'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Przedstawiony na rysunku wpis w dzienniku zdarzeń zalicza się do zdarzeń typu',
            answers: [
              'Informacje',
              'Błędy',
              'Ostrzeżenia',
              'Inspekcja niepowodzeń'
            ],
            correctAnswer: 0,
            img: 'e12/117.jpg'
          },
          {
            question:
              ' Nośniki danych takie jak dysk twardy przechowują informacje w porcjach zwanych sektorami, które mają rozmiar',
            answers: ['512B', '128B', '512KB', '1024KB'],
            correctAnswer: 0
          },
          {
            question:
              ' Które polecenie w systemie Linux uruchamia sprawdzanie dysku oraz umożliwia naprawę jego błędów?',
            answers: ['fsck', 'lshw', 'fdisk', 'mkfs'],
            correctAnswer: 0
          },
          {
            question:
              ' W systemie Linux narzędziem do monitorowania użycia procesora, pamięci, procesów oraz obciążenia systemu z poziomu powłoki jest',
            answers: ['top', 'pwd', 'dxdiag', 'passwd'],
            correctAnswer: 0
          },
          {
            question:
              ' Liczba szesnastkowa 29A zapisana w systemie binarnym będzie miała postać:',
            answers: ['1010011010', '1001011010', '1010010110', '1000011010'],
            correctAnswer: 0
          },
          {
            question:
              ' Który typ pamięci należy umieścić na płycie głównej komputera w miejscu wskazanym strzałką?',
            answers: ['SD-RAM DDR3', 'SO-DIMM DDR2', 'SIMM', 'FLASH'],
            correctAnswer: 0,
            img: 'e12/118.jpg'
          },
          {
            question:
              ' Do zamiany kodu źródłowego na program wykonywalny służy',
            answers: ['kompilator', 'debuger', 'emulator', 'interpreter'],
            correctAnswer: 0
          },
          {
            question:
              ' Zgodnie z obowiązującymi przepisami BHP odległość oczu od ekranu monitora powinna wynosić',
            answers: ['40-75 cm', '20-39 cm', '39-49 cm', '75-110 cm'],
            correctAnswer: 0
          },
          {
            question:
              ' W celu dokonania aktualizacji zainstalowanego systemu operacyjnego Linux Ubuntu należy użyć polecenia',
            answers: [
              'apt-get upgrade',
              'yum upgrade',
              'kernel update',
              'system update'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Do uruchomienia edytora rejestru w systemie Windows należy użyć narzędzia',
            answers: ['regedit', 'msconfig', 'ipconfig', 'cmd'],
            correctAnswer: 0
          },
          {
            question:
              ' W systemie Windows, wykorzystując wiersz poleceń do zmiany partycji FAT na partycję NTFS bez utraty zawartych na niej danych, należy użyć polecenia',
            answers: ['convert', 'format', 'change', 'recover'],
            correctAnswer: 0
          },
          {
            question:
              ' Który system plików należy wybrać podczas instalacji systemu Linux?',
            answers: ['EXT4', 'FAT', 'NTFS', 'FAT32'],
            correctAnswer: 0
          },
          {
            question:
              ' Która usługa umożliwia zdalną instalację systemu operacyjnego?',
            answers: ['RIS', 'IIS', 'IRC', 'DNS'],
            correctAnswer: 0
          },
          {
            question:
              ' Przedstawiona na rysunku karta rozszerzeń posiada chłodzenie',
            answers: ['pasywne', 'aktywne', 'wymuszone', 'symetryczne'],
            correctAnswer: 0,
            img: 'e12/119.jpg'
          },
          {
            question:
              ' Program, który umożliwia komunikację między kartą sieciową a systemem operacyjnym, to',
            answers: ['sterownik', 'sniffer', 'middleware', 'komunikator'],
            correctAnswer: 0
          },
          {
            question: ' Bezprzewodową transmisję danych zapewnia interfejs',
            answers: ['IrDA', 'LFH60', 'HDMI', 'DVI'],
            correctAnswer: 0
          },
          {
            question:
              ' W systemie Windows wymagania co do złożoności hasła należy określić w',
            answers: [
              'zasadach zabezpieczeń lokalnych',
              'BIOS-ie',
              'autostarcie',
              'panelu sterowania'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Przedstawiona na zdjęciu wtyczka jest częścią obwodu elektrycznego zasilającego',
            answers: [
              'procesor ATX12V',
              'stację dyskietek',
              'napędy CD-ROM',
              'dyski wewnętrzne SATA'
            ],
            correctAnswer: 0,
            img: 'e12/120.jpg'
          },
          {
            question:
              ' Aby dane pliku znajdującego się na dysku twardym, zapisane na niesąsiadujących ze sobą klastrach, zostały ułożone tak, by zajmowały sąsiadujące klastry, należy uruchomić',
            answers: [
              'defragmentację dysku',
              'program chkdsk',
              'program scandisk',
              'oczyszczanie dysku'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Aby zwolnić miejsce na dysku bez utraty danych, należy wykonać',
            answers: [
              'oczyszczanie dysku',
              'backup dysku',
              'sprawdzanie dysku',
              'defragmentację dysku'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' W celu ochrony systemu przed programem posiadającym zdolność replikacji należy zainstalować',
            answers: [
              'program antywirusowy',
              'program szpiegowski',
              'program narzędziowy',
              'program diagnostyczny'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Która tablica partycji umożliwia utworzenie do 128 partycji podstawowych na jednym dysku?',
            answers: ['GPT', 'MBR', 'BOOT', 'NTLDR'],
            correctAnswer: 0
          },
          {
            question:
              ' Koszt wydrukowania jednej strony tekstu wynosi 95 gr, natomiast koszt przygotowania jednej płyty CD to 1,54 zł. Jakie koszty poniesie firma, przygotowująca płytę z prezentacjami oraz 120 stronicowy poradnik?',
            answers: ['115,54 zł', '120,95 zł', '145,54 zł', '154,95 zł'],
            correctAnswer: 0
          },
          {
            question:
              ' Bez zezwolenia posiadacza autorskich praw majątkowych do programu komputerowego jego legalny użytkownik, zgodnie z ustawą o prawie autorskim i prawach pokrewnych',
            answers: [
              'może wykonać jedną kopię, jeśli jest to niezbędne do korzystania z programu',
              'może rozpowszechniać program',
              'nie może wykonać żadnej kopii programu',
              'może wykonać dowolną liczbę kopii programu na własny użytek'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Która licencja umożliwia bezpłatne wykorzystywanie programu, pod warunkiem, że użytkownik zatroszczy się o środowisko naturalne?',
            answers: ['Greenware', 'Donationware', 'Adware', 'OEM'],
            correctAnswer: 0
          },
          {
            question: ' Przedstawiony na rysunku symbol oznacza produkt',
            answers: [
              'nadający się do powtórnego przetworzenia',
              'przeznaczony do powtórnego użycia',
              'biodegradowalny',
              'niebezpieczny'
            ],
            correctAnswer: 0,
            img: 'e12/121.jpg'
          },
          {
            question:
              ' Który z trybów nie jest dostępny dla narzędzia lupa w systemie Windows?',
            answers: ['Płynny', 'Pełnoekranowy', 'Zadokowany', 'Lupy'],
            correctAnswer: 0
          },
          {
            question:
              ' Która drukarka wykorzystuje technikę polegającą na przenoszeniu stałego barwnika z taśmy na papier odporny na wysoką temperaturę?',
            answers: [
              'Termosublimacyjna',
              'Laserowa',
              'Termiczna',
              'Atramentowa'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Partycja, na której zainstalowany jest system operacyjny, nazywana jest partycją',
            answers: ['systemową', 'rozszerzoną', 'folderową', 'wymiany'],
            correctAnswer: 0
          },
          {
            question: ' Zużyte kasety od drukarek należy',
            answers: [
              'przekazać firmie utylizującej tego typu odpady',
              'przekazać do wydziału ochrony środowiska',
              'wyrzucić do pojemnika z odpadami komunalnymi',
              'wyrzucić do pojemnika przeznaczonego na plastik'
            ],
            correctAnswer: 0
          },
          {
            question: ' Przyczyną awarii drukarki igłowej może być usterka',
            answers: [
              'elektromagnesu',
              'dyszy',
              'elektrody ładującej',
              'utrwalacza termicznego'
            ],
            correctAnswer: 0
          },
          {
            question: ' Materiałem eksploatacyjnym w drukarce laserowej jest',
            answers: [
              'kaseta z tonerem',
              'pojemnik z tuszem',
              'taśma barwiąca',
              'laser'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Technika transmisji danych pomiędzy urządzeniami CD/DVD a pamięcią komputera w trybie bezpośredniego dostępu do pamięci to',
            answers: ['DMA', 'PIO', 'IDE', 'SATA'],
            correctAnswer: 0
          },
          {
            question: ' Programy GRUB, LILO, NTLDR to',
            answers: [
              'programy rozruchowe',
              'wersje głównego interfejsu sieciowego',
              'aplikacje do aktualizacji BIOS-u',
              'firmware dla dysku twardego'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Przed wykonaniem prac serwisowych związanych z modyfikacją rejestru systemu Windows należy wykonać',
            answers: [
              'kopię rejestru',
              'defragmentację dysku',
              'czyszczenie rejestru',
              'oczyszczanie dysku'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Jak nazywa się klucz rejestru systemu Windows, w którym są zapisane powiązania typów plików z obsługującymi je aplikacjami?',
            answers: [
              'HKEY_CLASSES_ROOT',
              'HKEY_LOCAL_RELATIONS',
              'HKEY_CURRENT_PROGS',
              'HKEY_USERS'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Który typ plików należy utworzyć w systemie operacyjnym do zautomatyzowania najczęściej wykonywanych czynności, takich jak kopiowanie, tworzenie plików lub folderów?',
            answers: ['Wsadowy', 'Konfiguracyjny', 'Systemowy', 'Inicjujący'],
            correctAnswer: 0
          },
          {
            question:
              ' Przy uruchamianiu się komputera pojawia się komunikat . Wciśnięcie klawisza DEL spowoduje',
            answers: [
              'wejście do ustawień BIOS-u komputera',
              'usunięcie pliku setup',
              'skasowanie zawartości pamięci CMOS',
              'przejście do konfiguracji systemu Windows'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Do przechowywania części plików programów i danych, które są duże i nie mogą być umieszczone w całości w pamięci, służy',
            answers: [
              'plik stronicowania',
              'schowek systemu',
              'menadżer zadań',
              'edytor rejestru'
            ],
            correctAnswer: 0
          },
          {
            question: ' Na załączonym rysunku przedstawiono operację',
            answers: [
              'kompresji danych',
              'fuzji danych',
              'kasowania danych',
              'kompilacji danych'
            ],
            correctAnswer: 0,
            img: 'e12/122.jpg'
          },
          {
            question:
              ' Aby zapobiec utracie danych w programie do prowadzenia ewidencji uczniów, należy po zakończeniu pracy każdego dnia wykonać',
            answers: [
              'kopię zapasową danych programu',
              'aktualizację systemu',
              'aktualizację systemu operacyjnego',
              'bezpieczne zamknięcie systemu operacyjnego'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Przy próbie odzyskania danych z dysku, który został sformatowany należy skorzystać z programu typu',
            answers: ['recovery', 'irc', 'p2p', 'sniffer'],
            correctAnswer: 0
          },
          {
            question:
              ' Jakie rozszerzenie posiadają pakiety instalacyjne systemu operacyjnego Linux?',
            answers: ['rpm, deb', 'ini, dll', 'zip, exe', 'tgz, dmg'],
            correctAnswer: 0
          },
          {
            question:
              ' Na rysunku zamieszczono fragment karty graficznej ze złączem',
            answers: ['AGP', 'PCI', 'ISA', 'PCI-Express'],
            correctAnswer: 0,
            img: 'e12/123.jpg'
          },
          {
            question:
              ' Jaką nazwę nosi rodzina procesorów firmy Intel, o niewielkich rozmiarach i małym poborze prądu, dedykowanych do zastosowań mobilnych?',
            answers: ['Atom', 'Alpha', 'Athlon', 'Radeon'],
            correctAnswer: 0
          },
          {
            question:
              ' Większą wydajność programów multimedialnych w systemie rodziny Windows zapewnia technologia',
            answers: ['DirectX', 'GPU', 'CUDA', 'jQuery'],
            correctAnswer: 0
          },
          {
            question: ' Zamieszczone parametry charakteryzują pamięć',
            answers: ['RAM', 'SWAP', 'flash', 'SD'],
            correctAnswer: 0,
            img: 'e12/124.jpg'
          },
          {
            question: ' Na rysunku przedstawiono kabel z wtyczkami',
            answers: ['SATA', 'ATA', 'Berg', 'Molex'],
            correctAnswer: 0,
            img: 'e12/125.jpg'
          },
          {
            question:
              ' Złącze szeregowe na płycie głównej, służące do podłączania kart rozszerzeń o różnej, w zależności od wariantu, liczbie pinów nosi nazwę',
            answers: ['PCI Express', 'ISA', 'PCI', 'AGP'],
            correctAnswer: 0
          },
          {
            question:
              ' Widoczne na schemacie procesora rejestry pełnią funkcję',
            answers: [
              'przechowywanie argumentów obliczeń',
              'przechowywania adresu do następnej instrukcji programu',
              'sterowania wykonywanym programem',
              'wykonywania działań arytmetycznych'
            ],
            correctAnswer: 0,
            img: 'e12/126.jpg'
          },
          {
            question: ' Schemat układu połączeń bramek logicznych przedstawia',
            answers: [
              'przerzutnik',
              'kontroler przerwań',
              'muliplekser',
              'sumator'
            ],
            correctAnswer: 0,
            img: 'e12/127.jpg'
          },
          {
            question:
              ' Opisana technologia stosowana w systemach rodziny Windows to',
            answers: [
              'Plug and Play',
              'File Allocation Table',
              'Wywołanie systemowe',
              'Hardware Abstraction Layer'
            ],
            correctAnswer: 0,
            img: 'e12/128.jpg'
          },
          {
            question: ' W ramce zamieszczono opis technologii',
            answers: ['SLI', 'CUDA', '3DVision', 'HyperTransport'],
            correctAnswer: 0,
            img: 'e12/129.jpg'
          },
          {
            question:
              ' Który z przedstawionych parametrów procesora AMD APU A10 5700 3400 nie wpływa w sposób bezpośredni na prędkość jego działania?',
            answers: [
              'Proces technologiczny',
              'Ilość rdzeni',
              'Częstotliwość',
              'Pojemność pamięci'
            ],
            correctAnswer: 0,
            img: 'e12/130.jpg'
          },
          {
            question: ' Wskaż program DTP',
            answers: ['MS Publisher', 'MS Visio', 'MS Word', 'MS Excel'],
            correctAnswer: 0
          },
          {
            question:
              ' Liczba ABBA w kodzie heksadecymalnym ma postać dwójkową o wartości',
            answers: [
              '1010 1011 1011 1010',
              '1011 1010 1010 1011',
              '0101 1011 1011 0101',
              '1010 1111 1111 1010'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Liczba dziesiętna 129 zostanie zapisana w postaci dwójkowej na',
            answers: ['8 bitach', '5 bitach', '6 bitach', '7 bitach'],
            correctAnswer: 0
          },
          {
            question:
              ' Przedstawiony wydruk w systemie rodziny Linux pojawi się po wydaniu komendy',
            answers: ['ls -la', 'ps', 'pwd', 'free'],
            correctAnswer: 0,
            img: 'e12/131.jpg'
          },
          {
            question:
              ' Aby bezprzewodowo połączyć mysz z komputerem, należy użyć interfejsu',
            answers: ['Bluetooth', 'DVI', 'RS 232', 'IEEE_1284'],
            correctAnswer: 0
          },
          {
            question:
              ' Wydruk wysokiej jakości fotograficznej zapewnia drukarka',
            answers: [
              'sublimacyjna',
              'igłowa',
              'termiczna',
              'termotransferowa'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' W systemie Windows konto użytkownika tworzy się poleceniem',
            answers: ['net user', 'users', 'useradd', 'adduser'],
            correctAnswer: 0
          },
          {
            question:
              ' Przed modyfikacją rejestru Windows, dla zapewnienia bezpieczeństwa pracy, w pierwszej kolejności należy',
            answers: [
              'wykonać kopię zapasową rejestru',
              'wykonać kopię zapasową ważnych dokumentów',
              'sprawdzić czy na komputerze nie ma wirusów',
              'uruchomić komputer w trybie awaryjnym'
            ],
            correctAnswer: 0
          },
          {
            question: ' Programem antywirusowym nie jest',
            answers: ['PacketFilter', 'AVG', 'NOD32', 'AVAST'],
            correctAnswer: 0
          },
          {
            question:
              ' Atak komputerowy przeprowadzony równocześnie z wielu komputerów w sieci, polegający na uniemożliwieniu działania systemu komputerowego poprzez zajęcie wszystkich wolnych zasobów, nosi nazwę',
            answers: ['DDoS', 'Spoofing', 'Brute force', 'Atak słownikowy'],
            correctAnswer: 0
          },
          {
            question:
              ' Najmniej inwazyjnym, lecz skutecznym sposobem leczenia komputera zainfekowanego wirusem typu rootkit jest',
            answers: [
              'uruchomienie specjalnego programu wykrywającego rootkity z zewnętrznego nośnika(np. LiveCD)',
              'przeinstalowanie systemu operacyjnego',
              'usunięcie podejrzanych procesów z Menadżera zadań',
              'zainstalowanie najlepszego programu antywirusowego i włączenie go w tryb monitora - z czasem wirus zostanie sam wykryty'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Aby zapobiec wyładowaniom elektrostatycznym podczas wymiany podzespołów komputerowych, technik powinien zastosować',
            answers: [
              'matę i opaskę antystatyczną',
              'odzież poliestrową',
              'rękawice gumowe',
              'okulary ochronne'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Przy wymianie którego podzespołów komputera nie wymaga się wyłączenia źródła zasilania?',
            answers: [
              'urządzenia typu hot-swap',
              'zasilacza',
              'płyty głównej',
              'pamięci RAM'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Wskaż tryb pracy, w którym komputer zużywa najmniejszą ilość energii',
            answers: [
              'hibernacja',
              'uśpienie',
              'wstrzymanie',
              'gotowość (pracy)'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' W jednostce ALU do akumulatora została wpisana liczba dziesiętna 500. Jaka jest jej binarna reprezentacja?',
            answers: ['111110100', '110110000', '111011000', '111111101'],
            correctAnswer: 0
          },
          {
            question: ' Liczba 100110011 zapisana w kodzie ósemkowym ma postać',
            answers: ['463', '383', '346', '333'],
            correctAnswer: 0
          },
          {
            question:
              ' AC-72-89-17-6E-B2 to adres fizyczny karty sieciowej zapisany w postaci',
            answers: ['heksadecymalnej', 'binarnej', 'oktalnej', 'dziesiętnej'],
            correctAnswer: 0
          },
          {
            question: ' Niskopoziomowe formatowanie dysku IDE HDD',
            answers: [
              'jest wykonywane przez producenta dysku',
              'tworzy partycję rozszerzoną',
              'tworzy partycję podstawową',
              'umieszcza program rozruchowy MBR'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Użytkownik zamierza zainstalować 32-bitowy system operacyjny Windows 7. Ile minimalnie pamięci RAM musi posiadać komputer, aby była możliwa praca w trybie graficznym?',
            answers: ['1 GB', '256 MB', '512 MB', '2 GB'],
            correctAnswer: 0
          },
          {
            question: ' Konwerter RAMDAC przetwarza sygnał',
            answers: [
              'cyfrowy na analogowy',
              'analogowy na cyfrowy',
              'zmienny na stały',
              'stały na zmienny'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Jaki typ złącza musi posiadać płyta główna, aby użytkownik mógł zainstalować przedstawioną na rysunku kartę graficzną?',
            answers: ['PCIe x16', 'AGP', 'PCI', 'PCIe x1'],
            correctAnswer: 0,
            img: 'e12/132.jpg'
          },
          {
            question:
              ' W systemach operacyjnych Windows ograniczenie użytkownikom dostępu do poszczególnych katalogów, plików lub dysków umożliwia system plików',
            answers: ['NTFS', 'FAT16', 'FAT32', 'Ext2'],
            correctAnswer: 0
          },
          {
            question:
              ' Na nowym komputerze program antywirusowy należy zainstalować',
            answers: [
              'zaraz po zainstalowaniu systemu operacyjnego',
              'w trakcie instalacji systemu operacyjnego',
              'przed zainstalowaniem systemu operacyjnego',
              'po zainstalowaniu pobranych z internetu programów'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Wskaż właściwą kolejność operacji przygotowujących nowy laptop do pracy',
            answers: [
              'Montaż baterii, podłączenie zewnętrznego zasilania sieciowego, włączenie laptopa, instalacja systemu operacyjnego, wyłączenie laptopa po instalacji systemu operacyjnego',
              'Podłączenie zewnętrznego zasilania sieciowego, włączenia laptopa, instalacja systemu operacyjnego, montaż baterii, wyłączenie laptopa po instalacji systemu operacyjnego',
              'Podłączenie zewnętrznego zasilania sieciowego, włączenie laptopa, montaż baterii, instalacja systemu operacyjnego, wyłączenie laptopa po instalacji systemu operacyjnego',
              'Włączenie laptopa, montaż baterii, instalacja systemu operacyjnego, podłączenie zewnętrznego zasilania sieciowego, wyłączenie laptopa po instalacji systemu operacyjnego'
            ],
            correctAnswer: 0
          },
          {
            question: ' Jednostka obliczeń zmiennoprzecinkowych to:',
            answers: ['FPU', 'ALU', 'RPU', 'AND'],
            correctAnswer: 0
          },
          {
            question: ' GRUB, LILO, NTLDR to:',
            answers: [
              'programy rozruchowe',
              'wersje głównego interfejsu sieciowego',
              'aplikacje do aktualizacji BIOS-u',
              'firmware dla dysku sieciowego'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' W systemie Windows 7 w celu skopiowania katalogu c: est wraz z podkatalogami na dysk przenośny, nalezy użyć polecenia',
            answers: [
              'xcopy c: est f: est /E',
              'copy c: est f: est /E',
              'copy f: est c: est /E',
              'xcopy f: est c: est /E'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Poleceniem służącym do aktualizowania systemu operacyjnego Linux z bazami RPM jest',
            answers: ['zypper', 'upgrade', 'nm', 'chmode'],
            correctAnswer: 0
          },
          {
            question:
              ' W systemie operacyjnym Ubuntu konto użytkownika student można usunąć za pomocą polecenia',
            answers: [
              'userdel student',
              'del user student',
              'net user student /del',
              'user net student /del'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' W systemie operacyjnym Ubuntu do utworzenia archiwum danych należy wykorzystać program:',
            answers: ['tar', 'set', 'sed', 'awk'],
            correctAnswer: 0
          },
          {
            question:
              ' W komputerach wykonujących zadania serwerowe, wymagające dużej wydajności, nalezy zastosować dysk',
            answers: ['SAS', 'ATA', 'USB', 'SATA'],
            correctAnswer: 0
          },
          {
            question:
              ' Interface USB 3.0 umożliwia transfer danych z prędkością do',
            answers: ['5 Gb/s', '120 MB/s', '400 Mb/s', '4 GB/s'],
            correctAnswer: 0
          },
          {
            question:
              ' Dla zamiany zeskanowanego obrazu na tekst należy zastosować oprogramowanie wykorzystujące techniki',
            answers: ['OCR', 'DPI', 'DTP', 'OMR'],
            correctAnswer: 0
          },
          {
            question:
              ' Interface HDMI komputera pozwala na przesyłanie sygnału',
            answers: [
              'cyfrowego audio i video',
              'wyłącznie cyfrowego video',
              'wyłącznie cyfrowego audio',
              'analogowego audio i video'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Licencja CAL (Client Access License) daje użytkownikowi prawo',
            answers: [
              'korzystania z usług udostępnionych przez serwer',
              'zmiany kodu programu',
              'używania programu bezterminowo',
              'kopiowania programu na nośniki zewnętrzne'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' System oświetlenia oparty o trójkolorowe diody LED wykorzystują skanery typu',
            answers: ['CIS', 'CCD', 'CMOS', 'CMYK'],
            correctAnswer: 0
          },
          {
            question:
              ' W dokumentacji płyty głównej jest informacja: . Oznacza to, że dana płyta główna zawiera',
            answers: [
              'cyfrowe złącze sygnału audio',
              'cyfrowe złącze sygnału video',
              'analogowe złącze sygnału wyjścia video',
              'analogowe złącze sygnału wyjścia audio'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' W dokumentacji jednego z elementów składowych komputera zamieszczono informacje, że urządzenie wspiera OpenGL. Dokumentacja dotyczy',
            answers: [
              'karty graficznej',
              'mikroprocesora',
              'karty sieciowej',
              'dysku twardego'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Użytkownik komputera udostępnia publicznie posiadane pliki w sieci Internet. Prawa autorskie zostaną naruszone, gdy udostępni',
            answers: [
              'obraz płyty systemu operacyjnego Windows 7 Home',
              'otrzymany dokument urzędowy',
              'własne autorskie filmy z demonstracji publicznych',
              'wykonane przez siebie zdjęcia obiektów wojskowych'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Program WinRAR wyświetlił okienko informacyjne pokazane na rysunku. Z jakiego typu licencji na program korzystał do tej pory użytkownik?',
            answers: ['Shareware', 'Adware', 'Freeware', 'Public domain'],
            correctAnswer: 0,
            img: 'e12/133.jpg'
          },
          {
            question: ' Licencja Windows OEM nie pozwala na wymianę',
            answers: [
              'sprawnej płyty głównej na model o lepszych parametrach',
              'sprawnego zasilacza na model o lepszych parametrach',
              'sprawnej karty graficznej na model o lepszych parametrach',
              'sprawnego dysku twardego na model o lepszych parametrach'
            ],
            correctAnswer: 0
          },
          {
            question: ' Do pomiaru wartości rezystancji służy',
            answers: ['omomierz', 'watomierz', 'woltomierz', 'amperomierz'],
            correctAnswer: 0
          },
          {
            question:
              ' Interfejs SLI (ang. Scalable Link Interface) służy do łączenia',
            answers: [
              'dwóch kart graficznych',
              'czytnika kart z płytą główną',
              'napędu Blu-ray z kartą dźwiękową',
              'karty graficznej z odbiornikiem TV'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' W drukarce laserowej do utrwalenia na kartce wydruku wykorzystuje się',
            answers: [
              'rozgrzane wałki',
              'promienie lasera',
              'taśmy transmisyjne',
              'głowice piezoelektryczne'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' System S.M.A.R.T przeznaczony jest do monitorowania pracy i wykrywania błędów',
            answers: [
              'dysków twardych',
              'płyty głównej',
              'kart rozszerzeń',
              'napędów płyt CD/DVD'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Materiałem eksploatacyjnym dla kolorowej drukarki laserowej jest',
            answers: [
              'kartridż z tonerem',
              'przetwornik CMOS',
              'podajnik papieru',
              'pamięć wydruku'
            ],
            correctAnswer: 0
          },
          {
            question: ' Zaletą systemu plików NTFS jest',
            answers: [
              'możliwość szyfrowania folderów i plików',
              'możliwość sformatowana nośnika o małej pojemności (od 1.44 MB)',
              'zapisywanie plików o nazwie dłuższej niż 255 znaków',
              'przechowywanie tylko jednej kopi tabeli plików'
            ],
            correctAnswer: 0
          },
          {
            question: ' Wskaż niepoprawny podział dysków MBR na partycje',
            answers: [
              '1 partycja podstawowa i 2 rozszerzone',
              '3 partycje podstawowe i 1 rozszerzona',
              '2 partycje podstawowe i 1 rozszerzona',
              '1 partycja podstawowa i 1 rozszerzona'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Przy uruchomieniu komputera pojawia się komunikat: . Wciśnięcie klawisza DEL spowoduje',
            answers: [
              'wejście do BIOS-u komputera',
              'usunięcie pliku setup',
              'skasowanie zawartości pamięci CMOS',
              'przejście do konfiguracji systemu Windows'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Technika zwana rytownictwem odnosi się do zasady działania plotera',
            answers: ['grawerującego', 'tnącego', 'laserowego', 'solwentowego'],
            correctAnswer: 0
          },
          {
            question:
              ' Która czynność doprowadzi do nieodwracalnej utraty danych, w przypadku uszkodzenia systemu plików?',
            answers: [
              'formatowanie dysku',
              'włączenie systemu operacyjnego',
              'skanowanie programem antywirusowym',
              'przeprowadzenie skanowania scandiskiem'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Przedstawiony na rysunku symbol graficzny oznacza opakowanie',
            answers: [
              'nadającego się do recyklingu',
              'zgodnie z normą TCO',
              'wielokrotnego użytku',
              'wyprodukowane z surowców wtórnych'
            ],
            correctAnswer: 0,
            img: 'e12/134.jpg'
          },
          {
            question:
              ' Okresowych kopii zapasowych dysków serwera nie można tworzyć na wymiennych nośnikach typu',
            answers: ['płyty DVD-ROM', 'karty SD', 'karty MMC', 'płyty CD-RW'],
            correctAnswer: 0
          },
          {
            question:
              ' Jaki będzie koszt wymiany karty graficznej w komputerze, jeśli karta kosztuje 250 zł, jej wymiana zajmie pracownikowi serwisu 80 minut, a każda rozpoczęta roboczogodzina kosztuje 50 zł?',
            answers: ['350 zł', '250 zł', '300 zł', '400 zł'],
            correctAnswer: 0
          },
          {
            question:
              ' Zasilanie dostarczane przez płytę główną dla pamięci typu SDRAM DDR3 może mieć wartość',
            answers: ['1,5 V', '1,2 V', '3,3 V', '2,5 V'],
            correctAnswer: 0
          },
          {
            question:
              ' Po podłączeniu sprawnej klawiatury do dowolnego z portów USB nie można wybrać awaryjnego trybu uruchomienia systemu Windows. Mimo to po uruchomieniu systemu w normalnym trybie klawiatura działa prawidłowo. Wskazuje to na',
            answers: [
              'niepoprawne ustawienia BIOS',
              'uszkodzony kontroler klawiatury',
              'uszkodzony zasilacz',
              'uszkodzone porty USB'
            ],
            correctAnswer: 0
          },
          {
            question: ' Przedstawiony rysunek prezentuje złącze',
            answers: ['DVI-A', 'D-SUB', 'DVI-D', 'HDMI'],
            correctAnswer: 0,
            img: 'e12/135.jpg'
          },
          {
            question:
              ' Maksymalny transfer danych napędu CD dla prędkości przesyłu x42 wynosi',
            answers: ['6300 KiB/s', '3600 KiB/s', '6000 KiB/s', '2400 KiB/s'],
            correctAnswer: 0
          },
          {
            question:
              ' Taśma barwiąca jest podstawowym materiałem eksploatacyjnym drukarki',
            answers: ['igłowej', 'atramentowej', 'termicznej', 'laserowej'],
            correctAnswer: 0
          },
          {
            question:
              ' Typem pamięci operacyjnej o możliwie najmniejszym poborze mocy jest',
            answers: ['DDR3', 'DDR', 'SDR', 'DDR2'],
            correctAnswer: 0
          },
          {
            question: ' Wielkość plamki monitora LCD jest równa',
            answers: [
              'odległości od początku jednego do początku następnego piksela',
              'wielkości obszaru, na którym wyświetla się 1024 pikseli',
              'wielkości jednego piksela wyświetlanego na ekranie',
              'wielkości obszaru, na którym można wyświetlić jedną składową koloru RGB'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Narzędziem systemu Linux, służącym do monitorowania systemu przy pomocy scentralizowanego mechanizmu, jest program',
            answers: ['syslog', 'tar', 'bcdedit', 'fsck'],
            correctAnswer: 0
          },
          {
            question:
              ' System plików, który nie wspiera tworzenia wewnętrznego dziennika zmian, zwanego księgowaniem to',
            answers: ['FAT32', 'ext4', 'ext3', 'NTFS'],
            correctAnswer: 0
          },
          {
            question:
              ' Adapter USB na LPT można wykorzystać przy niekompatybilności złączy w przypadku podłączenia starszych egzemplarzy',
            answers: ['drukarki', 'myszy', 'klawiatury', 'monitora'],
            correctAnswer: 0
          },
          {
            question:
              ' Widoczne na schemacie procesora rejestry pełnią funkcję przechowywania adresu do',
            answers: [
              'przechowywania argumentów obliczeń',
              'następnej instrukcji programu',
              'sterowania wykonywanym programem',
              'wykonywania działań arytmetycznych'
            ],
            correctAnswer: 0,
            img: 'e12/136.jpg'
          },
          {
            question:
              ' Aby w systemie Windows utworzyć nową partycję podstawową, należy użyć przystawki',
            answers: [
              'diskmgmt.msc',
              'gpedit.msc',
              'certmgr.msc',
              'fsmgmt.msc'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' W nowoczesnych ekranach dotykowych poprawność działania ekranu zapewnia mechanizm wykrywający zmianę',
            answers: [
              'pola elektrostatycznego',
              'oporu między przezroczystymi diodami wtopionymi w ekran',
              'położenia ręki dotykającej ekran poprzez zastosowanie kamery',
              'pola elektromagnetycznego'
            ],
            correctAnswer: 0
          },
          {
            question: ' Adware jest oprogramowaniem',
            answers: [
              'darmowym z dołączonymi reklamami',
              'płatnym na zasadzie dobrowolnej darowizny',
              'płatnym po określonym czasie próbnym',
              'darmowym bez zastrzeżeń'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' W systemie Linux plik ma ustawione uprawnienia na 765. Grupa przypisana do tego pliku może go',
            answers: [
              'odczytać i zapisać',
              'odczytać, zapisać, wykonać',
              'odczytać i wykonać',
              'tylko odczytać'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Przedstawiony schemat obrazuje zasadę działania skanera',
            answers: ['3D', 'bębnowego', 'ręcznego', 'płaskiego'],
            correctAnswer: 0,
            img: 'e12/137.jpg'
          },
          {
            question:
              ' Do oznaczenia iloczynu logicznego jest stosowany spójnik',
            answers: ['AND', 'OR', 'NOT', 'XOR'],
            correctAnswer: 0
          },
          {
            question: ' Do interfejsów równoległych zaliczany jest interfejs',
            answers: ['AGP', 'FireWire', 'DVI', 'RS-232'],
            correctAnswer: 0
          },
          {
            question:
              ' Do naprawy uszkodzenia sektora rozruchowego dysku w systemie Windows 7 należy wykorzystać polecenie',
            answers: [
              'bootrec /fixmbr',
              'fixmbr /all',
              'fixboot /renew',
              'nircmd /standby'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Funkcję S.M.A.R.T. dysku twardego odpowiadającą za aktywność mechanizmu monitoringu i wczesnego ostrzegania przed usterkami można aktywować poprzez',
            answers: [
              'BIOS płyty głównej',
              'opcję polecenia chkdsk',
              'rejestr systemu',
              'panel sterowania'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Emisja sygnałów dźwiękowych: jednego długiego i dwóch krótkich przez BIOS firmy AMI oznacza',
            answers: [
              'błąd karty graficznej',
              'uszkodzenie pamięci',
              'błąd parzystości pamięci',
              'uszkodzenie zegara systemowego'
            ],
            correctAnswer: 0
          },
          {
            question: ' Polecenie systemowe ipconfig umożliwia konfigurację',
            answers: [
              'interfejsów sieciowych',
              'rejestru systemu',
              'mapowania dysków sieciowych',
              'atrybutów uprawnień dostępu'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Wskaż nieprawidłowy podział dysku z tablicą partycji MBR',
            answers: [
              '1 partycja podstawowa i 2 rozszerzone',
              '1 partycja podstawowa i 1 rozszerzona',
              '2 partycje podstawowe i 1 rozszerzona',
              '3 partycje podstawowe i 1 rozszerzona'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Przy modyfikacji rejestru Windows dla zapewnienia bezpieczeństwa pracy w pierwszej kolejności należy',
            answers: [
              'wyeksportować klucze rejestru do pliku',
              'wykonać kopię zapasową ważnych dokumentów',
              'sprawdzić czy nie ma błędów na dysku',
              'sprawdzić czy na komputerze nie ma wirusów'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Aby zwiększyć bezpieczeństwo prywatnych danych sesji na stronie WWW jest wskazane wyłączenie w opcjach przeglądarki',
            answers: [
              'funkcji zapamiętywania haseł',
              'blokady wyskakujących okienek',
              'powiadamiania o wygasłych certyfikatach',
              'blokady uruchamiania skryptów'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Urządzenia korzystające z portu USB 2.0 są zasilane napięciem, którego wartość mieści się w zakresie',
            answers: [
              '4,75 V - 5,35 V',
              '5,35 V - 5,95 V',
              '3,55 V - 4,15 V',
              '4,15 V - 4,75 V'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Aby wstrzymać działanie programu zapisanego w pliku wsadowym Windows, do momentu naciśnięcia dowolnego klawisza należy użyć komendy',
            answers: ['pause', 'echo off', 'echo on', 'stop'],
            correctAnswer: 0
          },
          {
            question: ' Jeden terabajt jest równy',
            answers: [
              '10^12 bajtów',
              '10^10 bajtów',
              '10^8 bajtów',
              '10^14 bajtów'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Napięcie dostarczane do poszczególnych elementów komputera w zasilaczu komputerowym w standardzie ATX jest zmniejszane z wartości 230 V między innymi do wartości',
            answers: ['12 V', '130 V', '4 V', '20 V'],
            correctAnswer: 0
          },
          {
            question:
              ' W systemie Windows 7 narzędzie trybu poleceń Cipher.exe służy do',
            answers: [
              'szyfrowania i odszyfrowywania plików i katalogów',
              'przełączania monitora w tryb oczekiwania',
              'podglądu plików tekstowych',
              'zarządzania rozruchem systemu'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Urządzenie typu Plug and Play, podłączone do komputera po raz kolejny, jest rozpoznawane na podstawie',
            answers: [
              'unikalnego identyfikatora urządzenia',
              'lokalizacji sterownika urządzenia',
              'specjalnego sterownika programowego',
              'lokalizacji urządzenia'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Program stanowiący dodatek dla systemu Windows i służący do ochrony przed oprogramowaniem szpiegującym oraz innymi niepożądanymi komponentami to',
            answers: [
              'Windows Defender',
              'Windows Embedded',
              'Windows Azure',
              'Windows Home Server'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Komputer jest połączony z siecią Internet oraz nie ma zainstalowanego programu antywirusowego. Metodą na sprawdzenie, czy komputer ten jest zainfekowany wirusem, bez ingerowania w konfigurację systemu jest',
            answers: [
              'wykorzystanie skanera on-line',
              'uruchomienie programu chkdsk',
              'zainstalowanie skanera pamięci',
              'uruchomienie zapory sieciowej'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Do montażu zestawu komputerowego z płytą główną zawierającą gniazdo procesora typu Socket AM3 można zastosować procesor',
            answers: ['Phenom II', 'Core i7', 'Itanium', 'Pentium D'],
            correctAnswer: 0
          },
          {
            question:
              ' Martwy piksel, będący wadą monitorów LCD, to punkt pozostający niezmiennie w kolorze',
            answers: ['czarnym', 'żółtym', 'szarym', 'fioletowym'],
            correctAnswer: 0
          },
          {
            question:
              ' Na płycie głównej uległa uszkodzeniu zintegrowana karta sieciowa. Komputer nie może uruchomić systemu operacyjnego, gdyż nie ma dysku twardego ani żadnych napędów optycznych, a system operacyjny uruchamiany jest z sieci lokalnej. Aby przywrócić utraconą funkcjonalność, należy zamontować w komputerze',
            answers: [
              'kartę sieciową wspierającą funkcję Preboot Execution Environment',
              'najprostszą kartę sieciową wspierającą IEEE 802.3',
              'dysk twardy',
              'napęd CD-ROM'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Jaki będzie koszt wymiany karty sieciowej w komputerze, jeśli karta kosztuje 40 zł, jej wymiana zajmie pracownikowi serwisu 90 minut, a każda rozpoczęta roboczogodzina kosztuje 60 zł?',
            answers: ['160 zł', '200 zł', '130 zł', '40 zł'],
            correctAnswer: 0
          },
          {
            question:
              ' Przed instalacją sterownika urządzenia peryferyjnego system operacyjny Windows powinien sprawdzać, czy sterownik posiada podpis',
            answers: ['cyfrowy', 'zaufany', 'kryptograficzny', 'elektroniczny'],
            correctAnswer: 0
          },
          {
            question:
              ' W systemie binarnym wynikiem sumowania liczb dwójkowych 1001101 i 11001 jest',
            answers: ['1100110', '1101100', '1110001', '1101101'],
            correctAnswer: 0
          },
          {
            question:
              ' Certyfikatem potwierdzającym energooszczędność urządzenia jest',
            answers: ['Energy STAR', 'Energy TCO', 'Energy IEEE', 'Energy ISO'],
            correctAnswer: 0
          },
          {
            question: ' Liczba dziesiętna 512 w systemie binarnym ma postać',
            answers: ['1000000000', '100000', '1000000', '10000000'],
            correctAnswer: 0
          },
          {
            question:
              ' Aby zapisać 10 GB danych na jednej płycie DVD, należy użyć nośnika typu',
            answers: ['DVD-18', 'DVD-5', 'DVD-9', 'DVD-10'],
            correctAnswer: 0
          },
          {
            question:
              ' Na schemacie mikroprocesora wskazany strzałką blok jest odpowiedzialny za',
            answers: [
              'wykonywanie operacji arytmetycznych i logicznych na liczbach',
              'przechowywanie obecnie przetwarzanej instrukcji',
              'przechowywanie kolejnych adresów pamięci z rozkazami',
              'przetwarzanie wskaźnika na następną instrukcję programu'
            ],
            correctAnswer: 0,
            img: 'e12/138.jpg'
          },
          {
            question:
              ' Do prawidłowego działania procesora jest niezbędne podłączenie 4-stykowego lub 8-stykowego złącza zasilania o napięciu',
            answers: ['12 V', '7 V', '24 V', '3,3 V'],
            correctAnswer: 0
          },
          {
            question:
              ' Aby zapisać dane na płycie pokazanej na rysunku, jest potrzebny napęd',
            answers: ['Blu-ray', 'DVD-R/RW', 'CD-R/RW', 'HD-DVD'],
            correctAnswer: 0,
            img: 'e12/139.jpg'
          },
          {
            question:
              ' Transmisję danych z maksymalną przepustowością 6Gb/s umożliwia interfejs',
            answers: ['SATA 3', 'USB 2.0', 'USB 3.0', 'SATA 2'],
            correctAnswer: 0
          },
          {
            question:
              ' Komputer wyposażono w płytę główną przedstawioną na rysunku. Aby zwiększyć moc obliczeniową komputera zaleca się',
            answers: [
              'zainstalowanie dwóch procesorów',
              'zwiększyć pamięci operacyjne',
              'instalację kontrolera RAID',
              'instalację dysku SAS'
            ],
            correctAnswer: 0,
            img: 'e12/140.jpg'
          },
          {
            question:
              ' Który z wymienionych systemów operacyjnych nie jest obsługiwany przez system plików ext4?',
            answers: ['Windows', 'Fedora', 'Gentoo', 'Mandriva'],
            correctAnswer: 0
          },
          {
            question:
              ' Użycie polecenia attrib +h +s +r przykład.txt w linii poleceń systemu Windows spowoduje',
            answers: [
              'nadanie dla pliku przykład.txt atrybytów: ukryty, systemowy, tylko do odczytu',
              'zabezpieczenie pliku przykład.txt hasłem hsr',
              'zapisanie ciągu znaków hsr w pliku przykład.txt',
              'nadanie dla pliku przykład.txt atrybytów: ukryty, skompresowany, tylko do odczytu'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Wynik działania polecenia ls -l użytego w systemie Linux przedstawia rysunek',
            answers: ['D', 'A', 'B', 'C'],
            correctAnswer: 0,
            img: 'e12/141.jpg'
          },
          {
            question:
              ' Którego z poleceń systemu Linux należy użyć do utworzenia archiwum danych?',
            answers: ['tar', 'cal', 'grep', 'date'],
            correctAnswer: 0
          },
          {
            question:
              ' Aby zmienić właściciela pliku w systemie Linux, należy użyć polecenia',
            answers: ['chown', 'ps', 'pwd', 'chmod'],
            correctAnswer: 0
          },
          {
            question:
              ' Aby stworzyć katalog za pomocą wiersza poleceń systemu Windows, należy zastosować komendę',
            answers: ['md', 'mv', 'dir', 'rmdir'],
            correctAnswer: 0
          },
          {
            question: ' Zastosowanie polecenia w systemie Windows spowoduje',
            answers: [
              'wyświetlanie zdefiniowanych w systemie lokalnych grup użytkowników',
              'skompresowanie wszystkich plików',
              'utworzenie dowolnej grupy użytkowników',
              'defragmentację plików'
            ],
            correctAnswer: 0
          },
          {
            question: ' Użycie polecenia fsck w systemie Linux spowoduje',
            answers: [
              'sprawdzenie integralności systemu plików',
              'wyświetlenie parametrów plików',
              'zmianę praw dostępu do pliku',
              'odszukanie pliku'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Na rysunku przedstawiono narzędzie systemu Windows 7 przeznaczone do',
            answers: [
              'konfiguracji ustawień użytkownika',
              'tworzenia kopii systemu',
              'przeprowadzania migracji systemu',
              'rozwiązywania problemów z systemem'
            ],
            correctAnswer: 0,
            img: 'e12/142.jpg'
          },
          {
            question: ' Zrzut ekranu przedstawia program',
            answers: [
              'typu firewall',
              'antywirusowy',
              'antyspamowy',
              'typu recovery'
            ],
            correctAnswer: 0,
            img: 'e12/143.jpg'
          },
          {
            question:
              ' Aby najlepiej zabezpieczyć zgromadzone dane przed odczytem na wypadek kradzieży komputera, należy',
            answers: [
              'zastosować szyfrowanie partycji',
              'zastosować atrybut ukryty dla wszystkich ważnych plików',
              'wykonać punkt przywracania systemu',
              'zabezpieczyć konta hasłem'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Atak komputerowy, polegający na wyłudzaniu poufnych informacji osobistych przez podszywanie się pod godną zaufania osobę lub instytucję, to',
            answers: ['phishing', 'backscatter', 'spoofing', 'spam'],
            correctAnswer: 0
          },
          {
            question:
              ' Transfer danych napędu DVD dla prędkości przesyłu x48 wynosi',
            answers: [
              '64800 KiB/s',
              '10800 KiB/s',
              '32400 KiB/s',
              '54000 KiB/s'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Do podłączenia dysku wyposażonego w interfejs SAS należy zastosować kabel pokazany na rysunku',
            answers: ['D', 'A', 'B', 'C'],
            correctAnswer: 0,
            img: 'e12/144.jpg'
          },
          {
            question: ' Jaka jest liczba pinów we wtyczce SATA?',
            answers: ['7', '4', '5', '9'],
            correctAnswer: 0
          },
          {
            question:
              ' Transmisja za pomocą fal radiowych korzystających z pasma ISM jest realizowana w interfejsie',
            answers: ['Bluetooth', 'FireWire', 'HDMI', 'IrDA'],
            correctAnswer: 0
          },
          {
            question: ' Bęben światłoczuły jest stosowany w drukarkach',
            answers: [
              'laserowych',
              'igłowych',
              'atramentowych',
              'termosublimacyjnych'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Wydruk z drukarki igłowej odbywa się przy użyciu zestawu stalowych igieł w ilości',
            answers: [
              '9, 24 lub 48',
              '6, 9 lub 15',
              '10, 20 lub 30',
              '9, 15 lub 45'
            ],
            correctAnswer: 0
          },
          {
            question: ' Zapis na dyskach BD-R odbywa się za pomocą',
            answers: [
              'lasera niebieskiego',
              'światła UV',
              'lasera czerwonego',
              'głowicy magnetycznej'
            ],
            correctAnswer: 0
          },
          {
            question: ' Na rysunku przedstawiono schemat zasady działania',
            answers: [
              'karty dźwiękowej',
              'kontrolera USB',
              'karty graficznej',
              'modemu'
            ],
            correctAnswer: 0,
            img: 'e12/145.jpg'
          },
          {
            question:
              ' Standardem komunikacji między skanerem a programem graficznym jest',
            answers: ['TWAIN', 'USB', 'OPC', 'SCAN'],
            correctAnswer: 0
          },
          {
            question: ' Przydziały dyskowe w systemach rodziny Windows',
            answers: [
              'pozwalają na zdefiniowanie maksymalnej przestrzeni dyskowej dla kont użytkowników',
              'przydzielają partycje na dyskach',
              'przydzielają etykietę (np. C) dla danej partycji',
              'zapewniają podstawową funkcje diagnostyczne, defragmentację i checkdisk'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Aby udrożnić zatkane dysze kartridża drukarki atramentowej, należy',
            answers: [
              'przemyć dyszę specjalnym środkiem chemicznym',
              'oczyścić dysze za pomocą sprężonego powietrza',
              'przeczyścić dysze drobnym papierem ściernym',
              'oczyścić dysze za pomocą drucianych zmywaków'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Do serwisu komputerowego dostarczono laptopa z matrycą bardzo słabo wyświetlającą obraz. Ponadto obraz jest bardzo ciemny i widoczny tylko z bliska. Przyczyna usterki to',
            answers: [
              'uszkodzony inwerter',
              'pęknięta matryca',
              'uszkodzone gniazdo HDMI',
              'uszkodzone łącze między procesorem a matrycą'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Do przechowywania części plików programów i danych, które są duże i nie mogą być umieszczone w całości w pamięci, służy',
            answers: [
              'plik stronicowania',
              'edytor rejestru',
              'menadżer zadań',
              'schowek systemu'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Aby nadpisać błędne wpisy w pliku boot.ini w konsoli odzyskiwania systemu Windows, należy użyć polecenia',
            answers: ['bootcfg /rebuild', 'fixmbr', 'fixboot', 'diskpart /add'],
            correctAnswer: 0
          },
          {
            question:
              ' Przed wykonaniem prac serwisowych związanych z modyfikacją rejestru systemu Windows należy wykonać',
            answers: [
              'kopię rejestru',
              'defragmentację dysku',
              'czyszczenie rejestru',
              'oczyszczanie dysku'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Przyczyną problemu z wydrukiem z drukarki laserowej pokazanym na rysunku jest',
            answers: [
              'uszkodzony bęben światłoczuły',
              'zaschnięty tusz',
              'uszkodzony podajnik papieru',
              'brak tonera w kasecie kartridż'
            ],
            correctAnswer: 0,
            img: 'e12/146.jpg'
          },
          {
            question:
              ' Podczas podłączenia sprawnego monitora do innego komputera jest wyświetlany komunikat przedstawiony na rysunku. Pojawienie się komunikatu jest spowodowane',
            answers: [
              'zbyt wysoką lub zbyt niską częstotliwością sygnału',
              'wyłączeniem komputera',
              'uszkodzeniem karty graficznej komputera',
              'uszkodzeniem monitora podczas podłączenia'
            ],
            correctAnswer: 0,
            img: 'e12/147.jpg'
          },
          {
            question: ' Na rysunku przedstawiono oprogramowanie monitorujące',
            answers: ['SMART', 'SAS', 'NCQ', 'IRDA'],
            correctAnswer: 0,
            img: 'e12/148.jpg'
          },
          {
            question:
              ' Aby system operacyjny miał szybszy dostęp do plików znajdujących się na dysku twardym, należy przeprowadzić',
            answers: [
              'defragmentację dysku',
              'szyfrowanie dysku',
              'fragmentację dysku',
              'partycjonowanie dysku'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Aby możliwe było wykorzystanie macierzy RAID 1, potrzeba minimum',
            answers: ['2 dysków', '3 dysków', '4 dysków', '5 dysków'],
            correctAnswer: 0
          },
          {
            question:
              ' Najbardziej efektywnym sposobem sporządzania codziennej archiwizacji pojedynczego pliku o rozmiarze 4,8 GB, na pojedynczym stanowisku komputerowym bez dostępu do sieci jest',
            answers: [
              'użycie pamięci USB z systemem plików NTFS',
              'nagranie na płytę DVD-5 w standardzie ISO',
              'użycie pamięci USB z systemem plików FAT32',
              'spakowanie i przechowywanie w lokalizacji sieciowej'
            ],
            correctAnswer: 0
          },
          {
            question: ' Wynikiem dodawania liczb 33(8) oraz 71(8) jest liczba',
            answers: ['1010100(2)', '1010101(2)', '1100101(2)', '1001100(2)'],
            correctAnswer: 0
          },
          {
            question: ' Niepoprawna postać zapisu liczby 77(8) to',
            answers: ['11010(ZM)', '3F(16)', '63(10)', '111111(2)'],
            correctAnswer: 0
          },
          {
            question:
              ' Typem pamięci operacyjnej o możliwie najmniejszym poborze mocy jest',
            answers: ['DDR3', 'SDR', 'DDR', 'DDR2'],
            correctAnswer: 0
          },
          {
            question:
              ' We wtyczce zasilania SATA został uszkodzony żółty przewód. Oznacza to, że złącze nie podaje napięcia o wartości',
            answers: ['12V', '5V', '3,3V', '8,5V'],
            correctAnswer: 0
          },
          {
            question:
              ' Z danych zestawionych w tabeli wynika, że częstotliwość efektywna pamięci DDR SDRAM wynosi',
            answers: ['400 MHz', '200 MHz', '266 MHz', '333 MHz'],
            correctAnswer: 0,
            img: 'e12/149.jpg'
          },
          {
            question:
              ' Jak nazywa się technologia umożliwiająca łączenie kart graficznych opracowana przez firmę NVIDIA?',
            answers: ['SLI', 'ATI', 'RAMDAC', 'CROSSFIRE'],
            correctAnswer: 0
          },
          {
            question:
              ' Aby połączyć komputer z siecią LAN, należy wykorzystać interfejs',
            answers: ['RJ-45', 'LPT', 'S/PDIF', 'D-SUB'],
            correctAnswer: 0
          },
          {
            question:
              ' Który port na przedstawionej płycie umożliwia podłączenie zewnętrznego dysku poprzez interfejs e-SATA?',
            answers: ['2', '1', '3', '4'],
            correctAnswer: 0,
            img: 'e12/150.jpg'
          },
          {
            question:
              ' Elementem zestawu komputerowego przetwarzającym zarówno dane wejściowe, jak i wyjściowe jest',
            answers: ['modem', 'ploter', 'skaner', 'głośnik'],
            correctAnswer: 0
          },
          {
            question:
              ' Odpowiednikiem macierzy RAID 1 w systemie Windows jest wolumin',
            answers: ['dublowany', 'rozłożony', 'łączony', 'prosty'],
            correctAnswer: 0
          },
          {
            question:
              ' Partycją systemu Linux przechowującą tymczasowo dane w przypadku braku wolnej pamięci RAM jest',
            answers: ['swap', 'var', 'sys', 'tmp'],
            correctAnswer: 0
          },
          {
            question:
              ' Narzędziem umożliwiającym zarządzanie menadżerem rozruchu systemów Windows począwszy od Windows Vista jest',
            answers: ['BCDEDIT', 'GRUB', 'AFFS', 'LILO'],
            correctAnswer: 0
          },
          {
            question:
              ' Które polecenie należy wydać, aby uzyskać wykaz przedstawionych plików?',
            answers: [
              'ls -l *a* *.jpg',
              'dir *a*.jpg',
              'grep *a* *.jpg',
              'find *.jpg | *a*'
            ],
            correctAnswer: 0,
            img: 'e12/151.jpg'
          },
          {
            question: ' W wyniku wykonania przedstawionego skryptu',
            answers: [
              'zostanie wpisany tekst ola.txt do pliku ala.txt',
              'zawartość pliku ola.txt zostanie skopiowana do pliku ala.txt',
              'zawartość pliku ala.txt zostanie skopiowana do pliku ola.txt',
              'zostanie wpisany tekst ala.txt do pliku ola.txt'
            ],
            correctAnswer: 0,
            img: 'e12/152.jpg'
          },
          {
            question:
              ' Aby ustawić w systemach operacyjnych rodziny Windows właściwość pliku na , należy użyć polecenia',
            answers: ['attrib', 'chmod', 'ftype', 'set'],
            correctAnswer: 0
          },
          {
            question:
              ' Aby zainstalować system openSUSE i skonfigurować jego ustawienia, można wykorzystać narzędzie',
            answers: ['YaST', 'GEdit', 'Brasero', 'Evolution'],
            correctAnswer: 0
          },
          {
            question:
              ' W systemach Windows można przypisać użytkownika do dowolnej grupy za pomocą przystawki',
            answers: ['lusrmgr', 'certsrv', 'fsmgmt', 'services'],
            correctAnswer: 0
          },
          {
            question:
              ' Programem umożliwiającym wydzielanie logicznych części dysku twardego w systemie GNU/Linux jest',
            answers: ['fdisk', 'format', 'convert', 'truncate'],
            correctAnswer: 0
          },
          {
            question:
              ' Do zarządzania przydziałami dyskowymi w systemach Windows 7 oraz Windows 8 służy narzędzie',
            answers: ['fsutil', 'query', 'perfmon', 'dcpromo'],
            correctAnswer: 0
          },
          {
            question:
              ' W dokumentacji karty dźwiękowej znajduje się następująca informacja: częstotliwość próbkowania 22kHz, rozdzielczość próbkowania 16 bitów. Jaka będzie przybliżona wielkość pliku dźwiękowego z 10-sekundowym nagraniem mono (jednokanałowym)?',
            answers: ['440000 B', '80000 B', '160000 B', '220000 B'],
            correctAnswer: 0
          },
          {
            question:
              ' Autorskie prawo majątkowe twórcy do programu komputerowego',
            answers: [
              'można przenosić na inną osobę',
              'nie jest prawem zbywalnym',
              'nie jest ograniczone w czasie',
              'trwa 25 lat od daty pierwszej publikacji'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Uruchamianie programu w dowolnym celu, analizowanie działania programu oraz jego modyfikowanie wraz z możliwością publicznego rozpowszechniania tych zmian jest cechą licencji typu',
            answers: ['GNU GPL', 'MOLP', 'ADWARE', 'FREEWARE'],
            correctAnswer: 0
          },
          {
            question:
              ' Przypisanie licencji oprogramowania do jednego komputera lub jego podzespołów jest cechą licencji',
            answers: ['OEM', 'BOX', 'AGPL', 'TRIAL'],
            correctAnswer: 0
          },
          {
            question:
              ' Odzyskiwanie surowców z odpadów w celu ich ponownego wykorzystania to',
            answers: ['recykling', 'kataliza', 'utylizacja', 'segregacja'],
            correctAnswer: 0
          },
          {
            question:
              ' Jaki rodzaj transmisji danych przesyłanych przez interfejs komputera osobistego został przedstawiony na rysunku?',
            answers: [
              'Szeregowy asynchroniczny',
              'Szeregowy synchroniczny',
              'Równoległy synchroniczny',
              'Równoległy asynchroniczny'
            ],
            correctAnswer: 0,
            img: 'e12/153.jpg'
          },
          {
            question:
              ' Elementem służącym do utrwalania tonera na papierze podczas wydruku z drukarki laserowej jest',
            answers: [
              'wałek grzewczy',
              'bęben światłoczuły',
              'elektroda ładująca',
              'listwa czyszcząca'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Urządzeniem wskazującym, które reaguje na zmiany pojemności elektrycznej, jest',
            answers: ['touchpad', 'mysz', 'dżojstik', 'trackpoint'],
            correctAnswer: 0
          },
          {
            question:
              ' Który standard szyfrowania należy wybrać podczas konfiguracji karty sieciowej, aby zabezpieczyć transmisję bezprzewodową?',
            answers: ['WPA', 'MAC', 'PPP', 'EAP'],
            correctAnswer: 0
          },
          {
            question:
              ' Wymiana taśmy barwiącej związana jest z użytkowaniem drukarki',
            answers: ['igłowej', 'laserowej', 'atramentowej', 'termicznej'],
            correctAnswer: 0
          },
          {
            question:
              ' W systemie operacyjnym wystąpił błąd sterownika TWAIN. Może być on powodem niepoprawnej pracy',
            answers: ['skanera', 'plotera', 'drukarki', 'klawiatury'],
            correctAnswer: 0
          },
          {
            question:
              ' Użytkownik Jan nie może zmienić właściciela drukarki w systemie Windows. Aby miał taką możliwość, należy przypisać mu w opcjach zabezpieczeń prawo do',
            answers: [
              'uprawnień specjalnych',
              'zmiany uprawnień drukowania',
              'zarządzania dokumentami',
              'zarządzania drukarkami'
            ],
            correctAnswer: 0
          },
          {
            question: ' Do sprawdzenia wartości napięcia w zasilaczu służy',
            answers: ['multimetr', 'amperomierz', 'impulsator', 'pirometr'],
            correctAnswer: 0
          },
          {
            question:
              ' Przy uruchamianiu komputera pojawia sie komunikat . Wciśnięcie klawisza DEL spowoduje',
            answers: [
              'wejście do BIOS-u komputera',
              'usunięcie pliku setup',
              'skasowanie zawartości pamięci CMOS',
              'przejście do konfiguracji systemu Windows'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Odpowiednikiem Linuksowego programu fsck w systemach rodziny Windows jest program',
            answers: ['chkdsk', 'erase', 'icacls', 'tasklist'],
            correctAnswer: 0
          },
          {
            question:
              ' Programem nie służącym do diagnostyki podzespołów komputera jest',
            answers: ['Cryptic Disk', 'CPU-Z', 'Everest', 'HD Tune'],
            correctAnswer: 0
          },
          {
            question: ' Na rysunku przedstawiono',
            answers: [
              'tester płyt głównych',
              'impulsator',
              'sondę logiczną',
              'czujnik temperatury'
            ],
            correctAnswer: 0,
            img: 'e12/154.jpg'
          },
          {
            question:
              ' Aby uruchomić tryb awaryjny w systemach rodziny Windows, należy podczas uruchamiania komputera wcisnąć klawisz',
            answers: ['F8', 'F1', 'F7', 'F10'],
            correctAnswer: 0
          },
          {
            question:
              ' Program działający w systemach rodziny Linux umożliwia wyświetlenie',
            answers: [
              'informacji o wolnej przestrzeni dyskowej',
              'nazwy bieżącego katalogu',
              'tekstu pasującego do wzorca',
              'zawartości ukrytego katalogu'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Aby odzyskać utracone dane w systemach rodziny Windows, należy zastosować polecenie',
            answers: ['recover', 'relase', 'renew', 'reboot'],
            correctAnswer: 0
          },
          {
            question: ' Program umożliwia',
            answers: [
              'archiwizowanie plików',
              'zarządzanie pakietami',
              'konfigurowanie karty sieciowej',
              'wyświetlanie listy aktywnych procesów'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Która z liczb w zapisie dziesiętnym jest prawidłową reprezentacją liczby 10111111 (2)?',
            answers: ['191 (10)', '193 (10)', '381 (10)', '382 (10)'],
            correctAnswer: 0
          },
          {
            question:
              ' Prawidłowym wynikiem mnożenia dwóch liczb binarnych 11100110 i 00011110 jest liczba',
            answers: [
              '6900 (10)',
              '6900 (h)',
              '64400 (o)',
              '0110 1001 0000 0000 (2)'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Parametr pamięci RAM nazywany czasem opóźnienia jest definiowany jako',
            answers: [
              'CAS Latency',
              'RAS to CAS Delay',
              'Command Rate',
              'RAS Precharge'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Zgodnie ze specyfikacją JEDEC napięcie zasilania modułów pamięci RAM DDR3L wynosi',
            answers: ['1,35 V', '1,5 V', '1,85 V', '1,9 V'],
            correctAnswer: 0
          },
          {
            question:
              ' Które z wymienionych urządzeń jest elementem jednostki centralnej?',
            answers: [
              'Modem PCI',
              'Klawiatura PS/2',
              'Monitor LCD',
              'Mysz USB'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Spośród wymienionych płyt głównych najmniejsze rozmiary ma format',
            answers: ['Mini ITX', 'Micro BTX', 'Mini ATX', 'Flex ATX'],
            correctAnswer: 0
          },
          {
            question:
              ' Przedstawiony na rysunku element systemu komputerowego to:',
            answers: [
              'dysk SSD',
              'karta graficzna do notebooka',
              'moduł pamięci Cache',
              'GPU'
            ],
            correctAnswer: 0,
            img: 'e12/155.jpg'
          },
          {
            question:
              ' Procesory AMD wyposażone w złącze AM2+ będą poprawnie działały na płycie głównej wyposażonej w podstawkę socket',
            answers: ['AM2', 'FM2', 'AM3', 'AM3+'],
            correctAnswer: 0
          },
          {
            question: ' Złącze zasilacza ATX12V służy do zasilania',
            answers: [
              'procesora',
              'karty graficznej PCI-e 3.0',
              'urządzeń SATA',
              'stacji dyskietek'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Pamięć podręczna Intel Smart Cache wbudowana w procesory wielordzeniowe np. Intel Core Duo to pamięć',
            answers: [
              'Cache L2 lub Cache L3, współdzielona przez wszystkie rdzenie',
              'Cache L1 podzielona równo pomiędzy rdzenie',
              'Cache L1 współdzielona przez wszystkie rdzenie',
              'Cache L2 lub Cache L3, podzielona równo pomiędzy rdzenie'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Serwerowa płyta główna do poprawnego działania wymaga pamięci z rejestrem. Który z wymienionych modułów pamięci będzie kompatybilny z taką płytą',
            answers: [
              'Kingston 8GB 1333 MHz DDR3 ECC Reg CL9 DIMM 2Rx8',
              'Kingston 4GB 1333 MHz DDR3 Non-ECC CL9 DIMM',
              'Kingston 4GB 1600 MHz DDR3 ECC CL11 DIMM 1,5V',
              'Kingston Hynix B 8GB 1600 MHz DDR3L CL11 ECC SODIMM 1,35V'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Wymieniając uszkodzoną kartę graficzną, która współpracowała z monitorem wyposażonym tylko w wejście analogowe, należy wybrać kartę',
            answers: [
              'Gigabyte GeForce GT 740 OC, 1GB GDDR5 (128 Bit), HDMI, DVI, D-Sub',
              'Sapphire Radeon R7 250X FLEX, 1GB GDDR5 (128 Bit), HDMI, 2xDVI, DP, LITE',
              'ZOTAC GeForce GT 730 Synergy Edition, 4GB DDR3 (128 Bit), 2xDVI, miniHDMI',
              'Sapphire Radeon R7 250, 1GB GDDR5 (128 Bit), microHDMI, DVI, miniDP LP, BULK'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Aby blokować i usuwać szkodliwe oprogramowanie typu exploit, robaki oraz trojany, należy zainstalować oprogramowanie',
            answers: ['antymalware', 'antyspyware', 'antyspam', 'adblock'],
            correctAnswer: 0
          },
          {
            question:
              ' W systemie Linux informacje o okresie ważności hasła są zapisane w pliku',
            answers: ['shadow', 'bash', 'grub', 'passwd'],
            correctAnswer: 0
          },
          {
            question:
              ' Liczby 1001 oraz 100 w wierszu pliku /etc/passwd oznaczają',
            answers: [
              'identyfikatory użytkownika i grupy w systemie',
              'liczbę udanych i nieudanych prób logowania',
              'numer koloru czcionki i numer koloru tła w terminalu',
              'liczbę dni od ostatniej zmiany hasła i liczbę dni do wygaśnięcia hasła'
            ],
            correctAnswer: 0,
            img: 'e12/156.jpg'
          },
          {
            question:
              ' Po wydaniu polecenia: net user w wierszu poleceń systemu Windows, zostanie wyświetlona',
            answers: [
              'lista kont użytkowników',
              'pomoc dotycząca polecenia net',
              'nazwa aktualnego użytkownika i jego hasło',
              'informacja o parametrach konta zalogowanego użytkownika'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' W systemie Windows użytkownik oraz wszystkie grupy, do których on należy mają uprawnienia "odczyt" do folderu XYZ. Użytkownik ten będzie mógł wykonywać operacje',
            answers: [
              'odczytu uprawnień do folderu XYZ',
              'usunięcia folderu XYZ',
              'zmiany nazwy folderu XYZ',
              'kopiowania plików do folderu XYZ'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Którego kodu numerycznego należy użyć w poleceniu zmiany uprawnień do folderu w systemie Linux, aby właściciel folderu miał uprawnienia zapisu i odczytu, grupa miała uprawnienia odczytu i wykonania, a pozostali użytkownicy tylko uprawnienia odczytu?',
            answers: ['654', '765', '751', '123'],
            correctAnswer: 0
          },
          {
            question:
              ' Które z poleceń należy wydać w systemie Windows 7, aby bezpośrednio z wiersza poleceń uruchomić program Zapora systemu Windows z zabezpieczeniami zaawansowanymi?',
            answers: ['wf.msc', 'services.msc', 'perfmon.msc', 'compmgmt.msc'],
            correctAnswer: 0
          },
          {
            question:
              ' Zwykły użytkownik systemu Linux, który chce usunąć konto innego użytkownika razem z jego katalogiem domowym, powinien wydać polecenie',
            answers: [
              'sudo userdel -r nazwa_użytkowania',
              'userdel nazwa_użytkownika',
              'userdel -d nazwa_użytkownika',
              'sudo userdel nazwa_użytkownika'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Dystrybucje systemu Linux Ubuntu rozpowszechniane są na licencjach',
            answers: ['GNU GPL', 'Public Domain', 'Freeware', 'MOLP'],
            correctAnswer: 0
          },
          {
            question:
              ' Które elementy systemu komputerowego podlegają utylizacji w wyspecjalizowanych zakładach przetwarzania z uwagi na zawartość niebezpiecznych substancji lub pierwiastków chemicznych?',
            answers: ['Tonery', 'Obudowy komputerów', 'Przewody', 'Radiatory'],
            correctAnswer: 0
          },
          {
            question:
              ' Które medium transmisyjne wykorzystują myszki bluetooth do komunikacji z komputerem?',
            answers: [
              'Fale radiowe w paśmie 2,4 GHz',
              'Promieniowanie podczerwone',
              'Promieniowanie ultrafioletowe',
              'Fale radiowe w paśmie 800/900 MHz'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Diody elektroluminescencyjne RGB są źródłem światła w skanerach',
            answers: [
              'płaskich CIS',
              'bębnowych',
              'płaskich CCD',
              'kodów kreskowych'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Użytkownik, który chce drukować dokumenty jednocześnie w oryginale i trzech kopiach na papierze samokopiującym, powinien do tego celu zakupić drukarkę',
            answers: ['igłową', 'termotransferową', 'atramentową', 'laserową'],
            correctAnswer: 0
          },
          {
            question:
              ' W której technologii budowy projektorów wykorzystywany jest system mikroskopijnych luster, z których każde odpowiada 1 pikselowi wyświetlanego obrazu?',
            answers: ['DLP', 'LCD', 'LED', 'LCOS'],
            correctAnswer: 0
          },
          {
            question:
              ' Do zasilacza UPS o mocy rzeczywistej 480 W nie należy podłączać',
            answers: [
              'drukarki laserowej',
              'urządzeń sieciowych typu router',
              'modemu ADSL',
              'monitora'
            ],
            correctAnswer: 0
          },
          {
            question: ' Tusz żelowy jest stosowany w drukarkach',
            answers: [
              'sublimacyjnych',
              'termotransferowych',
              'fiskalnych',
              'igłowych'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Chusteczki nasączone płynem o właściwościach antystatycznych są przeznaczone do czyszczenia',
            answers: [
              'ekranów monitorów CRT',
              'ekranów monitorów LCD',
              'wałków olejowych w drukarkach laserowych',
              'rolek prowadzących papier w drukarkach atramentowych'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Przedstawiony schemat obrazuje zasadę działania skanera',
            answers: ['3D', 'bębnowego', 'płaskiego', 'ręcznego'],
            correctAnswer: 0,
            img: 'e12/157.jpg'
          },
          {
            question:
              ' Do pomiaru wartości mocy pobieranej przez komputer należy użyć',
            answers: [
              'watomierza',
              'woltomierza',
              'amperomierza',
              'testera zasilaczy'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Poprawność działania pamięci operacyjnej RAM można sprawdzić za pomocą programu diagnostycznego',
            answers: ['Memtest86+', 'CPU-Z', 'GPU-Z', 'S.M.A.R.T'],
            correctAnswer: 0
          },
          {
            question:
              ' Komunikat "BIOS checksum error" wyświetlany podczas uruchomienia komputera oznacza najczęściej',
            answers: [
              'Uszkodzoną lub rozładowaną baterię na płycie głównej',
              'Błąd pamięci operacyjnej',
              'Uszkodzony wentylator procesora',
              'Brak nośnika z systemem operacyjnym'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Informacje o błędach działania systemu operacyjnego Linux można uzyskać za pomocą narzędzia',
            answers: ['syslog', 'grub', 'watch', 'netstat'],
            correctAnswer: 0
          },
          {
            question:
              ' Przy próbie zapisu danych na karcie SD pojawia się komunikat „usuń ochronę przed zapisem lub użyj innego dysku”. Przyczyną takiego komunikatu jest najczęściej',
            answers: [
              'Ustawienie mechanicznego przełącznika blokady zapisu na karcie w pozycji ON',
              "Posiadanie uprawnień 'tylko odczyt' do plików na karcie SD",
              'Za duży rozmiar zapisywanego pliku',
              'Brak miejsca na karcie pamięci'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' W systemie Linux do monitorowania bieżących procesów służy polecenie',
            answers: ['ps', 'df', 'free', 'watch'],
            correctAnswer: 0
          },
          {
            question:
              ' Monitor wydajności i niezawodności w systemie Windows jest uruchamiany za pomocą przystawki',
            answers: [
              'perfmon.msc',
              'diskmgmt.msc',
              'taskschd.msc',
              'fsmgmt.msc'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Dane z dysku twardego HDD z uszkodzonym sterownikiem silnika SM można odzyskać',
            answers: [
              'Przez wymianę płytki z elektroniką dysku na inną pochodzącą z takiego samego modelu',
              'Przez wymianę silnika SM',
              'Za pomocą polecenia fixmbr',
              'Za pomocą zewnętrznego programu do odzyskiwania danych np. TestDisk'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Użytkownicy dysków SSD w ramach zalecanych czynności konserwacyjnych nie powinni wykonywać',
            answers: [
              'Defragmentacji dysku',
              'Systematycznych kopii zapasowych danych',
              'Czyszczenia wnętrza jednostki centralnej z kurzu',
              'Systematycznego sprawdzania dysku programem antywirusowym'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' W cenniku usług komputerowych znajdują się przedstawione niżej zapisy. Ile będzie wynosił koszt dojazdu serwisanta do klienta mieszkającego poza miastem, w odległości 15km od siedziby firmy?',
            answers: [
              '60 zł + VAT',
              '30 zł',
              '30 zł + VAT',
              '25 zł + 2 zł za każdy km poza granicami miasta'
            ],
            correctAnswer: 0,
            img: 'e12/158.jpg'
          },
          {
            question: ' Liczba 563 (8) zapisana w systemie szesnastkowym to',
            answers: ['173', '317', '371', '713'],
            correctAnswer: 0
          },
          {
            question:
              ' Wynikiem sumowania liczb binarnych 1001101 i 11001 jest',
            answers: ['1100110', '1000110', '1100111', '1000111'],
            correctAnswer: 0
          },
          {
            question:
              ' Komponentem płyty głównej odpowiedzialnym za komunikację pomiędzy procesorem a pozostałymi elementami płyty jest',
            answers: ['chipset', 'BIOS ROM', 'pamięć RAM', 'układ chłodzenia'],
            correctAnswer: 0
          },
          {
            question:
              ' Odmianą pamięci tylko do odczytu, którą można wykasować za pomocą światła ultrafioletowego, jest pamięcią',
            answers: ['EPROM', 'ROM', 'PROM', 'EEPROM'],
            correctAnswer: 0
          },
          {
            question:
              ' Magistrala zakończona elementem przedstawionym na rysunku jest charakterystyczna dla interfejsu',
            answers: ['SCSI', 'SATA', 'ATAPI', 'UDMA'],
            correctAnswer: 0,
            img: 'e12/159.jpg'
          },
          {
            question:
              ' Na rysunku złącze monitora oznaczone ramką czerwoną, będzie współpracowało z płytą główną wyposażoną w interfejs',
            answers: ['DisplayPort', 'DVI', 'HDMI', 'D-SUB'],
            correctAnswer: 0,
            img: 'e12/160.jpg'
          },
          {
            question:
              ' Pamięć RAM przedstawiona na rysunku, montowana jest na płycie głównej wyposażonej w gniazdo',
            answers: ['DDR2', 'DDR', 'DDR3', 'DDR4'],
            correctAnswer: 0,
            img: 'e12/161.jpg'
          },
          {
            question:
              ' Użycie komendy perfmon w wierszu poleceń systemu Windows spowoduje',
            answers: [
              'uruchomienie narzędzia Monitor wydajności',
              'wykonanie kopii zapasowej systemu',
              'włączenie szyfrowania zawartości folderu bieżącego',
              'aktualizację systemu operacyjnego za pomocą usługi Windows Update'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Narzędzia dostrajania oraz Unity Tweak Tool to narzędzia systemu Linux służące do',
            answers: [
              'personalizacji systemu',
              'nadawania uprawnień do zasobów systemowych',
              'zarządzania kontami użytkownika',
              'konfiguracji zapory systemowej'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Specjalny interfejs wizualny systemu Windows, którego cechą charakterystyczną jest przezroczystość przypominająca szkło oraz subtelne animacje okien, to',
            answers: ['Aero', 'Luna', 'Royale', 'Gnome'],
            correctAnswer: 0
          },
          {
            question:
              ' Do utworzenia partycji w systemie Windows można użyć przystawki',
            answers: ['diskmgmt.msc', 'dsa.msc', 'dfsgui.msc', 'devmgmt.msc'],
            correctAnswer: 0
          },
          {
            question:
              ' Narzędziem wiersza poleceń w systemie Windows, służącym do kompresji oraz dekompresji plików i folderów, jest program',
            answers: [
              'Compact.exe',
              'Expand.exe',
              'DiskPart.exe',
              'CleanMgr.exe'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Aby chronić system przed atakami z sieci określanymi mianem phishing,',
            answers: [
              'używania starszych przeglądarek internetowych',
              'korzystania z bankowości elektronicznej',
              'korzystania z serwisów WWW używających protokołu HTTPS',
              'uaktualniania oprogramowania do obsługi poczty elektronicznej'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Zagrożeniem dla bezpieczeństwa systemu operacyjnego, wymuszającym jego automatyczną aktualizację, są',
            answers: [
              'luki w oprogramowaniu systemowym',
              'niewłaściwie ustawione prawa do plików',
              'błędnie zainstalowane sterowniki urządzeń',
              'błędne hasła użytkowników z prawami administratora'
            ],
            correctAnswer: 0
          },
          {
            question: ' Rysunek przedstawia schemat',
            answers: [
              'zasilacza impulsowego',
              'karty graficznej',
              'przetwornika DAC',
              'przełącznika kopułkowego'
            ],
            correctAnswer: 0,
            img: 'e12/162.jpg'
          },
          {
            question:
              ' Wskaż rysunek przedstawiający symbol stosowany do oznaczenia portu równoległego LPT',
            answers: ['D', 'A', 'B', 'C'],
            correctAnswer: 0,
            img: 'e12/163.jpg'
          },
          {
            question:
              ' Oprogramowanie regularnie przerywające działanie poprzez wyświetlenie komunikatu żądania uiszczenia zapłaty, która spowoduje usunięcie tego komunikatu, jest rozpowszechniane na bazie licencji',
            answers: ['nagware', 'careware', 'greenware', 'crippleware'],
            correctAnswer: 0
          },
          {
            question:
              ' Program Mozilla Firefox jest rozpowszechniany na podstawie licencji',
            answers: ['GNU MPL', 'OEM', 'MOLP', 'Liteware'],
            correctAnswer: 0
          },
          {
            question:
              ' Interfejs używany do komunikacji między urządzeniami przenośnymi, wykorzystujący cyfrową transmisję optyczną bezprzewodową do przesyłania danych na stosunkowo krótkim odcinku, to',
            answers: ['IrDA', 'IEEE 1394a', 'IEEE 1394c', 'Bluetooth'],
            correctAnswer: 0
          },
          {
            question:
              ' Interfejs równoległy, którego magistrala składa się z 8 linii danych, 4 linii sterujących, 5 linii statusu, nie zawiera linii zasilających oraz który zapewnia transmisję na odległość do 5 metrów, jeśli przewody sygnałowe są skręcane z przewodami masy, w przeciwnym wypadku na odległość do 2 metrów, nosi nazwę',
            answers: ['LPT', 'USB', 'EISA', 'AGP'],
            correctAnswer: 0
          },
          {
            question:
              ' Urządzenie peryferyjne sterowane za pomocą komputera, stosowane do pracy z płaskimi powierzchniami wielkoformatowymi, które do tworzenia wydruku odpornego na czynniki zewnętrzne wykorzystuje farby na bazie rozpuszczalników, to ploter',
            answers: ['solwentowy', 'piaskowy', 'kreślący', 'tnący'],
            correctAnswer: 0
          },
          {
            question:
              ' Urządzenie peryferyjne przedstawione na rysunku to skaner biometryczny, wykorzystujący do autoryzacji',
            answers: [
              'linie papilarne',
              'rysy twarzy',
              'kształt dłoni',
              'brzmienie głosu'
            ],
            correctAnswer: 0,
            img: 'e12/164.jpg'
          },
          {
            question:
              ' Drukarkę zainstalowano w systemie z rodziny Windows. Aby ustawić między innymi domyślną orientację wydruku, liczbę stron na arkusz oraz dostosowanie kolorów, podczas jej konfiguracji należy wykorzystać opcję',
            answers: [
              'preferencji drukowania',
              'prawa drukowania',
              'udostępniania drukarki',
              'zabezpieczenia drukarki'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Mechanizm umożliwiający podłączenie urządzeń peryferyjnych współpracujących z systemem komputerowym, w którym podłączane urządzenie jest rozpoznawane za pomocą nadanego mu numeru identyfikacyjnego, to',
            answers: ['Plug and Play', 'CrossFire', 'Hot Swap', 'BootLoader'],
            correctAnswer: 0
          },
          {
            question: ' Materiał eksploatacyjny drukarki 3D to',
            answers: ['filament', 'fluid', 'katalizator', 'pył węglowy'],
            correctAnswer: 0
          },
          {
            question:
              ' Wskaż rysunek przedstawiający materiał eksploatacyjny typowy dla drukarek żelowych',
            answers: ['C', 'A', 'B', 'D'],
            correctAnswer: 0,
            img: 'e12/165.jpg'
          },
          {
            question:
              ' Przy dłuższych przestojach drukarki atramentowej używane w niej pojemniki z tuszem powinny',
            answers: [
              'zostać zabezpieczone w specjalnych pudełkach uniemożliwiających zasychanie dysz',
              'zostać wymontowane z drukarki i umieszczone w szafie, bez dodatkowych zabezpieczeń',
              'pozostać w drukarce, bez wykonywania dodatkowych czynności',
              'pozostać w drukarce, którą należy zabezpieczyć folią'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Czynnością konserwacyjną związaną z eksploatacją skanera płaskiego jest',
            answers: [
              'regularne czyszczenie szyby skanera oraz płyty dociskowej',
              'włączenie automatycznego pobierania zalecanych sterowników do urządzenia',
              'podłączenie urządzenia do listwy przepięciowej',
              'czyszczenie dysz kartridża'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Ikona z wykrzyknikiem przedstawiona na rysunku, która występuje przy nazwie urządzenia w Menedżerze urządzeń, oznacza, że urządzenie to',
            answers: [
              'nie działa poprawnie',
              'działa poprawnie',
              'zostało wyłączone',
              'sterowniki na nim zainstalowane mają nowszą wersję'
            ],
            correctAnswer: 0,
            img: 'e12/166.jpg'
          },
          {
            question: ' Urządzenie przedstawione na rysunku służy do',
            answers: [
              'zmierzenia wartości napięcia dostarczanego przez zasilacz komputerowy',
              'odczytywania kodów POST z płyty głównej',
              'sprawdzania długości przewodów sieciowych',
              'organizacji przewodów wewnątrz jednostki centralnej'
            ],
            correctAnswer: 0,
            img: 'e12/167.jpg'
          },
          {
            question:
              ' Jeśli podczas uruchamiania się systemu BIOS firmy AWARD komputer wydał długi sygnał i dwa krótkie, oznacza to, że wystąpił błąd',
            answers: [
              'karty graficznej',
              'płyty głównej',
              'pamięci Flash - BIOS',
              'kontrolera klawiatury'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Dostarczanie nieprawidłowych napięć do płyty głównej może prowadzić do',
            answers: [
              'puchnięcia kondensatorów, zawieszania się jednostki centralnej oraz niespodziewanych restartów',
              'uruchomienia się jednostki centralnej z kolorowymi pasami i kreskami na ekranie',
              'braku możliwości instalacji oprogramowania',
              'wystąpienia błędów pamięci RAM'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Proces, w wyniku którego pliki zgromadzone na dysku twardym są zapisywane na niesąsiadujących ze sobą klastrach, jest nazywany',
            answers: [
              'fragmentacją danych',
              'defragmentacją danych',
              'kodowaniem danych',
              'konsolidacją danych'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Uruchomienie systemu Windows jest niemożliwe z powodu usterki programowej. Aby dokonać możliwie najmniej inwazyjnej diagnozy i usunięcia tej usterki, wskazane jest',
            answers: [
              'uruchomienie komputera w trybie awaryjnym',
              'wykonanie reinstalacji systemu Windows',
              'wykonanie diagnostyki podzespołów',
              'wykonanie wymiany podzespołów'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Podczas pracy z drukarką laserową blade wydruki lub nierównomierne nanoszenie medium drukującego mogą świadczyć o',
            answers: [
              'wyczerpywaniu się tonera',
              'uszkodzeniu przewodu łączącego drukarkę z komputerem',
              'błędnie zainstalowanych sterownikach drukarki',
              'zgięciu kartki papieru wewnątrz urządzenia.'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Przedstawiona na rysunku usterka, widoczna na ekranie komputera, być spowodowana przez',
            answers: [
              'uszkodzenie modułów pamięci operacyjnej',
              'przegrzewanie się karty graficznej',
              'złe napięcia podawane przez zasilacz',
              'spalenie rdzenia lub pamięci karty graficznej po overclockingu'
            ],
            correctAnswer: 0,
            img: 'e12/168.jpg'
          },
          {
            question:
              ' Programem, który dostarcza najwięcej informacji diagnostycznych o procesorze CPU, jest',
            answers: ['HWiNFO', 'GPU-Z', 'HD Tune', 'Memtest86+'],
            correctAnswer: 0
          },
          {
            question:
              ' W systemie Windows przypadkowo usunięto konto użytkownika bez usunięcia katalogu domowego. Odzyskanie niezaszyfrowanych danych z katalogu domowego użytkownika jest',
            answers: [
              'możliwe za pomocą konta o uprawnieniach administratorskich',
              'możliwe wyłącznie przy użyciu programu typu recovery',
              'niemożliwe, dane są bezpowrotnie utracone wraz z kontem',
              'niemożliwe, ponieważ zabezpieczenia systemowe blokują dane'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Jednym z narzędzi używanych do tworzenia kopii partycji i dysków jest',
            answers: ['Norton Ghost', 'Diskpart', 'Gparted', 'CrystalDiskInfo'],
            correctAnswer: 0
          },
          {
            question: ' Aby zapewnić właściwie funkcjonowanie skanera, należy',
            answers: [
              'nie wkładać kartek ze zszywkami do podajnika urządzenia, jeśli jest on automatyczny',
              'smarować łożyska wentylatorów chłodzenia jednostki centralnej',
              'mieć zainstalowany w systemie program antywirusowy',
              'sprawdzić temperaturę podzespołów komputera'
            ],
            correctAnswer: 0
          },
          {
            question: ' Zapis koloru RGB(255, 170, 129) odpowiada notacji',
            answers: ['#FFAA81', '#81AAFF', '#18FAAF', '#AA18FF'],
            correctAnswer: 0
          },
          {
            question: ' Zapis liczby siedem w systemie ósemkowym to',
            answers: ['7(o)', '7(b)', '7(d)', '7(h)'],
            correctAnswer: 0
          },
          {
            question:
              ' Brak informacji o parzystości liczby lub o znaku wyniku wykonywanej operacji w ALU, może świadczyć o problemach w działaniu',
            answers: [
              'rejestru flagowego',
              'pamięci cache',
              'wskaźnika stosu',
              'tablicy rozkazów'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Funkcję bufora pomiędzy wolną pamięcią operacyjną a szybkim procesorem pełni pamięć',
            answers: ['CACHE', 'SSD', 'FDD', 'ROM'],
            correctAnswer: 0
          },
          {
            question: ' Procesory CISC charakteryzują się',
            answers: [
              'dużą liczbą rozkazów',
              'prostą i szybką jednostką sterującą',
              'niewielką liczbą trybów adresowania',
              'ograniczaną komunikacją pomiędzy pamięcią a procesorem'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Do przedstawionej na rysunku płyty głównej nie można podłączyć urządzenia wykorzystującego złącze',
            answers: ['AGP', 'IDE', 'PCI', 'SATA'],
            correctAnswer: 0,
            img: 'e12/169.jpg'
          },
          {
            question:
              ' Aby poprawić wydajność komputera, można w nim zamontować procesor obsługujący technologię Hyper-Threading, umożliwiającą',
            answers: [
              'wykonywanie przez jeden rdzeń procesora dwóch niezależnych zadań jednocześnie',
              'zwiększenie szybkości pracy zegara',
              'automatyczną regulację częstotliwości rdzeni procesora w zależności od jego obciążenia',
              'wymianę danych pomiędzy procesorem a dyskiem twardym z prędkością pracy procesora'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Jaką rozdzielczość musi obsługiwać karta graficzna, aby oglądać na 23-calowym monitorze materiał video w trybie Full HD?',
            answers: ['1920×1080', '2560×1440', '2048×1152', '1600×900'],
            correctAnswer: 0
          },
          {
            question:
              ' Użytkownik laptopa chce do niego podłączyć przedstawioną na rysunku kartę sieciową. Aby to było możliwe, laptop musi być wyposażony w gniazdo',
            answers: ['PCMCIA', 'BNC', 'Slot 3', 'Mini DIN'],
            correctAnswer: 0,
            img: 'e12/170.jpg'
          },
          {
            question:
              ' Który procesor należy wykorzystać podczas montażu komputera osobistego na bazie płyty głównej Asus M5A78L-M/USB3 AMD760G socket AM3+',
            answers: [
              'AMD FX 8300 3300MHz AM3+ OEM',
              'AMD A8-7600 S.FM2 BOX',
              'AMD APU A4 6320 3800MHz FM2',
              'AMD APU A8 7650K 3300MHz FM2+ BOX'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Aby możliwe było przesyłanie cyfrowego sygnału audio i wideo bez strat jakości z komputera do urządzenia zewnętrznego podłączonego do wyjścia karty graficznej, to karta graficzna powinna być wyposażona w interfejs',
            answers: ['HDMI', 'VGA', 'DVI-A', 'D-Sub'],
            correctAnswer: 0
          },
          {
            question:
              ' Aby uzyskać przepustowość na poziomie 4 GB/s w każdą stronę, należy zamontować w zestawie komputerowym kartę graficzną wykorzystującą interfejs',
            answers: [
              'PCI-Express x 16 wersja 1.0',
              'PCI-Express x 1 wersja 3.0',
              'PCI-Express x 4 wersja 2.0',
              'PCI-Express x 8 wersja 1.0'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' W komputerze zamontowano nowy dysk twardy o pojemności 8 TB i podzielono go na 2 partycje, każda po 4 TB wielkości. Którego typu tablicy partycji należy użyć, aby można było dokonać takiego partycjonowania?',
            answers: ['GPT', 'MBR', 'SWAP', 'FAT32'],
            correctAnswer: 0
          },
          {
            question:
              ' W który rodzaj matrycy powinien być wyposażony monitor w modernizowanym zestawie komputerowym w przypadku konieczności zapewnienia wysokiej jakości obrazu oraz szerokich kątów widzenia w poziomie i pionie?',
            answers: ['IPS', 'TN', 'CRT', 'DLP'],
            correctAnswer: 0
          },
          {
            question:
              ' Partycją systemu Linux przechowującą tymczasowo dane w przypadku braku wolnej pamięci RAM jest',
            answers: ['swap', 'var', 'sys', 'tmp'],
            correctAnswer: 0
          },
          {
            question:
              ' Administrator systemu Linux wylistował zawartość katalogu w terminalu i uzyskał następujący wynik Następnie wydał polecenie: Jaki będzie efekt jego działania, wyświetlony w oknie terminala?',
            answers: [
              '-rw- rw- r-x 1 admin admin 25 04-09 15:17 szkola.txt',
              '-rw- rw- rw- 1 admin admin 25 04-09 15:17 szkola.txt',
              '-rwx ~x rw- 1 admin admin 25 04-09 15:17 szkola.txt',
              '-rwx r-x r-x 1 admin admin 25 04-09 15:17 szkola.txt'
            ],
            correctAnswer: 0
          },
          {
            question: ' W systemie Windows za pomocą polecenia assoc można',
            answers: [
              'zmienić skojarzenia rozszerzeń plików',
              'wyświetlić atrybuty plików',
              'porównać zawartość dwóch plików',
              'zmodyfikować listę kontroli dostępu do plików'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Aby zapobiec nieautoryzowanym zmianom na koncie użytkownika w systemie Windows 7, 8 lub 10 wymagającym uprawnień administratora, należy skonfigurować',
            answers: ['UAC', 'JOBS', 'POPD', 'SUDO'],
            correctAnswer: 0
          },
          {
            question:
              ' Którą z opcji konfiguracji ustawień użytkownika z ograniczonymi uprawnieniami w systemie Windows, umożliwia przystawka secpol?',
            answers: [
              'Zezwolenie na zmianę czasu systemowego',
              'Odebranie możliwości zapisu na płytach CD',
              'Blokadę określonych elementów w panelu sterowania',
              'Czyszczenie historii niedawno otwieranych dokumentów'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Minimalną długość hasła użytkownika w systemie Windows można ustawić za pomocą polecenia',
            answers: ['net accounts', 'net user', 'net config', 'net computer'],
            correctAnswer: 0
          },
          {
            question: ' Rysunek przedstawia wynik wykonania programu',
            answers: ['tree', 'dir', 'vol', 'sort'],
            correctAnswer: 0,
            img: 'e12/171.jpg'
          },
          {
            question:
              ' Administrator systemu Windows zauważył wyraźne spowolnienie pracy komputera spowodowane małą ilością wolnej pamięci RAM. Aby sprawdzić, który program zużywa jej najwięcej należy użyć programu',
            answers: ['tasklist', 'top', 'rem', 'schtsk'],
            correctAnswer: 0
          },
          {
            question:
              ' Użytkownik systemu Windows za pomocą programu Cipher może',
            answers: [
              'chronić dane przez szyfrowanie plików',
              'przeskanować system w poszukiwania malware',
              'wykonać przyrostową kopię zapasową plików systemowych',
              'usunąć konto użytkownika wraz z jego profilem oraz dokumentami'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' W dokumentacji technicznej procesora producent umieścił wyniki testu przeprowadzonego za pomocą programu CPU-Z. Wynika z niego, że procesor ma',
            answers: ['2 rdzenie', '4 rdzenie', '5 rdzeni', '6 rdzeni'],
            correctAnswer: 0,
            img: 'e12/172.jpg'
          },
          {
            question:
              ' Prawo do modyfikowania kodu oprogramowania przez jego użytkownika daje licencja typu',
            answers: ['GNU GPL', 'BOX', 'MOLP', 'FREEWARE'],
            correctAnswer: 0
          },
          {
            question:
              ' Który typ licencji uprawnia do dowolnych modyfikacji, kopiowania oraz rozpowszechniania po uiszczeniu dowolnej opłaty na rzecz autora?',
            answers: ['donationware', 'adware', 'shareware', 'postcardware'],
            correctAnswer: 0
          },
          {
            question:
              ' Transmisja interfejsem równoległym synchronicznym cechuje się tym, że',
            answers: [
              'w wyznaczonych okresach czasu określanych sygnałem zegarowym CLK dane przesyłane są jednocześnie kilkoma przewodami',
              'dane są przesyłane jednocześnie całą szerokością magistrali, a początek i koniec transmisji jest oznaczony bitem startu i stopu',
              'dane są przesyłane bit po bicie w wyznaczonych okresach czasu określanych sygnałem zegarowym CLK',
              'początek i koniec przesyłanych bit po bicie danych jest oznaczony bitem startu i stopu'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Który interfejs umożliwia korzystanie ze sterowników i oprogramowania systemu operacyjnego, zapewniając m.in. przepływ danych między pamięcią systemową a dyskiem SATA?',
            answers: ['AHCI', 'EHCI', 'OHCI', 'UHCI'],
            correctAnswer: 0
          },
          {
            question:
              ' W skanerze z układami CIS elementem oświetlającym skanowany dokument jest',
            answers: [
              'grupa trójkolorowych diod LED',
              'świetlówka',
              'układ żarówek',
              'lampa fluorescencyjna'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Aby zapobiec występowaniu różnic w kolorach między zeskanowanymi zdjęciami wyświetlanymi na monitorze komputerowym a ich oryginałami, należy wykonać',
            answers: [
              'kalibrację skanera',
              'modelowanie skanera',
              'interpolację skanera',
              'kadrowanie skanera'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Który przyrząd pomiarowy służy do sprawdzenia wartości napięć w zasilaczu?',
            answers: ['Woltomierz', 'Omomierz', 'Watomierz', 'Amperomierz'],
            correctAnswer: 0
          },
          {
            question:
              ' Impulsator umożliwia testowanie uszkodzonych układów logicznych komputera między innymi przez',
            answers: [
              'podanie na wejście układu stanu wysokiego',
              'odczytanie stanu wyjściowego układu',
              'kalibrację mierzonych wielkości elektrycznych',
              'badanie stanów logicznych obwodów cyfrowych'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Użytkownik systemu Linux, chcąc przetestować dysk twardy pod kątem występowania na nim uszkodzonych sektorów, może użyć programu',
            answers: ['fsck', 'defrag', 'chkdisk', 'scandisk'],
            correctAnswer: 0
          },
          {
            question:
              ' Za pomocą przedstawionego na rysunku urządzenia można przetestować działanie',
            answers: [
              'zasilacza',
              'procesora',
              'płyty głównej',
              'dysku twardego'
            ],
            correctAnswer: 0,
            img: 'e12/173.jpg'
          },
          {
            question:
              ' Użytkownik ma problem z rozruchem systemu Windows. Aby to naprawić, uruchomił narzędzie System Image Recovery, które',
            answers: [
              'przywraca system na podstawie kopii zapasowej',
              'naprawia pliki startowe, wykorzystując płytę Recovery',
              'odtwarza system wykorzystując w tym celu punkty przywracania',
              'odzyskuje ustawienia systemu, korzystając z kopii rejestru systemowego backup.reg'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Za pomocą polecenia taskmgr użytkownik systemu Windows może',
            answers: [
              'zakończyć działanie wadliwej aplikacji',
              'naprawić błędy systemu plików',
              'odzyskać uszkodzone sektory dysku',
              'wykonać aktualizację sterowników systemowych'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Do sprawdzania rozmiaru katalogu w systemie Linux służy polecenie',
            answers: ['du', 'cp', 'ps', 'rm'],
            correctAnswer: 0
          },
          {
            question:
              ' W systemie Windows po wydaniu polecenia systeminfo NIE UZYSKA SIĘ informacji o',
            answers: [
              'liczbie partycji podstawowych',
              'liczbie procesorów',
              'zainstalowanych poprawkach',
              'zamontowanych kartach sieciowych'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' W strategii archiwizacji danych zwanej Dziadek – Ojciec – Syn na poziomie Dziadek wykonuje się kopię danych na koniec',
            answers: ['miesiąca', 'dnia', 'roku', 'tygodnia'],
            correctAnswer: 0
          }
        ]
      },
      {}
    ],
    20: [
      function (require, module, exports) {
        module.exports = [
          {
            question:
              ' Która warstwa modelu ISO/OSI jest związana z protokołem IP?',
            answers: ['Sieciowa', 'Fizyczna', 'Transportowa', 'Łącza danych'],
            correctAnswer: 0
          },
          {
            question:
              ' Jaką ilość rzeczywistych danych można przesłać w czasie 1 s przez łącze synchroniczne o przepustowości 512 kbps, bez sprzętowej i programowej kompresji?',
            answers: [
              'Około 55 kB',
              'Około 5 kB',
              'Ponad 64 kB',
              'Ponad 500 kB'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Wskaż urządzenie, które należy wykorzystać, aby podłączyć dwa komputery do sieci Internet z dostępem przez sieć lokalną Ethernet, w której mamy do dyspozycji tylko jeden adres IP',
            answers: [
              'Router LAN',
              'Spliter ADSL',
              'Modem ISDN',
              'Przełącznik LAN'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' W celu zdalnego i przy tym bezpiecznego administrowania systemem Linux należy wykorzystać protokół',
            answers: ['SSH2', 'FTP', 'Telnet', 'SMTP'],
            correctAnswer: 0
          },
          {
            question:
              ' Jakie połączenie z Internetem można udostępniać sieci lokalnej?',
            answers: [
              'Wszystkie rodzaje połączeń',
              'Połączenie o szybkości transmisji co najmniej 56 kb/s',
              'Jedynie tzw. szybkie połączenia, tzn. powyżej 64 kb/s',
              'Wszystkie połączenia oprócz połączeń modemem analogowym'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Aby użytkownicy sieci lokalnej mogli przeglądać strony WWW protokołami HTTP i HTTPS, brama internetowa musi przepuszczać ruch na portach',
            answers: ['80 i 443', '80 i 434', '90 i 434', '90 i 443'],
            correctAnswer: 0
          },
          {
            question:
              ' Podczas montażu sieci komputerowej, przy wierceniu otworów w ścianach, NIE NALEŻY używać',
            answers: [
              'rękawic ochronnych',
              'okularów ochronnych',
              'ubrania roboczego',
              'obuwia roboczego'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Wybierz medium, które w sieciach komputerowych zapewnia najszybszą transmisję danych',
            answers: [
              'Kabel światłowodowy',
              'Mikrofale',
              'Fale radiowe',
              'Czteroparowy kabel kat. 5'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Karta sieciowa standardu Fast Ethernet pozwala na transfer danych z maksymalną szybkością',
            answers: ['100 Mbps', '100 MB/s', '10 MB/s', '10 Mbps'],
            correctAnswer: 0
          },
          {
            question:
              ' W celu uzyskania w sieci lokalnej prędkości przesyłania danych 100 Mbps zastosowano karty sieciowe pracujące w standardzie Fast Ethernet, kabel standardu UTP w odpowiedniej kategorii oraz przełącznik (switch) pracujący w standardzie Fast Ethernet. Sieć taka jest wykonana w topologii',
            answers: ['STAR', 'IEEE', 'BUS', 'RING'],
            correctAnswer: 0
          },
          {
            question:
              ' Który adres protokołu IP w wersji 4 ma prawidłową strukturę?',
            answers: [
              '192.21.140.16',
              '192.10.255.3A',
              '192.309.1.255',
              '192.0.FF.FF'
            ],
            correctAnswer: 0
          },
          {
            question: ' Przydzielaniem numerów IP w sieci zajmuje się serwer',
            answers: ['DHCP', 'DNS', 'WINS', 'NMP'],
            correctAnswer: 0
          },
          {
            question: ' Aby usunąć opisaną usterkę, należy',
            answers: [
              'zmienić konfiguracje adresów IP i/lub masek podsieci im odpowiadających w taki sposób, aby oba komputery znalazły się w tej samej podsieci',
              'sprawdzić włączenie PROXY i ewentualnie włączyć',
              'wyłączyć system NetBIOS NWLink we właściwościach połączeń LAN komputerów',
              'wyłączyć system NetBIOS przez TCP/IP w zaawansowanych ustawieniach TCP/IP kart sieciowych'
            ],
            correctAnswer: 0,
            img: 'e13/1.jpg'
          },
          {
            question:
              ' Zrzut ekranu przedstawia efekt polecenia arp -a. Jak należy zinterpretować tę informację?',
            answers: [
              'Brak bieżących wpisów protokołu ARP',
              'Adres fizyczny hosta jest błędny',
              'Komputerowi przypisano błędny adres IP',
              'Host nie ma połączenia z Internetem'
            ],
            correctAnswer: 0,
            img: 'e13/2.jpg'
          },
          {
            question:
              ' Usługa Windows XP Professional "Mostek sieciowy" pozwala na łączenie ze sobą',
            answers: [
              'segmentów sieci LAN',
              'dwóch komputerów',
              'roboczych stacji bezdyskowych',
              'klienta z serwerem'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Numer IP przypisany komputerowi umożliwia odbiorcy pakietu IP rozróżnienie identyfikatorów',
            answers: [
              'sieci i hosta',
              'sieci i bramy',
              'hosta i rutera',
              'hosta i bramy'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Polecenie tracert to narzędzie diagnostyczne, które ustala',
            answers: [
              'ścieżkę do lokalizacji docelowej',
              'sprawność połączenia przy użyciu protokołu IPX/SPX',
              'poprawność konfiguracji protokołu TCP/IP',
              'możliwość diagnozowania infrastruktury systemu DNS'
            ],
            correctAnswer: 0,
            img: 'e13/3.jpg'
          },
          {
            question:
              ' Włączenie usługi Udostępnienie połączenia internetowego w systemie Windows uruchamia automatyczne nadawanie adresów IP dla komputerów (hostów) z niej korzystających. W tym celu wykorzystywana jest usługa',
            answers: ['DHCP', 'WINS', 'NFS', 'DNS'],
            correctAnswer: 0
          },
          {
            question:
              ' Komputery przenośne są z reguły wyposażone w bezprzewodowe sieci LAN. Ograniczenia ich użytkowania dotyczą emisji fal radiowych mogących zakłócać działanie innych, ważnych dla bezpieczeństwa, urządzeń',
            answers: ['w samolocie', 'w pociągu', 'w biurze', 'w mieszkaniu'],
            correctAnswer: 0
          },
          {
            question:
              ' Aby użytkownicy sieci lokalnej mogli przeglądać strony WWW protokołami HTTP i HTTPS, brama internetowa musi przepuszczać ruch na portach',
            answers: ['80 i 443', '80 i 434', '90 i 434', '90 i 443'],
            correctAnswer: 0
          },
          {
            question: ' Na zdjęciu przedstawiono',
            answers: [
              'terminator BNC',
              'zastępczy wtyk RJ-45',
              'zaślepkę gniazda RJ-45',
              'zaślepkę kabla światłowodowego'
            ],
            correctAnswer: 0,
            img: 'e13/4.jpg'
          },
          {
            question: ' Zdjęcie przedstawia',
            answers: [
              'wtyk światłowodu',
              'wtyk audio',
              'przedłużacz kabla UTP',
              'wtyk kabla koncentrycznego'
            ],
            correctAnswer: 0,
            img: 'e13/5.jpg'
          },
          {
            question:
              ' Które z wymienionych poleceń w systemie Windows XP służy do sprawdzenia bieżącej konfiguracji IP systemu Windows?',
            answers: ['ipconfig', 'tcpconfig', 'configip', 'ipedit'],
            correctAnswer: 0
          },
          {
            question: ' Urządzenie ADSL służy do uzyskania połączenia',
            answers: [
              'cyfrowego asymetrycznego',
              'radiowego',
              'satelitarnego',
              'cyfrowego symetrycznego'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Jednostką opisującą szybkość transmisji danych w sieciach komputerowych jest',
            answers: ['bps', 'dpi', 'ips', 'mips'],
            correctAnswer: 0
          },
          {
            question:
              ' W systemie Windows XP na komputerze klienckim, plik "hosts" jest plikiem tekstowym, który służy do mapowania',
            answers: [
              'nazw hostów na adresy IP',
              'dysków twardych',
              'nazw hostów na adresy MAC',
              'nazw hostów przez serwery DNS'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Do połączenia kilku komputerów w sieć lokalną można użyć',
            answers: ['router', 'most', 'RAMDAC', 'modem'],
            correctAnswer: 0
          },
          {
            question: ' Serwer DNS jest serwerem',
            answers: [
              'dzięki któremu nazwy mnemoniczne (opisowe) mogą zostać zamienione na odpowiadające im adresy IP',
              'usług terminalowych',
              'zdalnego i szyfrowanego dostępu',
              'dynamicznie przydzielającym adresy IP'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Numer IP zapisuje się w postaci czterech, oddzielonych od siebie kropkami',
            answers: ['oktetów', 'dekad', 'helów', 'bitów'],
            correctAnswer: 0
          },
          {
            question:
              ' Komputer ma dostęp do Internetu poprzez sieć lokalną. Wpisując w przeglądarce internetowej adres www.wp.pl użytkownik nie ma dostępu do strony WWW, natomiast wpisanie adresu IP np. 212.77.100.101 pozwala otworzyć tę stronę. Co może być tego przyczyną?',
            answers: [
              'Brak serwera DNS',
              'Brak adresu bramy',
              'Brak serwera WINS',
              'Brak serwera PROXY'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Który z wymienionych adresów IP v.4 jest adresem klasy C?',
            answers: ['223.0.10.1', '10.0.2.0', '191.11.0.10', '126.110.10.0'],
            correctAnswer: 0
          },
          {
            question: ' Adres IP v.4 ma długość',
            answers: ['32 bitów', '2 bajty', '16 bitów', '10 bajtów'],
            correctAnswer: 0
          },
          {
            question:
              ' Jakie polecenie w systemach Windows/Linux jest zwyczajowo stosowane do śledzenia trasy pakietów w sieciach IP?',
            answers: ['tracert/traceroute', 'ping', 'router', 'netstat'],
            correctAnswer: 0
          },
          {
            question:
              ' Jaki przewód należy zastosować do instalacji sieci w pomieszczeniach, w których występują silne pola zakłócające?',
            answers: [
              'Ekranowany',
              'Typu skrętka',
              'Koncentryczny z transmisją szerokopasmową',
              'Koncentryczny z transmisją w paśmie podstawowym'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' W systemie Windows moduł odpowiedzialny za internetowe usługi informacyjne to',
            answers: ['IIS', 'ISA', 'IIU', 'OSI'],
            correctAnswer: 0
          },
          {
            question:
              ' Jaka jest szybkość transferu danych w sieciach FDDI (ang. Fiber Distributed Data Interface) opartych na technologii światłowodowej?',
            answers: ['100 Mb/s', '1024 Mb/s', '100 MB/s', '1024 kB/s'],
            correctAnswer: 0
          },
          {
            question:
              ' Który z wtyków należy zamontować na przewodzie UTP Cat 5e, by podłączyć komputer do sieci?',
            answers: ['RJ45', 'BNC', 'RJ11', 'MT-RJ'],
            correctAnswer: 0
          },
          {
            question:
              ' Maska podsieci /23 oznacza, że na pierwszych 23 bitach 32-cyfrowej liczby binarnej znajdują się jedynki, a na pozostałych zera. Jak będzie zapisana ta maska w systemie dziesiętnym, jeżeli każdym kolejnym 8 bitom odpowiada jedna liczba dziesiętna?',
            answers: [
              '255.255.254.0',
              '255.255.0.0',
              '255.255.255.0',
              '255.255.255.128'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Przedstawiono wynik uzyskany po uruchomieniu w systemie Windows polecenia IPCONFIG /ALL. Jak zostały skonfigurowane właściwości protokołu TCP/IP dla karty sieciowej?',
            answers: [
              'Karta sieciowa uzyskała adres IP automatycznie',
              'Karta sieciowa nie ma ustawionego adresu bramy',
              'Karta sieciowa ma przydzielony statyczny adres IP',
              'Karta sieciowa nie ma ustawionego adresu serwera DNS'
            ],
            correctAnswer: 0,
            img: 'e13/6.jpg'
          },
          {
            question:
              ' Który standard z grupy IEEE 802 jest związany z sieciami bezprzewodowymi, tzw. Wireless LAN?',
            answers: ['IEEE 802.11', 'IEEE 802.3', 'IEEE 802.5', 'IEEE 802.15'],
            correctAnswer: 0
          },
          {
            question:
              ' Jaki protokół służy do translacji pomiędzy publicznymi i prywatnymi adresami IP?',
            answers: ['NAT', 'ARP', 'RARP', 'SNMP'],
            correctAnswer: 0
          },
          {
            question:
              ' Stacja robocza ma należeć do tej samej podsieci co serwer o adresie IP 192.168.10.150 i masce 255.255.255.192. Który z adresów IP należy ustawić we właściwościach protokołu TCP/IP karty sieciowej stacji roboczej?',
            answers: [
              '192.168.10.190',
              '192.168.10.1',
              '192.168.11.130',
              '192.168.10.220'
            ],
            correctAnswer: 0
          },
          {
            question: ' Urządzenie ADSL służy do uzyskania połączenia',
            answers: [
              'cyfrowego asymetrycznego',
              'radiowego',
              'satelitarnego',
              'cyfrowego symetrycznego'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Komputer ma dostęp do Internetu poprzez sieć lokalną. Wpisując w przeglądarce internetowej adres www.wp.pl użytkownik nie ma dostępu do strony WWW, natomiast wpisanie adresu IP np. 212.77.100.101 pozwala otworzyć tę stronę. Co może być tego przyczyną?',
            answers: [
              'Brak serwera DNS',
              'Brak adresu bramy',
              'Brak serwera WINS',
              'Brak serwera PROXY'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Wybierz medium, które w sieciach komputerowych zapewnia najszybszą transmisję danych',
            answers: [
              'Kabel światłowodowy',
              'Mikrofale',
              'Fale radiowe',
              'Czteroparowy kabel kat. 5'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Jaką liczbę adresów urządzeń sieciowych zapewnia do dyspozycji stosowanie klasy adresowej C w sieciach opartych na rodzinie protokołów TCP/IP?',
            answers: ['254', '100', '200', '256'],
            correctAnswer: 0
          },
          {
            question:
              ' Który adres protokołu IP w wersji 4 ma prawidłową strukturę?',
            answers: [
              '192.21.140.1',
              '192.10.255.3A',
              '192.309.1.255',
              '192.0.FF.FF'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Adres IP urządzenia umożliwiającego innym komputerom w sieci lokalnej dostęp do Internetu, to adres',
            answers: ['bramy (routera)', 'DNS', 'WINS', 'proxy'],
            correctAnswer: 0
          },
          {
            question: ' Skrót MAN oznacza sieć',
            answers: ['miejską', 'lokalną', 'rozległą', 'bezprzewodową'],
            correctAnswer: 0
          },
          {
            question:
              ' Architektura fizyczna sieci, zwana inaczej topologią fizyczną sieci komputerowych określa',
            answers: [
              'sposób połączenia ze sobą komputerów',
              'standardy komunikacyjne sieci komputerowych',
              'wzajemną komunikację komputerów pomiędzy sobą',
              'przekaz informacji pomiędzy protokołami sieciowymi modelu OSI'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' System umożliwiający przetłumaczenie nazwy komputera na adres IP w sieci to',
            answers: ['DNS', 'ARP', 'ICMP', 'NetBEUI'],
            correctAnswer: 0
          },
          {
            question: ' Rysunek przedstawia topologię',
            answers: ['gwiazdy', 'siatki', 'magistrali', 'pierścienia'],
            correctAnswer: 0,
            img: 'e13/7.jpg'
          },
          {
            question:
              ' Active Directory w systemach MS Windows Server 2000 i MS Windows Server 2003 to',
            answers: [
              'usługa katalogowa, która przechowuje informacje dotyczące obiektów w sieci i udostępnia je użytkownikom oraz administratorom sieci',
              'baza danych zawierająca informacje o użytkownikach sieci, ich hasłach dostępu i uprawnieniach',
              'logiczna grupa komputerów, które mają możliwość komunikowania się w sieci i wzajemnego udostępniania zasobów',
              'grupa komputerów połączonych w sieć, składająca się z serwera pełniącego rolę kontrolera oraz stacji roboczych – klientów'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Przełącznik sieciowy standardu Fast Ethernet umożliwia transmisję danych z maksymalną prędkością',
            answers: ['100 Mbps', '100 MB/s', '10 Mbps', '10 MB/s'],
            correctAnswer: 0
          },
          {
            question:
              ' W sieci lokalnej zainstalowano serwer, który ma za zadanie przydzielanie dynamicznego adresu IP. Jaka usługa musi być uruchomiona na tym serwerze?',
            answers: ['DHCP', 'ISA', 'DNS', 'DCHP'],
            correctAnswer: 0
          },
          {
            question:
              ' Użytkownik sieci lokalnej musi mieć możliwość korzystania z plików znajdujących się na serwerze sieciowym. W tym celu powinien',
            answers: [
              'zalogować się do domeny serwera i posiadać odpowiednie uprawnienia do plików znajdujących się na serwerze',
              'podłączyć komputer do tego samego przełącznika, do którego podłączony jest serwer',
              'mieć założone konto użytkownika bez praw administracyjnych na tym serwerze',
              'być członkiem grupy administratorzy na tym serwerze'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' W firmie zainstalowano pięć komputerów o adresach kart sieciowych podanych w tabeli. W związku z tym można wyróżnić',
            answers: ['3 podsieci', '1 sieć', '2 podsieci', '5 podsieci'],
            correctAnswer: 0,
            img: 'e13/8.jpg'
          },
          {
            question:
              ' W budynku biurowym należy podłączyć komputer do routera ADSL przy użyciu przewodu UTP Cat 5e. Maksymalna odległość pomiędzy komputerem, a routerem powinna wynosić',
            answers: ['100 m', '50 m', '185 m', '500 m'],
            correctAnswer: 0
          },
          {
            question:
              ' Do bezpośredniego połączenia ze sobą dwóch komputerów w przewodowej sieci LAN należy użyć',
            answers: [
              'kabla sieciowego cross-over i po jednej karcie sieciowej w każdym komputerze',
              'kabla USB i po jednej karcie sieciowej w każdym komputerze',
              'kabla sieciowego patch-cord bez krosowania i kabla Centronics',
              'kabla światłowodowego i jedną kartę sieciową w jednym komputerze'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Przedstawiony stan ekranu terminala uzyskano w wyniku testu przeprowadzonego w systemie Windows. Pracownik serwisu uzyskał w ten sposób informację o:',
            answers: [
              'ścieżce do lokalizacji docelowej',
              'sprawności połączenia przy użyciu protokołu IPX/SPX',
              'poprawności konfiguracji protokołu TCP/IP',
              'możliwości diagnozowania infrastruktury systemu DNS'
            ],
            correctAnswer: 0,
            img: 'e13/9.jpg'
          },
          {
            question:
              ' Bezprzewodowy dostęp komputera do sieci Internet poprzez tzw hotspot będzie możliwy po zainstalowaniu w nim karty sieciowej wyposażonej w',
            answers: [
              'moduł WiFi',
              'złącze USB',
              'gniazdo RJ-45',
              'interfejs RS-232C'
            ],
            correctAnswer: 0
          },
          {
            question: ' Adres IP 158.75.60.16 należy do adresów',
            answers: ['klasy B', 'klasy D', 'klasy C', 'klasy A'],
            correctAnswer: 0
          },
          {
            question: ' Adresy IPv6 są liczbami',
            answers: [
              '128 bitowymi wyrażanymi w postaci napisów szesnastkowych',
              '32 bitowymi wyrażanymi w postaci napisów binarnych',
              '64 bitowymi wyrażanymi w postaci napisów binarnych',
              '256 bitowymi wyrażanymi w postaci napisów szesnastkowych'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' W jakiej fizycznej topologii uszkodzenie jednej stacji roboczej zatrzyma działanie całej sieci?',
            answers: ['Pierścienia', 'Siatki', 'Drzewa', 'Magistrali'],
            correctAnswer: 0
          },
          {
            question: ' Technika ADSL umożliwia uzyskanie połączenia DSL',
            answers: [
              'z różnymi szybkościami w kierunku od i do abonenta',
              'o takiej samej szybkości w kierunku od i do abonenta',
              'o bardzo dużej szybkości, powyżej 13 Mb/s',
              'za pośrednictwem linii ISDN'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Przesyłanie ruchu sieciowego poprzez router, które wiąże się ze zmianą źródłowych lub docelowych adresów IP, oznacza się skrótem',
            answers: ['NAT', 'IIS', 'FTP', 'IANA'],
            correctAnswer: 0
          },
          {
            question:
              ' Lokalnej podsieci komputerowej nadano adres IP 172.16.10.0/24. Komputer1 ma adres IP 172.16.0.10, komputer2 - 172.16.10.100, a komputer3 - 172.16.255.20. Który z komputerów należy do tej podsieci?',
            answers: [
              'Wyłącznie komputer2 o adresie IP 172.16.10.100',
              'Wyłącznie komputer1 o adresie IP 172.16.0.10',
              'Wyłącznie komputer3 o adresie IP 172.16.255.20',
              'Wszystkie trzy wymienione komputery'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Komputer ma pełnić rolę serwera sieci lokalnej, udostępniającego innym komputerom połączenie z Internetem przez podłączenie do gniazda sieci rozległej za pomocą kabla UTP Cat 5e. Obecnie komputer jest jedynie podłączony do switcha sieci lokalnej również kablem UTP Cat 5e, nie posiada innych gniazd 8P8C. O jaki element musi być on koniecznie rozbudowany?',
            answers: [
              'O drugą kartę sieciową',
              'O szybszy procesor',
              'O większą pamięć RAM',
              'O dodatkowy dysk twardy'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Który protokół wykorzystują komputery do powiadomienia rutera o chęci przyłączenia się lub odejścia z określonej grupy rozgłoszeniowej?',
            answers: ['IGMP', 'TCP/IP', 'DHCP', 'UDP'],
            correctAnswer: 0
          },
          {
            question:
              ' Który standard realizacji sieci Ethernet, definiuje sieć zbudowaną na kablu koncentrycznym, odługości segmentu nie przekraczającym 185 m?',
            answers: ['10Base-2', '100Base-T4', '100Base-T2', '10Base-5'],
            correctAnswer: 0
          },
          {
            question:
              ' Protokołem dostępu do sieci pakietowej z szybkością nie przekraczającą 2 Mbit/s jest protokół',
            answers: ['X . 25', 'Frame Relay', 'ATM', 'VDSL'],
            correctAnswer: 0
          },
          {
            question:
              ' Który protokół wykorzystują komputery do powiadomienia rutera o członkostwie w danej grupie rozgłoszeniowej?',
            answers: ['IGMP', 'RIP', 'UDP', 'OSPF'],
            correctAnswer: 0
          },
          {
            question:
              ' W okablowaniu strukturalnym opartym na skrętce UTP kat. 6, należy stosować gniazda sieciowe typu',
            answers: ['8P8C', 'F', 'RJ-11', 'BNC'],
            correctAnswer: 0
          },
          {
            question:
              ' Grupa, w której uprawnienia członków można przypisywać tylko w obrębie tej samej domeny, co domena nadrzędnej grupy lokalnej domeny, to grupa',
            answers: [
              'lokalna domeny',
              'uniwersalna',
              'lokalna komputera',
              'globalna'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Który protokół komunikacyjny służy do transferu plików w układzie klient-serwer oraz może działać w dwóch trybach: aktywnym i pasywnym?',
            answers: ['FTP', 'DNS', 'IP', 'EI-SI'],
            correctAnswer: 0
          },
          {
            question: ' Na rysunku przedstawiono sieć komputerową w topologii',
            answers: ['pierścienia', 'mieszanej', 'magistrali', 'gwiazdy'],
            correctAnswer: 0,
            img: 'e13/10.jpg'
          },
          {
            question:
              ' Jaki jest maksymalny rozmiar pojedynczego datagramu IPv4, którego wielkość liczona jest wraz z jego nagłówkiem?',
            answers: ['64 kB', '32 kB', '128 kB', '256 kB'],
            correctAnswer: 0
          },
          {
            question:
              ' Którego protokołu należy użyć do odbioru poczty elektronicznej ze swojego serwera?',
            answers: ['POP3', 'FTP', 'SNMP', 'SMTP'],
            correctAnswer: 0
          },
          {
            question: ' Który protokół zapewnia szyfrowanie połączenia?',
            answers: ['SSH', 'DHCP', 'DNS', 'TELNET'],
            correctAnswer: 0
          },
          {
            question: ' Na rysunku przedstawiono przekrój kabla',
            answers: ['koncentrycznego', 'optycznego', 'U/UTP', 'S/UTP'],
            correctAnswer: 0,
            img: 'e13/11.jpg'
          },
          {
            question:
              ' W adresie IP należącym do klasy A, wartość pierwszego bajtu jest zawarta w przedziale',
            answers: ['0 - 127', '192 - 223', '128 - 191', '224 - 240'],
            correctAnswer: 0
          },
          {
            question:
              ' Które polecenie w systemie Windows przeznaczonym dla stacji roboczej, służy do ustawienia wymagań dotyczących logowania dla wszystkich kont użytkowników tej stacji roboczej',
            answers: [
              'Net accounts',
              'Net file',
              'Net session',
              'Net computer'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Do prawidłowego działania telefonu VoIP konieczne jest skonfigurowanie adresu',
            answers: ['IP', 'rozgłoszeniowego', 'MAR/MAV', 'centrali ISDN'],
            correctAnswer: 0
          },
          {
            question:
              ' Które szyfrowanie stosowane w sieciach bezprzewodowych, jest najmniej odporne na łamanie haseł?',
            answers: ['WEP', 'WPA TKIP', 'WPA2', 'WPA AES'],
            correctAnswer: 0
          },
          {
            question: ' Na rysunku przedstawiono urządzenie do',
            answers: [
              'zdejmowania izolacji z kabli',
              'zaciskania złącz BNC',
              'zaciskania złącz RJ-45',
              'montażu okablowania w gnieździe sieciowym'
            ],
            correctAnswer: 0,
            img: 'e13/12.jpg'
          },
          {
            question:
              ' Z jakim parametrem należy wywołać polecenie netstat, aby została wyświetlona statystyka interfejsu sieciowego (liczba wysłanych oraz odebranych bajtów i pakietów)?',
            answers: ['-e', '-n', '-a', '-o'],
            correctAnswer: 0
          },
          {
            question:
              ' Zadaniem serwera plików w sieciach komputerowych LAN jest',
            answers: [
              'wspólne użytkowanie tych samych zasobów',
              'sterowanie danymi na komputerach lokalnych',
              'wykonywanie procesów obliczeniowych na komputerach lokalnych',
              'zarządzanie pracą przełączników i ruterów'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Którą konfigurację sieciową może mieć komputer należący do tej samej sieci LAN, co komputer o adresie 192.168.1.10/24?',
            answers: [
              '192.168.1.11 i 255.255.255.0',
              '192.168.0.11 i 255.255.0.0',
              '192.168.0.11 i 255.255.255.0',
              '192.168.1.11 i 255.255.0.0'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Profil mobilny zmieniany jest w profil obowiązkowy użytkownika po',
            answers: [
              'zmianie nazwy pliku NTUSER.DAT na NTUSER.MAN',
              'usunięciu pliku NTUSER.DAT',
              'usunięciu pliku NTUSER.MAN',
              'zmianie nazwy pliku NTUSER.MAN na NTUSER.DAT'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Rysunek przedstawia wynik testowania sieci komputerowej poleceniem',
            answers: ['ping', 'tracert', 'netstat', 'ipconfig'],
            correctAnswer: 0,
            img: 'e13/13.jpg'
          },
          {
            question:
              ' Jaką postać ma adres IP 192.168.1.12 w zapisie binarnym?',
            answers: [
              '11000000.10101000.00000001.00001100',
              '11000100.10101010.00000101.00001001',
              '11000001.10111000.00000011.00001110',
              '11000010.10101100.00000111.00001101'
            ],
            correctAnswer: 0
          },
          {
            question: ' Polecenie dsadd umożliwia',
            answers: [
              'dodawanie użytkowników, grup, komputerów, kontaktów i jednostek organizacyjnych do usługi Active Directory',
              'przenoszenie obiektów w obrębie jednej domeny',
              'usuwanie użytkowników, grup, komputerów, kontaktów i jednostek organizacyjnych do usługi Active Directory',
              'zmianę właściwości obiektów w katalogu'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Konwencja zapisu ścieżki do udziału sieciowego zgodna z UNC (Universal Naming Convention) ma postać',
            answers: [
              '\\\\nazwa_komputera\\nazwa_zasobu',
              '//nazwa_komputera/nazwa_zasobu',
              '\\\\nazwa_zasobu\\nazwa_komputera',
              '//nazwa_zasobu/nazwa_komputera'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Jaki jest największy adres IP w podsieci 196.10.20.0/26?',
            answers: [
              '196.10.20.63',
              '196.10.20.0',
              '196.10.20.1',
              '196.10.20.64'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' W wyniku polecenia ipconfig została wyświetlona konfiguracja przedstawiona na rysunku. Adres IP testowanej stacji roboczej ma postać',
            answers: [
              '192.168.0.11',
              '62.21.99.95',
              '192.168.0.1',
              '255.255.255.0'
            ],
            correctAnswer: 0,
            img: 'e13/14.jpg'
          },
          {
            question:
              ' Miarą podawaną w decybelach, będącą różnicą mocy sygnału przesyłanego w parze zakłócającej i sygnału wytworzonego w parze zakłócanej jest',
            answers: [
              'przesłuch zbliżny',
              'poziomu mocy wyjściowej',
              'przesłuch zdalny',
              'rezystancja pętli'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Rysunek przedstawia panel konfiguracyjny bezprzewodowego urządzenia dostępowego, który umożliwia',
            answers: [
              'konfigurację serwera DHCP',
              'przypisanie adresów MAC kart sieciowych',
              'przypisanie maski podsieci',
              'nadanie nazwy hosta'
            ],
            correctAnswer: 0,
            img: 'e13/15.jpg'
          },
          {
            question:
              ' Do sprawdzenia adresów MAC komputerów podłączonych do przełącznika, można użyć polecenia',
            answers: [
              'show mac address-table',
              'clear mac address-table',
              'ip http port',
              'ip http serwer'
            ],
            correctAnswer: 0
          },
          {
            question: ' Urządzenie sieciowe most (ang. bridge):',
            answers: [
              'jest urządzeniem typu store and forward',
              'pracuje w zerowej warstwie modelu OSI',
              'pracuje w ósmej warstwie modelu OSI',
              'nie analizuje ramki pod kątem adresu MAC'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Narzędzie administracyjne wiersza polecenia umożliwiające testowanie i rozwiązywanie problemów z serwerami DNS to:',
            answers: ['NSLOOKUP', 'CHKDSK', 'CMD', 'DHCP'],
            correctAnswer: 0
          },
          {
            question:
              ' Który protokół jest używany przez usługę VPN, w celu zhermetyzowania pakietów IP w sieci publicznej?',
            answers: ['PPTP', 'SNMP', 'HTTP', 'SMTP'],
            correctAnswer: 0
          },
          {
            question: ' Maska dla adresu IP 192.168.1.10/8 ma postać',
            answers: [
              '255.0.0.0',
              '255.255.255.0',
              '255.255.0.0',
              '255.0.255.0'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Które oznaczenie określa normę dotyczącą okablowania strukturalnego?',
            answers: [
              'EIA/TIA 568A',
              'ISO 11801',
              'PN-EN 50173-1:2004',
              'EN 50173'
            ],
            correctAnswer: 0
          },
          {
            question: ' Polecenie Gpresult',
            answers: [
              'wyświetla wynikowy zestaw zasad dla użytkownika lub komputera',
              'wyświetla informacje o kontrolerze',
              'aktualizuje ustawienia zasad grupy',
              'przywraca domyślne zasady grup dla kontrolera'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Do zabezpieczenia systemów sieciowych przed atakami z zewnątrz należy użyć',
            answers: [
              'zapory sieciowej',
              'protokołu SSH',
              'menadżera połączeń',
              'serwera DHCP'
            ],
            correctAnswer: 0
          },
          {
            question: ' Na rysunku przedstawiono',
            answers: [
              'patch panel',
              'kartę sieciową',
              'przełącznik',
              'koncentrator'
            ],
            correctAnswer: 0,
            img: 'e13/16.jpg'
          },
          {
            question:
              ' Która usługa polega na scentralizowanym zarządzaniu tożsamościami, uprawnieniami oraz obiektami w sieci?',
            answers: [
              'AD (Active Directory)',
              'DHCP (Dynamic Host Configuration Protocol)',
              'WDS (Windows Deployment Services)',
              'NFS (Network File System).'
            ],
            correctAnswer: 0
          },
          {
            question: ' Na rysunku przedstawiono symbol graficzny',
            answers: ['rutera', 'mostu', 'regeneratora', 'koncentratora'],
            correctAnswer: 0,
            img: 'e13/17.jpg'
          },
          {
            question:
              ' Najwyższy poziom bezpieczeństwa sieci bezprzewodowej zapewni szyfrowanie',
            answers: ['WPA2', 'WPA', 'WEP', 'ROT13'],
            correctAnswer: 0
          },
          {
            question: ' Który z adresów IP jest adresem prywatnym?',
            answers: [
              '192.168.0.1',
              '38.176.55.44',
              '131.107.5.65',
              '190.5.7.126'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Jaki protokół odpowiada za zamianę adresów IP na adresy kontroli dostępu do nośnika (MAC)?',
            answers: ['ARP', 'RARP', 'SNMP', 'SMTP'],
            correctAnswer: 0
          },
          {
            question:
              ' Do śledzenia trasy datagramu IP do punktu docelowego służy polecenie',
            answers: ['tracert', 'nslookup', 'ping', 'route'],
            correctAnswer: 0
          },
          {
            question:
              ' Jaki jest maksymalny rozmiar pojedynczego datagramu IPv4, którego wielkość liczona jest wraz z jego nagłówkiem?',
            answers: ['64 kB', '32 kB', '128 kB', '256 kB'],
            correctAnswer: 0
          },
          {
            question:
              ' Ile maksymalnie kanałów, z dostępnego spectrum kanałów standardu 802.11b, można wykorzystywać na terenie Polski?',
            answers: ['13 kanałów', '10 kanałów', '9 kanałów', '11 kanałów'],
            correctAnswer: 0
          },
          {
            question:
              ' W technologii Ethernet 100BaseTX wymagane jest stosowanie skrętki',
            answers: [
              'kategorii 5',
              'kategorii 1',
              'kategorii 3',
              'kategorii 2'
            ],
            correctAnswer: 0
          },
          {
            question: ' Każdy kolejny router IP na trasie pakietu',
            answers: [
              'zmniejsza wartość TTL przekazywanego pakietu o jeden',
              'zwiększa wartość TTL przekazywanego pakietu o dwa',
              'zmniejsza wartość TTL przekazywanego pakietu o dwa',
              'zwiększa wartość TTL przekazywanego pakietu o jeden'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Przekazywanie żetonu (ang. token), występuje w sieci o strukturze fizycznej',
            answers: ['pierścienia', 'magistrali', 'siatki', 'gwiazdy'],
            correctAnswer: 0
          },
          {
            question:
              ' W sieci Ethernet 100BaseTX dla transmisji danych wykorzystywane są żyły kabla UTP dołączone do pinów',
            answers: ['1, 2, 3, 6', '1, 2, 3, 4', '1, 2, 5, 6', '4, 5, 6, 7'],
            correctAnswer: 0,
            img: 'e13/18.jpg'
          },
          {
            question: ' Który standard wykorzystuje częstotliwość 5 GHz?',
            answers: ['802.11a', '802.11g', '802.11b', '802.11'],
            correctAnswer: 0
          },
          {
            question: ' System operacyjny nie zajmuje się',
            answers: [
              'tworzeniem źródeł aplikacji systemowych',
              'planowaniem oraz przydziałem czasu procesora poszczególnym zadaniom',
              'kontrolą i przydziałem pamięci operacyjnej dla uruchomionych zadań',
              'dostarczaniem mechanizmów do synchronizacji zadań i komunikacji pomiędzy zadaniami'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Do cech pojedynczego konta użytkownika pracującego w systemie Windows Serwer należy',
            answers: [
              'numer telefonu, pod który ma oddzwonić serwer w przypadku nawiązania połączenia telefonicznego przez tego użytkownika',
              'maksymalna wielkość profilu użytkownika',
              'maksymalna wielkość pulpitu użytkownika',
              'maksymalna wielkość pojedynczego pliku jaką użytkownik może zapisać na dysku serwera'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Który z protokołów jest protokołem synchronizacji czasu?',
            answers: ['NTP', 'NNTP', 'FTP', 'HTTP'],
            correctAnswer: 0
          },
          {
            question: ' Rolą routera jest',
            answers: [
              'przekazywanie pakietów TCP/IP z sieci źródłowej do docelowej',
              'tłumaczenie nazwy na adresy IP',
              'wyeliminowanie kolizji',
              'zabezpieczenia sieci przed atakiem z zewnątrz i z wewnątrz'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Wskaż domyślny port do przekazywania poleceń (command) serwera usługi FTP',
            answers: ['21', '25', '110', '20'],
            correctAnswer: 0
          },
          {
            question:
              ' Jakie narzędzie należy wybrać, aby podłączyć żyły kablowe skrętki do gniazda Ethernet?',
            answers: [
              'Wciskacz LSA',
              'Zaciskarkę RJ-45',
              'Zaciskarkę BNC',
              'Zaciskarkę RJ-11'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Który protokół wykorzystywany jest przez polecenie ping?',
            answers: ['ICMP', 'RDP', 'LDAP', 'FTP'],
            correctAnswer: 0
          },
          {
            question: ' Jaki jest domyślny port serwera usługi WWW?',
            answers: ['80', '800', '8081', '8080'],
            correctAnswer: 0
          },
          {
            question:
              ' W standardzie IEEE 802.3af dostarczanie energii elektrycznej do różnych urządzeń sieciowych opisuje technologia',
            answers: [
              'Power over Ethernet',
              'Power over Classifications',
              'Power under Control',
              'Power over Internet'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' W firmowej sieci bezprzewodowej została uruchomiona usługa polegająca na tłumaczeniu nazw mnemonicznych. Jest to usługa',
            answers: ['DNS', 'RDS', 'DHCP', 'RADIUS'],
            correctAnswer: 0
          },
          {
            question:
              ' Granicy dla domeny kolizyjnej nie wyznaczają porty urządzeń takich jak',
            answers: [
              'koncentrator (ang. hub)',
              'most (ang. bridge)',
              'router',
              'przełącznik (ang. switch)'
            ],
            correctAnswer: 0
          },
          {
            question: ' Jaki adres IP odpowiada nazwie mnemonicznej localhost?',
            answers: [
              '127.0.0.1',
              '192.168.1.255',
              '192.168.1.1',
              '192.168.1.0'
            ],
            correctAnswer: 0
          },
          {
            question: ' Sieć Ethernet pracuje w logicznej topologii',
            answers: [
              'rozgłaszania',
              'siatkowej',
              'siatki i gwiazdy',
              'pierścieniowej i liniowej'
            ],
            correctAnswer: 0
          },
          {
            question: ' Sieć o adresie 192.168.1.128/29 pozwala na podłączenie',
            answers: ['6 hostów', '16 hostów', '8 hostów', '12 hostów'],
            correctAnswer: 0
          },
          {
            question:
              ' Translacją nazw domenowych na adresy sieciowe zajmuje się usługa',
            answers: ['DNS', 'SMTP', 'DHCP', 'SNMP'],
            correctAnswer: 0
          },
          {
            question:
              ' Które z podanych oznaczeń określa, że jest to kabel typu skrętka posiadający podwójne ekranowanie?',
            answers: ['S-STP', 'FTP', 'UTP', 'SFTP'],
            correctAnswer: 0
          },
          {
            question: ' Podstawową funkcją serwera FTP jest',
            answers: [
              'udostępnianie plików',
              'synchronizacja czasu',
              'zarządzanie kontami poczty',
              'monitoring sieci'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Który protokół obsługuje rozproszone wysyłanie i pobieranie plików?',
            answers: ['BitTorrent', 'HTTPS', 'Radius', 'FTP'],
            correctAnswer: 0
          },
          {
            question: ' W adresowaniu klasowym adres IP 74.100.7.8 należy do',
            answers: ['klasy A', 'klasy D', 'klasy B', 'klasy C'],
            correctAnswer: 0
          },
          {
            question: ' Wskaż poprawną postać maski',
            answers: [
              '255.255.255.192',
              '255.255.255.228',
              '255.255.255.96',
              '255.255.255.64'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Litera S w protokole FTPS oznacza zabezpieczanie przesyłanych danych poprzez',
            answers: [
              'szyfrowanie',
              'logowanie',
              'uwierzytelnianie',
              'autoryzację'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Który z protokołów jest protokołem wykorzystywanym do zarządzania urządzeniami sieciowymi?',
            answers: ['SNMP', 'DNS', 'SFTP', 'SMTP'],
            correctAnswer: 0
          },
          {
            question:
              ' Poprawny adres komputera dla maski 255.255.255.0, to adres',
            answers: [
              '192.168.1.1',
              '122.168.1.0',
              '192.168.1.255',
              '122.0.0.255'
            ],
            correctAnswer: 0
          },
          {
            question: ' Wskaż prawidłową postać maski podsieci',
            answers: [
              '255.255.255.255',
              '255.252.252.255',
              '255.255.0.128',
              '0.0.0.0'
            ],
            correctAnswer: 0
          },
          {
            question: ' AES (ang. Advanced Encryption Standard)',
            answers: [
              'wykorzystuje symetryczny algorytm szyfrujący',
              'jest poprzednikiem DES (ang. Data Encryption Standard)',
              'nie może być wykorzystany przy szyfrowaniu plików',
              'nie może być zaimplementowany sprzętowo'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Jaki protokół jest wykorzystywany podczas inicjacji sesji VoIP?',
            answers: ['SIP', 'MCGP', 'MIME', 'SDP'],
            correctAnswer: 0
          },
          {
            question:
              ' Który z protokołów jest szyfrowanym protokołem terminalowym?',
            answers: ['SSH', 'POP3', 'telnet', 'TFTP'],
            correctAnswer: 0
          },
          {
            question:
              ' Najszybszą możliwą transmisję danych w sieci bezprzewodowej umożliwia standard',
            answers: ['802.11n', '802.11b', '802.11a', '802.11g'],
            correctAnswer: 0
          },
          {
            question:
              ' Urządzenie, które łączy segmenty sieci i przekazuje ramki między segmentami tej sieci z doborem portu urządzenia, do którego są przekazywane poszczególne ramki, to',
            answers: [
              'przełącznik',
              'koncentrator',
              'rejestrator',
              'zasilacz awaryjny'
            ],
            correctAnswer: 0
          },
          {
            question: ' Na rysunku przedstawiono sieć o topologii',
            answers: ['magistrali', 'siatki', 'drzewa', 'gwiazdy'],
            correctAnswer: 0,
            img: 'e13/19.jpg'
          },
          {
            question:
              ' Jaka przepływność definiuje standard sieci Ethernet IEEE 802.3z',
            answers: ['1 Gb/s', '10 Mb/s', '100 Mb/s', '100 Gb/s'],
            correctAnswer: 0
          },
          {
            question: ' Norma IEEE 802.11b jest standardem sieci',
            answers: [
              'bezprzewodowych',
              'telefonicznych',
              'przewodowych',
              'światłowodowych'
            ],
            correctAnswer: 0
          },
          {
            question: ' Standard transmisji Gigabit Ethernet opisuje norma',
            answers: [
              'IEEE 802.3ab',
              'IEEE 802.3i',
              'IEEE 802.3u',
              'IEEE 802.3x'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Fast Ethernet to standard sieci przewodowej, umożliwiający transmisję danych z maksymalną prędkością',
            answers: ['100 Mbps', '54 Mbps', '108 Mbps', '1000 Mbps'],
            correctAnswer: 0
          },
          {
            question:
              ' Ile par przewodów jest przeznaczonych w standardzie 100Base-TX do transmisji danych w obu kierunkach?',
            answers: ['2', '1', '4', '8'],
            correctAnswer: 0
          },
          {
            question: ' Norma EN 50167 dotyczy okablowania',
            answers: ['poziomego', 'pionowego', 'szkieletowego', 'kampusowego'],
            correctAnswer: 0
          },
          {
            question:
              ' Która norma zawiera specyfikację parametrów transmisyjnych komponentów kategorii 5e?',
            answers: [
              'TIA/EIA-568-B-2',
              'CSA T527',
              'EIA/TIA 607',
              'TIA/EIA-568-B-1'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Protokołem pakietów użytkownika wykonującym usługę bezpołączeniowego dostarczania datagramów jest',
            answers: ['UDP', 'IP', 'TCP', 'ARP'],
            correctAnswer: 0
          },
          {
            question: ' Na rysunku przedstawiono tylny panel',
            answers: ['routera', 'mostu', 'modemu', 'koncentratora'],
            correctAnswer: 0,
            img: 'e13/20.jpg'
          },
          {
            question: ' Symbol graficzny przedstawiony na rysunku oznacza',
            answers: ['przełącznik', 'most', 'bramę', 'koncentrator'],
            correctAnswer: 0,
            img: 'e13/21.jpg'
          },
          {
            question:
              ' Sieci lokalne typu klient-serwer charakteryzują się tym, że',
            answers: [
              'istnieje jeden wydzielony komputer udostępniający swoje zasoby w sieci',
              'każdy komputer w sieci jest równoprawny z pozostałymi',
              'żaden z komputerów nie pełni roli nadrzędnej w stosunku do pozostałych',
              'wszystkie komputery klienckie mają dostęp do zasobów pozostałych komputerów'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Do której warstwy modelu ISO/OSI należy segmentowanie danych, komunikacja w trybie połączeniowym z wykorzystaniem protokołu TCP oraz komunikacja w trybie bezpołączeniowym z wykorzystaniem protokołu UDP?',
            answers: [
              'Transportowej',
              'Fizycznej',
              'Sieciowej',
              'Łącza danych'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Wyznaczanie optymalnej trasy dla połączenia sieciowego to',
            answers: ['routing', 'sniffing', 'tracking', 'conntrack'],
            correctAnswer: 0
          },
          {
            question:
              ' W sieci strukturalnej zalecane jest umieszczenie jednego punktu abonenckiego na powierzchni o wielkości',
            answers: ['10m^2', '5m^2', '20m^2', '30m^2'],
            correctAnswer: 0
          },
          {
            question: ' Okablowanie pionowe w sieci strukturalnej łączy',
            answers: [
              'główny punkt rozdzielczy z pośrednimi punktami rozdzielczymi',
              'dwa gniazda abonenckie',
              'główny punkt rozdzielczy z gniazdem abonenckim',
              'pośredni punkt rozdzielczy z gniazdem abonenckim'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Które urządzenie służy do połączenia sieci lokalnej z siecią rozległą?',
            answers: ['Router', 'Most', 'Przełącznik', 'Koncentrator'],
            correctAnswer: 0
          },
          {
            question:
              ' Administrator zauważył, że w sieci LAN występuje duża liczba kolizji. Które urządzenie powinien zainstalować, aby podzielić sieć lokalną na mniejszy domeny kolizji?',
            answers: ['Przełącznik', 'Router', 'Modem', 'Koncentrator'],
            correctAnswer: 0
          },
          {
            question:
              ' Która antena charakteryzuje się największym zyskiem energetycznym oraz umożliwia zestawienie połączenia na dużą odległość?',
            answers: ['Paraboliczna', 'Dipolowa', 'Izotropowa', 'Mikropaskowa'],
            correctAnswer: 0
          },
          {
            question:
              ' Oblicz koszt brutto kabla UTP Cat 6 użytego do połączenia 5 punktów abonenckich z punktem dystrybucyjnym, wiedząc, że średnia długość pomiędzy punktem abonenckim a punktem dystrybucyjnym wynosi 8 m oraz że cena brutto 1 m kabla wynosi 1 zł. Przy obliczeniach należy uwzględnić zapas 2m kabla na każdy punkt abonencki.',
            answers: ['50 zł', '32 zł', '40 zł', '45 zł'],
            correctAnswer: 0
          },
          {
            question:
              ' Który typ kabla należy zastosować do podłączenia komputera w pomieszczeniu z zakłóceniami elektromagnetycznymi?',
            answers: ['FTP Cat 5e', 'UTP Cat 5', 'UTP Cat 6', 'UTP Cat 5e'],
            correctAnswer: 0
          },
          {
            question:
              ' W celu sprawdzenia mapy podłączeń kabla UTP Cat 5e w sieci lokalnej należy użyć',
            answers: [
              'testera okablowania',
              'reflektometru kablowego TDR',
              'reflektometru optycznego OTDR',
              'analizatora protokołów sieciowych'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Ile maksymalnie hostów można zaadresować w sieci lokalnej, mając do dyspozycji jedną klasę C adresów protokołu IPv4?',
            answers: ['254', '255', '510', '512'],
            correctAnswer: 0
          },
          {
            question: ' Który z adresów IP należy do klasy B?',
            answers: [
              '134.192.16.1',
              '96.15.2.4',
              '100.10.10.2',
              '198.15.110.112'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Sieć o adresie IP 192.168.2.0/24 podzielono na cztery podsieci. Jaką maskę posiadają nowe podsieci?',
            answers: [
              '255.255.255.192',
              '255.255.255.128',
              '255.255.255.224',
              '225.225.225.240'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' W ilu podsieciach pracują komputery o adresach: 192.168.5.12/25, 192.168.5.200/25 i 192.158.5.250/25?',
            answers: ['3', '1', '2', '4'],
            correctAnswer: 0
          },
          {
            question:
              ' Instalowanie w systemie operacyjnym Windows Server usługi Active Directory wymaga wcześniejszego zainstalowania i skonfigurowania serwera',
            answers: ['DNS', 'FTP', 'WWW', 'DHCP'],
            correctAnswer: 0
          },
          {
            question:
              ' Jeżeli na danej przestrzeni będą działały równocześnie dwie sieci WLAN standardy 802.11g, to aby wyeliminować możliwość wzajemnych zakłóceń należy im przydzielić kanały o numerach różniących się o',
            answers: ['5', '2', '3', '4'],
            correctAnswer: 0
          },
          {
            question:
              ' Program wykorzystywany do przechwytywania analizy ruchu sieciowego, to',
            answers: ['sniffer', 'viewer', 'spywer', 'keylogger'],
            correctAnswer: 0
          },
          {
            question:
              ' Na zamieszczonym zrzucie panelu konfiguracyjnego rutera widać, że serwer DHCP',
            answers: [
              'może przydzielić maksymalnie 10 adresów IP',
              'może przydzielić maksymalnie 154 adresy IP',
              'przydziela adresy IP z zakresu 192.168.1.1 - 192.168.1.10',
              'przydziela adresy IP z zakresu 192.168.1.1 - 192.168.1.100'
            ],
            correctAnswer: 0,
            img: 'e13/22.jpg'
          },
          {
            question:
              ' Które polecenie w systemie Windows należy zastosować do monitorowania listy aktywnych połączeń karty sieciowej w komputerze?',
            answers: ['Netstat', 'Ping', 'Telnet', 'Ipconfig'],
            correctAnswer: 0
          },
          {
            question:
              ' Która usługa serwerowa zapewnia automatyczną konfigurację parametrów sieciowych stacji roboczych?',
            answers: ['DHCP', 'NAT', 'DNS', 'WINS'],
            correctAnswer: 0
          },
          {
            question:
              ' Jaką funkcję pełni ISA Server w systemie operacyjnym Windows?',
            answers: [
              'Pełni funkcję firewalla',
              'Rozwiązuje nazwy domenowe',
              'Jest systemem wymiany plików',
              'Jest serwerem stron internetowych'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Która z grup w systemie Windows Serwer posiada najmniejsze uprawnienia?',
            answers: [
              'Wszyscy',
              'Użytkownicy',
              'Administratorzy',
              'Operatorzy kont'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Który z profili użytkownika ulega zmianie i jest przechowywany na serwerze dla klienta pracującego w sieci Windows?',
            answers: ['Mobilny', 'Lokalny', 'Tymczasowy', 'Obowiązkowy'],
            correctAnswer: 0
          },
          {
            question:
              ' Protokół pocztowy, za pomocą którego możemy odbierać pocztę z serwera, to',
            answers: ['POP3', 'FTP', 'SMTP', 'HTTP'],
            correctAnswer: 0
          },
          {
            question: ' Które zdanie opisuje protokół SSH (Secure Shell)?',
            answers: [
              'Bezpieczny protokół terminalu sieciowego udostępniający usługi szyfrowania połączenia',
              'Protokół do zdalnej pracy na odległym komputerze nie zapewnia kodowania transmisji',
              'Sesje SSH powodują wysyłanie zwykłego tekstu, niezaszyfrowanych danych',
              'Sesje SSH nie pozwalają określić, czy punkty końcowe są autentyczne'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Który port jest wykorzystywany przez protokół FTP (File transfer Protocol)',
            answers: ['20', '25', '53', '69'],
            correctAnswer: 0
          },
          {
            question:
              ' ARP (Adress Resolution Protocol) jest protokołem realizującym odwzrowanie adresu IP na',
            answers: [
              'adres sprzętowy.',
              'adres poczty e-mail',
              'nazwę domenową',
              'nazwę komputera'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Aby zabezpieczyć lokalną sieć komputerową przed atakami typu Smurf z sieci Internet należy zainstalować i odpowiednio skonfigurować',
            answers: [
              'zaporę ogniową',
              'skaner antywirusowy',
              'oprogramowanie antyspamowe',
              'bezpieczną przeglądarkę stron WWW'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Rysunek przedstawia schemat ethernetowego połączenia niekrosowanych, ośmiopinowych złącz 8P8C. Schemat ten nosi nazwę:',
            answers: ['T568B', 'T568A', 'T568C', 'T568D'],
            correctAnswer: 0,
            img: 'e13/23.jpg'
          },
          {
            question:
              ' Jaką nazwę nosi złącze stosowane w sieciach komputerowych przedstawione na zdjęciu?',
            answers: ['BNC', 'FC', 'ST', 'LC'],
            correctAnswer: 0,
            img: 'e13/24.jpg'
          },
          {
            question:
              ' Z ilu bitów składa się adres fizyczny MAC karty sieciowej?',
            answers: ['48', '16', '32', '64'],
            correctAnswer: 0
          },
          {
            question:
              ' Protokół, który umożliwia przekształcanie 32-bitowych adresów IP na 48-bitowe fizyczne adresy MAC w komputerowych sieciach typu Ethernet nosi nazwę:',
            answers: ['ARP', 'NAT', 'RARP', 'DNS'],
            correctAnswer: 0
          },
          {
            question:
              ' Standard o nazwie IEEE 802.11 stosowany w lokalnych sieciach komputerowych opisuje sieć:',
            answers: [
              'Wireless LAN',
              'Ethernet',
              'Token Ring',
              'Fiber Optic FDDI'
            ],
            correctAnswer: 0
          },
          {
            question: ' Wskaż zdanie nieprawdziwe:',
            answers: [
              'Awaria węzła w topologii gwiazdy spowoduje paraliż sieci',
              'Zaletą topologii pierścienia jest małe zużycie kabla',
              'Stroną aktywną w architekturze klient-serwer jest klient',
              'IEEE 802.11 to nazwa standardu Wireless LAN'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Rodzina adapterów wykonanych w technologii Powerline umożliwiająca wykorzystanie sieci energetycznej w obrębie jednego domu/mieszkania do przesyłania sygnału sieciowego nosi nazwę:',
            answers: [
              'HomePlug',
              'InternetOutlet',
              'HomeOutlet',
              'InternetPlug'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Kod kontroli cyklicznej odpowiadający za korekcję błędów i weryfikację poprawności danych otrzymywanych przez stację docelową nosi nazwę:',
            answers: ['CRC', 'CAT', 'CNC', 'IRC'],
            correctAnswer: 0
          },
          {
            question:
              ' FDDI (ang. Fiber Distributed Data Interface) to standard transmisji danych oparty na technologii światłowodowej. Jaką topologię stosujemy w sieciach wykonanych wg tej technologii?',
            answers: [
              'podwójnego pierścienia',
              'gwiazdy',
              'rozszerzonej gwiazdy',
              'pierścienia'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Translacja adresów źródłowych w ramach usługi NAT routera umożliwiająca komputerom w sieci prywatnej dostęp do internetu nosi nazwę:',
            answers: ['SNAT', 'DNAT', 'LNAT', 'WNAT'],
            correctAnswer: 0
          },
          {
            question: ' Usługą katalogową nie jest:',
            answers: [
              'Oracle baseDirectory',
              'Active Directory',
              'OpenLDAP',
              'Novell eDirectory'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Który z podanych adresów IP nie jest adresem prywatnym?',
            answers: [
              '127.231.5.67',
              '10.0.105.12',
              '172.16.45.123',
              '192.168.199.223'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' W topologii fizycznej gwiazdy, wszystkie urządzenia pracujące w sieci, są',
            answers: [
              'podłączone do węzła sieci',
              'podłączone do jednej magistrali',
              'połączone z dwoma sąsiadującymi komputerami',
              'połączone między sobą odcinkami kabla tworząc zamknięty pierścień'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Który standard sieci LAN definiuje dostęp do medium na podstawie tokenu (żetonu)?',
            answers: ['IEEE 802.5', 'IEEE 802.1', 'IEEE 802.2', 'IEEE 802.3'],
            correctAnswer: 0
          },
          {
            question: ' Którym symbolem oznaczona jest skrętka nieekranowana?',
            answers: ['U/UTP', 'U/FTP', 'S/FTP', 'F/UTP'],
            correctAnswer: 0
          },
          {
            question:
              ' Okablowanie strukturalne należy zaliczyć do infrastruktury',
            answers: ['pasywnej', 'aktywnej', 'terytorialnej', 'dalekosiężnej'],
            correctAnswer: 0
          },
          {
            question: ' Ile warstw definiuje model ISO/OSI',
            answers: ['7', '3', '5', '9'],
            correctAnswer: 0
          },
          {
            question: ' Standard IEEE 802.11 definiuje sieci',
            answers: [
              'Bezprzewodowe LAN',
              'Fast Ethernet',
              'Gigabit Ethernet',
              'Światłowodowe LAN'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Którą konfiguracje sieciową może mieć komputer należący do tej samej sieci LAN, co komputer o adresie 10.8.1.10/24?',
            answers: [
              '10.8.1.101 i 255.255.255.0',
              '10.8.0.101 i 255.255.255.0',
              '10.8.0.101 i 255.255.0.0',
              '10.8.1.101 i 255.255.0.0'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Przyrząd przedstawiony na rysunku jest stosowany do zaciskania wtyków',
            answers: ['RJ 45', 'SC', 'BNC', 'E 2000'],
            correctAnswer: 0,
            img: 'e13/25.jpg'
          },
          {
            question: ' Niezależną strukturą sieci WLAN jest',
            answers: ['IBSS', 'BSS', 'ESS', 'BSS1'],
            correctAnswer: 0
          },
          {
            question: ' Adres IP (ang. Internet Protocol Address) jest',
            answers: [
              'adresem logicznym komputera',
              'unikatowym numerem fabrycznym urządzenia',
              'unikatową nazwą symboliczną urządzenia',
              'adresem fizycznym komputera'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Które urządzenie należy zastosować do podłączenia komputerów w topologii gwiazdy?',
            answers: ['Switch', 'Bridge', 'Repeater', 'Transceiver'],
            correctAnswer: 0
          },
          {
            question: ' Skrót WAN oznacza',
            answers: [
              'rozległą sieć komputerową',
              'miejską sieć komputerową',
              'lokalną sieć komputerową',
              'prywatną sieć komputerową'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' W którym protokole sieciowym adres źródłowy składa się ze 128 bitów?',
            answers: ['IPv6', 'IPv4', 'UDP', 'DNS'],
            correctAnswer: 0
          },
          {
            question:
              ' Który skrócony zapis odpowiada następującej masce podsieci: 255.255.248.0?',
            answers: ['/21', '/22', '/23', '/24'],
            correctAnswer: 0
          },
          {
            question:
              ' Które polecenie należy zastosować do monitorowania lokalnych połączeń?',
            answers: ['netstat', 'dir', 'host', 'route add'],
            correctAnswer: 0
          },
          {
            question:
              ' Połączenia typu punkt-punkt, poprzez publiczną infrastrukturę telekomunikacyjną, oznacza się skrótem',
            answers: ['VPN', 'PAN', 'VLAN', 'WLAN'],
            correctAnswer: 0
          },
          {
            question:
              ' Jednostką szybkości transmisji danych w sieciach komputerowych jest',
            answers: ['bps', 'byte', 'dpi', 'ips'],
            correctAnswer: 0
          },
          {
            question:
              ' Która wersja systemu operacyjnego Windows Server 2008 posiada najbardziej okrojony interfejs graficzny',
            answers: [
              'Server Core',
              'Enterprise',
              'Datacenter',
              'Standard Edition'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Który z wymienionych adresów protokołu IPv4 jest adresem klasy D?',
            answers: ['239.255.203.1', '10.0.3.5', '128.1.0.8', '191.12.0.18'],
            correctAnswer: 0
          },
          {
            question:
              ' W Windows 7 konfigurację interfejsu sieciowego można wykonać, stosując rozwinięcie polecenia',
            answers: ['netsh', 'telnet', 'tracert', 'nslookup'],
            correctAnswer: 0
          },
          {
            question: ' Wykonanie polecenia spowoduje',
            answers: [
              'odłączenie katalogu data od dysku Z:',
              'przyłączenie katalogu data do dysku Z:',
              'odłączenie zasobów hosta 192.168.20.2 od dysku Z:',
              'przyłączenie zasobów hosta 192.168.20.2 do dysku Z:'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Które z zadań realizuje usługa katalogowa Active Directory w systemach Windows Server?',
            answers: [
              'przechowuje informacje o obiektach znajdujacych się w sieci',
              'obsługuje żądania protokołu komunikacyjnego',
              'umożliwia wymianę plików z odległymi komputerami za pomocą protokołu komunikacyjnego',
              'centralnie zarządza adresami IP i powiązanymi informacjami, a także udostepnia je automatycznie klientom'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Dynamiczne konfigurowanie parametrów TCP/IP hosta na podstawie adresu MAC karty sieciowej jest zadaniem protokołu',
            answers: ['DHCP', 'FTP', 'DNS', 'HTTP'],
            correctAnswer: 0
          },
          {
            question:
              ' Mechanizm limitów dyskowych, pozwalający zarządzać wykorzystaniem przez użytkowników zasobów dyskowych, jest określany jako',
            answers: ['quota', 'spool', 'release', 'management'],
            correctAnswer: 0
          },
          {
            question: ' Mapowanie dysków jest',
            answers: [
              'przyporządkowaniem oznaczenia dysku wybranemu katalogowi sieciowemu',
              'konfiguracja interfejsów sieciowych',
              'definiowaniem użytkowników i grup użytkowników',
              'nadaniem uprawnień do folderu użytkownikom sieci WAN'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' W usłudze Active Directory, strukturę składającą się z jednej lub większej liczby domen, które mają wspólny schemat i wykaz globalny, należy nazwać',
            answers: ['lasem', 'siatką', 'liściem', 'gwiazdą'],
            correctAnswer: 0
          },
          {
            question:
              ' W celu promowania serwera do roli kontrolera domeny w systemach Windows Server należy zastosować polecenie',
            answers: ['dcpromo', 'dcgpofix', 'regsvr32', 'winnt32'],
            correctAnswer: 0
          },
          {
            question:
              ' Adres 2001:0012:0000:0000:0AAA:0000:0000:000B protokołu IPv6 po kompresji przyjmuje postać',
            answers: [
              '2001:12::AAA:0:0:B',
              '2001:0012::000B',
              '2001:12::0E98::B',
              '2001::AAA:0000::000B'
            ],
            correctAnswer: 0
          },
          {
            question: ' Oprogramowanie Microsoft Hyper-V należy zastosować do',
            answers: [
              'wirtualizacji fizycznych komputerów',
              'identyfikacji komputera w sieci',
              'lokalizacji zasobów sieciowych',
              'zdalnego połączenia z innym hostami'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Usługa o nazwie: "Pulpit zdalny" domyślnie działa na porcie',
            answers: ['3389', '3369', '3379', '3390'],
            correctAnswer: 0
          },
          {
            question:
              ' Zbiór usług internetowych dla systemów rodziny Microsoft Windows jest oznaczony skrótem',
            answers: ['IIS', 'FTPS', 'HTTP', 'HTTPS'],
            correctAnswer: 0
          },
          {
            question: ' Translacja adresów sieciowych jest oznaczona skrótem',
            answers: ['NAT', 'SPI', 'IDS', 'DMZ'],
            correctAnswer: 0
          },
          {
            question:
              ' Do centralnego zarządzania konfiguracją grup komputerów i użytkowników w systemach Windows Server należy zastosować narzędzie',
            answers: ['GPMC', 'RDP', 'UNC', 'MMC'],
            correctAnswer: 0
          },
          {
            question:
              ' Który skrót określa typ licencji Microsoft przeznaczonej dla szkół, uczelni wyższych, instytucji rządowych oraz dużych przedsiębiorstw?',
            answers: ['MOLP', 'VLSC', 'OEM', 'BOX'],
            correctAnswer: 0
          },
          {
            question:
              ' W systemach operacyjnych Windows konto użytkownika, o największych uprawnieniach domyslnych, należy do grupy',
            answers: [
              'administratorzy',
              'goście',
              'uzytkownicy zaawansowani',
              'operatorzy kopii zapasowych'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Protokołem połączeniowym zapewniającym niezawodne dostarczenie danych jest protokół',
            answers: ['TCP', 'ARP', 'UDP', 'IPX'],
            correctAnswer: 0
          },
          {
            question:
              ' Zasady filtracji ruchu sieciowego firewall są definiowane w postaci',
            answers: [
              'reguł',
              'serwisów',
              'plików CLI',
              'kontroli pasma zajętości'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Które polecenie diagnostyczne należy zastosować do wyświetlania informacji o tym, czy miejsce docelowe odpowiada i po jakim czasie została odebrana odpowiedź?',
            answers: ['ping', 'route', 'nbtstat', 'ipconfig'],
            correctAnswer: 0
          },
          {
            question:
              ' Które polecenie w systemach operacyjnych Windows, jest stosowane do wyświetlania konfiguracji interfejsów sieciowych?',
            answers: ['ipconfig', 'hold', 'tracert', 'ifconfig'],
            correctAnswer: 0
          },
          {
            question: ' Który protokół zapewnia szyfrowane połączenia?',
            answers: ['SSH', 'DNS', 'DHCP', 'TELNET'],
            correctAnswer: 0
          },
          {
            question: ' Skrót MAN oznacza sieć',
            answers: ['miejską', 'lokalną', 'rozległą', 'kampusową'],
            correctAnswer: 0
          },
          {
            question: ' Na rysunku przedstawiono kabel',
            answers: ['S/FTP', 'U/UTP', 'F/STP', 'U/FTP'],
            correctAnswer: 0,
            img: 'e13/26.jpg'
          },
          {
            question: ' Który protokół komunikacyjny wykorzystuje port 53?',
            answers: ['DNS', 'FTP', 'HTTP', 'SMTP'],
            correctAnswer: 0
          },
          {
            question:
              ' Który z protokołów przesyła datagramy użytkownika NIE GWARANTUJĄC ich dostarczenia?',
            answers: ['UDP', 'TCP', 'ICMP', 'HTTP'],
            correctAnswer: 0
          },
          {
            question: ' Urządzenie sieciowe przedstawione na rysunku, to',
            answers: ['router', 'firewall', 'przełącznik', 'konwerter mediów'],
            correctAnswer: 0,
            img: 'e13/27.jpg'
          },
          {
            question:
              ' Ile domen kolizyjnych występuje w sieci pokazanej na rysunku?',
            answers: ['1', '4', '5', '6'],
            correctAnswer: 0,
            img: 'e13/28.jpg'
          },
          {
            question:
              ' Na rysunku przedstawiono sieć lokalną opartą na okablowaniu kat. 6. Stacja robocza C nie może skomunikować się z siecią. Jaki problem warstwy fizycznej może powodować brak łączności?',
            answers: [
              'Zła długość kabla',
              'Nieprawidłowy adres IP',
              'Nieodpowiedni kabel',
              'Zły typ przełącznika'
            ],
            correctAnswer: 0,
            img: 'e13/29.jpg'
          },
          {
            question: ' Norma PN-EN 50173 zaleca instalowanie minimum',
            answers: [
              '1 punktu rozdzielczego na każde piętro',
              '1 punktu rozdzielczego na każde 100 m2 powierzchni',
              '1 punktu rozdzielczego na każde 250 m2 powierzchni',
              '1 punktu rozdzielczego na cały wielopiętrowy budynek'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Urządzenie umożliwiające łączenie hostów jednej sieci z hostami w innych sieciach to',
            answers: ['router', 'hub', 'switch', 'firewall'],
            correctAnswer: 0
          },
          {
            question:
              ' Dokument, którego celem jest przedstawienie inwestorowi oferty cenowej wykonania robót instalatorskich sieci komputerowej, to',
            answers: [
              'kosztorys ofertowy',
              'kosztorys ślepy',
              'przedmiar robót',
              'specyfikacja techniczna'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Medium transmisyjne odporne na zakłócenia elektromagnetyczne i atmosferyczne to',
            answers: [
              'światłowód',
              'skrętka typu UTP',
              'gruby kabel koncentryczny',
              'cienki kabel koncentryczny'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Na rysunku przedstawiono patchpanel - nieekranowany panel krosowy kategorii 5e, wyposażony w złącza szczelinowe typu LSA. Do montażu (zaszywania) kabli w złącza szczelinowe należy użyć',
            answers: [
              'narzędzia uderzeniowego',
              'narzędzia zaciskowego 8P8C',
              'narzędzia zaciskowego BNC',
              'narzędzia JackRapid'
            ],
            correctAnswer: 0,
            img: 'e13/30.jpg'
          },
          {
            question:
              ' Odległość toru nieekranowanego kabla sieciowego od oświetleniowej instalacji elektrycznej powinna wynosić minimum',
            answers: ['30 cm', '20 cm', '40 cm', '50 cm'],
            correctAnswer: 0
          },
          {
            question:
              ' Dopuszczalny promień zgięcia podczas instalacji kabla U/UTP kat.5E wynosi',
            answers: [
              'osiem średnic kabla',
              'dwie średnice kabla',
              'cztery średnice kabla',
              'sześć średnic kabla'
            ],
            correctAnswer: 0
          },
          {
            question: ' W jakich jednostkach wyrażony przesłuch zbliżny NEXT?',
            answers: ['w decybelach', 'w omach', 'w dżulach', 'w amperach'],
            correctAnswer: 0
          },
          {
            question:
              ' W sieci o adresie 192.168.20.0 zastosowano maskę podsieci 255.255.255.248. Ile adresów IP będzie dostępnych dla urządzeń?',
            answers: ['6', '1022', '510', '14'],
            correctAnswer: 0
          },
          {
            question: ' Który z adresów IP należy do klasy A?',
            answers: ['119.0.0.1', '192.0.2.1', '134.16.0.1', '169.255.2.1'],
            correctAnswer: 0
          },
          {
            question:
              ' Adres planowanej sieci należy do klasy C. Sieć została podzielona na 4 podsieci po 62 urządzenia w każdej podsieci. Która z poniższych masek jest odpowiednia do planowanego zadania?',
            answers: [
              '255.255.255.192',
              '255.255.255.128',
              '255.255.255.224',
              '255.255.255.240'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Do pomiaru tłumienia łącza światłowodowego w dwóch oknach transmisyjnych 1310 nm i 1550 nm należy użyć',
            answers: [
              'miernika mocy optycznej',
              'rejestratora cyfrowego',
              'reflektometru TDR',
              'testera UTP'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Dokumentacja powykonawcza projektowanej sieci LAN powinna między innymi zawierać',
            answers: [
              'raport pomiarowy torów transmisyjnych',
              'założenia projektowe sieci lokalnej',
              'spis rysunków wykonawczych',
              'kosztorys robót instalatorskich'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Urządzenie, na którym można dokonać konfiguracji sieci VLAN, to',
            answers: [
              'switch',
              'most przezroczysty (transparent bridge)',
              'regenerator (repeater)',
              'firewall'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Który typ routingu najlepiej zastosować w rozbudowanych, szybko zmieniających się sieciach?',
            answers: ['Dynamiczny', 'Lokalny', 'Statyczny', 'Zewnętrzny'],
            correctAnswer: 0
          },
          {
            question:
              ' W celu wyłączenia rozgłaszania nazwy sieci bezprzewodowej należy w punkcie dostępowym wyłączyć funkcję',
            answers: ['SSID', 'Wide Channel', 'Filter IDENT', 'UPnP AV'],
            correctAnswer: 0
          },
          {
            question:
              ' Najczęściej stosowany kodek mowy podczas konfiguracji bramki VoIP to',
            answers: ['G.711', 'AC3', 'GSM', 'A.512'],
            correctAnswer: 0
          },
          {
            question:
              ' Polecenie za pomocą którego można uzyskać informacje o aktualnych połączeniach TCP oraz informacje o źródłowych i docelowych portach, to',
            answers: ['netstat', 'ping', 'lookup', 'ipconfig'],
            correctAnswer: 0
          },
          {
            question:
              ' Za pomocą narzędzia diagnostycznego Tracert można ustalić trasę do punktu docelowego. Przez ile routerów przeszedł pakiet wysłany do hosta 172.16.0.99?',
            answers: ['4', '2', '5', '24'],
            correctAnswer: 0,
            img: 'e13/31.jpg'
          },
          {
            question:
              ' Polecenie umożliwiające poznanie adresów fizycznych dla kart sieciowych w systemie to',
            answers: ['getmac', 'pathping', 'arp -a', 'ping'],
            correctAnswer: 0
          },
          {
            question:
              ' Do utworzenia woluminu RAID 5 w serwerze potrzeba minimum',
            answers: ['3 dyski', '2 dyski', '4 dyski', '5 dysków'],
            correctAnswer: 0
          },
          {
            question:
              ' Aby przeprowadzić ręczną konfigurację interfejsu sieciowego w systemie LINUX należy się posłużyć poleceniem',
            answers: ['ifconfig', 'eth0', 'ipconfig', 'route add'],
            correctAnswer: 0
          },
          {
            question:
              ' W systemie Windows Serwer utworzenie ukrytego, udostępnionego katalogu wymaga dopisania na końcu nazwy katalogu symbolu',
            answers: ['$', '@', '%', '&'],
            correctAnswer: 0
          },
          {
            question:
              ' Jakie polecenie umożliwia mapowanie zasobów sieciowych w Windows Serwer?',
            answers: ['net use', 'net map', 'network', 'net add'],
            correctAnswer: 0
          },
          {
            question:
              ' Konfiguracja usług na serwerze realizowana jest poprzez',
            answers: [
              'role i funkcje',
              'panel sterowania',
              'kontroler domeny',
              'Active Directory'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Planując wykorzystanie miejsca na dysku komputera do przechowywania i udostępniania takich informacji jak pliki i aplikacje dostępne w sieci oraz zarządzania nimi, należy skonfigurować komputer jako',
            answers: [
              'serwer plików',
              'serwer DHCP',
              'serwer aplikacji',
              'serwer terminali'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Informacje o kontach użytkowników w systemie LINUX przechowywane są w pliku',
            answers: [
              '/etc/passwd',
              '/etc/shells',
              '/etc/group',
              '/etc/shadow'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Zgodnie z modelem TCP/IP protokoły DNS, FTP oraz SMTP, należą do warstwy',
            answers: [
              'aplikacji',
              'dostępu do sieci',
              'transportowej',
              'internetowej'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Protokół typu klient-serwer oraz żądanie-odpowiedź, który stosowany jest do udostępniania plików, to',
            answers: ['FTP', 'SSL', 'SSH', 'ARP'],
            correctAnswer: 0
          },
          {
            question:
              ' Połączenie między oddzielnymi sieciami i kontrolę przepływu informacji między nimi realizuje urządzenie warstwy dystrybucji nazywane',
            answers: [
              'routerem',
              'serwerem',
              'przełącznikiem',
              'koncentratorem'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Wpisując w przeglądarce internetowej adres www.egzamin.pl użytkownik nie ma dostępu do strony WWW, natomiast wpisanie adresu 211.0.12.41 pozwala otworzyć tę stronę. Przyczyną tego problemu jest brak skonfigurowanego serwera',
            answers: ['DNS', 'WWW', 'DHCP', 'SQL'],
            correctAnswer: 0
          },
          {
            question:
              ' Aby chronić komputery w sieci lokalnej przed nieautoryzowanym dostępem oraz atakami typu DoS należy zainstalować i skonfigurować',
            answers: [
              'zaporę ogniową',
              'filtr antyspamowy',
              'program antywirusowy',
              'blokadę okienek pop-up'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Przechowywanie kopii często odwiedzanych stron oraz zwiększenie bezpieczeństwa dzięki odfiltrowywaniu określonych zawartości stron sieci Web można uzyskać poprzez',
            answers: [
              'konfigurację serwera pośredniczącego proxy',
              'instalację programu antywirusowego i najnowszą bazę wirusów',
              'korzystanie z systemu z uprawnień administratora',
              'automatyczne wyłączenie plików cookies'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Która z topologii fizycznych sieci komputerowej jest przedstawiona na rysunku?',
            answers: ['Siatki', 'Gwiazdy', 'Magistrali', 'Pierścienia'],
            correctAnswer: 0,
            img: 'e13/32.jpg'
          },
          {
            question:
              ' Topologia fizyczna, w której wszystkie urządzenia końcowe są bezpośrednio podłączone do jednego punktu centralnego, np. koncentratora lub przełącznika to topologia',
            answers: ['Gwiazdy', 'Siatki', 'Magistrali', 'Pierścienia'],
            correctAnswer: 0
          },
          {
            question:
              ' Zgodnie ze standardem 802.3u sieci FastEthernet 100Base-FX wykorzystuje',
            answers: [
              'światłowód wielomodowy',
              'przewód UTP kat. 5',
              'przewód UTP kat. 6',
              'światłowód jednomodowy'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Jaka jest kolejność we wtyku RJ-45 zgodnie z normą TIA/EIA-568 dla zakończenia typu T568B?',
            answers: [
              'Biało-pomarańczowy, pomarańczowy, biało-zielony, niebieski, biało-niebieski, zielony, biało-brązowy, brązowy',
              'Biało-niebieski, niebieski, biało-brązowy, brązowy, biało-zielony, zielony, biało-pomarańczowy, pomarańczowy',
              'Biało-brązowy, brązowy, biało-pomarańczowy, pomarańczowy, biało-zielony, niebieski, biało-niebieski, zielony',
              'Biało-zielony, zielony, biało-pomarańczowy, pomarańczowy, niebieski, biało-niebieski, biało-brązowy, brązowy'
            ],
            correctAnswer: 0
          },
          {
            question: ' Bezpołączeniowy protokół warstwy transportowej to',
            answers: ['UDP', 'ARP', 'TCP', 'SSH'],
            correctAnswer: 0
          },
          {
            question:
              ' Które stwierdzenie dotyczące protokołu DHCP jest prawidłowe?',
            answers: [
              'Jest to protokół konfiguracji hosta',
              'Jest to protokół routingu',
              'Jest to protokół przesyłania plików',
              'Jest to protokół dostępu do bazy danych'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Który z protokołów przekształca logiczne adresy IP na fizyczne adresy MAC stosowane w sieci Ethernet?',
            answers: ['ARP', 'IP', 'IRC', 'SNMP'],
            correctAnswer: 0
          },
          {
            question: ' Które urządzenie przedstawia rysunek?',
            answers: ['Access Point', 'Hub', 'Switch', 'Bramka VoIP'],
            correctAnswer: 0,
            img: 'e13/33.jpg'
          },
          {
            question:
              ' Które urządzenie sieciowe przedstawia symbol graficzny?',
            answers: ['Router', 'Hub', 'Switch', 'Access Point'],
            correctAnswer: 0,
            img: 'e13/34.jpg'
          },
          {
            question:
              ' Które urządzenie sieciowe działa w warstwie fizycznej modelu ISO/OSI, przesyłając sygnał z jednego portu na wszystkie pozostałe porty?',
            answers: ['Koncentrator', 'Modem', 'Przełącznik', 'Karta sieciowa'],
            correctAnswer: 0
          },
          {
            question:
              ' Wykonując projekt sieci LAN, wykorzystano medium transmisyjne standardu Ethernet 1000Base-T. Które stwierdzenie jest prawdziwe?',
            answers: [
              'Standard ten umożliwia transmisję typu full-duplex przy maksymalnym zasiegu 100 metrów',
              'Standard ten umożliwia transmisję typu half-duplex przy maksymalnym zasięgu 1000 metrów',
              'Jest to standard sieci optycznych pracujących na wielomodowych światłowodach',
              'Jest to standard sieci optycznych, której maksymalny zasięg to 1000 metrów'
            ],
            correctAnswer: 0
          },
          {
            question: ' Co łączy okablowanie pionowe w projekcie sieci LAN?',
            answers: [
              'Główny punkt rozdzielczy z pośrednimi punktami rozdzielczymi',
              'Gniazdo abonenckie z pośrednim punktem rozdzielczym',
              'Główny punkt rozdzielczy z gniazdem abonenckim',
              'Dwa sąsiednie punkty abonenckie'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Które medium transmisyjne zapewnia separację galwaniczną pomiędzy systemami transmisji danych?',
            answers: [
              'Światłowód',
              'Skrętka ekranowana',
              'Skrętka nieekranowana',
              'Przewód koncentryczny'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Z którym medium transmisyjnym wykorzystuje się przedstawiony na rysunku adapter?',
            answers: [
              'Ze światłowodem',
              'Z przewodem FTP',
              'Z przewodem UTP',
              'Z przewodem koncentrycznym'
            ],
            correctAnswer: 0,
            img: 'e13/35.jpg'
          },
          {
            question: ' Urządzenie przedstawione na rysunku to',
            answers: [
              'Tester diodowy przewodu UTP',
              'Zaciskarka wtyków RJ45',
              'Tester długości okablowania',
              'Narzędzie uderzeniowe typu krone'
            ],
            correctAnswer: 0,
            img: 'e13/36.jpg'
          },
          {
            question:
              ' Wskaż zakres adresów IP należący do klasy A, służący do adresacji prywatnej w sieciach komputerowych:',
            answers: [
              '10.0.0.0 - 10.255.255.255',
              '127.0.0.0 - 127.255.255.255',
              '172.16.0.0 - 172.31.255.255',
              '192.168.0.0 - 192.168.255.255'
            ],
            correctAnswer: 0
          },
          {
            question: ' Do której klasy adresów IP należy adres 130.140.0.0?',
            answers: ['Do klasy B', 'Do klasy A', 'Do klasy C', 'Do klasy D'],
            correctAnswer: 0
          },
          {
            question:
              ' Ile hostów można zaadresować w podsieci o adresie 192.168.10.0/25?',
            answers: ['126', '62', '64', '128'],
            correctAnswer: 0
          },
          {
            question:
              ' Rysunek przedstawia konfigurację urządzenia WiFi. Wskaż, które stwierdzenie dotyczące konfiguracji jest prawdziwe:',
            answers: [
              'Filtrowanie adresów MAC jest wyłączone',
              'Urządzenia w sieci mają adresy klasy A',
              'W tym momencie w sieci WiFi pracuje 7 urządzeń',
              'Dostęp do sieci bezprzewodowej jest dozwolony wyłącznie dla siedmiu urządzeń'
            ],
            correctAnswer: 0,
            img: 'e13/37.jpg'
          },
          {
            question:
              ' Który z wymienionych mechanizmów zapewni najwyższy poziom bezpieczeństwa sieci bezprzewodowych standardu 802.11n?',
            answers: ['WPA2', 'WEP', 'WPA', 'Autoryzacja'],
            correctAnswer: 0
          },
          {
            question:
              ' Polecenie netstat -a w systemach Microsoft Windows wyświetla',
            answers: [
              'Wszystkie aktywne połączenia protokołu TCP',
              'Tablicę trasowania',
              'Statystykę odwiedzin stron internetowych',
              'Aktualne parametry konfiguracyjne sieci TCP/IP'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Aby sprawdzić adres fizyczny karty sieciowej, w wierszu poleceń systemu operacyjnego Microsoft Windows należy wpisać polecenie',
            answers: ['ipconfig /all', 'get mac', 'ifconfig -a', 'show mac'],
            correctAnswer: 0
          },
          {
            question:
              ' W wierszu poleceń w systemie operacyjnym zostało wydane polecenie nslookup. Jaka informację uzyskano?',
            answers: [
              'Adres serwera DNS',
              'Adres IP hosta',
              'Domyślną bramę',
              'Adres serwera DHCP'
            ],
            correctAnswer: 0,
            img: 'e13/38.jpg'
          },
          {
            question:
              ' Które polecenie w systemie Linux umożliwia sprawdzenie adresu IP przypisanego do interfejsu sieciowego?',
            answers: ['ifconfig', 'ipconfig', 'msconfig', 'tcpconfig'],
            correctAnswer: 0
          },
          {
            question:
              ' Które polecenie wiersza poleceń systemu operacyjnego Microsoft Windows Wyświetla informacje dotyczące wszystkich zasobów udostępnionych na komputerze lokalnym?',
            answers: ['net share', 'net file', 'net print', 'net session'],
            correctAnswer: 0
          },
          {
            question:
              ' Która usługa musi byc uruchomiona na serwerze by stacja robocza pobierała automatycznie adres IP?',
            answers: ['DHCP', 'DNS', 'WINS', 'PROXY'],
            correctAnswer: 0
          },
          {
            question:
              ' Którą usługę należy zainstalować na serwerze Linux, aby korzystać z bezpiecznego zdalnego dostępu?',
            answers: ['ssh', 'tftp', 'telnet', 'rlogin'],
            correctAnswer: 0
          },
          {
            question:
              ' Wskaż nieprawidłowe stwierdzenie dotyczące Active Directory:',
            answers: [
              'Active Directory to usługa służąca do monitorowania użycia limitów dyskowych aktywnych katalogów',
              'W Active Directory informacje grupowane są hierarchiczne.',
              'Domeny zorganizowane hierarchicznie mogą tworzyć strukturę drzewa',
              'Active Directory to usługa katalogowa w sieciowych systemach operacyjnych firmy Microsoft'
            ],
            correctAnswer: 0
          },
          {
            question: ' Która usługa sieciowa standardowo korzysta z portu 53?',
            answers: ['DNS', 'FTP', 'HTTP', 'POP3'],
            correctAnswer: 0
          },
          {
            question:
              ' Jak nazywa sie zbiór usług internetowych dla systemów rodziny Microsoft Windows, który umożliwia pełnienie roli serwera FTP oraz serwera WWW?',
            answers: ['IIS', 'PROFTPD', 'APACHE', 'WINS'],
            correctAnswer: 0
          },
          {
            question:
              ' Komputer pracujący w domenie Active Directory nie może połączyć się z kontrolerem domeny, na którym jest przechowywany profil użytkownika. Jaki typ profilu użytkownika zostanie utworzony na tym komputerze?',
            answers: ['tymczasowy', 'lokalny', 'mobilny', 'obowiązkowy'],
            correctAnswer: 0
          },
          {
            question:
              ' Którym poleceniem w systemie Linux można założyć uzytkowników?',
            answers: ['useradd', 'usersadd', 'usermod', 'net user'],
            correctAnswer: 0
          },
          {
            question:
              ' Które polecenie w systemie operacyjnym Linux umożliwia przypisanie istniejącego konta użytkownika nowak do grupy technikum?',
            answers: [
              'usermod -g technikum nowak',
              'groups -g technikum nowak',
              'useradd -g technikum nowak',
              'usergroup -g technikum nowak'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Który z protokołów jest protokołem warstwy aplikacji w modelu ISO/OSI?',
            answers: ['FTP', 'ARP', 'UDP', 'ICMP'],
            correctAnswer: 0
          },
          {
            question:
              ' Użytkownik Gość należy do grupy Goście. Grupa Goście należy do grupy Wszyscy. Wskaż uprawnienia udziału użytkownika Gość do folderu test1:',
            answers: [
              'użytkownik Gość nie posiada uprawnień do folderu test1',
              'użytkownik Gość posiada pełne uprawnienia do folderu test1',
              'użytkownik Gość posiada uprawnienia tylko zapisu do folderu test1',
              'użytkownik Gość posiada uprawnienia tylko odczytu do folderu test1'
            ],
            correctAnswer: 0,
            img: 'e13/39.jpg'
          },
          {
            question:
              ' W systemie Linux ustawiono prawa dostepu do folderu określone w postaci ciągu znaków rwx--x--x. Jakiej wartości numerycznej odpowiadają te prawa?',
            answers: ['711', '777', '621', '543'],
            correctAnswer: 0
          },
          {
            question:
              ' Użytkownik wpisując w wierszu poleceń polecenie ping www.onet.pl otrzymuje następujący komunikat: Żądanie polecenia ping nie może znaleźć hosta www.onet.pl Sprawdź nazwe i ponów próbę. Natomiast wpisując w wierszu poleceń polecenie ping 213.180.141.140 (adres IP serwera www.onet.pl), użytkownik dostaje odpowiedź z serwera. Co może być przyczyną takiego stanu?',
            answers: [
              'niepoprawny adres IP serwera DNS',
              'niepoprawny adres IP hosta',
              'niepoprawnie skonfigurowana maska podsieci',
              'niepoprawnie skonfigurowana brama domyślna'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Hosty A i B nie komunikują się z hostem C. Między hostami A i B komunikacja jest prawidłowa. Co jest przyczyną braku komunikacji między hostami A i C oraz B i C?',
            answers: [
              'Adresy IP należą do różnych podsieci',
              'Host C ma źle ustawioną bramę domyślną',
              'Adres IP hosta C jest adresem rozgłoszeniowym',
              'Switch, do którego są podpięte hosty, jest wyłączony'
            ],
            correctAnswer: 0,
            img: 'e13/40.jpg'
          },
          {
            question:
              ' Która czynność zabezpieczy dane przesyłane w sieci przed działaniem sniffera?',
            answers: [
              'szyfrowanie danych w sieci',
              'korzystanie z antydialera',
              'zmiana hasła użytkownika',
              'skanowanie programem antywirusowym'
            ],
            correctAnswer: 0
          },
          {
            question: ' Narzędzie iptables w systemie Linux służy do',
            answers: [
              'konfiguracji zapory sieciowej',
              'konfiguracji karty sieciowej',
              'konfiguracji serwera pocztowego',
              'konfiguracji zdalnego dostępu do serwera'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Switch jako element centralny występuje w sieci o topologii',
            answers: ['gwiazdy', 'magistrali', 'pierścienia', 'pełnej siatki'],
            correctAnswer: 0
          },
          {
            question: ' Norma dotycząca okablowania strukturalnego to',
            answers: ['TIA/EIA-568-B', 'ISO 9001', 'IEEE 1394', 'IEC 60364'],
            correctAnswer: 0
          },
          {
            question:
              ' Bezpołączeniowy protokół warstwy transportowej modelu ISO/OSI to',
            answers: ['UDP', 'STP', 'FTP', 'TCP'],
            correctAnswer: 0
          },
          {
            question:
              ' Protokołem odpowiedzialnym za wykrywanie i eliminowanie kolizji w sieciach Ethernet jest',
            answers: ['CSMA/CD', 'WINS', 'IPX/SPX', 'NetBEUI'],
            correctAnswer: 0
          },
          {
            question:
              ' Urządzenie sieciowe pracujące w trzeciej warstwie modelu ISO/OSI, operującej na adresach IP, to',
            answers: ['router', 'hub', 'bridge', 'repeater'],
            correctAnswer: 0
          },
          {
            question: ' Która z cech charakteryzuje przełącznik sieciowy?',
            answers: [
              'Z otrzymanych ramek odczytuje adresy MAC',
              'Używa protokołu EIGRP',
              'Operuje na porcjach danych zwanych segmentami',
              'Z przesyłanych pakietów odczytuje docelowe adresy IP'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Wymiana koncentratorów na przełączniki w sieci Ethernet spowoduje',
            answers: [
              'zmniejszenie ilości kolizji',
              'zmianę topologii sieci',
              'konieczność zmiany adresów IP',
              'zwiększenie domeny rozgłoszeniowej'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Które urządzenie sieciowe pozwala połączyć sieć LAN z WAN?',
            answers: ['Router', 'Hub', 'Switch', 'Repeater'],
            correctAnswer: 0
          },
          {
            question:
              ' Oblicz koszt brutto materiałów niezbędnych do połączenia w sieć w topologii gwiazdy, 3 komputerów wyposażonych w karty sieciowe, wykorzystując przewody o długości 2 m. Ceny materiałów podano w tabeli.',
            answers: ['92 zł', '89 zł', '249 zł', '252 zł'],
            correctAnswer: 0,
            img: 'e13/41.jpg'
          },
          {
            question:
              ' Aby w budowanej sieci komputerowej zapewnić najmniejszy wpływ zakłóceń elektromagnetycznych na przesyłany sygnał należy zastosować',
            answers: [
              'światłowód',
              'ekranowaną skrętkę',
              'gruby przewód koncentryczny',
              'cienki przewód koncentryczny'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Które medium transmisyjne należy zastosować, aby połączyć dwa punkty dystrybucyjne odległe od siebie o 600m?',
            answers: [
              'światłowód',
              'skrętkę STP',
              'skrętke UTP',
              'przewód koncentryczny'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' W sieci Ethernet 100Base-TX do transmisji danych wykorzystywane są żyły kabla UTP dołączone do pinów',
            answers: ['1,2,3,6', '4,5,6,7', '1,2,5,6', '1,2,3,4'],
            correctAnswer: 0
          },
          {
            question:
              ' Komputer ma adres IP 192.168.0.1, maska podsieci to 255.255.255.0. Który adres jest adresem rozgłoszeniowym podsieci, do której należy ten komputer?',
            answers: [
              '192.168.0.255',
              '192.168.0.31',
              '192.168.0.63',
              '192.168.0.127'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Komputer o adresie IP 192.168.5.165 z maską podsieci 255.255.255.192 pracuje w sieci o adresie',
            answers: [
              '192.168.5.128',
              '192.168.5.0',
              '192.168.5.64',
              '192.168.5.192'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Router na interfejsie LAN ma przypisany adres IP 192.168.50.1. Został on tak skonfigurowany, że komputerom przydziela się wszystkie dostępne adresy IP w sieci 192.168.50.0 z maską 255.255.255.0. Ile maksymalnie komputerów może pracować w takiej sieci?',
            answers: ['253', '254', '256', '255'],
            correctAnswer: 0
          },
          {
            question:
              ' Który zapis jest maską podsieci dla adresu IP 217.152.128.100/25?',
            answers: [
              '255.255.255.128',
              '255.255.255.0',
              '255.255.255.192',
              '255.255.255.224'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Na rysunku podano podstawową informację o konfiguracji karty sieciowej. Do której klasy adresów IP należy adres przypisany tej karcie?',
            answers: ['Klasy C', 'Klasy A', 'Klasy B', 'Klasy D'],
            correctAnswer: 0,
            img: 'e13/42.jpg'
          },
          {
            question:
              ' Którą maskę należy zastosować, aby sieć o adresie 192.168.1.0 podzielić na 4 podsieci?',
            answers: [
              '255.255.255.192',
              '255.255.255.0',
              '255.255.255.128',
              '255.255.255.224'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Który parametr trzeba podać podczas konfiguracji serwera DHCP?',
            answers: [
              'Czas trwania dzierżawy adresu IP',
              'Czas trwania dzierżawy adresu MAC',
              'Adres MAC karty sieciowej serwera DHCP',
              'Poziom zabezpieczeń IPSec (ang. Internet Protocol Security)'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Które polecenie jest stosowane do monitorowania lokalnych połączeń?',
            answers: ['netstat', 'dir', 'host', 'route'],
            correctAnswer: 0
          },
          {
            question: ' Który port jest domyślnym portem serwera usługi WWW?',
            answers: ['80', '800', '8080', '8081'],
            correctAnswer: 0
          },
          {
            question:
              ' Aby zapewnić dobrą jakość połączeń głosowych VoIP kosztem innych przesyłanych danych, należy na routerze włączyć i skonfigurować usługę',
            answers: ['QoS', 'SSL', 'DMZ', 'NAT'],
            correctAnswer: 0
          },
          {
            question:
              ' Router Wi-Fi pracujący w standardzie 802.11n pozwala uzyskać maksymalną prędkość transmisji',
            answers: ['600 Mb/s', '11 Mb/s', '54 Mb/s', '1000 Mb/s'],
            correctAnswer: 0
          },
          {
            question:
              ' Użytkownik laptopa z systemu Windows 7 widzi dostępne sieci bezprzewodowe jak na rysunku. Konfigurując połączenie z siecią Z1 musi dla tej sieci podać',
            answers: [
              'klucz zabezpieczeń',
              'adres MAC',
              'nazwę SSID',
              'typ zabezpieczeń'
            ],
            correctAnswer: 0,
            img: 'e13/43.jpg'
          },
          {
            question:
              ' Rezultat wykonania którego polecenia z systemu Windows przedstawia rysunek?',
            answers: [
              'tracert www.onet.pl',
              'ping www.onet.pl',
              'netstat www.onet.pl',
              'traceroute www.onet.pl'
            ],
            correctAnswer: 0,
            img: 'e13/44.jpg'
          },
          {
            question:
              ' Który z sieciowych systemów operacyjnych jest udostępniany na licencji GNU?',
            answers: ['Linux', 'Unix', 'OS X Server', 'Windows Server 2012'],
            correctAnswer: 0
          },
          {
            question:
              ' Do konfiguracji interfejsu sieciowego w systemie Linux służy polecenie',
            answers: ['ifconfig', 'ipconfig', 'interfaces', 'networking'],
            correctAnswer: 0
          },
          {
            question:
              ' Który pakiet należy zainstalować na serwerze Linux, aby stacje robocze z systemem Windows mogły korzystać z plików i drukarek udostępnianych na tym serwerze?',
            answers: ['Samba', 'Wine', 'Vsftpd', 'Proftpd'],
            correctAnswer: 0
          },
          {
            question: ' Apache jest serwerem',
            answers: ['WWW', 'DNS', 'DHCP', 'Baz danych'],
            correctAnswer: 0
          },
          {
            question: ' Serwerem poczty e-mail jest',
            answers: ['Postfix', 'MySQL', 'Firebird', 'PostgreSQL'],
            correctAnswer: 0
          },
          {
            question:
              ' Protokół umożliwiający pobieranie poczty e-mail z serwera to:',
            answers: ['POP3', 'FTP', 'DNS', 'SMTP'],
            correctAnswer: 0
          },
          {
            question:
              ' Aby zarządzać wielkością transferu sieciowego, administrator powinien wykorzystać program typu',
            answers: [
              'bandwidth manager',
              'task manager',
              'quality manager',
              'package manager'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Podstawowy mechanizm ochrony danych w sieci komputerowej przed nieuprawnionym dostępem to',
            answers: [
              'autoryzacja dostępu do zasobów serwera',
              'wykonywanie kopii danych',
              'stosowanie macierzy dyskowych',
              'generowanie sum kontrolnych plików'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Podstawowy protokół używany do wyznaczenia trasy i wysyłania nią pakietu danych w sieci komputerowej to',
            answers: ['RIP', 'PPP', 'SSL', 'POP3'],
            correctAnswer: 0
          },
          {
            question:
              ' Na rysunku przedstawiono zrzut ekranu z konfiguracji strefy DMZ na routerze. Włączenie opcji "Enable DMZ" spowoduje, że komputer o adresie IP 192.168.0.106',
            answers: [
              'będzie publicznie widoczny w Internecie',
              'utraci dostęp do internetu',
              'będzie chroniony firewallem',
              'zostanie ukryty w sieci lokalnej'
            ],
            correctAnswer: 0,
            img: 'e13/45.jpg'
          },
          {
            question:
              ' Poniżej przedstawiono fragment pliku konfiguracyjnego usługi serwerowej w systemie Linux. Jest to usługa',
            answers: ['DHCP', 'TFTP', 'SSH2', 'DDNS'],
            correctAnswer: 0,
            img: 'e13/46.jpg'
          },
          {
            question:
              ' Wskaż domyślny port do przekazywania poleceń serwera usługi FTP',
            answers: ['21', '20', '25', '110'],
            correctAnswer: 0
          },
          {
            question:
              ' Jak muszą być ustawione prawa dostępu w systemie Linux, aby tylko jego właściciel mógł zapisywać w danym katalogu?',
            answers: ['rwxr-xr-x', 'r-xrwxr-x', 'r-xr-xrwx', 'rwxr-xrwx'],
            correctAnswer: 0
          },
          {
            question:
              ' Użytkownik komputera testujący połączenia sieciowe poleceniem ping otrzymał wynik jak na rysunku. Co jest przyczyną braku odpowiedzi serwera przy pierwszej probie, przy założeniu, że domena wp.pl ma adres 212.77.100.101?',
            answers: [
              'Brak adresów serwera DNS w konfiguracji karty sieciowej.',
              'Błędny adres IP przepisany karcie sieciowej.',
              'Brak przypisanego karcie sieciowej serwera DHCP.',
              'Brak adresu domyślnej bramy w konfiguracji karty sieciowej.'
            ],
            correctAnswer: 0,
            img: 'e13/47.jpg'
          },
          {
            question:
              ' Który rodzaj macierzy dyskowych oferuje tzw. mirroring dysków?',
            answers: ['RAID-1', 'RAID-0', 'RAID-3', 'RAID-5'],
            correctAnswer: 0
          },
          {
            question:
              ' W sieci lokalnej protokołem dynamicznej konfiguracji adresów IP jest',
            answers: ['DHCP', 'FTP', 'DNS', 'TCP/IP'],
            correctAnswer: 0
          },
          {
            question:
              ' Przedstawione parametry karty sieciowej wskazują, że karta',
            answers: [
              'pracuje w sieciach bezprzewodowych',
              'pracuje w standardzie c',
              'nie zapewnia szyfrowania danych',
              'pracuje w sieciach przewodowych w oparciu o gniazdo USB'
            ],
            correctAnswer: 0,
            img: 'e13/48.jpg'
          },
          {
            question:
              ' Jeśli wydanie komendy ping 127.0.0.1 skutkuje brakiem odpowiedzi, to',
            answers: [
              'karta sieciowa komputera, z którego ping został wysłany nie działa i wystąpił błąd w konfiguracji stosu TCP/IP',
              'w sieci nie działa serwer DHCP.',
              'w sieci nie działa system DNS lub podano jego błędny adres.',
              'komputer o adresie 127.0.0.1 z sieci lokalnej, aktualnie jest wyłączony.'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Głównym zadaniem przełącznika /renew komendy ipconfig w systemie rodziny Windows jest',
            answers: [
              'odnowienie dynamicznego adresu IP przez komunikację z serwerem DHCP.',
              'wyświetlanie informacji o adresie IP.',
              'wyświetlanie informacji o adresie MAC karty sieciowej.',
              'żądanie odpowiedzi z podanego IP w celu zdiagnozowania połączenia sieciowego.'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Aby połączyć komputery w sieć przewodową opartą na topologii gwiazdy, należy zastosować',
            answers: [
              'przełącznik (switch)',
              'router',
              'regenerator',
              'punkt dostępowy'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Administrator nadający adresy prywatne w klasie C, z maską 24 bitową dla komputerów w sieci lokalnej, wybierze zakres',
            answers: [
              '192.168.0.1 - 192.168.0.254',
              '172.16.0.1 - 172.16.255.254',
              '172.168.0.1 - 172.168.255.254',
              '192.168.0.1 - 192.168.10.254'
            ],
            correctAnswer: 0
          },
          {
            question: ' Najlepszym zabezpieczeniem sieci bezprzewodowej jest',
            answers: [
              'protokół WPA2',
              'protokół SSH',
              'protokół WPA',
              'protokół WEP'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Aby podłączyć do Internetu sieć lokalną, działającą w oparciu o adresy prywatne, należy zastosować',
            answers: ['router', 'koncentrator', 'regenerator', 'przełącznik'],
            correctAnswer: 0
          },
          {
            question: ' Rysunek przedstawia topologię',
            answers: [
              'rozszerzonej gwiazdy',
              'magistrali',
              'pierścienia',
              'pełnej siatki'
            ],
            correctAnswer: 0,
            img: 'e13/49.jpg'
          },
          {
            question: ' W architekturze sieci lokalnych typu klient-serwer',
            answers: [
              'wyróżnione komputery pełnią rolę serwerów udostępniających zasoby, a pozostałe komputery z tych zasobów korzystają',
              'żaden z komputerów nie pełni roli nadrzędnej w stosunku do pozostałych',
              'wszystkie komputery klienckie mają dostęp do zasobów komputerowych',
              'każdy komputer zarówno udostępnia jak i korzysta z zasobów innych komputerów'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Którą normę stosuje się dla okablowania strukturalnego w sieciach komputerowych',
            answers: [
              'TIA/EIA-568-B',
              'PN-EN 12464-1:2004',
              'PN-EN ISO 9001:2009',
              'ISO/IEC 8859-2'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Kontrolę poprawności przesyłania danych w sieciach Ethernet zapewnia protokół',
            answers: ['TCP', 'IP', 'UDP', 'HTTP'],
            correctAnswer: 0
          },
          {
            question: ' Urządzenie przedstawione na rysunku to',
            answers: ['koncentrator', 'ruter', 'wtórnik', 'bramka VoIP'],
            correctAnswer: 0,
            img: 'e13/50.jpg'
          },
          {
            question:
              ' Zastosowanie którego urządzenia może być przyczyną zwiększenia liczby kolizji pakietów w sieci?',
            answers: ['Koncentratora', 'Mostu', 'Rutera', 'Przełącznika'],
            correctAnswer: 0
          },
          {
            question: ' Rysunek przedstawia symbol graficzny',
            answers: ['przełącznika', 'rutera', 'mostu', 'punktu dostępowego'],
            correctAnswer: 0,
            img: 'e13/51.jpg'
          },
          {
            question: ' Funkcją serwera FTP jest',
            answers: [
              'udostępnianie plików',
              'monitoring sieci',
              'synchronizacja czasu',
              'zarządzanie kontami poczty'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Które urządzenie należy zastosować do podziału domeny rozgłoszeniowej?',
            answers: ['Ruter', 'Most', 'Przełącznik', 'Koncentrator'],
            correctAnswer: 0
          },
          {
            question:
              ' Największą szybkość transmisji danych w sieci bezprzewodowej uzyska się stosując urządzenia standardu',
            answers: ['802.11 n', '802.11 a', '802.11 b', '802.11 g'],
            correctAnswer: 0
          },
          {
            question:
              ' Jaki będzie łączny koszt materiałów służących do wykonania 20 kabli połączeniowych typu patchcord o długości 1,5m każdy, jeśli 1 metr bieżącego kabla kosztuje 1zł, a wtyk 50 gr?',
            answers: ['50 zł', '30 zł', '40 zł', '60 zł'],
            correctAnswer: 0
          },
          {
            question:
              ' Ile wynosi maksymalna szybkość transmisji danych w sieci lokalnej, w której do budowy okablowania strukturalnego zastosowano przewód UTP kat.5e?',
            answers: ['1 Gb/s', '10 Mb/s', '100 Mb/s', '10 Gb/s'],
            correctAnswer: 0
          },
          {
            question:
              ' Kabel typu skrętka, posiadający każdą parę przewodów w osobnym ekranie z folii, przy czym wszystkie przewody znajdują się w ekranie z folii, jest oznaczony symbolem',
            answers: ['F/FTP', 'S/UTP', 'F/UTP', 'S/FTP'],
            correctAnswer: 0
          },
          {
            question:
              ' Jaka jest standardowa wartość maksymalnej odległości pomiędzy urządzeniami sieciowymi, połączonymi bezpośrednio przewodem UTP kat.5e?',
            answers: ['100 m', '10 m', '500 m', '1000 m'],
            correctAnswer: 0
          },
          {
            question:
              ' Który standard sieci Ethernet należy zastosować przy połączeniu bezpośrednim urządzeń sieciowych oddalonych od siebie o 1 km?',
            answers: ['1000Base-LX', '10GBase-T', '10GBase-SR', '1000Base-SX'],
            correctAnswer: 0
          },
          {
            question: ' Do zarobienia końcówek kabla UTP jest stosowany wtyk',
            answers: ['8P8C', 'DVI', 'BNC', 'RS232'],
            correctAnswer: 0
          },
          {
            question:
              ' Który z adresów jest adresem rozgłoszeniowym dla hosta o adresie IP 171.25.172.29 i masce sieci 255.255.0.0?',
            answers: [
              '171.25.255.255',
              '171.25.0.0',
              '171.25.255.0',
              '171.25.172.255'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Jaki jest adres sieci, w której pracuje host o adresie IP 10.10.10.6 klasy A?',
            answers: [
              '10.0.0.0',
              '10.10.0.0',
              '10.10.10.255',
              '10.255.255.255'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Ile jest adresów IP dostępnych do adresowania komputerów w sieci o adresie 192.168.100.0 i masce 255.255.255.0?',
            answers: ['254', '253', '255', '256'],
            correctAnswer: 0
          },
          {
            question: ' Maska w postaci pełnej podsieci o prefiksie /25 to',
            answers: [
              '255.255.255.128',
              '255.255.255.192',
              '255.255.255.224',
              '255.255.255.240'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Aby zwiększyć bezpieczeństwo zasobów sieciowych administrator sieci komputerowej w firmie otrzymał polecenie podzielenia istniejącej lokalnej sieci komputerowej na 16 podsieci. Dotychczasowa sieć miała adres IP 192.168.20.0 z maską 255.255.255.0. Którą maskę sieci powinien zastosować administrator?',
            answers: [
              '255.255.255.240',
              '255.255.255.192',
              '255.255.255.224',
              '255.255.255.248'
            ],
            correctAnswer: 0
          },
          {
            question: ' Tester okablowania strukturalnego pozwala sprawdzić',
            answers: [
              'mapę połączeń',
              'liczbę przełączników w sieci',
              'liczbę komputerów w sieci',
              'obciążenie ruchu sieciowego'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Które polecenie w systemie operacyjnym Linux jest stosowane do wyświetlania konfiguracji interfejsów sieciowych?',
            answers: ['ifconfig', 'ping', 'tracert', 'ipconfig'],
            correctAnswer: 0
          },
          {
            question:
              ' Która usługa musi być uruchomiona na ruterze, aby ruter mógł zmieniać adresy IP źródłowe i docelowe przy przekazywaniu pakietów pomiędzy sieciami?',
            answers: ['NAT', 'TCP', 'FTP', 'UDP'],
            correctAnswer: 0
          },
          {
            question:
              ' Najskuteczniejszą metodą zabezpieczenia domowej sieci Wi-Fi jest',
            answers: [
              'stosowanie szyfrowania WPA-PSK',
              'zmiana adresu MAC rutera',
              'zmiana identyfikatora SSID',
              'stosowanie szyfrowania WEP'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Którym poleceniem w systemie Linux przypisuje się adres IP i maskę podsieci dla interfejsu eth0?',
            answers: [
              'ifconfig eth0 172.16.31.1 netmask 255.255.0.0',
              'ipconfig eth0 172.16.31.1 mask 255.255.0.0',
              'ipconfig eth0 172.16.31.1 netmask 255.255.0.0',
              'ifconfig eth0 172.16.31.1 mask 255.255.0.0'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Do automatycznego przydzielania adresów IP stacjom roboczym jest stosowana usługa',
            answers: ['DHCP', 'IMAP', 'WINS', 'SMTP'],
            correctAnswer: 0
          },
          {
            question: ' Zadaniem usługi DNS jest',
            answers: [
              'translacja nazw domenowych na adresy IP',
              'sprawdzenie poprawności adresów IP',
              'translacja adresów IP na nazwy domenowe',
              'sprawdzanie poprawności adresów domenowych'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Serwer obsługujący żądania protokołu komunikacyjnego HTTP to serwer',
            answers: ['WWW', 'DNS', 'DHCP', 'FTP'],
            correctAnswer: 0
          },
          {
            question: ' Na zdjęciu przedstawiono',
            answers: [
              'terminator BNC',
              'zastępczy wtyk RJ-45',
              'zaślepkę gniazda RJ-45',
              'zaślepkę kabla światłowodowego'
            ],
            correctAnswer: 0,
            img: 'e13/52.jpg'
          },
          {
            question:
              ' Który z wymienionych protokołów jest protokołem działającym w warstwie aplikacji?',
            answers: ['FTP', 'UDP', 'ARP', 'TCP'],
            correctAnswer: 0
          },
          {
            question:
              ' Który wymieniony protokół zapewnia korzystanie z szyfrowanego połączenia ze stroną internetową?',
            answers: ['HTTPS', 'TCP', 'SPX', 'NetBEUI'],
            correctAnswer: 0
          },
          {
            question:
              ' Protokół umożliwiający bezpieczną, zdalną pracę na serwerze to',
            answers: ['SSH', 'POP3', 'SMTP', 'TELNET'],
            correctAnswer: 0
          },
          {
            question:
              ' Aby umożliwić wymianę danych pomiędzy dwoma różnymi sieciami należy zastosować',
            answers: ['router', 'most', 'przełącznik', 'koncentrator'],
            correctAnswer: 0
          },
          {
            question:
              ' Liczba 22 użyta w adresie http://www.adres_serwera.pl:22 oznacza numer',
            answers: [
              'portu, inny od standardowego numeru dla danej usługi',
              'aplikacji, do której kierowane jest zapytanie',
              'sekwencyjny pakietu przekazującego dane',
              'PID procesu uruchomionego na serwerze'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Które środowisko powinien wybrać administrator sieci, aby zainstalować serwer stron WWW w systemie Linux?',
            answers: ['Apache', 'MySQL', 'proftpd', 'vsftpd'],
            correctAnswer: 0
          },
          {
            question:
              ' Który program należy zainstalować na serwerze internetowym z systemem Linux, aby można było korzystać z baz danych?',
            answers: ['MySqld', 'sshd', 'httpd', 'vxftpd'],
            correctAnswer: 0
          },
          {
            question:
              ' Atak DDoS (ang. Disributed Denial of Service) na serwer spowoduje',
            answers: [
              'przeciążenie aplikacji serwującej określone dane',
              'przechwycenie pakietów sieciowych',
              'podmianę pakietów przesyłanych przez sieć',
              'zbieranie informacji na temat atakowanej sieci'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Podstawową metodą zabezpieczenia sieci komputerowej przed atakiem z zewnątrz jest stosowanie',
            answers: [
              'zapory sieciowej',
              'serwera Proxy',
              'blokady portu 80',
              'programu antywirusowego'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Do monitorowania transmisji danych w sieci komputerowej należy zastosować program typu',
            answers: ['sniffer', 'firmware', 'debugger', 'kompilator'],
            correctAnswer: 0
          },
          {
            question:
              ' Który typ fizycznej topologii sieci komputerowej przedstawia rysunek?',
            answers: [
              'Pełnej siatki',
              'Gwiazdy',
              'Punkt-Punkt',
              'Częściowej siatki'
            ],
            correctAnswer: 0,
            img: 'e13/53.jpg'
          },
          {
            question: ' Rysunek przedstawia fizyczną topologię',
            answers: ['Gwiazdy', 'Szyny', 'Drzewa', 'Magistrali'],
            correctAnswer: 0,
            img: 'e13/54.jpg'
          },
          {
            question:
              ' Ile domen kolizyjnych i rozgłoszeniowych jest widocznych na schemacie?',
            answers: [
              '9 domen kolizyjnych i 4 domeny rozgłoszeniowe',
              '9 domen kolizyjnych i 1 domena rozgłoszeniowa',
              '1 domena kolizyjna i 9 domen rozgłoszeniowych',
              '4 domeny kolizyjne i 9 domen rozgłoszeniowych'
            ],
            correctAnswer: 0,
            img: 'e13/55.jpg'
          },
          {
            question:
              ' Który rodzaj standardu zakończenia przewodu okablowania strukturalnego przedstawia rysunek?',
            answers: ['T568A', 'T568B', 'EIA/TIA 569', 'EIA/TIA 607'],
            correctAnswer: 0,
            img: 'e13/56.jpg'
          },
          {
            question: ' Który zapis jest prawidłowym adresem IPv6?',
            answers: [
              '2001:DB8::BAF:FE94',
              '2001:DB8::BAF::FE94',
              '2001-DB8-BAF-FE94',
              '2001.DB8.BAF.FE94'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Identyfikowanie adresów fizycznych MAC na podstawie adresów logicznych IP jest wynikiem działania protokołu',
            answers: ['ARP', 'DNS', 'HTTP', 'DHCP'],
            correctAnswer: 0
          },
          {
            question:
              ' Symbol którego urządzenia wskazuje na rysunek strzałka?',
            answers: ['Routera', 'Koncentratora', 'Przełącznika', 'Serwera'],
            correctAnswer: 0,
            img: 'e13/57.jpg'
          },
          {
            question: ' Zdjęcie przedstawia',
            answers: ['Przełącznik', 'Router', 'Most', 'Punkt dostępowy'],
            correctAnswer: 0,
            img: 'e13/58.jpg'
          },
          {
            question: ' Które stwierdzenie dotyczy sieci P2P - peer to peer?',
            answers: [
              'Komputer w sieci może równocześnie pełnić rolę serwera i klienta',
              'Jest siecią hierarchiczną',
              'Udostępnia wyłącznie zasoby dyskowe',
              'Wymaga centralnego serwera z dedykowanym oprogramowaniem'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Aby była możliwa komunikacja między sieciami VLAN, stosuje się',
            answers: ['Router', 'Modem', 'Koncentrator', 'Punkt dostępowy'],
            correctAnswer: 0
          },
          {
            question: ' Narzędzie na zdjęciu służy do',
            answers: [
              'Wykonania zakończeń kablowych w złączach LSA',
              'Ściągania izolacji',
              'Zaciskania wtyków RJ45',
              'Montażu modułu Krone w gniazdach'
            ],
            correctAnswer: 0,
            img: 'e13/59.jpg'
          },
          {
            question:
              ' Który przyrząd należy wybrać do pomiarów mapy połączeń okablowania strukturalnego sieci lokalnej?',
            answers: [
              'Analizator sieci LAN',
              'Monitor sieciowy',
              'Reflektometr OTDR',
              'Analizator protokołów'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Ile hostów maksymalnie można zaadresować w sieci o adresie IP klasy B?',
            answers: ['65534', '254', '1022', '16777214'],
            correctAnswer: 0
          },
          {
            question:
              ' Serwer DHCP przydziela adresy z sieci o adresie 192.168.0.0. Którą maskę należy przypisać sieci, aby serwer mógł nadać 510 urządzeniom pracującym w sieci po jednym adresie IP?',
            answers: [
              '255.255.254.0',
              '255.255.255.192',
              '255.255.255.128',
              '255.255.252.0'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Który adres IP jest adresem urządzenia pracującego w sieci 10.0.0.0/17?',
            answers: [
              '10.0.127.128',
              '10.0.128.127',
              '10.0.128.254',
              '10.0.254.128'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Który rodzaj rozbudowy serwera wymaga instalacji dodatkowych sterowników?',
            answers: [
              'Montaż kolejnej karty sieciowej',
              'Dodanie pamięci RAM',
              'Dodanie dysków fizycznych',
              'Montaż kolejnego procesora'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Na podstawie którego adresu przełącznik podejmuje decyzje o przesyłaniu ramki?',
            answers: [
              'Adresu docelowego MAC',
              'Adresu źródłowego IP',
              'Adresu docelowego IP',
              'Adresu źródłowego MAC'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Która funkcja punktu dostępowego pozwala zabezpieczyć sieć bezprzewodową tak, aby tylko urządzenia o określonych adresach fizycznych mogły się do niej podłączyć?',
            answers: [
              'Filtrowanie adresów MAC',
              'Nadanie SSID',
              'Uwierzytelnianie',
              'Radius (Remote Authentication Dial In User Service)'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Który parametr w konfiguracji punktu dostępowego pełni rolę loginu wykorzystywanego podczas próby nawiązywania połączenia z punktem dostępowym sieci bezprzewodowej?',
            answers: [
              'Wireless Network Name',
              'Channel Width',
              'Wireless Channel',
              'Transmission Rate'
            ],
            correctAnswer: 0,
            img: 'e13/60.jpg'
          },
          {
            question:
              ' Na podstawie analizy ruchu sieciowego, wskaż adres IP i numer portu, z którego host otrzymuje odpowiedź',
            answers: [
              '46.28.247.123:80',
              '46.28.247.123:51383',
              '192.168.0.13:80',
              '192.168.0.13:51383'
            ],
            correctAnswer: 0,
            img: 'e13/61.jpg'
          },
          {
            question:
              ' Które polecenie systemu Windows wyświetla tabele routingu hosta?',
            answers: [
              'netstat -r',
              'netstat -n',
              'ipconfig /renew',
              'ipconfig /release'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Użytkownikom pracującym poza biurem uzyskanie zdalnego dostępu do serwera w sieci prywatnej przy wykorzystaniu infrastruktury sieci publicznej, takiej jak Internet, umożliwia',
            answers: ['VPN', 'FTP', 'SSH', 'Telnet'],
            correctAnswer: 0
          },
          {
            question:
              ' Pierwszą usługą instalowaną na serwerze jest usługa domenowa w usłudze Active Directory. Podczas instalacji kreator automatycznie wyświetli monit o konieczności zainstalowania usługi serwera',
            answers: ['DNS', 'FTP', 'WEB', 'DHCP'],
            correctAnswer: 0
          },
          {
            question:
              ' Adresem IP hosta skonfigurowanym na karcie sieciowej eth0 jest',
            answers: [
              '128.171.104.26',
              '255.255.255.0',
              '128.171.104.255',
              '00:A0:c9:89:02:F8'
            ],
            correctAnswer: 0,
            img: 'e13/62.jpg'
          },
          {
            question:
              ' Aby zagwarantować użytkownikom Active Directory możliwość logowania się i dostęp do zasobów tej usługi w przypadku awarii kontrolera domeny, należy',
            answers: [
              'zainstalować drugi kontroler domeny',
              'dodać wszystkich użytkowników do grupy administratorzy',
              'udostępnić wszystkim użytkownikom numer do Help Desk',
              'przekopiować wszystkie zasoby sieci na każdy komputer w domenie'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Rozgłaszaniem drukarek w sieci, kolejkowaniem zadań wydruku oraz przydzielaniem praw dostępu do drukarek zajmuje się serwer',
            answers: ['wydruku', 'FTP', 'DHCP', 'plików'],
            correctAnswer: 0
          },
          {
            question:
              ' Profil użytkownika systemu Windows wykorzystany do logowania się na dowolnym komputerze w sieci, który jest przechowywany na serwerze i może być modyfikowany przez użytkownika, to profil',
            answers: ['mobilny', 'lokalny', 'tymczasowy', 'obowiązkowy'],
            correctAnswer: 0
          },
          {
            question:
              ' Który zakres grupy domyślnie jest ustawiony dla nowo utworzonej grupy w kontrolerze domeny systemu Windows Serwer?',
            answers: [
              'Globalny',
              'Uniwersalny',
              'Dystrybucyjny',
              'Lokalny w domenie'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Które polecenie w systemie Linux umożliwia przydzielanie praw do plików i katalogów?',
            answers: ['chmod', 'gedit', 'mkdir', 'adduser'],
            correctAnswer: 0
          },
          {
            question:
              ' Do zdalnego zarządzania stacjami roboczymi nie jest stosowany',
            answers: [
              'program Wireshark',
              'pulpit zdalny',
              'program UltraVNC',
              'program TeamViewer'
            ],
            correctAnswer: 0
          },
          {
            question: ' Protokół używany przez WWW to',
            answers: ['HTTP', 'FTP', 'IPSec', 'SMTP'],
            correctAnswer: 0
          },
          {
            question:
              ' Internetowy protokół pocztowy, który pozwala na zarządzanie wieloma folderami pocztowymi oraz pobieranie i operowanie na listach znajdujących się na zdalnym serwerze, to',
            answers: ['IMAP', 'TCP', 'POP3', 'SMTP'],
            correctAnswer: 0
          },
          {
            question:
              ' Które urządzenie w sieci lokalnej NIE DZIELI obszaru sieci komputerowej na domeny kolizyjne?',
            answers: ['Koncentrator', 'Router', 'Most', 'Przełącznik'],
            correctAnswer: 0
          },
          {
            question:
              ' Protokołem połączeniowym warstwy transportowej modelu ISO/OSI jest',
            answers: ['TCP', 'UDP', 'ICMP', 'SMTP'],
            correctAnswer: 0
          },
          {
            question:
              ' Który z typów rekordów DNS w rodzinie systemów Windows Server definiuje alias (alternatywną nazwę) rekordu A dla kanonicznej (rzeczywistej) nazwy hosta?',
            answers: ['CNAME', 'NS', 'PTR', 'AAAA'],
            correctAnswer: 0
          },
          {
            question:
              ' Urządzeniem, które umożliwia podłączenie lokalnej sieci komputerowej do Internetu jest',
            answers: ['router', 'sterownik', 'przełącznik', 'koncentrator'],
            correctAnswer: 0
          },
          {
            question:
              ' Menedżer usług IIS (Internet Information Services) systemu Windows jest interfejsem graficznym służącym do konfigurowania serwera',
            answers: ['WWW', 'DNS', 'wydruku', 'terminali'],
            correctAnswer: 0
          },
          {
            question:
              ' Użytkownicy z sieci wewnętrznej komunikują się ze sobą, ale nie mogą się skomunikować z serwerem WWW. Wynik polecenia ping z komputerów bramy jest pozytywny. Który element sieci NIE MOŻE być przyczyną problemu?',
            answers: [
              'Przełącznik',
              'Router',
              'Karta sieciowa serwera',
              'Kabel między routerem a serwerem WWW'
            ],
            correctAnswer: 0,
            img: 'e13/63.jpg'
          },
          {
            question:
              ' W systemach Windows w celu ustalenia, gdzie w sieci zatrzymał się pakiet używa się komendy',
            answers: ['tracert', 'ping', 'ipconfig', 'nslookup'],
            correctAnswer: 0
          },
          {
            question:
              ' Co nie powinno być miejscem przechowywania kopii bezpieczeństwa danych znajdujących się na dysku twardym komputera?',
            answers: [
              'Inna partycja dysku tego komputera',
              'Pamięć USB',
              'Płyta CD/DVD',
              'Dysk zewnętrzny'
            ],
            correctAnswer: 0
          },
          {
            question: ' Którą fizyczną topologię sieci przedstawia rysunek?',
            answers: [
              'Gwiazdy',
              'Magistrali',
              'Pełnej siatki',
              'Podwójnego pierścienia'
            ],
            correctAnswer: 0,
            img: 'e13/64.jpg'
          },
          {
            question: ' Która norma dotyczy okablowania strukturalnego?',
            answers: [
              'EIA/TIA 568A',
              'ZN-96/TP',
              'BN-76/8984-09',
              'TDC-061-0506-S'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Maksymalna długość kabla miedzianego UTP kategorii 5e łączącego bezpośrednio dwa urządzenia sieciowe, zgodnie z standardem Fast Ethernet 100Base-TX, wynosi',
            answers: ['100 m', '150 m', '300 m', '1000 m'],
            correctAnswer: 0
          },
          {
            question: ' Który z protokołów jest protokołem połączeniowym?',
            answers: ['TCP', 'IP', 'ARP', 'UDP'],
            correctAnswer: 0
          },
          {
            question:
              ' Który z protokołów jest używany do wymiany informacji o trasach oraz dostępności sieci pomiędzy ruterami należącymi do tego samego systemu autonomicznego?',
            answers: ['RIP', 'TCP', 'HTTP', 'RARP'],
            correctAnswer: 0
          },
          {
            question:
              ' ARP (Adress Resolution Protocol) jest protokołem realizującym odwzorowanie adresu IP na',
            answers: [
              'adres sprzętowy',
              'adres IPv6',
              'nazwę komputera',
              'nazwę domenową'
            ],
            correctAnswer: 0
          },
          {
            question: ' Które urządzenie przedstawia rysunek?',
            answers: [
              'Punkt dostępowy',
              'Przełącznik',
              'Koncentrator',
              'Most sieciowy'
            ],
            correctAnswer: 0,
            img: 'e13/65.jpg'
          },
          {
            question:
              ' Które urządzenie należy wybrać do pomiarów mapy połączeń okablowania strukturalnego sieci lokalnej?',
            answers: [
              'Analizator sieci LAN',
              'Monitor sieciowy',
              'Reflektometr OTDR',
              'Analizator protokołów'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Które urządzenie należy zastosować w sieci Ethernet, aby ograniczyć liczbę kolizji pakietów?',
            answers: [
              'Przełącznik',
              'Regenerator',
              'Koncentrator',
              'Bramkę VoIP'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Metoda dostępu do medium transmisyjnego z wykrywaniem kolizji w sieciach LAN jest',
            answers: ['CSMA/CD', 'WINS', 'IPX/SPX', 'NetBEUI'],
            correctAnswer: 0
          },
          {
            question: ' Okablowanie pionowe w sieci strukturalnej łączy się',
            answers: [
              'w głównym punkcie rozdzielczym w pośrednimi punktami rozdzielczymi',
              'w gnieździe abonenckim',
              'w głównym punkcie rozdzielczym z gniazdem abonenckim',
              'w pośrednim punkcie rozdzielczym z gniazdem abonenckim'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Które polecenie systemu operacyjnego Linux pozwala sprawdzić aktualną konfigurację interfejsu sieciowego komputera?',
            answers: ['ifconfig', 'ping', 'tracert', 'ipconfig'],
            correctAnswer: 0
          },
          {
            question:
              ' Do wykonania sieci komputerowej w pomieszczeniu wykorzystano 25 metrów skrętki UTP, 5 gniazd typu RJ45 oraz odpowiednią liczbę wtyków RJ45 niezbędnych do zarobienia 5 kabli połączeniowych typu patchcord. Jaki jest koszt wykorzystanych materiałów do wykonania sieci? Ceny jednostkowe wykorzystanych materiałów są podane w tabeli.',
            answers: ['80 zł', '50 zł', '75 zł', '90 zł'],
            correctAnswer: 0,
            img: 'e13/66.jpg'
          },
          {
            question:
              ' Jaka jest maksymalna prędkość transmisji danych w sieci przy zastosowaniu skrętki kategorii 5e?',
            answers: ['1 Gb/s', '10 Gb/s', '10 Mb/s', '100 Mb/s'],
            correctAnswer: 0
          },
          {
            question:
              ' Jaka jest kolejność przewodów we wtyku RJ45 zgodnie z sekwencją połączeń T568A?',
            answers: ['D', 'A', 'B', 'C'],
            correctAnswer: 0,
            img: 'e13/67.jpg'
          },
          {
            question:
              ' Ile par przewodów w standardzie 100Base-TX jest przeznaczonych do transmisji danych w obu kierunkach?',
            answers: ['2 pary', '1 para', '3 pary', '4 pary'],
            correctAnswer: 0
          },
          {
            question:
              ' Adresem rozgłoszeniowym sieci, w której pracuje host o adresie IP 195.120.252.32 i masce podsieci 255.255.255.192 jest',
            answers: [
              '195.120.252.63',
              '195.120.252.0',
              '195.120.252.255',
              '195.120.255.255'
            ],
            correctAnswer: 0
          },
          {
            question: ' Który zapis jest prawidłowym adresem IPv6?',
            answers: [
              '2001:DB8::BAF:FE94',
              '2001:DB8::BAF::FE94',
              '2001-DB8-BAF-FE94',
              '2001.DB8.BAF.FE94'
            ],
            correctAnswer: 0
          },
          {
            question: ' Który zapis jest postacią pełną maski o prefiksie 25?',
            answers: [
              '255.255.255.128',
              '255.255.0.0',
              '255.255.255.0',
              '255.255.200.192'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Jaka jest maksymalna liczba hostów, które można zaadresować w sieci o masce 255.255.255.192?',
            answers: ['62', '14', '30', '127'],
            correctAnswer: 0
          },
          {
            question:
              ' Administrator musi podzielić sieć o adresie 193.115.95.0 z maską 255.255.255.0 na 8 podsieci o takiej samej liczbie adresów. Którą maskę sieci powinien zastosować administrator?',
            answers: [
              '255.255.255.224',
              '255.255.255.192',
              '255.255.255.240',
              '255.255.255.248'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Który przyrząd jest stosowany do pomiarów długości i tłumienności przewodów miedzianych?',
            answers: [
              'Reflektometr TDR',
              'Omomierz',
              'Woltomierz',
              'Miernik mocy'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Rysunek poniżej przedstawia konfigurację zapory ogniowej w ruterze TL-WR340G. Jakie zasady konfiguracji zapory ustawiono?',
            answers: [
              'Zapora jest włączona, włączone jest filtrowanie adresów IP, reguła filtrowania adresów IP jest ustawiona na opcję "zezwalaj pakietom nieokreślonym jakimikolwiek regułami filtrowania przejść przez urządzenie", filtrowanie domen wyłączone',
              'Zapora jest wyłączona, wyłączone jest filtrowanie adresów IP i domen, reguła filtrowania adresów IP jest ustawiona na opcję "zezwalaj pakietom nieokreślonym jakimikolwiek regułami filtrowania przejść przez urządzenie", filtrowanie domen włączone',
              'Zapora jest włączona, wyłączone jest filtrowanie adresów IP, reguła filtrowania adresów IP jest ustawiona na opcję "odmów pakietom nieokreślonym jakimikolwiek regułami filtrowania przejść przez urządzenie", filtrowanie domen włączone',
              'Zapora jest włączona, włączone jest filtrowanie adresów IP, reguła filtrowania adresów IP jest ustawiona na opcję "odmów pakietom nieokreślonym jakimikolwiek regułami filtrowania przejść przez urządzenie", filtrowanie domen wyłączone'
            ],
            correctAnswer: 0,
            img: 'e13/68.jpg'
          },
          {
            question:
              ' Urządzenia standardu 802.11g mogą pracować z maksymalną prędkością przesyłania danych do',
            answers: ['54 Mb/s', '11 Mb/s', '108 Mb/s', '150 Mb/s'],
            correctAnswer: 0
          },
          {
            question:
              ' Który z wymienionych mechanizmów zapewni najwyższy poziom bezpieczeństwa sieci bezprzewodowych standardu 802.11n?',
            answers: [
              'WPA2 (Wi-Fi Protected Access II)',
              'WPS (Wi-Fi Protected Setup)',
              'WEP (Wired Equivalent Privacy)',
              'WPA (Wi-Fi Protected Access)'
            ],
            correctAnswer: 0
          },
          {
            question: ' Co można zaobserwować przy pomocy programu Wireshark?',
            answers: [
              'Ruch pakietów sieciowych',
              'Zwarcie przewodów',
              'Przerwy w okablowaniu',
              'Połączenia par przewodów'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Administrator sieci komputerowej chce sprawdzić na komputerze z systemem operacyjnym Windows, które połączenia są obecnie zestawiane oraz porty, na których komputer nasłuchuje. W tym celu powinien zastosować polecenie',
            answers: ['netstat', 'arp', 'ping', 'tracert'],
            correctAnswer: 0
          },
          {
            question:
              ' Którym poleceniem systemu Linux poprawnie skonfigurowano kartę sieciową, podając adres IP i maskę sieci dla interfejsu eth1?',
            answers: [
              'ifconfig eth1 192.168.1.1 netmask 255.255.255.0',
              'ifconfig eth1 192.168.1.0 netmask 255.255.255.0',
              'ifconfig eth1 192.168.1.0 netmask 0.255.255.255',
              'ifconfig eth1 192.168.1.255 netmask 255.255.255.0'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Które polecenie rodziny systemów Windows należy zastosować, aby skonfigurować statyczny adres IP w wierszu poleceń?',
            answers: ['netsh', 'telnet', 'tracert', 'net use'],
            correctAnswer: 0
          },
          {
            question:
              ' Który protokół jest stosowany do pobierania wiadomości e-mail z serwera poczty na komputer użytkownika',
            answers: ['POP3', 'FTP', 'SMTP', 'HTTP'],
            correctAnswer: 0
          },
          {
            question:
              ' Która usługa, stworzona przez firmę Microsoft, umożliwia tłumaczenie nazw komputerów na adresy internetowe?',
            answers: ['WINS', 'ARP', 'DHCP', 'IMAP'],
            correctAnswer: 0
          },
          {
            question: ' Protokół DNS odpowiada za',
            answers: [
              'Odwzorowanie nazw domenowych na adresy IP',
              'Odwzorowanie adresów fizycznych MAC na adresy IP',
              'Statyczne przydzielanie adresacji urządzeniom sieciowym',
              'Automatyczne przydzielanie adresacji urządzeniom sieciowym'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Protokołem połączeniowym warstwy transportowej modelu ISO/OSI jest',
            answers: ['TCP', 'UDP', 'ICMP', 'SMTP'],
            correctAnswer: 0
          },
          {
            question:
              ' Który z profili użytkownika ulega zmianie i jest przechowywany na serwerze dla klienta pracującego w sieci Windows?',
            answers: ['Mobilny', 'Lokalny', 'Tymczasowy', 'Obowiązkowy'],
            correctAnswer: 0
          },
          {
            question:
              ' Który protokół jest protokołem warstwy aplikacji modelu ISO/OSI?',
            answers: ['FTP', 'TCP', 'ARP', 'ICMP'],
            correctAnswer: 0
          },
          {
            question:
              ' Które polecenie systemu operacyjnego Linux jest stosowane do śledzenia komunikacji pakietów TCP/IP lub protokołów transmitowanych lub odbieranych w sieci komputerowej, do komputerowej do której podłączony jest komputer użytkownika?',
            answers: ['tcpdump', 'ssh', 'route', 'ipconfig'],
            correctAnswer: 0
          },
          {
            question:
              ' Aby zainstalować serwer proxy w systemie Linux, należy zainstalować program',
            answers: ['Squid', 'Samba', 'Postfix', 'Webmin'],
            correctAnswer: 0
          },
          {
            question:
              ' Do zdalnego zarządzania stacjami roboczymi nie jest stosowany',
            answers: [
              'program Wireshark',
              'pulpit zdalny',
              'program Ultra VNC',
              'program TeamViewer'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Atak typu hijacking na serwer sieciowy charakteryzuje się',
            answers: [
              'przejęciem kontroli nad połączeniem między komunikującymi się komputerami',
              'przeciążeniem aplikacji udostępniającej określone dane',
              'łamaniem zabezpieczeń przed niedozwolonym użytkowaniem programów',
              'zbieraniem informacji na temat atakowanej sieci i szukaniem luk w sieci'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Co służy do zabezpieczenia komputera przed niepożądanym oprogramowaniem pochodzącym z Internetu?',
            answers: [
              'Program antywirusowy',
              'Protokół SSL',
              'Program sniffer',
              'Protokół HTTPS'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' W której topologii fizycznej sieci każde urządzenie sieciowe ma dokładnie dwa połączenia, po jednym dla swoich najbliższych sąsiadów, a dane są przesyłane od jednego komputera do następnego w pętli?',
            answers: ['Pierścienia', 'Siatki', 'Drzewa', 'Gwiazdy'],
            correctAnswer: 0
          },
          {
            question:
              ' Która topologia fizyczna zapewnia połączenia nadmiarowe pomiędzy urządzeniami sieci?',
            answers: ['Siatki', 'Gwiazdy', 'Magistrali', 'Pierścienia'],
            correctAnswer: 0
          },
          {
            question: ' Norma PN-EN 50174 nie zawiera wytycznych dotyczących',
            answers: [
              'uziemień instalacji urządzeń przetwarzania danych',
              'zapewnienia jakości instalacji okablowania',
              'wykonania instalacji wewnątrz budynków',
              'wykonania instalacji na zewnątrz budynków'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Który z protokołów jest bezpołączeniowym protokołem warstwy transportowej?',
            answers: ['UDP', 'FTP', 'ARP', 'TCP'],
            correctAnswer: 0
          },
          {
            question: ' IMAP jest protokołem',
            answers: [
              'odbioru poczty elektronicznej',
              'wysyłania poczty elektronicznej',
              'synchronizacji czasu z serwerami',
              'monitorowania urządzeń sieciowych'
            ],
            correctAnswer: 0
          },
          {
            question: ' Którego zadania NIE realizują serwery plików?',
            answers: [
              'Zarządzania bazami danych',
              'Udostępniania plików w Internecie',
              'Odczytu i zapisu danych na dyskach twardych',
              'Wymiany danych pomiędzy użytkownikami sieci'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Kabel typu skrętka, posiadający każdą parę przewodów w osobnym ekranie z folii, przy czym wszystkie przewody znajdują się w ekranie z folii, jest oznaczony symbolem',
            answers: ['F/FTP', 'S/UTP', 'F/UTP', 'S/FTP'],
            correctAnswer: 0
          },
          {
            question:
              ' W modelu hierarchicznym sieci, komputery użytkowników są elementami warstwy',
            answers: ['dostępu', 'rdzenia', 'dystrybucji', 'szkieletowej'],
            correctAnswer: 0
          },
          {
            question:
              ' Prawidłowo zaprojektowana sieć komputerowa powinna umożliwiać rozbudowę, czyli charakteryzować się',
            answers: [
              'skalowalnością',
              'redundancją',
              'wydajnością',
              'nadmiarowością'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Aby umożliwić wymianę danych pomiędzy siecią w pracowni, a siecią ogólnoszkolną o innej adresacji IP, należy wykorzystać',
            answers: [
              'ruter',
              'przełącznik',
              'koncentrator',
              'punkt dostępowy'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Jaki będzie koszt zakupu kabla UTP kat.5e przeznaczonego do budowy sieci komputerowej złożonej z 6 stanowisk komputerowych, w której średnia odległość stanowiska od przełącznika wynosi 9 m? Dla każdej linii kablowej należy uwzględnić 1 m zapasu kabla, a cena 1 metra kabla wynosi 1,50 zł.',
            answers: ['90,00 zł', '60,00 zł', '120,00 zł', '150,00 zł'],
            correctAnswer: 0
          },
          {
            question:
              ' Przy budowie sieci przewodowej o maksymalnej szybkości transmisji 1 Gb/s, w której maksymalna odległość pomiędzy punktami sieci nie przekracza 100m, należy wykorzystać jako medium transmisyjne',
            answers: [
              'kabel UTP kategorii 5e',
              'fale radiowe o częstotliwości 5 GHz',
              'fale radiowe o częstotliwości 2,4 GHz',
              'kabel koncentryczny o średnicy 1/4 cala'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Które medium transmisyjne sieci LAN zaleca się do zastosowania w zabytkowych budynkach?',
            answers: [
              'Fale radiowe',
              'Światłowód',
              'Kabel typu skrętka',
              'Kabel koncentryczny'
            ],
            correctAnswer: 0
          },
          {
            question: ' Do zakończenia skrętki wtykiem 8P8C jest stosowane',
            answers: [
              'zaciskarka wtyków RJ-45',
              'narzędzie uderzeniowe',
              'spawarka światłowodowa',
              'zaciskarka do złączy typu F'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Zestaw narzędzi do montażu okablowania miedzianego typu "skrętka" w sieci lokalnej powinien zawierać',
            answers: [
              'zaciskarkę złączy modularnych, ściągacz izolacji, narzędzie uderzeniowe, tester okablowania',
              'komplet wkrętaków, narzędzie uderzeniowe, tester okablowania, lutownicę',
              'narzędzie uderzeniowe, nóż monterski, spawarkę światłowodową, tester okablowania',
              'ściągacz izolacji, zaciskarkę złączy modularnych, nóż monterski, miernik uniwersalny'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Przedstawiony na rysunku wtyk (złącze męskie modularne) jest zakończeniem kabla',
            answers: ['F/UTP', 'światłowodowego', 'koncentrycznego', 'U/UTP'],
            correctAnswer: 0,
            img: 'e13/69.jpg'
          },
          {
            question:
              ' Parametrem określającym o ile zmniejszy się moc sygnału w danej parze przewodów po przejściu przez cały tor kablowy, jest',
            answers: [
              'tłumienie',
              'długość',
              'przenik zdalny',
              'przenik zbliżny'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Który błąd okablowania jest widoczny na wyświetlaczu testera pokazującego mapę połączeń żył kabla typu skrętka?',
            answers: [
              'Rozwarcie',
              'Zwarcie',
              'Pary odwrócone',
              'Pary skrzyżowane'
            ],
            correctAnswer: 0,
            img: 'e13/70.jpg'
          },
          {
            question: ' Wskaż domyślną maskę dla adresu IP klasy B',
            answers: [
              '255.255.0.0',
              '255.255.255.255',
              '255.255.255.0',
              '255.0.0.0'
            ],
            correctAnswer: 0
          },
          {
            question: ' Który z podanych adresów jest adresem klasy C?',
            answers: [
              '196.74.6.29',
              '125.9.3.234',
              '154.0.12.50',
              '176.18.5.26'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Do ilu sieci należą komputery o podanych w tabeli adresach IP i standardowej masce sieci?',
            answers: ['Czterech', 'Jednej', 'Dwóch', 'Sześciu'],
            correctAnswer: 0,
            img: 'e13/71.jpg'
          },
          {
            question:
              ' Ile maksymalnie komputerów może być zaadresowanych w podsieci o adresie 192.168.1.0/25?',
            answers: ['126', '62', '254', '510'],
            correctAnswer: 0
          },
          {
            question:
              ' Polecenie systemu Windows stosowane do sprawdzenia trasy, po której są przesyłane pakiety w sieci, to',
            answers: ['tracert', 'route', 'netstat', 'ipconfig'],
            correctAnswer: 0
          },
          {
            question:
              ' Które urządzenie należy zainstalować w serwerze, by można było automatycznie archiwizować dane na taśmach magnetycznych?',
            answers: ['Streamer', 'Blue Ray', 'Dysk SSD', 'Napęd DVD'],
            correctAnswer: 0
          },
          {
            question:
              ' Którą z opcji menu przełącznika należy wybrać, by przywrócić mu ustawienia fabryczne?',
            answers: [
              'Reset System',
              'Reboot Device',
              'Firmware Upgrade',
              'Save Configuration'
            ],
            correctAnswer: 0,
            img: 'e13/72.jpg'
          },
          {
            question:
              ' Zarządzanie pasmem (ang. bandwidth control) w przełączniku to usługa',
            answers: [
              'pozwalająca ograniczyć przepustowość na wybranym porcie',
              'umożliwiająca zdalny dostęp do urządzenia',
              'umożliwiająca łączenie przełączników równocześnie kilkoma łączami',
              'pozwalająca na przesyłanie danych z wybranego portu równocześnie do innego portu'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Przynależność komputera do konkretnej sieci wirtualnej NIE może być określona na podstawie',
            answers: [
              'nazwy komputera w sieci lokalnej',
              'numer portu przełącznika',
              'znacznika ramki Ethernet 802.1Q',
              'adresu MAC karty sieciowej komputera'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Które porty należy odblokować w zaporze sieciowej komputera, aby można było korzystać z zainstalowanej usługi FTP?',
            answers: ['20 i 21', '25 i 110', '53 i 137', '80 i 443'],
            correctAnswer: 0
          },
          {
            question:
              ' Aby sygnały dwóch routerów w sieci WiFi standardu 802.11g nie zakłócały się wzajemnie, należy ustawić kanały o numerach',
            answers: ['2 i 7', '1 i 5', '3 i 6', '5 i 7'],
            correctAnswer: 0
          },
          {
            question:
              ' Które cyfry należy wprowadzić na klawiaturze telefonu podłączonego do bramki VoIP po uprzednim wpisaniu *** by wprowadzić adres bramy domyślnej sieci?',
            answers: ['04', '01', '02', '03'],
            correctAnswer: 0,
            img: 'e13/73.jpg'
          },
          {
            question:
              ' Zalecana wielkość pamięci RAM dla systemu operacyjnego Windows Server 2008 to co najmniej',
            answers: ['2 GB', '512 MB', '1 GB', '1,5 GB'],
            correctAnswer: 0
          },
          {
            question:
              ' W jaki sposób skonfigurować w systemie Windows Server 2008 ustawienia protokołu TCP/IP karty sieciowej, by komputer należał równocześnie do dwóch sieci lokalnych o różnych adresach IP?',
            answers: [
              'Wpisać dwa adresy IP, korzystając z zakładki "Zaawansowane"',
              'Wpisać dwa adresy serwerów DNS',
              'Zaznaczyć opcję "Uzyskaj adres IP automatycznie".',
              'Wpisać dwa adresy bramy, korzystając z zakładki "Zaawansowane"'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Którą usługę należy zainstalować na serwerze, by było możliwe korzystanie z nazw domenowych?',
            answers: ['DNS', 'AD', 'SNTP', 'DHCP'],
            correctAnswer: 0
          },
          {
            question:
              ' Do której grupy w systemie Windows Server 2008 należy przydzielić użytkownika odpowiedzialnego tylko za archiwizowanie danych przechowywanych na dysku serwera?',
            answers: [
              'Operatorzy kopii zapasowych',
              'Użytkownicy domeny',
              'Użytkownicy zaawansowani',
              'Użytkownicy pulpitu zdalnego'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Które polecenie systemu Windows Server 2008 umożliwia promowanie serwera do roli kontrolera domeny?',
            answers: ['dcpromo', 'gpedit', 'gpresult', 'nslookup'],
            correctAnswer: 0
          },
          {
            question: ' Zadaniem programu Wireshark jest',
            answers: [
              'monitorowanie działania użytkowników sieci',
              'zabezpieczenie komputera przed wirusami',
              'sprawdzanie wydajności elementów komputera',
              'zapobieganie dostępowi do komputera przez sieć'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Administrator chce udostępnić w sieci trzem użytkownikom należącym do grupy Serwisanci tylko folder C:\\instrukcje. Które z rozwiązań powinien zastosować?',
            answers: [
              'Udostępnić grupie Serwisanci folder C:\\instrukcje i nie ograniczać liczby równoczesnych połączeń',
              'Udostępnić grupie Wszyscy dysk C:\\ i ograniczyć liczbę równoczesnych połączeń do 3',
              'Udostępnić grupie Serwisanci dysk C:\\ i nie ograniczać liczby równoczesnych połączeń',
              'Udostępnić grupie Wszyscy folder C:\\instrukcje i ograniczyć liczbę równoczesnych połączeń do 3'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' W technologii Ethernet protokół dostępu do nośnika CSMA/CD jest metodą z',
            answers: [
              'wykrywaniem kolizji',
              'unikaniem kolizji',
              'priorytetami żądań',
              'przekazywaniem żetonu'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Które porty należy odblokować w ustawieniach zapory sieciowej na komputerze z zainstalowaną usługą serwera sieci Web?',
            answers: ['80 i 443', '20 i 21', '20 i 1024', '80 i 1024'],
            correctAnswer: 0
          },
          {
            question:
              ' Do którego portu należy podłączyć kabel sieci zewnętrznej, by uzyskać pośredni dostęp do Internetu?',
            answers: ['WAN', 'USB', 'LAN', 'PWR'],
            correctAnswer: 0,
            img: 'e13/74.jpg'
          },
          {
            question:
              ' Która z topologii fizycznych sieci komputerowej jest przedstawiona na rysunku?',
            answers: [
              'Podwójnego pierścienia',
              'Siatki',
              'Magistrali',
              'Gwiazdy rozszerzonej'
            ],
            correctAnswer: 0,
            img: 'e13/75.jpg'
          },
          {
            question:
              ' Ile par przewodów skrętki miedzianej kategorii 5e wykorzystuje się do przesyłu danych w standardzie sieci Ethernet 100Base-TX?',
            answers: ['2', '1', '3', '4'],
            correctAnswer: 0
          },
          {
            question: ' Adresem IPv6 autokonfiguracji łącza jest:',
            answers: ['FE80::/10', '2000::/3', 'FF00::/8', '::/128'],
            correctAnswer: 0
          },
          {
            question: ' Który z protokołów wykorzystuje porty 20 i 21?',
            answers: ['FTP', 'DHCP', 'WWW', 'Telnet'],
            correctAnswer: 0
          },
          {
            question:
              ' Które protokoły są protokołami warstwy transportowej modelu ISO/OSI?',
            answers: ['TCP, UDP', 'ICMP, IP', 'FTP, POP', 'ARP, DNS'],
            correctAnswer: 0
          },
          {
            question: ' Ile bitów ma adres logiczny IPv6?',
            answers: ['128', '16', '32', '64'],
            correctAnswer: 0
          },
          {
            question: ' Rysunek przedstawia',
            answers: ['panel krosowy', 'ruter', 'przełącznik', 'koncentrator'],
            correctAnswer: 0,
            img: 'e13/76.jpg'
          },
          {
            question:
              ' Jak jest nazywana transmisja dwukierunkowa w sieci Ethernet?',
            answers: ['Full duplex', 'Simplex', 'Duosimplex', 'Half duplex'],
            correctAnswer: 0
          },
          {
            question:
              ' Ile adresów IP jest potrzebnych do zaadresowania 4 komputerów podłączonych do przełącznika tak, aby mogły się komunikować ze sobą?',
            answers: ['4', '2', '3', '5'],
            correctAnswer: 0
          },
          {
            question:
              ' Urządzeniem stosowanym do połączenia 6 komputerów w sieć lokalną jest:',
            answers: ['przełącznik', 'most', 'serwer', 'transceiver'],
            correctAnswer: 0
          },
          {
            question:
              ' Do którego urządzenia należy podłączyć komputery, aby pracowały w różnych domenach rozgłoszeniowych?',
            answers: ['Rutera', 'Mostu', 'Regeneratora', 'Koncentratora'],
            correctAnswer: 0
          },
          {
            question:
              ' Centralny punkt, z którego rozprowadzane jest okablowanie szkieletowe, to punkt',
            answers: ['dystrybucyjny', 'pośredni', 'abonencki', 'dostępowy'],
            correctAnswer: 0
          },
          {
            question:
              ' Oblicz koszt wykonania okablowania strukturalnego od 5 punktów abonenckich do panelu krosowego wraz z wykonaniem kabli połączeniowych dla stacji roboczych. W tym celu wykorzystano 50 m skrętki UTP. Punkt abonencki składa się z 2 gniazd typu RJ45.',
            answers: ['255,00 zł', '152,00 zł', '345,00 zł', '350,00 zł'],
            correctAnswer: 0,
            img: 'e13/77.jpg'
          },
          {
            question:
              ' Ile maksymalnie urządzeń można zaadresować w sieci o adresacji IPv4 klasy C?',
            answers: ['254', '126', '2024', '65534'],
            correctAnswer: 0
          },
          {
            question:
              ' W firmie został zastosowany adres klasy B do podziału na 100 podsieci. Każda z podsieci ma dostępnych maksymalnie 510 adresów IP. Która maska została zastosowana do wyznaczenia podsieci?',
            answers: [
              '255.255.254.0',
              '255.255.224.0',
              '255.255.240.0',
              '255.255.248.0'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Który adres IPv4 określa urządzenie pracujące w sieci o adresie 14.36.64.0/20?',
            answers: ['14.36.65.1', '14.36.17.1', '14.36.48.1', '14.36.80.1'],
            correctAnswer: 0
          },
          {
            question:
              ' Który z adresów IPv4 wraz z prefiksem jest adresem sieci?',
            answers: [
              '64.77.199.192/26',
              '46.18.10.19/30',
              '208.99.255.134/28',
              '127.100.100.67/27'
            ],
            correctAnswer: 0
          },
          {
            question: ' Odpowiednikiem maski 255.255.252.0 jest prefiks',
            answers: ['/22', '/23', '/24', '/25'],
            correctAnswer: 0
          },
          {
            question:
              ' Zmniejszenie liczby jedynek w masce umożliwi zaadresowanie',
            answers: [
              'mniejszej liczby sieci i większej liczby urządzeń',
              'większej liczby sieci i większej liczby urządzeń',
              'większej liczby sieci i mniejszej liczby urządzeń',
              'mniejszej liczby sieci i mniejszej liczby urządzeń'
            ],
            correctAnswer: 0
          },
          {
            question: ' Na rysunku jest przedstawiona konfiguracja',
            answers: [
              'wirtualnych sieci',
              'sieci bezprzewodowej',
              'przekierowania portów',
              'rezerwacji adresów MAC'
            ],
            correctAnswer: 0,
            img: 'e13/78.jpg'
          },
          {
            question: ' Które określenie dotyczące ruterów jest prawdziwe?',
            answers: [
              'Podejmują decyzje przesyłania danych na podstawie adresów IP',
              'Pracują w warstwie łącza danych',
              'Pracują w warstwie transportowej',
              'Podejmują decyzje przesyłania danych na podstawie adresów MAC'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Jak skonfigurować zaporę Windows, zachowując zasady bezpieczeństwa, aby za pomocą polecenia ping było możliwe sprawdzenie poprawności komunikacji z innymi urządzeniami pracującymi w sieci?',
            answers: [
              'Skonfigurować reguły dotyczące protokołu ICMP',
              'Skonfigurować reguły dotyczące protokołu IP',
              'Skonfigurować reguły dotyczące protokołu TCP',
              'Skonfigurować reguły dotyczące protokołu IGMP'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Które kanały najlepiej wybrać dla trzech sieci WLAN 2,4 GHz, aby wyeliminować ich wzajemne zakłócenia?',
            answers: ['1, 6, 11', '2, 5, 7', '1, 3, 12', '3, 6, 12'],
            correctAnswer: 0
          },
          {
            question:
              ' Informacje przedstawione na rysunku są wynikiem działania polecenia',
            answers: ['tracert', 'ping', 'ipconfig', 'nslookup'],
            correctAnswer: 0,
            img: 'e13/79.jpg'
          },
          {
            question:
              ' Które polecenie należy wydać w systemie Windows, aby sprawdzić tabelę translacji adresów IP na adresy fizyczne używane przez protokół rozróżniania adresów?',
            answers: ['arp -a', 'ipconfig', 'netstat -r', 'route print'],
            correctAnswer: 0
          },
          {
            question:
              ' Na rysunku jest przedstawiony fragment procesu komunikacji z serwerem przechwyconej przez program Wireshark. Który to serwer?',
            answers: ['DHCP', 'FTP', 'DNS', 'WWW'],
            correctAnswer: 0,
            img: 'e13/80.jpg'
          },
          {
            question:
              ' Usługa, która pozwala na pobieranie i przesyłanie plików na serwer, to',
            answers: ['FTP', 'DNS', 'ICMP', 'CP'],
            correctAnswer: 0
          },
          {
            question:
              ' Udostępnianie linuksowych usług drukowania oraz serwera plików stacjom roboczym Windows, OS X, Linux umożliwia serwer',
            answers: ['SAMBA', 'SQUID', 'APACHE', 'POSTFIX'],
            correctAnswer: 0
          },
          {
            question:
              ' Jak nazywa się w systemie Windows profil użytkownika tworzony podczas pierwszego logowania do komputera i przechowywany na lokalnym dysku twardym komputera, a każda jego zmiana dotyczy jedynie komputera, na którym została wprowadzona?',
            answers: ['Lokalny', 'Mobilny', 'Tymczasowy', 'Obowiązkowy'],
            correctAnswer: 0
          },
          {
            question:
              ' Domyślnie anonimowy dostęp do zasobów serwera FTP umożliwia',
            answers: [
              'tylko prawo do odczytu',
              'pełne prawa dostępu',
              'tylko prawo do zapisu',
              'prawa do odczytu i zapisu'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Serwer Windows z zainstalowaną usługą Active Directory nazywa się',
            answers: [
              'kontrolerem domeny',
              'serwerem DHCP',
              'serwerem WWW',
              'serwerem plików'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Usługa, za pomocą której można pracować zdalnie na komputerze z systemem Windows z innego komputera z systemem Windows podłączonego do tej samej sieci lub do Internetu, to',
            answers: ['pulpit zdalny', 'FTP', 'DHCP', 'serwer plików'],
            correctAnswer: 0
          },
          {
            question:
              ' Który protokół warstwy aplikacji jest stosowany do zarządzania urządzeniami sieciowymi za pośrednictwem sieci?',
            answers: ['SNMP', 'FTP', 'NTP', 'MIME'],
            correctAnswer: 0
          },
          {
            question:
              ' Który protokół służy do szyfrowanego terminalowego łączenia się ze zdalnym komputerem?',
            answers: ['SSH', 'SIP', 'SSL', 'Telnet'],
            correctAnswer: 0
          },
          {
            question:
              ' W której warstwie modelu ISO/OSI są stosowane adresy logiczne?',
            answers: [
              'Sieciowej',
              'Fizycznej',
              'Transportowej',
              'Łącza danych'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Ramka z danymi wysłanymi z komputera PC1 do serwera www znajduje się pomiędzy ruterem R1 a ruterem R2 (punkt A). Które adresy są w niej zawarte?',
            answers: [
              'Źródłowy adres IP komputera PC1, docelowy adres IP serwera, adres źródłowy MAC rutera R1, adres docelowy MAC rutera R2',
              'Źródłowy adres IP komputera PC1, docelowy adres IP serwera, adres źródłowy MAC komputera PC1, adres docelowy MAC serwera',
              'Źródłowy adres IP rutera R1, docelowy adres IP rutera R2, adres źródłowy MAC komputera PC1, adres docelowy MAC serwera',
              'Źródłowy adres IP komputera PC1, docelowy adres rutera R2, adres źródłowy MAC komputera PC1, adres docelowy MAC serwera'
            ],
            correctAnswer: 0,
            img: 'e13/81.jpg'
          },
          {
            question:
              ' Która usługa pozwala rejestrować i rozpoznawać nazwy NetBIOS jako używane w sieci adresy IP?',
            answers: ['WINS', 'WAS', 'DHCP', 'HTTPS'],
            correctAnswer: 0
          },
          {
            question:
              ' Ataki mające na celu zatrzymanie działania aplikacji i procesów zachodzących w urządzeniu sieciowym to ataki typu',
            answers: ['DoS', 'smurf', 'zero-day', 'spoofing'],
            correctAnswer: 0
          },
          {
            question:
              ' Który zapis jest oznaczeniem adresu strony internetowej i przypisanego go niej portu?',
            answers: [
              '100.168.0.1:8080',
              '100.168.0.1:AH1',
              '100.168.0.1-AH1',
              '100.168.0.1-8080'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Rysunek przedstawia konfigurację karty sieciowej dla urządzenia o adresie IP 10.15.89.104/25. Wynika z niego, że',
            answers: [
              'adres domyślnej bramy jest z innej podsieci niż adres hosta',
              'adres IP jest nieprawidłowy',
              'adres maski jest nieprawidłowy',
              'serwer DNS jest w tej samej podsieci co urządzenie'
            ],
            correctAnswer: 0,
            img: 'e13/82.jpg'
          },
          {
            question:
              ' Która topologia fizyczna jest stosowana w sieciach o topologii logicznej Token Ring?',
            answers: ['Pierścienia', 'Siatki', 'Gwiazdy', 'Magistrali'],
            correctAnswer: 0
          },
          {
            question:
              ' Międzynarodowa Organizacja Normalizacyjna, która opracowała 7-warstwowy Model Referencyjny Połączonych Systemów otwartych, to',
            answers: [
              'ISO (International Organization for Standardization)',
              'EN (European Norm)',
              'IEEE (Institute of Electrical and Electronics Engineers)',
              'TIA/EIA (Telecommunications Industry Association / Electronic Industries Association)'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Protokołem wykorzystywanym przy rozgłaszaniu grupowym, za pomocą którego hosty zgłaszają swoje członkostwo, jest',
            answers: ['IGMP', 'IGRP', 'ICMP', 'EIGRP'],
            correctAnswer: 0
          },
          {
            question:
              ' Który z wymienionych protokołów odwzorowuje 48-bitowy fizyczny adres MAC na 32-bitowy adres IP?',
            answers: ['RARP', 'IP', 'TCP', 'ARP'],
            correctAnswer: 0
          },
          {
            question:
              ' Który protokół jest wykorzystywany tylko w sieciach lokalnych, w których pracują komputery z systemami operacyjnymi firmy Microsoft?',
            answers: ['NetBEUI', 'TCP/IP', 'IPX/SPX', 'AppleTalk'],
            correctAnswer: 0
          },
          {
            question:
              ' Do połączenia lokalnej sieci bezprzewodowej z siecią przewodową jest stosowany',
            answers: ['punkt dostępu', 'modem', 'przełącznik', 'koncentrator'],
            correctAnswer: 0
          },
          {
            question:
              ' Na którym rysunku został przedstawiony panel krosowniczy?',
            answers: ['B', 'A', 'C', 'D'],
            correctAnswer: 0,
            img: 'e13/83.jpg'
          },
          {
            question:
              ' Karta Sieciowa widoczna na rysunku może przesyłać dane z maksymalną prędkością',
            answers: ['54 Mb/s', '11 Mb/s', '108 Mb/s', '300 Mb/s'],
            correctAnswer: 0,
            img: 'e13/84.jpg'
          },
          {
            question:
              ' Który z wymienionych elementów jest elementem pasywnym sieci?',
            answers: [
              'Panel krosowy',
              'Przełącznik',
              'Wzmacniak',
              'Karta sieciowa'
            ],
            correctAnswer: 0
          },
          {
            question: ' Symbol graficzny przedstawiony na rysunku oznacza',
            answers: [
              'gniazdo telekomunikacyjne',
              'otwarty kanał kablowy',
              'zamknięty kanał kablowy',
              'główny punkt dystrybucyjny'
            ],
            correctAnswer: 0,
            img: 'e13/85.jpg'
          },
          {
            question:
              ' Które urządzenie umożliwia podłączenie kabla światłowodowego użytego w okablowaniu pionowym sieci z przełącznikiem posiadającym wyłącznie gniazda RJ45?',
            answers: ['Konwerter mediów', 'Ruter', 'Modem', 'Regenerator'],
            correctAnswer: 0
          },
          {
            question:
              ' Jaki będzie całkowity koszt robocizny montażu 20 modułów RJ45 ze złączem krawędziowym narzędziowym na przewodach 4-parowych, jeżeli stawka godzinowa montera wynosi 15 zł/h, a według tabeli KNR czas montażu jednego modułu to 0,10 r-g?',
            answers: ['30,00 zł', '7,50 zł', '15,00 zł', '50,00 zł'],
            correctAnswer: 0
          },
          {
            question:
              ' Kabel przedstawiony na rysunku może być wykorzystany do budowy okablowania sieci standardu',
            answers: ['100Base-SX', '10Base2', '10Base-T', '100Base-TX'],
            correctAnswer: 0,
            img: 'e13/86.jpg'
          },
          {
            question:
              ' Która z wymienionych cech kabla koncentrycznego RG-58 spowodowała, że nie jest on obecnie wykorzystywany do budowy lokalnych sieci komputerowych?',
            answers: [
              'Maksymalna prędkość transmisji danych 10Mb/s',
              'Cena narzędzi do montażu i łączenia przewodów',
              'Maksymalna odległość pomiędzy stacjami wynosząca 185 m',
              'Brak możliwości zakupu dodatkowych urządzeń sieciowych'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Którego narzędzia trzeba użyć do zarobienia końcówek kabla UTP w module keystone ze stykami typu 110?',
            answers: [
              'Narzędzia uderzeniowego',
              'Wkrętaka płaskiego',
              'Wkrętaka krzyżakowego',
              'Zaciskarki do wtyków RJ45'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Jaka jest wartość maksymalnego rozplotu kabla UTP we wtyku RJ45 zgodnie z normą PN-EN 50173?',
            answers: ['13 mm', '10 mm', '15 mm', '20 mm'],
            correctAnswer: 0
          },
          {
            question: ' Złącze SC należy zamontować na kablu',
            answers: [
              'światłowodowym',
              'koncentrycznym',
              'telefonicznym',
              'typu skrętka'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Zgodnie z normą PN-EN 50174 dopuszczalna łączna długość kabla połączeniowego pomiędzy punktem abonenckim a komputerem i kabla krosowniczego (A+C) wynosi',
            answers: ['10 m', '3 m', '5 m', '6 m'],
            correctAnswer: 0,
            img: 'e13/87.jpg'
          },
          {
            question:
              ' Zgodnie z normą PN-EN 50174 maksymalna długość przebiegu kabla poziomego kategorii 6 pomiędzy punktem abonenckim a punktem dystrybucyjnym w panelu krosowym wynosi',
            answers: ['90 m', '100 m', '110 m', '150 m'],
            correctAnswer: 0
          },
          {
            question:
              ' Który parametr okablowania strukturalnego określa stosunek mocy sygnału testowego w jednej z par do mocy sygnału wyindukowanego w sąsiedniej parze na tym samym końcu kabla?',
            answers: [
              'Przenik zbliżny',
              'Przenik zdalny',
              'Suma przeników zdalnych',
              'Suma przeników zbliżnych i zdalnych'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Kabel sieciowy zakończony wtykami RJ45 sprawdzano diodowym testerem okablowania. Na testerze diody LED zapalały się kolejno oprócz diod oznaczonych numerami 2 i 3, które zapalały się równocześnie na jednostce głównej testera, a nie zapalały się na jednostce zdalnej. Co było tego przyczyną?',
            answers: [
              'Zwarcie',
              'Pary odwrócone',
              'Pary skrzyżowane',
              'Nieciągłość kabla'
            ],
            correctAnswer: 0
          },
          {
            question: ' Który z wymienionych adresów IP należy do klasy C?',
            answers: [
              '198.26.152.10',
              '125.12.15.138',
              '129.175.11.15',
              '190.15.30.201'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Wartość najstarszych trzech bitów adresu IP w systemie binarnym wynosi 010. Jest to adres',
            answers: ['klasy A', 'klasy B', 'klasy C', 'klasy D'],
            correctAnswer: 0
          },
          {
            question:
              ' Sieć lokalna ma adres IP 192.168.0.0/25. Który adres IP jest adresem stacji roboczej należącej do tej sieci?',
            answers: [
              '192.168.0.100',
              '192.168.1.1',
              '192.168.1.25',
              '192.168.0.192'
            ],
            correctAnswer: 0
          },
          {
            question: ' Który z adresów IP jest adresem publicznym?',
            answers: [
              '172.168.0.16',
              '10.99.15.16',
              '172.18.0.16',
              '192.168.168.16'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Wynik działania którego polecenia systemu Windows przedstawia rysunek?',
            answers: ['netstat', 'tracert', 'ipconfig', 'msconfig'],
            correctAnswer: 0,
            img: 'e13/88.jpg'
          },
          {
            question:
              ' Wynikiem wykonania polecenia systemu MS Windows jest wyświetlenie',
            answers: [
              'adresu fizycznego urządzenia o podanym IP',
              'ustawień TCP/IP interfejsu sieciowego',
              'listy aktywnych połączeń sieciowych',
              'kontroli połączenia z komputerem o podanym IP'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Która funkcja przełącznika zarządzalnego umożliwia łączenie przełączników równocześnie kilkoma połączeniami fizycznymi w jedno połączenie logiczne w celu uzyskania większej przepustowości łącza?',
            answers: [
              'Agregacja łączy',
              'Zarządzanie pasmem',
              'Port mirroring',
              'Port trunk'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Przycisk umieszczony na obudowie rutera, którego opis znajduje się w ramce, jest stosowany w celu',
            answers: [
              'przywrócenia ustawień fabrycznych rutera',
              'zrestartowania rutera',
              'włączenia lub wyłączenia rutera',
              'włączenia lub wyłączenia sieci Wi-Fi'
            ],
            correctAnswer: 0,
            img: 'e13/89.jpg'
          },
          {
            question:
              ' Na których portach brama internetowa musi przepuszczać ruch, aby użytkownicy sieci lokalnej mogli pobierać pliki z serwera FTP?',
            answers: ['20 i 21', '22 i 25', '80 i 443', '110 i 995'],
            correctAnswer: 0
          },
          {
            question:
              ' W systemie Linux narzędziem, które pokazuje trasę jaką pokonują pakiety od miejsca źródła do miejsca przeznaczenia, procentowy udział strat oraz informację na temat opóźnień pakietów, jest',
            answers: ['mtr', 'ping', 'route', 'tracert'],
            correctAnswer: 0
          },
          {
            question:
              ' Który program został zastosowany w systemie Linux do szybkiego skanowania sieci?',
            answers: ['nmap', 'ttcp', 'iptraf', 'webmin'],
            correctAnswer: 0,
            img: 'e13/90.jpg'
          },
          {
            question:
              ' W którym rodzaju członkostwa w VLAN port może być członkiem wielu sieci VLAN?',
            answers: [
              'Multi-VLAN',
              'Port-Based VLAN',
              'Statycznym VLAN',
              'Dynamicznym VLAN'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Aby móc tworzyć konta użytkowników, komputerów i innych obiektów oraz przechowywać centralnie informacje o nich, należy na serwerze Windows zainstalować rolę',
            answers: [
              'usługi domenowe Active Directory',
              'Active Directory Federation Service',
              'usługi certyfikatów Active Directory',
              'usługi Domain Name System w usłudze Active Directory'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Który parametr polecenia ipconfig w systemie Windows odnawia konfigurację adresów IP?',
            answers: ['/renew', '/release', '/flushdns', '/displaydns'],
            correctAnswer: 0
          },
          {
            question:
              ' Która usługa musi być uruchomiona w sieci, aby można było na stacji roboczej automatycznie uzyskać adres IP?',
            answers: ['DHCP', 'DNS', 'WINS', 'PROXY'],
            correctAnswer: 0
          },
          {
            question:
              ' W zasadach haseł w systemie Windows Server jest włączona opcja . Z co najmniej ilu znaków musi się składać hasło użytkownika?',
            answers: ['6 znaków', '5 znaków', '10 znaków', '12 znaków'],
            correctAnswer: 0
          },
          {
            question:
              ' Protokół odpowiedzialny za przesyłanie dokumentów hipertekstowych to',
            answers: ['HTTP', 'FTP', 'POP3', 'SMTP'],
            correctAnswer: 0
          },
          {
            question:
              ' Jakiego typu rekord jest tworzony automatycznie w momencie utworzenia strefy wyszukiwania do przodu w konfiguracji serwera DNS w systemach Windows Server?',
            answers: ['NS', 'A', 'PTR', 'MX'],
            correctAnswer: 0
          },
          {
            question:
              ' Co jest przyczyną pojawienia się na ekranie komputera komunikatu, że system wykrył konflikt adresów IP?',
            answers: [
              'Inne urządzenie sieciowe ma nadany ten sam adres IP co komputer',
              'W sieci lokalnej nie działa usługa DHCP',
              'Adres IP komputera jest spoza zakresu adresów sieci lokalnej',
              'W ustawieniach protokołu TCP/IP jest błędny adres bramy domyślnej'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Która z topologii przedstawionych na rysunkach jest topologią siatki?',
            answers: ['A', 'B', 'C', 'D'],
            correctAnswer: 0,
            img: 'e13/91.jpg'
          },
          {
            question:
              ' W której topologii sieci fizycznej każdy komputer jest połączony z dokładnie dwoma sąsiednimi komputerami, bez dodatkowych urządzeń aktywnych?',
            answers: ['Pierścienia', 'Siatki', 'Gwiazdy', 'Magistrali'],
            correctAnswer: 0
          },
          {
            question:
              ' Norma TIA/EIA-568-B.2 określa specyfikację parametrów transmisyjnych',
            answers: [
              'kabli UTP',
              'kabli koncentrycznych',
              'światłowodów',
              'fal radiowych'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Która polska norma określa standardy okablowania strukturalnego?',
            answers: [
              'PN-EN 50173',
              'TSB-67',
              'EIA/TIA 568-A',
              'ISO/IEC 11801'
            ],
            correctAnswer: 0
          },
          {
            question: ' User Datagram Protocol (UDP) jest protokołem',
            answers: [
              'bezpołączeniowym warstwy transportowej modelu TCP/IP',
              'bezpołączeniowym warstwy łącza danych modelu ISO/OSI',
              'połączeniowym warstwy transportowej modelu TCP/IP',
              'połączeniowym warstwy łącza danych ISO/OSI'
            ],
            correctAnswer: 0
          },
          {
            question: ' Który z symboli oznacza przełącznik?',
            answers: ['D', 'A', 'B', 'C'],
            correctAnswer: 0,
            img: 'e13/92.jpg'
          },
          {
            question:
              ' Urządzeniem sieciowym przedstawionym na schemacie sieci jest',
            answers: ['ruter', 'modem', 'przełącznik', 'koncentrator'],
            correctAnswer: 0,
            img: 'e13/93.jpg'
          },
          {
            question:
              ' Które urządzenie sieciowe zostało przedstawione na rysunku?',
            answers: [
              'Modem USB',
              'Adapter IrDA',
              'Adapter Bluetooth',
              'Karta sieciowa WiFi'
            ],
            correctAnswer: 0,
            img: 'e13/94.jpg'
          },
          {
            question:
              ' Ile punktów abonenckich (2 x RJ45), zgodnie z zaleceniami normy PN-EN 50167, powinno znajdować się w pomieszczeniu biurowym o powierzchni 49 m2?',
            answers: ['5', '1', '4', '9'],
            correctAnswer: 0
          },
          {
            question:
              ' Który z wymienionych programów umożliwi sporządzenie rysunku technicznego przedstawiającego plan instalacji logicznej sieci lokalnej budynku?',
            answers: ['AutoCad', 'WireShark', 'CommView', 'Packet Tracer'],
            correctAnswer: 0
          },
          {
            question:
              ' Które urządzenie aktywne umożliwi połączenie z siecą lokalną za pomocą kabla UTP 15 komputerów, drukarki sieciowej oraz rutera?',
            answers: [
              'Przełącznik 24-portowy',
              'Przełącznik 16-portowy',
              'Panel krosowniczy 16-portowy',
              'Panel krosowniczy 24-portowy'
            ],
            correctAnswer: 0
          },
          {
            question: ' Które urządzenie zwiększy zasięg sieci bezprzewodowej?',
            answers: [
              'Wzmacniacz sygnału',
              'Modem VDSL',
              'Konwerter mediów',
              'Przełącznik zarządzalny'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Które urządzenie umożliwi podłączenie drukarki nieposiadającej karty sieciowej do lokalnej sieci komputerowej?',
            answers: [
              'Serwer wydruku',
              'Regenerator',
              'Koncentrator',
              'Punkt dostępu'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Na podstawie przedstawionego cennika oblicz, jaki będzie koszt brutto jednego dwumodułowego podwójnego natynkowego gniazda abonenckiego.',
            answers: ['28,00 zł', '18,00 zł', '25,00 zł', '32,00 zł'],
            correctAnswer: 0,
            img: 'e13/95.jpg'
          },
          {
            question:
              ' W pomieszczeniu biurowym należy zainstalować 5 podwójnych gniazd abonenckich. Średnia odległość gniazda abonenckiego od lokalnego punktu dystrybucyjnego wynosi 10m. Jaki będzie przybliżony koszt zakupu kabla UTP kategorii 5e przeznaczonego do budowy sieci lokalnej, jeżeli cena brutto 1m kabla UTP kategorii 5e wynosi 1,60 zł?',
            answers: ['160,00 zł', '80,00 zł', '320,00 zł', '800,00 zł'],
            correctAnswer: 0
          },
          {
            question:
              ' W stacjach roboczych są zainstalowane karty sieciowe Ethernet 10/100/1000 ze złączem RJ45. Które medium transmisyjne należy wybrać do budowy sieci komputerowej, aby zapewnić pracę z najwyższą przepustowością?',
            answers: [
              'Kabel UTP kategorii 5e',
              'Kabel UTP kategorii 5',
              'Światłowód wielomodowy',
              'Światłowód jednomodowy'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Kabel typu skrętka, w której pojedyncza para żył jest foliowana oraz całość kabla jest w ekranie z folii i siatki, oznacza się symbolem',
            answers: ['SF/FTP', 'U/UTP', 'SF/UTP', 'U/FTP'],
            correctAnswer: 0
          },
          {
            question:
              ' Jakie są wartości pasma częstotliwości oraz maksymalnej szybkości transmisji danych w standardzie 802.11g WiFi?',
            answers: [
              '2,4 GHz 54 Mbps',
              '5 GHz 54 Mbps',
              '5 GHz 300 Mbps',
              '2,4 GHz 300 Mbps'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Do jakiego rodzaju wtyków jest stosowana przedstawiona na rysunku zaciskarka?',
            answers: ['BNC', 'RJ45', 'E2000', 'SC/PC'],
            correctAnswer: 0,
            img: 'e13/96.jpg'
          },
          {
            question: ' Który z wymienionych adresów IPv4 należy do klasy B?',
            answers: [
              '128.100.100.10',
              '224.100.10.10',
              '192.168.1.10',
              '10.10.10.10'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Który z adresów IP ma przypisaną maskę w postaci pełnej, wynikającą z klasy adresu?',
            answers: [
              '180.12.56.1, 255.255.0.0',
              '118.202.15.6, 255.255.0.0',
              '140.16.5.18, 255.255.255.0',
              '169.12.19.6, 255.255.255.0'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Do ilu sieci należą komputery o adresach IP i maskach sieci przedstawionych w tabeli?',
            answers: ['3', '2', '4', '5'],
            correctAnswer: 0,
            img: 'e13/97.jpg'
          },
          {
            question:
              ' Jaka jest liczba adresów, które można przydzielić urządzeniom pracującym w sieci o adresie IP 192.168.20.0/26?',
            answers: ['62', '4', '30', '126'],
            correctAnswer: 0
          },
          {
            question:
              ' Który z adresów jest adresem rozgłoszeniowym sieci 172.16.64.0/26?',
            answers: [
              '172.16.64.63',
              '172.16.64.0',
              '172.16.64.192',
              '172.16.64.255'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Do sprawdzania statystyk protokołów TCP/IP oraz aktualnych połączeń sieciowych w systemach rodziny Windows jest stosowane polecenie',
            answers: ['netstat', 'ping', 'route', 'tracert'],
            correctAnswer: 0
          },
          {
            question:
              ' W dokumentacji powykonawczej fizycznej i logicznej struktury sieci lokalnej musi znajdować się',
            answers: [
              'schemat sieci z oznaczonymi punktami dystrybucyjnymi i gniazdami',
              'harmonogram prac wykonawczych',
              'umowa zlecającego pracę z wykonawcą',
              'wstępny kosztorys materiałów i robocizny'
            ],
            correctAnswer: 0
          },
          {
            question: ' Którym elementem sieci SIP jest telefon IP?',
            answers: [
              'Terminalem końcowym',
              'Serwerem rejestracji SIP',
              'Serwerem przekierowań',
              'Serwerem Proxy SIP'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Które urządzenie diagnostyczne jest przedstawione na rysunku i opisane w specyfikacji przedstawionej w tabeli?',
            answers: [
              'Analizator sieci bezprzewodowych',
              'Multimetr cyfrowy',
              'Reflektometr optyczny',
              'Diodowy tester okablowania'
            ],
            correctAnswer: 0,
            img: 'e13/98.jpg'
          },
          {
            question:
              ' Jest to najnowsza wersja klienta wieloplatformowego, cenionego przez użytkowników na całym świecie, serwera wirtualnej sieci prywatnej, pozwalającego na zestawienie pomiędzy hostem a komputerem lokalnym połączenia, obsługującego uwierzytelnianie z użyciem kluczy, jak również certyfikatów, nazwy użytkownika i hasła, a także, w wersji dla Windows, dodatkowych kart. Który z programów został opisany przed chwilą?',
            answers: ['OpenVPN', 'Putty', 'Ethereal', 'TinghtVNC'],
            correctAnswer: 0
          },
          {
            question:
              ' Protokołem sieciowym definiującym mechanizmy stosowane do zarządzania urządzeniami sieciowymi jest',
            answers: [
              'Simple Network Management Protocol (SNMP)',
              'Simple Mail Transfer Protocol (SMTP)',
              'Intenet Control Message Protocol (ICMP)',
              'Internet Group Management Protocol (IGMP)'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Zainstalowanie serwera stron internetowych w rodzinie systemów Windows Server umożliwia rola',
            answers: [
              'serwer sieci Web',
              'usługi plików',
              'serwer aplikacji',
              'usługi pulpitu zdalnego'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Utworzenie kontrolera domeny w rodzinie systemów Windows Server na lokalnym serwerze wymaga zainstalowania roli',
            answers: [
              'usługi domenowej w usłudze Active Directory',
              'usługi LDS w usłudze Active Directory',
              'usługi certyfikatów w usłudze Active Directory',
              'usługi zarządzania prawami dostępu w usłudze Active Directory'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Które polecenie uruchamia edytor zasad grup w rodzinie systemów Windows Server?',
            answers: [
              'gpedit.msc',
              'regedit.exe',
              'services.msc',
              'dcpromo.exe'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Który protokół pocztowy umożliwia między innymi przechowywanie odbieranych wiadomości e-mail na serwerze, zarządzanie wieloma folderami, usuwanie wiadomości i przenoszenie ich pomiędzy folderami?',
            answers: [
              'Internet Message Access Protocol (IMAP)',
              'Post Office Protocol (POP)',
              'Simple Mail Transfer Protocol (SMTP)',
              'Multipurpose Internet Mail Extensions (MIME)'
            ],
            correctAnswer: 0
          },
          {
            question: ' Internet Relay Chat (IRC) to protokół stosowany do',
            answers: [
              'prowadzenia rozmów za pomocą konsoli tekstowej',
              'przesyłania poczty e-mail',
              'transmisji głosu przez sieć',
              'transmisji listów na grupę dyskusyjną'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Standard Transport Layer Security (TLS) to rozwinięcie protokołu',
            answers: [
              'Security Socket Layer (SSL)',
              'Security Shell (SSH)',
              'Session Initiation Protocol (SIP)',
              'Network Terminal Protocol (telnet)'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Sposób działania którego protokołu został przedstawiony na rysunku?',
            answers: [
              'Dynamic Host Configuration Protocol (DHCP)',
              'Domain Name System(DNS)',
              'Security Shell (SSH)',
              'Telnet'
            ],
            correctAnswer: 0,
            img: 'e13/99.jpg'
          },
          {
            question:
              ' Adres IP serwera, na którym jest zainstalowana domena www.wp.pl to 212.77.98.9. Co jest przyczyną sytuacji przedstawionej na zrzucie ekranowym?',
            answers: [
              'Błędny adres serwera DNS lub brak połączenia z serwerem DNS',
              'Nie ma w sieci serwera o adresie IP 212.77.98.9',
              'Domena o nazwie www.wp.pl jest niedostępna w sieci',
              'Stacja robocza i domena www.wp.pl nie pracują w tej samej sieci'
            ],
            correctAnswer: 0,
            img: 'e13/100.jpg'
          },
          {
            question:
              ' Rysunek przedstawia konfigurację protokołu TCP/IP serwera i stacji roboczej. Na serwerze jest zainstalowana rola serwera DNS. Polecenie ping www.cke.edu.pl uruchomione na serwerze daje wynik pozytywny, a na stacji roboczej negatywny. Aby usługa DNS na stacji działała prawidłowo, należy zmienić adres',
            answers: [
              'serwera DNS na stacji roboczej na 192.168.1.10',
              'bramy na serwerze na 192.168.1.11',
              'bramy na stacji roboczej na 192.168.1.10',
              'serwera DNS na stacji roboczej na 192.168.1.11'
            ],
            correctAnswer: 0,
            img: 'e13/101.jpg'
          }
        ]
      },
      {}
    ],
    21: [
      function (require, module, exports) {
        module.exports = [
          {
            question:
              ' Którego polecenia nalezy użyć, aby wyraz TEKST został wyświetleny w kolorze czarnym w oknie przeglądarki internetowej?',
            answers: [
              '<font color="#000000">TEKST</font>',
              '<body color="black">TEKST</font>',
              '<font color="czarny">TEKST</font>',
              '<body bgcolor="black">TEKST</body>'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' W poleceniach, których celem jest odtwarzanie na stronie internetowej dźwięku jako podkładu muzycznego NIE wykorzystuje się atrybutu',
            answers: [
              'href="C:/100.wav">',
              'loop="10"',
              'balance="-10"',
              'volume="-100"'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Jakiego znacznika należy użyć, aby przejść do kolejnej linii tekstu, nie tworząc akapitu na stronie interenetowej ?',
            answers: ['<br>', '<p>', '</b>', '</br>'],
            correctAnswer: 0
          },
          {
            question: ' Kaskadowe arkusze stylów tworzy się w celu',
            answers: [
              'ułatwienia formatowania strony',
              'nadpisywania wartości znaczników już ustawionych na stronie',
              'połączenia struktury dokumentu strony z właściwą formą jego prezentacji',
              'blokowania jakichkolwiek zmian w wartościach znaczników już przypisanych w pliku CSS'
            ],
            correctAnswer: 0
          },
          {
            question: ' W podanej regule CSS: h1 {color: blue} h1 oznacza',
            answers: ['selektor', 'klasę', 'wartość', 'deklarację'],
            correctAnswer: 0
          },
          {
            question: ' Edytor spełniający założenia WYSIWYG musi umożliwiać',
            answers: [
              'uzyskanie zbliżonego wyniku tworzenej strony do jej obrazu w przegladarce interenetowej',
              'tworzenie podstawowej grafiki wektorowej',
              'publikację strony na serwerze poprzez wbudowanego klienta FTP',
              'obróbkę plików dźwiękowych przed umieszczeniem ich na stronie internetowej'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Do graficznego tworzenia stron internetowych należy wykorzystać.',
            answers: [
              'program typu WYSIWYG',
              'edytor CSS',
              'przeglądarkę internetową',
              'program MS Office Picture Manager'
            ],
            correctAnswer: 0
          },
          {
            question: ' W procesie walidacji stron internetowych nie bada się',
            answers: [
              'źródła pochodzenia narzędzi edytorskich',
              'działania linków',
              'błędów składni kodu',
              'zgodności z przeglądarkami'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Model opisu przestrzeni barw o parametrach: odcień, nasycenie i jasność, to',
            answers: ['HSV', 'RGB', 'CMY', 'CMYK'],
            correctAnswer: 0
          },
          {
            question:
              ' Wskaż model barw, który stosuje się do wyświetlania kolorów na ekranie monitora komputerowego',
            answers: ['RGB', 'HLS', 'CMY', 'CMYK'],
            correctAnswer: 0
          },
          {
            question:
              ' Który parametr obiektu graficznego ulegnie zmianie po modyfikacji wartości kanału alfa?',
            answers: [
              'Przezroczystość',
              'Nasycenie barw',
              'Ostrość krawędzi',
              'Kolejność wyświetlenia pikseli'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Jakiego formatu należy użyć do zapisu obrazu z kompresją stratną?',
            answers: ['JPEG', 'GIF', 'PNG', 'PCX'],
            correctAnswer: 0
          },
          {
            question:
              ' Najprostszy sposób zamiany obiektu oznaczonego cyfrą 1 na obiekt oznaczony cyfrą 2 polega na',
            answers: [
              'geometrycznym transformowaniu obiektu',
              'animowaniu obiektu',
              'zmianie warstwy obiektu',
              'narysowaniu docelowego obiektu'
            ],
            correctAnswer: 0,
            img: 'e14/1.jpg'
          },
          {
            question:
              ' Jak nazywa się proces przedstawienia, we właściwej dla danego środowiska formie, informacji zawartej w dokumencie elektronicznym?',
            answers: [
              'Renderowanie',
              'Mapowanie',
              'Rasteryzacja',
              'Teksturowanie'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Proces filtracji sygnału wejściowego w dziedzinie czasu, obejmujący zasadę superpozycji, związany jest filtrem',
            answers: [
              'liniowym',
              'przyczynowym',
              'niezmiennym w czasie',
              'o skończonej odpowiedzi impulsowej'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Jak nazywa się podzbiór strukturalnego języka zapytań, związany z formułowaniem zapytań do bazy danych za pomocą polecenia SELECT?',
            answers: [
              'SQL DQL (ang. Data Query Language)',
              'SQL DML (ang. Data Manipulation Language)',
              'SQL DDL (ang. Data Definition Language)',
              'SQL DCL (ang. Data Control Language)'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Jakie sa nazwy typowych poleceń języka zapytań SQL, związane z wykonywaniem operacji na danych SQL DML (np.: umieszczanie danych w bazie, kasowanie dokonywanie zmian w danych)?',
            answers: [
              'DELETE, INSERT, UPDATE',
              'SELECT, SELECT INTO',
              'ALTER, CREATE, DROP',
              'DENY, GRANT, REVOKE'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Jak posortowana będzie lista, utworzona ze wszystkich kolumn tabeli uczniowie i zawierająca uczniów ze średnią większą od 5, która zostanie zwrócona jako wynik przedstawionego zapytania?',
            answers: [
              'Malejąco według parametru klasa',
              'Rosnąca według parametru klasa',
              'Rosnaco według parametru srednia',
              'Malejąco według parametru srednia'
            ],
            correctAnswer: 0,
            img: 'e14/2.jpg'
          },
          {
            question:
              ' Według którego parametru oraz dla ilu tabel zostaną zwrócone wiersze na liście w wyniku przedstawionego zapytania?',
            answers: [
              'Według parametru nr_id dla wszystkich tabel',
              'Według parametru wyrob_id wyłącznie dla trzech tabel',
              'Według parametru wyrob_id dla wyłącznie dla trzech tabel',
              'Według parametru nr_id wyłącznie dla trzech tabel'
            ],
            correctAnswer: 0,
            img: 'e14/3.jpg'
          },
          {
            question:
              ' Który z obiektów relacyjnej bazy danych, będący kodem języka SQL, może być wywoływany w zapytaniach modyfikujących kolumny danych widoczne jako tabela, bez względu na to czy jest tworzony programowo, czy dynamicznie?',
            answers: [
              'Funkcja zdefiniowana',
              'Reguła',
              'Wyzwalacz',
              'Procedura składowa'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Jak nazywa się element bazy danych, za pomocą którego można jedynie odczytać dane z bazy, prezentując je w postaci tekstu lub wykresu?',
            answers: ['Raport', 'Tabela', 'Zapytanie', 'Formularz'],
            correctAnswer: 0
          },
          {
            question:
              ' Jakiego typu specjalizowane oprogramowanie narzędziowe należy zainstalować, aby umożliwić wykonywanie jego użytkownikowi operacji na zgromadzonych danych?',
            answers: [
              'System Zarządzania Bazą Danych (SZBD)',
              'Klucz obcy',
              'Obiektowy System Zarządzania Bazą Danych',
              'Otwarty mechanizm komunikacji bazy danych'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Co należy zastosować w organizacji danych, aby zapytania w bazie danych były wykonywane szybciej?',
            answers: [
              'Indeksy',
              'Reguły',
              'Wartości domyślne',
              'Klucze podstawowe'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' W programie Microsoft Access formą zabezpieczeń dostępu do danych związaną z tabelą i kwerendą jest',
            answers: [
              'przypisanie uprawnień',
              'stosowanie makr',
              'określanie przestrzeni tabel',
              'wprowadzenie limitów przestrzeni dyskowej'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Które z wymienionych osób odpowiadają za przygotowanie systemu bazy danych do pracy produkcyjnej w sposób ciągły, zarządzanie użytkownikami i instalowanie nowych wersji systemu bazodanowego?',
            answers: [
              'Administratorzy systemu bazy danych',
              'Projektanci narzędzi deweloperskich',
              'Administratorzy serwerów i sieci komputerowych',
              'Projektanci i programiści Systemu Zarządzania Bazą Danych.'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Z jakimi mechanizmami nadawania zabezpieczeń, dającymi możliwości wykonywania operacji na bazie danych, związane są zagadnienia zarządzania kontami, użytkownikami i uprawnieniami?',
            answers: [
              'Z przywilejami systemowymi',
              'Z regułami',
              'Z atrybutami',
              'Z przywilejami obiektowymi'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Metoda udostępniania bazy danych w programie Microsoft Access, dotycząca wszystkich obiektów bazy umieszczonych na dysku sieciowym i używanych jednocześnie przez różne osoby nosi nazwę',
            answers: [
              'folderu sieciowego',
              'serwera bazy danych',
              'dzielonej bazy danych',
              'witryny programu SharePoint'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Jakie należy posiadać uprawnienia, aby wykonać i odtworzyć kopię zapasową bazy danych Microsoft SQL Server 2005 Express?',
            answers: [
              'Administrator systemu',
              'Users',
              'Security users',
              'Użytkownik lokalny'
            ],
            correctAnswer: 0
          },
          {
            question: ' Typ zmiennej w języku JavaScript',
            answers: [
              'następuje poprzez przypisanie wartości',
              'nie występuje',
              'jest tylko jeden',
              'musi być zadeklarowany na początku skryptu'
            ],
            correctAnswer: 0
          },
          {
            question: ' Zmienne typu int odnoszą się do liczb',
            answers: [
              'całkowitych',
              'naturalnych',
              'w notacji stałoprzecinkowej',
              'w notacji zmiennoprzecinkowej'
            ],
            correctAnswer: 0
          },
          {
            question: ' Co definiuje w języku C++ przedstawiony fragment kodu?',
            answers: [
              'Typ strukturalny składający się z trzech pól',
              'Hierarchię zmiennych',
              'Trzy zmienne niepowiązane ze sobą',
              'Kontakt pomiędzy zmiennymi globalnymi i lokalnymi'
            ],
            correctAnswer: 0,
            img: 'e14/4.jpg'
          },
          {
            question:
              ' Sposób programowania, w którym ciąg poleceń (sekwencji instrukcji) przekazywanych komputerowi jest postrzegany jako program, nosi nazwę programowania',
            answers: [
              'imperatywnego',
              'stanowego',
              'logicznego',
              'funkcyjnego'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Które wartości będą kolejno wypisane w wyniku działania przedstawionego skryptu',
            answers: ['2 2 1', '2 1 1', '1 2 1', '1 2 2'],
            correctAnswer: 0,
            img: 'e14/5.jpg'
          },
          {
            question: ' Fragment kodu prezentuje składnię języka',
            answers: ['PHP', 'C', 'C#', 'JavaScript'],
            correctAnswer: 0,
            img: 'e14/6.jpg'
          },
          {
            question:
              ' Jaki program komputerowy przekształca kod źródłowy, napisany w konkretnym języku programowania, na język komputera?',
            answers: [
              'Kompilator',
              'Debugger',
              'Edytor kodu źródłowego',
              'Środowisko programistyczne'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Jak nazywa się program, który wykonuje instrukcje zawarte w kodzie źródłowym tworzonego programu bez uprzedniego generowania programu wynikowego?',
            answers: [
              'Interpreter',
              'Kompilator',
              'Konwerter kodu',
              'Konwerter języka'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Który język skryptowy ogólnego przeznaczenia należy wykorzystać do tworzenia aplikacji WWW, zagnieżdżanych w języku HTML i uruchamianych po stronie serwera?',
            answers: ['PHP', 'C#', 'Perl', 'JavaScript'],
            correctAnswer: 0
          },
          {
            question:
              ' Jak nazywa się technika umożliwiająca otwarcie połączenia klienta z serwerem i komunikację bez przeładowywania całej strony WWW w sposób asynchroniczny ?',
            answers: ['AJAX', 'PHP', 'XML', 'VBScript'],
            correctAnswer: 0
          },
          {
            question:
              ' Jak nazywa się element oznaczony znakiem zapytania w strukturze platformy .NET, który umożliwia tworzenie własnych aplikacji z użyciem frameworków i zamianę kompilowanego kodu pośredniego na kod maszynowy procesora zainstalowanego w komputerze?',
            answers: [
              'Wspólne środowisko uruchomieniowe (CLR)',
              'Infrastruktura językowa (CLI)',
              'Biblioteka klas bazowych (BCL)',
              'Wspólne środowisko programistyczne (CLP)'
            ],
            correctAnswer: 0,
            img: 'e14/7.jpg'
          },
          {
            question:
              ' Jakiego rodzaju mechanizm kontroli bezpieczeństwa wykonywania aplikacji zawiera środowisko uruchomieniowe platformy .NET Framework?',
            answers: [
              'Mechanizm wykonywania aplikacji oparty na uprawnieniach kodu (CAS - Code Access Security) i na rolach (RBS - Role-Based Security)',
              'Mechanizm wykonywania aplikacji dla bibliotek klas',
              'Mechanizm wykonywania aplikacji realizowany przez frameworki aplikacji internetowych (ASP.NET)',
              'Mechanizm wykonywania aplikacji realizowany przez funkcję Windows API (Application Programming Interface)'
            ],
            correctAnswer: 0
          },
          {
            question: ' Co to jest DBMS?',
            answers: [
              'System zarządzania bazą danych',
              'Strukturalny język zapytań kierowanych do bazy danych',
              'Obiektowy język programowania do generowania stron www',
              'Kaskadowy arkusz stylów do opisu wyglądu strony www'
            ],
            correctAnswer: 0
          },
          {
            question: ' Który z odsyłaczy posiada poprawną konstrukcję?',
            answers: [
              '<a href="mailto:adres"> tekst </a>',
              "<a href='mailto:adres'> tekst </a>",
              "<a href='http://adres'> tekst </a>",
              '<a href="http://adres"> tekst <a>'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Fragment kodu napisany w języku HTML zamieszczony w ramce przedstawia listę',
            answers: ['numerowaną', 'wypunktowaną', 'odnośników', 'skrótów'],
            correctAnswer: 0,
            img: 'e14/8.jpg'
          },
          {
            question:
              ' Polecenie colspan służy do łączenia komórek tabeli w poziomie, natomiast rowspan w pionie. Którą z tabel wyświetli fragment kodu napisany w języku HTML?',
            answers: ['B', 'A', 'C', 'D'],
            correctAnswer: 0,
            img: 'e14/9.jpg'
          },
          {
            question:
              ' W znaczniku <head> (w części <meta ... >) strony www NIE umieszcza się informacji dotyczącej',
            answers: [
              'typu dokumentu',
              'autora',
              'kodowania',
              'automatycznego odświeżania'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Wskaż sposób, w jaki należy odwołać się do pliku default.css, jeśli index.html znajduje się bezpośrednio w katalogu ?',
            answers: [
              '<link rel="stylesheet" type="text/css" href="./style/default.css" />',
              '<link rel="stylesheet" type="text/css" href="C:/style/default.css" />',
              '<link rel="stylesheet" type="text/css" href="...styledefault.css" />',
              '<link rel="stylesheet" type="text/css" href="c:style/default.css" />'
            ],
            correctAnswer: 0,
            img: 'e14/10.jpg'
          },
          {
            question:
              ' Wskaż stwierdzenie, które jest prawdziwe dla następującej definicji stylu:',
            answers: [
              'Zdefiniowano dwie klasy',
              'Jest to styl lokalny',
              'Akapit będzie transponowany na małe litery',
              'Odnośnik będzie pisany czcionką 14 punktów'
            ],
            correctAnswer: 0,
            img: 'e14/11.jpg'
          },
          {
            question:
              ' W palecie kolorów RGB kolor żółty jest połączeniem dwóch kolorów: zielonego i czerwonego. Który z kodów szesnastkowych oznacza kolor żółty?',
            answers: ['#FFFF00', '#FF00FF', '#00FFFF', '#F0F0F0'],
            correctAnswer: 0
          },
          {
            question:
              ' Który z formatów NIE pozwala na zapis plików animowanych?',
            answers: ['ACE', 'GIF', 'SWF', 'SVG'],
            correctAnswer: 0
          },
          {
            question:
              ' Który z formatów graficznych pozwala na zapis przejrzystego tła?',
            answers: ['GIF', 'RAW', 'BMP', 'JPEG'],
            correctAnswer: 0
          },
          {
            question: ' Proces walidacji strony internetowej to',
            answers: [
              'sprawdzenie jej w celu wyeliminowania błędów',
              'zespół działań mających na celu zwiększenie oglądalności',
              'publikowanie w sieci',
              'promocja strony'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Które oprogramowanie NIE JEST systemem zarządzania treścią (CMS)?',
            answers: ['Apache', 'Joomla', 'Mambo', 'WordPress'],
            correctAnswer: 0
          },
          {
            question:
              ' Który z formatów zapewnia największa redukcję rozmiaru pliku dźwiękowego?',
            answers: ['MP3', 'WAV', 'PCM', 'CD-Audio'],
            correctAnswer: 0
          },
          {
            question: ' Wskaż prawidłową kolejność tworzenia bazy danych',
            answers: [
              'Określenie celu, stworzenie tabel, utworzenie relacji, normalizacja',
              'Określenie celu, utworzenie relacji, stworzenie tabel, normalizacja',
              'Określenie celu, normalizacja, utworzenie relacji, stworzenie tabel',
              'Określenie celu, normalizacja, stworzenie tabel, utworzenie relacji'
            ],
            correctAnswer: 0
          },
          {
            question: ' Wskaż typ relacji pomiędzy tabelami: Tabela1 i Tabela3',
            answers: [
              'Wiele do wielu',
              'Jeden do jednego',
              'Wiele do jednego',
              'Jeden do wielu'
            ],
            correctAnswer: 0,
            img: 'e14/12.jpg'
          },
          {
            question: ' Które z pól są umieszczone w formularzu?',
            answers: [
              'Input(Text), Select, Input(Radio), Input(Radio), Input(Submit), Input(Reset)',
              'Textarea, Option, Input(Chechbox), Input(Checkbox), Input(Submit) Input(Reset)',
              'Textarea, Select, Input(Radio), Input(Radio), Input(Reset), Input(Submit)',
              'Input(Text), Input(Chechbox), Select, Select, Input(Submit), Input(Reset)'
            ],
            correctAnswer: 0,
            img: 'e14/13.jpg'
          },
          {
            question:
              ' Którą z właściwości pola tabeli należy zdefiniować, aby pole przyjmowało dane składające się wyłącznie z cyfr?',
            answers: [
              'Maskę wprowadzania',
              'Tagi inteligentne',
              'Wartość domyślną',
              'Regułę sprawdzania poprawności'
            ],
            correctAnswer: 0,
            img: 'e14/14.jpg'
          },
          {
            question:
              ' Którego ze słów kluczowych języka SQL należy użyć, aby wyeliminować duplikaty?',
            answers: ['DISTINCT', 'LIKE', 'ORDER BY', 'GROUP BY'],
            correctAnswer: 0
          },
          {
            question:
              ' Które ze stwierdzeń prawidłowo charakteryzuje zdefiniowaną tabelę: CREATE TABLE dane (kolumna INTEGER(3));',
            answers: [
              'Tabela o nazwie posiada jedną kolumnę liczb całkowitych',
              'Tabela o nazwie posiada trzy kolumny liczb całkowitych',
              'Tabela posiada jedną kolumnę zawierającą trzy elementowe tablice',
              'Kolumny tabeli nazywają się: , ,'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Polecenie REVOKE SELECT ON nazwa1 FROM nazwa2 w języku SQL umożliwia',
            answers: [
              'odbieranie uprawnień użytkownikowi',
              'nadanie uprawnień z użyciem zdefiniowanego schematu',
              'usuwanie użytkownika z bazy',
              'nadawanie praw do tabeli'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Które polecenie wydane z konsoli systemu operacyjnego, zawierające w swojej składni opcję --repair, umożliwia naprawę bazy danych?',
            answers: ['mysqlcheck', 'mysqldump', 'truncate', 'create'],
            correctAnswer: 0
          },
          {
            question:
              ' Które polecenie wydane z konsoli systemowej dokona przywrócenia bazy danych?',
            answers: [
              'mysql -u root -p baza < kopia.sql',
              'mysqldump -u root -p baza > kopia.sql',
              'mysqldump -u root -p baza < kopia.sql',
              'mysql -u root -p baza > kopia.sql'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Polecenie w języku SQL GRANT ALL PRIVILEGES ON klienci TO pracownik',
            answers: [
              'nadaje wszystkie uprawnienia do tabeli użytkownikowi',
              'nadaje uprawnienie grupie do tabeli',
              'odbiera wszystkie uprawnienia do tabeli',
              'skopiuje uprawnienia z grupy na użytkownika'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Która z wymienionych funkcji sortowania wykorzystywana w języku PHP sortuje tablicę asocjacyjną według indeksów',
            answers: ['ksort()', 'sort()', 'rsort()', 'asort()'],
            correctAnswer: 0
          },
          {
            question:
              ' W skrypcie PHP należy utworzyć cookie o nazwie które przyjmie wartość . Cookie ma być dostępne przez jedną godzinę od jego utworzenia. W tym celu należy w skrypcie PHP użyć funkcji:',
            answers: [
              'setcookie("owoce","jabłko",time()+3600);',
              'cookie("owoce","jabłko",3600);',
              'cookie("jabłko","owoce",3600);',
              'setcookie("jabłko","owoce",time()+3600);'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Wskaż słowo kluczowe w języku C++ dodawane przed wbudowanym typem danych, które przesuwa zakres liczby wyłącznie nieujemne',
            answers: ['unsigned', 'long', 'const', 'short'],
            correctAnswer: 0
          },
          {
            question:
              ' W językach programowania tylko zmienna jednego typu wbudowanego może przyjmować wyłącznie dwie wartości. Jest to typ',
            answers: ['logiczny', 'znakowy', 'tablicowy', 'łańcuchowy'],
            correctAnswer: 0
          },
          {
            question:
              ' Instrukcja języka PHP tworząca obiekt dla zdefiniowanej w ramce klasy ma postać',
            answers: [
              'pkt = new Punkt();',
              'pkt Punkt;',
              'pkt Punkt();',
              'Punkt() pkt;'
            ],
            correctAnswer: 0,
            img: 'e14/15.jpg'
          },
          {
            question: ' Wskaż wynik wykonania skryptu napisanego w języku PHP',
            answers: ['A', 'B', 'C', 'D'],
            correctAnswer: 0,
            img: 'e14/16.jpg'
          },
          {
            question:
              ' Które ze stwierdzeń dotyczących języków programowania NIE jest prawdziwe',
            answers: [
              'SQL jest językiem programowania strukturalnego',
              'C++ jest językiem obiektowym',
              'JavaScript jest językiem skryptowym',
              'PHP jest językiem do tworzenia stron w czasie rzeczywistym'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Jaka wartość zostanie wypisana na standardowym wyjściu dla zamieszczonego w ramce fragmentu programu napisanego w języku C++',
            answers: ['3', '0', '2', '32'],
            correctAnswer: 0,
            img: 'e14/17.jpg'
          },
          {
            question:
              ' Wskaż stwierdzenie, które nie jest prawdziwe dla następującej definicji funkcji w języku C++?',
            answers: [
              'Funkcja zwraca wartość',
              'Funkcja nie zwraca wartości',
              'Funkcja posiada dwa parametry',
              'Funkcja odwołuje się do parametrów przez referencję'
            ],
            correctAnswer: 0,
            img: 'e14/18.jpg'
          },
          {
            question: ' Element zadeklarowany w języku C++ double *x; to',
            answers: [
              'Wskaźnik',
              'Parametr formalny typu rzeczywistego',
              'Zmienna rzeczywista',
              'Zmienna całkowita'
            ],
            correctAnswer: 0
          },
          {
            question: ' Wskaż prawidłową kolejność tworzenia aplikacji',
            answers: [
              'Analiza wymagań klienta, specyfikacja wymagań tworzenie, testy, wdrażanie',
              'Specyfikacja wymagań, analiza wymagań klienta, tworzenie, wdrażanie,testy',
              'Tworzenie, analiza wymagań klienta, specyfikacja wymagań, wdrażanie, testy',
              'Analiza wymagań klienta, specyfikacja wymagań, tworzenie, wdrażanie, testy'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Jaką wartość zwróci funkcja zao zdefiniowana w języku C++, wywołana z aktualnym parametrem 3.55',
            answers: ['4', '3', '3.5', '4.05'],
            correctAnswer: 0,
            img: 'e14/19.jpg'
          },
          {
            question:
              ' Proces tłumaczenia kodu źródłowego pisanego przez programistę na zrozumiały dla komputera kod maszynowy to',
            answers: [
              'kompilowanie',
              'debugowanie',
              'uruchamianie',
              'implementowanie'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Które ze stwierdzeń, w odniesieniu do zamieszczonej w ramce definicji funkcji, jest poprawne?',
            answers: [
              'Wczytanie tekstu zakończy się, gdy tekst będzie się składał przynajmniej z 3 znaków',
              'Pętla wykona się tylko raz',
              'Funkcja posiada pętlę powtarzającą się 3 razy',
              'Tekst będzie wczytywany do momentu podania liczby większej niż 3'
            ],
            correctAnswer: 0,
            img: 'e14/20.jpg'
          },
          {
            question:
              ' Po wykonaniu zamieszczonego w ramce skryptu napisanego w języku JavaScript w przeglądarce zostanie wypisana wartość',
            answers: ['12,5', '12,4', '15,4', '15,5'],
            correctAnswer: 0,
            img: 'e14/21.jpg'
          },
          {
            question:
              ' Poprzez deklarację var x="true"; w języku JavieScript tworzy się zmienną typu',
            answers: [
              'String (ciąg znaków)',
              'Logicznego',
              'Liczbowego',
              'Nieokreślonego (undefined)'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Platforma wspierająca programowanie w technologii .NET to',
            answers: ['framework', 'db2', 'eclipse', 'middleware'],
            correctAnswer: 0
          },
          {
            question:
              ' Proces, w którym wykrywa się i usuwa błędy w kodzie źródłowym programów, to',
            answers: [
              'Debugowanie',
              'Kompilowanie',
              'standaryzacja',
              'Normalizacja'
            ],
            correctAnswer: 0
          },
          {
            question: ' Aby ustawić tło na stronie www należy użyć polecenia',
            answers: [
              '<body bgcolor=""></body>',
              '<background=""></background>',
              '<bgcolor=""></bgcolor>',
              '<body background=""></body>'
            ],
            correctAnswer: 0
          },
          {
            question: ' Parametr face znacznika <font> służy do określenia',
            answers: [
              'nazwy czcionki',
              'barwy czcionki',
              'efektów czcionki',
              'wielkości czcionki'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Kodowanie w standardzie ISO-8859-2 stosowane jest w celu poprawnego wyświetlenia',
            answers: [
              'polskich liter, takich jak: ś, ć, ń, ó, ą',
              'symboli matematycznych',
              'znaków specjalnych dla języka kodu strony',
              'znaków zarezerwowanych dla języka opisu strony'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Zamieszczony w ramce kod wyświetla tabelę składajacą się z',
            answers: [
              'jednego wiersza i dwóch kolumn',
              'dwóch wierszy i dwóch kolumn',
              'dwóch wierszy i jednej kolumny',
              'jednego wiersza i jednej kolumny'
            ],
            correctAnswer: 0,
            img: 'e14/22.jpg'
          },
          {
            question: ' Kaskadowe arkusze stylów tworzy się w celu',
            answers: [
              'definiowania sposobu formatowania elementów strony internetowej',
              'ułatwienia użytkownikowi nawigacji',
              'uzupełnienia strony internetowej o treści tekstowe',
              'przyspieszenia wyświetlania grafiki na stronie internetowej'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Które polecenie w CSS służy do załączenia zewnętrznego arkusza stylów?',
            answers: ['import', 'open', 'require', 'include'],
            correctAnswer: 0
          },
          {
            question:
              ' Selektor CSS a:link {color:red} zawarty w kaskadowych arkuszach stylów definiuje',
            answers: ['pseudoklasę', 'klasę', 'identyfikator', 'pseudoelement'],
            correctAnswer: 0
          },
          {
            question:
              ' Jak nazywa się edytor wspomagający tworzenie stron internetowych, którego sposób działania można w polskim tłumaczeniu określić jako: otrzymujesz to, co widzisz?',
            answers: ['WYSIWYG', 'IDE', 'WEB STUDIO', 'VISUAL EDITOR'],
            correctAnswer: 0
          },
          {
            question:
              ' Kolor 255 12 12 w modelu RGB na stronie www powinien być zapisany w postaci',
            answers: ['#FF0C0C', '#2551212', '#EE0C0C', '#AB1A1D'],
            correctAnswer: 0
          },
          {
            question:
              ' CMYK to zestaw czterech podstawowych kolorów farb drukarskich:',
            answers: [
              'turkusowego, purpurowego, żółtego, czarnego',
              'turkusowego, błękitnego, białego, różowego',
              'turkusowego, purpurowego, białego, czarnego',
              'czerwonego, purpurowego, żółtego, szarego'
            ],
            correctAnswer: 0
          },
          {
            question: ' Cechą formatu PNG jest',
            answers: [
              'bezstratna kompresja',
              'obsługa animacji',
              'brak obsługi kanału alfa',
              'reprezentacja grafiki wektorowej'
            ],
            correctAnswer: 0
          },
          {
            question: ' Saturacja koloru nazywana jest inaczej',
            answers: [
              'nasyceniem koloru',
              'jasnością koloru',
              'dopełnieniem koloru',
              'przezroczystością koloru'
            ],
            correctAnswer: 0
          },
          {
            question: ' Kanał alfa służy do zdefiniowania',
            answers: [
              'przezroczystość obiektu graficznego',
              'jasności i kontrastu kolorów',
              'zaznaczonego fragmentu obiektu graficznego',
              'podstawowych parametrów obiektu graficznego'
            ],
            correctAnswer: 0
          },
          {
            question: ' Częstotliwość próbkowania ma wpływ na',
            answers: [
              'jakość cyfrowego dzwięku',
              'jakość analogowego dzwięku',
              'amplitudę fali dźwiękowej utworu',
              'skalę głośności zapisanego utworu'
            ],
            correctAnswer: 0
          },
          {
            question: ' Wysokość dźwięku zależy od',
            answers: [
              'częstotliwości drgania fali akustycznej',
              'siły wzbudzenia drgania',
              'sposobu pobudzania drgania',
              'czasu drgania źródła dzwięku'
            ],
            correctAnswer: 0
          },
          {
            question: ' Typ stało-znakowy w języku SQL to',
            answers: ['char', 'text', 'time', 'bool'],
            correctAnswer: 0
          },
          {
            question: ' Operator arytmetyczny modulo w języku SQL to',
            answers: ['%', '/', '||', '&'],
            correctAnswer: 0
          },
          {
            question:
              ' Polecenie w języku SQL ALTER TABLE USA... ma za zadanie',
            answers: [
              'modyfikację tabeli USA',
              'usunięcie tabeli USA',
              'nadpisanie starej tabeli USA',
              'utworzenie nowej tabeli USA'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Kod: SELECT imie, pesel, wiek FROM dane WHERE wiek IN (18,30) spowoduje wybranie:',
            answers: [
              'imion, numerów PESEL i wieku osób w wieku równym 18 lub 30 lat',
              'imion, nazwisk i numerów PESEL osób w wieku poniżej 18 lat',
              'imion, numerów PESEL i wieku osób z przedziału od 18 do 30 lat',
              'imion, numerów PESEL i wieku osób posiadających powyżej 30 lat'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Aby policzyć wszystkie wiersze tabeli Koty należy użyć polecenia:',
            answers: [
              'SELECT COUNT(*) FROM Koty',
              'SELECT ROWNUM() FROM Koty',
              'SELECT COUNT(Koty) AS ROWNUM',
              'SELECT COUNT(ROWNUM) FROM Koty'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Aby podczas tworzenia tabeli utworzyć klucz obcy na wielu kolumnach, należy użyć polecenia',
            answers: [
              'CONSTRAINT fk_osoba_uczen FOREIGN KEY (nazwisko, imie) REFERENCES osoby (nazwisko,imie)',
              'CONSTRAINT(nazwisko,imie) FOREIGN KEY REFERENCES osoby (nazwisko, imie)',
              'CONSTRAINT(nazwisko,imie) FOREIGN REFERENCES KEY osoby (nazwisko, imie)',
              'CONSTRAINT fk_osoba_uczen FOREIGN KEY ON (nazwisko, imie) REFERENCES osoby (nazwisko,imie)'
            ],
            correctAnswer: 0
          },
          {
            question: ' W algebrze relacji operacja selekcji polega na',
            answers: [
              'wybraniu krotek spełniających określone warunki',
              'wyelminowaniu pustych wierszy',
              'wybraniu krotek niezawierających wartości NULL',
              'wyelminowaniu krotek z powtarzającymi się polami'
            ],
            correctAnswer: 0
          },
          {
            question: ' Relacja w bazach danych jest',
            answers: [
              'logicznym połączeniem tabel',
              'kluczem głównym w relacji tabel',
              'algebraicznym połączeniem tabel',
              'połączeniem dwóch pól jednej tabeli'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Wskaż poprawną kolejność etapów projektowania relacyjnej bazy danych',
            answers: [
              'Określenie zbioru danych, Selekcja, Określenie kluczy podstawowych tabel, Określenie relacji',
              'Selekcja, Określenie relacji, Określenie kluczy podstawowych tabel, Określenie zbioru danych',
              'Określenie relacji, Określenie kluczy podstawowych tabel, Selekcja, Określenie zbioru danych',
              'Określenie kluczy podstawowych tabel, Określenie zbioru danych, Selekcja, Określenie relacji'
            ],
            correctAnswer: 0
          },
          {
            question: ' Formularze do obsługi baz danych tworzy się w celu',
            answers: [
              'wygodniejszego wprowadzania, edytowania i usuwania danych',
              'raportowania danych',
              'wyszukiwania wierszy spełniających dane kryteria',
              'wprowadzenia powiązań w relacyjnych bazach danych'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Integralność referencyjna w modelu relacyjnych baz danych oznacza, że',
            answers: [
              'wartość klucza obcego w danej tabeli musi być albo równa wartości klucza głównego w tabeli z nia powiązanej albo równa wartości NULL',
              'wartość klucza głównego oraz klucza obcego nie jest pusta',
              'klucz główny lub klucz obcy nie zawierają wartości NULL',
              'każdemu kluczowi głównemu odpowiada dokładnie jeden klucz obcy w tabeli lub tabelach powiązanych'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Deklaracja w języku JavaScript: var x=true; powoduje, że zmienna x jest typu',
            answers: [
              'logicznego',
              'liczbowego',
              'ciąg znaków',
              'wyliczeniowego'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Obiekt typu array w języku Javascript służy do przechowywania',
            answers: [
              'wielu wartości dowolnego typu',
              'wielu wartości lub funkcji',
              'wielu wartości wyłącznie liczbowych',
              'wielu wartości wyłącznie tekstowych'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Ukrywanie pewnych pól lub metod obiektów danej klasy tak, aby były one dostępne tylko metodom wewnętrznym tej klasy lub funkcjom zaprzyjaźnionym, to',
            answers: [
              'hermetyzacja',
              'polimorfizm',
              'konkatenacja',
              'dziedziczenie'
            ],
            correctAnswer: 0
          },
          {
            question: ' Odwoływanie funkcji do samej siebie to',
            answers: [
              'rekurencja',
              'iteracja',
              'hermetyzacja',
              'dziedziczenie'
            ],
            correctAnswer: 0
          },
          {
            question: ' W języku PHP zmienna $_GET jest zmienną',
            answers: [
              'predefiniowaną, używaną do przekazywania danych do skryptów PHP poprzez adres strony',
              'predefiniowaną, używaną do gromadzenia wartości formularza po nagłówkach zlecenia HTTP (danych z formularza nie można zobaczyć w adresie)',
              'zdefiniowaną przez twórcę strony, służącą do przekazywania danych z formularza przez adres strony',
              'zwykłą, zdefiniowaną przez twórcę strony'
            ],
            correctAnswer: 0
          },
          {
            question: ' W języku PHP w instrukcji switch musi występować',
            answers: [
              'konstrukcja switch(wyrażenie)',
              'instrukcja default',
              'przynajmniej dwie instrukcje case',
              'instrukcja break po każdej instrukcji case'
            ],
            correctAnswer: 0
          },
          {
            question: ' Konstruktor w języku PHP jest metodą o nazwie',
            answers: ['_construct', '_new', '_open', '_create'],
            correctAnswer: 0
          },
          {
            question: ' Debugger to program służący do',
            answers: [
              'wyszukiwania błędów w kodzie programu',
              'badania właściwości programu',
              'sprawdzania szybkości programu',
              'zoptymalizowanie pamięci używanej przez aplikację'
            ],
            correctAnswer: 0
          },
          {
            question: ' Kod zamieszczony w ramce spowoduje wypisanie liczb',
            answers: [
              '2 4 6 8 10',
              '2 4 6 8',
              '1 3 5 7 9',
              '1 2 3 4 5 6 7 8 9 10'
            ],
            correctAnswer: 0,
            img: 'e14/23.jpg'
          },
          {
            question:
              ' Który kod jest alternatywny do kodu zamieszczonego w ramce?',
            answers: ['A', 'B', 'C', 'D'],
            correctAnswer: 0,
            img: 'e14/24.jpg'
          },
          {
            question:
              ' Zamieszczony w ramce fragment skryptu w języku JavaScript',
            answers: [
              'przypisze zmiennej s długość napisu ze zmiennej t',
              'przypisze zmienniej s zmienną t',
              'wyświetli długość napisu ze zmiennej t',
              'przypisze zmiennej s fragment napisu ze zmiennej t, o określonej przez zmienną length długości'
            ],
            correctAnswer: 0,
            img: 'e14/25.jpg'
          },
          {
            question:
              ' Zamieszczony w ramce fragment kodu w JavaScript wypisze',
            answers: ['"ze"', '"wo"', '"owodzeni"', '"wodzenia"'],
            correctAnswer: 0,
            img: 'e14/26.jpg'
          },
          {
            question: ' Który fragment kodu JavaScript zwróci wartość true?',
            answers: [
              '"def" > "abc"',
              '"a" > "b"',
              '"ab" > "c"',
              '"abc" > "def"'
            ],
            correctAnswer: 0
          },
          {
            question: ' W kodzie PHP znak "//" oznacza',
            answers: [
              'początek komentarza jednoliniowego',
              'początek skryptu',
              'operator alernatywy',
              'operator dzielenia całkowitego'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Zapisując hasło użytkownika serwisu WWW (np. bankowości internetowej), w celu jego zabezpieczenia przed odtajnieniem, zwykle używa się funkcji',
            answers: [
              'klucza',
              'cyklometrycznych',
              'abstrakcyjnych',
              'mieszających'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' W celu określenia wysokości obrazka wyświetlonego na stronie WWW należy wykorzystać właściwość CSS o nazwie',
            answers: ['height', 'width', 'padding', 'margin'],
            correctAnswer: 0
          },
          {
            question:
              ' Aby ustawić czcionkę Verdana w kodzie CSS, należy wykorzystać właściwość',
            answers: [
              'font-family: Verdana;',
              'font-style: Verdana;',
              'font-name: Verdana;',
              'font-weight: Verdana;'
            ],
            correctAnswer: 0
          },
          {
            question: ' Funkcja zapisana językiem PHP służy do',
            answers: [
              'pobrania danych z bazy danych',
              'połączenia z bazą danych',
              'ustawienia hasła do bazy danych',
              'zabezpieczenia bazy danych'
            ],
            correctAnswer: 0,
            img: 'e14/27.jpg'
          },
          {
            question:
              ' Kwerenda pozwalająca na wprowadzenie zmian w wielu rekordach lub przeniesienie wielu rekordów przy użyciu pojedynczej operacji, nosi nazwę kwerendy',
            answers: [
              'funkcjonalnej',
              'krzyżowej',
              'wybierającej',
              'parametrycznej'
            ],
            correctAnswer: 0
          },
          {
            question: ' Wskaż rezultat działania fragmentu kodu JavaScript',
            answers: [
              'Dodanie akapitu na koniec strony',
              'Usunięcie akapitu ze strony',
              'Wyświetlenie okna dialogowego z napisem akapit',
              'Dodanie akapitu na początku strony'
            ],
            correctAnswer: 0,
            img: 'e14/28.jpg'
          },
          {
            question:
              ' Fizyczny model replikacji bazy danych przedstawiony na rysunku jest modelem',
            answers: [
              'centralnego wydawcy',
              'rozproszonym',
              'centralnego subskrybenta',
              'równorzędnym'
            ],
            correctAnswer: 0,
            img: 'e14/29.jpg'
          },
          {
            question:
              ' Za pomocą którego protokołu należy wysłać pliki na serwer WWW?',
            answers: ['FTP', 'DHCP', 'POP3', 'DNS'],
            correctAnswer: 0
          },
          {
            question:
              ' Wynikiem działania zamieszczonej pętli zapisanej językiem PHP jest wypisanie kolejnych liczb',
            answers: ['od 10 do 1', 'od 1 do 10', 'od 10 do 2', 'od 2 do 10'],
            correctAnswer: 0,
            img: 'e14/30.jpg'
          },
          {
            question:
              ' Które z poleceń naprawi uszkodzoną tabelę w języku SQL?',
            answers: [
              'REPAIR TABLE tblname',
              'REGENERATE TABLE tbl_name',
              'OPTIMIZE TABLE tbl_name',
              'ANALYZE TABLE tbl_name'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Który z wymienionych formatów plików graficznych obsługuje przezroczystość?',
            answers: ['PNG', 'JPG', 'NEF', 'BMP'],
            correctAnswer: 0
          },
          {
            question:
              ' Który zapis stylu CSS ustawi tło bloku na kolor niebieski?',
            answers: [
              'div {background-color: blue;}',
              'div {shadow: blue;}',
              'div {border-color: blue;}',
              'div {color: blue;}'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Domyślna nazwa pliku konfiguracyjnego serwera Apache to',
            answers: [
              '.htaccess',
              '.configuration',
              'configuration.php',
              'htaccess.cnf'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Organizacja zajmująca się ustalaniem standardu dla języka HTML nosi nazwę',
            answers: ['W3C', 'ISO', 'NASK', 'WYSIWYG'],
            correctAnswer: 0
          },
          {
            question: ' Który z wymienionych systemów nie jest systemem CMS?',
            answers: ['Adobe Flash', 'Joomla', 'WordPress', 'Drupal'],
            correctAnswer: 0
          },
          {
            question:
              ' Która ze zdefiniowanych funkcji w języku PHP jako wynik zwraca połowę kwadratu wartości przekazanej?',
            answers: [
              'function licz($a) { return $a*$a/2; }',
              'function licz($a) { echo $a*$a/2; }',
              'function licz($a) { return $a/2; }',
              'function licz($a) { echo $a/2; }'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' W strukturalnych językach programowania w celu przechowania informacji o 50 uczniach (ich imionach, nazwiskach, średniej ocen) należy użyć',
            answers: [
              'tablicy 50 elementów o składowych strukturalnych',
              'struktury 50 elementów o składowych typu tablicowego',
              'tablicy 50 elementów o składowych łańcuchowych',
              'klasy 50 elementów typu tablicowego'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Aby zobaczyć wyniki działania skryptu napisanego w języku PHP, będącego elementem strony WWW, musi być on',
            answers: [
              'zinterpretowany po stronie serwera',
              'skompilowany po stronie klienta',
              'skompilowany po stronie serwera',
              'zinterpretowany po stronie klienta'
            ],
            correctAnswer: 0
          },
          {
            question: ' Projektowanie logicznego układu witryny polega na',
            answers: [
              'rozmieszczeniu elementów w konkretnych miejscach witryny',
              'opracowaniu zestawu grafik dla witryny',
              'zdefiniowaniu treści witryny',
              'ustaleniu adresów URL dla podstron witryny'
            ],
            correctAnswer: 0
          },
          {
            question: ' Prosta animacja może być zapisana w formacie',
            answers: ['GIF', 'PSD', 'BMP', 'TIFF'],
            correctAnswer: 0
          },
          {
            question:
              ' Która z instrukcji umożliwia wysłanie tekstu do przeglądarki?',
            answers: ['echo', 'exit', 'break', 'type'],
            correctAnswer: 0
          },
          {
            question:
              ' Aby stworzyć tabelę w bazie danych, należy zastosować polecenie SQL',
            answers: ['CREATE TABLE', 'ADD TABLE', 'NEW TABLE', 'PLUS TABLE'],
            correctAnswer: 0
          },
          {
            question:
              ' Zdarzenie JavaScript, będące reakcją na pojedynczo kliknięty dowolny element strony, nosi nazwę',
            answers: ['onClick', 'onDblClick', 'onLoad', 'onKeyDown'],
            correctAnswer: 0
          },
          {
            question: ' W skład typowego frameworka wchodzą',
            answers: [
              'zarządzanie komunikacją z bazą danych, mechanizm uruchamiania i przetwarzania akcji',
              'domena i obsługa błędów',
              'obsługa formularzy i wbudowany serwer',
              'mechanizm uruchamiania i przetwarzania akcji, oraz certyfikat http'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' W celu stworzenia relacji wiele do wielu łączącej tabele A i B wystarczy, że',
            answers: [
              'zdefiniuje się trzecią tabelę z kluczami obcymi do tabel A i B',
              'tabela A będzie zawierała te same pola co tabela B',
              'wiele rekordów z tabeli A zduplikuje się w tabeli B',
              'tabelę A połączy się z tabelą B poprzez zdefiniowanie kluczy obcych'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' W celu zapewnienia spójności danych w bazie programu Microsoft Access należy skorzystać',
            answers: [
              'z więzów integralności',
              'z kwerendy aktualizującej',
              'z defragmentacji bazy',
              'z archiwizacji bazy'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' W załączonym fragmencie kodu CSS kolor jest zapisany w postaci',
            answers: ['szesnastkowej', 'HSL', 'dziesiętnej', 'CMYK'],
            correctAnswer: 0,
            img: 'e14/31.jpg'
          },
          {
            question:
              ' W języku skryptowym JavaScript zmienne mogą być deklarowane',
            answers: [
              'w momencie pierwszego użycia zmiennej',
              'tylko na początku skryptu',
              'tylko jeśli podamy typ zmiennej i jej nazwę',
              'zawsze z poprzedzającym nazwę znakiem $'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' W językach programowania zmienna typu integer służy do przechowywania',
            answers: [
              'liczby całkowitej',
              'znaku',
              'liczby rzeczywistej',
              'wartości logicznej'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Jeśli rozmiar pliku graficznego jest zbyt duży do publikacji w Internecie, należy',
            answers: [
              'zmniejszyć jego rozdzielczość',
              'dodać kanał alfa',
              'zwiększyć jego głębię kolorów',
              'zapisać w formacie BMP'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Które z poleceń umożliwia dodanie kolumny zadaniekompletne do tabeli zadania?',
            answers: [
              'ALTER TABLE zadania ADD COLUMN zadaniekompletne int',
              'ADD COLUMN zadaniekompletne WITH zadania',
              'CREATEINDEX zadania ADD COLUMN zadaniekompletne int',
              'INSERT INTO zadania VALUES zadaniakompletne'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' W bazie danych, w celu uporządkowania listy uczniów według roku urodzenia, należy użyć polecenia',
            answers: [
              'SELECT imie,nazwisko,klasa from uczniowie order by rok_urodzenia',
              'SELECT imie,nazwisko,klasa from uczniowie group by rok_urodzenia',
              'SELECT imie,nazwisko,klasa from uczniowie order by nazwisko',
              'SELECT imie,nazwisko,klasa from uczniowie where rok_urodzenia = 1994'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Wskaż dwa sposoby zabezpieczenia bazy danych Microsoft Access',
            answers: [
              'Ustalanie hasła do otwarcia bazy danych oraz zabezpieczeń na poziomie użytkownika',
              'Zaszyfrowanie pliku bazy danych oraz SMSy z kodem autoryzującym',
              'Funkcje anonimowe oraz ustalenie hasła otwarcia bazy danych',
              'Ustalenie zabezpieczeń na poziomie użytkownika oraz sesji'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' W zamieszczonym przykładzie pseudoklasa hover sprawi, że styl pogrubiony będzie przypisany',
            answers: [
              'odnośnikowi, w momencie kiedy najechał na niego kursor myszy',
              'wszystkim odnośnikom nieodwiedzonym',
              'każdemu odnośnikowi niezależnie od aktualnego stanu',
              'wszystkim odnośnikom odwiedzonym'
            ],
            correctAnswer: 0,
            img: 'e14/32.jpg'
          },
          {
            question: ' Certyfikat SSL jest stosowany do',
            answers: [
              'zidentyfikowania właściciela domeny',
              'zapisania danych o sesjach tworzonych w witrynie',
              'deszyfracji transmitowanych danych',
              'blokowania szkodliwego oprogramowania w witrynie'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' W języku SQL przywilej SELECT polecenia GRANT pozwala użytkownikowi baz danych na',
            answers: [
              'odczyt danych z tabeli',
              'tworzenie tabeli',
              'usunięcie danych z tabeli',
              'modyfikowanie danych w tabeli'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' W języku HTML atrybut alt znacznika img jest wykorzystywany w celu zdefiniowania',
            answers: [
              'tekstu, który będzie wyświetlony, jeśli nie może być wyświetlona grafika',
              'ścieżki i nazwy pliku źródłowego grafiki',
              'podpisu, który zostanie wyświetlony pod grafiką',
              'atrybutów grafiki, takich jak rozmiar, obramowanie, wyrównanie'
            ],
            correctAnswer: 0
          },
          {
            question: ' Warunek zapisany językiem PHP wypisze liczbę, gdy',
            answers: [
              'jest ona parzysta',
              'jest ona liczbą pierwszą',
              'wynik dzielenia liczby przez 2 jest równy 0',
              'jest ona dodatnia'
            ],
            correctAnswer: 0,
            img: 'e14/33.jpg'
          },
          {
            question:
              ' Analizując przedstawiony kod zapisany w języku HTML, można stwierdzić, że w przeglądarce',
            answers: [
              'blok B będzie oddalony od bloku A o 20 px',
              'zostanie ustawiony dolny margines dla bloku B',
              'blok A będzie przesunięty w lewo o 20 px',
              'bloki A i B będą nachodzić na siebie.'
            ],
            correctAnswer: 0,
            img: 'e14/34.jpg'
          },
          {
            question:
              ' Baza danych zawiera tabelę o nazwie pracownicy o polach: nazwisko, imie, pensja, wiek. Jak wygląda składnia polecenia wyznaczającego średnią pensję pracowników?',
            answers: [
              'select AVG (pensja) from pracownicy',
              'select AVG (nazwisko) into pensja',
              'select VAR (pracownicy) into pensja',
              'select VAR (pensja) from nazwisko'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Do reprezentacji liczb zmiennoprzecinkowych w języku C stosowany jest typ',
            answers: ['double', 'int', 'bool', 'char'],
            correctAnswer: 0
          },
          {
            question:
              ' Polecenie SQL o treści: UPDATE artykuly SET cena = cena * 0.7 WHERE kod = 2; oznacza',
            answers: [
              'w tabeli artykuly obniża wartość każdego pola cena dla którego pole kod jest równe 2',
              'w tabeli artykuly obniża wartość każdego pola cena o 30% dla wszystkich artykułów',
              'wprowadzenie w tabeli artykuly nowych pól cena i kod',
              'wprowadzenie w tabeli artykuly pola o nazwie cena ze znacznikiem kod'
            ],
            correctAnswer: 0
          },
          {
            question: ' Do edycji grafiki wektorowej stosuje się program',
            answers: ['Corel Draw', 'Paint', 'Audacity', 'Wordpad'],
            correctAnswer: 0
          },
          {
            question:
              ' W programowaniu obiektowym mechanizm współdzielenia pól i metod klasy w taki sposób, że klasa pochodna zawiera metody zdefiniowane w klasie bazowej nazywa się',
            answers: [
              'dziedziczeniem',
              'hermetyzacją',
              'wirtualizacją',
              'polimorfizmem'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Który z wymienionych znaczników języka HTML nie jest stosowany w celu formatowania tekstu?',
            answers: ['<div>', '<em>', '<sub>', '<strong>'],
            correctAnswer: 0
          },
          {
            question:
              ' Aby zdefiniować w języku HTML listę nienumerowaną, należy użyć znacznika',
            answers: ['<ul>', '<dd>', '<dt>', '<ol>'],
            correctAnswer: 0
          },
          {
            question:
              ' W języku CSS właściwość font-size przyjmuje, według słów kluczowych, wartości',
            answers: [
              'ze zbioru xx-small, x-small, medium, large, x-large, xx-large',
              'tylko big i small',
              'wyłączenie small, medium, large',
              'jedynie small, smaller,large, larger'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' W języku CSS, w celu zdefiniowania wewnętrznego górnego marginesu, czyli odstepu między elementem a otaczającym go obramowaniem, należy użyć polecenia',
            answers: ['padding-top', 'outline-top', 'border-top', 'local-top'],
            correctAnswer: 0
          },
          {
            question: ' Funkcja edytor WYSIWYG Adobe Dreamweaver służy do',
            answers: [
              'wyświetlania interaktywnego drzewa struktury HTML dla zawartości statycznej i dynamicznej',
              'definiowania kaskadowych arkuszy stylów dołączonych do witryny',
              'formatowanie tekstu przy pomocy dostępnych znaczników',
              'tworzenia szablonu strony internetowej'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Aby witryna internetowa prawidłowo skalowała się w urządzeniach mobilnych, należy wielkość czcionki zdefiniować',
            answers: [
              'w procentach',
              'w pikselach',
              'w milimetrach',
              'tylko znacznikami big i small'
            ],
            correctAnswer: 0
          },
          {
            question: ' Znacznik meta języka HTML należy umieścić',
            answers: [
              'w części nagłówkowej witryny internetowej',
              'pomiędzy znacznikami body',
              'pomiędzy znacznikami paragrafu',
              'w stopce witryny internetowej'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Prawidłowy, zgodny ze standardem języka XHTML, zapis samozamykającego się znacznika odpowiadającego za łamanie linii ma postać',
            answers: ['<br />', '</ br>', '</br/>', '<br> </br>'],
            correctAnswer: 0
          },
          {
            question:
              ' Najprostszą i najmniej pracochłonną metodą przetestowania działania witryny internetowej w wielu przeglądarkach i ich różnych wersjach jest',
            answers: [
              'skorzystanie z emulatora przeglądarek internetowych np. Browser Sandbox',
              'skorzystanie z walidatora języka HTML',
              'zainstalowanie na kilku komputerach różnych przeglądarek i testowanie witryny',
              'testowanie witryny w programie Internet Explorer, zakładając kompatybilność innych przeglądarek'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Aby przenieść witrynę na serwer, można skorzystać z oprogramowania',
            answers: ['FileZilla', 'Bugzilla', 'Go!Zilla', 'CloneZilla'],
            correctAnswer: 0
          },
          {
            question:
              ' Kolor zapisany kodem RGB, o wartości rgb(255, 128, 16) w kodzie szesnastkowym będzie miał wartość:',
            answers: ['#ff8010', '#008010', '#ff0f10', '#ff8011'],
            correctAnswer: 0
          },
          {
            question: ' Plik graficzny należy zapisać w formacie GIF, jeżeli',
            answers: [
              'jest potrzeba zapisu obrazu lub animacji',
              'jest to grafika wektorowa',
              'jest to obraz stereoskopowy',
              'jest potrzeba zapisu obrazu bez kompresji'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Aby dopasować dźwięk do danego poziomu głośności, należy użyć efektu',
            answers: [
              'normalizacji',
              'wyciszenia',
              'podbicia basów',
              'usuwania szumów'
            ],
            correctAnswer: 0
          },
          {
            question: ' Instrukcja DROP języka SQL ma za zadanie',
            answers: [
              'usunąć istniejący obiekt',
              'zmienić parametry obiektu',
              'zaktualizować dane obiektu',
              'dodać nowy obiekt'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Baza danych zawiera tabelę uczniowie z polami: imie, nazwisko, klasa. Aby odnaleźć imiona i nazwiska tych uczniów, których nazwiska rozpoczynają się literą M, należy zastosować polecenie SQL',
            answers: [
              'SELECT nazwisko, imie FROM uczniowie WHERE nazwisko LIKE "M%";',
              'SELECT nazwisko, imie FROM uczniowie WHERE nazwisko IN "M%";',
              'SELECT nazwisko, imie FROM uczniowie ORDER BY nazwisko = "M%";',
              'SELECT nazwisko, imie FROM uczniowie ORDER BY nazwisko IN "M%";'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Baza danych zawiera tabele z polami: . Aby wyświetlić wszystkie nazwy artykułów wyłącznie typu pralka, dla których cena jest z przedziału 1000 PLN i 1500 PLN, należy zastosować polecenie',
            answers: [
              'SELECT nazwa FROM artykuly WHERE typ="pralka" AND cena BETWEEN 1000 AND 1500;',
              'SELECT nazwa FROM artykuly WHERE typ="pralka" AND cena FROM 1000 TO 1500;',
              'SELECT nazwa FROM artykuly WHERE typ="pralka" OR cena BETWEEN 1000 OR 1500;',
              'SELECT nazwa FROM artykuly WHERE typ="pralka" OR cena BETWEEN 1000 AND 1500;'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Wartość pola tabeli pełniącego rolę klucza podstawowego',
            answers: [
              'musi być unikalna',
              'jest zawsze typu numerycznego',
              'służy do szyfrowania zawartości tabeli',
              'może przyjmować wartość pustą (NULL)'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Aby utworzyć relację jeden do wielu, w tabeli po stronie , należy zdefiniować',
            answers: [
              'klucz obcy wskazujący na klucz podstawowy tabeli po stronie',
              'klucz obcy wskazujący na klucz obcy tabeli po stronie',
              'klucz sztuczny odnoszący się do kluczy podstawowych obu tabel',
              'klucz podstawowy wskazujący na klucz podstawowy tabeli po stronie'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Narzędziem służącym do grupowania i prezentowania informacji z wielu rekordów w celu ich drukowania lub rozpowszechniania jest',
            answers: ['raport', 'kwerenda', 'formularz', 'makropolecenie'],
            correctAnswer: 0
          },
          {
            question:
              ' Aby uprościć wprowadzenie i edytowanie danych w tabeli, należy zdefiniować',
            answers: ['formularz', 'kwerendę SELECT', 'raport', 'filtr'],
            correctAnswer: 0
          },
          {
            question:
              ' Baza danych 6-letniej szkoły podstawowej zawiera tabelę z polami: . Wszyscy uczniowie klas 1-5 zdali do następnej klasy. Aby zwiększyć wartość w polu klasa o 1 należy użyć polecenia',
            answers: [
              'UPDATE szkola SET klasa=klasa+1 WHERE klasa>=1 AND klasa <=5;',
              'SELECT szkola FROM klasa=klasa+1 WHERE klasa >=1 AND klasa <=5;',
              'SELECT nazwisko, imie FROM klasa=klasa+1 WHERE klasa>1 OR klasa <5;',
              'UPDATE nazwisko, imie SET klasa=klasa+1 WHERE klasa>1 OR klasa<5;'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Uprawnienia obiektowe, nadawane użytkownikom serwera bazy danych, mogą pozwalać lub zabraniać',
            answers: [
              'wykonywać operacje na bazie, takie jak wstawanie lub modyfikowanie danych',
              'dziedziczyć uprawnienia',
              'modyfikować role i konta użytkowników',
              'wykonywać instrukcje, takie jak tworzenie kopii zapasowej'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Przed wykonaniem kopii bezpieczeństwa bazy danych, tak aby kopia ta była poprawna i możliwa do późniejszego odtworzenia, należy sprawdzić',
            answers: [
              'spójność bazy danych',
              'możliwość udostępnienia bazy danych',
              'prawa dostępu do serwera bazy danych',
              'poprawność składni zapytań'
            ],
            correctAnswer: 0
          },
          {
            question: ' W MS SQL Server polecenie RESTORE DATABASE służy do',
            answers: [
              'odtworzenia bazy danych z kopii bezpieczeństwa',
              'odświeżenia bazy danych z kontrolą więzów integralności',
              'przebudowania bazy danych w oparciu o buforowane dane',
              'usunięcia bazy danych z serwera centralnego subskrybenta'
            ],
            correctAnswer: 0
          },
          {
            question: ' W języku PHP zmienna typu float przyjmuje wartości',
            answers: [
              'zmiennoprzecinkowe',
              'logiczne',
              'nieliczbowe',
              'tylko całkowite'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Dany jest fragment kodu PHP z zdeklarowaną zmienną typu tablicowego. W wyniku wykonania kodu zostanie wpisane imię',
            answers: ['Krzysztof', 'Anna', 'Tomasz', 'Aleksandra'],
            correctAnswer: 0,
            img: 'e14/35.jpg'
          },
          {
            question: ' Przedstawiony kod języka PHP',
            answers: [
              'definiuje tablicę z trzema wartościami',
              'jest błędny, nieznany operator =>',
              'definiuje tablicę z sześcioma wartościami',
              'jest błędny, indeksami tablicy mogą być tylko liczby całkowite'
            ],
            correctAnswer: 0,
            img: 'e14/36.jpg'
          },
          {
            question: ' W języku JavaScript poprawnie nadana zmienna to',
            answers: ['imie2', '#imie', 'imię2', 'imię%'],
            correctAnswer: 0
          },
          {
            question:
              ' Zakładając, że zmienne: a, b, c przechowują wartości numeryczne, wynikiem działania warunku będzie wypisanie liczby',
            answers: [
              'największej',
              'najmniejszej',
              'nieparzystej',
              'parzystej'
            ],
            correctAnswer: 0,
            img: 'e14/37.jpg'
          },
          {
            question:
              ' Fragment kodu języku PHP ma następującą postać. Wynikiem działania pętli będzie wypisanie liczb:',
            answers: [
              '0,4,8,12,16,20',
              '0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20',
              '0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19',
              '0,4,8,12,16'
            ],
            correctAnswer: 0,
            img: 'e14/38.jpg'
          },
          {
            question: ' Zadaniem funkcji zapisanej w języku PHP jest',
            answers: [
              'Zwrócenie wartości 1, gdy liczba jest parzysta',
              'Wypisanie liczby parzystej',
              'Wypisanie liczby nieparzystej',
              'Zwrócenie wartości 0, gdy liczba jest parzysta'
            ],
            correctAnswer: 0,
            img: 'e14/39.jpg'
          },
          {
            question: ' Wykonanie kodu JavaScript w przeglądarce wymaga',
            answers: [
              'interpretowania',
              'debugowania',
              'kompilowania',
              'zamiany na kod maszynowy'
            ],
            correctAnswer: 0
          },
          {
            question: ' Kod strony WWW napisanej w języku PHP',
            answers: [
              'jest wykonywany po stronie serwera',
              'jest wykonywany po stronie klienta',
              'może być uruchomiony bez obsługi serwera WWW',
              'jest przetwarzany na tych samych zasadach co JavaScript'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Zakładając, że zmienna tablicowa $tab jest wypełniona liczbami naturalnymi, wynikiem programu będzie wypisanie',
            answers: [
              'największego elementu tablicy',
              'najmniejszego elementu tablicy',
              'elementu tablicy, który jest równy wartości $tab[0]',
              'tych elementów, które są większe od zmiennej $liczba'
            ],
            correctAnswer: 0,
            img: 'e14/40.jpg'
          },
          {
            question:
              ' Fragment kodu w języku JavaScript realizujący dodawanie dwóch liczb ma następującą postać. Aby dodawanie wykonane było po kliknięciu przycisku o nazwie , należy w wykropkowane miejsce wstawić',
            answers: [
              '<button onclick="return dodaj()">dodaj</button>',
              '<button onselect="return dodaj()">dodaj</button>',
              '<button onselect="return dodaj()">oblicz</button>',
              '<button onclick="return oblicz()">dodaj</button>'
            ],
            correctAnswer: 0,
            img: 'e14/41.jpg'
          },
          {
            question:
              ' Komentarz w języku JavaScript rozpoczyna się od znaku lub znaków',
            answers: ['//', '\x3c!--', '<?', '#'],
            correctAnswer: 0
          },
          {
            question:
              ' Polecenie pg_connect języka PHP służy do połączenia z bazą',
            answers: ['PostgreSQL', 'mySQL', 'MS SQL', 'MS ACCESS'],
            correctAnswer: 0
          },
          {
            question:
              ' Aby zamieścić aplikację PHP w internecie, należy jej pliki źródłowe skopiować na serwer za pomocą protokołu',
            answers: ['FTP', 'HTTP', 'SMTP', 'NNTP'],
            correctAnswer: 0
          },
          {
            question:
              ' Personalizowanie wyglądu strony dla danego użytkownika i jego identyfikacja w serwisie są możliwe dzięki mechanizmowi',
            answers: [
              'cookie',
              'obiektów DOM',
              'łączenia z bazą',
              'formularzy'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Automatyczna weryfikacja właściciela strony udostępnianej przez protokół HTTPS jest możliwa dzięki',
            answers: [
              'certyfikatowi SSL',
              'danym kontaktowym na stronie',
              'kluczom prywatnym',
              'danym whois'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Do grupowania obszarów na poziomie bloków, które będą formatowane za pośrednictwem znaczników, należy użyć',
            answers: ['<div>', '<p>', '<span>', '<param>'],
            correctAnswer: 0
          },
          {
            question: ' Znacznik <i> języka HTML służy do',
            answers: [
              'zmiany kroju pisma na pochylony',
              'umieszczenia obrazka',
              'zdefiniowania formularza',
              'zdefiniowania nagłówka w tekście'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Poniżej przedstawiono fragment kodu języka HTML. Jest on definicją listy:',
            answers: ['C', 'A', 'B', 'D'],
            correctAnswer: 0,
            img: 'e14/42.jpg'
          },
          {
            question:
              ' Kod języka CSS można umieścić wewnątrz kodu HTML, posługując się znacznikiem',
            answers: ['<style>', '<head>', '<meta>', '<body>'],
            correctAnswer: 0
          },
          {
            question:
              ' Chcąc zdefiniować formatowanie tabeli w języku CSS w taki sposób, aby wiersz, który jest aktualnie wskazywany kursorem myszy, został wyróżniony np. innym kolorem, należy zastosować',
            answers: [
              'pseudoklasę :hover',
              'pseudoklasę :visited',
              'pseudoelement :first-line',
              'nowy selektor klasy dla wiersza tabeli'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Aby uzyskać efekt rozstrzelenia liter w selektorze CSS, należy użyć właściwości',
            answers: [
              'letter-spacing',
              'letter-transform',
              'text-decoration',
              'text-space'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Blok deklaracji postaci background-attachment: scroll powoduje, że',
            answers: [
              'tło strony będzie przewijane razem z tekstem',
              'grafika tła będzie powtarzana (kafelki)',
              'tło strony będzie stałe, a tekst będzie się przewijał',
              'grafika tła będzie wyświetlona w prawym górnym rogu strony'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Ikona, która wyświetlona jest przed adresem, w polu adresowym przeglądarki internetowej lub przy tytule otwartej karty przeglądarki nosi nazwę',
            answers: ['favicon', 'iConji', 'webicon', 'emoticon'],
            correctAnswer: 0
          },
          {
            question:
              ' Aby poprawnie zdefiniować hierarchiczną strukturę tekstu witryny internetowej, należy zastosować',
            answers: [
              'znaczniki <h1>, <h2> oraz <p>',
              'znacznik <div>',
              'znaczniki <frame> i <table>',
              'znacznik <p> z formatowaniem'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Która z reguł walidacji strony internetowej jest błędna?',
            answers: [
              'Jeżeli w instrukcji używa się kilku atrybutów, ich kolejność powinna być zgodna z alfabetem, np. <img alt="...." src="...." />',
              'Wyłączanie znaczników musi następować w odwrotnej kolejności, niż były one włączane, np. <p>....<big>...</big></p>',
              'Znaczniki, oprócz samozamykających się, działają do momentu ich wyłączenia znakiem "/", np. <p>...</p>',
              'W znacznikach nie są rozróżniane wielkie i małe litery, np. <p> i <P> to ten sam znacznik'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Oznaczenie barwy w postaci #ff00e0 jest równoważne zapisowi',
            answers: [
              'rgb(255,0,224)',
              'rgb(f,0,e0)',
              'rgb(ff,0,e0)',
              'rgb(255,0,128)'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Formatem zapisu rastrowych plików graficznych z kompresją bezstratną jest',
            answers: ['PNG', 'JNG', 'CDR', 'SVG'],
            correctAnswer: 0
          },
          {
            question:
              ' Podczas obróbki grafiki rastrowej w programie z obsługą kanałów dodanie kanału alfa oznacza',
            answers: [
              'dodanie warstwy z przezroczystością',
              'określenie poprawnego balansu bieli',
              'zwiększenie głębi ostrości obrazu',
              'wyostrzenie krawędzi obrazu'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Aby pozbyć się nienaturalnego odwzorowania ukośnych krawędzi linii w grafice rastrowej, czyli tak zwanego schodkowania, należy zastosować filtr',
            answers: ['antyaliasingu', 'szumu', 'gradientu', 'pikselizacji'],
            correctAnswer: 0
          },
          {
            question: ' Formatem bezstratnej kompresji dźwięku jest',
            answers: ['FLAC', 'MP3', 'AAC', 'WWA'],
            correctAnswer: 0
          },
          {
            question: ' W języku SQL polecenie INSERT INTO',
            answers: [
              'wprowadza dane do tabeli',
              'dodaje tabelę',
              'dodaje pola do tabeli',
              'aktualizuje rekordy określoną wartością'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' W języku SQL klauzula DISTINCT instrukcji SELECT sprawi, że zwrócone dane',
            answers: [
              'nie będą zawierały powtórzeń',
              'zostaną posortowane',
              'będą spełniały określony warunek',
              'będą pogrupowane według określonego pola'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Zdefiniowano bazę danych z tabelą sklepy o polach: nazwa, ulica, miasto, branza. Aby wyszukać wszystkie nazwy sklepów spożywczych zlokalizowanych wyłącznie we Wrocławiu, należy posłużyć się kwerendą:',
            answers: [
              'SELECT nazwa FROM sklepy WHERE branza="spozywczy" AND miasto="Wrocław";',
              'SELECT sklepy FROM nazwa WHERE branza="spożywczy" BETWEEN miasto="Wrocław";',
              'SELECT sklepy FROM branza="spożywczy" WHERE miasto="Wrocław";',
              'SELECT nazwa FROM sklepy WHERE branza="spozywczy" OR miasto="Wrocław";'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Zdefiniowano bazę danych z tabelą podzespoły o polach: model, producent, typ, cena. Aby wyświetlić wszystkie modele pamięci RAM firmy Kingston w kolejności od najtańszej do najdroższej, należy posłużyć się kwerendą:',
            answers: [
              'SELECT model FROM podzespoly WHERE typ="RAM" AND producent="Kingston" ORDER BY cena ASC;',
              'SELECT model FROM podzespoly WHERE typ="RAM" AND producent="Kingston" ORDER BY cena DESC;',
              'SELECT model FROM podzespoly WHERE typ="RAM" OR producent="Kingston" ORDER BY cena DESC;',
              'SELECT model FROM producent WHERE typ="RAM" OR producent="Kingston" ORDER BY podzespoly ASC;'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' W celu przyspieszenia operacji na bazie danych należy do pól często wyszukiwanych lub sortowanych',
            answers: [
              'utworzyć indeks',
              'dodać klucz obcy',
              'dodać więzy integralności',
              'stworzyć osobną tabelę przechowującą tylko te pola'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Jednoznacznym identyfikatorem rekordu w bazie danych jest pole',
            answers: [
              'klucza podstawowego',
              'klucza obcego',
              'numeryczne',
              'relacji'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Zdefiniowano bazę danych z tabelą mieszkancy o polach: nazwisko, imie, miasto. Następnie stworzono następujące zapytanie do bazy: SELECT nazwisko, imie FROM mieszkancy WHERE miasto="Poznań" UNION ALL SELECT nazwisko, imie FROM mieszkancy WHERE miasto="Kraków"; Wskaż zapytanie, które zwróci identyczne dane:',
            answers: [
              'SELECT nazwisko, imie FROM mieszkancy WHERE miasto="Poznań" OR miasto="Kraków";',
              'SELECT nazwisko, imie FROM mieszkancy AS "Poznań" OR "Kraków";',
              'SELECT nazwisko, imie FROM mieszkancy WHERE miasto HAVING "Poznań" OR "Kraków";',
              'SELECT nazwisko, imie FROM mieszkancy WHERE miasto BETWEEN "Poznań" OR "Kraków";'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' W bazie danych sklepu istnieje tabela artykuly zawierająca pole o nazwie nowy. Aby to pole wypełnić wartościami TRUE dla każdego rekordu, należy zastosować kwerendę',
            answers: [
              'UPDATE artykuly SET nowy=TRUE;',
              'INSERT INTO artykuly VALUE nowy=TRUE;',
              'UPDATE nowy FROM artykuly VALUE TRUE;',
              'INSERT INTO nowy FROM artykuly SET TRUE;'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' W MS SQL Server predefiniowana rola o nazwie dbcreator pozwala użytkownikowi na',
            answers: [
              'tworzenie, modyfikowanie, usuwanie i odzyskiwanie bazy danych',
              'zarządzanie plikami na dysku',
              'zarządzanie bezpieczeństwem systemu',
              'wykonywanie każdej operacji na serwerze i posiadanie prawa własności każdej bazy'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Aby odebrać prawa dostępu do serwera MySQL, należy posłużyć się instrukcją',
            answers: ['REVOKE', 'USAGE', 'GRANT', 'DELETE'],
            correctAnswer: 0
          },
          {
            question: ' Za pomocą polecenia BACKUP LOG w MS SQL Server można',
            answers: [
              'wykonać kopię bezpieczeństwa dziennika transakcyjnego',
              'wykonać pełną kopię bezpieczeństwa',
              'zalogować sie do kopii bezpieczeństwa',
              'przeczytać komunikaty wygenerowane podczas tworzenia kopii'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Polecenie DBCC CHECKDB("sklepAGD", Repair_fast) w MS SQL Server',
            answers: [
              'sprawdzi spójność bazy danych i naprawi uszkodzone indeksy',
              'sprawdzi spójność określonej tabeli',
              'sprawdzi spójność bazy danych i wykona kopię bezpieczeństwa',
              'sprawdzi spójność określonej tabeli i naprawi uszkodzone rekordy'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Aby naprawić bazę danych w MySQL, należy użyć polecenia',
            answers: ['REPAIR', 'FIX', 'UPDATE', 'CHANGE'],
            correctAnswer: 0
          },
          {
            question:
              ' Aby zdefiniować łamanie linii tekstu, np. w zmiennej napisowej, należy posłużyć się znakiem',
            answers: ['n', 'slash', 'b', 't'],
            correctAnswer: 0
          },
          {
            question:
              ' Dana jest tablica n-elementowa o nazwie t[n]. Zadaniem algorytmu zapisanego w postaci listy kroków jest wypisania sumy',
            answers: [
              'co drugiego elementu tablicy',
              'n-elementów tablicy',
              'sumy wszystkich elementów tablicy',
              'sumy tych elementów tablicy, których wartości są nieparzyste'
            ],
            correctAnswer: 0,
            img: 'e14/43.jpg'
          },
          {
            question:
              ' Interpreter PHP wygeneruje błąd i nie wykona kodu, jeżeli programista:',
            answers: [
              'nie postawi średnika po wyrażeniu w instrukcji if, jeśli po nim nastąpiła sekcja else',
              'będzie pisał kod bez wcięć',
              'będzie deklarował zmienne wewnątrz warunku',
              'pobierze wartość z formularza, w którym pole input nie było wypełnione'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Dana jest tablica o nazwie tab wypełniona liczbami całkowitymi różnymi od zera. Przedstawiony kod zapisany w języku PHP ma za zadanie:',
            answers: [
              'zamienić wszystkie elementy tablicy na liczby z przeciwnym znakiem',
              'obliczyć iloczyn wszystkich liczb w tablicy',
              'obliczyć wartość bezwzględną elementów tablicy',
              'zamienić elementy tablicy na wartości przechowywane w zmiennej liczba'
            ],
            correctAnswer: 0,
            img: 'e14/44.jpg'
          },
          {
            question:
              ' Warunek zapisany w JavaScript jest prawdziwy, gdy zmienna x przechowuje',
            answers: [
              'dowolną dodatnią wartość liczbową',
              'pusty napis',
              'wartość nie liczbową',
              'dowolną całkowitą wartość liczbową'
            ],
            correctAnswer: 0,
            img: 'e14/45.jpg'
          },
          {
            question:
              ' Przedstawiona funkcja zapisana kodem JavaScript ma za zadanie:',
            answers: [
              'zwrócić wynik potęgowania a^n',
              'wpisać kolejne liczby od a do n',
              'wpisać wyniki mnożenia a przez n',
              'zwrócić iloczyn kolejnych liczb od 1 do a'
            ],
            correctAnswer: 0,
            img: 'e14/46.jpg'
          },
          {
            question: ' Program debugger służy do:',
            answers: [
              'analizy wykonywanego programu w celu lokalizacji błędów',
              'interpretacji kodu w wirtualnej maszynie Java',
              'analizy kodu źródłowego w celu odnalezienia błędów składniowych',
              'tłumaczenia kodu zapisanego językiem wyższego poziomu na język maszynowy'
            ],
            correctAnswer: 0
          },
          {
            question: ' Funkcja phpinfo() pozwala na:',
            answers: [
              'uzyskanie informacji o środowisku pracy serwera obsługującego PHP',
              'debugowanie kodu PHP',
              'zainicjowanie kodu w języku PHP',
              'sprawdzanie wartości zmiennych użytych w kodzie PHP'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Którego języka należy użyć, aby zapisać skrypt wykonywany po stronie klienta w przegladarce internetowej?',
            answers: ['JavaScript', 'Perl', 'PHP', 'Python'],
            correctAnswer: 0
          },
          {
            question:
              ' W języku PHP pobrano z bazy danych wyniki działania kwerendy za pomocą polecenia mysql_query(). Aby otrzymać ze zwróconej kwerendy wierszy danych, należy zastosować polecenie:',
            answers: [
              'mysql_fetch_row()',
              'mysql_field_len()',
              'mysql_list_fields()',
              'mysql_fetch_lengths()'
            ],
            correctAnswer: 0
          },
          {
            question: ' Błędy interpretacji kodu PHP są zapisane:',
            answers: [
              'w logu pod warunkiem ustawienia odpowiedniego parametru w pliku php.ini',
              'w podglądzie zdarzeń systemu Windows',
              'w oknie edytora, w którym powstaje kod PHP',
              'nigdzie, są ignorowanie przez przeglądarkę oraz interpreter kodu PHP'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Do uruchomienia systemu CMS Joomla! wymagane jest środowisko:',
            answers: [
              'Apache, PHP i MySQL',
              'PHP i MySQL',
              'Apache i PHP',
              'IIS, PERL i MySQL'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' W języku HTML, aby uzyskać następujący efekt pogrubienia, pochylenia lub zapisania w górnym indeksie należy zapisać kod:',
            answers: [
              '<b>pogrubiony </b><i>pochylony</i> lub w <sup>górnym indeksie</sup>',
              '<i>pogrubiony <b>pochylony lub w </i><sup>górnym indeksie</sup>',
              '<i>pogrubiony </i><b>pochylony</b> lub w <sub>górnym indeksie</sub>',
              '<b>pogrubiony <i>pochylony</i></b> lub w <sub>górnym indeksie</sub>'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' W kodzie HTML zapisano w bloku tekst formatowany pewnym stylem. Aby wtrącić wewnątrz tekstu kilka słów formatowanych innym stylem, należy zastosować znacznik',
            answers: ['<span>', '<hr>', '<table>', '<section>'],
            correctAnswer: 0
          },
          {
            question:
              ' Który z zapisów znacznika <meta> jest prawidłowy ze względu na wykorzystane atrybuty?',
            answers: [
              '<meta name = "description" content = "Masz jakieś hobby? To jest strona dla Ciebie!">',
              '<meta background = blue>',
              '<meta name = "!DOCTYPE">',
              '<meta title = "Strona dla hobbystów">'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Który z wymienionych znaczników należy do części <head> dokumentu HTML?',
            answers: ['<title>', '<img>', '<span>', '<section>'],
            correctAnswer: 0
          },
          {
            question:
              ' W języku CSS poniższy zapis sprawi, że koloru zielonego będzie',
            answers: [
              'tło tekstu nagłówka drugiego stopnia',
              'tło całej strony',
              'czcionka nagłówka drugiego stopnia',
              'czcionka każdego nagłówka na stronie'
            ],
            correctAnswer: 0,
            img: 'e14/47.jpg'
          },
          {
            question:
              ' W języku CSS, aby formatować tekst poprzez przekreślenie, podkreślenie dolne lub górne, należy zastosować',
            answers: [
              'text-decoration',
              'text-align',
              'text-indent',
              'text-transform'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' W języku CSS poniższy zapis sprawi, że kolor żółty przyjmie czcionka',
            answers: [
              'odnośników, które otwierają sie w osobnej karcie',
              'tekstu paragrafu',
              'każdego odnośnika',
              'odnośników, które otwierają sie w tej samej karcie'
            ],
            correctAnswer: 0,
            img: 'e14/48.jpg'
          },
          {
            question:
              ' W języku CSS poniższy zapis użyty na stronie, na której jest kilka paragrafów, a każdy z nich ma po kilka linii sprawi, że',
            answers: [
              'pierwsza linia każdego paragrafu będzie miała większą czcionkę niż następne linie',
              'pierwsza linia każdego paragrafu będzie miała mniejszą czcionkę niż następne linie',
              'pierwszy paragraf na stronie będzie w całości miał powiększoną czcionkę',
              'całość tekstu paragrafu będzie powiększona o 150%'
            ],
            correctAnswer: 0,
            img: 'e14/49.jpg'
          },
          {
            question:
              ' Który znacznik lub grupa znaczników nie są stosowane do definiowania struktury strony HTML?',
            answers: [
              '<i>, <b>, <u>',
              '<header>, <footer>',
              '<section>',
              '<div>'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Który z przedstawionych kodów HTML sformatuje tekst według wzoru? (uwaga: słowo "stacji" jest zapisane większą czcionką niż reszta słów w tej linii)',
            answers: ['B', 'A', 'C', 'D'],
            correctAnswer: 0,
            img: 'e14/50.jpg'
          },
          {
            question:
              ' Kolor zapisany w postaci szesnastkowej o wartości #11FE07 w kodzie RGB ma postać',
            answers: [
              'rgb(17,254,7)',
              'rgb(17,FE,7)',
              'rgb(11,127,7)',
              'rgb(17,255,7)'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Które ze zdań jest prawdziwe w stosunku do grafiki rastrowej?',
            answers: [
              'Jest to prezentacja obrazu za pomocą pionowo-poziomej siatki odpowiednio kolorowanych pikseli na monitorze komputera, drukarce lub innym urządzeniu wyjściowym',
              'Podczas przekształcania polegającego na skalowaniu, skalowany obraz nie zmienia jakości',
              'Zapisywany obraz jest opisywany za pośrednictwem figur geometrycznych umieszczonych w układzie współrzędnych',
              'Grafika rastrowa nie jest zapisana w formacie WMF (ang. Windows Metafile Format - format metaplików w Windows)'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Który z formatów grafiki jest najbardziej odpowiedni do zapisu obrazu z przezroczystością na potrzeby strony internetowej?',
            answers: ['PNG', 'JPG', 'BMP', 'SVG'],
            correctAnswer: 0
          },
          {
            question:
              ' W czasie przetwarzania dźwięku, aby pozbyć się niechcianych odgłosów spowodowanych złą jakością mikrofonu, należy zastosować narzędzie',
            answers: ['usuwania szumów', 'echa', 'obwiedni', 'wyciszenia'],
            correctAnswer: 0
          },
          {
            question:
              ' Aby obraz zmieniał się płynnie w filmie, liczba klatek (nieprzenikających się wzajemnie) na sekundę musi znajdować się przynajmniej w zakresie',
            answers: ['24-30 fps', '16-19 fps', '20-23 fps', '31-36 fps'],
            correctAnswer: 0
          },
          {
            question:
              ' W poleceniu CREATE TABLE języku SQL atrybut określający, która kolumna tabeli jest kluczem podstawowym, to',
            answers: ['PRIMARY KEY', 'UNIQUE', 'MAIN KEY', 'IDENTITY FIELD'],
            correctAnswer: 0
          },
          {
            question:
              ' Dana jest tabela psy o polach: imie, rasa, telefon_wlasciciela, rok_szczepienia. Aby wyszukać telefony właścicieli, których psy były szczepione przed 2015 rokiem, należy użyć polecenia SQL',
            answers: [
              'SELECT telefon_wlasciciela FROM psy WHERE rok_szczepienia < 2015',
              'SELECT psy FROM rok_szczepienia < 2015',
              'SELECT imie, rasa FROM psy WHERE rok_szczepienia > 2015',
              'SELECT telefon_wlasciciela FROM psy WHERE rok_szczepienia > 2015'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Na rysunku została przedstawiona relacja jeden do wielu. Łączy ona',
            answers: [
              'klucz obcy rezyserzy_id tabeli filmy z kluczem podstawowym id tabeli rezyserzy',
              'klucz obcy rezyserzy_id tabeli filmy z kluczem obcym id tabeli rezyserzy',
              'klucz podstawowy id tabeli filmy z kluczem podstawowym id tabeli rezyserzy',
              'klucz podstawowy id tabeli z kluczem obcym rezyserzy_id tabeli rezyserzy'
            ],
            correctAnswer: 0,
            img: 'e14/51.jpg'
          },
          {
            question:
              ' W bazie danych sklepu spożywczego pod koniec dnia jest tworzony raport wyświetlający te produkty wraz z ich dostawcami, dla których stan magazynowy jest mniejszy niż 10 sztuk. Do zdefiniowania tego raportu posłużono się kwerendą',
            answers: ['SELECT', 'UPDATE', 'INSERT INTO', 'CHECK TABLE'],
            correctAnswer: 0
          },
          {
            question:
              ' Wskaż polecenie SQL dodające pole miesiacSiewu do istniejącej tabeli rosliny',
            answers: [
              'ALTER TABLE rosliny ADD miesiacSiewu int',
              'UPDATE rosliny ADD miesiacSiewu int',
              'CREATE TABLE rosliny {miesiacSiewu int}',
              'INSERT INTO rosliny VALUES (miesiacSiewu int)'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Polecenie serwera MySQL przedstawione poniżej sprawi, że użytkownikowi tkowal zostaną',
            answers: [
              'odebrane prawa usuwania i modyfikowania danych w tabeli pracownicy',
              'przydzielone prawa do usuwania i aktualizowania danych w tabeli pracownicy',
              'odebrane prawa usuwanie i dodawania rekordów w tabeli pracownicy',
              'przydzielone prawa wszelkiej zmiany struktury tabeli pracownicy'
            ],
            correctAnswer: 0,
            img: 'e14/52.jpg'
          },
          {
            question:
              ' W serwerze MySQL nadanie roli o nazwie DBManager przyznaje użytkownikowi prawa umożliwiające',
            answers: [
              'wszelkie operacje na bazach danych serwera',
              'monitorowanie serwera',
              'tworzenie użytkowników serwera i ustawianie im haseł',
              'wszystkie operacje na bazach danych i użytkownikach serwera'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' W bazie danych wykonano następujące polecenie dotyczące praw użytkownika adam. Po wykonaniu poleceń użytkownik adam będzie miał prawa do',
            answers: [
              'usunięcia tabeli lub jej rekordów',
              'aktualizowania danych i przeglądania tabeli klienci',
              'tworzenia tabeli klienci i aktualizowania w niej danych',
              'przeglądania tabeli klienci i wstawiania do niej sektorów'
            ],
            correctAnswer: 0,
            img: 'e14/53.jpg'
          },
          {
            question:
              ' Wskaż poprawną zasadę dotyczącą spójności danych w bazie danych',
            answers: [
              'pole klucza podstawowego nie może być puste',
              'pole klucza obcego nie może być puste',
              'pole klucza podstawowego musi posiadać utworzony indeks',
              'w relacji 1..n pole klucza obcego jest połączone z polem klucza obcego innej tabeli'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Aby naprawić uszkodzoną tabelę w MySQL, należy wydać polecenie',
            answers: [
              'REPAIR TABLE',
              'FIX TABLE',
              'CHECK TABLE',
              'RESOLVE TABLE'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' W formularzu dane z pola input o typie number zostały zapisane do zmiennej a, a następnie przetworzone w skrypcie JavaScript w następujący sposób. Zmienna z będzie typu',
            answers: [
              'zmiennoprzecinkowego',
              'NaN',
              'napisowego',
              'liczbowego, całkowitego'
            ],
            correctAnswer: 0,
            img: 'e14/54.jpg'
          },
          {
            question:
              ' Aby w pliku z rozszerzeniem php umieścić kod w języku PHP należy użyć znaczników',
            answers: [
              '<?php .......... ?>',
              '<php .......... />',
              '<php> ......... </php>',
              '<?php> ........ <php?>'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Ile iteracji będzie miała pętla zapisana w języku PHP, zakładając, że zmienna sterująca nie jest modyfikowana we wnętrzu pętli?',
            answers: ['6', '0', '5', '10'],
            correctAnswer: 0,
            img: 'e14/55.jpg'
          },
          {
            question:
              ' W JavaScript wynik operacji jest równy wartości NaN, jeśli skrypt próbował wykonać',
            answers: [
              'działanie arytmetyczne, a zawartość zmiennej była napisem',
              'funkcję parseFloat zamiast parseInt na zmiennej liczbowej',
              'działanie arytmetyczne na dwóch zmiennych liczbowych dodatnich',
              'funkcję sprawdzającą długość napisu, a zawartość zmiennej była liczbą'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' W instrukcji warunkowej języka JavaScript należy sprawdzić przypadek, gdy wartość zmiennej a jest z przedziału (0, 100), natomiast wartość zmiennej b jest większa od zera. Warunek taki jest prawidłowo zapisany w nastepujący sposób',
            answers: [
              'if (a>0 && a<100 && b>0)',
              'if (a>0 || a<100 || b<0)',
              'if ((a>0 || a<100) && b>0)',
              'if ((a>0 && a<100) || b<0)'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Dla dowolnego a z przedziału (0,99) zadaniem funkcji zapisanej w języku Java Script jest:',
            answers: [
              'wypisanie liczb z przedziału a...100 i zwrócenie wartości zmiennej n',
              'zwrócenie liczb z przedziału a..99',
              'wypisanie liczb z przedziału a..99 i zwrócenie wartości 100',
              'wypisanie wartości zmiennej a oraz zwrócenie wartości zmiennej n'
            ],
            correctAnswer: 0,
            img: 'e14/56.jpg'
          },
          {
            question: ' Zapis w języku JavaScript ma za zadanie',
            answers: [
              'utworzenie obiektu napis1 klasy napisy',
              'utworzenie nowej klasy napis1.',
              'wywołanie metody obiektu napisy',
              'zadeklarowanie zmiennej napis1 i wywołanie funkcji, której argumentem jest napis1'
            ],
            correctAnswer: 0,
            img: 'e14/57.jpg'
          },
          {
            question:
              ' Aby wykonać kod zapisany językiem PHP wystarczy, że w systemie zainstalowano',
            answers: [
              'serwer WWW z interpreterem PHP',
              'przeglądarkę internetową',
              'serwer WWW z serwerem MySQL',
              'serwer WWW, parser PHP oraz serwer MySQL'
            ],
            correctAnswer: 0
          },
          {
            question: ' Pętla zapisana w języku PHP wstawi do tablicy liczby',
            answers: [
              '0, 10, 20, 30, 40, 50, 60, 70, 80, 90',
              '0, 1, 2, 3, 4, 5, 6, 7, 8, 9',
              '0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10',
              '10, 20, 30, 40, 50, 60, 70, 80, 90, 100'
            ],
            correctAnswer: 0,
            img: 'e14/58.jpg'
          },
          {
            question:
              ' Wymaganiem aplikacji internetowej jest, aby ta była wykonywana po stronie klienta. W którym języku należy zaimplementować tę aplikację?',
            answers: ['JavaScript', 'Perl', 'PHP', 'Python'],
            correctAnswer: 0
          },
          {
            question: ' Zadaniem funkcji PHP o nazwie mysql_num_rows() jest',
            answers: [
              'zwrócić liczbę wierszy znajdujących się w wyniku zapytania',
              'ponumerować rekordy w bazie danych',
              'zwrócić kolejny rekord z wynikami zapytania',
              'zwrócić rekord, którego numer podany został w parametrze funkcji'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Jaka treść komunikatu powinna być wstawiona w przedstawionym kodzie PHP zamiast znaków zapytania?',
            answers: [
              'Błąd połączenia z serwerem SQL',
              'Wybrana baza nie istnieje',
              'Pomyślnie dodano rekord do bazy',
              'Błąd przetwarzania zapytania SQL'
            ],
            correctAnswer: 0,
            img: 'e14/59.jpg'
          },
          {
            question:
              ' Testy aplikacji internetowej mające za zadanie sprawdzenie skalowalności aplikacji i bazy danych oraz architektury serwera i konfiguracji noszą nazwę testów',
            answers: [
              'kompatybilności',
              'bezpieczeństwa',
              'funkcjonalnych',
              'użyteczności'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Aby prawidłowo udokumentować linię kodu języka Java Script, należy po znakach // wpisać komentarz',
            answers: [
              'w zmiennej x maksymalna wartość ze zmiennych a, b, c',
              'nieprawidłowe dane',
              'wybór losowej wartości ze zmiennych a, b i c',
              'w zmiennej x minimalna wartość ze zmiennych a, b, c'
            ],
            correctAnswer: 0,
            img: 'e14/60.jpg'
          },
          {
            question:
              ' Aby stronę WWW można było przesłać do przeglądarki internetowej w postaci zaszyfrowanej, należy użyć protokołu',
            answers: ['HTTPS', 'HTTP', 'SFTP', 'SSH'],
            correctAnswer: 0
          },
          {
            question:
              ' W języku HTML, aby uzyskać efekt jak na przykładzie, należy zastosować konstrukcję',
            answers: [
              '<p><big>Duży tekst</big> zwykły tekst</p>',
              '<p><big>Duży tekst</p> zwykły tekst',
              '<p><strike>Duży tekst zwykły tekst</p>',
              '<p><strike>Duży tekst</strike> zwykły tekst</p>'
            ],
            correctAnswer: 0,
            img: 'e14/61.jpg'
          },
          {
            question: ' Zapis znacznika HTML w postaci',
            answers: [
              'jest poprawny, po wybraniu odnośnika aktualna strona zostanie przewinięta do elementu o nazwie "hobby"',
              'jest niepoprawny, w atrybucie href należy podać adres URL',
              'jest niepoprawny, zastosowano błędnie znak # w atrybucie href',
              'jest poprawny, po wybraniu odnośnika otworzy się strona internetowa o adresie "hobby"'
            ],
            correctAnswer: 0,
            img: 'e14/62.jpg'
          },
          {
            question:
              ' W części nagłówkowej kodu HTML zapisano tekst przedstawiony na obrazku. Zapisany tekst zostanie wyświetlony',
            answers: [
              'na pasku tytułu przeglądarki',
              'w treści strony, na banerze',
              'w polu adresu, za wpisanym adresem URL',
              'w treści strony, w pierwszym wyświetlonym nagłówku'
            ],
            correctAnswer: 0,
            img: 'e14/63.jpg'
          },
          {
            question:
              ' Przeglądarka internetowa wyświetliła stronę w następujący sposób. Wskaż kod HTML, który poprawnie definiuje przedstawioną hierarchiczną strukturę tekstu:',
            answers: [
              '<h1>Rozdział 1</h1> <p>tekst</p> <h2>Podrozdział 1.1</h2> <p>tekst</p> <h2>Podrozdział 1.2</h2>',
              '<h1>Rozdział 1<p>tekst <h2>Podrozdział 1.1<p>tekst <h2>Podrozdział 1.2',
              '<ul><li>Rozdział 1<li>tekst<li>Podrozdział 1.1<li>tekst<li>Podrozdział 1.2</ul>',
              '<big>Rozdział 1</big>tekst<big>Podrozdział 1.1</big>tekst<big>Podrozdział 1.2</big>'
            ],
            correctAnswer: 0,
            img: 'e14/64.jpg'
          },
          {
            question:
              ' W języku CSS, przedstawiony zapis sprawi, że plik rysunek.png będzie',
            answers: [
              'tłem każdego paragrafu',
              'tłem całej strony',
              'wyświetlony obok każdego paragrafu',
              'wyświetlony, jeśli w kodzie zostanie zastosowany znacznik img'
            ],
            correctAnswer: 0,
            img: 'e14/65.jpg'
          },
          {
            question:
              ' W języku CSS, aby zdefiniować niestandardowe odstępy między wyrazami, stosuje się właściwość',
            answers: [
              'word-spacing',
              'line-spacing',
              'white-space',
              'letter-space'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' W języku CSS zdefiniowano następujące formatowanie. Oznacza to, że kolorem niebieskim zostanie zapisany',
            answers: [
              'pochylony tekst paragrafu',
              'cały tekst paragrafu niezależnie od jego formatowania',
              'cały tekst nagłówków niezależnie od ich formatowania',
              'pogrubiony tekst paragrafu'
            ],
            correctAnswer: 0,
            img: 'e14/66.jpg'
          },
          {
            question:
              ' W języku CSS, zapis w następującej postaci sprawi, iż koloru czerwonego będzie',
            answers: [
              'pierwsza litera nagłówka pierwszego stopnia',
              'pierwsza linia paragrafu',
              'tekst nagłówka pierwszego stopnia',
              'pierwsza litera nagłówka drugiego stopnia'
            ],
            correctAnswer: 0,
            img: 'e14/67.jpg'
          },
          {
            question:
              ' W języku HTML informacje dotyczące autora, streszczenia i słów kluczowych strony należy umieścić',
            answers: [
              'pomiędzy znacznikami <head> i </head>, w znaczniku <meta>',
              'pomiędzy znacznikami <head> i </head>, w znaczniku <style>',
              'pomiędzy znacznikami <body> i </body>, w znaczniku <meta>',
              'pomiędzy znacznikami <body> i </body>, w znaczniku <html>'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Który z przedstawionych kodów XHTML sformatuje tekst według podanego wzoru?',
            answers: ['D', 'A', 'B', 'C'],
            correctAnswer: 0,
            img: 'e14/68.jpg'
          },
          {
            question:
              ' Kolor zapisany kodem RGB o wartości rgb(128, 16, 8) w postaci szesnastkowej ma wartość',
            answers: ['#801008', '#FF0F80', '#FF1008', '#800F80'],
            correctAnswer: 0
          },
          {
            question: ' Które ze zdań opisuje grafikę wektorową?',
            answers: [
              'Zapisywany obraz jest opisywany za pośrednictwem figur geometrycznych umieszczonych w układzie współrzędnych',
              'Jest to prezentacja obrazu za pomocą pionowo-poziomej siatki odpowiednio kolorowanych pikseli na monitorze komputera, drukarce lub innym urządzeniu wyjściowym',
              'Może być przechowywana w formacie JPG lub PNG',
              'Jest wykorzystywana do zapisu fotografii cyfrowej'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Aby zbadać rozkład ilościowy poszczególnych kolorów zdjęcia, należy użyć',
            answers: [
              'histogramu',
              'desaturacji',
              'balansu kolorów',
              'rozmycia Gaussa'
            ],
            correctAnswer: 0
          },
          {
            question: ' W standardzie HDTV jest stosowana rozdzielczość',
            answers: [
              '1920 x 1080 px',
              '704 x 576 px',
              '720 x 480 px',
              '1280 x 1024 px'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Którą klauzulę powinno się zastosować w poleceniu CREATE TABLE języka SQL, aby dane pole rekordu nie było puste?',
            answers: ['NOT NULL', 'NULL', 'CHECK', 'DEFAULT'],
            correctAnswer: 0
          },
          {
            question: ' Polecenie języka SQL w postaci',
            answers: [
              'dodaje do tabeli kolumnę o nazwie kod typu text',
              'zamienia nazwę tabeli miasta na nazwę kod',
              'dodaje do tabeli dwie kolumny o nazwach: kod i text',
              'w tabeli miasta zamienia nazwę kolumny kod na nazwę text'
            ],
            correctAnswer: 0,
            img: 'e14/69.jpg'
          },
          {
            question:
              ' W bazie danych hurtowni zdefiniowano tabelę sprzedaz o polach: id, kontrahent, grupa_cenowa, obrot. Aby wyszukać wyłącznie kontrahentów z drugiej grupy cenowej, których obrót jest większy niż 4000zł, należy zastosować polecenie',
            answers: [
              'SELECT kontrahent FROM sprzedaz WHERE grupa_cenowa = 2 AND obrot > 4000;',
              'SELECT sprzedaz FROM kontrahent WHERE obrot > 4000;',
              'SELECT kontrahent FROM sprzedaz WHERE grupa_cenowa = 2 OR obrot > 4000;',
              'SELECT sprzedaz FROM kontrahent WHERE grupa_cenowa = 2 AND obrot > 4000;'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Dana jest tabela programiści o polach: id, nick, ilosc_kodu, ocena. Pole ilosc_kodu zawiera liczbę linii kodu napisanych przez programistę w danym miesiącu. Aby policzyć sumę linii kodu, który napisali wszyscy programiści, należy użyć polecenia',
            answers: [
              'SELECT SUM(ilosc_kodu) FROM programisci;',
              'SELECT SUM(ocena) FROM ilosc_kodu;',
              'SELECT COUNT(programisci) FROM ilosc_kodu;',
              'SELECT MAX(ilosc_kodu) FROM programisci'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' W instrukcji CREATE TABLE użycie klauzuli PRIMARY KEY przy deklaracji pola tabeli spowoduje, że pole to stanie się',
            answers: [
              'kluczem podstawowym',
              'kluczem obcym',
              'indeksem klucza',
              'indeksem unikalnym'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Baza danych księgarni zawiera tabelę ksiazki z polami: id, idAutor, tytul, ileSprzedanych oraz tabelę autorzy z polami: id, imie, nazwisko. Aby stworzyć raport sprzedanych książek z tytułami i nazwiskami autorów, należy',
            answers: [
              'Zdefiniować relację 1..n dla tabel ksiazki i autorzy, a następnie stworzyć kwerendę łączącą obie tabele',
              'stworzyć kwerendę wyszukującą tytuły książek',
              'Zdefiniować relację 1..1 dla tabel ksiazki i autorzy, a następnie stworzyć kwerendę łączącą obie tabele',
              'stworzyć dwie osobne kwerendy: pierwszą wyszukującą tytuły książek, drugą wyszukującą nazwiska autorów'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Istnieje tabela pracownicy z polami: id, imie, nazwisko, pensja. W nowym roku postawiono podnieść pensję wszystkim pracownikom o 100 zł. Aktualizacja ta w bazie danych będzie miała postać',
            answers: [
              'UPDATE pracownicy SET pensja = pensja + 100;',
              'UPDATE pracownicy SET pensja = 100;',
              'UPDATE pensja SET +100;',
              'UPDATE pensja SET 100;'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' W tabeli artykuly wykonano następujące polecenia dotyczące praw użytkowania jan. Po wykonaniu poleceń użytkownik jan będzie miał prawa do',
            answers: [
              'tworzenia tabeli i wypełniania jej danymi',
              'tworzenia tabeli i aktualizowania w niej danych',
              'aktualizowania danych i przeglądania tabeli',
              'przeglądania tabeli'
            ],
            correctAnswer: 0,
            img: 'e14/70.jpg'
          },
          {
            question:
              ' Aby przywrócić bazę danych MS SQL z kopii bezpieczeństwa, należy zastosować polecenie',
            answers: [
              'RESTORE DATABASE',
              'DBCC CHECKDB',
              'SAVE DATABASE',
              'REBACKUP DATABASE'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Baza danych MySQL uległa uszkodzeniu. Które z działań NIE pomoże przy jej naprawie?',
            answers: [
              'Wykonanie replikacji bazy danych',
              'Próba naprawy poleceniem REPAIR',
              'Odtworzenie bazy z kopii bezpieczeństwa',
              'Stworzenie nowej bazy i przeniesienie do niej tabel'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' W formularzu, dane z pola input o typie number zostały zapisane do zmiennej a, a następnie przetworzone w skrypcie JavaScript w następujący sposób. Zmienna x będzie typu',
            answers: [
              'liczbowego, całkowitego',
              'NaN',
              'napisowego',
              'zmiennoprzecinkowego'
            ],
            correctAnswer: 0,
            img: 'e14/71.jpg'
          },
          {
            question:
              ' Wstawki kodu JavaScript w dokumencie HTML mogą się znaleźć',
            answers: [
              'zarówno w cześci <head>, jak i <body>, w znaczniku <script>',
              'tylko w cześci <head>, w znaczniku <script>',
              'tylko w cześci <body>, w znaczniku <java>',
              'zarówno w cześci <head>, jak i <body>, w znaczniku <java>'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' W przedstawonym kodzie JavaScript dla ułatwienia ponumerowano linie. W kodzie znajduje się błąd, gdyż po uruchomieniu żaden komunikat nie zostaje wyświetlony. Aby wyeliminować błąd, należy',
            answers: [
              'wstawić nawiasy klamrowe do sekcji if oraz else',
              'wstawić znaki $ przed nazwami zmiennych.',
              'w liniach 2 i 5 zmienne a i b wstawić w cudzysłów',
              'w liniach 3 i 6 zamienić znaki cudzysłowu na apostrof, np. ’jest mniejsze’'
            ],
            correctAnswer: 0,
            img: 'e14/72.jpg'
          },
          {
            question:
              ' Ile iteracji będzie miała przedstawiona pętla zapisana w języku PHP, zakładając, że zmienna sterująca nie jest modyfikowana we wnętrzu pętli?',
            answers: ['11', '0', '10', 'Nieskończenie wiele'],
            correctAnswer: 0,
            img: 'e14/73.jpg'
          },
          {
            question:
              ' W języku JavaScript metoda document.getElementById(id) ma za zadanie',
            answers: [
              'zwrócić odniesienie do pierwszego elementu HTML o podanym id',
              'wstawić tekst o treści ’id’ na stronie WWW',
              'sprawdzić poprawność formularza o identyfikatorze id',
              'pobrać dane z pola formularza i wstawić je do zmiennej id'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' W instrukcji warunkowej JavaScript należy sprawdzić przypadek, gdy zmienne a oraz b są dodatnie, z czego zmienna b jest mniejsza od 100. Warunek taki powinien być zapisany w następujący sposób:',
            answers: [
              'if ( a > 0 && b > 0 && b < 100)',
              'if ( a > 0 || b > 0 || b > 100)',
              'if ( a > 0 && b > 0 || b > 100)',
              'if ( a > 0 || (b > 0 && b < 100))'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Zadaniem przedstawionej funkcji zapisanej w języku JavaScript jest',
            answers: [
              'wypisanie liczb parzystych z przedziału od a do b',
              'zwrócenie wartości parzystych liczb od a do b',
              'wypisanie wszystkich liczb z przedziału od a do b',
              'sprawdzenie, czy liczba a jest nieparzysta; jeśli tak, wypisanie jej'
            ],
            correctAnswer: 0,
            img: 'e14/74.jpg'
          },
          {
            question:
              ' Przedstawiony kod został zapisany w języku JavaScript. W podanej definicji obiektu metodą jest element o nazwie',
            answers: ['oblicz', 'obj1', 'czescCalkowita', 'czescUlamkowa'],
            correctAnswer: 0,
            img: 'e14/75.jpg'
          },
          {
            question:
              ' Aby uzyskać informacje o środowisku pracy serwera obsługującego PHP, należy skorzystać z funkcji',
            answers: ['phpinfo()', 'php()', 'phpgetinfo()', 'phpinformation()'],
            correctAnswer: 0
          },
          {
            question: ' Fragment kodu w języku PHP wypisze',
            answers: [
              'samą nazwę konta, czyli "adres"',
              'nazwę konta ze znakiem @, czyli "adres@"',
              'cały adres e-mail, czyli "adres@host.pl"',
              'samą nazwę domeny, czyli "host.pl"'
            ],
            correctAnswer: 0,
            img: 'e14/76.jpg'
          },
          {
            question:
              ' Do uruchomienia skryptu JavaScript wymagane jest oprogramowanie',
            answers: [
              'przeglądarki internetowej',
              'serwera WWW',
              'serwera MySQL',
              'debugera JavaScript'
            ],
            correctAnswer: 0
          },
          {
            question: ' Zadaniem funkcji PHP o nazwie mysql_select_db() jest',
            answers: [
              'określić bazę, z której będą pobierane dane',
              'połączyć bazę danych z serwerem SQL',
              'określić tabelę, z której będą pobierane dane',
              'pobrać dane z bazy danych na podstawie kwerendy'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' W przedstawionym kodzie PHP, zamiast znaków zapytania powinien pojawić się komunikat:',
            answers: [
              'Błąd przetwarzania zapytania',
              'Zapytanie przetworzono pomyślnie',
              'Nieprawidłowa nazwa bazy danych',
              'Nieprawidłowe hasło do bazy danych'
            ],
            correctAnswer: 0,
            img: 'e14/77.jpg'
          },
          {
            question: ' Testy wydajnościowe mają na celu sprawdzenie',
            answers: [
              'stopnia spełnienia wymagań wydajnościowych przez system lub moduł',
              'zdolności oprogramowania do działania w warunkach wadliwej pracy sprzętu',
              'zdolności oprogramowania do działania w warunkach wadliwej pracy systemu',
              'ciągu zdarzeń, w którym prawdopodobieństwo każdego zdarzenia zależy jedynie od wyniku poprzedniego'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Aby prawidłowo udokumentować przedstawioną linię kodu języka JavaScript, należy po znakach // wpisać komentarz',
            answers: [
              'wyświetlenie daty i czasu w znaczniku o id = napis',
              'nieprawidłowe dane',
              'zmiana stylu atrybutu innerHTML',
              'wyświetlenie tekstu "Date()" w znaczniku o id = napis'
            ],
            correctAnswer: 0,
            img: 'e14/78.jpg'
          },
          {
            question:
              ' Przekierowanie 301 służące przekierowaniu użytkownika z jednego adresu URL na inny można ustawić w pliku konfiguracji serwera Apache o nazwie',
            answers: [
              '.htaccess',
              'conf.php',
              '.apacheConf',
              'configuration.php'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' W języku HTML aby zdefiniować słowa kluczowe strony, należy użyć zapisu',
            answers: [
              '<meta name="keywords" content="psy, koty, gryzonie">',
              '<meta keywords="psy, koty, gryzonie">',
              '<meta name="keywords" ="psy, koty, gryzonie">',
              '<meta name="description" content="psy, koty, gryzonie">'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' W języku HTML zdefiniowano znacznik a. Wartość nofollow atrybutu rel',
            answers: [
              'jest informacją dla robota wyszukiwarki Google, aby nie podążał za tym linkiem',
              'oznacza, że kliknięcie na link nie przeniesie do strony website.com',
              'oznacza, że kliknięcie na link otworzy go w osobnej karcie przeglądarki',
              'jest informacją dla przeglądarki internetowej, aby nie formatowała słowa "link" jako odnośnika'
            ],
            correctAnswer: 0,
            img: 'e14/79.jpg'
          },
          {
            question:
              ' W języku HTML aby zdefiniować poziomą linię, należy użyć znacznika',
            answers: ['<hr>', '<line>', '<br>', '<hl>'],
            correctAnswer: 0
          },
          {
            question:
              ' Zapisano kod HTML wstawiający grafikę na stronę internetową. Jeżeli rysunek.png nie zostanie odnaleziony, przeglądarka',
            answers: [
              'w miejscu grafiki wypisze tekst "pejzaż"',
              'nie wyświetli strony internetowej',
              'w miejscu grafiki wypisze tekst "rysunek.png"',
              'w miejscu grafiki wypisze błąd wyświetlania strony'
            ],
            correctAnswer: 0,
            img: 'e14/80.jpg'
          },
          {
            question:
              ' Aby w języku HTML uzyskać takie formatowanie paragrafu dla tekstu należy zastosować kod',
            answers: [
              '<p>Tekst może być <mark>zaznaczony</mark> albo <em>istotny</em> dla autora</p>',
              '<p>Tekst może być <mark>zaznaczony</mark> albo <em>istotny dla autora</p>',
              '<p>Tekst może być <mark>zaznaczony albo <i>istotny</i> dla autora</mark></p>',
              '<p>Tekst może być <mark>zaznaczony albo <em>istotny</em> dla autora</mark></p>'
            ],
            correctAnswer: 0,
            img: 'e14/81.jpg'
          },
          {
            question:
              ' Zamieszczony kod HTML formularza zostanie wyświetlony przez przeglądarkę w sposób:',
            answers: ['D', 'A', 'B', 'C'],
            correctAnswer: 0,
            img: 'e14/82.jpg'
          },
          {
            question:
              ' W języku CSS wcięcie pierwszej linii akapitu na 30 pikseli uzyska się za pomocą zapisu',
            answers: [
              'p { text-indent: 30px; }',
              'p { text-spacing: 30px; }',
              'p { line-height: 30px; }',
              'p { line-indent: 30px; }'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' W języku CSS zdefiniowano następujące formatowanie. Kolorem czerwonym zostanie zapisany',
            answers: [
              'tylko tekst pochylony nagłówka pierwszego stopnia',
              'tylko tekst pochylony we wszystkich poziomach nagłówków',
              'cały tekst nagłówka pierwszego stopnia oraz pochylony tekst akapitu',
              'cały tekst nagłówka pierwszego stopnia oraz cały tekst pochylony, niezależnie od tego, w którym miejscu strony się znajduje'
            ],
            correctAnswer: 0,
            img: 'e14/83.jpg'
          },
          {
            question:
              ' W języku CSS, aby sformatować dowolny element języka HTML w ten sposób, że po najechaniu na niego kursorem zmienia on kolor czcionki, należy zastosować pseudoklasę',
            answers: [':hover', ':active', ':visited', ':coursor'],
            correctAnswer: 0
          },
          {
            question:
              ' Zapis CSS w takiej postaci sprawi, że na stronie internetowej',
            answers: [
              'punktorem listy nienumerowanej będzie rys.gif',
              'rys.gif będzie stanowił ramkę dla listy nienumerowanej',
              'wyświetli się rys.gif jako tło listy nienumerowanej',
              'każdy z punktów listy będzie miał osobne tło pobrane z grafiki rys.gif'
            ],
            correctAnswer: 0,
            img: 'e14/84.jpg'
          },
          {
            question:
              ' W języku CSS aby zdefiniować odmienne formatowanie dla pierwszej litery akapitu, należy zastosować selektor',
            answers: [
              'pseudoelementu p::first-letter',
              'klasy p.first-letter',
              'dziecka p + first-letter',
              'atrybutu p [first-letter]'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' W kodzie źródłowym zapisanym w języku HTML wskaż błąd walidacji dotyczący tego fragmentu',
            answers: [
              'Znacznik zamykający /b niezgodny z zasadą zagnieżdżania',
              'Nieznany znacznik h6',
              'Znacznik br nie został poprawnie zamknięty',
              'Znacznik br nie może występować wewnątrz znacznika p'
            ],
            correctAnswer: 0,
            img: 'e14/85.jpg'
          },
          {
            question:
              ' W ramce przedstawiono właściwości pliku graficznego. W celu optymalizacji czasu ładowania rysunku na stronę WWW należy',
            answers: [
              'zmniejszyć wymiary rysunku',
              'zwiększyć rozdzielczość',
              'zmienić format grafiki na CDR',
              'zmienić proporcje szerokości do wysokości'
            ],
            correctAnswer: 0,
            img: 'e14/86.jpg'
          },
          {
            question:
              ' W programie INKSCAPE / COREL aby uzyskać przedstawiony efekt napisu, należy',
            answers: [
              'skorzystać z funkcji wstaw / dopasuj tekst do ścieżki',
              'skorzystać z funkcji gradientu',
              'zastosować funkcję sumy z kołem',
              'zastosować funkcję wykluczenia z kołem'
            ],
            correctAnswer: 0,
            img: 'e14/87.jpg'
          },
          {
            question: ' Programem do edycji dźwięku jest',
            answers: ['Audacity', 'Brasero', 'Winamp', 'RealPlayer'],
            correctAnswer: 0
          },
          {
            question:
              ' Dana jest tabela pracownicy. Polecenie MySQL usuwające wszystkie rekordy z tabeli, dla których nie wypełniono pola rodzaj_umowy, ma postać',
            answers: [
              'DELETE FROM pracownicy WHERE rodzaj_umowy IS NULL;',
              'DROP pracownicy FROM rodzaj_umowy = 0;',
              'DROP pracownicy WHERE rodzaj_umowy IS NULL;',
              "DELETE pracownicy WHERE rodzaj_umowy = 'brak';"
            ],
            correctAnswer: 0
          },
          {
            question:
              ' W języku SQL, aby stworzyć tabelę, należy zastosować polecenie',
            answers: [
              'CREATE TABLE',
              'ADD TABLE',
              'ALTER TABLE',
              'INSERT TABLE'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' W przedstawionym fragmencie kwerendy języka SQL, komenda SELECT ma za zadanie zwrócić',
            answers: [
              'liczbę wierszy',
              'średnią tabeli',
              'sumę w kolumnie wartosc',
              'średnią w kolumnie wartosc'
            ],
            correctAnswer: 0,
            img: 'e14/88.jpg'
          },
          {
            question:
              ' Dana jest tabela ksiazki z polami: tytul, autor (typu tekstowego), cena (typu liczbowego). Aby kwerenda SELECT zwróciła tylko tytuły, dla których cena jest mniejsza od 50zł, należy zapisać:',
            answers: [
              'SELECT tytul FROM ksiazki WHERE cena < 50;',
              'SELECT * FROM ksiazki WHERE cena < 50;',
              "SELECT tytul FROM ksiazki WHERE cena > '50 zł';",
              "SELECT ksiazki FROM tytul WHERE cena < '50 zł';"
            ],
            correctAnswer: 0
          },
          {
            question:
              ' W bazie danych MYSQL dana jest tabela programów komputerowych o polach: nazwa, producent, rokWydania. Aby kwerenda SELECT zwróciła wszystkie nazwy producentów tak, by nazwy te nie powtarzały się, należy zapisać:',
            answers: [
              'SELECT DISTINCT producent FROM programy;',
              'SELECT UNIQUE producent FROM programy;',
              'SELECT producent FROM programy WHERE UNIQUE;',
              'SELECT producent FROM programy WHERE producent NOT DUPLICATE;'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Tabela filmy zawiera klucz główny id oraz klucz obcy rezyserID. Tabela rezyserzy zawiera klucz główny id. Obydwie tabele połączone są relacją jeden po stronie rezyserzy do wielu po stronie filmy. Aby w kwerendzie SELECT połączyć tabele filmy i rezyserzy, należy zapisać',
            answers: [
              '... filmy JOIN rezyserzy ON filmy.rezyserID = rezyserzy.id ...',
              '... filmy JOIN rezyserzy ON filmy.id = rezyserzy.id ...',
              '... filmy JOIN rezyserzy ON filmy.id = rezyserzy.filmyID ...',
              '... filmy JOIN rezyserzy ON filmy.rezyserID = rezyserzy.filmyID ...'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Na rysunku przedstawiono dwie tabele. Aby połączyć je relacją jeden do wielu, jeden po stronie Klienci wiele po stronie Zamowienia, należy',
            answers: [
              'Dodać pole klucza obcego do tabeli Zamowienia i połączyć je z ID tabeli Klienci',
              'Połączyć relacją pola ID z obu tabel',
              'Dodać pole klucza obcego do tabeli Klienci i połączyć je z ID tabeli Zamowienia',
              'Zdefiniować trzecią tabelę z dwoma kluczami obcymi. Jeden klucz połączyć z ID tabeli Klienci, drugi klucz połączyć z ID tabeli Zamowienia'
            ],
            correctAnswer: 0,
            img: 'e14/89.jpg'
          },
          {
            question: ' Źródłem rekordów dla raportu może być',
            answers: [
              'Tabela',
              'Inny raport',
              'Makropolecenie',
              'Zapytanie INSERT INTO'
            ],
            correctAnswer: 0
          },
          {
            question: ' Przedstawione polecenie MySQL ma za zadanie',
            answers: [
              'Zmienić typ kolumny w tabeli ksiazki',
              'Usunąć kolumnę tytul z tabeli ksiazki',
              'Dodać do tabeli ksiazki kolumnę tytul',
              'Zmienić nazwę kolumny w tabeli ksiazki'
            ],
            correctAnswer: 0,
            img: 'e14/90.jpg'
          },
          {
            question:
              " W tabeli podzespoly należy zmienić wartość pola URL na 'toshiba.pl' dla wszystkich rekordów, gdzie pole producent to TOSHIBA. W języku SQL modyfikacja będzie miała postać",
            answers: [
              "UPDATE podzespoly SET URL='toshiba.pl' WHERE producent='TOSHIBA';",
              "UPDATE podzespoly SET URL='toshiba.pl';",
              "UPDATE producent='TOSHIBA' SET URL='toshiba.pl';",
              "UPDATE podzespoly.producent='TOSHIBA' SET URL='toshiba.pl';"
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Do zabezpieczeń serwera bazy danych przed atakami hakerów nie należy',
            answers: [
              'Defragmentacja dysków',
              'Włączenie zapory',
              'Stosowanie złożonych haseł do bazy',
              'Blokowanie portów związanych z bazą danych'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' W języku MySQL należy zastosować polecenie REVOKE, aby użytkownikowi anna odebrać prawo do dokonywania zmian jedynie w definicji struktury bazy danych. Polecenie odpowiadające odebraniu tych praw ma postać',
            answers: [
              "REVOKE CREATE ALTER DROP ON tabela1 FROM 'anna'@'localhost'",
              "REVOKE ALL ON tabela1 FROM 'anna'@'localhost'",
              "REVOKE CREATE UPDATE DROP ON tabela1 FROM 'anna'@'localhost'",
              "REVOKE CREATE INSERT DELETE ON tabela1 FROM 'anna'@'localhost'"
            ],
            correctAnswer: 0
          },
          {
            question:
              ' W języku JavaScript, aby sprawdzić warunek czy liczba znajduje się w przedziale (100;200>, należy zapisać:',
            answers: [
              'if (liczba > 100 && liczba <= 200)',
              'if (liczba > 100 || liczba <= 200)',
              'if (liczba < 100 || liczba >= 200)',
              'if (liczba < 100 && liczba <= 200)'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' W wyniku działania pętli zapisanej w języku PHP zostanie wypisany ciąg liczb',
            answers: [
              '10 15 20 25 30 35 40 45',
              '10 15 20 25 30 35 40 45 50',
              '0 5 10 15 20 25 30 35 40 45',
              '0 5 10 15 20 25 30 35 40 45 50'
            ],
            correctAnswer: 0,
            img: 'e14/91.jpg'
          },
          {
            question:
              ' Które z poniższych zdań dotyczących zasad programowania w języku PHP jest prawdziwe?',
            answers: [
              'Jest to język o słabej kontroli typów',
              'Nazwy zmiennych są poprzedzone znakiem !',
              'Deklaracja zmiennych następuje po słowie var',
              'W nazwach zmiennych nie jest rozróżniana wielkość liter'
            ],
            correctAnswer: 0
          },
          {
            question: ' W języku PHP instrukcja foreach jest instrukcją',
            answers: [
              'Pętli, wyłącznie dla elementów tablicy',
              'Wyboru, dla elementów tablicy',
              'Pętli, niezależnie od typu zmiennej',
              'Warunkową, niezależnie od typu zmiennej'
            ],
            correctAnswer: 0
          },
          {
            question: ' Funkcją języka PHP tworzącą ciasteczko jest',
            answers: [
              'setcookie()',
              'createcookie()',
              'echocookie()',
              'addcookie()'
            ],
            correctAnswer: 0
          },
          {
            question: ' W języku PHP funkcja trim ma za zadanie',
            answers: [
              'Usuwać białe znaki lub inne znaki podane w parametrze, z obu końców napisu',
              'Podawać długość napisu',
              'Porównywać dwa napisy i wypisać część wspólną',
              'Zmniejszać napis o wskazaną w parametrze liczbę znaków'
            ],
            correctAnswer: 0
          },
          {
            question: ' W języku JavaScript zapis w ramce oznacza, że',
            answers: [
              'zmienna x będzie przechowywać wynik działania metody nazwa',
              'nazwa jest polem klasy przedmiot',
              'nazwa jest właściwością obiektu przedmiot',
              'zmienna x będzie przechowywać wynik działania funkcji przedmiot'
            ],
            correctAnswer: 0,
            img: 'e14/92.jpg'
          },
          {
            question:
              ' W języku JavaScript zapisano następującą funkcję. Ma ona za zadanie',
            answers: [
              'Zwrócić wartość bezwzględną z f',
              'Wypisać wartość odwrotną do f',
              'Zwrócić wartość odwrotną do f',
              'Wypisać wartość bezwzględną z f'
            ],
            correctAnswer: 0,
            img: 'e14/93.jpg'
          },
          {
            question: ' Za pomocą języka PHP nie jest możliwe',
            answers: [
              'Zmienianie dynamiczne zawartości strony HTML w przeglądarce',
              'Przetwarzanie danych formularzy',
              'Generowanie dynamicznej zawartości strony',
              'Przetwarzanie danych zgromadzonych w bazie danych'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Działaniem przedstawionego kodu PHP będzie wypełnienie tablicy',
            answers: [
              '10 losowymi wartościami, a następnie wypisanie wartości ujemnych',
              'Kolejnymi liczbami od 0 do 9 i wypisanie ich',
              'Kolejnymi liczbami od -100 do 100 i wypisanie wartości ujemnych',
              '100 losowymi wartościami, a następnie wypisanie wartości dodatnich'
            ],
            correctAnswer: 0,
            img: 'e14/94.jpg'
          },
          {
            question:
              ' W języku JavaScript zapisano fragment kodu. Po wykonaniu skryptu zmienna x',
            answers: [
              'Będzie równa 11 i zostanie wypisana w konsoli przeglądarki internetowej',
              'Będzie równa 11 i zostanie wypisana w oknie popup',
              'Będzie równa 10 i zostanie wypisana w dokumencie HTML',
              'Będzie równa 10 i zostanie wypisana w głównym oknie przeglądarki internetowej'
            ],
            correctAnswer: 0,
            img: 'e14/95.jpg'
          },
          {
            question:
              ' W języku PHP, wykonując operacje na bazie danych MySQL, aby zakończyć pracę z bazą, należy wywołać',
            answers: [
              'mysqli_close();',
              'mysqli_exit();',
              'mysqli_commit();',
              'mysqli_rollback();'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' W ramce przedstawiono kod JavaScript z błędem logicznym. Program powinien wypisywać informację, czy liczby są sobie równe czy nie, lecz nie wykonuje tego. Wskaż odpowiedź, która dotyczy błędu',
            answers: [
              'W klauzuli if występuje przypisanie zamiast porównania',
              'Nieprawidłowo zadeklarowano zmienne',
              'Przed klauzulą else nie powinno być średnika',
              'Instrukcje wewnątrz sekcji if oraz else powinny być zamienione miejscami'
            ],
            correctAnswer: 0,
            img: 'e14/96.jpg'
          },
          {
            question:
              ' Która z zasad tworzenia części <head> języka HTML jest poprawna?',
            answers: [
              'W części <head> mogą wystąpić znaczniki <meta>, <title>, <link>',
              'W części <head> zawiera się część <body>',
              'W części <head> można definiować szablon strony znacznikami <div>',
              'W części <head> nie można umieszczać kodu CSS, a jedynie odwołanie do pliku CSS'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' W języku HTML znacznik <strong>tekst</strong> będzie wyświetlany w ten sam sposób przez przeglądarkę co znacznik',
            answers: [
              '<b>tekst</b>',
              '<h1>tekst</h1>',
              '<big>tekst</big>',
              '<sub>tekst</sub>'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Aby strona WWW była responsywna, należy między innymi definiować',
            answers: [
              'rozmiary obrazów w procentach',
              'jedynie znane czcionki, np. Arial',
              'rozmiary obrazów wyłącznie w pikselach',
              'rozkład strony wyłącznie za pomocą tabel'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' W języku HTML, aby zapisać sekcję cytatu, która może zawierać kilka paragrafów tak, by przeglądarka dodała wspólne wcięcie, należy zastosować znacznik',
            answers: ['<blockquote>', '<q>', '<indent>', '<blockq>'],
            correctAnswer: 0
          },
          {
            question:
              ' W języku CSS wartości underline, overline, blink przyjmują atrybut',
            answers: [
              'text-decoration',
              'text-style',
              'font-style',
              'font-weight'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' W przedstawionej definicji stylu CSS, powtarzanie dotyczy',
            answers: [
              'rysunku umieszczonego w tle strony w pionie',
              'tła każdego ze znaczników akapitu',
              'rysunku umieszczonego znacznikiem img',
              'rysunku umieszczonego w tle strony w poziomie'
            ],
            correctAnswer: 0,
            img: 'e14/97.jpg'
          },
          {
            question:
              ' W języku CSS zdefiniowano styl. Sformatowana stylem sekcja będzie zawierała obramowanie o szerokości',
            answers: [
              '2 px oraz marginesy na zewnątrz tego obramowania',
              '2 px oraz marginesy wewnątrz tego obramowania',
              '20 px oraz marginesy wewnątrz tego obramowania',
              '20 px oraz marginesy na zewnątrz tego obramowania'
            ],
            correctAnswer: 0,
            img: 'e14/98.jpg'
          },
          {
            question:
              ' Strona HTML definiuje akapit oraz rysunek. Aby rysunek został umieszczony przez przeglądarkę w tej samej linii co akapit po jego lewej stronie, należy w stylu CSS rysunku zawrzeć własność',
            answers: ['float:left;', 'align:left;', 'style:left;', 'alt:left;'],
            correctAnswer: 0
          },
          {
            question:
              ' W języku CSS określono formatowanie znacznika h1 według wzoru. Zakładając, że żadne inne formatowanie nie jest dodane do znacznika h1, wskaż sposób formatowania tego znacznika',
            answers: ['C', 'A', 'B', 'D'],
            correctAnswer: 0,
            img: 'e14/99.jpg'
          },
          {
            question:
              ' Aby przygotować szablon strony z trzema kolumnami ustawionymi obok siebie, można posłużyć się stylem CSS',
            answers: ['A', 'B', 'C', 'D'],
            correctAnswer: 0,
            img: 'e14/100.jpg'
          },
          {
            question:
              ' Przedstawiono fragment kodu HTML, który się poprawnie. Błąd walidacji tego fragmentu kodu będzie dotyczył',
            answers: [
              'Braku cudzysłowu',
              'Niedomknięcia znacznika br',
              'Niedomknięcia znacznika img',
              'Powtórzenia nazwy pliku graficznego'
            ],
            correctAnswer: 0,
            img: 'e14/101.jpg'
          },
          {
            question:
              ' Modelem barw opisującym kolor z użyciem stożka przestrzeni barw jest',
            answers: ['HSV', 'CIE', 'CMY', 'CMYK'],
            correctAnswer: 0
          },
          {
            question:
              ' Rozmycie Gaussa, wygładzanie, szum RGB są funkcjami programu do obróbki',
            answers: [
              'Grafiki rastrowej',
              'Grafiki wektorowej',
              'Ścieżki dźwiękowej',
              'Dźwięku w formacie MIDI'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Aby edytować nakładające się na siebie pojedyncze fragmenty obrazu, pozostawiając pozostałe elementy niezmienione, należy zastosować',
            answers: ['Warstwy', 'Histogram', 'Kanał alfa', 'Kadrowanie'],
            correctAnswer: 0
          },
          {
            question:
              ' W języku SQL wykorzystywanym przez bazę danych MySQL atrybut UNIQUE polecenia CREATE TABLE',
            answers: [
              'Jest stosowany, jeśli wartość w kolumnie nie mogą się powtarzać',
              'Wymusza unikatowe nazwy pól tabeli',
              'Blokuje możliwość wpisania wartości NULL',
              'Jest stosowany tylko w przypadku pól liczbowych'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Funkcja agregująca MIN języka SQL ma za zadanie policzyć',
            answers: [
              'Wartość minimalną kolumny zwróconej kwerendą',
              'Liczbę wierszy zwróconych kwerendą',
              'długość znaków w zwróconych kwerendą rekordach',
              'Średnią wartości różnych pól rekordu zwróconego zapytaniem'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Dana jest tabela o nazwie wycieczki z polami: nazwa, cena, miejsca (jako liczba wolnych miejsc). Aby dla dowolnego zbioru danych tabeli wyświetlić jedynie nazwy tych wycieczek, dla których cena jest niższa niż 2000 zł i mają przynajmniej cztery wolne miejsca, należy posłużyć się zapytaniem',
            answers: [
              'SELECT nazwa FROM wycieczki WHERE cena < 2000 AND miejsca > 3;',
              'SELECT nazwa FROM wycieczki WHERE cena < 2000 OR miejsca > 4;',
              'SELECT * FROM wycieczki WHERE cena < 2000 AND miejsca > 4;',
              'SELECT * FROM wycieczki WHERE cena < 2000 OR miejsca > 3;'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Dana jest tabela o nazwie przedmioty z polami: ocena i uczenID. Aby policzyć średnią ocen ucznia o ID równym 7, należy posłużyć się zapytaniem',
            answers: [
              'SELECT AVG(ocena) FROM przedmioty WHERE uczenID = 7;',
              'AVG SELECT ocena FROM przedmioty WHERE uczenID = 7;',
              'COUNT SELECT ocena FROM przedmioty WHERE uczenID = 7;',
              'SELECT COUNT(ocena) FROM przedmioty WHERE uczenID = 7;'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Tabela o nazwie naprawy zawiera pola: klient, czyNaprawione. Aby usunąć te rekordy, w których pole czyNaprawione jest prawdą, należy posłużyć się poleceniem',
            answers: [
              'DELETE FROM naprawy WHERE czyNaprawione = TRUE;',
              'DELETE FROM naprawy;',
              'DELETE naprawy WHERE czyNaprawione = TRUE;',
              'DELETE klient FROM naprawy WHERE czyNaprawione = TRUE;'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Formularz nadrzędny wykorzystywany do nawigacji w bazie danych pomiędzy dostępnymi w systemie formularzami, kwerendami jest nazywany formularzem',
            answers: ['sterującym', 'głównym', 'pierwotnym', 'zagnieżdżonym'],
            correctAnswer: 0
          },
          {
            question:
              ' W bazie danych sklepu komputerowego istnieje tabela komputery. Aby zdefiniować raport wyświetlający dla dowolnego zbioru danych tabeli, jedynie pola tabeli dla komputerów, w których jest nie mniej niż 8 GB pamięci, a procesor to Intel, można posłużyć sie kwerendą',
            answers: [
              'SELECT * FROM komputery WHERE procesor = "Intel" AND pamiec >= 8;',
              'SELECT * FROM komputery WHERE procesor = "Intel" OR pamiec < 8;',
              'SELECT * FROM komputery WHERE procesor = "Intel" OR pamiec >= 8;',
              'SELECT * FROM komputery WHERE procesor = "Intel" AND pamiec < 8;'
            ],
            correctAnswer: 0
          },
          {
            question: ' Za pomocą polecenia ALTER TABLE można',
            answers: [
              'zmienić strukturę tabeli',
              'zmienić wartości rekordów',
              'usunąć rekord',
              'usunąć tabelę'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' W języku SQL, wykorzystywanym przez bazę danych MySQL w tabeli samochody, aby nadać wartość równą 0 dla kolumny przebieg, należy posłużyć się kwerendą',
            answers: [
              'UPDATE samochody SET przebieg = 0;',
              'UPDATE przebieg SET 0 FROM samochody;',
              'UPDATE przebieg SET 0 TABLE samochody;',
              'UPDATE samochody SET przebieg VALUE 0;'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Przedstawione polecenie SQL, użytkownikowi adam@localhost nadaje prawa',
            answers: [
              'manipulowania danymi w tabeli klienci',
              'zarządzania strukturą tabeli klienci',
              'zarządzania strukturą bazy danych klienci',
              'manipulowania danymi bazy danych klienci'
            ],
            correctAnswer: 0,
            img: 'e14/102.jpg'
          },
          {
            question:
              ' W języku JavaScript przedstawiona definicja jest definicją',
            answers: ['tablicy', 'klasy', 'obiektu', 'kolekcji'],
            correctAnswer: 0,
            img: 'e14/103.jpg'
          },
          {
            question:
              ' Dla każdej iteracji pętli wartość bieżącego elementu tablicy jest przypisywana do zmiennej, a wskaźnik tablicy jest przesuwany o jeden, aż do ostatniego elementu tablicy. Zdanie to jest prawdziwe dla instrukcji',
            answers: ['foreach', 'for', 'next', 'while'],
            correctAnswer: 0
          },
          {
            question:
              ' Wskaż zapisany w języku JavaScript warunek, który ma sprawdzić spełnienie z przypadków: 1) dowolna naturalna liczba a jest trzycyfrowa, 2) dowolna całkowita liczba b jest ujemna',
            answers: [
              '((a>99) && (a<1000)) || (b<0)',
              '((a>99) || (a<1000)) || (b<0)',
              '((a>99) || (a<1000)) && (b<0)',
              '((a>99) && (a<1000)) && (b<0)'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Którą czynność gwarantującą poprawne wykonanie przedstawionego kodu JavaScript, należy wykonać przed pętlą?',
            answers: [
              'Zainicjować zmienną text',
              'Zadeklarować zmienną i',
              'Sprawdzić rozmiar tabeli tab',
              'Sprawdzić czy text jest typu znakowego'
            ],
            correctAnswer: 0,
            img: 'e14/104.jpg'
          },
          {
            question:
              ' Hermetyzacja to zasada programowania obiektowego mówiąca o tym, że',
            answers: [
              'pola i metody wykorzystywane tylko przez daną klasę/obiekt są ograniczone zasięgiem private lub protected',
              'klasy/obiekty mogą współdzielić ze sobą funkcjonalność',
              'klasy/obiekty mogą mieć zdefiniowane metody wirtualne, które są implementowane w pochodnych klasach/obiektach',
              'typy pól w klasach/obiektach mogą być dynamicznie zmieniane w zależności od danych im przypisywanych'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Przedstawiono fragment JavaScript. Po jego wykonaniu zmienna str2 będzie przechowywać',
            answers: ['vaSc', 'avaS', 'vaScri', 'nvaScr'],
            correctAnswer: 0,
            img: 'e14/105.jpg'
          },
          {
            question:
              ' Który ze sposobów wypisania tekstu zdefiniowany w języku JavaScript?',
            answers: [
              'Funkcja MessageBox()',
              'Własność innerHTML',
              'Metoda window.alert()',
              'Metoda document.write()'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Funkcja JavaScript powinna być wywołana za każdym razem, gdy użytkownik wpisze dowolny znak do pola edycji. Którego zdarzenia należy użyć?',
            answers: ['onkeydown', 'onload', 'onclick', 'onmouseout'],
            correctAnswer: 0
          },
          {
            question:
              ' Która z wymienionych funkcji zapisanych językiem PHP zwraca sumę połowy a i połowy b',
            answers: [
              'function licz($a, $b) {return $a/2 + $b/2;}',
              'function licz($a, $b) {return $a/2 + $b;}',
              'function licz($a, $b) {return 2/$a + 2/$b;}',
              'function licz($a, $b) {return ($a/2 + $b)/2;}'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' W języku JavaScript zapisano definicję obiektu. Aby odwołać się do własności nazwisko należy zapisać',
            answers: [
              'osoba.nazwisko',
              'osoba[1]',
              'osoba[2]',
              'osoba::nazwisko'
            ],
            correctAnswer: 0,
            img: 'e14/106.jpg'
          },
          {
            question:
              ' W języku PHP zapisano fragment kodu. Plik cookie stworzony tym poleceniem',
            answers: [
              'zostanie usunięty po jednym dniu od jego utworzenia',
              'będzie przechowywany na serwerze przez jeden dzień',
              'zostanie usunięty po jednej godzinie od jego utworzenia',
              'będzie przechowywany na serwerze przez jedną godzinę'
            ],
            correctAnswer: 0,
            img: 'e14/107.jpg'
          },
          {
            question:
              ' W języku PHP zapisano fragment kodu. Po zakończeniu pętli zmienna a przyjmie wartość',
            answers: ['20', '0', '2', '10'],
            correctAnswer: 0,
            img: 'e14/108.jpg'
          },
          {
            question:
              ' W języku JavaScript, aby zmienić wartość atrybutu znacznika HTML, po uzyskaniu obiektu za pomocą metody getElementById należy skorzystać z',
            answers: [
              'metody setAttribute',
              'pola innerHTML',
              'metody getAttribute',
              'pola attribute i podać nazwę atrybutu'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' W języku JavaScript zapisano kod, którego wynikiem działania jest',
            answers: [
              'wyświetlenie okna z polem edycyjnym, w którym jest wpisany domyślny tekst "Adam"',
              'wyświetlenie okna z pustym polem edycyjnym',
              'bezpośrednie wpisanie do zmiennej osoba wartości "Adam"',
              'pobranie z formularza wyświetlonego na stronie HTML imienia "Adam"'
            ],
            correctAnswer: 0,
            img: 'e14/109.jpg'
          },
          {
            question:
              ' W języku PHP zapisano fragment kodu działającego na bazie MySQL. Jego zadaniem jest wypisanie',
            answers: [
              'miasta i kodu pocztowego z pierwszego zwróconego rekordu',
              'ulicy i miasta z pierwszego zwróconego rekordu',
              'ulicy i miasta ze wszystkich zwróconych rekordów',
              'miasta i kodu pocztowego ze wszystkich zwróconych rekordów'
            ],
            correctAnswer: 0,
            img: 'e14/110.jpg'
          },
          {
            question:
              ' Który sposób komentowania jednoliniowego jest dozwolony w języku JavaScript?',
            answers: ['//', '!', '#', '<!'],
            correctAnswer: 0
          },
          {
            question:
              ' Znaczniki <header>, <article>, <section>, <footer> są charakterystyczne dla języka',
            answers: [
              'HTML 5',
              'XHTML 1.1',
              'HTML 4.01 Strict',
              'HTML 4.01 Transitional'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Przy użyciu którego znacznika w języku HTML nie można umieścić na stronie grafiki dynamicznej?',
            answers: ['<strike>', '<img>', '<embed>', '<object>'],
            correctAnswer: 0
          },
          {
            question:
              ' Które ze znaczników HTML umożliwią wyświetlenie na stronie tekstu w jednym wierszu, jeżeli żadne formatowanie CSS nie zostało zdefiniowane?',
            answers: [
              '<span>Dobre strony </span><span style="letter-spacing:3px">mojej strony</span>',
              '<p>Dobre strony </p><p style="letter-spacing:3px">mojej strony</p>',
              '<h3>Dobre strony </h3><h3 style="letter-spacing:3px">mojej strony</h3>',
              '<div>Dobre strony </div><div style="letter-spacing:3px">mojej strony</div>'
            ],
            correctAnswer: 0,
            img: 'e14/111.jpg'
          },
          {
            question:
              ' W języku HTML atrybut shape znacznika area, określający typ obszaru, może przyjąć wartość',
            answers: [
              'rect, poly, circle',
              'rect, triangle, circle',
              'poly, square, circle',
              'rect, square, circle'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Wskaż prawidłową kolejność stylów CSS mając na uwadze ich pierwszeństwo w formatowaniu elementów strony WWW.',
            answers: [
              'Lokalny, Wewnętrzny, Zewnętrzny',
              'Zewnętrzny, Wydzielone bloki, Lokalny',
              'Rozciąganie stylu, Zewnętrzny, Lokalny',
              'Wewnętrzny, Zewnętrzny, Rozciąganie stylu'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' W folderze www znajdują się podfoldery html i style, w których zapisane są odpowiednio pliki z rozszerzeniem html i pliki z rozszerzeniem css. Chcąc dołączyć styl.css do pliku HTML należy użyć',
            answers: [
              '<link rel="Stylesheet" type="text/css" href="/../style/styl.css" />',
              '<link rel="Stylesheet" type="text/css" href="/styl.css" />',
              '<link rel="Stylesheet" type="text/css" href="/style/styl.css" />',
              '<link rel="Stylesheet" type="text/css" href="/www/style/styl.css" />'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Chcąc zdefiniować marginesy wewnętrzne dla danych: margines górny 50px, dolny 40px, prawy 20px i lewy 30px należy użyć składni CSS',
            answers: [
              'padding: 50px, 20px, 40px, 30px;',
              'padding: 50px, 40px, 20px, 30px;',
              'padding: 20px, 40px, 30px, 50px;',
              'padding: 40px, 30px, 50px, 20px;'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Chcąc sformatować w stylach CSS wszystkie obrazy zawarte w akapicie, powinno się użyć selektora',
            answers: ['p img', 'p#img', 'p+img', 'p.img'],
            correctAnswer: 0
          },
          {
            question:
              ' Który z atrybutów background-attachment w języku CSS należy wybrać, aby tło strony było nieruchome względem okna przeglądarki?',
            answers: ['Fixed', 'Scroll', 'Local', 'Inherit'],
            correctAnswer: 0
          },
          {
            question: ' Barwa zapisana w modelu RGB(255, 0, 0) jest',
            answers: ['czerwona', 'żółta', 'zielona', 'niebieska'],
            correctAnswer: 0
          },
          {
            question:
              ' Połączenie dwóch barw leżących po przeciwnych stronach w kole barw jest połączeniem',
            answers: [
              'dopełniającym',
              'trójkątnym',
              'sąsiadującym',
              'monochromatycznym'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Model barw oparty na 3 parametrach: odcień, nasycenie i jasność to',
            answers: ['HSV', 'RGB', 'CMY', 'CMYK'],
            correctAnswer: 0
          },
          {
            question:
              ' Który z wymienionych formatów plików NIE JEST wykorzystywany do publikacji grafiki lub animacji na stronach internetowych?',
            answers: ['AIFF', 'PNG', 'SWF', 'SVG'],
            correctAnswer: 0
          },
          {
            question:
              ' Aby stworzyć przycisk na stronę internetową według wzoru, należy w programie do grafiki rastrowej użyć opcji',
            answers: [
              'zaokrąglenie lub wybranie opcji prostokąt z zaokrąglonymi rogami',
              'propagacja wartości',
              'zaznaczenie eliptyczne',
              'zniekształcenia i deformowanie'
            ],
            correctAnswer: 0,
            img: 'e14/112.jpg'
          },
          {
            question:
              ' Pierwszym krokiem podczas przetwarzania sygnału analogowego na cyfrowy jest',
            answers: ['próbkowanie', 'kwantyzacja', 'filtrowanie', 'kodowanie'],
            correctAnswer: 0
          },
          {
            question:
              ' Wskaż FAŁSZYWE stwierdzenie dotyczące normalizacji sygnału dźwiękowego',
            answers: [
              'Jeśli najgłośniejszy fragment dźwięku osiąga połowę skali, wszystko zostanie pogłośnione razy dwa - czyli tak, aby najgłośniejszy fragment osiągnął maksimum na skali',
              'Polecenie normalizacja dostępne jest w menu programu do obróbki dźwięku',
              'W wyniku normalizacji wyrównywany jest poziom głośności całego nagrania',
              'Normalizacja polega na zmniejszeniu poziomu najgłośniejszej próbki w sygnale do zadanej wartości i następnie w odniesieniu do niej proporcjonalnym zwiększeniu głośności reszty sygnału'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Wskaż PRAWDZIWE stwierdzenie dla polecenia: CREATE TABLE IF NOT EXISTS ADRES(ulica VARCHAR(70) CHARACTER SET utf8);',
            answers: [
              'IF NOT EXISTS stosuje się opcjonalnie, aby upewnić się, że brak w bazie danych takiej tabeli',
              'Rekordem tabeli nie może być 3 MAJA',
              'Klauzula CHARACTER SET utf8 jest obowiązkowa',
              'Do tabeli nie można wprowadzać ulic zawierających w nazwie polskie znaki'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Jak działa instrukcja łącząca wyniki zapytań INTERSECT w języku SQL?',
            answers: [
              'Zwraca część wspólną wyników dwóch zapytań.',
              'Zwraca listę wyników z pierwszego zapytania oraz listę wyników z drugiego zapytania, powodując domyślne usuwanie powtarzających się wierszy.',
              'Zwraca te wiersze, które wystąpiły w wyniku pierwszego zapytania, ale nie było ich w wyniku drugiego zapytania.',
              'Zwraca te wiersze, które wystąpiły w wyniku drugiego zapytania, ale nie było ich w wyniku pierwszego zapytania.'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' W języku SQL dla dowolnych zestawów danych w tabeli Uczniowie, aby wybrać rekordy, które zawierają wyłącznie uczennice o imieniu "Aleksandra", urodzone po roku "1998", należy zapisać zapytanie',
            answers: [
              'SELECT * FROM Uczniowie WHERE imie="Aleksandra" AND rok_urodzenia > "1998";',
              'SELECT * FROM Uczniowie WHERE imie ="Aleksandra" OR rok_urodzenia < "1998";',
              'SELECT * FROM Uczniowie WHERE imie="Aleksandra" OR rok_urodzenia > "1998";',
              'SELECT * FROM Uczniowie WHERE imie="Aleksandra" AND rok_urodzenia < "1998";'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Którą relację w projekcie bazy danych należy ustalić między tabelami widocznymi na rysunku zakładając, że każdy klient sklepu internetowego dokona przynajmniej dwóch zamówień?',
            answers: [
              '1:n, gdzie 1 jest po stronie Klienta, a wiele po stronie Zamówienia',
              '1:1',
              '1:n, gdzie 1 jest po stronie Zamówienia, a wiele po stronie Klienta',
              'n:n'
            ],
            correctAnswer: 0,
            img: 'e14/113.jpg'
          },
          {
            question:
              ' Wyszukując z tabeli Pracownicy wyłącznie nazwiska, w których ostatnią literą jest "i", można użyć kwerendy SQL',
            answers: [
              'SELECT nazwisko FROM Pracownicy WHERE nazwisko LIKE "%i";',
              'SELECT nazwisko FROM Pracownicy WHERE nazwisko LIKE "i";',
              'SELECT nazwisko FROM Pracownicy WHERE nazwisko LIKE "%i%";',
              'SELECT nazwisko FROM Pracownicy WHERE nazwisko LIKE "i%";'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' W celu dodania rekordu do tabeli Pracownicy należy użyć polecenia SQL',
            answers: [
              'INSERT INTO Pracownicy VALUES ("Jan", "Kowalski");',
              'INSERT VALUES (Jan; Kowalski) INTO Pracownicy;',
              'INSERT VALUES Pracownicy INTO (Jan, Kowalski);',
              'INSERT (Jan), (Kowalski) INTO TABLE Pracownicy;'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' W języku SQL w wyniku wykonania zapytania ALTER TABLE osoba DROP COLUMN grupa; zostanie',
            answers: [
              'usunięta kolumna grupa',
              'dodana kolumna grupa',
              'zmieniona nazwa tabeli na grupa',
              'zmieniona nazwa kolumny na grupa'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Właściwym zestawem kroków według kolejności, które należy wykonać w celu nawiązania współpracy między aplikacją internetową po stronie serwera a bazą SQL, jest',
            answers: [
              'nawiązanie połączenia z serwerem baz danych, wybór bazy, zapytanie do bazy - wyświetlane na stronie WWW, zamknięcie połączenia',
              'zapytanie do bazy, wybór bazy, wyświetlenie na stronie WWW, zamknięcie połączenia',
              'wybór bazy danych, nawiązanie połączenia z serwerem baz danych, zapytanie do bazy, wyświetlenie na stronie WWW, zamknięcie połączenia',
              'wybór bazy, zapytanie do bazy, nawiązanie połączenia z serwerem baz danych, wyświetlenie na stronie WWW, zamknięcie połączenia'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Do poprawnego i spójnego działania bazy danych niezbędne jest umieszczenie w każdej tabeli',
            answers: [
              'klucza PRIMARY KEY z wartością NOT NULL i UNIQUE',
              'kluczy PRIMARY KEY i FOREIGN KEY',
              'klucza FOREIGN KEY z wartością NOT NULL',
              'klucza obcego z wartością NOT NULL i UNIQUE'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' W języku PHP, dla zmiennych a = 5 i b = 3 wartość typu zmiennoprzecinkowego zwróci wyrażenie',
            answers: ['a / b', 'a + b', 'a * b', 'a && b'],
            correctAnswer: 0
          },
          {
            question:
              ' Wartość i typ zmiennej w języku PHP można sprawdzić za pomocą funkcji',
            answers: ['var_dump()', 'readfile()', 'implode()', 'strlen()'],
            correctAnswer: 0
          },
          {
            question:
              ' W języku JavaScript zdefiniowana zmienna i, która ma przechowywać wynik dzielenia wynoszący 1, to',
            answers: [
              'var i=parseInt(3/2);',
              'var i=3/2;',
              'var i=Number(3/2);',
              'var i=parseFloat(3/2);'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Wskaż BŁĘDNY opis optymalizacji kodu wynikowego programu',
            answers: [
              'Jej celem jest sprawdzenie zgodności z wymogami formalnymi',
              'Jej celem jest poprawienie wydajności programu',
              'W celu zwiększenia szybkości wykonywania kodu przez procesor może być prowadzona na różnych etapach pracy',
              'Powinna prowadzić do modyfikacji kodu źródłowego do postaci, w której będzie on działał szybciej'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Podaj wynik działania programu zapisanego w języku JavaScript, znajdującego się w ramce, po podaniu na wejściu wartości 5',
            answers: ['120', '60', '125', '625'],
            correctAnswer: 0,
            img: 'e14/114.jpg'
          },
          {
            question:
              ' W języku PHP chcąc wyświetlić ciąg n znaków @, należy użyć funkcji',
            answers: ['D', 'A', 'B', 'C'],
            correctAnswer: 0,
            img: 'e14/115.jpg'
          },
          {
            question:
              ' Językami programowania działającymi po stronie serwera są:',
            answers: [
              'Java, C#, Python, Ruby, PHP',
              'Java, C#, AJAX, Ruby, PHP',
              'C#, Python, Ruby, PHP, JavaScript',
              'Java, C#, Python, ActionScript, PHP'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' Instrukcja przypisania elementu do tablicy w języku JavaScript dotyczy tablicy',
            answers: [
              'asocjacyjnej',
              'statycznej',
              'numerycznej',
              'wielowymiarowej'
            ],
            correctAnswer: 0,
            img: 'e14/116.jpg'
          },
          {
            question:
              ' Jakie elementy wypisze funkcja wypisz(2) stworzona w języku JavaScript?',
            answers: ['3 4 6', '6', '2 3 4 6', '3 4 6 8'],
            correctAnswer: 0,
            img: 'e14/117.jpg'
          },
          {
            question:
              ' W formularzu dokumentu PHP istnieje pole <input name="im" />. Po wprowadzeniu przez użytkownika ciągu znaków "Janek", w celu dodania zawartości pola do bazy danych, w tablicy $_POST zawarty jest element',
            answers: [
              'Janek o indeksie im',
              'im o indeksie Janek',
              'im z kolejnym numerem indeksu',
              'Janek z kolejnym numerem indeksu'
            ],
            correctAnswer: 0
          },
          {
            question:
              ' W celu zmodyfikowania tekstu "ala ma psa" na "ALA MA PSA" należy użyć funkcji PHP',
            answers: [
              'strtoupper("ala ma psa");',
              'strtolower("ala ma psa");',
              'ucfirst("ala ma psa");',
              'strstr("ala ma psa");'
            ],
            correctAnswer: 0
          },
          {
            question: ' W kodzie JavaScript pętla zostanie wykonana',
            answers: ['3 razy', '2 razy', '26 razy', '27 razy'],
            correctAnswer: 0,
            img: 'e14/118.jpg'
          },
          {
            question:
              ' Poprawne udokumentowanie wzorca weryfikacji pola nazwa w części kodu aplikacji JavaScript to',
            answers: [
              '/* Pole nazwa może zawierać dowolny ciąg cyfr (z wyłączeniem 0), następnie musi zawierać dużą literę i ciąg minimum dwóch małych liter. */',
              '/* Pole nazwa może składać się z dowolnego ciągu cyfr (z wyłączeniem 0), małych i dużych liter. */',
              '/* Pole nazwa powinno składać się w kolejności: z ciągu cyfr (z wyłączeniem 0), następnie dużej litery i ciągu małych liter. */',
              '/* Pole nazwa musi składać się w kolejności: z ciągu cyfr (z wyłączeniem 0), następnie dużej litery i dwóch małych liter. */'
            ],
            correctAnswer: 0,
            img: 'e14/119.jpg'
          },
          {
            question:
              ' Włączenie do kodu skryptu zawartości pliku egzamin.php, zawierającego kod PHP, wymaga dodania instrukcji',
            answers: [
              'include("egzamin.php");',
              'fgets("egzamin.php");',
              'fopen("egzamin.php");',
              'getfile("egzamin.php");'
            ],
            correctAnswer: 0
          }
        ]
      },
      {}
    ],
    15: [
      function (require, module, exports) {
        'use strict'
        Object.defineProperty(exports, '__esModule', { value: !0 })
        var e = require('./e12.json'),
          a = s(e),
          r = require('./e13.json'),
          o = s(r),
          t = require('./e14.json'),
          l = s(t)
        function s(e) {
          return e && e.__esModule ? e : { default: e }
        }
        var u = {
            e12: a.default,
            e13: o.default,
            e14: l.default,
            favorites: []
          },
          i = {
            e12: (localStorage.e12 && JSON.parse(localStorage.e12)) || u.e12,
            e13: (localStorage.e13 && JSON.parse(localStorage.e13)) || u.e13,
            e14: (localStorage.e14 && JSON.parse(localStorage.e14)) || u.e14,
            favorites:
              (localStorage.favorites && JSON.parse(localStorage.favorites)) ||
              [],
            save: function (e) {
              i[e].length || Array.isArray(i[e])
                ? (localStorage[e] = JSON.stringify(i[e]))
                : ((i[e] = u[e]), i.save(e))
            }
          }
        exports.default = i
      },
      { './e12.json': 19, './e13.json': 20, './e14.json': 21 }
    ],
    14: [
      function (require, module, exports) {
        'use strict'
        Object.defineProperty(exports, '__esModule', { value: !0 })
        var e = (function () {
            function e(e, t) {
              for (var n = 0; n < t.length; n++) {
                var r = t[n]
                ;(r.enumerable = r.enumerable || !1),
                  (r.configurable = !0),
                  'value' in r && (r.writable = !0),
                  Object.defineProperty(e, r.key, r)
              }
            }
            return function (t, n, r) {
              return n && e(t.prototype, n), r && e(t, r), t
            }
          })(),
          t = require('lodash/shuffle'),
          n = d(t),
          r = require('lodash/uniq'),
          s = d(r),
          a = require('lodash/difference'),
          i = d(a),
          o = require('lodash/find'),
          u = d(o),
          c = require('./saveStorage'),
          l = d(c)
        function d(e) {
          return e && e.__esModule ? e : { default: e }
        }
        function f(e, t) {
          if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function')
        }
        var h = (function () {
          function t(e, n) {
            f(this, t),
              (this.container = e),
              (this.questions = n),
              (this._inputsDisabled = !1),
              (this._DOMQuestionReferences = [])
          }
          return (
            e(t, [
              {
                key: 'render',
                value: function () {
                  ;(this.container.innerHTML = ''),
                    (this._DOMQuestionReferences = [])
                  var e = this._questionsToNodes()
                  this.container.appendChild(e)
                }
              },
              {
                key: 'disableInputs',
                value: function () {
                  ;(this._inputsDisabled = !0),
                    [].slice
                      .call(
                        this.container.querySelectorAll(
                          '.generate-quiz__answer input'
                        )
                      )
                      .forEach(function (e) {
                        return (e.disabled = !0)
                      })
                }
              },
              {
                key: '_questionsToNodes',
                value: function () {
                  var e = this,
                    t = document.createDocumentFragment(),
                    r = document.createElement('ul')
                  return (
                    (r.className = 'generate-quiz__question-list'),
                    (this.questions = (0, n.default)(this.questions)),
                    this.questions.forEach(function (s) {
                      var a = document.createElement('li'),
                        i = document.createElement('h2'),
                        o = document.createElement('span'),
                        c = document.createElement('ul'),
                        d = void 0
                      'img' in s &&
                        (((d = document.createElement('img')).className =
                          'generate-quiz__image'),
                        (d.src = s.img))
                      var f = { question: i, answers: [] },
                        h = (0, u.default)(l.default.favorites, function (e) {
                          return e.question === s.question
                        })
                      ;(a.className = 'generate-quiz__question'),
                        (o.className = 'generate-quiz__star'),
                        (i.className = 'generate-quiz__question-title'),
                        (c.className = 'generate-quiz__answer-list'),
                        (o.textContent = h ? '★' : '☆'),
                        (i.textContent = s.question),
                        o.addEventListener('click', function () {
                          var e = (0, u.default)(
                            l.default.favorites,
                            function (e) {
                              return e.question === s.question
                            }
                          )
                          e
                            ? ((l.default.favorites =
                                l.default.favorites.filter(function (t) {
                                  return t !== e
                                })),
                              (o.textContent = '☆'))
                            : (l.default.favorites.push(s),
                              (o.textContent = '★')),
                            l.default.save('favorites')
                        }),
                        (0, n.default)(s.answers).forEach(function (t) {
                          var n = document.createElement('li'),
                            r = document.createElement('input'),
                            a = document.createElement('label'),
                            i = document.createTextNode(t)
                          ;(n.className = 'generate-quiz__answer'),
                            (r.value = t),
                            (r.name = s.question),
                            (r.type =
                              'correctAnswer' in s ? 'radio' : 'checkbox'),
                            n.addEventListener('click', function (t) {
                              e._inputsDisabled ||
                                ('radio' === r.type
                                  ? (r.checked = !0)
                                  : 'LI' === t.target.nodeName &&
                                    (r.checked = !r.checked))
                            }),
                            f.answers.push({ input: r, label: a }),
                            a.appendChild(r),
                            a.appendChild(i),
                            n.appendChild(a),
                            c.appendChild(n)
                        }),
                        e._DOMQuestionReferences.push(f),
                        i.appendChild(o),
                        a.appendChild(i),
                        d && a.appendChild(d),
                        a.appendChild(c),
                        r.appendChild(a),
                        t.appendChild(r)
                    }),
                    t
                  )
                }
              },
              {
                key: 'calculateResults',
                value: function () {
                  var e = this,
                    t = { score: 0, totalPoints: 0, answeredQuestions: [] }
                  return (
                    this._DOMQuestionReferences.forEach(function (n, r) {
                      var s = 0,
                        a = 0,
                        i = void 0
                      t.totalPoints++,
                        n.answers.forEach(function (n) {
                          if ('correctAnswers' in (i = e.questions[r]))
                            i.correctAnswers.forEach(function (e) {
                              var t = n.input.checked,
                                r = n.label.textContent === i.answers[e],
                                o = i.answers.indexOf(n.label.textContent),
                                u = -1 === i.correctAnswers.indexOf(o)
                              t && r ? s++ : t && u && a++
                            })
                          else {
                            var o = n.input.checked,
                              u =
                                n.label.textContent ===
                                i.answers[i.correctAnswer]
                            o && u && (t.score++, t.answeredQuestions.push(i))
                          }
                        }),
                        s &&
                          s === i.correctAnswers.length &&
                          (a || t.score++, (s = 0), (a = 0))
                    }),
                    (t.percentageScore = (100 / t.totalPoints) * t.score),
                    t
                  )
                }
              },
              {
                key: 'highlightAnswers',
                value: function () {
                  var e = this,
                    t = function (e, t) {
                      e.parentNode.className += t
                        ? ' generate-quiz__answer_correct'
                        : ' generate-quiz__answer_wrong'
                    }
                  this._DOMQuestionReferences.forEach(function (n, r) {
                    var s = e.questions[r],
                      a = 'correctAnswers' in s
                    n.answers.forEach(function (e) {
                      var n = e.label
                      if (a) {
                        var r = !1
                        s.correctAnswers.forEach(function (e) {
                          n.textContent === s.answers[e] && (r = !0)
                        }),
                          t(n, r)
                      } else t(n, n.textContent === s.answers[s.correctAnswer])
                    })
                  })
                }
              }
            ]),
            t
          )
        })()
        exports.default = h
      },
      {
        'lodash/shuffle': 25,
        'lodash/uniq': 24,
        'lodash/difference': 23,
        'lodash/find': 22,
        './saveStorage': 15
      }
    ],
    10: [
      function (require, module, exports) {
        'use strict'
        require('../scss/styles.scss')
        var e = require('./Quiz'),
          t = o(e),
          n = require('./saveStorage'),
          r = o(n)
        function o(e) {
          return e && e.__esModule ? e : { default: e }
        }
        var u = document.querySelector('.generate-quiz'),
          a = document.querySelector('.generate-quiz__menu'),
          i = document.querySelector('.generate-quiz__btn-results'),
          s = document.querySelector('.generate-quiz__btn-reset'),
          c = document.querySelector('.generate-quiz__btn-e12'),
          l = document.querySelector('.generate-quiz__btn-e13'),
          d = document.querySelector('.generate-quiz__btn-e14'),
          y = document.querySelector('.generate-quiz__btn-favorites'),
          f = document.querySelector('.generate-quiz__results'),
          q = 'e13',
          z = function () {
            return r.default[q].slice(0, 10)
          },
          _ = new t.default(u, z())
        ;(window.quiz = _), (window.saveStorage = r.default)
        var g = function (e) {
          ;(u.style.display = 'none'),
            (a.style.display = 'block'),
            (q = e),
            (f.textContent =
              'Pula pytań została ustawiona na ' + e.toUpperCase() + '!')
        }
        c.addEventListener('click', function () {
          return g('e12')
        }),
          l.addEventListener('click', function () {
            return g('e13')
          }),
          d.addEventListener('click', function () {
            return g('e14')
          }),
          y.addEventListener('click', function () {
            return g('favorites')
          }),
          i.addEventListener('click', function () {
            var e = _.calculateResults()
            ;(i.disabled = !0),
              'favorites' !== q &&
                (r.default[q] = r.default[q].filter(function (t) {
                  return -1 === e.answeredQuestions.indexOf(t)
                })),
              (f.textContent =
                'Zdobyłeś ' +
                e.score +
                ' z ' +
                e.totalPoints +
                ' punktów, co daje ci ' +
                Math.round(e.percentageScore) +
                '%! W kategorii ' +
                q.toUpperCase() +
                ' pozostało ci jeszcze ' +
                r.default[q].length +
                ' pytań!'),
              _.disableInputs(),
              _.highlightAnswers(),
              r.default.save(q)
          }),
          s.addEventListener('click', function () {
            if (((_.questions = z()), _.questions.length)) {
              ;(u.style.display = 'block'),
                (f.textContent = 'Wylosowano pytania!'),
                (i.disabled = !1)
              try {
                document.body.scrollIntoView({
                  behavior: 'smooth',
                  block: 'start'
                })
              } catch (e) {}
            } else f.textContent = 'Do ulubionych nie dodano jeszcze żadnych pytań!'
            _.render()
          })
      },
      { '../scss/styles.scss': 13, './Quiz': 14, './saveStorage': 15 }
    ]
  },
  {},
  [10],
  null
)
//# sourceMappingURL=js.bdd6bdf5.map
