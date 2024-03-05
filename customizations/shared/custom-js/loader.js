const cache = { };

window.custom_js = async function (name, ...args) {
  if (name in cache) {
    return await cache[name](...args);
  }
  return new Promise(resolve => {
    $.getScript("https://viovendi.github.io/customizations/shared/custom-js/" + name + ".js", async () => {
      cache[name] = run;
      resolve(await run(...args));
    });
  });
}
