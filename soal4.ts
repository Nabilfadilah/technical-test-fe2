// Soal 4: Balik urutan kata
// -----------------------------------------------
// Input: "saya frontend developer" => "developer frontend saya"

function reverseWords(sentence: string): string {
  // Pisahkan kalimat menjadi array kata, balik urutannya, lalu gabungkan kembali
  return sentence.split(' ').reverse().join(' ');
  // split(' ') → pisahkan kalimat berdasarkan spasi menjadi array
  // reverse() → balik urutan kata
  // join(' ') → gabungkan kembali menjadi string
}

console.log("Soal 4:", reverseWords("saya frontend developer")); // Output: "developer frontend saya"
