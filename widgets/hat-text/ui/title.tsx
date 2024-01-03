'use client';

// Basics
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

// Material-UI
import { useTheme } from '@mui/material';
import { Box } from '@mui/material';
import { styled } from '@mui/system';

//types
interface HatTitleProps {
  src: string;
}

// Styling the HatTitleContainer using MUI
const HatTitleContainer = styled(Box)(({ theme }) => ({
  [theme.breakpoints.up('sm')]: {
    width: '300px',
  },
  [theme.breakpoints.up('md')]: {
    width: '340px',
  },
  [theme.breakpoints.up('lg')]: {
    width: '320px',
  },
  [theme.breakpoints.up('xl')]: {
    width: '450px',
  },
  transition: 'font-size 0.3s ease',
}));

export function HatTitle({ src }: HatTitleProps) {
  const theme = useTheme();
  const [containerWidth, setContainerWidth] = useState<number>(300);

  const handleResize = () => {
    const screenWidth = window.innerWidth;

    // coefficients for changing container size
    const containerScaleFactor = screenWidth / 1200;

    // Minimum container width
    const minContainerWidth = 300;

    // Calculate the new width of the container
    const newContainerWidth = Math.max(minContainerWidth, containerScaleFactor * 300);

    setContainerWidth(newContainerWidth);
  };

  // Effect hook to add and remove window resize event listener
  useEffect(() => {
    window.addEventListener('resize', handleResize);
    // Initial call to handleResize on component mount
    handleResize();

    // removing event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <HatTitleContainer theme={theme} style={{ width: `${containerWidth}px` }}>
      <Image src={src} alt='HatBuilders' style={{ width: '100%', height: '100%' }} />
    </HatTitleContainer>
  );

}

