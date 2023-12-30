// UI
export { Wrapper as StepfulWrapper, useModules, StepfulContext } from './ui/wrapper'
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

    // Interface for stepful wrapper parameters
    WrapperInterface as StepfulWrapperInterface,

    StepfulContext as StepfulContextType,
    direction

} from './config/types'