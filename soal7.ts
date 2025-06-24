// Soal 7: Buat array berisi angka ganjil dari 1 sampai n
// -----------------------------------------------

function getOddNumbers(n: number): number[] {
  const result: number[] = []; // array untuk menyimpan angka ganjil
  for (let i = 1; i <= n; i += 2) { // mulai dari 1, lompat 2 angka setiap iterasi
    result.push(i); // tambahkan angka ganjil ke array
  }
  return result;
}

console.log("Soal 7:", getOddNumbers(10)); // [1, 3, 5, 7, 9]