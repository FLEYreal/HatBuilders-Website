// Insides
import { Flex } from './flex'

// Types
import { CenterInterface } from '../types'

// Component(s)
export function Center({ 

    // Common Params
    children, sx, 

    // Unique Params
    x = true, 
    y = true,

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