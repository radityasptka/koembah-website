// src/components/PriceList.jsx
export default function PriceList() {
  const services = [
    {
      title: "Easy Cleaning",
      price: "Rp60.000",
      features: [
        "Menyapu dan mengepel lantai",
        "Membersihkan debu, kursi, rak",
        "Membuang sampah",
        "Membersihkan area dapur (tanpa mencuci peralatan masak)"
      ]
    },
    {
      title: "Medium Cleaning",
      price: "Rp80.000",
      features: [
        "Semua layanan paket easy cleaning",
        "Membersihkan kamar mandi",
        "Mencuci peralatan dapur",
        "Membersihkan kaca bagian dalam",
        "Merapikan tempat tidur"
      ]
    },
    {
      title: "Hard Cleaning",
      price: "Rp100.000",
      features: [
        "Semua layanan paket medium cleaning",
        "Membersihkan noda membandel",
        "Membersihkan area dapur secara mendalam",
        "Membersihkan jendela luar dan dalam",
        "Merapikan ruangan"
      ]
    },
  ];

  return (
    <section className="mb-10">
      <h2 className="text-2xl font-semibold text-center mb-6">Daftar Harga</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div key={index} className="bg-blue-50 p-4 rounded-xl shadow">
            <h3 className="text-xl font-bold text-blue-700 mb-1">{service.title}</h3>
            <p className="font-semibold text-gray-800 mb-2">{service.price}</p>
            <ul className="list-disc list-inside text-sm text-gray-600">
              {service.features.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
