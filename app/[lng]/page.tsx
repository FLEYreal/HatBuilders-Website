// Features
import { More, ScrollDots, DisplayModules, StepfulProvider } from '@/features/stepful-display'

// Pages
import { 
	MainModule, 
	AboutModule,
	PortfolioModule,
	HireModule,
	OrderModule
} from '@/pages/main'

// Widgets
import { Header } from '@/widgets/header'

// Shared
import { useTranslation } from '@/shared/i18n/modal'



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
				<MainModule key={0}/>,
				<AboutModule key={1}/>,
				<PortfolioModule key={2}/>,
				<HireModule key={3}/>,
				<OrderModule key={4} />

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