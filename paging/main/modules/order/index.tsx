
// Widgets
import { VkButton, DcButton } from '@/widgets/social-buttons'

// Features
import { Article, ArticleBlock } from "@/features/article";
import { Appearance } from '@/features/animations';

// Assets
import hatbuildersLogo from '@/public/images/secondary-hb-sign.png'

// Styled Components
import { StyledWrapper, Blackout, ApplyJobButton, JobApplicationButton } from './styled-comps';
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

            {/* Upper part with "HATBUILDERS" sign and title */}
            <Article align="center" sx={{ mt: '80px' }}>

                {/* Hatbuilders Sign */}
                <Appearance dur={0.5} delay={0.6}>
                    <ArticleBlock.Image alt="HatBuilders Logo" src={hatbuildersLogo} />
                </Appearance>

                {/* General Title */}
                <Appearance isSx dur={0.5} delay={1}>
                    <ArticleBlock.TranslateText
                        name="Time_to_Act"
                        variant='h4'
                        textAlign='center'
                        sx={{
                            m: '-18px',
                            fontSize: { xl: 16, lg: 15, md: 13, sm: 12 },
                            color: 'white',
                            textShadow: '-1px -1px  black, 1px 1px 0 black, 1px -1px 0 black, -1px  1px 0 black'
                        }}
                    />
                </Appearance>


            </Article>

            {/* Bottom part with action buttons */}
            <Appearance dur={0.5} delay={1.4}>

                <Article
                    textAlign='center'
                    align="center"
                    sx={{ display: 'grid' }}
                >

                    {/* Description Text */}
                    <ArticleBlock.TranslateText
                        name="Share_Your_Input"
                        variant='h6'
                        textAlign='center'
                        sx={{
                            fontSize: { xl: 15, lg: 14, md: 12, sm: 10 },
                            justifySelf: 'center',
                            color: 'white',
                            maxWidth: { xl: 350, lg: 315, md: 290, sm: 265 },
                            letterSpacing: '1.3px',
                            textShadow: '-1px -1px 1.5px black, 1px 1px 1.5px black, 1px  -1px 1.5px black, -1px  1px 1.5px black',
                            mb: '10px'
                        }}
                    />

                    {/* Action Bar */}
                    <Article textAlign='center' align="center" sx={{ mb: '160px', display: 'flex' }}>

                        {/* Buttons & Botton subtitle */}
                        <Flex align={['center', 'center']}>

                            {/* Buttons */}
                            <JobApplicationButton color='primary' sx={{ mb: '7px' }} />
                            <VkButton sx={{ m: ' 0 0 9px 15px' }} />
                            <ApplyJobButton sx={{ mb: '7px' }} />
                            <DcButton sx={{ m: '0 0 4px 15px' }} />

                            {/* Subtitle */}
                            <ArticleBlock.TranslateText
                                name="Reviews_Discord"
                                textAlign='center'
                                variant='h6'
                                sx={{
                                    fontSize: { xl: 15, lg: 14, md: 12, sm: 10 },
                                    letterSpacing: '0.4px',
                                    color: 'white',
                                    maxWidth: { xl: 295, lg: 270, md: 245, sm: 215 },
                                    textShadow: '-1px -1px 1.5px black, 1px 1px 1.5px black, 1px  -1px 1.5px black, -1px  1px 1.5px black',
                                    mt: '5px'
                                }}
                            />


                        </Flex>

                    </Article>

                </Article>

            </Appearance>

            {/* Custom blackout to see "more" component in both light and dark themes */}
            <Blackout />

        </StyledWrapper>

    )
}