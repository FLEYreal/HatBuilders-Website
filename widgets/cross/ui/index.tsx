// Widget
import { HatButton } from '@/widgets/button'

// Icons
import CloseIcon from '@mui/icons-material/Close';
import { SxProps } from '@mui/material';

export function Cross({
    onClose,
    sx
}: {
    onClose: () => any,
    sx?: SxProps
}) {

    return (
        <HatButton onClick={onClose} color='error'
            sx={{
                p: '10px',
                color: '#fff',

                '&:hover': {
                    border: '9px solid rgb(66, 25, 25)',
                },

                '&:active': {
                    backgroundColor: '#D32F2F'
                },

                ...sx
            }}>
            <CloseIcon />
        </HatButton>
    )
}