var typed = new Typed(".text", {
    strings: ["Full Stack Developer", "UI/UX Designer"] ,
    typeSpeed:60,
    backSpeed:60,
    backDelay:200,
    loop:true 
})


console.log("About section loaded");


function handleClick(cardTitle) {
  alert(`You clicked on the "${cardTitle}" card.`);
}


document.addEventListener("DOMContentLoaded", () => {
  const starContainers = document.querySelectorAll('.test-stars');
  starContainers.forEach(container => {
    const count = parseInt(container.getAttribute('data-stars'), 10);
    for (let i = 0; i < count; i++) {
      const star = document.createElement('i');
      star.classList.add('fas', 'fa-star');
      star.style.color
    }
})
});



document.addEventListener("DOMContentLoaded", function () {
  const currentYear = new Date().getFullYear();
  document.getElementById("current-year-footer").textContent = currentYear;
});




  const form = document.getElementById('connect-form');
const successBox = document.getElementById('successBox');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  successBox.textContent = "✅ Form submitted successfully!";
  successBox.classList.add('show');

  form.reset();

  setTimeout(() => {
    successBox.classList.remove('show');
  }, 3000);
});
