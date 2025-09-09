import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Product from "../pages/Product";
import BlogList from "../pages/BlogList";
import Testimonial from "../pages/LoginPage";
import DashBoard from "../pages/DashBoard";
import Contact from "../pages/Contact";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function AppRouter() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product />} />
        <Route path="/blog" element={<BlogList />} />
        <Route path="/testimonial" element={<Testimonial />} />
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}
