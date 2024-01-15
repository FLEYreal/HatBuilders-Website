'use client'

// Basics
import Link from "next/link";
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
import vk from '@/public/icons/social/vk.svg';

// Interfaces
export interface VkButtonInterface extends styledDefaultInterface, HatButtonInterface {
    isTransparent?: boolean;
}
export interface StyledImageInterface extends styledDefaultInterface, ImageProps { }

// Components
const StyledVkButton = styled(({ def, isTransparent = false, ...props }: VkButtonInterface) => e(HatButton, props)) <VkButtonInterface>`
    min-width: 32px;
    background-color: #0077ff;

    &:hover { 
        background-color: #0077ff;
        opacity: ${({ isTransparent }) => isTransparent ? '0.6' : '1'};
    }
    &:active { 
        background-color: #0077ff; 
    }

    opacity: ${({ isTransparent }) => isTransparent ? '0.3' : '1'};

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

    // Link to current official vk group of Hatbuilders
    // (Currently it's empty, fill var when vk appears)
    const vkGroupLink: string = "https://google.com"

    return (
        <StyledVkButton toUpperCase={false} def={def} {...props}>
            <Link target="_blank" href={vkGroupLink}>
                <StyledImage src={vk} alt="Vk Button Icon" def={def} />
            </Link>
        </StyledVkButton>
    )
}

export const VkButton = defaultWrapper<VkButtonInterface>(VkButtonComponent)





