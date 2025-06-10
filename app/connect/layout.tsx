
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Connect | NR Allied",
  description: "Contact details of key NR Allied personnel",
}

export default function ConnectLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gradient-to-br from-[#011532] to-[#012951]  antialiased`}>
        {children}
      </body>
    </html>
  )
}
