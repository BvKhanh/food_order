import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import '../css/Menu.css';

const Menu = () => {
  const { restaurantId } = useParams();
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { addToCart } = useCart();

  useEffect(() => {
    fetchMenuItems();
  }, [restaurantId]);

  const fetchMenuItems = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`http://localhost:5000/api/menu/${restaurantId}`);
      if (!response.ok) throw new Error('Không thể lấy danh sách món ăn');
      const data = await response.json();
      setMenuItems(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="menu-page" style={{ minHeight: '100vh', background: '#f8f9fa', paddingTop: '80px' }}>
      <div className="container py-5">
        <h2
          className="text-center fw-bold mb-5"
          style={{ color: '#2d3436', fontSize: '2.8rem', letterSpacing: '1px' }}
        >
          Thực Đơn Paradise Food
        </h2>

        {loading ? (
          <div className="text-center py-5">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Đang tải...</span>
            </div>
            <p className="mt-3 text-muted">Đang tải thực đơn...</p>
          </div>
        ) : error ? (
          <div className="alert alert-danger text-center py-4" role="alert">
            <i className="bi bi-exclamation-triangle-fill me-2"></i>
            {error}
          </div>
        ) : menuItems.length === 0 ? (
          <p className="text-center text-muted py-5">Hiện tại chưa có món ăn nào trong thực đơn.</p>
        ) : (
          <div className="row g-4">
            {menuItems.map((item) => (
              <div className="col-md-4 col-sm-6" key={item.menu_id}>
                <div
                  className="menu-card card h-100 border-0 shadow-sm overflow-hidden"
                  style={{ borderRadius: '15px', background: '#fff' }}
                >
                  {item.image ? (
                    <div className="menu-card-img position-relative">
                      <img
                        src={`http://localhost:5000${item.image}`}
                        className="card-img-top"
                        alt={item.name}
                        style={{ height: '220px', objectFit: 'cover', transition: 'transform 0.3s ease' }}
                      />
                      <span
                        className="category-badge position-absolute top-0 end-0 m-2 px-3 py-1"
                        style={{
                          background: '#e17055',
                          color: '#fff',
                          borderRadius: '20px',
                          fontSize: '0.9rem',
                        }}
                      >
                        {item.category}
                      </span>
                    </div>
                  ) : (
                    <div
                      className="card-img-top bg-light d-flex align-items-center justify-content-center"
                      style={{ height: '220px' }}
                    >
                      <i className="bi bi-image text-muted" style={{ fontSize: '3rem' }}></i>
                    </div>
                  )}
                  <div className="card-body p-4 d-flex flex-column">
                    <h5
                      className="card-title fw-bold mb-2"
                      style={{ color: '#2d3436', fontSize: '1.4rem' }}
                    >
                      {item.name}
                    </h5>
                    <p
                      className="card-text text-primary fw-bold mb-2"
                      style={{ fontSize: '1.2rem' }}
                    >
                      {item.price.toLocaleString()} VND
                    </p>
                    <p
                      className="card-text text-muted small flex-grow-1"
                      style={{ lineHeight: '1.6' }}
                    >
                      {item.description || 'Món ăn thơm ngon, được chế biến từ nguyên liệu tươi sạch.'}
                    </p>
                    <button
                      className="btn btn-primary mt-3 align-self-start"
                      onClick={() => addToCart(item)}
                      style={{
                        borderRadius: '25px',
                        padding: '10px 20px',
                        background: '#e17055',
                        border: 'none',
                        transition: 'background 0.3s ease',
                      }}
                    >
                      <i className="bi bi-cart-plus me-2"></i>
                      Thêm vào giỏ
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Menu;