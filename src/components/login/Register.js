import React from "react";

const Register = () => {
  return (
    <div className="form_wraper">
      <from>
        <div className="form_group mb-3">
          <label>Name</label>
          <input type={"text"} name="name" placeholder="Name" />
        </div>
        <div className="form_group mb-3">
          <label>Email address</label>
          <input type={"email"} name="email" placeholder="Enter email" />
        </div>
        <div className="form_group mb-3">
          <label>Password</label>
          <input type={"password"} name="password" placeholder="Password" />
        </div>
        <div className="form_group mb-3">
          <label>Confirm Password</label>
          <input
            type={"password"}
            name="confirmPasword"
            placeholder="Confirm Password"
          />
        </div>
        <div className="form_login_btn_grp mb-3">
          <button>Register</button>
          <button>cancel</button>
        </div>
      </from>
    </div>
  );
};

export default Register;
