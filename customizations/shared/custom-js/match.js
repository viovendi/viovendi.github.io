function run(match, allText) {
  if (match == "{...}" && allText == "") return false;
  const groups = match.split("{...}");
  let i = 0;
  let lastEmpty = false;
  for (const group of groups) {
    const sub = allText.slice(i);
    const idx = sub.indexOf(group);
    if (idx == -1) return false;
    i += idx + group.length;
    lastEmpty = group.length == 0;
  }
  return lastEmpty || i == allText.length;
}
