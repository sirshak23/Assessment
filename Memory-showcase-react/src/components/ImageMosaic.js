import React, { useState, useEffect } from 'react';
import { getImages, deleteImage } from '../utils/api';
import { isLoggedIn } from '../utils/auth';
import { Mosaic } from './StyledComponents';

function ImageMosaic({ username, userProfile }) {
  const [images, setImages] = useState([]);

  useEffect(() => {
    async function fetchImages() {
      if (userProfile && isLoggedIn()) {
        const user = localStorage.getItem('loggedInUser');
        const fetchedImages = await getImages(user);
        setImages(fetchedImages);
      } else if (username) {
        const fetchedImages = await getImages(username);
        setImages(fetchedImages);
      }
    }
    fetchImages();
  }, [username, userProfile]);

  const handleDelete = async (index) => {
    const user = localStorage.getItem('loggedInUser');
    await deleteImage(user, index);
    const updatedImages = await getImages(user);
    setImages(updatedImages);
  };

  return (
    <Mosaic>
      {images.map((img, index) => (
        <div key={index} style={{ position: 'relative', width: '100%', height: '100%' }}>
          <img
            src={img}
            alt={`memory-${index}`}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          {userProfile && (
            <button
              style={{
                position: 'absolute',
                top: '5px',
                right: '5px',
                background: 'rgba(255, 0, 0, 0.7)',
                color: 'white',
                border: 'none',
                padding: '5px 10px',
                cursor: 'pointer',
              }}
              onClick={() => handleDelete(index)}
            >
              Delete
            </button>
          )}
        </div>
      ))}
    </Mosaic>
  );
}

export default ImageMosaic;