'use client'

// Basics
import { CSSProperties } from "react"

// Material-UI
import { Box, Theme } from "@mui/material"
import { useTheme } from "@emotion/react"

// UI
import { useModules } from "../ui/provider"

// Styles

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

    return (
        <Box sx={wrapper()}>
            {
                // Create list of dots defining the amount of modules + current module
                modules.map(function (el, key) {

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
                            zIndex: 999,
                            transition: 'all 0.2s ease-in-out',
                            ...optionalStyles
                        }}></div>
                    )
                })
            }
        </Box>
    )
}