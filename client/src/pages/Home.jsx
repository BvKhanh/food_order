import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar'; // Import Navbar
import '../css/Home.css';
import '../css/Navbar.css';


const Home = () => {
  const [timeLeft, setTimeLeft] = useState(24 * 60 * 60);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes
      .toString()
      .padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const flashDeals = [
    { id: 1, name: 'Phở Bò', oldPrice: 50000, newPrice: 35000, image: 'https://via.placeholder.com/300x200?text=Pho+Bo' },
    { id: 2, name: 'Bún Chả', oldPrice: 45000, newPrice: 30000, image: 'https://via.placeholder.com/300x200?text=Bun+Cha' },
    { id: 3, name: 'Cơm Tấm', oldPrice: 40000, newPrice: 25000, image: 'https://via.placeholder.com/300x200?text=Com+Tam' },
  ];

  const menuCategories = [
    { title: 'Bữa sáng', description: 'Bắt đầu ngày mới với những món ăn nhẹ nhàng, bổ dưỡng.', icon: 'bi-egg-fried' },
    { title: 'Bữa chính', description: 'Bữa ăn đầy đủ năng lượng cho ngày dài năng động.', icon: 'bi-star' },
    { title: 'Thức uống', description: 'Giải khát với các loại nước tươi mát, đa dạng.', icon: 'bi-cup-straw' },
    { title: 'Tráng miệng', description: 'Kết thúc bữa ăn bằng những món ngọt ngào.', icon: 'bi-cake2' },
  ];

  return (
    <>
      <Navbar /> {/* Sử dụng Navbar component */}

      <div className="container my-5" style={{ paddingTop: '70px' }}>
        {/* Banner Carousel */}
        <div id="bannerCarousel" className="carousel slide mb-5" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="jumbotron jumbotron-custom text-white p-5 rounded-3">
                <div className="row align-items-center">
                  <div className="col-md-8">
                    <h1 className="display-4 fw-bold">Chào mừng đến với Food Order App</h1>
                    <p className="lead">Đặt món ăn yêu thích với giá ưu đãi hôm nay.</p>
                    <Link to="/menu" className="btn custom-order-btn btn-lg mt-3">Đặt món ngay</Link>
                  </div>
                  <div className="col-md-4 text-center">
                    <i className="bi bi-basket fs-1"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="jumbotron bg-success text-white p-5 rounded-3">
                <div className="row align-items-center">
                  <div className="col-md-8">
                    <h1 className="display-4 fw-bold">Ưu đãi Phở Bò!</h1>
                    <p className="lead">Chỉ 35.000 VND hôm nay.</p>
                    <Link to="/menu" className="btn custom-order-btn btn-lg mt-3">Đặt ngay</Link>
                  </div>
                  <div className="col-md-4 text-center">
                    <i className="bi bi-bowl-hot fs-1"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#bannerCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#bannerCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

        {/* Flash Deal Section */}
        <div className="mb-5">
          <h2 className="text-center mb-4 text-danger">Flash Deal - Ưu đãi chớp nhoáng!</h2>
          <div className="text-center mb-4">
            <span className="badge bg-danger fs-5 p-2">Còn lại: {formatTime(timeLeft)}</span>
          </div>
          <div className="row">
            {flashDeals.map((deal) => (
              <div className="col-md-4 mb-4" key={deal.id}>
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body text-center">
                    <h5 className="card-title">{deal.name}</h5>
                    <p className="card-text text-muted text-decoration-line-through">
                      {deal.oldPrice.toLocaleString()} VND
                    </p>
                    <p className="card-text text-danger fw-bold fs-5">
                      {deal.newPrice.toLocaleString()} VND
                    </p>
                    <Link to="/menu" className="btn btn-outline-primary">Đặt ngay</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Explore Menu Section */}
        <div className="mb-5">
          <h2 className="text-center mb-4">Khám phá Menu</h2>
          <div className="row">
            {menuCategories.map((category) => (
              <div className="col-md-3 mb-4" key={category.title}>
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body text-center">
                    <i className={`bi ${category.icon} fs-2 text-primary mb-3`}></i>
                    <h5 className="card-title">{category.title}</h5>
                    <p className="card-text">{category.description}</p>
                    <Link to="/menu" className="btn btn-outline-primary">Xem ngay</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="mb-5">
          <h2 className="text-center mb-4">Khách hàng nói gì</h2>
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="card p-3 border-0 shadow-sm">
                <p>"Món ăn ngon, giao hàng nhanh!"</p>
                <p className="fw-bold text-end">- Nguyễn Văn A</p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card p-3 border-0 shadow-sm">
                <p>"Giá cả hợp lý, rất đáng thử."</p>
                <p className="fw-bold text-end">- Trần Thị B</p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card p-3 border-0 shadow-sm">
                <p>"Dịch vụ tuyệt vời, sẽ quay lại!"</p>
                <p className="fw-bold text-end">- Lê Văn C</p>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="row text-center">
          <div className="col-md-4 mb-4">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body">
                <i className="bi bi-truck fs-1 text-primary"></i>
                <h5 className="card-title mt-3">Giao hàng nhanh</h5>
                <p className="card-text">Nhận món ăn trong vòng 30 phút.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body">
                <i className="bi bi-star-fill fs-1 text-primary"></i>
                <h5 className="card-title mt-3">Chất lượng cao</h5>
                <p className="card-text">Nguyên liệu tươi ngon, đảm bảo vệ sinh.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body">
                <i className="bi bi-wallet2 fs-1 text-primary"></i>
                <h5 className="card-title mt-3">Giá cả hợp lý</h5>
                <p className="card-text">Thưởng thức món ngon với giá phải chăng.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Floating CTA Button */}
        <Link to="/menu" className="btn btn-danger btn-lg rounded-circle position-fixed bottom-0 end-0 m-4" style={{ zIndex: 1000 }}>
          <i className="bi bi-cart"></i>
        </Link>
      </div>

    </>
  );
};

export default Home;