'use client'

// Basics
import { useEffect, useRef, useCallback } from "react"

// Material-UI
import { Box } from "@mui/material"

// Insides
import { useModules } from "./provider"
import {
    ModulesInterface as StepfulModulesInterface,
    direction as directionType
} from '../config/types'

// Component(s)

/**
 * StepfulModules provides feature of smooth animated module transitions from "modules" array attribute.
 * It adds scroll dots in the right middle that define what module you're on. And in the middle bottom adds a
 * button "more" with an arrow that switches to next module from "modules" array on click.
 * 
 * @returns {ReactNode} - Displays a module defined by "modules[current]".
 */
export const Modules = ({ sx, component = 'section' }: StepfulModulesInterface) => {

    // CONTEXTS
    const { modules, current, switchModule, moduleStyles } = useModules()


    // REFERENCES
    const isDelay = useRef<boolean>(false)


    // HANDLERS

    /**
     * Handler for scroll event, activates "switchModule" function
     * 
     * @param {WheelEvent} event
     */
    const handleScroll = useCallback((event: WheelEvent) => {

        let direction: directionType = 'up';
        if (event.deltaY > 0) direction = 'down'

        switchModule(direction)
    }, [switchModule])


    // EFFECTS
    useEffect(() => {

        // Setup listener to track scrolling
        window.addEventListener('wheel', handleScroll);

        // Clean up listeners
        return () => { window.removeEventListener('wheel', handleScroll); };

    }, [isDelay, handleScroll]);

    return (
        <Box
            component={component}
            sx={Object.assign({}, moduleStyles, sx)}
        >
            {/* Load current module */}
            {modules[current]}
        </Box>
    )
}
