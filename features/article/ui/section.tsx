'use client';

// Basics
import { createElement as e } from 'react';

// Material-UI
import { Box } from '@mui/material';
import { styled } from '@mui/system';

import { ArticleSectionInterface } from '../config/types';
import { defaultWrapper } from '@/features/wrappers';

// Styling
const Wrapper = styled(({ def, ...props }: ArticleSectionInterface) => e(Box, props))<ArticleSectionInterface>`
    width: 100%;
    transition: font-size 0.3s ease;

    ${({ def }) => def!.b('xs')} { margin: '10px 0'; }
    ${({ def }) => def!.b('md')} { margin: '16px 0'; }
    ${({ def }) => def!.b('lg')} { margin: '24px 0'; }
    ${({ def }) => def!.b('xl')} { margin: '32px 0'; }
`

/**
 * Article Section component is made to create separate divided blocks of the article 
 * for better code and article (creates small margins between sections) readability and SEO
 */
const ArticleSectionComponent = ({ children, sx, component, ...props }: ArticleSectionInterface) => {
    return (
        <Wrapper component={component ? component : "section"} {...props}>
            {children}
        </Wrapper>
    );
}

export const ArticleSection = defaultWrapper<ArticleSectionInterface>(ArticleSectionComponent)


