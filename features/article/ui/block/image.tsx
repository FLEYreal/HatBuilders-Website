// Basics
import React from 'react';
import Image from 'next/image'

// Config
import { ImageInterface } from '../../config/types';

/**
 * ArticleBlock: Block for images. Enables you to properly insert image into an article so it fit well!
 */
export const Picture = ({
    src,
    alt = "Image from Article"
}: ImageInterface) => {
    return (
        <Image src={src} alt={alt} style={{
            width: '100%',
            margin: "10px 0",
            height: 'auto',
            borderRadius: '0'
        }} />
    )
}