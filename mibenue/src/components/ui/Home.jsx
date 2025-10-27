"use client";

import Link from "next/link";
import {
  ArrowRight,
  Sparkles,
  Shield,
  Smartphone,
  Globe2,
  Users,
  Leaf,
  Briefcase,
  GraduationCap,
  CreditCard,
  Heart,
} from "lucide-react";
import Footer from "../Footer";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white text-gray-900 overflow-hidden relative">
      {/* Background Glow */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] sm:w-[900px] h-[700px] sm:h-[900px] bg-green-100 rounded-full blur-3xl opacity-60 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-green-200 rounded-full blur-3xl opacity-30 pointer-events-none" />

      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center text-center pt-32 md:pt-40 pb-20 md:pb-32 px-4 sm:px-8 lg:px-12">
        <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-green-100 text-green-700 text-xs sm:text-sm mb-6 backdrop-blur-sm border border-green-200">
          <Sparkles className="w-4 h-4" />
          <span>Made for Benue. Powered by Maxify Global.</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight mb-6">
          Smart Solutions.
          <span className="block text-green-600">Local Impact.</span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-xl sm:max-w-2xl mx-auto mb-10 leading-relaxed">
          miBenue is a digital ecosystem built to solve real problems in Benue State —
          starting with jobs, skills, and commerce.
        </p>

        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4">
          <Link
            href="/products"
            className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-green-600 text-white text-sm sm:text-base font-medium hover:bg-green-700 transition-all shadow-lg shadow-green-300/50"
          >
            Explore Our Products
            <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5" />
          </Link>
          <Link
            href="/about"
            className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-full border border-green-400 bg-white text-green-700 text-sm sm:text-base hover:bg-green-50 transition-all"
          >
            Learn More
          </Link>
        </div>
      </section>

      {/* Our Mission */}
      <section className="relative py-16 md:py-20 px-4 sm:px-8 lg:px-12 bg-white text-center">
        <div className="max-w-4xl mx-auto">
          <Heart className="w-10 sm:w-12 h-10 sm:h-12 mx-auto mb-6 text-green-600" />
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-gray-900">
            Our Mission
          </h2>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
            To build simple, powerful digital products that empower everyday people in Benue
            to earn, grow, and thrive — one tap at a time.
          </p>
        </div>
      </section>

      {/* What Makes miBenue Different */}
      <section className="relative py-16 md:py-20 px-4 sm:px-8 lg:px-12 bg-green-50/40">
        <div className="max-w-6xl mx-auto text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4 text-gray-900">
            What Makes miBenue Different?
          </h2>
          <p className="text-base sm:text-lg text-gray-700">
            Simple. Local. Human-centered. Designed for real life in Benue.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {[
            {
              icon: <Globe2 className="w-6 sm:w-7 h-6 sm:h-7 text-green-600" />,
              title: "🌍 Hyperlocal Focus",
              desc: "Tailored for the realities of Benue — rural or urban — solving real community needs.",
            },
            {
              icon: <Shield className="w-6 sm:w-7 h-6 sm:h-7 text-green-600" />,
              title: "🤝 Built on Trust",
              desc: "Verified users and moderated communities that keep our people safe and respected.",
            },
            {
              icon: <Smartphone className="w-6 sm:w-7 h-6 sm:h-7 text-green-600" />,
              title: "📱 Mobile-First Design",
              desc: "Works on any smartphone, low data usage, and no tech jargon — accessible to everyone.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="group p-6 sm:p-8 md:p-10 rounded-3xl bg-white border border-green-100 hover:border-green-400 transition-all hover:shadow-[0_0_35px_-10px_rgba(0,128,0,0.3)] hover:scale-[1.02] duration-300"
            >
              <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-2xl bg-green-100 flex items-center justify-center mb-6 group-hover:bg-green-200 transition-colors mx-auto">
                {item.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-3 text-gray-900">
                {item.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Explore Our Products */}
      <section className="relative py-20 md:py-24 px-4 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-6xl mx-auto text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-gray-900">
            Explore Our Products
          </h2>
          <p className="text-base sm:text-lg text-gray-700">
            Empowering Benue with digital tools for farming, work, learning, and payments.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {[
            {
              icon: <Leaf className="w-6 sm:w-7 h-6 sm:h-7 text-green-600" />,
              title: "miBenue Fresh",
              desc: "Farm-Fresh Produce, Direct From Benue Farmers.",
              link: "/products#fresh",
            },
            {
              icon: <Briefcase className="w-6 sm:w-7 h-6 sm:h-7 text-green-600" />,
              title: "miBenue Jobs",
              desc: "Your Gateway to Work in Benue.",
              link: "/products#jobs",
            },
            {
              icon: <GraduationCap className="w-6 sm:w-7 h-6 sm:h-7 text-green-600" />,
              title: "miBenue Learn",
              desc: "Learn New Skills. Unlock New Opportunities.",
              link: "/products#learn",
            },
            {
              icon: <CreditCard className="w-6 sm:w-7 h-6 sm:h-7 text-green-600" />,
              title: "miBenue Pay",
              desc: "Smart Group Payments & Contribution Tracking.",
              link: "/products#pay",
            },
          ].map((item, i) => (
            <Link
              href={item.link}
              key={i}
              className="group p-6 sm:p-8 rounded-3xl bg-green-50 border border-green-100 hover:border-green-400 hover:bg-white transition-all hover:shadow-[0_0_35px_-10px_rgba(0,128,0,0.3)] duration-300"
            >
              <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-2xl bg-green-100 flex items-center justify-center mb-5 group-hover:bg-green-200 transition-colors mx-auto">
                {item.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 text-gray-900">
                {item.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 mb-4">{item.desc}</p>
              <span className="inline-flex items-center text-green-600 font-medium group-hover:underline text-sm sm:text-base">
                Learn More <ArrowRight className="w-4 h-4 ml-1" />
              </span>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12 sm:mt-16">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-green-600 text-white font-medium text-sm sm:text-base hover:bg-green-700 transition-all shadow-lg shadow-green-300/50"
          >
            Join Our Waitlist
            <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5" />
          </Link>
        </div>
      </section>

      {/* Trust Section */}
      <section className="relative py-20 md:py-28 px-4 sm:px-8 lg:px-12 bg-green-50 text-center">
        <div className="max-w-3xl mx-auto">
          <Users className="w-10 sm:w-12 h-10 sm:h-12 mx-auto mb-6 text-green-600" />
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-gray-900">
            Trusted by People Like You
          </h2>
          <p className="text-base sm:text-lg text-gray-700 mb-10 leading-relaxed">
            Trusted by 500+ users across Makurdi, Gboko, and Otukpo — and growing daily.
            <br />
            🔒 Safe. 🔎 Transparent. 💼 Opportunity-driven.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-green-600 text-white font-medium text-sm sm:text-base hover:bg-green-700 transition-all shadow-lg shadow-green-300/50"
          >
            Join Our Waitlist
            <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
