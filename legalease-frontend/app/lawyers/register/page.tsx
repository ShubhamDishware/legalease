"use client";

import { useState } from "react";

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    specialization: "",
    city: "",
    experience: "",
    languages: "",
    consultationFee: "",
    bio: "",
  });

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);
    setMessage("");

    try {
      const response = await fetch("http://localhost:8080/api/lawyers", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          specialization: formData.specialization,
          city: formData.city,
          experience: Number(formData.experience),
          languages: formData.languages,
          consultationFee: Number(formData.consultationFee),
          bio: formData.bio,
        }),
      });

      if (!response.ok) {
        throw new Error("Registration failed");
      }

      setMessage(
        "Registration successful! Your lawyer profile has been created."
      );

      setFormData({
        name: "",
        email: "",
        phone: "",
        specialization: "",
        city: "",
        experience: "",
        languages: "",
        consultationFee: "",
        bio: "",
      });
    } catch {
      setMessage(
        "Registration failed. Please make sure the Legalease backend is running."
      );
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100";

  return (
    <main className="min-h-screen bg-slate-50">

      {/* Navbar */}
      <nav className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

          <a href="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-700 text-lg text-white">
              ⚖
            </div>

            <div>
              <div className="font-bold text-slate-900">
                Legalease
              </div>

              <div className="text-[9px] uppercase tracking-widest text-blue-700">
                Legal made simple
              </div>
            </div>
          </a>

          <a
            href="/lawyers"
            className="text-sm font-semibold text-slate-600 hover:text-blue-700"
          >
            ← Find Lawyers
          </a>

        </div>
      </nav>

      {/* Page Header */}
      <section className="bg-white px-6 py-14">
        <div className="mx-auto max-w-4xl text-center">

          <p className="text-sm font-bold uppercase tracking-widest text-blue-700">
            For Legal Professionals
          </p>

          <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
            Join Legalease as a Lawyer
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            Create your professional profile and connect with people
            looking for trusted legal assistance.
          </p>

        </div>
      </section>

      {/* Registration Form */}
      <section className="px-6 py-12">
        <div className="mx-auto max-w-4xl">

          <form
            onSubmit={handleSubmit}
            className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-10"
          >

            {/* Personal Information */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900">
                Personal Information
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Enter your basic contact information.
              </p>
            </div>

            <div className="mt-6 grid gap-6 md:grid-cols-2">

              {/* Full Name */}
              <div>
                <label className="text-sm font-semibold text-slate-700">
                  Full Name
                </label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Adv. Rahul Sharma"
                  required
                  className={inputClass}
                />
              </div>

              {/* Email */}
              <div>
                <label className="text-sm font-semibold text-slate-700">
                  Email Address
                </label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="rahul@example.com"
                  required
                  className={inputClass}
                />
              </div>

              {/* Phone */}
              <div>
                <label className="text-sm font-semibold text-slate-700">
                  Phone Number
                </label>

                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="10-digit mobile number"
                  required
                  className={inputClass}
                />
              </div>

              {/* City */}
              <div>
                <label className="text-sm font-semibold text-slate-700">
                  City
                </label>

                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="Pune"
                  required
                  className={inputClass}
                />
              </div>

            </div>

            {/* Professional Information */}
            <div className="mt-10 border-t border-slate-200 pt-10">

              <h2 className="text-2xl font-bold text-slate-900">
                Professional Information
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Tell clients about your legal expertise.
              </p>

            </div>

            <div className="mt-6 grid gap-6 md:grid-cols-2">

              {/* Specialization */}
              <div>
                <label className="text-sm font-semibold text-slate-700">
                  Specialization
                </label>

                <select
                  name="specialization"
                  value={formData.specialization}
                  onChange={handleChange}
                  required
                  className={inputClass}
                >
                  <option value="">Select specialization</option>
                  <option value="Criminal Law">Criminal Law</option>
                  <option value="Family Law">Family Law</option>
                  <option value="Corporate Law">Corporate Law</option>
                  <option value="Property Law">Property Law</option>
                  <option value="Civil Law">Civil Law</option>
                  <option value="Cyber Law">Cyber Law</option>
                  <option value="Employment Law">Employment Law</option>
                  <option value="Consumer Law">Consumer Law</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              {/* Experience */}
              <div>
                <label className="text-sm font-semibold text-slate-700">
                  Years of Experience
                </label>

                <input
                  type="number"
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  placeholder="8"
                  min="0"
                  required
                  className={inputClass}
                />
              </div>

              {/* Languages */}
              <div>
                <label className="text-sm font-semibold text-slate-700">
                  Languages
                </label>

                <input
                  type="text"
                  name="languages"
                  value={formData.languages}
                  onChange={handleChange}
                  placeholder="English, Hindi, Marathi"
                  required
                  className={inputClass}
                />
              </div>

              {/* Consultation Fee */}
              <div>
                <label className="text-sm font-semibold text-slate-700">
                  Consultation Fee (₹)
                </label>

                <input
                  type="number"
                  name="consultationFee"
                  value={formData.consultationFee}
                  onChange={handleChange}
                  placeholder="499"
                  min="0"
                  required
                  className={inputClass}
                />
              </div>

            </div>

            {/* Bio */}
            <div className="mt-6">

              <label className="text-sm font-semibold text-slate-700">
                Professional Bio
              </label>

              <textarea
                name="bio"
                value={formData.bio}
                onChange={handleChange}
                placeholder="Describe your experience and areas of legal practice."
                rows={5}
                required
                className={inputClass}
              />

            </div>

            {/* Verification Notice */}
            <div className="mt-6 rounded-xl bg-blue-50 p-4 text-sm text-blue-800">
              <strong>Verification:</strong> Your professional information
              may be reviewed before your profile becomes publicly visible.
            </div>

            {/* Status Message */}
            {message && (
              <div className="mt-6 rounded-xl bg-slate-100 p-4 text-center text-sm font-semibold text-slate-700">
                {message}
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="mt-8 w-full rounded-xl bg-blue-700 py-4 font-bold text-white transition hover:bg-blue-800 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? "Submitting..." : "Submit Lawyer Registration"}
            </button>

            <p className="mt-4 text-center text-xs text-slate-400">
              Please provide accurate professional information.
            </p>

          </form>

        </div>
      </section>

    </main>
  );
}