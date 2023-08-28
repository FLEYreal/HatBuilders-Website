'use client'
import AlbumModal from "./AlbumModal";
import Image from "next/image";
import { albumImage } from "@/types/image";
import { useState } from "react";

function AlbumImage({
    src,
    alt,
    height,
    width,
    style
}: albumImage) {

    const [isOpen, setIsOpen] = useState(false)

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