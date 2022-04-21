import React, { useState } from 'react';
import { Badge, Heading, Image, Stack, Text } from '@chakra-ui/react';

import { AnimatePresence, motion } from 'framer-motion';

import Counter from './Counter';

import Uno from '../assets/Uno.jpg';
import Dos from '../assets/Dos.jpg';
import Tres from '../assets/Tres.jpg';
import Cuatro from '../assets/Cuatro.jpg';

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
    const [img, setImg] = useState(Uno);

    const MotionImage = motion(Image);

    const hanldeClick = (e) => {
        const selected = e.target.src;
        setImg(selected);
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
                    <AnimatePresence>
                        <MotionImage
                            src={img}
                            alt="item"
                            w={700}
                            borderRadius={8}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                        />
                    </AnimatePresence>
                </Stack>
                <Stack direction="row" justifyContent="space-around">
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
                    <Text fontSize={17} color="primary.500" fontWeight="700">
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
                            bg="primary.100"
                            color="primary.500"
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
                    <Counter stock={product.stock} product={product} />
                </Stack>
            </Stack>
        </Stack>
    );
};

export default ItemDetail;

/* switch (name) {
    case 'uno':
        setImg(Uno);
        break;
    case 'dos':
        setImg(Dos);
        break;
    case 'tres':
        setImg(Tres);
        break;
    case 'cuatro':
        setImg(Cuatro);
        break;
    default:
        break;
} */
