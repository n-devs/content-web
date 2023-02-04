import './globals.scss'
import { Kanit } from '@next/font/google';


const kanit = Kanit({
  subsets: ['latin','thai'],
  variable: '--font-kanit',
  display: 'optional',
  weight: ['400'],
  style: ['normal']
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${kanit.variable}`}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>{children}</body>
    </html>
  )
}
