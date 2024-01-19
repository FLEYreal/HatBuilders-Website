// Basics
import NextImage from 'next/image'

// Widgets
import { BlurryImage } from '@/widgets/blurry-image';

// Insides
import { ImageInterface } from '../../types';


/**
 * ArticleBlock: Block for images. Enables you to properly insert image into an article so it fit well!
 */
export const Image = ({
    style, // Styles provided to image
    isBlurry = false, // Wether to use "next/image" component or custom blurry image component
    blurryProps, // Properties if it's blurry image
    imageProps // Properties if it's "next/image" component
}: ImageInterface) => {
    return (
        <>
            {
                // Define wether to use regular "next/image" component or custom blurry component.
                isBlurry && blurryProps ?
                    <BlurryImage
                        style={{
                            width: '100%',
                            margin: "10px 0",
                            height: 'auto',
                            borderRadius: '0',

                            ...style
                        }}

                        {...blurryProps}
                    />
                    :
                    imageProps ?
                        <NextImage
                            style={{
                                width: '100%',
                                margin: "10px 0",
                                height: 'auto',
                                borderRadius: '0',

                                ...style
                            }}
                            {...imageProps}
                        />
                        :
                        // If no props are passed to the component, just give and error message.
                        <div style={{
                            width: '100%',
                            padding: '10px',
                            color: 'red',
                            border: '1px solid red'
                        }}>
                            Image properties were not provided!
                        </div>
            }
        </>
    )
}