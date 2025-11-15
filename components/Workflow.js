const steps = [
  {
    title: 'Intake & alignment',
    detail:
      'Upload existing assets, define goals, and connect analytics streams. The agent builds a living brief scoped to your KPIs.',
  },
  {
    title: 'Launch orchestrations',
    detail:
      'Generate landing experiences, creatives, and copy variants across paid, social, and lifecycle channels in one click.',
  },
  {
    title: 'Signal-driven iteration',
    detail:
      'Autonomous loops monitor performance, trigger experiments, and reallocate spend based on what is resonating.',
  },
  {
    title: 'Executive-ready reporting',
    detail:
      'Narrative reporting packages pull insights, surfaced learnings, and ready-to-share decks for leadership.',
  },
];

export default function Workflow() {
  return (
    <section className="split">
      <div className="gradient-border">
        <div className="inner">
          <div className="tag" style={{ marginBottom: '18px' }}>
            <span>🧭</span>
            <span>Flow</span>
          </div>
          <h2 className="section-heading" style={{ marginBottom: '18px' }}>
            The campaign command center that never sleeps
          </h2>
          <p className="section-subtitle">
            Plug the agent into your marketing stack and watch it orchestrate the full lifecycle —
            from insight mining to personalization at scale.
          </p>
        </div>
      </div>
      <div className="workflow-steps">
        {steps.map((step, index) => (
          <div key={step.title} className="workflow-step">
            <span className="number">Step {index + 1}</span>
            <h4>{step.title}</h4>
            <p>{step.detail}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
