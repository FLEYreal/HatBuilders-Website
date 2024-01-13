// Basic Imports
import { useState, useEffect, useRef } from "react";
import Image, { ImageProps } from "next/image";

// Material-UI
import { Box } from "@mui/material";

// Styles
import styles from './styles.module.scss'

export function AlbumModal({ image, isOpen, setIsOpen }: {

    // Data about images: src, alt, height, width
    image: ImageProps,

    // useState consts, define a state of modal, either on or off
    isOpen: boolean,
    setIsOpen: (value: (prevIsOpen: boolean) => boolean) => void

}) {

    // Get components of the page with "useRef"
    const bgTag = useRef<HTMLElement>(null)
    const imageTag = useRef<HTMLImageElement>(null)

    // dimensions of the future image
    const [originalDimensions, setOriginalDimensions] = useState({ width: 0, height: 0 });

    // Limit of image's dimensions so it didn't get bigger than user's screen
    const maxScreenWidth = Math.floor(window.innerWidth * 0.8);
    const maxScreenHeight = Math.floor(window.innerHeight * 0.8);

    // A size in fact
    let displayedWidth = originalDimensions.width;
    let displayedHeight = originalDimensions.height;

    // Setup scale
    if (displayedHeight > maxScreenHeight) {
        const scale = maxScreenHeight / displayedHeight;
        displayedHeight = maxScreenHeight;
        displayedWidth *= scale;
    }

    if (displayedWidth > maxScreenWidth) {
        const scale = maxScreenWidth / displayedWidth;
        displayedWidth = maxScreenWidth;
        displayedHeight *= scale;
    }

    // useEffect to animate image's appearance
    useEffect(() => {
        if (isOpen && imageTag && bgTag) {
            imageTag.current!.classList.add(styles.appearance_image);
            bgTag.current!.classList.add(styles.appearance_background);
        }

        else if (!isOpen && imageTag && bgTag) {
            imageTag.current!.classList.remove(styles.appearance_image);
            bgTag.current!.classList.remove(styles.appearance_background);
        }
    }, [isOpen])

    // useEffect to set sizes of the image
    useEffect(() => {
        const img: HTMLImageElement = new window.Image();
        img.src = image.src as string;

        img.onload = () => {
            setOriginalDimensions({ width: img.width, height: img.height });
        };
    }, [image.src]);

    // Function to turn on/off modal
    function handleModal() {
        setIsOpen((prev: boolean) => !prev)
    }

    return (
        <Box
            component='section'
            ref={bgTag}

            // Styles of the background
            sx={{
                backdropFilter: 'blur(4px)',
                backgroundColor: 'rgba(0,0,0,0.75)',
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100vh',
                display: isOpen ? 'flex' : 'none',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 100
            }}

            // Turn off image if clicked
            onClick={handleModal}
        >
            <Image

                // Setup parameters of the image from outside's params
                ref={imageTag}
                src={image.src}
                width={displayedWidth}
                height={displayedHeight}
                alt={image.alt}
                style={{ display: 'inherit', borderRadius: '8px' }}

            />
        </Box>
    );
}
