// Basics
import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { dir } from 'i18next'

// Material-UI
import CssBaseline from '@mui/material/CssBaseline'

// Shared
import { GlobalThemeProvider } from '@/shared/mui/ui/provider'
import { languages } from '@/shared/i18n/modal/settings'
import { LanguageProvider } from '@/shared/i18n/ui/provider'
import { langType } from '@/shared/i18n/config/types'

// Get Minecraft Font
const minecraftFont = localFont({
    src: '../public/fonts/minecraft.ttf'
});

// Static params of language in the link
export async function generateStaticParams() {
    return languages.map((lng) => ({ lng }))
}

// Meta data for SEO
export const metadata: Metadata = {
    title: 'HatBuilders Website',
    description: 'HatBuilders: Future of Minecraft Building is in our hands!',
}

// Layout
export default async function RootLayout({
    children,
    params: {
        lng
    }
}: {
    children: React.ReactNode,
    params: { lng: langType }
}) {

    return (
        <html lang={lng}>
            <body className={minecraftFont.className}>
                <LanguageProvider value={lng}>
                    <GlobalThemeProvider>

                        <CssBaseline />

                        {children}

                    </GlobalThemeProvider>
                </LanguageProvider>
            </body>
        </html>
    )
}