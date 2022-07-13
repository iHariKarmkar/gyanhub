const filterButtonsElement = document.querySelectorAll(".filter-btn");

filterButtonsElement.forEach((btn) =>
  btn.addEventListener("click", () => {
    filterButtonsElement.forEach((button) => button.classList.remove("active"));
    btn.classList.add("active");

    let filterValue = btn.dataset.filter;
    $(".grid").isotope({ filter: filterValue });
  })
);

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

$(".grid").isotope({
  // options
  itemSelector: ".grid-item",
  layoutMode: "fitRows",
  transitionDuration: ".6s",
});

const menuBtn = document.getElementById("menu-btn");
const navBar = document.querySelector(".nav-items");

menuBtn.addEventListener("click", () => {
  navBar.classList.toggle("active");
});

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
