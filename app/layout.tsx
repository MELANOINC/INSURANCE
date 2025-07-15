import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Alan Nico Seguros - Cotizá tu Seguro Online',
  description: 'Cotizá y comprá tu seguro de auto, hogar, vida y más. Comparamos las mejores aseguradoras para vos. ¡Emisión inmediata!',
  keywords: 'seguro auto, seguro hogar, seguro vida, cotización online, alan nico seguros',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>
        {children}
      </body>
    </html>
  )
}
