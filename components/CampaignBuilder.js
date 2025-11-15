'use client';

import { useMemo, useState } from 'react';

const campaignObjectives = [
  'Product launch awareness',
  'Demand generation',
  'Feature adoption',
  'Event registration',
  'Pipeline acceleration',
];

const campaignChannels = [
  'Paid social',
  'Search & retargeting',
  'Lifecycle email',
  'Landing experiences',
  'Content syndication',
];

const personas = [
  'Technical buyer',
  'Economic buyer',
  'End user champion',
  'Executive sponsor',
];

const toneOptions = ['Bold & disruptive', 'Trusted advisor', 'Visionary', 'Tactical & actionable'];

function buildPlan({ objective, audience, tone, budget, channel, challenge }) {
  if (!objective) {
    return null;
  }

  const baselineBudget = budget ? parseInt(budget.replace(/[^0-9]/g, ''), 10) || 0 : 0;
  const spendBand = baselineBudget >= 50000 ? 'high' : baselineBudget >= 20000 ? 'mid' : 'lean';

  const strategy = {
    headline: `${objective} for ${audience || 'your audience'}`,
    narrative:
      tone === 'Bold & disruptive'
        ? 'Lead with a provocative point of view that reframes the competitive landscape.'
        : tone === 'Trusted advisor'
        ? 'Own the category conversation with confident, insight-led storytelling.'
        : tone === 'Visionary'
        ? 'Paint the future state and invite your audience into the movement.'
        : 'Deliver crystal-clear value stories, quantified ROI, and tactical proof points.',
    budgetNote:
      spendBand === 'high'
        ? 'Allocate 50% to experimentation pods to validate new narratives fast.'
        : spendBand === 'mid'
        ? 'Balance 70/30 between proven plays and experimental pushes.'
        : 'Focus on the highest intent channels and repurpose assets aggressively.',
  };

  const channelMix = channel
    ? [channel]
    : spendBand === 'high'
    ? ['Paid social', 'Lifecycle email', 'Landing experiences', 'Executive roundtable']
    : spendBand === 'mid'
    ? ['Paid social', 'Search & retargeting', 'Landing experiences']
    : ['Paid social', 'Lifecycle email'];

  const quickWins = [
    `Deploy a hero landing page variant tailored to ${audience || 'your ICP'} with dynamic proof points`,
    `Spin up a three-step nurture path that addresses the core challenge: ${challenge || 'frictionless onboarding'}`,
    `Trigger weekly agent reviews to remix top-performing ads into new creative angles`,
  ];

  return {
    strategy,
    channelMix,
    quickWins,
  };
}

export default function CampaignBuilder() {
  const [form, setForm] = useState({ objective: campaignObjectives[0], tone: toneOptions[0] });

  const plan = useMemo(() => buildPlan(form), [form]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section id="campaign-builder">
      <div className="section-heading">Preview your agent-generated campaign plan</div>
      <div className="section-subtitle" style={{ marginBottom: '28px' }}>
        Describe your campaign and the agent will draft a strategic outline with prioritized plays in seconds.
      </div>
      <div className="split">
        <div className="builder card">
          <form>
            <label>
              Campaign objective
              <select name="objective" value={form.objective} onChange={handleChange}>
                {campaignObjectives.map((objective) => (
                  <option key={objective} value={objective}>
                    {objective}
                  </option>
                ))}
              </select>
            </label>
            <label>
              Primary audience
              <select
                name="audience"
                value={form.audience || ''}
                onChange={handleChange}
                defaultValue="Technical buyer"
              >
                <option value="">Select persona</option>
                {personas.map((persona) => (
                  <option key={persona} value={persona}>
                    {persona}
                  </option>
                ))}
              </select>
            </label>
            <label>
              Brand tone
              <select name="tone" value={form.tone || ''} onChange={handleChange}>
                {toneOptions.map((tone) => (
                  <option key={tone} value={tone}>
                    {tone}
                  </option>
                ))}
              </select>
            </label>
            <label>
              Monthly budget (USD)
              <input
                type="text"
                name="budget"
                placeholder="e.g. 35000"
                value={form.budget || ''}
                onChange={handleChange}
              />
            </label>
            <label>
              Priority channel
              <select name="channel" value={form.channel || ''} onChange={handleChange}>
                <option value="">Let agent choose</option>
                {campaignChannels.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </label>
            <label>
              Biggest challenge
              <textarea
                name="challenge"
                placeholder="e.g. Converting traffic into qualified demos"
                value={form.challenge || ''}
                onChange={handleChange}
              />
            </label>
          </form>
        </div>
        <div className="plan-output">
          {plan ? (
            <>
              <div>
                <span>Strategy North Star</span>
                <h4>{plan.strategy.headline}</h4>
                <p>{plan.strategy.narrative}</p>
              </div>
              <div>
                <span>Channel Mix</span>
                <ul>
                  {plan.channelMix.map((item) => (
                    <li key={item}>
                      <strong>{item}</strong>
                      <span>Execution & measurement handled by agent pods.</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <span>Quick Wins</span>
                <ul>
                  {plan.quickWins.map((win) => (
                    <li key={win}>
                      <strong>{win}</strong>
                      <span>Queued in backlog for day-one deployment.</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <span>Budget Guidance</span>
                <p>{plan.strategy.budgetNote}</p>
              </div>
            </>
          ) : (
            <p>Complete the inputs to generate a tailored campaign blueprint.</p>
          )}
        </div>
      </div>
    </section>
  );
}
