'use client'

// Emotion
import styled from "@emotion/styled";

// Features
import { Flex } from "@/features/wrappers";

// Types
import { styledDefaultInterface } from "@/shared/mui";

export const BottomPlatform = styled(Flex) <styledDefaultInterface>`
    position: absolute;
    height: 120px;
    bottom: 0;
    left: 0;
    background: linear-gradient(180deg, #121212 0%, #000 100%);
    box-shadow: 0px 6px 0px 0px rgba(255, 255, 255, 0.15) inset, -6px -6px 0px 0px rgba(0, 0, 0, 0.30) inset;
`