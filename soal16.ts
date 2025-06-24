// Soal 16: Toggle dark/light mode UI sederhana dengan DOM

function toggleTheme() {
  const body = document.body;
  body.classList.toggle("dark-mode"); // tambah/hapus class css
}

document.getElementById("themeBtn")?.addEventListener("click", toggleTheme);