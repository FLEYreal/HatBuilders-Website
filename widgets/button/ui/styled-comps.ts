// Basics
import { createElement as e } from "react";

// Material-UI
import Box from "@mui/material/Box";
import LoadingButton from "@mui/lab/LoadingButton";

// Emotion
import styled from "@emotion/styled";
import { css } from '@emotion/react';

// Features
import { defaultWrapper } from "@/features/wrappers";

// Insides
import { WrapperBigButtonInterface, BackBigButtonInterface, FrontBigButtonInterface } from '../types'

// Big Button Styled Components
const StyledFrontBigButton = styled(({ w, h, buttonColor, darkButtonColor, def, loading, ...props }: FrontBigButtonInterface) => e(LoadingButton, props)) <FrontBigButtonInterface>`
    && {
        
        // Static styles
        position: absolute;
        top: 0px;
        left: 6px;
        z-index: 1;
        box-shadow: 0px 6px 0px 0px rgba(255, 255, 255, 0.40) inset, 0px -6px 0px 0px rgba(0, 0, 0, 0.30) inset;
        text-shadow: 2px 2px 0px rgba(0, 0, 0, 0.35);
        font-weight: 700;
        color: #ffffff;
        transition: background 0.1s ease-in-out;

        // Dynamic styles
        width: ${({ w }) => w!}px;
        height: ${({ h }) => h! + 12}px;
        background: ${({ buttonColor }) => buttonColor};

        // Styles when button is in loading state
        ${({ loading, darkButtonColor }) => loading &&
        css`
            background: ${darkButtonColor};
        `}
    }
`;


const StyledBackBigButton = styled(({ w, h, buttonColor, ...props }: BackBigButtonInterface) => e(Box, props)) <BackBigButtonInterface>`

    // Static styles
    position: absolute;
    top: 6px;
    left: 0px;
    z-index: 0px;
    box-shadow: 6px 0px 0px 0px rgba(255, 255, 255, 0.40) inset, -6px 0px 0px 0px rgba(0, 0, 0, 0.30) inset;
    transition: background 0.1s ease-in-out;

    // Dynamic styles
    width: ${({ w }) => w! + 12}px;
    height: ${({ h }) => h!}px;
    background: ${({ buttonColor }) => buttonColor};
`

const StyledWrapperBigButton = styled(({ w, h, darkButtonColor, ...props }: WrapperBigButtonInterface) => e(Box, props)) <WrapperBigButtonInterface>`

    // Static styles
    position: relative;

    // Dynamic styles
    width: ${({ w }) => w! + 12}px;
    height: ${({ h }) => h! + 12}px;

    &:hover > ${StyledBackBigButton} {
        background: ${({ darkButtonColor }) => darkButtonColor};
        box-shadow: 6px 0px 0px 0px rgba(255, 255, 255, 0.40) inset, -6px 0px 0px 0px rgba(0, 0, 0, 0.30) inset;
    }

    &:active > ${StyledBackBigButton} {
        background: ${({ darkButtonColor }) => darkButtonColor};
        box-shadow: 6px 0px 0px 0px rgba(0, 0, 0, 0.30) inset, -6px 0px 0px 0px rgba(255, 255, 255, 0.40) inset;
    }

    &:hover > ${StyledFrontBigButton} {
        background: ${({ darkButtonColor }) => darkButtonColor};
        box-shadow: 0px 6px 0px 0px rgba(255, 255, 255, 0.40) inset, 0px -6px 0px 0px rgba(0, 0, 0, 0.30) inset;
    }

    &:active > ${StyledFrontBigButton} {
        background: ${({ darkButtonColor }) => darkButtonColor};
        box-shadow: 0px 6px 0px 0px rgba(0, 0, 0, 0.30) inset, 0px -6px 0px 0px rgba(255, 255, 255, 0.40) inset;
        text-shadow: 3px 3px 0px rgba(0, 0, 0, 0.4);
    }
`



// Export all styled components
export const WrapperBigButton = defaultWrapper<WrapperBigButtonInterface>(StyledWrapperBigButton)
export const BackBigButton = defaultWrapper<BackBigButtonInterface>(StyledBackBigButton)
export const FrontBigButton = defaultWrapper<FrontBigButtonInterface>(StyledFrontBigButton)





