'use client';

// Basics
import React, { ReactNode } from 'react';

// Material-UI
import { Box } from '@mui/material';
import { styled } from '@mui/system';

// Config
import { ArticleInterface } from '../config/types';

// Styling
const Wrapper = styled(Box)(({ theme }) => ({
    [theme.breakpoints.up('sm')]: {
        width: '300px',
    },
    [theme.breakpoints.up('md')]: {
        width: '370px',
    },
    [theme.breakpoints.up('lg')]: {
        width: '400px',
    },
    [theme.breakpoints.up('xl')]: {
        width: '540px',
    },
    transition: 'font-size 0.3s ease',
}));


/**
 * Article Wrapper, this is the component meant to define boundaries of the article and also
 * for better readbility, convenient implementing, to define styles for all the article
 * and for SEO.
 */
export function Article({
    children,
    sx,
    fullSize = false,
    align = 'start',
    textAlign = 'start'
}: ArticleInterface) {


    return (
        <Wrapper component="article"
            sx={{
                width: fullSize ? '100% !important' : 'auto',
                m:
                    align === 'start' ? '0px auto 0px 0px' :
                        align === 'center' ? '0 auto' :
                            align === 'end' ? '0px 0px 0px auto' : '0',

                textAlign: textAlign,
                ...sx
            }}>
            {children}
        </Wrapper>
    );

}

