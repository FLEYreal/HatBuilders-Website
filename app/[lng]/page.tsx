// Basic Imports
import React from 'react';

// Material-UI
import { Typography } from '@mui/material'

// Blocks of the Page
import MainBlock from './MainBlock';
import SocialBlock from './SocialBlock';
import Portfolio from './Portfolio';
import Job from './Job';
import Reviews from './Reviews';
import TimeToOrder from './TImeToOrder';

export default async function Home({ params: { lng } }: { params: { lng: string } }) {
    return (
        <Typography component='main'>

            {/* MAIN BLOCK 1 OF THE PAGE */}
            <MainBlock lng={lng}/>
            <SocialBlock lng={lng}/>
            <Portfolio lng={lng}/>
            <Job lng={lng}/>
            <Reviews lng={lng}/>
            <TimeToOrder lng={lng}/>

        </Typography >
    )
}