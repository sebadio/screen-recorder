async function handleGenerateBlob(e) {
  const recordingType = document.querySelector(
    "[data-video-group] option:checked"
  ) as HTMLOptionElement;

  const filename = document.querySelector("#filename") as HTMLInputElement;
  if (!filename.value) filename.value = "recording";

  const autoDownload = document.querySelector(
    "#autoDownload"
  ) as HTMLInputElement;

  const downloadLink = document.querySelector(
    "#downloadLink"
  ) as HTMLAnchorElement;
  downloadLink.classList.remove("hidden");
  downloadLink.href = URL.createObjectURL(e.data);
  downloadLink.download = `${filename.value}.${recordingType.value}`;
  if (recordingType.value == "webm" || recordingType.value == "mp4") {
    const videoHolder = document.querySelector(
      "#videoHolder"
    ) as HTMLVideoElement;
    videoHolder.src = downloadLink.href;
    videoHolder.controls = true;
    videoHolder.classList.remove("hidden");
  }
  if (autoDownload.checked) {
    downloadLink.click();
  }
}

export { handleGenerateBlob };
