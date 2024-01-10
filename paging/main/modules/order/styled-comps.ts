'use client';

// Emotion
import styled from "@emotion/styled";

// Features
import { Flex } from "@/features/wrappers";

// Types
import { styledDefaultInterface } from "@/shared/mui";

// Assets
import orderBg from '@/public/images/orderBg.png';

// Styles Components
export const StyledWrapper = styled(Flex) <styledDefaultInterface>`
    background-image: url(${orderBg.src}); 
    background-size: cover;
    background-position: center;
`;
