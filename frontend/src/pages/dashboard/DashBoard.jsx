import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import "@assets/css/dashboard.css"; // ✅ Using alias instead of absolute path

function DashboardApp() {
  const [activePage, setActivePage] = useState("dashboard");
  const navigate = useNavigate();

  // ✅ Offers state
  const [offers, setOffers] = useState([
    { title: "50% off on Shoes", description: "Get half price on all shoes" },
    { title: "Buy 1 Get 1 Free", description: "Available on T-Shirts only" },
  ]);

  // ✅ Logout handler
  const handleLogout = () => {
    alert("You have been logged out!");
    navigate("/login"); // ✅ redirect to login page
  };

  // ✅ Add Offer
  const handleAddOffer = (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const description = e.target.description.value;

    if (title.trim() && description.trim()) {
      setOffers([...offers, { title, description }]);
      e.target.reset();
    }
  };

  // ✅ Send Offers via SMS or WhatsApp
  const handleSendOffers = (method) => {
    const message = offers.map((o) => `${o.title}: ${o.description}`).join("\n");

    if (method === "sms") {
      alert("📩 Sending SMS to all customers:\n\n" + message);
    }

    if (method === "whatsapp") {
      const encodedMessage = encodeURIComponent(message);
      const waLink = `https://wa.me/?text=${encodedMessage}`;
      window.open(waLink, "_blank");
    }
  };

  return (
    <div className="dashboard-wrapper">
      {/* Sidebar */}
      <div className="sidebar">
        <h2>Store Admin</h2>
        <ul>
          <li><a href="#!" onClick={() => setActivePage("dashboard")}>🏠 Dashboard</a></li>
          <li><a href="#!" onClick={() => setActivePage("offers")}>🎁 Offers</a></li>
          <li><a href="#!" onClick={() => setActivePage("customers")}>👥 Customers</a></li>
          <li><a href="#!" onClick={() => setActivePage("products")}>🛒 Products</a></li>
          <li><a href="#!" onClick={() => setActivePage("invoices")}>🧾 Invoices</a></li>
          <li><a href="#!" onClick={() => setActivePage("notifications")}>📢 Notifications</a></li>
          <li><a href="#!" onClick={() => setActivePage("reports")}>📊 Reports</a></li>
          <li><a href="#!" onClick={handleLogout}>🚪 Logout</a></li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="main-content">
        {/* Dashboard */}
        {activePage === "dashboard" && (
          <div>
            <h1>Welcome to Dashboard 🎉</h1>
            <div className="grid-3">
              <div className="card">Active Offers: {offers.length}</div>
              <div className="card">Total Customers: 120</div>
              <div className="card">Revenue: ₹45,000</div>
            </div>
            <h2>Latest Offers</h2>
            <ul>
              {offers.map((offer, idx) => (
                <li key={idx}>
                  ✅ <strong>{offer.title}</strong> - {offer.description}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Offers */}
        {activePage === "offers" && (
          <div>
            <h1>Offer Management 🎁</h1>
            <form onSubmit={handleAddOffer}>
              <input type="text" name="title" placeholder="Offer Title" required />
              <textarea name="description" placeholder="Offer Description" required></textarea>
              <button className="green">Create Offer</button>
            </form>

            <ul>
              {offers.map((offer, idx) => (
                <li key={idx} className="active-offer">
                  <strong>{offer.title}</strong> - {offer.description}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Customers */}
        {activePage === "customers" && (
          <div>
            <h1>Customer Management 👥</h1>
            <form onSubmit={(e) => e.preventDefault()}>
              <input type="text" placeholder="Customer Name" required />
              <input type="email" placeholder="Customer Email" required />
              <button className="blue">Add Customer</button>
            </form>
            <ul>
              <li>John Doe - john@example.com</li>
              <li>Jane Smith - jane@example.com</li>
            </ul>
          </div>
        )}

        {/* Products */}
        {activePage === "products" && (
          <div>
            <h1>Product Management 🛒</h1>
            <form onSubmit={(e) => e.preventDefault()}>
              <input type="text" placeholder="Product Name" required />
              <input type="text" placeholder="Price" required />
              <button className="purple">Add Product</button>
            </form>
            <ul>
              <li>Nike Shoes - ₹2000</li>
              <li>Adidas Jacket - ₹3500</li>
            </ul>
          </div>
        )}

        {/* Invoices */}
        {activePage === "invoices" && (
          <div>
            <h1>Invoice Generator 🧾</h1>
            <form onSubmit={(e) => e.preventDefault()}>
              <input type="text" placeholder="Customer Name" required />
              <input type="text" placeholder="Product" required />
              <input type="text" placeholder="Amount" required />
              <button className="orange">Generate Invoice</button>
            </form>
            <ul>
              <li>Invoice #101 - John Doe - ₹2000</li>
              <li>Invoice #102 - Jane Smith - ₹3500</li>
            </ul>
          </div>
        )}

        {/* Notifications */}
        {activePage === "notifications" && (
          <div>
            <h1>Push Notifications 📢</h1>
            <textarea placeholder="Write notification message"></textarea>
            <div className="send-offers">
              <h3>Send All Active Offers</h3>
              <button className="blue" onClick={() => handleSendOffers("sms")}>
                Send via SMS
              </button>
              <button className="green" onClick={() => handleSendOffers("whatsapp")}>
                Send via WhatsApp
              </button>
            </div>
          </div>
        )}

        {/* Reports */}
        {activePage === "reports" && (
          <div>
            <h1>Reports & Analytics 📊</h1>
            <div className="grid-3">
              <div className="card">Daily Sales: ₹5,000</div>
              <div className="card">Weekly Sales: ₹20,000</div>
              <div className="card">Monthly Sales: ₹80,000</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default DashboardApp;
