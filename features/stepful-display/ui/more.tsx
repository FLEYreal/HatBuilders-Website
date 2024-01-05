'use client'

// Material-UI
import { SxProps, Box, Theme } from "@mui/material"
import { useTheme } from "@emotion/react"

// UI
import { useModules } from "./provider"

// Styles
import s from './styles.module.css'

export function More({ sx }: { sx?: SxProps }) {

    // Get variable from custom stepful display hook
    const { switchModule } = useModules()

    // Theme
    const theme = useTheme() as Theme

    // Switch to next module on click
    const handleContinue = () => switchModule('down')

    return (
        <Box sx={{
            zIndex: 0,
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
            height: '160px',
            background: theme.palette.mode === 'dark' ?
                'linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.85) 100%)' :
                'linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.3) 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            pt: '80px',
            boxSizing: 'border-box',
            flexFlow: 'column',
            ...sx
        }}>
            <div className={s.moreWrapper} onClick={handleContinue}>
                <div>More</div>
                <div className={s.moreArrow}>^</div>
            </div>
        </Box>
    )
}