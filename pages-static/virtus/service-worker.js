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
    ['./index.html', '73f6c60fa9506fac2113c1ca4e4458d9'],
    ['./static/css/main.aecefa4e.css', '876fc19753c40c692b6e3896f0693e30'],
    ['./static/js/main.d2c1056b.js', '5a4f54e67e41a4f65ec42c6176179e55'],
    [
      './static/media/fontello.15364c61.ttf',
      '15364c61817d19e63762ee1bd6c578df'
    ],
    [
      './static/media/fontello.41f202ec.eot',
      '41f202ec4057f86edac437fa0639c7d6'
    ],
    [
      './static/media/fontello.c571bb2d.woff',
      'c571bb2d8cf6051a865952bb52962ab1'
    ],
    [
      './static/media/fontello.dcd5a07e.svg',
      'dcd5a07eec6d191419cc11aff5e8b35e'
    ],
    [
      './static/media/fontello.e1fc3a19.woff2',
      'e1fc3a19bd592ec67e1aee582fbc624e'
    ],
    [
      './static/media/profile-5.e1208b9b.png',
      'e1208b9bde05531c34e6208dd84a2eac'
    ]
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
  createCacheKey = function (e, t, n, r) {
    var a = new URL(e)
    return (
      (r && a.pathname.match(r)) ||
        (a.search +=
          (a.search ? '&' : '') +
          encodeURIComponent(t) +
          '=' +
          encodeURIComponent(n)),
      a.toString()
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
        r = new URL(t, self.location),
        a = createCacheKey(r, hashParamName, n, /\.\w{8}\./)
      return [r.toString(), a]
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
                var r = new Request(n, { credentials: 'same-origin' })
                return fetch(r).then(function (t) {
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
