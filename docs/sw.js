importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js');
const filesToCache = [
    {url: '/index.html', revision: '102724.2'},
    {url: '/dist/bundle.min.js', revision: '102724.2'},
    {url: '/dist/source-map.js', revision: '102724.2'},
    {url: '/dist/ic.png', revision: '102724.2'}

];
workbox.precaching.precacheAndRoute(filesToCache);