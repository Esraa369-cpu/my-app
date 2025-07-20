import { Link } from 'react-router-dom';

function CallToAction() {
    return (
        <section className="hero">
            <div className="hero-text">
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>We are a family owned mediterranean restaurant,focused on traditional
                    recipes served with a modern twist.</p>
                <Link to="/booking" className="cta-button">
                   Reserve a Table
                </Link>
            </div>
            <div className="hero-image">
            <img src="restauranfood.jpg" alt="Hero Dish" />
            </div>
        </section>
    );
};
export default CallToAction;