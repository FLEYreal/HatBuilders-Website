// Material-UI
import { Box } from "@mui/material";

// Widgets
import { DcButton, VkButton } from "@/widgets/social-buttons";

// Features
import { Album } from "@/features/album";
import { Wrapper } from "@/features/wrappers";
import { Article, ArticleBlock } from "@/features/article";
import { Appearance } from "@/features/animations";

// Insides
import {

    // Components
    StyledWrapper,
    PortfolioButton,
    PortfolioExample

} from './styled-comps'

// Assets
import hatbuildersSign from '@/public/images/secondary-hb-sign.png'

// Variables
export const albumBig = {
    xs: { w: 280, h: 157.5 },
    md: { w: 400, h: 225 },
    lg: { w: 349.44, h: 196.56 },
    xl: { w: 640, h: 360 },
}

export const albumSmall = {
    xs: { w: 200, h: 112.5 },
    md: { w: 240, h: 135 },
    lg: { w: 262.08, h: 147.42 },
    xl: { w: 480, h: 270 },
}

// Main Component
export function Portfolio() {

    return (
        <StyledWrapper>

            {/* Logo & Title Component */}
            <Wrapper>

                {/* Logo */}
                <Article align="center" textAlign="center">
                    <Appearance delay={0.75}><ArticleBlock.Image src={hatbuildersSign} alt="HatBuilders Sign" style={{ margin: 0 }} /></Appearance>
                    <Appearance isSx delay={1.25}><ArticleBlock.TranslateText textAlign="center" sx={{ m: -2.5 }} name="portfolio_p1" /></Appearance>
                </Article>

                {/* Action bar with Buttons */}
                <Appearance isSx delay={1.75}>

                    <Article align="center" sx={{
                        mt: {
                            xs: `${albumBig.xs.h + 90}px`,
                            md: `${albumBig.md.h + 90}px`,
                            lg: `${albumBig.lg.h + 90}px`,
                            xl: `${albumBig.xl.h + 90}px`
                        }
                    }}>
                        <ArticleBlock.Action sx={{ justifyContent: 'center' }}>

                            <PortfolioButton color="secondary" ns='home' name='full_portfolio' />
                            <VkButton /><DcButton />

                        </ArticleBlock.Action>
                    </Article>

                </Appearance>

            </Wrapper>

            <PortfolioExample>

                {/* <Album/> */}

            </PortfolioExample>

        </StyledWrapper>
    )
}