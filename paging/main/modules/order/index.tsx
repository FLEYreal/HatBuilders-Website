// Material-UI
import { OrderButton } from '../main/styled-comps'

// Widgets
import { BigHatButton } from "@/widgets/button";
import { VkButton, DcButton } from '@/widgets/social-buttons'

// Features
import { Article, ArticleBlock } from "@/features/article";

// Assets
import hatbuildersLogo from '@/public/images/secondary-hb-sign.png'

// Styled Components
import { StyledWrapper, Blackout, ApplyJobButton } from './styled-comps';
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

            <Article align="center"  sx={{ mt: '80px' }}>

                <ArticleBlock.Image alt="HatBuilders Logo" src={hatbuildersLogo} />

                <ArticleBlock.TranslateText name="Time_to_Act" variant='h4' textAlign='center' sx={{ m:'0', color: 'white', textShadow: '-1px -1px  black, 1px 1px 0 black, 1px -1px 0 black, -1px  1px 0 black' }} />


            </Article>

            <Article textAlign='center' align="center" sx={{ display: 'grid' }}>

                <ArticleBlock.TranslateText name="Share_Your_Input" variant='h6' sx={{ justifySelf: 'center', color: 'white', maxWidth: '350px', letterSpacing: '1.7px', textShadow: '-1px -1px 1.5px black, 1px 1px 1.5px black, 1px  -1px 1.5px black, -1px 1px 1.5px black', mb: '15px' }} textAlign='center' />

                <Article textAlign='center' align="center" sx={{ mb: '160px', display: 'flex' }}>

                    <Flex align={['center', 'center']}>

                        <OrderButton color='primary' sx={{ mb: '7px' }}/>

                        <VkButton sx={{m:' 0 0 9px 15px'}} />

                        <ApplyJobButton sx={{ mb: '7px' }}/>

                        <DcButton sx={{m:'0 0 4px 15px'}} />

                        <ArticleBlock.TranslateText name="Reviews_Discord" sx={{ letterSpacing: '0.4px', color:'white', maxWidth: '290px', textShadow: '-1px -1px 1.5px black, 1px 1px 1.5px black, 1px  -1px 1.5px black, -1px  1px 1.5px black', mt: '5px' }} textAlign='center' variant='h6'/>


                    </Flex>

                </Article>

            </Article>

            <Blackout/>
        </StyledWrapper>

    )
}