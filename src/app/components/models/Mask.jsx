"use client";

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export default function Mask(props) {
  const { nodes, materials } = useGLTF("/models/mask.glb");
  const modelRef = useRef();
  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.01;
    }
  });
  return (
    <group
      {...props}
      dispose={null}
      scale={[9.8, 9.8, 9.8]}
      position={[0, 0, 0]}
      rotation={[0.4, -1, 0]}
      ref={modelRef}
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

useGLTF.preload("/models/mask.glb");
