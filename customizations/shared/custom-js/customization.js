async function run(data) {
    const lookup = { };
    for (const [func, reids, rpages] of data) {
        const pages = (rpages == null || !rpages.length) ? ["init"] : rpages;
        const eids = (reids == null || !reids.length) ? ["*"] : reids;
        for (const eventId of eids) {
            for (const page of pages) {
                const key = eventId + "/" + page;
                if (!(key in lookup)) lookup[key] = [];
                lookup[key].push(func);
            }
        }
    }

    const { eventId } = await custom_js.info();
    function call(page) {
        lookup[eventId + "/" + page]?.forEach(f => f(page));
        lookup[eventId + "/*"]?.forEach(f => f(page));
        lookup["*/" + page]?.forEach(f => f(page));
        lookup["*/*"]?.forEach(f => f(page));
    }
    call("init");

    custom_js.page(loaded => {
        const page = loaded.widget.page.name;
        call(page);
    });
}
