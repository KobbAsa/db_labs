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
    "revision": "d34036bfb0704be6f07f2ea6c4ab96b1"
  },
  {
    "url": "assets/css/0.styles.c6d3df1c.css",
    "revision": "4201d4dcb102c7b34412b7fa174f5fd5"
  },
  {
    "url": "assets/img/createPoll.418b747c.png",
    "revision": "418b747c538dd57c400a769c19a324f1"
  },
  {
    "url": "assets/img/deletePoll.0c8d3047.png",
    "revision": "0c8d30472b70cf00418c421bd08c596a"
  },
  {
    "url": "assets/img/getAllPolls.1555294c.png",
    "revision": "1555294c9c30115c7e97ee4072af58fb"
  },
  {
    "url": "assets/img/getDeletedPoll.3f1e0ef8.png",
    "revision": "3f1e0ef86c5dd0e335fdd9614b9c4f9a"
  },
  {
    "url": "assets/img/getModifiedPoll.6bd1e644.png",
    "revision": "6bd1e6441a7b6b6a5e0ee3e8f5366f89"
  },
  {
    "url": "assets/img/getPoll111.852394c9.png",
    "revision": "852394c9e4a6f92553957e1d13157fb2"
  },
  {
    "url": "assets/img/getPoll333.d8e3b1c1.png",
    "revision": "d8e3b1c11b1b61ebf88043b0fd214bd4"
  },
  {
    "url": "assets/img/logo.21fcc4f4.svg",
    "revision": "21fcc4f485f8d8cd95ab594fcdc39a0e"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/sendModifiedPoll.2b1e9d5c.png",
    "revision": "2b1e9d5c71821131517799e2a7c37a99"
  },
  {
    "url": "assets/js/10.339decc4.js",
    "revision": "0c2a28a9fec8966248cf924fa667a123"
  },
  {
    "url": "assets/js/11.51bef9a9.js",
    "revision": "2abaa9094670ce5c988053989af905d9"
  },
  {
    "url": "assets/js/12.858053f0.js",
    "revision": "403bd076c4438e782f52fd02ceb06c0d"
  },
  {
    "url": "assets/js/13.3482fa85.js",
    "revision": "8a4ebe7e028c15eb4b6539e5768502d2"
  },
  {
    "url": "assets/js/14.cf726fff.js",
    "revision": "e40468b4455e13322b861d1043a8a561"
  },
  {
    "url": "assets/js/15.95b89f95.js",
    "revision": "a2112484c9ed0fbd4b924d9eb25d09f8"
  },
  {
    "url": "assets/js/16.75714264.js",
    "revision": "965dc8cf047e842fa443fc09b68d06b2"
  },
  {
    "url": "assets/js/17.77183b2c.js",
    "revision": "78cf22ee09cb0d32641242ce9865beb5"
  },
  {
    "url": "assets/js/18.2bf614ce.js",
    "revision": "0172a05c2cc5459e2c5515d1fa095bd9"
  },
  {
    "url": "assets/js/19.cbe14e6f.js",
    "revision": "0d5a8e94169c478d90cd018d01380e1b"
  },
  {
    "url": "assets/js/2.c3621278.js",
    "revision": "f3f4125b7e56646c09468062d87cf099"
  },
  {
    "url": "assets/js/20.04ef74f1.js",
    "revision": "82c24ba5fbd28c3186b0a3bf0ed4d288"
  },
  {
    "url": "assets/js/21.6f48ee77.js",
    "revision": "0fad3bd4304ddf4bcd617d1de11734c4"
  },
  {
    "url": "assets/js/22.8852b235.js",
    "revision": "37506c5a01809496a00dbc820fc136c0"
  },
  {
    "url": "assets/js/23.e5be4cb4.js",
    "revision": "10f3fbb2919dff369bd1a3b91f74ee2b"
  },
  {
    "url": "assets/js/24.22a19208.js",
    "revision": "3108545ca2af12cca42e6a51f68e30b1"
  },
  {
    "url": "assets/js/26.ca7b576d.js",
    "revision": "727a2cf6ba6bffca3f30357b26a8e6f7"
  },
  {
    "url": "assets/js/3.1a50e75a.js",
    "revision": "8628fd3335574656ab3acd62e18f798d"
  },
  {
    "url": "assets/js/4.f2f60e04.js",
    "revision": "ecd33d63dd4a5dde8a2fd954473114f8"
  },
  {
    "url": "assets/js/5.64ffc0ed.js",
    "revision": "347c57a7270c2007bff6c8e46a729157"
  },
  {
    "url": "assets/js/6.b6db7bb9.js",
    "revision": "e24cfa198c4bbfd5f4bed9b215f8d805"
  },
  {
    "url": "assets/js/7.e6512ed4.js",
    "revision": "825e2ccb49acd158b5421b04695d0771"
  },
  {
    "url": "assets/js/8.c2085028.js",
    "revision": "ffa49b4790f40d35957d993591478b6e"
  },
  {
    "url": "assets/js/9.1bf805a2.js",
    "revision": "b1ddce171ab598fd4f73bd3a7713d64b"
  },
  {
    "url": "assets/js/app.4b5d4322.js",
    "revision": "54eb57b5f741ba697e88f25df83588ab"
  },
  {
    "url": "conclusion/index.html",
    "revision": "390de128d1628af0ed03507041180786"
  },
  {
    "url": "design/index.html",
    "revision": "019b54c362698e7a3fccd54debbb2818"
  },
  {
    "url": "index.html",
    "revision": "a79debd4326f04e95390710e5e6aff5d"
  },
  {
    "url": "intro/index.html",
    "revision": "7dd91936550db4faee5cd532c1018d12"
  },
  {
    "url": "license.html",
    "revision": "70a2edbdcd1a16b29dc6ec11e14ab937"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "60492f110fe247f806825ae8d7816392"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "67a1fe832d4cf39fa6930ce44c3b9beb"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "31a505412c2fbb8c7a36421358997197"
  },
  {
    "url": "software/index.html",
    "revision": "85d8e9151d76231ce452d54917d12327"
  },
  {
    "url": "test/index.html",
    "revision": "ac6f9878562162d59ce531c22ee4045e"
  },
  {
    "url": "use cases/index.html",
    "revision": "9f15312d2e63e2265135ebc57005dc11"
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
