if(!self.define){let e,s={};const c=(c,a)=>(c=new URL(c+".js",a).href,s[c]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=s,document.head.appendChild(e)}else e=c,importScripts(c),s()})).then((()=>{let e=s[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(a,i)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let t={};const d=e=>c(e,n),r={module:{uri:n},exports:t,require:d};s[n]=Promise.all(a.map((e=>r[e]||d(e)))).then((e=>(i(...e),t)))}}define(["./workbox-588899ac"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/100ms.jpg",revision:"97196c82fd6ac325f1cc4c4921014a36"},{url:"/_next/static/chunks/1363-2a7d40c91d7e01c9.js",revision:"2a7d40c91d7e01c9"},{url:"/_next/static/chunks/1570-5cd6b6f1d4f97b70.js",revision:"5cd6b6f1d4f97b70"},{url:"/_next/static/chunks/1837-8267634c8664400f.js",revision:"8267634c8664400f"},{url:"/_next/static/chunks/1851-abb4c1522854a568.js",revision:"abb4c1522854a568"},{url:"/_next/static/chunks/2133-956a46be27493f1e.js",revision:"956a46be27493f1e"},{url:"/_next/static/chunks/2407-b3a775b4fd733b6d.js",revision:"b3a775b4fd733b6d"},{url:"/_next/static/chunks/2667-df95c42f2ce18b0e.js",revision:"df95c42f2ce18b0e"},{url:"/_next/static/chunks/2910-d193c77092d5b876.js",revision:"d193c77092d5b876"},{url:"/_next/static/chunks/3290-8b4c6361d3b21621.js",revision:"8b4c6361d3b21621"},{url:"/_next/static/chunks/3460.4d2d8e4cccc28cdf.js",revision:"4d2d8e4cccc28cdf"},{url:"/_next/static/chunks/3682-61f3de8cdc17667a.js",revision:"61f3de8cdc17667a"},{url:"/_next/static/chunks/3916-61ce2ee29cd535eb.js",revision:"61ce2ee29cd535eb"},{url:"/_next/static/chunks/3999-8a5acf1ad3a8cabb.js",revision:"8a5acf1ad3a8cabb"},{url:"/_next/static/chunks/4049-6bbedc5cff17eb6d.js",revision:"6bbedc5cff17eb6d"},{url:"/_next/static/chunks/42-21cc0aeaef97bed9.js",revision:"21cc0aeaef97bed9"},{url:"/_next/static/chunks/4290-c56efdc31af41708.js",revision:"c56efdc31af41708"},{url:"/_next/static/chunks/4866-2d633f83c353d470.js",revision:"2d633f83c353d470"},{url:"/_next/static/chunks/4943.9acb8d2c3055c11f.js",revision:"9acb8d2c3055c11f"},{url:"/_next/static/chunks/511-dffc4140badcb1b5.js",revision:"dffc4140badcb1b5"},{url:"/_next/static/chunks/5346-5d475d009d923eb0.js",revision:"5d475d009d923eb0"},{url:"/_next/static/chunks/5365-5748a4f6b0d664e2.js",revision:"5748a4f6b0d664e2"},{url:"/_next/static/chunks/5727-a03d4b953c574de4.js",revision:"a03d4b953c574de4"},{url:"/_next/static/chunks/5807-3fe50676ce9fee4b.js",revision:"3fe50676ce9fee4b"},{url:"/_next/static/chunks/6137-3cc23a225436e384.js",revision:"3cc23a225436e384"},{url:"/_next/static/chunks/6548-46656e0bbd8e1d99.js",revision:"46656e0bbd8e1d99"},{url:"/_next/static/chunks/68-11dd2b7c01203e6b.js",revision:"11dd2b7c01203e6b"},{url:"/_next/static/chunks/7106-b58798a44a818dec.js",revision:"b58798a44a818dec"},{url:"/_next/static/chunks/7113-4563d7cd7297e063.js",revision:"4563d7cd7297e063"},{url:"/_next/static/chunks/7366-93a8790f34fe66c7.js",revision:"93a8790f34fe66c7"},{url:"/_next/static/chunks/7397.74d180dc1595e703.js",revision:"74d180dc1595e703"},{url:"/_next/static/chunks/8021-81a57ac7d24fad5d.js",revision:"81a57ac7d24fad5d"},{url:"/_next/static/chunks/8367-45a2b70d6c860b04.js",revision:"45a2b70d6c860b04"},{url:"/_next/static/chunks/8535-3b92156032991b9b.js",revision:"3b92156032991b9b"},{url:"/_next/static/chunks/9302-f7c2c404f2e8ecbe.js",revision:"f7c2c404f2e8ecbe"},{url:"/_next/static/chunks/e727ab75-a8ec5d602664b19a.js",revision:"a8ec5d602664b19a"},{url:"/_next/static/chunks/fec483df-567abff8b48dc963.js",revision:"567abff8b48dc963"},{url:"/_next/static/chunks/framework-aec4381329cec0e4.js",revision:"aec4381329cec0e4"},{url:"/_next/static/chunks/main-d5e22cce8925eda0.js",revision:"d5e22cce8925eda0"},{url:"/_next/static/chunks/pages/_app-2d5c72b034c8d25b.js",revision:"2d5c72b034c8d25b"},{url:"/_next/static/chunks/pages/_error-82b79221b9ed784b.js",revision:"82b79221b9ed784b"},{url:"/_next/static/chunks/pages/about-992236003bd9ed6a.js",revision:"992236003bd9ed6a"},{url:"/_next/static/chunks/pages/angies-profile-befc4da1b7423dff.js",revision:"befc4da1b7423dff"},{url:"/_next/static/chunks/pages/blog-4053972287344d70.js",revision:"4053972287344d70"},{url:"/_next/static/chunks/pages/contact-5afd0acb0c945938.js",revision:"5afd0acb0c945938"},{url:"/_next/static/chunks/pages/expo-9282c3e6b57c6cf7.js",revision:"9282c3e6b57c6cf7"},{url:"/_next/static/chunks/pages/expo/%5Bslug%5D-8b2dd7fbba66808e.js",revision:"8b2dd7fbba66808e"},{url:"/_next/static/chunks/pages/gallery-b5633071b4b2a693.js",revision:"b5633071b4b2a693"},{url:"/_next/static/chunks/pages/index-329f35ef0b3ee3f2.js",revision:"329f35ef0b3ee3f2"},{url:"/_next/static/chunks/pages/jobs-14891a649e70f239.js",revision:"14891a649e70f239"},{url:"/_next/static/chunks/pages/license-7160a4b0d903efaa.js",revision:"7160a4b0d903efaa"},{url:"/_next/static/chunks/pages/login-87863672ed9dad18.js",revision:"87863672ed9dad18"},{url:"/_next/static/chunks/pages/notifications-6a86c2b78e3537a9.js",revision:"6a86c2b78e3537a9"},{url:"/_next/static/chunks/pages/p/%5BphotoId%5D-832c622e137a9efb.js",revision:"832c622e137a9efb"},{url:"/_next/static/chunks/pages/posts/%5Bslug%5D-72e32272eec30c51.js",revision:"72e32272eec30c51"},{url:"/_next/static/chunks/pages/privacy-a572d363132c49b5.js",revision:"a572d363132c49b5"},{url:"/_next/static/chunks/pages/profile-d429e612f1cd08bd.js",revision:"d429e612f1cd08bd"},{url:"/_next/static/chunks/pages/profile/%5Bid%5D-18a9c8c057ca65e5.js",revision:"18a9c8c057ca65e5"},{url:"/_next/static/chunks/pages/profile/%5Bid%5D/%5B...tab%5D-89bd196b6418c1ed.js",revision:"89bd196b6418c1ed"},{url:"/_next/static/chunks/pages/saved-9aa7ff4507df063c.js",revision:"9aa7ff4507df063c"},{url:"/_next/static/chunks/pages/schedule-b0bfd7ae965c6a4a.js",revision:"b0bfd7ae965c6a4a"},{url:"/_next/static/chunks/pages/search-a2802380cf5ddcc1.js",revision:"a2802380cf5ddcc1"},{url:"/_next/static/chunks/pages/social-5e4c7d94fd087bfe.js",revision:"5e4c7d94fd087bfe"},{url:"/_next/static/chunks/pages/speakers-1da1518038324e85.js",revision:"1da1518038324e85"},{url:"/_next/static/chunks/pages/speakers/%5Bslug%5D-fabd0518294eaf29.js",revision:"fabd0518294eaf29"},{url:"/_next/static/chunks/pages/stage/%5Bslug%5D-3d782db87e978690.js",revision:"3d782db87e978690"},{url:"/_next/static/chunks/pages/terms-645c71c4815104a6.js",revision:"645c71c4815104a6"},{url:"/_next/static/chunks/pages/thanks-6b693448b5a31259.js",revision:"6b693448b5a31259"},{url:"/_next/static/chunks/pages/ticket-image-0489da127fcbdfc4.js",revision:"0489da127fcbdfc4"},{url:"/_next/static/chunks/pages/tickets/%5Busername%5D-a3dfe458179e1bd4.js",revision:"a3dfe458179e1bd4"},{url:"/_next/static/chunks/pages/user-repos-1ad626229c904169.js",revision:"1ad626229c904169"},{url:"/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/_next/static/chunks/webpack-1289a936242e8757.js",revision:"1289a936242e8757"},{url:"/_next/static/css/0c3db4bfd3d55dc3.css",revision:"0c3db4bfd3d55dc3"},{url:"/_next/static/css/0c4c3531071e636c.css",revision:"0c4c3531071e636c"},{url:"/_next/static/css/0ebfd8aaa93e4e07.css",revision:"0ebfd8aaa93e4e07"},{url:"/_next/static/css/2d877e0869b3b327.css",revision:"2d877e0869b3b327"},{url:"/_next/static/css/2f7592eb51e015e0.css",revision:"2f7592eb51e015e0"},{url:"/_next/static/css/6c48d329e0d48b4c.css",revision:"6c48d329e0d48b4c"},{url:"/_next/static/css/7370bba884a9f2b5.css",revision:"7370bba884a9f2b5"},{url:"/_next/static/css/838b0f91f7648020.css",revision:"838b0f91f7648020"},{url:"/_next/static/css/90a9e008dee674fb.css",revision:"90a9e008dee674fb"},{url:"/_next/static/css/a130e3264b546e8b.css",revision:"a130e3264b546e8b"},{url:"/_next/static/css/a69ba011abef93c6.css",revision:"a69ba011abef93c6"},{url:"/_next/static/css/ec4bce0d2783728b.css",revision:"ec4bce0d2783728b"},{url:"/_next/static/css/f57a4d3e8fa7147e.css",revision:"f57a4d3e8fa7147e"},{url:"/_next/static/media/100ms.1eed1211.jpg",revision:"97196c82fd6ac325f1cc4c4921014a36"},{url:"/_next/static/media/2-dark@tiny.8791ea21.png",revision:"8791ea21"},{url:"/_next/static/media/7-dark@tinypng.22f91747.png",revision:"22f91747"},{url:"/_next/static/media/about.678bedc6.jpg",revision:"422e218dcd5172932b03be0178805c8d"},{url:"/_next/static/media/angelina-jordan-hands-over-heart-singing-whitney-houstons-i-have-nothing.3aba7c9f.jpg",revision:"c06423246857189f9bd5be4ffa33cdce"},{url:"/_next/static/media/angelina-jordan-icon.76fb11dd.jpg",revision:"8cdb52740ee937cbf9fc5b8661241657"},{url:"/_next/static/media/angelina-jordan-logo-800.29540bcd.jpg",revision:"cdd387c059670a95a73ecd4e35da1112"},{url:"/_next/static/media/angelina-makes-a-heart-sending-love-to-her-fans.6252ad46.jpg",revision:"aecdcc3ed118e406a57c981d3c46ff69"},{url:"/_next/static/media/angelina.48789299.jpg",revision:"737289e4ec287ca1ee92c96590e29fbd"},{url:"/_next/static/media/angelinas-agt-golden-buzzer.5142244e.jpg",revision:"f7cffc319b78684385c8bd3563cb9304"},{url:"/_next/static/media/apple-touch-icon.a36d5399.png",revision:"a9b637d26f9b1f2951f3018e2af9c674"},{url:"/_next/static/media/beginning-supabase-schema.083d60d3.jpg",revision:"c837288abf16c3fdddecfe61529d3aeb"},{url:"/_next/static/media/cloudinary.4d5ed6f3.png",revision:"b24683687165f56b21c6c9c7136548f1"},{url:"/_next/static/media/cookies.613d7d59.png",revision:"52a0a33ed767b3434f8c2ffd903c8d6b"},{url:"/_next/static/media/cspMansbooks.035692e8.jpg",revision:"9169cd82fd8234a25ae081519713101e"},{url:"/_next/static/media/datoCms.a58e15fb.jpg",revision:"71a3e47d32ef5fde57eceb70608645ad"},{url:"/_next/static/media/heidis-party.8d3283ad.jpg",revision:"f306ebeb1f25af731ac8f5ccc7e19168"},{url:"/_next/static/media/icon-192x192.3c5f3a2e.png",revision:"817241071e413ccf6d0f10716294a8c1"},{url:"/_next/static/media/nextjs.65b08da0.jpg",revision:"9e08dbd36188854feb1b52954e575c83"},{url:"/_next/static/media/ps-i-love-you.0c3b944d.jpg",revision:"a70acdae8ce21424d9a64274d66882c7"},{url:"/_next/static/media/react-hook-form-48.921691a7.png",revision:"6f1bb27d063340267868a7395acdb55d"},{url:"/_next/static/media/redux-logo.63665268.png",revision:"38db16846d2af358916bae498cbe3b0a"},{url:"/_next/static/media/seventh-heaven.3c818050.jpg",revision:"831bedff577308cfd495c1bb95063138"},{url:"/_next/static/media/supa.2f94dbb3.png",revision:"a71606cfe26f3d99c878c7f9d0653bc7"},{url:"/_next/static/media/upstash-logo.8ceeda77.png",revision:"3186bc227ff2bab22d9a817e47672963"},{url:"/_next/static/media/young-angelina.a256683b.jpg",revision:"a5bf50a28090deff91564190cc49e9b0"},{url:"/_next/static/qfUMQVOZtBkEajh5N6pTO/_buildManifest.js",revision:"66f053a27148a2a2b183fad71b6ac317"},{url:"/_next/static/qfUMQVOZtBkEajh5N6pTO/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/about.jpg",revision:"422e218dcd5172932b03be0178805c8d"},{url:"/angie/angelina-jordan-hands-over-heart-singing-whitney-houstons-i-have-nothing.jpg",revision:"c06423246857189f9bd5be4ffa33cdce"},{url:"/angie/angelina-jordan-icon.jpg",revision:"8cdb52740ee937cbf9fc5b8661241657"},{url:"/angie/angelina-jordan-logo-800.jpg",revision:"cdd387c059670a95a73ecd4e35da1112"},{url:"/angie/angelina-jordan-logo.jpg",revision:"dcedd2079673ad4ab13c876b695b0afb"},{url:"/angie/angelina-makes-a-heart-sending-love-to-her-fans.jpg",revision:"aecdcc3ed118e406a57c981d3c46ff69"},{url:"/angie/angelina.jpg",revision:"737289e4ec287ca1ee92c96590e29fbd"},{url:"/angie/angelinas-agt-golden-buzzer.jpg",revision:"f7cffc319b78684385c8bd3563cb9304"},{url:"/angie/angie-at-ten.jpg",revision:"d455b9504f6991a5737efd88472fe38b"},{url:"/angie/birthday.jpg",revision:"fecb94de339286dd0f3b3678bf16e8a4"},{url:"/angie/bohemian-rhaposdy-thumb.jpg",revision:"47da7f417f142c04dba0aead6e070e20"},{url:"/angie/heidis-party.jpg",revision:"f306ebeb1f25af731ac8f5ccc7e19168"},{url:"/angie/love-dont-let-me-go.jpg",revision:"226938a298ebf0707ffdac55809d0406"},{url:"/angie/ps-i-love-you.jpg",revision:"a70acdae8ce21424d9a64274d66882c7"},{url:"/angie/seventh-heaven.jpg",revision:"831bedff577308cfd495c1bb95063138"},{url:"/angie/young-angelina.jpg",revision:"a5bf50a28090deff91564190cc49e9b0"},{url:"/apple-touch-icon.png",revision:"251fb2e8b92c81f9328fc39ea6a26a36"},{url:"/beams/2-dark@tiny.png",revision:"bdf6f1625f99a84e16a09ab296740e2f"},{url:"/beams/7-dark@tinypng.png",revision:"aaec747c42b0a001cb3bf655f1168427"},{url:"/beams/docs-dark@tiny.png",revision:"455fe8b1759b16428e1c3de0b58a8729"},{url:"/beams/docs-dark@tinypng.png",revision:"d7ccb571fac6d427bd4aa07d69ec77b0"},{url:"/beginning-supabase-schema.jpg",revision:"c837288abf16c3fdddecfe61529d3aeb"},{url:"/bg.png",revision:"c24dc1c3545e79561c025d44bfd34c4d"},{url:"/browserconfig.xml",revision:"9004822512e4af5193480216cb0e1611"},{url:"/chat.svg",revision:"46f5a23636cb15e5fc2b7dec148c5a3b"},{url:"/cloudinary.png",revision:"b24683687165f56b21c6c9c7136548f1"},{url:"/cookies.png",revision:"52a0a33ed767b3434f8c2ffd903c8d6b"},{url:"/cspMansbooks.jpg",revision:"9169cd82fd8234a25ae081519713101e"},{url:"/datoCms.jpg",revision:"71a3e47d32ef5fde57eceb70608645ad"},{url:"/datoCms.png",revision:"ffd5209e053958ffec76f994affe763a"},{url:"/favicon-16x16.png",revision:"39c359f7962bd5c1a14797f0b3b99902"},{url:"/favicon-32x32.png",revision:"34ea4571d6d846a9cd7e0bee8f8b824a"},{url:"/favicon.ico",revision:"9098eaead408f0fb662d8e2b1b7fca9a"},{url:"/hms-coachmark.svg",revision:"4ffaf7156a2eb80a72ed5a37253c2068"},{url:"/icon-192x192.png",revision:"817241071e413ccf6d0f10716294a8c1"},{url:"/icon-512x512.png",revision:"251b782f52854ec74e483f2b1b43e767"},{url:"/icon-800x800.png",revision:"3852a08e57df026255ec38fc38089939"},{url:"/icons/apple-touch-icon-114x114.png",revision:"0309eeb663378f96baf5060701d88149"},{url:"/icons/apple-touch-icon-120x120.png",revision:"f8fcb0da46dcbf334fc3cb6ed8f11fd6"},{url:"/icons/apple-touch-icon-144x144.png",revision:"2ab564ac414c16cb32c2f70ac383e60e"},{url:"/icons/apple-touch-icon-152x152.png",revision:"a9b637d26f9b1f2951f3018e2af9c674"},{url:"/icons/apple-touch-icon-180x180.png",revision:"2aa704760c23db0fcb4fe61730d419ba"},{url:"/icons/apple-touch-icon-57x57.png",revision:"d23700dbf980772e04f881ea09c836b2"},{url:"/icons/apple-touch-icon-72x72.png",revision:"20730eaca95e9b7ebb4ea892cccf6187"},{url:"/icons/apple-touch-icon-76x76.png",revision:"895e7bdd91b2246886a30b1d3e6279c5"},{url:"/icons/apple-touch-icon.png",revision:"a9b637d26f9b1f2951f3018e2af9c674"},{url:"/icons/browserconfig.xml",revision:"846c0d462dc8fcbf3d04059fcfb0b05d"},{url:"/icons/safari-pinned-tab.svg",revision:"3c9ddf7d0111e00be013b31744d4f55a"},{url:"/icons/tile-wide.png",revision:"d4c25f517f4d25efd2f0fb86c1113c9b"},{url:"/icons/tile.png",revision:"851acb8a1ffade183a8e9a41c4f165d7"},{url:"/icons/tile310x310.png",revision:"ce7e07779f17300da2fca124744966d0"},{url:"/icons/tile70x70.png",revision:"da2d38737fab816fa64cd09bd4c93739"},{url:"/icons/touch-icon-ipad-retina.png",revision:"a9b637d26f9b1f2951f3018e2af9c674"},{url:"/icons/touch-icon-ipad.png",revision:"c8da76c93cb65a41cbbbd897af977cd1"},{url:"/icons/touch-icon-iphone-retina.png",revision:"5546bed24b1fce76cf46f0c9becfe165"},{url:"/icons/touch-icon-iphone.png",revision:"251b782f52854ec74e483f2b1b43e767"},{url:"/loader.gif",revision:"dd6b7b0bf5c3af22499abc0a9ee1e1b2"},{url:"/logo-dark.svg",revision:"900d1421e8c6fc68a2b5cc50c48d3566"},{url:"/logo-light.svg",revision:"3b4cf8aba566f97e70d0a1fc9d826529"},{url:"/manifest.json",revision:"1057987fb968876b17f551498bb0efd2"},{url:"/mstile-150x150.png",revision:"fc5bd63ac943de622b000d45404f070c"},{url:"/next-auth.png",revision:"a0bbcf02a91eb6f73029100b29c157c9"},{url:"/nextjs.jpg",revision:"9e08dbd36188854feb1b52954e575c83"},{url:"/react-hook-form-48.png",revision:"6f1bb27d063340267868a7395acdb55d"},{url:"/redux-logo.png",revision:"38db16846d2af358916bae498cbe3b0a"},{url:"/refactoring-ui-sidebar.png",revision:"406e5afb42634c670bfe3216893ac4da"},{url:"/robots.txt",revision:"1d087ee8649b2bfb1403d01f5d3ac73d"},{url:"/safari-pinned-tab.svg",revision:"40c9bc99e963fb841cd147f0374682fe"},{url:"/server.js",revision:"9c645df0f51016da83c7d3ba7ca22ad0"},{url:"/site.webmanifest",revision:"1057987fb968876b17f551498bb0efd2"},{url:"/sitemap-0.xml",revision:"f523811f8d66579572d8ea068bafdc0c"},{url:"/sitemap.xml",revision:"be22a2d9028d2b9d719528b100bde355"},{url:"/static/sounds/clapping.mp3",revision:"0a0a172a2580a3a79efd9d2753f729ea"},{url:"/supa.jpg",revision:"e7a90a6ffa716651337d8770816f9ecb"},{url:"/supa.png",revision:"a71606cfe26f3d99c878c7f9d0653bc7"},{url:"/supabase-log.png",revision:"cb03e4961860f0271e6ac73e663f26fa"},{url:"/suspiciousminds.jpg",revision:"f2face9266964863780e7767909ed1b9"},{url:"/twitter-card.jpg",revision:"f2bebd8a337de4798b117163a189170c"},{url:"/upsatsh.png",revision:"fe01ed7553b0e37d2cd1f3b6ebd47bb7"},{url:"/upstash-logo.png",revision:"3186bc227ff2bab22d9a817e47672963"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:c,state:a})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
