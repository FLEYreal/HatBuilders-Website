'use client'

// Basics
import { ReactNode, Dispatch, useState, useEffect } from "react"

// Material-UI
import { SxProps, Box, keyframes } from "@mui/material"
import { BoxProps } from "@mui/system"

// Interfaces
export interface WrapperInterface {
    modules: ReactNode[],
    current?: number,
    sx?: SxProps,
    component?: BoxProps['component'],
    switchModule?: (
        currentModule: number,
        setCurrentModule: Dispatch<React.SetStateAction<number>>,
        wrapperStyles: SxProps,
        setWrapperStyles: Dispatch<React.SetStateAction<SxProps>>
    ) => void
}

// Variables
export const transitionDur = 0.75
export const fadeIn = keyframes`
    0% {
        opacity: 0;
        transform: translateY(-100%)
    }
    100% {
        opacity: 1;
        transform: translateY(0%)
    }
`
export const fadeOut = keyframes`
    0% {
        opacity: 1;
        transform: translateY(0%)
    }
    100% {
        opacity: 0;
        transform: translateY(100%)
    }
`

// Component(s)
export const Wrapper = ({ modules, current = 0, sx = {}, component = 'section', switchModule }: WrapperInterface) => {

    // States
    const [currentModule, setCurrentModule] = useState<number>(current)
    const [wrapperStyles, setWrapperStyles] = useState<SxProps>(sx)

    // Functions & Events & Handlers
    function handleModuleSwitch() {
        let timeoutId; // variable to keep timeout's id

        // If there's a custom function from params
        if (switchModule) {
            switchModule(currentModule, setCurrentModule, wrapperStyles, setWrapperStyles);
        } else {

            // Switch to disappearance animation
            setWrapperStyles((prev: SxProps) => ({
                ...prev,
                animation: `${fadeOut} ${transitionDur}s ease-in-out forwards`,
            }));

            timeoutId = setTimeout(() => {
                setCurrentModule(prev => {
                    if (prev + 1 >= modules.length) return 0;
                    else return prev + 1;
                });

                // Switch to appearance animation after previous module faded
                setWrapperStyles((prev: SxProps) => ({
                    ...prev,
                    animation: `${fadeIn} ${transitionDur}s ease-in-out forwards`,
                }));

            }, transitionDur * 1000);
        }
    }


    // Setup Fade-In animation when module first loaded
    useEffect(() => {

        setWrapperStyles((prev: SxProps) => ({
            ...prev,
            animation: `${fadeIn} ${transitionDur}s ease-in-out forwards`,
        }));

    }, []);

    return (
        <Box sx={wrapperStyles} component={component}>

            {/* Temporary button for testing */}
            <button onClick={handleModuleSwitch}>Switch current +1</button>

            {/* Load current module */}
            {modules[currentModule]}
        </Box>
    )
}