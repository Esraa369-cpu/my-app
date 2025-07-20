import React from 'react';
import { Link} from "react-router-dom";

function ConfirmedBooking() {
  return (
    <section className="confirmation-card">
      <img src="checkmark.jpg" alt="Success" style={{ width: '80px', marginBottom: '1rem' }} />
      <h2>🎉Reservation Confirmed!</h2>
      <p>Thank you for booking with Little Lemon. We look forward to serving you!</p>
      <Link to="/" className="menu-button">Back to Home</Link>
    </section>
  );
};
export default ConfirmedBooking;