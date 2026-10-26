async function run() {
  const url = new URL(window.location.href);
  const eid = url.searchParams.get("doo_event_id");
  const oid = url.searchParams.get("organizerId");
  const lang = url.searchParams.get("doo_locale");
  const type = JSON.parse(url.searchParams.get("doo_buyer_prefill") ?? "{}").attendee_type ?? null;
  const config = url.searchParams.get("booking_widget_config_name");
  return {

    // short lowercase
    eid, oid, lang, type, config,

    // short uppercase
    "EID": eid,
    "OID": oid,

    // long
    "eventId": eid,
    "organizerId": oid,
    "locale": lang,
    "language": lang,
    "attendeeType": type,
    "widgetConfig": config
  };
}
