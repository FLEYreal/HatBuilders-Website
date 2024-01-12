'use client'

// Emotion
import styled from "@emotion/styled";

// Features
import { Flex, FlexInterface, defaultWrapper } from "@/features/wrappers";


// Components
const StyledWrapperComponent = styled(Flex)<FlexInterface>``


// Export all styled components
export const StyledWrapper = defaultWrapper(StyledWrapperComponent)








