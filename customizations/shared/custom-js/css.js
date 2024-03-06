async function run(css) {
  const styleSheet = document.createElement("style");
  styleSheet.type = "text/css";
  styleSheet.innerText = css;
  const wait = new Promise(resolve => {
    styleSheet.onload = resolve;
  });
  document.head.appendChild(styleSheet);
  return wait;
}
