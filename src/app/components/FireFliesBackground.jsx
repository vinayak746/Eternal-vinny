"use client";
import React, { useEffect, useState } from "react";

const createFirefly = () => ({
  id: Math.random(),
  top: `${Math.random() * 100}%`,
  left: `${Math.random() * 100}%`,
  animationDuration: `${Math.random() * 5 + 5}s`,
});

const FireFliesBackground = () => {
  const [fireflies, setFireflies] = useState([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Initial fireflies
    const initialFireflies = Array.from({ length: 15 }, createFirefly);
    setFireflies(initialFireflies);

    const addFireflyPeriodically = () => {
      setFireflies((currentFireflies) => {
        if (currentFireflies.length >= 15) return currentFireflies;
        return [...currentFireflies, createFirefly()];
      });
    };

    const interval = setInterval(addFireflyPeriodically, 2000);

    return () => clearInterval(interval);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full -z-1 overflow-hidden pointer-events-none">
      {fireflies.map((firefly) => {
        return (
          <div
            key={firefly.id}
            className="absolute rounded-full w-[10px] h-[10px] bg-firefly-radial will-change-transform"
            style={{
              top: firefly.top,
              left: firefly.left,
              animation: `move ${firefly.animationDuration} infinite alternate`,
              backfaceVisibility: "hidden",
              perspective: 1000,
            }}
          ></div>
        );
      })}
    </div>
  );
};

export default FireFliesBackground;
