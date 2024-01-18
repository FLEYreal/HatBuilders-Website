'use client';

// Basics
import { createElement as e } from "react";

// Material-UI
import { Box, SxProps, Theme } from "@mui/material"
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

// Styles Components
export const StyledWrapper = styled(({ def, ...props }: FlexInterface) => e(Flex, props)) <FlexInterface>``


// Styles for Wrapper
const wrapper = () => ({
    position: 'absolute',
    left: 0,
    display: 'flex',
    flexFlow: 'column nowrap',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'end'
})


const OrderButton = (props: BigHatButtonInterface) => {

    // These variables tell wether it's bigger than breakpoint's screen size 
    // Example: XL equals 1080, it means that if screen is bigger than 1080, it'll return TRUE
    const { md, lg, xl } = useResolution()

    return (
        <BigHatButton color="primary" name="order"

            // Define sizes of Order button "w" is width, "h" is height
            w={
                xl ? 330 :
                    lg ? 310 :
                        md ? 300 : 270
            }

            h={
                xl ? 90 :
                    md ? 80 : 65
            }
            // This attribute provides props to typography component inside custom "BigHatButton" comp.
            typographyProps={
                lg ? {
                    variant: "h2",
                    sx: { color: 'white' }
                } : {
                    variant: "h1"
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
        <BigHatButton color="secondary" name="job_application"

            // Define sizes of Order button "w" is width, "h" is height
            w={
                xl ? 330 :
                    lg ? 310 :
                        md ? 300 : 270
            }

            h={
                xl ? 65 :
                    md ? 60 : 50
            }

            // This attribute provides props to typography component inside custom "BigHatButton" comp.
            typographyProps={
                xl ? {
                    variant: "h3",
                    sx: { color: 'white' }
                } : {
                    variant: "h2",
                }
            }

            {...props} />
    )
}

// Color theme
const Blackout = ({ sx }: { sx: SxProps }) => {

    // Theme
    const theme = useTheme() as Theme

    return (
        // deepcode ignore JavascriptDeadCode
        <Box sx={Object.assign({}, wrapper(), sx)} >
            <Box
                component='span'
                sx={{
                    background: `radial-gradient(100% 100% at 50% 100%, ${theme.palette.mode === 'dark' ? '#000000' : '#ffffff'} 0%, transparent)`,
                    height: '300px',
                    width: '100%',
                    position: 'absolute',
                    zIndex: 1,
                    pointerEvents: 'none'
                }}
            />

        </Box>
    )
}

// Export all ordinary components
export { ApplyJobButton, OrderButton, Blackout }