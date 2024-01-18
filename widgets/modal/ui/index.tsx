'use client'

// Basic
import React, { useState, useMemo, cloneElement } from 'react'
import { createPortal } from 'react-dom';

// MUI
import { Dialog, DialogProps, DialogTitle, SxProps } from '@mui/material'

// Widgets
import { Cross } from '@/widgets/cross'

// Interfaces

export interface HatModalInterface {
	children?: React.ReactNode;
	onClick?: () => void;
	sx?: SxProps;
	element?: React.ReactNode;
	dialogProps?: Omit<DialogProps, 'open'>;
}

export function HatModal({ element, children, dialogProps }: HatModalInterface) {

	// State that defines wether modal is open
	const [open, setOpen] = useState(false)

	// Clone element with click event
	const elementProps = (element as React.ReactElement).props;
	const clonedElement = cloneElement(element as React.ReactElement, {

		// Open modal on click
		onClick: () => setOpen(true),

		// Parse element's already existing props
		...elementProps

	})

	// Memoized Styles
	const modalStyles = useMemo(() => {
		return {
			textAlign: 'center',
			modal: {
				display: 'flex',
				flexDirection: 'column-reverse',
				alignItems: 'center',
				padding: '15px',
				justifyContent: 'flex-end',
				height: '600px',
				boxShadow: '5px 5px 0px 0px rgba(255, 255, 255, 0.15) inset, -5px -5px 0px 0px rgba(0, 0, 0, 0.30) inset',
			},
		}
	}, [])

	return (
		<>

			{/* Paste transformed element */}
			{clonedElement}

			{/* Modal that's teleported to body element */}
			{createPortal(

				<Dialog
					open={open}
					onClose={() => setOpen(false)}
					fullWidth
					maxWidth='xs'
					PaperProps={{
						elevation: 0
					}}

					{...dialogProps}
				>

					<DialogTitle sx={modalStyles.modal}>

						{children}

						<div style={{ alignSelf: 'flex-end', marginRight: '10px' }}>
							<Cross onClose={() => setOpen(false)} />
						</div>

					</DialogTitle>

				</Dialog>,

				document.body
			)}

		</>
	)
}
