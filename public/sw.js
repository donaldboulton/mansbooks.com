if(!self.define){let e,s={};const c=(c,i)=>(c=new URL(c+".js",i).href,s[c]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=s,document.head.appendChild(e)}else e=c,importScripts(c),s()})).then((()=>{let e=s[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(i,n)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(s[a])return;let t={};const r=e=>c(e,a),o={module:{uri:a},exports:t,require:r};s[a]=Promise.all(i.map((e=>o[e]||r(e)))).then((e=>(n(...e),t)))}}define(["./workbox-588899ac"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/301-121cd0b173ee40f3.js",revision:"121cd0b173ee40f3"},{url:"/_next/static/chunks/339-535cec55c631edda.js",revision:"535cec55c631edda"},{url:"/_next/static/chunks/439-ae292d11b8d0733e.js",revision:"ae292d11b8d0733e"},{url:"/_next/static/chunks/561-973d17ab91347072.js",revision:"973d17ab91347072"},{url:"/_next/static/chunks/649-07056258cc9cc031.js",revision:"07056258cc9cc031"},{url:"/_next/static/chunks/71-592e049817639c34.js",revision:"592e049817639c34"},{url:"/_next/static/chunks/755-3dc35ae97789c127.js",revision:"3dc35ae97789c127"},{url:"/_next/static/chunks/790-17248a0111be32bd.js",revision:"17248a0111be32bd"},{url:"/_next/static/chunks/896-46f6623381c96be2.js",revision:"46f6623381c96be2"},{url:"/_next/static/chunks/951.7361755360132cf2.js",revision:"7361755360132cf2"},{url:"/_next/static/chunks/framework-2c79e2a64abdb08b.js",revision:"2c79e2a64abdb08b"},{url:"/_next/static/chunks/main-496db363d6ffb455.js",revision:"496db363d6ffb455"},{url:"/_next/static/chunks/pages/_app-799aa14688394d42.js",revision:"799aa14688394d42"},{url:"/_next/static/chunks/pages/_error-8353112a01355ec2.js",revision:"8353112a01355ec2"},{url:"/_next/static/chunks/pages/blog-28d3fc7a07a19aad.js",revision:"28d3fc7a07a19aad"},{url:"/_next/static/chunks/pages/expo-67e965ec6ad80be9.js",revision:"67e965ec6ad80be9"},{url:"/_next/static/chunks/pages/expo/%5Bslug%5D-3a7edd3e61bc9ca6.js",revision:"3a7edd3e61bc9ca6"},{url:"/_next/static/chunks/pages/index-66644f3a7b524717.js",revision:"66644f3a7b524717"},{url:"/_next/static/chunks/pages/jobs-c148167923eda88e.js",revision:"c148167923eda88e"},{url:"/_next/static/chunks/pages/posts/%5Bslug%5D-b0529761d46c6edd.js",revision:"b0529761d46c6edd"},{url:"/_next/static/chunks/pages/privacy-d8d1a7c7d7f59a7a.js",revision:"d8d1a7c7d7f59a7a"},{url:"/_next/static/chunks/pages/schedule-4f7aec4f6f83e3aa.js",revision:"4f7aec4f6f83e3aa"},{url:"/_next/static/chunks/pages/speakers-95a49bd675d8b8ae.js",revision:"95a49bd675d8b8ae"},{url:"/_next/static/chunks/pages/speakers/%5Bslug%5D-94302d5a819626f1.js",revision:"94302d5a819626f1"},{url:"/_next/static/chunks/pages/stage/%5Bslug%5D-3e77687b0b7cd6f6.js",revision:"3e77687b0b7cd6f6"},{url:"/_next/static/chunks/pages/ticket-image-4b876d05b4d6d7e8.js",revision:"4b876d05b4d6d7e8"},{url:"/_next/static/chunks/pages/tickets/%5Busername%5D-c5ce59692d7cff49.js",revision:"c5ce59692d7cff49"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-32e29bc8d1b89294.js",revision:"32e29bc8d1b89294"},{url:"/_next/static/css/4d6d122104b8817e.css",revision:"4d6d122104b8817e"},{url:"/_next/static/css/50c2bc70278b2d21.css",revision:"50c2bc70278b2d21"},{url:"/_next/static/css/56cf825147a007ba.css",revision:"56cf825147a007ba"},{url:"/_next/static/css/8a17a01909998956.css",revision:"8a17a01909998956"},{url:"/_next/static/css/93281d4af3ba6a86.css",revision:"93281d4af3ba6a86"},{url:"/_next/static/css/98016c6c5508548c.css",revision:"98016c6c5508548c"},{url:"/_next/static/css/989bdfc408a90012.css",revision:"989bdfc408a90012"},{url:"/_next/static/css/baee8f36ef24cfa6.css",revision:"baee8f36ef24cfa6"},{url:"/_next/static/css/d5eccb471585fc16.css",revision:"d5eccb471585fc16"},{url:"/_next/static/css/e3b9a0db51538f96.css",revision:"e3b9a0db51538f96"},{url:"/_next/static/css/f457fe508731eb80.css",revision:"f457fe508731eb80"},{url:"/_next/static/hPGyq9YdsGcSXfOnczxso/_buildManifest.js",revision:"68a1f79018b30e202a930feff40b48c9"},{url:"/_next/static/hPGyq9YdsGcSXfOnczxso/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/media/7-dark@tinypng.22f91747.png",revision:"22f91747"},{url:"/apple-touch-icon.png",revision:"de2a4c06da4c452fe1b1a3334c33c297"},{url:"/beams/7-dark@tinypng.png",revision:"aaec747c42b0a001cb3bf655f1168427"},{url:"/beams/docs-dark@tiny.png",revision:"455fe8b1759b16428e1c3de0b58a8729"},{url:"/beams/docs-dark@tinypng.png",revision:"d7ccb571fac6d427bd4aa07d69ec77b0"},{url:"/bg.png",revision:"c24dc1c3545e79561c025d44bfd34c4d"},{url:"/browserconfig.xml",revision:"726187c414205f286afeb06e2d14400f"},{url:"/chat.svg",revision:"ad6f34fb554cc56bff5768d657e3efbe"},{url:"/deploy.png",revision:"3d07122ce22fd11acca19e124b425b63"},{url:"/favicon-16x16.png",revision:"fb1cfd140f1e59c15fe37317ab8ad876"},{url:"/favicon-32x32.png",revision:"151b9b3244e2e47b288981468c7df782"},{url:"/favicon.ico",revision:"f950e7ea47e101329b7ee43e00ce7fa4"},{url:"/hms-coachmark.svg",revision:"99d119a4398b03826b8bf22b5a9b02a0"},{url:"/icon-192x192.png",revision:"d35524f9e088eea0b1dcdbe56a8b0583"},{url:"/icon-512x512.png",revision:"0a04eff90ff0ceb2b21bda9405a7138a"},{url:"/icons/apple-touch-icon-114x114.png",revision:"b2cce9617ff30a2e5b739d82cf4c13b7"},{url:"/icons/apple-touch-icon-120x120.png",revision:"c1cfd60a5ad3ec0ab8b9c4fe737923af"},{url:"/icons/apple-touch-icon-144x144.png",revision:"bfcf51e5ee15387b42ea4b6de4c3635c"},{url:"/icons/apple-touch-icon-152x152.png",revision:"559aa55453717e0d68f8a216fff699ab"},{url:"/icons/apple-touch-icon-180x180.png",revision:"ad38cff1bdc349481d22c0f836b63f25"},{url:"/icons/apple-touch-icon-57x57.png",revision:"e0d0b685e2c4b1df5dfbf6e5c3db8d67"},{url:"/icons/apple-touch-icon-72x72.png",revision:"c695809705245182d73555b878292634"},{url:"/icons/apple-touch-icon-76x76.png",revision:"95f7ec54748f09f4b383340d9d8c3cb0"},{url:"/icons/apple-touch-icon.png",revision:"e0d0b685e2c4b1df5dfbf6e5c3db8d67"},{url:"/icons/browserconfig.xml",revision:"846c0d462dc8fcbf3d04059fcfb0b05d"},{url:"/icons/safari-pinned-tab.svg",revision:"3c9ddf7d0111e00be013b31744d4f55a"},{url:"/icons/tile-wide.png",revision:"d4c25f517f4d25efd2f0fb86c1113c9b"},{url:"/icons/tile.png",revision:"851acb8a1ffade183a8e9a41c4f165d7"},{url:"/icons/tile310x310.png",revision:"ce7e07779f17300da2fca124744966d0"},{url:"/icons/tile70x70.png",revision:"da2d38737fab816fa64cd09bd4c93739"},{url:"/icons/touch-icon-ipad-retina.png",revision:"bdbf5cc981c338d56d5b07437c43991e"},{url:"/icons/touch-icon-ipad.png",revision:"e2536accc7317e4e09a82eed95471895"},{url:"/icons/touch-icon-iphone-retina.png",revision:"a5e8236e58d8b97dc356d5a04d27581a"},{url:"/icons/touch-icon-iphone.png",revision:"a5e8236e58d8b97dc356d5a04d27581a"},{url:"/image1.png",revision:"e675da89599067f25826a3eb8a587274"},{url:"/image2.png",revision:"50ba48f4dbce7600803809c7150b5898"},{url:"/manifest.json",revision:"c14434d9f7100669e5212450a6ea7223"},{url:"/mstile-150x150.png",revision:"fc5bd63ac943de622b000d45404f070c"},{url:"/robots.txt",revision:"1d087ee8649b2bfb1403d01f5d3ac73d"},{url:"/safari-pinned-tab.svg",revision:"40c9bc99e963fb841cd147f0374682fe"},{url:"/server.js",revision:"6111b342fe9a1ff3b54f6b794cfc12c2"},{url:"/site.webmanifest",revision:"10123bc7368d7d0680b88fb33d46a363"},{url:"/twitter-card.jpg",revision:"f2bebd8a337de4798b117163a189170c"},{url:"/twitter-card.png",revision:"d1f0352bb1fd027d846c25c97aa3e141"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:c,state:i})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
