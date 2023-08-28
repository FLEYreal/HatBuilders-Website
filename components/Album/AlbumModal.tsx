import Image from "next/image";
import { useState, useEffect, useRef } from "react";

import { Box } from "@mui/material";
import { imageData } from "@/types/image";

import styles from './styles.module.scss'

function AlbumModal({ image, isOpen, setIsOpen }: {
    image: imageData,
    isOpen: boolean,
    setIsOpen: (value: (prevIsOpen: boolean) => boolean) => void
}) {

    const bgTag = useRef<HTMLElement>(null)
    const imageTag = useRef<HTMLImageElement>(null)

    function handleModal() {
        setIsOpen((prev: boolean) => !prev)
    }

    useEffect(() => {
        if(isOpen && imageTag && bgTag) {
            imageTag.current!.classList.add(styles.appearance_image);
            bgTag.current!.classList.add(styles.appearance_background);
        } 
        
        else if(!isOpen && imageTag && bgTag) {
            imageTag.current!.classList.remove(styles.appearance_image);
            bgTag.current!.classList.remove(styles.appearance_background);
        }
    }, [isOpen])

    const [originalDimensions, setOriginalDimensions] = useState({ width: 0, height: 0 });

    const maxScreenWidth = Math.floor(window.innerWidth * 0.8);
    const maxScreenHeight = Math.floor(window.innerHeight * 0.8);

    let displayedWidth = originalDimensions.width;
    let displayedHeight = originalDimensions.height;

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

    useEffect(() => {
        const img = new window.Image();
        img.src = image.src;

        img.onload = () => {
            setOriginalDimensions({ width: img.width, height: img.height });
        };
    }, [image.src]);


    return (
        <Box
            component='section'
            ref={bgTag}
            sx={{
                backdropFilter: 'blur(2px)',
                backgroundColor: 'rgba(0,0,0,0.75)',
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100vh',
                display: isOpen ? 'flex' : 'none',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 10
            }}
            onClick={handleModal}
        >
            <Image 
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

export default AlbumModal;
