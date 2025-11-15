const features = [
  {
    title: 'Intelligence pods',
    description:
      'Specialized AI agents run competitive analysis, message testing, and SEO profiling in parallel to surface instant campaign insights.',
    icon: '🛰️',
  },
  {
    title: 'Creative autopilot',
    description:
      'Spin up channel-ready landing pages, motion assets, and social ads with guardrails that match your brand voice perfectly.',
    icon: '🎨',
  },
  {
    title: 'Live funnel analytics',
    description:
      'Unified analytics layer scores segments, creatives, and offers with automated recommendations prioritized by impact.',
    icon: '📊',
  },
  {
    title: 'Growth rituals',
    description:
      'Daily standups synthesize learnings and deploy new experiments so every campaign gets sharper automatically.',
    icon: '🔁',
  },
  {
    title: 'AI + human sync',
    description:
      'Assign human approvals where you need them while letting the agent handle execution and reporting at scale.',
    icon: '🤝',
  },
  {
    title: 'Security & compliance',
    description:
      'Enterprise-grade governance, SOC 2 alignment, and granular access controls keep your data protected.',
    icon: '🛡️',
  },
];

export default function FeatureGrid() {
  return (
    <section>
      <div className="section-heading">Everything your web campaign squad needs — in one agent</div>
      <div className="section-subtitle">
        Modular capabilities plug into an orchestrated workflow so you can research, launch, and scale campaigns without
        spinning up separate teams.
      </div>
      <div className="grid" style={{ marginTop: '32px', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))' }}>
        {features.map((feature) => (
          <div key={feature.title} className="card">
            <div style={{ fontSize: '32px' }}>{feature.icon}</div>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 600, marginTop: '18px' }}>{feature.title}</h3>
            <p style={{ color: 'rgba(226, 232, 240, 0.7)', marginTop: '10px' }}>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
