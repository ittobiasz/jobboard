/** Derives a 2-letter mark from a company name, e.g. "TechFlow" -> "TF", "Arcadia Studio" -> "AS". */
export function getCompanyMark(company: string): string {
  const words = company.trim().split(/\s+/).filter(Boolean);

  if (words.length >= 2) {
    return (words[0][0] + words[1][0]).toUpperCase();
  }

  const word = words[0] ?? '';
  const capitals = word.match(/[A-Z]/g) ?? [];
  if (capitals.length >= 2) {
    return (capitals[0] + capitals[1]).toUpperCase();
  }

  return word.slice(0, 2).toUpperCase();
}
