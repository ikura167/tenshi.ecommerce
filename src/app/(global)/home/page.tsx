import Image from "next/image";

export default function Home() {
  const flashSaleProducts = [
    {
      name: "Classic Analog Wristwatch",
      price: 29.99,
      originalPrice: 49.99,
      image: "/classic-analog-wristwatch.jpg",
      sales: "85 Sold",
    },
    {
      name: "Performance Running Shoes",
      price: 49.99,
      originalPrice: 89.99,
      image: "/red-performance-running-shoes.jpg",
      sales: "156 Sold",
    },
    {
      name: "Noise Cancelling Headphones",
      price: 45.95,
      originalPrice: 79.99,
      image: "/yellow-noise-cancelling-headphones.jpg",
      sales: "238 Sold",
    },
    {
      name: "Elegant Leather Handbag",
      price: 79.0,
      originalPrice: 99.0,
      image: "/blue-elegant-leather-handbag.jpg",
      sales: "45 Sold",
    },
    {
      name: "Automatic Coffee Machine",
      price: 125.0,
      originalPrice: 450.0,
      image: "/black-automatic-coffee-machine.jpg",
      sales: "18 Sold",
    },
    {
      name: "Automatic Coffee Machine",
      price: 150.0,
      originalPrice: 520.0,
      image: "/steel-automatic-coffee-machine.jpg",
      sales: "25 Sold",
    },
    {
      name: "Automatic Coffee Machine",
      price: 125.0,
      originalPrice: 450.0,
      image: "/black-coffee-machine-2.jpg",
      sales: "12 Sold",
    },
    {
      name: "Automatic Coffee Machine",
      price: 150.0,
      originalPrice: 640.0,
      image: "/premium-coffee-machine.jpg",
      sales: "8 Sold",
    },
    {
      name: "Automatic Coffee Machine",
      price: 125.0,
      originalPrice: 640.0,
      image: "/deluxe-coffee-machine.jpg",
      sales: "15 Sold",
    },
  ];

  const categories = [
    { name: "Electronics", icon: "📱" },
    { name: "Fashion", icon: "👕" },
    { name: "Home", icon: "🏠" },
    { name: "Health & Beauty", icon: "💄" },
    { name: "Groceries", icon: "🛒" },
    { name: "Mobiles", icon: "📱" },
    { name: "Sports", icon: "⚽" },
    { name: "Toys & Kids", icon: "🧸" },
    { name: "Automotive", icon: "🚗" },
    { name: "Deals", icon: "🏷️" },
  ];

  const recommendedProducts = [
    {
      name: "Latest Model Smartphone Mk",
      price: 699.0,
      sales: "1.5k sold",
      image: "/modern-smartphone.jpg",
    },
    {
      name: "Premium Cotton T-Shirt",
      price: 19.99,
      sales: "5.3k sold",
      image: "/white-cotton-tshirt.jpg",
    },
    {
      name: "Ultra Thin Laptop 4K HDR",
      price: 1250.0,
      sales: "871 sold",
      image: "/plant-decor.jpg",
    },
    {
      name: "Modern Accent Armchair",
      price: 299.0,
      sales: "412 sold",
      image: "/grey-modern-armchair.jpg",
    },
    {
      name: "Men's Leather Ankle Boots",
      price: 89.0,
      sales: "1.9k sold",
      image: "/brown-leather-ankle-boots.jpg",
    },
    {
      name: "Handmade Ceramic Mug",
      price: 25.0,
      sales: "1.8k sold",
      image: "/handmade-ceramic-mug-teal.jpg",
    },
    {
      name: "Handmade Ceramic Mug",
      price: 25.0,
      sales: "2.6k sold",
      image: "/handmade-ceramic-mug-teal.jpg",
    },
    {
      name: "Handmade Ceramic Mug",
      price: 25.0,
      sales: "3.4k sold",
      image: "/handmade-ceramic-mug-teal.jpg",
    },
    {
      name: "Handmade Ceramic Mug",
      price: 25.0,
      sales: "1.8k sold",
      image: "/handmade-ceramic-mug-teal.jpg",
    },
  ];

  return (
    <>
      <section className="hero-banner">
        <div className="hero-content">
          <h1>Grand Launch Sale</h1>
          <p>Up to 50% Off Everything!</p>
        </div>
        <div className="hero-sale-text">SALE</div>
        <div className="hero-dots">
          <span className="dot active"></span>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
      </section>

      {/* Flash Sale Section */}
      <section className="flash-sale-section">
        <div className="section-header">
          <div className="section-title">
            <h2>FLASH SALE</h2>
            <div className="countdown">
              <span className="countdown-item">01</span>
              <span className="countdown-item">23</span>
              <span className="countdown-item">43</span>
            </div>
          </div>
          <a href="#" className="see-all">
            See All
          </a>
        </div>

        <div className="product-grid">
          {flashSaleProducts.map((product, index) => (
            <a href={`/products/1`} key={index} className="product-card">
              <div className="product-image">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  width={150}
                  height={150}
                />
              </div>
              <h3 className="product-name">{product.name}</h3>
              <div className="product-pricing">
                <span className="product-price">${product.price}</span>
                <span className="product-original-price">
                  ${product.originalPrice}
                </span>
              </div>
              <div className="product-sales">{product.sales}</div>
            </a>
          ))}
        </div>
      </section>

      {/* Categories Section */}
      <section className="categories-section">
        <h2>Categories</h2>
        <div className="categories-grid">
          {categories.map((category, index) => (
            <div key={index} className="category-item">
              <div className="category-icon">{category.icon}</div>
              <span className="category-name">{category.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* TENSHI Recommends Section */}
      <section className="recommends-section">
        <h2>TENSHI Recommends</h2>
        <div className="recommends-grid">
          {recommendedProducts.map((product, index) => (
            <a href={`/products/1`} key={index} className="recommend-card">
              <div className="recommend-image">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  width={200}
                  height={200}
                />
              </div>
              <h3 className="recommend-name">{product.name}</h3>
              <div className="recommend-footer">
                <span className="recommend-price">${product.price}</span>
                <span className="recommend-sales">{product.sales}</span>
              </div>
            </a>
          ))}
        </div>
        <button className="load-more-button">Load More</button>
      </section>
    </>
  );
}
