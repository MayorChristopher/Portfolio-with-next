export const metadata = {
  title: 'My Portfolio | Mayor Ugochukwu',
  description: 'Web Developer with 4 years experience',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
