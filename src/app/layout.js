import './globals.css'
import { SpeedInsights } from '@vercel/speed-insights/next'
import LayoutWrapper from './layout-wrapper'

export const metadata = {
  title: 'ShutterSnap Photography',
  description: 'Capturing stories through the lens.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={{ paddingTop: '80px', margin: 0 }}>
        <LayoutWrapper>{children}</LayoutWrapper>
        <SpeedInsights />
      </body>
    </html>
  )
}
