// Basics
import Image from 'next/image'

// Material-UI
import { Typography } from '@mui/material';

// Widgets
import { Header } from '@/widgets/header'

// Features
import { Column } from '@/features/wrappers';

// Assets
import errorImage from '@/public/images/error.webp';

// Component(s)
const ErrorPage = () => {

    return (
        <Column center stretchY sx={{ background: '#000' }}
        >
            <Header disable={{
                logo: false,
                tabs: true,
                buttons: true
            }} />
            <Typography variant='h3'>Sorry, but we&apos;re unable to find a page you&apos;re looking for!</Typography>
            <Typography variant='h5'>Извините, к сожалению нам не удалось найти страницу, которую вы ищите!</Typography>

            <Image src={errorImage} alt='Error 404' />
        </Column>
    );
}

export default ErrorPage;
