import './Login.scss'
import React, { useState } from 'react'
import ClearIcon from '@mui/icons-material/Clear';
import SignIn from './SignIn';
import Register from './Register';
import { Link } from 'react-router-dom';
import { IconButton } from '@mui/material';
import { useDispatch,useSelector } from 'react-redux';

const LoginPage = () => {

    const loginPage = useSelector(state => state.authentication.isValid)

    const [switchPage,setSwitchPage] = useState(true)

    const handleSignIn=()=>{
        setSwitchPage(true)
    }
    const handleRegister =()=>{
        setSwitchPage(false)
    }
  return (
    <div className='row'>
        <div className='model_login col-lg-5 col-md-8 col-sm-12 col-xl-4 p-2'>
            <div className='model_content'>
                <div className='model_header'>
                    <h5>Sign in Or Register</h5>
                    <IconButton className='clear_btn'>
                        <ClearIcon className='clear_icon'/>
                    </IconButton>
                </div>
                <div className='model_body'>
                    <div className='form_btn_group d-flex justify-content-center'>
                        <div className='form_btn_group_inner'>
                            <button className={`${switchPage ? "btn_active":""}`} onClick={handleSignIn}>SignIn</button>
                            <button className={`${!switchPage ? "btn_active":""}`} onClick={handleRegister}>Register</button>
                        </div>
                    </div>
                    {switchPage ? <SignIn/>:<Register/>}
                    {switchPage ? <p>Don't have account? <Link className='page_change' onClick={()=>setSwitchPage(false)}>Register</Link> here</p>:<p>Already have account? <Link className='page_change' onClick={()=>setSwitchPage(true)}>SignIn</Link> here</p>}
                </div>
            </div>
        </div>
    </div>
  )
}

export default LoginPage