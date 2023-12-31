'use client'

// Basics
import { useEffect, useRef } from "react"

// Material-UI
import { Box } from "@mui/material"

// Config
import {
    ModulesInterface as StepfulModulesInterface,
    direction as directionType
} from '../config/types'

// Context
import { useModules } from "./provider"

// Component(s)

/**
 * StepfulModules provides feature of smooth animated module transitions from "modules" array attribute.
 * It adds scroll dots in the right middle that define what module you're on. And in the middle bottom adds a
 * button "more" with an arrow that switches to next module from "modules" array on click.
 * 
 * @returns {ReactNode} - Displays a module defined by "modules[current]".
 */
export const Modules = ({ sx, component = 'section' }: StepfulModulesInterface) => {

    // Hooks
    const { modules, current, switchModule, moduleStyles } = useModules()
    const isDelay = useRef<boolean>(false)

    // Handlers

    /**
     * Handler for scroll event, activates "handleSwitchModule" function is there's no custom defined function "customModuleSwitch"
     * 
     * @param {WheelEvent} event
     */
    function handleScroll(event: WheelEvent) {

        let direction: directionType = 'up';
        if (event.deltaY > 0) direction = 'down'

        switchModule(direction)
    }

    // UseEffects

    useEffect(() => {
        // Setup listener to track scrolling
        window.addEventListener('wheel', handleScroll);

        // Clean up listeners
        return () => { window.removeEventListener('wheel', handleScroll); };

    }, [isDelay]);

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
