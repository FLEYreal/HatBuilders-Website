'use client'

// Basics
import { 

    // Utils
    ReactNode, 
    createContext, 

    // Hooks
    useContext, 
    useState, 
    useRef, 
    useEffect, 
    useCallback

} from "react"

// Material-UI
import { SxProps } from '@mui/material'

// Insides
import {

    StepfulContext as StepfulContextType,
    ProviderInterface as StepfulProvierInterface,
    direction as directionType,

} from '../config/types'

import {

    // Animations' duration
    transitionDur,

    // Fade animations
    fadeInFromDown,
    fadeOutToUp,
    fadeInFromUp,
    fadeOutToDown

} from "../config/animations"

// Context
export const StepfulContext = createContext<StepfulContextType>({
    modules: [], // List of modules
    setModules: () => { }, // Update list of modules
    current: 0, // Current module to display
    setCurrent: () => { }, // Update current module
    switchModule: () => { }, // Function to smoothly switch between modules
    moduleStyles: {}, // Styles of the module's wrapper
    setModuleStyles: () => { } // Update module's styles
})

// Context Hook
export const useModules = () => useContext(StepfulContext)

export const Provider = ({ children, modules, current = 0, id }: StepfulProvierInterface) => {

    // STATES
    const [moduleList, setModuleList] = useState<ReactNode[]>(modules) // List of modules
    const [moduleStyles, setModuleStyles] = useState<SxProps>({}) // Styles for module's wrapper
    const [currentModule, setCurrentModule] = useState<number>(Number(localStorage.getItem(`${id}-current-module`)) || current) // Current module
    
    
    // REFERENCES
    const isDelay = useRef<boolean>(false) // Forbids changing modules while animation plays


    // FUNCTIONS

    /**
     * Handles animated transition from 1 module to another.
     * Also has a delay for switching modules to let animation play entirely.
     * 
     * @param {directionType} direction - Defines a direction of module switch "up" is decreasing index, "down" is increasing index.
     * If you type number instead of a direction, it will switch to the index of the module whose number you typed.
     * 
     * @returns {void}
     */
    const switchModule = useCallback((direction: directionType = 'down') => {

        // Can't continue if it's still a delay
        if (isDelay.current === true) return;

        // Setup animation for scroll down by default
        let fadeIn = fadeInFromDown;
        let fadeOut = fadeOutToUp;

        // Switch to the index typed in direction if the arg is type number
        if (typeof direction === 'number') {

            // Animation has to be downwards
            if (currentModule > direction) {
                fadeIn = fadeInFromUp
                fadeOut = fadeOutToDown
            }

            // It's same module, no need to switch anywhere
            else if (currentModule === direction) return;

        }

        // Switch animation if scroll direction is "up"
        else if (typeof direction === 'string' && direction === 'up') {
            fadeIn = fadeInFromUp
            fadeOut = fadeOutToDown
        }

        // Set delay to true, now animation won't play until it's false again (it sets up to false in useEffect)
        isDelay.current = true
        setTimeout(() => isDelay.current = false, transitionDur * 2000)

        // Turn disappearance animation
        setModuleStyles((prev: SxProps) => ({
            ...prev,
            animation: `${fadeOut} ${transitionDur}s ease-in-out forwards`
        }));

        // Setup time to let animation finish
        setTimeout(() => {

            // Switch modules
            if (typeof direction === 'number') setCurrentModule(direction)
            else {
                setCurrentModule(prev => {

                    if (direction === 'up') {
                        if (prev <= 0) return moduleList.length - 1;
                        else return prev - 1;
                    } else {
                        if (prev + 1 >= moduleList.length) return 0;
                        else return prev + 1;
                    }
                });
            }

            // Switch to appearance animation after previous module faded
            setModuleStyles((prev: SxProps) => ({
                ...prev,
                animation: `${fadeIn} ${transitionDur}s ease-in-out forwards`,
            }));

        }, transitionDur * 1000);
    }, [currentModule, moduleList.length])


    // EFFECTS
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