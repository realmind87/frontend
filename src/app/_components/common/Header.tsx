"use client"

import LoginButton from '../buttons/LoginButton'
import UserInfo from '../info/UserInfo';
import { useApp } from '@/app/hooks/useApp'

const Header = () => {
    const app = useApp();
    
    console.log('header', app)

    return (
        <header className="header">
            <div className='header__inner'>
                <h1 className='logo'>W</h1>
                {!app.session ? <LoginButton /> : <UserInfo />}
            </div>
        </header>
    )
}

export default Header