export function formatNum(num) {
  if (num > 9) return String(num);
  return `0${num}`;
}
