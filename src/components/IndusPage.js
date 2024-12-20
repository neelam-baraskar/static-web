import React from 'react';

function IndusPage() {
  const tableData = [
    ['Material', 'Max Temp (°F)', 'Flexibility', 'UV Resistance', 'Cost', 'Applications'],
    ['PVC', '140', 'Rigid', 'Low', 'Low', 'Cold water, drainage, irrigation'],
    ['CPVC', '200', 'Semi-rigid', 'Moderate', 'Moderate', 'Hot/cold water, fire sprinklers'],
    ['PEX', '200', 'Very flexible', 'Low', 'Moderate', 'Plumbing, radiant heating'],
    ['HDPE', '140', 'Flexible', 'High', 'Moderate', 'Underground pipes, industrial use'],
    ['ABS', '140', 'Rigid', 'Low', 'Moderate', 'Drainage, vent systems'],
    ['--', '--', '--', '--', '--', '--'],
  ];

  const images = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBYZgqSecbFsYpFqffWfv4jWpadr9BAuiqZg&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNd82GKp2FE4tt_ulF5bfv6IOSHskDRQ6oYg&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIUbNtqgnvY049CtdekYfjCV_RHnl5W2nmYg&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO_7ldPJEjsCtfiPg4eoJOWSxLCEi1v-uqug&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0EBre7LaJYNABKs-RZdyZHmQwaEldHPVxRw&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv67Oxadf1Ko7V5cW1Weanh4j_TSKYYLUBrw&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoEItYKnnqa0F0O8hf0DrC_o03VwDJq04HdQ&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmRyF8GTmJ8LQxXTiI4g6VvEOXxCtj9IomKQ&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMHNgYudsu1I3FfBBuZ-t5zzyz88n-g1iqEQ&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYQh2IDYZr0lPmig7IrB5e39gr1ECJeP3ofA&s",
  ];

  const names = [
    'PVC Pipe','CPVC Pipe','PEX Pipe','COUPLER , WALL , BAND','ABS Pipe',
    'LOFT TANK','ADNAN WATER TANK','I PURE TANK 500LTR','AQUA WATER TANK 1000LTR','AGARWAL WATER TANK',
  ];

  const imageStyle = {
    width: '200px',
    height: '200px',
    transition: 'all 0.3s ease',
  };

  const hoverStyle = {
    border: '5px solid gray',
    borderRadius: '10px',
  };

  return (
    <div>
      <h1 style={{ textAlign: 'center', color: '#333' }}>CPVC, PVC, and Plastic Pipes</h1>

      {/* Top 5 Images */}
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        {images.slice(0, 5).map((url, idx) => (
          <div
            key={idx}
            style={{
              display: 'inline-block',
              margin: '15px',
              textAlign: 'center',
            }}
          >
            <img
              src={url}
              alt={names[idx]}
              style={imageStyle}
              onMouseOver={(e) => (e.currentTarget.style.border = hoverStyle.border)}
              onMouseOut={(e) => (e.currentTarget.style.border = 'none')}
            />
            <p style={{ marginTop: '10px', fontWeight: 'bold' }}>{names[idx]}</p>
          </div>
        ))}
      </div>

      {/* Table Section */}
      <table
        border="1"
        style={{
          borderCollapse: 'collapse',
          width: '100%',
          margin: '20px 0',
          fontFamily: 'Arial, sans-serif',
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        }}
      >
        <thead>
          <tr style={{ backgroundColor: '#4CAF50', color: 'white' }}>
            {tableData[0].map((header, index) => (
              <th
                key={index}
                style={{
                  padding: '10px',
                  textAlign: 'center',
                }}
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableData.slice(1).map((row, rowIndex) => (
            <tr
              key={rowIndex}
              style={{
                backgroundColor: rowIndex % 2 === 0 ? '#f9f9f9' : '#eaf5ea',
              }}
            >
              {row.map((cell, colIndex) => (
                <td
                  key={colIndex}
                  style={{
                    padding: '10px',
                    textAlign: 'center',
                    color: cell === '--' ? '#bbb' : '#333',
                  }}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      {/* Bottom 5 Images */}
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        {images.slice(5).map((url, idx) => (
          <div
            key={idx + 5}
            style={{
              display: 'inline-block',
              margin: '15px',
              textAlign: 'center',
            }}
          >
            <img
              src={url}
              alt={names[idx + 5]}
              style={imageStyle}
              onMouseOver={(e) => (e.currentTarget.style.border = hoverStyle.border)}
              onMouseOut={(e) => (e.currentTarget.style.border = 'none')}
            />
            <p style={{ marginTop: '10px', fontWeight: 'bold' }}>{names[idx + 5]}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default IndusPage;
