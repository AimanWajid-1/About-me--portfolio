// ===== Loader logic =====
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  if(loader) loader.classList.add("hidden");

  // Give browser a tiny delay to ensure DOM is rendered
  setTimeout(() => {
    scrollAnimate();
  }, 50);
});


// ===== Dropdown menu =====
const btn = document.getElementById("menu-toggle");
const menu = document.getElementById("dropdown-menu");

if (btn && menu) {
  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    menu.classList.toggle("show");
    btn.classList.toggle("open");
  });

  document.addEventListener("click", (e) => {
    if (!menu.contains(e.target) && !btn.contains(e.target)) {
      menu.classList.remove("show");
      btn.classList.remove("open");
    }
  });

  menu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.remove("show");
      btn.classList.remove("open");
    });
  });
}


// ===== Rotating text =====
const textEl = document.getElementById("text");
const messages = ["How are you?", "Do you want to know more about me?"];
let idx = 0;

function rotateText() {
  if (!textEl) return;
  textEl.classList.remove("show");
  setTimeout(() => {
    idx = (idx + 1) % messages.length;
    textEl.textContent = messages[idx];
    textEl.classList.add("show");
  }, 500);
}

if (textEl) setTimeout(() => textEl.classList.add("show"), 500);
setInterval(rotateText, 3000);


// ===== Scroll-triggered animations =====
function scrollAnimate() {
  const sections = document.querySelectorAll('.scroll-slide');
  const windowHeight = window.innerHeight;

  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;

    if (sectionTop < windowHeight - 100) {
      section.classList.add('visible');
    }
  });
}

// Run on scroll
window.addEventListener('scroll', scrollAnimate);

// Run once after DOM content loaded (helps if some sections are already visible)
document.addEventListener('DOMContentLoaded', () => {
  setTimeout(scrollAnimate, 50);
});

 const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.3 });

    document.querySelectorAll('.container-projects, .image-box, .text-box')
      .forEach(el => observer.observe(el));
      const cursor = document.querySelector('.custom-cursor');

document.addEventListener('mousemove', e => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
});

// Smooth hover growth for clickable elements
document.querySelectorAll('a, button').forEach(el => {
  el.addEventListener('mouseenter', () => {
    cursor.style.transform = 'translate(-50%, -50%) scale(1.6)';
    cursor.style.background = '#00ffff22';
  });
  el.addEventListener('mouseleave', () => {
    cursor.style.transform = 'translate(-50%, -50%) scale(1)';
    cursor.style.background = 'transparent';
  });
});



