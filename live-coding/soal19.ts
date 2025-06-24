// Soal 19: Live Coding Interview – Debounce function

function debounce<T extends (...args: any[]) => void>(fn: T, delay: number): (...args: Parameters<T>) => void {
  let timeoutId: ReturnType<typeof setTimeout>;
  return (...args: Parameters<T>) => {
    clearTimeout(timeoutId); // hentikan timeout sebelumnya
    timeoutId = setTimeout(() => fn(...args), delay); // jalankan fungsi setelah jeda
  };
}

const logSearch = debounce((value: string) => console.log("Search:", value), 500);
logSearch("a");
logSearch("ab");
logSearch("abc");