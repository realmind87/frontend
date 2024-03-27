"use client"

import Link from "next/link"
import { IoMdArrowBack } from "react-icons/io";
import LoginForm from "../_components/auth/LoginForm";

const Login = () => {
    
    return (
        <div id="wrap" className="signup">
            <Link href="/" className='btn-back'>
                <IoMdArrowBack size={60} color='#333' />
            </Link>
            <div className="signup-warp">
                <LoginForm />
            </div>
        </div>
    )
}
export default Login;