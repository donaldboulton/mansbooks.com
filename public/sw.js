if(!self.define){let e,s={};const c=(c,i)=>(c=new URL(c+".js",i).href,s[c]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=s,document.head.appendChild(e)}else e=c,importScripts(c),s()})).then((()=>{let e=s[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(i,a)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let t={};const d=e=>c(e,n),r={module:{uri:n},exports:t,require:d};s[n]=Promise.all(i.map((e=>r[e]||d(e)))).then((e=>(a(...e),t)))}}define(["./workbox-588899ac"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/7wqMMjO2cyeJ1tE3ODsI5/_buildManifest.js",revision:"89e69c44df71ae74987fac6df0cb1996"},{url:"/_next/static/7wqMMjO2cyeJ1tE3ODsI5/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/1764-8ac28d2aae8b9d8a.js",revision:"8ac28d2aae8b9d8a"},{url:"/_next/static/chunks/2298-e8143acee0f1570d.js",revision:"e8143acee0f1570d"},{url:"/_next/static/chunks/2407-f3044c62e5a64c3d.js",revision:"f3044c62e5a64c3d"},{url:"/_next/static/chunks/2452-47283f8c67e14257.js",revision:"47283f8c67e14257"},{url:"/_next/static/chunks/2910-6d5de616f4852212.js",revision:"6d5de616f4852212"},{url:"/_next/static/chunks/3457-f9d47fea55be48ac.js",revision:"f9d47fea55be48ac"},{url:"/_next/static/chunks/3460.4d2d8e4cccc28cdf.js",revision:"4d2d8e4cccc28cdf"},{url:"/_next/static/chunks/3532-e18058ae275b105f.js",revision:"e18058ae275b105f"},{url:"/_next/static/chunks/3916-1c536861e75a1b60.js",revision:"1c536861e75a1b60"},{url:"/_next/static/chunks/3951.469c009827e1831c.js",revision:"469c009827e1831c"},{url:"/_next/static/chunks/3999-b8453a6ba6e48e76.js",revision:"b8453a6ba6e48e76"},{url:"/_next/static/chunks/4599-4688804fcf20a03e.js",revision:"4688804fcf20a03e"},{url:"/_next/static/chunks/4832-f7a017f40af3be77.js",revision:"f7a017f40af3be77"},{url:"/_next/static/chunks/4895-ae40bed093eb321b.js",revision:"ae40bed093eb321b"},{url:"/_next/static/chunks/6137-6c99924fe9ac2af0.js",revision:"6c99924fe9ac2af0"},{url:"/_next/static/chunks/68-e0651b9db074ff9e.js",revision:"e0651b9db074ff9e"},{url:"/_next/static/chunks/7397.74d180dc1595e703.js",revision:"74d180dc1595e703"},{url:"/_next/static/chunks/7766-ddafe9abbae7cbed.js",revision:"ddafe9abbae7cbed"},{url:"/_next/static/chunks/7836-3107999436f02e38.js",revision:"3107999436f02e38"},{url:"/_next/static/chunks/8301-19d61105da8b5d7b.js",revision:"19d61105da8b5d7b"},{url:"/_next/static/chunks/8455-7cda15096298805d.js",revision:"7cda15096298805d"},{url:"/_next/static/chunks/9302-03ff17e4bae0e641.js",revision:"03ff17e4bae0e641"},{url:"/_next/static/chunks/9500-33a10b8ad7f2e1f3.js",revision:"33a10b8ad7f2e1f3"},{url:"/_next/static/chunks/9734-c82576fcc43e5a24.js",revision:"c82576fcc43e5a24"},{url:"/_next/static/chunks/9861-b68b6da75b86f11c.js",revision:"b68b6da75b86f11c"},{url:"/_next/static/chunks/e727ab75-e14de0fdcf76de91.js",revision:"e14de0fdcf76de91"},{url:"/_next/static/chunks/fec483df-efd59c4c5e6592fb.js",revision:"efd59c4c5e6592fb"},{url:"/_next/static/chunks/framework-ce84985cd166733a.js",revision:"ce84985cd166733a"},{url:"/_next/static/chunks/main-79aca0bdcb23becb.js",revision:"79aca0bdcb23becb"},{url:"/_next/static/chunks/pages/_app-3e882ec2a4ec693f.js",revision:"3e882ec2a4ec693f"},{url:"/_next/static/chunks/pages/_error-82b79221b9ed784b.js",revision:"82b79221b9ed784b"},{url:"/_next/static/chunks/pages/about-daec0be26f665821.js",revision:"daec0be26f665821"},{url:"/_next/static/chunks/pages/blog-1c67bdb9988446f2.js",revision:"1c67bdb9988446f2"},{url:"/_next/static/chunks/pages/contact-0118b6e526308675.js",revision:"0118b6e526308675"},{url:"/_next/static/chunks/pages/expo-598877a01de54a3a.js",revision:"598877a01de54a3a"},{url:"/_next/static/chunks/pages/expo/%5Bslug%5D-20316247e6c0f70a.js",revision:"20316247e6c0f70a"},{url:"/_next/static/chunks/pages/gallery-1fdbc21fdc2b4e65.js",revision:"1fdbc21fdc2b4e65"},{url:"/_next/static/chunks/pages/index-6ffeb86d190f8c14.js",revision:"6ffeb86d190f8c14"},{url:"/_next/static/chunks/pages/jobs-666173913b89bac0.js",revision:"666173913b89bac0"},{url:"/_next/static/chunks/pages/license-1f1743ddeb872306.js",revision:"1f1743ddeb872306"},{url:"/_next/static/chunks/pages/login-b82068865ee2a823.js",revision:"b82068865ee2a823"},{url:"/_next/static/chunks/pages/p/%5BphotoId%5D-883c7e78292365d3.js",revision:"883c7e78292365d3"},{url:"/_next/static/chunks/pages/posts/%5Bslug%5D-d55335c7994af927.js",revision:"d55335c7994af927"},{url:"/_next/static/chunks/pages/privacy-843a63ee166edb6a.js",revision:"843a63ee166edb6a"},{url:"/_next/static/chunks/pages/profile-c301fd2fe1d319e0.js",revision:"c301fd2fe1d319e0"},{url:"/_next/static/chunks/pages/schedule-fd487377bded7044.js",revision:"fd487377bded7044"},{url:"/_next/static/chunks/pages/search-1e89f89f96b9827f.js",revision:"1e89f89f96b9827f"},{url:"/_next/static/chunks/pages/speakers-a99add9e2c7a51f8.js",revision:"a99add9e2c7a51f8"},{url:"/_next/static/chunks/pages/speakers/%5Bslug%5D-e41083d69c6a59d1.js",revision:"e41083d69c6a59d1"},{url:"/_next/static/chunks/pages/stage/%5Bslug%5D-a447d86d54736774.js",revision:"a447d86d54736774"},{url:"/_next/static/chunks/pages/terms-524b9558cf81fcd8.js",revision:"524b9558cf81fcd8"},{url:"/_next/static/chunks/pages/thanks-0cbf236100ed3558.js",revision:"0cbf236100ed3558"},{url:"/_next/static/chunks/pages/ticket-image-18bb7d03d14256d5.js",revision:"18bb7d03d14256d5"},{url:"/_next/static/chunks/pages/tickets/%5Busername%5D-92ab3c7f9138fb86.js",revision:"92ab3c7f9138fb86"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-fa300a439f2c5427.js",revision:"fa300a439f2c5427"},{url:"/_next/static/css/11c01b9746e81abe.css",revision:"11c01b9746e81abe"},{url:"/_next/static/css/5afa3f153a7a68dd.css",revision:"5afa3f153a7a68dd"},{url:"/_next/static/css/5dd3d215b70d676d.css",revision:"5dd3d215b70d676d"},{url:"/_next/static/css/6c48d329e0d48b4c.css",revision:"6c48d329e0d48b4c"},{url:"/_next/static/css/b52fba6426d46db7.css",revision:"b52fba6426d46db7"},{url:"/_next/static/css/bb1dfc5f92813abc.css",revision:"bb1dfc5f92813abc"},{url:"/_next/static/css/cc9df37db310905a.css",revision:"cc9df37db310905a"},{url:"/_next/static/css/e5ef36d6ccd15016.css",revision:"e5ef36d6ccd15016"},{url:"/_next/static/css/efbef92dd58d9e47.css",revision:"efbef92dd58d9e47"},{url:"/_next/static/css/f5ccd6fbae00c6bc.css",revision:"f5ccd6fbae00c6bc"},{url:"/_next/static/css/f6f14cbb496658d2.css",revision:"f6f14cbb496658d2"},{url:"/_next/static/css/f87f1914d1f91566.css",revision:"f87f1914d1f91566"},{url:"/_next/static/media/7-dark@tinypng.22f91747.png",revision:"22f91747"},{url:"/_next/static/media/about.678bedc6.jpg",revision:"422e218dcd5172932b03be0178805c8d"},{url:"/_next/static/media/angelina-jordan-hands-over-heart-singing-whitney-houstons-i-have-nothing.3aba7c9f.jpg",revision:"c06423246857189f9bd5be4ffa33cdce"},{url:"/_next/static/media/angelina-makes-a-heart-sending-love-to-her-fans.6252ad46.jpg",revision:"aecdcc3ed118e406a57c981d3c46ff69"},{url:"/_next/static/media/angelina.48789299.jpg",revision:"737289e4ec287ca1ee92c96590e29fbd"},{url:"/_next/static/media/angelinas-agt-golden-buzzer.5142244e.jpg",revision:"f7cffc319b78684385c8bd3563cb9304"},{url:"/_next/static/media/apple-touch-icon.5fd4ca16.png",revision:"e0d0b685e2c4b1df5dfbf6e5c3db8d67"},{url:"/_next/static/media/cookies.613d7d59.png",revision:"52a0a33ed767b3434f8c2ffd903c8d6b"},{url:"/_next/static/media/heidis-party.8d3283ad.jpg",revision:"f306ebeb1f25af731ac8f5ccc7e19168"},{url:"/_next/static/media/icon-192x192.6d6d666b.png",revision:"d35524f9e088eea0b1dcdbe56a8b0583"},{url:"/_next/static/media/nextjs.65b08da0.jpg",revision:"9e08dbd36188854feb1b52954e575c83"},{url:"/_next/static/media/ps-i-love-you.0c3b944d.jpg",revision:"a70acdae8ce21424d9a64274d66882c7"},{url:"/_next/static/media/react-hook-form-48.921691a7.png",revision:"6f1bb27d063340267868a7395acdb55d"},{url:"/_next/static/media/seventh-heaven.3c818050.jpg",revision:"831bedff577308cfd495c1bb95063138"},{url:"/_next/static/media/young-angelina.a256683b.jpg",revision:"a5bf50a28090deff91564190cc49e9b0"},{url:"/about.jpg",revision:"422e218dcd5172932b03be0178805c8d"},{url:"/angie/angelina-jordan-hands-over-heart-singing-whitney-houstons-i-have-nothing.jpg",revision:"c06423246857189f9bd5be4ffa33cdce"},{url:"/angie/angelina-makes-a-heart-sending-love-to-her-fans.jpg",revision:"aecdcc3ed118e406a57c981d3c46ff69"},{url:"/angie/angelina.jpg",revision:"737289e4ec287ca1ee92c96590e29fbd"},{url:"/angie/angelinas-agt-golden-buzzer.jpg",revision:"f7cffc319b78684385c8bd3563cb9304"},{url:"/angie/angie-at-ten.jpg",revision:"d455b9504f6991a5737efd88472fe38b"},{url:"/angie/birthday.jpg",revision:"fecb94de339286dd0f3b3678bf16e8a4"},{url:"/angie/bohemian-rhaposdy-thumb.jpg",revision:"47da7f417f142c04dba0aead6e070e20"},{url:"/angie/heidis-party.jpg",revision:"f306ebeb1f25af731ac8f5ccc7e19168"},{url:"/angie/ps-i-love-you.jpg",revision:"a70acdae8ce21424d9a64274d66882c7"},{url:"/angie/seventh-heaven.jpg",revision:"831bedff577308cfd495c1bb95063138"},{url:"/angie/young-angelina.jpg",revision:"a5bf50a28090deff91564190cc49e9b0"},{url:"/apple-touch-icon.png",revision:"de2a4c06da4c452fe1b1a3334c33c297"},{url:"/beams/7-dark@tinypng.png",revision:"aaec747c42b0a001cb3bf655f1168427"},{url:"/beams/docs-dark@tiny.png",revision:"455fe8b1759b16428e1c3de0b58a8729"},{url:"/beams/docs-dark@tinypng.png",revision:"d7ccb571fac6d427bd4aa07d69ec77b0"},{url:"/bg.png",revision:"c24dc1c3545e79561c025d44bfd34c4d"},{url:"/browserconfig.xml",revision:"9004822512e4af5193480216cb0e1611"},{url:"/chat.svg",revision:"2cc95dfd438773da0bada353cff57b69"},{url:"/cookies.png",revision:"52a0a33ed767b3434f8c2ffd903c8d6b"},{url:"/favicon-16x16.png",revision:"fb1cfd140f1e59c15fe37317ab8ad876"},{url:"/favicon-32x32.png",revision:"151b9b3244e2e47b288981468c7df782"},{url:"/favicon.ico",revision:"f950e7ea47e101329b7ee43e00ce7fa4"},{url:"/hms-coachmark.svg",revision:"99d119a4398b03826b8bf22b5a9b02a0"},{url:"/icon-192x192.png",revision:"d35524f9e088eea0b1dcdbe56a8b0583"},{url:"/icon-512x512.png",revision:"0a04eff90ff0ceb2b21bda9405a7138a"},{url:"/icons/apple-touch-icon-114x114.png",revision:"b2cce9617ff30a2e5b739d82cf4c13b7"},{url:"/icons/apple-touch-icon-120x120.png",revision:"c1cfd60a5ad3ec0ab8b9c4fe737923af"},{url:"/icons/apple-touch-icon-144x144.png",revision:"bfcf51e5ee15387b42ea4b6de4c3635c"},{url:"/icons/apple-touch-icon-152x152.png",revision:"559aa55453717e0d68f8a216fff699ab"},{url:"/icons/apple-touch-icon-180x180.png",revision:"ad38cff1bdc349481d22c0f836b63f25"},{url:"/icons/apple-touch-icon-57x57.png",revision:"e0d0b685e2c4b1df5dfbf6e5c3db8d67"},{url:"/icons/apple-touch-icon-72x72.png",revision:"c695809705245182d73555b878292634"},{url:"/icons/apple-touch-icon-76x76.png",revision:"95f7ec54748f09f4b383340d9d8c3cb0"},{url:"/icons/apple-touch-icon.png",revision:"e0d0b685e2c4b1df5dfbf6e5c3db8d67"},{url:"/icons/browserconfig.xml",revision:"846c0d462dc8fcbf3d04059fcfb0b05d"},{url:"/icons/safari-pinned-tab.svg",revision:"3c9ddf7d0111e00be013b31744d4f55a"},{url:"/icons/tile-wide.png",revision:"d4c25f517f4d25efd2f0fb86c1113c9b"},{url:"/icons/tile.png",revision:"851acb8a1ffade183a8e9a41c4f165d7"},{url:"/icons/tile310x310.png",revision:"ce7e07779f17300da2fca124744966d0"},{url:"/icons/tile70x70.png",revision:"da2d38737fab816fa64cd09bd4c93739"},{url:"/icons/touch-icon-ipad-retina.png",revision:"bdbf5cc981c338d56d5b07437c43991e"},{url:"/icons/touch-icon-ipad.png",revision:"e2536accc7317e4e09a82eed95471895"},{url:"/icons/touch-icon-iphone-retina.png",revision:"a5e8236e58d8b97dc356d5a04d27581a"},{url:"/icons/touch-icon-iphone.png",revision:"a5e8236e58d8b97dc356d5a04d27581a"},{url:"/loader.gif",revision:"dd6b7b0bf5c3af22499abc0a9ee1e1b2"},{url:"/logo-dark.svg",revision:"900d1421e8c6fc68a2b5cc50c48d3566"},{url:"/logo-light.svg",revision:"3b4cf8aba566f97e70d0a1fc9d826529"},{url:"/manifest.json",revision:"1057987fb968876b17f551498bb0efd2"},{url:"/mstile-150x150.png",revision:"fc5bd63ac943de622b000d45404f070c"},{url:"/next-auth.png",revision:"a0bbcf02a91eb6f73029100b29c157c9"},{url:"/nextjs.jpg",revision:"9e08dbd36188854feb1b52954e575c83"},{url:"/react-hook-form-48.png",revision:"6f1bb27d063340267868a7395acdb55d"},{url:"/refactoring-ui-sidebar.png",revision:"406e5afb42634c670bfe3216893ac4da"},{url:"/robots.txt",revision:"1d087ee8649b2bfb1403d01f5d3ac73d"},{url:"/safari-pinned-tab.svg",revision:"40c9bc99e963fb841cd147f0374682fe"},{url:"/server.js",revision:"9c645df0f51016da83c7d3ba7ca22ad0"},{url:"/site.webmanifest",revision:"1057987fb968876b17f551498bb0efd2"},{url:"/sitemap-0.xml",revision:"ca399ad4bbd023c9c225623cb160784d"},{url:"/sitemap.xml",revision:"be22a2d9028d2b9d719528b100bde355"},{url:"/suspiciousminds.jpg",revision:"f2face9266964863780e7767909ed1b9"},{url:"/twitter-card.jpg",revision:"f2bebd8a337de4798b117163a189170c"},{url:"/upsatsh.png",revision:"fe01ed7553b0e37d2cd1f3b6ebd47bb7"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:c,state:i})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
