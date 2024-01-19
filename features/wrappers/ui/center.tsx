// Insides
import { Flex } from './flex'
import { CenterInterface } from '../types'

/**
 * Inherits Flex component with only difference that it centers itself and children.
 */
export function Center({ 

    // Common Params
    children, sx, 

    // Unique Params
    x = true, // To center horizontally
    y = true, // To center vertically

    // Rest
    ...props

} : CenterInterface) {
    
    return (
        <Flex
            sx={{
                margin: `${y ? 'auto' : '0'} ${x ? 'auto' : '0'}`,
                ...sx
            }}
            align={[
                y ? 'center' : 'start', 
                x ? 'center' : 'start'
            ]}
            {...props}
        >
            {children}
        </Flex>
    )
}