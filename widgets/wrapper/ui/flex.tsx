'use client'

// Basics
import { useEffect, useState, Children, ReactNode, cloneElement, ReactElement } from "react"

// Material-UI
import { Theme, Box } from "@mui/material"

// Emotion
import styled from "@emotion/styled"
import { useTheme } from "@emotion/react"

// Types
import { FlexInterface, StyledFlexInterface } from "../types"


// Styled components
const StyledFlex = styled(Box) <StyledFlexInterface>`

    // Default pre-setup styles
    display: flex;

    // Relative styles can be setup by default

    // "flow" attribue
    flex-flow: ${({ flow }) => flow ? flow : 'row wrap'};
    
    // "align" attribue
    align-items: ${({ align }) => align && align[0] ? align[0] : 'row wrap'};
    justify-content: ${({ align }) => align && align[1] ? align[1] : 'row wrap'};

    // "f" attribute
    flex: ${({ f }) => f ? f : '1'};

    // "grow" attribute
    flex-grow: ${({ grow }) => grow ? grow : '1'};

    // "shrink" attribute
    flex-shrink: ${({ shrink }) => shrink ? shrink : '1'};

    // "basis" attribute
    flex-basis: ${({ basis }) => basis ? basis : '1'};

`


export function Flex({

    // Children of the component
    children,

    // Aligning styles
    flow = 'row wrap',
    align = ['center', 'center'],

    // Styles sizing
    f = "1",
    grow = "1",
    shrink = "1",
    basis = "1",

    // Styles that will apply to children
    childStyles = null,
    sxStyles = null,

    ...props
}: FlexInterface) {

    // Theme object
    const theme = useTheme() as Theme

    // Cloned children to apply styles to them if needed
    const [clones, setClones] = useState<ReactNode>(children)

    useEffect(() => {

        // Variable to assign cloned children with new styles to it if there are
        let result;

        // Apply CSS default styles to children
        if (childStyles) {

            result = Children.map(children, (child: ReactNode) => {

                const style = (child as ReactElement).props.style

                return cloneElement(child as ReactElement, {
                    style: { ...style, ...childStyles }
                })
            })

        }

        // Apply Material-UI CSS styling version: SX
        else if (sxStyles) {

            result = Children.map(children, (child: ReactNode) => {

                const sx = (child as ReactElement).props.sx

                return cloneElement(child as ReactElement, {
                    sx: { ...sx, ...sxStyles }
                })
            })

        }

        // If eventually, there is result with new children, it's perfect time to assign them!
        if (result) setClones(result)

    }, [childStyles, sxStyles, children])

    return (
        <StyledFlex
            flow={flow}
            align={align}

            f={f}
            grow={grow}
            shrink={shrink}
            basis={basis}

            def={{ t: theme, b: theme.breakpoints.up, v: theme.breakpoints.values }}
            {...props}
        >
            {clones}
        </StyledFlex>
    )
}


