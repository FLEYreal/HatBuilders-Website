// Material-UI
import { Divider, Box } from '@mui/material'

// Features
import { More, ScrollDots, DisplayModules, StepfulProvider } from '@/features/stepful-display'

// Widgets
import { HatButton } from '@/widgets/button'
import { HatInput } from '@/widgets/input'
import { Modal } from '@/widgets/modal'
import { HatSwitch } from '@/widgets/switch'
import { Header } from '@/widgets/header'

// Features
import { Article, ArticleSection, ArticleBlock } from '@/features/article'
import { Wrapper, Flex, Center } from '@/features/wrappers'

// Shared
import { useTranslation } from '@/shared/i18n/modal'

// Assets
import Image from 'next/image'
import hatbuildersSign from '@/public/images/greenHatbuilders.svg'
import Cyberpuk from '@/public/images/Cyberpuk_fin.jpg'
import minecraft from '@/public/images/croped.png'
import dc from '@/public/icons/social/discord.svg'
import vk from '@/public/icons/social/vkontakte.svg'



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
					<Flex align={['start', 'start']} sx={{ backgroundImage: `url(${Cyberpuk.src})`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '81.5vh' }}>
						<Article align="center" textAlign="start">
							<ArticleBlock.Image alt="HatBuilders Logo" src={minecraft} />
							<ArticleBlock.Text sx={{ marginTop: '-1px' }}>Minecraft Builders That Construct the Future!</ArticleBlock.Text>
						</Article>
					</Flex>

					<Flex align={['start', 'start']} sxStyles={{ width: '60px', height: '60px', marginRight: '16px' }} sx={{ margin: '28px 0 27px 33px' }}>

						<HatButton variant="contained" type="discord" color="info" >
							<Image src={dc} alt='discord' height={32} width={32} />
						</HatButton>

						<HatButton variant="contained" type="vk" color="info" >
							<Image src={vk} alt='vkontakte' height={38} width={38} />
						</HatButton>

					</Flex>
				</>,

				<>
					<Wrapper>
						<Article align="start" textAlign="start">
							<ArticleSection>
								<ArticleBlock.Image alt="HatBuilders Logo" src={hatbuildersSign} />
								<ArticleBlock.Text variant='h1' textAlign="center">Hello World!</ArticleBlock.Text>
								<ArticleBlock.Text variant='h3'>This an Article usage example, have fun!</ArticleBlock.Text>
							</ArticleSection>
							<ArticleBlock.Action.Divider />
							<ArticleSection>
								<ArticleBlock.Text variant='h2'>Its another Section of an article</ArticleBlock.Text>
								<ArticleBlock.Text variant='h4'>A showcase of article. Its not finished yet tho. Tons of work has left to do!</ArticleBlock.Text>
							</ArticleSection>
							<ArticleSection>
								<ArticleBlock.Action>
									<HatButton>Button 1</HatButton>
									<HatButton>Button 2</HatButton>
								</ArticleBlock.Action>
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
				</>,
				<>
						<Center stretchY x y sx={{ boxSizing: 'border-box', padding: '0 !important', border: '1px solid white', width: '50% !important' }}>
							<Box>Hello Worlding</Box>
							<Box>Hello Worlding</Box>
							<Box>Hello Worlding</Box>
							<Box>Hello Worlding</Box>
						</Center>
				</>,
				<>
					Hello World
				</>

			]}>

			{/* Main page special Header */}
			<Header />

			{/* Helpful components of stepful-display feature */}
			<ScrollDots />
			<More />

			{/* Component that displays all modules from "modules" attribute of "StepfulProvider" */}
			<DisplayModules component="main" />
		</StepfulProvider>
	)
}