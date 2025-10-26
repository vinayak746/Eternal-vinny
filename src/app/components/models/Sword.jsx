"use client";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Sword(props) {
  const { nodes, materials } = useGLTF("/models/sword.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.model.geometry}
        material={materials.model}
      />
    </group>
  );
}

useGLTF.preload("/models/sword.glb");
