// src/pages/Cart.jsx
import React from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom'; // Thêm useNavigate
import '../css/Cart.css';

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity } = useCart();
  const navigate = useNavigate(); // Thêm navigate
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleCheckout = () => {
    navigate('/checkout'); // Chuyển đến trang thanh toán
  };

  return (
    <div className="container my-5" style={{ paddingTop: '70px' }}>
      <h2 className="text-center mb-4">Giỏ hàng của bạn</h2>
      {cartItems.length === 0 ? (
        <p className="text-center text-muted">Giỏ hàng trống. Hãy thêm món ăn từ menu!</p>
      ) : (
        <div className="card shadow-sm p-4">
          <div className="table-responsive">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Tên món</th>
                  <th>Giá (VND)</th>
                  <th>Số lượng</th>
                  <th>Tổng</th>
                  <th>Hành động</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>{item.price.toLocaleString()}</td>
                    <td>
                      <input
                        type="number"
                        className="form-control w-25 d-inline"
                        value={item.quantity}
                        onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                        min="1"
                      />
                    </td>
                    <td>{(item.price * item.quantity).toLocaleString()}</td>
                    <td>
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => removeFromCart(item.id)}
                      >
                        <i className="bi bi-trash"></i> Xóa
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="text-end mt-3">
            <h4>Tổng cộng: {total.toLocaleString()} VND</h4>
            <button className="btn btn-primary mt-2" onClick={handleCheckout}>
              Thanh toán
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;