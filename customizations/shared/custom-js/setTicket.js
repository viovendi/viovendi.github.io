async function run(ticket, value) {
    const ctrl = ticket.find(".vv-selection-input__control");
    ctrl.find("p-overlay").hide();
    ctrl.click();
    const panel = await custom_js.waitForCreate(() => ctrl.find("p-overlay .p-select-overlay"), ctrl);
    const options = panel.find(".vv-selection-option");
    const search = value.toString();
    const select = options.filter((_, t) => $(t).text().trim() == search);
    (select.length ? select : options.find(".vv-selection-option--selected")).click();
    await custom_js.waitForDelete(() => ctrl.find("p-overlay .p-select-overlay"), ctrl);
    ctrl.find("p-overlay").show();
}
