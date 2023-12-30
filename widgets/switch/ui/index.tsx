'use client'

// Basics
import React, { ChangeEvent } from 'react'

// MUI
import Switch from '@mui/material/Switch'
import { SwitchProps } from '@mui/material'

// Interfaces
export interface HatSwitchType {
	checked?: boolean
	onChange?: (event: ChangeEvent<HTMLInputElement>) => void
	color?: SwitchProps['color']
}

export function HatSwitch({
	checked,
	onChange,
	color,
}: HatSwitchType){

	// Handles switch's state change
	const handleSwitchChange = (event: ChangeEvent<HTMLInputElement>) => {
		if (onChange) {
			onChange(event)
		}
	}

	return (
		<Switch 
			color={color || 'primary'} 
			checked={checked} 
			onChange={handleSwitchChange} 
			sx={{
				'& .MuiSwitch-thumb': {
					borderRadius: '0',
				},
				'& .MuiSwitch-track': {
					borderRadius: '0',
				},
			}}
		/>
	)
}
