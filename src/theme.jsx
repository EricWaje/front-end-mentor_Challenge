import { extendTheme } from '@chakra-ui/react';

export default extendTheme({
    config: {
        initialColorMode: 'light',
    },
    colors: {
        primary: {
            500: '#ff7d1a',
            400: '#ff7d1ae1',
            300: '#ff7d1ac0',
            200: '#ff7d1a8d',
            100: '#ff7d1a38',
        },
        secondary: '#EDF2F7',
        /*         darkBlue: '#eaeaea',
        grayBlue: '#68707d',
        white: '#ffffff',
        black: '#000000', */
    },
    fonts: {
        body: 'Kumbh Sans, sans-serif',
    },
});
