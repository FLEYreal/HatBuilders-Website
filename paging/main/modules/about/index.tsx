// Basics
import Image from 'next/image';

// Material-UI
import { Box } from '@mui/material'

// Widgets
import { DcButton, VkButton } from "@/widgets/social-buttons";

// Features
import { Flex, Wrapper } from "@/features/wrappers";
import { ArticleSection, ArticleBlock } from "@/features/article";
import { Float } from '@/features/animations';
import { Appearance } from '@/features/animations'

// Insides
import {
    StyledWrapper,
    Illustration,
    PrimaryDivider,
    StyledArticle,
    OrderButton
} from "./styled-comps";

// Assets
import hatbuildersSign from '@/public/images/primary-hb-sign-no-b.png';
import coinBg from '@/public/images/coin-bg.png';
import heartBg from '@/public/images/heart-bg.png';

// Main Component
export function About() {

    return (
        <StyledWrapper stretchX stretchY>

            {/* Right Section with Art */}
            <Illustration />

            <Wrapper>

                {/* Left Section With Article */}
                <StyledArticle>

                    {/* Upper section */}
                    <ArticleSection>
                        <Appearance dur={0.45} delay={0.75}><ArticleBlock.Image src={hatbuildersSign} alt="HatBuilders Logo" /></Appearance>
                        <Appearance isSx dur={0.45} delay={1.2}><ArticleBlock.TranslateText ns='home' name='about_p1' /></Appearance>
                        <Appearance isSx dur={0.45} delay={1.45}><ArticleBlock.TranslateText ns='home' name='about_p2' /></Appearance>
                    </ArticleSection>

                    {/* Divider component: Separates 2 sections */}
                    <PrimaryDivider />

                    {/* Bottom section */}
                    <ArticleSection>

                        {/* Paragraphs */}
                        <Appearance isSx dur={0.45} delay={1.7}><ArticleBlock.TranslateText ns='home' name='about_p3' /></Appearance>
                        <Appearance isSx dur={0.45} delay={2.15}><ArticleBlock.TranslateText ns='home' name='about_p4' /></Appearance>

                        {/* Action Bar with buttons */}
                        <Appearance isSx dur={0.45} delay={2.5}>

                            <ArticleBlock.Action
                                sx={{
                                    justifyContent: { xs: 'center', lg: 'flex-start' }
                                }}
                            >

                                <OrderButton ns='home' name='order' />
                                <VkButton /><DcButton />

                            </ArticleBlock.Action>

                        </Appearance>

                    </ArticleSection>

                </StyledArticle>

                {/* Wrapper for floating objects */}
                <Flex sxStyles={{ position: 'absolute' }}>

                    <Float sx={{
                        opacity: 0.4,
                        top: { md: '190px', lg: '100px', xl: '150px' },
                        left: { md: '600px', lg: '535px', xl: '580px' },
                        display: { xs: 'none', md: 'block' }
                    }}>
                        <Box>
                            <Image src={heartBg} alt='Heart' style={{ transform: 'rotate(15deg)' }} />
                        </Box>
                    </Float>

                    <Float dur={4} delay={0.2} sx={{
                        opacity: 0.4,
                        top: { md: '280px', lg: '200px', xl: '250px' },
                        left: { md: '-90px', lg: '-90px', xl: '-90px' },
                        display: { xs: 'none', md: 'block' }
                    }}>
                        <Box>
                            <Image src={heartBg} alt='Heart' style={{ transform: 'rotate(-25deg)' }} />
                        </Box>
                    </Float>


                    <Float dur={3} delay={0.5} sx={{
                        opacity: 0.4,
                        top: { md: '550px', lg: '350px', xl: '400px' },
                        left: { md: '590px', lg: '490px', xl: '650px' },
                        display: { xs: 'none', md: 'block' }
                    }}>
                        <Box>
                            <Image src={coinBg} alt='Coin' style={{ transform: 'rotate(25deg)' }} />
                        </Box>
                    </Float>

                    <Float dur={3} delay={0.2} sx={{
                        opacity: 0.4,
                        top: { md: '370px', lg: '440px', xl: '480px' },
                        left: { md: '565px', lg: '550px', xl: '610px' },
                        display: { xs: 'none', md: 'block' }
                    }}>
                        <Box>
                            <Image src={coinBg} alt='Coin' style={{ transform: 'rotate(-20deg)' }} />
                        </Box>
                    </Float>

                    <Float dur={8} delay={0.5} sx={{
                        opacity: 0.4,
                        top: { md: '520px', lg: '450px', xl: '550px' },
                        left: { md: '-100px', lg: '-110px', xl: '-120px' },
                        display: { xs: 'none', md: 'block' }
                    }}>
                        <Box>
                            <Image src={coinBg} alt='Coin' style={{ transform: 'rotate(15deg)' }} />
                        </Box>
                    </Float>


                </Flex>
            </Wrapper>
        </StyledWrapper>
    )
}

