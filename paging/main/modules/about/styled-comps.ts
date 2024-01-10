'use client'

// Basics
import { createElement as e } from "react";

// Material-UI
import { Box, BoxProps, Divider } from "@mui/material";

// Emotion
import styled from "@emotion/styled";

// Features
import { Flex, defaultWrapper } from "@/features/wrappers";
import { FlexInterface } from "@/features/wrappers/types";
import { ActionDividerInterface } from '@/features/article/config/types'

// Types
import { styledDefaultInterface } from "@/shared/mui";

// Assets
import dio from '@/public/images/dio-about.png';

// Interfaces
export interface IllustrationInterface extends BoxProps, styledDefaultInterface { }
export interface PrimaryDividerInterface extends ActionDividerInterface, styledDefaultInterface { }

// Styled Components
const StyledWrapperComponent = styled(Flex) <FlexInterface>`
    width: 100%;
`

const StyledIllustration = styled(({ def, ...props }: IllustrationInterface) => e(Box, props)) <IllustrationInterface>`
    position: absolute;
    right: 0;
    top: 100px;
    background-image: url(${dio.src});
    background-size: cover;
    width: 680px;
    height: 680px;
    z-index: -1;
`

const StyledPrimaryDivider = styled(({ def, ...props }: PrimaryDividerInterface) => e(Divider, props))`
    background-color: ${({ def }) => def!.t.palette.primary.light};
`

export const StyledWrapper = defaultWrapper<FlexInterface>(StyledWrapperComponent)
export const Illustration = defaultWrapper<IllustrationInterface>(StyledIllustration)
export const PrimaryDivider = defaultWrapper<PrimaryDividerInterface>(StyledPrimaryDivider)