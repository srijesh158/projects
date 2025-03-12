import { useCart } from "./CartContext";
import { useNavigate } from "react-router-dom";
import "./Cart.css";

const Cart = () => {
    const { cart, removeFromCart } = useCart();
    const navigate = useNavigate();
    
    const totalPrice = cart.reduce((acc, item) => acc + item.pcost * item.quantity, 0);

    return (
        <div className="cart-container">
            {/* Back Button */}
            <button className="back-button" onClick={() => navigate(-1)}>← Back</button>

            <h2>Your Cart</h2>
            {cart.length === 0 ? (
                <p>Cart is empty</p>
            ) : (
                <div>
                    {cart.map((item) => (
                        <div key={item.id} className="cart-item">
                            <img src={item.pimage} alt={item.pname} />
                            <div>
                                <h3>{item.pname}</h3>
                                <p>Price: ₹{item.pcost}</p>
                                <p>Quantity: {item.quantity}</p>
                                <button onClick={() => removeFromCart(item.id)}>Remove</button>
                            </div>
                        </div>
                    ))}
                    <h3>Total: ₹{totalPrice}</h3>
                </div>
            )}
        </div>
    );
};

export default Cart;