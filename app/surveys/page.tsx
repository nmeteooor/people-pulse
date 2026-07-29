import { AppShell } from "@/components/app-shell";
import { surveys } from "@/lib/mock-data";

export default function SurveysPage() {
  return (
    <AppShell>
      <section className="page-header compact">
        <div><p className="eyebrow">SURVEYS</p><h1>All surveys</h1><p className="subtitle">Create, launch and monitor employee surveys.</p></div>
        <button className="primary-button">+ New survey</button>
      </section>
      <article className="card table-card">
        <div className="filters"><input placeholder="Search surveys" /><select defaultValue="all"><option value="all">All statuses</option><option>Active</option><option>Draft</option></select></div>
        <div className="table">
          <div className="table-row table-head"><span>Name</span><span>Status</span><span>Responses</span><span>End date</span></div>
          {surveys.map((survey) => (
            <div className="table-row" key={survey.id}><strong>{survey.name}</strong><span><span className={`badge ${survey.status.toLowerCase()}`}>{survey.status}</span></span><span>{survey.responses}/{survey.audience}</span><span>{survey.ends}</span></div>
          ))}
        </div>
      </article>
    </AppShell>
  );
}
