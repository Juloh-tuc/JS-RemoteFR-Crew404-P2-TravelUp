document.querySelector(".navbar").addEventListener("mouseenter", function () {
  this.classList.add("expanded");
  this.classList.remove("closed");
});

document.querySelector(".navbar").addEventListener("mouseleave", function () {
  this.classList.add("closed");
  this.classList.remove("expanded");
});
