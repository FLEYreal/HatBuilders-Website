// UI
export { Wrapper as StepfulWrapper } from './ui/wrapper'
export { ScrollDots } from './ui/scrollDots'

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
    switchModule as switchModuleType,

    // Interface for stepful wrapper parameters
    WrapperInterface as StepfulWrapperInterface,

} from './config/types'