import './globals.css'
import type { Metadata } from 'next'

import Theme from '@/utils/Theme'

export const metadata: Metadata = {
    title: 'HatBuilders Website',
    description: 'HatBuilders: Future of Minecraft Building is in our hands!',
}

export default async function RootLayout({
    children
}: {
    children: React.ReactNode
}) {

    async function onThemeChange() {
        let theme = await Theme.get();

        if(theme === '1') await Theme.set('0')
        else if(theme === '0') await Theme.set('1')
    }

    return (
        <html lang="en">
            <body>
                {children}
            </body>
        </html>
    )
}
