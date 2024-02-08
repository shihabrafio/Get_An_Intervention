document.addEventListener("DOMContentLoaded", function () {
  // Dynamic Year for footer
  const yearSpan = document.querySelector(".year");
  const currentYear = new Date().getFullYear();
  yearSpan.textContent = currentYear;

  // Border Top Remover Script for Forms

  const inputs = [
    {
      element: document.getElementById("first-name-input"),
      addClass: addRemoveClassNoBorderTop,
    },
    {
      element: document.getElementById("last-name-input"),
      addClass: addRemoveClassNoBorderTop,
    },
    {
      element: document.getElementById("business-email-input"),
      addClass: addRemoveClassNoBorderTop,
    },
    {
      element: document.getElementById("company-input"),
      addClass: addRemoveClassNoBorder,
    },
  ];

  inputs.forEach((input) => {
    input.element.addEventListener("input", function () {
      input.addClass(input.element);
    });
  });

  function addRemoveClassNoBorderTop(element) {
    if (element.value.trim() !== "") {
      element.classList.add("no-border-top");
    } else {
      element.classList.remove("no-border-top");
    }
  }

  function addRemoveClassNoBorder(element) {
    if (element.value.trim() !== "") {
      element.classList.add("no-border-top");
    } else {
      element.classList.remove("no-border-top");
    }
  }

  // Email Checking RegEx
  function validateEmail(email) {
    const emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(email);
  }

  // Form Validation
  function validateForm(event) {
    event.preventDefault();
    const fields = [
      {
        id: "first-name-input",
        popupId: "first-name-popup",
        message: "First Name can’t be empty. Please fill it in.",
      },
      {
        id: "last-name-input",
        popupId: "last-name-popup",
        message: "Last Name can’t be empty. Please fill it in.",
      },
      {
        id: "business-email-input",
        popupId: "business-email-popup",
        message: "Please enter a valid email address.",
        imageSrc: "images/uptriangle.png",
      },
      {
        id: "company-input",
        popupId: "company-popup",
        message: "Company can’t be empty. Please fill it in.",
      },
      {
        id: "country",
        popupId: "country-popup",
        message: "Please select a valid country.",
        imageSrc: "images/downtriangle.png",
      },
    ];

    for (let i = 0; i < fields.length; i++) {
      const field = document.getElementById(fields[i].id);
      const popup = document.getElementById(fields[i].popupId);

      if (!field) {
        console.error(`Element with ID ${fields[i].id} not found.`);
        return;
      }

      if (field.value === "") {
        popup.style.display = "block";
        return;
      } else if (
        fields[i].id === "business-email-input" &&
        !validateEmail(field.value)
      ) {
        popup.innerHTML = `<span>${fields[i].message}</span><img src="${fields[i].imageSrc}" alt="Error Image" class="abs emailTriangle">`;
        popup.style.cssText = "display: block; color: white;";
        return;
      } else if (fields[i].id === "country" && field.value === "Country") {
        popup.innerHTML = `<span>${fields[i].message}</span><img src="${fields[i].imageSrc}" alt="Error Image" class="abs countryTriangle">`;
        popup.style.cssText = "display: block; color: white;";
        return;
      } else {
        popup.style.display = "none";
      }
    }

    document.getElementById("contactUsForm").submit();
  }

  const submitButton = document.querySelector(".submit-button");
  submitButton.addEventListener("click", validateForm);

  window.addEventListener("pageshow", function (event) {
    if (
      event.persisted ||
      (window.performance && window.performance.navigation.type === 2)
    ) {
      window.location.reload();
    }
  });

  // Carousel Slides  + Carousel dots Script

  let currentSlide = 0;
  const slides = document.querySelectorAll(".slide");

  function showSlide(slideIndex) {
    slides[currentSlide].classList.remove("active");
    currentSlide = (slideIndex + slides.length) % slides.length;
    slides[currentSlide].classList.add("active");
  }

  function changeSlide(n) {
    showSlide(currentSlide + n);
  }

  function autoChangeSlide() {
    setInterval(() => {
      changeSlide(1);
    }, 4000);
  }

  autoChangeSlide();

  const prevButton = document.querySelector(".prev");
  const nextButton = document.querySelector(".next");

  prevButton.addEventListener("click", () => {
    changeSlide(-1);
  });

  nextButton.addEventListener("click", () => {
    changeSlide(1);
  });

  const dots = document.querySelectorAll(".carousel-dots .dot");
  currentDot(0);

  function currentDot(slideIndex) {
    dots.forEach((dot) => dot.classList.remove("active"));
    slides.forEach((slide) => slide.classList.remove("active"));
    dots[slideIndex].classList.add("active");
    slides[slideIndex].classList.add("active");
  }

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      currentDot(index);
    });
  });

  function changeSlide(n) {
    let currentSlideIndex = 0;
    for (let i = 0; i < slides.length; i++) {
      if (slides[i].classList.contains("active")) {
        currentSlideIndex = i;
        break;
      }
    }
    slides[currentSlideIndex].classList.remove("active");
    let newSlideIndex = (currentSlideIndex + n + slides.length) % slides.length;
    slides[newSlideIndex].classList.add("active");
    currentDot(newSlideIndex);
  }

  // Popup Video
  document.getElementById("playButton").addEventListener("click", function () {
    document.getElementById("videoPopup").style.display = "block";
    document.getElementById("videoPlayer").play();
  });

  document.getElementById("closeButton").addEventListener("click", function () {
    document.getElementById("videoPopup").style.display = "none";
    document.getElementById("videoPlayer").pause();
  });
});

// Mobile Navbar
function Navbar() {
  var x = document.getElementById("navigation");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
