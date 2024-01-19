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
export function Float<T>({
    children,
    isSx, // Define wether to use SX or Style
    dur = 6, // Animation's duration
    delay = 0, // Delay before starting

    sx,
    style,
    args
}: FloatInterface<T>) {

    const mapChild = (child: ReactNode) => {

        const { style: styleProp, sx: sxProp }: { style?: CSSProperties; sx?: SxProps } = (child as ReactElement).props;

        console.log({
            animationDuration: dur + 's',
            animationDelay: delay + 's',
            ...style,
            ...styleProp
        })

        if (isSx) {

            return cloneElement(child as ReactElement, {
                sx: {
                    animation: `${floatKeyframes} ${dur}s ease-in-out infinite`,
                    animationDelay: delay + 's',
                    animationTimingFunction: 'ease-in-out',
                    ...sx,
                    ...sxProp
                },
                ...args
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
                ...args
            });

        }
    };

    const clonedChildren = Children.map(children, mapChild);

    return <>{clonedChildren}</>;
};
