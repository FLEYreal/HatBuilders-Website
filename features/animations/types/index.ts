// Basics
import { CSSProperties, ReactNode } from "react";

// Material-UI
import { SxProps } from "@mui/material";


// Root interfaces
export type RootInterface<T> = {
    dur?: number;
    delay?: number;
    isSx?: boolean;
    children?: ReactNode;

    sx?: SxProps;
    style?: CSSProperties;
    args?: T;
}


// Components' interfaces
export interface FloatInterface<T> extends RootInterface<T> {}
export interface AppearanceInterface<T> extends RootInterface<T> {}
export interface OpacityInterface<T> extends RootInterface<T> {}
