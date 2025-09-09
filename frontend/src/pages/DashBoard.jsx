import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState("");
  const navigate = useNavigate();

  const handleAddItem = (e) => {
    e.preventDefault();
    if (newItem.trim() === "") return;
    setItems([...items, newItem]);
    setNewItem("");
  };

  const handleLogout = () => {
    navigate("/Testimonial");
  };

  return (
    <div className="dashboard-container">
      <h2>Welcome to Dashboard 🎉</h2>
      <button className="logout-btn" onClick={handleLogout}>
        Logout
      </button>

      <form onSubmit={handleAddItem} className="create-form">
        <input
          type="text"
          placeholder="Enter new item"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>

      <ul className="item-list">
        {items.map((item, index) => (
          <li key={index}>✅ {item}</li>
        ))}
      </ul>
    </div>
  );
}

export default Dashboard;
