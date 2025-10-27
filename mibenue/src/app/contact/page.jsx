"use client";
import React from "react";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-950 text-gray-800 dark:text-gray-100 font-sans">
      {/* Hero Section */}
      <section className="text-center pt-32 pb-12 px-6 border-b border-gray-200 dark:border-gray-800">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
          Get in Touch
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
          We’d love to hear from you. Whether you have a question, feedback, or partnership idea,
          feel free to reach out — we’ll respond as soon as possible.
        </p>
      </section>

      {/* Contact Information Section */}
      <section className="max-w-5xl mx-auto grid md:grid-cols-3 gap-12 py-20 px-6 md:px-10 border-b border-gray-200 dark:border-gray-800">
        <div>
          <h3 className="text-xl font-semibold mb-2 text-green-700 dark:text-green-400">
            Visit Us
          </h3>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            miBenue / Maxify Global HQ <br />
            Makurdi, Benue State, Nigeria <br />
            (Full Address Here)
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2 text-green-700 dark:text-green-400">
            Contact
          </h3>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Phone: +234-XXX-XXX-XXXX <br />
            Email: <a href="mailto:hello@miBenue.com" className="text-green-600 hover:underline">hello@miBenue.com</a>
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2 text-green-700 dark:text-green-400">
            Follow Us
          </h3>
          <ul className="text-gray-600 dark:text-gray-300 space-y-1">
            <li>Facebook: <a href="#" className="hover:underline">@miBenue</a></li>
            <li>Instagram: <a href="#" className="hover:underline">@miBenue</a></li>
            <li>Twitter/X: <a href="#" className="hover:underline">@miBenueNG</a></li>
          </ul>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="px-6 md:px-10 py-20 max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-green-700 dark:text-green-400">
          Send Us a Message
        </h2>
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-transparent focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
              Email Address
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-transparent focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
              Message
            </label>
            <textarea
              rows="5"
              placeholder="Write your message..."
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-transparent focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full md:w-auto bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-8 rounded-lg transition-all"
          >
            Send Message
          </button>
        </form>
      </section>

      {/* Newsletter Section */}
      <section className="text-center py-16 bg-green-50 dark:bg-green-950/30">
        <h3 className="text-2xl font-semibold mb-3 text-green-700 dark:text-green-400">
          Stay Updated
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-lg mx-auto">
          Subscribe to our newsletter for product updates, news, and community stories.
        </p>
        <form className="flex flex-col md:flex-row items-center justify-center gap-4 max-w-lg mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-transparent focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <button
            type="submit"
            className="bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-lg transition-all w-full md:w-auto"
          >
            Subscribe
          </button>
        </form>
      </section>
    </main>
  );
}
