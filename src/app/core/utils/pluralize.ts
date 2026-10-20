/** Picks the correct Slovak plural form for a count: 1 / 2-4 / 0 and 5+. */
export function pluralizeSk(count: number, one: string, few: string, many: string): string {
  if (count === 1) {
    return one;
  }
  if (count >= 2 && count <= 4) {
    return few;
  }
  return many;
}
