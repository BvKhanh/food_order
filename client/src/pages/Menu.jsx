// src/pages/Menu.jsx
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
    <div className="container my-5" style={{ paddingTop: '70px' }}>
      <h2 className="text-center mb-4">Thực đơn</h2>
      {loading ? (
        <p className="text-center">Đang tải...</p>
      ) : error ? (
        <div className="alert alert-danger">{error}</div>
      ) : (
        <div className="row">
          {menuItems.map((item) => (
            <div className="col-md-4 mb-4" key={item.menu_id}>
              <div className="card h-100 shadow-sm">
                {item.image && (
                  <img
                    src={`http://localhost:5000${item.image}`}
                    className="card-img-top"
                    alt={item.name}
                    style={{ height: '200px', objectFit: 'cover' }}
                  />
                )}
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text">{item.price.toLocaleString()} VND</p>
                  <p className="card-text text-muted">{item.category}</p>
                  <p className="card-text small">{item.description}</p>
                  <button className="btn btn-primary" onClick={() => addToCart(item)}>
                    Thêm vào giỏ hàng
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Menu;