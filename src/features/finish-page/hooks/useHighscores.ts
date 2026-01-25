import {
  safeParseHighscores,
  STORAGE_KEY,
  saveHighscore,
  MAX_HIGHSCORES,
  clearHighscores as clearStorageHighscores,
} from "@/features/finish-page/lib";
import { Highscore } from "@/features/finish-page/types";
import { useState, useCallback, useMemo, useEffect, useRef } from "react";

interface UseHighscoresProps {
  userName?: string;
  score?: number;
}

export const useHighscores = ({ userName, score }: UseHighscoresProps) => {
  const [highscores, setHighscores] = useState<Highscore[]>(() =>
    safeParseHighscores(localStorage.getItem(STORAGE_KEY)),
  );

  const hasSavedRef = useRef(false);

  useEffect(() => {
    if (hasSavedRef.current) return;
    if (!userName || typeof score !== "number") return;

    hasSavedRef.current = true;

    const updated = saveHighscore(userName, score);
    requestAnimationFrame(() => {
      setHighscores(updated);
    });
  }, [userName, score]);

  const handleClearHighscores = useCallback(() => {
    clearStorageHighscores();
    setHighscores([]);
  }, []);

  const top10Highscores = useMemo(
    () => highscores.slice(0, MAX_HIGHSCORES),
    [highscores],
  );

  const isCurrentUserInTop10 = useMemo(() => {
    if (!userName || typeof score !== "number") return false;
    return top10Highscores.some(
      (h) => h.user === userName && h.score === score,
    );
  }, [score, top10Highscores, userName]);

  return {
    highscores,
    top10Highscores,
    isCurrentUserInTop10,
    handleClearHighscores,
  };
};
