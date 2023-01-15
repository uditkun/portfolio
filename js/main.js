const imgChange = document.querySelector("#imgChange");
const navBar = document.querySelector(".navbar");
const footerDate = document.querySelector(".footerDate");
// const submitForm = document.querySelector(".contact-form");

imgChange.addEventListener("click", () => {
  imgChange.getAttribute("src") == "./assets/menubar.png"
    ? imgChange.setAttribute("src", "./assets/cross.png")
    : imgChange.setAttribute("src", "./assets/menubar.png");

  navBar.classList.toggle("navbar-active");
});

if (window.innerWidth < 800) {
  navBar.addEventListener("click", () => {
    navBar.classList.remove("navbar-active");
    imgChange.setAttribute("src", "./assets/menubar.png");
  });
}

footerDate.textContent = new Date().getFullYear();

// submitForm.addEventListener("submit", (e) => {
//   e.preventDefault();
//   fetch("https://formsubmit.co/ajax/331659b9fed7a45732885329aac0b123", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       Accept: "application/json",
//     },
//     body: JSON.stringify({
//       name: `${submitForm.name.value}`,
//       email: `${submitForm.email.value}`,
//       message: `${submitForm.message.value}`,
//     }),
//   })
//     .then((response) => response.json())
//     .then((data) => console.log(data))
//     .catch((error) => console.log(error));
// });
