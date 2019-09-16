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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.2/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "chodzi.2ea96321.mp3",
    "revision": "858234322b3de73c9a30b2ccbff30962"
  },
  {
    "url": "favicon.1bc3e3ec.png",
    "revision": "b28059e4e3a13bebdd412bf26a356601"
  },
  {
    "url": "index.html",
    "revision": "fcce79c032d5271daeb408f9cfb14511"
  },
  {
    "url": "js.c568b50b.js",
    "revision": "1cd8d3f7e33567a0df315ed36e1c8593"
  },
  {
    "url": "manifest.a43e2faf.webmanifest",
    "revision": "0bc7ff2a83beb7bdec833ec577bad6b4"
  },
  {
    "url": "nie.e769c597.mp3",
    "revision": "b502e9d76a29573d193825b31b677475"
  },
  {
    "url": "o co.d99716cf.mp3",
    "revision": "a0cd184149e418ed6990a38826d3c37f"
  },
  {
    "url": "wiem.c3368051.mp3",
    "revision": "ad446f4e842ca7e7fea682197b49a6fd"
  },
  {
    "url": "wlasnie.f5b1be71.mp3",
    "revision": "8463d81e09b7c7cc3208a0c8257b3deb"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
