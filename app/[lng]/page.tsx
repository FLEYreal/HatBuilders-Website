// Material-UI
import { Divider } from '@mui/material'

// Features
import { More, ScrollDots, DisplayModules, StepfulProvider } from '@/features/stepful-display'

// Widgets
import { HatButton } from '@/widgets/button'
import { HatInput } from '@/widgets/input'
import { Modal } from '@/widgets/modal'
import { HatSwitch } from '@/widgets/switch'
import { Header } from '@/widgets/header'

// Assets
import dc from '@/public/icons/social/dc.svg'
import vk from '@/public/icons/social/vk.svg'

// Shared
import { useTranslation } from '@/shared/i18n'

// Styles
import './globals.css'
import { HatText } from '@/widgets/hat-text'
import Image from 'next/image'

export default async function Home({
	params: { lng },
}: {
	params: { lng: string }
}) {
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const { t } = await useTranslation(lng, 'home')

	return (
		<StepfulProvider
			id='main'
			modules={[
				<>

<HatButton color='primary' variant='outlined'>{t('discord')}</HatButton>
					<HatButton color='secondary' variant='outlined'>{t('discord')}</HatButton>
					<HatButton color='info' variant='outlined'>{t('discord')}</HatButton>
					<HatButton color='warning' variant='outlined'>{t('discord')}</HatButton>
					<HatButton color='error' variant='outlined'>{t('discord')}</HatButton>
					
					
					
				</>,
				<>
					
					<HatText type='title' variant='green' page= 'about'/>

					<HatText page= 'about' type='text' content='is a project whose goal is not just building best minecraft buildings to clients we love and care about but to do it more efficiently, fun and cheap!'/>

					<HatText page= 'about' type='divider'/>


					<HatText page= 'about' type='text' content='We can build the project of any scale from just a little village for your SMP server to big maps for UHC and whole lot more, if you’re interested, you can order any time, we’re always happy to hear you out!'/>

					<HatText page= 'about' type='divider' variant='green' sx={{margin:'52px 0 53px 0'}}/>

					<HatText page= 'about' type='text' content='If you love building, if you want to make money doing what you love, you can work with us. apply!'/>

					<HatText page= 'about' type='divider' sx={{margin:'16px 0'}}/>

					<HatText page= 'about' type='text' content='You also able to order from our discord server or vk group!'/>

					<HatText page= 'about' type='divider'/>




					<HatButton color='primary'>{t('order')}</HatButton>
					<HatText page= 'about' type='actions' color='' content={<Image src={dc} alt="discord" style={{ height: '43px', width: '43px' }} />}>
					</HatText>
					<HatText page= 'about' type='actions' color='' content={<Image src={vk} alt="discord" style={{ height: '43px', width: '43px' }} />}>
					</HatText>
				</>,
				<>
					<HatInput color='primary' />
					<HatInput color='secondary' />
					<HatInput color='info' />
					<HatInput color='warning' />
					<HatInput color='error' />

					<Modal variant='black'>Modal test 1</Modal>
					<Modal variant='gray'>Modal test 2</Modal>

					<Divider sx={{ m: '16px' }} />

					<HatSwitch />
				</>

			]}>

			{/* Main page special Header */}
			<Header />

			{/* Helpful components of stepful-display feature */}
			<ScrollDots />
			<More />

			{/* Component that displays all modules from "modules" attribute of "StepfulProvider" */}
			<DisplayModules component="main" sx={{ paddingTop: '56px' }} />
		</StepfulProvider>
	)
}
