// Basics
import Image from "next/image";
import type { Metadata } from 'next'

// Material-UI
import { Typography } from "@mui/material";

// Widgets
import { Header } from '@/widgets/header'

// Features
import { Column } from "@/features/wrappers";

// Assets
import warnImage from '@/public/images/418.jpg'

// Meta data for SEO
export const metadata: Metadata = {
    title: 'HatBuilders: Portfolio',
    description: 'Page with portfolio of images of Hatbuilders\' buildings',
}

export default function Portfolio() {

    return (
        <>

            {/* This page will be displayed here till moment API for getting portfolio from backend is done */}
            <Header disable={{
                logo: false,
                tabs: true,
                buttons: true
            }} />
            <Column stretchY sx={{ background: '#000', gap: '2px' }} align={['center', 'center']}>
                <Typography variant="h3">{'The page isn\'t done yet but one day..!'}</Typography>
                <Typography variant="h4">{'Страницы ещё нет, но однажды..!'}</Typography>
                <Image src={warnImage} alt="HTTP-CAT image" />
            </Column>
        </>

    )
}