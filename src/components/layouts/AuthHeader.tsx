export default function AuthHeader() {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          <a href="/home">
            <img className="logo-circle icon" src="/logo.png" alt="Logo" />
          </a>
          <span className="header-title">Đăng ký</span>
        </div>
        <a href="/supports" className="help-link">
          Bạn cần giúp đỡ?
        </a>
      </div>
    </header>
  );
}
