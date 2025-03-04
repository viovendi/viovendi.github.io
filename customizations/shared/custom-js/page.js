function run(callback) {
    if (custom_js_last_pageload != null) {
        callback(custom_js_last_pageload);
    }
    window.addEventListener("doo_page_loaded", async event => {
        if (event.detail == custom_js_last_pageload) return;
        await new Promise(r => $(document).ready(r));
        callback(event.detail);
    });
}