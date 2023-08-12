import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'HatBuilders Website',
    description: 'HatBuilders: Future of Minecraft Building is in our hands!',
}

export default async function RootLayout({
    children
}: {
    children: React.ReactNode
}) {

    await fetch('http://localhost:80/api/theme', {
        method: 'POST',
        body: JSON.stringify({ value: '1' })
    })
        .then((res) => res.json())
        .then((res) => console.log(res));

    return (
        <html lang="en">
            <body>
                {children}
            </body>
        </html>
    )
}
