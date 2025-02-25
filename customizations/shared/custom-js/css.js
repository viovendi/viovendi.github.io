async function run(css) {
  const styleSheet = document.createElement("style");
  styleSheet.innerHTML = css;
  const wait = new Promise(resolve => {
    styleSheet.onload = resolve;
  });
  document.head.appendChild(styleSheet);
  return wait;
}
