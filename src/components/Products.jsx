
import shoeImage from '../assets/spike.png';
import tshirtImage from '../assets/t-shirt.png';
import footballImage from '../assets/spike2.png';

const products = [
  { name: "Shoes", price: "$2700", image: shoeImage },
  { name: "T-Shirt", price: "$2700", image: tshirtImage },
  { name: "Football Shoes", price: "$2700", image: footballImage }
];

function Products() {
  return (
    <section className="products-section">
      <div className="products-heading">
        <h2>EXPLORE THE NEWEST PRODUCTS</h2>
        <p>
          Discover our latest sports collection.
          Designed for comfort, style and performance.
        </p>
      </div>

      <div className="products-container">
        {products.map((product, index) => (
          <div className="product-card" key={index}>
            <div className="product-image">
              <img src={product.image} alt={product.name} />
            </div>

            <div className="product-info">
              <span>{product.name}</span>
              <strong>{product.price}</strong>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Products;
