// Basics
import { ReactNode } from 'react'
import { StaticImageData } from 'next/image';

// Material-UI
import { SxProps } from '@mui/system'
import { BoxProps, TypographyOwnProps, DividerOwnProps } from '@mui/material'

// Reusable Types
type align = 'start' | 'center' | 'end';
type component = BoxProps['component'];

/**
 * Root inteface, parent of every interface in the feature.
 * 
 * @param children - All provided children (React Components) will be inside this parent component.
 * @param sx - SX Styles are type of styles from Material-UI lib which used to create the feature.
 */
export interface RootInterface {
    sx?: SxProps;
}

export interface InsideInterface extends RootInterface {
    children?: string | ReactNode;
}

// Interfaces for components

/** 
 * @param fullSize - Do stretch article to the whole page?.
 * @param align - Align entire article.
 * @param textAlign - Align all the text inside the article.
 */
export interface ArticleInterface extends InsideInterface {
    fullSize?: boolean;
    align?: align;
    textAlign?: align;
}

/**
 * @param component - Define what HTML tag will wrapper have. It's "section" by default.
 */
export interface ArticleSectionInterface extends InsideInterface {
    component?: component
}

/**
 * @param component - Define what HTML tag will wrapper have. It's "section" by default.
 */
export interface ArticleBlockInterface extends InsideInterface {
    component?: component
}

// Interfaces for sub-components of ArticleBlock

/**
 * @param variant - Define typography (from Material-UI) variant of the text (h1, h2, h3, ...etc).
 * @param textAlign - Define align of the text, start, center or end.
 */
export interface TextInterface extends ArticleBlockInterface {
    variant?: TypographyOwnProps['variant'];
    textAlign?: align;
}

/**
 * @param variant - Define typography (from Material-UI) variant of the text (h1, h2, h3, ...etc).
 * @param textAlign - Define align of the text, start, center or end.
 * @param name - Name of the translation in locale folder
 * @param ns - What json file to use from local file.
 */
export interface TranslateTextInterface extends ArticleBlockInterface {
    variant?: TypographyOwnProps['variant'];
    textAlign?: align;
    name?: string;
    ns?: string
}

/**
 * @param m - Define margins for the children of the Action component.
 * @param align - Define how will components build by column or row.
 */
export interface ActionInterface extends ArticleBlockInterface {
    m?: string;
    align?: 'column' | 'row';
}

/**
 * @param light - Define wether to make divider lighter.
 * @param variant - Define variant of the divider (from Material-UI).
 */
export interface ActionDividerInterface extends ActionInterface {
    light?: boolean;
    variant?: DividerOwnProps['variant']
}

/**
 * @param src - Path to the folder (Worth noting: As it's NextJS, you have to provide imported variable rather than hardcoded string path to the image).
 * @param alt - Image description, used mostly for SEO but will be displayed when image can't be loaded.
 */
export interface ImageInterface extends ArticleBlockInterface {
    src: StaticImageData;
    alt: string;
}