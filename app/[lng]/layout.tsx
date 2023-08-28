// Basic Imports
import type { Metadata } from 'next'
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher'

// Material-UI
import { CssBaseline } from '@mui/material'

// Providers
import { GlobalThemeProvider } from '@/components/Providers/Theme/provider'
import GlobalScrollEvent from '@/components/Providers/GlobalScrollEvent'
import AlbumProvider from '@/components/Providers/AldumProvider'

// Components
import Header from '@/components/Header'

// Language
import { dir } from 'i18next'
import { languages } from '@/i18n/settings'

// Styles
import global from '@/app/globals.module.scss'

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
    params: Params
}) {

    return (
        <html lang={lng} dir={dir(lng)}>
            <body className={global.body}>
                <GlobalScrollEvent>
                    <GlobalThemeProvider>
                        <AlbumProvider>
                            <CssBaseline />
                            <Header lng={lng} />

                            {children}
                        </AlbumProvider>
                    </GlobalThemeProvider>
                </GlobalScrollEvent>
            </body>
        </html>
    )
}