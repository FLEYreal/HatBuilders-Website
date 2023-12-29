'use client'

// Basics
import { useState, useEffect, createContext, ReactNode, useContext } from "react"

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
    stepfulContext, 
    direction as directionType
} from ".."

// Context
export const StepfulContext = createContext<stepfulContext>({
    modules: [],
    setModules: () => { },
    current: 0,
    setCurrent: () => { },
    switchModule: () => { }
})

// Context Hook
export const useModules = () => useContext(StepfulContext)

// Component(s)
export const Wrapper = ({ modules, current = 0, sx = {}, component = 'section', customModuleSwitch }: StepfulWrapperInterface) => {

    // States
    const [moduleList, setModuleList] = useState<ReactNode[]>(modules)
    const [currentModule, setCurrentModule] = useState<number>(current)
    const [wrapperStyles, setWrapperStyles] = useState<SxProps>(sx)
    const [isDelay, setIsDelay] = useState<boolean>(false)


    // Functions & Events & Handlers
    function handleSwitchModule(direction: directionType = 'down') {
        if (isDelay) return;

        // Set delay to true, now animation won't play until it's false again (it sets up to false in useEffect)
        setIsDelay(true)

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

    function handleScroll(event: WheelEvent) {

        // If there's a custom function from params
        if (customModuleSwitch && isDelay == false) customModuleSwitch(event, currentModule, setCurrentModule, wrapperStyles, setWrapperStyles);
        else {
            let direction: directionType = 'up';
            if (event.deltaY > 0) direction = 'down'

            handleSwitchModule(direction)
        }
    }

    // UseEffects
    useEffect(() => {

        // IF isDelay updated to true, setup timer that sets it to false in double time of transition duration
        if (isDelay === true) setTimeout(() => setIsDelay(false), transitionDur * 2000)

    }, [isDelay])

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