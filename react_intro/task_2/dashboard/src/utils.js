export function getCurrentYear() {
  const date = new Date();
  return date.getFullYear();
}

export function getFooterCopy(isIndex) {
  return isIndex ? 'Holberton School' : 'Holberton School main dashboard';
}
