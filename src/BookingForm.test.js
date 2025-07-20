jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => jest.fn(),
}));


import { render, screen } from '@testing-library/react';
import BookingForm from '../components/BookingForm';

test('renders the BookingForm heading', () => {
  render(<BookingForm availableTimes={['17:00']} dispatch={() => {}} />);
  const heading = screen.getByRole('heading', { name: /reserve a table/i });
  expect(heading).toBeInTheDocument();
});

test('renders date label', () => {
  render(<BookingForm availableTimes={['17:00']} dispatch={() => {}} />);
  const label = screen.getByLabelText(/choose date/i);
  expect(label).toBeInTheDocument();
});
