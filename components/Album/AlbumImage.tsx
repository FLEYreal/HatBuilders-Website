'use client'

// Basic imports
import Image from "next/image";
import { useContext } from "react";

// Components
import { albumContext } from "@/components/Providers/AldumProvider";

// Types
import { albumImage } from "@/types/image";

// Styles
import styles from './styles.module.scss'

function AlbumImage({
    // Params for each image
    src,
    alt,
    height,
    width,
    style = {}
}: albumImage) {

    // Hook to define state of modal of image
    const { setIsOpen, setImage } = useContext(albumContext)

    function handleModal() {
        setIsOpen((prev: boolean) => !prev)
        setImage({
            alt: alt,
            src: src
        })
    }

    return (
        <>
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
                className={styles.hover}
                onClick={handleModal}
            />
        </>
    );
}

export default AlbumImage;