'use client'

// Basics
import {
    cloneElement,
    Children,
    ReactNode,
    ReactElement,
    CSSProperties
} from "react"

// Material-UI
import { SxProps } from "@mui/material"

// Emotion
import { keyframes } from "@emotion/react"

// Insides
import { AppearanceInterface } from "../types"

// Animation
import s from './style.module.css'

// Animation
const sxAppearanceKeyframes = keyframes`
    0% {
        opacity: 0;
        transform: translateY(-6vh);
    }
    100% {
        opacity: 1;
        transform: translateY(0px);
    }
`

// Component
export function Appearance({
    children,
    isSx, // Define wether to use SX or Style
    dur = 1, // Animation's duration
    delay = 0, // Delay before starting
    ...props
}: AppearanceInterface) {

    const mapChild = (child: ReactNode) => {

        const { style, sx }: { style?: CSSProperties; sx?: SxProps } = (child as ReactElement).props;
        const { style: styleProp, sx: sxProp }: { style?: CSSProperties; sx?: SxProps } = props;

        const animationProps = {
            opacity: 0,
            animationDuration: dur + 's',
            animationDelay: delay + 's',
            animationFillMode: 'forwards',
            ...style,
        };

        if (isSx) {
            return cloneElement(child as ReactElement, {
                sx: {
                    animation: `${sxAppearanceKeyframes}`,
                    animationTimingFunction: 'ease-in-out',
                    ...animationProps,
                    ...sx,
                    ...sxProp
                }
            });
        }

        else {
            return cloneElement(child as ReactElement, {
                style: {
                    ...animationProps,
                    ...styleProp
                },
                className: s.appearanceKeyframes
            });
        }
    };

    const clonedChildren = Children.map(children, mapChild);

    return <>{clonedChildren}</>;
};