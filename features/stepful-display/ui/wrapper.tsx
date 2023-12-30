'use client'

// Basics
import { useState, useEffect, createContext, ReactNode, useContext, useRef } from "react"

// Material-UI
import { SxProps, Box } from "@mui/material"

// Variables
import { transitionDur, fadeInFromDown, fadeOutToUp, fadeInFromUp, fadeOutToDown } from '../config/animations'

// Insides
import {
    // Components
    ScrollDots,
    More,

    // Types & Interfaces
    StepfulWrapperInterface,
    StepfulContextType,
    direction as directionType
} from ".."

// Context
export const StepfulContext = createContext<StepfulContextType>({
    modules: [],
    setModules: () => { },
    current: 0,
    setCurrent: () => { },
    switchModule: () => { }
})

// Context Hook
export const useModules = () => useContext(StepfulContext)

// Component(s)

/**
 * StepfulWrapper provides feature of smooth animated module transitions from "modules" array attribute.
 * It adds scroll dots in the right middle that define what module you're on. And in the middle bottom adds a
 * button "more" with an arrow that switches to next module from "modules" array on click.
 * 
 * @param {StepfulWrapperInterface} StepfulWrapperInterface
 * @returns {ReactNode} - Displays a module defined by "modules[current]".
 */
export const Wrapper = ({ modules, current = 0, sx = {}, component = 'section', customModuleSwitch, id }: StepfulWrapperInterface) => {

    // Hooks
    const [moduleList, setModuleList] = useState<ReactNode[]>(modules)
    const [currentModule, setCurrentModule] = useState<number>(Number(localStorage.getItem(`${id}-current-module`)) || current)
    const [wrapperStyles, setWrapperStyles] = useState<SxProps>(sx)
    const isDelay = useRef<boolean>(false)

    // Functions & Events & Handlers

    /**
     * Handles animated transition from 1 module to another.
     * Also has a delay for switching modules to let animation play entirely.
     * 
     * @param {directionType} direction - Defines a direction of module switch "up" is decreasing index, "down" is increasing index.
     * 
     * @returns {void}
     */
    function handleSwitchModule(direction: directionType = 'down') {
        if (isDelay.current === true) return;

        // Set delay to true, now animation won't play until it's false again (it sets up to false in useEffect)
        isDelay.current = true
        setTimeout(() => isDelay.current = false, transitionDur * 2000)

        // Setup animation for scroll down
        let fadeIn = fadeInFromDown;
        let fadeOut = fadeOutToUp;

        // Switch animation if scroll is up
        if (direction === 'up') {
            fadeIn = fadeInFromUp
            fadeOut = fadeOutToDown
        }

        // Turn disappearance animation
        setWrapperStyles((prev: SxProps) => ({
            ...prev,
            animation: `${fadeOut} ${transitionDur}s ease-in-out forwards`
        }));

        // Setup time to let animation finish
        setTimeout(() => {

            // Switch modules
            setCurrentModule(prev => {

                if (direction === 'up') {
                    if (prev - 1 <= 0) return moduleList.length - 1;
                    else return prev - 1;
                } else {
                    if (prev + 1 >= moduleList.length) return 0;
                    else return prev + 1;
                }
            });

            // Switch to appearance animation after previous module faded
            setWrapperStyles((prev: SxProps) => ({
                ...prev,
                animation: `${fadeIn} ${transitionDur}s ease-in-out forwards`,
            }));

        }, transitionDur * 1000);
    }

    /**
     * Handler for scroll event, activates "handleSwitchModule" function is there's no custom defined function "customModuleSwitch"
     * 
     * @param {WheelEvent} event
     */
    function handleScroll(event: WheelEvent) {

        let direction: directionType = 'up';
        if (event.deltaY > 0) direction = 'down'

        // If there's a custom function from params
        if (customModuleSwitch && isDelay.current == false) customModuleSwitch(direction, currentModule, setCurrentModule, wrapperStyles, setWrapperStyles);
        else handleSwitchModule(direction)
    }

    // UseEffects

    useEffect(() => {
        // Setup listener to track scrolling
        window.addEventListener('wheel', handleScroll);

        // Clean up listeners
        return () => { window.removeEventListener('wheel', handleScroll); };

    }, [isDelay]);

    useEffect(() => {

        // Setup Fade-In animation when module first loaded
        setWrapperStyles((prev: SxProps) => ({
            ...prev,
            animation: `${fadeInFromDown} ${transitionDur}s ease-in-out forwards`,
        }));

    }, [])

    useEffect(() => {

        // When current module switched, update it in localstorage so it current module didn't get reset after page reload
        if (
            currentModule >= 0 &&
            currentModule < moduleList.length &&
            typeof id === 'string' &&
            typeof currentModule === 'number'
        ) localStorage.setItem(`${id}-current-module`, String(currentModule))

    }, [currentModule, id, moduleList.length])

    return (
        <StepfulContext.Provider value={{
            modules: moduleList,
            setModules: setModuleList,
            current: currentModule,
            setCurrent: setCurrentModule,
            switchModule: handleSwitchModule
        }}>
            <ScrollDots />
            <Box sx={wrapperStyles} component={component}>
                {/* Load current module */}
                {moduleList[currentModule]}
            </Box>
            <More />
        </StepfulContext.Provider>
    )
}