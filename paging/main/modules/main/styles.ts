'use client'

// Material-UI
import { Box } from "@mui/material";

// Emotion
import styled from "@emotion/styled";

// Features
import { Flex, defaultWrapper } from "@/features/wrappers";

// Types
import { styledDefaultInterface } from "@/shared/mui";

// Assets
import cyberpukPng from '@/public/images/Cyberpuk2.png'


// COMPONENTS
const StyledBottomPlatform = styled(Flex) <styledDefaultInterface>`
    position: absolute;
    height: 125px;
    bottom: 0;
    left: 0;
    background: ${({ def }) => def && def.t.palette.mode === 'dark' ? 'linear-gradient(180deg, #121212 0%, #070707 100%)' : '#ffffff'};
    box-shadow: 0px 6px 0px 0px ${({ def }) => def && def.t.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.15) inset' : 'rgba(0, 0, 0, 0.15) inset'};
`
export const BottomPlatform = defaultWrapper(StyledBottomPlatform)


const StyledCyberpukBanner = styled(Box) <styledDefaultInterface>`
    z-index: -1;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    right: 0px;
    width: 100%;
    margin: 0;
    padding: 0;
    background: url(${cyberpukPng.src}) no-repeat center center fixed;
    background-size: cover;

    ${({ def }) => def!.b('xs')} {
        top: -290px;
        min-height: calc(100vh + 290px);
    }
    ${({ def }) => def!.b('md')} {
        top: -350px;
        min-height: calc(100vh + 350px);
    }
    ${({ def }) => def!.b('lg')} {
        top: -400px;
        min-height: calc(100vh + 400px);
    }
    ${({ def }) => def!.b('xl')} {
        top: -500px;
        min-height: calc(100vh + 500px);
    }
`
export const CyberpukBanner = defaultWrapper(StyledCyberpukBanner)


