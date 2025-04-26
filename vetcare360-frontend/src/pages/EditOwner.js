import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getOwnerById, updateOwner } from '../services/api';
import "bootstrap/dist/css/bootstrap.min.css";
import '../App.css'; 

const EditOwner = () => {
  const { id } = useParams(); 
  const navigate = useNavigate();
  const [owner, setOwner] = useState({
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    telephone: '',
  });
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [fieldErrors, setFieldErrors] = useState({});

  useEffect(() => {
    const fetchOwner = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const data = await getOwnerById(id);
        setOwner(data);
      } catch (err) {
        setError('Error fetching owner details.');
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchOwner();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setOwner({
      ...owner,
      [name]: value,
    });

    if (!value.trim()) {
      setFieldErrors({ ...fieldErrors, [name]: 'This field is required.' });
    } else {
      const newErrors = { ...fieldErrors };
      delete newErrors[name];
      setFieldErrors(newErrors);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (Object.keys(fieldErrors).length > 0) {
      setError('Please fix the errors before submitting.');
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const updatedOwner = await updateOwner(id, owner); 
      console.log('Owner updated:', updatedOwner);
      navigate(`/owners/${id}`);
    } catch (err) {
      setError('Error updating owner. Please try again.');
      console.error('Error updating owner:', err);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div className="alert alert-danger">{error}</div>;

  return (
    <div className="container mt-4">
      <h3 style={{ marginBottom: "15px" }}><strong>Edit Owner</strong></h3>

      <form className="form-horizontal" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            className={`form-control ${fieldErrors.firstName ? 'is-invalid' : ''}`}
            id="firstName"
            name="firstName"
            value={owner.firstName}
            onChange={handleChange}
            required
          />
          {fieldErrors.firstName && (
            <div className="invalid-feedback">{fieldErrors.firstName}</div>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            className={`form-control ${fieldErrors.lastName ? 'is-invalid' : ''}`}
            id="lastName"
            name="lastName"
            value={owner.lastName}
            onChange={handleChange}
            required
          />
          {fieldErrors.lastName && (
            <div className="invalid-feedback">{fieldErrors.lastName}</div>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input
            type="text"
            className={`form-control ${fieldErrors.address ? 'is-invalid' : ''}`}
            id="address"
            name="address"
            value={owner.address}
            onChange={handleChange}
            required
          />
          {fieldErrors.address && (
            <div className="invalid-feedback">{fieldErrors.address}</div>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="city">City</label>
          <input
            type="text"
            className={`form-control ${fieldErrors.city ? 'is-invalid' : ''}`}
            id="city"
            name="city"
            value={owner.city}
            onChange={handleChange}
            required
          />
          {fieldErrors.city && (
            <div className="invalid-feedback">{fieldErrors.city}</div>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="telephone">Telephone</label>
          <input
            type="text"
            className={`form-control ${fieldErrors.telephone ? 'is-invalid' : ''}`}
            id="telephone"
            name="telephone"
            value={owner.telephone}
            onChange={handleChange}
            required
          />
          {fieldErrors.telephone && (
            <div className="invalid-feedback">{fieldErrors.telephone}</div>
          )}
        </div>

        <div className="form-group">
          <button
            type="submit"
            className="btn update-owner-button "
            style={{ marginBottom: "45px" }}
            disabled={isLoading || Object.keys(fieldErrors).length > 0}
          >
            {isLoading ? 'Updating...' : 'Update Owner'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditOwner;