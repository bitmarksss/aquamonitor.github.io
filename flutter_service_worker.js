'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "fe53ac3c2058807e9f4c980592fbf97f",
"assets/AssetManifest.bin.json": "de6c429e034b4d22ec69f03d7a3137de",
"assets/AssetManifest.json": "07067d66d5e89bb4da61d0312fef87e2",
"assets/assets/512_background_launcher_icon.png": "d09c597b11810b8fee84d708d9b198d5",
"assets/assets/512_foreground_launcher_icon.png": "b38ad31617db30d32c0e2911b48b6bba",
"assets/assets/akira-hojo-ZxGdri2EWzk-unsplash.jpg": "63966675a00d72f13377b802ab9bf18f",
"assets/assets/animations/circular-loading-animationjson.json": "fbf8da3d6b7b1ec42c001d1257455310",
"assets/assets/animations/loading-animation.json": "89088f3f8bbca8b7d3b37f7002bb742d",
"assets/assets/animations/paperplane-loading.json": "d5cdc28ed9fd60dd881d7716ca68308b",
"assets/assets/announcementsIcon.png": "b75feef936c4e0224cd1dcde29b82370",
"assets/assets/aqualogo-icon.png": "93e507b18cbc67ed9c8b11fead3955bd",
"assets/assets/aqualogo.png": "93e507b18cbc67ed9c8b11fead3955bd",
"assets/assets/aquamonitor_logo.png": "9b9a87ccacfd3ff09aeb83491fe23783",
"assets/assets/background_launcher_icon.png": "fc39dba3bb6fcec74247ab900fecb993",
"assets/assets/billIcon.png": "77cd5d36aaee2c20c57cf620b941d0a5",
"assets/assets/calcIcon.png": "271993b95d306e80e5b9adf3046694e2",
"assets/assets/calendarIcon.png": "9ec80f144724ecc8425fc45e4da7bc9e",
"assets/assets/cameraButton.png": "8d1f31ad39152780c76f734ee293d4b7",
"assets/assets/chatsIcon.png": "d668aaca92a30f86802616944313330d",
"assets/assets/chunlitest.png": "af167565453d8015b9b9c6e8f9e156dc",
"assets/assets/fonts/Cabin-Regular.ttf": "f004bb87f545a5271bb72dc96730b8a1",
"assets/assets/foreground_launcher_icon.png": "f8b05cdfef913513db4f3c4f089cfc66",
"assets/assets/historyButton.png": "42ac7e9c9a0bb1fd9392504a30e5a966",
"assets/assets/infoIcon.png": "7221a47c0add2e78c66db9dce271f88d",
"assets/assets/launcher_icon.png": "4077201251fe3ee6daf0deb2e6802cb7",
"assets/assets/membersIcon.png": "96f2558367cdae22395c8eb6d0f4156a",
"assets/assets/mnist.tflite": "056ca34eccf7ad6fb3b87310be7470d3",
"assets/assets/requestIcon-deprecated.png": "57b2e495b6b65bb1467d55654f4e39c3",
"assets/assets/requestIcon.png": "373a7ce05fd4201eafeb30aadf5ab2b2",
"assets/assets/sampleMeter.jpg": "43a867ecc4e7ce249e1982b1f67ea1ce",
"assets/assets/sampleMeter.png": "45a2b3bc99591a8f421accb2d698ee88",
"assets/assets/scannerIcon.png": "61d30a11a5dcd77abd6695635dff00d1",
"assets/assets/with_gradient_launcher_icon.png": "7eba22920028c763b3dbf26c708e52c3",
"assets/FontManifest.json": "12bf886b1a2e281ffee36fd682bbf141",
"assets/fonts/MaterialIcons-Regular.otf": "4e25bae847ef4574bbbda45659dc21e3",
"assets/NOTICES": "dd9283611f137c043441fab0aeeb4a2b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/flutter_chat_ui/assets/2.0x/icon-arrow.png": "8efbd753127a917b4dc02bf856d32a47",
"assets/packages/flutter_chat_ui/assets/2.0x/icon-attachment.png": "9c8f255d58a0a4b634009e19d4f182fa",
"assets/packages/flutter_chat_ui/assets/2.0x/icon-delivered.png": "b6b5d85c3270a5cad19b74651d78c507",
"assets/packages/flutter_chat_ui/assets/2.0x/icon-document.png": "e61ec1c2da405db33bff22f774fb8307",
"assets/packages/flutter_chat_ui/assets/2.0x/icon-error.png": "5a59dc97f28a33691ff92d0a128c2b7f",
"assets/packages/flutter_chat_ui/assets/2.0x/icon-seen.png": "10c256cc3c194125f8fffa25de5d6b8a",
"assets/packages/flutter_chat_ui/assets/2.0x/icon-send.png": "2a7d5341fd021e6b75842f6dadb623dd",
"assets/packages/flutter_chat_ui/assets/3.0x/icon-arrow.png": "3ea423a6ae14f8f6cf1e4c39618d3e4b",
"assets/packages/flutter_chat_ui/assets/3.0x/icon-attachment.png": "fcf6bfd600820e85f90a846af94783f4",
"assets/packages/flutter_chat_ui/assets/3.0x/icon-delivered.png": "28f141c87a74838fc20082e9dea44436",
"assets/packages/flutter_chat_ui/assets/3.0x/icon-document.png": "4578cb3d3f316ef952cd2cf52f003df2",
"assets/packages/flutter_chat_ui/assets/3.0x/icon-error.png": "872d7d57b8fff12c1a416867d6c1bc02",
"assets/packages/flutter_chat_ui/assets/3.0x/icon-seen.png": "684348b596f7960e59e95cff5475b2f8",
"assets/packages/flutter_chat_ui/assets/3.0x/icon-send.png": "8e7e62d5bc4a0e37e3f953fb8af23d97",
"assets/packages/flutter_chat_ui/assets/icon-arrow.png": "678ebcc99d8f105210139b30755944d6",
"assets/packages/flutter_chat_ui/assets/icon-attachment.png": "17fc0472816ace725b2411c7e1450cdd",
"assets/packages/flutter_chat_ui/assets/icon-delivered.png": "b064b7cf3e436d196193258848eae910",
"assets/packages/flutter_chat_ui/assets/icon-document.png": "b4477562d9152716c062b6018805d10b",
"assets/packages/flutter_chat_ui/assets/icon-error.png": "4fceef32b6b0fd8782c5298ee463ea56",
"assets/packages/flutter_chat_ui/assets/icon-seen.png": "b9d597e29ff2802fd7e74c5086dfb106",
"assets/packages/flutter_chat_ui/assets/icon-send.png": "34e43bc8840ecb609e14d622569cda6a",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "0db203e8632f03baae0184700f3bda48",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "01bb14ae3f14c73ee03eed84f480ded9",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "efc6c90b58d765987f922c95c2031dd2",
"assets/packages/timezone/data/latest_all.tzf": "d34414858d4bd4de35c0ef5d94f1d089",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "f98ead77d0277b8d701633c8d50e3e2b",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "eeb9d4f44c86d6b60dc7a3efa215ee04",
"icons/Icon-512.png": "12041888f1ae1893fc8d24671999ef0f",
"icons/Icon-maskable-192.png": "eeb9d4f44c86d6b60dc7a3efa215ee04",
"icons/Icon-maskable-512.png": "12041888f1ae1893fc8d24671999ef0f",
"index.html": "9ea8c7aad5c9f373f79509e274f707ba",
"/": "9ea8c7aad5c9f373f79509e274f707ba",
"main.dart.js": "d14d0edd6e9c17e094a0e9cbe2502fad",
"manifest.json": "d2ce9ebcadff34c087fe60797f7019f1",
"version.json": "15235b5108d6a877ef74fe3317a96bf7"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
