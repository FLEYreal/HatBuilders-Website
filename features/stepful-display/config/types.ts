// Basics
import { ReactNode, Dispatch, SetStateAction } from "react"

// Material-UI
import { BoxProps } from "@mui/system"
import { SxProps } from "@mui/material"

// Types

/**
 * Type for custom function to switch modules.
 * 
 * @param {direction} direction - Defines direction of animation
 * @param {number} currentModule - Index of displayed module from module array
 * @param {Dispatch<React.SetStateAction<number>>} setCurrentModule - useState hook function to change current module
 * @param {SxProps} wrapperStyles - Custom styles for module wrapper, it's where animation for transitioning is usually kept
 * @param {Dispatch<React.SetStateAction<SxProps>>} setWrapperStyles - useState hook function to change styles of wrapper for module
 */
export type SwitchModule = (
    direction: direction,
    currentModule: number,
    setCurrentModule: Dispatch<React.SetStateAction<number>>,
    wrapperStyles: SxProps,
    setWrapperStyles: Dispatch<React.SetStateAction<SxProps>>
) => void

/**
 * Type to defined module's transition's direction, wether it's upwards or downwards
 */
export type direction = 'up' | 'down'

/**
 * Type for a context object, it keeps all important data needs to be available to every stepful-display related features
 * 
 * @param {ReactNode[]} modules - Array of react components (modules) to display
 * @param {Dispatch<SetStateAction<ReactNode[]>>} setModules - useState hook function to update "modules" param
 * @param {number} current - Index element from "modules" array. This index defines what is current module has to be displayed
 * @param {Dispatch<SetStateAction<number>>} setCurrent - useState hook function to update "current" param
 * @param {Function} switchModule - function that smoothly switches modules, it has direction params to defines switch direction: "up" or "down"
 */
export type StepfulContext = {
    modules: ReactNode[],
    setModules: Dispatch<SetStateAction<ReactNode[]>>
    current: number,
    setCurrent: Dispatch<SetStateAction<number>>,
    switchModule: (direction: direction) => void
}

// Interfaces

/**
 * Interface for the general component in stepful-display feature - Wrapper.
 * 
 * @property {ReactNode[]} module - Required parameter. Array of react components (modules) to display
 * @property {number} [current] - Index element from "modules" array. This index defines what is current module has to be displayed
 * @property {SxProps} [sx] - Custom styles for wrapper
 * @property {BoxProps} [component] - It's property for "component" for Box component from Material-UI
 * @property {SwitchModule} [customModuleSwitch] - Define custom function to switch modules, if not provided, it uses built-in function
 * @property {string} id - Required parameter. Unique id of the wrapper. If not provided, generates autamically
 */
export interface WrapperInterface {
    modules: ReactNode[],
    current?: number,
    sx?: SxProps,
    component?: BoxProps['component'],
    customModuleSwitch?: SwitchModule,
    id: string
}