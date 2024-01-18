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

// Component
export function AlbumImage({
    imageProps,
    blurryProps,

    sx = {},
    isBlurry = false,

    ...props

}: AlbumImageInterface) {

    // Hook to define state of modal of image
    const { setIsOpen, setImage } = useContext(albumContext)
    const { src, alt, width, height } =
        imageProps ||
        (isBlurry && blurryProps ?
            blurryProps!.image :
            { src: '/', alt: 'Empty Image', width: 0, height: 0 }
        )

    function handleModal() {
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
