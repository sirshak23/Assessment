import React from 'react';
import UploadForm from './UploadForm';
import ImageMosaic from './ImageMosaic';
import { isLoggedIn } from '../utils/auth';
import { useNavigate } from 'react-router-dom';
import { Container } from './StyledComponents';

function Profile() {
  const navigate = useNavigate();

  if (!isLoggedIn()) {
    navigate('/login');
    return null;
  }

  return (
    <Container>
      <UploadForm />
      <ImageMosaic userProfile={true} />
    </Container>
  );
}

export default Profile;