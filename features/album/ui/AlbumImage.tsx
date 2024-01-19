'use client'

// Basics
import Image, { ImageProps } from "next/image";
import { useContext } from "react";

// Material-UI
import { SxProps, Box } from "@mui/material";

// Components
import { albumContext } from "./provider";
import { BlurryImageInterface, BlurryImage } from "@/widgets/blurry-image";


// Interfaces
export interface AlbumImageInterface {
    sx?: SxProps;
    isBlurry: boolean;
    imageProps?: ImageProps;
    blurryProps?: BlurryImageInterface;
}


/**
 * An album image. It's main feature that when you click on an image, it scales up to let you
 * see it better.
 * 
 * @param {SxProps} sx - Override or extend the styles applied to the component.
 * @param {boolean} isBlurry - Whether to display the blurry version of the image.
 * @param {ImageProps} imageProps - Props passed to the Next/Image component.
 * @param {BlurryImageInterface} blurryProps - Props passed to the BlurryImage component.
 * @returns {JSX.Element}
 */
export function AlbumImage({

    // Define what type of image to use
    isBlurry = false,

    // Props to image
    imageProps,
    blurryProps,

    // Styling to wrapper
    sx = {},

    ...props

}: AlbumImageInterface) {

    // CONTEXTS
    const { setIsOpen, setImage } = useContext(albumContext) // Hook to define state of modal of image
    
    
    // CUSTOM VARIABLES & HOOKS
    const { src, alt, width, height } =
        imageProps ||
        (isBlurry && blurryProps ?
            blurryProps!.image :
            { src: '/', alt: 'Empty Image', width: 0, height: 0 }
        )

    
    // HANDLERS
    const handleModal = () => {
        setImage({
            alt: alt,
            src: src,
            width: width,
            height: height
        })
        setIsOpen((prev: boolean) => !prev)
    }

    return (
        <Box {...props} sx={{
            cursor: 'pointer',
            transition: 'all 0.2s ease',
            display: 'inline-block',
            width: width,
            height: height,

            '&:hover': {
                boxShadow: '0px 0px 32px 0px rgba(0, 0, 0, 0.7)',
                transform: 'scale(1.1)',
                opacity: 1
            },

            ...sx
        }}>
            {
                // Define wether to use regular "next/image" component or custom blurry component.
                isBlurry && blurryProps ?
                    <BlurryImage

                        onClick={handleModal}

                        {...blurryProps}
                    />
                    :
                    imageProps ?

                        /* eslint-disable-next-line jsx-a11y/alt-text */
                        <Image

                            onClick={handleModal}

                            {...imageProps}
                        />
                        :
                        // If no props are passed to the component, just give and error message.
                        <span style={{
                            padding: '10px',
                            color: 'red',
                        }}>
                            Image properties were not provided!
                        </span>
            }
        </Box>
    );
}
