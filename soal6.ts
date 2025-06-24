// Soal 6: Mengecek apakah sebuah angka adalah bilangan prima

function isPrime(num: number): boolean {
  if (num <= 1) return false; // Angka <= 1 bukan bilangan prima
  for (let i = 2; i <= Math.sqrt(num); i++) {
    // Cek apakah num habis dibagi i
    if (num % i === 0) return false;
  }
  return true; // Jika tidak habis dibagi bilangan lain, maka prima
}