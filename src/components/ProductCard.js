import React from "react";

function ProductCard({ product }) {
  return (
    <div style={styles.card}>
      <img src={product.image} alt={product.name} style={styles.image} />
      <h3>{product.name}</h3>
      <p>Price: {product.price}</p>
    </div>
  );
}

const styles = {
  card: {
    border: "1px solid #ccc",
    padding: "10px",
    borderRadius: "5px",
    textAlign: "center",
    width: "200px",
  },
  image: {
    width: "100%",
    height: "150px",
    objectFit: "cover",
  },
};

export default ProductCard;
