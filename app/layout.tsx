import './globals.css'
import type { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'Counter-App',
  description: 'Counter App to increment decrement values',
  icons:{
    icon:['/favicon.ico?v=4'],
    apple:['/apple-touch-icon?v=4'],
    shortcut:['/apple-touch-icon.png']
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='bg-white dark:bg-gray-800 text-black dark:text-white' >{children}</body>
    </html>
  )
}
