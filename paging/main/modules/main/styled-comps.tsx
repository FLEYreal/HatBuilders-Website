'use client'

// Basics
import { createElement as e, useState } from "react";

// Material-UI
import { Box } from "@mui/material";

// Emotion
import styled from "@emotion/styled";

// Widgets
import { BigHatButton, BigHatButtonInterface } from "@/widgets/button";

// Features
import { Flex, defaultWrapper, FlexInterface } from "@/features/wrappers";

// Shared
import { useResolution, styledDefaultInterface } from "@/shared/mui";

// Assets
import cyberpukPng from '@/public/images/Cyberpuk2.png'


// COMPONENTS
const StyledBottomPlatform = styled(({ def, ...props }: FlexInterface) => e(Flex, props)) <FlexInterface>`

    // Statis styles
    position: absolute;
    height: 125px;
    bottom: 0;
    left: 0;

    // Dynamic styles
    background: ${({ def }) => def && def.t.palette.mode === 'dark' ? 'linear-gradient(180deg, #121212 0%, #070707 100%)' : '#ffffff'};
    box-shadow: 0px 6px 0px 0px ${({ def }) => def && def.t.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.15) inset' : 'rgba(0, 0, 0, 0.15) inset'};
`

const StyledCyberpukBanner = styled(({ def, ...props }: styledDefaultInterface) => e(Box, props)) <styledDefaultInterface>`

    // Static styles
    z-index: -1;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    right: 0px;
    width: 100%;
    margin: 0;
    padding: 0;
    background: url(${cyberpukPng.src}) no-repeat center center fixed;
    background-size: cover;

    // Dynamic styles
    ${({ def }) => def!.b('xs')} {
        top: -290px;
        min-height: calc(100vh + 290px);
    }
    ${({ def }) => def!.b('md')} {
        top: -350px;
        min-height: calc(100vh + 350px);
    }
    ${({ def }) => def!.b('lg')} {
        top: -400px;
        min-height: calc(100vh + 400px);
    }
    ${({ def }) => def!.b('xl')} {
        top: -500px;
        min-height: calc(100vh + 500px);
    }
`

const StyledWrapperComponent = styled(Flex)<FlexInterface>``

const OrderButton = (props: BigHatButtonInterface) => {
    
    // These variables tell wether it's bigger than breakpoint's screen size 
    // Example: XL equals 1080, it means that if screen is bigger than 1080, it'll return TRUE
    const { md, lg, xl } = useResolution()

    // Loading State
    const [loading, setLoading] = useState(false);

    // Handle loading on click
    const handleClick = () => {

        // Button will be loading on click
        setLoading(true)

        // When too many time has passed, turn off loading state
        setTimeout(() => {
            setLoading(false)
        }, 5000)

    }

    return (
        <BigHatButton color="secondary" name="order"

            loading={loading}
            onClick={handleClick}

            // Define sizes of Order button "w" is width, "h" is height
            w={
                xl ? 270 :
                    lg ? 210 :
                        md ? 160 : 250
            }

            h={
                xl ? 65 :
                    lg ? 55 :
                        md ? 50 : 65
            }

            // This attribute provides props to typography component inside custom "BigHatButton" comp.
            typographyProps={
                md ? {
                    // If it's MD and higher, apply styles for H2
                    variant: "h2"
                } : {
                    // If it's XS, apply these styles
                    sx: {
                        fontSize: '25px'
                    }
                }
            }

            {...props} />
    )
}


// Export all styled components
export const BottomPlatform = defaultWrapper(StyledBottomPlatform)
export const CyberpukBanner = defaultWrapper(StyledCyberpukBanner)
export const StyledWrapper = defaultWrapper(StyledWrapperComponent)

// Export all ordinary components
export { OrderButton }