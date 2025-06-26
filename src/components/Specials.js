function Specials() {
    const dishes = [
        {name: 'Greek Salad' , desc: 'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.' , price: '$ 12.99' , image: 'greek salad.jpg'},
        {name: 'Bruschetta' , desc: 'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.' , price: '$ 5.99' , image: 'bruchetta.svg'},
        {name: 'Lemon Dessert' , desc: 'This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.' , price: '$ 5.00' , image: 'lemon dessert.jpg'},
    ];
    return (
        <section className="highlights">
            {dishes.map((dish, i) => (
                 <div className="card" key={i}>
                    <img src={dish.image} alt={dish.name} />
                    <h3>{dish.name}</h3>
                    <p>{dish.desc}</p>
                    <span>{dish.price}</span>
                 </div>
            ))}
        </section>
    );
};
export default Specials;