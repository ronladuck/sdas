import { useState, useEffect } from "react";

export const useTypewriter = (
  words,
  speed = 120,
  deleteSpeed = 80,
  pauseTime = 2500,
) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isStarted, setIsStarted] = useState(false);

  useEffect(() => {
    if (words.length === 0) return;

    // Start typing after a brief delay
    if (!isStarted) {
      const startTimeout = setTimeout(() => {
        setIsStarted(true);
      }, 1000);
      return () => clearTimeout(startTimeout);
    }

    const currentWord = words[currentWordIndex];

    const timeout = setTimeout(
      () => {
        if (isPaused) {
          setIsPaused(false);
          setIsDeleting(true);
          return;
        }

        if (isDeleting) {
          // Deleting characters with variable speed
          if (currentText.length > 0) {
            setCurrentText(currentText.slice(0, -1));
          } else {
            // Move to next word
            setIsDeleting(false);
            setCurrentWordIndex((prev) => (prev + 1) % words.length);
          }
        } else {
          // Typing characters with slight variation in speed
          if (currentText.length < currentWord.length) {
            setCurrentText(currentWord.slice(0, currentText.length + 1));
          } else {
            // Pause before deleting
            setIsPaused(true);
          }
        }
      },
      isPaused
        ? pauseTime
        : isDeleting
          ? deleteSpeed + Math.random() * 30
          : speed + Math.random() * 50,
    );

    return () => clearTimeout(timeout);
  }, [
    currentText,
    currentWordIndex,
    isDeleting,
    isPaused,
    isStarted,
    words,
    speed,
    deleteSpeed,
    pauseTime,
  ]);

  return currentText;
};

export default useTypewriter;
