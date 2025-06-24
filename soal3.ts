// Soal 3: Hitung jumlah huruf vokal dalam string
// -----------------------------------------------
// Input: "frontend" => 2

function countVowels(str: string): number {
  // Gunakan regex untuk mencari semua huruf vokal dan hitung jumlahnya
  return (str.match(/[aeiou]/gi) || []).length;
  // str.match(...) mengembalikan array huruf vokal, atau null jika tidak ditemukan → gunakan || [] agar tidak error
}

console.log("Soal 3:", countVowels("frontend")); // Output: 2 (huruf 'o' dan 'e')