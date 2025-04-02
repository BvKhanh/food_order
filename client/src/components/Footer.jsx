// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Footer.css';

const Footer = () => {
  return (
    <footer className="bg-light text-center py-3">
      <p>&copy; 2023 Paradise Food. All rights reserved.</p>
      <Link
        to="/cart" // Đổi từ /menu sang /cart
        className="btn btn-danger btn-lg rounded-circle position-fixed bottom-0 end-0 m-4"
        style={{ zIndex: 1000 }}
      >
        <i className="bi bi-cart"></i>
      </Link>
    </footer>
  );
};

export default Footer;