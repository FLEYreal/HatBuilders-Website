// Basics
import localFont from 'next/font/local'
import { dir } from 'i18next'

// Material-UI
import CssBaseline from '@mui/material/CssBaseline'

// Shared
import { GlobalThemeProvider } from '@/shared/mui/ui/provider'
import { LanguageProvider } from '@/shared/i18n/ui/provider'
import { langType } from '@/shared/i18n/types'
import { AlbumProvider } from '@/features/album'

// Assets
import favicon from '@/public/icons/favicon.ico'
import appleIcon120 from '@/public/icons/apple-icon-120x120.png'
import appleIcon180 from '@/public/icons/apple-icon-180x180.png'
import appleIcon76 from '@/public/icons/apple-icon-76x76.png'
import appleIcon152 from '@/public/icons/apple-icon-152x152.png'

// Get Minecraft Font
const minecraftFont = localFont({
    src: '../../public/fonts/minecraft.ttf'
});

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
        <html lang={lng} dir={dir(lng)}>
            <head>

                {/* Icons for Apple Devices */}
                <link rel="apple-touch-icon" sizes="120x120" href={appleIcon120.src}/>
                <link rel="apple-touch-icon" sizes="180x180" href={appleIcon180.src}/>
                <link rel="apple-touch-icon" sizes="76x76" href={appleIcon76.src}/>
                <link rel="apple-touch-icon" sizes="152x152" href={appleIcon152.src}/>

                {/* Icon for browsers */}
                <link rel="icon" sizes="any" href={favicon.src}/>

            </head>
            <body className={minecraftFont.className}>
                <LanguageProvider value={lng}>
                    <GlobalThemeProvider>
                        <AlbumProvider>

                            <CssBaseline />

                            {children}
                        </AlbumProvider>
                    </GlobalThemeProvider>
                </LanguageProvider>
            </body>
        </html>
    )
}