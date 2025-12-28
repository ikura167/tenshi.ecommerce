import { Globe, ShoppingCart } from "lucide-react";
import Searchbar from "@/components/ui/Searchbar";
import TopBarHeader from "@/components/layouts/TopBarHeader";

export default function Header() {
  return (
    <header className="header">
      <TopBarHeader />

      <div className="header-main">
        <div className="logo">
          <a href="/home">
            <img className="logo-circle icon" src="/logo.png" alt="Logo" />
          </a>
        </div>

        <div className="search-section">
          <div className="search-tabs">
            <button className="search-tab active">Sell</button>
            <button className="search-tab">
              Search for products, brands, and shops
            </button>
          </div>
          <Searchbar />
          <div className="search-links">
            <a href="#">So Sáy Phong</a>
            <a href="#">Lard Đồ Ấm</a>
            <a href="#">Quả Thị Tập Trang</a>
            <a href="#">Thị Mặc Mănsức</a>
            <a href="#">Snooks</a>
          </div>
        </div>

        <div className="header-actions">
          <button className="language-selector">
            <Globe size={16} />
            <span>English</span>
          </button>
          <a href="/cart" className="icon-button">
            <ShoppingCart size={20} />
          </a>
          <a href="/auth/login" className="btn-login">
            Log In
          </a>
          <a href="/auth/register" className="btn-signup">
            Sign Up
          </a>
        </div>
      </div>
    </header>
  );
}
