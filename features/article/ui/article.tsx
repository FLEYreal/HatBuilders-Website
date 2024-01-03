'use client';

// Basics
import React, { ReactNode } from 'react';

// Material-UI
import { useTheme, Box } from '@mui/material';
import { styled } from '@mui/system';

// Styling
const Wrapper = styled(Box)(({ theme }) => ({
    [theme.breakpoints.up('sm')]: {
        width: '300px',
    },
    [theme.breakpoints.up('md')]: {
        width: '340px',
    },
    [theme.breakpoints.up('lg')]: {
        width: '320px',
    },
    [theme.breakpoints.up('xl')]: {
        width: '450px',
    },
    transition: 'font-size 0.3s ease',
}));


export function Article({ children }: { children: string | ReactNode }) {
    return (
        <Wrapper component="article">
            {children}
        </Wrapper>
    );

}

