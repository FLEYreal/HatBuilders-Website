"use client"

// Basic
import React, { CSSProperties, ChangeEvent, useMemo } from 'react'

// MUI
import { Theme } from "@mui/material/styles";
import { useTheme } from '@emotion/react'
import { Palette, PaletteColor } from '@mui/material'

// Libs
import hexToRgba from 'hex-to-rgba';

// Interfaces
export interface HatInputType {
	value?: string
	onChange?: (event: ChangeEvent<HTMLInputElement>) => void
	style?: CSSProperties
	color?: string & keyof Palette
	type?: 'main' | 'light' | 'dark'
}

export function HatInput({
	value,
	onChange,
	style,
	color,
	type = 'main',
}: HatInputType) {

	const theme = useTheme() as Theme;

	const customization = useMemo(() => {
		return {
			transition: 'box-shadow 0.4s ease-in-out',
			background: theme.palette.mode === 'dark' ? '#363636' : '#fbfbfb',
			fontFamily: 'inherit',
			padding: '16px 10px',
			outline: 0,
			color: theme.palette.mode === 'dark' ? '#fff' : '#000',
			outlineOffset: 0,
			border: `2px solid ${(theme.palette[color || 'primary'] as PaletteColor)[type]}`,
			...style,
		}
	}, [style, theme.palette, color, type])

	// Input focus handler
	const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
		if (theme.palette.mode === 'dark') {
			e.target.style.border = '2px solid white'
			e.target.style.boxShadow =
				'3px 3px 0px 0px rgba(0, 0, 0, 0.30) inset, -3px -3px 0px 0px rgba(255, 255, 255, 0.15) inset, 0px 0px 0px 6px rgba(255, 255, 255, 0.35)'
		} else {
			e.target.style.boxShadow =
				`0px 0px 0px 6px ${hexToRgba((theme.palette[color || 'primary'] as PaletteColor)[type], 0.35)}`
		}
	}

	// Input focus loss handler
	const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
		const borderColor = (theme.palette[color || 'primary'] as PaletteColor)[type]
		e.target.style.border = `2px solid ${borderColor}`
		e.target.style.boxShadow = 'none'
	}

	return (
		<input
			type='text'
			value={value}
			onChange={onChange}
			onFocus={handleFocus}
			onBlur={handleBlur}
			style={customization}
		/>
	)
}
