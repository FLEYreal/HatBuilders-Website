// Basics
// ...

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
// import { Article, ArticleSection, ArticleBlock } from "@/features/article";

// Shared
// import { styledDefaultInterface } from "@/shared/mui";

// Assets
// ...

// Styles
import { BottomPlatform } from './styles'

// Interfaces & Types
interface MainInterface {

}

// Main Component
export function Main({ }: MainInterface) {

    return (
        <Flex stretchX stretchY component='main'>

            <Flex
                css={BottomPlatform}
                stretchX align={['center', 'space-between']}>

            </Flex>

            {/* CONTENT PART: Everything that has to fit in user's view frame has to be here, otherwise use might not see everything! */}
            <Wrapper sx={{ pt: '56px' }}>
                Hello World
            </Wrapper>

        </Flex>

    )
}