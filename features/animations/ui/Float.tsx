'use client'

// Basics
import { cloneElement, Children, ReactNode, ReactElement, CSSProperties } from "react";

// Material-UI
import { SxProps } from "@mui/material";

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
export const Float = ({
    children,
    isSx, // Define wether to use SX or Style
    dur = 1, // Animation's duration
    delay = 0, // Delay before starting
    ...props
}: FloatInterface) => {

    const mapChild = (child: ReactNode) => {

        const { style, sx }: { style?: CSSProperties; sx?: SxProps } = (child as ReactElement).props;

        if (isSx) {

            return cloneElement(child as ReactElement, {
                sx: {
                    animation: `${floatKeyframes} ${dur}s ease-in-out infinite`,
                    animationDelay: delay + 's',
                    animationFillMode: 'ease-in-out',
                    ...sx,
                },
                className: s.floatKeyframes,
                ...props,
            });

        }

        else {

            return cloneElement(child as ReactElement, {
                style: {
                    animationDuration: dur + 's',
                    animationDelay: delay + 's',
                    ...style,
                },
                className: s.floatKeyframes,
                ...props,
            });

        }
    };

    const clonedChildren = Children.map(children, mapChild);

    return <>{clonedChildren}</>;
};
