import React from 'react';
import image from "./qrimage.jpg"
import './QR.css'; 
const QR = () => {

    const gotohome = () => {
        // Implement payment logic here
        // After successful payment, scroll to the confirmation button
        // confirmationRef.current.scrollIntoView({ behavior: 'smooth' });
        window.open("/","blank");
      };

  return (
    <div className="qr-container">
      <h2>Scan QR Code</h2>
      <img src= {image} alt="QR Code" className="qr-image" />
      {/* <button className="pay-now-button" onClick = {gotohome}>Pay Here</button> */}
    </div>
  );
};

export default QR;
