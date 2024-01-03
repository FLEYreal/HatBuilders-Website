// Material-UI
import { Divider } from '@mui/material'

// Features
import { More, ScrollDots, DisplayModules, StepfulProvider } from '@/features/stepful-display'

// Assets
import greenHatbuilders from '@/public/images/greenHatbuilders.svg'

// Widgets
import { HatButton } from '@/widgets/button'
import { HatInput } from '@/widgets/input'
import { Modal } from '@/widgets/modal'
import { HatSwitch } from '@/widgets/switch'
import { Header } from '@/widgets/header'
import { Wrapper } from '@/widgets/wrapper/ui'
import { HatText} from '@/widgets/hat-text/ui/text';
import { HatDivider} from '@/widgets/hat-text/ui/divider';
import { HatTitle} from '@/widgets/hat-text/ui/title';

// Shared
import { useTranslation } from '@/shared/i18n'

// Styles
import './globals.css'

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
				<Wrapper>

					<HatText content={'is a project whose goal is not just building best minecraft buildings to clients we love and care about but to do it more efficiently, fun and cheap!'}/>

					<HatDivider/>

					<HatTitle src={greenHatbuilders} />

				</Wrapper>
					
					

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
