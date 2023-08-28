'use client'

// Basic imports
import Image from "next/image";
import { useState } from "react";

// Components
import AlbumModal from "./AlbumModal";

// Types
import { albumImage } from "@/types/image";

function AlbumImage({
    // Params for each image
    src,
    alt,
    height,
    width,
    style
}: albumImage) {

    // Hook to define state of modal of image
    const [isOpen, setIsOpen] = useState(false)

    // Handle
    function handleModal() {
        setIsOpen((prev: boolean) => !prev)
    }

    return (
        <>
            <AlbumModal
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                image={{
                    alt,
                    src,
                    height,
                    width
                }}
            />

            <Image
                alt={alt}
                src={src}
                height={height}
                width={width}
                style={{
                    cursor: 'pointer',
                    borderRadius: '8px',
                    ...style
                }}
                onClick={handleModal}
            />
        </>
    );
}

export default AlbumImage;