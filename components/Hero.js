export default function Hero() {
  return (
    <section className="hero">
      <div className="tag">
        <span>⚡</span>
        <span>Agentic Growth Engine</span>
      </div>
      <h1>Launch Web Campaigns That Iterate Themselves</h1>
      <p>
        Campaign Agent orchestrates your entire go-to-market motion — from audience research and creative
        production to on-site optimization — all powered by autonomous AI workflows aligned to your metrics.
      </p>
      <div className="hero-cta">
        <button className="button primary">Book a live pilot</button>
        <a className="secondary-link" href="#campaign-builder">
          See an instant campaign plan →
        </a>
      </div>
      <div className="badge-grid">
        <div className="badge">
          <span>🧠</span>
          <div>
            <strong>Adaptive intelligence</strong>
            <div>Continuously senses market shifts to adjust targeting.</div>
          </div>
        </div>
        <div className="badge">
          <span>🎯</span>
          <div>
            <strong>Conversion obsessed</strong>
            <div>Optimizes creative and copy around your live KPIs.</div>
          </div>
        </div>
        <div className="badge">
          <span>🚀</span>
          <div>
            <strong>Deploys in hours</strong>
            <div>Prebuilt playbooks launch cross-channel campaigns fast.</div>
          </div>
        </div>
      </div>
    </section>
  );
}
