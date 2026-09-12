import type { Metadata } from "next";
import { Figtree, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const figtree = Figtree({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-code",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://krishnakumarmandal.dev"),
  title: "Krishna Kumar Mandal · AI/ML Engineer · Small Language Models & Systems",
  description:
    "Krishna Kumar Mandal is an AI/ML engineer focused on language-model pretraining from scratch, evaluation methodology, catastrophic forgetting, and reproducible ML systems under compute constraints.",
  keywords: [
    "Krishna Kumar Mandal",
    "AI/ML Engineer",
    "Small Language Models",
    "LLM Evaluation",
    "PyTorch",
    "Transformers",
    "Mini-R1",
    "Nullius",
    "PrivateTune",
    "SFIT Mumbai",
  ],
  authors: [{ name: "Krishna Kumar Mandal" }],
  creator: "Krishna Kumar Mandal",
  openGraph: {
    title: "Krishna Kumar Mandal · AI/ML Engineer & Systems Builder",
    description:
      "Pretraining small language models from scratch, building claim-level evaluation harnesses, and auditing ML experimental results.",
    url: "https://krishnakumarmandal.dev",
    siteName: "Krishna Kumar Mandal",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Krishna Kumar Mandal · AI/ML Engineer & Systems Builder",
    description:
      "Pretraining small language models from scratch, building claim-level evaluation harnesses, and auditing ML experimental results.",
  },
  icons: {
    icon: "/icon.svg",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      data-theme="dark"
      className={`${figtree.variable} ${jetbrainsMono.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-[var(--surface-page)] text-[var(--text-primary)] antialiased font-[family-name:var(--font-display)]">
        {/* Skip to main content (H1 accessibility) */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[999] focus:px-4 focus:py-2 focus:rounded-lg focus:bg-[var(--accent)] focus:text-[var(--accent-contrast)] focus:text-sm focus:font-bold"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
