async function run(gtmKey) {
    if (!("dataLayer" in window)) { window.dataLayer = []; }
    window.dataLayer.push({
        "gtm.start": new Date().getTime(),
        "event": "gtm.js"
    });

    let res;
    const p = new Promise(r => { res = r; });

    const f = document.getElementsByTagName("script")[0];
    const j = document.createElement("script");
    j.onload = res;
    j.async = true;
    j.src = "https://www.googletagmanager.com/gtm.js?id=" + gtmKey;
    if (f != null) {
        f.parentNode.insertBefore(j, f);
    } else {
        document.head.appendChild(j);
    }

    return p;
}
