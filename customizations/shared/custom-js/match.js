function run(rmatch, allText) {
  const negative = rmatch.startsWith("!");
  const match = negative ? rmatch.slice(1) : rmatch;
  if (match == "{...}" && allText == "") return negative;
  const groups = match.split("{...}");
  if (!allText.startsWith(groups[0])) return negative;
  let i = 0;
  let lastEmpty = false;
  for (const group of groups) {
    const sub = allText.slice(i);
    const idx = sub.indexOf(group);
    if (idx == -1) return negative;
    i += idx + group.length;
    lastEmpty = group.length == 0;
  }
  const v = lastEmpty || i == allText.length;
  return (negative && !v) || (!negative && v);
}
