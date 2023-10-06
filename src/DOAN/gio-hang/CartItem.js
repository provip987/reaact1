// components/CartItem.js

function CartItem({ product, onQuantityChange }) {
    return (
      <div className="cart-item">
        <span>{product.ten}</span>
        <span>{product.gia}</span>
        <input type="number" defaultValue={1} onChange={(e) => onQuantityChange(product, e.target.value)} />
        <span>{product.gia * product.quantity}</span>
      </div>
    );
  }
  
  export default CartItem;
  