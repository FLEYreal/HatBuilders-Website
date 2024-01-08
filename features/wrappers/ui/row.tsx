// Insides
import { Flex } from './flex'

// Types
import { RowInterface } from '../types'

// Component(s)
export function Row({ 

    // Common Params
    children, sx,

    // Unique Params
    center, wrap,

    // Rest
    ...props

}: RowInterface) {

    return (
        <Flex
            sx={{
                margin: center ? '0 auto' : '',
                gap: '8px',
                ...sx
            }}
            flow={`row ${wrap ? 'wrap' : 'nowrap'}`}
            align={center ? ['center', 'center'] : ['start', 'start']}
            {...props}
        >
            {children}
        </Flex>
    )
}