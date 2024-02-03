// Function to validate the input fields for each step
function validateStep(step) {
  const fields = document.querySelectorAll(`.page:nth-child(${step}) input, .page:nth-child(${step}) select`);

  // Check if all fields are filled
  for (const field of fields) {
    if (field.value.trim() === '') {
      alert('Please fill in all fields');
      return false;
    }
  }

  // Additional validation for specific steps
  if (step === 2) {
    const phoneNumber = document.querySelector('.page:nth-child(2) input[type="number"]');
    if (phoneNumber.value.length !== 10) {
      alert('Phone number must be 10 digits');
      return false;
    }

    const email = document.querySelector('.page:nth-child(2) input[type="text"]');
    // Basic email validation using a regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value.trim())) {
      alert('Please enter a valid email address');
      return false;
    }
  }

  // Additional validation for the date field
  if (step === 3) {
    const birthdate = document.getElementById('birthdate');
    const selectedDate = new Date(birthdate.value);
    const currentDate = new Date();

    if (selectedDate >= currentDate) {
      alert('Please enter a valid birthdate');
      return false;
    }
  }

  return true;
}

// Update event listeners to include validation
const nextBtnFirst = document.querySelector(".firstNext");
const nextBtnSec = document.querySelector(".next-1");
const nextBtnThird = document.querySelector(".next-2");
const submitBtn = document.querySelector(".submit");
const prevBtnSec = document.querySelector(".prev-1");
const prevBtnThird = document.querySelector(".prev-2");
const prevBtnFourth = document.querySelector(".prev-3");
const slidePage = document.querySelector(".slide-page");
const progressCheck = document.querySelectorAll(".step .check");
const progressText = document.querySelectorAll(".step p");
const bullet = document.querySelectorAll(".step .bullet");
let current = 1;

nextBtnFirst.addEventListener("click", function(event) {
  event.preventDefault();
  if (validateStep(1)) {
    slidePage.style.marginLeft = "-25%";
    bullet[current - 1].classList.add("active");
    progressCheck[current - 1].classList.add("active");
    progressText[current - 1].classList.add("active");
    current += 1;
  }
});

nextBtnSec.addEventListener("click", function(event) {
  event.preventDefault();
  if (validateStep(2)) {
    slidePage.style.marginLeft = "-50%";
    bullet[current - 1].classList.add("active");
    progressCheck[current - 1].classList.add("active");
    progressText[current - 1].classList.add("active");
    current += 1;
  }
});

nextBtnThird.addEventListener("click", function(event) {
  event.preventDefault();
  if (validateStep(3)) {
    slidePage.style.marginLeft = "-75%";
    bullet[current - 1].classList.add("active");
    progressCheck[current - 1].classList.add("active");
    progressText[current - 1].classList.add("active");
    current += 1;
  }
});

submitBtn.addEventListener("click", function() {
  if (validateStep(4)) {
    bullet[current - 1].classList.add("active");
    progressCheck[current - 1].classList.add("active");
    progressText[current - 1].classList.add("active");
    current += 1;
    
    setTimeout(function() {
      alert("Your Form Successfully Signed up");
      window.location.hash = ''; // Remove the hash from the URL
    }, 800);
  }
});

prevBtnSec.addEventListener("click", function(event) {
  event.preventDefault();
  slidePage.style.marginLeft = "0%";
  bullet[current - 2].classList.remove("active");
  progressCheck[current - 2].classList.remove("active");
  progressText[current - 2].classList.remove("active");
  current -= 1;
});

prevBtnThird.addEventListener("click", function(event) {
  event.preventDefault();
  if (validateStep(2)) {
    slidePage.style.marginLeft = "-25%";
    bullet[current - 2].classList.remove("active");
    progressCheck[current - 2].classList.remove("active");
    progressText[current - 2].classList.remove("active");
    current -= 1;
  }
});

prevBtnFourth.addEventListener("click", function(event) {
  event.preventDefault();
  if (validateStep(3)) {
    slidePage.style.marginLeft = "-50%";
    bullet[current - 2].classList.remove("active");
    progressCheck[current - 2].classList.remove("active");
    progressText[current - 2].classList.remove("active");
    current -= 1;
  }
});
