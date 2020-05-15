/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "clanwars-go.59a4f0cf.png",
    "revision": "236382cd67c4154362cfc2abf74df198"
  },
  {
    "url": "cv-eng.pdf",
    "revision": "da26e82d706964709afa5f2939fb9e21"
  },
  {
    "url": "cv-pl.pdf",
    "revision": "bfe85ac566ff8ace47faf626d7a0392b"
  },
  {
    "url": "egzaminy-prawo-jazdy.cc7ec2c9.png",
    "revision": "8f1bd79712e308c657ccd5c7379bc79a"
  },
  {
    "url": "egzaminy-technik-informatyk.cbcb9699.png",
    "revision": "5f7dfd7c0f141a613f7d8be84a3eacc0"
  },
  {
    "url": "erb-webcam.faa86d1b.png",
    "revision": "fb96da292f00a86b615c614e41b1f1fa"
  },
  {
    "url": "favicon.2e70f008.png",
    "revision": "5d6ac0fa0302a4d681d71a222820b33e"
  },
  {
    "url": "fontello.247d4832.css",
    "revision": "dc4dbb0f6a7794b69cec76746ce56b40"
  },
  {
    "url": "fontello.6b887992.woff",
    "revision": "45d91cabb04da8979edf958b34a28f33"
  },
  {
    "url": "heheobrazki.c3a00007.png",
    "revision": "4f18b58ff0ab6d1522bf9876ab48223b"
  },
  {
    "url": "hotfix.8d4214e3.png",
    "revision": "bc24d4bc5e15a386702025297c28f2f0"
  },
  {
    "url": "index.html",
    "revision": "af7b2852847fb9e1b1c653a48acc5c93"
  },
  {
    "url": "js.00a46daa.css",
    "revision": "0bb533bf7c3411b9c56d697d15b4d101"
  },
  {
    "url": "js.00a46daa.js",
    "revision": "c62ee9ab80ef670626a2c4c4a9a1d221"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "49f64dd879b510374dd1d69d32f7033c"
  },
  {
    "url": "nie-wiem.0cc7b302.png",
    "revision": "5d9f04d1c5d2fb18708f57d3e645729d"
  },
  {
    "url": "parcel-boilerplate-pwa.69c5fe38.png",
    "revision": "66a7ce3cc3112dbb5d8654d34329f8c8"
  },
  {
    "url": "perth.86fc73b0.png",
    "revision": "7aa0afcd18c8e667b1eee834c45524be"
  },
  {
    "url": "photo.854b8ab1.jpg",
    "revision": "a35ada699c2db356862910f52490c062"
  },
  {
    "url": "react-minesweeper.4f9f6d1d.png",
    "revision": "a932d45373930d805c002afc4f275441"
  },
  {
    "url": "repetitive.fe2db1f4.png",
    "revision": "a8d676da24f27798cdcdcffb3f69be47"
  },
  {
    "url": "Roboto-Regular.652d6efc.ttf",
    "revision": "3e1af3ef546b9e6ecef9f3ba197bf7d2"
  },
  {
    "url": "saveafox.77c04b9f.png",
    "revision": "c3bf038e3a1ba5aaa44e9819220cbf5c"
  },
  {
    "url": "styles.8986bff4.css",
    "revision": "0e0bb4b63e454d5919bd9b5efaa940f5"
  },
  {
    "url": "virtus.e8f04fba.png",
    "revision": "fce9d7e2019d947e7dc27a4234eac983"
  },
  {
    "url": "webstickynotes.315d1534.png",
    "revision": "99773043a26fda4b13b1a68e80191209"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
