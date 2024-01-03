'use client';

// Basics
import React, { useEffect, useState } from 'react';

// Material-UI
import { styled } from '@mui/system';
import Divider from '@mui/material/Divider';


// Styling the HatDividerContainer using MUI
const HatDividerContainer = styled(Divider)(({ theme }) => ({
  backgroundColor: '#0DBA33',
  flexShrink: '0',
  transition: 'width 0.3s ease',
  [theme.breakpoints.up('sm')]: {
    width: '300px',
  },
  [theme.breakpoints.up('md')]: {
    width: '372px',
  },
  [theme.breakpoints.up('lg')]: {
    width: '372px',
  },
  [theme.breakpoints.up('xl')]: {
    width: '520px',
  },
}));

export function HatDivider() {
  const [dividerWidth, setDividerWidth] = useState<number>(520);

  const handleResize = () => {
    const screenWidth = window.innerWidth;

    // coefficients for changing divider size
    const dividerScaleFactor = screenWidth / 1200;

    // Minimum divider width
    const minDividerWidth = 300;

    // Calculate the new width of the divider
    const newDividerWidth = Math.max(minDividerWidth, dividerScaleFactor * 520);

    setDividerWidth(newDividerWidth);
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

  return <HatDividerContainer style={{ width: `${dividerWidth}px` }} />;
}
