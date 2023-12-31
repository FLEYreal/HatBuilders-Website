// UI
export { Modules as StepfulModules } from './ui/modules'
export { StepfulContext, useModules, Provider as StepfulProvider } from './ui/provider'
export { ScrollDots } from './ui/scrollDots'
export { More } from './ui/more'

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
    
    // Type for switching direction
    direction

} from './config/types'