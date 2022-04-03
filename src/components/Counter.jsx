import React from 'react';
import { Button, Stack, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const Counter = ({ stock, addItem }) => {
    const [count, setCount] = React.useState(1);

    const MotionButton = motion(Button);

    const add = () => {
        count !== stock && setCount(count + 1);
    };

    const substract = () => {
        count !== 1 && setCount(count - 1);
    };
    return (
        <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            maxWidth="100%"
        >
            <Stack
                bg="secondary"
                direction="row"
                alignItems="center"
                borderRadius={8}
            >
                <MotionButton
                    onClick={substract}
                    variant="ghost"
                    color="primary.500"
                    fontWeight="700"
                    fontSize={27}
                    whileTap={{ scale: 1.2 }}
                    _hover={{ bg: 'primary.100' }}
                    _active={{ bg: 'primary.100' }}
                >
                    -
                </MotionButton>
                <Text
                    width="30px"
                    textAlign="center"
                    fontWeight="700"
                    fontSize={18}
                >
                    {count}
                </Text>
                <MotionButton
                    onClick={add}
                    variant="ghost"
                    color="primary.500"
                    fontWeight="700"
                    fontSize={27}
                    whileTap={{ scale: 1.2 }}
                    _hover={{ bg: 'primary.100' }}
                    _active={{ bg: 'primary.100' }}
                >
                    +
                </MotionButton>
            </Stack>
            <Stack flex="1" borderRadius={8}>
                <MotionButton
                    bg="primary.500"
                    color="white"
                    size="md"
                    fontSize={18}
                    _hover={{ bg: 'primary.100', color: 'primary.500' }}
                    _active={{ bg: 'primary.100', color: 'primary.500' }}
                    onClick={() => addItem(count)}
                >
                    Add to cart
                </MotionButton>
            </Stack>
        </Stack>
    );
};

export default Counter;
