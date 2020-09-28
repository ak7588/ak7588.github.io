// Trigger alert when the preference is selected

const btn = document.querySelector(".btn");

btn.addEventListener('click', () => {
  alert("Success! Your preference has been selected. Please check your email for further instrictions.");
  console.log(btn.classList);
});
