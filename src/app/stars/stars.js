'use client';
import { Stars } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';
import { Canvas, useFrame } from '@react-three/fiber';

export function StarsWithColor({ color = '#ffffff', twinkle = true, ...props }) {
  const starsRef = useRef();
  useFrame(({ clock }) => {
    if (twinkle && starsRef.current) {
      const time = clock.getElapsedTime();
      starsRef.current.material.opacity = 0.7 + Math.sin(time * 2) * 0.2; 
    }
  });

  return (
    <Stars
      ref={starsRef}
      {...props}
      material={new THREE.PointsMaterial({
        color: new THREE.Color(color),
        size: 0.04,
        transparent: true,
        opacity: 0.7,
      })}
    />
  );
}