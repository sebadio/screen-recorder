function toggleAdvancedOptions(e: InputEvent) {
  if ((e.target as HTMLInputElement).checked) {
    document.querySelector("#advancedOptions").classList.remove("hidden");
  } else {
    document.querySelector("#advancedOptions").classList.add("hidden");
  }
}

export { toggleAdvancedOptions };
