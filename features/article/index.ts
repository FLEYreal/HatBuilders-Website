// UI
export { ArticleBlock } from './ui/block'
export { ArticleSection } from './ui/section'
export { Article } from './ui/article'

// Import Sub-Components separately (Not recommended for real usage)
export { Text } from './ui/block/text'
export { TranslateText } from './ui/block/translate-text'
export { Image } from './ui/block/image'

export { Action } from './ui/block/action'
export { ArticleDivider } from './ui/block/action/divider'

// Types
export type {
    RootInterface,
    InsideInterface,

    ArticleInterface,
    ArticleSectionInterface,
    ArticleBlockInterface,

    TextInterface,
    TranslateTextInterface,

    ActionInterface,
    ActionDividerInterface,
    ImageInterface
} from './types'