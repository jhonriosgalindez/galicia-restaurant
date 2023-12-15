import { Inter } from 'next/font/google'
import { Arya } from 'next/font/google'
 
const arya = Arya({
  weight: '400',
  subsets: ['latin'],
})

import './globals.css'

// const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Galicia Restaurant',
  description: 'Your better food today',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={arya.className}>{children}</body>
    </html>
  )
}
