import { ShoppingCart } from "lucide-react";
import { useState } from 'react';
import PropTypes from 'prop-types';

const CartItem = ({ item }) => {
return (
    <div className="flex justify-between py-2">
    <span>{item.name}</span>
    <span>x{item.quantity}</span>
    </div>
);
};

CartItem.propTypes = {
item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
}).isRequired,
};

function CartWidget() {
const [cartItems, setCartItems] = useState([]); 
const [showCart, setShowCart] = useState(false);

const handleAddItem = () => {
    setCartItems([...cartItems, { name: 'New Item', quantity: 1 }]);
};

const handleToggleCart = () => {
    setShowCart(!showCart);
};

return (
    <div className="relative">
    <button className="bg-transparent border-0" onClick={handleToggleCart}>
        <ShoppingCart className="w-6 h-6 text-gray-600" />
        {cartItems.length > 0 && (
        <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
            {cartItems.length}
        </span>
        )}
    </button>
    {showCart && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-md p-4">
        <h4 className="text-lg font-bold">Carrito</h4>
        <ul>
            {cartItems.map((item, index) => (
            <li key={index}>
                <CartItem item={item} />
            </li>
            ))}
        </ul>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2" onClick={handleAddItem}>
            Agregar Producto
        </button>
        </div>
    )}
    </div>
);
}

export default CartWidget;
