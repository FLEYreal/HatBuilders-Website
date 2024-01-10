// Material-UI
import { Typography } from "@mui/material";

// Widgets
import { VkButton, DcButton } from '@/widgets/social-buttons';

// Features
import { Column, Row, Wrapper } from "@/features/wrappers";
import { Flex } from '@/features/wrappers'
import { Article, ArticleBlock } from "@/features/article";

// Insides
import { BottomPlatform, CyberpukBanner, StyledWrapper, OrderButton } from './styled-comps'

// Assets
import hatbuildersSign from '@/public/images/secondary-hb-sign.png'

// Main Component
export function Main() {

    return (
        <StyledWrapper stretchX stretchY component='div' align={['start', 'center']}>

            {/* Logo & Title Component */}
            <Wrapper sx={{ pt: '64px' }}>

                <Article align="center" textAlign="center">
                    <ArticleBlock.Image src={hatbuildersSign} alt="HatBuilders Sign" sx={{ m: 0 }} />
                    <ArticleBlock.TranslateText textAlign="center" sx={{ m: -2.5, color: '#ffffff' }} name="main_title" ns="home" />
                </Article>

            </Wrapper>

            {/* Styled Component: Background Banner of Main Module */}
            <CyberpukBanner />

            {/* Styled Component: Platform at module's bottom with order button and etc... */}
            <BottomPlatform stretchX align={['center', 'space-between']} flow='row nowrap'>

                {/* Social Media Buttons */}
                <Row align={['center', 'start']} sx={{ ml: '24px', display: { xs: 'none', md: 'flex' } }}>
                    <DcButton isTransparent /><VkButton isTransparent />
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
                    <OrderButton /> {/* Styled Component of Order Button */}
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