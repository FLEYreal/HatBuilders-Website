// Material-UI
import { Box } from '@mui/material';

// Widgets
import { DcButton, VkButton } from "@/widgets/social-buttons";

// Features
import { Wrapper } from "@/features/wrappers";
import { ArticleSection, ArticleBlock } from "@/features/article";

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

// Main Component
export function About() {

    return (
        <StyledWrapper stretchX stretchY>

            {/* Right Section with Art */}
            <Illustration />

            <Wrapper>

                {/* Left Section With Article */}
                <StyledArticle>
                    <ArticleSection>
                        <ArticleBlock.Image src={hatbuildersSign} alt="HatBuilders Logo"/>
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

