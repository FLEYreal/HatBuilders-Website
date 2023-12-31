// Basics
import { ReactNode, Dispatch, SetStateAction } from "react"

// Material-UI
import { BoxProps } from "@mui/system"
import { SxProps, ButtonBaseProps } from "@mui/material"

// Types

/**
 * Type for custom function to switch modules.
 * 
 * @param {direction} direction - Defines direction of animation
 * @param {number} currentModule - Index of displayed module from module array
 * @param {Dispatch<React.SetStateAction<number>>} setCurrentModule - useState hook function to change current module
 * @param {SxProps} ModulesStyles - Custom styles for module, it's where animation for transitioning is usually kept
 * @param {Dispatch<React.SetStateAction<SxProps>>} setModulesStyles - useState hook function to change styles of Modules for module
 */
export type SwitchModule = (
    direction: direction,
    currentModule: number,
    setCurrentModule: Dispatch<React.SetStateAction<number>>,
    ModulesStyles: SxProps,
    setModulesStyles: Dispatch<React.SetStateAction<SxProps>>
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
    switchModule: (direction: direction) => void,
    moduleStyles: SxProps, 
    setModuleStyles: Dispatch<SetStateAction<SxProps>>
}

// Interfaces

/**
 * Interface for the general component in stepful-display feature - Modules.
 * 
 * @property {ReactNode[]} module - Required parameter. Array of react components (modules) to display
 * @property {number} [current] - Index element from "modules" array. This index defines what is current module has to be displayed
 * @property {SxProps} [sx] - Custom styles for Modules
 * @property {BoxProps} [component] - It's property for "component" for Box component from Material-UI
 * @property {SwitchModule} [customModuleSwitch] - Define custom function to switch modules, if not provided, it uses built-in function
 * @property {string} id - Required parameter. Unique id of the Modules. If not provided, generates autamically
 */
export interface ModulesInterface {
    sx?: SxProps
    component?: BoxProps['component'],
}

export interface ProviderInterface {
    children: ReactNode,
    modules: ReactNode[],
    current?: number,
    id: string
}

export interface StepfulTabsInterface {
    ns?: string,
    moduleTheme?: {
        color: ButtonBaseProps['color']
        translation: string
    }[]
}