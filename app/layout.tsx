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

    console.log(await Theme.get())

    return (
        <html lang="en">
            <body>
                {children}
            </body>
        </html>
    )
}
