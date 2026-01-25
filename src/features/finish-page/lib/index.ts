import { Highscore } from "@/features/finish-page/types";

export const STORAGE_KEY = "quizHighscores";
export const MAX_HIGHSCORES = 10;

export const safeParseHighscores = (value: string | null): Highscore[] => {
  if (!value) return [];

  try {
    const parsed = JSON.parse(value) as unknown;

    if (!Array.isArray(parsed)) return [];

    return parsed
      .filter(
        (x): x is Highscore =>
          !!x &&
          typeof x === "object" &&
          typeof (x as Highscore).user === "string" &&
          typeof (x as Highscore).score === "number" &&
          typeof (x as Highscore).timestamp === "number",
      )
      .slice(0, 200);
  } catch {
    return [];
  }
};

export const sortHighscores = (a: Highscore, b: Highscore): number => {
  if (b.score !== a.score) return b.score - a.score;
  return a.timestamp - b.timestamp;
};

export const isSameResult = (
  a: Highscore,
  b: Pick<Highscore, "user" | "score">,
): boolean => a.user === b.user && a.score === b.score;

export const saveHighscore = (userName: string, score: number): Highscore[] => {
  const existing = safeParseHighscores(localStorage.getItem(STORAGE_KEY));

  const alreadyExists = existing.some((h) =>
    isSameResult(h, { user: userName, score }),
  );

  if (alreadyExists) return existing;

  const newEntry: Highscore = {
    user: userName,
    score,
    timestamp: Date.now(),
  };

  const updated = [...existing, newEntry]
    .sort(sortHighscores)
    .slice(0, MAX_HIGHSCORES);

  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));

  return updated;
};

export const clearHighscores = (): void => {
  localStorage.removeItem(STORAGE_KEY);
};
