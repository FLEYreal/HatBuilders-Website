// UI
export { Modules as DisplayModules } from './ui/modules'
export { StepfulContext, useModules, Provider as StepfulProvider } from './ui/provider'
export { ScrollDots } from './ui/scroll-dots'
export { More } from './ui/more'
export { StepfulTabs } from './ui/tabs'

// Config
export {

    // Duration of modules
    transitionDur,

    // Animations of transition
    fadeInFromDown,
    fadeOutToUp,
    fadeInFromUp,
    fadeOutToDown

} from './config/animations'

export type {

    // Type for custom function to switch modules
    SwitchModule as SwitchModuleType,

    // Interface for stepful Modules parameters
    ModulesInterface as StepfulModulesInterface,

    // Interface for stepful provider parameters
    ProviderInterface as StepfulProvierInterface,

    // Type for context
    StepfulContext as StepfulContextType,

    // Interface for tabs component parameters
    StepfulTabsInterface,

    // Type for switching direction
    direction

} from './config/types'