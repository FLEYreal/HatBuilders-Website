'use client';

// Basics
import React, { createElement as e } from 'react';

// Material-UI
import { Box } from '@mui/material';

// Emotion
import styled from '@emotion/styled';

// Config
import { ArticleInterface } from '../config/types';
import { defaultWrapper } from '@/features/wrappers';

// Styling
const Wrapper = styled(({ def, ...props }: ArticleInterface) => e(Box, props)) <ArticleInterface>`
    transition: font-size 0.3s ease;

    ${({ def }) => def!.b('xs')} { width: 98%; } 
    ${({ def }) => def!.b('md')} { width: 95%; } 
    ${({ def }) => def!.b('lg')} { width: 460px; } 
    ${({ def }) => def!.b('xl')} { width: 560px; } 
`


/**
 * Article Wrapper, this is the component meant to define boundaries of the article and also
 * for better readbility, convenient implementing, to define styles for all the article
 * and for SEO.
 */
const ArticleComponent = ({
    children,
    sx,
    fullSize = false,
    align = 'start',
    textAlign = 'start',

    ...props
}: ArticleInterface) => {


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
            }}

            {...props}
        >
            {children}
        </Wrapper>
    );

}

export const Article = defaultWrapper<ArticleInterface>(ArticleComponent)