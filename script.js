function indexOfIgnoreCase(s1, s2) {
  // if substring is empty, return 0
  if (s2.length === 0) return 0;

  // convert both strings to lowercase for case-insensitive comparison
  const str = s1.toLowerCase();
  const sub = s2.toLowerCase();

  return str.indexOf(sub);
}

// Please do not change the code below
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));
