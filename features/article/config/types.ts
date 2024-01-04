import { SxProps } from '@mui/system'
import { BoxProps, TypographyOwnProps, DividerOwnProps } from '@mui/material'
import { ReactNode } from 'react'

// Root inteface, parent of every interface in the feature
export interface RootInterface {
    children?: string | ReactNode;
    sx?: SxProps;
}

// Interfaces for components
export interface ArticleInterface extends RootInterface {
    fullSize?: boolean;
}

export interface ArticleSectionInterface extends RootInterface {
    component?: BoxProps['component'];
}

export interface ArticleBlockInterface extends RootInterface {
    component?: BoxProps['component'];
}

// Interfaces for sub-components of ArticleBlock
export interface TextInterface extends ArticleBlockInterface {
    variant?: TypographyOwnProps['variant'];
}

export interface ActionInterface extends ArticleBlockInterface {
    m?: string;
    align?: 'column' | 'row';
}

export interface ActionDividerInterface extends ActionInterface {
    light?: boolean;
    variant?: DividerOwnProps['variant']
}

export interface ImageInterface extends ArticleBlockInterface {
    src: string;
    alt: string;
}