// Basics
import { CSSProperties, ReactNode } from 'react'
import { ImageProps } from 'next/image';

// Material-UI
import { BoxProps, TypographyProps, DividerOwnProps } from '@mui/material'

// Widgets
import { BlurryImageInterface } from '@/widgets/blurry-image'

// Shared
import { styledDefaultInterface } from '@/shared/mui';


// Types
type align = 'start' | 'center' | 'end';


// Interfaces

/**
 * Root inteface, parent of every interface in the feature.
 * 
 * @param children - All provided children (React Components) will be inside this parent component.
 * @param sx - SX Styles are type of styles from Material-UI lib which used to create the feature.
 */
export interface RootInterface extends styledDefaultInterface {}

export interface InsideInterface extends RootInterface {
    children?: string | ReactNode;
}

/** 
 * @param fullSize - Do stretch article to the whole page?.
 * @param align - Align entire article.
 * @param textAlign - Align all the text inside the article.
 */
export interface ArticleInterface extends InsideInterface, BoxProps {
    fullSize?: boolean;
    align?: align;
    textAlign?: align;
}

/**
 * @param component - Define what HTML tag will wrapper have. It's "section" by default.
 */
export interface ArticleSectionInterface extends InsideInterface, BoxProps {}

/**
 * @param component - Define what HTML tag will wrapper have. It's "section" by default.
 */
export interface ArticleBlockInterface extends InsideInterface {}

// Interfaces for sub-components of ArticleBlock

/**
 * @param variant - Define typography (from Material-UI) variant of the text (h1, h2, h3, ...etc).
 * @param textAlign - Define align of the text, start, center or end.
 */
export interface TextInterface extends ArticleBlockInterface, TypographyProps {
    textAlign?: align;
}

/**
 * @param variant - Define typography (from Material-UI) variant of the text (h1, h2, h3, ...etc).
 * @param textAlign - Define align of the text, start, center or end.
 * @param name - Name of the translation in locale folder
 * @param ns - What json file to use from local file.
 */
export interface TranslateTextInterface extends ArticleBlockInterface, TypographyProps {
    textAlign?: align;
    name?: string;
    ns?: string
}

/**
 * @param m - Define margins for the children of the Action component.
 * @param align - Define how will components build by column or row.
 */
export interface ActionInterface extends ArticleBlockInterface, BoxProps {
    m?: string;
    align?: CSSProperties['flexFlow'] | { xs?: string, sm?: string, md?: string, lg?: string, xl?: string  };
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
    isBlurry?: boolean;
    blurryProps?: BlurryImageInterface;
    style?: CSSProperties;
    imageProps?: ImageProps;
}