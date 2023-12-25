'use client'

// Basics
import { ReactNode, useState, useEffect } from "react"

// Material-UI
import { SxProps, Box } from "@mui/material"
import { BoxProps } from "@mui/system"

// Interfaces
export interface WrapperInterface {
    modules: ReactNode[],
    current?: number,
    sx?: SxProps,
    component?: BoxProps['component']
}

export const transitionDur = 0.75

export const Wrapper = ({ modules, current = 0, sx = {}, component = 'section' }: WrapperInterface) => {

    const [currentModule, setCurrentModule] = useState<number>(current)

    useEffect(() => {

    }, [currentModule])

    return (
        <Box sx={sx} component={component}>
            {modules[currentModule]}
        </Box>
    )
}