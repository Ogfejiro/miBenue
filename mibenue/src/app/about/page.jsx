"use client"

import Link from "next/link"
import { ArrowRight, Users, Rocket, Lightbulb, Building2, Globe, Sparkles } from "lucide-react"


export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-green-50 to-white text-gray-900 overflow-hidden relative">
      {/* Background Glow */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-green-100 rounded-full blur-3xl opacity-60 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-green-200 rounded-full blur-3xl opacity-30 pointer-events-none" />

      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center text-center pt-40 pb-28 px-6 lg:px-12">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 text-green-700 text-sm mb-6 border border-green-200">
          <Sparkles className="w-4 h-4" />
          <span>About miBenue</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight mb-6">
          Welcome to the <span className="text-green-600">Future of Benue.</span>
        </h1>

        <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto mb-8">
          miBenue is more than a tech platform — it’s a mission to unlock the power of technology for real people solving real problems in Benue State, Nigeria.
        </p>

        <p className="text-gray-600 max-w-2xl mx-auto mb-10">
          Built by the award-winning team at <strong>Maxify Global</strong>, miBenue was created for farmers, students, workers, and families who deserve more digital inclusion and local solutions.
        </p>

        <Link
          href="/projects"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-green-600 text-white font-medium hover:bg-green-700 transition-all shadow-lg shadow-green-300/50"
        >
          Explore Our Products
          <ArrowRight className="w-5 h-5" />
        </Link>
      </section>

      {/* Vision Section */}
      <section className="relative py-24 px-6 lg:px-12 bg-green-50 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">Our Vision</h2>
          <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
            To be Benue’s most trusted digital platform for jobs, services, commerce, and community tools — accessible to everyone.
          </p>
        </div>
      </section>

      {/* Approach Section */}
      <section className="relative py-24 px-6 lg:px-12">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-4 text-gray-900">Our Approach</h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            We believe progress starts with understanding real challenges. Our process is simple, human, and local-first.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              icon: <Lightbulb className="w-6 h-6 text-green-600" />,
              title: "Identify Grassroots Problems",
              desc: "We start from the ground up — addressing real issues like unemployment, access to skills, and payment tracking.",
            },
            {
              icon: <Rocket className="w-6 h-6 text-green-600" />,
              title: "Design Human-Centered Software",
              desc: "We build simple, intuitive solutions that empower people, not confuse them.",
            },
            {
              icon: <Globe className="w-6 h-6 text-green-600" />,
              title: "Launch Local, Scale Global",
              desc: "We begin in Benue communities, refine through real feedback, and scale to broader impact.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="group p-10 rounded-3xl bg-white border border-green-100 hover:border-green-400 transition-all hover:shadow-[0_0_40px_-10px_rgba(0,128,0,0.3)] hover:scale-[1.02] duration-300"
            >
              <div className="w-12 h-12 rounded-2xl bg-green-100 flex items-center justify-center mb-6 group-hover:bg-green-200 transition-colors">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="relative py-28 bg-green-50 px-6 lg:px-12 text-center">
        <div className="max-w-5xl mx-auto">
          <Users className="w-12 h-12 mx-auto mb-6 text-green-600" />
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">Our Team</h2>
          <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto mb-6">
            We're proud sons and daughters of Benue — designers, developers, and community leaders combining world-class product thinking with local knowledge.
          </p>
          <blockquote className="text-xl italic text-green-700 font-medium">
            “If it doesn’t work in North Bank or Wadata, it doesn’t belong on miBenue.”
          </blockquote>
        </div>
      </section>

      {/* Maxify Global Section */}
      <section className="relative py-28 px-6 lg:px-12 text-center">
        <div className="max-w-4xl mx-auto">
          <Building2 className="w-12 h-12 mx-auto mb-6 text-green-600" />
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-gray-900">
            Backed by Maxify Global
          </h2>
          <p className="text-lg text-gray-700 mb-4 leading-relaxed max-w-3xl mx-auto">
            A Nigerian-led tech studio helping 100+ clients globally — and now bringing that expertise home to Benue.
          </p>
          <p className="text-gray-700 mb-6">
            📍 Offices in <strong>Makurdi</strong>, <strong>Abuja</strong>, and <strong>Ontario</strong>
          </p>
          <Link
            href="https://www.maxifyglobal.com"
            target="_blank"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-green-600 text-white font-medium hover:bg-green-700 transition-all shadow-lg shadow-green-300/50"
          >
            Visit Maxify Global
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      
    </main>
  )
}
