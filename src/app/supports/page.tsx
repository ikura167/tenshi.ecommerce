"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import "./support.css";

export default function SupportPage() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeCategory, setActiveCategory] = useState("about");

  const categories = [
    { id: "about", label: "Giới Thiệu Về TENSHI" },
    { id: "why-choose", label: "Tại sao nên chọn TENSHI?" },
    { id: "shipping", label: "Hướng dẫn giao hàng" },
    { id: "return", label: "Chính sách hoàn/trả" },
    { id: "payment", label: "Hướng dẫn thanh toán" },
    { id: "safety", label: "An toàn giao dịch" },
    { id: "faq", label: "Câu hỏi thường gặp" },
    { id: "contact", label: "Liên hệ chúng tôi" },
    { id: "complaint", label: "Khiếu nại & Góp ý" },
    { id: "terms", label: "Điều khoản dịch vụ" },
    { id: "privacy", label: "Chính sách bảo mật" },
    { id: "seller-guide", label: "Hướng dẫn bán hàng" },
  ];

  return (
    <>
      {/* Header */}
      <header className="support-header">
        <div className="support-header-content">
          <div className="logo-section">
            <a href="/home">
              <img className="logo-circle icon" src="/logo.png" alt="Logo" />
            </a>
            <span>Hỗ Trợ Khách Hàng</span>
          </div>
          <div className="header-right">
            <div className="search-bar">
              <input
                type="text"
                placeholder="Tìm kiếm sản phẩm, tên cửa hàng, tên thương hiệu"
              />
              <button className="search-btn">🔍</button>
            </div>
            <button
              className="menu-toggle"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <div className="user-icons">
              <span className="user-location">TP. HCM</span>
            </div>
          </div>
        </div>
      </header>
      {/* Main Content */}
      <main className="support-main">
        <div className="support-container">
          {/* Sidebar */}
          <aside className={`support-sidebar ${sidebarOpen ? "open" : ""}`}>
            <nav className="sidebar-menu">
              {categories.map((item) => (
                <button
                  key={item.id}
                  className={`menu-item ${
                    activeCategory === item.id ? "active" : ""
                  }`}
                  onClick={() => setActiveCategory(item.id)}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </aside>

          {/* Content Area */}
          <div className="support-content">
            {activeCategory === "about" && (
              <div className="content-section">
                <div className="content-header">
                  <h1>Giới Thiệu Về TENSHI</h1>
                  <button className="btn-print">In ấn</button>
                </div>

                <div className="intro-box">
                  <p>
                    TENSHI là nền tảng thương mại điện tử hàng đầu tại Việt Nam,
                    cung cấp các sản phẩm chất lượng cao với giá cả phải chăng.
                    Chúng tôi tận tâm phục vụ khách hàng với dịch vụ tốt nhất.
                  </p>
                </div>

                <div className="intro-image-container">
                  <img
                    src="/support-hero.jpg"
                    alt="TENSHI Team"
                    className="intro-image"
                  />
                </div>

                <div className="why-choose-section">
                  <h2>Tại sao nên chọn TENSHI?</h2>

                  <div className="benefit-item">
                    <div className="benefit-number">1</div>
                    <div className="benefit-content">
                      <h3>Người bán uy tín, đa dạng</h3>
                      <p>
                        Với các cửa hàng được xác minh và có bảng xếp hạng cao,
                        bạn có thể yên tâm mua sắm. Chúng tôi kiểm duyệt kỹ
                        lưỡng mỗi người bán trước khi chúng họ bán hàng trên nền
                        tảng.
                      </p>
                    </div>
                  </div>

                  <div className="benefit-item">
                    <div className="benefit-number">2</div>
                    <div className="benefit-content">
                      <h3>Vận chuyển nhanh chóng</h3>
                      <p>
                        TENSHI hợp tác với các công ty vận chuyển hàng đầu để
                        đảm bảo đơn hàng của bạn được giao nhanh chóng và an
                        toàn. Chúng tôi cung cấp dịch vụ vận chuyển miễn phí cho
                        đơn hàng từ 100.000 VNĐ trở lên.
                      </p>
                    </div>
                  </div>

                  <div className="benefit-item">
                    <div className="benefit-number">3</div>
                    <div className="benefit-content">
                      <h3>An toàn thanh toán</h3>
                      <p>
                        TENSHI sử dụng công nghệ mã hóa hiện đại để bảo vệ thông
                        tin thanh toán của bạn. Bạn có thể thanh toán bằng thẻ
                        tín dụng, chuyển khoản ngân hàng hoặc thanh toán khi
                        nhận hàng (COD).
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeCategory !== "about" && (
              <div className="content-section">
                <h1>
                  {categories.find((c) => c.id === activeCategory)?.label}
                </h1>
                <p className="placeholder-text">
                  Nội dung mục "
                  {categories.find((c) => c.id === activeCategory)?.label}" sẽ
                  được cập nhật sớm.
                </p>
              </div>
            )}
          </div>
        </div>
      </main>
    </>
  );
}
