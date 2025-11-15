// src/components/Footer.jsx
import React from "react";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#F5E6D3] text-[#333333] mt-12">
      <div className="container mx-auto px-6 py-10 grid gap-8 sm:grid-cols-2 md:grid-cols-4">
        {/* Brand + Short */}
        <div className="space-y-3">
          <h2 className="text-2xl font-serif text-[#C3A27B]">Lunora</h2>
          <p className="text-sm leading-relaxed">
            Discover curated products inspired by Egyptian heritage and modern elegance.
            Quality, variety and a graceful shopping experience — all in one place.
          </p>
          <div className="flex items-center gap-3 mt-3">
            <a
              href="#"
              aria-label="Instagram"
              className="p-2 rounded-full hover:bg-white/50 transition"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className="p-2 rounded-full hover:bg-white/50 transition"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="p-2 rounded-full hover:bg-white/50 transition"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="#"
              aria-label="YouTube"
              className="p-2 rounded-full hover:bg-white/50 transition"
            >
              <Youtube className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-medium mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-[#C3A27B] transition">Shop</a></li>
            <li><a href="#" className="hover:text-[#C3A27B] transition">Categories</a></li>
            <li><a href="#" className="hover:text-[#C3A27B] transition">Offers</a></li>
            <li><a href="#" className="hover:text-[#C3A27B] transition">New Arrivals</a></li>
          </ul>
        </div>

        {/* Customer */}
        <div>
          <h3 className="text-lg font-medium mb-3">Customer Care</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-[#C3A27B] transition">Help Center</a></li>
            <li><a href="#" className="hover:text-[#C3A27B] transition">Shipping & Returns</a></li>
            <li><a href="#" className="hover:text-[#C3A27B] transition">Payment Methods</a></li>
            <li><a href="#" className="hover:text-[#C3A27B] transition">Terms & Privacy</a></li>
          </ul>
        </div>

        {/* Newsletter Mini */}
        <div>
          <h3 className="text-lg font-medium mb-3">Join Lunora Club</h3>
          <p className="text-sm leading-relaxed mb-3">
            Get exclusive offers & early access to new collections.
          </p>

          <form className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 px-4 py-2 rounded-md border border-white/40 bg-white/70 text-sm outline-none placeholder:text-gray-400"
            />
            <button
              type="submit"
              className="px-4 py-2 rounded-md bg-[#C3A27B] text-white font-medium shadow-sm hover:brightness-105 transition"
            >
              Subscribe
            </button>
          </form>

          <div className="mt-4 text-xs text-gray-600">
            By subscribing you agree to our <a href="#" className="underline hover:text-[#C3A27B]">Privacy Policy</a>.
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/60">
        <div className="container mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between text-sm text-gray-600">
          <div className="mb-3 md:mb-0">© {new Date().getFullYear()} Iunora. All rights reserved.</div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-xs">
              <span className="font-medium">Payment:</span>
              {/* placeholders for payment icons */}
              <div className="flex items-center gap-2">
                <div className="w-8 h-5 bg-white/60 rounded-sm flex items-center justify-center text-[10px]">VISA</div>
                <div className="w-8 h-5 bg-white/60 rounded-sm flex items-center justify-center text-[10px]">MC</div>
                <div className="w-8 h-5 bg-white/60 rounded-sm flex items-center justify-center text-[10px]">Pay</div>
              </div>
            </div>

            <div className="text-xs">Designed with ♥ for Egypt</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
