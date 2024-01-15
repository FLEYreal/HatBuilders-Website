'use client'

// Basics
import Image, { ImageProps } from "next/image";
import { useContext } from "react";

// Material-UI
import { SxProps, Box } from "@mui/material";

// Components
import { albumContext } from "./provider";

// Interfaces
export interface AlbumImageInterface extends ImageProps {
    sx?: SxProps;
}

// Component
export function AlbumImage({

    // Params for each image
    src,
    alt,
    sx = {},

    width,
    height,

    ...props

}: AlbumImageInterface) {

    // Hook to define state of modal of image
    const { setIsOpen, setImage } = useContext(albumContext)

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
        <Box sx={{
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
            <Image
                alt={alt}
                src={src}

                onClick={handleModal}

                width={width}
                height={height}

                {...props}
            />
        </Box>
    );
}
