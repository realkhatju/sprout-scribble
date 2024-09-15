import { useState } from "react";

export default function ImageUpload() { // Start component name with uppercase
  const [imageBase64, setImageBase64] = useState<string>(''); // Add the string type explicitly

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => { // Type the event
    const file = event.target.files?.[0]; // Handle potential null or undefined
    if (!file) return; // Guard clause to ensure a file is selected

    const reader = new FileReader();
    reader.onloadend = () => {
      if (reader.result) { // Ensure result is not null
        setImageBase64(reader.result as string); // Cast result as a string since it's either string or ArrayBuffer
      }
    };
    reader.readAsDataURL(file); // Convert image to base64
  };

  const handleSubmit = () => {
    fetch('YOUR_BACKEND_URL', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ image: imageBase64 }),
    })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error('Error:', error));
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleImageUpload} />
      <button onClick={handleSubmit}>Upload</button>
    </div>
  );
}
