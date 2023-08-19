// Basic Imports
import React from 'react';

// Material-UI
import { Typography, Box } from '@mui/material'
import Link from 'next/link';



export default function Home({ params: { lng } }: { params: { lng: string } }) {

    return (
        <Typography component='main'>

            {/* MAIN BLOCK 1 OF THE PAGE */}
            <Box sx={{
                marginTop: '64px',
                width: '100%',
                minHeight: '640px',
                background: 'linear-gradient(135deg, #78AE39 0%, #547B27 100%)',
                overflow: 'hidden'
            }}>

            </Box>

        </Typography>
    )
}