// Soal 8: Hitung jumlah karakter yang sama di dua string
// -----------------------------------------------
// Input: "test", "teks" => t:2, e:1, s:1 => total 3

function countCommonChars(a: string, b: string): number {
  const mapA: Record<string, number> = {}; // menyimpan frekuensi karakter di a
  const mapB: Record<string, number> = {}; // menyimpan frekuensi karakter di b

  for (const ch of a) mapA[ch] = (mapA[ch] || 0) + 1; // hitung frekuensi karakter
  for (const ch of b) mapB[ch] = (mapB[ch] || 0) + 1;

  let count = 0;
  for (const ch in mapA) {
    if (mapB[ch]) count += Math.min(mapA[ch], mapB[ch]); // tambah jumlah minimum dari karakter yang sama
  }

  return count;
}

console.log("Soal 8:", countCommonChars("test", "teks")); // 3
