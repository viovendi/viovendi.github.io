// Korona POS 2.0


console.log("Tag Korona POS 2.0", dataLayer)
const confirmed = _.find(dataLayer, { event: 'RegistrationConfirmed'});
console.log(confirmed)
const { purchase } = confirmed.ecommerce
const doo = {
    eventId: confirmed.doo.eventId,
    organizationId: confirmed.doo.organizationId,
    bookingId: purchase.actionField.id,
    tickets: _.filter(purchase.products , { category: 'Ticket'})
}

console.log(doo)