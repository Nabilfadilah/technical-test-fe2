// Soal 11: Custom sorting – Urutkan array angka ganjil lebih dulu, lalu genap (asc)

function customOddEvenSort(arr: number[]): number[] {
  return arr.sort((a, b) => {
    const isAOdd = a % 2 !== 0; // apakah a ganjil
    const isBOdd = b % 2 !== 0; // apakah b ganjil
    if (isAOdd && !isBOdd) return -1; // a ganjil, b genap
    if (!isAOdd && isBOdd) return 1; // a genap, b ganjil
    return a - b; // sama-sama ganjil/genap, urut biasa
  });
}

console.log("Soal 11:", customOddEvenSort([4, 1, 3, 2, 5])); // [1, 3, 5, 2, 4]