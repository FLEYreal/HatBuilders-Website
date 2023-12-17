// Basics
import type { Metadata } from 'next'
import localFont from 'next/font/local'

// Material-UI
import CssBaseline from '@mui/material/CssBaseline'

// Providers
import { GlobalThemeProvider } from '@/shared/mui/provider'

// Language
import { dir } from 'i18next'
import { languages } from '@/shared/i18n/settings'

// Styles
import './globals.css';

// Get Minecraft Font
const minecraftFont = localFont({
    src: '../../public/fonts/minecraft.ttf'
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
    params: { lng: string }
}) {

    return (
        <html lang={lng} dir={dir(lng)}>
            <body className={minecraftFont.className}>
                <GlobalThemeProvider>
                    Layout.tsx
                    <CssBaseline />
                    {children}
                </GlobalThemeProvider>
            </body>
        </html>
    )
}