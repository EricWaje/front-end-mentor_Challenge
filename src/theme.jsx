import { extendTheme } from '@chakra-ui/react';

export default extendTheme({
    config: {
        initialColorMode: 'light',
    },
    colors: {
        primary: '#ff7d1a',
        secondary: '#ffede0',
        darkBlue: '#eaeaea',
        grayBlue: '#68707d',
        white: '#ffffff',
        black: '#000000',
    },
    fonts: {
        body: 'Kumbh Sans, sans-serif',
    },
});
