"use client";
import { BtnList } from "@/app/data";
import React from "react";
import NavButton from "./NavButton";

const Navigation = () => {
  const angleIncrement = (2 * Math.PI) / BtnList.length; // radians
  const radiusVW = 19; // circle radius in vw units

  return (
    <div className="w-full fixed h-screen flex items-center justify-center z-10">
      <div className="w-max flex items-center justify-center relative hover:pause animate-spin-slow group ">
        {BtnList.map((btn, index) => {
          const angle = index * angleIncrement;
          const x = `${Math.cos(angle) * radiusVW}vw`;
          const y = `${Math.sin(angle) * radiusVW}vw`;

          return <NavButton key={btn.label} x={x} y={y} {...btn} />;
        })}
      </div>
    </div>
  );
};

export default Navigation;
