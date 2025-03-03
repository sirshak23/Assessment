import React, { useState } from 'react';
import { uploadImage } from '../utils/api';
import { useNavigate } from 'react-router-dom';
import { StyledForm } from './StyledComponents';

function UploadForm() {
  const [file, setFile] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = localStorage.getItem('loggedInUser');
    await uploadImage(file, user);
    navigate('/profile');
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <input type="file" onChange={handleChange} accept="image/*" required />
      <button type="submit">Upload</button>
    </StyledForm>
  );
}

export default UploadForm;