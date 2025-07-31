import { useState } from 'react';
import { isFormValid } from '../utils/validationUtils';

function BookingForm({ availableTimes, dispatch, submitForm }) {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = { date, time, guests: Number(guests), occasion };
    submitForm(formData);
  };

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    setDate(selectedDate);
    dispatch({ type: 'UPDATE_TIMES', date: selectedDate });
  };

  const formState = { date, time, guests: Number(guests), occasion };

  return (
    <form onSubmit={handleSubmit} className="booking-page" aria-label="Booking Form">
      <h2>Reserve a Table</h2>

      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        aria-label="Choose date"
        value={date}
        onChange={handleDateChange}
        required
        min={new Date().toISOString().split("T")[0]}
      />

      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        aria-label="Choose time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        required
      >
        <option value="">-- Select Time --</option>
        {availableTimes.map((t) => (
          <option key={t} value={t}>{t}</option>
        ))}
      </select>

      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        id="guests"
        aria-label="Number of guests"
        min="1"
        max="10"
        value={guests}
        onChange={(e) => setGuests(e.target.value)}
        required
      />

      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        aria-label="Occasion"
        value={occasion}
        onChange={(e) => setOccasion(e.target.value)}
        required
      >
        <option value="">-- Select Occasion --</option>
        <option value="Birthday">Birthday</option>
        <option value="Engagement">Engagement</option>
        <option value="Anniversary">Anniversary</option>
      </select>

      <button
        type="submit"
        disabled={!isFormValid(formState)}
        aria-label="Make your reservation"
      >
        Make Your Reservation
      </button>
    </form>
  );
}

export default BookingForm;
