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

importScripts("workbox-v4.3.1/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v4.3.1"});

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
    "url": "data/data.json",
    "revision": "a19f2bb86fc7b91daede9a846563c6c8"
  },
  {
    "url": "index.html",
    "revision": "b09b0a6d37da94b94fa6d4f7bd2bbd5a"
  },
  {
    "url": "js/app.js",
    "revision": "f18a4a7e66a6dd5a5de62dd5195d8a5f"
  },
  {
    "url": "js/component/card/card.js",
    "revision": "2c1842e965515603abef5250cc24bd17"
  },
  {
    "url": "js/connection.js",
    "revision": "9f20b4b2ad61a65e35fb8fcd34e38893"
  },
  {
    "url": "manifest.json",
    "revision": "5874d85704e7839669c9619c98216833"
  },
  {
    "url": "styles/main.css",
    "revision": "3ecd282b9a27983fc521b4099a0d7870"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/\.(?:png|gif|jpg|jpeg|svg)$/, new workbox.strategies.CacheFirst({ "cacheName":"images-cache", plugins: [] }), 'GET');
