import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ProductList from "./ProductList";
import IndusPage from "./IndusPage";

function App() {
  return (
    <Router>
      <header>
        <nav style={styles.nav}>
          <Link to="/" style={styles.link}>
            Home
          </Link>
          <Link to="/products" style={styles.link}>
            Products
          </Link>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<h1>Welcome to Our Store</h1>} />
          <Route path="/products" element={<ProductList />} />
        </Routes>
      </main>
    </Router>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    padding: "10px",
    backgroundColor: "#f4f4f4",
  },
  link: {
    textDecoration: "none",
    color: "#333",
    fontSize: "18px",
  },
};

export default App;
