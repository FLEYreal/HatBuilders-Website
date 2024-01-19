'use client'

// Basic
import React, { useState, useMemo, cloneElement } from 'react'
import { createPortal } from 'react-dom';

// MUI
import { Dialog, DialogProps, DialogTitle, DialogTitleProps, SxProps } from '@mui/material'

// Widgets
import { Cross } from '@/widgets/cross'

// Interfaces

export interface HatModalInterface {
	children?: React.ReactNode;
	onClick?: () => void;
	sx?: SxProps;
	element?: React.ReactNode;
	dialogTitleProps?: DialogTitleProps;
	dialogProps?: Omit<DialogProps, 'open'>;
}

export function HatModal({ element, children, dialogTitleProps, dialogProps }: HatModalInterface) {

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
	const modalStyles = useMemo(() => ({

		dialog: {

			'& .MuiDialog-paper': {
				maxWidth: '100%',
				margin: '0'
			}

		},

		dialogTitle: {
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
			padding: 'calc(1.2vw + 20px)',
			justifyContent: 'flex-end',
			minHeight: '200px',
			boxShadow: '5px 5px 0px 0px rgba(255, 255, 255, 0.15) inset, -5px -5px 0px 0px rgba(0, 0, 0, 0.30) inset',
		}

	}), [])

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
					PaperProps={{
						elevation: 0
					}}

					{...dialogProps}

					sx={Object.assign({}, modalStyles.dialog, dialogProps?.sx)}
				>

					<DialogTitle

						{...dialogTitleProps}

						sx={Object.assign({}, modalStyles.dialogTitle, dialogTitleProps?.sx)}

					>


						<Cross onClose={() => setOpen(false)} sx={{
							position: 'absolute',
							right: '16px',
							top: '16px'
						}} />


						{children}

					</DialogTitle>

					{dialogProps?.children}

				</Dialog>,

				document.body
			)}

		</>
	)
}
