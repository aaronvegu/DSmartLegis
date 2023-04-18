/*!
* Start Bootstrap - Modern Business v5.0.7 (https://startbootstrap.com/template-overviews/modern-business)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-modern-business/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

/**
 * CONTRACT FUNCTIONALITY
 * -- CONTRATO INDIVIDUAL DE TRABAJO --
 */

/*
const form = document.getElementById("form");
const fieldsets = form.getElementsByTagName("fieldset");
let currentFieldset = 0;

function prev() {
  if (currentFieldset > 0) {
    currentFieldset--;
    fieldsets[currentFieldset + 1].classList.remove("active");
    fieldsets[currentFieldset].classList.add("active");
  }
}

function next() {
  if (currentFieldset < fieldsets.length - 1) {
    currentFieldset++;
    fieldsets[currentFieldset - 1].classList.remove("active");
    fieldsets[currentFieldset].classList.add("active");
  }
}

fieldsets[currentFieldset].classList.add("active");
const buttons = form.getElementsByTagName("button");
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function (event) {
    event.preventDefault();
    if (event.target.textContent === "Siguiente") {
      next();
    } else if (event.target.textContent === "Regresar") {
      prev();
    }
  });
}
*/

// hide all fieldsets except the first one
const fieldsets = document.querySelectorAll('fieldset');
for (let i = 1; i < fieldsets.length; i++) {
  fieldsets[i].style.display = 'none';
}

let current = 0; // keep track of the current fieldset

function next() {
  if (current < fieldsets.length - 1) {
    // hide the current fieldset
    fieldsets[current].style.display = 'none';
    // show the next fieldset
    current++;
    fieldsets[current].style.display = 'block';
  }
}

function prev() {
  if (current > 0) {
    // hide the current fieldset
    fieldsets[current].style.display = 'none';
    // show the previous fieldset
    current--;
    fieldsets[current].style.display = 'block';
  }
}

const form = document.querySelector('#form');

// display a review of the form data before submission
form.addEventListener('submit', function(e) {
  e.preventDefault(); // prevent form submission
  // const review = document.createElement('div');
  // review.id = "review";
  // review.innerHTML = '<h2>Review</h2>';
  fieldsets[current].style.display = 'none';
  reviewForm();
  // const formData = new FormData(form);
  // for (const [key, value] of formData.entries()) {
  //   const label = form.querySelector(`[for="${key}"]`).textContent;
  //   const fieldReview = document.createElement('p');
  //   fieldReview.innerHTML = `<strong>${label}:</strong> ${value}`;
  //   review.appendChild(fieldReview);
  // }
  // form.parentNode.insertBefore(review, form.nextSibling);
});


function getFormData() {
  const form = document.getElementById("form");
  const formData = {};

  for (let i = 0; i < form.elements.length; i++) {
    const element = form.elements[i];
    if (element.tagName === "FIELDSET") continue;
    formData[element.name] = element.value;
  }

  return formData;
}

function reviewForm() {
  const formData = getFormData();

  const reviewDiv = document.getElementById("review");
  reviewDiv.style.display = "block";
  reviewDiv.innerHTML = "";

  for (const key in formData) {
    const value = formData[key];

    const p = document.createElement("p");
    const label = document.createElement("strong");
    label.textContent = `${key}: `;
    p.appendChild(label);
    p.append(value);

    reviewDiv.appendChild(p);
  }
}
