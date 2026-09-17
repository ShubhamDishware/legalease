"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

type Lawyer = {
  id: number;
  name: string;
  email: string;
  phone: string;
  specialization: string;
  city: string;
  experience: number;
  languages: string;
  consultationFee: number;
  bio: string;
  degree: string;
  barCouncilId: string;
  verified: boolean;
};

export default function LawyerProfile() {
  const params = useParams();

  const id =
    params && typeof params.id === "string"
      ? params.id
      : "";

  const [lawyer, setLawyer] = useState<Lawyer | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
const [clientName, setClientName] = useState("");
const [phone, setPhone] = useState("");
const [issue, setIssue] = useState("");
const [success, setSuccess] = useState("");
  const [documentName, setDocumentName] = useState("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
useEffect(() => {
    if (!id) {
      setLoading(false);
      return;
    }

    async function loadLawyer() {
      try {
        const response = await fetch(
          `http://localhost:8080/api/lawyers/${id}`
        );

        if (!response.ok) {
          throw new Error("Lawyer not found");
        }

        const data = await response.json();

        setLawyer(data);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setError("Unable to load lawyer profile.");
        setLoading(false);
      }
    }

    loadLawyer();
  }, [id]);

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center">
        <h1 className="text-xl font-bold">
          Loading lawyer profile...
        </h1>
      </main>
    );
  }

  if (error || !lawyer) {
    return (
      <main className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <h1 className="text-red-600 text-xl font-bold">
            {error || "Lawyer not found"}
          </h1>

          <a
            href="/lawyers"
            className="mt-4 inline-block bg-blue-700 text-white px-4 py-2 rounded"
          >
            Back to Lawyers
          </a>
        </div>
      </main>
    );
  }

  const initials = lawyer.name
    .split(" ")
    .map((word) => word[0])
    .slice(0, 2)
    .join("");

  return (
    <main className="min-h-screen bg-slate-50">
      <div className="max-w-4xl mx-auto p-8">
        <div className="bg-white rounded-2xl shadow p-8">

          <div className="flex items-center gap-6">

            <div className="h-24 w-24 rounded-full bg-blue-100 flex items-center justify-center text-3xl font-bold text-blue-700">
              {initials}
            </div>
<div className="mt-8 grid gap-4 md:grid-cols-2">

  <div className="rounded-xl bg-slate-50 p-4">
    <p className="text-sm text-slate-500">Experience</p>
    <p className="font-semibold text-slate-900">
      {lawyer.experience} Years
    </p>
  </div>
  <div className="mt-8">

  <h2 className="text-xl font-bold text-slate-900">
    About Lawyer
  </h2>

  <p className="mt-3 text-slate-600">
    {lawyer.bio}
  </p>

</div>

  <div className="rounded-xl bg-slate-50 p-4">
    <p className="text-sm text-slate-500">Languages</p>
    <p className="font-semibold text-slate-900">
      {lawyer.languages}
    </p>
  </div>

  <div className="rounded-xl bg-slate-50 p-4">
    <p className="text-sm text-slate-500">Consultation Fee</p>
    <p className="font-semibold text-green-600">
      ₹{lawyer.consultationFee}
    </p>
  </div>

  <div className="rounded-xl bg-slate-50 p-4">
    <p className="text-sm text-slate-500">Degree</p>
    <p className="font-semibold text-slate-900">
      {lawyer.degree}
    </p>
  </div>

</div>
            <div>
              <h1 className="text-3xl font-bold">
                {lawyer.name}
              </h1>
<div className="mt-2 flex items-center gap-3">

  <p className="font-semibold text-blue-600">
    {lawyer.specialization}
  </p>

  {lawyer.verified && (
    <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-bold text-green-700">
      ✓ Verified
    </span>
  )}
</div>

<div className="mt-8 space-y-3">

  <input
    type="text"
    placeholder="Your Name"
    value={clientName}
    onChange={(e) => setClientName(e.target.value)}
    className="w-full rounded-lg border p-3 text-black"
  />

  <input
    type="text"
    placeholder="Phone Number"
    value={phone}
    onChange={(e) => setPhone(e.target.value)}
    className="w-full rounded-lg border p-3 text-black"
  />

  <textarea
    placeholder="Describe your legal issue"
    value={issue}
    onChange={(e) => setIssue(e.target.value)}
    className="w-full rounded-lg border p-3 text-black"
  />
<input
  type="text"
  placeholder="Document Name (Optional)"
  value={documentName}
  onChange={(e) => setDocumentName(e.target.value)}
  className="w-full rounded-lg border p-3 text-black"
/>
<input
  type="file"
  accept=".pdf"
  onChange={(e) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  }}
  className="w-full rounded-lg border p-3 text-black"
/>
  <button
onClick={async () => {

  let uploadedFileName = documentName;

  if (selectedFile) {

    const formData = new FormData();

    formData.append("file", selectedFile);

    const uploadResponse = await fetch(
      "http://localhost:8080/api/files/upload",
      {
        method: "POST",
        body: formData,
      }
    );

    uploadedFileName = await uploadResponse.text();
  }

  const response = await fetch(
    "http://localhost:8080/api/consultations",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        clientName,
        phone,
        issue,
        lawyerId: lawyer.id,
        documentName: uploadedFileName,
      }),
    }
  );

  if (response.ok) {
    setSuccess("Consultation Request Sent Successfully!");
  }
}}
    className="w-full rounded-xl bg-blue-700 py-4 text-lg font-semibold text-white hover:bg-blue-800"
  >
    Submit Consultation Request
  </button>

  {success && (
    <p className="text-green-600 font-semibold">
      {success}
    </p>
  )}

</div>

              <p className="mt-1 text-gray-500">
                📍 {lawyer.city}
              </p>
            </div>

          </div>

        </div>
      </div>
    </main>
  );
}