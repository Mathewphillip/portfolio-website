import './global.css'
export const metadata = {
  title: 'Mathew Phillip',
  description: 'Self taught programmer driven by a passion for creating impactful tech solutions.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap" />
      </head>
      <body>{children}</body>
    </html>
  )
}
