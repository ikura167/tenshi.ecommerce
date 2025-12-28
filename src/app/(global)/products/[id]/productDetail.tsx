"use client";

import Image from "next/image";
import {
  Search,
  ShoppingCart,
  Instagram,
  Youtube,
  Globe,
  ChevronDown,
  Heart,
  Share2,
} from "lucide-react";
import { useState } from "react";
import "./productDetail.css";

interface Product {
  id: string;
}

export default function ProductDetail({ params }: { params: Product }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedPlatform, setSelectedPlatform] = useState("1688");
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  const platforms = [
    { value: "1688", label: "1688", icon: "🏪" },
    { value: "taobao", label: "Taobao", icon: "🛍️" },
  ];

  const handlePlatformSelect = (platform: string) => {
    setSelectedPlatform(platform);
    setDropdownOpen(false);
  };

  const productImages = [
    "/modern-smartphone.jpg",
    "/modern-smartphone.png",
    "/order-product-2.jpg",
    "/order-product-2.jpg",
    "/order-product-2.jpg",
  ];

  const relatedProducts = [
    { name: "Smartphone", price: 299.99, image: "/modern-smartphone.png" },
    { name: "White T-Shirt", price: 19.99, image: "/white-t-shirt.png" },
    {
      name: "Green Plant Pot",
      price: 45.0,
      image: "/terracotta-pot-succulent.png",
    },
    { name: "Modern Chair", price: 199.99, image: "/modern-chair.png" },
    { name: "Brown Boots", price: 89.99, image: "/brown-leather-boots.png" },
    { name: "Green Cup", price: 15.0, image: "/green-cup.jpg" },
  ];

  return (
    <>
      {/* Product Detail Main Section */}
      <section className="product-detail-main">
        <div className="product-detail-left">
          {/* Main Image */}
          <div className="product-main-image">
            <Image
              src={
                productImages[selectedImage] ||
                "/placeholder.svg?height=400&width=400&query=product"
              }
              alt="Product"
              width={400}
              height={400}
            />
          </div>

          {/* Thumbnail Images */}
          <div className="product-thumbnails">
            {productImages.map((image, index) => (
              <button
                key={index}
                className={`thumbnail ${
                  selectedImage === index ? "active" : ""
                }`}
                onClick={() => setSelectedImage(index)}
              >
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`Product ${index}`}
                  width={80}
                  height={80}
                />
              </button>
            ))}
          </div>
        </div>

        <div className="product-detail-right">
          <h1 className="product-title">
            Bộ Bảng Thảo Uyễn - Giai Đạng Nói Hát Tiểu Luận Lầu Thần Xả Luận
          </h1>

          <div className="product-pricing-section">
            <div className="price-row">
              <span className="current-price">5.000₫</span>
              <span className="original-price">12.500₫</span>
              <span className="discount-badge">-60%</span>
            </div>
            <div className="price-info">
              <span className="total-sold">Đã bán 10+</span>
              <span className="rating">⭐ 4.9/5 (215 đánh giá)</span>
            </div>
          </div>

          <div className="product-options">
            <div className="option-group">
              <label>Màu sắc</label>
              <input
                type="text"
                placeholder="Chọn màu"
                className="option-input"
              />
            </div>

            <div className="option-group">
              <label>Kích thước</label>
              <select className="option-input">
                <option>Chọn kích thước</option>
                <option>Size S</option>
                <option>Size M</option>
                <option>Size L</option>
                <option>Size XL</option>
              </select>
            </div>
          </div>

          <div className="quantity-section">
            <label>Số lượng</label>
            <div className="quantity-selector">
              <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>
                -
              </button>
              <input
                type="number"
                value={quantity}
                onChange={(e) =>
                  setQuantity(Number.parseInt(e.target.value) || 1)
                }
              />
              <button onClick={() => setQuantity(quantity + 1)}>+</button>
            </div>
          </div>

          <div className="action-buttons">
            <button className="btn-add-cart">Thêm vào giỏ hàng</button>
            <button className="btn-buy-now">Mua ngay</button>
          </div>

          <div className="product-actions">
            <button className="action-btn">
              <Heart size={20} />
              Yêu thích
            </button>
            <button className="action-btn">
              <Share2 size={20} />
              Chia sẻ
            </button>
          </div>
        </div>
      </section>

      {/* Seller Information */}
      <section className="seller-section">
        <div className="seller-info">
          <div className="seller-avatar">💼</div>
          <div className="seller-details">
            <h3>Gía Dụng Thảo Uyễn</h3>
            <p>Online 3 Giờ Trước</p>
          </div>
          <div className="seller-stats">
            <div className="stat">
              <span className="stat-label">Đánh Giá</span>
              <span className="stat-value">4.9%</span>
            </div>
            <div className="stat">
              <span className="stat-label">Tỉ Lệ Phản Hồi</span>
              <span className="stat-value">1.7 Ngày</span>
            </div>
            <div className="stat">
              <span className="stat-label">Sản Phẩm</span>
              <span className="stat-value">345</span>
            </div>
          </div>
        </div>

        <div className="seller-action">
          <button className="btn-contact">Nhắn tin</button>
          <button className="btn-visit-shop">Xem shop</button>
        </div>
      </section>

      {/* Product Description Tabs */}
      <section className="product-description-section">
        <div className="description-tabs">
          <button className="tab active">QUY TẮC LƯU HÀNH</button>
          <button className="tab">NỘI DUNG CHI TIẾT</button>
        </div>

        <div className="description-content">
          <h4>QUY TẮC LƯU HÀNH</h4>
          <p>
            Sản phẩm này được bảo hành 12 tháng từ ngày mua hàng. Vui lòng lưu ý
            các điểm sau khi sử dụng sản phẩm:
          </p>
          <ul>
            <li>Tránh tiếp xúc với nước và ẩm ướt trong thời gian dài</li>
            <li>Không sử dụng các hóa chất mạnh để vệ sinh</li>
            <li>Bảo quản ở nơi khô ráo, thoáng mát</li>
            <li>Tránh rơi vào các bề mặt cứng hoặc va chạm mạnh</li>
          </ul>
          <h4>DỊCH VỤ CỦA SHOP</h4>
          <ul>
            <li>Giao hàng miễn phí cho đơn hàng từ 100.000đ trở lên</li>
            <li>
              Chính sách đổi trả trong 7 ngày nếu sản phẩm có lỗi từ nhà sản
              xuất
            </li>
            <li>Hỗ trợ khách hàng 24/7 qua chat hoặc điện thoại</li>
          </ul>
        </div>
      </section>

      {/* Related Products */}
      <section className="related-products-section">
        <h2>SẢN PHẨM LIÊN QUAN</h2>
        <div className="related-products-grid">
          {relatedProducts.map((product, index) => (
            <div key={index} className="related-product-card">
              <div className="related-product-image">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  width={150}
                  height={150}
                />
              </div>
              <h4>{product.name}</h4>
              <p className="related-product-price">
                {product.price.toLocaleString("vi-VN")}₫
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
