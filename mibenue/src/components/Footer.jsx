import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0B1A0F] text-gray-300 py-10 px-6 md:px-20">
      {/* Top */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 border-b border-gray-700 pb-10">
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-3">miBenue</h2>
          <p className="text-sm leading-relaxed">
            Smart Solutions. Local Impact.  
            Building digital tools that empower Benue’s people to earn, grow, and thrive — one tap at a time.
          </p>
          <p className="mt-3 text-sm text-gray-400">
            🌍 Made for Benue. Powered by{" "}
            <a
              href="https://www.maxifyglobal.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:underline"
            >
              Maxify Global
            </a>
            .
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-white">Home</a></li>
            <li><a href="/about" className="hover:text-white">About</a></li>
            <li><a href="/products" className="hover:text-white">Products</a></li>
            <li><a href="/contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white font-semibold mb-3">Contact</h3>
          <ul className="text-sm space-y-1">
            <li>📍 Makurdi, Benue State, Nigeria</li>
            <li>📞 +234-XXX-XXX-XXXX</li>
            <li>📧 hello@miBenue.com</li>
            <li>🤝 partners@miBenue.com</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-white font-semibold mb-3">Stay Updated</h3>
          <p className="text-sm mb-3">
            Join our community of early adopters to get updates on new launches.
          </p>
          <form className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="px-3 py-2 rounded-md text-gray-900 focus:outline-none w-full"
            />
            <button
              type="submit"
              className="bg-[#2ECC71] text-white px-4 py-2 rounded-md hover:bg-[#28b363] transition"
            >
              Join
            </button>
          </form>
        </div>
      </div>

      {/* Bottom */}
      <div className="flex flex-col md:flex-row justify-between items-center mt-8 text-sm text-gray-400">
        <p>© {new Date().getFullYear()} miBenue. All rights reserved.</p>
        <div className="flex space-x-4 mt-3 md:mt-0">
          <a href="https://facebook.com/miBenue" className="hover:text-white"><FaFacebookF /></a>
          <a href="https://instagram.com/miBenue" className="hover:text-white"><FaInstagram /></a>
          <a href="https://twitter.com/miBenueNG" className="hover:text-white"><FaTwitter /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
