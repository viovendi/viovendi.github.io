const custom_js_cache = { };

window.custom_js = async function (name, ...args) {
  if (name + "#load" in custom_js_cache) {
    await custom_js_cache[name + "#load"];
    return await custom_js_cache[name](...args);
  }
  let loaded;
  custom_js_cache[name + "#load"] = new Promise(res => {
    loaded = res;
  });
  return new Promise(resolve => {
    $.getScript("https://viovendi.github.io/customizations/shared/custom-js/" + name + ".js", async () => {
      custom_js_cache[name] = run;
      loaded();
      resolve(await run(...args));
    });
  });
}
