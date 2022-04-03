import "./style.css";
import Button from "./../Button";

const Products = ({
  name,
  category,
  price,
  img,
  prod,
  cartItems,
  setcartItems,
  cartTotal,
  setCartTotal,
}) => {
  const totalAmount = (value) => {
    setCartTotal(
      Number(
        cartItems.reduce((acc, cur) => acc + cur.price, value.price)
      ).toFixed(2)
    );
  };

  const addCart = (value) => {
    if (!cartItems.includes(value)) {
      setcartItems([...cartItems, value]);
    }
  };

  const upadatingCart = (value) => {
    addCart(value);
    if (!cartItems.includes(value)) {
      totalAmount(value);
    }
  };

  const fixedPrice = () => {
    let priceInitial = Number(price);
    return priceInitial.toFixed(2);
  };

  return (
    <div className="product__cards">
      <figure>
        <img alt={name} src={img} />
      </figure>
      <h3>{name}</h3>
      <span>{category}</span>
      <p>{"R$ " + fixedPrice()}</p>
      <Button variant="primary" onClick={() => upadatingCart(prod)}>
        Adicionar
      </Button>
    </div>
  );
};

export default Products;
