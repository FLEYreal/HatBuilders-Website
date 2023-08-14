import '@/app/globals.css'
import type { Metadata } from 'next'
import { GlobalThemeProvider } from '@/app/Theme/provider'

import Header from '@/components/Header'
import { CssBaseline } from '@mui/material'

import { i18n } from '@/next-i18next.config.js'
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher'

import { dir } from 'i18next'
import { languages } from '@/i18n/settings'

export async function generateStaticParams() {
    console.log(languages)
    return languages.map((lng) => ({ lng }))
}

export const metadata: Metadata = {
    title: 'HatBuilders Website',
    description: 'HatBuilders: Future of Minecraft Building is in our hands!',
}

export default async function RootLayout({
    children,
    params: {
        lng,
    }
}: {
    children: React.ReactNode,
    params: Params
}) {

    console.log(lng);

    return (
        <html lang={lng} dir={dir(lng)}>
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