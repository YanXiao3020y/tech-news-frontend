import './globals.css'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import NavBar from '@/components/NavBar'

config.autoAddCss = false
export const metadata = {
  title: 'Tech News',
  description: 'A website about tech news you want to know.'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
      <html lang="en">
        <head>
          <link
            href="https://fonts.googleapis.com/css2?family=Iceberg&family=Inder&family=Inknut+Antiqua&family=Roboto&display=swap"
            rel="stylesheet"
          ></link>
          <link href="https://fonts.googleapis.com/css2?family=Roboto&family=Sour+Gummy&family=Funnel+Display&display=swap" rel="stylesheet"></link>
        </head>
        <body className="bg-gray-100 overflow-x-hidden no-scrollbar">
          <NavBar />
          {children}
        </body>
      </html>
  )
}
