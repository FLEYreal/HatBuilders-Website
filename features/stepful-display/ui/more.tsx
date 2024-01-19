'use client'

// Basics
import { createPortal } from "react-dom"

// Material-UI
import { SxProps, Box } from "@mui/material"

// UI
import { useModules } from "./provider"

// Shared
import { useLanguage } from "@/shared/i18n"
import { useTranslation } from "@/shared/i18n/client"

// Styles
import s from './styles.module.css'


/**
 * Renders the "More" button at the bottom of the screen.
 * @param {SxProps} sx - Styles for the component.
 */
export function More({ sx }: { sx?: SxProps }) {

    // CONTEXTS
    const { switchModule } = useModules() // Get variable from custom stepful display hook


    // CUSTOM VARIABLES & HOOKS
    const lng = useLanguage()
    const { t } = useTranslation(lng, 'home')


    // HANDLERS
    const handleContinue = () => switchModule('down') // Switch to next module on click


    // Teleport More component straight to root (body tag)
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