// Basics
import { ReactNode, Dispatch, SetStateAction } from "react"

// Material-UI
import { BoxProps } from "@mui/system"
import { SxProps } from "@mui/material"

// Types
export type switchModule = (
    event: WheelEvent,
    currentModule: number,
    setCurrentModule: Dispatch<React.SetStateAction<number>>,
    wrapperStyles: SxProps,
    setWrapperStyles: Dispatch<React.SetStateAction<SxProps>>
) => void

export type direction = 'up' | 'down'

export type stepfulContext = {
    modules: ReactNode[],
    setModules: Dispatch<SetStateAction<ReactNode[]>>
    current: number,
    setCurrent: Dispatch<SetStateAction<number>>,
    switchModule: (direction: direction) => void
}

// Interfaces
export interface WrapperInterface {
    modules: ReactNode[],
    current?: number,
    sx?: SxProps,
    component?: BoxProps['component'],
    customModuleSwitch?: switchModule
}