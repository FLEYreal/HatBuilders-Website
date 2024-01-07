import Image from 'next/image'
import errorImage from '@/public/images/error.jpg';
import { Header, Logo } from '@/widgets/header'

const ErrorPage = () => {

return (
    <div style={{ background: 'black', height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
    <Header disable={{
    logo: false,
    tabs: true,
    buttons: true}}/>
    <p>
    Sorry, but we&apos;re unable to find a page you&apos;re looking for
    </p>

        <Image src={errorImage} alt='Error 404'/>
    </div>
);
}

export default ErrorPage;
