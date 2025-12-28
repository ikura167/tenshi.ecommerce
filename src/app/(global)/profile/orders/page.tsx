"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import "./orderHistory.css";

export default function OrderHistoryPage() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeMenu, setActiveMenu] = useState("orders");

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

  const orders = [
    {
      id: 1,
      orderId: "ORD-20250115-001",
      date: "15/01/2025",
      status: "Chờ Xác Nhận",
      statusColor: "pending",
      products: [
        {
          name: "Tai Nghe Bluetooth Chất Lượng Cao",
          image: "/order-product-1.jpg",
          price: "250,000đ",
          qty: 1,
        },
      ],
      total: "250,000đ",
    },
    {
      id: 2,
      orderId: "ORD-20250110-002",
      date: "10/01/2025",
      status: "Đang Giao",
      statusColor: "shipping",
      products: [
        {
          name: "Điện Thoại Thông Minh 5G",
          image: "/order-product-2.jpg",
          price: "8,999,000đ",
          qty: 1,
        },
      ],
      total: "8,999,000đ",
    },
    {
      id: 3,
      orderId: "ORD-20250105-003",
      date: "05/01/2025",
      status: "Đã Giao",
      statusColor: "completed",
      products: [
        {
          name: "Đồng Hồ Thông Minh Kết Nối",
          image: "/order-product-3.jpg",
          price: "3,500,000đ",
          qty: 1,
        },
      ],
      total: "3,500,000đ",
    },
    {
      id: 4,
      orderId: "ORD-20250101-004",
      date: "01/01/2025",
      status: "Đã Giao",
      statusColor: "completed",
      products: [
        {
          name: "Túi Xách Da Cao Cấp",
          image: "/order-product-4.jpg",
          price: "2,150,000đ",
          qty: 1,
        },
      ],
      total: "2,150,000đ",
    },
  ];

  return (
    <>
      {/* Main Content */}
      <main className="order-main">
        <div className="order-container">
          {/* Sidebar */}
          <aside className={`order-sidebar ${sidebarOpen ? "open" : ""}`}>
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
          <div className="order-content">
            <div className="content-header">
              <h2>Quản Lý Đơn Hàng</h2>
              <span className="order-count">
                Tổng: {orders.length} đơn hàng
              </span>
            </div>

            {/* Filter Tabs */}
            <div className="filter-tabs">
              <button className="filter-tab active">Tất Cả Đơn</button>
              <button className="filter-tab">Chờ Xác Nhận</button>
              <button className="filter-tab">Đang Giao</button>
              <button className="filter-tab">Đã Giao</button>
              <button className="filter-tab">Đã Hủy</button>
            </div>

            {/* Orders List */}
            <div className="orders-list">
              {orders.map((order) => (
                <div
                  key={order.id}
                  className={`order-item order-${order.statusColor}`}
                >
                  {/* Order Header */}
                  <div className="order-item-header">
                    <div className="order-info">
                      <div className="order-id">Mã Đơn: {order.orderId}</div>
                      <div className="order-date">Ngày: {order.date}</div>
                    </div>
                    <div className={`order-status ${order.statusColor}`}>
                      {order.status}
                    </div>
                  </div>

                  {/* Order Products */}
                  <div className="order-products">
                    {order.products.map((product, idx) => (
                      <div key={idx} className="product-row">
                        <div className="product-image">
                          <img
                            src={product.image || "/placeholder.svg"}
                            alt={product.name}
                          />
                        </div>
                        <div className="product-info">
                          <h4>{product.name}</h4>
                          <p className="product-sku">Số lượng: {product.qty}</p>
                        </div>
                        <div className="product-price">
                          <span className="price">{product.price}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Order Footer */}
                  <div className="order-item-footer">
                    <div className="order-total">
                      <span className="total-label">Tổng Tiền:</span>
                      <span className="total-amount">{order.total}</span>
                    </div>
                    <div className="order-actions">
                      <button className="action-btn view">Xem Chi Tiết</button>
                      <button className="action-btn track">Theo Dõi</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="pagination">
              <button className="page-btn disabled">‹</button>
              <button className="page-btn active">1</button>
              <button className="page-btn">2</button>
              <button className="page-btn">3</button>
              <button className="page-btn">›</button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
