'use client'

// Basics
import Image from "next/image";
import { createElement as e } from "react";

// Emotion
import styled from "@emotion/styled";

// Widgets
import { HatButton, HatButtonInterface } from "@/widgets/button";

// Features
import { defaultWrapper } from "@/features/wrappers";

// Shared
import { styledDefaultInterface } from "@/shared/mui";

// Assets
import vk from '@/public/icons/social/vkontakte.svg';

// Interface
export interface VkButtonInterface extends styledDefaultInterface, HatButtonInterface { }

// Components
const StyledVkButton = styled(({ def, ...props }: VkButtonInterface) => e(HatButton, props)) <VkButtonInterface>`
    background-color: #0077ff;
    &:hover { background-color: #0077ff; }
    &:active { background-color: #0077ff; }

    ${({ def }) => def!.b('xs')} {width: 60px; height: 60px; }
    ${({ def }) => def!.b('md')} { width: 60px; height: 60px; }
    ${({ def }) => def!.b('lg')} { width: 60px; height: 60px; }
    ${({ def }) => def!.b('xl')} { width: 60px; height: 60px; }
`

const VkButtonComponent = ({ ...props }: VkButtonInterface) => {
    return (
        <StyledVkButton toUpperCase={false} {...props}>
            <Image src={vk} alt="VK Button Icon" />
        </StyledVkButton>
    )
}

export const VkButton = defaultWrapper<VkButtonInterface>(VkButtonComponent)





