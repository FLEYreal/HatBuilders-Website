// Basics
import localFont from 'next/font/local'
import { dir } from 'i18next'

// Material-UI
import CssBaseline from '@mui/material/CssBaseline'

// Shared
import { GlobalThemeProvider } from '@/shared/mui/ui/provider'
import { LanguageProvider } from '@/shared/i18n/ui/provider'
import { langType } from '@/shared/i18n/config/types'

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