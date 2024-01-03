// Basics
import React, { ReactNode } from 'react';

// Material-UI
import { Typography, BoxProps } from '@mui/material';

// Config
import {
    TextInterface,
    ActionInterface,
    ImageInterface
} from '../config';

// Components

/**
 * General Component for creating blocks of the Article
 * 
 * - ArticleBlock.Text : Create a text block
 * - ArticleBlock.Action : Create an action block with buttons and other components
 * - ArticleBlock.Image : Create a block with an image
 */
function ArticleBlock({ children }: { children: ReactNode }) {
    return (<>{children}</>)
}

/**
 * ArticleBlock: Block for titles, paragraphs and other type of text
 */
const Text: React.FC<TextInterface> = ({
    variant = "h3",
    children,
    sx,
    component = "p"
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
 * ArticleBlock: Block for creating action bars with buttons, widgets and other stuff
 */
const Action: React.FC<ActionInterface> = ({
    children
}) => {
    return (<>{children}</>)
}

/**
 * ArticleBlock: Block for images. Enables you to properly insert image into an article so it fit well!
 */
const Picture: React.FC<ImageInterface> = ({
    children
}) => {
    return (<>{children}</>)
}

// Setup display names
Text.displayName = "ArticleBlock.Text"
Action.displayName = "ArticleBlock.Action"
Picture.displayName = "ArticleBlock.Image"

// Assign to Article blocks
ArticleBlock.Text = Text
ArticleBlock.Action = Action
ArticleBlock.Image = Picture

// Export a single Article block
export { ArticleBlock };