'use client'

// Basics
import Image, { ImageProps } from "next/image";
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

// Interfaces
export interface VkButtonInterface extends styledDefaultInterface, HatButtonInterface { }
export interface StyledImageInterface extends styledDefaultInterface, ImageProps { }

// Components
const StyledVkButton = styled(({ def, ...props }: VkButtonInterface) => e(HatButton, props)) <VkButtonInterface>`
    min-width: 32px;
    background-color: #0077ff;
    &:hover { background-color: #0077ff; }
    &:active { background-color: #0077ff; }

    ${({ def }) => def!.b('xs')} { width: 44px; height: 44px; }
    ${({ def }) => def!.b('md')} { width: 50px; height: 50px; }
    ${({ def }) => def!.b('lg')} { width: 56px; height: 56px; }
    ${({ def }) => def!.b('xl')} { width: 60px; height: 60px; }
`

const StyledImage = styled(({ def, ...props }: StyledImageInterface) => e(Image, props)) <StyledImageInterface>`
    ${({ def }) => def!.b('xs')} { width: 24px; height: 24px; }
    ${({ def }) => def!.b('md')} { width: 28px; height: 28px; }
    ${({ def }) => def!.b('lg')} { width: 32px; height: 32px; }
    ${({ def }) => def!.b('xl')} { width: 36px; height: 36px; }
`

const VkButtonComponent = ({ def, ...props }: VkButtonInterface) => {
    return (
        <StyledVkButton toUpperCase={false} def={def} {...props}>
            <StyledImage src={vk} alt="VK Button Icon" def={def} />
        </StyledVkButton>
    )
}

export const VkButton = defaultWrapper<VkButtonInterface>(VkButtonComponent)





