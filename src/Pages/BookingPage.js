import BookingForm from '../components/BookingForm';

function BookingPage({availableTimes, dispatch}) {
  return (
    <section>
      <h2>Book A Table</h2>
      <BookingForm availableTimes={availableTimes} dispatch={dispatch}/>
    </section>
  );
}
export default BookingPage;