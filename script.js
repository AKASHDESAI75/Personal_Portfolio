
document.addEventListener("DOMContentLoaded", () => {
  lucide.createIcons();

  const printBtn = document.getElementById("printBtn");
  printBtn.addEventListener("click", () => window.print());
});
