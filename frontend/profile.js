import React, { useState } from 'react';
import './profile.css'; // Import the CSS file for styling

const ProfilePage = () => {
  const [name, setName] = useState('Ahmed Saad');
  const [phoneNumber, setPhoneNumber] = useState('123-456-7890');
  const [address, setAddress] = useState('123 Main St');
  const [image, setImage] = useState('https://via.placeholder.com/150');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="profile-container">
      <div className="profile-image-container">
        <img src={image} alt="Profile" className="profile-image" />
        <label htmlFor="imageInput" className="image-button">
          Change Image
        </label>
        <input
          type="file"
          accept="image/*"
          id="imageInput"
          onChange={handleImageChange}
          style={{ display: 'none' }}
        />
      </div>
      <div className="profile-details">
        <h1 className="profile-name">name: {name}</h1>
        <input
          type="text"
          value={name}
          onChange={handleNameChange}
          className="input-field"
        />

        <h3 className="profile-phone">phone number: {phoneNumber}</h3>
        <input
          type="text"
          value={phoneNumber}
          onChange={handlePhoneNumberChange}
          className="input-field"
        />

        <h3 className="profile-address">address: {address}</h3>
        <textarea
          value={address}
          onChange={handleAddressChange}
          className="textarea-field"
        />
      </div>
    </div>
  );
};

export default ProfilePage;
