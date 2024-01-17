// Basics
import NextImage from 'next/image'

// Config
import { ImageInterface } from '../../types';
import { BlurryImage } from '@/widgets/blurry-image';

/**
 * ArticleBlock: Block for images. Enables you to properly insert image into an article so it fit well!
 */
export const Image = ({
    style,
    isBlurry = false,
    blurryProps,
    imageProps
}: ImageInterface) => {
    return (
        <>
            {
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