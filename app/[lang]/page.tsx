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
            <Button variant='contained' color='primary'>primary</Button>
            <Button variant='contained' color='secondary'>secondary</Button>
            <Button variant='contained' color='info'>info</Button>
            <Button variant='contained' color='warning'>warning</Button>
            <Button variant='contained' color='error'>error</Button>
        </Typography>
    )
}