import './globals.css';

export const metadata = {
  title: 'Campaign Agent | AI-Powered Web Campaigns',
  description: 'Launch high-performing web campaigns with an AI agent that plans, executes, and optimizes every step.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
