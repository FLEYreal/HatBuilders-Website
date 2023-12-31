'use client'

// Basics
import { CSSProperties } from "react"

// Material-UI
import { Box } from "@mui/material"

// UI
import { useModules } from "../ui/provider"

export const ScrollDots = () => {

    // Get variable from custom stepful display hook
    const { current, modules } = useModules()

    return (
        <Box sx={{
            position: 'absolute',
            top: '50%',
            left: '16px',
            display: 'flex',
            flexFlow: 'column nowrap',
            alignItems: 'center',
            justifyContent: 'center',
            width: '10px'
        }}>
            {
                // Create list of dots defining the amount of modules + current module
                modules.map(function (el, key) {

                    // Variable to keep styles for varios types of buttons
                    let optionalStyles: CSSProperties = {}

                    // Define size of the dot depending wether it's current / close to current / not current dot
                    if (current === key) optionalStyles = {
                        width: '10px',
                        height: '10px',
                        background: '#ffffff',
                    }
                    else if (key + 1 == current || key - 1 == current) optionalStyles = {
                        width: '6px',
                        height: '6px',
                        background: '#B8B8B8',
                    }
                    else optionalStyles = {
                        width: '4px',
                        height: '4px',
                        background: '#797979',
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