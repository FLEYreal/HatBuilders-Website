'use client'

// Material-UI
import { Typography, TypographyProps } from '@mui/material';

// Shared
import { useTranslation } from '@/shared/i18n/client';
import { useLanguage } from '@/shared/i18n';

// Config
import { TranslateTextInterface } from '../../types';

/**
 * Translative Text Component Providing Standartized Text Element for Articles that can be translated to available languages
 * @param {TypographyProps} props 
 */
export const TranslateText: React.FC<TranslateTextInterface> = ({
    variant = "h3",
    component = "p",
    textAlign,

    name = 'main',
    ns = 'home',
    sx,

    ...props
}: TranslateTextInterface) => {

    // Get translation 
    const lng = useLanguage()
    const { t } = useTranslation(lng, ns)

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
            variant={variant || 'h3'}
            sx={{
                textAlign: textAlign,
                p: {
                    xs: '3px 0',
                    md: '5px 0',
                    lg: '8px 0',
                    xl: '12px 0'
                },
                ...sx
            }}
            {...props}
        >
            {t(name)}
        </Typography>
    );
}
