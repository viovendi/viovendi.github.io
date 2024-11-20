async function run() {
  const url = new URL(window.location.href);
  const eid = window.location.pathname.split("/")[3];
  const oid = url.searchParams.get("organizerId");
  const lang = url.searchParams.get("doo_locale");
  return {

    // short lowercase
    eid, oid, lang,

    // short uppercase
    "EID": eid,
    "OID": oid,

    // long
    "eventId": eid,
    "organizerId": oid,
    "locale": lang,
    "language": lang
  };
}
