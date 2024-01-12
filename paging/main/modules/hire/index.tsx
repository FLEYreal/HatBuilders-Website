// Basics
import Image from "next/image";

// Widgets
import { HatButton } from "@/widgets/button";

// Features
import { StyledWrapper } from "./styled-comps"
import { Article, ArticleBlock } from "@/features/article";
import { Appearance } from '@/features/animations';
import { Wrapper } from "@/features/wrappers"

// Assets
import hatbuildersSign from '@/public/images/primary-hb-sign-no-b.png';
import dc from '@/public/icons/social/discord.svg';
import vk from '@/public/icons/social/vk.svg';

// Insides

// Main Component
export function Hire() {

    return (
        <StyledWrapper>

            <Wrapper>
                <Article>

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
                        <ArticleBlock.Action>
                            <HatButton
                                startIcon={<Image src={dc} alt="Discord Icon"/>}
                                name="apply_dc"
                                sx={{
                                    background: '#5865f2',
                                    color: '#ffffff',
                                    padding: '26px'
                                }}
                            />

                            <HatButton
                                startIcon={<Image src={vk} alt="Vk Icon"/>}
                                name="apply_vk"
                                sx={{
                                    background: '#0077ff',
                                    color: '#ffffff',
                                    padding: '26px'
                                }}
                            />
                        </ArticleBlock.Action>
                    </Appearance>



                </Article>
            </Wrapper>

        </StyledWrapper>
    )
}