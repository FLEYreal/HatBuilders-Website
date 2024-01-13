// Matertial-UI
import { Box, } from "@mui/material";
import { SxProps } from '@mui/material/styles'

// Types
import { imageData } from "@/types/image";

// Components
import AlbumImage from '@/components/Album/AlbumImage'

export default async function Album(
    { images, sizes, limit, sx }:
    { images: imageData[], sizes: { width: number, height: number }, limit?: number, sx?: SxProps }) {


    return (
        <Box sx={{
            flexFlow: 'row nowrap',
            ...sx
        }}>
            {
                // Iterate each image from JSON array
                images.map((i: imageData, key: number) => {

                    // If it's index higher than limit - don't load images anymore
                    if(limit && key > limit - 1) {
                        return;
                    }

                    return (<AlbumImage
                        src={i.src}
                        key={key}
                        alt={i.alt}
                        style={{
                            marginTop: '10px',
                            marginRight: '10px'
                        }}

                        height={sizes.height}
                        width={sizes.width}

                    />)
                })
            }
        </Box>
    );
};