// Soal 21: SPA Case – Komponen React ToDo App
// Buat komponen React TypeScript yang dapat:
// - Menambah item
// - Menampilkan daftar
// - Menghapus item dari list

import React, {useState} from "react";

// definisi tipe data untuk item todo
interface TodoItem {
  id: number;
  task: string;
}

export const TodoApp: React.FC = () => {
  const [todos, setTodos] = useState<TodoItem[]>([]); // menyimpan daftar todo
  const [input, setInput] = useState(""); // menyimpan input teks dari user

  // fungsi untuk menambahkan todo baru
  const addTodo = () => {
    if (input.trim() === "") return; // jika input kosong, tidak lakukan apa-apa
    setTodos([...todos, {id: Date.now(), task: input}]); // tambah todo baru dengan ID unik
    setInput(""); // reset input setelah ditambahkan
  };

  // fungsi untuk menghapus todo berdasarkan ID
  const removeTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id)); // filter todo selain yang ingin dihapus
  };

  return (
    <div>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={addTodo}>Tambah</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.task}{" "}
            <button onClick={() => removeTodo(todo.id)}>Hapus</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

// bisa pake ini
// export default TodoApp;

// Komponen ini membuat fitur tambah/hapus
