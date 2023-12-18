'use client'
// Basic
import React, { ChangeEvent } from 'react'

// MUI
import Switch from '@mui/material/Switch'
import { Theme } from '@mui/material/styles'
import { Palette, PaletteColor } from '@mui/material'
import { useTheme } from '@emotion/react'

export interface HatSwitchType {
	checked?: boolean
	onChange?: (event: ChangeEvent<HTMLInputElement>) => void
	color?: string & keyof Palette
	type?: 'main' | 'light' | 'dark'
}

export function HatSwitch({
	checked,
	onChange,
	color,
	type = 'main',
}: HatSwitchType){

	// Hooks
	const theme = useTheme() as Theme

	// Handlers
	const handleSwitchChange = (event: ChangeEvent<HTMLInputElement>) => {
		if (onChange) {
			onChange(event)
		}
	}

	// Styling variables
	const switchColor = (theme.palette[color || 'action'] as PaletteColor)[type]

	const switchStyles = {
		'& .MuiSwitch-thumb': {
			backgroundColor: switchColor,
			borderRadius: '0',
		},
		'& .MuiSwitch-track': {
			backgroundColor: switchColor,
			borderRadius: '0',
		},
	}

	return (
		<Switch checked={checked} onChange={handleSwitchChange} sx={switchStyles} />
	)
}
