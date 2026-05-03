const WORDS_PER_MINUTE = 200;

export const readTime = (rawBody: string | undefined): string => {
  if (!rawBody) return "1 min";
  const stripped = rawBody
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/[#>*_~`\[\]()!\-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  const words = stripped ? stripped.split(" ").length : 0;
  return `${Math.max(1, Math.round(words / WORDS_PER_MINUTE))} min`;
};
