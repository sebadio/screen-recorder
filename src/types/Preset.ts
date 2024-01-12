type Preset = {
  mimeType: string;
  width?: number;
  height?: number;
  frameRate: number;
};

const PRESET_FORMATS = {
  custom: {
    mimeType: "video/webm;codecs=vp9",
    frameRate: 60,
  },

  discord: {
    mimeType: "video/webm;codecs=vp9",
    width: 1280,
    height: 720,
    frameRate: 30,
  },

  youtube: {
    mimeType: "video/mp4;codecs=avc1.42E01E,mp4a.40.2",
    frameRate: 60,
  },

  twitter: {
    mimeType: "video/mp4;codecs=avc1.42E01E,mp4a.40.2",
    frameRate: 60,
  },

  instagram: {
    mimeType: "video/mp4;codecs=avc1.42E01E,mp4a.40.2",
    frameRate: 60,
  },

  reddit: {
    mimeType: "video/mp4;codecs=avc1.42E01E,mp4a.40.2",
    frameRate: 60,
  },

  low: {
    mimeType: "video/webm;codecs=vp9",
    width: 640,
    height: 360,
    frameRate: 30,
  },

  medium: {
    mimeType: "video/mp4;codecs=avc1.42E01E,mp4a.40.2",
    width: 1280,
    height: 720,
    frameRate: 30,
  },

  high: {
    mimeType: "video/mp4;codecs=avc1.42E01E,mp4a.40.2",
    frameRate: 60,
  },
};

export type { Preset };
export { PRESET_FORMATS };
