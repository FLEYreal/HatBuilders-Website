'use client';
import React from 'react'
import Box from '@mui/material/Typography';

function HeaderBG({children}: {children?: React.ReactNode}) {

    return (
        <Box sx={{
            backdropFilter: 'blur(2px)',
            background: 'rgba(0,0,0,0.35)',
            position: 'absolute',
            width: '100%',
            height: '100%'
        }}>{children}</Box>
    );
}

export default HeaderBG;