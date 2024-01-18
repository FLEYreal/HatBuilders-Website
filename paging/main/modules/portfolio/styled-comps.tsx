'use client'

// Basics
import React, { createElement as e, useMemo, useState } from "react";
import { useRouter } from "next/navigation";

// Matertial-UI
import { Box, BoxProps } from "@mui/material";

// Emotion
import styled from "@emotion/styled";

// Widgets
import { HatButton, HatButtonInterface } from "@/widgets/button";
import { VkButton, DcButton } from "@/widgets/social-buttons";

// Features
import { Center, CenterInterface, Flex, FlexInterface, defaultWrapper } from "@/features/wrappers";
import { ArticleBlock } from "@/features/article";

// Shared
import { styledDefaultInterface, useResolution } from "@/shared/mui";

// Variables
import { albumBig, albumSmall } from ".";
import { AlbumImage } from "@/features/album";

// Assets
import example1 from '@/public/en/examples/example-1.webp'
import example2 from '@/public/en/examples/example-2.webp'
import example3 from '@/public/en/examples/example-3.webp'
import smallExample1 from '@/public/en/examples/example-1-small.webp'
import smallExample2 from '@/public/en/examples/example-2-small.webp'
import smallExample3 from '@/public/en/examples/example-3-small.webp'

// Interfaces
export interface PortfolioButtonInterface extends HatButtonInterface, styledDefaultInterface { }
export interface PortfolioExampleInterface extends FlexInterface, styledDefaultInterface { }
export interface ImageReflectionInterface extends BoxProps, styledDefaultInterface {
    src: string;
    sizes?: {
        w: number;
        h: number;
    };
}

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
    width: 100%;
    justify-content: space-between;

    // Dynamic styles
    ${({ def }) => def!.b('xs')} { 
        height: ${albumBig.xs.h + (albumSmall.xs.h / 2)}px;
        margin: 6vh 0;
    }
    ${({ def }) => def!.b('md')} { 
        height: ${albumBig.md.h + (albumSmall.md.h / 2)}px;
    }
    ${({ def }) => def!.b('lg')} {
        height: ${albumBig.lg.h}px;
        max-width: 873.16px;
        margin: 8vh 0;
    }
    ${({ def }) => def!.b('xl')} {
        height: ${albumBig.xl.h}px;
        max-width: 1600px;
    }
`

const StyledImageReflection = styled(({ sizes, src, def, ...props }: ImageReflectionInterface) => e(Box, props)) <ImageReflectionInterface>`

    position: absolute;
    opacity: 0.25;

    ${({ sizes }) => sizes ? `width: ${sizes.w}px;` : ''}
    ${({ sizes }) => sizes ? `height: ${sizes.h}px;` : ''}

    &::before {

        content: "";
        transform: scale(1, -1);
        position: absolute;
        mask: linear-gradient(transparent 20%, black 100%);

        background: url(${({ src }) => src}) no-repeat;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        
        ${({ sizes }) => sizes ? `width: ${sizes.w}px;` : ''}
        ${({ sizes }) => sizes ? `height: ${sizes.h}px;` : ''}

    }

`
export const ImageReflection = defaultWrapper<ImageReflectionInterface>(StyledImageReflection)


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
const PortfolioExampleComponent = React.memo(({ ...props }: PortfolioExampleInterface) => {

    // Get resolution breakpoint boolean status
    const { md, lg, xl } = useResolution();

    // Memoize result of calculations
    const breakpointMemo = useMemo(() => {
        if (xl) return 'xl';
        else if (lg) return 'lg';
        else if (md) return 'md';
        else return 'xs'
    }, [xl, lg, md]);

    return (
        <StyledPortfolioExample {...props}>

            {/* AlbumImage component is a clickable image, that opens image on full screen when clicked, just like Album */}
            <AlbumImage
                isBlurry
                blurryProps={{
                    image: {
                        src: example1.src,
                        alt: "Portfolio Example #1",
                        height: albumSmall[breakpointMemo].h,
                        width: albumSmall[breakpointMemo].w
                    },
                    srcSmall: smallExample1.src,
                    progress: { size: 30, thickness: 3 }
                }}
                sx={{
                    left: { xs: `calc(50% - (${albumSmall[breakpointMemo].w}px / 2))`, lg: 0 },
                    top: { xs: 0, lg: `${(albumBig[breakpointMemo].h - albumSmall[breakpointMemo].h) / 2}px` },
                    zIndex: 1,
                    opacity: { xs: 0.4, lg: 0.6 },
                    position: 'absolute'
                }}
            />

            {/* Image reflection creates good looking effect of reflection below image */}
            <ImageReflection
                src={example1.src}
                sizes={{ w: albumSmall[breakpointMemo].w, h: albumSmall[breakpointMemo].h }}
                sx={{
                    display: { xs: 'none', lg: 'block' },
                    top: ((albumBig[breakpointMemo].h - albumSmall[breakpointMemo].h) / 2) + albumSmall[breakpointMemo].h + 'px',
                    left: 0,
                    zIndex: -2,
                }}
            />

            <AlbumImage
                isBlurry
                blurryProps={{
                    image: {
                        src: example2.src,
                        alt: "Portfolio Example #2",
                        height: albumBig[breakpointMemo].h,
                        width: albumBig[breakpointMemo].w
                    },
                    srcSmall: smallExample2.src,
                    progress: { size: 30, thickness: 3 }
                }}
                sx={{
                    left: `calc(50% - (${albumBig[breakpointMemo].w}px / 2))`,
                    zIndex: 2,
                    position: 'absolute'
                }}
            />
            <ImageReflection
                src={example2.src}
                sizes={{ w: albumBig[breakpointMemo].w, h: albumBig[breakpointMemo].h }}
                sx={{
                    display: { xs: 'none', lg: 'block' },
                    top: albumBig[breakpointMemo].h + 'px',
                    left: `calc(50% - (${albumBig[breakpointMemo].w}px / 2))`,
                    zIndex: -1,
                    opacity: 0.4
                }}
            />

            <AlbumImage
                isBlurry
                blurryProps={{
                    image: {
                        src: example3.src,
                        alt: "Portfolio Example #3",
                        height: albumSmall[breakpointMemo].h,
                        width: albumSmall[breakpointMemo].w
                    },
                    srcSmall: smallExample3.src,
                    progress: { size: 30, thickness: 3 }
                }}
                sx={{
                    right: { xs: `calc(50% - (${albumSmall[breakpointMemo].w}px / 2))`, lg: 0 },
                    bottom: { xs: 0, lg: `${(albumBig[breakpointMemo].h - albumSmall[breakpointMemo].h) / 2}px` },
                    zIndex: 1,
                    opacity: { xs: 0.4, lg: 0.6 },
                    position: 'absolute'
                }}
            />
            <ImageReflection
                src={example3.src}
                sizes={{ w: albumSmall[breakpointMemo].w, h: albumSmall[breakpointMemo].h }}
                sx={{
                    display: { xs: 'none', lg: 'block' },
                    top: ((albumBig[breakpointMemo].h - albumSmall[breakpointMemo].h) / 2) + albumSmall[breakpointMemo].h + 'px',
                    right: 0,
                    zIndex: -2,
                }}
            />
        </StyledPortfolioExample>
    )
})
PortfolioExampleComponent.displayName = 'PortfolioExample'; // Display Name of a Component


export const ActionBar = () => {

    const [loading, setLoading] = useState(false)
    const router = useRouter()

    const handleClick = () => {

        // Set loading status to button & push to the portfolio page
        setLoading(true)
        router.push('/portfolio')

        // Loading is to long, enable button again
        setTimeout(() => {
            setLoading(false)
        }, 5000)
    }

    return (
        <ArticleBlock.Action sx={{ justifyContent: 'center', m: 0 }}>

            {/* Full Portfolio Button & Social Media Buttons */}
            <PortfolioButton loading={loading} onClick={handleClick} color="secondary" ns='home' name='full_portfolio' toUpperCase />
            <VkButton /><DcButton />

        </ArticleBlock.Action>
    )

}


// Export all styled components
export const StyledWrapper = defaultWrapper(StyledWrapperComponent)
export const PortfolioButton = defaultWrapper<PortfolioButtonInterface>(StyledPortfolioButton)
export const PortfolioExample = defaultWrapper<PortfolioExampleInterface>(PortfolioExampleComponent)