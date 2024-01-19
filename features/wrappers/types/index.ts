// Basics
import { CSSProperties, FC, ReactNode } from 'react'

// Material-UI
import { BoxProps, SxProps } from '@mui/material';
import { styledDefaultInterface } from '@/shared/mui';

// Emotion
import { SerializedStyles } from '@emotion/react'

/**
 * Root inteface, parent of every interface in the feature.
 * 
 * @param children - All provided children (React Components) will be inside this parent component.
 * @param sx - SX Styles are type of styles from Material-UI lib which used to create the feature.
 */
export interface RootInterface extends styledDefaultInterface {
    children?: string | ReactNode;
    css?: SerializedStyles;
}

// Interfaces & Types for Higher-Order Components
export interface defaultWrapperInterface<T extends styledDefaultInterface> {
    Wrapper: FC<T>;
}

// Interfaces of Components & Styled Components

/**
 * @param {string} flow - The direction of the flex items. Can be either 'row' or 'column'. Defaults to 'row'.
 * @param {string[][]} align - The alignment of the flex items on the main axis. The first value specifies the alignment for items when there is extra space on the main axis. The second value specifies the alignment for items when there is extra space on the cross axis. Can be either 'start', 'end', 'center', or 'stretch'. Defaults to ['center', 'center'].
 * @param {string} f - The flex value for the flex items. Can be any CSS flex property value.
 * @param {number} grow - The flex grow value for the flex items.
 * @param {number} shrink - The flex shrink value for the flex items.
 * @param {string} basis - The flex basis value for the flex items.
 * @param {boolean} stretchX - Whether to stretch the flex items horizontally. Defaults to true.
 * @param {boolean} stretchY - Whether to stretch the flex items vertically. Defaults to false.
 * @param {object} childStyles - The styles to be applied to the child elements. Can be either CSS styles or Material-UI's CSS styling version: 'sx'.
 * @param {object} sxStyles - The styles to be applied to the child elements using Material-UI's CSS styling version: 'sx'.
 */
export interface FlexInterface extends RootInterface, BoxProps {
    stretchY?: boolean;
    stretchX?: boolean;
    flow?: CSSProperties['flexFlow'] | null;
    f?: CSSProperties['flex'] | null;
    grow?: CSSProperties['flex'] | null;
    shrink?: CSSProperties['flexShrink'] | null;
    basis?: CSSProperties['flexBasis'] | null;
    align?: [
        CSSProperties['alignItems'] | null,
        CSSProperties['justifyContent'] | null
    ] | null;

    // Styles for components if they're normal HTML tags
    childStyles?: CSSProperties | null;

    // Styles for components if they're Material-UI components
    sxStyles?: SxProps | null;
}

export interface WrapperInterface extends RootInterface, BoxProps { }

export interface ColumnInterface extends FlexInterface {
    center?: boolean;
    wrap?: boolean;
}
export interface RowInterface extends FlexInterface {
    center?: boolean;
    wrap?: boolean;
}
export interface CenterInterface extends FlexInterface {
    x?: boolean;
    y?: boolean;
}