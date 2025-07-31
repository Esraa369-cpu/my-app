import { render, screen } from '@testing-library/react';
import BookingForm from '../components/BookingForm';

test('date input has required and min attributes', () => {
  render(<BookingForm availableTimes={['17:00']} dispatch={() => {}} submitForm={() => {}} />);
  const dateInput = screen.getByLabelText(/choose date/i);
  expect(dateInput).toBeRequired();
  expect(dateInput).toHaveAttribute('min');
});

test('guests input has required, min and max attributes', () => {
  render(<BookingForm availableTimes={['17:00']} dispatch={() => {}} submitForm={() => {}} />);
  const guestsInput = screen.getByLabelText(/number of guests/i);
  expect(guestsInput).toBeRequired();
  expect(guestsInput).toHaveAttribute('min', '1');
  expect(guestsInput).toHaveAttribute('max', '10');
});

