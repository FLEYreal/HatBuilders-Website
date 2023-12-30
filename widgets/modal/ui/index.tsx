'use client'

// Basic
import { useState } from 'react'

// MUI
import { Button, Dialog, DialogTitle, SxProps } from '@mui/material'

// Widgets
import { Cross } from '@/widgets/cross'

// Interfaces
export interface HatModalType {
	children?: React.ReactNode
	onClick?: () => void
	sx?: SxProps
	variant?: 'black' | 'gray'
}

export function Modal({ variant = 'black', children }: HatModalType) {
	const [open, setOpen] = useState(false)

	// Open a modal window
	const handleOpenModal = () => {
		setOpen(true)
	}

	// Closing the modal window
	const handleCloseModal = () => {
		setOpen(false)
	}

	// Styling variables
	const modalBackground = variant === 'black' ? '#1F1F1F' : '#252525'

	const modalStyles = {
		textAlign: 'center',
		modal: {
			background: modalBackground,
			display: 'flex',
			flexDirection: 'column-reverse',
			alignItems: 'center',
			padding: '15px',
			justifyContent: 'flex-end',
			height: '600px',
			boxShadow: '5px 5px 0px 0px rgba(255, 255, 255, 0.15) inset, -5px -5px 0px 0px rgba(0, 0, 0, 0.30) inset',
		},
	}

	return (
		<div >
			<Button onClick={handleOpenModal}>Open Modal</Button>
			<Dialog open={open} onClose={handleCloseModal} fullWidth maxWidth='xs'>
				<DialogTitle sx={modalStyles.modal}>
					{children}
					<div style={{ alignSelf: 'flex-end', marginRight: '10px' }}>
						<Cross onClose={handleCloseModal} />
					</div>
				</DialogTitle>
			</Dialog>

		</div>
	)
}
