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
    "url": "404.html",
    "revision": "806df15a79ff13a467c183618aa84036"
  },
  {
    "url": "assets/css/0.styles.8f479f4e.css",
    "revision": "f32ebbd6cd757fa95b806b81b8c8c105"
  },
  {
    "url": "assets/fonts/codicon.a609dc0f.ttf",
    "revision": "a609dc0f334a7d4e64205247c4e8b97c"
  },
  {
    "url": "assets/img/2020-ts-download.527b75f6.png",
    "revision": "527b75f61ae853214a970e6ace1b8f40"
  },
  {
    "url": "assets/img/docs.77834bc4.png",
    "revision": "77834bc47a88da6ebaa3ec6c5085d202"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/wechat-zhifubao-pay.c574ee9e.png",
    "revision": "c574ee9ea0fcc9370d0c3b5ac12a7981"
  },
  {
    "url": "assets/js/10.7e89716f.js",
    "revision": "a05ba1c7ba0a73befa998e70666941f2"
  },
  {
    "url": "assets/js/11.95386288.js",
    "revision": "591c275fbeaaa3851b1d94b9bdb8be2b"
  },
  {
    "url": "assets/js/12.e561739d.js",
    "revision": "80c6aaa30ecd980c8683b2e35c9e5752"
  },
  {
    "url": "assets/js/13.248f86eb.js",
    "revision": "c0111f11797e82d6a3137efa670196d7"
  },
  {
    "url": "assets/js/14.2ab93470.js",
    "revision": "56ae3ecafc8fe71e5e56c78ec42bea11"
  },
  {
    "url": "assets/js/15.fd44e76e.js",
    "revision": "96cd53bd1f7ccd4f63eb417edf415d8c"
  },
  {
    "url": "assets/js/16.c6bc575c.js",
    "revision": "0cbe7f946ffada63a465e383cb58d0d1"
  },
  {
    "url": "assets/js/17.793190a9.js",
    "revision": "d43b44ae15e61f5766042b45def0e8e3"
  },
  {
    "url": "assets/js/18.b8e5e832.js",
    "revision": "25bfb03887009b84df7099777c1f097c"
  },
  {
    "url": "assets/js/19.b32c02a8.js",
    "revision": "b222eb871a6a274e779b227ca0bd11c1"
  },
  {
    "url": "assets/js/20.0ffb50d2.js",
    "revision": "348acdba997646790ba887cbf3bc25da"
  },
  {
    "url": "assets/js/21.d318d9e7.js",
    "revision": "f79c27ca6ae9e0d7576b26bfb976a605"
  },
  {
    "url": "assets/js/22.1526f8b1.js",
    "revision": "d0b98e618a2bf229dab541d4c8c0dc13"
  },
  {
    "url": "assets/js/23.19b40f12.js",
    "revision": "d843cc7f17d8dea3574bffd1058f273f"
  },
  {
    "url": "assets/js/24.fe6ec356.js",
    "revision": "3a67683fa8dda44522e73b9f9e318ce1"
  },
  {
    "url": "assets/js/25.d1749e25.js",
    "revision": "36d1bcafcaca35b79d8ff541caf68285"
  },
  {
    "url": "assets/js/26.1e8383d0.js",
    "revision": "207568bc7c8b21747e40cd5fbd3a6703"
  },
  {
    "url": "assets/js/27.6f7b15dd.js",
    "revision": "df902e5f6f4a1d00296c6772c1c57967"
  },
  {
    "url": "assets/js/28.64ee444b.js",
    "revision": "ca875bedf86df10d8281ceda5c564f86"
  },
  {
    "url": "assets/js/29.ae25474a.js",
    "revision": "6a8f6c404cba7350a1a8f04e8d1dd6ca"
  },
  {
    "url": "assets/js/3.24968e40.js",
    "revision": "00878ca481136311dd2e7f0f18261038"
  },
  {
    "url": "assets/js/4.b583bdb1.js",
    "revision": "0a5969cacecba54feea83e411fb349ff"
  },
  {
    "url": "assets/js/5.fed313d7.js",
    "revision": "ed70e7d7c50322be501531387682837c"
  },
  {
    "url": "assets/js/6.60ddfd3e.js",
    "revision": "2a4951587ebc22cc543805638a3ef450"
  },
  {
    "url": "assets/js/7.34589340.js",
    "revision": "ebf7a0bfdd8485a7284e8c1951479443"
  },
  {
    "url": "assets/js/8.92ccdd77.js",
    "revision": "a696f79ab0bb08d2f403c735e8ec39c4"
  },
  {
    "url": "assets/js/9.9b288f94.js",
    "revision": "6a541958f44cd4d46c3608b6440ee9bd"
  },
  {
    "url": "assets/js/app.fbcc45f1.js",
    "revision": "60edd9c8fb686688e28f8c8f486f9a60"
  },
  {
    "url": "editor.worker.js",
    "revision": "aad761805882c1dd9b31ce790588402a"
  },
  {
    "url": "images/docs.png",
    "revision": "77834bc47a88da6ebaa3ec6c5085d202"
  },
  {
    "url": "images/icons/icon-128x128.png",
    "revision": "990c5e0b1dfe6fb536ee09eec59465cd"
  },
  {
    "url": "images/icons/icon-144x144.png",
    "revision": "f8dc7fb1af07531e2246e9830f51edc7"
  },
  {
    "url": "images/icons/icon-152x152.png",
    "revision": "0c311dc8a891275aaf6c470b93aa2074"
  },
  {
    "url": "images/icons/icon-192x192.png",
    "revision": "65093a8d112a4d8b45953084fbb16487"
  },
  {
    "url": "images/icons/icon-384x384.png",
    "revision": "4d70d214b4def5aabe58cfb017ddd16b"
  },
  {
    "url": "images/icons/icon-512x512.png",
    "revision": "4d70d214b4def5aabe58cfb017ddd16b"
  },
  {
    "url": "images/icons/icon-72x72.png",
    "revision": "eff562dd276ec4a5989ed0fb74c7fea0"
  },
  {
    "url": "images/icons/icon-96x96.png",
    "revision": "a9af55f93b2cf1d325951fde149826f7"
  },
  {
    "url": "index.html",
    "revision": "f8223a8ad75e8366b00bbb5960fd257e"
  },
  {
    "url": "logo.png",
    "revision": "417f7b51b74ff7a1dfe9210c2dc64d1a"
  },
  {
    "url": "ts-logo.png",
    "revision": "166813938a8a65cf3197fa7da1d131f4"
  },
  {
    "url": "zh/array/index.html",
    "revision": "8a04d000f75c7cc77f0fe62a2aaa0485"
  },
  {
    "url": "zh/basic/index.html",
    "revision": "f7dc15800706d1c4df70e5865604fd8d"
  },
  {
    "url": "zh/class/index.html",
    "revision": "6703fc56929494ad9cf7cd5e30cc2ac3"
  },
  {
    "url": "zh/compile-config/index.html",
    "revision": "c5d8c7bfa1f5196b1c8567d9bbdfe3f6"
  },
  {
    "url": "zh/decorators/index.html",
    "revision": "fe1bf15fa7c4b7280aed2fc507241ed9"
  },
  {
    "url": "zh/faqs/index.html",
    "revision": "78e853a977b145451db0dfa3153efd36"
  },
  {
    "url": "zh/function/index.html",
    "revision": "168620270e157c8c79fe65c5a37b110e"
  },
  {
    "url": "zh/generics/index.html",
    "revision": "7915f2e9eaa755d945ddcc88c4556a94"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "bbf7b1a8b3103eaf21d464fd1c44abf3"
  },
  {
    "url": "zh/interface/index.html",
    "revision": "4f652f22b150db4c0db24211a5eb86a9"
  },
  {
    "url": "zh/operator/index.html",
    "revision": "4c49c5202d011ae6246b8928198dc060"
  },
  {
    "url": "zh/tips/index.html",
    "revision": "a0bfc8bdb82a1d23b1e059d846dceab8"
  },
  {
    "url": "zh/type-assertion/index.html",
    "revision": "eec1f680a22450c7ce222dd39278ec9d"
  },
  {
    "url": "zh/type-guard/index.html",
    "revision": "f245c43b5b328c03856219ae59b1744a"
  },
  {
    "url": "zh/union-types/index.html",
    "revision": "c417f9da26e4e2451c28af55f12e0a94"
  },
  {
    "url": "zh/what-is-typescript/index.html",
    "revision": "c8226056a55d02e4e4cc76ce47138e59"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
