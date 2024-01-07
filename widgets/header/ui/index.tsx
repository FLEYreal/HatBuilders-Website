// Material-UI
import { Box } from '@mui/material';

// Features
import { StepfulTabs, StepfulTabsInterface } from '@/features/stepful-display'
import { Wrapper } from '@/features/wrappers';


// Insides
import { Logo, Buttons } from '..'

// Icons
import HomeIcon from '@mui/icons-material/Home';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import WorkIcon from '@mui/icons-material/Work';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import CelebrationIcon from '@mui/icons-material/Celebration';

const moduleTheme: StepfulTabsInterface['moduleTheme'] = [
    {
        color: 'secondary',
        translation: 'main',
        icon: <HomeIcon />
    },
    {
        color: 'primary',
        translation: 'about',
        icon: <LocalFireDepartmentIcon />
    },
    {
        color: 'secondary',
        translation: 'portfolio',
        icon: <WorkIcon />
    },
    {
        color: 'primary',
        translation: 'hiring',
        icon: <BusinessCenterIcon />
    },
    {
        color: 'secondary',
        translation: 'order',
        icon: <CelebrationIcon />
    },
]

/**
 * Header Component of the page
 */
export function Header() {

    return (
        // Header Container
        <Box component='header' sx={{
            position: 'fixed',
            top: '0',
            left: '0',
            width: '100%',
            height: '56px',
            background: 'rgba(0, 0, 0, 0.4)',
            boxShadow: '0px 4px 12px 2px rgba(0, 0, 0, 0.25)',
            backdropFilter: 'blur(8px)',
            display: 'flex',
            alignContent: 'center',
            justifyContent: 'space-between',
            zIndex: '1000'
        }}>

            {/* Wrapper setups proper width */}
            <Wrapper sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
            }}>

                {/* Left: Logo Section */}
                <Logo />

                {/* Center: Navigation Section */}
                <Box sx={{
                    display: {
                        xs: 'none',
                        lg: 'block'
                    }
                }}>
                    <StepfulTabs
                        ns="header"
                        moduleTheme={moduleTheme}

                        sxChild={{ color: 'rgba(255, 255, 255, 0.9)' }}
                    />
                </Box>
                <Box>

                </Box>

                {/* Right: Settings Seciton */}
                <Buttons moduleTheme={moduleTheme} />

            </Wrapper >
        </Box >
    )
}