// Palette of colors
export const palette = {
    primary: {
        main: '#26F153',
        light: '#6FFF8E',
        dark: '#0DBA33',
    },
    secondary: {
        main: '#EC264A',
        light: '#F84666',
        dark: '#B40F2D'
    },
    info: {
        main: '#03A9F4',
        light: '#1CB8FF',
        dark: '#0288D1'

    },
    warning: {
        main: '#ECB526',
        light: '#FFC93F',
        dark: '#CD9F28'
    },
    error: {
        main: '#D32F2F',
        light: '#EF5350',
        dark: '#B91818'
    },
}

// Duration of transitions
export const transitions = {
    duration: {
        shortest: 75,
        shorter: 100,
        short: 150,
        standard: 100,
        complex: 275,
        enteringScreen: 225,
        leavingScreen: 195,
    }
}

// Breakpoints for responsive layout
export const breakpoints = {
    values: {
        xs: 0,
        sm: 320,
        md: 480,
        lg: 789,
        xl: 1080,
    },
}


// Define styling for typography. Needed to standartized article creation
// This all's been used in Text sort of components.

// /**
//  * This function is for defining styles for typography
//  * 
//  * @param m Define mode. 0 is Dark, 1 is Light Theme
//  * @returns Returns styles for typography relatively the mode currently on
//  */
// export function defineTypography(m: 1 | 0 = 0) {

//     return {
//         // Type: Small Sub-Text
//         // Example: Small Post-Scriptum
//         h6: {
//             color: ['#8C8C8C', '#B9B9B9'][m],
//             fontWeight: '400',
//         },
    
//         // Type: Regular Sub-Text
//         // Example: Small Signs, Sub-Strings, Post-Scriptum
//         h5: {
//             color: ['#8C8C8C', '#B9B9B9'][m],
//             fontWeight: '400',
//         },
    
//         // Type: Small Paragtaph
//         // Example: Signs, Post-Scriptum
//         h4: {
//             color: ['#CECECE', '#505050'][m],
//             fontWeight: '400',
//         },
    
//         // Type: Regular Paragraph
//         // Example: Text of the Article, Buttons
//         h3: {
//             color: ['#CECECE', '#505050'][m],
//             fontWeight: '400',
//         },
    
//         // Type: Small Title
//         // Example: Subtitles, Block's titles
//         h2: {
//             color: ['#FFFFFF', '#000000'][m],
//             fontWeight: '500',
//         },
    
//         // Type: Regular Title
//         // Examples: Logos, Articles' Titles
//         h1: {
//             color: ['#FFFFFF', '#000000'][m],
//             fontWeight: '600',

            
//         },

//         // Type: Link
//         link: {
//             fontWeight: '500',
//             textDecoration: 'underline',
//             color: '#03A9F4',
//             cursor: 'pointer',
//             "&:hover": {
//                 textDecoration: 'none'
//             }
//         },

//         // Type: Button Name
//         button: {
//             fontWeight: '500',
//         },

//         // Type: Big Button Name
//         bigButton: {
//             fontWeight: '600',
//         }
//     }
// }