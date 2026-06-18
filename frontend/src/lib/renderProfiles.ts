export type RenderProfileId = 'default' | 'high' | 'ultra';

export type RenderProfilePreset = {
  resolutionM: number;
  maxTextureDim: number;
  meshStride: number;
};

export const RENDER_PROFILE_PRESETS: Record<RenderProfileId, RenderProfilePreset> = {
  default: { resolutionM: 1.0, maxTextureDim: 4096, meshStride: 8 },
  high: { resolutionM: 0.5, maxTextureDim: 8192, meshStride: 4 },
  ultra: { resolutionM: 0.5, maxTextureDim: 16384, meshStride: 2 },
};

export function isRenderProfileId(value: string): value is RenderProfileId {
  return value in RENDER_PROFILE_PRESETS;
}

export function applyRenderProfilePreset(profile: string): RenderProfilePreset | null {
  if (!isRenderProfileId(profile)) return null;
  return RENDER_PROFILE_PRESETS[profile];
}
