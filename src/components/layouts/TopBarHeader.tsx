export default function TopBarHeader() {
  return (
    <div className="header-top">
      <nav className="header-nav">
        <a href="/home">Trang chủ</a>
        <a href="/products">Sản phẩm</a>
        <a href="#">Liên hệ</a>
        <a href="#">Về chúng tôi</a>
      </nav>
      <div className="header-right">
        <span className="contact-info">Tp.HN: 67 - 43563</span>
      </div>
    </div>
  );
}
