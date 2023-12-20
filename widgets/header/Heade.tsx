'use client'

// Basics
import Image from 'next/image'
import Link from 'next/link'
import dynamic from 'next/dynamic'

// Material-UI
import { Box } from '@mui/material'

// Widgets
import { ThemeSelector } from '@/widgets/theme-selector'
import { Wrapper } from '@/widgets/wrapper/ui'
const LanguageSelector = dynamic(
	() =>
		import('@/widgets/lng-selector').then((module) => ({
			default: module.LanguageSelector,
		})),
	{
		ssr: false,
	}
)

// Assets
import icon from '@/public/images/logo.png'

const Heade = () => {
	// Random funky phrases appearing instead of name near logo in the header
	const phrases: string[] = [
		'HatBuilders',
		'HatBuilders',
		'HatBuilders',
		'HatBuilders',
		'HatBuilders',
		'HatBuilders',
		'Innovative',
		'Caring',
		'Creative',
		'Workaholics?',
		'Inventive',
		'Long Story Short: The Best',
		'Curios',
		'Fast, Cheap, High-Quality',
		'(〃￣︶￣)人(￣︶￣〃)',
		'Rare Phrase?!',
		'Sample Text',
		'Just HatBuilders',
		'Building the Future',
		'',
		'HeadBuilders',
		'HatBuilders',
		'Responsible!',
		'Ответственные!',
		'Unique',
		'Insane Builders, Careful!',
		'Bright like a sun!',
	]
	const randomPhrase: string =
		phrases[Math.floor(Math.random() * phrases.length)]

	const navLinks = ['Main', 'About', 'Portfolio', 'Were Hiring', 'Order']

	const renderNavLink = (content: string) => {
		const scrollToId = `${content.toLowerCase()}Section`

		const handleClickNav = () => {
			const element = document.getElementById(scrollToId)
			if (element) {
				element.scrollIntoView({ behavior: 'smooth' })
			}
		}

		return (
			<ul key={content}>
				<li style={{ margin: '0', padding: '0', listStyle: 'none' }}>
					<button style={buttonStyles} onClick={handleClickNav}>
						{content}
					</button>
				</li>
			</ul>
		)
	}

		//Nav button styles

		const buttonStyles = {
			padding: '0',
			border: 'none',
			backgroundColor: 'inherit',
			color: 'white',
			cursor: 'pointer',
			fontFamily: 'inherit',
		}

		//Styles for the header container

		const headerContainerStyles = {
			position: 'fixed',
			top: '0',
			left: '0',
			width: '100%',
			height: '56px',
			background: 'rgba(0, 0, 0, 0.40)',
			boxShadow: '0px 4px 12px 2px rgba(0, 0, 0, 0.20)',
			backdropFilter: 'blur(8px)',
			display: 'flex',
			alignContent: 'center',
			justifyContent: 'space-between',
			zIndex: '1000',
		}

	return (
		// Header Container
		<Box component='header' sx={headerContainerStyles}>
			{/* Wrapper setups proper width */}
			<Wrapper
				sx={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'space-between',
				}}
			>
				{/* Left: Logo Section */}
				<Box>
					<span title='Return to Main Page'>
						<Link
							href='/'
							style={{
								display: 'flex',
								alignItems: 'center',
								fontSize: '14px',
								color: '#fff',
								textDecoration: 'none',
							}}
						>
							{/* Wrapper for icon to use SX styling for sizes */}
							<Box
								sx={{
									width: '40px',
									height: '40px',
									marginRight: '12px',
								}}
							>
								<Image
									src={icon}
									alt='HatBuilders'
									style={{
										width: 'inherit',
										height: 'inherit',
										borderRadius: '100%',
									}}
								/>
							</Box>
							{randomPhrase}
						</Link>
					</span>
				</Box>
				{/* Center: Navigation Section */}
				<Box>
					<nav style={{ display: 'flex', padding: '0', border: 'none' }}>
						{navLinks.map((nav) => renderNavLink(nav))}
					</nav>
				</Box>

				{/* Right: Settings Seciton */}
				<Box
					sx={{
						display: 'flex',
						alignContent: 'center',
						justifyContent: 'center',
						flexFlow: 'row nowrap',
					}}
				>
					<ThemeSelector iconColor='secondary' switchColor='secondary' />
					<LanguageSelector color='secondary' />
				</Box>
			</Wrapper>
		</Box>
	)
}

export default Heade
