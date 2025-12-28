"use client";

import Image from "next/image";
import {
  Search,
  ShoppingCart,
  Instagram,
  Youtube,
  Globe,
  ChevronDown,
  Trash2,
  Plus,
  Minus,
} from "lucide-react";
import { useState } from "react";

export default function CartContent() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedPlatform, setSelectedPlatform] = useState("1688");
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Tai Nghe Bluetooth 5.0 Không Dây TWS Pro4 K...",
      seller: "Cửa hàng Sỉ Lẻ Tốt",
      price: 235.0,
      quantity: 1,
      image: "/cart-item-1.jpg",
    },
    {
      id: 2,
      name: "Tai Nghe Bluetooth Chất Lượng Cao Pin Trâu...",
      seller: "Shop Điện Tử Việt",
      price: 125.0,
      quantity: 2,
      image: "/cart-item-2.jpg",
    },
  ]);

  const platforms = [
    { value: "1688", label: "1688", icon: "🏪" },
    { value: "taobao", label: "Taobao", icon: "🛍️" },
  ];

  const handlePlatformSelect = (platform: string) => {
    setSelectedPlatform(platform);
    setDropdownOpen(false);
  };

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <>
      {/* Cart Title */}
      <section className="cart-title-section">
        <h1>Giỏ hàng</h1>
        <button className="continue-shopping">Tiếp tục mua sắm</button>
      </section>

      {/* Cart Content */}
      <section className="cart-content">
        <div className="cart-items-section">
          <div className="cart-table">
            <div className="cart-header">
              <div className="checkbox-col">
                <input type="checkbox" />
              </div>
              <div className="product-col">Sản Phẩm</div>
              <div className="price-col">Giá</div>
              <div className="qty-col">Số Lượng</div>
              <div className="total-col">Thành Tiền</div>
              <div className="action-col">Hành Động</div>
            </div>

            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <div className="checkbox-col">
                  <input type="checkbox" />
                </div>
                <div className="product-col">
                  <div className="product-info">
                    <div className="product-image">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        width={80}
                        height={80}
                      />
                    </div>
                    <div className="product-details">
                      <p className="product-name">{item.name}</p>
                      <p className="seller-name">{item.seller}</p>
                    </div>
                  </div>
                </div>
                <div className="price-col">
                  {item.price.toLocaleString("vi-VN")}₫
                </div>
                <div className="qty-col">
                  <div className="quantity-control">
                    <button
                      className="qty-btn"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      disabled={item.quantity <= 1}
                    >
                      <Minus size={16} />
                    </button>
                    <input
                      type="number"
                      value={item.quantity}
                      onChange={(e) =>
                        updateQuantity(
                          item.id,
                          Number.parseInt(e.target.value) || 1
                        )
                      }
                      className="qty-input"
                    />
                    <button
                      className="qty-btn"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      <Plus size={16} />
                    </button>
                  </div>
                </div>
                <div className="total-col">
                  {(item.price * item.quantity).toLocaleString("vi-VN")}₫
                </div>
                <div className="action-col">
                  <button
                    className="delete-btn"
                    onClick={() => removeItem(item.id)}
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Cart Summary */}
        <div className="cart-summary">
          <div className="summary-card">
            <h3>Tóm Tắt Đơn Hàng</h3>
            <div className="summary-row">
              <span>Tổng Tiền Hàng:</span>
              <span>{totalPrice.toLocaleString("vi-VN")}₫</span>
            </div>
            <div className="summary-row">
              <span>Phí Vận Chuyển:</span>
              <span className="free">Miễn Phí</span>
            </div>
            <div className="summary-row">
              <span>Giảm Giá:</span>
              <span>-0₫</span>
            </div>
            <div className="summary-divider"></div>
            <div className="summary-total">
              <span>Tổng Cộng:</span>
              <span className="total-amount">
                {totalPrice.toLocaleString("vi-VN")}₫
              </span>
            </div>
            <button className="checkout-button">Thanh Toán</button>
          </div>
        </div>
      </section>
    </>
  );
}
