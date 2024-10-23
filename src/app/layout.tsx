import './globals.css'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import dynamic from 'next/dynamic'
import NavBar from '@/components/NavBar'

config.autoAddCss = false
export const metadata = {
  title: 'Tech News',
  description: 'A website about tech news you want to know.'
}

const ClientMotionWrapper = dynamic(
  () => import('@/components/ClientMotionWrapper'),
  { ssr: false }
)

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-gray-100">
        <NavBar />
        <ClientMotionWrapper>{children}</ClientMotionWrapper>
      </body>
    </html>
  )
}
