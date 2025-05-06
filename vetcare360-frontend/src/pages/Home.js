import React from 'react';
import petsImage from '../assets/images/pets.png'; 
import mernLogo from '../assets/images/mern-logo.png'; 

const Home = () => (
  <div>
    <div>
      <h3 style={{ marginBottom: "10px" }}><strong>Welcome</strong></h3>
      <div className='row'>
        <div className='col-md-12' style={{ marginTop: '10px' }}>
          <img className='img-responsive' src={petsImage} alt="Pets" width="400" height="auto"/>
        </div>
      </div>
    </div>

    <div className="image-container" style={{ marginTop: "20px" }}>
    <img className='img-responsive mern-logo' src={mernLogo} alt="MERN Logo" />
    </div> 
  </div>
);

export default Home;
