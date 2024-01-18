
// Widgets
import { HatModal, HatModalInterface } from "@/widgets/modal"

// Insides
import { ChooseSocial } from "./ChooseSocial"
import { ArticleBlock } from "@/features/article"

// Component
export function OrderModal({ ...props }: HatModalInterface) {

    return (
        <HatModal
            dialogProps={{
                sx: {
                    width: {
                        md: '480px',
                        lg: '550px',
                        xl: '600px'
                    },
                    margin: 'auto'
                }
            }}
            {...props}
        >
            <ArticleBlock.TranslateText variant="h1" textAlign="center" name="order_modal_title" ns="modals" />
            <ArticleBlock.TranslateText variant="h3" textAlign="center" name="order_modal_p1" ns="modals" />
            <ArticleBlock.TranslateText variant="h3" textAlign="center" name="order_modal_p2" ns="modals" />
            <ArticleBlock.TranslateText variant="h3" textAlign="center" name="order_modal_p3" ns="modals" />
            <ChooseSocial />
        </HatModal>
    )
}