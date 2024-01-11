// Pages
import {
	MainModule,
	AboutModule,
	PortfolioModule,
	HireModule,
	OrderModule
} from '@/paging/main'

// Widgets
import { Header } from '@/widgets/header'

// Features
import { More, ScrollDots, DisplayModules, StepfulProvider } from '@/features/stepful-display'

export default async function Home() {

	return (
		<StepfulProvider
			id='main'
			modules={[
				<MainModule key={0} />,
				<AboutModule key={1} />,
				<PortfolioModule key={2} />,
				<HireModule key={3} />,
				<OrderModule key={4} />
			]}>

			{/* Main page special Header */}
			<Header />

			{/* Helpful components of stepful-display feature */}
			<ScrollDots />
			<More />

			{/* Component that displays all modules from "modules" attribute of "StepfulProvider" */}
			<DisplayModules component="main" sx={{
				overflow: 'clip',
				position: 'absolute',
				top: 0,
				left: 0,
				width: '100%'
			}} />
		</StepfulProvider>
	)
}