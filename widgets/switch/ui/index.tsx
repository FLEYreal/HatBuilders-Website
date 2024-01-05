'use client'

// Basics
import React, { ChangeEvent, useCallback } from 'react'

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
}: HatSwitchType) {

	// Handles switch's state change
	const handleSwitchChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
		if (onChange) {
			onChange(event)
		}
	}, [onChange])

	return (
		<Switch
			color={color || 'primary'}
			checked={checked}
			onChange={handleSwitchChange}
			sx={{
				'& .MuiSwitch-thumb': {
					borderRadius: '0',
					boxShadow: '0px 0px 9px 2px rgba(34, 60, 80, 0.2)'
				},
				'& .MuiSwitch-track': {
					borderRadius: '0',
					boxShadow: '0px 0px 9px 0px rgba(34, 60, 80, 0.2)'
				},
			}}
		/>
	)
}
