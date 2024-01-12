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

/**
 * Provides animation for floating things. You can setup animation properties.
 * 
 * Important note:
 * Use "args" attribute to provide properties to child components, otherwise styles might not apply or cause troubles.
 * The only exception is SX and Style properties, you can both provide them to children and as separate attributes to
 * this component.
 * 
 * @param isSx - Use this property to define either to use "sx" or "style" prop for styling.
 * @param dur - Duration of animation.
 * @param delay - Delay before starting animation. Useful to display page's components in order.
 * @param sx - SX styles for children.
 * @param style - Basic CSS styles for children.
 * @param args - Provide all arguments to pass them to all children.
 * 
 * @returns Same children with animation applied + properties from "args" attribute.
 */
export function Appearance<T>({
    children,
    isSx, // Define wether to use SX or Style
    dur = 1, // Animation's duration
    delay = 0, // Delay before starting

    sx,
    style,

    ...args
}: AppearanceInterface<T>) {

    const mapChild = (child: ReactNode) => {

        const { style: styleProp, sx: sxProp }: { style?: CSSProperties; sx?: SxProps } = (child as ReactElement).props;

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
                },
                ...args
            });
        }

        else {
            return cloneElement(child as ReactElement, {
                style: {
                    ...animationProps,
                    ...styleProp
                },
                className: s.appearanceKeyframes,
                ...args
            });
        }
    };

    const clonedChildren = Children.map(children, mapChild);

    return <>{clonedChildren}</>;
};