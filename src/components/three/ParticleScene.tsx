"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { ParticleSystem } from "@/components/three/ParticleSystem";

interface ParticleSceneProps {
  isDark: boolean;
}

export default function ParticleScene({ isDark }: ParticleSceneProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const particleSystemRef = useRef<ParticleSystem | null>(null);
  const animationFrameRef = useRef<number | null>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const targetRotationRef = useRef({ x: 0, y: 0 });
  const currentRotationRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const isMobile = window.innerWidth < 768;

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // Initialize scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Initialize camera
    const camera = new THREE.PerspectiveCamera(
      75,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.z = isMobile ? 8 : 5;
    cameraRef.current = camera;

    // Initialize renderer
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: false, // Pixelated feel
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Create particle system
    const particleSystem = new ParticleSystem("WELCOME", isDark, isMobile);
    scene.add(particleSystem.getMesh());
    particleSystemRef.current = particleSystem;

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      if (prefersReducedMotion) return;

      mouseRef.current = {
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: -(e.clientY / window.innerHeight - 0.5) * 2,
      };

      targetRotationRef.current = {
        x: mouseRef.current.y * 0.3,
        y: mouseRef.current.x * 0.3,
      };
    };

    // Touch move handler
    const handleTouchMove = (e: TouchEvent) => {
      if (prefersReducedMotion || e.touches.length === 0) return;

      const touch = e.touches[0];
      mouseRef.current = {
        x: (touch.clientX / window.innerWidth - 0.5) * 2,
        y: -(touch.clientY / window.innerHeight - 0.5) * 2,
      };

      targetRotationRef.current = {
        x: mouseRef.current.y * 0.3,
        y: mouseRef.current.x * 0.3,
      };
    };

    // Click/Touch handler for explosion
    const handleInteraction = () => {
      if (prefersReducedMotion) return;
      particleSystem.explode();
    };

    // Resize handler
    const handleResize = () => {
      if (!container || !camera || !renderer) return;

      const width = container.clientWidth;
      const height = container.clientHeight;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();

      renderer.setSize(width, height);
    };

    // Animation loop
    const animate = () => {
      if (!scene || !camera || !renderer || !particleSystem) return;

      // Smooth rotation interpolation
      if (!prefersReducedMotion) {
        currentRotationRef.current.x +=
          (targetRotationRef.current.x - currentRotationRef.current.x) * 0.05;
        currentRotationRef.current.y +=
          (targetRotationRef.current.y - currentRotationRef.current.y) * 0.05;

        scene.rotation.x = currentRotationRef.current.x;
        scene.rotation.y = currentRotationRef.current.y;
      }

      // Update particle system
      particleSystem.update(0.016); // ~60fps

      // Render
      renderer.render(scene, camera);

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    // Add event listeners
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleTouchMove, { passive: true });
    window.addEventListener("click", handleInteraction);
    window.addEventListener("touchend", handleInteraction);
    window.addEventListener("resize", handleResize);

    // Start animation
    animate();

    // Cleanup
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("click", handleInteraction);
      window.removeEventListener("touchend", handleInteraction);
      window.removeEventListener("resize", handleResize);

      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }

      if (particleSystemRef.current) {
        particleSystemRef.current.dispose();
      }

      if (rendererRef.current) {
        rendererRef.current.dispose();
        if (container.contains(rendererRef.current.domElement)) {
          container.removeChild(rendererRef.current.domElement);
        }
      }
    };
  }, [isDark]);

  // Update particle color when theme changes
  useEffect(() => {
    if (particleSystemRef.current) {
      particleSystemRef.current.updateColor(isDark);
    }
  }, [isDark]);

  return <div ref={containerRef} className="w-full h-full" />;
}
