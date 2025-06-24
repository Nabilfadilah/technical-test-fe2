// Soal 2: Cek apakah string merupakan palindrom
// -----------------------------------------------
// Input: "katak" => true, "mobil" => false

function isPalindrome(str: string): boolean {
  // Balikkan string dan bandingkan dengan string aslinya
  const reversed = str.split('').reverse().join(''); // Ubah string jadi array, balikkan, lalu gabungkan lagi
  return str === reversed; // Cek apakah string asli sama dengan string yang dibalik
}

console.log("Soal 2:", isPalindrome("katak")); // true (palindrom)
console.log("Soal 2:", isPalindrome("mobil")); // false (bukan palindrom)
