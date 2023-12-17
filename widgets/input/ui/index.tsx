"use client" 

// Basic
import React, { CSSProperties, ChangeEvent } from 'react'

// MUI
import { Theme } from "@mui/material/styles";
import { useTheme } from '@emotion/react'
import { Palette, PaletteColor } from '@mui/material'
import { typography } from '@/shared/mui/theme'

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

	// Input focus handler
	const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
		e.target.style.border = '2px solid white'
		e.target.style.boxShadow =
			'2px 2px 0px 0px rgba(0, 0, 0, 0.30) inset, -2px -2px 0px 0px rgba(255, 255, 255, 0.15) inset, 0px 0px 0px 2px rgba(255, 255, 255, 0.25)'
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
			style={{
				background: '#363636',
				fontFamily: typography.fontFamily,
				outline: 0,
				color: 'white',
				outlineOffset: 0,
				border: `2px solid ${
					(theme.palette[color || 'primary'] as PaletteColor)[type]
				}`,
				...style,
			}}
		/>
	)
}
