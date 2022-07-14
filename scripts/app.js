// Filter grid items in course section

const filterButtonsElement = document.querySelectorAll(".filter-btn");

filterButtonsElement.forEach((btn) =>
  btn.addEventListener("click", () => {
    filterButtonsElement.forEach((button) => button.classList.remove("active"));
    btn.classList.add("active");

    let filterValue = btn.dataset.filter;
    $(".grid").isotope({ filter: filterValue });
  })
);

$(".grid").isotope({
  // options
  itemSelector: ".grid-item",
  layoutMode: "fitRows",
  transitionDuration: ".6s",
});

// Toggle between login and signup form

const loginButtonSwitchElement = document.querySelector(".login-account");
const signupButtonSwitchElement = document.querySelector(".create-account");
const signupForm = document.querySelector(".signup-form");
const loginForm = document.querySelector(".login-form");

signupButtonSwitchElement.addEventListener("click", () => {
  loginForm.style.display = "none";
  signupForm.style.display = "block";
});

loginButtonSwitchElement.addEventListener("click", () => {
  signupForm.style.display = "none";
  loginForm.style.display = "block";
});

// Nav items toggle by hamburger icon

const menuBtn = document.getElementById("menu-btn");
const navBar = document.querySelector(".nav-items");
const navItems = document.querySelectorAll('.menu-items');

navItems.forEach(navItem => navItem.addEventListener('click', () => {
  navBar.classList.remove('active');
}))

menuBtn.addEventListener("click", () => {
  navBar.classList.toggle("active");
});

// Send email functionality

function sendEmail() {
  Email.send({
    Host: "smtp.gmail.com",
    Username: "karmkarhari6@gmail.com",
    Password: "@143Honey",
    To: "harikarmkar007@gmail.com",
    From: document.getElementById("contactEmail").value,
    Subject: "New Contact Enquiry",
    Body:
      "Name: " +
      document.getElementById("contactName").value +
      "<br> Message: " +
      document.getElementById("contactMessage"),
  }).then((message) => alert("Message sent successfully!"));
}
