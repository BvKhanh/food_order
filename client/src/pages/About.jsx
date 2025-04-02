import React from 'react';
import { Link } from 'react-router-dom';
import '../css/About.css';

const About = () => {
  return (
    <div className="container my-5" style={{ paddingTop: '70px' }}>
      {/* Header Section */}
      <div className="text-center mb-5">
        <h1 className="display-4 fw-bold">Giới thiệu về Paradise Food</h1>
        <p className="lead text-muted">
          Chúng tôi mang đến những bữa ăn ngon, tiện lợi và chất lượng cho bạn!
        </p>
      </div>

      {/* Our Story Section */}
      <div className="row mb-5">
        <div className="col-md-6">
          <h2 className="mb-4">Câu chuyện của chúng tôi</h2>
          <p>
            Paradise Food ra đời từ niềm đam mê mang đến những món ăn Việt Nam truyền thống kết hợp với sự tiện lợi của công nghệ hiện đại. Chúng tôi bắt đầu từ một ý tưởng đơn giản: giúp mọi người thưởng thức những bữa ăn ngon mà không cần phải tốn quá nhiều thời gian.
          </p>
        </div>
        <div className="col-md-6 text-center">
          <i className="bi bi-shop fs-1 text-primary mb-3"></i>
          <p className="text-muted">Từ nhà bếp đến bàn ăn của bạn!</p>
        </div>
      </div>

      {/* Mission Section */}
      <div className="row mb-5">
        <div className="col-md-6 text-center">
          <i className="bi bi-heart-fill fs-1 text-danger mb-3"></i>
          <p className="text-muted">Đặt tình yêu vào từng món ăn.</p>
        </div>
        <div className="col-md-6">
          <h2 className="mb-4">Sứ mệnh của chúng tôi</h2>
          <p>
            Chúng tôi không chỉ cung cấp thức ăn, mà còn lan tỏa niềm vui và sự hài lòng qua từng bữa ăn. Sứ mệnh của Paradise Food là trở thành lựa chọn hàng đầu cho những ai yêu thích ẩm thực Việt Nam.
          </p>
        </div>
      </div>

      {/* Core Values Section */}
      <div className="mb-5">
        <h2 className="text-center mb-4">Giá trị cốt lõi</h2>
        <div className="row text-center">
          <div className="col-md-4 mb-4">
            <i className="bi bi-star-fill fs-1 text-primary mb-3"></i>
            <h5>Chất lượng</h5>
            <p>Nguyên liệu tươi ngon, đảm bảo vệ sinh.</p>
          </div>
          <div className="col-md-4 mb-4">
            <i className="bi bi-clock fs-1 text-primary mb-3"></i>
            <h5>Tiện lợi</h5>
            <p>Đặt hàng nhanh chóng, giao hàng đúng giờ.</p>
          </div>
          <div className="col-md-4 mb-4">
            <i className="bi bi-tree fs-1 text-primary mb-3"></i>
            <h5>Bền vững</h5>
            <p>Cam kết bảo vệ môi trường.</p>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="mb-5">
        <h2 className="text-center mb-4">Đội ngũ của chúng tôi</h2>
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="card h-100 border-0 shadow-sm text-center">
              <div className="card-body">
                <i className="bi bi-person-circle fs-1 text-primary mb-3"></i>
                <h5 className="card-title">Nguyễn Văn A</h5>
                <p className="card-text text-muted">Đầu bếp trưởng</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card h-100 border-0 shadow-sm text-center">
              <div className="card-body">
                <i className="bi bi-person-circle fs-1 text-primary mb-3"></i>
                <h5 className="card-title">Trần Thị B</h5>
                <p className="card-text text-muted">Quản lý</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card h-100 border-0 shadow-sm text-center">
              <div className="card-body">
                <i className="bi bi-person-circle fs-1 text-primary mb-3"></i>
                <h5 className="card-title">Lê Văn C</h5>
                <p className="card-text text-muted">Chuyên viên công nghệ</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Milestones Section */}
      <div className="mb-5">
        <h2 className="text-center mb-4">Hành trình của chúng tôi</h2>
        <div className="timeline">
          <div className="row mb-4">
            <div className="col-md-6">
              <h5>2020 - Khởi đầu</h5>
              <p>Paradise Food ra đời với cửa hàng đầu tiên tại TP.HCM.</p>
            </div>
            <div className="col-md-6 text-center">
              <i className="bi bi-geo-alt fs-1 text-primary"></i>
            </div>
          </div>
          <div className="row mb-4">
            <div className="col-md-6 text-center">
              <i className="bi bi-phone fs-1 text-primary"></i>
            </div>
            <div className="col-md-6">
              <h5>2022 - Ứng dụng ra mắt</h5>
              <p>Phát hành ứng dụng đặt món ăn trực tuyến.</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <h5>2025 - Mở rộng</h5>
              <p>Phủ sóng toàn quốc với hơn 50 chi nhánh.</p>
            </div>
            <div className="col-md-6 text-center">
              <i className="bi bi-globe fs-1 text-primary"></i>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center">
        <h3 className="mb-4">Hãy cùng thưởng thức!</h3>
        <Link to="/menu" className="btn btn-primary btn-lg">
          Xem Menu Ngay
        </Link>
      </div>
    </div>
  );
};

export default About;