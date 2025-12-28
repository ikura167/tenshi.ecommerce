"use client";

import { Camera, ChevronDown, Search } from "lucide-react";
import { useState } from "react";

export default function Searchbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedPlatform, setSelectedPlatform] = useState("1688");

  const platforms = [
    { value: "1688", label: "1688", icon: "🏪" },
    { value: "taobao", label: "Taobao", icon: "🛍️" },
  ];

  const handlePlatformSelect = (platform: string) => {
    setSelectedPlatform(platform);
    setDropdownOpen(false);
  };

  return (
    <div className="search-box">
      <div className="search-bar-wrapper">
        <div className="custom-dropdown">
          <button
            className="dropdown-trigger"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            <span className="dropdown-icon">
              {platforms.find((p) => p.value === selectedPlatform)?.icon}
            </span>
            <span className="dropdown-label">{selectedPlatform}</span>
            <ChevronDown
              size={16}
              className={`dropdown-arrow ${dropdownOpen ? "open" : ""}`}
            />
          </button>
          {dropdownOpen && (
            <div className="dropdown-menu">
              {platforms.map((platform) => (
                <button
                  key={platform.value}
                  className={`dropdown-item ${
                    selectedPlatform === platform.value ? "active" : ""
                  }`}
                  onClick={() => handlePlatformSelect(platform.value)}
                >
                  <span className="dropdown-item-icon">{platform.icon}</span>
                  <span className="dropdown-item-label">{platform.label}</span>
                  {selectedPlatform === platform.value && (
                    <span className="dropdown-item-check">✓</span>
                  )}
                </button>
              ))}
            </div>
          )}
        </div>
        <input
          type="text"
          placeholder="Search for products, brands, and shops..."
        />
        <button className="search-button">
          <Search size={20} />
        </button>
      </div>
      <button className="icon-button">
        <Camera size={20} />
      </button>
    </div>
  );
}
