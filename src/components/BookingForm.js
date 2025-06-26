function BookingForm() {
    return (
        <form className="booking-form">
            <label>Date:<input type="date" /></label>
            <label>Time:<input type="time" /></label>
            <label>Guests:<input type="number" min="1" max="10" /></label>
            <button type="submit">Confirm Reservation</button>
        </form>
    );
};
export default BookingForm;