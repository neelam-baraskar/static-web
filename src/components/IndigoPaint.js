import React from "react";

function IndigoPaint() {
  const images = [
    "https://indigopaints.com/wp-content/uploads/2024/03/Find-a-dealer.webp",
    "https://indigopaints.com/wp-content/uploads/2021/02/shutterstock_625921016-900x600-1.webp",
    "https://indigopaints.com/wp-content/uploads/2021/02/shutterstock_587605601.webp",
    "https://indigopaints.com/wp-content/uploads/2020/09/shutterstock_1359104660-900x600-1.webp",
    "https://indigopaints.com/wp-content/uploads/2020/09/216117640-900x600-1.webp",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMpEkzlVPNqqHjjZzpGOqMNmnjoWqzMcHA0g&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY6hyG86SxAVMsfKmedh61YCEKhhbLwMnBN_rzSHAv0KfaV04ZNxuZKCt4lmhKYUyUHmw&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0FMq0cokoDShzWCEV3DW5QsLDoZpWwdWpF4SEsGSYET3DBW-nk9WMKWAxTbtR0EuIXhc&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp8P8jrYc4sFSKGEaXjGs3YL1bDbPra2BAtyl8XqiyXvfvX1ibttW8kZ0OxIhT9wcCoI8&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw7y-rwr_nu48w3TGIoW0CuOBAeGiAkXXVf9LMZm4L8fhnh68xfht3orzPzMs8RwnLtDc&usqp=CAU",
    "https://5.imimg.com/data5/ANDROID/Default/2020/12/XX/ED/MZ/2721256/product-jpeg-1000x1000.jpg",
    "https://content.jdmagicbox.com/quickquotes/images_main/10-kg-acrylic-wall-putty-271277604-gns700ka.jpg?impolicy=queryparam&im=Resize=(360,360),aspect=fit",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIByVl2SHtvmm2NJLFrpSGpvZsQyduhdTxdg&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKmYNYjvyg9rBbG-DVQ-DzY0YP_L46vVs7Cg&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE7WrfFAoZp9p8vRIAJ1MrKJLW0cmI7GatDA&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWFtrQ_Qok1iIbEmLHtyAEr3vW6_AO0cbeyw&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEPlHN7GvuAGmaC7tjm9E8fNWmOqbWzgWthw&s",
    "https://indigopaints.com/wp-content/uploads/2023/07/IndigoLeakproofEmulsionPROTECTPLUS4Ltr.webp",
    "https://indigopaints.com/wp-content/uploads/2024/06/indigo-game.webp",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe6RxQGQt_IQud8cgeSG69D9kjdWXlSbcbtA&s",
  ];

  const names = [
    "Indigo putty", "Birla white putty ", "Surya putty", "distempur putty", "tractor putty",
    "Indigo", "Rustic", "Texture", "Finish", "Spoted",
    "Indigo polymer putty", "Indigo gold series", "Colour bucket type", "Wall putty", "putty colour combination",
    "Indigo perfect paint", "Indigo tractor spark", "Indigo leakproof colour", "Indigo platinum colour", "Indigo colour",
  ];

  const rowHeadings = [
    "Polymer putty",
    "Rustic",
    "Waterproof putty",
    "Paints (Emulsions, Leakproofs)",
  ];

  return (
    <div style={{ margin: "20px", textAlign: "center" }}>
      <h1>Polymer putty, Rustic, Waterproof putty, Paints (Emulsions, Leakproofs)</h1>
      {rowHeadings.map((heading, rowIndex) => (
        <div key={rowIndex} style={{ marginBottom: "30px" }}>
          <h3 style={{ color: "#333", marginTop: "10px" }}>{heading}</h3>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
              gap: "20px",
              justifyItems: "center",
              maxWidth: "1200px",
              margin: "0 auto",
            }}
          >
            {images.slice(rowIndex * 5, rowIndex * 5 + 5).map((url, index) => (
              <div key={index} style={{ textAlign: "center" }}>
                <img
                  src={url}
                  alt={`Image ${index + 1}`}
                  style={{
                    width: "100%",
                    maxWidth: "200px",
                    height: "200px",
                    borderRadius: "10px",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  }}
                  onMouseOver={(e) => {
                    e.target.style.transform = "scale(1.1)";
                    e.target.style.boxShadow = "0 8px 16px rgba(0, 0, 0, 0.3)";
                  }}
                  onMouseOut={(e) => {
                    e.target.style.transform = "scale(1)";
                    e.target.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
                  }}
                />
                <p style={{ marginTop: "10px", color: "#555", fontSize: "14px", fontWeight: "bold" }}>
                  {names[rowIndex * 5 + index]}
                </p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default IndigoPaint;
