// Basics
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

// Insides

// Main Component
export function Hire() {

    return (
        <StyledWrapper>

            <Flex childStyles={{ position: 'absolute' }} sx={{ zIndex: '-1' }}>

                <Box sx={{ 
                    display: { xs: 'none', lg: 'block' },
                    top: 0,
                    right: 0
                }}>
                    <Opacity delay={1.2}>

                        <Image
                            src={blobHire}
                            alt="Background Blob" />
                    </Opacity>
                </Box>

                <Illustration src={hireBg} alt="Background Blob" />

            </Flex>

            <Opacity dur={3.5}>
                <Shadow />
            </Opacity>

            <Wrapper sx={{
                xIndex: 1
            }}>
                <Flex sx={{
                    height: { xs: 'calc(100vh - 100px)', lg: '100vh' },
                    mt: { xs: '100px', lg: 0 },
                    alignItems: { xs: 'start', lg: 'center' }
                }}>

                    <StyledArticle>

                        <Appearance dur={0.55} delay={0.9}>
                            <ArticleBlock.Image src={hatbuildersSign} alt="HatBuilders Logo" />
                        </Appearance>

                        <Appearance isSx dur={0.55} delay={0.9}>
                            <ArticleBlock.TranslateText name="hire_p1" />
                        </Appearance>

                        <Appearance isSx dur={0.65} delay={1.4}>
                            <ArticleBlock.TranslateText name="hire_p2" />
                        </Appearance>

                        <Appearance isSx dur={0.7} delay={2}>
                            <ArticleBlock.TranslateText name="hire_p3" />
                        </Appearance>

                        <Appearance isSx dur={0.7} delay={2}>
                            <ArticleBlock.Action align='row wrap' sx={{
                                justifyContent: {
                                    xs: 'center',
                                    lg: 'flex-start'
                                }
                            }}>
                                <ActionButton
                                    startIcon={<Image src={dc} alt="Discord Icon" width={24} height={24} />}
                                    name="apply_dc"
                                    bg='#5865f2'
                                />

                                <ActionButton
                                    startIcon={<Image src={vk} alt="Vk Icon" width={24} height={24} />}
                                    name="apply_vk"
                                    bg='#0077ff'
                                />
                            </ArticleBlock.Action>
                        </Appearance>

                    </StyledArticle>
                </Flex>
            </Wrapper>

        </StyledWrapper>
    )
}