'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "693635b5258fe5f1cda720cf224f158c",
"assets/AssetManifest.bin.json": "69a99f98c8b1fb8111c5fb961769fcd8",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/NOTICES": "7a1f472d38cdb4e55ea00cafcf535db9",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "3be41bdfcdfa308214469c2329a255e0",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "e339e31b32d6ce05cda94a193bd9bd3e",
"/": "e339e31b32d6ce05cda94a193bd9bd3e",
"main.dart.js": "1e9188f875683d6679e03da61cd7ade2",
"manifest.json": "a7505d8a2d96643d9fed19205d0f5c87",
"signin_example/.git/COMMIT_EDITMSG": "ea746b1c70c339cabe3198b9da17ab8b",
"signin_example/.git/config": "bd74507a2cdee49d39bc161257763ec7",
"signin_example/.git/description": "30157a5f3458612453293752e3609e1f",
"signin_example/.git/FETCH_HEAD": "da50f024af825af18d89cf76c3633cc4",
"signin_example/.git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
"signin_example/.git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
"signin_example/.git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
"signin_example/.git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
"signin_example/.git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
"signin_example/.git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
"signin_example/.git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
"signin_example/.git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
"signin_example/.git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
"signin_example/.git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
"signin_example/.git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
"signin_example/.git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
"signin_example/.git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
"signin_example/.git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
"signin_example/.git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
"signin_example/.git/index": "16b5c922c0e24d5a39184f581ab5177b",
"signin_example/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"signin_example/.git/logs/HEAD": "106cf4779d2d85ada9a1c2e8aa976bcc",
"signin_example/.git/logs/refs/heads/main": "106cf4779d2d85ada9a1c2e8aa976bcc",
"signin_example/.git/logs/refs/remotes/origin/HEAD": "b1a18f7cc397276e1f45700573588f51",
"signin_example/.git/logs/refs/remotes/origin/main": "e5ded40831a0494b090de42a5402ada0",
"signin_example/.git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
"signin_example/.git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
"signin_example/.git/objects/08/5b996d24f81791142dbc1ddae0655106abe344": "a3f83d0a8b32348067616d1f6d5a8e33",
"signin_example/.git/objects/16/b93b4131bb2d0f1d5266f7e7e2f39df21450c6": "1c2e7f88d7a954acce44676233fced1a",
"signin_example/.git/objects/1b/fa7c6d404108e635e290458831ac6aae5f0c23": "fd661acec45a6111e8fe8265e0421c1e",
"signin_example/.git/objects/1c/d7c760a55155638044b1287c5d01a8926b27f3": "0cbf1cc0adeb64c5c83cae9adb45e504",
"signin_example/.git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
"signin_example/.git/objects/1f/bff8596fc17ce2a86d4bf492fdf9b1211fa8a8": "9195c8aba1a0de8dd52285502cd67121",
"signin_example/.git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
"signin_example/.git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
"signin_example/.git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
"signin_example/.git/objects/40/0d5b186c9951e294699e64671b9dde52c6f6a0": "f6bd3c7f9b239e8898bace6f9a7446b9",
"signin_example/.git/objects/41/56cdf4c52e87887e617e38cf1b47a473d67fd7": "a8a9ba93a29d2e4c7b0258eb54fb9ba5",
"signin_example/.git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
"signin_example/.git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
"signin_example/.git/objects/48/68f79a70b1c05670fd8859fc878439b34c0fe6": "69fccf8c83cbc191dcce23f51b1b618d",
"signin_example/.git/objects/4b/a9d1f91f9fe65df2a7e3a70e32747b9d6e8a19": "308f654eb3c74e04beee6c0b62477e5e",
"signin_example/.git/objects/59/aabf7e652e8d2fdfb5a69636217265ba803223": "7969019a67389d6edcb21ffc2349f219",
"signin_example/.git/objects/5c/dff543c137d8a4d3952a07676ecc2c1dcce0c1": "5804ddc66c1d284e1b86ce2c33698954",
"signin_example/.git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
"signin_example/.git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
"signin_example/.git/objects/74/2034abe20b6a11eadbbe24bc526e78290abb96": "b02542767fe743f2a159152f1ac5ee4a",
"signin_example/.git/objects/7c/09d499f23e8c9cfadbd067e09e62b423cd8b4a": "4f5d6ea007527788d254cd3ceeb9b8a8",
"signin_example/.git/objects/7e/6de8493e84d983a2979839a2815fb741910610": "0faee94fc06b4ae0f16773cabaf29358",
"signin_example/.git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
"signin_example/.git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
"signin_example/.git/objects/88/5fe4ae9b266e0cd4296db56d4d8431d33824dd": "bf52e25890296d74812a030cdec83ed1",
"signin_example/.git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
"signin_example/.git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
"signin_example/.git/objects/8c/eea5738cb5e4e3813d3724d4ee116df0051f71": "9745212e2a73079eaef9f4d6b63f59e3",
"signin_example/.git/objects/8f/99d868da0c21de7a25ebae50455864e56fcb91": "9d5c117848c3a3d4f0d843b82ab3bb44",
"signin_example/.git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
"signin_example/.git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
"signin_example/.git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
"signin_example/.git/objects/a0/47e1c77bf64e3946c3de01d55e44b93ea9312e": "9d0c6dfaeac0af148200ba4718345155",
"signin_example/.git/objects/a8/d2a3ab562b893852d016befa1f7d4c2d3378d3": "a6c0908fc4a823f797c69d451ccf651b",
"signin_example/.git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
"signin_example/.git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
"signin_example/.git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
"signin_example/.git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
"signin_example/.git/objects/ca/8482c88c44dcfdf9ead9d3726df9574ac9775c": "81cbf504c8b90bc81a07b514349a4ac5",
"signin_example/.git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
"signin_example/.git/objects/d2/3de610abc836a2b487febf1bab487535408ebb": "4305da66a9c21d981e76c3cd32ba1aa5",
"signin_example/.git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
"signin_example/.git/objects/d5/bb50b3c3bc534b51ba035a5e8495ba7af5025b": "81d30e6f235d2cd1960b1a0d917b3043",
"signin_example/.git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
"signin_example/.git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
"signin_example/.git/objects/df/e0770424b2a19faf507a501ebfc23be8f54e7b": "76f8baefc49c326b504db7bf751c967d",
"signin_example/.git/objects/e3/3b1b8aa1f433faf161aaaff8611629c4a06f57": "88249e364986b542521ab69a3d6ed98c",
"signin_example/.git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
"signin_example/.git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
"signin_example/.git/objects/ff/a4aa563697226ea4db3deeb6acb0802b090c76": "d91929547ab78b3c2d8dddc969d52db7",
"signin_example/.git/refs/heads/main": "8595186858c11bee8b96d1fcf86c2092",
"signin_example/.git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
"signin_example/.git/refs/remotes/origin/main": "8595186858c11bee8b96d1fcf86c2092",
"signin_example/assets/AssetManifest.bin": "693635b5258fe5f1cda720cf224f158c",
"signin_example/assets/AssetManifest.bin.json": "69a99f98c8b1fb8111c5fb961769fcd8",
"signin_example/assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"signin_example/assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"signin_example/assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"signin_example/assets/NOTICES": "7a1f472d38cdb4e55ea00cafcf535db9",
"signin_example/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"signin_example/assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"signin_example/canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"signin_example/canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"signin_example/canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"signin_example/canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"signin_example/canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"signin_example/canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"signin_example/canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"signin_example/canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"signin_example/canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"signin_example/canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"signin_example/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"signin_example/flutter.js": "f393d3c16b631f36852323de8e583132",
"signin_example/flutter_bootstrap.js": "6fd117a43c8ce6a625b3811c09297253",
"signin_example/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"signin_example/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"signin_example/icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"signin_example/icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"signin_example/index.html": "d162effd711dc4131e82a9fc323bbf9d",
"signin_example/main.dart.js": "2b467735912206fc67d46dc77d0dd83b",
"signin_example/manifest.json": "a7505d8a2d96643d9fed19205d0f5c87",
"signin_example/version.json": "7b8eba6218ccd3507b4826ac408e6ac4",
"version.json": "7b8eba6218ccd3507b4826ac408e6ac4"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
