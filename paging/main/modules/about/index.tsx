// Basics
// ...

// Material-UI
import { Box } from '@mui/material';

// Widgets
import { HatButton } from "@/widgets/button";
import { DcButton, VkButton } from "@/widgets/social-buttons";

// Features
import { Wrapper } from "@/features/wrappers";
import { Article, ArticleSection, ArticleBlock } from "@/features/article";

// Insides
import { StyledWrapper, Illustration, PrimaryDivider } from "./styled-comps";

// Shared
// ...

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
                <Article>
                    <ArticleSection>
                        <ArticleBlock.Image src={hatbuildersSign} alt="HatBuilders Logo" style={{
                            width: '450px'
                        }} />
                        <ArticleBlock.Text>
                            is a project whose goal is not just building best minecraft buildings to clients we love and care about but to do it more efficiently, fun and cheap!
                        </ArticleBlock.Text>
                        <ArticleBlock.Text>
                            We can build the project of any scale from just a little village for your SMP server to big maps for UHC and whole lot more, if you’re interested, you can order any time, we’re always happy to hear you out!
                        </ArticleBlock.Text>
                    </ArticleSection>

                    <PrimaryDivider />

                    <ArticleSection>
                        <ArticleBlock.Text>
                            If you love building, if you want to make money doing what you love, you can work with us. apply!
                        </ArticleBlock.Text>
                        <ArticleBlock.Text>
                            You also able to order from our discord server or vk group!
                        </ArticleBlock.Text>
                        <ArticleBlock.Action>

                            <HatButton sx={{
                                height: '60px',
                                p: '0px 70px',
                                fontWeight: '600'
                            }}>
                                Order
                            </HatButton>
                            <VkButton /><DcButton />

                        </ArticleBlock.Action>
                    </ArticleSection>
                </Article>

                {/* Wrapper for floating thingies */}
                <Box>

                </Box>
            </Wrapper>
        </StyledWrapper>
    )
}