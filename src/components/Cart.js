import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);
  const userId = localStorage.getItem('id');
  
  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await axios.get(`https://newmail-2.onrender.com/cart/${userId}`);
        setCartItems(response.data);

        console.log(cartItems)
        calculateTotal(response.data);
      } catch (error) {
        console.error('Error fetching cart items:', error);
      }
    };

    fetchCartItems();
  }, [userId]);

  const calculateTotal = (items) => {
    const totalAmount = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    setTotal(totalAmount);
  };

  const handleDeleteItem = async (itemId) => {
    try {
      await axios.delete(`https://newmail-2.onrender.com/cart/delete/${userId}/${itemId}`);
      const updatedCartItems = cartItems.filter(item => item.id !== itemId);
      setCartItems(updatedCartItems);
      calculateTotal(updatedCartItems);
    } catch (error) {
      console.error('Error deleting cart item:', error);
    }
  };

  const handlePlaceOrder = () => {
    // Implement place order functionality
    console.log('Order placed');
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      <div className="flex flex-col space-y-4">
        {cartItems.map((item) => (
          <div key={item.id} className="flex items-center justify-between p-4 bg-white shadow rounded-lg">
            <div className="flex items-center space-x-4">
              <img src={`https://newmail-2.onrender.com/uploads/${item.images}`} alt={item.productName} className="w-16 h-16 object-cover rounded-lg" />
              <div>
                <h3 className="text-lg font-semibold">{item.productName}</h3>
                <p className="text-gray-600">Price: ${item.price}</p>
                <p className="text-gray-600">Quantity: {item.quantity}</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-lg font-bold">${(item.price * item.quantity).toFixed(2)}</div>
             
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 flex justify-between items-center">
        <div className="text-lg font-bold">Total: ${total.toFixed(2)}</div>
        <button
          onClick={handlePlaceOrder}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Place Order
        </button>
      </div>
    </div>
  );
};

export default Cart;
