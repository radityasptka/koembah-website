// src/components/OrderForm.jsx
import { useState } from "react";

export default function OrderForm() {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    phone: "",
    service: "",
    date: "",
    notes: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Pesanan berhasil dikirim!\n" + JSON.stringify(formData, null, 2));
  };

  return (
    <section className="mb-10">
      <h2 className="text-2xl font-semibold text-center mb-6">Formulir Pemesanan</h2>
      <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Nama Lengkap"
          onChange={handleChange}
          value={formData.name}
          className="w-full p-3 border rounded"
          required
        />
        <input
          type="text"
          name="address"
          placeholder="Alamat Lengkap"
          onChange={handleChange}
          value={formData.address}
          className="w-full p-3 border rounded"
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Nomor Telepon"
          onChange={handleChange}
          value={formData.phone}
          className="w-full p-3 border rounded"
          required
        />
        <select
          name="service"
          onChange={handleChange}
          value={formData.service}
          className="w-full p-3 border rounded"
          required
        >
          <option value="">Pilih Layanan</option>
          <option value="Easy Cleaning">Easy Cleaning</option>
          <option value="Medium Cleaning">Medium Cleaning</option>
          <option value="Hard Cleaning">Hard Cleaning</option>
        </select>
        <input
          type="date"
          name="date"
          onChange={handleChange}
          value={formData.date}
          className="w-full p-3 border rounded"
          required
        />
        <textarea
          name="notes"
          placeholder="Catatan tambahan (opsional)"
          onChange={handleChange}
          value={formData.notes}
          className="w-full p-3 border rounded"
          rows={3}
        ></textarea>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Pesan Sekarang
        </button>
      </form>
    </section>
  );
}
