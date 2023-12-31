'use client'

// Material-UI
import { Tab, Tabs } from '@mui/material';
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

    let { modules, current, switchModule } = useModules();

    let lng = useLanguage();
    const { t } = useTranslation(lng, ns);

    const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
        switchModule(newValue);
    };

    return (
        <Tabs 
            textColor={moduleTheme ? moduleTheme[current].color : 'primary'} 
            indicatorColor={moduleTheme ? 
                moduleTheme[current].color as ('primary' | 'secondary') 
                : 'primary'
            } 
            value={current} 
            onChange={handleTabChange}
        >
            {
                modules.map((el, ind) => {

                    let translation = 'main';
                    if (moduleTheme && moduleTheme[ind]) translation = moduleTheme[ind].translation

                    return (
                        <Tab
                            key={ind}
                            sx={sxTab}
                            label={t(translation)}
                            id={`simple-tab-${ind}`}
                        />
                    )
                })
            }
        </Tabs>
    )
}