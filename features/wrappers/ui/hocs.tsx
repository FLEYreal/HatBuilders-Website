'use client'

// Material-UI
import { Theme } from "@mui/material"

// Emotion
import { useTheme } from "@emotion/react"

// Insides
import { defaultWrapperInterface, RootInterface } from "../types"


/**
 * defaultWrapper is a higher-order component that returns a new component that wraps the original component.
 * The new component accepts the same props as the original component, but also accepts a prop called "def" that provides theming values for styled components.
 * @param {defaultWrapperInterface<T>['Wrapper']} Wrapper - The component to be wrapped.
 * @returns {React.FC<T & defaultWrapperInterface<T>['Props']>} - A new component that wraps the original component with "def" prop added.
 */
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