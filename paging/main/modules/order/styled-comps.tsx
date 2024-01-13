'use client';

// Basics
import { createElement as e } from "react";
import { createPortal } from "react-dom"

// Material-UI
import { Box, Theme } from "@mui/material"
import { useTheme } from "@emotion/react"

// Widgets
import { BigHatButton, BigHatButtonInterface } from "@/widgets/button";

// Shared
import { useResolution } from "@/shared/mui";

// Emotion
import styled from "@emotion/styled";

// Features
import { Flex } from "@/features/wrappers";
import { FlexInterface } from "@/features/wrappers/types";

// Assets
import orderBg from '@/public/images/order-bg.png';

// Styles Components
export const StyledWrapper = styled(({ def, ...props }: FlexInterface) => e(Flex, props)) <FlexInterface>`

    background-image: url(${orderBg.src});
    background-size: cover;
    background-position: right;
`


// Styles for Wrapper
const wrapper = () => ({
    position: 'absolute',
    top: '100%',
    right: '0%',
    display: 'flex',
    flexFlow: 'column nowrap',
    alignItems: 'center',
    width: '100%',
    justifyContent:'end'
})


const JobApplicationButton = (props: BigHatButtonInterface) => {

    // These variables tell wether it's bigger than breakpoint's screen size 
    // Example: XL equals 1080, it means that if screen is bigger than 1080, it'll return TRUE
    const { md, lg, xl } = useResolution()

    return (
        <BigHatButton  color="secondary" name="order"

            // Define sizes of Order button "w" is width, "h" is height
            w={
                xl ? 270 :
                    lg ? 210 :
                        md ? 160 : 140
                            
                        
            }

            h={
                xl ? 65 :
                    lg ? 55 :
                        md ? 50 : 40
            }
            // This attribute provides props to typography component inside custom "BigHatButton" comp.
            typographyProps={
                md ? {
                    // If it's MD and higher, apply styles for H2
                    variant: "h3",
                    sx: { color: 'white' }
                } : {
                    // If it's XS, apply these styles
                    sx: {
                        fontSize: '12px'
                    }
                }
            }

            {...props} />
    )
}

const ApplyJobButton = (props: BigHatButtonInterface) => {

    // These variables tell wether it's bigger than breakpoint's screen size 
    // Example: XL equals 1080, it means that if screen is bigger than 1080, it'll return TRUE
    const { md, lg, xl } = useResolution()

    return (
        <BigHatButton  color="secondary" name="Job_Application"

            // Define sizes of Order button "w" is width, "h" is height
            w={
                xl ? 270 :
                    lg ? 210 :
                        md ? 160 : 140
                        
            }

            h={
                xl ? 65 :
                    lg ? 55 :
                        md ? 50 : 40
            }

            // This attribute provides props to typography component inside custom "BigHatButton" comp.
            typographyProps={
                md ? {
                    // If it's MD and higher, apply styles for H2
                    variant: "h3",
                    sx: { color: 'white' }
                } : {
                    // If it's XS, apply these styles
                    sx: {
                        fontSize: '12px'
                    }
                }
            }

            {...props} />
    )
}

// Color theme
const Blackout = () => {

    // Theme
    const theme = useTheme() as Theme

    return createPortal(
        <Box sx={wrapper()} >
            <Box
                component='span'
                sx={{
                    background: `radial-gradient(100% 100% at 50% 100%, ${theme.palette.mode === 'dark' ? '#010701be' : '#ffffff7f'} 0%, transparent)`,
                    height: '15vw' ,
                    width: '100%',
                    position: 'absolute',
                    zIndex: '1',
                    pointerEvents: 'none'
                }}
            />
            
        </Box>,
        document.body
    )
}

// Export all ordinary components
export { ApplyJobButton, JobApplicationButton, Blackout }