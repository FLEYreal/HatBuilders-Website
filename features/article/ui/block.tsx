// Basics
import React, { ReactElement, ReactNode } from 'react';
import Image from 'next/image'

// Material-UI
import { Typography, BoxProps, Divider, Box } from '@mui/material';

// Config
import {
    ArticleBlockInterface,
    TextInterface,
    ActionInterface,
    ImageInterface,
    ActionDividerInterface
} from '../config/types';

// Components

/**
 * General Component for creating blocks of the Article
 * 
 * - ArticleBlock.Text : Create a text block
 * - ArticleBlock.Action : Create an action block with buttons and other components
 * - ArticleBlock.Image : Create a block with an image
 */
function ArticleBlock({ children }: ArticleBlockInterface) {
    return (<>{children}</>)
}

/**
 * ArticleBlock: Block for titles, paragraphs and other type of text
 */
const Text: React.FC<TextInterface> = ({
    variant = "h3",
    component = "p",
    children,
    sx
}: TextInterface) => {

    // Define tag of the component relatively variant of the block
    const comp: BoxProps['component'] = component || (() => {
        switch (variant) {
            case 'h1': { return 'h1' }
            case 'h2': { return 'h2' }
            case 'h3': { return 'p' }
            case 'h4': { return 'p' }
            case 'h5': { return 'span' }
            case 'h6': { return 'span' }
            default:
                return 'p'
        }
    })()

    return (
        <Typography
            component={comp}
            variant={variant || 'h3'}
            sx={{
                ...sx
            }}
        >
            {children}
        </Typography>
    );
}

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

/**
 * ArticleBlock: Block for images. Enables you to properly insert image into an article so it fit well!
 */
const Picture = ({
    src,
    alt = "Image from Article"
}: ImageInterface) => {
    return (
        <Image src={src} alt={alt} style={{
            width: '100%',
            margin: "10px 0",
            borderRadius: '0'
        }} />
    )
}

/**
 * ArticleBlock.Action: Custom divider that doesn't differ much from MUI version, it's just fits code style
 */
const ArticleDivider = ({
    sx,
    component = 'hr',
    light = true,
    variant = 'fullWidth'
}: ActionDividerInterface) => {
    return (<Divider
        sx={sx}
        component={component}
        light={light}
        variant={variant}
    />)
}

// Assign to Article blocks
ArticleBlock.Text = Text
ArticleBlock.Action = Action
ArticleBlock.Image = Picture

// Asign to Action block
Action.Divider = ArticleDivider

// Export a single Article block
export { ArticleBlock };