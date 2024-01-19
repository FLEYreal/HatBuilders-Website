// Material-UI
import { Typography, TypographyProps } from '@mui/material';

// Config
import { TextInterface } from '../../types';

/**
 * Text Component Providing Standartized Text Element for Articles
 * @param {TypographyProps} props 
 */
export const Text: React.FC<TextInterface> = ({
    variant = "h3",
    component = "p",
    textAlign,
    children,
    sx,

    ...props
}: TextInterface) => {

    // What tag to use relative to the variant provided
    const variantToComponent: Record<string, TypographyProps['component']> = {
        'h1': 'h1',
        'h2': 'h2',
        'h3': 'p',
        'h4': 'p',
        'h5': 'span',
        'h6': 'span',
    };
    const comp: TypographyProps['component'] = component || variantToComponent[variant] || 'p';

    return (
        <Typography
            component={comp}
            variant={variant}
            sx={{
                textAlign,
                p: {
                    xs: '5px 0',
                    md: '7px 0',
                    lg: '10px 0',
                    xl: '12px 0'
                },
                ...sx
            }}
            {...props}
        >
            {children}
        </Typography>
    );
}