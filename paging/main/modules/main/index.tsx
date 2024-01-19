// Material-UI
import { Typography } from "@mui/material";

// Widgets
import { VkButton, DcButton, TgButton } from '@/widgets/social-buttons';

// Features
import { Column, Row, Wrapper } from "@/features/wrappers";
import { Flex } from '@/features/wrappers'
import { Article, ArticleBlock } from "@/features/article";
import { Appearance } from '@/features/animations'

// Insides
import { BottomPlatform, CyberpukBanner, StyledWrapper, OrderButton } from './styled-comps'

// Assets
import hatbuildersSign from '@/public/images/secondary-hb-sign.png'
import hatbuildersSignSmall from '@/public/images/secondary-hb-sign-small.webp'

import cyberpuk from '@/public/images/cyberpuk.png'
import cyberpukSmall from '@/public/images/cyberpuk-small.webp'
import { OrderModal } from "@/widgets/modals";


// Main Component
export function Main() {

    return (
        <StyledWrapper stretchX stretchY component='div' align={['start', 'center']}>

            {/* Logo & Title Component */}
            <Wrapper sx={{ pt: '64px' }}>

                <Article align="center" textAlign="center">

                    <Appearance delay={0.75}>
                        <ArticleBlock.Image isBlurry style={{ margin: 0 }} blurryProps={{
                            image: { src: hatbuildersSign, alt: "HatBuilders Sign" },
                            srcSmall: hatbuildersSignSmall.src,
                            progress: { size: 20, thickness: 2 }
                        }} />
                    </Appearance>

                    <Appearance isSx delay={1.25}>
                        <ArticleBlock.TranslateText textAlign="center" sx={{ m: -2.5, color: '#ffffff' }} name="main_title" ns="home" />
                    </Appearance>

                </Article>

            </Wrapper>

            {/* Styled Component: Background Banner of Main Module */}
            <CyberpukBanner
                image={{
                    fill: true,
                    unoptimized: true,
                    alt: "Background Cyberpunk Banner",
                    src: cyberpuk
                }}
                progress={{
                    sx: { mt: "20vh" }
                }}
                srcSmall={cyberpukSmall.src}
            />

            {/* Styled Component: Platform at module's bottom with order button and etc... */}
            <BottomPlatform stretchX align={['center', 'space-between']} flow='row nowrap'>

                {/* Social Media Buttons */}
                <Row align={['center', 'start']} sx={{ ml: '24px', display: { xs: 'none', md: 'flex' } }}>
                    <DcButton isTransparent /><VkButton isTransparent /><TgButton isTransparent/>
                </Row>

                {/* Order Button Wrapper */}
                <Flex sx={{
                    position: 'absolute', top: {
                        xs: '-38px',
                        md: '-28px',
                        lg: '-30px',
                        xl: '-40px'
                    }
                }}>
                    <OrderModal element={<OrderButton />}/> {/* Styled Component of Order Button */}
                </Flex>

                {/* Credits to website's creators */}
                <Column align={['end', 'end']} stretchX={false} sxStyles={{ m: 0 }} sx={{
                    width: '180px', mr: '24px', gap: '5px', display: { xs: 'none', md: 'flex' }
                }}>

                    <Typography variant="h5"><span title="Discord ID of Owner & Developer">@fley0609 [ Dev ]</span></Typography>
                    <Typography variant="h5"><span title="Discord ID of 3D Modeller">@henem_ [ Art ]</span></Typography>
                    <Typography variant="h5"><span title="Discord ID of 3D Modeller">@adaola [ Art ]</span></Typography>

                </Column>

            </BottomPlatform>

        </StyledWrapper >

    )
}