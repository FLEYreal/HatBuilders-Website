'use client'

// Basics
import { ReactNode, createContext, useContext, useState, useRef, useEffect } from "react"

// Material-UI
import { SxProps } from '@mui/material'

// Config
import {
    StepfulContext as StepfulContextType,
    ProviderInterface as StepfulProvierInterface,
    direction as directionType,
} from '../config/types'

import {
    transitionDur,
    fadeInFromDown,
    fadeOutToUp,
    fadeInFromUp,
    fadeOutToDown
} from "../config/animations"

// Context
export const StepfulContext = createContext<StepfulContextType>({
    modules: [],
    setModules: () => { },
    current: 0,
    setCurrent: () => { },
    switchModule: () => { },
    moduleStyles: {},
    setModuleStyles: () => { }
})

// Context Hook
export const useModules = () => useContext(StepfulContext)

export const Provider = ({ children, modules, current = 0, id }: StepfulProvierInterface) => {

    // Hooks
    const [moduleList, setModuleList] = useState<ReactNode[]>(modules)
    const [moduleStyles, setModuleStyles] = useState<SxProps>({})
    const [currentModule, setCurrentModule] = useState<number>(Number(localStorage.getItem(`${id}-current-module`)) || current)
    const isDelay = useRef<boolean>(false)

    /**
     * Handles animated transition from 1 module to another.
     * Also has a delay for switching modules to let animation play entirely.
     * 
     * @param {directionType} direction - Defines a direction of module switch "up" is decreasing index, "down" is increasing index.
     * 
     * @returns {void}
     */
    function switchModule(direction: directionType = 'down') {
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
        setModuleStyles((prev: SxProps) => ({
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
            setModuleStyles((prev: SxProps) => ({
                ...prev,
                animation: `${fadeIn} ${transitionDur}s ease-in-out forwards`,
            }));

        }, transitionDur * 1000);
    }

    // UseEffects

    useEffect(() => {

        // Setup Fade-In animation when module first loaded
        setModuleStyles((prev: SxProps) => ({
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
            switchModule,
            moduleStyles,
            setModuleStyles
        }}>
            {children}
        </StepfulContext.Provider>
    )
}