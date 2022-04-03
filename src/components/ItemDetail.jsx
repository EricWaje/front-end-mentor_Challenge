import { Badge, Heading, Image, Stack, Text } from '@chakra-ui/react';
import React, { useContext, useState, useCallback } from 'react';

import { AnimatePresence, motion } from 'framer-motion';

import Counter from './Counter';

import Uno from '../assets/Uno.jpg';
import Dos from '../assets/Dos.jpg';
import Tres from '../assets/Tres.jpg';
import Cuatro from '../assets/Cuatro.jpg';
import { CartContext } from '../context/CartContext';

const images = [
    {
        id: 1,
        name: 'uno',
        src: Uno,
    },
    {
        id: 2,
        name: 'dos',
        src: Dos,
    },
    {
        id: 3,
        name: 'tres',
        src: Tres,
    },
    {
        id: 4,
        name: 'cuatro',
        src: Cuatro,
    },
];

const product = {
    id: 1,
    name: 'Fall Limited Edition Sneakers',
    price: 125.0,
    img: images,
    stock: 5,
};

const ItemDetail = () => {
    const { addToCart } = useContext(CartContext);
    const [img, setImg] = useState(Uno);

    const MotionImage = motion(Image);

    const addItem = (cantidad) => {
        addToCart(product, cantidad);
    };

    const hanldeClick = (e) => {
        const { name } = e.target;
        switch (name) {
            case 'uno':
                return setImg(Uno);
            case 'dos':
                return setImg(Dos);
            case 'tres':
                return setImg(Tres);
            case 'cuatro':
                return setImg(Cuatro);
            default:
                break;
        }
    };
    return (
        <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            paddingY={12}
        >
            <Stack paddingX={9}>
                <Stack>
                    <MotionImage
                        src={img}
                        alt="item"
                        w={700}
                        borderRadius={8}
                    />
                </Stack>
                <Stack direction="row" justifyContent="space-evenly">
                    {images.map((image) => (
                        <MotionImage
                            cursor="pointer"
                            key={image.id}
                            name={image.name}
                            src={image.src}
                            onClick={hanldeClick}
                            alt="item"
                            w={100}
                            borderRadius={8}
                            whileHover={{ scale: 1.07 }}
                        />
                    ))}
                </Stack>
            </Stack>
            <Stack paddingX={9}>
                <Stack height="400px" justifyContent="space-around">
                    <Text fontSize={17} color="primary" fontWeight="700">
                        SNEAKER COMPANY
                    </Text>
                    <Heading fontSize={60}>
                        Fall Limited Edition Sneakers
                    </Heading>
                    <Text fontSize={15} maxWidth={450}>
                        These low-profile sneakers are your perfect casual wear
                        companion. Featuring a durable rubber outer sole,
                        they’ll withstand everything the weather can offer.
                    </Text>
                    <Stack direction="row" alignItems="center">
                        <Text fontSize={24} fontWeight="700">
                            $125.00
                        </Text>
                        <Badge
                            bg="secondary"
                            color="primary"
                            fontWeight="700"
                            fontSize={16}
                        >
                            50%
                        </Badge>
                    </Stack>
                    <Text
                        fontSize={14}
                        color="grayBlue"
                        textDecoration="line-through"
                    >
                        $250.00
                    </Text>
                </Stack>
                <Stack>
                    <Counter stock={product.stock} addItem={addItem} />
                </Stack>
            </Stack>
        </Stack>
    );
};

export default ItemDetail;
