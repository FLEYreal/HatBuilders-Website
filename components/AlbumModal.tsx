'use client'
import Image from "next/image";
import { useState } from "react";

import { Box } from "@mui/material";
import { imageData } from "@/types/image";

function AlbumModal({ image }: { image: imageData }) {

    const [isOpen, setIsOpen] = useState(false)

    function handleModal() {
        setIsOpen(prev => !prev)
    }

    return (
        <Box sx={{
            backdropFilter: 'blur(2px)',
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100svh',
            display: isOpen ? 'flex' : 'none',
            alignItems: 'center',
            justifyContent: 'center'
        }} onClick={handleModal}>
            <Image 
                src={image.src} 
                width={image.width} 
                height={image.height} 
                alt={image.alt} 
                style={{display: 'inherit'}}
            />
        </Box>
    );
}

export default AlbumModal;