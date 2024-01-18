// Widgets
import { DcButton, VkButton } from "@/widgets/social-buttons";

// Features
import { Column, Row } from "@/features/wrappers";
import { ArticleBlock } from "@/features/article";

// Component
export function ChooseSocial() {

    return (
        <Column center stretchX>

            <ArticleBlock.TranslateText variant="h4" name="choose_your_way" ns="modals" sx={{ m: 0 }} />

            <Row center>
                <DcButton /><VkButton />
            </Row>

        </Column>
    )
}