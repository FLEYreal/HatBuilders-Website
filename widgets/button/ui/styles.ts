// Material-UI
import { Box, Button } from "@mui/material";

// Emotion
import styled from "@emotion/styled";

// Features
import { defaultWrapper } from "@/features/wrappers";

// Insides
import { WrapperBigButtonInterface, BackBigButtonInterface, FrontBigButtonInterface } from '../types'

// Big Button Styled Components
const StyledWrapperBigButton = styled(Box) <WrapperBigButtonInterface>`
    width: ${({ w }) => w! + 12}px;
    height: ${({ h }) => h! + 12}px;
    position: relative;
`
export const WrapperBigButton = defaultWrapper<WrapperBigButtonInterface>(StyledWrapperBigButton)

const StyledBackBigButton = styled(Box) <BackBigButtonInterface>`
    position: absolute;
    top: 6px;
    left: 0px;
    z-index: 0px;
    width: ${({ w }) => w! + 12}px;
    height: ${({ h }) => h!}px;
    background: ${({ buttonColor }) => buttonColor};
    box-shadow: 6px 0px 0px 0px rgba(255, 255, 255, 0.40) inset, -6px 0px 0px 0px rgba(0, 0, 0, 0.30) inset;

    &:hover {
        background: ${({ darkButtonColor }) => darkButtonColor};
        box-shadow: 6px 0px 0px 0px rgba(255, 255, 255, 0.40) inset, -6px 0px 0px 0px rgba(0, 0, 0, 0.30) inset;
    }

    &:active {
        background: ${({ darkButtonColor }) => darkButtonColor};
        box-shadow: 6px 0px 0px 0px rgba(0, 0, 0, 0.30) inset, -6px 0px 0px 0px rgba(255, 255, 255, 0.40) inset;
    }
`
export const BackBigButton = defaultWrapper<BackBigButtonInterface>(StyledBackBigButton)

const StyledFrontBigButton = styled(Button) <FrontBigButtonInterface>`
    position: absolute;
    top: 0px;
    left: 6px;
    z-index: 1;
    width: ${({ w }) => w!}px;
    height: ${({ h }) => h! + 12}px;
    background: ${({ buttonColor }) => buttonColor};
    box-shadow: 0px 6px 0px 0px rgba(255, 255, 255, 0.40) inset, 0px -6px 0px 0px rgba(0, 0, 0, 0.30) inset;
    font-weight: 700;
    text-shadow: 2px 2px 0px rgba(0, 0, 0, 0.40);
    color: #ffffff;

    &:hover {
        background: ${({ darkButtonColor }) => darkButtonColor};
        box-shadow: 0px 6px 0px 0px rgba(255, 255, 255, 0.40) inset, 0px -6px 0px 0px rgba(0, 0, 0, 0.30) inset;
    }

    &:active {
        background: ${({ darkButtonColor }) => darkButtonColor};
        box-shadow: 0px 6px 0px 0px rgba(0, 0, 0, 0.30) inset, 0px -6px 0px 0px rgba(255, 255, 255, 0.40) inset;
    }
`
export const FrontBigButton = defaultWrapper<FrontBigButtonInterface>(StyledFrontBigButton)




