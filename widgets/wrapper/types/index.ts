// Basics
import { CSSProperties, ReactNode } from 'react'

// Material-UI
import { BoxProps, SxProps } from '@mui/material';
import { styledDefaultInterface } from '@/shared/mui';

/**
 * Root inteface, parent of every interface in the feature.
 * 
 * @param children - All provided children (React Components) will be inside this parent component.
 * @param sx - SX Styles are type of styles from Material-UI lib which used to create the feature.
 */
export interface RootInterface extends BoxProps {
    children?: string | ReactNode;
}


// Interfaces of components & styled components
export interface CommonFlexIntefrace {
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
    childStyles?: CSSProperties | null

    // Styles for components if they're Material-UI components
    sxStyles?: SxProps | null
}

export interface FlexInterface extends RootInterface, CommonFlexIntefrace {}
export interface StyledFlexInterface extends styledDefaultInterface, CommonFlexIntefrace {}