// Basics
import Image from 'next/image'
import type { Metadata } from 'next'
import localFont from 'next/font/local'

// Material-UI
import { Typography } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline'

// Widgets
import { Header } from '@/widgets/header'

// Features
import { Column } from '@/features/wrappers';

// Shared
import { GlobalThemeProvider } from '@/shared/mui/ui/provider'
import { languages } from '@/shared/i18n/modal/settings'

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

// Assets
import errorImage from '@/public/images/error.webp';

// Component(s)
const ErrorPage = () => {

    return (

        // Own HTML & BODY & Providers provided to avoid doubling HTML & BODY tags in main layout and [lng] layout
        // It was important for layout from [lng] to have HTML & BODY tags because of dir() function only working properly inside of [lng] directory
        <html>
            <body className={minecraftFont.className}>
                <GlobalThemeProvider>

                    <CssBaseline />
                    <Column center stretchY sx={{ background: '#000' }}
                    >
                        <Header disable={{
                            logo: false,
                            tabs: true,
                            buttons: true
                        }} />
                        <Typography variant='h3'>Sorry, but we&apos;re unable to find a page you&apos;re looking for!</Typography>
                        <Typography variant='h5'>Извините, к сожалению нам не удалось найти страницу, которую вы ищите!</Typography>

                        <Image src={errorImage} alt='Error 404' />
                    </Column>

                </GlobalThemeProvider>
            </body>
        </html>
    );
}

export default ErrorPage;
