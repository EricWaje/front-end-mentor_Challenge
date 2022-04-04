import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import {
    Button,
    Image,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Stack,
    Text,
    useDisclosure,
} from '@chakra-ui/react';

const CartModal = ({ onClose, isOpen }) => {
    const { cart, totalCart, clearCart, addCount, substractCount } =
        useContext(CartContext);

    if (cart.length === 0) {
        return (
            <Modal isOpen={isOpen} onClose={onClose} isCentered size="xl">
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Your cart is empty 😢</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody></ModalBody>
                    <ModalFooter>
                        <Button
                            bg="primary.500"
                            color="white"
                            mr={3}
                            onClick={onClose}
                            _hover={{ bg: 'primary.100', color: 'primary.500' }}
                            _active={{
                                bg: 'primary.100',
                                color: 'primary.500',
                            }}
                        >
                            Close
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        );
    }
    return (
        <>
            <Modal isOpen={isOpen} onClose={onClose} isCentered size="xl">
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Checkout 🛒</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        {cart.map((prod) => (
                            <Stack
                                key={prod.id}
                                direction="row"
                                alignItems="center"
                            >
                                <Stack direction="row" flex="1">
                                    <Button
                                        size="xs"
                                        color="primary.500"
                                        bg="secondary"
                                        fontWeight="700"
                                        fontSize={20}
                                        onClick={() => substractCount(prod.id)}
                                        disabled={prod.cantidad === 1}
                                        _focus={{ outline: 'none' }}
                                    >
                                        -
                                    </Button>
                                    <Button
                                        size="xs"
                                        color="primary.500"
                                        bg="secondary"
                                        fontWeight="700"
                                        fontSize={20}
                                        onClick={() => addCount(prod.id)}
                                        disabled={prod.cantidad === prod.stock}
                                        _focus={{ outline: 'none' }}
                                    >
                                        +
                                    </Button>
                                    <Text fontSize={20} width="25px">
                                        {prod.cantidad}u
                                    </Text>
                                    <Text fontSize={20}>$ {prod.price}.- </Text>
                                    <Text
                                        color="primary.400"
                                        fontWeight="700"
                                        fontSize={19}
                                    >
                                        {prod.name}
                                    </Text>
                                </Stack>

                                <Button
                                    size="xs"
                                    bg="red.500"
                                    color="white"
                                    onClick={clearCart}
                                    _hover={{
                                        bg: 'secondary',
                                        color: 'red.500',
                                    }}
                                    _active={{
                                        bg: 'secondary',
                                        color: 'red.500',
                                    }}
                                    fontSize={15}
                                    _focus={{ outline: 'none' }}
                                >
                                    X
                                </Button>
                            </Stack>
                        ))}
                    </ModalBody>

                    <ModalFooter>
                        <Stack
                            direction="row"
                            justifyContent="space-between"
                            alignItems="center"
                            width="100%"
                        >
                            <Text fontWeight="700" fontSize={17}>
                                Total: ${totalCart()}
                            </Text>
                            <Button
                                bg="primary.500"
                                color="white"
                                mr={3}
                                onClick={onClose}
                                _hover={{
                                    bg: 'primary.100',
                                    color: 'primary.500',
                                }}
                                _active={{
                                    bg: 'primary.100',
                                    color: 'primary.500',
                                }}
                                _focus={{ outline: 'none' }}
                            >
                                Close
                            </Button>
                        </Stack>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
};

export default CartModal;
