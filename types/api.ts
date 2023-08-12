// Response type, defines the way to return response from the server
export type apiResponse = {

    // Message defines status of response
    status: 'success' 
        | 'fail' 
        | 'error' 
        | 'caught error';

    // Potential message to display
    message?: string

    // Object of properties returned from server
    body?: object;

    // If there is an error, this is typically a text of the error
    error?: Error | string | unknown

    // The code of an error
    code?: number
}