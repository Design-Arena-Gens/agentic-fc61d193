const testimonials = [
  {
    quote:
      'We replaced a patchwork of agencies with Campaign Agent. Within 30 days, pipeline velocity increased 48% and creative refresh cycles dropped from weeks to hours.',
    name: 'Amelia Chen',
    title: 'VP Growth, StratusCloud',
  },
  {
    quote:
      'The agent surfaces the exact insights our exec team cares about. We finally have a marketing system iterating at the pace our product team ships.',
    name: 'Ravi Patel',
    title: 'CMO, Northwind Robotics',
  },
  {
    quote:
      'From the first experiment sprint we saw channel lift. The AI pods operate like an elite growth squad plugged directly into our stack.',
    name: 'Jordan Miles',
    title: 'Head of Digital, Everline',
  },
];

export default function Testimonials() {
  return (
    <section>
      <div className="section-heading">Teams scaling with Campaign Agent</div>
      <div className="testimonials">
        {testimonials.map((testimonial) => (
          <div key={testimonial.name} className="testimonial">
            <p>“{testimonial.quote}”</p>
            <div className="avatar">
              <div />
              <div>
                <strong>{testimonial.name}</strong>
                <div style={{ color: 'rgba(226, 232, 240, 0.55)', fontSize: '0.9rem' }}>{testimonial.title}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
