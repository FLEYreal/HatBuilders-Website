// Basics
import type { Metadata } from 'next'

// Meta data for SEO
export const metadata: Metadata = {
    title: 'HatBuilders Website',
    description: 'HatBuilders: Future of Minecraft Building is in our hands!',
}

// Layout
export default async function RootLayout({
    children,
}: {
    children: React.ReactNode,
}) {

    return (
        <>
            {children}
        </>
    )
}