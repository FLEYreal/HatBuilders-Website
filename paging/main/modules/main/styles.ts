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
    height: 140px;
    bottom: 0;
    left: 0;
    background: ${({ def }) => def && def.t.palette.mode === 'dark' ? '#121212' : '#ffffff'};
    box-shadow: 0px 6px 0px 0px ${({ def }) => def && def.t.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.15) inset' : 'rgba(0, 0, 0, 0.15) inset'};
`
export const BottomPlatform = defaultWrapper(StyledBottomPlatform)


const StyledCyberpukBanner = styled(Box) <styledDefaultInterface>`
    z-index: -1;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: -500px;
    left: 0px;
    margin: 0;
    padding: 0;
    min-height: calc(100vh + 500px);
    width: 100%;
    background: url(${cyberpukPng.src}) no-repeat center center fixed;
    background-size: cover;
`
export const CyberpukBanner = defaultWrapper(StyledCyberpukBanner)


