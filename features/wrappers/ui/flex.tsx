'use client'

// Basics
import {

    // Hooks
    useEffect,
    useState,

    // Utils
    cloneElement,
    createElement as e,
    Children,

    // Types
    ReactNode,
    ReactElement

} from "react"

// Material-UI
import { Box } from "@mui/material"

// Emotion
import styled from "@emotion/styled"

// Types
import { FlexInterface } from "../types"

// Higher-Order Components
import { defaultWrapper } from "./hocs"


// Styled components
const StyledFlex = styled(({ flow, align, f, grow, shrink, basis, stretchY, stretchX, def, ...props }: FlexInterface) => e(Box, props)) <FlexInterface>`

    // Default pre-setup styles
    display: flex;

    // Relative styles can be setup by default

    // "flow" attribute
    flex-flow: ${({ flow }) => flow ? flow : 'row wrap'};
    
    // "align" attribute
    align-items: ${({ align }) => align && align[0] ? align[0] : 'center'};
    justify-content: ${({ align }) => align && align[1] ? align[1] : 'center'};

    // "f" attribute
    ${({ f }) => f ? `flex: ${f};` : ''}

    // "grow" attribute
    ${({ grow }) => grow ? `flex-grow: ${grow};` : ''}

    // "shrink" attribute
    ${({ shrink }) => shrink ? `flex-shrink: ${shrink};` : ''}

    // "basis" attribute
    ${({ basis }) => basis ? `flex-basis: ${basis};` : ''}

    // "stretchY" and "stretchX" attributes
    ${({ stretchY }) => stretchY ? `min-height: 100vh;` : ''}
    ${({ stretchX }) => stretchX ? 'width: 100%;' : ''}

`


/**
 * A React component that provides a flexible container for arranging items in a row or column.
 * 
 * @param {ReactNode} children - The child elements to be displayed in the flex container.
 * @param {FlexInterface} props - The properties of the Flex component.
 * @param {string} props.flow - The direction of the flex items. Can be either 'row' or 'column'. Defaults to 'row'.
 * @param {string[][]} props.align - The alignment of the flex items on the main axis. The first value specifies the alignment for items when there is extra space on the main axis. The second value specifies the alignment for items when there is extra space on the cross axis. Can be either 'start', 'end', 'center', or 'stretch'. Defaults to ['center', 'center'].
 * @param {string} props.f - The flex value for the flex items. Can be any CSS flex property value.
 * @param {number} props.grow - The flex grow value for the flex items.
 * @param {number} props.shrink - The flex shrink value for the flex items.
 * @param {string} props.basis - The flex basis value for the flex items.
 * @param {boolean} props.stretchX - Whether to stretch the flex items horizontally. Defaults to true.
 * @param {boolean} props.stretchY - Whether to stretch the flex items vertically. Defaults to false.
 * @param {object} props.childStyles - The styles to be applied to the child elements. Can be either CSS styles or Material-UI's CSS styling version: 'sx'.
 * @param {object} props.sxStyles - The styles to be applied to the child elements using Material-UI's CSS styling version: 'sx'.
 */
function WrapperFlex({

    // Children of the component
    children,

    // Aligning styles
    flow = 'row wrap',
    align = ['center', 'center'],

    // Styles sizing
    f,
    grow,
    shrink,
    basis,
    stretchX = true,
    stretchY = false,

    // Styles that will apply to children
    childStyles = null,
    sxStyles = null,

    // Get properties needed for styling from "defaultWrapper"
    def,

    ...props
}: FlexInterface) {

    // STATES
    const [clones, setClones] = useState<ReactNode>(children) // Cloned children to apply styles to them if needed


    // EFFECTS
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

            stretchX={stretchX}
            stretchY={stretchY}

            def={def}
            {...props}
        >
            {clones}
        </StyledFlex>
    )
}


// Export wrapped flex component
export const Flex = defaultWrapper<FlexInterface>(WrapperFlex);