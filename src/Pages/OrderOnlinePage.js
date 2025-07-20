// OrderPage.js
function OrderOnlinePage() {
  return (
    <section className="order-section">
      <h2 className="page-header">Order Online</h2>

      <form className="order-form">
        <label htmlFor="name">Full Name</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="phone">Phone Number</label>
        <input type="tel" id="phone" name="phone" required />

        <label htmlFor="address">Delivery Address</label>
        <textarea id="address" name="address" rows="3" required></textarea>

        <label htmlFor="item">Select Menu Item</label>
        <select id="item" name="item" required>
          <option value="">-- Choose a Dish --</option>
          <option value="Greek Salad">Greek Salad</option>
          <option value="Bruschetta">Bruschetta</option>
          <option value="Grilled Salmon">Grilled Salmon</option>
          <option value="Lemon Dessert">Lemon Dessert</option>
          <option value="Baklava">Baklava</option>
          <option value="Caprese Salad">Caprese Salad</option>
          <option value="Stuffed Eggplant">Stuffed Eggplant</option>
          <option value="Pasta Primavera">Pasta Primavera</option>
          <option value="Chicken Souvlaki">Chicken Souvlaki</option>
        </select>

        <button type="submit">Place Order</button>
      </form>
    </section>
  );
}

export default OrderOnlinePage;
