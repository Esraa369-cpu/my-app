function CustomersSay() {
    const testimonials = [
        {name: 'Ava J.', text: 'The food is amazing and the service outstanding!'},
        {name: 'Omar H.', text: 'Loved the lemon dessert! A perfect end to a great meal.'},
    ];
    return (
        <section className="testimonials">
            {testimonials.map((t, i) => (
             <div className="testimonial-card" key={i}>
              <h4>{t.name}</h4>
              <p>“{t.text}”</p>
             </div>
            ))}
        </section>
    );
};
export default CustomersSay;