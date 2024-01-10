// Basics
import { createElement as e } from "react";

// Material-UI
import { Box, Button } from "@mui/material";

// Emotion
import styled from "@emotion/styled";

// Features
import { defaultWrapper } from "@/features/wrappers";

// Insides
import { WrapperBigButtonInterface, BackBigButtonInterface, FrontBigButtonInterface } from '../types'

// Big Button Styled Components
const StyledFrontBigButton = styled(({ w, h, buttonColor, ...props }: FrontBigButtonInterface) => e(Button, props)) <FrontBigButtonInterface>`
    position: absolute;
    top: 0px;
    left: 6px;
    z-index: 1;
    width: ${({ w }) => w!}px;
    height: ${({ h }) => h! + 12}px;
    background: ${({ buttonColor }) => buttonColor};
    box-shadow: 0px 6px 0px 0px rgba(255, 255, 255, 0.40) inset, 0px -6px 0px 0px rgba(0, 0, 0, 0.30) inset;
    text-shadow: 2px 2px 0px rgba(0, 0, 0, 0.35);
    font-weight: 700;
    color: #ffffff;
    transition: none;
`

const StyledBackBigButton = styled(({ w, h, buttonColor, ...props }: BackBigButtonInterface) => e(Box, props)) <BackBigButtonInterface>`
    position: absolute;
    top: 6px;
    left: 0px;
    z-index: 0px;
    width: ${({ w }) => w! + 12}px;
    height: ${({ h }) => h!}px;
    background: ${({ buttonColor }) => buttonColor};
    box-shadow: 6px 0px 0px 0px rgba(255, 255, 255, 0.40) inset, -6px 0px 0px 0px rgba(0, 0, 0, 0.30) inset;
`

const StyledWrapperBigButton = styled(({ w, h, darkButtonColor, ...props }: WrapperBigButtonInterface) => e(Box, props)) <WrapperBigButtonInterface>`
    width: ${({ w }) => w! + 12}px;
    height: ${({ h }) => h! + 12}px;
    position: relative;

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
        text-shadow: 4px 4px 0px rgba(0, 0, 0, 0.4);
    }
`



export const WrapperBigButton = defaultWrapper<WrapperBigButtonInterface>(StyledWrapperBigButton)
export const BackBigButton = defaultWrapper<BackBigButtonInterface>(StyledBackBigButton)
export const FrontBigButton = defaultWrapper<FrontBigButtonInterface>(StyledFrontBigButton)





