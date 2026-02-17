"use client";

/**
 * CRT (Cathode Ray Tube) Effect
 * Adds scanlines and radial gradient for retro monitor feel
 */
export default function CRTEffect() {
  return (
    <div className="absolute inset-0 z-[5] pointer-events-none">
      {/* Scanlines */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background:
            "repeating-linear-gradient(0deg, rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.15) 1px, transparent 1px, transparent 2px)",
        }}
      />

      {/* Radial gradient vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 0%, transparent 60%, rgba(0, 0, 0, 0.1) 100%)",
        }}
      />
    </div>
  );
}
