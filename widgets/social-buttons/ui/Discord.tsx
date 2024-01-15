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
import dc from '@/public/icons/social/discord.svg';

// Interfaces
export interface DcButtonInterface extends styledDefaultInterface, HatButtonInterface {
    isTransparent?: boolean;
}
export interface StyledImageInterface extends styledDefaultInterface, ImageProps { }

// Components
const StyledDcButton = styled(({ def, isTransparent = false, ...props }: DcButtonInterface) => e(HatButton, props)) <DcButtonInterface>`
    min-width: 32px;
    background-color: #5865f2;
    &:hover { 
        background-color: #5865f2;
        opacity: ${({ isTransparent }) => isTransparent ? '0.6' : '1'};
    }
    &:active {
        background-color: #5865f2;
    }
    
    opacity: ${({ isTransparent }) => isTransparent ? '0.3' : '1'};

    ${({ def }) => def!.b('xs')} { width: 44px; height: 44px; }
    ${({ def }) => def!.b('md')} { width: 50px; height: 50px; }
    ${({ def }) => def!.b('lg')} { width: 56px; height: 56px; }
    ${({ def }) => def!.b('xl')} { width: 60px; height: 60px; }
`

const StyledImage = styled(({ def, ...props }: StyledImageInterface) => e(Image, props)) <StyledImageInterface>`
    ${({ def }) => def!.b('xs')} { width: 20px; height: 20px; }
    ${({ def }) => def!.b('md')} { width: 24px; height: 24px; }
    ${({ def }) => def!.b('lg')} { width: 30px; height: 30px; }
    ${({ def }) => def!.b('xl')} { width: 32px; height: 32px; }
`

const DcButtonComponent = ({ def, children, ...props }: DcButtonInterface) => {

    // Link to current official discord server of Hatbuilders
    const discordServerLink: string = "https://discord.gg/7cNAGPbGQu"

    return (
        <StyledDcButton toUpperCase={false} def={def} {...props}>
            <Link target="_blank" href={discordServerLink}>
                <StyledImage src={dc} alt="Dc Button Icon" def={def}/>
            </Link>
        </StyledDcButton>
    )
}

export const DcButton = defaultWrapper<DcButtonInterface>(DcButtonComponent)





