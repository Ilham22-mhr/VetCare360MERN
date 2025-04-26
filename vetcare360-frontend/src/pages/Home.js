import React from 'react';
import petsImage from '../assets/images/pets.png'; 
import springPivotalLogo from '../assets/images/spring-pivotal-logo.png'; 

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
    <div className="image-container">
      <img className='img-responsive img-spring-pivotal-logo' src={springPivotalLogo} alt="Spring Pivotal Logo" width="250" height="auto" />
    </div> 
  </div>
);

export default Home;