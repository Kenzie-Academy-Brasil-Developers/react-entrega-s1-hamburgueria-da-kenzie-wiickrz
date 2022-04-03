import "./style.css";
import Button from "../Button";

const CartProduct = ({
  name,
  category,
  img,
  prod,
  cartItems,
  setcartItems,
  cartTotal,
  setCartTotal,
}) => {
  const removeProduct = (item) => {
    setCartTotal(Number(cartTotal - item.price).toFixed(2));
    setcartItems(cartItems.filter((prod) => prod !== item));
  };

  return (
    <div className="cart__item">
      <figure>
        <img alt={name} src={img} />
      </figure>
      <div>
        <h3>{name}</h3>
        <span>{category}</span>
      </div>
      <Button variant="remove" onClick={() => removeProduct(prod)}>
        Remover
      </Button>
    </div>
  );
};

export default CartProduct;
