// Soal 18: Hitung total belanja dari array produk (name & price)

interface Product {
  name: string;
  price: number;
}

function totalPrice(items: Product[]): number {
  return items.reduce((sum, item) => sum + item.price, 0); // jumlahkan harga product
}

console.log("Soal 18:", totalPrice([
  { name: "Buku", price: 20000 },
  { name: "Pulpen", price: 5000 },
  { name: "Pensil", price: 3000 },
])); // 28000