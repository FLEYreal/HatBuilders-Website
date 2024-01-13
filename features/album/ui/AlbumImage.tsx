'use client'

// Basic imports
import Image, { ImageProps } from "next/image";
import { useContext } from "react";

// Components
import { albumContext } from "./provider";

// Styles
import styles from './styles.module.scss'

export function AlbumImage({

    // Params for each image
    src,
    alt,
    style = {},

    ...props

}: ImageProps) {

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
                style={{
                    cursor: 'pointer',
                    borderRadius: '8px',
                    ...style
                }}

                className={styles.hover}
                onClick={handleModal}

                {...props}
            />
        </>
    );
}
