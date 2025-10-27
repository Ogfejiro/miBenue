"use client";
import React from "react";
import Link from "next/link";
import { Circle } from "lucide-react";

export default function ProductPage() {
  const products = [
    {
      name: "🥬 miBenue Fresh",
      tagline: "Farm-Fresh Produce, Direct From Benue Farmers",
      points: [
        "Buy fresh crops directly from verified Benue farmers.",
        "Farmers list daily availability, price, and farm details.",
        "Secure escrow payments with delivery confirmation.",
        "Ratings & reviews for trust and transparency.",
      ],
      waitlist: "📌 Coming Soon – Join 50+ Early Buyers & Farmers",
      linkText: "Join miBenue Fresh Waitlist →",
      link: "#",
      image: "/fresh.png",
    },
    {
      name: "💼 miBenue Jobs",
      tagline: "Your Gateway to Work in Benue",
      points: [
        "Find jobs as a student, graduate, or skilled tradesperson.",
        "Hire verified local talent for your business, household, or projects.",
        "Build your resume, apply instantly, and chat with employers in real-time.",
        "Ratings and reviews ensure transparency and trust on every hire.",
      ],
      waitlist: "📌 Coming Soon – Early Access for 30+ Test users",
      linkText: "Join miBenue Jobs Waitlist →",
      link: "#",
      image: "/jobs.png",
    },
    {
      name: "🎓 miBenue Learn",
      tagline: "Learn New Skills. Unlock New Opportunities in Benue.",
      points: [
        "Mobile-first microlearning platform for students, graduates & artisans.",
        "Short courses in digital skills, trades, and soft skills (English, Tiv, Idoma).",
        "Certificates you can showcase on your miBenue Jobs profile.",
        "Sponsored training & mentorship opportunities.",
      ],
      waitlist: "📌 Coming Soon – Early Access for 30+ Test Learners",
      linkText: "Join miBenue Learn Waitlist →",
      link: "#",
      image: "/learn.png",
    },
    {
      name: "💳 miBenue Pay",
      tagline: "Smart Group Payments & Contribution Tracking for Benue",
      points: [
        "Collect and manage dues, levies, or savings for your church, alumni group, cooperative, or family.",
        "Track contributions in real-time with automated reminders.",
        "Transparent records for every member — no more guesswork.",
        "Secure digital wallet with instant payout notifications.",
      ],
      waitlist: "📌 Coming Soon – Join 40+ Groups Already on Our Early Waitlist",
      linkText: "Join miBenue Pay Waitlist →",
      link: "#",
      image: "/pay.png",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-green-50 to-white dark:from-gray-900 dark:to-green-950 text-gray-800 dark:text-gray-100 font-sans">
      {/* Hero Section */}
      <section className="text-center pt-28 pb-12 px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
          Discover Our Digital Tools
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
          Simple. Scalable. Designed for Benue.
        </p>
      </section>

      {/* Product Cards */}
      <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-10 px-6 md:px-12 pb-20">
        {products.map((product, index) => (
          <div
            key={index}
            className="rounded-3xl overflow-hidden bg-white/60 dark:bg-green-900/30 
            backdrop-blur-xl border border-green-200/40 dark:border-green-800 shadow-lg 
            hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 flex flex-col"
          >
            {/* Image */}
            <div className="aspect-[4/3] flex items-center justify-center bg-green-100/40 dark:bg-green-950/30">
              <img
                src={product.image}
                alt={product.name}
                className="w-3/4 h-auto object-contain"
              />
            </div>

            {/* Text */}
            <div className="p-6 flex flex-col justify-between flex-grow">
              <div>
                <h2 className="text-2xl font-bold mb-1 text-green-700 dark:text-green-300">
                  {product.name}
                </h2>
                <p className="text-gray-700 dark:text-gray-200 mb-4 font-medium">
                  {product.tagline}
                </p>

                <ul className="space-y-2 text-gray-600 dark:text-gray-300 text-sm mb-4">
                  {product.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Circle
                        className="w-3 h-3 text-green-500 flex-shrink-0 mt-1"
                        fill="currentColor"
                      />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                  {product.waitlist}
                </p>
              </div>

              <Link
                href={product.link}
                className="inline-block w-fit mt-auto px-6 py-2 rounded-full bg-green-600 text-white font-medium hover:bg-green-700 transition-all shadow-md"
              >
                {product.linkText}
              </Link>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
