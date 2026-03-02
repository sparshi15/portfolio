// Typing Effect
const texts = ["AI Engineer", "ML Developer", "GenAI Enthusiast"];
let i = 0;
let j = 0;
let currentText = "";
let isDeleting = false;

function type() {
  currentText = texts[i];

  if (!isDeleting) {
    document.getElementById("typing").innerHTML =
      currentText.substring(0, j++);
    if (j > currentText.length) {
      isDeleting = true;
      setTimeout(type, 1000);
      return;
    }
  } else {
    document.getElementById("typing").innerHTML =
      currentText.substring(0, j--);
    if (j === 0) {
      isDeleting = false;
      i = (i + 1) % texts.length;
    }
  }
  setTimeout(type, isDeleting ? 50 : 100);
}

type();

// Dark Mode
document.getElementById("toggle-mode").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});
