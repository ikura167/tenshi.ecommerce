"use client";

import Image from "next/image";
import {
  Search,
  ShoppingCart,
  Instagram,
  ChevronDown,
  Filter,
} from "lucide-react";
import { useState } from "react";
import "./products.css";

export default function ProductsPage() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedPlatform, setSelectedPlatform] = useState("1688");
  const [categoryExpanded, setCategoryExpanded] = useState(false);
  const [locationExpanded, setLocationExpanded] = useState(true);
  const [brandExpanded, setBrandExpanded] = useState(true);

  const platforms = [
    { value: "1688", label: "1688", icon: "🏪" },
    { value: "taobao", label: "Taobao", icon: "🛍️" },
  ];

  const handlePlatformSelect = (platform: string) => {
    setSelectedPlatform(platform);
    setDropdownOpen(false);
  };

  const products = [
    {
      name: "Tai Nghe Máy Bluetooth P47/A, Tai Máo Dễ Thương Giảp Độn",
      price: "53.000đ",
      originalPrice: "",
      sold: "Đã bán 30k+",
      image: "/product-bluetooth-headset.jpg",
      discount: "-45%",
    },
    {
      name: "Tai Nghe Bluetooth Hifi Macaron U19 3.5m...",
      price: "15.899đ",
      originalPrice: "",
      sold: "Đã bán 100k+",
      image: "/product-macaron-case.jpg",
      discount: "-30%",
    },
    {
      name: "Tai Nghe Chụp Tai Bluetooth Y08, P47 Tai...",
      price: "51.999đ",
      originalPrice: "",
      sold: "Đã bán 2k+",
      image: "/product-bluetooth-earbuds.jpg",
      discount: "-61%",
    },
    {
      name: "Tai nghe Bluetooth Có Dây Và Mic...",
      price: "17.780đ",
      originalPrice: "",
      sold: "Đã bán 10k+",
      image: "/product-woman-headphones.jpg",
      discount: "-47%",
    },
    {
      name: "Tai nghé dễ thương VÔ DỊCH",
      price: "17.780đ",
      originalPrice: "",
      sold: "Đã bán 80k+",
      image: "/product-fashion-woman.jpg",
      discount: "-41%",
    },
    {
      name: "Tai Nghe Bluetooth 5.0 Không Dây TWS Phiệt K...",
      price: "54.035đ",
      originalPrice: "",
      sold: "Đã bán 20k+",
      image: "/product-man-laptop.jpg",
      discount: "-46%",
    },
  ];

  return (
    <div className="products-main-content">
      {/* Sidebar */}
      <aside className="products-sidebar">
        <div className="products-sidebar-header">
          <Filter size={18} />
          <h3>Tất Cả Danh Mục</h3>
        </div>

        {/* Categories */}
        <div className="products-sidebar-section">
          <button className="products-sidebar-category-main">
            <span>Thiết Bị Điện Tử</span>
            <ChevronDown size={16} />
          </button>
          <ul className="products-sidebar-list">
            <li>
              <a href="#">Phụ kiện tivi</a>
            </li>
            <li>
              <a href="#">Máy Game-Console</a>
            </li>
            <li>
              <a href="#">Phụ kiện Console</a>
            </li>
            <li>
              <a href="#">Đĩa game</a>
            </li>
            <li>
              <a href="#">Linh phụ kiện</a>
            </li>
            <li>
              <button
                className="products-sidebar-expand"
                onClick={() => setCategoryExpanded(!categoryExpanded)}
              >
                Thêm{" "}
                <ChevronDown
                  size={14}
                  className={categoryExpanded ? "expanded" : ""}
                />
              </button>
            </li>
          </ul>
        </div>

        {/* Filter Section */}
        <div className="products-sidebar-section products-filter-section">
          <div className="products-filter-header">
            <Filter size={16} />
            <h4>BỘ LỌC TÌM KIẾM</h4>
          </div>

          {/* Location Filter */}
          <div className="products-filter-group">
            <button
              className="products-filter-group-header"
              onClick={() => setLocationExpanded(!locationExpanded)}
            >
              <span>Nơi Bán</span>
              <ChevronDown
                size={14}
                className={locationExpanded ? "expanded" : ""}
              />
            </button>
            {locationExpanded && (
              <div className="products-filter-options">
                <label className="products-checkbox-label">
                  <input type="checkbox" />
                  <span>TP. Hồ Chí Minh</span>
                </label>
                <label className="products-checkbox-label">
                  <input type="checkbox" />
                  <span>Hà Nội</span>
                </label>
                <label className="products-checkbox-label">
                  <input type="checkbox" />
                  <span>Thái Nguyên</span>
                </label>
                <label className="products-checkbox-label">
                  <input type="checkbox" />
                  <span>Vĩnh Phúc</span>
                </label>
                <button className="products-filter-expand">Thêm</button>
              </div>
            )}
          </div>

          {/* Brand Filter */}
          <div className="products-filter-group">
            <button
              className="products-filter-group-header"
              onClick={() => setBrandExpanded(!brandExpanded)}
            >
              <span>Thương Hiệu</span>
              <ChevronDown
                size={14}
                className={brandExpanded ? "expanded" : ""}
              />
            </button>
            {brandExpanded && (
              <div className="products-filter-options">
                <label className="products-checkbox-label">
                  <input type="checkbox" />
                  <span>ONTESCO</span>
                </label>
                <label className="products-checkbox-label">
                  <input type="checkbox" />
                  <span>Nintendo</span>
                </label>
                <label className="products-checkbox-label">
                  <input type="checkbox" />
                  <span>NYT</span>
                </label>
                <label className="products-checkbox-label">
                  <input type="checkbox" />
                  <span>Baseus</span>
                </label>
                <button className="products-filter-expand">Thêm</button>
              </div>
            )}
          </div>

          {/* Price Filter */}
          <div className="products-filter-group">
            <h5 className="products-filter-subtitle">Khoảng Giá</h5>
            <div className="products-price-range">
              <input
                type="text"
                placeholder="đ từ"
                className="products-price-input"
              />
              <span className="products-price-separator">-</span>
              <input
                type="text"
                placeholder="đ Đến"
                className="products-price-input"
              />
            </div>
            <button className="products-filter-apply-btn">ÁP DỤNG</button>
          </div>
        </div>
      </aside>

      {/* Main Product Area */}
      <main className="products-main">
        {/* Shop Info */}
        <div className="products-shop-info">
          <div className="products-shop-avatar">
            <div className="products-shop-icon">
              <ShoppingCart size={24} />
            </div>
          </div>
          <div className="products-shop-details">
            <h2>Gia Dụng Thảo Uyên</h2>
            <p className="products-shop-subtitle">Online 3 Giờ Trước</p>
          </div>
          <div className="products-shop-stats">
            <div className="products-shop-stat">
              <span className="products-stat-label">Đánh Giá</span>
              <span className="products-stat-value">91.9k</span>
            </div>
            <div className="products-shop-stat">
              <span className="products-stat-label">Tỉ Lệ Phản Hồi</span>
              <span className="products-stat-value">91%</span>
            </div>
            <div className="products-shop-stat">
              <span className="products-stat-label">Tham Gia</span>
              <span className="products-stat-value">17 tháng trước</span>
            </div>
            <div className="products-shop-stat">
              <span className="products-stat-label">Sản Phẩm</span>
              <span className="products-stat-value">345</span>
            </div>
            <div className="products-shop-stat">
              <span className="products-stat-label">Thời Gian Phản Hồi</span>
              <span className="products-stat-value">17 tháng trước</span>
            </div>
            <div className="products-shop-stat">
              <span className="products-stat-label text-coral">
                Trong vài giờ
              </span>
              <span className="products-stat-label">Người Theo Dõi</span>
              <span className="products-stat-value text-coral">3.9k</span>
            </div>
          </div>
        </div>

        {/* Sorting Options */}
        <div className="products-sorting">
          <span className="products-sort-label">Sắp xếp theo</span>
          <button className="products-sort-btn active">Phổ Biến</button>
          <button className="products-sort-btn">Mới Nhất</button>
          <button className="products-sort-btn">Bán Chạy</button>
          <button className="products-sort-btn">
            Giá <ChevronDown size={14} />
          </button>
          <div className="products-pagination">
            <span>1/7</span>
            <button className="products-page-btn">&lt;</button>
            <button className="products-page-btn">&gt;</button>
          </div>
        </div>

        {/* Product Grid */}
        <div className="products-grid">
          {products.map((product, index) => (
            <a
              href={`/products/1`}
              key={index}
              className="products-product-card"
            >
              {product.discount && (
                <span className="products-discount-badge">
                  {product.discount}
                </span>
              )}
              <div className="products-product-image">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  width={200}
                  height={200}
                  className="products-image"
                />
              </div>
              <div className="products-product-info">
                <h3 className="products-product-name">{product.name}</h3>
                <div className="products-product-footer">
                  <span className="products-product-price">
                    {product.price}
                  </span>
                  <span className="products-product-sold">{product.sold}</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </main>
    </div>
  );
}
