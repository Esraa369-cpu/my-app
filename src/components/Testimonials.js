const testimonials = [
    {name:"Anna", rating:5, review:"Absolutely loved the food!"},
    {name:"John", rating:4, review:"Great atmosphere and service."},
    {name:"Lina", rating:5, review:"The lemon dessert is amazing!"},
    {name:"Mark", rating:4, review:"Fresh ingredients and nice staff."}
];

function Testimonials() {
    return (
        <section className="testimonials">
            <h2>What Our Customers Say</h2>
            <div className="testimonial-grid">
                {testimonials.map((t,index) => (
                    <div className="testimonial-card" key={index}>
                        <h3>{t.name}</h3>
                        <p>{"⭐".repeat(t.rating)}</p>
                        <p>{t.review}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};
export default Testimonials;