"use client";

// Basics
import React, { useEffect, useState } from 'react';

// Material-UI
import Typography from '@mui/material/Typography';
import { styled, useTheme } from '@mui/system';

//types
interface HatTextType {
  content: string;
}

const typographyStyles = {
  font: 'Minecraft',
  fontStyle: 'normal',
  fontWeight: 400,
  lineHeight: 'normal',
};

const baseFontSize = 14;

// functions to calculate font size and character spacing
const calculateFontSize = (multiplier: number, theme: any) => `${baseFontSize * multiplier * theme.typography.fontSize}px`;
const calculateLetterSpacing = (multiplier: number, theme: any) => `${0.1 + multiplier * 0.1 * theme.typography.letterSpacing}px`;

// Styling the HatTextContainer using MUI
const HatTextContainer = styled(Typography)(({ theme }) => ({
  transition: 'font-size 0.3s ease',
  textAlign: 'center',
  ...typographyStyles,
  fontSize: calculateFontSize(1, theme),
  letterSpacing: calculateLetterSpacing(0.8, theme),
  [theme.breakpoints.up('sm')]: {
    fontSize: calculateFontSize(0.85, theme),
    letterSpacing: calculateLetterSpacing(0.5, theme),
  },
  [theme.breakpoints.up('md')]: {
    fontSize: calculateFontSize(1, theme),
    letterSpacing: calculateLetterSpacing(0.7, theme),
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: calculateFontSize(1.1, theme),
    letterSpacing: calculateLetterSpacing(0.8, theme),
  },
  [theme.breakpoints.up('xl')]: {
    fontSize: calculateFontSize(1.3, theme),
    letterSpacing: calculateLetterSpacing(1, theme),
  },
}));

export function HatText({ content }: HatTextType) {
  const theme = useTheme();
  const [fontSize, setFontSize] = useState<number>(1);

  //Window resize handler for dynamically changing font size
  const handleResize = () => {
    const screenWidth = window.innerWidth;
    const scaleFactor = screenWidth / 1480;
    const minFontSize = 0.7;
    const newFontSize = Math.max(minFontSize, scaleFactor);
    setFontSize(newFontSize);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <HatTextContainer theme={theme} style={{ fontSize: `${fontSize}em` }}>{content}</HatTextContainer>;
}