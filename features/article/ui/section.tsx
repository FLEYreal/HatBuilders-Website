'use client';

// Basics
import React, { ReactNode } from 'react';

// Material-UI
import { Box } from '@mui/material';
import { styled } from '@mui/system';

// Styling
const Wrapper = styled(Box)(({ theme }) => ({
    width: '100%',
    transition: 'font-size 0.3s ease',
}));


export function ArticleSection({ children }: { children: string | ReactNode }) {
    return (
        <Wrapper component="section">
            {children}
        </Wrapper>
    );

}

