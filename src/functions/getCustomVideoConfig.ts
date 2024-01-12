import type { Preset } from "../types/Preset";

function getCustomVideoConfig(): Preset {
  const videoGroupOption = document.querySelector(
    "[data-video-group] option:checked"
  ) as HTMLOptionElement;
  const videoConfig: Preset = {
    mimeType: videoGroupOption.dataset.mimeType,
    width: parseInt(videoGroupOption.dataset.width) || undefined,
    height: parseInt(videoGroupOption.dataset.height) || undefined,
    frameRate: parseInt(videoGroupOption.dataset.frameRate) || 60,
  };
  return videoConfig;
}

export { getCustomVideoConfig };
