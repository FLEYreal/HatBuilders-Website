'use client'

// Material-UI
import { Box, Theme, styled } from "@mui/material"
import { useTheme } from "@emotion/react"

// Features
import { Flex } from "@/features/wrappers"
import { defaultWrapper } from "@/features/wrappers"
import { FlexInterface } from "@/features/wrappers/types"

// UI
import { useModules } from "./provider"

// Shared
import { styledDefaultInterface } from "@/shared/mui"

// Interfaces
interface DotInterface extends styledDefaultInterface {
    darkcolor: string;
    lightcolor: string;
    size: number;
}

// Styled Components
const StyledScrollDots = styled(Flex) <styledDefaultInterface>`
    position: absolute;
    top: 50%;
    left: 16px;
    width: 10px;
`

const Dot = styled(Box)<DotInterface>`
    margin: 4px 0;
    z-index: 999;
    transition: all 0.2s ease-in-out;
    flex-shrink: 0;

    width: ${({ size }) => size}px;
    height: ${({ size }) => size}px;
    background-color: ${({ darkcolor, lightcolor, def }) => def!.t.palette.mode === 'dark' ? darkcolor : lightcolor};
`


const ScrollDotsComponent = ({ def, ...props }: FlexInterface) => {

    // Get variable from custom stepful display hook
    const { current, modules } = useModules()

    return (
        <StyledScrollDots flow="column nowrap" {...props}>
            {
                // Create list of dots defining the amount of modules + current module
                modules.map(function (_, key) {

                    // Variable to keep styles for varios types of buttons
                    let optionalStyles: DotInterface | undefined;

                    // Define size of the dot depending wether it's current / close to current / not current dot
                    if (key === current) optionalStyles = { size: 10, darkcolor:'#ffffff', lightcolor: '#000000' }
                    else if (key + 1 == current || key - 1 == current) optionalStyles = { size: 6, darkcolor:'#B8B8B8', lightcolor: '#4a4a4a' }
                    else optionalStyles = { size: 4, darkcolor:'#797979', lightcolor: '#7d7d7d' }

                    return (
                        <Dot
                            def={def}
                            key={key} 
                            darkcolor={optionalStyles.darkcolor}
                            lightcolor={optionalStyles.lightcolor}
                            size={optionalStyles.size}
                        />
                    )
                })
            }
        </StyledScrollDots>
    )
}

export const ScrollDots = defaultWrapper<FlexInterface>(ScrollDotsComponent)