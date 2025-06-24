// Soal 14: Hitung frekuensi kata dalam kalimat

function wordFrequency(sentence: string): Record<string, number> {
  const words = sentence.toLowerCase().split(/\s+/); // pecah kalimat jadi kata, lowercase semua
  const freq: Record<string, number> = {};
  for (const word of words) {
    freq[word] = (freq[word] || 0) + 1; // tambahkan jumlah kemunculan kata
  }
  return freq;
}

console.log("Soal 14:", wordFrequency("halo halo dunia halo"));