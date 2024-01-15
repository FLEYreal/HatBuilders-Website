// Basics
import Link from "next/link";
import Image from "next/image";

// Material-UI
import { Box } from "@mui/material";

// Features
import { ArticleBlock } from "@/features/article";
import { Appearance, Opacity } from '@/features/animations';
import { Flex, Wrapper } from "@/features/wrappers"

// Insides
import { Shadow, StyledWrapper, Illustration, ActionButton, StyledArticle } from "./styled-comps"

// Assets
import hatbuildersSign from '@/public/images/primary-hb-sign-no-b.png';
import blobHire from '@/public/images/blob-hire.svg'
import hireBg from '@/public/images/hire-bg.png'
import dc from '@/public/icons/social/discord.svg';
import vk from '@/public/icons/social/vk.svg';

// Main Component
export function Hire() {

    return (
        <StyledWrapper>

            {/* Container for Background, Illustrations */}
            <Flex childStyles={{ position: 'absolute' }} sx={{ zIndex: '-1' }}>

                {/* Blob Container*/}
                <Box sx={{
                    display: { xs: 'none', lg: 'block' },
                    top: 0,
                    right: 0
                }}>

                    {/* Wrapper for smooth appearance animation */}
                    <Opacity delay={1.2}>

                        {/* Blob */}
                        <Image
                            src={blobHire}
                            alt="Background Blob"
                        />

                    </Opacity>
                </Box>

                {/* General Module's Illustration */}
                <Illustration src={hireBg} alt="Background Blob" />

            </Flex>

            {/* Smooth blackout to be able to read text normally */}
            <Opacity dur={3.5}>
                <Shadow />
            </Opacity>

            {/* Content Wrapper for Article, centers it */}
            <Wrapper sx={{
                xIndex: 1,
                height: { xs: 'calc(100vh - 100px)', lg: '100vh' },
                mt: { xs: '100px', lg: 0 },
                display: 'flex',
                alignItems: { xs: 'start', lg: 'center' },
                justifyContent: 'center'
            }}>

                {/* Article itself, contains all the text, images an buttons */}
                <StyledArticle>

                    {/* Image Title */}
                    <Appearance dur={0.55} delay={0.9}>
                        <ArticleBlock.Image src={hatbuildersSign} alt="HatBuilders Logo" />
                    </Appearance>

                    {/* Text Block */}
                    <Appearance isSx dur={0.55} delay={0.9}>
                        <ArticleBlock.TranslateText name="hire_p1" />
                    </Appearance>

                    <Appearance isSx dur={0.65} delay={1.4}>
                        <ArticleBlock.TranslateText name="hire_p2" />
                    </Appearance>

                    <Appearance isSx dur={0.7} delay={2}>
                        <ArticleBlock.TranslateText name="hire_p3" />
                    </Appearance>

                    {/* Action Block, contains buttons */}
                    <Appearance isSx dur={0.7} delay={2}>
                        <ArticleBlock.Action align='row wrap' sx={{
                            justifyContent: {
                                xs: 'center',
                                lg: 'flex-start'
                            }
                        }}>

                            {/* Buttons leading to our social media, provide new links when needed */}
                            <Link target="_blank" href="https://discord.gg/7cNAGPbGQu">
                                <ActionButton
                                    startIcon={<Image src={dc} alt="Discord Icon" width={24} height={24} />}
                                    name="apply_dc"
                                    bg='#5865f2'
                                />
                            </Link>

                            <Link target="_blank" href="https://google.com">
                                <ActionButton
                                    startIcon={<Image src={vk} alt="Vk Icon" width={24} height={24} />}
                                    name="apply_vk"
                                    bg='#0077ff'
                                />
                            </Link>

                        </ArticleBlock.Action>

                    </Appearance>

                </StyledArticle>

            </Wrapper>

        </StyledWrapper>
    )
}