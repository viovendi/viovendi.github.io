async function run(selector, parent) {
    return await new Promise(async res => {
        const s = await selector();
        if (s.length) return res(s);
        const observer = new MutationObserver(() => {
            const s = await selector();
            if (s.length) {
                observer.disconnect();
                res(s);
            }
        });
        observer.observe(parent ? parent.get(0) : document.body, { "childList": true, "subtree": true });
    });
}