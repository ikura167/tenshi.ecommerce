"use client";

import { useState } from "react";
import "./reset.css";

export default function ForgotPasswordPage() {
  const [step, setStep] = useState(1); // 1: Email input, 2: Verification code, 3: New password

  return (
    <main className="forgot-main">
      <div className="forgot-content">
        {/* Left Side - Banner */}
        <div className="forgot-banner">
          <div className="banner-text super">SUPER</div>
          <div className="banner-text sale">SALE</div>
          <div className="banner-subtext">UPOPUS SFECOME</div>
        </div>

        {/* Right Side - Forgot Password Form */}
        <div className="forgot-form-container">
          <div className="forgot-form-card">
            <h1 className="forgot-title">Đặt lại mật khẩu</h1>

            {step === 1 && (
              <form
                className="forgot-form"
                onSubmit={(e) => e.preventDefault()}
              >
                <p className="forgot-description">
                  Nhập email hoặc số điện thoại của bạn để nhận mã xác nhận đặt
                  lại mật khẩu
                </p>

                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Email hoặc Số điện thoại"
                    className="form-input"
                    required
                  />
                </div>

                <button
                  type="button"
                  className="submit-button"
                  onClick={() => {
                    console.log("[v0] Moving to step 2");
                    setStep(2);
                  }}
                >
                  TIẾP THEO
                </button>

                <div className="back-to-login">
                  <a href="/auth/login" className="back-link">
                    ← Quay lại đăng nhập
                  </a>
                </div>
              </form>
            )}

            {step === 2 && (
              <form
                className="forgot-form"
                onSubmit={(e) => e.preventDefault()}
              >
                <p className="forgot-description">
                  Chúng tôi đã gửi mã xác nhận đến email/số điện thoại của bạn.
                  Vui lòng nhập mã để tiếp tục.
                </p>

                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Mã xác nhận"
                    className="form-input"
                    required
                    maxLength={6}
                  />
                </div>

                <div className="resend-section">
                  <span className="resend-text">Không nhận được mã?</span>{" "}
                  <button type="button" className="resend-button">
                    Gửi lại
                  </button>
                </div>

                <button
                  type="button"
                  className="submit-button"
                  onClick={() => {
                    console.log("[v0] Moving to step 3");
                    setStep(3);
                  }}
                >
                  XÁC NHẬN
                </button>

                <div className="back-to-login">
                  <a href="/login" className="back-link">
                    ← Quay lại đăng nhập
                  </a>
                </div>
              </form>
            )}

            {step === 3 && (
              <form
                className="forgot-form"
                onSubmit={(e) => e.preventDefault()}
              >
                <p className="forgot-description">Nhập mật khẩu mới của bạn</p>

                <div className="form-group">
                  <input
                    type="password"
                    placeholder="Mật khẩu mới"
                    className="form-input"
                    required
                  />
                </div>

                <div className="form-group">
                  <input
                    type="password"
                    placeholder="Xác nhận mật khẩu mới"
                    className="form-input"
                    required
                  />
                </div>

                <div className="password-requirements">
                  <p className="requirements-title">Mật khẩu phải có:</p>
                  <ul className="requirements-list">
                    <li>Ít nhất 8 ký tự</li>
                    <li>Ít nhất 1 chữ hoa</li>
                    <li>Ít nhất 1 chữ số</li>
                  </ul>
                </div>

                <button type="submit" className="submit-button">
                  ĐẶT LẠI MẬT KHẨU
                </button>

                <div className="back-to-login">
                  <a href="/login" className="back-link">
                    ← Quay lại đăng nhập
                  </a>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
