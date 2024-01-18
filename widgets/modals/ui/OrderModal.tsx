
// Widgets
import { HatModal, HatModalInterface } from "@/widgets/modal"

// Component
export function OrderModal({children, ...props}: HatModalInterface) {

    return (
        <HatModal {...props}>
            {children}
        </HatModal>
    )
}