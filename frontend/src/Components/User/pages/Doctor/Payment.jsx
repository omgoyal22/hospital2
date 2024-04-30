// import React, { useState } from 'react';
// import './Payment.css'; // Import CSS file for styling

// const PaymentPage = () => {
//   const [cardNumber, setCardNumber] = useState('');
//   const [expiryDate, setExpiryDate] = useState('');
//   const [cvv, setCVV] = useState('');
//   const [name, setName] = useState('');

//   const handlePayment = () => {
//     // Implement payment logic here
//     alert('Payment Successful!');
//   };

//   return (
//     <div className="payment-container">
//       <h2>Payment Details</h2>
//       <div className="input-container">
//         <label>Card Number</label>
//         <input
//           type="text"
//           value={cardNumber}
//           onChange={(e) => setCardNumber(e.target.value)}
//           placeholder="Enter card number"
//         />
//       </div>
//       <div className="input-container">
//         <label>Expiry Date</label>
//         <input
//           type="text"
//           value={expiryDate}
//           onChange={(e) => setExpiryDate(e.target.value)}
//           placeholder="MM/YY"
//         />
//       </div>
//       <div className="input-container">
//         <label>CVV</label>
//         <input
//           type="text"
//           value={cvv}
//           onChange={(e) => setCVV(e.target.value)}
//           placeholder="CVV"
//         />
//       </div>
//       <div className="input-container">
//         <label>Name on Card</label>
//         <input
//           type="text"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           placeholder="Enter name"
//         />
//       </div>
//       <button className="payment-button" onClick={handlePayment}>Pay Now</button>
//     </div>
//   );
// };

// export default PaymentPage;

// import React, { useState } from 'react';
// //import QRCode from 'react-qr-code'; // Import QRCode component
// import './Payment.css'; // Import CSS file for styling

// const PaymentPage = () => {
//   const [cardNumber, setCardNumber] = useState('');
//   const [expiryDate, setExpiryDate] = useState('');
//   const [cvv, setCVV] = useState('');
//   const [name, setName] = useState('');
//   const [paymentSuccess, setPaymentSuccess] = useState(false); // State to track payment success

//   const handlePayment = () => {
//     // Implement payment logic here
//     // For demonstration purposes, we'll assume payment is successful after button click
//     setPaymentSuccess(true);
//   };

//   return (
//     <div className="payment-container">
//       <h2>Payment Details</h2>
//       <div className="input-container">
//         <label>Card Number</label>
//         <input
//           type="text"
//           value={cardNumber}
//           onChange={(e) => setCardNumber(e.target.value)}
//           placeholder="Enter card number"
//         />
//       </div>
//       <div className="input-container">
//         <label>Expiry Date</label>
//         <input
//           type="text"
//           value={expiryDate}
//           onChange={(e) => setExpiryDate(e.target.value)}
//           placeholder="MM/YY"
//         />
//       </div>
//       <div className="input-container">
//         <label>CVV</label>
//         <input
//           type="text"
//           value={cvv}
//           onChange={(e) => setCVV(e.target.value)}
//           placeholder="CVV"
//         />
//       </div>
//       <div className="input-container">
//         <label>Name on Card</label>
//         <input
//           type="text"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           placeholder="Enter name"
//         />
//       </div>
//       {!paymentSuccess ? (
//         // Render payment button if payment is not successful
//         <button className="payment-button" onClick={handlePayment}>Pay Now</button>
//       ) : (
//         // Render QR code if payment is successful
//         <div className="qr-container">
//           <h3>Payment Successful!</h3>
//           {/* <QRCode value="Your payment QR code data here" /> */}
//         </div>
//       )}
//     </div>
//   );
// };

// export default PaymentPage;

import React, { useState, useRef } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'; // Import Router components
import './Payment.css'; // Import CSS file for styling

const PaymentPage = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCVV] = useState('');
  const [name, setName] = useState('');
  const confirmationRef = useRef(); // Reference for confirmation button

  const handlePayment = () => {
    // Implement payment logic here
    // After successful payment, scroll to the confirmation button
    // confirmationRef.current.scrollIntoView({ behavior: 'smooth' });
    window.open("QR","blank");
  };

  return (
    <div className="payment-container">
      <h2>Payment Details</h2>
      <div className="input-container">
        <label>Card Number</label>
        <input
          type="text"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
          placeholder="Enter card number"
        />
      </div>
      <div className="input-container">
        <label>Expiry Date</label>
        <input
          type="text"
          value={expiryDate}
          onChange={(e) => setExpiryDate(e.target.value)}
          placeholder="MM/YY"
        />
      </div>
      <div className="input-container">
        <label>CVV</label>
        <input
          type="text"
          value={cvv}
          onChange={(e) => setCVV(e.target.value)}
          placeholder="CVV"
        />
      </div>
      <div className="input-container">
        <label>Name on Card</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter name"
        />
      </div>
      <button className="payment-button" style={{ marginRight: '10px' }} onClick={handlePayment}>Pay Now</button>
<button className="payment-button" onClick={handlePayment}>GOTO QR</button>


      {/* Placeholder for Confirmation Page */}
      <div ref={confirmationRef}></div>
    </div>
  );
};
export default PaymentPage;

// const App = () => {
//   return (
//     <Router>
//       <Route exact path="/" component={PaymentPage} />
//       <Route path="/confirmation" component={ConfirmationPage} />
//     </Router>
//   );
// };


