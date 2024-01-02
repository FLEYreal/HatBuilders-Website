import { SxProps } from '@mui/system'
import { ReactNode } from 'react'

export type HatTextType = {
    type: 'title' | 'text' | 'actions' | 'divider'
    content?: any
    onClick?: () => any
    sx?: SxProps
    color?: string
    variant?: 'red' | 'green' | 'black'
}