(()=>{importScripts("precache-manifest.{hash}.js");const e="my-cache-v2";self.addEventListener("install",(t=>{t.waitUntil(caches.open(e).then((e=>e.addAll(precacheManifest))).then((()=>self.skipWaiting())))})),self.addEventListener("activate",(t=>{t.waitUntil(caches.keys().then((t=>Promise.all(t.map((t=>{if(t!==e)return caches.delete(t)}))))).then((()=>self.clients.claim())))})),self.addEventListener("fetch",(e=>{e.respondWith(caches.match(e.request).then((t=>t||fetch(e.request))))})),workbox.precaching.precacheAndRoute([{'revision':'6a6b65129ea0b1bea048132476e63364','url':'/index.html'},{'revision':null,'url':'/static/css/main.718b0cb2.css'},{'revision':null,'url':'/static/js/787.c355a8c7.chunk.js'},{'revision':null,'url':'/static/js/main.61463cd2.js'},{'revision':null,'url':'/static/media/FoundersGrotesk-Bold.3b64b3b0f03fecaaa081.otf'},{'revision':null,'url':'/static/media/FoundersGrotesk-Medium.bd60933299b8e5db144f.otf'},{'revision':null,'url':'/static/media/FoundersGrotesk-Regular.5e8e49c30472126309a6.otf'},{'revision':null,'url':'/static/media/FoundersGrotesk-Semibold.9a058b46e1b1e219c6fa.otf'},{'revision':null,'url':'/static/media/aquiestoy.4efdf527c575b4225899.webp'},{'revision':null,'url':'/static/media/band-aid_heart.d7c0ad87108859a97e3f.webp'},{'revision':null,'url':'/static/media/breathing.de2ebd34688676486bc9.webp'},{'revision':null,'url':'/static/media/check.13020f2ba3f2173af066.webp'},{'revision':null,'url':'/static/media/dont_symbol.77383b9a3a18a32da27b.webp'},{'revision':null,'url':'/static/media/education_psy.51c09abeb24c0ffb4cbf.webp'},{'revision':null,'url':'/static/media/emotionalcrisis.ed55f6dd162f45bfc225.webp'},{'revision':null,'url':'/static/media/group_support.7e7ab5bb00a96a653882.webp'},{'revision':null,'url':'/static/media/heart_in_cross-med.37417c9f57ce7e115847.webp'},{'revision':null,'url':'/static/media/help_consult.6352ece2e94ed29a37cf.webp'},{'revision':null,'url':'/static/media/letter_A.86405af3d6aa46091efa.png'},{'revision':null,'url':'/static/media/letter_B.1d80bf729173b7505d46.png'},{'revision':null,'url':'/static/media/letter_C.de260906fabd923b009b.png'},{'revision':null,'url':'/static/media/letter_D.1fc2bbe42405a1c50812.png'},{'revision':null,'url':'/static/media/letter_E.ad2da343458f3ee6dd93.png'},{'revision':null,'url':'/static/media/orange_cruz.b11a71b62b77535b4e85.webp'},{'revision':null,'url':'/static/media/principal.ecbe4f09e72739b76fec.webp'},{'revision':null,'url':'/static/media/regulacion.bdb8a990550367a8ee9a.webp'},{'revision':null,'url':'/static/media/remote_support.7186e2eb8f1e5796a930.webp'},{'revision':null,'url':'/static/media/support_network.322914f6c2133a2c9dd5.webp'},{'revision':null,'url':'/static/media/terapify.bf1a91fb5b4faf96a93f.webp'},{'revision':null,'url':'/static/media/udechile.4dc54ea1a13db793bc87.webp'},{'revision':null,'url':'/static/media/unam.11f5d80b1cd41c547d09.png'},{'revision':null,'url':'/static/media/unam_covid.c753f202095e481c7032.webp'},{'revision':null,'url':'/static/media/unam_line.c2fd809aeaf1ab571db9.webp'},{'revision':null,'url':'/static/media/unam_psichology.be4b928a01d5650076e4.webp'},{'revision':null,'url':'/static/media/video.07fef8ff55e3065183f5.webp'},{'revision':null,'url':'/static/media/yana.e6016ac89cdb410fa8b2.webp'}])})();
//# sourceMappingURL=service-worker.js.map