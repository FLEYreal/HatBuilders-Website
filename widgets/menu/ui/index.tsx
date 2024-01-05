// Basics
import React from 'react'

// Material-UI
import Menu from '@mui/material/Menu';

// Config
import type { MenuInterface } from '../config/types'

export function HatMenu({
    children,
    sx,
    anchorEl,
    onClick
}: MenuInterface) {

    return (
        <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClick={onClick}
            slotProps={{
                paper: {
                    sx: {
                        boxShadow: '5px 5px 0px 0px rgba(255, 255, 255, 0.15) inset, -5px -5px 0px 0px rgba(0, 0, 0, 0.30) inset'
                    }
                }
            }}
            sx={{ fontFamily: 'inherit !important', ...sx }}
        >
            {children}
        </Menu>
    )
};
