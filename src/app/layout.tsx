import type { Metadata } from "next";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '@/theme';
import './style.scss';

export const metadata: Metadata = {
  title: "Bytemeuh - La Création Visuelle avec une Touche d'Humour",
  description: "Bytemeuh, un site innovant qui fusionne technologie, créativité et humour. Découvrez comment des créations visuelles prennent vie et les astuces pour les réaliser.",
  keywords: ["Bytemeuh", "création visuelle", "art digital", "humour tech", "articles créatifs", "images uniques"],
  openGraph: {
    title: "Bytemeuh - Création Visuelle et Humour Tech",
    description: "Découvrez Bytemeuh, le site dédié aux créations visuelles et aux articles qui expliquent l'art numérique de manière accessible et amusante.",
    url: "https://www.bytemeuh.com",
    siteName: "Bytemeuh",
    images: [
      {
        url: "/BYtemeuhLogo.webp",  // Chemin de l'image sur votre site
        width: 800,
        height: 600,
        alt: "Logo Bytemeuh",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bytemeuh - Création Visuelle et Humour Tech",
    description: "Explorez Bytemeuh pour découvrir des images uniques et des explications sur leur création, dans un esprit décalé et geek.",
    images: ["/BYtemeuhLogo.webp"], // Chemin de l'image pour Twitter
  },
  viewport: "width=device-width, initial-scale=1.0",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout(props: { children: React.ReactNode }) {
  return <html lang="fr">
  <body>
  <AppRouterCacheProvider options={{ enableCssLayer: false }}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {props.children}
    </ThemeProvider>
  </AppRouterCacheProvider>
  </body>
  </html>;
}