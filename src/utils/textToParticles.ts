/**
 * Converts text to 3D particle coordinates using Canvas 2D API
 */

export interface ParticlePosition {
  x: number;
  y: number;
  z: number;
}

/**
 * Convert text to particle positions
 * @param text - The text to convert
 * @param sampling - Pixel sampling interval (default: 4)
 * @returns Array of 3D particle positions
 */
export function textToParticlePositions(
  text: string,
  sampling: number = 4
): ParticlePosition[] {
  // Create canvas for text rendering
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");

  if (!ctx) {
    console.error("Failed to get 2D context");
    return [];
  }

  // Set canvas size and font
  canvas.width = 800;
  canvas.height = 200;
  ctx.font = "bold 80px monospace";
  ctx.fillStyle = "white";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";

  // Render text
  ctx.fillText(text, canvas.width / 2, canvas.height / 2);

  // Get pixel data
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const positions: ParticlePosition[] = [];

  // Sample pixels and convert to 3D coordinates
  for (let y = 0; y < canvas.height; y += sampling) {
    for (let x = 0; x < canvas.width; x += sampling) {
      const index = (y * canvas.width + x) * 4;
      const alpha = imageData.data[index + 3];

      // If pixel is visible (alpha > threshold)
      if (alpha > 128) {
        positions.push({
          x: (x - canvas.width / 2) * 0.01,
          y: -(y - canvas.height / 2) * 0.01,
          z: (Math.random() - 0.5) * 0.5,
        });
      }
    }
  }

  return positions;
}
