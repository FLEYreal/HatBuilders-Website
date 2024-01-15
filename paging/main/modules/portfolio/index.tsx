// Basics
import Image from "next/image";

// Material-UI
import { Box } from "@mui/material";

// Features
import { Article, ArticleBlock } from "@/features/article";
import { Appearance, Float, Opacity } from "@/features/animations";

// Insides
import {

    // Components
    StyledWrapper,
    ActionBar,
    PortfolioExample,
    ImageReflection

} from './styled-comps'

// Assets
import hatbuildersSign from '@/public/images/secondary-hb-sign.png'
import bgItem1 from '@/public/images/portfolio-bg-1.png'
import bgItem2 from '@/public/images/portfolio-bg-2.png'
import bgItem3 from '@/public/images/portfolio-bg-3.png'
import bgItem4 from '@/public/images/portfolio-bg-4.png'
import { Flex, Wrapper } from "@/features/wrappers";

// Variables
export const albumBig = {
    xs: { w: 280, h: 157.5 },
    md: { w: 400, h: 225 },
    lg: { w: 349.44, h: 196.56 },
    xl: { w: 640, h: 360 },
}

export const albumSmall = {
    xs: { w: 220, h: 123.75 },
    md: { w: 253, h: 142.31 },
    lg: { w: 262.08, h: 147.42 },
    xl: { w: 480, h: 270 },
}

// Main Component
export function Portfolio() {

    return (
        <StyledWrapper stretchY>

            {/* Wrapper for Logo & Subtitle */}
            <Wrapper>
                <Article align="center" textAlign="center">
                    <Appearance delay={0.75}><ArticleBlock.Image src={hatbuildersSign} alt="HatBuilders Sign" style={{ margin: 0 }} /></Appearance>
                    <Appearance isSx delay={1.25}><ArticleBlock.TranslateText textAlign="center" sx={{ m: { xs: -1.5, lg: -3 } }} name="portfolio_p1" /></Appearance>
                </Article>
            </Wrapper>

            {/* Album Component */}
            <Opacity isSx delay={2.25}>
                <PortfolioExample />
            </Opacity>

            {/* Action bar with Buttons */}
            <Appearance isSx delay={1.75}>

                <Article align="center">

                    {/* Action bar with Portfolio Button + Social Media Buttons */}
                    <ActionBar/>

                    {/* Subtitle below action bar */}
                    <ArticleBlock.TranslateText textAlign="center" name="portfolio_p2" variant="h5" sx={{ p: 1 }} />
                </Article>

            </Appearance>

            {/* Container for Background items & floating items */}
            <Opacity delay={1} dur={4.5}>

                <Flex sx={{ zIndex: -3 }} childStyles={{ position: 'absolute' }}>

                    {/* Dog Image */}
                    <Box sx={{
                        display: { xs: 'none', md: 'block' },
                        height: 'auto',
                        width: { md: 150, lg: 190, xl: 250 },
                        bottom: { md: 75, lg: 50 },
                        left: { md: 35, lg: 50 },
                    }}>
                        <Image
                            src={bgItem1}
                            alt="Background Item #1"
                            style={{
                                width: '100%',
                                height: '100%'
                            }}
                        />
                    </Box>
                    <ImageReflection
                        src={bgItem1.src}
                        sx={{
                            display: { xs: 'none', md: 'block' },
                            zIndex: -1, opacity: 0.4,

                            bottom: { md: -35, lg: -92, xl: -130 },
                            left: { md: 35, lg: 50 },

                            width: { md: 150, lg: 190, xl: 250 },
                            height: { md: 134, lg: 170.5, xl: 224 },

                            '&::before': {
                                width: { md: 150, lg: 190, xl: 250 },
                                height: { md: 134, lg: 170.5, xl: 224 },
                            }
                        }}
                    />

                    {/* Brush Item */}
                    <Float dur={8}>
                        <Box sx={{
                            height: 'auto',

                            width: { xs: 100, md: 120, lg: 130, xl: 180 },
                            top: { xs: 100, md: 250, xl: 180 },
                            right: { right: '0.75vw', md: '1.5vw', lg: '3vw', xl: '4vw' },
                        }}>
                            <Image
                                src={bgItem2}
                                alt="Background Item #2"
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    transform: 'rotate(185deg) scale(1, -1)'
                                }}
                            />
                        </Box>
                    </Float>


                    {/* Palette Item */}
                    <Float dur={5}>
                        <Box sx={{

                            width: { xs: 90, md: 110, lg: 120, xl: 160 },
                            height: { xs: 90, md: 110, lg: 120, xl: 160 },
                            top: { xs: '', md: 265, lg: 190, xl: 100 },
                            bottom: { xs: 20, md: '' },
                            left: { left: 5, md: '2vw', lg: '6vw', xl: '8vw' },
                        }}>
                            <Image
                                src={bgItem3}
                                alt="Background Item #3"
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    transform: 'rotate(190deg) scale(1, -1)'
                                }}
                            />
                        </Box>
                    </Float>

                    {/* Wooden Axe Item */}
                    <Float delay={1.5} dur={7.5}>
                        <Box sx={{
                            height: 'auto',

                            width: { xs: 75, md: 80, lg: 90, xl: 120 },
                            bottom: { xs: 75, md: 40 },
                            right: { xs: 15, md: 70, lg: 100, xl: 220 },
                        }}>
                            <Image
                                src={bgItem4}
                                alt="Background Item #4"
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    transform: 'rotate(15deg)'
                                }}
                            />
                        </Box>
                    </Float>

                </Flex>

            </Opacity>

        </StyledWrapper >
    )
}