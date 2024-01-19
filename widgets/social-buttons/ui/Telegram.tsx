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
import tg from '@/public/icons/social/telegram.svg';

// Interfaces
export interface TgButtonInterface extends styledDefaultInterface, HatButtonInterface {
    isTransparent?: boolean;
}
export interface StyledImageInterface extends styledDefaultInterface, ImageProps { }

// Components
const StyledTgButton = styled(({ def, isTransparent = false, ...props }: TgButtonInterface) => e(HatButton, props)) <TgButtonInterface>`
    min-width: 32px;
    background-color: #29b6f6;

    &:hover { 
        background-color: #29b6f6;
        opacity: ${({ isTransparent }) => isTransparent ? '0.6' : '1'};
    }
    &:active { 
        background-color: #29b6f6; 
    }

    opacity: ${({ isTransparent }) => isTransparent ? '0.3' : '1'};

    ${({ def }) => def!.b('xs')} { width: 44px; height: 44px; }
    ${({ def }) => def!.b('md')} { width: 50px; height: 50px; }
    ${({ def }) => def!.b('lg')} { width: 56px; height: 56px; }
    ${({ def }) => def!.b('xl')} { width: 60px; height: 60px; }
`

const StyledImage = styled(({ def, ...props }: StyledImageInterface) => e(Image, props)) <StyledImageInterface>`
    ${({ def }) => def!.b('xs')} { width: 26px; height: 26px; }
    ${({ def }) => def!.b('md')} { width: 32px; height: 32px; }
    ${({ def }) => def!.b('lg')} { width: 40px; height: 40px; }
    ${({ def }) => def!.b('xl')} { width: 46px; height: 46px; }
`

const TgButtonComponent = ({ def, ...props }: TgButtonInterface) => {

    // Link to current official Tg group of Hatbuilders
    // (Currently it's empty, fill var when Tg appears)
    const tgGroupLink: string = "https://google.com"

    return (
        <StyledTgButton def={def} {...props}>
            <Link target="_blank" href={tgGroupLink}>
                <StyledImage src={tg} alt="Tg Button Icon" def={def} />
            </Link>
        </StyledTgButton>
    )
}

export const TgButton = defaultWrapper<TgButtonInterface>(TgButtonComponent)





