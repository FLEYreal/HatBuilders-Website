'use client'

// Basics
import { createPortal } from "react-dom"

// Material-UI
import { SxProps, Box, Theme } from "@mui/material"
import { useTheme } from "@emotion/react"

// UI
import { useModules } from "./provider"

// Shared
import { useLanguage } from "@/shared/i18n"
import { useTranslation } from "@/shared/i18n/client"

// Styles
import s from './styles.module.css'


export function More({ sx }: { sx?: SxProps }) {

    // Get variable from custom stepful display hook
    const { switchModule } = useModules()

    // Theme
    const theme = useTheme() as Theme

    // Language
    const lng = useLanguage()
    const { t } = useTranslation(lng, 'home')

    // Switch to next module on click
    const handleContinue = () => switchModule('down')

    return createPortal(
        <Box sx={{
            zIndex: 1000,
            position: 'absolute',
            bottom: 0,
            left: 'calc(50% - 60px)',
            width: '120px',
            height: '74px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            pt: '4px',
            boxSizing: 'border-box',
            flexFlow: 'column',
            ...sx
        }}>
            <div className={s.moreWrapper} onClick={handleContinue}>
                <div>{t('more')}</div>
                <div className={s.moreArrow}>^</div>
            </div>
        </Box>,
        document.body
    )
}