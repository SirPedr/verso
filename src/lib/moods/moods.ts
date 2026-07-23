/* Verso — o diário: the mood spectrum.

   Not isolated tags but a single broad ordered scale, from a genuinely good day
   to the heaviest night. Grounded in the valence axis of the circumplex model
   (Russell) and how mood scales work in practice: a full range with an honest
   neutral middle. The array order IS the spectrum, mais leve → mais pesado:

     radiante · leve · tranquilo · neutro · melancolia · solidão · angústia · raiva

   neutro sits at the hinge — the plain, just-fine days — with the good moods
   above and the deepening negatives below.

   Tints (in journal-layout, keyed by [data-mood]) trace one muted OKLCH ramp:
   green/teal at the light end, chroma washing out to near-0 at neutro, then
   cool→warm down to a banked brick red at raiva. Lightness descends as the mood
   gets heavier. Deliberately low-chroma and nocturnal — a printed page, not a
   mood-tracker's traffic-light gradient — and every hue kept off the rust accent
   so rust stays the one warm pop. Each --mood-dot clears 3:1 on the ground
   (graphical); each --mood-ink clears 4.5:1 (text). */

export const MOODS = [
  "radiante",
  "leve",
  "tranquilo",
  "neutro",
  "melancolia",
  "solidao",
  "angustia",
  "raiva",
] as const;

export type Mood = (typeof MOODS)[number];

/** Position on the spectrum, 0 (lightest) … MOODS.length-1 (heaviest). */
export const moodIndex = (m: Mood): number => MOODS.indexOf(m);

/** Small-caps display label (accented pt-BR). Enum keys stay ASCII. */
export const moodLabel: Record<Mood, string> = {
  radiante: "radiante",
  leve: "leve",
  tranquilo: "tranquilo",
  neutro: "neutro",
  melancolia: "melancolia",
  solidao: "solidão",
  angustia: "angústia",
  raiva: "raiva",
};

/** A one-line gloss, also used as the mood's accessible name so a colored dot
    is never the only carrier of meaning. */
export const moodGloss: Record<Mood, string> = {
  radiante: "um dia que deu certo, inteiro",
  leve: "acordei sem o peso de sempre",
  tranquilo: "nada de mais, e tá tudo bem",
  neutro: "um dia comum, nem bom nem ruim",
  melancolia: "uma tristeza sem pressa",
  solidao: "a noite em que ninguém coube",
  angustia: "o aperto antes de qualquer coisa",
  raiva: "o tijolo que eu mesmo assentei",
};
