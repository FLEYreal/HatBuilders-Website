'use client'

// Basics
import React, { useState, useCallback } from 'react';
import Image, { ImageProps } from 'next/image'

// Material-UI
import { Box, BoxProps, SxProps } from '@mui/material'
import CircularProgress, { circularProgressClasses, CircularProgressProps } from '@mui/material/CircularProgress'

// Shared
import { styledDefaultInterface } from '@/shared/mui'


/**
 * Interface for BlurryImage component
 * 
 * @interface BlurryImageInterface
 * @extends {BoxProps}
 * @extends {styledDefaultInterface}
 */
export interface BlurryImageInterface extends BoxProps, styledDefaultInterface {
    srcSmall: string;
    image: ImageProps;
    progress?: CircularProgressProps;
    ref?: React.Ref<HTMLDivElement>;
    sx: SxProps;
}


/**
 * Component made to display Blurry small image before full high quality image has fully loaded.
 * 
 * @param {ImageProps} image - Props for the next/image component inside Box wrapper
 * @param {CircularProgressProps} progress - Props for the loader that shows in the middle when image's loading
 * @param {string} srcSmall - The small image src, the low quality image that will be display before main loaded
 * @param {BoxProps & styledDefaultInterface} sx - Styles (SX prop from MUI) for the Box component
 * @param {BoxProps} props - Provide rest of the props for wrapper
 * @returns {JSX.Element}
 * 
 * @example
 *  <CyberpukBanner
 * 
        image={{ 
            fill: true, 
            unoptimized: true,
            alt: "Background Cyberpunk Banner",
            src: cyberpuk
        }}

        srcSmall={cyberpukSmall.src}

    />
 */
const BlurryImage =
    React.memo(
        React.forwardRef<HTMLDivElement, BlurryImageInterface>(
            (

                // Props to be passed to component
                {
                    image,

                    progress,
                    progress: {
                        sx: progressSx = {},
                        size = 50
                    } = {},

                    srcSmall,
                    sx = {},

                    ...props
                }: BlurryImageInterface,

                // Reference to the Box component
                ref?: React.Ref<HTMLDivElement>

            ) => {

                
                // STATES
                const [loaded, setLoaded] = useState(() => false); // Indicates wether main image is loaded

                
                // HANDLERS
                const handleLoad = useCallback(() => { // Memoized handler to determine wether image loaded
                    setLoaded(true);
                }, []);

                
                return (

                    // Wrapper that contains the Blurry image as background.
                    // When main image will be fully loaded, it will be smoothly displayed across background image.
                    <Box
                        ref={ref}
                        sx={{
                            position: 'relative',
                            background: loaded ? 'none' : `url(${srcSmall}) no-repeat center center fixed`,
                            transition: 'all 0.4s ease-in-out',
                            backgroundSize: 'cover',
                            height: image.height || '100%',
                            width: image.width || '100%',
                            ...sx
                        }}
                        {...props}
                    >

                        {/* eslint-disable-next-line jsx-a11y/alt-text */}
                        <Image
                            onLoad={handleLoad}
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                objectPosition: 'center',
                                transition: 'opacity 0.4s ease-in-out',
                                opacity: loaded ? 1 : 0
                            }}
                            {...image}
                        />

                        {
                            !loaded && <CircularProgress

                                thickness={4}

                                // Parse potential attributes to override existing
                                {...progress}

                                // Override default styles for item to make it more visible
                                sx={{

                                    position: 'absolute',
                                    top: `calc(50% - ${size}px)`,
                                    left: `calc(50% - ${size}px)`,

                                    [`& .${circularProgressClasses.circle}`]: {
                                        opacity: 0.5,
                                        color: '#fff'
                                    },

                                    // If progress has SX props, they will sum with existing ones
                                    ...progressSx
                                }}

                                size={size}
                            />
                        }

                    </Box>
                );
            }
        )
    )

export default BlurryImage
