import React from 'react';
import ImageMosaic from './ImageMosaic';
import { useParams } from 'react-router-dom';
import { Container } from './StyledComponents';

function UserPage() {
  const { username } = useParams();

  return (
    <Container>
      <h2>{username}'s Profile</h2>
      <ImageMosaic username={username} />
    </Container>
  );
}

export default UserPage;