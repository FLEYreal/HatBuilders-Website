// Basic Imports
import Image from 'next/image'
import React from 'react';

// Styles
import styles from './page.module.scss'

// Material-UI
import { Typography, Button } from '@mui/material'
import { HatButton } from '@/mui/styles'
import Link from 'next/link';

export default function Home({ params: { lng } }: { params: { lng: string } }) {

    return (
        <Typography component='main'>
            [ {lng} ] HatBuilders future website is going to be here!
            <Link href='/screenshots'>To Screenshots</Link>
            <Button variant='contained' color='primary'>primary</Button>
            <Button variant='contained' color='secondary'>secondary</Button>
            <Button variant='contained' color='info'>info</Button>
            <Button variant='contained' color='warning'>warning</Button>
            <Button variant='contained' color='error'>error</Button>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit et deserunt magnam nam odit dolorem nemo harum cupiditate, veniam iste inventore quos? Pariatur temporibus ratione amet iure quia cum architecto!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit et deserunt magnam nam odit dolorem nemo harum cupiditate, veniam iste inventore quos? Pariatur temporibus ratione amet iure quia cum architecto!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit et deserunt magnam nam odit dolorem nemo harum cupiditate, veniam iste inventore quos? Pariatur temporibus ratione amet iure quia cum architecto!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit et deserunt magnam nam odit dolorem nemo harum cupiditate, veniam iste inventore quos? Pariatur temporibus ratione amet iure quia cum architecto!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit et deserunt magnam nam odit dolorem nemo harum cupiditate, veniam iste inventore quos? Pariatur temporibus ratione amet iure quia cum architecto!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit et deserunt magnam nam odit dolorem nemo harum cupiditate, veniam iste inventore quos? Pariatur temporibus ratione amet iure quia cum architecto!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit et deserunt magnam nam odit dolorem nemo harum cupiditate, veniam iste inventore quos? Pariatur temporibus ratione amet iure quia cum architecto!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit et deserunt magnam nam odit dolorem nemo harum cupiditate, veniam iste inventore quos? Pariatur temporibus ratione amet iure quia cum architecto!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit et deserunt magnam nam odit dolorem nemo harum cupiditate, veniam iste inventore quos? Pariatur temporibus ratione amet iure quia cum architecto!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit et deserunt magnam nam odit dolorem nemo harum cupiditate, veniam iste inventore quos? Pariatur temporibus ratione amet iure quia cum architecto!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit et deserunt magnam nam odit dolorem nemo harum cupiditate, veniam iste inventore quos? Pariatur temporibus ratione amet iure quia cum architecto!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit et deserunt magnam nam odit dolorem nemo harum cupiditate, veniam iste inventore quos? Pariatur temporibus ratione amet iure quia cum architecto!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit et deserunt magnam nam odit dolorem nemo harum cupiditate, veniam iste inventore quos? Pariatur temporibus ratione amet iure quia cum architecto!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit et deserunt magnam nam odit dolorem nemo harum cupiditate, veniam iste inventore quos? Pariatur temporibus ratione amet iure quia cum architecto!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit et deserunt magnam nam odit dolorem nemo harum cupiditate, veniam iste inventore quos? Pariatur temporibus ratione amet iure quia cum architecto!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit et deserunt magnam nam odit dolorem nemo harum cupiditate, veniam iste inventore quos? Pariatur temporibus ratione amet iure quia cum architecto!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit et deserunt magnam nam odit dolorem nemo harum cupiditate, veniam iste inventore quos? Pariatur temporibus ratione amet iure quia cum architecto!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit et deserunt magnam nam odit dolorem nemo harum cupiditate, veniam iste inventore quos? Pariatur temporibus ratione amet iure quia cum architecto!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit et deserunt magnam nam odit dolorem nemo harum cupiditate, veniam iste inventore quos? Pariatur temporibus ratione amet iure quia cum architecto!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit et deserunt magnam nam odit dolorem nemo harum cupiditate, veniam iste inventore quos? Pariatur temporibus ratione amet iure quia cum architecto!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit et deserunt magnam nam odit dolorem nemo harum cupiditate, veniam iste inventore quos? Pariatur temporibus ratione amet iure quia cum architecto!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit et deserunt magnam nam odit dolorem nemo harum cupiditate, veniam iste inventore quos? Pariatur temporibus ratione amet iure quia cum architecto!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit et deserunt magnam nam odit dolorem nemo harum cupiditate, veniam iste inventore quos? Pariatur temporibus ratione amet iure quia cum architecto!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit et deserunt magnam nam odit dolorem nemo harum cupiditate, veniam iste inventore quos? Pariatur temporibus ratione amet iure quia cum architecto!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit et deserunt magnam nam odit dolorem nemo harum cupiditate, veniam iste inventore quos? Pariatur temporibus ratione amet iure quia cum architecto!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit et deserunt magnam nam odit dolorem nemo harum cupiditate, veniam iste inventore quos? Pariatur temporibus ratione amet iure quia cum architecto!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit et deserunt magnam nam odit dolorem nemo harum cupiditate, veniam iste inventore quos? Pariatur temporibus ratione amet iure quia cum architecto!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit et deserunt magnam nam odit dolorem nemo harum cupiditate, veniam iste inventore quos? Pariatur temporibus ratione amet iure quia cum architecto!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit et deserunt magnam nam odit dolorem nemo harum cupiditate, veniam iste inventore quos? Pariatur temporibus ratione amet iure quia cum architecto!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit et deserunt magnam nam odit dolorem nemo harum cupiditate, veniam iste inventore quos? Pariatur temporibus ratione amet iure quia cum architecto!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit et deserunt magnam nam odit dolorem nemo harum cupiditate, veniam iste inventore quos? Pariatur temporibus ratione amet iure quia cum architecto!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit et deserunt magnam nam odit dolorem nemo harum cupiditate, veniam iste inventore quos? Pariatur temporibus ratione amet iure quia cum architecto!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit et deserunt magnam nam odit dolorem nemo harum cupiditate, veniam iste inventore quos? Pariatur temporibus ratione amet iure quia cum architecto!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit et deserunt magnam nam odit dolorem nemo harum cupiditate, veniam iste inventore quos? Pariatur temporibus ratione amet iure quia cum architecto!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit et deserunt magnam nam odit dolorem nemo harum cupiditate, veniam iste inventore quos? Pariatur temporibus ratione amet iure quia cum architecto!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit et deserunt magnam nam odit dolorem nemo harum cupiditate, veniam iste inventore quos? Pariatur temporibus ratione amet iure quia cum architecto!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit et deserunt magnam nam odit dolorem nemo harum cupiditate, veniam iste inventore quos? Pariatur temporibus ratione amet iure quia cum architecto!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit et deserunt magnam nam odit dolorem nemo harum cupiditate, veniam iste inventore quos? Pariatur temporibus ratione amet iure quia cum architecto!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit et deserunt magnam nam odit dolorem nemo harum cupiditate, veniam iste inventore quos? Pariatur temporibus ratione amet iure quia cum architecto!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit et deserunt magnam nam odit dolorem nemo harum cupiditate, veniam iste inventore quos? Pariatur temporibus ratione amet iure quia cum architecto!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit et deserunt magnam nam odit dolorem nemo harum cupiditate, veniam iste inventore quos? Pariatur temporibus ratione amet iure quia cum architecto!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit et deserunt magnam nam odit dolorem nemo harum cupiditate, veniam iste inventore quos? Pariatur temporibus ratione amet iure quia cum architecto!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit et deserunt magnam nam odit dolorem nemo harum cupiditate, veniam iste inventore quos? Pariatur temporibus ratione amet iure quia cum architecto!</p>
        
        </Typography>
    )
}