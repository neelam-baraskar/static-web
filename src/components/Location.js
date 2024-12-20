import React from "react";


function Location() {
  const styles = {
    map: {
      width: "100%",
      height: "400px",
      border: 0,
    },
  };

  return (
    <section>
      <h2>Our Shop Location</h2>
      <iframe
        title="Shop Location"
        src="https://maps.app.goo.gl/KXJRFb3LtTSdxEqD6?g_st=com.google.maps.preview.copy"
        style={styles.map}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </section>
  );
}


 export default Location;
