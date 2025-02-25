function run(ticket) {
    const value = ticket.find(".vv-selection-input__value");
    return () => parseInt(value.text().trim());
}