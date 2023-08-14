// Базовые импорты
import Image from 'next/image'
import React from 'react';

// Стили
import styles from './page.module.scss'

// Material-UI
import { Typography, Button } from '@mui/material'
import { HatButton } from '@/mui/styles'

export default function Home() {
    

    return (
        <Typography component='main'>
            HatBuilders future website is going to be here!
            {/* <HatButton variant='contained' color='primary'>primary</HatButton>
            <HatButton variant='contained' color='secondary'>secondary</HatButton>
            <HatButton variant='contained' color='info'>info</HatButton>
            <HatButton variant='contained' color='warning'>warning</HatButton>
            <HatButton variant='contained' color='error'>error</HatButton> */}
        </Typography>
    )
}