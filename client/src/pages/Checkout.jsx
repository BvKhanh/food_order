// src/pages/Checkout.jsx
import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import '../css/Checkout.css';

const Checkout = () => {
  const { cartItems, setCartItems } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleCheckout = async (e) => {
    e.preventDefault();
    if (!user) {
      alert('Vui lòng đăng nhập để thanh toán!');
      navigate('/login');
      return;
    }
    if (cartItems.length === 0) {
      alert('Giỏ hàng trống!');
      return;
    }

    setLoading(true);
    setError(null);
    try {
      const response = await fetch('http://localhost:5000/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId: user.id, cartItems }),
      });
      if (!response.ok) throw new Error('Thanh toán thất bại');
      setCartItems([]); // Xóa giỏ hàng sau khi thanh toán
      alert('Thanh toán thành công!');
      navigate('/menu');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container my-5" style={{ paddingTop: '70px' }}>
      <h2 className="text-center mb-4">Thanh toán</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      <div className="row">
        <div className="col-md-6">
          <div className="card shadow-sm p-4 mb-4">
            <h4>Thông tin đơn hàng</h4>
            {cartItems.length === 0 ? (
              <p className="text-muted">Giỏ hàng trống</p>
            ) : (
              <ul className="list-group">
                {cartItems.map((item) => (
                  <li key={item.id} className="list-group-item d-flex justify-content-between">
                    <span>{item.name} (x{item.quantity})</span>
                    <span>{(item.price * item.quantity).toLocaleString()} VND</span>
                  </li>
                ))}
                <li className="list-group-item d-flex justify-content-between fw-bold">
                  <span>Tổng cộng</span>
                  <span>{total.toLocaleString()} VND</span>
                </li>
              </ul>
            )}
          </div>
        </div>
        <div className="col-md-6">
          <div className="card shadow-sm p-4">
            <h4>Thông tin người nhận</h4>
            {user ? (
              <form onSubmit={handleCheckout}>
                <div className="mb-3">
                  <label className="form-label">Họ và tên</label>
                  <input
                    type="text"
                    className="form-control"
                    value={user.name}
                    disabled
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    value={user.email}
                    disabled
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Địa chỉ giao hàng</label>
                  <input
                    type="text"
                    className="form-control"
                    value={user.address}
                    disabled
                  />
                </div>
                <button type="submit" className="btn btn-primary w-100" disabled={loading}>
                  {loading ? 'Đang xử lý...' : 'Xác nhận thanh toán'}
                </button>
              </form>
            ) : (
              <p className="text-muted">Vui lòng đăng nhập để tiếp tục.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;