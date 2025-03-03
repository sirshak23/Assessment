import React from 'react';
import { Container, StyledLanding } from './StyledComponents';

function LandingPage() {
  return (
    <StyledLanding>
      <Container>
        <div className="hero">
          <h1>Capture and Share Your Memories</h1>
          <p>
            Welcome to Memory Showcase, where you can upload, store, and share your favorite moments.
          </p>
        </div>
        <div className="features">
          <div className="feature">
            <h3>Secure Storage</h3>
            <p>Keep your memories safe and sound.</p>
          </div>
          <div className="feature">
            <h3>Easy Uploads</h3>
            <p>Quickly upload your photos and share them with friends.</p>
          </div>
          <div className="feature">
            <h3>Personalized Profiles</h3>
            <p>Showcase your memories on your own public profile.</p>
          </div>
        </div>
      </Container>
    </StyledLanding>
  );
}

export default LandingPage;