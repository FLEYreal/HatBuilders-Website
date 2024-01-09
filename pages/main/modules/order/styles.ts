"use client";

import styled from "@emotion/styled";
import { Flex } from "@/features/wrappers";
import { ArticleBlock } from "@/features/article";
import { HatButton } from "@/widgets/button";

export const StyledWrapper = styled(Flex)`
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-image: ${(props) => `url(${props.backgroundImage})`}; 
  background-size: cover;
  background-position: center;
  min-height: 100vh;
`;

export const StyledArticle = styled(ArticleBlock)`
  text-align: center;
  margin-top: 35px;
`;

export const StyledText = styled(ArticleBlock.Text)`
  color: white;
  text-shadow: -1px -1px 0 black, 1px 1px 0 black, 1px -1px 0 black, -1px 1px 0 black;
`;

export const StyledButtonWrapper = styled(Flex)`
  color: white;
  width: 321px;
  height: 75px;
`;

export const StyledIconButtonWrapper = styled(Flex)`
  flex-direction: column;
  width: 60px;
  height: 60px;
  margin: 0;
  padding: 0;
`;

export const StyledIconButton = styled(HatButton)`
  margin-bottom: 20px;
`;

export const StyledReviewText = styled(ArticleBlock.Text)`
  text-align: center;
  color: white;
`;
