'use client'

// MUI
import { useTheme } from '@emotion/react';
import { SxProps, Theme } from '@mui/material';

// Libs
import hexToRgba from 'hex-to-rgba';

// Widget
import { HatButton } from '@/widgets/button'

// Icons
import CloseIcon from '@mui/icons-material/Close';

export function Cross({
    onClose,
    sx
}: {
    onClose?: () => any,
    sx?: SxProps
}) {

    const theme = useTheme() as Theme;

    return (
        <HatButton onClick={onClose} color='error'
            sx={{
                minWidth: '36px',
                width: '36px',
                height: '36px',

                boxShadow: 'none',
                transition: 'all 0.16s ease-in-out',
                p: '1px',
                color: '#fff',
                boxSizing: 'border-box',
                border: 'none',
                backgroundColor: theme.palette.error.main,


                '&:hover': {
                    p: '1px',
                    boxShadow: `0px 0px 0px 6px ${hexToRgba(theme.palette.error.main, 0.2)}`,
                    backgroundColor: theme.palette.error.main
                },

                '&:active': {
                    p: '1px',
                    boxShadow: `0px 0px 0px 10px ${hexToRgba(theme.palette.error.main, 0.3)}`,
                    backgroundColor: theme.palette.error.light
                },

                ...sx
            }}>
            <CloseIcon />
        </HatButton>
    )
}