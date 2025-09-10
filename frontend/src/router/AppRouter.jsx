import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// ✅ Public Pages
import Home from "@pages/Home";
import About from "@pages/About";
import Product from "@pages/Product";
import Offers from "@pages/Offers";
import LoginPage from "@pages/LoginPage";
import Contact from "@pages/Contact";

// ✅ Components
import Header from "@components/Header";
import Footer from "@components/Footer";

// ✅ Dashboard Pages
import DashBoard from "@dashboard/DashBoard";

export default function AppRouter() {
  return (
    <Router>
      <Header />
      <Routes>
        {/* ✅ Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/contact" element={<Contact />} />

        {/* ✅ Dashboard Routes */}
        <Route path="/dashboard" element={<DashBoard />} />
      </Routes>
      <Footer />
    </Router>
  );
}
