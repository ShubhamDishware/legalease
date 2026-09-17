"use client";

import { useEffect, useState } from "react";

type Lawyer = {
  id: number;
  name: string;
  specialization: string;
  city: string;
  experience: number | null;
  languages: string | null;
  consultationFee: number | null;
  bio: string | null;
};

export default function LawyersPage() {
  const [lawyers, setLawyers] = useState<Lawyer[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    const loadLawyers = async () => {
      try {
        const response = await fetch(
          "http://localhost:8080/api/lawyers",
          {
            method: "GET",
            headers: {
              Accept: "application/json",
            },
            signal: controller.signal,
          }
        );

        if (!response.ok) {
          throw new Error(`Server returned ${response.status}`);
        }

        const data = await response.json();

        console.log("Lawyers received:", data);

        setLawyers(data);
        setError("");
      } catch (err) {
        if (err instanceof Error && err.name === "AbortError") {
          return;
        }

        console.error("Lawyer fetch error:", err);

        setError(
          "Unable to load lawyers. Please make sure the Legalease backend is running."
        );
      } finally {
        setLoading(false);
      }
    };

    loadLawyers();

    return () => controller.abort();
  }, []);

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
            href="/lawyers/register"
            className="rounded-lg bg-blue-700 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-800"
          >
            Register as Lawyer
          </a>

        </div>
      </nav>

      {/* Header */}
      <section className="bg-white px-6 py-14">
        <div className="mx-auto max-w-7xl">

          <p className="text-sm font-bold uppercase tracking-widest text-blue-700">
            Legal professionals
          </p>

          <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-950">
            Find the right lawyer
          </h1>

          <p className="mt-4 max-w-2xl text-slate-600">
            Explore lawyers by specialization and location and find the right
            professional for your legal situation.
          </p>

        </div>
      </section>

      {/* Lawyers */}
      <section className="px-6 py-12">
        <div className="mx-auto max-w-7xl">
<div className="mb-8 space-y-4">

  <input
    type="text"
    placeholder="🔍 Search lawyers by name..."
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
    className="w-full rounded-xl border border-slate-300 p-4 text-black shadow-sm focus:border-blue-500 focus:outline-none"
  />

  <select
    value={selectedCity}
    onChange={(e) => setSelectedCity(e.target.value)}
    className="w-full rounded-xl border border-slate-300 p-4 text-black shadow-sm focus:border-blue-500 focus:outline-none"
  >
    <option value="">All Cities</option>
    <option value="Pune">Pune</option>
    <option value="Mumbai">Mumbai</option>
    <option value="Delhi">Delhi</option>
    <option value="kannad">Kannad</option>
  </select>


</div>
          {/* Loading */}
          {loading && (
            <div className="rounded-2xl bg-white p-10 text-center shadow-sm">
              <div className="text-lg font-semibold text-slate-700">
                Finding lawyers...
              </div>

              <p className="mt-2 text-sm text-slate-400">
                Connecting to Legalease
              </p>
            </div>
          )}

          {/* Error */}
          {!loading && error && (
            <div className="rounded-2xl border border-red-100 bg-red-50 p-8 text-center">
              <div className="text-lg font-semibold text-red-700">
                {error}
              </div>

              <button
                onClick={() => window.location.reload()}
                className="mt-5 rounded-lg bg-red-600 px-5 py-2 text-sm font-semibold text-white hover:bg-red-700"
              >
                Try Again
              </button>
            </div>
          )}

          {/* Empty */}
          {!loading && !error && lawyers.length === 0 && (
            <div className="rounded-2xl bg-white p-10 text-center shadow-sm">
              <div className="text-lg font-semibold text-slate-700">
                No lawyers found
              </div>

              <p className="mt-2 text-sm text-slate-400">
                No lawyer profiles are currently available.
              </p>
            </div>
          )}

          {/* Lawyer Cards */}
         
          {!loading && !error && lawyers.length > 0 && (
            <>
              <div className="mb-6 flex items-center justify-between">
                <p className="text-sm text-slate-500">
                  Showing{" "}
                  <span className="font-bold text-slate-900">
                    {
  lawyers
    .filter((lawyer) =>
      lawyer.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter((lawyer) =>
      selectedCity === "" || lawyer.city === selectedCity
    ).length
}
                  </span>{" "}
                  lawyers
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

                {lawyers
  .filter((lawyer) =>
    lawyer.name.toLowerCase().includes(searchTerm.toLowerCase())
  )
  .filter((lawyer) =>
    selectedCity === "" || lawyer.city === selectedCity
  )
  .map((lawyer) => (

                  <div
                    key={lawyer.id}
                    className="overflow-hidden rounded-2xl border border-slate-200 bg-white transition hover:-translate-y-1 hover:shadow-xl"
                  >

                    <div className="h-2 bg-blue-700"></div>

                    <div className="p-6">

                      {/* Profile */}
                      <div className="flex items-center gap-4">

                        <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-blue-50 text-xl font-bold text-blue-700">
                          {lawyer.name
                            .split(" ")
                            .map((word) => word[0])
                            .slice(0, 2)
                            .join("")
                            .toUpperCase()}
                        </div>

                        <div className="min-w-0">

                          <h2 className="truncate font-bold text-slate-900">
                            {lawyer.name}
                          </h2>

                          <p className="mt-1 text-sm text-blue-700">
                            {lawyer.specialization}
                          </p>

                        </div>

                      </div>

                      {/* Details */}
                      <div className="mt-6 space-y-3">

                        <div className="rounded-xl bg-slate-50 p-4">
                          <p className="text-xs text-slate-400">
                            Location
                          </p>

                          <p className="mt-1 font-semibold text-slate-700">
                            📍 {lawyer.city}
                          </p>
                        </div>

                        {lawyer.experience !== null && (
                          <div className="rounded-xl bg-slate-50 p-4">
                            <p className="text-xs text-slate-400">
                              Experience
                            </p>

                            <p className="mt-1 font-semibold text-slate-700">
                              {lawyer.experience} years
                            </p>
                          </div>
                        )}

                        {lawyer.consultationFee !== null && (
                          <div className="flex items-center justify-between rounded-xl bg-blue-50 px-4 py-3">

                            <span className="text-sm text-slate-600">
                              Consultation
                            </span>

                            <span className="font-bold text-blue-700">
                              ₹{lawyer.consultationFee}
                            </span>

                          </div>
                        )}

                      </div>

                      {/* Profile Button */}
                     {/* Profile Button */}
<button
  onClick={() => {
    console.log("Clicked lawyer", lawyer.id);
    window.location.href = `/lawyers/${lawyer.id}`;
  }}
  className="mt-5 block w-full rounded-xl bg-blue-700 py-3 text-center text-sm font-semibold text-white transition hover:bg-blue-800"
>
  View Lawyer Profile
</button>

                    </div>

                  </div>

                ))}

              </div>
            </>
          )}

        </div>
      </section>

    </main>
  );
}