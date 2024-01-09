// Material-UI
// ...

// Emotion
// ...

// Widgets
// import { HatButton } from "@/widgets/button";
// import { HatSwitch } from "@/widgets/switch";
// import { HatInput } from "@/widgets/input";

// Features
import { Wrapper } from "@/features/wrappers";
import { Flex } from '@/features/wrappers'
import { Article, ArticleBlock } from "@/features/article";

// Styles
import { BottomPlatform, CyberpukBanner } from './styles'

// Assets
import hatbuildersSign from '@/public/images/secondary-hb-sign.png'

// Interfaces & Types
interface MainInterface {

}

// Main Component
export function Main({ }: MainInterface) {

    return (
        <Flex stretchX stretchY component='div' align={['start', 'center']}>

            <CyberpukBanner />

            <BottomPlatform stretchX align={['center', 'space-between']}>

            </BottomPlatform>

            {/* CONTENT PART: Everything that has to fit in user's view frame has to be here, otherwise use might not see everything! */}
            <Wrapper sx={{ pt: '64px' }}>
                <Article align="center" textAlign="center">
                    <ArticleBlock.Image src={hatbuildersSign} alt="HatBuilders Sign" sx={{ m: 0 }} />
                    <ArticleBlock.TranslateText textAlign="center" sx={{ m: -2.5, color: '#ffffff' }} name="main_title" ns="home"/>
                </Article>
            </Wrapper>

        </Flex>

    )
}