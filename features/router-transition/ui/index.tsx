'use client'

// Basics
import { ReactNode } from "react";

// Material-UI
import { Box } from "@mui/material";
import { keyframes } from "@emotion/react";

// Duration of the page transition, it's also used in HatLink component to delay instant switch to url
export const animationDuration = 0.75;

export function RouterTransition({ children }: { children?: ReactNode }) {

    const enterAnimation = keyframes`
        0% {
            opacity: 0;
            transform: translateY(-100%);
        }
        100% {
            opacity: 1;
            transform: translateY(0);
        }
    `

    const exitAnimation = keyframes`
        0% {
            opacity: 1;
            transform: translateY(0);
        }
        100% {
            opacity: 0;
            transform: translateY(-100%);
        }
    `;

    return (
        <Box sx={{
            animation: `${enterAnimation} ${animationDuration * 1000}ms`,
            animationIterationCount: 1,
            animationFillMode: 'forwards'
        }}>
            {children}
        </Box>
    )
}