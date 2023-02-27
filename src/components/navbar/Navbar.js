import './Navbar.scss';
import Products from '../../json/Products.json';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import ClearIcon from '@mui/icons-material/Clear';
import {IconButton, Badge, FormControl} from '@mui/material';
import { useSelector,useDispatch } from 'react-redux';
import {useNavigate} from 'react-router-dom';
import { cartActions } from '../../store/CartSlice';

import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import SearchProducts from '../searchProducts/SearchProducts';
// import FilledInput from '@mui/material/FilledInput';
// import OutlinedInput from '@mui/material/OutlinedInput';

// import FormHelperText from '@mui/material/FormHelperText';
// import TextField from '@mui/material/TextField';
// import Visibility from '@mui/icons-material/Visibility';
// import VisibilityOff from '@mui/icons-material/VisibilityOff';

const Navbar = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [active, setActive] = useState(false);

    const cartProducts = useSelector(state => state.cart.items);
    const cartSearchItems = useSelector(state => state.cart.searchContent);

    const WishListProducts = useSelector(state => state.wishList.items);

    //search
    const handleFilter =(e)=>{
        dispatch(cartActions.ubdateSearch(e.target.value.trim()))
    }

    const handleCartBtn =()=>{
        navigate("/cart")
    }

    const handlClearBtn =()=>{
        setActive(!active);
        dispatch(cartActions.ubdateSearch(""))
    }

    const handleWhishListBtn =()=>{
        navigate("/wishlist")   
    }

    const handleLoginPage =()=>{
        navigate("/login")
    }

  return (
    <header className='header'>
        <div className='container'>
            <div className='navbar'>
                <div className='left'>
                    <h1 className='logo'>CIYASHOP</h1>
                </div>
                <div className='right'>
                    <ul className='li-group'>
                        <li className='list'><NavLink className={({isActive}) => isActive ? "link active" : "link"} to={'/'}>HOME</NavLink></li>
                        <li className='list'><NavLink className={({isActive}) => isActive ? "link active" : "link"} to={'/products'}>SHOP</NavLink></li>
                        <li className='list'><NavLink className={({isActive}) => isActive ? "link active" : "link"} to={'/'}>ABOUT</NavLink></li>
                        <li className='list'><NavLink className={({isActive}) => isActive ? "link active" : "link"} to={'/'}>CONTACT</NavLink></li>
                    </ul>
                    <div className='icons'>
                        <div className='dropdown_wraper'>
                            <IconButton size='small' className='dropdown_toggle_btn' onClick={handlClearBtn}>
                                <SearchIcon/>
                            </IconButton>
                            <div className={`${active ? "dropdown_menu py-4 dropdown_active": "dropdown_menu py-4"}`}>
                                <div className='container px-5'>
                                    <div className='dropdown_inner'>
                                        <div className='lable d-flex justify-content-between'>
                                            <p>What are you Looking for?</p>
                                            <IconButton onClick={handlClearBtn}>
                                                <ClearIcon />
                                            </IconButton>
                                        </div>
                                        <form>
                                            <div className='search_wraper'>
                                            <FormControl className='form_wraper' sx={{ m: 1, width: '25ch' }} variant="standard" >
                                                <Input
                                                    id="standard-adornment-password input"
                                                    placeholder='SEARCH PRODUCTS...'
                                                    value={cartSearchItems}
                                                    onChange={handleFilter}
                                                    endAdornment={
                                                        <InputAdornment position="end">
                                                            <IconButton aria-label="toggle password visibility">
                                                                <SearchIcon/>
                                                            </IconButton>
                                                        </InputAdornment>
                                                    }
                                                />
                                                </FormControl>
                                            </div>
                                        </form>
                                    </div>
                                    {cartSearchItems && <div className='search_results'>
                                        <ul className='search_product_wraper d-flex overflow-hidden'>
                                            {Products.map((product,i)=> 
                                                product.title.toLocaleLowerCase().includes(cartSearchItems) ? (
                                                    <SearchProducts key={i} product={product} setActive={setActive}/>
                                                ):null
                                            )}
                                        </ul>
                                    </div>
                                    }
                                </div>
                            </div>
                        </div>
                        <IconButton size='small' onClick={handleLoginPage}>
                            <PersonOutlineOutlinedIcon/>
                        </IconButton>
                        <IconButton size='small'  aria-label="show 4 new mails" color="inherit" onClick={handleWhishListBtn}>
                            <Badge badgeContent={WishListProducts.length} color="error">
                                <FavoriteBorderIcon/>
                            </Badge>
                        </IconButton>
                        <IconButton size='small' aria-label="show 4 new mails" color="inherit" onClick={handleCartBtn}>
                            <Badge badgeContent={cartProducts.length} color="error">
                                <ShoppingCartOutlinedIcon/>
                            </Badge>
                        </IconButton>
                    </div>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Navbar;