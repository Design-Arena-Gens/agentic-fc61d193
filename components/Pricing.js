const tiers = [
  {
    name: 'Launch',
    price: '$2.5K',
    cadence: 'per month',
    highlights: [
      'Campaign agent for one product line',
      'Up to 3 growth rituals per week',
      'Landing page & ad creative autopilot',
      'HubSpot & Salesforce connectors',
    ],
  },
  {
    name: 'Scale',
    price: '$6K',
    cadence: 'per month',
    highlights: [
      'Multi-product campaign pods',
      'Daily creative remix & experiment queue',
      'Lifecycle personalization & churn busters',
      'C-Level narrative reporting',
    ],
  },
  {
    name: 'Enterprise',
    price: 'Let’s talk',
    cadence: 'custom',
    highlights: [
      'Dedicated intelligence analyst pod',
      'Guardrail workflows & human-in-the-loop approvals',
      'Private data fine-tuning & retention',
      'Security & compliance support',
    ],
  },
];

export default function Pricing() {
  return (
    <section>
      <div className="section-heading">Choose how the agent plugs into your team</div>
      <div className="section-subtitle" style={{ marginBottom: '32px' }}>
        Every tier includes onboarding, campaign migration, and ongoing optimization cycles.
      </div>
      <div className="pricing-grid">
        {tiers.map((tier) => (
          <div key={tier.name} className="price-card">
            <div className="tag" style={{ width: 'fit-content' }}>
              <span>📈</span>
              <span>{tier.name}</span>
            </div>
            <div className="price">{tier.price}</div>
            <div style={{ color: 'rgba(226, 232, 240, 0.6)' }}>{tier.cadence}</div>
            <ul>
              {tier.highlights.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
            <button className="button primary">Talk to sales</button>
          </div>
        ))}
      </div>
    </section>
  );
}
