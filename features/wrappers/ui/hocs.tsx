'use client'

// P.S. HOC is Higher-Order Component

// Material-UI
import { Theme } from "@mui/material"

// Emotion
import { useTheme } from "@emotion/react"
import { RootInterface } from '../types';

// Types
import { defaultWrapperInterface } from "../types"

export function defaultWrapper<T extends RootInterface>(Wrapper: defaultWrapperInterface<T>['Wrapper']) {

    function NewWrapper({ ...props }: T) {

        // Parameters for styled components
        let t = useTheme() as Theme;
        let b = t.breakpoints.up;
        let v = t.breakpoints.values;

        // Return new wrapper with provided default values
        return (<Wrapper def={{ t, b, v }} {...props} />)
    }

    return NewWrapper
}