
// Widgets
import { HatModal, HatModalInterface } from "@/widgets/modal"

// Component
export function HireModal({ children, ...props }: HatModalInterface) {

    return (
        <HatModal {...props}>
            {children}
        </HatModal>
    )
}