import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { AppShell } from "@/components/app-shell";
import { surveys } from "@/lib/mock-data";

export default function DashboardPage() {
  return (
    <AppShell>
      <section className="page-header">
        <div>
          <p className="eyebrow">PEOPLE PULSE</p>
          <h1>Good evening, Viktoriia</h1>
          <p className="subtitle">Here is the current state of employee feedback.</p>
        </div>
        <button className="primary-button">+ New survey</button>
      </section>

      <section className="kpi-grid">
        <article className="card kpi"><span>Response rate</span><strong>74%</strong><small>+9% vs previous wave</small></article>
        <article className="card kpi"><span>Average eNPS</span><strong>+18</strong><small>+6 points</small></article>
        <article className="card kpi"><span>Active surveys</span><strong>1</strong><small>1 scheduled</small></article>
        <article className="card kpi"><span>Employees</span><strong>143</strong><small>Zoho sync pending</small></article>
      </section>

      <section className="dashboard-grid">
        <article className="card span-2">
          <div className="card-heading"><div><h2>Active surveys</h2><p>Monitor participation and deadlines.</p></div><Link href="/surveys">View all</Link></div>
          <div className="survey-list">
            {surveys.slice(0, 2).map((survey) => {
              const rate = survey.audience ? Math.round((survey.responses / survey.audience) * 100) : 0;
              return (
                <div className="survey-row" key={survey.id}>
                  <div><strong>{survey.name}</strong><span>{survey.status} · ends {survey.ends}</span></div>
                  <div className="progress-wrap"><div className="progress"><span style={{ width: `${rate}%` }} /></div><small>{survey.responses}/{survey.audience}</small></div>
                  <ArrowRight size={18} />
                </div>
              );
            })}
          </div>
        </article>

        <article className="card ai-card">
          <div className="ai-title"><Sparkles size={18} /><h2>AI summary</h2></div>
          <p>Team atmosphere and flexibility remain the strongest positive themes.</p>
          <div className="insight warning">Career growth is mentioned more often in negative comments.</div>
          <button className="secondary-button">Open insights</button>
        </article>

        <article className="card span-2">
          <div className="card-heading"><div><h2>Response trend</h2><p>Demo data until the database is connected.</p></div></div>
          <div className="chart-placeholder">
            {[34, 46, 52, 61, 68, 74].map((v, i) => <div key={i} style={{ height: `${v}%` }}><span>{v}%</span></div>)}
          </div>
        </article>

        <article className="card">
          <h2>Recent activity</h2>
          <ul className="activity-list">
            <li><span>Today</span>Prototype deployed</li>
            <li><span>Today</span>Dashboard created</li>
            <li><span>Next</span>Database connection</li>
          </ul>
        </article>
      </section>
    </AppShell>
  );
}
