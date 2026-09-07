import type { Metadata } from "next";
import { Fraunces, IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import { siteConfig, siteUrl } from "@/lib/site-config";

// Self-hosted + preloaded via next/font — no FOUC, no CLS. Variable names
// are deliberately NOT --font-display/-sans/-mono (those public names are
// exposed via the `@theme inline` mapping in globals.css); using distinct
// internal names here avoids a self-referential CSS var.
const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display-nf",
  weight: "variable",
  axes: ["opsz", "SOFT", "WONK"],
  display: "swap",
});

const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  variable: "--font-sans-nf",
  weight: ["400", "500", "600"],
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-mono-nf",
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteConfig.name} — Systems engineer, agent orchestration`,
    template: `%s — ${siteConfig.name}`,
  },
  description:
    "I build the systems that run the agents — orchestration and governance, not automation. Portfolio of Jayam Patel, CS junior at UMass Lowell.",
  keywords: [
    "Jayam Patel",
    "AI agent orchestration",
    "multi-agent systems",
    "Claude Code",
    "full-stack engineer",
    "Next.js",
    "systems engineering",
    "secure web architecture",
    "UMass Lowell computer science",
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.githubProfile }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: `${siteConfig.name} — Portfolio`,
    title: `${siteConfig.name} — Systems engineer, agent orchestration`,
    description: siteConfig.positioning,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — Systems engineer, agent orchestration`,
    description: siteConfig.positioning,
  },
};

const themeInitScript = `
(function () {
  try {
    var stored = localStorage.getItem("theme");
    var theme =
      stored === "light" || stored === "dark"
        ? stored
        : window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light";
    document.documentElement.setAttribute("data-theme", theme);
  } catch (e) {}
})();
`;

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteConfig.name,
  jobTitle: siteConfig.role,
  affiliation: {
    "@type": "CollegeOrUniversity",
    name: "University of Massachusetts Lowell",
  },
  email: `mailto:${siteConfig.email}`,
  url: siteUrl,
  sameAs: [
    siteConfig.githubProfile,
    siteConfig.githubProjects,
    siteConfig.linkedin,
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Pre-paint theme resolution — no flash on load. */}
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body
        className={`${fraunces.variable} ${plexSans.variable} ${plexMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
