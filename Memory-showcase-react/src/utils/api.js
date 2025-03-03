export async function uploadImage(file, username) {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        const imageData = e.target.result;
        let userImages = JSON.parse(localStorage.getItem('userImages') || '{}');
        if (!userImages[username]) {
          userImages[username] = [];
        }
        userImages[username].push(imageData);
        localStorage.setItem('userImages', JSON.stringify(userImages));
        resolve();
      };
      reader.readAsDataURL(file);
    });
  }
  
  export async function getImages(username) {
    return JSON.parse(localStorage.getItem('userImages') || '{}')[username] || [];
  }
  
  export async function deleteImage(username, index) {
    return new Promise((resolve) => {
      let userImages = JSON.parse(localStorage.getItem('userImages') || '{}');
      if (userImages[username] && userImages[username][index]) {
        userImages[username].splice(index, 1);
        localStorage.setItem('userImages', JSON.stringify(userImages));
      }
      resolve();
    });
  }