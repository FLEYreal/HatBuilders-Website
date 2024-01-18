
// Widgets
import { HatModal, HatModalInterface } from "@/widgets/modal"

// Insides
import { ChooseSocial } from "./ChooseSocial"

// Component
export function HireModal({ ...props }: HatModalInterface) {

    return (
        <HatModal {...props}>
            <ChooseSocial />
        </HatModal>
    )
}