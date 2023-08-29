'use client';
// Basic imports
import React, { useContext, useEffect, useState } from 'react'

// Material-UI
import Typography from '@mui/material/Typography';

// Context
import { scrollContext } from '../Providers/GlobalScrollEvent';

function HeaderBG({children}: {children?: React.ReactNode}) {

    // Get scroll context
    const scroll = useContext(scrollContext)

    // Styles that depend of "scroll.value" which is scroll position on the page
    const [scrollStyles, setScrollStyles] = useState({
        backdropFilter: 'none',
        background: 'none'
    })

    useEffect(() => {

        // If scroll is at the top of the page, remove background
        if(scroll?.value === 0 || scroll?.value === undefined) {
            setScrollStyles({
                backdropFilter: 'none',
                background: 'none'
            })
        } 
        // If scroll is not at the top of the page, add background
        else {
            setScrollStyles({
                backdropFilter: 'blur(2px)',
                background: 'rgba(0,0,0,0.35)'
            })
        }
    }, [scroll])

    return (
        <Typography component='span' sx={{
            ...scrollStyles,
            position: 'absolute',
            width: '100%',
            height: '100%',
            transition: 'all ease 0.3s'
        }}>
            {children}
        </Typography>
    );
}

export default HeaderBG;