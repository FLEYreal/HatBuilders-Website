'use client'

// Material-UI
import { Typography, BoxProps } from '@mui/material';

// Shared
import { useTranslation } from '@/shared/i18n/client';
import { useLanguage } from '@/shared/i18n';

// Config
import { TranslateTextInterface } from '../../config/types';

/**
 * ArticleBlock: Block for translative titles, paragraphs and other type of text
 */
export const TranslateText: React.FC<TranslateTextInterface> = ({
    variant = "h3",
    component = "p",
    textAlign,

    name = 'main',
    ns = 'home',
    sx,
}: TranslateTextInterface) => {

    // Get translation 
    const lng = useLanguage()
    const { t } = useTranslation(lng, ns)

    // Define tag of the component relatively variant of the block
    const comp: BoxProps['component'] = component || (() => {
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
                p: '12px 0',
                ...sx
            }}
        >
            {t(name)}
        </Typography>
    );
}
