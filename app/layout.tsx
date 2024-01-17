// Basics
import type { Metadata } from 'next'

// Meta data for SEO
export const metadata: Metadata = {
    title: 'HatBuilders: Home',
    description: 'Home page of HatBuilders website',
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