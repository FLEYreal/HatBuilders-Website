'use client';
import React, { useContext, useEffect, useState } from 'react'
import Box from '@mui/material/Typography';

import { scrollContext } from './GlobalScrollEvent';

function HeaderBG({children}: {children?: React.ReactNode}) {
    const scroll = useContext(scrollContext)
    const [scrollStyles, setScrollStyles] = useState({
        backdropFilter: 'none',
        background: 'none'
    })

    useEffect(() => {

        if(scroll?.value === 0 || scroll?.value === undefined) {
            setScrollStyles({
                backdropFilter: 'none',
                background: 'none'
            })
        } else {
            setScrollStyles({
                backdropFilter: 'blur(2px)',
                background: 'rgba(0,0,0,0.35)'
            })
        }
    }, [scroll])

    return (
        <Box sx={{
            ...scrollStyles,
            position: 'absolute',
            width: '100%',
            height: '100%',
            transition: 'all ease 0.3s'
        }}>
            {children}
        </Box>
    );
}

export default HeaderBG;