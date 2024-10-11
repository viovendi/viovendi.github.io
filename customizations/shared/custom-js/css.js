async function run(css) {
  const styleSheet = document.createElement("style");
  styleSheet.type = "text/css";
  styleSheet.innerHTML = css;
  const wait = new Promise(resolve => {
    styleSheet.onload = resolve;
  });
  document.head.appendChild(styleSheet);
  return wait;
}
