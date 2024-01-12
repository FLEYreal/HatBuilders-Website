// Basics
import { CSSProperties, ReactNode } from "react";

// Material-UI
import { SxProps } from "@mui/material";

// Root interfaces
export interface RootInterface {
    dur?: number;
    delay?: number;
    isSx?: boolean;
    children?: ReactNode;

    sx?: SxProps;
    style?: CSSProperties
}

// Components' interfaces
export interface FloatInterface extends RootInterface {}
export interface AppearanceInterface extends RootInterface {}
export interface OpacityInterface extends RootInterface {}
