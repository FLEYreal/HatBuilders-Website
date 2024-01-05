"use client"

// Basic
import React, { CSSProperties, useMemo, useCallback, memo, useEffect, useState } from 'react'

// MUI
import { Theme } from "@mui/material/styles";
import { useTheme } from '@emotion/react'
import { Palette, PaletteColor } from '@mui/material'

// Libs
import hexToRgba from 'hex-to-rgba';

// Translation
import { useTranslation } from '@/shared/i18n/client';
import { useLanguage } from '@/shared/i18n';

// Interfaces
export interface HatInputType {
	v?: string
	customOnChange?: () => void
	style?: CSSProperties
	color?: string & keyof Palette
	type?: 'main' | 'light' | 'dark'
	isRequired?: boolean
}

// eslint-disable-next-line react/display-name
export const HatInput = memo(({
	v,
	customOnChange,
	style,
	color,
	type = 'main',
	isRequired = false
}: HatInputType) => {


	// Language Related
	const lng = useLanguage()
	const { t } = useTranslation(lng, 'home')

	// States
	const [value, setValue] = useState(v || '')

	// Get theme to create styles relying on it
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
	const handleFocus = useCallback((e: React.FocusEvent<HTMLInputElement>) => {

		if (theme.palette.mode === 'dark') {

			e.target.style.border = '2px solid white'
			e.target.style.boxShadow =
				'3px 3px 0px 0px rgba(0, 0, 0, 0.30) inset, -3px -3px 0px 0px rgba(255, 255, 255, 0.15) inset, 0px 0px 0px 6px rgba(255, 255, 255, 0.35)'

		}

		else {
			e.target.style.boxShadow =
				`0px 0px 0px 6px ${hexToRgba((theme.palette[color || 'primary'] as PaletteColor)[type], 0.35)}`
		}

	}, [color, theme.palette, type])

	// Input focus loss handler
	const handleBlur = useCallback((e: React.FocusEvent<HTMLInputElement>) => {

		const borderColor = (theme.palette[color || 'primary'] as PaletteColor)[type]

		// Styling
		e.target.style.border = `2px solid ${borderColor}`
		e.target.style.boxShadow = 'none'

	}, [color, theme.palette, type])

	// Warn user in the case of leaving with filled inputs
	const handleWarn = useCallback((e: BeforeUnloadEvent) => {
		e.preventDefault()
	}, [])

	const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {

		// Use custom onChange function in the case it exists
		if (customOnChange) customOnChange()
		else setValue(e.target.value)

	}, [customOnChange])

	useEffect(() => {

		// Apply events that warn you before leaving if you have inputs filled
		if (value && value?.length >= 1) {

			// Applying & Removing event listeners
			window.addEventListener('beforeunload', handleWarn)
			return () => window.removeEventListener('beforeunload', handleWarn)

		}
	}, [handleWarn, value])

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
})