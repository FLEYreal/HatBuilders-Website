'use client'

// Basics
import { useState, useEffect } from "react"

// Material-UI
import { SxProps, Box } from "@mui/material"

// Variables
import { transitionDur, fadeInFromDown, fadeOutToUp, fadeInFromUp, fadeOutToDown } from './animations'

// Interfaces
import { WrapperInterface } from "../types"

// Component(s)
export const Wrapper = ({ modules, current = 0, sx = {}, component = 'section', switchModule }: WrapperInterface) => {

    // States
    const [currentModule, setCurrentModule] = useState<number>(current)
    const [wrapperStyles, setWrapperStyles] = useState<SxProps>(sx)
    const [isDelay, setIsDelay] = useState<boolean>(false)

    // Functions & Events & Handlers
    function handleModuleSwitch(event: WheelEvent) {
        let timeoutId; // variable to keep timeout's id

        // If there's a custom function from params
        if (switchModule && isDelay == false) switchModule(event, currentModule, setCurrentModule, wrapperStyles, setWrapperStyles);
        else if (isDelay == false) {

            // Set delay to true, now animation won't play until it's false again (it sets up to false in useEffect)
            setIsDelay(true)

            // Setup animation for scroll down
            let fadeIn = fadeInFromDown;
            let fadeOut = fadeOutToUp;

            // Switch animation if scroll is up
            if (event.deltaY < 0) {
                fadeIn = fadeInFromUp
                fadeOut = fadeOutToDown
            }

            // Turn disappearance animation
            setWrapperStyles((prev: SxProps) => ({
                ...prev,
                animation: `${fadeOut} ${transitionDur}s ease-in-out forwards`
            }));

            // Setup time to let animation finish
            timeoutId = setTimeout(() => {

                // Switch modules
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

    // UseEffects
    useEffect(() => {

        // IF isDelay updated to true, setup timer that sets it to false in double time of transition duration
        if (isDelay === true) setTimeout(() => setIsDelay(false), transitionDur * 2000)

    }, [isDelay])

    useEffect(() => {

        // Setup listener to track scrolling
        window.addEventListener('wheel', handleModuleSwitch);

        // Clean up listeners
        return () => { window.removeEventListener('wheel', handleModuleSwitch); };

    }, [isDelay]);

    useEffect(() => {

        // Setup Fade-In animation when module first loaded
        setWrapperStyles((prev: SxProps) => ({
            ...prev,
            animation: `${fadeInFromDown} ${transitionDur}s ease-in-out forwards`,
        }));

    }, [])



    return (
        <Box sx={wrapperStyles} component={component}>
            {/* Load current module */}
            {modules[currentModule]}
        </Box>
    )
}