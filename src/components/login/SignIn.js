import React from 'react'

const SignIn = () => {
  return (
    <div className='form_wraper'>
        <form>
            <div className='form_group mb-3'>
                <label>Email address</label>
                <input type={"email"} name="email" placeholder='Enter email'/>
            </div>
            <div className='form_group mb-3'>
                <label>Password</label>
                <input type={"password"} name="password" placeholder='Password'/>
            </div>
            <div className="form_login_btn_grp mb-3">
                <button>Log in</button>
                <button>cancel</button>
            </div>
        </form>
    </div>
  )
}

export default SignIn