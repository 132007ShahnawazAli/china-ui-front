"use client";
import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

const SignUp = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        password: "",
        confirmPassword: "",
        agreeToTerms: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            alert("Passwords do not match!");
            return;
        }
        console.log("Sign up:", formData);
    };

    return (
        <div className="min-h-screen w-full flex items-center justify-center bg-neutral-1000 p-2">
            {/* Main Container - Two Boxes Side by Side */}
            <div className="flex flex-col lg:flex-row gap-2 w-full h-screen lg:h-auto lg:min-h-screen">

                {/* LEFT BOX - Branding Section */}
                <div className="relative flex-1 bg-neutral-950/60 rounded-xl overflow-hidden flex flex-col items-center justify-center p-8 lg:p-16 text-white">
                    <div className="absolute -bottom-20 rounded-t-full left-1/2 -translate-x-1/2 blur-[100px] w-full h-1/2 bg-[#0090FF]"></div>
                    <div className="absolute -bottom-20 rounded-t-full left-1/2 -translate-x-1/2 aspect-square w-1/3 blur-[130px] mix-blend-plus-lighter bg-[#E5F4FF]"></div>
                    {/* Content */}
                    <div className="relative z-10 text-center max-w-lg">
                        {/* Logo */}
                        <div className="flex items-center justify-center gap-3 mb-12">
                            <img src="/logo.svg" alt="Cartigo Logo" className="h-10 w-10" />
                            <span className="text-2xl font-semibold tracking-tight">Cartigo</span>
                        </div>

                        {/* Main Heading */}
                        <h1 className="text-2xl lg:text-4xl font-medium leading-tight tracking-tight mb-6 bg-linear-to-r from-neutral-100 via-neutral-100 to-neutral-900/40 bg-clip-text text-transparent">
                            Create your account and start
                            your journey with us.
                        </h1>

                        {/* Subtext */}
                        <p className="text-neutral-500 text-sm lg:text-base leading-relaxed">
                            Join thousands of satisfied customers who trust us for their China sourcing needs.
                        </p>
                    </div>
                </div>

                {/* RIGHT BOX - Sign Up Form */}
                <div className="flex-1 bg-white rounded-xl p-8 lg:p-16 flex flex-col">
                    {/* Logo at top */}
                    <div className="flex items-center gap-3 mb-16">
                        <img src="/logo.svg" alt="Cartigo Logo" className="h-8 w-8" />
                        <span className="text-xl font-semibold text-neutral-900 tracking-tight">Cartigo</span>
                    </div>

                    {/* Form Content - Centered Vertically */}
                    <div className="flex-1 flex flex-col justify-center max-w-md mx-auto w-full">
                        {/* Header */}
                        <div className="mb-10">
                            <h2 className="text-4xl font-semibold text-neutral-900 tracking-tight mb-3">
                                Sign up
                            </h2>
                            <p className="text-sm text-neutral-600">
                                Already have an account?{" "}
                                <a href="/sign-in" className="text-primary-500 font-semibold hover:text-primary-600 transition-colors">
                                    Sign in
                                </a>
                            </p>
                        </div>

                        {/* Form */}
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Full Name Field */}
                            <div>
                                <label htmlFor="fullName" className="block text-sm font-medium text-neutral-700 mb-2">
                                    Full Name
                                </label>
                                <input
                                    id="fullName"
                                    name="fullName"
                                    type="text"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    placeholder="John Doe"
                                    className="w-full px-4 py-3 bg-neutral-100 border border-neutral-400 rounded-xl text-sm text-neutral-900 placeholder:text-neutral-600 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                                    required
                                />
                            </div>

                            {/* Email Field */}
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">
                                    E-mail
                                </label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="example@gmail.com"
                                    className="w-full px-4 py-3 bg-neutral-100 border border-neutral-400 rounded-xl text-sm text-neutral-900 placeholder:text-neutral-600 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                                    required
                                />
                            </div>

                            {/* Password Field */}
                            <div>
                                <label htmlFor="password" className="block text-sm font-medium text-neutral-700 mb-2">
                                    Password
                                </label>
                                <div className="relative">
                                    <input
                                        id="password"
                                        name="password"
                                        type={showPassword ? "text" : "password"}
                                        value={formData.password}
                                        onChange={handleChange}
                                        placeholder="@#**%"
                                        className="w-full px-4 py-3 bg-neutral-100 border border-neutral-400 rounded-xl text-sm text-neutral-900 placeholder:text-neutral-600 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                                        required
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-500 hover:text-neutral-700 transition-colors"
                                    >
                                        {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                    </button>
                                </div>
                            </div>

                            {/* Confirm Password Field */}
                            <div>
                                <label htmlFor="confirmPassword" className="block text-sm font-medium text-neutral-700 mb-2">
                                    Confirm Password
                                </label>
                                <div className="relative">
                                    <input
                                        id="confirmPassword"
                                        name="confirmPassword"
                                        type={showConfirmPassword ? "text" : "password"}
                                        value={formData.confirmPassword}
                                        onChange={handleChange}
                                        placeholder="@#**%"
                                        className="w-full px-4 py-3 bg-neutral-100 border border-neutral-400 rounded-xl text-sm text-neutral-900 placeholder:text-neutral-600 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                                        required
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-500 hover:text-neutral-700 transition-colors"
                                    >
                                        {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                    </button>
                                </div>
                            </div>

                            {/* Terms and Conditions */}
                            <div className="pt-2">
                                <label className="flex items-start gap-2 cursor-pointer group">
                                    <input
                                        type="checkbox"
                                        name="agreeToTerms"
                                        checked={formData.agreeToTerms}
                                        onChange={handleChange}
                                        className="w-4 h-4 mt-0.5 rounded border-neutral-300 text-primary-500 focus:ring-2 focus:ring-primary-500 cursor-pointer accent-primary-500"
                                        required
                                    />
                                    <span className="text-sm text-neutral-600 group-hover:text-neutral-900 transition-colors">
                                        I agree to the{" "}
                                        <a href="/terms" className="text-primary-500 font-semibold hover:text-primary-600 transition-colors">
                                            Terms of Service
                                        </a>
                                        {" "}and{" "}
                                        <a href="/privacy" className="text-primary-500 font-semibold hover:text-primary-600 transition-colors">
                                            Privacy Policy
                                        </a>
                                    </span>
                                </label>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="w-full bg-primary-500 hover:bg-primary-600 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-200 shadow-sm hover:shadow-md active:scale-95"
                            >
                                Create Account
                            </button>
                        </form>
                    </div>

                    {/* Footer - Pushed to bottom */}
                    <div className="mt-auto pt-12 flex items-center justify-between text-xs text-neutral-500 border-t border-neutral-100">
                        <span>© 2024 Cartigo. All rights reserved.</span>
                        <div className="flex gap-6">
                            <a href="/privacy" className="hover:text-neutral-700 transition-colors">Privacy Policy</a>
                            <a href="/support" className="hover:text-neutral-700 transition-colors">Support</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
