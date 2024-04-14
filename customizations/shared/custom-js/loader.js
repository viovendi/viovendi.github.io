const cache = { };

window.custom_js = async function (name, ...args) {
  if (name + "#loading" in cache) {
    await cache[name + "#loading"];
    return await cache[name](...args);
  }
  let loaded;
  cache[name + "#loading"] = new Promise(res => {
    loaded = res;
  });
  return new Promise(resolve => {
    $.getScript("https://viovendi.github.io/customizations/shared/custom-js/" + name + ".js", async () => {
      cache[name] = run;
      loaded();
      resolve(await run(...args));
    });
  });
}
