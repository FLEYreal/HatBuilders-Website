// Material-UI
import Album from "@/components/Album/Album";
import { Box } from "@mui/material";

import images from '@/public/en/lists/portfolio.json'

async function Screenshots() {
    return (
        <Box sx={{
            marginTop: '128px',
            padding: '10px',
            boxSizing: 'border-box',
            width: '100%',
            position: 'relative',
        }}>
            <Album
                sizes={{
                    width: 360,
                    height: 202.5
                }}

                images={images}
            />
        </Box>
    );
}

export default Screenshots;