"use client"
import React from "react"
import { ArrowUpRight, Facebook, Instagram, Twitter, Linkedin } from "lucide-react"
import { useRouter } from "next/navigation"
import Tag from "../components/Tag"
import SearchBar from '../components/SearchBar'

const Footer = () => {
  const router = useRouter()

  const handleSearch = (query) => {
    if (query) {
      router.push(`/search?q=${encodeURIComponent(query)}`)
    }
  }

  return (
    <footer className="w-full bg-[#FBFBFD] py-12 px-8">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Footer Box */}
        <div className="border border-[#E6E9EB] rounded-2xl bg-[#F5F6F7] shadow-sm px-12 py-10">
          {/* Footer Columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 text-[#5C5F66]">
            {/* Logo */}
            <div className="col-span-1 sm:col-span-2 md:col-span-1">
              <div className="flex items-center space-x-2">
                <img src="/logo.svg" alt="Cartigo" className="w-10 h-10" />
                <h2 className="text-xl font-semibold text-[#0091FE] tracking-[-0.04em] leading-[1.2]">
                  Cartigo
                </h2>
              </div>
            </div>

            {/* Product & Service */}
            <div>
              <h3 className="font-medium mb-3 text-[#101113]/90 tracking-[-0.04em] leading-[1.2]">Product & Service</h3>
              <ul className="space-y-2 text-sm">
                <li>Products</li>
                <li>Services</li>
                <li>Appliances</li>
                <li className="flex items-center gap-2">
                  Storage <Tag />
                </li>
                <li className="flex items-center gap-1">
                  Lifestyle <ArrowUpRight size={16} className="text-gray-500" />
                </li>
              </ul>
            </div>

            {/* Shop Now */}
            <div>
              <h3 className="font-medium mb-3 text-[#101113]/90 tracking-[-0.04em] leading-[1.2]">Shop Now</h3>
              <ul className="space-y-2 text-sm">
                <li>Offers</li>
                <li>Promos</li>
                <li>Online Shop FAQ</li>
                <li className="flex items-center gap-2">
                  Business Offer <Tag />
                </li>
                <li className="flex items-center gap-1">
                  Student Offer <ArrowUpRight size={16} className="text-gray-500" />
                </li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="font-medium mb-3 text-[#101113]/90 tracking-[-0.04em] leading-[1.2]">Support</h3>
              <ul className="space-y-2 text-sm">
                <li>Contact</li>
                <li className="flex items-center gap-1">
                  Email Support <ArrowUpRight size={16} className="text-gray-500" />
                </li>
                <li className="flex items-center gap-1">
                  Live Chat <ArrowUpRight size={16} className="text-gray-500" />
                </li>
                <li>Phone Support</li>
                <li className="flex items-center gap-1">
                  Community <ArrowUpRight size={16} className="text-gray-500" />
                </li>
              </ul>
            </div>

            {/* About */}
            <div>
              <h3 className="font-medium mb-3 text-[#101113]/90 tracking-[-0.04em] leading-[1.2]">About</h3>
              <ul className="space-y-2 text-sm">
                <li>Company Info</li>
                <li>Brand Guidelines</li>
                <li>Careers</li>
                <li className="flex items-center gap-2">
                  Investors <Tag /> <ArrowUpRight size={16} className="text-gray-500" />
                </li>
                <li className="flex items-center gap-1">
                  About Us <ArrowUpRight size={16} className="text-gray-500" />
                </li>
              </ul>
            </div>
          </div>

          
        </div>
      </div>
    </footer>
  )
}

export default Footer