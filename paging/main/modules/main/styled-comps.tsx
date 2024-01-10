'use client'

// Basics
import { createElement as e } from "react";

// Material-UI
import { Box } from "@mui/material";

// Emotion
import styled from "@emotion/styled";

// Widgets
import { BigHatButton, BigHatButtonInterface } from "@/widgets/button";

// Features
import { Flex, defaultWrapper } from "@/features/wrappers";
import { FlexInterface } from "@/features/wrappers/types";

// Shared
import { useResolution } from "@/shared/mui";

// Types
import { styledDefaultInterface } from "@/shared/mui";

// Assets
import cyberpukPng from '@/public/images/Cyberpuk2.png'


// COMPONENTS
const StyledBottomPlatform = styled(({ def, ...props }: FlexInterface) => e(Flex, props)) <styledDefaultInterface>`
    position: absolute;
    height: 125px;
    bottom: 0;
    left: 0;
    background: ${({ def }) => def && def.t.palette.mode === 'dark' ? 'linear-gradient(180deg, #121212 0%, #070707 100%)' : '#ffffff'};
    box-shadow: 0px 6px 0px 0px ${({ def }) => def && def.t.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.15) inset' : 'rgba(0, 0, 0, 0.15) inset'};
`

const StyledCyberpukBanner = styled(({ def, ...props }: styledDefaultInterface) => e(Box, props)) <styledDefaultInterface>`
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

const OrderButton = (props: BigHatButtonInterface) => {

    const { md, lg, xl } = useResolution()

    return (
        <BigHatButton color="secondary" name="order"

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

            typographyProps={
                md ? {
                    variant: "h2"
                } : {
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

// Export all ordinary components
export { OrderButton }