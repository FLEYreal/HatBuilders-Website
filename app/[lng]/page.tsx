// Basic Imports
import React from 'react';

// Material-UI
import { Typography } from '@mui/material'

// Blocks of the Page
import MainBlock from './MainBlock';
import SocialBlock from './SocialBlock';

export default async function Home({ params: { lng } }: { params: { lng: string } }) {
    return (
        <Typography component='main'>

            {/* MAIN BLOCK 1 OF THE PAGE */}
            <MainBlock lng={lng}/>
            <SocialBlock lng={lng}/>

        </Typography >
    )
}