export function removeOldAdsScript() {
    const els = document.querySelectorAll(`script[src*='mgid.com'`);
    const _els = document.querySelectorAll(`link[href*='mgid.com']`);
    els.forEach(e => e.remove());
    _els.forEach(e => e.remove());
}
export function createScriptsTag(scripts) {
    scripts.forEach(s => {
        var ms = document.createElement('script');
        ms.type = 'text/javascript';
        ms.src = s;    
        ms.async = true;
        document.head.appendChild(ms);
      });
}