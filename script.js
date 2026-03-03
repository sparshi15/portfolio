// Typing Effect
const roles = ["AI & ML Engineer", "Generative AI Developer", "RAG Systems Builder"];
let i = 0;
let j = 0;
let deleting = false;

function type() {
  const current = roles[i];
  const element = document.getElementById("typing");

  if (!deleting) {
    element.innerHTML = current.substring(0, j++);
    if (j > current.length) {
      deleting = true;
      setTimeout(type, 1000);
      return;
    }
  } else {
    element.innerHTML = current.substring(0, j--);
    if (j === 0) {
      deleting = false;
      i = (i + 1) % roles.length;
    }
  }

  setTimeout(type, deleting ? 50 : 100);
}
type();

// Scroll Reveal
window.addEventListener("scroll", () => {
  document.querySelectorAll(".reveal").forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 100) {
      el.classList.add("active");
    }
  });
});

// Skill Animation
window.addEventListener("scroll", () => {
  document.querySelectorAll(".progress").forEach(bar => {
    if (bar.getBoundingClientRect().top < window.innerHeight - 100) {
      if (bar.classList.contains("ml")) bar.style.width = "90%";
      if (bar.classList.contains("dl")) bar.style.width = "85%";
      if (bar.classList.contains("nlp")) bar.style.width = "88%";
      if (bar.classList.contains("rag")) bar.style.width = "92%";
    }
  });
});

// Particle Background
tsParticles.load("particles-js", {
  particles: {
    number: { value: 60 },
    color: { value: "#00f7ff" },
    links: { enable: true, color: "#00f7ff" },
    move: { enable: true, speed: 1 }
  }
});
// Fetch GitHub Repositories
fetch("https://api.github.com/users/sparshi15/repos")
  .then(response => response.json())
  .then(data => {

    const container = document.getElementById("repo-container");

    // Sort by stars
    data.sort((a, b) => b.stargazers_count - a.stargazers_count);

    // Show only top 6 repos
    const topRepos = data.slice(0, 6);

    topRepos.forEach(repo => {
      const card = document.createElement("div");
      card.className = "repo-card";

      card.innerHTML = `
        <h3>${repo.name}</h3>
        <p>${repo.description || "No description available"}</p>
        <p>⭐ ${repo.stargazers_count} | 🛠 ${repo.language || "N/A"}</p>
        <a href="${repo.html_url}" target="_blank">View Repository →</a>
      `;

      container.appendChild(card);
    });

  })



