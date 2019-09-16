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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.2.0/workbox-sw.js");

workbox.skipWaiting();
workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "favicon.bacf2b69.png",
    "revision": "27910a562cf8c0d76470d0ed17c1ed91"
  },
  {
    "url": "index.html",
    "revision": "9d564056453deafab4eb917ba47c3eb8"
  },
  {
    "url": "js.6b68dd7e.js",
    "revision": "25b4cd2d82865f3702674d72acebf46d"
  },
  {
    "url": "js.aa3af70e.css",
    "revision": "3a0c77f571b9191f57d78ac0b8ded1be"
  },
  {
    "url": "/",
    "revision": "833df6f38453bc2a20f8f60726e60e33"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute("./index.html");
