import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

export function useReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(() => typeof IntersectionObserver === "undefined");
  const { i18n } = useTranslation();
  const mounted = useRef(false);

  // Re-arm the reveal on every language change so the whole page replays
  // its reveal consistently, instead of leaving on-screen sections revealed
  // while off-screen ones reset (which read as sections randomly vanishing).
  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
      return;
    }
    setInView(false);
  }, [i18n.language]);

  useEffect(() => {
    const el = ref.current;
    if (!el || inView) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.13, rootMargin: "0px 0px -10% 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [inView]);

  return { ref, inView };
}
