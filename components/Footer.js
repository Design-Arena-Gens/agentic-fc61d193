export default function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <div>&copy; {new Date().getFullYear()} Campaign Agent. Built for GTM teams shipping at lightspeed.</div>
        <div>
          <a href="mailto:pilot@campaignagent.ai">pilot@campaignagent.ai</a>
        </div>
      </div>
    </footer>
  );
}
