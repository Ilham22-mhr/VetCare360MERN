import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createOwner } from '../services/api';
import "bootstrap/dist/css/bootstrap.min.css";
import '../App.css'; 

const AddOwner = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    telephone: '',
  });

  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    setIsLoading(true);
    setError(null);
  
    try {
      const newOwner = await createOwner(formData);
      console.log('New Owner Created:', newOwner); 
  
      navigate(`/owners/${newOwner._id}`);
    } catch (err) {
      setError('Error creating owner. Please try again.');
      console.error('Error creating owner:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <h3 style={{ marginBottom: "15px" }}><strong>New Owner</strong></h3>

      {error && <div className="alert alert-danger">{error}</div>}

      <form className='form-horizontal' onSubmit={handleSubmit}>
        <div className='form-group has-feedback'>
          <div className='form-group'>
            <label htmlFor='firstName'>First Name</label>
            <input
              type='text'
              className='form-control'
              id='firstName'
              name='firstName'
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>

          <div className='form-group'>
            <label htmlFor='lastName'>Last Name</label>
            <input
              type='text'
              className='form-control'
              id='lastName'
              name='lastName'
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>

          <div className='form-group'>
            <label htmlFor='address'>Address</label>
            <input
              type='text'
              className='form-control'
              id='address'
              name='address'
              value={formData.address}
              onChange={handleChange}
              required
            />
          </div>

          <div className='form-group'>
            <label htmlFor='city'>City</label>
            <input
              type='text'
              className='form-control'
              id='city'
              name='city'
              value={formData.city}
              onChange={handleChange}
              required
            />
          </div>

          <div className='form-group'>
            <label htmlFor='telephone'>Telephone</label>
            <input
              type='text'
              className='form-control'
              id='telephone'
              name='telephone'
              value={formData.telephone}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className='form-group'>
          <div className='col-sm-offset-2 col-sm-10'>
            <button
              className='add-owner-button'
              type='submit'
              disabled={isLoading} 
              style={{ marginBottom: "45px" }}
            >
              {isLoading ? 'Adding...' : 'Add Owner'}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddOwner;