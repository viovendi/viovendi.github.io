if ("custom_js" in window) throw new Error("Tried to load the custom.js helper more than once!");

const custom_js_cache = { };

window.custom_js = new Proxy(async function (name, ...args) {
  // old style: custom_js("tool_name", ...args)
  return await custom_js_load_and_run(name, ...args);
}, {
  "get": function(target, tool) {
    // new style: custom_js.tool_name(...args)
    return async (...args) => await custom_js_load_and_run(tool, ...args);
  }
});

async function custom_js_load_and_run(name, ...args) {
  if (name + "#load" in custom_js_cache) {
    await custom_js_cache[name + "#load"];
    return await custom_js_cache[name](...args);
  }

  let loaded;
  custom_js_cache[name + "#load"] = new Promise(res => { loaded = res; });
  return new Promise(resolve => {
    $.getScript("https://viovendi.github.io/customizations/shared/custom-js/" + name + ".js", async () => {
      custom_js_cache[name] = run;
      loaded();
      resolve(await run(...args));
    });
  });
}

// make sure to cache page loads if setup takes too long
let custom_js_last_pageload = null;
window.addEventListener("doo_page_loaded", async event => {
  await new Promise(r => $(document).ready(r));
  custom_js_last_pageload = event.detail;
});