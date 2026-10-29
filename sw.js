const CACHE="avatar-v1";
const CORE=["/", "/index.html", "/avatar.webp", "/manifest.webmanifest", "/icons/icon-192.png", "/icons/icon-512.png", "/icons/maskable-192.png", "/icons/maskable-512.png", "/icons/apple-touch-icon.png", "/c/0.bin", "/c/1.bin", "/c/2.bin", "/c/3.bin", "/c/4.bin", "/c/5.bin", "/c/6.bin", "/c/7.bin", "/c/8.bin", "/c/9.bin", "/c/10.bin", "/c/11.bin", "/c/12.bin", "/c/13.bin", "/c/14.bin", "/c/15.bin", "/c/16.bin", "/c/17.bin", "/c/18.bin", "/c/19.bin", "/c/20.bin", "/c/21.bin", "/c/22.bin", "/c/23.bin", "/c/24.bin", "/c/25.bin", "/c/26.bin", "/c/27.bin", "/c/28.bin", "/c/29.bin", "/c/30.bin", "/c/31.bin", "/c/32.bin", "/c/33.bin", "/c/34.bin", "/c/35.bin", "/c/36.bin", "/c/37.bin", "/c/38.bin", "/c/39.bin", "/c/40.bin", "/c/41.bin", "/c/42.bin", "/c/43.bin", "/c/44.bin", "/c/45.bin", "/c/46.bin", "/c/47.bin", "/c/48.bin", "/c/49.bin", "/c/50.bin", "/c/51.bin", "/c/52.bin", "/c/53.bin", "/c/54.bin", "/c/55.bin", "/c/56.bin", "/c/57.bin", "/c/58.bin", "/c/59.bin", "/c/60.bin", "/c/61.bin", "/c/62.bin", "/c/63.bin", "/c/64.bin", "/c/65.bin", "/c/66.bin", "/c/67.bin", "/c/68.bin", "/c/69.bin", "/c/70.bin", "/c/71.bin", "/c/72.bin", "/c/73.bin", "/c/74.bin", "/c/75.bin", "/c/76.bin", "/c/77.bin", "/c/78.bin", "/c/79.bin", "/c/80.bin", "/c/81.bin", "/c/82.bin", "/c/83.bin", "/c/84.bin", "/c/85.bin", "/c/86.bin", "/c/87.bin", "/c/88.bin", "/c/89.bin", "/c/90.bin", "/c/91.bin", "/c/92.bin", "/c/93.bin", "/c/94.bin", "/c/95.bin", "/c/96.bin", "/c/97.bin", "/c/98.bin", "/c/99.bin", "/c/100.bin", "/c/101.bin", "/c/102.bin", "/c/103.bin", "/c/104.bin", "/c/105.bin", "/c/106.bin", "/c/107.bin", "/c/108.bin", "/c/109.bin", "/c/110.bin", "/c/111.bin"];
self.addEventListener("install",e=>{
  e.waitUntil(caches.open(CACHE).then(c=>Promise.allSettled(CORE.map(u=>c.add(u)))).then(()=>self.skipWaiting()));
});
self.addEventListener("activate",e=>{
  e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));
});
self.addEventListener("fetch",e=>{
  const r=e.request; if(r.method!=="GET") return;
  const u=new URL(r.url); if(u.origin!==location.origin) return;
  if(r.mode==="navigate"){
    e.respondWith(fetch(r).then(res=>{const cp=res.clone();caches.open(CACHE).then(c=>c.put("/index.html",cp));return res;}).catch(()=>caches.match("/index.html")));
    return;
  }
  e.respondWith(caches.match(r,{ignoreSearch:true}).then(hit=>hit||fetch(r).then(res=>{if(res.ok){const cp=res.clone();caches.open(CACHE).then(c=>c.put(r,cp));}return res;})));
});
