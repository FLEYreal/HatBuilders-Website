'use client'

// Basics
import { cloneElement, Children, ReactNode, ReactElement, CSSProperties } from "react";

// Material-UI
import { BoxProps, SxProps } from "@mui/material";

// Emotion
import { keyframes } from "@emotion/react";

// Insides
import { FloatInterface } from "../types";

// Animation
import s from './style.module.css';

// Animation
const floatKeyframes = keyframes`
    0% {
        transform: translateY(-10px);
    }
    50% {
        transform: translateY(10px);
    }
    100% {
        transform: translateY(-10px);
    }
`;

// Component
export function Float({
    children,
    isSx, // Define wether to use SX or Style
    dur = 6, // Animation's duration
    delay = 0, // Delay before starting

    sx,
    style,

    ...props
}: FloatInterface) {

    const mapChild = (child: ReactNode) => {

        const { style: styleProp, sx: sxProp }: { style?: CSSProperties; sx?: SxProps } = (child as ReactElement).props;


        if (isSx) {

            return cloneElement(child as ReactElement, {
                sx: {
                    animation: `${floatKeyframes} ${dur}s ease-in-out infinite`,
                    animationDelay: delay + 's',
                    animationTimingFunction: 'ease-in-out',
                    ...sx,
                    ...sxProp
                },
                ...props
            });

        }

        else {

            return cloneElement(child as ReactElement, {
                style: {
                    animationDuration: dur + 's',
                    animationDelay: delay + 's',
                    ...style,
                    ...styleProp
                },
                className: s.floatKeyframes,
                ...props
            });

        }
    };

    const clonedChildren = Children.map(children, mapChild);

    return <>{clonedChildren}</>;
};
