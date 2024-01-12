// Material-UI
import { Divider } from '@mui/material';

// Config
import { ActionDividerInterface } from '../../../types';

/**
 * ArticleBlock.Action: Custom divider that doesn't differ much from MUI version, it's just fits code style
 */
export const ArticleDivider = ({
    sx,
    component = 'hr',
    light = true,
    variant = 'fullWidth'
}: ActionDividerInterface) => {
    return (<Divider
        sx={sx}
        component={component}
        light={light}
        variant={variant}
    />)
}