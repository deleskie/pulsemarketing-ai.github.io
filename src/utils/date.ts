export function parseDate(dateStr: string): Date {
  if (!dateStr) {
    return new Date();
  }
  return new Date(`${dateStr}T00:00:00`);
}

export function formatDate(
  dateStr: string,
  options: Intl.DateTimeFormatOptions = {
    month: "short",
    day: "numeric",
    year: "numeric",
  },
  locale?: string,
): string {
  const parsed = parseDate(dateStr);
  return new Intl.DateTimeFormat(locale, options).format(parsed);
}

export function formatLongDate(dateStr: string, locale?: string): string {
  return formatDate(
    dateStr,
    { month: "long", day: "numeric", year: "numeric" },
    locale,
  );
}
