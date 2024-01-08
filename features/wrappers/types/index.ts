// Basics
import { CSSProperties, FC, ReactNode } from 'react'

// Material-UI
import { BoxProps, SxProps } from '@mui/material';
import { styledDefaultInterface } from '@/shared/mui';

/**
 * Root inteface, parent of every interface in the feature.
 * 
 * @param children - All provided children (React Components) will be inside this parent component.
 * @param sx - SX Styles are type of styles from Material-UI lib which used to create the feature.
 */
export interface RootInterface extends BoxProps, styledDefaultInterface {
    children?: string | ReactNode;
}

// Interfaces & Types for Higher-Order Components
export interface defaultWrapperInterface<T extends styledDefaultInterface> {
    Wrapper: FC<T>;
}

// Interfaces of Components & Styled Components
export interface FlexInterface extends RootInterface {
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

export interface WrapperInterface extends RootInterface {}

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