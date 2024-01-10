// Material-UI
import { Typography } from "@mui/material";

// Widgets
import { BigHatButton } from "@/widgets/button";
import { VkButton, DcButton } from '@/widgets/social-buttons';

// Features
import { Column, Row, Wrapper } from "@/features/wrappers";
import { Flex } from '@/features/wrappers'
import { Article, ArticleBlock } from "@/features/article";

// Styles
import { BottomPlatform, CyberpukBanner } from './styles'

// Assets
import hatbuildersSign from '@/public/images/secondary-hb-sign.png'

// Main Component
export function Main() {

    return (
        <Flex stretchX stretchY component='div' align={['start', 'center']}>

            <CyberpukBanner />

            <BottomPlatform stretchX align={['center', 'space-between']} flow='row nowrap'>
                <Row align={['center', 'start']} sx={{ ml: '24px' }}>
                    <DcButton/><VkButton/>
                </Row>
                <Flex sx={{ position: 'absolute', top: '-40px' }}>
                    <BigHatButton color="secondary" name="order" sx={{
                        p: '24px 80px',
                    }} />
                </Flex>
                <Column stretchX={false} sxStyles={{ m: 0 }} sx={{ width: '250px' }}>
                    <Typography variant="h5">
                        @henem [3D Modeller]
                    </Typography>
                    <Typography variant="h5">
                        @fley0609 [Developer]
                    </Typography>
                </Column>
            </BottomPlatform>

            {/* CONTENT PART: Everything that has to fit in user's view frame has to be here, otherwise use might not see everything! */}
            <Wrapper sx={{ pt: '64px' }}>
                <Article align="center" textAlign="center">
                    <ArticleBlock.Image src={hatbuildersSign} alt="HatBuilders Sign" sx={{ m: 0 }} />
                    <ArticleBlock.TranslateText textAlign="center" sx={{ m: -2.5, color: '#ffffff' }} name="main_title" ns="home" />
                </Article>
            </Wrapper>

        </Flex >

    )
}