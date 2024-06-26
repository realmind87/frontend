import { ChangeEventHandler, FormEventHandler, useState } from "react";
import { signIn } from "next-auth/react";
import Link from "next/link";

interface FormProps {
    setOpen?:  React.Dispatch<React.SetStateAction<boolean>>;
}

type SessionProps = {
    code: number,
    message: string,
}

const Form: React.FC<FormProps> = ({setOpen}) => {
    const [resData, setResData] = useState<SessionProps>({
        code: 0,
        message: "",
    })

    const [formData, setFormData] = useState({
        userID: "", 
        password: ""
    })
    
    const handleInputChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();

        const userID = e.currentTarget.userID.value
        const password = e.currentTarget.password.value

        if (userID.length === 0) {
            setResData({code: 4001, message: '아이디를 입력해 주세요'})
            return;
        }
        
        if (password.length === 0) {
            setResData({code: 4002, message: '비밀번호를 입력해 주세요'})
            return 
        }

        console.log(userID)
        console.log(password)

        
        signIn("credentials", {
            username: userID,
            password: password,
            redirect: true
        })
        
        setOpen?.(false)
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className='login-wrap'>
                <h1>로그인</h1>
                <div className='login-content'>
                    <ul>
                        <li>
                            <input 
                                type="text"
                                name="userID"
                                className={`usr-id ${resData.code === 4001 ? 'wran' : ''}`}
                                placeholder='아이디를 입력해주세요' 
                                onChange={handleInputChange}
                            />
                            {resData.code === 4001 && <p className="txt-warn">{resData.message}</p>}
                        </li>
                        <li>
                            <input
                                type="password"
                                name="password" 
                                className={`usr-password ${resData.code === 4002 ? 'wran' : ''}`} 
                                placeholder='비밀번호를 입력해주세요'
                                onChange={handleInputChange}
                            />
                            {resData.code === 4002 && <p className="txt-warn">{resData.message}</p>}
                        </li>
                    </ul>
                </div>
                <p className='info'>
                    계정이 없으신가요? <Link className='txt-signup' href="/register">가입하기</Link>
                </p>
                <div className='btn-area'>
                    <button type="submit" className='btn-login'>로그인</button>
                </div>
            </div>
        </form>
    )
}

export default Form