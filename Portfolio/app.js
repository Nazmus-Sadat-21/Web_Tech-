// Mobile menu toggle
const toggle = document.getElementById("menu-toggle");
const menu = document.getElementById("nav-menus");

toggle.addEventListener("click", () => {
  menu.classList.toggle("active");
  toggle.classList.toggle("active"); 
});

// Close menu when clicking link
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.remove("active");
    toggle.classList.remove("active"); 
  });
});



const navbar = document.getElementById("navbars");
const t = document.querySelectorAll(".menu-toggle span");

if (navbar) {
  window.addEventListener("scroll", () => {
    console.log("Scroll:", window.scrollY);

    if (window.scrollY > 700) {
      navbar.classList.add("scrolled");
      t.forEach((line) => {
        line.style.background = "rgb(45, 2, 2)";
      });
      //menu.style.background = "rgba(245, 245, 245, 0.68)"
    } else {
      navbar.classList.remove("scrolled");
      t.forEach((line) => {
        line.style.background = "rgba(255, 255, 255, 0.56)";
      });
      // menu.style.background = "rgba(37, 1, 1, 0.484)"
       menu.style.background = "transparent"

    }
  });
}

// const words = [
//   "Web Developer",
//   "Programmer",
//   "JavaScript Learner",
//   "Student"
// ];

// let i = 0;
// let j = 0;
// let currentWord = "";
// let isDeleting = false;

// function type() {

//   const typing = document.getElementById("typing-text");

//   currentWord = words[i];

//   if(isDeleting){
//     typing.textContent = currentWord.substring(0, j--);
//   } else {
//     typing.textContent = currentWord.substring(0, j++);
//   }

//   if(!isDeleting && j === currentWord.length + 1){
//     isDeleting = true;
//     setTimeout(type,1000);
//     return;
//   }

//   if(isDeleting && j === 0){
//     isDeleting = false;
//     i = (i + 1) % words.length;
//   }

//   setTimeout(type,80);
// }

// type();

// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//   anchor.addEventListener('click', function(e){
//     e.preventDefault();
//     const target = document.querySelector(this.getAttribute('href'));
//     if(target){
//       window.scrollTo({
//         top: target.offsetTop - 70, // Adjust for fixed navbar height
//         behavior: 'smooth'
//       });
//     }
//   });
// });
