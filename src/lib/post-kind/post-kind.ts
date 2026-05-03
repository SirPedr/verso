export type PostKind = "Letra" | "Ensaio";

export const postKind = (description: string | undefined): PostKind =>
  description?.startsWith("Música") ? "Letra" : "Ensaio";

export const isLyric = (description: string | undefined): boolean =>
  postKind(description) === "Letra";
