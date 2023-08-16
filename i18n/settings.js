// Variables for locale
export const fallbackLng = 'en'
export const languages = [fallbackLng, 'ru']
export const defaultNS = 'translation'

// Options for locales
export function getOptions(lng = fallbackLng, ns = defaultNS) {
    return {
        // debug: true,
        supportedLngs: languages,
        fallbackLng,
        lng,
        fallbackNS: defaultNS,
        defaultNS,
        ns
    }
}