// Soal 17: Simulasi form input nama, tampilkan kembali dengan DOM

function handleNameInput() {
  const nameInput = document.getElementById("name") as HTMLInputElement; // ambil inputan
  const output = document.getElementById("output")!;
  output.textContent = `Halo, ${nameInput.value}!`; // tampilan output
}

document.getElementById("submitName")?.addEventListener("click", handleNameInput);
