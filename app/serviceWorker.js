importScripts('workbox-sw.prod.v2.1.2.js');

const workboxSW = new self.WorkboxSW({clientsClaim: true})
workboxSW.precache([
  {
    "url": "favicon-32x32.png",
    "revision": "7b1da026f1c9dc9d8caadbe4bdb7b2a8"
  },
  {
    "url": "index.html",
    "revision": "5de1ef0fb1ad69499470ffe1d6e2cf76"
  },
  {
    "url": "itkVtkViewer.js",
    "revision": "6bca631d94845d35e40db2461518b5db"
  },
  {
    "url": "itkVtkViewerCDN.js",
    "revision": "dead98103ed326637a495b78e102eef4"
  },
  {
    "url": "test.html",
    "revision": "7ae13ed21ff30dda487760df4b24897c"
  }
])

workboxSW.router.registerRoute(
  /\.js|\.png|\.wasm$/,
  workboxSW.strategies.staleWhileRevalidate({
  cacheName: 'staleWhileRevalidateContent',
  cacheExpiration: {
    maxEntries: 50,
    maxAgeSeconds: 7 * 24 * 60 * 60 * 26,
    }
  })
);
