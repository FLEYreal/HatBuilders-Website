// Insides
import { Flex } from './flex'

// Types
import { ColumnInterface } from '../types'

// Component(s)
export function Column({

    // Common Params
    children, sx,

    // Unique Params
    center, wrap,

    // Rest
    ...props

}: ColumnInterface) {

    return (
        <Flex
            sx={{
                margin: center ? '0 auto' : '',
                gap: '8px',
                ...sx
            }}
            flow={`column ${wrap ? 'wrap' : 'nowrap'}`}
            align={center ? ['center', 'center'] : ['start', 'start']}
            {...props}
        >
            {children}
        </Flex>
    )
}