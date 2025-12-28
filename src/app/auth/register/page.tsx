"use client";

import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import "./register.css";

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <main className="register-main">
      <div className="register-content">
        {/* Left Side - Banner */}
        <div className="register-banner">
          <div className="banner-text super">SUPER</div>
          <div className="banner-text sale">SALE</div>
          <div className="banner-subtext">UPOPUS SFECOME</div>
        </div>

        {/* Right Side - Register Form */}
        <div className="register-form-container">
          <div className="register-form-card">
            <h1 className="register-title">Đăng ký</h1>

            <form className="register-form">
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Họ và tên"
                  className="form-input"
                  required
                />
              </div>

              <div className="form-group">
                <input
                  type="email"
                  placeholder="Email"
                  className="form-input"
                  required
                />
              </div>

              <div className="form-group">
                <input
                  type="text"
                  placeholder="Số điện thoại"
                  className="form-input"
                  required
                />
              </div>

              <div className="form-group">
                <div className="password-input-wrapper">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Mật khẩu"
                    className="form-input"
                    required
                  />
                  <button
                    type="button"
                    className="password-toggle"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <Eye size={20} /> : <EyeOff size={20} />}
                  </button>
                </div>
              </div>

              <div className="form-group">
                <div className="password-input-wrapper">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Xác nhận mật khẩu"
                    className="form-input"
                    required
                  />
                  <button
                    type="button"
                    className="password-toggle"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? (
                      <Eye size={20} />
                    ) : (
                      <EyeOff size={20} />
                    )}
                  </button>
                </div>
              </div>

              <button type="submit" className="register-button">
                ĐĂNG KÝ
              </button>

              <div className="divider">
                <span>hoặc</span>
              </div>

              <button type="button" className="google-register-button">
                <img
                  src="https://www.google.com/favicon.ico"
                  alt="Google"
                  width={20}
                  height={20}
                />
                Đăng ký với Google
              </button>

              <div className="terms-text">
                Bằng việc đăng ký, bạn đã đồng ý với E-Shop về{" "}
                <a href="#" className="terms-link">
                  Điều khoản dịch vụ
                </a>{" "}
                &{" "}
                <a href="#" className="terms-link">
                  Chính sách bảo mật
                </a>
              </div>

              <div className="login-prompt">
                <span>Bạn đã có tài khoản?</span>{" "}
                <a href="/auth/login" className="login-link">
                  Đăng nhập
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
