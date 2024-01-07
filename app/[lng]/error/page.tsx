import { Image } from 'next/image';

import error from '@/public/images/error.jpg'

const ErrorPage = ({statusCode}) => {
    return(
        <div>
        <p>
            {statusCode? `there was a ${statusCode} error on the server`: 'An error occurred on client'}
        </p>
        {statusCode === 404 && (
            <Image src={error} alt='error 404' width={100} height={100} />
        )
        }
        </div>
    )
}

export default ErrorPage
