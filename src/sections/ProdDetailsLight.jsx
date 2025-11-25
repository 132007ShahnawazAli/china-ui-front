"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Star,
  ShoppingCart,
  Heart,
  Search,
  User,
  ChevronLeft,
  ChevronRight,
  Check,
  Package,
  Truck,
  Shield,
  MapPin,
  ChevronRight as ChevronRightIcon,
} from "lucide-react";

export default function ProductDetailLightPage() {
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("product"); // product or guide
  const [agreedToDisclaimer, setAgreedToDisclaimer] = useState(false);

  const images = [
    "/temp-products/1.jpg",
    "/temp-products/2.jpg",
    "/temp-products/3.webp",
    "/temp-products/4.jpg",
  ];

  const variants = [
    {
      name: "Sky Blue - 256GB",
      image: "/temp-products/1.jpg",
      price: 29.74,
    },
    {
      name: "Space Gray - 512GB",
      image: "/temp-products/2.jpg",
      price: 38.04,
    },
    {
      name: "Silver - 256GB",
      image: "/temp-products/3.webp",
      price: 32.50,
    },
  ];

  const specs = [
    { label: "Average time to warehouse", value: "3-5 days" },
    { label: "Sales", value: "1,243" },
    { label: "Weight", value: "450g" },
    { label: "Dimensions", value: "35 × 25 × 2 cm" },
  ];

  // Product details content
  const productDetails = [
    "/temp-products/1.jpg",
    "/temp-products/2.jpg",
    "/temp-products/3.webp",
    "/temp-products/4.jpg",
    "/temp-products/1.jpg",
    "/temp-products/2.jpg",
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* NAVBAR */}
      <nav className="border-b border-neutral-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/logo.svg" alt="logo" width={36} height={26} />
              <p className="text-primary-500 font-medium text-lg">Cartigo</p>
            </Link>

            <div className="hidden md:flex flex-1 max-w-xl mx-8">
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-600" />
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-full bg-neutral-100 border border-neutral-400 rounded-lg pl-10 pr-4 py-2.5 text-sm text-neutral-900 placeholder:text-neutral-600 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-100 focus:bg-white transition-all"
                />
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button className="p-2 hover:bg-neutral-100 rounded-lg transition-colors">
                <Heart className="w-5 h-5 text-neutral-700" />
              </button>
              <button className="relative p-2 hover:bg-neutral-100 rounded-lg transition-colors">
                <ShoppingCart className="w-5 h-5 text-neutral-700" />
                <span className="absolute top-0 right-0 w-4 h-4 bg-primary-500 rounded-full text-[10px] font-medium flex items-center justify-center text-white">
                  3
                </span>
              </button>
              <button className="p-2 hover:bg-neutral-100 rounded-lg transition-colors">
                <User className="w-5 h-5 text-neutral-700" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* MAIN CONTENT */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm mb-6 text-neutral-600">
          <Link href="/" className="hover:text-primary-500 transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link href="/product-list-light" className="hover:text-primary-500 transition-colors">
            Products
          </Link>
          <span>/</span>
          <span className="text-neutral-900 font-medium">MacBook Air 2025</span>
        </div>

        {/* Product Section */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* LEFT: Images & Details */}
          <div className="flex flex-col gap-4">
            {/* Main Image */}
            <div className="relative aspect-square bg-neutral-50 rounded-xl overflow-hidden border border-neutral-200">
              <img
                src={images[selectedImage]}
                alt="Product"
                className="w-full h-full object-cover"
              />
              
              <button
                onClick={() => setSelectedImage((selectedImage - 1 + images.length) % images.length)}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors shadow-sm"
              >
                <ChevronLeft className="w-5 h-5 text-neutral-900" />
              </button>
              
              <button
                onClick={() => setSelectedImage((selectedImage + 1) % images.length)}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors shadow-sm"
              >
                <ChevronRight className="w-5 h-5 text-neutral-900" />
              </button>
            </div>

            {/* Thumbnails */}
            <div className="grid grid-cols-4 gap-3">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`aspect-square rounded-lg overflow-hidden border-2 transition-colors ${
                    selectedImage === idx
                      ? "border-primary-500"
                      : "border-neutral-200 hover:border-neutral-300"
                  }`}
                >
                  <img src={img} alt={`View ${idx + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>

            {/* Tabs Section */}
            <div className="flex flex-col gap-4 mt-4">
              {/* Tabs */}
              <div className="flex gap-1 border-b border-neutral-200">
                <button
                  onClick={() => setActiveTab("product")}
                  className={`px-4 py-3 text-sm font-medium border-b-2 transition-colors ${
                    activeTab === "product"
                      ? "border-primary-500 text-primary-500"
                      : "border-transparent text-neutral-600 hover:text-neutral-900"
                  }`}
                >
                  Product Details
                </button>
                <button
                  onClick={() => setActiveTab("guide")}
                  className={`px-4 py-3 text-sm font-medium border-b-2 transition-colors ${
                    activeTab === "guide"
                      ? "border-primary-500 text-primary-500"
                      : "border-transparent text-neutral-600 hover:text-neutral-900"
                  }`}
                >
                  Shopping Agent Guide
                </button>
              </div>

              {/* Tab Content */}
              {activeTab === "product" ? (
                <div className="flex flex-col gap-4">
                  {productDetails.map((img, idx) => (
                    <div key={idx} className="bg-neutral-50 rounded-xl overflow-hidden border border-neutral-200">
                      <img src={img} alt={`Product detail ${idx + 1}`} className="w-full" />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="flex flex-col gap-4 p-6 bg-neutral-50 border border-neutral-200 rounded-xl">
                  <h3 className="text-lg font-semibold text-neutral-900 mb-2">Shopping Agent Information</h3>
                  
                  <div className="space-y-4 text-sm text-neutral-700">
                    <p>
                      Orders paid between 09:00-18:00 (Beijing Time) will be processed within 6 hours (except Sunday).
                    </p>

                    <div className="bg-white border border-neutral-200 rounded-lg p-4 space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-primary-500/10 flex items-center justify-center shrink-0 text-xs text-primary-500 font-medium">
                          1
                        </div>
                        <div>
                          <p className="font-medium text-neutral-900 mb-1">Seller → Cartigo Warehouse</p>
                          <p className="text-xs text-neutral-600">Shipping Fee: CNY 0 ≈ USD 0.00</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-primary-500/10 flex items-center justify-center shrink-0 text-xs text-primary-500 font-medium">
                          2
                        </div>
                        <div>
                          <p className="font-medium text-neutral-900 mb-1">Cartigo Warehouse → Your Address</p>
                          <p className="text-xs text-neutral-600">Estimate International Shipping Fee</p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h4 className="font-medium text-neutral-900">Important Notes:</h4>
                      <ul className="list-disc list-inside space-y-1 text-neutral-700">
                        <li>All products are from third-party platforms</li>
                        <li>Cartigo acts as a shopping agent service</li>
                        <li>Minimum purchase quantity may apply</li>
                        <li>Processing time: 3-5 business days</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* RIGHT: Product Info - Sticky */}
          <div className="flex flex-col gap-6 lg:sticky lg:top-8 lg:self-start">
            {/* Title & Rating */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <span className="px-2 py-1 bg-neutral-100 border border-neutral-200 rounded text-xs font-medium text-neutral-700">
                  Apple
                </span>
                <span className="px-2 py-1 bg-green-50 border border-green-200 rounded text-xs font-medium text-green-600">
                  In Stock
                </span>
              </div>

              <h1 className="text-3xl font-semibold text-neutral-900 leading-tight">
                Apple 2025 MacBook Air
              </h1>

              <p className="text-neutral-600">
                13-inch, Apple M4 chip with 10-core CPU and 8-core GPU, 16GB Unified Memory
              </p>

              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < 4 ? "fill-amber-400 text-amber-400" : "fill-neutral-200 text-neutral-200"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-neutral-600">4.8 (1,243 reviews)</span>
              </div>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-3 py-4 border-y border-neutral-200">
              <span className="text-4xl font-semibold text-neutral-900">
                ${variants[selectedVariant].price}
              </span>
              <span className="text-lg text-neutral-500 line-through">$99.00</span>
              <span className="px-2 py-1 bg-primary-50 text-primary-600 text-sm font-medium rounded">
                -6% OFF
              </span>
            </div>

            {/* Variant Selection - Smaller without text */}
            <div className="flex flex-col gap-3">
              <h3 className="text-sm font-medium text-neutral-900">
                Select Variant
              </h3>
              <div className="flex gap-2">
                {variants.map((variant, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setSelectedVariant(idx);
                    }}
                    className={`w-16 h-16 p-1 border-2 rounded-lg transition-all ${
                      selectedVariant === idx
                        ? "border-primary-500"
                        : "border-neutral-200 hover:border-neutral-300"
                    }`}
                  >
                    <div className="w-full h-full bg-neutral-50 rounded overflow-hidden">
                      <img src={variant.image} alt="" className="w-full h-full object-cover" />
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="flex flex-col gap-2">
              <h3 className="text-sm font-medium text-neutral-900">Quantity</h3>
              <div className="flex items-center gap-3">
                <div className="flex items-center border border-neutral-300 rounded-lg overflow-hidden">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-4 py-3 hover:bg-neutral-50 transition-colors text-neutral-900"
                  >
                    -
                  </button>
                  <span className="px-6 py-3 border-x border-neutral-300 text-neutral-900">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-4 py-3 hover:bg-neutral-50 transition-colors text-neutral-900"
                  >
                    +
                  </button>
                </div>
                <span className="text-sm text-neutral-600">Min. order: 2 pieces</span>
              </div>
            </div>

            {/* Disclaimer Checkbox */}
            <div className="flex items-start gap-3 p-4 bg-neutral-50 border border-neutral-200 rounded-lg">
              <input
                type="checkbox"
                id="disclaimer"
                checked={agreedToDisclaimer}
                onChange={(e) => setAgreedToDisclaimer(e.target.checked)}
                className="mt-1 w-4 h-4 rounded border-neutral-300 bg-white text-primary-500 focus:ring-2 focus:ring-primary-500/30"
              />
              <label htmlFor="disclaimer" className="flex items-center justify-between flex-1 cursor-pointer">
                <span className="text-sm text-neutral-900">I have read and agree to the Disclaimer</span>
                <ChevronRightIcon className="w-4 h-4 text-neutral-500" />
              </label>
            </div>

            {/* Action Buttons - Stacked Vertically */}
            <div className="flex flex-col gap-3">
              <button className="w-full py-3 bg-primary-500 rounded-lg hover:bg-primary-600 transition-colors text-white font-semibold">
                Buy Now
              </button>
              <button className="w-full flex items-center justify-center gap-2 py-3 bg-white border border-neutral-300 rounded-lg hover:bg-neutral-50 transition-colors text-neutral-900 font-medium">
                <ShoppingCart className="w-5 h-5" />
                Add to Cart
              </button>
            </div>

            {/* Shipping Info */}
            <div className="flex flex-col gap-3 p-4 bg-neutral-50 border border-neutral-200 rounded-xl">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-6 h-6 bg-primary-500 rounded flex items-center justify-center">
                  <Package className="w-4 h-4 text-white" />
                </div>
                <h3 className="text-sm font-semibold text-neutral-900">Product Link</h3>
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between py-2 border-b border-neutral-200">
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-neutral-600">1</span>
                    <span className="text-neutral-600">Seller</span>
                    <span className="text-neutral-400">▸</span>
                    <span className="text-neutral-900">Cartigo Warehouse</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-neutral-600">Shipping Fee</span>
                    <span className="text-sm font-medium text-neutral-900">CNY 0</span>
                    <span className="text-xs text-neutral-500">≈ USD 0.00</span>
                  </div>
                </div>

                <div className="flex items-center justify-between py-2">
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-neutral-600">2</span>
                    <span className="text-neutral-900">Cartigo Warehouse</span>
                    <span className="text-neutral-400">▸</span>
                    <span className="text-primary-500 font-medium">Your Address</span>
                  </div>
                  <button className="flex items-center gap-1 text-xs text-primary-500 hover:text-primary-600 transition-colors">
                    <span>Shipping Estimate</span>
                    <ChevronRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>

            {/* Specs */}
            <div className="grid grid-cols-2 gap-3">
              {specs.map((spec, idx) => (
                <div key={idx} className="flex flex-col gap-1 p-3 bg-neutral-50 border border-neutral-200 rounded-lg">
                  <span className="text-xs text-neutral-600">{spec.label}</span>
                  <span className="text-sm font-medium text-neutral-900">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
