import React from "react";


function Navbar() {
  return (
    <nav style={styles.nav}>
      <h2>Enterprise Products</h2>
      <ul style={styles.navList}>
        <li>Home</li>
        <li>Products</li>
        <li>Contact Us</li>
      </ul>
    </nav>
  );
}

const styles = {
  nav: {
    backgroundColor: "#333",
    color: "white",
    padding: "10px 20px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  navList: {
    display: "flex",
    listStyle: "none",
    gap: "20px",
  },
};

export default Navbar;
