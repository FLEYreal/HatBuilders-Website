import { Button } from '@mui/material'
import { styled } from "@mui/material/styles";

export const HatButtonStyles = {
    boxShadow: 'none',
    '&:hover': {
        boxShadow: 'none'
    },
    '&:active': {
        boxShadow: 'none'
    }
}

export const HatButton = styled(Button)(HatButtonStyles)