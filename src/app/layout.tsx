import type { Metadata } from "next";
import { Instrument_Serif, Geist as GeistSans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"
import { ScrollToTop } from "@/components/ui/ScrollAnimations"
import BackgroundMusic from "@/components/BackgroundMusicWrapper"
import { MusicProvider } from "@/components/MusicContext"

// const inter = Inter_Tight({
//   weight: '400',
//   style: 'normal',
//   subsets: ['latin']
// })

const geistSans = GeistSans({
  weight: '400',
  style: 'normal',
  subsets: ['latin'],
  variable: '--font-geist-sans'
})


const instrumentSerif = Instrument_Serif({
  weight: ['400'],
  style: 'normal',
  subsets: ['latin'],
  variable: '--font-instrument-serif'
})

export const metadata: Metadata = {
  metadataBase: new URL('https://ananyavhegde.vercel.app'),
  title: 'Ananya Hegde',
  description: 'I build products that solve real problems. Available for new opportunities.',
  openGraph: {
    url: 'https://ananyavhegde.vercel.app/',
    siteName: 'Ananya Hegde Portfolio',
    locale: 'en_US',
    type: 'website',
    images: [{
      url: '/open-graph.png',
      width: 1200,
      height: 630,
      alt: 'Ananya Hegde - Portfolio'
    }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="google-site-verification" content="tMCNs2fgM6voEHBd3JsySffMFSiUCQDEFEF1iYI3-ZQ" />
      </head>
      <body className={`${geistSans.className} ${instrumentSerif.variable}`} suppressHydrationWarning={true}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <MusicProvider>
            <div className="relative z-10">
              {children}
            </div>
            <ScrollToTop />
            <BackgroundMusic />
          </MusicProvider>
        </ThemeProvider>
       <script
          src="https://cdn.databuddy.cc/databuddy.js"
          data-client-id="2cYj0B5Uv0T4q70DhnoAc"
          data-enable-batching="true"
          async
  ></script>
      </body>
    </html>
  );
}
