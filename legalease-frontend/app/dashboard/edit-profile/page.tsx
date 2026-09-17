"use client";

import { useEffect, useState } from "react";

export default function EditProfilePage() {
  const lawyerId = 27;

  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [bio, setBio] = useState("");

  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");

  useEffect(() => {
    async function loadLawyer() {
      try {
        const response = await fetch(
          `http://localhost:8080/api/lawyers/${lawyerId}`
        );

        const data = await response.json();

        setName(data.name || "");
        setCity(data.city || "");
        setSpecialization(data.specialization || "");
        setBio(data.bio || "");
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    loadLawyer();
  }, []);

  const handleSave = async () => {
    try {
      const response = await fetch(
        `http://localhost:8080/api/lawyers/${lawyerId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            city,
            specialization,
            bio,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Update failed");
      }

      setMessage("Profile updated successfully!");
    } catch (error) {
      console.error(error);
      setMessage("Failed to update profile.");
    }
  };

  if (loading) {
    return <h1 className="p-8">Loading...</h1>;
  }

  return (
    <main className="min-h-screen bg-slate-100 p-8">
      <div className="mx-auto max-w-3xl rounded-2xl bg-white p-8 shadow">

        <h1 className="text-3xl font-bold">
          Edit Profile
        </h1>

        <p className="mt-2 text-slate-500">
          Update your lawyer information
        </p>

        <div className="mt-8 space-y-4">

          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded-lg border p-3 text-black"
          />

          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="w-full rounded-lg border p-3 text-black"
          />

          <input
            type="text"
            value={specialization}
            onChange={(e) => setSpecialization(e.target.value)}
            className="w-full rounded-lg border p-3 text-black"
          />

          <textarea
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            className="w-full rounded-lg border p-3 text-black"
          />

          <button
            onClick={handleSave}
            className="rounded-lg bg-blue-700 px-5 py-3 text-white"
          >
            Save Changes
          </button>

          {message && (
            <p className="font-semibold text-green-600">
              {message}
            </p>
          )}

        </div>

      </div>
    </main>
  );
}