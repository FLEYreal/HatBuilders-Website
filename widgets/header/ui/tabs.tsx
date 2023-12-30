'use client'

// Basics
import { useState } from 'react';

// Material-UI
import { Tab, ButtonBaseProps } from '@mui/material';
import { TabList, TabContext } from '@mui/lab'

// Shared
import { useTranslation } from '@/shared/i18n/client'
import { useLanguage } from '@/shared/i18n/provider';

export const sxTab = {
    fontSize: '14px'
}

/**
 * Selectable tabs, list of main modules. When you click, it switches to selected module
 */
export function SelectableTabs({ current = 0, color = 'primary' }: { current?: number, color: ButtonBaseProps['color'] }) {

    const [value, setValue] = useState(String(current))

    let lng = useLanguage()
    const { t } = useTranslation(lng, 'header')

    const handleTabChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    return (
        <TabContext value={value}>
            <TabList onChange={handleTabChange}>
                <Tab sx={sxTab} color={color} label={t('main')} value="0" />
                <Tab sx={sxTab} color={color} label={t('about')} value="1" />
                <Tab sx={sxTab} color={color} label={t('portfolio')} value="2" />
                <Tab sx={sxTab} color={color} label={t('hiring')} value="3" />
                <Tab sx={sxTab} color={color} label={t('order')} value="4" />
            </TabList>
        </TabContext>
    )
}