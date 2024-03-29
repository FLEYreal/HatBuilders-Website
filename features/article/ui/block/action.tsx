// Basics
import { cloneElement, Children, ReactElement, ReactNode } from 'react';

// Material-UI
import { Box } from '@mui/material';

// Config
import { ActionInterface } from '../../types';


/**
 * ArticleBlock: Block for creating action bars with buttons, widgets and other stuff.
 * Recommended to use only MUI components inside because otherwise, default styles might not be applied!
 */
export const Action = ({
    align = 'row', // Align components in a "row" or "column"?
    m = '16px', // Margins between items

    children,
    component = "section", // MUI's component prop. Defines what tag to use for wrapper

    ...props
}: ActionInterface) => {

    // Clone children and parse to apply custom styling
    const clones = Children.map(children, (child: ReactNode) => {

        const sx = (child as ReactElement).props.sx

        // Recommended to use only MUI components inside because otherwise, sx won't be supported
        return cloneElement(child as ReactElement, {
            sx: { marginRight: '12px', marginLeft: '0', ...sx }
        });

    });

    return (
        <Box
            component={component}

            {...props}

            sx={{
                display: 'flex',
                alignItems: 'start',
                justifyContent: 'start',
                flexFlow: align,
                m: m,
                ml: '0',
                ...props.sx
            }}
        >
            {clones}
        </Box>
    )
}
