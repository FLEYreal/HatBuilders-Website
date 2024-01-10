// Basics
import Image from 'next/image';

// Widgets
import { HatButton, BigHatButton } from "@/widgets/button";

// Features
import { Article, ArticleBlock } from "@/features/article";

// Assets
import orderBg from '@/public/images/orderBg.png';
import hatbuildersLogo from '@/public/images/secondary-hb-sign.png'
import dc from '@/public/icons/social/discord.svg';
import vk from '@/public/icons/social/vkontakte.svg';

// Styled Components
import {
    StyledWrapper,
    StyledButtonWrapper,
    StyledIconButtonWrapper,
} from './styles';

// Interfaces & Types
interface OrderInterface {
    
}

// Main Component
export function Order({}: OrderInterface) {
    return (

<StyledWrapper textAlign='center' backgroundImage={orderBg.src}>

    <Article align="center" sx={{mt:'80px'}}>

        <ArticleBlock.Image alt="HatBuilders Logo" src={hatbuildersLogo}/>

        <ArticleBlock.Text variant='h4' textAlign='center' sx={{m:'0',color:'white', textShadow: '-1px -1px  black, 1px 1px 0 black, 1px -1px 0 black, -1px  1px 0 black'}}>
            It&apos;s your best time to act!
        </ArticleBlock.Text>

    </Article>

    <Article textAlign='center' align="center" sx={{display:'grid'}}>

        <ArticleBlock.Text  variant='h6' sx={{justifySelf:'center',color:'white', fontWeight:'700', maxWidth:'350px', letterSpacing:'1.5px', textShadow: '-1px -1px 0 black, 1px 1px 0 black, 1px -1px 0 black,-1px 1px 0 black', m:'0 0 15px 0'}} textAlign='center'>
            We don&apos;t know about you yet but it&apos;s your freedom to let us know your idea or will to work! Decide!
        </ArticleBlock.Text>

        <Article textAlign='center' align="center" sx={{mb:'160px', display:'flex'}}>

            <StyledButtonWrapper>

                <BigHatButton sx={{mb:'7px'}} type="dark" color="primary">
                    ORDER
                </BigHatButton>
                
                <BigHatButton type="main" color="secondary">
                    APPLY FOR JOB
                </BigHatButton>

                <ArticleBlock.Text sx={{letterSpacing: '0.1px', fontSize: '10px !important', width:'290px', textShadow: '-1px -1px 0 black, 1px 1px 0 black, 1px  -1px 0 black, -1px  1px 0 black', mt:'5px'}} textAlign='center' variant='h6'>
                    If you&apos;re looking for reviews, you can find them on discord server
                </ArticleBlock.Text>

            </StyledButtonWrapper>

            <div>
            
                <StyledIconButtonWrapper sxStyles={{width: '60px', height: '60px', m:'0', p:'0', display:'block' }}>
                
                    <HatButton sx={{mb:'23px', backgroundColor:'#0077ff'}} variant="contained">
                        <Image src={vk} alt='vkontakte' height={38} width={38}/>
                    </HatButton>

                    <HatButton sx={{ backgroundColor:'#5865f2 '}} variant="contained" >
                        <Image src={dc} alt='discord' height={32} width={32}/>
                    </HatButton>

                </StyledIconButtonWrapper>

            </div>

        </Article>

    </Article>

</StyledWrapper>

)
}