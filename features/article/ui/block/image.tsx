// Basics
import NextImage from 'next/image'

// Config
import { ImageInterface } from '../../config/types';

/**
 * ArticleBlock: Block for images. Enables you to properly insert image into an article so it fit well!
 */
export const Image = ({
    src,
    alt = "Image from Article",
    style,

    ...props
}: ImageInterface) => {
    return (
        <NextImage src={src} alt={alt} style={{
            width: '100%',
            margin: "10px 0",
            height: 'auto',
            borderRadius: '0',

            ...style
        }}
            {...props}
        />
    )
}