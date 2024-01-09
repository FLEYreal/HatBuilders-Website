'use client'

// Basics
import Image from 'next/image';
import Link from 'next/link';

// Material-UI
import { Box, Typography } from '@mui/material';

// Assets
import icon from '@/public/images/logo.webp'

/**
 * Logo of the project with the name switching to some funky phrases from time to time
 */
export function Logo() {

    // Random funky phrases appearing instead of name near logo in the header
    const short_phrases: string[] = [
        'HatBuilders', 'HatBuilders', 'HatBuilders',
        'HatBuilders', 'HatBuilders', 'HatBuilders',
        'Innovative', 'Creative', 'Inventive', 
        'Curios', 'Sample Text', 'HeadBuilders', 
    ]

    return (
        <Box>
            <span title='Return to Main Page'>
                <Link href='/' style={{
                    display: 'flex',
                    alignItems: 'center',
                    color: '#fff',
                    textDecoration: 'none'
                }}>
                    {/* Wrapper for icon to use SX styling for sizes */}
                    <Box sx={{
                        width: {
                            xs: '36px',
                            xl: '40px',
                        },
                        height: {
                            xs: '36px',
                            xl: '40px',
                        },
                        marginRight: '12px'
                    }}>

                        {/* Logo */}
                        <Image src={icon} alt='HatBuilders' style={{
                            width: 'inherit',
                            height: 'inherit',
                            borderRadius: '100%'
                        }} />

                    </Box>

                    {/* For Desktop */}
                    <Typography sx={{
                        fontSize: { xs: '12px', xl: '15px' }
                    }}>
                        {short_phrases[Math.floor(Math.random() * (short_phrases.length))]}
                    </Typography>
                </Link>
            </span>
        </Box>
    )
}