// Material-UI
import { BoxProps } from "@mui/material"

// Shared
import { styledDefaultInterface } from "@/shared/mui"

// Root interfaces
export interface RootInterface extends styledDefaultInterface {
    dur?: number;
    delay?: number;
}

// Components' interfaces
export interface FloatInterface extends RootInterface, BoxProps {}
export interface AppearanceInterface extends RootInterface, BoxProps {}