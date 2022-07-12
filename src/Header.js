import React from 'react'
import './Header.css';
import img1 from './img/Amazon.jpg';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link, useNavigate } from "react-router-dom";
import { useStateValue } from './StateProvider';
import { auth } from './firebase';
import {
    Button, Menu, MenuButton, MenuDivider, MenuGroup, MenuItem, MenuList, useDisclosure
    , Tooltip,
    Drawer,
    DrawerBody,
    DrawerContent,
    DrawerHeader,
    DrawerOverlay,
    DrawerFooter
} from '@chakra-ui/react';
import AssignmentReturnIcon from '@mui/icons-material/AssignmentReturn';
import DrawerProduct from './cart/DrawerProduct';

function Header() {
    const navigate = useNavigate();
    const [{ wishList, basket, user }, dispatch] = useStateValue();

    const { isOpen, onOpen, onClose } = useDisclosure();

    const handleAuthentication = async () => {
        if (user) {
            await auth.signOut();
        }
        navigate('/login');
    }

    return (
        <div className='header'>
            <>
                <Tooltip hasArrow label='Cart' bg='gray.300' color='black'>
                    <Button colorScheme='pink' onClick={onOpen}>
                        <ShoppingCartIcon className='header-cart-icon' />
                        WISHLIST
                    </Button>
                </Tooltip>
                <Drawer placement='left' onClose={onClose} isOpen={isOpen} size={'sm'}>
                    <DrawerOverlay />
                    <DrawerContent>
                        <DrawerHeader borderBottomWidth='1px'>Cart items</DrawerHeader>
                        <DrawerBody>
                            {
                                wishList.length !== 0? 
                            (wishList.map((item, index) => (
                                <DrawerProduct
                                    iseven={index % 2 == 0 ? true : false}
                                    id={item.id}
                                    title={item.title}
                                    rating={item.rating}
                                    price={item.price}
                                    image={item.image}
                                />
                            ))) :
                            (
                                <p>WishList is Empty</p>
                            )
                        }
                        </DrawerBody>
                        <DrawerFooter borderTopWidth='1px'>
                            <Button variant='outline' mr={3} onClick={onClose}>
                                Close
                            </Button>
                            <Button colorScheme='blue'>{`Total: $${wishList?.reduce((a, b) => a + b.price, 0).toFixed(2)}`}</Button>
                        </DrawerFooter>
                    </DrawerContent>
                </Drawer>
            </>
            <Link to="/">
                <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Emart_Logo.svg/1280px-Emart_Logo.svg.png" />
            </Link>

            <div className='header-nav'>
                <Menu>
                    <MenuButton as={Button} colorScheme='pink'>
                        Profile
                    </MenuButton>
                    <MenuList>
                        <MenuGroup title='Profile'>
                            <Link to='/login'>
                                <MenuItem>
                                    {user ? user.email : "Login"}
                                </MenuItem>
                            </Link>
                            <Link to='/basket'>
                                <MenuItem style={{ justifyContent: "space-between", padding: '0.3rem 0.9rem' }}>
                                    Cart
                                    <div>
                                        <ShoppingCartIcon />
                                        <span className='header-basketcount' >{basket?.length}</span>
                                    </div>
                                </MenuItem>
                            </Link>
                        </MenuGroup>
                        <MenuDivider />
                        <MenuGroup title='Help'>
                            <MenuItem style={{ justifyContent: "space-between", padding: '0.3rem 1.4rem 0.3rem 0.9rem' }}>
                                Return & Orders
                                <AssignmentReturnIcon />
                            </MenuItem>
                            <MenuItem onClick={handleAuthentication}>LOGOUT</MenuItem>
                        </MenuGroup>
                    </MenuList>
                </Menu>

            </div>
        </div>
    )
}

export default Header