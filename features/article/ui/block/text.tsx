// Material-UI
import { Typography, TypographyProps } from '@mui/material';

// Config
import { TextInterface } from '../../types';

/**
 * ArticleBlock: Block for titles, paragraphs and other type of text
 */
export const Text: React.FC<TextInterface> = ({
    variant = "h3",
    component = "p",
    textAlign,

    children,
    sx,
}: TextInterface) => {

    // Define tag of the component relatively variant of the block
    const comp: TypographyProps['component'] = component || (() => {
        switch (variant) {
            case 'h1': { return 'h1' }
            case 'h2': { return 'h2' }
            case 'h3': { return 'p' }
            case 'h4': { return 'p' }
            case 'h5': { return 'span' }
            case 'h6': { return 'span' }
            default:
                return 'p'
        }
    })()

    return (
        <Typography
            component={comp}
            variant={variant || 'h3'}
            sx={{
                textAlign: textAlign,
                p: {
                    xs: '5px 0',
                    md: '7px 0',
                    lg: '10px 0',
                    xl: '12px 0'
                },
                ...sx
            }}
        >
            {children}
        </Typography>
    );
}
