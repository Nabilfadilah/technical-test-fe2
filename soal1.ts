// ✅ Soal & Jawaban Logika TypeScript untuk Tes Frontend Developer

// Jalankan perintah tsc main.ts untuk mentranspilasi file TypeScript menjadi file JavaScript (main.js). 

// Soal 1: Jumlahkan semua bilangan genap dalam array
// -----------------------------------------------
// Input: [1, 2, 3, 4, 5, 6]
// Output: 12 (2+4+6)

function sumEvenNumbers(arr: number[]): number {
  // Filter hanya angka genap dari array, lalu jumlahkan semuanya dengan reduce.
  return arr
    .filter(num => num % 2 === 0) // Ambil hanya angka yang habis dibagi 2 (genap)
    .reduce((acc, curr) => acc + curr, 0); // Jumlahkan semua angka genap yang telah difilter
}

console.log("Soal 1:", sumEvenNumbers([1, 2, 3, 4, 5, 6])); // Output: 12 (karena 2+4+6)

// agar menjalankan file TypeScript tanpa perlu ditranspilasi terlebih dahulu, 
// bisa menggunakan ts-node. Pertama, instal ts-node secara global (npm install -g ts-node), 
// lalu jalankan dengan perintah ts-node main.ts