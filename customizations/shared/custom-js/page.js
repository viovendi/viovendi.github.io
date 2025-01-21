function run(callback) {
    window.addEventListener("doo_page_loaded", async event => {
        await new Promise(r => $(document).ready(r));
        callback(event.detail);
    });
}