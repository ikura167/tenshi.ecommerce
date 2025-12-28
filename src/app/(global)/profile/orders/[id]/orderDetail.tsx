"use client";

import { useState } from "react";
import { ChevronLeft, Package, Truck, CheckCircle } from "lucide-react";
import "./orderDetail.css";

export default function OrderDetailPage({ id }: { id: string }) {
  const [expandedNotes, setExpandedNotes] = useState<number | null>(null);

  const orderDetail = {
    orderId: "ORD-20250115-001",
    date: "15/01/2025 10:30",
    status: "Đang Giao",
    statusColor: "shipping",
    total: "3,880,000đ",
    shippingCost: "25,000đ",
    subtotal: "3,855,000đ",
    seller: {
      name: "Gia Dụng Thảo Uyển",
      rating: "4.5",
      followers: "15.3K",
      response: "Online 3 Giờ Trước",
      verified: true,
    },
    timeline: [
      {
        step: 1,
        title: "Đơn hàng đã xác nhận",
        date: "15/01/2025 10:30",
        completed: true,
        icon: CheckCircle,
      },
      {
        step: 2,
        title: "Đơn hàng đã giao cho đơn vị vận chuyển",
        date: "16/01/2025 14:20",
        completed: true,
        icon: Package,
      },
      {
        step: 3,
        title: "Đơn hàng đang được giao",
        date: "17/01/2025 (Dự kiến)",
        completed: true,
        icon: Truck,
      },
      {
        step: 4,
        title: "Giao hàng thành công",
        date: "Chờ cập nhật",
        completed: false,
        icon: CheckCircle,
      },
      {
        step: 5,
        title: "Hoàn thành đơn hàng",
        date: "Chờ cập nhật",
        completed: false,
        icon: CheckCircle,
      },
    ],
    products: [
      {
        id: 1,
        name: "Hộp Dung Thảo Uyển",
        seller: "Gia Dụng Thảo Uyển",
        description:
          "Sản phẩm chất lượng cao, bảo hành 12 tháng, hỗ trợ miễn phí lắp đặt",
        image: "/order-product-1.jpg",
        price: "1,950,000đ",
        quantity: 2,
        total: "3,900,000đ",
        notes: [
          {
            id: 1,
            type: "info",
            content: "Hàng đã được kiểm tra kỹ trước khi gửi",
          },
          {
            id: 2,
            type: "warning",
            content: "Vui lòng kiểm tra hàng khi nhận, nếu có lỗi liên hệ ngay",
          },
        ],
      },
    ],
    shippingInfo: {
      address: "123 Đường Lê Lợi, Quận 1, TP. Hồ Chí Minh, 700000",
      phone: "0912345678",
      name: "Nguyễn Văn A",
      method: "Giao hàng nhanh - 25,000đ",
    },
  };

  return (
    <>
      {/* Main Content */}
      <main className="detail-main">
        {/* Back Button */}
        <button className="back-btn">
          <ChevronLeft size={20} />
          <span>Quay lại</span>
        </button>

        <div className="detail-container">
          {/* Left Sidebar */}
          <aside className="detail-sidebar">
            <div className="sidebar-title">Thông tin</div>
            <nav className="sidebar-menu">
              <a href="/dashboard" className="menu-item">
                📦 Tài Khoản
              </a>
              <a href="/order-history" className="menu-item active">
                🛍️ Đơn Mua
              </a>
              <a href="#" className="menu-item">
                ❤️ Yêu Thích
              </a>
              <a href="#" className="menu-item">
                🎟️ Kho Voucher
              </a>
              <a href="#" className="menu-item">
                👤 Thông Tin Cá Nhân
              </a>
              <a href="#" className="menu-item">
                🔒 Bảo Mật
              </a>
            </nav>
          </aside>

          {/* Main Content */}
          <div className="detail-content">
            {/* Order Info Header */}
            <div className="order-info-header">
              <div className="order-header-left">
                <h2 className="order-id">Mã Đơn: {orderDetail.orderId}</h2>
                <p className="order-date">{orderDetail.date}</p>
              </div>
              <div className={`order-status-badge ${orderDetail.statusColor}`}>
                {orderDetail.status}
              </div>
            </div>

            {/* Timeline Section */}
            <section className="timeline-section">
              <div className="timeline-header">
                <h3>Quá Trình Xử Lý Đơn Hàng</h3>
                <p className="timeline-note">Lịch sử và dự kiến giao hàng</p>
              </div>

              {/* Timeline Progress */}
              <div className="timeline-container">
                {orderDetail.timeline.map((item, index) => (
                  <div key={item.step} className="timeline-item">
                    <div
                      className={`timeline-node ${
                        item.completed ? "completed" : ""
                      }`}
                    >
                      <CheckCircle size={24} />
                    </div>
                    <div className="timeline-content">
                      <h4 className="timeline-title">{item.title}</h4>
                      <p className="timeline-date">{item.date}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="timeline-actions">
                <button className="action-btn primary">
                  Liên Hệ Người Bán
                </button>
                <button className="action-btn secondary">
                  Liên Hệ Người Giao
                </button>
              </div>
            </section>

            {/* Products Section */}
            <section className="products-section">
              <div className="section-header">
                <h3>Hộp Dung Thảo Uyển</h3>
                <span className="seller-tag">Người Bán</span>
              </div>

              {orderDetail.products.map((product) => (
                <div key={product.id} className="product-detail-card">
                  <div className="product-main">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="product-image"
                    />
                    <div className="product-content">
                      <h4 className="product-name">{product.name}</h4>
                      <p className="product-seller">{product.seller}</p>
                      <p className="product-desc">{product.description}</p>
                    </div>
                  </div>

                  {/* Product Notes */}
                  <div className="product-notes">
                    {product.notes.map((note) => (
                      <div
                        key={note.id}
                        className={`note-item note-${note.type}`}
                        onClick={() =>
                          setExpandedNotes(
                            expandedNotes === note.id ? null : note.id
                          )
                        }
                      >
                        <span className="note-icon">ℹ️</span>
                        <span className="note-text">{note.content}</span>
                      </div>
                    ))}
                  </div>

                  {/* Product Details */}
                  <div className="product-details">
                    <div className="detail-item">
                      <span className="label">Số lượng:</span>
                      <span className="value">{product.quantity}</span>
                    </div>
                    <div className="detail-item">
                      <span className="label">Giá:</span>
                      <span className="value">{product.price}</span>
                    </div>
                    <div className="detail-item">
                      <span className="label">Thành tiền:</span>
                      <span className="value total">{product.total}</span>
                    </div>
                  </div>
                </div>
              ))}
            </section>

            {/* Shipping Info Section */}
            <section className="shipping-section">
              <div className="section-header">
                <h3>Địa Chỉ Giao Hàng</h3>
              </div>

              <div className="shipping-card">
                <div className="shipping-info">
                  <div className="info-row">
                    <span className="label">Người nhận:</span>
                    <span className="value">
                      {orderDetail.shippingInfo.name}
                    </span>
                  </div>
                  <div className="info-row">
                    <span className="label">Địa chỉ:</span>
                    <span className="value">
                      {orderDetail.shippingInfo.address}
                    </span>
                  </div>
                  <div className="info-row">
                    <span className="label">Điện thoại:</span>
                    <span className="value">
                      {orderDetail.shippingInfo.phone}
                    </span>
                  </div>
                  <div className="info-row">
                    <span className="label">Phương thức vận chuyển:</span>
                    <span className="value">
                      {orderDetail.shippingInfo.method}
                    </span>
                  </div>
                </div>
              </div>

              {/* Promo Banner */}
              <div className="promo-banner">
                <span className="promo-icon">⭐</span>
                <span className="promo-text">
                  Bạn có thể hoàn lại hàng miễn phí trong 7 ngày nếu không hài
                  lòng
                </span>
              </div>
            </section>

            {/* Order Summary */}
            <section className="summary-section">
              <h3>Tóm Tắt Đơn Hàng</h3>
              <div className="summary-grid">
                <div className="summary-card">
                  <span className="summary-label">Tạm Tính</span>
                  <span className="summary-value">{orderDetail.subtotal}</span>
                </div>
                <div className="summary-card">
                  <span className="summary-label">Phí Vận Chuyển</span>
                  <span className="summary-value">
                    {orderDetail.shippingCost}
                  </span>
                </div>
                <div className="summary-card highlight">
                  <span className="summary-label">Tổng Tiền</span>
                  <span className="summary-value total">
                    {orderDetail.total}
                  </span>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}
