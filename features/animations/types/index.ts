// Material-UI
import { BoxProps } from "@mui/material"

// Root interfaces
export interface RootInterface {
    dur?: number;
    delay?: number;
    isSx?: boolean;
}

// Components' interfaces
export interface FloatInterface extends RootInterface, BoxProps {}
export interface AppearanceInterface extends RootInterface, BoxProps {}