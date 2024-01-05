// Basics
import React from 'react';

// Config
import { ArticleBlockInterface } from '../../config/types';

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

// Sub-Components
import { Text } from './text';
import { Picture } from './image';
import { Action } from './action';

// Assign Sub-Components to Parent
ArticleBlock.Text = Text
ArticleBlock.Image = Picture
ArticleBlock.Action = Action

// Export Parent
export { ArticleBlock };