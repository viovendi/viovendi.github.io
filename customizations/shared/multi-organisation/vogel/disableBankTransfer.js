custom_js.page(loaded => {
    const page = loaded.widget.page.name;
    if (page == "booking_payment_selection") {
        const country = loaded.order.buyer.address.country.code;
        if (["DE", "AT", "CH"].includes(country)) {
            return;
        }
        $(".customization2_payment_options").find(".payment-option:has(.customization2_bank-transfer)").hide();
    }
});
