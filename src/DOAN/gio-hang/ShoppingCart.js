// components/ShoppingCart.js
import CartItem from './CartItem';

function ShoppingCart({ products, onQuantityChange }) {
  return (
    <div className="shopping-cart">
      {products.map((product) => (
        <CartItem key={product.ten} product={product} onQuantityChange={onQuantityChange} />
      ))}
    </div>
  );
}

export default ShoppingCart;
