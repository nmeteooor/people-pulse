import Link from "next/link";
import { Plus, Database, CalendarDays } from "lucide-react";
import { AppShell } from "@/components/app-shell";
import { prisma } from "@/lib/prisma/client";

export const dynamic = "force-dynamic";

const statusLabels: Record<string, string> = {
  DRAFT: "Draft",
  SCHEDULED: "Scheduled",
  ACTIVE: "Active",
  CLOSED: "Closed",
  ARCHIVED: "Archived",
};

function formatDate(date: Date | null) {
  if (!date) return "—";
  return new Intl.DateTimeFormat("en", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(date);
}

export default async function SurveysPage() {
  const surveys = await prisma.survey.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <AppShell>
      <section className="page-header compact">
        <div>
          <p className="eyebrow">SURVEYS</p>
          <h1>All surveys</h1>
          <p className="subtitle">Create, launch and monitor employee surveys.</p>
        </div>
        <Link className="primary-button button-link" href="/surveys/new">
          <Plus size={18} /> New survey
        </Link>
      </section>

      {surveys.length === 0 ? (
        <article className="card empty-state">
          <div className="empty-icon"><Database size={28} /></div>
          <h2>No surveys yet</h2>
          <p>Your database is connected. Create the first survey to verify that data is saved in PostgreSQL.</p>
          <Link className="primary-button button-link" href="/surveys/new">
            <Plus size={18} /> Create first survey
          </Link>
        </article>
      ) : (
        <article className="card table-card">
          <div className="filters">
            <div className="database-connected"><span /> PostgreSQL connected</div>
            <strong>{surveys.length} survey{surveys.length === 1 ? "" : "s"}</strong>
          </div>
          <div className="table">
            <div className="table-row surveys-table table-head">
              <span>Name</span><span>Status</span><span>Schedule</span><span>Created</span>
            </div>
            {surveys.map((survey) => (
              <div className="table-row surveys-table" key={survey.id}>
                <div className="survey-name-cell">
                  <strong>{survey.title}</strong>
                  <span>{survey.description || "No description"}</span>
                </div>
                <span><span className={`badge ${survey.status.toLowerCase()}`}>{statusLabels[survey.status]}</span></span>
                <span className="date-cell"><CalendarDays size={15} />{formatDate(survey.startsAt)} — {formatDate(survey.endsAt)}</span>
                <span>{formatDate(survey.createdAt)}</span>
              </div>
            ))}
          </div>
        </article>
      )}
    </AppShell>
  );
}
