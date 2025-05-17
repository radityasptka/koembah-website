// src/App.jsx
import Header from "./components/Header";
import PriceList from "./components/PriceList";
import OrderForm from "./components/OrderForm";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white p-4 font-sans">
      <Header />
      <PriceList />
      <OrderForm />
      <footer className="text-center text-sm text-gray-500 mt-12">
        &copy; 2025 Koembah. All rights reserved.
      </footer>
    </div>
  );
}
