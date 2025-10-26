"use client";

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Sword2(props) {
  const { nodes, materials } = useGLTF("/models/sword2-transformed.glb");
  return (
    <group
      {...props}
      dispose={null}
      scale={[5, 5, 5]}
      position={[0, -2.5, 0]}
      rotation={[0, Math.PI / 2, 0]} // rotate 90° around Y
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.model.geometry}
        material={materials.model}
      />
    </group>
  );
}

useGLTF.preload("/models/sword2-transformed.glb");
