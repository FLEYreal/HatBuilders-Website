// Basics
import Image from 'next/image';

// Material-UI
import { Box, BoxProps } from '@mui/material'

// Widgets
import { DcButton, TgButton, VkButton } from "@/widgets/social-buttons";
import { OrderModal } from '@/widgets/modals';

// Features
import { Flex, Wrapper } from "@/features/wrappers";
import { ArticleSection, ArticleBlock } from "@/features/article";
import { Float, Appearance, Opacity } from '@/features/animations';

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
import hatbuildersSignSmall from '@/public/images/primary-hb-sign-no-b-small.webp';
import dio from '@/public/images/dio-about.png';
import dioSmall from '@/public/images/dio-about-small.webp';
import coinBg from '@/public/images/coin-bg.png';
import heartBg from '@/public/images/heart-bg.png';

// Main Component
export function About() {

    return (
        <StyledWrapper stretchX stretchY>

            {/* Right Section with Art */}
            <Illustration
                srcSmall={dioSmall.src}
                image={{
                    src: dio,
                    alt: "Illustration",
                    fill: true
                }} />

            <Wrapper>

                {/* Left Section With Article */}
                <StyledArticle>

                    {/* Upper section */}
                    <ArticleSection>

                        <Appearance dur={0.7} delay={0.7}>
                            <ArticleBlock.Image isBlurry blurryProps={{
                                image: { src: hatbuildersSign, alt: "HatBuilders Logo" },
                                srcSmall: hatbuildersSignSmall.src,
                                progress: { size: 20, thickness: 2 }
                            }} />
                        </Appearance>

                        <Appearance isSx dur={0.8} delay={1.4}>
                            <ArticleBlock.TranslateText ns='home' name='about_p1' />
                            <ArticleBlock.TranslateText ns='home' name='about_p2' />
                        </Appearance>

                    </ArticleSection>

                    {/* Divider component: Separates 2 sections */}
                    <Opacity isSx dur={0.55} delay={2.7}>
                        <PrimaryDivider />
                    </Opacity>

                    {/* Bottom section */}
                    <Appearance dur={0.9} delay={2}>
                        <ArticleSection>

                            {/* Paragraphs */}
                            <ArticleBlock.TranslateText ns='home' name='about_p3' />
                            <ArticleBlock.TranslateText ns='home' name='about_p4' />

                            {/* Action Bar with buttons */}
                            <ArticleBlock.Action
                                sx={{
                                    justifyContent: { xs: 'center', lg: 'flex-start' }
                                }}
                            >

                                <OrderModal element={<OrderButton ns='home' name='order' toUpperCase sx={{ mr: '12px' }} />} />
                                <DcButton /><TgButton /><VkButton />

                            </ArticleBlock.Action>



                        </ArticleSection>
                    </Appearance>

                </StyledArticle>

                {/* Wrapper for floating objects */}
                <Opacity isSx dur={10}>

                    <Flex sxStyles={{ position: 'absolute', opacity: 0.4, display: { xs: 'none', md: 'block' } }}>

                        <Float<BoxProps> isSx>
                            <Box sx={{
                                top: { md: '190px', lg: '100px', xl: '150px' },
                                left: { md: '600px', lg: '535px', xl: '580px' },
                            }}>
                                <Image src={heartBg} alt='Heart' style={{ transform: 'rotate(15deg)' }} />
                            </Box>
                        </Float>

                        <Float<BoxProps> isSx dur={4} delay={0.2}>
                            <Box sx={{
                                top: { md: '280px', lg: '200px', xl: '250px' },
                                left: { md: '-90px', lg: '-90px', xl: '-90px' },
                            }}>
                                <Image src={heartBg} alt='Heart' style={{ transform: 'rotate(-25deg)' }} />
                            </Box>
                        </Float>


                        <Float<BoxProps> isSx dur={3} delay={0.5}>
                            <Box sx={{
                                top: { md: '550px', lg: '350px', xl: '400px' },
                                left: { md: '590px', lg: '490px', xl: '650px' },
                            }}>
                                <Image src={coinBg} alt='Coin' style={{ transform: 'rotate(25deg)' }} />
                            </Box>
                        </Float>

                        <Float<BoxProps> isSx dur={3} delay={0.2}>
                            <Box sx={{
                                top: { md: '370px', lg: '440px', xl: '480px' },
                                left: { md: '565px', lg: '550px', xl: '610px' },
                            }}>
                                <Image src={coinBg} alt='Coin' style={{ transform: 'rotate(-20deg)' }} />
                            </Box>
                        </Float>

                        <Float<BoxProps> isSx dur={8} delay={0.5}>
                            <Box sx={{
                                top: { md: '520px', lg: '450px', xl: '550px' },
                                left: { md: '-100px', lg: '-110px', xl: '-120px' },
                            }}>
                                <Image src={coinBg} alt='Coin' style={{ transform: 'rotate(15deg)' }} />
                            </Box>
                        </Float>


                    </Flex>
                </Opacity>
            </Wrapper>
        </StyledWrapper>
    )
}

