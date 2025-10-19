const glow = document.querySelector(".glow");

document.body.addEventListener("mousemove", (e) => {
  glow.style.left = `${e.pageX}px`;
  glow.style.top = `${e.pageY}px`;
  glow.style.opacity = 1;
});

let texts = ["Student", "Backend Developer", "Cyber Security Enthusiast"];
let typewriterIndex = 0;
let charIndex = 0;
let curr = "";
let cursor = document.getElementById("cursor");
let isDeleting = false;

setInterval(() => {
  cursor = cursor === "|" ? "" : "|";
  document.getElementById("cursor").innerHTML = cursor;
}, 500);

function typeWriter() {
  const typewrite = document.getElementById("typewrite");

  if (typewriterIndex >= texts.length) {
    typewriterIndex = 0;
  }

  curr = texts[typewriterIndex];

  if (!isDeleting) {
    typewrite.textContent = curr.substring(0, charIndex + 1);
    charIndex++;

    if (charIndex === curr.length) {
      isDeleting = true;
      setTimeout(typeWriter, 2000);
      return;
    }
  } else {
    typewrite.textContent = curr.substring(0, charIndex - 1);
    charIndex--;

    if (charIndex === 0) {
      isDeleting = false;
      typewriterIndex++;
    }
  }

  setTimeout(typeWriter, isDeleting ? 50 : 100);
}

typeWriter();

