// Soal 23: SPA CRUD Mini – Tambah, Tampilkan, Edit, dan Hapus data kontak

import {useState} from "react";

// tipe data kontak
interface Contact {
  id: number;
  name: string;
  phone: string;
}

export const ContactManager: React.FC = () => {
  const [contacts, setContacts] = useState<Contact[]>([]); // daftar kontak
  const [name, setName] = useState(""); // input nama
  const [phone, setPhone] = useState(""); // input telepon
  const [editingId, setEditingId] = useState<number | null>(null); // ID kontak yang sedang diedit (jika ada)

  // fungsi tambah atau update kontak
  const handleSubmit = () => {
    if (!name || !phone) return; // jika salah satu kosong, tidak lanjut

    if (editingId !== null) {
      // jika sedang dalam mode edit
      setContacts(
        contacts.map((c) => (c.id === editingId ? {...c, name, phone} : c))
      );
      setEditingId(null); // keluar dari mode edit
    } else {
      // tambahkan kontak baru
      setContacts([...contacts, {id: Date.now(), name, phone}]);
    }

    // reset input
    setName("");
    setPhone("");
  };

  // fungsi untuk mengedit kontak (isi kembali form dengan data lama)
  const handleEdit = (id: number) => {
    const contact = contacts.find((c) => c.id === id);
    if (contact) {
      setEditingId(id);
      setName(contact.name);
      setPhone(contact.phone);
    }
  };

  // fungsi untuk menghapus kontak
  const handleDelete = (id: number) => {
    setContacts(contacts.filter((c) => c.id !== id));
  };

  return (
    <div>
      <h2>Kontak</h2>

      {/* form input nama dan no telp */}
      <input
        placeholder="Nama"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        placeholder="No. Telp"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />

      {/* tombol untuk tambah/update */}
      <button onClick={handleSubmit}>
        {editingId !== null ? "Update" : "Tambah"}
      </button>

      {/* daftar kontak */}
      <ul>
        {contacts.map((c) => (
          <li key={c.id}>
            {c.name} - {c.phone}
            <button onClick={() => handleEdit(c.id)}>Edit</button>
            <button onClick={() => handleDelete(c.id)}>Hapus</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Komponen ini memungkinkan menambah, mengedit, dan menghapus data kontak (dengan nama dan nomor telepon)
