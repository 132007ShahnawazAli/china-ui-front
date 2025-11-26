"use client";

import Image from "next/image";
import Link from "next/link";
import { Search, ShoppingCart, User, Heart, Star } from "lucide-react";
import { useState } from "react";

export default function ProductListPage() {
  const [activeSupplier, setActiveSupplier] = useState("all");

  const products = [
    {
      id: 1,
      image: "/temp-products/1.jpg",
      brand: "MCHOSE",
      title: "G87 V2 E-Sports Custom Mechanical Keyboard",
      description: "G87 V2 Custom Mechanical Keyboard [0.125mm floating design, ARGB]",
      price: 29.74,
      rating: 4.8,
      reviews: 1243,
      supplier: "1688",
    },
    {
      id: 2,
      image: "/temp-products/2.jpg",
      brand: "MCHOSE",
      title: "Ace 68 Air Magnetic Axis",
      description: "MCHOSE Ace 68 Air Magnetic Axis Mechanical Keyboard — 0.001mm precision, 0.08ms tournament latency",
      price: 38.04,
      rating: 4.9,
      reviews: 892,
      supplier: "taobao",
    },
    {
      id: 3,
      image: "/temp-products/3.webp",
      brand: "Lenovo",
      title: "Cool Wired Keyboard & Mouse Combo",
      description: "Lenovo wired keyboard + mouse combo for laptops and desktops",
      price: 4.0,
      rating: 4.5,
      reviews: 2341,
      supplier: "weidian",
    },
    {
      id: 4,
      image: "/temp-products/4.jpg",
      brand: "MCHOSE",
      title: "K99 V2 Custom Mechanical Keyboard",
      description: "MCHOSE K99 V2 custom mechanical keyboard with 8800mAh large battery",
      price: 52.19,
      rating: 4.7,
      reviews: 567,
      supplier: "1688",
    },
  ];

  const suppliers = [
    { id: "all", name: "All Suppliers", count: products.length },
    { id: "weidian", name: "Weidian", count: products.filter(p => p.supplier === "weidian").length },
    { id: "taobao", name: "Taobao", count: products.filter(p => p.supplier === "taobao").length },
    { id: "1688", name: "1688", count: products.filter(p => p.supplier === "1688").length },
  ];

  const filteredProducts = activeSupplier === "all" 
    ? products 
    : products.filter(p => p.supplier === activeSupplier);

  return (
    <div className="min-h-screen bg-neutral-1000">
      {/* NAVBAR */}
      <nav className="border-b border-neutral-950 bg-neutral-1000">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <Image src="/logo.svg" alt="logo" width={36} height={26} />
              <p className="text-primary-500 font-medium text-lg">Cartigo</p>
            </Link>

            {/* Search Bar */}
            <div className="hidden md:flex flex-1 max-w-xl mx-8">
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-600" />
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-full bg-neutral-950 border border-neutral-900 rounded-lg pl-10 pr-4 py-2.5 text-sm text-white placeholder:text-neutral-600 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/30 transition-all"
                />
              </div>
            </div>

            {/* Right Icons */}
            <div className="flex items-center gap-3">
              <button className="p-2 hover:bg-neutral-950 rounded-lg transition-colors">
                <Heart className="w-5 h-5 text-neutral-500 hover:text-white" />
              </button>
              <button className="relative p-2 hover:bg-neutral-950 rounded-lg transition-colors">
                <ShoppingCart className="w-5 h-5 text-neutral-500 hover:text-white" />
                <span className="absolute top-0 right-0 w-4 h-4 bg-primary-500 rounded-full text-[10px] font-medium flex items-center justify-center text-white">
                  3
                </span>
              </button>
              <button className="p-2 hover:bg-neutral-950 rounded-lg transition-colors">
                <User className="w-5 h-5 text-neutral-500 hover:text-white" />
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
          <span className="text-white font-medium">Search Results</span>
        </div>

        {/* Page Title */}
        <div className="mb-8">
          <h1 className="text-3xl font-semibold text-white mb-2">
            Search Results
          </h1>
          <p className="text-neutral-500">
            Found <span className="font-medium text-white">{filteredProducts.length} products</span> for "keyboard"
          </p>
        </div>

        {/* Supplier Tabs */}
        <div className="mb-8">
          <div className="border-b border-neutral-950">
            <div className="flex gap-1">
              {suppliers.map((supplier) => (
                <button
                  key={supplier.id}
                  onClick={() => setActiveSupplier(supplier.id)}
                  className={`px-4 py-3 text-sm font-medium border-b-2 transition-colors ${
                    activeSupplier === supplier.id
                      ? "border-primary-500 text-primary-500"
                      : "border-transparent text-neutral-500 hover:text-white"
                  }`}
                >
                  {supplier.name}
                  <span className="ml-2 text-xs text-neutral-700">({supplier.count})</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <select className="bg-neutral-950 border border-neutral-900 rounded-lg px-3 py-2 text-sm text-neutral-400 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500/30">
              <option>Sort by: Relevance</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Rating</option>
            </select>
            <select className="bg-neutral-950 border border-neutral-900 rounded-lg px-3 py-2 text-sm text-neutral-400 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500/30">
              <option>All Categories</option>
              <option>Electronics</option>
              <option>Accessories</option>
            </select>
          </div>
          <p className="text-sm text-neutral-600">
            Showing {filteredProducts.length} results
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {filteredProducts.map((product) => (
            <Link
              key={product.id}
              href={`/product-details?id=${product.id}`}
              className="group flex flex-col bg-neutral-950/40 border border-neutral-950 rounded-xl overflow-hidden"
            >
              {/* Image */}
              <div className="relative aspect-square bg-neutral-900 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover"
                />
                
                {/* Wishlist */}
                <button 
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                  }}
                  className="absolute top-3 right-3 w-8 h-8 bg-black/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-lg hover:bg-neutral-950"
                >
                  <Heart className="w-4 h-4 text-neutral-400" />
                </button>
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-4 gap-3">
                {/* Supplier Badge & Rating */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 px-2 py-1 bg-neutral-900 border border-neutral-800 rounded-md">
                    <Image 
                      src={`/Suppliers/${product.supplier}.svg`} 
                      alt={product.supplier} 
                      width={16} 
                      height={16}
                      className="w-4 h-4"
                    />
                    <span className="text-xs font-medium text-neutral-400 capitalize">
                      {product.supplier}
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    <span className="text-xs font-medium text-neutral-400">{product.rating}</span>
                    <span className="text-xs text-neutral-700">({product.reviews})</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-sm font-medium text-white line-clamp-2 leading-snug">
                  {product.title}
                </h3>

                {/* Description */}
                <p className="text-xs text-neutral-600 line-clamp-2 leading-relaxed flex-1">
                  {product.description}
                </p>

                {/* Price */}
                <div className="pt-3 border-t border-neutral-900">
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-xl font-semibold text-white">
                      ${product.price}
                    </span>
                    <span className="text-xs text-neutral-600">USD</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center gap-2 mt-12">
          <button className="px-4 py-2 border border-neutral-900 rounded-lg text-sm font-medium text-neutral-500 hover:bg-neutral-950 hover:text-white transition-colors">
            Previous
          </button>
          <button className="px-4 py-2 bg-primary-500 text-white rounded-lg text-sm font-medium">
            1
          </button>
          <button className="px-4 py-2 border border-neutral-900 rounded-lg text-sm font-medium text-neutral-500 hover:bg-neutral-950 hover:text-white transition-colors">
            2
          </button>
          <button className="px-4 py-2 border border-neutral-900 rounded-lg text-sm font-medium text-neutral-500 hover:bg-neutral-950 hover:text-white transition-colors">
            3
          </button>
          <button className="px-4 py-2 border border-neutral-900 rounded-lg text-sm font-medium text-neutral-500 hover:bg-neutral-950 hover:text-white transition-colors">
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
