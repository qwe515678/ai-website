"use client";
import React, { useEffect, useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { motion } from "framer-motion";
import Image from "next/image";

const ANIMATION_CONFIG = {
  updateFrequency: 0.1,
  glitchIntensityMod: 0.5,
};

const GlitchShaderMaterial = ({
  texture,
  isHovered,
}: {
  texture: THREE.Texture;
  isHovered: boolean;
}) => {
  const { gl, scene, camera, size } = useThree();
  const materialRef = useRef<THREE.ShaderMaterial | null>(null);
  const [glitchIntensity, setGlitchIntensity] = useState(0.0);

  // Calculate aspect ratio
  const aspectRatio =
    texture.image !== null ? texture.image.width / texture.image.height : 1 / 3;

  useEffect(() => {
    const material = new THREE.ShaderMaterial({
      uniforms: {
        tDiffuse: { value: texture },
        glitchIntensity: { value: glitchIntensity },
      },
      vertexShader: vertexShader,
      fragmentShader: fragmentShader,
    });
    materialRef.current = material;
    return () => {
      material.dispose();
    };
  }, [texture, glitchIntensity]);

  useFrame(({ clock }) => {
    if (materialRef.current) {
      const elapsedTime = clock.getElapsedTime();
      const newGlitchIntensity = isHovered
        ? Math.abs(Math.sin(elapsedTime)) * 2
        : 0;
      setGlitchIntensity(newGlitchIntensity);
    }
  });

  return (
    <mesh>
      {/* Adjust planeGeometry args to maintain aspect ratio */}
      <planeGeometry args={[aspectRatio, 1]} />
      {materialRef.current && (
        <primitive object={materialRef.current} attach="material" />
      )}
    </mesh>
  );
};

function GlitchImage({ src }: { src: string }) {
  const texture = new THREE.TextureLoader().load(src);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {window.innerWidth < 768 ? (
        <Image src={src} width={1000} height={500} alt="" />
      ) : (
        <Canvas camera={{ position: [0, 0, 1] }}>
          <GlitchShaderMaterial texture={texture} isHovered={isHovered} />
        </Canvas>
      )}
    </motion.div>
  );
}

export default GlitchImage;

const vertexShader = `
 varying vec2 vUv;
 void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
 }
`;

const fragmentShader = `
 uniform sampler2D tDiffuse;
 uniform float glitchIntensity;
 varying vec2 vUv;

 void main() {
    vec2 uv = clamp(vUv, 0.0, 1.0);

    vec4 baseState = texture2D(tDiffuse, uv);

    if (glitchIntensity > 0.0) {
      float segment = floor(uv.y * 12.0); 
      float randomValue = fract(sin(segment * 12345.6789 + glitchIntensity) * 43758.5453); 
      vec2 offset = vec2(randomValue * 0.03, 0.0) * glitchIntensity;

      vec4 redGlitch = texture2D(tDiffuse, uv + offset);
      vec4 greenGlitch = texture2D(tDiffuse, uv - offset);
      vec4 blueGlitch = texture2D(tDiffuse, uv);

      if (mod(segment, 3.0) == 0.0) {
        gl_FragColor = vec4(redGlitch.r, greenGlitch.g, baseState.b, 1.0);
      } else if (mod(segment, 3.0) == 1.0) {
        gl_FragColor = vec4(baseState.r, greenGlitch.g, blueGlitch.b, 1.0);
      } else {
        gl_FragColor = vec4(redGlitch.r, baseState.g, blueGlitch.b, 1.0);
      }
    } else {
      gl_FragColor = baseState; 
    }
 }
`;
