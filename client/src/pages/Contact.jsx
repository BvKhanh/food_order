import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert('Vui lòng điền đầy đủ thông tin!');
      return;
    }
    // Giả lập gửi dữ liệu (thay bằng API thực tế nếu có)
    console.log('Dữ liệu gửi đi:', formData);
    alert('Tin nhắn của bạn đã được gửi thành công!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="container my-5" style={{ paddingTop: '70px' }}>
      {/* Header Section */}
      <div className="text-center mb-5">
        <h1 className="display-4 fw-bold">Liên hệ với Paradise Food</h1>
        <p className="lead text-muted">
          Chúng tôi luôn sẵn sàng lắng nghe và hỗ trợ bạn!
        </p>
      </div>

      {/* Contact Info Section */}
      <div className="row mb-5">
        <div className="col-md-6 mb-4">
          <h2 className="mb-4">Thông tin liên hệ</h2>
          <ul className="list-unstyled">
            <li className="mb-3">
              <i className="bi bi-geo-alt text-primary me-2"></i>
              <span>123 Đường Ẩm Thực, TP.HCM</span>
            </li>
            <li className="mb-3">
              <i className="bi bi-envelope text-primary me-2"></i>
              <span>contact@paradisefood.com</span>
            </li>
            <li className="mb-3">
              <i className="bi bi-telephone text-primary me-2"></i>
              <span>0909 123 456</span>
            </li>
          </ul>
          <div className="social-links">
            <a href="#" className="text-primary me-3">
              <i className="bi bi-facebook fs-3"></i>
            </a>
            <a href="#" className="text-primary me-3">
              <i className="bi bi-instagram fs-3"></i>
            </a>
            <a href="#" className="text-primary">
              <i className="bi bi-twitter fs-3"></i>
            </a>
          </div>
        </div>
        <div className="col-md-6">
          <h2 className="mb-4">Gửi tin nhắn cho chúng tôi</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Họ và tên</label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Nhập họ và tên"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Nhập email"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Tin nhắn</label>
              <textarea
                className="form-control"
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                placeholder="Nhập tin nhắn của bạn"
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Gửi tin nhắn</button>
          </form>
        </div>
      </div>

      {/* Map Section */}
      <div className="mb-5">
        <h2 className="text-center mb-4">Vị trí của chúng tôi</h2>
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.669688321847!2d106.68029231480088!3d10.759922392327156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f1c06f4e643%3A0x43900e614999e504!2sHo%20Chi%20Minh%20City!5e0!3m2!1sen!2s!4v1634567890123!5m2!1sen!2s"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Paradise Food Location"
          ></iframe>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center">
        <Link to="/" className="btn btn-outline-primary btn-lg">
          Quay lại Trang chủ
        </Link>
      </div>
    </div>
  );
};

export default Contact;