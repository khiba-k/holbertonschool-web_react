function getCurrentYear() {
  const date = new Date();
  return date.getFullYear();
}

function getFooterCopy(isIndex) {
  return isIndex ? "Holberton School" : "Holberton School main dashboard";
}

export { getCurrentYear, getFooterCopy };
