// Basics
import Image from 'next/image';
import Link from 'next/link';

// Material-UI
import { Box } from '@mui/material';

// Assets
import icon from '@/public/images/logo.png'

/**
 * Logo of the project with the name switching to some funky phrases from time to time
 */
export function Logo() {

    // Random funky phrases appearing instead of name near logo in the header
    const phrases: string[] = [
        'HatBuilders', 'HatBuilders', 'HatBuilders',
        'HatBuilders', 'HatBuilders', 'HatBuilders',
        'Innovative', 'Caring', 'Creative',
        'Workaholics?', 'Inventive', 'Long Story Short: The Best',
        'Curios', 'Fast, Cheap, High-Quality', '(〃￣︶￣)人(￣︶￣〃)',
        'Rare Phrase?!', 'Sample Text', 'Just HatBuilders',
        'Building the Future', '', 'HeadBuilders',
        'HatBuilders', 'Responsible!', 'Ответственные!',
        'Unique', 'Insane Builders, Careful!', 'Bright like a sun!'
    ]
    const randomPhrase: string = phrases[Math.floor(Math.random() * (phrases.length))]


    return (
        <Box>
            <span title='Return to Main Page'>
                <Link href='/' style={{
                    display: 'flex',
                    alignItems: 'center',
                    fontSize: '14px',
                    color: '#fff',
                    textDecoration: 'none'
                }}>
                    {/* Wrapper for icon to use SX styling for sizes */}
                    <Box sx={{
                        width: '40px',
                        height: '40px',
                        marginRight: '12px'
                    }}>
                        <Image src={icon} alt='HatBuilders' style={{
                            width: 'inherit',
                            height: 'inherit',
                            borderRadius: '100%'
                        }} />
                    </Box>
                    {randomPhrase}
                </Link>
            </span>
        </Box>
    )
}