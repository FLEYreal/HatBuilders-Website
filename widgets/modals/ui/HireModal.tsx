// Basics
import Image from "next/image"

// Material-UI
import { Box } from '@mui/material'

// Widgets
import { HatModal, HatModalInterface } from "@/widgets/modal"

// Features
import { ArticleBlock } from "@/features/article"
import { Float } from "@/features/animations"

// Insides
import { ChooseSocial } from "./ChooseSocial"

// Assets
import coin from '@/public/images/coin-bg.png'

// Component
export function HireModal({ ...props }: HatModalInterface) {

    return (
        <HatModal

            // Props for modal wrapper
            dialogProps={{
                sx: {
                    width: {
                        md: '480px',
                        lg: '550px',
                        xl: '600px'
                    },
                    margin: 'auto',
                }
            }}

            // Props for wrapper itself
            dialogTitleProps={{
                sx: { position: 'relative' }
            }}

            // Additional props from outside
            {...props}
        >

            {/* Title & Text of a Modal */}
            <ArticleBlock.TranslateText sx={{ color: '#EBB700', textShadow: '0px 0px 40px rgba(235, 183, 0, 0.8)' }} variant="h1" textAlign="center" name="hire_modal_title" ns="modals" />
            <ArticleBlock.TranslateText variant="h3" textAlign="center" name="hire_modal_p1" ns="modals" />
            <ArticleBlock.TranslateText variant="h3" textAlign="center" name="hire_modal_p2" ns="modals" />
            <ArticleBlock.TranslateText variant="h3" textAlign="center" name="hire_modal_p3" ns="modals" />

            {/* Block with social media button and text saying to choose one */}
            <ChooseSocial />


            {/* Part of the code with background items */}
            <Float dur={8}>

                <Box sx={{
                    display: { xs: 'none', md: 'block' },
                    position: "absolute",
                    bottom: { md: '70px', lg: '80px', xl: '120px' },
                    right: { md: '65px', lg: '80px', xl: '80px' }
                }}>
                    <Image style={{ transform: 'rotate(30deg) scale(0.75)', opacity: 0.5 }} alt="Background Coin" src={coin} />
                </Box>

            </Float>

            <Float dur={4}>

                <Box sx={{
                    display: { xs: 'none', md: 'block' },
                    position: "absolute",
                    bottom: { md: '50px', lg: '60px', xl: '85px' },
                    left: { md: '70px', lg: '80px', xl: '85px' },
                }}>
                    <Image style={{ transform: 'rotate(-20deg) scale(0.6)', opacity: 0.5 }} alt="Background Coin" src={coin} />
                </Box>

            </Float>

        </HatModal>
    )
}