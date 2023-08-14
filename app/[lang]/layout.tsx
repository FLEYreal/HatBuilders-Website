'use client'
import '@/app/globals.css'
import type { Metadata } from 'next'
import { GlobalThemeProvider } from '@/app/Theme/provider'

import Header from '@/components/Header'
import { CssBaseline } from '@mui/material'

export const metadata: Metadata = {
    title: 'HatBuilders Website',
    description: 'HatBuilders: Future of Minecraft Building is in our hands!',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode,
}) {

    return (
        <html lang="en">
            <body>
                <GlobalThemeProvider>
                    <CssBaseline />
                    <Header />

                    {children}
                </GlobalThemeProvider>
            </body>
        </html>
    )
}