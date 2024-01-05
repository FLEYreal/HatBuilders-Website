// Basics
import React, { ReactElement, ReactNode } from 'react';

// Material-UI
import { Box } from '@mui/material';

// Config
import { ActionInterface } from '../../../config/types';

/**
 * ArticleBlock: Block for creating action bars with buttons, widgets and other stuff.
 * Recommended to use only MUI components inside because otherwise, default styles might not be applied
 */
const Action = ({
    align = 'row',
    m = '16px',

    children,
    component = "section",
    sx = {}
}: ActionInterface) => {

    // Clone children and parse to apply custom styling
    const clones = React.Children.map(children, (child: ReactNode) => {

        // Recommended to use only MUI components inside because otherwise, sx won't be supported
        return React.cloneElement(child as ReactElement, { sx: { marginRight: '10px', marginLeft: '0' } });

    });

    return (
        <Box component={component} sx={{
            display: 'flex',
            alignItems: 'start',
            justifyContent: 'start',
            flexFlow: `${align} nowrap`,
            m: m,
            ml: '0',
            ...sx
        }}>
            {clones}
        </Box>
    )
}


// Sub-Components
import { ArticleDivider } from './divider'

// Assign Sub-Components to Parent
Action.Divider = ArticleDivider

// Export Parent
export { Action }