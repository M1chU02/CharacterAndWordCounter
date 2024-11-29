// script.js
document.addEventListener("DOMContentLoaded", () => {
  const textInput = document.getElementById("text-input");
  const charWithSpaces = document.getElementById("char-with-spaces");
  const charWithoutSpaces = document.getElementById("char-without-spaces");
  const wordCount = document.getElementById("word-count");

  textInput.addEventListener("input", () => {
    const text = textInput.value;

    // Count characters with spaces
    const totalCharsWithSpaces = text.length;

    // Count characters without spaces
    const totalCharsWithoutSpaces = text.replace(/\s+/g, "").length;

    // Count words
    const words = text.trim() === "" ? 0 : text.trim().split(/\s+/).length;

    // Update the display
    charWithSpaces.textContent = totalCharsWithSpaces;
    charWithoutSpaces.textContent = totalCharsWithoutSpaces;
    wordCount.textContent = words;
  });
});
