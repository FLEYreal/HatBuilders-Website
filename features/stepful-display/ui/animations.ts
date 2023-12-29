import { keyframes } from "@mui/material"

export const transitionDur = 0.75
export const fadeInFromDown = keyframes`
    0% {
        opacity: 0;
        transform: translateY(100%)
    }
    100% {
        opacity: 1;
        transform: translateY(0%)
    }
`
export const fadeOutToUp = keyframes`
    0% {
        opacity: 1;
        transform: translateY(0%)
    }
    100% {
        opacity: 0;
        transform: translateY(-100%)
    }
`
export const fadeInFromUp = keyframes`
    0% {
        opacity: 0;
        transform: translateY(-100%)
    }
    100% {
        opacity: 1;
        transform: translateY(0%)
    }
`
export const fadeOutToDown = keyframes`
    0% {
        opacity: 1;
        transform: translateY(0%)
    }
    100% {
        opacity: 0;
        transform: translateY(100%)
    }
`