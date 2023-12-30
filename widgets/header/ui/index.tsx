// Material-UI
import { Box } from '@mui/material';

// Widgets
import { Wrapper } from '@/widgets/wrapper/ui';

// Insides
import { Logo, Buttons, SelectableTabs } from '..'

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
            background: 'rgba(0, 0, 0, 0.40)',
            boxShadow: '0px 4px 12px 2px rgba(0, 0, 0, 0.20)',
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
                <Logo/>

                {/* Center: Navigation Section */}
                <SelectableTabs/>

                {/* Right: Settings Seciton */}
                <Buttons/>
            </Wrapper >
        </Box >
    )
}