// Basics
// ...

// Material-UI
// ...

// Widgets
// import { HatButton } from "@/widgets/button";

// Features
import { Album, AlbumImage } from "@/features/album";
import { Wrapper } from "@/features/wrappers";
// import { Flex, Center, Column, Row } from '@/features/wrappers'
// import { Article, ArticleSection, ArticleBlock } from "@/features/article";

// Shared
// ...

// Assets
import portfolio from '@/public/json/portfolio.json'


// Main Component
export function Portfolio() {

    return (
        <Wrapper>

            <Album
                images={portfolio}
                sx={{
                    mt: '16px'
                }}
                sizes={{
                    height: 202.5,
                    width: 360
                }}
                limit={3}
            />

        </Wrapper>
    )
}