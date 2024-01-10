"use client";

// Types
import { styledDefaultInterface } from "@/shared/mui";

import styled from "@emotion/styled";
import { Flex } from "@/features/wrappers";
import { Article, ArticleBlock } from "@/features/article";
import { HatButton } from "@/widgets/button";

export interface FlexProps {
  backgroundImage?: string;
}

export const StyledWrapper = styled(Flex)<FlexProps>`
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-image: ${(props) => `url(${props.backgroundImage})`}; 
  background-size: cover;
  background-position: center;
  min-height: 100vh;
`;

export const StyledButtonWrapper = styled(Flex)<styledDefaultInterface>`
display: flex;
justify-content: end 
`;

export const StyledIconButtonWrapper = styled(Flex)<styledDefaultInterface>`
display: block;
margin: 9px 0 0 15px;
`;
