import { SxProps } from '@mui/system'
import { BoxProps, TypographyOwnProps } from '@mui/material'
import { ReactNode } from 'react'

export interface TextInterface {
    variant?: TypographyOwnProps['variant']
    children: string | ReactNode
    sx?: SxProps,
    component?: BoxProps['component']
}

export interface ActionInterface {
    children: string | ReactNode
}

export interface ImageInterface {
    children: string | ReactNode
}