'use client'
import './globals.css'
import type { Metadata } from 'next'
import { GlobalThemeProvider } from './Theme/provider'

import Header from '@/components/Header'

export const metadata: Metadata = {
    title: 'HatBuilders Website',
    description: 'HatBuilders: Future of Minecraft Building is in our hands!',
}

export default function RootLayout({
    children
}: {
    children: React.ReactNode
}) {

    return (
        <html lang="en">
            <body>
                <GlobalThemeProvider>
                    <Header />

                    {children}
                </GlobalThemeProvider>
            </body>
        </html>
    )
}
