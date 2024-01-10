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
import dc from '@/public/icons/social/discord.svg';

// Interface
export interface DcButtonInterface extends styledDefaultInterface, HatButtonInterface { }

// Components
const StyledDcButton = styled(({ def, ...props }: DcButtonInterface) => e(HatButton, props)) <DcButtonInterface>`
    background: #5865f2;
    &:hover { 
        background: #5865f2;
    }
    &:active {
        background: #5865f2;
    }

    ${({ def }) => def!.b('xs')} {
        width: 60px; 
        height: 60px;
    }
    ${({ def }) => def!.b('md')} {
        width: 60px;
        height: 60px;
    }
    ${({ def }) => def!.b('lg')} {
        width: 60px; 
        height: 60px;
    }
    ${({ def }) => def!.b('xl')} { 
        width: 60px;
        height: 60px;
    }
`

const DcButtonComponent = ({ ...props }: DcButtonInterface) => {
    return (
        <StyledDcButton toUpperCase={false} {...props}>
            <Image src={dc} alt="Dc Button Icon" />
        </StyledDcButton>
    )
}

export const DcButton = defaultWrapper<DcButtonInterface>(DcButtonComponent)





