import './globals.css'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import NavBar from '@/components/NavBar'
import dynamic from 'next/dynamic'


const ClientMotionWrapper = dynamic(
  () => import('@/components/ClientMotionWrapper'),
  { ssr: false }
)

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
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Iceberg&family=Inder&family=Inknut+Antiqua:wght@300;400;500;600;700;800;900&display=swap" />
      </head>
      <body className="bg-gray-100">
        <NavBar />
        <ClientMotionWrapper>{children}</ClientMotionWrapper>
      </body>
    </html>
  )
}
