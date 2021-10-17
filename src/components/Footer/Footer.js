import './Footer.css';

export default function Footer() {
    return(
        <div id="footer">
        <div className="container">
          <div className="d-flex justify-content-center">
            <a href="#" className="logo_footer"/><img src="https://kfcvietnam.com.vn/templates/images/logo_footer_vi.png"/>
          </div>
          <div className="footer_top">
            <div>
              <div className="row no-gutters">
                <div className="col">
                  <div className="card_item">
                    <div className="card_item_header">
                      <a href="#"><span>Thực đơn</span></a>
                    </div>
                    <div className="card_item_header">
                      <a href="#"><span>Nhà hàng</span></a>
                    </div>
                    <div className="card_item_header">
                      <a href="#"><span>Tin khuyến mãi</span></a>
                    </div>
                    <div className="card_item_header">
                      <a href="#"><span>Đặt tiệc sinh nhật</span></a>
                    </div>
                    <div className="card_item_header">
                      <a href="#"><span>Thành viên</span></a>
                    </div>
                    <div className="card_item_header d-inline-block d-lg-none">
                      <a href="#"><span>Giới thiệu</span></a>
                    </div>
                    <div className="card_item_header d-inline-block d-lg-none">
                      <a href="#" target="_blank"><span>Nghề nghiệp</span></a>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card_item">
                    <div className="card_item_header d-none d-lg-block">
                      <a href="#"><span>Giới thiệu</span></a>
                    </div>
                    <nav className="nav flex-column">
                      <a className="nav-link" href="#"><span>KFC Việt Nam</span></a>
                      <a className="nav-link" href="#"><span>Tin tức</span></a>
                    </nav>
                  </div>
                </div>
                <div className="col">
                  <div className="card_item">
                    <div className="card_item_header d-none d-lg-block">
                      <a href="#"><span>Nghề nghiệp</span></a>
                    </div>
                    <nav className="nav flex-column">
                      <a className="nav-link" href="#" target="_blank"><span>Tuyển dụng</span></a>
                    </nav>
                  </div>
                </div>
                <div className="col-12 col-lg-4">
                  <div className="row no-gutters">
                    <div className="col-6">
                      <div className="card_item">
                        <div className="card_item_header">
                          <a href="javascript:void(0);"><span>Kết nối với KFC</span></a>
                        </div>
                        <nav className="nav flex-column">
                          <a className="nav-link" href="#"><span>Liên hệ</span></a>
                        </nav>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="nav_social">
                        <ul className="nav justify-content-end">
                          <li className="nav-item">
                            <a className="nav-link" href="#" target="_blank"><img src="https://kfcvietnam.com.vn/templates/images/icon_fb_red.svg" alt=""/></a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="#" target="_blank"><img src="https://kfcvietnam.com.vn/templates/images/icon_yt_red.svg" alt=""/></a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="#" target="_blank"><img src="https://kfcvietnam.com.vn/templates/images/icon_ins_red.svg" alt=""/></a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer_bot">
            <div className="row no-gutters">
              <div className="col-12 col-lg-6">
                <div>
                  <span>
                    <p><strong>CÔNG TY LIÊN DOANH TNHH KFC VIỆT NAM</strong></p>
                    <p>Số 292 Bà Triệu, P. Lê Đại Hành, Q. Hai Bà Trưng, TP. Hà Nội.</p>
                    <p>Điện thoại: <a href="#">(028) 38489828</a></p>
                    <p>Email: <a href="#">lienhe@kfcvietnam.com.vn</a></p>
                    <p>Mã số thuế: 0100773885</p>
                    <p>Ngày cấp: 29/10/1998 - Nơi cấp: Cục Thuế Thành Phố Hà Nội</p>
                  </span>
                </div>
              </div>
              <div className="col-12">
                <div className="text_copyright text-center">
                  <span>
                    <p>Chính sách và quy định chung | Chính sách hoạt động | Chính sách bảo mật thông tin</p><p>Copyright © 2021 KFC Vietnam</p>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}