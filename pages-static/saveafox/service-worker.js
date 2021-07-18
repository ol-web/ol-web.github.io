'use strict'
function setOfCachedUrls(e) {
  return e
    .keys()
    .then(function (e) {
      return e.map(function (e) {
        return e.url
      })
    })
    .then(function (e) {
      return new Set(e)
    })
}
var precacheConfig = [
    ['./index.html', 'e41951b4712b89b8173f2a4aaf12d9e8'],
    ['./static/css/main.0ad7ec3b.css', 'eebaa45a243025d032ab38b1d377c39d'],
    ['./static/js/main.06a8a87c.js', 'e180551cd1d15a8bf416cb0596559b9b'],
    [
      './static/media/background.8bdf1e26.jpeg',
      '8bdf1e2652787aea8a338d4fe8148ae9'
    ],
    [
      './static/media/fontello.789495ce.eot',
      '789495ce34fb02b6a5a27acc7ae0776e'
    ],
    [
      './static/media/fontello.9a3b54ff.woff',
      '9a3b54ff0978cdf70b51074156930b05'
    ],
    [
      './static/media/fontello.a594d144.svg',
      'a594d144d194a1dc1157af886ede2348'
    ],
    [
      './static/media/fontello.aed86b1c.ttf',
      'aed86b1c94db45ffa7c7b0926833329b'
    ],
    [
      './static/media/fontello.d37090b0.woff2',
      'd37090b04ff12c0dc9beeb8e6263dd9a'
    ],
    ['./static/media/person1.814ead20.jpg', '814ead204fed6fe01c900d13e1e20323'],
    ['./static/media/person2.b95fd7ef.png', 'b95fd7effb78ed9583e2e8f224234bd0'],
    ['./static/media/person3.546713d0.jpg', '546713d01205ef6097b7bdbf38a38f23']
  ],
  cacheName =
    'sw-precache-v3-sw-precache-webpack-plugin-' +
    (self.registration ? self.registration.scope : ''),
  ignoreUrlParametersMatching = [/^utm_/],
  addDirectoryIndex = function (e, t) {
    var n = new URL(e)
    return '/' === n.pathname.slice(-1) && (n.pathname += t), n.toString()
  },
  cleanResponse = function (e) {
    return e.redirected
      ? ('body' in e ? Promise.resolve(e.body) : e.blob()).then(function (t) {
          return new Response(t, {
            headers: e.headers,
            status: e.status,
            statusText: e.statusText
          })
        })
      : Promise.resolve(e)
  },
  createCacheKey = function (e, t, n, a) {
    var r = new URL(e)
    return (
      (a && r.pathname.match(a)) ||
        (r.search +=
          (r.search ? '&' : '') +
          encodeURIComponent(t) +
          '=' +
          encodeURIComponent(n)),
      r.toString()
    )
  },
  isPathWhitelisted = function (e, t) {
    if (0 === e.length) return !0
    var n = new URL(t).pathname
    return e.some(function (e) {
      return n.match(e)
    })
  },
  stripIgnoredUrlParameters = function (e, t) {
    var n = new URL(e)
    return (
      (n.hash = ''),
      (n.search = n.search
        .slice(1)
        .split('&')
        .map(function (e) {
          return e.split('=')
        })
        .filter(function (e) {
          return t.every(function (t) {
            return !t.test(e[0])
          })
        })
        .map(function (e) {
          return e.join('=')
        })
        .join('&')),
      n.toString()
    )
  },
  hashParamName = '_sw-precache',
  urlsToCacheKeys = new Map(
    precacheConfig.map(function (e) {
      var t = e[0],
        n = e[1],
        a = new URL(t, self.location),
        r = createCacheKey(a, hashParamName, n, /\.\w{8}\./)
      return [a.toString(), r]
    })
  )
self.addEventListener('install', function (e) {
  e.waitUntil(
    caches
      .open(cacheName)
      .then(function (e) {
        return setOfCachedUrls(e).then(function (t) {
          return Promise.all(
            Array.from(urlsToCacheKeys.values()).map(function (n) {
              if (!t.has(n)) {
                var a = new Request(n, { credentials: 'same-origin' })
                return fetch(a).then(function (t) {
                  if (!t.ok)
                    throw new Error(
                      'Request for ' +
                        n +
                        ' returned a response with status ' +
                        t.status
                    )
                  return cleanResponse(t).then(function (t) {
                    return e.put(n, t)
                  })
                })
              }
            })
          )
        })
      })
      .then(function () {
        return self.skipWaiting()
      })
  )
}),
  self.addEventListener('activate', function (e) {
    var t = new Set(urlsToCacheKeys.values())
    e.waitUntil(
      caches
        .open(cacheName)
        .then(function (e) {
          return e.keys().then(function (n) {
            return Promise.all(
              n.map(function (n) {
                if (!t.has(n.url)) return e.delete(n)
              })
            )
          })
        })
        .then(function () {
          return self.clients.claim()
        })
    )
  }),
  self.addEventListener('fetch', function (e) {
    if ('GET' === e.request.method) {
      var t,
        n = stripIgnoredUrlParameters(
          e.request.url,
          ignoreUrlParametersMatching
        )
      ;(t = urlsToCacheKeys.has(n)) ||
        ((n = addDirectoryIndex(n, 'index.html')), (t = urlsToCacheKeys.has(n)))
      !t &&
        'navigate' === e.request.mode &&
        isPathWhitelisted(['^(?!\\/__).*'], e.request.url) &&
        ((n = new URL('./index.html', self.location).toString()),
        (t = urlsToCacheKeys.has(n))),
        t &&
          e.respondWith(
            caches
              .open(cacheName)
              .then(function (e) {
                return e.match(urlsToCacheKeys.get(n)).then(function (e) {
                  if (e) return e
                  throw Error(
                    'The cached response that was expected is missing.'
                  )
                })
              })
              .catch(function (t) {
                return (
                  console.warn(
                    'Couldn\'t serve response for "%s" from cache: %O',
                    e.request.url,
                    t
                  ),
                  fetch(e.request)
                )
              })
          )
    }
  })
