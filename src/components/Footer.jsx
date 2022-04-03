import { Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <Stack justifyContent="center" alignItems="center" paddingY={2}>
            <Text color="primary.500" fontWeight="700">
                <a target="_blank" href="https://github.com/EricWaje">
                    @EricWaje
                </a>
            </Text>
        </Stack>
    );
};

export default Footer;
