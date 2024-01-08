'use client'

// Basics
import { createPortal } from "react-dom"

// Emotion
import styled from "@emotion/styled"

// Features
import { Flex } from "@/features/wrappers"
import { defaultWrapper } from "@/features/wrappers"
import { FlexInterface } from "@/features/wrappers/types"

// UI
import { useModules } from "./provider"

// Shared
import { useLanguage } from "@/shared/i18n"
import { useTranslation } from "@/shared/i18n/client"
import { styledDefaultInterface } from "@/shared/mui"

// Styles
import s from './styles.module.css'

// Styled Components
const StyledMore = styled(Flex) <styledDefaultInterface>`
    position: absolute;
    bottom: 0;
    left: 0;
    height: 160px;
    padding-top: 80px;
    box-sizing: border-box;
    z-index: 1000;

    background: ${({ def }) => def!.t.palette.mode === 'dark' ?
        'linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.85) 100%)' :
        'linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.3) 100%)'
    };
`

function MoreComponent({ sx, def, ...props }: FlexInterface) {

    // Get variable from custom stepful display hook
    const { switchModule } = useModules()

    // Language
    const lng = useLanguage()
    const { t } = useTranslation(lng, 'home')

    // Switch to next module on click
    const handleContinue = () => switchModule('down')

    // Create portal to insert more component right to body
    return createPortal(
        <StyledMore
            stretchX
            component="section"
            flow='column nowrap'
            def={def}
            sx={sx}
            {...props}
        >

            <div className={s.moreWrapper} onClick={handleContinue}>

                <div>{t('more')}</div>
                <div className={s.moreArrow}>^</div>

            </div>

        </StyledMore>,
        document.body
    )
}

export const More = defaultWrapper<FlexInterface>(MoreComponent)