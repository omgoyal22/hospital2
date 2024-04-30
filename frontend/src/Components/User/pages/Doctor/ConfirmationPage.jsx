import React, { useState, useRef } from 'react';
import {Link } from 'react-router-dom';

const ConfirmationPage = () => {
    return (
      <div className="confirmation-container">
        <h2>Payment Successful!</h2>
        <img src="path/to/your/image.jpg" alt="Confirmation" />
        <button className="payment-button">
          <Link to="/payment">Pay Now</Link>
          
          
        
        </button>
      </div>
    );
  };

export default ConfirmationPage;