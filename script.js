
document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.querySelector(".menu-btn");
  const nav = document.querySelector(".nav-links");
  if(menuBtn && nav){
    menuBtn.addEventListener("click", () => nav.classList.toggle("open"));
    nav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => nav.classList.remove("open")));
  }

  document.querySelectorAll("[data-scroll]").forEach(btn => {
    btn.addEventListener("click", e => {
      const target = document.querySelector(btn.getAttribute("data-scroll"));
      if(target){ e.preventDefault(); target.scrollIntoView({behavior:"smooth"}); }
    });
  });

  const year = document.querySelector("#year");
  if(year) year.textContent = new Date().getFullYear();

  const form = document.querySelector("#contactForm");
  if(form){
    form.addEventListener("submit", e => {
      e.preventDefault();
      const msg = document.querySelector("#formMessage");
      if(msg) msg.textContent = "Thanks! Your enquiry has been recorded for this demo website.";
      form.reset();
    });
  }
});
