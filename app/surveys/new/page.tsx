import Link from "next/link";
import { ArrowLeft, DatabaseZap } from "lucide-react";
import { AppShell } from "@/components/app-shell";
import { createSurvey } from "@/features/surveys/actions";

export default function NewSurveyPage() {
  return (
    <AppShell>
      <section className="page-header compact">
        <div>
          <Link className="back-link" href="/surveys"><ArrowLeft size={16} /> Back to surveys</Link>
          <p className="eyebrow">SURVEY STUDIO</p>
          <h1>Create a survey</h1>
          <p className="subtitle">Start with the basic survey settings. Questions come next.</p>
        </div>
      </section>

      <div className="form-layout">
        <form action={createSurvey} className="card survey-form">
          <div className="form-section-heading">
            <div><span>01</span><div><h2>General information</h2><p>Define the name, description and lifecycle status.</p></div></div>
          </div>

          <label className="field">
            <span>Survey title *</span>
            <input name="title" minLength={3} required placeholder="For example: eNPS — Q3 2026" />
          </label>

          <label className="field">
            <span>Description</span>
            <textarea name="description" rows={4} placeholder="Explain the purpose of this survey for HR administrators." />
          </label>

          <label className="field">
            <span>Status</span>
            <select name="status" defaultValue="DRAFT">
              <option value="DRAFT">Draft</option>
              <option value="SCHEDULED">Scheduled</option>
              <option value="ACTIVE">Active</option>
            </select>
          </label>

          <div className="two-column-fields">
            <label className="field"><span>Start date</span><input name="startsAt" type="datetime-local" /></label>
            <label className="field"><span>End date</span><input name="endsAt" type="datetime-local" /></label>
          </div>

          <div className="form-actions">
            <Link className="secondary-button button-link" href="/surveys">Cancel</Link>
            <button className="primary-button" type="submit">Create survey</button>
          </div>
        </form>

        <aside className="card form-aside">
          <DatabaseZap size={22} />
          <h2>This is real data</h2>
          <p>Submitting the form creates a record in the Supabase PostgreSQL database through Prisma.</p>
          <div className="architecture-flow"><span>Next.js</span><b>→</b><span>Prisma</span><b>→</b><span>PostgreSQL</span></div>
        </aside>
      </div>
    </AppShell>
  );
}
