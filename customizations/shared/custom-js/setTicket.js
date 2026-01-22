async function run(ticket, value) {
    const ctrl = ticket.find(".event-category__ticket-count p-select");
    ctrl.find("p-overlay").hide();
    ctrl.trigger("click");
    const panel = await custom_js.waitForCreate(() => ctrl.find("p-overlay .p-select-list"), ctrl);
    const options = panel.find(".p-select-option");
    const search = value.toString();
    const select = options.filter((_, t) => $(t).text().trim() == search);
    (select.length ? select : options.find(".vv-selection-option--selected")).trigger("click");
    await custom_js.waitForDelete(() => ctrl.find("p-overlay .p-select-list"), ctrl);
    ctrl.find("p-overlay").show();
}
