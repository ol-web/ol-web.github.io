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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.1.1/workbox-sw.js");

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
    "url": "clanwars-go.8bb12e27.png",
    "revision": "236382cd67c4154362cfc2abf74df198"
  },
  {
    "url": "egzaminy-prawo-jazdy.4a155a4f.png",
    "revision": "8f1bd79712e308c657ccd5c7379bc79a"
  },
  {
    "url": "egzaminy-technik-informatyk.320d3028.png",
    "revision": "5f7dfd7c0f141a613f7d8be84a3eacc0"
  },
  {
    "url": "favicon.1b3d6bb1.png",
    "revision": "5d6ac0fa0302a4d681d71a222820b33e"
  },
  {
    "url": "fontello.1b6e0b77.woff",
    "revision": "45d91cabb04da8979edf958b34a28f33"
  },
  {
    "url": "fontello.6db5e6b8.css",
    "revision": "a8fa5eb2beda36da732ff5b37df87e23"
  },
  {
    "url": "heheobrazki.c8d1e3a9.png",
    "revision": "4f18b58ff0ab6d1522bf9876ab48223b"
  },
  {
    "url": "index.html",
    "revision": "996ab37ee075962497d520d256cf4c54"
  },
  {
    "url": "js.510a1274.js",
    "revision": "57c10ba0be41048db5ba7e0756a8f0b9"
  },
  {
    "url": "js.a0fc6a26.css",
    "revision": "0bb533bf7c3411b9c56d697d15b4d101"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "9184d9916beea1bf1e2971dc8f20ca6d"
  },
  {
    "url": "nie-wiem.80393624.png",
    "revision": "5d9f04d1c5d2fb18708f57d3e645729d"
  },
  {
    "url": "parcel-boilerplate-pwa.879142fd.png",
    "revision": "66a7ce3cc3112dbb5d8654d34329f8c8"
  },
  {
    "url": "perth.fa65dbc5.png",
    "revision": "7aa0afcd18c8e667b1eee834c45524be"
  },
  {
    "url": "react-minesweeper.9d669260.png",
    "revision": "a932d45373930d805c002afc4f275441"
  },
  {
    "url": "repetitive.4aa4f014.png",
    "revision": "a8d676da24f27798cdcdcffb3f69be47"
  },
  {
    "url": "Roboto-Regular.74e83e5b.ttf",
    "revision": "3e1af3ef546b9e6ecef9f3ba197bf7d2"
  },
  {
    "url": "saveafox.ba91f519.png",
    "revision": "c3bf038e3a1ba5aaa44e9819220cbf5c"
  },
  {
    "url": "styles.252eac5d.css",
    "revision": "40cea1400f1739af23ecedcf27b90b7b"
  },
  {
    "url": "virtus.6c3ca07f.png",
    "revision": "fce9d7e2019d947e7dc27a4234eac983"
  },
  {
    "url": "webstickynotes.797ba9f8.png",
    "revision": "99773043a26fda4b13b1a68e80191209"
  },
  {
    "url": "zdjecie.1900de9e.jpg",
    "revision": "d1dbfb2d0a3b43824ae56bf99d0f33d5"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
