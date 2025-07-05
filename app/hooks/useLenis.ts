"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export function useLenis() {
  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      syncTouch: false,
      touchMultiplier: 2,
      infinite: false,
      prevent: (node) => {
        // Prevent smooth scrolling on header and its children
        return node.tagName === "HEADER" || node.closest("header") !== null;
      },
    });

    // Handle anchor links with offset for fixed header
    const handleAnchorClick = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.tagName === "A" && target.hash) {
        e.preventDefault();
        const targetElement = document.querySelector(target.hash);
        if (targetElement) {
          const offsetTop = (targetElement as HTMLElement).offsetTop - 100; // 100px offset for fixed header
          lenis.scrollTo(offsetTop, { duration: 1.2 });
        }
      }
    };

    // Add event listener for anchor clicks
    document.addEventListener("click", handleAnchorClick);

    // Animation frame function
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Cleanup function
    return () => {
      document.removeEventListener("click", handleAnchorClick);
      lenis.destroy();
    };
  }, []);
}
