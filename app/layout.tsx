import './globals.css'
import Link from "next/link"

export const metadata = {
  title: "Manish's Blog",
  description: 'Generated by create next app',
}

const header = (
  <header>
    <div className='text-center bg-slate-800 p-8 my-6 rounded-md'>
      <Link href="/">
        <div className='text-3xl font-bold text-white'>Manish Blog</div>
      </Link>
      <div className='text-slate-300'>Welcome to by tech blog.</div>
    </div>
  </header>
)

const footer = (
  <footer>
    <div className='border-t border-slate-400 mt-6 py-6 text-center text-slate-400'>
      <h3>Developed by Manish</h3>
    </div>
  </footer>
)

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">     
      <body>
        <div className='mx-auto max-w-6xl px-6'>
        {header}
        {children}
        {footer}
        </div>
      </body>
    </html>
  )
}
