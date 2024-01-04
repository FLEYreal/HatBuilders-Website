'use client';

// Basics
import React, { ReactNode } from 'react';

// Material-UI
import { Box } from '@mui/material';
import { styled } from '@mui/system';

import { ArticleSectionInterface } from '../config/types';

// Styling
const Wrapper = styled(Box)(({ theme }) => ({
    width: '100%',
    transition: 'font-size 0.3s ease',
}));

/**
 * Article Section component is made to create separate divided blocks of the article 
 * for better code and article (creates small margins between sections) readability and SEO
 */
export function ArticleSection({ children, sx, component }: ArticleSectionInterface) {
    return (
        <Wrapper component={component ? component : "section"} sx={{
            m: {
                xs: '10px 0',
                md: '16px 0',
                lg: '24px 0',
                xl: '32px 0'
            }, ...sx
        }}>
            {children}
        </Wrapper>
    );
}

