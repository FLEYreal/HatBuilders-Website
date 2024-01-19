// Basics
import React, { ReactNode, Dispatch, SetStateAction } from "react"

// Material-UI
import { SxProps, BoxProps } from "@mui/material"


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
export type direction = 'up' | 'down' | number

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
    modules: ReactNode[];
    setModules: Dispatch<SetStateAction<ReactNode[]>>;
    current: number;
    setCurrent: Dispatch<SetStateAction<number>>;
    switchModule: (direction: direction) => void;
    moduleStyles: SxProps;
    setModuleStyles: Dispatch<SetStateAction<SxProps>>;
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
    sx?: SxProps;
    component?: BoxProps['component'];
}

/**
 * Interface for the Provider component in stepful-display feature.
 * 
 * @param {ReactNode} children - Required parameter. It's a react node that will be displayed inside the Provider component.
 * @param {ReactNode[]} modules - Required parameter. Array of react components (modules) to display.
 * @param {number} [current] - Index element from "modules" array. This index defines what is current module has to be displayed.
 * @param {string} id - Required parameter. Unique id of the Provider component.
 */
export interface ProviderInterface {
    children: ReactNode;
    modules: ReactNode[];
    current?: number;
    id: string;
}

/**
 * Interface for the StepfulTabs component.
 * 
 * @param {string} [ns] - Optional parameter. Namespace for the component.
 * @param {object} [moduleTheme] - Optional parameter. Array of objects that define the theme of the modules.
 * @param {('inherit'|'primary'|'secondary')} moduleTheme.color - Required parameter. Color of the icon.
 * @param {string} moduleTheme.translation - Required parameter. Translation key for the label of the module.
 * @param {ReactNode} [moduleTheme.icon] - Optional parameter. Icon to be displayed next to the label of the module.
 * @param {SxProps} [sxChild] - Optional parameter. Custom styles for the child elements of the component.
 * @param {SxProps} [sxParent] - Optional parameter. Custom styles for the child that are MUI's components.
 */
export interface StepfulTabsInterface {
    ns?: string;
    moduleTheme?: {
        color: 'inherit' | 'primary' | 'secondary';
        translation: string;
        icon?: ReactNode;
    }[],

    sxChild?: SxProps;
    sxParent?: SxProps;
}