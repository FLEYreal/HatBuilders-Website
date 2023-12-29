// Basics
import { ReactNode, Dispatch } from "react"

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

// Interfaces
export interface WrapperInterface {
    modules: ReactNode[],
    current?: number,
    sx?: SxProps,
    component?: BoxProps['component'],
    switchModule?: switchModule
}