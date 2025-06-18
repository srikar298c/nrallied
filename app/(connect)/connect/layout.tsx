



export default function ConnectLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="overflow-hidden bg-gradient-to-br from-[#011532] to-[#012951] antialiased">

        {children}
      </body>
    </html>
  )
}
