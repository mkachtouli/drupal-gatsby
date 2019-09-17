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

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "webpack-runtime-88db73358053662306e0.js"
  },
  {
    "url": "commons.7dbeebcc87242fbe836f.css"
  },
  {
    "url": "commons-556e47c0c4e9ff01d786.js"
  },
  {
    "url": "app-91458ee086600182da30.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-5377735ecf5fa18c3a9b.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "5a79b7673386cd057e62b84f2eb926a4"
  },
  {
    "url": "page-data/offline-plugin-app-shell-fallback/page-data.json",
    "revision": "1c52600b4b5eaeeca4690e8a5b8e3289"
  },
  {
    "url": "component---src-pages-news-js-1b90b27dc3f897fc4ded.js"
  },
  {
    "url": "page-data/news/page-data.json",
    "revision": "caa6c823eacd799e810b02d1e1ae134d"
  },
  {
    "url": "component---src-templates-newsitem-js-29d7f4014df7526efa81.js"
  },
  {
    "url": "page-data/news/10/page-data.json",
    "revision": "55a29b7e62be85e3bd08362b67c5eb42"
  },
  {
    "url": "page-data/news/12/page-data.json",
    "revision": "79ca3b8169d7b2e59c4c9b8df8f2d4d3"
  },
  {
    "url": "page-data/news/13/page-data.json",
    "revision": "73ad7e7b2f3c30d9cdf3ea14eb84a4e3"
  },
  {
    "url": "page-data/news/14/page-data.json",
    "revision": "b9725a73d4f71a673a03b247ff7872bf"
  },
  {
    "url": "page-data/news/15/page-data.json",
    "revision": "882200b02d4d8c52ebc2147e686cda3a"
  },
  {
    "url": "page-data/news/16/page-data.json",
    "revision": "b748cc6521aa0f6ea887a7342569e481"
  },
  {
    "url": "page-data/news/17/page-data.json",
    "revision": "3240ad34635c7848bb7e75aaeacea7a9"
  },
  {
    "url": "page-data/news/18/page-data.json",
    "revision": "21288327609b6093d0bf64277ccb1299"
  },
  {
    "url": "page-data/news/19/page-data.json",
    "revision": "ffdf4e38275338f1a2b4e3340e19c188"
  },
  {
    "url": "page-data/news/20/page-data.json",
    "revision": "243c979a151b9c1cbac0fe448c899a2c"
  },
  {
    "url": "page-data/news/3/page-data.json",
    "revision": "cc15ed1fe28b9f29bcc67f947c7ddf4c"
  },
  {
    "url": "page-data/news/4/page-data.json",
    "revision": "31928d2a57fa75b495a394318ea699db"
  },
  {
    "url": "page-data/news/5/page-data.json",
    "revision": "a89d38f5bd6597f3b1b7854f0b378a7b"
  },
  {
    "url": "page-data/news/6/page-data.json",
    "revision": "8e50c834c6de764f6685be839bcf97a8"
  },
  {
    "url": "page-data/news/7/page-data.json",
    "revision": "9167ba34472dd6bc27b98ba34c6ccaa4"
  },
  {
    "url": "page-data/news/8/page-data.json",
    "revision": "de97b56ffbddc583890dab99015b04cc"
  },
  {
    "url": "page-data/news/9/page-data.json",
    "revision": "fb47002b6155ce11800ca341072d15dd"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "ef9898a91945847f4983b3f1c1553652"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/(\.js$|\.css$|static\/)/, new workbox.strategies.CacheFirst(), 'GET');
workbox.routing.registerRoute(/^https?:.*\page-data\/.*\/page-data\.json/, new workbox.strategies.NetworkFirst(), 'GET');
workbox.routing.registerRoute(/^https?:.*\.(png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:\/\/fonts\.googleapis\.com\/css/, new workbox.strategies.StaleWhileRevalidate(), 'GET');

/* global importScripts, workbox, idbKeyval */

importScripts(`idb-keyval-iife.min.js`)

const { NavigationRoute } = workbox.routing

const navigationRoute = new NavigationRoute(async ({ event }) => {
  let { pathname } = new URL(event.request.url)
  pathname = pathname.replace(new RegExp(`^`), ``)

  // Check for resources + the app bundle
  // The latter may not exist if the SW is updating to a new version
  const resources = await idbKeyval.get(`resources:${pathname}`)
  if (!resources || !(await caches.match(`/app-91458ee086600182da30.js`))) {
    return await fetch(event.request)
  }

  for (const resource of resources) {
    // As soon as we detect a failed resource, fetch the entire page from
    // network - that way we won't risk being in an inconsistent state with
    // some parts of the page failing.
    if (!(await caches.match(resource))) {
      return await fetch(event.request)
    }
  }

  const offlineShell = `/offline-plugin-app-shell-fallback/index.html`
  const offlineShellWithKey = workbox.precaching.getCacheKeyForURL(offlineShell)
  return await caches.match(offlineShellWithKey)
})

workbox.routing.registerRoute(navigationRoute)

const messageApi = {
  setPathResources(event, { path, resources }) {
    event.waitUntil(idbKeyval.set(`resources:${path}`, resources))
  },

  clearPathResources(event) {
    event.waitUntil(idbKeyval.clear())
  },
}

self.addEventListener(`message`, event => {
  const { gatsbyApi } = event.data
  if (gatsbyApi) messageApi[gatsbyApi](event, event.data)
})
