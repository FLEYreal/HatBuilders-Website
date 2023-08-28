'use client'
import Image from "next/image";
import { useState, useEffect } from "react";

import { Box } from "@mui/material";
import { imageData } from "@/types/image";

function AlbumModal({ image, isOpen, setIsOpen }: {
    image: imageData,
    isOpen: boolean,
    setIsOpen: (value: (prevIsOpen: boolean) => boolean) => void
}) {

    function handleModal() {
        setIsOpen((prev: boolean) => !prev)
    }

    const [originalDimensions, setOriginalDimensions] = useState({ width: 0, height: 0 });

    const maxScreenHeight = Math.floor(window.innerHeight * 0.8);

    let displayedWidth = originalDimensions.width;
    let displayedHeight = originalDimensions.height;

    if (displayedHeight > maxScreenHeight) {
        const scale = maxScreenHeight / displayedHeight;
        displayedHeight = maxScreenHeight;
        displayedWidth *= scale;
    }

    useEffect(() => {
        const img = new window.Image();
        img.src = image.src;

        img.onload = () => {
            setOriginalDimensions({ width: img.width, height: img.height });
        };
    }, [image.src]);


    return (
        <Box sx={{
            backdropFilter: 'blur(2px)',
            backgroundColor: 'rgba(0,0,0,0.75)',
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100svh',
            display: isOpen ? 'flex' : 'none',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 10
        }} onClick={handleModal}>
            <Image 
                src={image.src} 
                width={displayedWidth} 
                height={displayedHeight} 
                alt={image.alt} 
                style={{display: 'inherit', borderRadius: '8px'}}
            />
        </Box>
    );
}

export default AlbumModal;