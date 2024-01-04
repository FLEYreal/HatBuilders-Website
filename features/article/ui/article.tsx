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
        width: '360px',
    },
    [theme.breakpoints.up('lg')]: {
        width: '380px',
    },
    [theme.breakpoints.up('xl')]: {
        width: '500px',
    },
    transition: 'font-size 0.3s ease',
}));


export function Article({ children, sx, fullSize = false }: ArticleInterface) {
    return (
        <Wrapper component="article" sx={fullSize ? { width: '100% !important', ...sx } : sx}>
            {children}
        </Wrapper>
    );

}

