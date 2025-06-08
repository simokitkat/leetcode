export function isPalindrome(x: number): boolean {
  if (x < 0) return false;

  const str = x.toString();
  const iterationsCount = Math.floor(str.length / 2);

  for (let i = 0; i < iterationsCount; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false;
    }
  }

  return true;
}
