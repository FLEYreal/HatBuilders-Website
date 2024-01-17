// Features
import { Article, ArticleBlock } from "@/features/article";
import { Appearance } from '@/features/animations';

// Assets
import hatbuildersLogo from '@/public/images/secondary-hb-sign.png'
import hatbuildersLogoSmall from '@/public/images/secondary-hb-sign-small.webp'

// Styled Components
import { StyledWrapper, Blackout, ApplyJobButton, OrderButton } from './styled-comps';
import { Column, Wrapper } from '@/features/wrappers';

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
            <Wrapper sx={{ pt: '80px', zIndex: 10 }}>
                <Article align="center">

                    {/* Hatbuilders Sign */}
                    <Appearance dur={0.5} delay={0.6}>
                        <ArticleBlock.Image
                            isBlurry
                            blurryProps={{
                                image: { alt: "HatBuilders Logo", src: hatbuildersLogo },
                                srcSmall: hatbuildersLogoSmall.src,
                                progress: { size: 20, thickness: 2 }
                            }} />
                    </Appearance>

                    {/* General Title */}
                    <Appearance isSx dur={0.5} delay={1}>
                        <ArticleBlock.TranslateText
                            name="time_to_act"
                            variant='h2'
                            textAlign='center'
                            sx={{
                                mt: { xs: '-17.5px', lg: '-20px', xl: '-25px' },
                                fontSize: { xl: 18, lg: 17, md: 15, sm: 14 },
                            }}
                        />
                    </Appearance>


                </Article>
            </Wrapper>


            {/* Bottom part with action buttons */}
            <Appearance dur={0.5} delay={1.4}>

                <Article
                    textAlign='center'
                    align="center"
                    sx={{ display: 'grid', zIndex: 10 }}
                >

                    {/* Action Bar */}
                    <Article textAlign='center' align="center" sx={{ mb: '100px', display: 'flex' }}>

                        {/* Buttons & Botton subtitle */}
                        <Column sx={{ gap: 0 }} align={['center', 'center']}>

                            {/* Buttons */}
                            <OrderButton sx={{ mb: '7px' }} />
                            <ApplyJobButton sx={{ mb: '7px' }} />

                            {/* Subtitle */}
                            <ArticleBlock.TranslateText
                                name="reviews_discord"
                                textAlign='center'
                                variant='h2'
                                sx={{
                                    fontSize: { xl: 15, lg: 14, md: 12, sm: 10 },
                                    letterSpacing: '0.4px',
                                    maxWidth: { xl: 295, lg: 270, md: 245, sm: 215 },
                                    mt: '5px'
                                }}
                            />


                        </Column>

                    </Article>

                </Article>

            </Appearance>

            {/* Custom blackout to see "more" component in both light and dark themes */}
            <Blackout sx={{ bottom: 0 }} />
            <Blackout sx={{ top: 0, transform: 'rotate(180deg)' }} />

        </StyledWrapper>

    )
}