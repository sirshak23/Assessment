import styled from 'styled-components';

export const Container = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

export const StyledHeader = styled.header`
  background-color: #3498db;
  color: white;
  padding: 20px 0;
  text-align: center;
`;

export const Nav = styled.nav`
  margin-top: 10px;
  a,
  button {
    color: white;
    text-decoration: none;
    margin: 0 15px;
    padding: 8px 15px;
    border: none;
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 5px;
    cursor: pointer;
  }
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: 20px auto;
  input,
  button {
    padding: 10px;
    margin-bottom: 15px;
    border: 1px solid #ddd;
    border-radius: 5px;
    font-size: 16px;
  }
  button {
    background-color: #3498db;
    color: white;
    cursor: pointer;
    transition: background-color 0.3s ease;
    &:hover {
      background-color: #2980b9;
    }
  }
`;

export const Mosaic = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(80px, 1fr)); // Adjust this value
  gap: 10px;
  padding: 10px;
  img {
    width: 10px;
    height: 100%;
    border-radius: 8px;
    object-fit: cover;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
    &:hover {
      transform: scale(1.05);
    }
  }
`;
export const StyledLanding = styled.div`
  background: linear-gradient(135deg, #e0f2fe, #b3e5fc);
  min-height: calc(100vh - 80px);
  display: flex;
  align-items: center;
  justify-content: center;
  .hero {
    text-align: center;
    margin-bottom: 40px;
    h1 {
      font-size: 2.5rem;
      margin-bottom: 20px;
      color: #333;
    }
    p {
      font-size: 1.1rem;
      color: #555;
      margin-bottom: 30px;
    }
    .cta-buttons {
      a {
        display: inline-block;
        padding: 12px 25px;
        margin: 0 15px;
        background-color: #3498db;
        color: white;
        text-decoration: none;
        border-radius: 5px;
        transition: background-color 0.3s ease;
        &:hover {
          background-color: #2980b9;
        }
      }
    }
  }
  .features {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
    .feature {
      text-align: center;
      padding: 20px;
      background-color: white;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      h3 {
        margin-bottom: 10px;
        color: #3498db;
      }
      p {
        color: #666;
      }
    }
  }
`;