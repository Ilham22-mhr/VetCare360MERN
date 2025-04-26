import React, { useEffect, useState } from "react";
import petsImage from '../assets/images/pets.png'; 

const Error = () => {
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8080/api/oups')
      .then(response => response.json())
      .then(data => setError(data))
      .catch(() => setError(null)); 
  }, []);

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <img src={petsImage} alt="Pets" style={{ width: '350px', height: 'auto' }} />
      <h2 style={{ marginTop: "10px" }}>Something happened ...</h2>
      {error ? (
        <div>
          <p><b>Status:</b> {error.status}</p>
          <p><b>Message:</b> {error.message}</p>
        </div>
      ) : (
        <p style={{ fontSize: "23px", margin: "10px 0", textAlign: "center" }}><b>Unknown error</b></p>
      )}
    </div>
  );
};

export default Error;