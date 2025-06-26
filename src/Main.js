import {Routes, Route} from 'react-router-dom';
import HomePage from './Pages/HomePage';
import BookingPage from './Pages/BookingPage';
import ConfirmedBooking from './components/ConfirmedBooking';

function Main() {
  return (
    <Main>
       <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/confirmed" element={<ConfirmedBooking />} />
       </Routes>
    </Main>
  )
}
export default Main;