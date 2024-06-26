"use client"

import Image from 'next/image';
import { signOut } from 'next-auth/react';
import { useState, useRef, useEffect } from 'react';
import { BsPersonCircle } from 'react-icons/bs';
import { useApp } from '@/app/hooks/useApp'
import config from '@/config';

const UserInfo = () => {
    const app = useApp();

    console.log(app)

    console.log(app.session)
    

    const [isVisible, setIsVisible] = useState(false);
    const tooltipRef = useRef<HTMLDivElement>(null);
    
    const handleClickOutside = (event: MouseEvent) => {
        if (tooltipRef.current && !tooltipRef.current.contains(event.target as Node)) {
          setIsVisible(false);
        }
    };

    const logOut = () => {
        signOut({redirect: true}).then(() => {
            setIsVisible(false)
        })
    }

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
          document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);


    if (!app.session) {
        return null
    }

    return (
        <div className='user-area' ref={tooltipRef}>
            <button type="button" className='btn-user' onClick={() => setIsVisible(!isVisible)}>
                {
                    app.session && 
                        app.session?.user?.image?.length !== 0 ? (
                            <Image 
                                src={`${app.session?.user?.image}`} 
                                width={32} 
                                height={32} 
                                alt="프로필 이미지" 
                            /> 
                        ) : (
                            <BsPersonCircle size={32} color="#dfdfdf" />
                        )
                }
            </button>
            {isVisible && (
                <div className='user-info'>
                    <ul>
                        <li>
                            <strong className='user-name'>{app.session?.user?.name}</strong>
                        </li>
                        <li></li>
                        <li>
                            <strong>팔로워</strong>
                            <span className='num'>0</span>
                        </li>
                        <li>
                            <strong>팔로우</strong>
                            <span className='num'>0</span>
                        </li>
                    </ul>

                    <button type="button" className="btn-login" onClick={logOut}>로그아웃</button>

                    {/* <button type="button" className="btn-login" onClick={userDelete}>회원탈퇴</button> */}
                </div>
            )}
            
        </div>
    )
}

export default UserInfo