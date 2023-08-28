import { Box, } from "@mui/material";
import { SxProps } from '@mui/material/styles'

import { ImageProps } from "next/image";
import { useRouter } from "next/navigation";
import Image from "next/image";

import { imageData } from "@/types/image";

export default async function Album({ images, sizes, sx }: { images: imageData[], sizes: { width: number, height: number }, sx?: SxProps }) {



    return (
        <Box sx={{
            flexFlow: 'row nowrap',
            ...sx
        }}>
            {
                images.map((i: imageData, key: number) => (
                    <Image src={i.src} key={key} alt={i.alt} style={{
                        borderRadius: '8px',
                        marginTop: '10px',
                        marginRight: '10px',
                        cursor: 'pointer'
                    }}

                    height={sizes.height}
                    width={sizes.width}

                    />
                ))
            }
        </Box>
    );
};