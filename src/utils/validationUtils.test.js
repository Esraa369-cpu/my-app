import { isFormValid } from '../utils/validationUtils';
import { render, screen, fireEvent } from '@testing-library/react';
import BookingForm from '../components/BookingForm';

test('returns true for valid data', () => {
  const validData = { date: '2025-08-01', time: '19:00', guests: 2, occasion: 'Birthday' };
  expect(isFormValid(validData)).toBe(true);
});

test('returns false if guests < 1', () => {
  const invalidData = { date: '2025-08-01', time: '19:00', guests: 0, occasion: 'Birthday' };
  expect(isFormValid(invalidData)).toBe(false);
});

test('form submits when all fields are valid', () => {
  const mockSubmit = jest.fn();
  render(<BookingForm availableTimes={['17:00']} dispatch={() => {}} submitForm={mockSubmit} />);

  fireEvent.change(screen.getByLabelText(/choose date/i), { target: { value: '2025-08-01' } });
  fireEvent.change(screen.getByLabelText(/choose time/i), { target: { value: '17:00' } });
  fireEvent.change(screen.getByLabelText(/number of guests/i), { target: { value: '4' } });
  fireEvent.change(screen.getByLabelText(/occasion/i), { target: { value: 'Anniversary' } });

  fireEvent.click(screen.getByRole('button', { name: /make your reservation/i }));

  expect(mockSubmit).toHaveBeenCalled();
});
