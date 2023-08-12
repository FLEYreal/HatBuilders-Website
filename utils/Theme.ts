require('dotenv').config();

// Class to work with Theme property
export default class Theme {

    // Get THEME
    static async get() {
        return await fetch(`${process.env.FRONT_PROTOCOL}://${process.env.FRONT_IP}:${process.env.FRONT_PORT}/api/theme`, {
            method: 'GET',
        })
            .then((res) => res.json())
            .then((res) => res);
    }

    // Set THEME
    static async set(value: string) {
        return await fetch(`${process.env.FRONT_PROTOCOL}://${process.env.FRONT_IP}:${process.env.FRONT_PORT}/api/theme`, {
            method: 'POST',
            body: JSON.stringify({value: value})
        })
            .then((res) => res.json())
            .then((res) => res);
    }

    // Delete THEME
    static async delete() {
        return await fetch(`${process.env.FRONT_PROTOCOL}://${process.env.FRONT_IP}:${process.env.FRONT_PORT}/api/theme`, {
            method: 'DELETE'
        })
            .then((res) => res.json())
            .then((res) => res);
    }
}