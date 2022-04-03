import React, { useContext } from 'react';
import { Divider, Image, Stack, Text } from '@chakra-ui/react';

import Logo from '../assets/logo.svg';
import Avatar from '../assets/avatar.png';
import Cart from '../assets/cart.svg';
import { NavLink } from 'react-router-dom';

import { CartContext } from '../context/CartContext';

const Navbar = () => {
    const { totalUnidades } = useContext(CartContext);

    return (
        <Stack>
            <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                paddingY={7}
            >
                <Stack direction="row" alignItems="center" spacing={9}>
                    <Image src={Logo} />
                    <Text>Collections</Text>
                    <NavLink
                        to="/men"
                        className={({ isActive }) =>
                            isActive ? 'active' : 'inactive'
                        }
                    >
                        <Text>Men</Text>
                    </NavLink>
                    <NavLink
                        to="/women"
                        className={({ isActive }) =>
                            isActive ? 'active' : 'inactive'
                        }
                    >
                        <Text>Women</Text>
                    </NavLink>
                    <Text>About</Text>
                    <Text>Contact</Text>
                </Stack>
                <Stack direction="row" alignItems="center" spacing={6}>
                    <Stack direction="row" alignItems="center">
                        <Stack
                            alignItems="center"
                            justifyContent="center"
                            borderRadius="100%"
                            paddingX={2}
                        >
                            <Text fontWeight="700" color="primary">
                                {totalUnidades()}
                            </Text>
                        </Stack>
                        <Image cursor="pointer" src={Cart} w={5} h={5} />
                    </Stack>
                    <Image
                        boxShadow="0px 0px 8px 1px #ff7d1a"
                        src={Avatar}
                        w={50}
                        borderRadius={100}
                    />
                </Stack>
            </Stack>
            <Divider orientation="horizontal" />
        </Stack>
    );
};

export default Navbar;
