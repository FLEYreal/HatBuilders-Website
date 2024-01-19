// Basics
import Image from 'next/image'

// Material-UI
import { Box } from '@mui/material'

// Widgets
import { HatModal, HatModalInterface } from "@/widgets/modal"

// Features
import { ArticleBlock } from "@/features/article"

// Insides
import { ChooseSocial } from "./ChooseSocial"

// Assets
import brush from '@/public/images/portfolio-bg-2.png'
import pallete from '@/public/images/portfolio-bg-3.png'

// Component
export function OrderModal({ ...props }: HatModalInterface) {

    return (

        // Props for modal wrapper
        <HatModal
            dialogProps={{
                sx: {
                    width: {
                        md: '480px',
                        lg: '550px',
                        xl: '600px'
                    },
                    margin: 'auto',

                    '& .MuiDialog-paper': {
                        overflow: 'visible',
                        maxWidth: '100%',
                    }
                }
            }}

            dialogTitleProps={{
                sx: {
                    overflow: 'visible'
                }
            }}

            // Additional props from outside
            {...props}
        >

            {/* Title & Text of a Modal */}
            <ArticleBlock.TranslateText sx={{ color: '#FF90A4' }} variant="h1" textAlign="center" name="order_modal_title" ns="modals" />
            <ArticleBlock.TranslateText variant="h3" textAlign="center" name="order_modal_p1" ns="modals" />
            <ArticleBlock.TranslateText variant="h3" textAlign="center" name="order_modal_p2" ns="modals" />
            <ArticleBlock.TranslateText variant="h3" textAlign="center" name="order_modal_p3" ns="modals" />

            {/* Block with social media button and text saying to choose one */}
            <ChooseSocial />


            {/* Part of the code with background items */}
            <Box sx={{
                position: 'absolute',
                top: { xs: '-40px', md: '-60px', lg: '-80px' },
                left: { xs: '-50px', md: '-60px', lg: '-80px' },
                width: { xs: '110px', md: '140px', lg: '200px', xl: '220px' },
                height: { xs: '110px', md: '140px', lg: '200px', xl: '220px' },
            }}>
                <Image style={{
                    width: '100%',
                    height: '100%',
                    transform: 'rotate(190deg) scale(1, -1)'
                }} alt="Background Palette Image" src={pallete} />
            </Box>

            <Box sx={{
                position: 'absolute',
                bottom: { md: '-45px', lg: '-60px' },
                right: { xs: '-45px', md: '-60px', lg: '-90px' },
                width: { xs: '125px', md: '140px', lg: '185px', xl: '220px' },
                height: { xs: '125px', md: '140px', lg: '185px', xl: '220px' },
            }}>
                <Image style={{
                    width: '100%',
                    height: '100%'
                }} alt="Background Brush Image" src={brush} />
            </Box>

        </HatModal>
    )
}