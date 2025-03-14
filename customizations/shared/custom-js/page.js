function run(callback) {
    const last = custom_js_last_pageload;
    if (last != null) {
        callback(last);
    }
    window.addEventListener("doo_page_loaded", async event => {
        if (event.detail == last) return;
        await new Promise(r => $(document).ready(r));
        callback(event.detail);
    });
}