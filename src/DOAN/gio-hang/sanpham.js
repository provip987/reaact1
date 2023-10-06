
import CartItem from './CartItem';
function Sanpham({ products, onQuantityChange }) {
    return (


        
        <>
        
            <div className="shopping-cart">
                {products.map((product) => (
                    <CartItem key={product.ten} product={product} onQuantityChange={onQuantityChange} />
                ))}
            </div>
        </>
    );
}
export default Sanpham;