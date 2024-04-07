document.querySelectorAll(".btn").forEach(function (button) {
  button.addEventListener("click", function () {
    if (button.innerHTML === "LEARN MORE") {
      alert("Learn More");
    } else {
      alert("Get Free Consultation");
    }
  });
});
