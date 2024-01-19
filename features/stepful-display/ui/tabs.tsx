'use client'

// Material-UI
import { Tab, Tabs } from '@mui/material';

// Shared
import { useTranslation } from '@/shared/i18n/client'
import { useLanguage } from '@/shared/i18n/ui/provider';

// Hooks
import { useModules } from './provider';

// Insides
import { type StepfulTabsInterface } from '../config/types'


// Outisde vairables
export const sxTab = {
    fontSize: {
        lg: '12px',
        xl: '15px'
    },
    minWidth: {
        lg: '50px',
        xl: '100px'
    }
}


/**
 * Selectable tabs, list of main modules. When you click, it switches to selected module
 */
export function StepfulTabs({ moduleTheme, ns = 'header', sxChild, sxParent }: StepfulTabsInterface) {

    // CUSTOM VARIABLES & HOOKS
    let { modules, current, switchModule } = useModules(); // Get data from module's context

    let lng = useLanguage(); // Get currentlanguage
    const { t } = useTranslation(lng, ns); // Get translation object


    // HANDLERS
    const handleTabChange = (
        _: React.SyntheticEvent, // Unused
        newValue: number
    ) => {

        // Switch to the provided module by index
        switchModule(newValue);
    };

    
    return (
        <Tabs
            // Value & Change value
            value={current}
            onChange={handleTabChange}

            // Define colors
            textColor={moduleTheme ? moduleTheme[current].color : 'primary'}
            indicatorColor={moduleTheme ?
                moduleTheme[current].color as ('primary' | 'secondary')
                : 'primary'
            }

            // Styles
            sx={sxParent}
        >
            {
                modules.map((_, ind) => {

                    // Setup translatable name for tab, if not, use "main"
                    let translation = 'main';
                    if (moduleTheme && moduleTheme[ind]) translation = moduleTheme[ind].translation

                    return (
                        <Tab
                            key={ind}
                            sx={{
                                ...sxChild,
                                ...sxTab
                            }}
                            label={t(translation)}
                            id={`simple-tab-${ind}`}
                        />
                    )
                })
            }
        </Tabs>
    )
}