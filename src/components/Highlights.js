const specials = [
  {
    name: "Greek Salad",
    price: "$12.99",
    description: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
    image: "greek salad.jpg"
  },
  {
    name: "Bruschetta",
    price: "$5.99",
    description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
    image: "bruchetta.svg"
  },
  {
    name: "Lemon Dessert",
    price: "$5.00",
    description: "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
    image: "lemon dessert.jpg"
  }
];

function Highlights() {
  return (
    <section className="highlights">
      <div className="highlights-header">
        <h2>This Week’s Specials</h2>
        <a href="/menu" className="menu-button">Online Menu</a>
      </div>
      <div className="specials-grid">
        {specials.map((item, index) => (
          <div className="special-card" key={index}>
            <img src={item.image} alt={item.name} />
            <div className="special-content">
              <div className="special-title">
                <h3>{item.name}</h3>
                <span>{item.price}</span>
              </div>
              <p>{item.description}</p>
              <a href="/order">Order a delivery 🚴‍♂️</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Highlights;