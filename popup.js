function resizeImage() {
    const imageUrl = document.getElementById('imageUrl').value;
    const width = document.getElementById('width').value;
    const height = document.getElementById('height').value;
  
    if (!imageUrl || !width || !height) {
      alert('Please provide image URL, width, and height');
      return;
    }
  
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    const image = new Image();
  
    image.onload = function() {
      canvas.width = width;
      canvas.height = height;
      context.drawImage(image, 0, 0, width, height);
      const resizedImageUrl = canvas.toDataURL('image/jpeg');
      const link = document.createElement('a');
      link.href = resizedImageUrl;
      link.download = 'resized_image.jpg';
      link.click();
    };
  
    image.src = imageUrl;
  }
  