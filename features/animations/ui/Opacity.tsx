'use client'

// Basics
import { cloneElement, Children, ReactNode, ReactElement } from "react";

// Emotion
import { keyframes } from "@emotion/react";

// Insides
import { OpacityInterface } from "../types";

// Animation
import s from './style.module.css';

// Animation
const opacityKeyframes = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`;

// Component
export function Opacity({
    children,
    isSx, // Define wether to use SX or Style
    dur = 1, // Animation's duration
    delay = 0, // Delay before starting

    sx,
    style,

    ...props
}: OpacityInterface) {

    const mapChild = (child: ReactNode) => {

        if (isSx) {

            return cloneElement(child as ReactElement, {
                sx: {
                    opacity: 0,
                    animation: `${opacityKeyframes} ${dur}s ease-in-out`,
                    animationDelay: delay + 's',
                    animationFillMode: 'forwards',
                    ...sx
                },
                ...props
            });

        }

        else {

            return cloneElement(child as ReactElement, {
                style: {
                    animationDuration: dur + 's',
                    animationDelay: delay + 's',
                    ...style
                },
                className: s.opacityKeyframes,
                ...props
            });

        }
    };

    const clonedChildren = Children.map(children, mapChild);

    return <>{clonedChildren}</>;
};
