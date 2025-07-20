// MenuPage.js
function MenuPage() {
  const menuItems = [
    {
      category: "This Week's Specials",
      name: "Greek Salad",
      description: "Fresh salad with feta, olives, and lemon dressing.",
      price: "$12.99",
      image: "greek salad.jpg"
    },
    {
      category: "This Week's Specials",
      name: "Bruschetta",
      description: "Grilled bread with tomatoes, basil, and garlic.",
      price: "$5.99",
      image: "bruchetta.svg"
    },
    {
      category: "This Week's Specials",
      name: "Lemon Dessert",
      description: "Lemon mousse topped with whipped cream.",
      price: "$5.00",
      image: "lemon dessert.jpg"
    },
    {
      category: "Starters",
      name: "Caprese Salad",
      description: "Tomatoes, mozzarella, basil and olive oil.",
      price: "$11.00",
      image: "caprese.jpg"
    },
    {
      category: "Main Dishes",
      name: "Grilled Salmon",
      description: "Served with a lemon dill sauce and seasonal vegetables.",
      price: "$19.99",
      image: "salmon.jpg"
    },
    {
      category: "Main Dishes",
      name: "Pasta Primavera",
      description: "Fresh vegetables sautéed in olive oil over linguine.",
      price: "$14.99",
      image: "pasta.jpg"
    },
    {
      category: "Main Dishes",
      name: "Stuffed Eggplant",
      description: "Baked eggplant filled with spiced lentils and herbs.",
      price: "$16.50",
      image: "eggplant.jpg"
    },
    {
      category: "Main Dishes",
      name: "Chicken Souvlaki",
      description: "Grilled skewers of marinated chicken with tzatziki.",
      price: "$18.25",
      image: "souvlaki.jpg"
    },
    {
      category: "Desserts",
      name: "Baklava",
      description: "Traditional Mediterranean dessert with honey and nuts.",
      price: "$7.50",
      image: "baklava.jpg"
    }
  ];

   return (
    <section className="menu-section">
      <h2>Our Full Menu</h2>

      {[...new Set(menuItems.map(item => item.category))].map((category, i) => (
        <div key={i} className="menu-category">
          <h3>{category}</h3>
          <div className="menu-grid">
            {menuItems
              .filter(item => item.category === category)
              .map((item, index) => (
                <div className="menu-item" key={index}>
                  <img src={item.image} alt={item.name} />
                  <div className="menu-info">
                    <h4>{item.name}</h4>
                    <p>{item.description}</p>
                    <div className="price">{item.price}</div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      ))}
    </section>
  );
}

export default MenuPage;