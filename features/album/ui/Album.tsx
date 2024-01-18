// Basics
import { ImageProps } from "next/image";

// Matertial-UI
import { Box, } from "@mui/material";
import { SxProps } from '@mui/material/styles'

// Widgets
import { BlurryImageInterface } from "@/widgets/blurry-image";

// Insides
import { AlbumImage } from './AlbumImage'

// Interfaces
export interface AlbumInterface {
    images: BlurryImageInterface[];
    sizes: { width: number, height: number };
    limit?: number;
    sx?: SxProps;
    childSx?: SxProps;
}

// Component

/**
 * Renders an album, collection of images with flex
 * @param {ImageProps[]} images - an array of image objects
 * @param {{ width: number, height: number }} sizes - the dimensions of each image
 * @param {number} [limit] - the maximum number of images to render
 * @param {SxProps} [sx] - additional CSS styles for the component
 * @param {SxProps} [childSx] - additional CSS styles for each child element
 * @returns {JSX.Element}
 */
export function Album({ images, sizes, limit, sx, childSx }: AlbumInterface) {

    return (
        <Box sx={{
            flexFlow: 'row nowrap',
            ...sx
        }}>
            {
                // Iterate each image from JSON array
                images.map((i: BlurryImageInterface, key: number) => {

                    // If it's index higher than limit - don't load images anymore
                    if (limit && key > limit - 1) {
                        return;
                    }

                    return (<AlbumImage
                        isBlurry
                        blurryProps={{
                            ...i,

                            image: {
                                width: sizes.width,
                                height: sizes.height,
                                ...i.image
                            }
                        }}
                        key={key}
                        sx={{
                            ...childSx
                        }}

                    />)
                })
            }
        </Box>
    );
};