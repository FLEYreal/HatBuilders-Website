// Basics
import Image from 'next/image';
import Link from 'next/link';

// Material-UI
import { Box, Typography } from '@mui/material';

// Assets
import icon from '@/public/images/logo.png'

/**
 * Logo of the project with the name switching to some funky phrases from time to time
 */
export function Logo() {

    // Random funky phrases appearing instead of name near logo in the header
    const short_phrases: string[] = [
        'HatBuilders', 'HatBuilders', 'HatBuilders',
        'HatBuilders', 'HatBuilders', 'HatBuilders',
        'Innovative', 'Caring', 'Creative',
        'Workaholics?', 'Inventive', 'Curios',
        'Rare Phrase?!', 'Sample Text', 'HeadBuilders', 
        'HatBuilders', 'Responsible!', 'Unique',
    ]
    const long_phrases: string[] = [
        'Bright like a sun!', 'Insane Builders, Careful!',
        'Just HatBuilders', '(〃￣︶￣)人(￣︶￣〃)',
        'Long Story Short: The Best', 'Ответственные!',
        'Building the Future', 'Fast, Cheap, High-Quality',
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
                        fontSize: '15px',
                        display: { xs: 'none', xl: 'block' }
                    }}>
                        {[...long_phrases, ...short_phrases][Math.floor(Math.random() * ([...long_phrases, ...short_phrases].length))]}
                    </Typography>

                    {/* For Tablet */}
                    <Typography sx={{
                        fontSize: '12px',
                        display: { xs: 'none', lg: 'block', xl: 'none' }
                    }}>
                        {short_phrases[Math.floor(Math.random() * (short_phrases.length))]}
                    </Typography>
                </Link>
            </span>
        </Box>
    )
}