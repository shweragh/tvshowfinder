import React, { useEffect, useRef } from "react";
//import {useHistory} from 'react-router-dom'
import { useForm } from 'react-hook-form'
import './index.css'
import logo from './../images/mylogo.png'
function Login() {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => console.log(data);


    return (
        <div>
            <div className="header">
                <a href="http://localhost:3000/login"><img className="header-logo" src={logo} alt="mylogo" /></a>
            </div>
            <div className="cls-form-div">
                <form onSubmit={handleSubmit(onSubmit)} >
                    <input
                        id="userName"
                        type="text"
                        placeholder="Your username"
                        aria-invalid={errors.userName ? "true" : "false"}
                        name="userName"
                        ref={register({ required: true })}
                    />
                    {errors.userName && (
                        <span role="alert">
                            Username is required
                        </span>
                    )
                    }
                    <input
                        id="password"
                        placeholder="Your password"
                        type="text"
                        aria-invalid={errors.password ? "true" : "false"}
                        name="password"
                        ref={register({ required: true })}
                    />
                    {errors.password && (
                        <span role="alert">
                            Password is required
                        </span>
                    )
                    }
                    <input type="submit" value="Login" />
                </form>
            </div>
        </div>
    )

}
export default Login