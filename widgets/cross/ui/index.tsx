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
    sx: SxProps
}) {

    return (
        <HatButton onClick={onClose} color='error' sx={{
            p: '10px',
            width:'50',
            height:'50',
            color: '#fff',
            
            ...sx
        }}>
            <CloseIcon />
        </HatButton>
    )
}