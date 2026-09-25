console.log('lmu-shared-js');

// --------------------------------------------------
// Styles
// --------------------------------------------------

var styleSheetStripe = document.createElement("style");

styleSheetStripe.innerHTML = `
.loader{
    display: none;
    margin-top: 50px;
    background:url("data:image/gif;base64,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");
    height: 50px;
    background-repeat: no-repeat;
    background-position: center;
}

.loader p{
    padding-top: 100px;
}

@keyframes nodeInserted {
    from { opacity: 0.99; }
    to { opacity: 1; }
}

.event-booking-widget .customization-booking-area-wrapper-page3{
    animation-duration: 0.1s;
    animation-name: nodeInserted;
}

@keyframes nodeInsertedPage4 {
    from { opacity: 0.99; }
    to { opacity: 1; }
}

.event-booking-widget .customization-booking-area-wrapper-page4{
    animation-duration: 0.1s;
    animation-name: nodeInsertedPage4;
}
`;

document.head.appendChild(styleSheetStripe);


// --------------------------------------------------
// Variables
// --------------------------------------------------

localStorage.removeItem('payment_method');

let isSent = false;
const orderDataobj = {};


// --------------------------------------------------
// Intercept doo fetch /v1/orders
// --------------------------------------------------

function interceptOrdersFetch() {
    if (window.__dooOrdersFetchIntercepted) {
        return;
    }

    window.__dooOrdersFetchIntercepted = true;

    const originalFetch = window.fetch;

    window.fetch = async function() {
        const request = arguments[0];

        let url = '';

        if (typeof request === 'string') {
            url = request;
        } else if (request && request.url) {
            url = request.url;
        }

        const response = await originalFetch.apply(this, arguments);

        if (!url || !url.includes('api.doo.net/v1/orders')) {
            return response;
        }

        console.log('doo orders request:', url);
        console.log('doo orders status:', response.status);

        try {
            const clone = response.clone();
            const res = await clone.json();

            console.log('doo orders response:', res);

            if (
                !res ||
                !res._embedded ||
                !res._embedded.orders ||
                !res._embedded.orders.length
            ) {
                console.log('No orders found in response');
                return response;
            }

            const orders = res._embedded.orders;
            const order = orders[0];

            console.log('doo order:', order);

            if (!order) {
                return response;
            }

            orderDataobj.orderId = order.id;

            if (order.event) {
                orderDataobj.organizationId = order.event.organizer_id;
                orderDataobj.eventId = order.event.id;

                if (order.event.currency) {
                    orderDataobj.orderCurr = order.event.currency.code;
                }
            }

            orderDataobj.buyerEmail = order.email;

            if (order.payment) {
                orderDataobj.orderAmount = order.payment.amount;
            }

            console.log('orderDataobj:', orderDataobj);

            if (
                localStorage.getItem('payment_method') === 'ePay' &&
                !isSent &&
                $('.customization2_payment-description_manual-approval').length < 1
            ) {
                isSent = true;

                console.log('Sending order to Make:', orderDataobj);

                sendRequestToGetRedirectUrl(orderDataobj);
            }

        } catch (err) {
            console.error('Error processing doo orders response:', err);
        }

        return response;
    };

    console.log('doo fetch interceptor installed');
}

interceptOrdersFetch();


// --------------------------------------------------
// Detect selected payment method
// --------------------------------------------------

function isEpayPayment() {
    let paymentInput;
    let isEpay = false;

    if ($('.payment-method-selection__payment-options--multiple').length > 0) {

        paymentInput = $(
            '.customization2_payment_options.payment-method-selection__payment-options--multiple input:checked'
        );

    } else {

        paymentInput = $(
            '.customization2_payment_options .payment-option__label'
        );
    }

    if (
        paymentInput.closest('label').hasClass(
            'customization_payment-option_ePayServiceBayern'
        ) ||
        paymentInput.closest('label').hasClass(
            'customization_payment-option_custom_payment'
        ) ||
        paymentInput.text().trim() === 'ePay Bayern' ||
        paymentInput.text().trim() === 'ePayBayern' ||
        paymentInput.text().trim() ===
            'ePay (Credit Card, PayPal, Direct Debit)' ||
        paymentInput.text().trim() ===
            'ePay (Kreditkarte, PayPal, Lastschrift)' ||
        paymentInput.text().trim() === 'custom_payment'
    ) {
        isEpay = true;
    }

    return isEpay;
}


// --------------------------------------------------
// Detect booking pages
// --------------------------------------------------

var insertionListener = function(event) {

    if (event.animationName === 'nodeInserted') {

        $('.customization-booking-area-wrapper-page3 .customization-button-next')
            .off('click.lmuEpay')
            .on('click.lmuEpay', function() {

                if (isEpayPayment()) {

                    console.log('isEpayPayment - true');

                    localStorage.setItem(
                        'payment_method',
                        'ePay'
                    );

                } else {

                    console.log('isEpayPayment - false');

                    localStorage.removeItem(
                        'payment_method'
                    );
                }
            });

    } else if (event.animationName === 'nodeInsertedPage4') {

        if (
            localStorage.getItem('payment_method') === 'ePay'
        ) {

            console.log('page4 ePay');

            loader('on');
        }
    }
};

document.addEventListener(
    'animationstart',
    insertionListener,
    false
);

document.addEventListener(
    'MSAnimationStart',
    insertionListener,
    false
);

document.addEventListener(
    'webkitAnimationStart',
    insertionListener,
    false
);


// --------------------------------------------------
// Loader
// --------------------------------------------------

function loader(param) {

    if (param === 'on') {

        if (!$('.loader').length) {

            $('.confirmation-header').append(
                '<div class="loader">' +
                '<p>Please wait, you will be redirected to a page to complete your payment.</p>' +
                '</div>'
            );
        }

        $(
            '.ew-confirmation .ew-confirmation__header,' +
            '.ew-confirmation .ew-confirmation__heading,' +
            '.ew-confirmation .ew-confirmation__summary,' +
            '.ew-confirmation .ew-confirmation__notice,' +
            '.ew-confirmation .ew-confirmation__organizer-contact'
        ).hide();

        $(
            '.ew-confirmation__summary,' +
            '.ew-confirmation__notice,' +
            '.ew-confirmation__organizer-contact'
        ).hide();

        $('.loader').show();

    } else {

        $('.loader').hide();

        $(
            '.ew-confirmation .ew-confirmation__header,' +
            '.ew-confirmation .ew-confirmation__heading,' +
            '.ew-confirmation .ew-confirmation__summary,' +
            '.ew-confirmation .ew-confirmation__notice,' +
            '.ew-confirmation .ew-confirmation__organizer-contact'
        ).show();

        $(
            '.ew-confirmation__summary,' +
            '.ew-confirmation__notice,' +
            '.ew-confirmation__organizer-contact'
        ).show();
    }
}


// --------------------------------------------------
// Error icon
// --------------------------------------------------

function changeIcon(color) {

    $('.confirmation-header vv-icon').hide();

    if ($('.new-icon-logo').length) {

        $('.new-icon-logo').text('X');
        $('.new-icon-logo').css(
            'background',
            color
        );

    } else {

        $('.confirmation-header').prepend(
            '<p class="new-icon-logo" ' +
            'style="' +
            'height:68px;' +
            'width:68px;' +
            'font-weight:bold;' +
            'font-size:32px;' +
            'background:' + color + ';' +
            'color:white;' +
            'border-radius:100%;' +
            'text-align:center;' +
            'line-height:72px;' +
            '">' +
            'X' +
            '</p>'
        );
    }
}


// --------------------------------------------------
// Error message
// --------------------------------------------------

function showErrorMessage() {

    const heading = 'Unexpected error';

    const message =
        'Oops! Something went wrong. Please try again later.';

    const color = 'red';

    changeIcon(color);

    $('.ew-confirmation__header .header__label')
        .text(heading);

    if ($('.response-message-notice').length) {

        $('.response-message-notice')
            .text(message);

    } else {

        $('.customization-confirmation-description')
            .text(message);
    }
}


// --------------------------------------------------
// Send order to Make
// --------------------------------------------------

function sendRequestToGetRedirectUrl(object) {

    console.log(
        'sendRequestToGetRedirectUrl:',
        object
    );

    $.ajax({

        url:
            'https://hook.doo.integromat.celonis.com/1bqimjodufy1bi4zxky2rm326pdc50nn',

        type: 'post',

        headers: {},

        data: object,

        dataType: 'json',

        success: function(res) {

            console.log(
                'Make response:',
                res
            );

            if (!res || !res.LinkToPayPage) {

                console.error(
                    'LinkToPayPage missing:',
                    res
                );

                loader('off');
                showErrorMessage();

                return;
            }

            console.log(
                'Redirecting to:',
                res.LinkToPayPage
            );

            window.open(
                res.LinkToPayPage + '&langKey=en',
                '_parent'
            );
        },

        error: function(jqXHR, exception) {

            console.error(
                'Make request failed:',
                jqXHR.status,
                jqXHR.responseText,
                exception
            );

            isSent = false;

            loader('off');

            showErrorMessage();
        }
    });
}
