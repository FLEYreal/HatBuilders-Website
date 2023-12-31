'use client'

// Basics
import { useState } from 'react';

// Material-UI
import { Tab } from '@mui/material';
import { TabList, TabContext } from '@mui/lab'

// Shared
import { useTranslation } from '@/shared/i18n/client'
import { useLanguage } from '@/shared/i18n/provider';

// Hooks
import { useModules } from './provider';

// Config
import { type StepfulTabsInterface } from '../config/types'

export const sxTab = {
    fontSize: '14px'
}

/**
 * Selectable tabs, list of main modules. When you click, it switches to selected module
 */
export function StepfulTabs({ moduleTheme, ns = 'header' }: StepfulTabsInterface) {

    let { modules, current, setCurrent } = useModules()

    let lng = useLanguage()
    const { t } = useTranslation(lng, ns)

    const handleTabChange = (event: React.SyntheticEvent, newValue: string) => {
        setCurrent(Number(newValue));
    };

    return (
        <TabContext value={String(current)}>
            <TabList onChange={handleTabChange}>
                {
                    modules.map((el, ind) => {

                        let color = 'primary';
                        let translation = 'main';

                        if (moduleTheme && moduleTheme[ind]) {
                            color = moduleTheme[ind].color!
                            translation = moduleTheme[ind].translation
                        }

                        return (
                            <Tab 
                            key={ind} 
                            sx={sxTab} 
                            color={color} 
                            label={t(translation)} 
                            value={String(current)}/>
                        )
                    })
                }
            </TabList>
        </TabContext>
    )
}