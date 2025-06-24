// Soal 13: Rekursif – Hitung faktorial

function factorial(n: number): number {
  if (n <= 1) return 1; // basis rekursi
  return n * factorial(n - 1); // rekursif
}

console.log("Soal 13:", factorial(5)); // 120