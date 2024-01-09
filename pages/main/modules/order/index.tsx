import { Article, ArticleBlock } from "@/features/article";
import { HatButton } from "@/widgets/button";
import {
StyledWrapper,
StyledArticle,
StyledText,
StyledButtonWrapper,
StyledIconButtonWrapper,
StyledIconButton,
StyledReviewText,
} from './styles';
import asd from '@/public/images/1.png';
import minecraft from '@/public/images/croped.png';
import dc from '@/public/icons/social/discord.svg';
import vk from '@/public/icons/social/vkontakte.svg';
import styled from "@emotion/styled";
import { Flex } from "@/features/wrappers";
import Image from 'next/image'

export function Order() {
return (
<Flex
    style={{flexDirection: 'column',
	justifyContent:'space-between', backgroundImage: `url(${asd.src})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
	minHeight: '100vh' }}
>
    <Article align="center" sx={{marginTop:'35px'}}>
        <ArticleBlock.Image alt="HatBuilders Logo" src={minecraft}/>
        <ArticleBlock.Text variant='h4' textAlign='center' sx={{ marginTop: '-1px', color: 'white', textShadow: '-1px -1px  black, 1px 1px 0 black, 1px  -1px 0 black, -1px  1px 0 black'}}>It&apos;s your best time to act!</ArticleBlock.Text>
    </Article>

<Article textAlign='center' align="center" sx={{marginBottom:'47px'}} >
	<ArticleBlock.Text  variant='h5' sx={{color:'white', textShadow: '-1px -1px 0 black, 1px 1px 0 black, 1px  -1px 0 black, -1px  1px 0 black'}} textAlign='center' >We don&apos;t know about you yet but it&apos;s your freedom to let us know your idea or will to work! Decide!</ArticleBlock.Text>
	
	<Flex>

	<Flex sxStyles={{color:'white',width:'321px', height: '75px'}} >
        <HatButton variant="contained" type="dark" color="primary" >
		ORDER
        </HatButton>

        <HatButton variant="contained" type="light" color="secondary">
		APPLY FOR JOB
        </HatButton>
	</Flex>

	<Flex style={{flexDirection: 'column'}} sxStyles={{width: '60px', height: '60px', margin:'0', padding:'0'}} >
        <HatButton variant="contained" type="vk" color="info" sx={{marginBottom:'20px'}} >
            <Image src={vk} alt='vkontakte' height={38} width={38} />
        </HatButton>

        <HatButton  variant="contained" type="discord" color="info">
            <Image src={dc} alt='discord' height={32} width={32} />
        </HatButton>

	</Flex>

	</Flex>
	
        <ArticleBlock.Text textAlign='center' variant='h6' >If you&apos;re looking for reviews, you can find them on discord server</ArticleBlock.Text>

</Article>

</Flex>
);
}
