importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js');
const filesToCache = [
    {url: '/index.html', revision: '102724.3'},
    {url: 'https://cdn.jsdelivr.net/gh/ScadeBlock/DemonJS@main/docs/dist/bundle.min.js', revision: '102724.3'},
    {url: 'https://cdn.jsdelivr.net/gh/ScadeBlock/DemonJS@main/docs/dist/source-map.js', revision: '102724.3'},
    {url: '/dist/ic.png', revision: '102724.3'}

];
workbox.precaching.precacheAndRoute(filesToCache);
