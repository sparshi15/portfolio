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

// Modal
function openModal(title, desc, link) {
  document.getElementById("modalTitle").innerText = title;
  document.getElementById("modalDesc").innerText = desc;
  document.getElementById("modalLink").href = link;
  document.getElementById("projectModal").style.display = "flex";
}

function closeModal() {
  document.getElementById("projectModal").style.display = "none";
}

// EmailJS Setup
(function(){
  emailjs.init("YOUR_PUBLIC_KEY");
})();

document.getElementById("contact-form").addEventListener("submit", function(e) {
  e.preventDefault();
  emailjs.sendForm("YOUR_SERVICE_ID","YOUR_TEMPLATE_ID",this)
    .then(() => alert("Message Sent Successfully!"))
    .catch(() => alert("Failed to send message."));
});
