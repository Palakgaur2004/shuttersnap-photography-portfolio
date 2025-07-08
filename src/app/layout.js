import './globals.css'


export const metadata = {
  title: 'ShutterSnap Photography',
  description: 'Capturing stories through the lens.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Fonts for funky "Shutter" */}
        <link
          href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap"
          rel="stylesheet"
        />
        {/* You can also add favicon, meta tags, etc. here */}

        
      </head>
      <body>{children}</body>
    </html>
  )
}
