// CP-8821
const search = new URLSearchParams(window.location.search);
if (search.get("event_list_widget_config_name")?.startsWith("list-")) {
    startCustomizationList();
}

function startCustomizationList() {
    $(document.head).append("<style> .event-title.vv-overflow-ellipsis { overflow: unset; text-overflow: unset; white-space: unset; } </style>");

    function syncRequest(l) {
        const h = new XMLHttpRequest(); 
        h.open("GET", l + "#", false); 
        h.send();
        return JSON.parse(h.response);
    }

    const _open = XMLHttpRequest.prototype.open;
    XMLHttpRequest.prototype.open = function(...a) {
        if (a[1].startsWith("https://api.doo.net/v1/events?") && !a[1].endsWith("#")) {
            this.addEventListener("readystatechange", event => {
                if (this.readyState == 4) {
                    const orig = event.target.responseText;
                    const j = JSON.parse(orig);
                    const final = {
                        "_links": {
                            "self": j._links.self,
                            "first": j._links.self,
                            "last": j._links.self
                        },
                        "page": 1,
                        "page_count": 1,
                        "page_size": j.total_items,
                        "total_items": j.total_items,
                        "_embedded": j._embedded
                    };

                    let next = j._links.next;
                    while (next != null) {
                        const d = syncRequest(next.href);
                        final._embedded.events.push(...d._embedded.events);
                        next = d._links.next;
                    }
                    const response = JSON.stringify(final);

                    Object.defineProperty(this, "response", {writable: true});
                    Object.defineProperty(this, "responseText", {writable: true});
                    this.response = this.responseText = response;
                }
            });
        }
        return _open.apply(this, a);
    };
}
