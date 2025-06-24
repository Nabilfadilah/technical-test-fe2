// Soal 20: Live Coding Interview – Format angka ke Rupiah

// mengubah angka menjadi format mata uang Rupiah
function formatToRupiah(value: number): string {
  return new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR" }).format(value);
}

console.log("Soal 20:", formatToRupiah(1000000)); // Rp1.000.000,00