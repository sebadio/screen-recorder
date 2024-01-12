import type { Preset } from "../types/Preset";
import { PRESET_FORMATS } from "../types/Preset";
import { getCustomVideoConfig } from "./getCustomVideoConfig";

function getPreset(): Preset {
  const presetSelectElement = document.querySelector(
    "#preset"
  ) as HTMLSelectElement;

  switch (presetSelectElement.value) {
    case "custom":
      return getCustomVideoConfig();

    case "discord": {
      return PRESET_FORMATS.discord;
    }

    case "youtube": {
      return PRESET_FORMATS.youtube;
    }

    case "twitter": {
      return PRESET_FORMATS.twitter;
    }

    case "instagram": {
      return PRESET_FORMATS.instagram;
    }

    case "reddit": {
      return PRESET_FORMATS.reddit;
    }

    case "low": {
      return PRESET_FORMATS.low;
    }

    case "medium": {
      return PRESET_FORMATS.medium;
    }

    case "high": {
      return PRESET_FORMATS.high;
    }

    default:
      return PRESET_FORMATS.medium;
  }
}
