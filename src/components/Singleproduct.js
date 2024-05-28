import React, { useState, useEffect } from 'react';

import axios from 'axios';
import References from './References';
import { useParams } from 'react-router-dom';
export default function SingleProduct() {
  const [product, setProduct] = useState(null);

  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };


  const handleBuyNow = async () => {
    // Check if user is logged in
    const token = localStorage.getItem('id'); // Assuming token is stored in localStorage
    if (!token) {
      window.location.href = '/login';
      return;
    }

    try {
      // Add item to cart
      const userId = localStorage.getItem('id'); // Assuming user ID is stored in localStorage

      const params = new URLSearchParams();
      params.append('userId', userId);
      params.append('productId', id);
      params.append('quantity', quantity);

      const response = await axios.post(
        'https://newmail-2.onrender.com/addcart',
        params,
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        }
      );

      if (response.status === 200) {
        console.log(`Added ${quantity} item(s) to cart`);
        // Redirect to cart page or show a success message
      }
    } catch (error) {
      console.error('Error adding to cart:', error);
    }
  };

  const getProduct = async () => {
    try {
      const res = await axios.get(`https://newmail-2.onrender.com/propertybyid/${id}`);
      setProduct(res.data);
    } catch (error) {
      console.error('Error fetching product:', error);
    }
  };

  useEffect(() => {
    getProduct();
  }, [id]);

  return (
    <div className="pd-wrap py-10 font-poppins">
      <div className="container mx-auto">
        <div className="heading-section mb-8">
          <h2 className="text-3xl font-semibold">Food Details</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="col-span-1">
            <div id="thumb" className="owl-carousel product-thumb">
              <img src={`https://newmail-2.onrender.com/uploads/${product?.images}`} alt={product?.name} className="w-full h-auto rounded-lg shadow-lg" />
            </div>
          </div>
          <div className="col-span-1">
            <div className="product-dtl">
              <div className="product-info">
                <div className="product-name text-2xl font-semibold">{product?.title}</div>
                <div className="reviews-counter flex items-center">
                  <div className="rate"></div>
                  <span className="text-sm ml-2">3 Reviews</span>
                </div>
                <div className="product-price-discount mt-2">
                  <span className="text-xl font-semibold">${product?.price}</span>
                  <span className="line-through text-sm ml-2">$29</span>
                </div>
              </div>
              <p className="text-gray-700 mt-4">{product?.description}</p>
              <div className="mt-4 flex items-center">
                <label htmlFor="quantity" className="text-gray-700 mr-4">Quantity</label>
                <div className="flex items-center border border-gray-300 rounded overflow-hidden">
                  <button className="bg-gray-900 text-white px-3 py-1 flex items-center justify-center focus:outline-none" onClick={decreaseQuantity}>-</button>
                  <input type="number" name="quantity" className="border-0 px-2 py-1 w-16 text-center" value={quantity} onChange={(e) => setQuantity(parseInt(e.target.value))} />
                  <button className="bg-gray-900 text-white px-3 py-1 flex items-center justify-center focus:outline-none" onClick={increaseQuantity}>+</button>
                </div>
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded ml-4 inline-block" onClick={handleBuyNow}>Order Now</button>
              </div>
            </div>
          </div>
        </div>
        <div className="product-info-tabs mt-8">
          <ul className="nav nav-tabs" id="myTab" role="tablist">
            <li className="nav-item">
              <a className="nav-link active" id="description-tab" data-toggle="tab" href="#description" role="tab" aria-controls="description" aria-selected="true">Description</a>
            </li>
          </ul>
          <div className="tab-content" id="myTabContent">
            <div className="tab-pane fade show active" id="description" role="tabpanel" aria-labelledby="description-tab">
              <p className="text-gray-700 mt-4">{product?.description}</p>
            </div>
            <div className="tab-pane fade" id="review" role="tabpanel" aria-labelledby="review-tab">
              {/* Reviews */}
            </div>
          </div>
        </div>
      </div>
      <References />
    </div>
  );
}
