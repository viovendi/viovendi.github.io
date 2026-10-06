async function run(selector, parent, callback) {
    const s = await selector();
    let exists = false;
    if (s.length) {
        callback(s);
        exists = true;
    }
    const observer = new MutationObserver(async () => {
        const s = await selector();
        if (!s.length) {
            exists = false;
            return;
        }
        if (!exists) {
            callback(s);
            exists = true;
        }
    });
    observer.observe(parent ? parent.get(0) : document.body, { "childList": true, "subtree": true });
}
