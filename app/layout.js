import "./globals.css";

export const metadata = {
  title: "Intelliwave | Agence d'automatisation AI",
  description:
    "Intelliwave accompagne les entreprises avec des solutions d'automatisation n8n et des chatbots IA sur mesure.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
