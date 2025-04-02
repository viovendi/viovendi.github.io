if (window.init == null) {
    throw new Error("The init function is not defined, please create a function called 'init' to reliably start customizations after everything is loaded.");
}

(() => {

    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "https://doo-product-consulting-uploads.s3.eu-central-1.amazonaws.com/Shared/jquery/3.7.1/jquery.min.js";
    script.onload = custom_js_jquery_handler;
    document.head.appendChild(script);

    async function custom_js_jquery_handler() {
        await $.getScript("https://viovendi.github.io/customizations/shared/custom-js/loader.js");
        init();
    }

})();