"use client";

import { useState } from "react";

const practiceAreas = [
  {
    icon: "⚖️",
    title: "Family Law",
    description: "Divorce, custody, maintenance and family disputes.",
  },
  {
    icon: "🏠",
    title: "Property Law",
    description: "Property disputes, agreements, ownership and registration.",
  },
  {
    icon: "🛡️",
    title: "Criminal Law",
    description: "Get guidance for criminal cases and legal proceedings.",
  },
  {
    icon: "💼",
    title: "Business Law",
    description: "Contracts, companies, compliance and business disputes.",
  },
  {
    icon: "📄",
    title: "Civil Law",
    description: "Understand your rights in civil disputes and claims.",
  },
  {
    icon: "👨‍💼",
    title: "Employment Law",
    description: "Workplace disputes, contracts and employee rights.",
  },
];

const lawyers = [
  {
    name: "Adv. Ananya Sharma",
    specialty: "Family Law Specialist",
    experience: "8+ Years",
    rating: "4.9",
    reviews: "124",
    city: "Pune",
    initials: "AS",
  },
  {
    name: "Adv. Rahul Mehta",
    specialty: "Corporate & Business Law",
    experience: "11+ Years",
    rating: "4.8",
    reviews: "98",
    city: "Mumbai",
    initials: "RM",
  },
  {
    name: "Adv. Priya Deshmukh",
    specialty: "Property Law Specialist",
    experience: "7+ Years",
    rating: "4.9",
    reviews: "86",
    city: "Pune",
    initials: "PD",
  },
];

export default function Home() {
  const [search, setSearch] = useState("");

  const handleSearch = () => {
    if (search.trim()) {
      alert(`Searching for: ${search}`);
    } else {
      alert("Please enter a legal problem or lawyer name.");
    }
  };

  return (
    <main className="min-h-screen bg-white text-slate-900">

      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">

          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-700 text-xl text-white shadow-sm">
              ⚖
            </div>

            <div>
              <div className="text-xl font-bold tracking-tight text-slate-900">
                Legalease
              </div>
              <div className="text-[10px] font-medium uppercase tracking-[0.2em] text-blue-700">
                Legal made simple
              </div>
            </div>
          </div>

          <div className="hidden items-center gap-8 md:flex">
            <a
              href="#services"
              className="text-sm font-medium text-slate-600 transition hover:text-blue-700"
            >
              Find Legal Help
            </a>

            <a
              href="#lawyers"
              className="text-sm font-medium text-slate-600 transition hover:text-blue-700"
            >
              Find a Lawyer
            </a>

            <a
              href="#ai"
              className="text-sm font-medium text-slate-600 transition hover:text-blue-700"
            >
              Legal AI
            </a>

            <a
              href="#how"
              className="text-sm font-medium text-slate-600 transition hover:text-blue-700"
            >
              How It Works
            </a>
          </div>

          <div className="flex items-center gap-3">
            <button className="hidden rounded-lg px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 sm:block">
              Login
            </button>

            <button className="rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-800">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:px-8 lg:py-28">

          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
              <span className="h-2 w-2 rounded-full bg-green-500"></span>
              Trusted legal assistance, simplified
            </div>

            <h1 className="max-w-3xl text-5xl font-bold leading-[1.08] tracking-tight text-slate-950 sm:text-6xl">
              Legal help
              <span className="text-blue-700"> without the confusion.</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              Understand your legal situation, explore your options and connect
              with the right lawyer. Legalease brings legal guidance into one
              simple platform.
            </p>

            {/* SEARCH */}
            <div className="mt-9 max-w-2xl rounded-2xl border border-slate-200 bg-white p-2 shadow-xl shadow-slate-200/60">
              <div className="flex flex-col gap-2 sm:flex-row">
                <div className="flex flex-1 items-center gap-3 px-4">
                  <span className="text-xl">🔍</span>

                  <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        handleSearch();
                      }
                    }}
                    placeholder="Describe your legal problem..."
                    className="w-full bg-transparent py-3 text-sm text-slate-900 outline-none placeholder:text-slate-400"
                  />
                </div>

                <button
                  onClick={handleSearch}
                  className="rounded-xl bg-blue-700 px-7 py-3 font-semibold text-white transition hover:bg-blue-800"
                >
                  Find Legal Help
                </button>
              </div>
            </div>

            {/* TRUST POINTS */}
            <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-600">
              <span className="flex items-center gap-2">
                <span className="text-green-600">✓</span>
                Verified Lawyers
              </span>

              <span className="flex items-center gap-2">
                <span className="text-green-600">✓</span>
                AI Legal Assistant
              </span>

              <span className="flex items-center gap-2">
                <span className="text-green-600">✓</span>
                Secure & Private
              </span>
            </div>
          </div>

          {/* HERO CARD */}
          <div className="relative hidden lg:block">
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-blue-100 blur-3xl"></div>
            <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-indigo-100 blur-3xl"></div>

            <div className="relative mx-auto max-w-md rounded-3xl border border-slate-200 bg-white p-7 shadow-2xl shadow-slate-200/70">

              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-500">
                    Legal assistance
                  </p>
                  <h3 className="mt-1 text-xl font-bold text-slate-900">
                    What do you need help with?
                  </h3>
                </div>

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-2xl">
                  ⚖️
                </div>
              </div>

              <div className="mt-6 space-y-3">
                {[
                  ["📄", "Understand a legal document"],
                  ["👨‍⚖️", "Find the right lawyer"],
                  ["🤖", "Ask our Legal AI"],
                  ["📅", "Book a consultation"],
                ].map(([icon, text]) => (
                  <button
                    key={text}
                    className="flex w-full items-center gap-4 rounded-xl border border-slate-100 bg-slate-50 p-4 text-left transition hover:border-blue-200 hover:bg-blue-50"
                  >
                    <span className="text-xl">{icon}</span>
                    <span className="text-sm font-semibold text-slate-700">
                      {text}
                    </span>
                    <span className="ml-auto text-slate-400">→</span>
                  </button>
                ))}
              </div>

              <div className="mt-6 rounded-xl bg-blue-700 p-5 text-white">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/15">
                    🤖
                  </div>
                  <div>
                    <p className="font-semibold">Legal AI Assistant</p>
                    <p className="text-xs text-blue-100">
                      Get simple answers to legal questions
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* STATS */}
      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 px-6 py-8 sm:grid-cols-4 lg:px-8">
          {[
            ["500+", "Verified Lawyers"],
            ["25+", "Legal Specializations"],
            ["4.8/5", "Average Rating"],
            ["24/7", "AI Assistance"],
          ].map(([number, label]) => (
            <div
              key={label}
              className="border-slate-200 px-4 text-center sm:border-r last:border-0"
            >
              <div className="text-2xl font-bold text-slate-900">{number}</div>
              <div className="mt-1 text-xs font-medium text-slate-500">
                {label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PRACTICE AREAS */}
      <section id="services" className="bg-white px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">

          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-widest text-blue-700">
              Legal services
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Find help for your legal situation
            </h2>

            <p className="mt-4 text-slate-600">
              Explore common areas of law and connect with professionals who
              understand your situation.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {practiceAreas.map((area) => (
              <button
                key={area.title}
                className="group rounded-2xl border border-slate-200 bg-white p-6 text-left transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-100/40"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-2xl transition group-hover:bg-blue-700">
                  {area.icon}
                </div>

                <h3 className="mt-5 text-lg font-bold text-slate-900">
                  {area.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  {area.description}
                </p>

                <div className="mt-5 text-sm font-semibold text-blue-700">
                  Explore → 
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" className="bg-slate-50 px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">

          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-blue-700">
              Simple process
            </p>

            <h2 className="mt-3 text-3xl font-bold text-slate-950 sm:text-4xl">
              Legal help in three simple steps
            </h2>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {[
              {
                number: "01",
                icon: "🔎",
                title: "Tell us your problem",
                text: "Describe your situation or upload a legal document.",
              },
              {
                number: "02",
                icon: "🤖",
                title: "Understand your options",
                text: "Use Legal AI to understand the situation in simple language.",
              },
              {
                number: "03",
                icon: "👨‍⚖️",
                title: "Connect with a lawyer",
                text: "Find a suitable lawyer and book a consultation.",
              },
            ].map((step) => (
              <div key={step.number} className="relative rounded-2xl bg-white p-7 shadow-sm">
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-2xl">
                    {step.icon}
                  </div>

                  <span className="text-4xl font-bold text-slate-100">
                    {step.number}
                  </span>
                </div>

                <h3 className="mt-6 text-lg font-bold text-slate-900">
                  {step.title}
                </h3>

                <p className="mt-2 leading-7 text-slate-500">
                  {step.text}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* LAWYERS */}
      <section id="lawyers" className="px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">

          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-blue-700">
                Professionals
              </p>

              <h2 className="mt-3 text-3xl font-bold text-slate-950 sm:text-4xl">
                Meet our lawyers
              </h2>

              <p className="mt-3 text-slate-600">
                Connect with lawyers based on experience, specialization and
                location.
              </p>
            </div>

            <button className="w-fit rounded-lg border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-blue-300 hover:text-blue-700">
              View all lawyers →
            </button>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {lawyers.map((lawyer) => (
              <div
                key={lawyer.name}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/60"
              >
                <div className="h-2 bg-blue-700"></div>

                <div className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-50 text-lg font-bold text-blue-700">
                      {lawyer.initials}
                    </div>

                    <div>
                      <h3 className="font-bold text-slate-900">
                        {lawyer.name}
                      </h3>

                      <p className="mt-1 text-sm text-slate-500">
                        {lawyer.specialty}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 grid grid-cols-2 gap-3">
                    <div className="rounded-xl bg-slate-50 p-3">
                      <p className="text-xs text-slate-400">Experience</p>
                      <p className="mt-1 text-sm font-semibold text-slate-800">
                        {lawyer.experience}
                      </p>
                    </div>

                    <div className="rounded-xl bg-slate-50 p-3">
                      <p className="text-xs text-slate-400">Location</p>
                      <p className="mt-1 text-sm font-semibold text-slate-800">
                        {lawyer.city}
                      </p>
                    </div>
                  </div>

                  <div className="mt-5 flex items-center justify-between">
                    <span className="text-sm font-semibold text-amber-500">
                      ★ {lawyer.rating}{" "}
                      <span className="font-normal text-slate-400">
                        ({lawyer.reviews})
                      </span>
                    </span>

                    <button className="rounded-lg bg-blue-700 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-800">
                      View Profile
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* AI SECTION */}
      <section id="ai" className="px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl bg-blue-700">
          <div className="grid items-center gap-10 px-8 py-12 lg:grid-cols-2 lg:px-14 lg:py-16">

            <div className="text-white">
              <div className="mb-5 inline-flex rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-blue-100">
                ✨ Introducing Legal AI
              </div>

              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Don't understand a legal document?
              </h2>

              <p className="mt-5 max-w-xl leading-7 text-blue-100">
                Upload your document and get a simple explanation of important
                clauses, potential concerns and possible next steps.
              </p>

              <button className="mt-8 rounded-xl bg-white px-6 py-3 font-bold text-blue-700 transition hover:bg-blue-50">
                Try Legal AI →
              </button>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-2xl">
              <div className="flex items-center gap-3 border-b border-slate-100 pb-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50">
                  🤖
                </div>

                <div>
                  <p className="font-bold text-slate-900">
                    Legalease AI
                  </p>
                  <p className="text-xs text-green-600">
                    ● Online
                  </p>
                </div>
              </div>

              <div className="mt-5 space-y-4">
                <div className="ml-auto max-w-xs rounded-2xl rounded-br-sm bg-blue-700 p-4 text-sm text-white">
                  Can you explain this rental agreement?
                </div>

                <div className="max-w-xs rounded-2xl rounded-bl-sm bg-slate-100 p-4 text-sm leading-6 text-slate-700">
                  Of course. I can explain the important clauses in simple
                  language and help you identify areas you may want to discuss
                  with a lawyer.
                </div>
              </div>

              <div className="mt-5 flex gap-2 rounded-xl border border-slate-200 p-2">
                <input
                  className="flex-1 px-3 text-sm outline-none"
                  placeholder="Ask Legal AI..."
                />
                <button className="rounded-lg bg-blue-700 px-4 py-2 text-white">
                  →
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-50 px-6 py-20 text-center lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold text-slate-950 sm:text-4xl">
            Your legal journey starts with understanding.
          </h2>

          <p className="mt-4 leading-7 text-slate-600">
            Get clarity first. Connect with the right professional when you
            need one.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <button className="rounded-xl bg-blue-700 px-7 py-3.5 font-semibold text-white transition hover:bg-blue-800">
              Get Started
            </button>

            <button className="rounded-xl border border-slate-200 bg-white px-7 py-3.5 font-semibold text-slate-700 transition hover:border-blue-300 hover:text-blue-700">
              Find a Lawyer
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-950 px-6 py-12 text-slate-400 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-4">

          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-700 text-lg text-white">
                ⚖
              </div>

              <span className="text-xl font-bold text-white">
                Legalease
              </span>
            </div>

            <p className="mt-4 max-w-md text-sm leading-6">
              Making legal information easier to understand and helping people
              connect with the right legal professionals.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-white">Platform</h3>

            <div className="mt-4 space-y-3 text-sm">
              <a href="#lawyers" className="block hover:text-white">
                Find a Lawyer
              </a>
              <a href="#ai" className="block hover:text-white">
                Legal AI
              </a>
              <a href="#services" className="block hover:text-white">
                Legal Services
              </a>
              <a href="#how" className="block hover:text-white">
                How It Works
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-white">Legal</h3>

            <div className="mt-4 space-y-3 text-sm">
              <a href="#" className="block hover:text-white">
                Privacy Policy
              </a>
              <a href="#" className="block hover:text-white">
                Terms of Service
              </a>
              <a href="#" className="block hover:text-white">
                Disclaimer
              </a>
              <a href="#" className="block hover:text-white">
                Contact
              </a>
            </div>
          </div>

        </div>

        <div className="mx-auto mt-10 max-w-7xl border-t border-slate-800 pt-6 text-xs">
          © 2026 Legalease. For informational purposes only. Not a substitute
          for professional legal advice.
        </div>
      </footer>

    </main>
  );
}