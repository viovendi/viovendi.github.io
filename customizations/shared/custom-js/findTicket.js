async function run(name) {
    const tickets = $("vv-ticket");
    for (let i = 0; i < tickets.length; i++) {
        const current = tickets.eq(i);
        const title = current.find(".customization-category-name").text().trim();
        if (await custom_js.match(name, title)) return current;
    }
    return $();
}