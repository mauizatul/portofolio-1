"use client";

import { useEffect } from "react";

export function ScrollReveal() {
  useEffect(() => {
    document.body.classList.add("reveal-ready");

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );
    const revealItems = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]"),
    );
    const parallaxItems = Array.from(
      document.querySelectorAll<HTMLElement>("[data-parallax]"),
    );
    let animationFrame = 0;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: "0px 0px -12% 0px",
        threshold: 0.16,
      },
    );

    revealItems.forEach((item) => observer.observe(item));

    const updateParallax = () => {
      animationFrame = 0;

      if (prefersReducedMotion.matches) {
        parallaxItems.forEach((item) =>
          item.style.setProperty("--parallax-y", "0px"),
        );
        return;
      }

      const viewportCenter = window.innerHeight / 2;

      parallaxItems.forEach((item) => {
        const speed = Number(item.dataset.parallaxSpeed ?? 36);
        const limit = Math.abs(speed);
        const rect = item.getBoundingClientRect();
        const itemCenter = rect.top + rect.height / 2;
        const progress = (viewportCenter - itemCenter) / window.innerHeight;
        const offset = Math.max(-limit, Math.min(limit, progress * speed));

        item.style.setProperty("--parallax-y", `${offset.toFixed(2)}px`);
      });
    };

    const requestParallaxUpdate = () => {
      if (animationFrame) {
        return;
      }

      animationFrame = window.requestAnimationFrame(updateParallax);
    };

    requestParallaxUpdate();
    window.addEventListener("scroll", requestParallaxUpdate, { passive: true });
    window.addEventListener("resize", requestParallaxUpdate);
    prefersReducedMotion.addEventListener("change", requestParallaxUpdate);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", requestParallaxUpdate);
      window.removeEventListener("resize", requestParallaxUpdate);
      prefersReducedMotion.removeEventListener("change", requestParallaxUpdate);

      if (animationFrame) {
        window.cancelAnimationFrame(animationFrame);
      }

      document.body.classList.remove("reveal-ready");
    };
  }, []);

  return null;
}
