"use client";

import { useEffect, useState } from "react";

type Consultation = {
  id: number;
  clientName: string;
  phone: string;
  issue: string;
  lawyerId: number;
  status: string;
  documentName: string;
  documentPath: string;
};

export default function DashboardPage() {
  const [consultations, setConsultations] = useState<Consultation[]>([]);

 useEffect(() => {

  const lawyerId = localStorage.getItem("lawyerId");

  if (!lawyerId) {
    return;
  }

  fetch(
    `http://localhost:8080/api/consultations/lawyer/${lawyerId}`
  )
    .then((res) => res.json())
    .then((data) => setConsultations(data))
    .catch((error) => console.error(error));

}, []);
const pendingCount = consultations.filter(
  (c) => c.status === "PENDING"
).length;

const acceptedCount = consultations.filter(
  (c) => c.status === "ACCEPTED"
).length;

const completedCount = consultations.filter(
  (c) => c.status === "COMPLETED"
).length;

const totalCount = consultations.length;
  return (
    <main className="min-h-screen bg-slate-100 p-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold">
          Lawyer Dashboard
        </h1>

        <p className="mt-2 text-slate-500">
          Consultation Requests
        </p>
        <div className="mt-8 grid gap-4 md:grid-cols-4">

  <div className="rounded-xl bg-white p-6 shadow">
    <h3 className="text-sm text-slate-500">
      Total Requests
    </h3>
    <p className="mt-2 text-3xl font-bold">
      {totalCount}
    </p>
  </div>

  <div className="rounded-xl bg-yellow-50 p-6 shadow">
    <h3 className="text-sm text-yellow-700">
      Pending
    </h3>
    <p className="mt-2 text-3xl font-bold text-yellow-700">
      {pendingCount}
    </p>
  </div>

  <div className="rounded-xl bg-blue-50 p-6 shadow">
    <h3 className="text-sm text-blue-700">
      Accepted
    </h3>
    <p className="mt-2 text-3xl font-bold text-blue-700">
      {acceptedCount}
    </p>
  </div>

  <div className="rounded-xl bg-green-50 p-6 shadow">
    <h3 className="text-sm text-green-700">
      Completed
    </h3>
    <p className="mt-2 text-3xl font-bold text-green-700">
      {completedCount}
    </p>
  </div>

</div>

        <div className="mt-8 space-y-4">
          {consultations.map((consultation) => (
            <div
              key={consultation.id}
              className="rounded-xl bg-white p-6 shadow"
            >
              <h2 className="text-xl font-bold">
                {consultation.clientName}
              </h2>

              <p className="mt-2 text-slate-600">
                📞 {consultation.phone}
              </p>

              <div className="mt-4 flex gap-3">
                <a
                  href={`tel:${consultation.phone}`}
                  className="rounded-lg bg-green-600 px-4 py-2 text-white"
                >
                  Call Client
                </a>

                <a
                  href={`https://wa.me/${consultation.phone}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg bg-emerald-500 px-4 py-2 text-white"
                >
                  WhatsApp
                </a>
              </div>

              <p className="mt-4 text-slate-700">
                {consultation.issue}
              </p>
              {consultation.documentName && (
  <div className="mt-3">
    <p className="text-sm text-slate-600">
      📄 {consultation.documentName}
    </p>

    <a
      href={`http://localhost:8080/uploads/${consultation.documentName}`}
      target="_blank"
      rel="noopener noreferrer"
      className="mt-2 inline-block rounded-lg bg-purple-600 px-4 py-2 text-white"
    >
      View PDF
    </a>
  </div>
)}

              <div className="mt-4">
                <span
                  className={`rounded-full px-3 py-1 text-sm font-bold ${
                    consultation.status === "COMPLETED"
                      ? "bg-green-100 text-green-700"
                      : consultation.status === "ACCEPTED"
                      ? "bg-blue-100 text-blue-700"
                      : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  {consultation.status}
                </span>
              </div>

              <div className="mt-4 flex gap-3">
                <button
                  onClick={async () => {
                    await fetch(
                      `http://localhost:8080/api/consultations/${consultation.id}/accept`,
                      {
                        method: "PUT",
                      }
                    );

                    window.location.reload();
                  }}
                  className="rounded-lg bg-blue-700 px-4 py-2 text-white"
                >
                  Accept Consultation
                </button>

                <button
                  onClick={async () => {
                    await fetch(
                      `http://localhost:8080/api/consultations/${consultation.id}/complete`,
                      {
                        method: "PUT",
                      }
                    );

                    window.location.reload();
                  }}
                  className="rounded-lg bg-green-700 px-4 py-2 text-white"
                >
                  Complete Consultation
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}