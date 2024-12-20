import React from "react";

function UttamPage() {
  const images = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgxGJmuhWllcolFhsrHZPzFEHhzyYmEvFEHg&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfy-OyUoeXxPpvyEkNpeqCezdEjO9EMvdkHw&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7x8hV1XxWH_K7h2VYx7fMNfoB9Ob9uhwgDQ&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdTWt4jVfxVEAxr_8SJ5PhxlsJuJcK_kHcFA&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcPKpzpdTftVhTdwPrH2f6JraTCk2rBRY-WA&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREVp_pqzHxcXzzj-s0lAxmixLiaZg37fnPEA&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSXS2gWDlFhJKVbW8GCwMCY1sTS4XaH8TVPw&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwRmAccv6bGbxLMaL6SfZNdV4G2438alnwNA&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkGKJe97d8Aqyk6a2QYm40H412VX0MWX5_5A&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnFHxTTXB4HY1GFEMsHt2xc6-SDWRT0TDogQ&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMHkFOfL90iQWl_o5f9K-aW7mG4geoLESN2A&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk_DJuNY6rcNqkyLlXeJolvWFpKXgUdkfOLQ&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW6TMEFs7HNbezL0xv_mJNDD0QspB89JU69A&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMLk9rVbqsgk1e3uleANn7RphhzhdRrL2Tag&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR5rWyXFPbY4aLgbUtQIZvJietk86bOXG6wQ&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlXmmu6v-D82EzVu93JU4qC7Gm2n1iR22BRw&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThpbQStnKzex0eLctmtcBXZAYnr2ySObLeJA&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ78hO1PqdpoFRUfBA_3dOVWvgHKRKXB1Sbpw&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW8D3B2eLObmtstvYk5-KFID69Va6lCgo9nA&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5S9In0QaaOdmnXehSrStIjX7CXTguSROmFA&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-pKK0jlIMxhBakUzExp_eTWjIDhqYnCpQwA&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUpeuN1PPLwjQRjIC6u9WJ7ok9jWfij1UPMQ&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQURdO1qHXdHqZV8p_qrQD3QrZgOENSyRZoig&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGuSK-rLjQSZQwoJfC6bLIjJR_CfLsvagqTQ&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJLvMMVC2Sv46z0796OWb0i5qdhdAPqJcuxQ&s",
  ];

  const imageNames = [
    "Profile 1", "Profile 2", "Profile 3", "Profile 4", "Profile 5",
    "Jali 1", "Jali 2", "Jali 3", "Jali 4", "Jali 5",
    "Sheet 1", "Sheet 2", "Sheet 3", "Sheet 4", "Sheet 5",
    "Laser 1", "Laser 2", "Laser 3", "Laser 4", "Laser 5",
    "MR Jali 1", "MR Jali 2", "MR Jali 3", "MR Jali 4", "MR Jali 5",
  ];

  const rowHeadings = [
    "Profile Sheets",
    "Farm security jali",
    "GP sheets",
    "MR Jali",
    "Laser cut jali",
  ];

  return (
    <div 
      style={{ 
        display: "flex", 
        flexDirection: "column", 
        alignItems: "center", 
        margin: "20px" 
      }}
    >
      <h1 
        style={{ 
          marginBottom: "20px", 
          fontSize: "2.5rem", 
          textAlign: "center" 
        }}
      >
        Profile Sheet, GP Sheet, MR Jali
      </h1>
      {rowHeadings.map((heading, rowIndex) => (
        <div 
          key={rowIndex} 
          style={{ 
            marginBottom: "30px", 
            width: "100%" 
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "20px",
              justifyContent: "center",
              maxWidth: "1200px",
              margin: "0 auto",
            }}
          >
            {images.slice(rowIndex * 5, rowIndex * 5 + 5).map((url, index) => (
              <div 
                key={index} 
                style={{ 
                  textAlign: "center" 
                }}
              >
                <img
                  src={url}
                  alt={imageNames[rowIndex * 5 + index]}
                  style={{
                    width: "100%",
                    height: "200px",
                    borderRadius: "10px",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = "scale(1.05)";
                    e.target.style.boxShadow = "0 8px 16px rgba(0, 0, 0, 0.3)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = "scale(1)";
                    e.target.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
                  }}
                />
                <p 
                  style={{ 
                    marginTop: "10px", 
                    color: "#555", 
                    fontWeight: "bold" 
                  }}
                >
                  {imageNames[rowIndex * 5 + index]}
                </p>
              </div>
            ))}
          </div>
          <h3 
            style={{ 
              textAlign: "center", 
              color: "#333", 
              marginTop: "20px", 
              fontSize: "1.5rem" 
            }}
          >
            {heading}
          </h3>
        </div>
      ))}
    </div>
  );
}

export default UttamPage;
