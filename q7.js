//Q7
function formatName(firstName, lastName) {
  const first = firstName.trim();
  const last = lastName.trim();

  return `${last.toUpperCase()}, ${first.charAt(0).toUpperCase() + first.slice(1).toLowerCase()}`;
}

// Test
console.log(formatName('  esther  ', '  ogbu  '));
