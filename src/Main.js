import {useReducer} from 'react';
import {Routes, Route} from 'react-router-dom';
import HomePage from './Pages/HomePage';
import About from './components/About';
import MenuPage from './Pages/MenuPage'
import LoginPage from './Pages/LoginPage';
import BookingPage from './Pages/BookingPage';
import ConfirmedBooking from './components/ConfirmedBooking';
import OrderOnlinePage from './Pages/OrderOnlinePage';

const initializeTimes = () => ['17:00', '18:00', '19:00'];
const updateTimes = (state, action) => {
  return ['17:00', '18:00', '19:00']; // ← Safe static return
};


function Main() {
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);

  return (
    <>
       <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/order" element={<OrderOnlinePage />} />
        <Route
         path="/booking" 
         element={
         <BookingPage availableTimes={availableTimes} dispatch={dispatch} />
         }
        />
        <Route path="/confirmed" element={<ConfirmedBooking />} />
       </Routes>
    </>
  )
}
export default Main;