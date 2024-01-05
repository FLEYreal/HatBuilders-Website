// UI
export { 

    // Provider for language to access all required data
    LanguageProvider, 

    // Hook to get current language
    useLanguage, 

    // Context that keeps current language
    LanguageContext

} from './ui/provider'

// Modal

export { getOptions } from './modal/settings' // Options for translation
export { useTranslation } from './modal' // Hook to get object with all translations