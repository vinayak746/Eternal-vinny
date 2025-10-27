"use client";

import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import clsx from "clsx";
import { Environment } from "@react-three/drei";

const RenderModel = ({ children, className }) => {
  return (
    <Canvas
      className={clsx(
        "w-full h-[60vh] md:w-screen md:h-screen -z-10 relative",
        className
      )}
      dpr={[1, 1.5]}
      shadows={false}
      gl={{ antialias: true, powerPreference: "high-performance" }}
      onCreated={(state) => {
        try {
          if (typeof window !== "undefined" && state.gl.setPixelRatio) {
            state.gl.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
          }
          const canvas = state.gl.domElement;
          if (canvas && !canvas.__r3_context_listener_added) {
            canvas.addEventListener(
              "webglcontextlost",
              (e) => {
                e.preventDefault();
                console.warn("WebGL context lost on canvas");
              },
              false
            );
            canvas.__r3_context_listener_added = true;
          }
        } catch (err) {
          console.warn("RenderModel onCreated warning:", err);
        }
      }}
    >
      <Suspense fallback={null}>{children}</Suspense>
      <Environment preset="city" />
    </Canvas>
  );
};

export default RenderModel;
