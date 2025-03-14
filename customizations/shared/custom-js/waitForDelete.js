async function run(selector, parent) {
    await new Promise(async res => {
        const s = await selector();
        if (!s.length) return res();
        const observer = new MutationObserver(() => {
            const s = await selector();
            if (!s.length) {
                observer.disconnect();
                res();
            }
        });
        observer.observe(parent ? parent.get(0) : document.body, { "childList": true, "subtree": true });
    });
}