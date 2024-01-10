// Material-UI
import { Box } from '@mui/material'

// Widgets
import { BigHatButton } from "@/widgets/button";
import { VkButton, DcButton } from '@/widgets/social-buttons'

// Features
import { Article, ArticleBlock } from "@/features/article";

// Assets
import hatbuildersLogo from '@/public/images/secondary-hb-sign.png'

// Styled Components
import { StyledWrapper } from './styled-comps';
import { Flex } from '@/features/wrappers';

// Main Component
export function Order() {
    return (

        <StyledWrapper
            stretchY
            flow='column nowrap'
            align={['center', 'space-between']}
            textAlign='center'
        >

            <Article align="center" sx={{ mt: '80px' }}>

                <ArticleBlock.Image alt="HatBuilders Logo" src={hatbuildersLogo} />

                <ArticleBlock.Text variant='h4' textAlign='center' sx={{ m: '0', color: 'white', textShadow: '-1px -1px  black, 1px 1px 0 black, 1px -1px 0 black, -1px  1px 0 black' }}>
                    It&apos;s your best time to act!
                </ArticleBlock.Text>

            </Article>

            <Article textAlign='center' align="center" sx={{ display: 'grid' }}>

                <ArticleBlock.Text variant='h6' sx={{ justifySelf: 'center', color: 'white', fontWeight: '700', maxWidth: '350px', letterSpacing: '1.5px', textShadow: '-1px -1px 0 black, 1px 1px 0 black, 1px -1px 0 black,-1px 1px 0 black', m: '0 0 15px 0' }} textAlign='center'>
                    We don&apos;t know about you yet but it&apos;s your freedom to let us know your idea or will to work! Decide!
                </ArticleBlock.Text>

                <Article textAlign='center' align="center" sx={{ mb: '160px', display: 'flex' }}>

                    <Flex align={['center', 'flex-end']}>

                        <BigHatButton typographyProps={{ variant: "h2", sx: { color: '#ffffff' } }} sx={{ mb: '7px' }} type="main" color="primary">
                            ORDER
                        </BigHatButton>

                        <BigHatButton typographyProps={{ variant: "h3", sx: { color: '#ffffff' } }} type="main" color="secondary">
                            APPLY FOR JOB
                        </BigHatButton>

                        <ArticleBlock.Text sx={{ letterSpacing: '0.1px', fontSize: '10px !important', width: '290px', textShadow: '-1px -1px 0 black, 1px 1px 0 black, 1px  -1px 0 black, -1px  1px 0 black', mt: '5px' }} textAlign='center' variant='h6'>
                            If you&apos;re looking for reviews, you can find them on discord server
                        </ArticleBlock.Text>

                    </Flex>


                    <Box sx={{ width: '60px', height: '60px', m: '9px 0 0 15px', p: '0' }}>
                        <VkButton /><DcButton />
                    </Box>


                </Article>

            </Article>

        </StyledWrapper>

    )
}