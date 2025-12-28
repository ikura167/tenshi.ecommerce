"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import "./dashboard.css";

export default function DashboardPage() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeMenu, setActiveMenu] = useState("dashboard");

  const menuItems = [
    { id: "dashboard", label: "Tài Khoản Của Tôi", icon: "👤" },
    { id: "orders", label: "Đơn Mua", icon: "📦" },
    { id: "addresses", label: "Địa Chỉ Của Tôi", icon: "📍" },
    { id: "payments", label: "Ví Của Tôi", icon: "💳" },
    { id: "favorites", label: "Yêu Thích", icon: "❤️" },
    { id: "vouchers", label: "Kho Voucher", icon: "🎟️" },
    { id: "settings", label: "Cài Đặt", icon: "⚙️" },
    { id: "profile", label: "Thông Tin Cá Nhân", icon: "👥" },
    { id: "security", label: "Bảo Mật", icon: "🔒" },
    { id: "notifications", label: "Thông Báo", icon: "🔔" },
    { id: "logout", label: "Đăng Xuất", icon: "🚪" },
  ];

  return (
    <>
      {/* Main Content */}
      <main className="dashboard-main">
        <div className="dashboard-container">
          {/* Sidebar */}
          <aside className={`dashboard-sidebar ${sidebarOpen ? "open" : ""}`}>
            <div className="sidebar-user-info">
              <div className="user-avatar">👤</div>
              <div className="user-details">
                <h3>Người Dùng</h3>
                <p>user@example.com</p>
              </div>
            </div>

            <nav className="sidebar-menu">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  className={`menu-item ${
                    activeMenu === item.id ? "active" : ""
                  }`}
                  onClick={() => setActiveMenu(item.id)}
                >
                  <span className="menu-icon">{item.icon}</span>
                  <span className="menu-label">{item.label}</span>
                </button>
              ))}
            </nav>
          </aside>

          {/* Content Area */}
          <div className="dashboard-content">
            <div className="content-header">
              <h2>Tài Khoản Của Tôi</h2>
              <button className="edit-profile-btn">Chỉnh Sửa Hồ Sơ</button>
            </div>

            {/* Statistics Cards */}
            <div className="stats-grid">
              <div className="stat-card balance">
                <div className="stat-label">Số Dư Ví</div>
                <div className="stat-value">3,880.25 VNĐ</div>
              </div>
              <div className="stat-card pending">
                <div className="stat-icon">📦</div>
                <div className="stat-info">
                  <div className="stat-label">Đơn Chờ Xác Nhận</div>
                  <div className="stat-number">0</div>
                </div>
              </div>
              <div className="stat-card shipping">
                <div className="stat-icon">🚚</div>
                <div className="stat-info">
                  <div className="stat-label">Đang Giao</div>
                  <div className="stat-number">0</div>
                </div>
              </div>
              <div className="stat-card refund">
                <div className="stat-icon">♻️</div>
                <div className="stat-info">
                  <div className="stat-label">Hoàn/Trả Hàng</div>
                  <div className="stat-number">0</div>
                </div>
              </div>
            </div>

            {/* Order Status Section */}
            <div className="order-status-section">
              <h3 className="section-title">Trạng Thái Đơn Hàng</h3>
              <div className="status-grid">
                <div className="status-item">
                  <div className="status-icon pending">📋</div>
                  <div className="status-label">Chờ Xác Nhận</div>
                  <div className="status-count">0</div>
                </div>
                <div className="status-item">
                  <div className="status-icon processing">⚙️</div>
                  <div className="status-label">Đang Xử Lý</div>
                  <div className="status-count">0</div>
                </div>
                <div className="status-item">
                  <div className="status-icon shipping">🚚</div>
                  <div className="status-label">Đang Giao</div>
                  <div className="status-count">0</div>
                </div>
                <div className="status-item">
                  <div className="status-icon completed">✓</div>
                  <div className="status-label">Đã Giao</div>
                  <div className="status-count">0</div>
                </div>
                <div className="status-item">
                  <div className="status-icon cancelled">✕</div>
                  <div className="status-label">Đã Hủy</div>
                  <div className="status-count">0</div>
                </div>
              </div>
            </div>

            {/* Recent Orders */}
            <div className="recent-orders-section">
              <h3 className="section-title">Đơn Hàng Gần Đây</h3>
              <div className="no-orders">
                <p>Bạn chưa có đơn hàng nào</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
