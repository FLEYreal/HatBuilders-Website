// Basics
import Image from 'next/image';

// Material-UI
import { Box } from '@mui/material';

// Widgets
import { DcButton, VkButton } from "@/widgets/social-buttons";

// Features
import { Flex, Wrapper } from "@/features/wrappers";
import { ArticleSection, ArticleBlock } from "@/features/article";
import { Float } from '@/features/animations';

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

                {/* Wrapper for floating objects */}
                <Flex sxStyles={{ position: 'absolute' }}>

                    <Float sx={{
                        top: { md: '190px', lg: '100px', xl: '150px' },
                        left: { md: '600px', lg: '535px', xl: '580px' },
                        display: { xs: 'none', md: 'block' }
                    }}><Image src={heartBg} alt='Heart' style={{ transform: 'rotate(15deg)' }} /></Float>

                    <Float sx={{
                        top: { md: '280px', lg: '200px', xl: '250px' },
                        left: { md: '-90px', lg: '-90px', xl: '-90px' },
                        display: { xs: 'none', md: 'block' }
                    }}><Image src={heartBg} alt='Heart' style={{ transform: 'rotate(-25deg)' }} /></Float>


                    <Float sx={{
                        top: { md: '550px', lg: '350px', xl: '400px' },
                        left: { md: '590px', lg: '490px', xl: '650px' },
                        display: { xs: 'none', md: 'block' }
                    }}><Image src={coinBg} alt='Coin' style={{ transform: 'rotate(25deg)' }} /></Float>

                    <Float sx={{
                        top: { md: '370px', lg: '440px', xl: '480px' },
                        left: { md: '565px', lg: '550px', xl: '610px' },
                        display: { xs: 'none', md: 'block' }
                    }}><Image src={coinBg} alt='Coin' style={{ transform: 'rotate(-20deg)' }} /></Float>

                    <Float sx={{
                        top: { md: '520px', lg: '450px', xl: '550px' },
                        left: { md: '-100px', lg: '-110px', xl: '-120px' },
                        display: { xs: 'none', md: 'block' }
                    }}><Image src={coinBg} alt='Coin' style={{ transform: 'rotate(15deg)' }} /></Float>


                </Flex>

                {/* Left Section With Article */}
                <StyledArticle>
                    <ArticleSection>
                        <ArticleBlock.Image src={hatbuildersSign} alt="HatBuilders Logo" />
                        <ArticleBlock.TranslateText ns='home' name='about_p1' />
                        <ArticleBlock.TranslateText ns='home' name='about_p2' />
                    </ArticleSection>

                    <PrimaryDivider />

                    <ArticleSection>
                        <ArticleBlock.TranslateText ns='home' name='about_p3' />
                        <ArticleBlock.TranslateText ns='home' name='about_p4' />

                        <ArticleBlock.Action
                            sx={{
                                justifyContent: { xs: 'center', lg: 'flex-start' }
                            }}
                        >

                            <OrderButton ns='home' name='order' />
                            <VkButton /><DcButton />

                        </ArticleBlock.Action>
                    </ArticleSection>
                </StyledArticle>

                {/* Wrapper for floating thingies */}
                <Box>

                </Box>
            </Wrapper>
        </StyledWrapper>
    )
}

