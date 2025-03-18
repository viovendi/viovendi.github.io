function run(rmatch, allText) {
  const negative = rmatch.startsWith("!");
  const pmatch = negative ? rmatch.slice(1) : rmatch;
  const matches = pmatch.split(/(?<!\^)[|]/);
  for (const xmatch of matches) {
    const match = xmatch.replaceAll("^|", "|");
    if (match == "{...}" && allText == "") continue;
    const groups = match.split("{...}");
    if (!allText.startsWith(groups[0])) continue;
    let i = 0;
    let lastEmpty = false;
    let f = true;
    for (const group of groups) {
      const sub = allText.slice(i);
      const idx = sub.indexOf(group);
      if (idx == -1) {
        f = false;
        break;
      }
      i += idx + group.length;
      lastEmpty = group.length == 0;
    }
    const v = f && (lastEmpty || i == allText.length);
    if (!v) continue;
    return !negative;
  }
  return negative;
}