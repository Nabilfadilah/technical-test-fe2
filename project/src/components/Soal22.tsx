// Soal 22: SPA Case – Table dengan search, sort, dan filter sederhana
// Buat komponen React table yang bisa:
// - Cari berdasarkan nama
// - Sortir berdasarkan umur
// - Filter berdasarkan role

import {useState} from "react";

// tipe data user
interface User {
  id: number;
  name: string;
  age: number;
  role: "admin" | "user";
}

const UserTable = () => {
  const [search, setSearch] = useState(""); // state pencarian nama
  const [sortAsc, setSortAsc] = useState(true); // urutan naik/turun
  const [filterRole, setFilterRole] = useState<string>(""); // filter berdasarkan role

  // data user statis
  const users: User[] = [
    {id: 1, name: "Andi", age: 28, role: "user"},
    {id: 2, name: "Budi", age: 22, role: "admin"},
    {id: 3, name: "Citra", age: 30, role: "user"},
  ];

  // proses filter dan sort user
  const filteredUsers = users
    .filter((u) => u.name.toLowerCase().includes(search.toLowerCase())) // filter nama
    .filter((u) => (filterRole ? u.role === filterRole : true)) // filter role (jika dipilih)
    .sort((a, b) => (sortAsc ? a.age - b.age : b.age - a.age)); // sort berdasarkan umur

  return (
    <div>
      {/* input pencarian */}
      <input
        placeholder="Cari nama"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* dropdown filter role */}
      <select onChange={(e) => setFilterRole(e.target.value)} defaultValue="">
        <option value="">Semua Role</option>
        <option value="admin">Admin</option>
        <option value="user">User</option>
      </select>

      {/* table user */}
      <button onClick={() => setSortAsc(!sortAsc)}>
        Sort Umur ({sortAsc ? "⬆️" : "⬇️"})
      </button>

      <table>
        <thead>
          <tr>
            <th>Nama</th>
            <th>Umur</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.age}</td>
              <td>{user.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;

// komponen ini menampilkan daftar user dengan fitur pencarian, filter berdasarkan role, dan sort berdasarkan umur
