async function run(selector, parent, callback) {
    const s = await selector();
    if (s.length) callback(s);
    const observer = new MutationObserver(async () => {
        const s = await selector();
        if (s.length) callback(s);
    });
    observer.observe(parent ? parent.get(0) : document.body, { "childList": true, "subtree": true });
}
