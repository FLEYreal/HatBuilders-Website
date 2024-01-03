// Material-UI
import { Divider, Typography } from '@mui/material'

// Features
import { More, ScrollDots, DisplayModules, StepfulProvider } from '@/features/stepful-display'

// Widgets
import { HatButton } from '@/widgets/button'
import { HatInput } from '@/widgets/input'
import { Modal } from '@/widgets/modal'
import { HatSwitch } from '@/widgets/switch'
import { Header } from '@/widgets/header'
import { Wrapper } from '@/widgets/wrapper/ui'

// Features
import { Article, ArticleSection, ArticleBlock } from '@/features/article'

// Shared
import { useTranslation } from '@/shared/i18n/modal'

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

						<Article>
							<ArticleSection>
								<ArticleBlock.Text variant='h1'>Hello World!</ArticleBlock.Text>
								<ArticleBlock.Text variant='h3'>This an Article usage example, have fun!</ArticleBlock.Text>
							</ArticleSection>
							<ArticleSection>
								<ArticleBlock.Text variant='h2'>Its another Section of an article</ArticleBlock.Text>
								<ArticleBlock.Text variant='h4'>A showcase of article. Its not finished yet tho. Tons of work has left to do!</ArticleBlock.Text>
							</ArticleSection>
						</Article>

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
