export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-column">
          <h4>DỊCH VỤ KHÁCH HÀNG</h4>
          <ul>
            <li>
              <a href="#">Trung Tâm Trợ Giúp</a>
            </li>
            <li>
              <a href="#">E Shop Blog</a>
            </li>
            <li>
              <a href="#">E-Shop Mail</a>
            </li>
            <li>
              <a href="#">Hướng Dẫn Mua Hàng</a>
            </li>
            <li>
              <a href="#">Hướng Dẫn Bán Hàng</a>
            </li>
            <li>
              <a href="#">Thanh Toán</a>
            </li>
            <li>
              <a href="#">E-Shop Xủ</a>
            </li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>VỀ E-SHOP</h4>
          <ul>
            <li>
              <a href="#">Giới Thiệu Về E-Shop</a>
            </li>
            <li>
              <a href="#">Tuyển Dụng</a>
            </li>
            <li>
              <a href="#">Điều Khoản E-Shop</a>
            </li>
            <li>
              <a href="#">Chính Sách Bảo Mật</a>
            </li>
            <li>
              <a href="#">Chính Hãng</a>
            </li>
            <li>
              <a href="#">Kênh Người Bán</a>
            </li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>THANH TOÁN</h4>
          <div className="payment-methods">
            <div className="payment-icon visa">VISA</div>
            <div className="payment-icon mastercard">
              <span className="mc-circle mc-red"></span>
              <span className="mc-circle mc-yellow"></span>
            </div>
            <div className="payment-icon jcb">JCB</div>
            <div className="payment-icon cod">COD</div>
          </div>
        </div>

        <div className="footer-column">
          <h4>THEO DÕI CHÚNG TÔI</h4>
          <ul className="social-links">
            <li>
              <a href="#">
                <span className="social-icon facebook-icon">f</span> Facebook
              </a>
            </li>
            <li>
              <a href="#">
                <span className="social-icon instagram-icon">📷</span> Instagram
              </a>
            </li>
            <li>
              <a href="#">
                <span className="social-icon linkedin-icon">in</span> LinkedIn
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>TẢI ỨNG DỤNG E-SHOP</h4>
          <div className="app-download">
            <div className="qr-code">
              <div className="qr-placeholder"></div>
            </div>
            <div className="app-buttons">
              <button className="app-store-button">
                <span className="app-icon">🍎</span>
                <div>
                  <div className="app-text-small">Download on the</div>
                  <div className="app-text-large">App Store</div>
                </div>
              </button>
              <button className="app-store-button">
                <span className="app-icon">▶️</span>
                <div>
                  <div className="app-text-small">GET IT ON</div>
                  <div className="app-text-large">Google Play</div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 E-Shop. TRit cả các quyền được bảo lưu.</p>
      </div>
    </footer>
  );
}
