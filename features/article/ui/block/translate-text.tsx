'use client'

// Material-UI
import { Typography, TypographyProps } from '@mui/material';

// Shared
import { useTranslation } from '@/shared/i18n/client';
import { useLanguage } from '@/shared/i18n';

// Insides
import { TranslateTextInterface } from '../../types';


/**
 * Translative Text Component Providing Standartized Text Element for Articles that can be translated to available languages
 * @param {TypographyProps} props 
 */
export const TranslateText: React.FC<TranslateTextInterface> = ({
    variant = "h3", // What Typography (from MUI) variant to use
    component = "p", // What tag to use
    textAlign, // How to align text, start, center or end

    name = 'main', // Name of the translation in translation object
    ns = 'home', // What namespace to use for the translation
    sx, // MUI's styles

    ...props
}: TranslateTextInterface) => {

    // CUSTOM VARIABLES & HOOKS
    const lng = useLanguage() // Get current language
    const { t } = useTranslation(lng, ns) // Get object with translations

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
