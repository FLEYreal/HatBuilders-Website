'use client'

// Basics
import Image from 'next/image';
import { CSSProperties } from "react"
import { createPortal } from "react-dom"

// Material-UI
import { Box, Theme } from "@mui/material"
import { useTheme } from "@emotion/react"

// UI
import { useModules } from "../ui/provider"

// Assets
import scrollDotsShadow from '@/public/images/scroll-dots-shadow.svg'

// Styles for wrapper
const wrapper = () => ({
    position: 'absolute',
    top: '50%',
    left: '16px',
    display: 'flex',
    flexFlow: 'column nowrap',
    alignItems: 'center',
    justifyContent: 'center',
    width: '10px'
})

// Function to define dot size
const dots = (
    theme: Theme,
    size: number,
    colors: [string, string]
) => ({
    width: size + 'px',
    height: size + 'px',
    background: theme.palette.mode === 'dark' ? colors[0] : colors[1]
})

export const ScrollDots = () => {

    // Get variable from custom stepful display hook
    const { current, modules } = useModules()

    // Theme
    const theme = useTheme() as Theme

    return createPortal(
        <Box sx={wrapper()}>
            <Box
                component='span'
                sx={{
                    background: `radial-gradient(50% 50% at 50% 50%, ${theme.palette.mode === 'dark' ? '#000000' : '#ffffff'} 1%, transparent)`,
                    height: theme.palette.mode === 'dark' ? '350px' : '280px',
                    width: '200px',
                    position: 'absolute',
                    left: theme.palette.mode === 'dark' ? '-120px' : '-125px',
                    zIndex: '1000'
                }}
            />
            {
                // Create list of dots defining the amount of modules + current module
                modules.map(function (_, key) {

                    // Variable to keep styles for varios types of buttons
                    let optionalStyles: CSSProperties = {}

                    // Define size of the dot depending wether it's current / close to current / not current dot
                    if (current === key) {
                        optionalStyles = dots(theme, 10, ['#ffffff', '#000000'])
                    }

                    else if (key + 1 == current || key - 1 == current) {
                        optionalStyles = dots(theme, 6, ['#B8B8B8', '#4a4a4a'])
                    }

                    else {
                        optionalStyles = dots(theme, 4, ['#797979', '#7d7d7d'])
                    }

                    return (
                        <div key={key} style={{
                            flexShrink: '0',
                            margin: '4px 0',
                            zIndex: 1000,
                            transition: 'all 0.2s ease-in-out',
                            ...optionalStyles
                        }}></div>
                    )
                })
            }
        </Box>,
        document.body
    )
}