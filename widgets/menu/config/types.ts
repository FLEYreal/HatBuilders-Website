// Basics
import { ReactNode } from "react"

// Material-UI
import { SxProps, MenuProps } from '@mui/material'

// Interfaces
export interface MenuInterface {
    children?: ReactNode;
    sx?: SxProps;
    anchorEl?: MenuProps['anchorEl'];
    onClick?: MenuProps['onClick'];
}