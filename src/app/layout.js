import './global.css'
export const metadata = {
  title: 'Mathew Phillip',
  description: 'Self taught programmer driven by a passion for creating impactful tech solutions.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
