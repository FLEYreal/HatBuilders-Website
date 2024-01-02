'use client'

// Basic
import { useMemo } from 'react'
import Image from 'next/image'

// Widgets
import { HatButton } from '@/widgets/button/ui'

// Assets
import redHatbuilders from '@/public/images/redHatbuilders.svg'
import greenHatbuilders from '@/public/images/greenHatbuilders.svg'

// MUI
import { useTheme } from '@emotion/react'
import { Typography } from '@mui/material'
import { Theme } from '@mui/material/styles'
import { Divider } from '@mui/material'

// Interfaces
import { HatTextType } from '../types'

export function HatText({
	type,
	content,
	sx,
	variant,
	page,
}: HatTextType & { page: string }) {

	const theme = useTheme() as Theme

	const getPageStyles = (page: string) => {
		switch (page) {
			case 'main':
				return {
					title: {
						top: '87px',
					},
					text: {
						width: '508px',
						height: '24px',
						top: '165px',
						left: '726px',
						fontWeight: '400',
						fontSize: '20px',
						lineHeight: '24px',
						letterSpacing: '5%',
					},
					// Add other styles for main page elements
				}
			case 'about':
				return {
					title: {
						top: '140px',
						marginBottom:'0px',
					},
					text: {
						width: '511px',
						fontWeight: '400',
						fontSize: '18px',
						lineHeight: '21.6px',
						letterSpacing: '5%',
					},
					actions:{
							background: theme.palette.info.dark,
							width: '60px',
							height: '60px',
							flexShrink: '0', 
						},
					divider: {
						margin:'16px 0 16px 0',
						width: '520px',
						height: '1px',
					},
				}

			default:
				return {}
		}
	}

	const componentStyles = useMemo(() => {
		const pageStyles = getPageStyles(page)

		switch (type) {
			case 'title':
				return {
					marginTop: pageStyles.title.top,
					...pageStyles.title, // Merge page-specific title styles
					...sx,
				}
			case 'text':
				return {
					...pageStyles.text, // Merge page-specific text styles
					color: '#CECECE',
					...sx,
				}
			case 'actions':
				return {
					...pageStyles.actions,
					...sx,
				}
			case 'divider':
				return {
					borderBottom: `2px solid ${theme.palette.divider}`,
					bgcolor:
						variant === 'green'
							? theme.palette.primary.dark
							: theme.palette.divider,
					...pageStyles.divider,
					...sx,
				}
			default:
				return {}
		}
	}, [type, sx, theme.palette.divider, page, variant])

	return (
		<>
			{type === 'title' && (
				<Image
					src={variant === 'red' ? redHatbuilders : greenHatbuilders}
					alt='HatBuild'
					width={450}
					height={112.5}
					style={componentStyles}
				/>
			)}

			{type === 'text' && (
				<Typography variant='body1' component='div' sx={componentStyles}>
					{content}
				</Typography>
			)}

			{type === 'actions' && (
				<HatButton color='info' sx={componentStyles}>
					{content}
				</HatButton>
			)}

			{type === 'divider' && <Divider sx={componentStyles} />}
		</>
	)
}
