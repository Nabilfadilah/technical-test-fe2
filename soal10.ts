// Soal 10: Hitung total kata dalam kalimat
// -----------------------------------------------
// Input: "ini adalah soal coding" => 4

function countWords(text: string): number {
  return text.trim().split(/\s+/).length; // hilangkan spasi di awal/akhir, lalu hitung kata berdasarkan spasi
}

console.log("Soal 10:", countWords("ini adalah soal coding")); // 4