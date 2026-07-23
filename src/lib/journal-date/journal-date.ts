/* o diário — dates are authored in São Paulo wall-clock.

   The frontmatter YAML parses a bare timestamp (`2026-12-10` or
   `2026-12-10T21:00:00`) as UTC. The schema transform (content.config) shifts it
   to the true instant for GMT-3, so the stored Date is a correct absolute moment
   and sorting is right. Everything here formats back in America/São Paulo, so
   what you type is what you see, on any build machine. Brazil has had no DST
   since 2019, so the offset is a stable -03:00. */

export const TZ = "America/Sao_Paulo";
export const SP_OFFSET_MS = 3 * 60 * 60 * 1000;

/** "10 de dezembro de 2026" */
export const fmtDate = (d: Date): string =>
  d.toLocaleDateString("pt-BR", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: TZ,
  });

/** "10 de dez." — the timeline day marker */
export const fmtDay = (d: Date): string =>
  d.toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "short",
    timeZone: TZ,
  });

/** "dezembro de 2026" — the month-group header */
export const fmtMonth = (d: Date): string =>
  d.toLocaleDateString("pt-BR", {
    month: "long",
    year: "numeric",
    timeZone: TZ,
  });

/** "21:00" */
export const fmtTime = (d: Date): string =>
  d.toLocaleTimeString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
    timeZone: TZ,
  });

/** True when the entry carried a real time (not a bare, midnight-only date). */
export const hasTime = (d: Date): boolean => fmtTime(d) !== "00:00";
