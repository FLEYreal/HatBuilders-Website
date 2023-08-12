// Based imports
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server';

// Import styles
import type { apiResponse } from '@/types/api';

// Get theme value
export async function GET(req: Request, res: Response) {

    // Get cookieStore to work with cookies
    const cookieStore = cookies()
    let theme;

    // Try & Catch construction to catch errors
    try {

        // If there's no cookie "theme", define it with dark theme by default
        if (!cookieStore.get('theme')) cookieStore.set('theme', '1')

        // Get "theme" cookie
        theme = cookieStore.get('theme');

        // Reponse object
        let result: apiResponse = {
            body: { theme: theme },
            status: 'success'
        }

        // Return reponse
        return NextResponse.json(result)
    } catch (e) {

        // Error happened!
        console.error('API ERROR!\nMETHOD: POST,\nROUTE: \"/api/theme\"\nMESSAGE: ', e)

        // Error reponse object
        let result: apiResponse = {
            error: e,
            status: 'error',
            code: 500
        }

        // Reponse error object
        return NextResponse.json(result)
    }
}

// Define new & Change existing theme value
export async function POST(req: Request, res: Response) {
    
    // Get cookieStore to work with cookies
    const cookieStore = cookies()

    // Try & Catch construction to catch errors
    try {
        
        // Get body
        const body = await req.json();

        // Get "value" property from body
        let { value } = body;

        // Set a value for "theme" cookie
        cookieStore.set('theme', value)

        // Reponse object
        let result: apiResponse = {
            status: 'success',
        }

        // Response
        return NextResponse.json(result)
    } catch (e) {
        // Error happened
        console.error('API ERROR!\nMETHOD: POST,\nROUTE: \"/api/theme\"\nMESSAGE: ', e)

        // Error response object
        let result: apiResponse = {
            error: e,
            status: 'error',
            code: 500
        }

        // Return error response
        return NextResponse.json(result)
    }
}

// Delete theme value
export async function DELETE(req: Request, res: Response) {
    
    // Get cookieStore to work with cookies
    const cookieStore = cookies()

    // Try & Catch construction to catch errors
    try {

        // Delete cookies
        cookieStore.delete('theme')

        // Response object
        let result: apiResponse = {
            status: 'success',
        }

        // Return response object
        return NextResponse.json(result)
    } catch (e) {

        // Error happened
        console.error('API ERROR!\nMETHOD: POST,\nROUTE: \"/api/theme\"\nMESSAGE: ', e)

        // Error response object
        let result: apiResponse = {
            error: e,
            status: 'error',
            code: 500
        }

        // Return error response
        return NextResponse.json(result)
    }
}