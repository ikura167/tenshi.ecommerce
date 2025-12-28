"use client";

import { ErrorMessage } from "@/constants/dtos/errorMessage";
import { useLogin } from "@/hooks/useLogin";
import { Eye, EyeOff } from "lucide-react";
import { useEffect, useState } from "react";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  const {
    mutate: login,
    data: curUser,
    isPending,
    isError,
    error,
  } = useLogin();

  const handleLogin = () => {
    login({
      email: "hello@gmail.com",
      password: "123",
      userName: "test",
    });
  };

  useEffect(() => {
    if (curUser) {
      localStorage.setItem("curUser", JSON.stringify(curUser));
    }
  }, [curUser]);

  return (
    <main className="login-main">
      <div className="login-content">
        {/* Left Side - Banner */}
        <div className="login-banner">
          <div className="banner-text super">SUPER</div>
          <div className="banner-text sale">SALE</div>
          <div className="banner-subtext">UPOPUS SFECOME</div>
        </div>

        {/* Right Side - Login Form */}
        <div className="login-form-container">
          <div className="login-form-card">
            <h1 className="login-title">Đăng nhập</h1>

            <form className="login-form">
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Email/Số điện thoại/Tên đăng nhập"
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <div className="password-input-wrapper">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Mật khẩu"
                    className="form-input"
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

              <button
                type="button"
                className="login-button"
                onClick={handleLogin}
                disabled={isPending}
              >
                {isPending ? "Đang đăng nhập..." : "Đăng nhập"}
              </button>

              <a href="/auth/reset" className="forgot-password">
                Quên mật khẩu
              </a>

              <div className="divider">
                <span>hoặc</span>
              </div>

              <button type="button" className="google-login-button">
                <img
                  src="https://www.google.com/favicon.ico"
                  alt="Google"
                  width={20}
                  height={20}
                />
                Đăng nhập với Google
              </button>

              <div className="signup-prompt">
                <span>Bạn mới biết đến E-Shop?</span>{" "}
                <a href="/auth/register" className="signup-link">
                  Đăng ký
                </a>
              </div>
              {error && <p className="text-red-500">{error.title}</p>}
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
