import React from 'react'
import { Link } from "react-router-dom"
import Logo from "../assets/coursedaddy.png";
import cartLogo from "../assets/shopping-cart.png";
import loginLogo from "../assets/avatar.png"
import AdminLogo from "../assets/setting.png"

const Header = () => {
    return (
        <div className='h-[60px] lg:w-[80%] flex mt-[5px] m-auto max-sm:w-[95%]'>
            <div className='w-[20%] max-sm:w-[40%]'>
                <Link to="/"><img className='h-[50px] ' src={Logo} /></Link>
            </div>
            <div className='w-[40%] h-[40px] max-sm:w-[20%] '>            
            </div>
            <div className='h-[50px] w-[20%] max-sm:w-[40%] flex justify-around'>
                <div> <Link to="/cart"><img className='h-[40px]' title='cart' src={cartLogo} /></Link> </div>
                <div> <Link to="/userlogin"><img className='h-[40px]' src={loginLogo} /></Link></div>
                <div> <Link to="/adminlogin"><img className='h-[40px]' src={AdminLogo} /></Link></div>
            </div>
        </div>
    )
}

export default Header;