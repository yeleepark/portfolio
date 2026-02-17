/**
 * Particle System for 3D text particles
 * Uses InstancedMesh for performance optimization
 */

import * as THREE from "three";
import { textToParticlePositions } from "@/utils/textToParticles";

export class ParticleSystem {
  private particles: THREE.InstancedMesh;
  private targetPositions: THREE.Vector3[];
  private currentPositions: THREE.Vector3[];
  private velocities: THREE.Vector3[];
  private material: THREE.MeshBasicMaterial;
  private count: number;

  constructor(text: string, isDark: boolean, isMobile: boolean = false) {
    // Get particle positions from text
    const sampling = isMobile ? 6 : 4;
    const coords = textToParticlePositions(text, sampling);
    this.count = coords.length;

    // Initialize position and velocity arrays
    this.targetPositions = coords.map(
      (c) => new THREE.Vector3(c.x, c.y, c.z)
    );
    this.currentPositions = coords.map(
      (c) => new THREE.Vector3(c.x, c.y, c.z)
    );
    this.velocities = new Array(this.count)
      .fill(null)
      .map(() => new THREE.Vector3());

    // Create geometry and material
    const geometry = new THREE.BoxGeometry(0.08, 0.08, 0.08);
    this.material = new THREE.MeshBasicMaterial({
      color: isDark ? 0x00ff00 : 0x000000,
    });

    // Create instanced mesh for performance
    this.particles = new THREE.InstancedMesh(
      geometry,
      this.material,
      this.count
    );

    // Set initial positions
    const matrix = new THREE.Matrix4();
    for (let i = 0; i < this.count; i++) {
      const pos = this.currentPositions[i];
      matrix.setPosition(pos.x, pos.y, pos.z);
      this.particles.setMatrixAt(i, matrix);
    }
    this.particles.instanceMatrix.needsUpdate = true;
  }

  /**
   * Trigger explosion effect
   */
  explode(): void {
    this.velocities.forEach((vel) => {
      const dir = new THREE.Vector3(
        Math.random() - 0.5,
        Math.random() - 0.5,
        Math.random() - 0.5
      ).normalize();
      vel.copy(dir.multiplyScalar(5 + Math.random() * 3));
    });
  }

  /**
   * Update particle positions with spring physics
   * @param deltaTime - Time delta for smooth animation
   */
  update(deltaTime: number): void {
    const matrix = new THREE.Matrix4();
    let needsUpdate = false;

    for (let i = 0; i < this.count; i++) {
      const pos = this.currentPositions[i];
      const target = this.targetPositions[i];
      const vel = this.velocities[i];

      // Spring force toward target
      const toTarget = new THREE.Vector3().subVectors(target, pos);
      const springForce = toTarget.multiplyScalar(0.015);

      // Apply spring force and damping
      vel.add(springForce);
      vel.multiplyScalar(0.92);

      // Update position
      pos.add(vel.clone().multiplyScalar(deltaTime * 60));

      // Update instance matrix
      matrix.setPosition(pos.x, pos.y, pos.z);
      this.particles.setMatrixAt(i, matrix);
      needsUpdate = true;
    }

    if (needsUpdate) {
      this.particles.instanceMatrix.needsUpdate = true;
    }
  }

  /**
   * Update particle color for dark mode
   */
  updateColor(isDark: boolean): void {
    this.material.color.set(isDark ? 0x00ff00 : 0x000000);
  }

  /**
   * Get the mesh object
   */
  getMesh(): THREE.InstancedMesh {
    return this.particles;
  }

  /**
   * Cleanup resources
   */
  dispose(): void {
    this.particles.geometry.dispose();
    this.material.dispose();
  }
}
