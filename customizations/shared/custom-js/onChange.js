async function run(selector, parent, callback) {
    await custom_js.onCreate(selector, parent, s => {
        callback(s);
        const observer = new MutationObserver(async () => callback(s));
        observer.observe(s.get(0), { "childList": true, "subtree": true, "characterData": true });
    });
}
