"use client";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export default function ShadowSlave(props) {
  const { nodes, materials } = useGLTF("/models/shadow-slave-model.glb");
  const modelRef = useRef();
  useFrame((state, delta, xrFrame) => {
    modelRef.current.position.y =
      -1.5 + Math.sin(state.clock.elapsedTime) * 0.15;
  });
  return (
    <group
      {...props}
      dispose={null}
      ref={modelRef}
      position={[0, -1.5, 0]}
      scale={[1.67, 1.67, 0.9]}
      rotation={[0.25, 0, 0]}
    >
      <mesh
        name="model"
        castShadow
        receiveShadow
        geometry={nodes.model.geometry}
        material={materials.model}
      />
    </group>
  );
}

useGLTF.preload("/models/shadow-slave-model.glb");
