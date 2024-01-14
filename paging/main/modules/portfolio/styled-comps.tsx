'use client'

// Basics
import { createElement as e } from "react";

// Matertial-UI
import { Box, Theme } from "@mui/material";

// Emotion
import styled from "@emotion/styled";
import { useTheme } from "@emotion/react";

// Libs
import hexToRgba from "hex-to-rgba";

// Widgets
import { HatButton, HatButtonInterface } from "@/widgets/button";

// Features
import { Center, CenterInterface, Flex, FlexInterface, defaultWrapper } from "@/features/wrappers";

// Shared
import { styledDefaultInterface, useResolution } from "@/shared/mui";

// Variables
import { albumBig, albumSmall } from ".";
import { AlbumImage } from "@/features/album";

// Assets
import example1 from '@/public/en/examples/example-1.webp'
import example2 from '@/public/en/examples/example-2.webp'
import example3 from '@/public/en/examples/example-3.webp'

// Interfaces
export interface PortfolioButtonInterface extends HatButtonInterface, styledDefaultInterface { }
export interface PortfolioExampleInterface extends FlexInterface, styledDefaultInterface { }

// Styled Components
const StyledWrapperComponent = styled(Center) <CenterInterface>`

    // Static styles
    height: 100vh;
    width: 100%;
    flex-flow: column nowrap;
`

const StyledPortfolioButton = styled(({ def, ...props }: PortfolioButtonInterface) => e(HatButton, props)) <PortfolioButtonInterface>`
    
    // Static styles
    font-weight: 600;

    // Dynamic styles
    ${({ def }) => def!.b('xs')} { height: 44px; padding: 0px 20px; }
    ${({ def }) => def!.b('md')} { height: 50px; padding: 0px 38px; }
    ${({ def }) => def!.b('lg')} { height: 56px; padding: 0px 55px; }
    ${({ def }) => def!.b('xl')} { height: 60px; padding: 0px 75px; }

`

const StyledPortfolioExample = styled(({ def, ...props }: PortfolioExampleInterface) => e(Flex, props)) <PortfolioExampleInterface>`

    // Static styles
    position: relative;
    margin: 8vh 0;
    width: 100%;
    justify-content: space-between;

    // Dynamic styles
    ${({ def }) => def!.b('xs')} { 
        height: ${albumBig.xs.h}px;    
    }
    ${({ def }) => def!.b('md')} { 
        height: ${albumBig.md.h}px;
    }
    ${({ def }) => def!.b('lg')} {
        height: ${albumBig.lg.h}px;
        max-width: 873.16px;
    }
    ${({ def }) => def!.b('xl')} {
        height: ${albumBig.xl.h}px;
        max-width: 1600px;
    }
`
/**
 * Renders a React component that displays 3 examples from portfolio in a flex container.
 * The height and width of the images are determined based on the current screen resolution.
 * 
 * You can simple insert the component, no attributes are required.
 * 
 * Known bug: Sizes of images don't change when the screen resolution changes. It only updates
 * in the case of reloading page.
 * 
 * @component
 * @example
 * return (
 *   <PortfolioExampleComponent />
 * )
 */
const PortfolioExampleComponent = ({ ...props }: PortfolioExampleInterface) => {

    // Get background color
    const {
        palette: {
            background: {
                default: bgColor
            }
        }
    } = useTheme() as Theme;

    // Get resolution breakpoint boolean status
    const { md, lg, xl } = useResolution();

    // Define what resolution to use
    const breakpoint: 'xs' | 'md' | 'lg' | 'xl' = (() => {
        if (xl) return 'xl';
        else if (lg) return 'lg';
        else if (md) return 'md';
        else return 'xs'
    })()

    return (
        <StyledPortfolioExample {...props}>

            <AlbumImage
                src={example1.src}
                alt={"Portfolio Example #1"}
                sx={{
                    left: 0,
                    zIndex: 1,
                    opacity: 0.6,
                    position: 'absolute'
                }}

                height={albumSmall[breakpoint].h}
                width={albumSmall[breakpoint].w}
            />
            <Box sx={{
                width: albumSmall[breakpoint].w,
                height: albumSmall[breakpoint].h,
                position: 'absolute',
                top: ((albumBig[breakpoint].h - albumSmall[breakpoint].h) / 2) + albumSmall[breakpoint].h + 'px',
                left: 0,
                opacity: 0.6,
                zIndex: -2,

                '&::before': {
                    transform: 'scale(1, -1)',
                    position: 'absolute',
                    content: '""',
                    background: `linear-gradient(180deg, ${bgColor} 10%, ${hexToRgba(bgColor, 0.85)} 100%), url(${example1.src}), lightgray 50% / cover no-repeat`,
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    width: albumSmall[breakpoint].w,
                    height: albumSmall[breakpoint].h,
                }
            }} />

            <AlbumImage
                src={example2.src}
                alt={"Portfolio Example #2"}
                sx={{
                    left: `calc(50% - (${albumBig[breakpoint].w}px / 2))`,
                    zIndex: 2,
                    position: 'absolute'
                }}

                height={albumBig[breakpoint].h}
                width={albumBig[breakpoint].w}
            />
            <Box sx={{
                width: albumBig[breakpoint].w,
                height: albumBig[breakpoint].h,
                position: 'absolute',
                top: albumBig[breakpoint].h + 'px',
                left: `calc(50% - (${albumBig[breakpoint].w}px / 2))`,
                opacity: 1,
                zIndex: -1,

                '&::before': {
                    transform: 'scale(1, -1)',
                    position: 'absolute',
                    content: '""',
                    background: `linear-gradient(180deg, ${bgColor} 10%, ${hexToRgba(bgColor, 0.85)} 100%), url(${example2.src}), lightgray 50% / cover no-repeat`,
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    width: albumBig[breakpoint].w,
                    height: albumBig[breakpoint].h,
                }
            }} />

            <AlbumImage
                src={example3.src}
                alt={"Portfolio Example #3"}
                sx={{
                    right: 0,
                    zIndex: 1,
                    opacity: 0.6,
                    position: 'absolute'
                }}

                height={albumSmall[breakpoint].h}
                width={albumSmall[breakpoint].w}
            />
            <Box sx={{
                width: albumSmall[breakpoint].w,
                height: albumSmall[breakpoint].h,
                position: 'absolute',
                top: ((albumBig[breakpoint].h - albumSmall[breakpoint].h) / 2) + albumSmall[breakpoint].h + 'px',
                right: 0,
                opacity: 0.6,
                zIndex: -2,

                '&::before': {
                    transform: 'scale(1, -1)',
                    position: 'absolute',
                    content: '""',
                    background: `linear-gradient(180deg, ${bgColor} 10%, ${hexToRgba(bgColor, 0.85)} 100%), url(${example3.src}), lightgray 50% / cover no-repeat`,
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    width: albumSmall[breakpoint].w,
                    height: albumSmall[breakpoint].h,
                }
            }} />

        </StyledPortfolioExample>
    )
}

// Export all styled components
export const StyledWrapper = defaultWrapper(StyledWrapperComponent)
export const PortfolioButton = defaultWrapper<PortfolioButtonInterface>(StyledPortfolioButton)
export const PortfolioExample = defaultWrapper<PortfolioExampleInterface>(PortfolioExampleComponent)