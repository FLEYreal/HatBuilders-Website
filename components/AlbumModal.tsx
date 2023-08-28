'use client'
import Image from "next/image";
import { useState } from "react";

import { Box } from "@mui/material";

function AlbumModal({ image }: { image: { 
    url: string, 
    alt: string, 
    height: number, 
    width: number 
} }) {

    const [isOpen, setIsOpen] = useState(false)

    function handleClose() {

    }

    return (
        <Box sx={{
            backdropFilter: 'blur(2px)',
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100svh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }} onClick={handleClose}>
            <Image src={image.url} width={image.width} height={image.height} alt={image.alt} />
        </Box>
    );
}

export default AlbumModal;