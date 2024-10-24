import './globals.css'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import NavBar from '@/components/NavBar'
import { ViewTransitions } from 'next-view-transitions'
// import dynamic from 'next/dynamic'

// const ClientMotionWrapper = dynamic(
//   () => import('@/components/ClientMotionWrapper'),
//   { ssr: false }
// )

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
    <ViewTransitions>
      <html lang="en">
        <head>
          <link
            href="https://fonts.googleapis.com/css2?family=Iceberg&family=Inder&family=Inknut+Antiqua&display=swap"
            rel="stylesheet"
          ></link>
        </head>
        <body className="bg-gray-100 overflow-x-hidden">
          <NavBar />
          {children}
          {/* <ClientMotionWrapper>{children}</ClientMotionWrapper> */}
        </body>
      </html>
    </ViewTransitions>
  )
}
