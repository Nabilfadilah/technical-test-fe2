// Soal 9: Ubah string menjadi format kapital setiap kata
// -----------------------------------------------
// Input: "halo dunia" => "Halo Dunia"

function capitalizeWords(sentence: string): string {
  return sentence
    .split(" ") // pisahkan kata
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()) // kapital huruf pertama
    .join(" "); // gabung kembali jadi kalimat
}

console.log("Soal 9:", capitalizeWords("halo dunia")); // Halo Dunia
