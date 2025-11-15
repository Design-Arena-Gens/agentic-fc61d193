const qa = [
  {
    question: 'How fast can we launch our first campaign?',
    answer:
      'Most teams run their first live campaign within 7 days. The agent ingests your assets, warms up integrations, and deploys a pilot playbook in the first sprint.',
  },
  {
    question: 'Does a human stay in the loop?',
    answer:
      'Yes. You can require approvals at any point in the workflow. Leadership can also receive weekly reviews that summarize key learnings and next moves.',
  },
  {
    question: 'What tools do you integrate with?',
    answer:
      'Native connectors include HubSpot, Salesforce, Marketo, Webflow, Segment, Figma, and a direct analytics API. Custom integrations ship via secure webhooks.',
  },
  {
    question: 'How is our data secured?',
    answer:
      'All agent pods run in isolated environments with encryption in transit and at rest. SOC 2 documentation, audit trails, and data retention controls are available.',
  },
];

export default function FAQ() {
  return (
    <section>
      <div className="section-heading">Answers before you connect the agent</div>
      <div className="faq">
        {qa.map((item) => (
          <div key={item.question} className="faq-item">
            <h4>{item.question}</h4>
            <p>{item.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
